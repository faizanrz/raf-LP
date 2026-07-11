import Image from "next/image";
import { site } from "@/lib/site";

export default function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
        <Image
          src="/img/raf-logo-white.svg"
          alt="RAF Real Estate"
          width={150}
          height={29}
          priority
        />
        <a
          href={`tel:${site.phoneTel}`}
          className="hidden text-[0.8125rem] tracking-[0.14em] text-cream/90 transition-colors hover:text-gold-bright sm:block"
        >
          {site.phoneDisplay}
        </a>
      </div>
    </header>
  );
}
