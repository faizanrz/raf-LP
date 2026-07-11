import { site } from "@/lib/site";

const message = encodeURIComponent(
  "Hello RAF Real Estate, I am interested in Dubai property and would like some more information."
);

/**
 * Floating WhatsApp widget, bottom right. Sits above the mobile sticky CTA
 * bar, and drops to the corner on desktop.
 */
export default function WhatsAppFloat() {
  return (
    <a
      href={`${site.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-20 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_6px_24px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:scale-105 md:bottom-6 md:right-6"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff" aria-hidden>
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 1.8a8.2 8.2 0 1 1-4.2 15.3l-.3-.2-2.9.8.8-2.9-.2-.3A8.2 8.2 0 0 1 12 3.8zm-3.1 4c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.1 0 1.2.9 2.4 1 2.6.1.2 1.8 2.8 4.3 3.9 2.1.9 2.6.7 3 .7.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3l-1.7-.8c-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-.7-.3-1.5-.7-2.3-1.5-.6-.6-1-1.3-1.2-1.6-.1-.2 0-.4.1-.5l.5-.6c.1-.2.1-.3.2-.5s0-.4 0-.5l-.8-1.8c-.2-.4-.4-.4-.5-.4h-.5z" />
      </svg>
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap border border-line bg-ink/95 px-3 py-1.5 text-[0.75rem] tracking-[0.08em] text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block">
        Chat on WhatsApp
      </span>
    </a>
  );
}
