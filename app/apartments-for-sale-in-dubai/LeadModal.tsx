"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ContactRow from "@/components/ContactRow";
import LeadForm from "@/components/LeadForm";

type Props = {
  budgetOptions: string[];
  ctaLabel: string;
  /** Theme and font scope classes for the panel. The modal portals to
      document.body, outside the page's .theme-light/.font-montserrat
      wrapper, so the scopes must be re-applied here. */
  panelScope?: string;
};

export default function LeadModal({ budgetOptions, ctaLabel, panelScope = "" }: Props) {
  const [open, setOpen] = useState(false);

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

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="btn-gold !w-full !py-5 text-center !text-[1.05rem] !font-bold !tracking-[0.12em] sm:!w-auto sm:px-16"
      >
        {ctaLabel}
      </button>

      {open &&
        createPortal(
          <div
            className={`${panelScope} fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6`}
            role="dialog"
            aria-modal="true"
            aria-label="Request a call back"
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="absolute inset-0 cursor-default bg-black/70"
            />
            <div className="relative max-h-full w-full max-w-md overflow-y-auto border border-line bg-ink p-7 text-cream shadow-2xl sm:p-8">
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
              <p className="display-bold pr-8 text-2xl">See what your budget buys</p>
              <p className="mb-6 mt-2 text-sm text-muted">
                Tell us your budget and your plan. We call you back with real prices, in
                pounds.
              </p>
              <LeadForm
                formName="hero"
                buttonLabel={ctaLabel}
                budgetOptions={budgetOptions}
                showPlan
              />
              <div className="mt-4">
                <p className="mb-2 text-[0.78rem] text-muted">Prefer to talk now?</p>
                <ContactRow />
              </div>
              <p className="mt-3 text-[0.78rem] text-muted">
                We are four hours ahead of the UK. Tell us a time and we will call to suit
                you.
              </p>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
