import { site } from "@/lib/site";

const itemClass =
  "flex flex-1 items-center justify-center gap-2 border border-line px-3 py-3.5 text-[0.75rem] uppercase tracking-[0.16em] text-cream transition-colors hover:border-line-gold hover:text-gold-bright";

export default function ContactRow() {
  return (
    <div className="flex flex-col gap-2 sm:flex-row" role="group" aria-label="Contact options">
      <a href={`tel:${site.phoneTel}`} className={itemClass}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        Call now
      </a>
      <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className={itemClass}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 1.8a8.2 8.2 0 1 1-4.2 15.3l-.3-.2-2.9.8.8-2.9-.2-.3A8.2 8.2 0 0 1 12 3.8zm-3.1 4c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.1 0 1.2.9 2.4 1 2.6.1.2 1.8 2.8 4.3 3.9 2.1.9 2.6.7 3 .7.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3l-1.7-.8c-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-.7-.3-1.5-.7-2.3-1.5-.6-.6-1-1.3-1.2-1.6-.1-.2 0-.4.1-.5l.5-.6c.1-.2.1-.3.2-.5s0-.4 0-.5l-.8-1.8c-.2-.4-.4-.4-.5-.4h-.5z" />
        </svg>
        WhatsApp
      </a>
      <a href={site.callbackUrl} className={itemClass}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
        UK hours callback
      </a>
    </div>
  );
}
