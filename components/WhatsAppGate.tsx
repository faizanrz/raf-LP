"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";
import { sendMetaEvent } from "@/lib/metaCapi";
import { site } from "@/lib/site";

/** Any WhatsApp CTA on the page opens the gate by dispatching this event. */
export const OPEN_WHATSAPP_GATE_EVENT = "raf:whatsapp-gate-open";

export type WhatsAppGateDetail = {
  /** Prefilled first message, appended after the visitor's name. */
  message?: string;
  /** Which CTA started it, recorded on the lead as a custom field. */
  source?: string;
};

const DEFAULT_MESSAGE =
  "I am looking at apartments for sale in Dubai and would like to see some options.";

/** Same shape check the LeadNudge widget uses, so we never post a lead it
    would treat as junk: 8 to 15 digits, phone punctuation only. */
function looksLikePhone(v: string) {
  const value = v.trim();
  if (!/^[+()\d\s\-.]{7,24}$/.test(value)) return false;
  const digits = value.replace(/\D/g, "");
  return digits.length >= 8 && digits.length <= 15;
}

/**
 * Gated WhatsApp handoff, mirroring the LeadNudge WhatsApp floater.
 *
 * The floater asks for a name and number, records the lead, fires
 * `WhatsApp_Started`, and only then opens wa.me. An ungated wa.me link skips
 * all of that, so the click never becomes a lead. This gate does the same job
 * for the page's own CTAs:
 *
 *  - the lead is captured by the site-wide LeadNudge snippet, which listens
 *    for the submit-button click, so there is no second copy of LeadNudge's
 *    API contract here to drift out of sync. `data-leadnudge` and the form id
 *    tag it as `whatsapp_cta`, separating it from the floater's
 *    `whatsapp_widget` in the CRM.
 *  - it fires the SAME `WhatsApp_Started` GA4 event name as the floater, so
 *    it lands on the key event / Google Ads conversion RAF already counts.
 *    No new Google Ads setup needed.
 *  - Meta gets a Lead event, which the floater does not send at all.
 *
 * Mount once per page. Every WhatsAppCta button opens this one instance.
 */
export default function WhatsAppGate({ panelScope = "" }: { panelScope?: string }) {
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState<WhatsAppGateDetail>({});
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const onOpen = (e: Event) => {
      setDetail((e as CustomEvent<WhatsAppGateDetail>).detail ?? {});
      setError("");
      setOpen(true);
    };
    window.addEventListener(OPEN_WHATSAPP_GATE_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_WHATSAPP_GATE_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  /**
   * Validate BEFORE anything reaches LeadNudge. Its snippet captures the
   * click on a `button[type=submit]` as well as the submit event, and it
   * listens on document in the capture phase, so a real submit button would
   * post a lead the moment it is clicked, typos included. A plain button plus
   * requestSubmit() means the only capture path left is the submit event,
   * which we fire only once the details are good.
   */
  function onContinue() {
    const form = formRef.current;
    if (!form) return;
    if (!form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    if (!looksLikePhone((data.phone ?? "").trim())) {
      setError("Please enter a valid WhatsApp number.");
      return;
    }
    setError("");
    form.requestSubmit();
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(
      new FormData(e.currentTarget).entries(),
    ) as Record<string, string>;
    const name = (data.name ?? "").trim();
    const phone = (data.phone ?? "").trim();

    // The LeadNudge snippet has already captured this submit and posted the
    // lead with keepalive, so it survives the navigation below.
    const nameParts = name.split(/\s+/);
    sendMetaEvent("Lead", {
      phone,
      first_name: nameParts[0],
      last_name: nameParts.slice(1).join(" "),
    });
    const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
    if (typeof gtag === "function") {
      gtag("event", "WhatsApp_Started", {
        form_id: "raf-whatsapp-cta",
        page_location: window.location.href,
      });
    }

    const text = `Hi RAF, I'm ${name}. ${detail.message ?? DEFAULT_MESSAGE}`;
    const url = `${site.whatsapp}?text=${encodeURIComponent(text)}`;
    // Opened synchronously inside the click gesture, so the popup blocker
    // leaves it alone. Same fallback the LeadNudge widget uses.
    const w = window.open(url, "_blank", "noopener");
    if (!w) window.location.href = url;
    setOpen(false);
  }

  if (!open) return null;

  return createPortal(
    <div
      className={`${panelScope} fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6`}
      role="dialog"
      aria-modal="true"
      aria-label="Message us on WhatsApp"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={() => setOpen(false)}
        className="absolute inset-0 cursor-default bg-black/70"
      />
      <div className="relative max-h-full w-full max-w-sm overflow-y-auto border border-line bg-ink p-7 text-cream shadow-2xl sm:p-8">
        <button
          type="button"
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 p-1 text-muted transition-colors hover:text-cream"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <p className="display-bold pr-8 text-2xl">Chat with us on WhatsApp</p>
        <p className="mb-6 mt-2 text-sm text-muted">
          Leave your name and number and we will continue the conversation on
          WhatsApp.
        </p>
        <form
          ref={formRef}
          id="whatsapp-cta"
          data-leadnudge="whatsapp_cta"
          onSubmit={onSubmit}
          className="grid gap-3"
          aria-label="whatsapp_cta"
        >
          <label className="sr-only" htmlFor="wa-name">Your name</label>
          <input
            id="wa-name"
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className="field"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                onContinue();
              }
            }}
          />

          <label className="sr-only" htmlFor="wa-phone">Your WhatsApp number</label>
          <input
            id="wa-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            defaultValue="+44 "
            placeholder="Your WhatsApp number"
            className="field"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                onContinue();
              }
            }}
          />

          {/* Which CTA started this, mirrored into a field the LeadNudge
              snippet reads. Same sr-only readonly pattern the budget field
              uses. Not visible, not focusable. */}
          <input
            type="text"
            name="source"
            value={detail.source ?? "WhatsApp CTA"}
            readOnly
            tabIndex={-1}
            aria-hidden="true"
            className="sr-only"
          />

          {error && <p className="text-[0.8rem] text-red-400">{error}</p>}

          <button
            type="button"
            onClick={onContinue}
            className="btn-whatsapp mt-1 inline-flex items-center justify-center gap-2.5"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="shrink-0">
              <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 1.8a8.2 8.2 0 1 1-4.2 15.3l-.3-.2-2.9.8.8-2.9-.2-.3A8.2 8.2 0 0 1 12 3.8zm-3.1 4c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.1 0 1.2.9 2.4 1 2.6.1.2 1.8 2.8 4.3 3.9 2.1.9 2.6.7 3 .7.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3l-1.7-.8c-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-.7-.3-1.5-.7-2.3-1.5-.6-.6-1-1.3-1.2-1.6-.1-.2 0-.4.1-.5l.5-.6c.1-.2.1-.3.2-.5s0-.4 0-.5l-.8-1.8c-.2-.4-.4-.4-.5-.4h-.5z" />
            </svg>
            Continue to WhatsApp
          </button>
        </form>
        <p className="mt-3 text-[0.78rem] text-muted">
          We are four hours ahead of the UK, so a message reaches us whenever
          you send it.
        </p>
      </div>
    </div>,
    document.body,
  );
}
