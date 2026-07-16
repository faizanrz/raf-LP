import type { Metadata } from "next";
import ContactRow from "@/components/ContactRow";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank You | RAF Real Estate",
  description: "Your enquiry has been received. A DLD licensed broker will contact you within UK working hours.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-ink text-cream">
      <SiteHeader />
      <WhatsAppFloat />

      <section className="relative flex flex-1 items-center overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(198,166,106,0.08),transparent_55%)]" />
        <div className="relative mx-auto w-full max-w-3xl px-6 py-32 text-center lg:px-8">
          <Reveal>
            <p className="kicker">Enquiry received</p>
            <h1 className="display mt-6 text-5xl leading-[1.05] text-cream sm:text-6xl">
              Thank you.
            </h1>
            <div className="gold-rule mx-auto mt-8" />
            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-cream/85">
              Your enquiry is with a DLD licensed broker, who will contact you within UK
              working hours with the current figures for your budget. No pressure, no chasing,
              one conversation.
            </p>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted">
              If it is urgent, or you would rather talk now:
            </p>
            <div className="mx-auto mt-8 max-w-md">
              <ContactRow />
            </div>
            <p className="mt-10 text-sm text-muted">
              {site.brand} · {site.dldLicence} · {site.reraOrn}
            </p>
          </Reveal>
        </div>
      </section>

      <SiteFooter
        links={[
          { href: "/dubai-villas-for-sale/", label: "Villas for sale in Dubai" },
          { href: "/buying-property-in-dubai-from-uk/", label: "Buying property in Dubai from the UK" },
          { href: "/risks-of-buying-property-in-dubai/", label: "The risks of buying property in Dubai" },
        ]}
      />
    </main>
  );
}
