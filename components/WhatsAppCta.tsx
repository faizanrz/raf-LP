"use client";

import { OPEN_WHATSAPP_GATE_EVENT, type WhatsAppGateDetail } from "./WhatsAppGate";

type Props = {
  label?: string;
  /** Prefilled first message, so the advisor sees what started the chat. */
  message?: string;
  /** Which CTA this is, recorded on the lead. */
  source?: string;
  className?: string;
};

/**
 * WhatsApp CTA. Opens the WhatsAppGate rather than linking straight to wa.me:
 * a raw wa.me link hands the visitor off with nothing recorded, so the click
 * never becomes a lead. The gate takes a name and number first, exactly like
 * the LeadNudge WhatsApp floater, then opens the chat.
 */
export default function WhatsAppCta({
  label = "Message us on WhatsApp",
  message,
  source = "WhatsApp CTA",
  className = "",
}: Props) {
  const detail: WhatsAppGateDetail = { message, source };
  return (
    <button
      type="button"
      onClick={() =>
        window.dispatchEvent(new CustomEvent(OPEN_WHATSAPP_GATE_EVENT, { detail }))
      }
      className={`btn-whatsapp inline-flex items-center justify-center gap-2.5 ${className}`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="shrink-0">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 1.8a8.2 8.2 0 1 1-4.2 15.3l-.3-.2-2.9.8.8-2.9-.2-.3A8.2 8.2 0 0 1 12 3.8zm-3.1 4c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.1 0 1.2.9 2.4 1 2.6.1.2 1.8 2.8 4.3 3.9 2.1.9 2.6.7 3 .7.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3l-1.7-.8c-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-.7-.3-1.5-.7-2.3-1.5-.6-.6-1-1.3-1.2-1.6-.1-.2 0-.4.1-.5l.5-.6c.1-.2.1-.3.2-.5s0-.4 0-.5l-.8-1.8c-.2-.4-.4-.4-.5-.4h-.5z" />
      </svg>
      {label}
    </button>
  );
}
