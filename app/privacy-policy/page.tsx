import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | RAF Real Estate",
  description:
    "How RAF Real Estate collects, uses and protects your personal data, including our use of Meta and Google advertising and analytics tools.",
  alternates: { canonical: "/privacy-policy/" },
};

const LAST_UPDATED = "1 September 2026";

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="display mt-14 text-3xl leading-snug text-cream first:mt-0">{children}</h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-5 leading-relaxed text-cream/80">{children}</p>;
}

function UL({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mt-5 list-disc space-y-2 pl-5 leading-relaxed text-cream/80 marker:text-gold-bright">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

function Ext({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gold-bright underline decoration-gold-bright/40 underline-offset-4 transition-colors hover:decoration-gold-bright"
    >
      {children}
    </a>
  );
}

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-ink text-cream">
      <SiteHeader />

      <section className="border-b border-line">
        <div className="mx-auto max-w-3xl px-6 pb-24 pt-32 lg:px-8">
          <p className="kicker">Legal</p>
          <h1 className="display mt-6 text-5xl leading-[1.05] text-cream sm:text-6xl">
            Privacy Policy
          </h1>
          <div className="gold-rule mt-8" />
          <p className="mt-6 text-sm text-muted">Last updated: {LAST_UPDATED}</p>

          <div className="mt-12 text-[0.9375rem]">
            <H2>Who we are</H2>
            <P>
              This website is operated by {site.brand} ({site.dldLicence}, {site.reraOrn}), a
              real estate brokerage based in Dubai, United Arab Emirates. This policy explains
              what personal data we collect through this website, how we use it, who we share
              it with, and the choices you have. It covers all pages on this site, including
              our property landing pages and enquiry forms.
            </P>
            <P>
              You can contact us about anything in this policy by phone or WhatsApp on{" "}
              <a href={`tel:${site.phoneTel}`} className="text-gold-bright">
                {site.phoneDisplay}
              </a>
              .
            </P>

            <H2>What we collect</H2>
            <P>When you submit an enquiry form or start a WhatsApp conversation, we collect:</P>
            <UL
              items={[
                "Your name, phone number and, where the form asks for it, your email address.",
                "The details of your enquiry: your budget range, whether you are buying to live in or to invest, and anything you write in the optional message field.",
                "Context about how you reached us: the page you enquired from, the search keyword and ad group where the visit came from a paid ad, and ad click identifiers such as the Google click ID (gclid).",
              ]}
            />
            <P>
              When you browse the site, we and our advertising partners also collect technical
              data automatically: your IP address, device and browser type, the pages you view,
              and cookie or local storage identifiers described below. We also generate a
              random first-party identifier, stored in your browser, so that repeat visits can
              be recognised without relying on third-party cookies.
            </P>

            <H2>How we use your data</H2>
            <UL
              items={[
                "To respond to your enquiry: a licensed broker contacts you using the details you provide.",
                "To manage leads: enquiries are stored in our customer relationship management system so we can follow up properly and avoid contacting you twice about the same thing.",
                "To measure and improve advertising: we report enquiries back to Google and Meta as conversions, so we can see which ads work and stop spending on ones that do not.",
                "To improve the site: aggregated analytics tell us which pages and sections visitors actually use.",
              ]}
            />

            <H2>Advertising and analytics partners</H2>
            <P>
              We use tools from Google and Meta on every page of this site. Both companies act
              as independent data controllers for the data they collect through these tools,
              under their own privacy policies.
            </P>

            <h3 className="mt-8 font-medium text-cream">Google (Analytics and Ads)</h3>
            <P>
              We use Google Analytics 4 and Google Ads conversion tracking (the Google tag) to
              measure visits, enquiries, and clicks on our phone and WhatsApp links. Google
              sets cookies (such as _ga) and receives technical data including your IP address
              and ad click identifiers. Where you arrived from a Google ad, this data is used
              to attribute your enquiry to the ad you clicked. Google&apos;s use of this data
              is described in the{" "}
              <Ext href="https://policies.google.com/privacy">Google Privacy Policy</Ext> and
              in{" "}
              <Ext href="https://policies.google.com/technologies/partner-sites">
                How Google uses information from sites that use its services
              </Ext>
              . You can opt out of Google Analytics with the{" "}
              <Ext href="https://tools.google.com/dlpage/gaoptout">
                Google Analytics opt-out browser add-on
              </Ext>{" "}
              and control ad personalisation at{" "}
              <Ext href="https://adssettings.google.com">Google Ads Settings</Ext>.
            </P>

            <h3 className="mt-8 font-medium text-cream">Meta (Facebook and Instagram)</h3>
            <P>
              We use the Meta Pixel and the Meta Conversions API to measure enquiries from our
              Facebook and Instagram advertising and to build advertising audiences. This
              means:
            </P>
            <UL
              items={[
                <>
                  Meta sets cookies (such as _fbp) and receives data about the pages you view
                  on this site.
                </>,
                <>
                  When you submit an enquiry, we send the event to Meta from both your browser
                  and our server. Contact details included in these events (email address,
                  phone number, name) are hashed before they reach Meta, which uses them only
                  to match the event to a Meta account for measurement and audience purposes.
                </>,
                <>
                  We may use this data to create Custom Audiences and Lookalike Audiences, so
                  our ads reach people similar to those who have enquired with us, and to
                  show relevant ads to people who have visited this site.
                </>,
              ]}
            />
            <P>
              Meta&apos;s use of this data is described in the{" "}
              <Ext href="https://www.facebook.com/privacy/policy/">Meta Privacy Policy</Ext>.
              You can control how Meta uses data from partners like us in your{" "}
              <Ext href="https://www.facebook.com/adpreferences/">Meta ad preferences</Ext>,
              and review activity shared with Meta in{" "}
              <Ext href="https://www.facebook.com/off_facebook_activity/">
                Off-Facebook Activity
              </Ext>
              . If you contact us on WhatsApp, that conversation is also subject to the{" "}
              <Ext href="https://www.whatsapp.com/legal/privacy-policy">
                WhatsApp Privacy Policy
              </Ext>
              .
            </P>

            <h3 className="mt-8 font-medium text-cream">Lead management</h3>
            <P>
              Enquiries submitted through this site are delivered and stored using LeadNudge,
              a lead capture and CRM platform that processes this data on our behalf and on
              our instructions. We may also receive enquiry notifications by email.
            </P>

            <H2>Cookies and similar technologies</H2>
            <P>The identifiers used on this site are:</P>
            <UL
              items={[
                <>
                  <span className="text-cream">_ga and related Google cookies</span>: Google
                  Analytics and Google Ads measurement.
                </>,
                <>
                  <span className="text-cream">_fbp and related Meta cookies</span>: Meta ad
                  measurement and audiences.
                </>,
                <>
                  <span className="text-cream">raf_ext_id</span>: a random first-party
                  identifier we generate and store in your browser&apos;s local storage so
                  conversion events can be matched across visits. It contains no personal
                  details.
                </>,
                <>
                  <span className="text-cream">raf_lead_pii</span>: after you submit an
                  enquiry, the details you entered are kept in your browser&apos;s local
                  storage so later events on this device can be matched to your enquiry. This
                  data stays in your browser and is hashed before any of it is sent to Meta.
                </>,
              ]}
            />
            <P>
              You can clear or block these at any time through your browser settings. Clearing
              your browsing data removes both local storage entries.
            </P>

            <H2>Legal bases and international transfers</H2>
            <P>
              Where UK or EU data protection law applies to you, we rely on legitimate
              interests to respond to enquiries you initiate and to measure our advertising,
              and on consent where the law requires it for advertising cookies and audience
              building. We are based in the United Arab Emirates, so data you submit is
              transferred to and processed in the UAE, and by Google and Meta in the countries
              where they operate, including the United States.
            </P>

            <H2>How long we keep your data</H2>
            <P>
              We keep enquiry details for as long as needed to handle your enquiry and for a
              reasonable period afterwards for follow-up and record keeping. If you tell us
              you are no longer interested, we stop contacting you. Analytics and advertising
              data is retained according to Google&apos;s and Meta&apos;s own retention
              schedules.
            </P>

            <H2>Your rights</H2>
            <P>
              Depending on where you live, including under the UK GDPR and the UAE Personal
              Data Protection Law, you can ask us to:
            </P>
            <UL
              items={[
                "Tell you what personal data we hold about you and give you a copy.",
                "Correct data that is wrong or incomplete.",
                "Delete your data, including removing you from our advertising audiences.",
                "Stop contacting you for marketing at any time.",
              ]}
            />
            <P>
              To exercise any of these, contact us on{" "}
              <a href={`tel:${site.phoneTel}`} className="text-gold-bright">
                {site.phoneDisplay}
              </a>{" "}
              or reply to any message we have sent you. If you are in the UK and are unhappy
              with how we have handled your data, you can complain to the{" "}
              <Ext href="https://ico.org.uk">Information Commissioner&apos;s Office</Ext>.
            </P>

            <H2>Changes to this policy</H2>
            <P>
              We update this policy when our tools or practices change, and the date at the
              top reflects the latest version. Material changes will be visible on this page.
            </P>
          </div>
        </div>
      </section>

      <SiteFooter
        links={[
          { href: "/dubai-villas-for-sale/", label: "Villas for sale in Dubai" },
          { href: "/apartments-for-sale-in-dubai/", label: "Apartments for sale in Dubai" },
          { href: "/buying-property-in-dubai-from-uk/", label: "Buying property in Dubai from the UK" },
          { href: "/risks-of-buying-property-in-dubai/", label: "The risks of buying property in Dubai" },
        ]}
      />
    </main>
  );
}
