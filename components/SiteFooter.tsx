import Image from "next/image";
import { site } from "@/lib/site";

type Props = {
  links: { href: string; label: string }[];
  fxNote?: string; // page-specific currency basis, overrides the site default
};

export default function SiteFooter({ links, fxNote }: Props) {
  return (
    <footer className="border-t border-line bg-ink-2">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Image src="/img/raf-logo-white.svg" alt="RAF Real Estate" width={130} height={25} />
            <p className="mt-4 max-w-xs text-sm text-muted">
              {site.dldLicence} · {site.reraOrn}
            </p>
            <a
              href={`tel:${site.phoneTel}`}
              className="mt-2 inline-block text-sm text-cream transition-colors hover:text-gold-bright"
            >
              Enquiries: {site.phoneDisplay}
            </a>
          </div>
          <nav className="flex flex-col gap-2" aria-label="Related pages">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted transition-colors hover:text-gold-bright"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-12 border-t border-line pt-8">
          <p className="max-w-4xl text-[0.8125rem] leading-relaxed text-muted">
            The value of property investments can fall as well as rise, and past performance is
            not a guide to future results. Any projection shown to you will state the basis on
            which it was calculated. {fxNote ?? site.fxNote}
          </p>
          <p className="mt-4 text-[0.8125rem] text-muted/70">
            © {new Date().getFullYear()} RAF Real Estate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
