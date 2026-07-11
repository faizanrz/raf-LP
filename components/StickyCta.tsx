"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

/**
 * Persistent conversion bar. Slides in once the visitor scrolls past the hero:
 * a slim top bar on desktop, a thumb-reach bottom bar on mobile.
 * Same single conversion goal: the lead form (or a call).
 */
export default function StickyCta({ ctaLabel = "Get prices & availability" }: { ctaLabel?: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop: top bar */}
      <div
        className={`fixed inset-x-0 top-0 z-40 hidden border-b border-line bg-ink/92 backdrop-blur-md transition-transform duration-500 md:block ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3 lg:px-8">
          <img src="/img/raf-logo-white.svg" alt="RAF Real Estate" width={110} height={21} />
          <div className="flex items-center gap-6">
            <a
              href={`tel:${site.phoneTel}`}
              className="text-[0.8125rem] tracking-[0.12em] text-cream/85 transition-colors hover:text-gold-bright"
            >
              {site.phoneDisplay}
            </a>
            <a
              href="#get-prices"
              className="btn-gold !w-auto px-6 !py-2.5 text-center !text-[0.72rem]"
            >
              {ctaLabel}
            </a>
          </div>
        </div>
      </div>

      {/* Mobile: bottom bar */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ink/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md transition-transform duration-500 md:hidden ${
          show ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex items-stretch gap-2 px-3 py-2.5">
          <a
            href={`tel:${site.phoneTel}`}
            aria-label="Call now"
            className="flex w-12 items-center justify-center border border-line text-cream"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex w-12 items-center justify-center border border-line text-cream"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 1.8a8.2 8.2 0 1 1-4.2 15.3l-.3-.2-2.9.8.8-2.9-.2-.3A8.2 8.2 0 0 1 12 3.8zm-3.1 4c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.1 0 1.2.9 2.4 1 2.6.1.2 1.8 2.8 4.3 3.9 2.1.9 2.6.7 3 .7.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3l-1.7-.8c-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-.7-.3-1.5-.7-2.3-1.5-.6-.6-1-1.3-1.2-1.6-.1-.2 0-.4.1-.5l.5-.6c.1-.2.1-.3.2-.5s0-.4 0-.5l-.8-1.8c-.2-.4-.4-.4-.5-.4h-.5z" />
            </svg>
          </a>
          <a href="#get-prices" className="btn-gold flex-1 !py-3 text-center !text-[0.72rem]">
            {ctaLabel}
          </a>
        </div>
      </div>
    </>
  );
}
