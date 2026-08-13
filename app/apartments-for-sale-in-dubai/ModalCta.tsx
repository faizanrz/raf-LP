"use client";

import { OPEN_LEAD_MODAL_EVENT } from "./LeadModal";

type Props = {
  label: string;
  className?: string;
};

/** CTA button that opens the page's lead-form modal instead of anchoring. */
export default function ModalCta({ label, className }: Props) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(OPEN_LEAD_MODAL_EVENT))}
    >
      {label}
    </button>
  );
}
