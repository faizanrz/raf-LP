import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LeadModal from "../apartments-for-sale-in-dubai/LeadModal";
import ModalCta from "../apartments-for-sale-in-dubai/ModalCta";
import RafVideo from "../apartments-for-sale-in-dubai/RafVideo";
import ContactRow from "@/components/ContactRow";
import LeadForm from "@/components/LeadForm";
import ParallaxImg from "@/components/ParallaxImg";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import StickyCta from "@/components/StickyCta";
import WhatsAppCta from "@/components/WhatsAppCta";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Off-Plan Property in Dubai | Payment Plans for UK Buyers",
  description:
    "Buy off-plan property in Dubai on a payment plan: 20% on booking, staged instalments through construction, the balance at completion. Funds protected in government-regulated escrow. Prices in pounds for UK buyers.",
  alternates: { canonical: "/off-plan-property-in-dubai/" },
  openGraph: {
    title: "Off-Plan Property in Dubai | Payment Plans for UK Buyers",
    description:
      "Buy off-plan property in Dubai on a payment plan: 20% on booking, staged instalments, balance at completion, funds in government-regulated escrow. Prices in pounds.",
    url: "/off-plan-property-in-dubai/",
    images: [{ url: "/img/hero-apartments-1920.webp", width: 1920, height: 1121 }],
  },
};

/*
  Dedicated landing page for the "Off-Plan & Payment Plan" Google Ads ad
  group, built Sept 2026 after the review flagged a 2/10 Quality Score on the
  apartments page for this keyword set. Every beat is built around off-plan +
  payment plan intent: the payment structure is the hero, escrow protection
  and the "off-plan is not a discount" point sit high, the instalments FAQ
  leads the FAQ list, and the three projects are compared by payment plan.
  Same conversion machinery as the apartments LP: one modal, CTA pair
  everywhere, closing inline form, no response-time promises, no price
  anchors beyond figures confirmed in raf-apartments-lp-copy-v2.md.
  GBP basis: £1 = AED 4.93 (21 July 2026), stated in the footer fxNote.
*/

const CTA = "Request a call back";

const planSteps = [
  {
    figure: "20%",
    head: "On booking",
    body: "Paid when you reserve the unit, into the project's government-regulated escrow account, never to the developer directly.",
  },
  {
    figure: "Staged",
    head: "Instalments through construction",
    body: "Spread across the build, typically tied to construction milestones. The exact schedule is fixed in your sale agreement before you sign.",
  },
  {
    figure: "30% to 50%",
    head: "On completion",
    body: "The balance is due at handover, when the building is finished and you take the keys. The completion share varies project to project.",
  },
];

const callItems = [
  {
    title: "The payment plan, mapped to your cash flow",
    body: "Booking amount, every instalment date and the completion balance, in pounds, laid against when you would actually pay them. You see the full schedule before you commit to anything.",
  },
  {
    title: "The escrow and developer check",
    body: "Which escrow account the project pays into, the developer's completion track record, and what the DLD's project register says about construction progress.",
  },
  {
    title: "Off-plan against ready, compared honestly",
    body: "We price the off-plan unit against a comparable ready apartment in the same community, so you can see what the payment plan is really costing or saving you.",
  },
  {
    title: "The full cost to the pound",
    body: "Purchase price, DLD transfer fee, commission, registration. The complete acquisition figure, not just the headline price.",
  },
];

/* Payment plan comparison, per the ads review: the three projects side by
   side on booking share, instalment structure and completion share. Figures
   match the project data on the apartments LP. */
const projects = [
  {
    area: "Jumeirah Village Circle",
    name: "113 Residences",
    dev: "IMAN Developers · Completion Q2 2029",
    img: "/img/apt-113-900.webp",
    alt: "Bronze balconies of 113 Residences",
    booking: "20%",
    instalments: "Staged through construction",
    completion: "50%",
    sizes: "1 to 4 bedroom apartments and duplexes, 1BR from £365,000",
    note: "The largest completion balance of the three, traded for the strongest resale market: JVC is Dubai's second most-traded apartment community, so there is a real market to sell back into.",
  },
  {
    area: "Motor City",
    name: "Sierra",
    dev: "IMAN Developers · Completion Q2 2029",
    img: "/img/apt-sierra-900.webp",
    alt: "Sierra's landscaped amenity deck with pools and courts",
    booking: "20%",
    instalments: "Staged through construction",
    completion: "40%",
    sizes: "Studios to 4BR duplexes, prices confirmed on enquiry",
    note: "The lowest entry price of the three, and the middle completion balance. Studios here are the cheapest way onto a Dubai payment plan through us.",
  },
  {
    area: "Mohammed Bin Rashid City",
    name: "Everly Place",
    dev: "Ellington · Beside the Meydan Horizon lagoon",
    img: "/img/apt-everly-900.webp",
    alt: "Everly Place beside the Meydan Horizon lagoon at dusk",
    booking: "20%",
    instalments: "Staged instalments",
    completion: "30%",
    sizes: "1BR to 3BR plus study, prices confirmed on enquiry",
    note: "The premium option, with the gentlest completion balance: more of the price is spread through construction and less lands at handover.",
  },
];

const faq = [
  {
    q: "Can I buy off-plan property in Dubai and pay in instalments?",
    a: "Yes. Off-plan property in Dubai is normally sold on a payment plan: a deposit on booking, staged instalments through construction, and the balance on completion. On our current projects that means 20% on booking with 30% to 50% due at handover, depending on the project. We walk you through each schedule, in pounds, on the call.",
  },
  {
    q: "Is my money safe while the building goes up?",
    a: "Off-plan buyer funds in Dubai are paid into escrow accounts regulated by the Dubai Land Department, not to the developer directly. The developer draws funds against certified construction progress. It is one of the stronger buyer protections in any off-plan market, and we show you the specific escrow arrangement on any project you consider.",
  },
  {
    q: "Is off-plan cheaper than buying a ready apartment?",
    a: "Not automatically. In 2026, off-plan apartments often cost 10% to 18% more than a comparable ready unit. What the payment plan buys you is time: your capital goes in over years rather than on day one, and you buy at today's price in a rising market. We run the off-plan versus ready comparison for you before you commit.",
  },
  {
    q: "What happens if the project is delayed?",
    a: "Handover dates on off-plan projects can move, and a realistic buyer plans for that. The escrow system ties the developer's access to your money to certified construction progress, and the DLD tracks every registered project's status publicly. Part of our job is checking the developer's delivery record before you book, and both developers on our current projects are established names.",
  },
  {
    q: "Can UK citizens buy off-plan in Dubai?",
    a: "Yes. UK nationals can buy off-plan property in Dubai's designated freehold areas with full ownership, and no UAE residency or visa is required. The purchase is registered with the Dubai Land Department in your name from the start.",
  },
  {
    q: "What does it cost on top of the purchase price?",
    a: "Budget roughly 6% to 8% on top of the price for transaction costs, the largest being the 4% DLD transfer fee. There is no stamp duty in the UK sense and no annual property tax. We give you the complete figure to the pound on the call, for the specific unit.",
  },
];

/* Both actions, always side by side and the same size, matching the
   apartments LP. */
function CtaPair({
  center = false,
  spacing = "mt-10",
}: {
  center?: boolean;
  spacing?: string;
}) {
  return (
    <div
      className={`${spacing} flex flex-col gap-3 sm:flex-row sm:items-center ${
        center ? "sm:justify-center" : ""
      }`}
    >
      <ModalCta
        label={CTA}
        className="btn-gold !w-full !py-4 text-center !text-[0.8rem] sm:!w-auto sm:whitespace-nowrap sm:px-12"
      />
      <WhatsAppCta className="!w-full !py-4 !text-[0.8rem] sm:!w-auto sm:whitespace-nowrap sm:!px-10" />
    </div>
  );
}

function CtaButton({ center = false }: { center?: boolean }) {
  return <CtaPair center={center} spacing="mt-12" />;
}

export default function Page() {
  return (
    <main className={`${inter.variable} font-inter theme-light bg-ink pb-16 text-cream md:pb-0`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <StickyCta ctaLabel={CTA} modalEvent="raf:lead-modal-open" />

      {/* ============ 1. HERO ============ */}
      {/* The payment structure IS the hero, per the ads review: the visitor
          sees how paying works before anything else. */}
      <section className="section-dark relative flex min-h-[100svh] items-center overflow-hidden text-cream">
        <SiteHeader />
        <div className="absolute inset-0 overflow-hidden">
          <div className="hero-zoom absolute inset-0">
            <ParallaxImg
              src="/img/hero-apartments-1920.webp"
              srcSet="/img/hero-apartments-960.webp 960w, /img/hero-apartments-1920.webp 1920w"
              sizes="100vw"
              alt="Boutique apartment building beside a lagoon at dusk"
              className="h-full w-full object-cover"
              fetchPriority="high"
              drift={70}
            />
          </div>
          <div className="absolute inset-0 bg-ink/80" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-20 pt-28 text-center">
          <Reveal>
            <p className="text-[0.85rem] font-semibold uppercase tracking-[0.3em] text-gold-bright sm:text-[0.95rem]">
              RAF Real Estate · DLD licensed brokerage
            </p>
            <h1 className="display-bold mt-6 text-5xl text-cream sm:text-6xl lg:text-7xl">
              Buy Off-Plan Property in Dubai{" "}
              <span className="text-gold-bright">on a Payment Plan</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-xl font-medium text-cream sm:text-2xl">
              20% on booking, staged instalments through construction, the balance at
              completion. Freehold for UK buyers, no residency required, and every payment
              protected in a government-regulated escrow account.
            </p>
            <div className="mx-auto mt-10 flex max-w-2xl flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <LeadModal
                ctaLabel={CTA}
                triggerClassName="btn-gold !w-full !py-5 text-center !text-[0.95rem] !font-bold !tracking-[0.12em] sm:!w-auto sm:px-12"
                panelScope={`${inter.variable} font-inter theme-light`}
              />
              <WhatsAppCta className="!w-full !py-5 !text-[0.95rem] !font-bold !tracking-[0.12em] sm:!w-auto sm:!px-12" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 2. HOW THE PAYMENT PLAN WORKS ============ */}
      <section className="border-b border-line bg-ink-2">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <Reveal>
            <p className="kicker">The structure, upfront</p>
            <h2 className="display-bold mt-4 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
              How a Dubai payment plan works
            </h2>
            <p className="mt-6 max-w-2xl text-muted">
              Off-plan means you buy before the building is finished, and the price is paid
              in stages rather than in one sum. Every plan follows the same three-part
              shape.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line lg:grid-cols-3">
            {planSteps.map((s, i) => (
              <Reveal key={s.head} delay={i * 0.07} className="bg-panel p-8">
                <p className="display-bold price text-4xl text-gold-bright sm:text-5xl">
                  {s.figure}
                </p>
                <h3 className="display-bold mt-4 text-xl text-cream">{s.head}</h3>
                <p className="mt-3 text-[0.92rem] text-muted">{s.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-3xl text-muted">
              So on a £365,000 one-bedroom, the booking payment is £73,000, not the full
              price. The rest goes in over the years the building takes to rise, and you
              own the unit freehold from registration. We map the exact schedule to your
              cash flow on the call.
            </p>
            <CtaButton />
          </Reveal>
        </div>
      </section>

      {/* ============ 3. ESCROW ============ */}
      {/* Trust message near the top, per the ads review: where the money sits
          is the first worry of an off-plan buyer. */}
      <section className="section-dark relative overflow-hidden text-cream">
        <ParallaxImg
          src="/img/why-raf-1920.jpg"
          srcSet="/img/why-raf-960.jpg 960w, /img/why-raf-1920.jpg 1920w"
          sizes="100vw"
          alt="Dubai Business Bay skyline illuminated at night"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          drift={60}
        />
        <div className="absolute inset-0 bg-ink/80" />
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center lg:py-32">
          <Reveal>
            <h2 className="display-bold text-4xl text-cream sm:text-5xl lg:text-6xl">
              Your money sits in escrow, not with the developer
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg font-medium text-cream/95 sm:text-xl">
              Every payment on a registered off-plan project in Dubai goes into an escrow
              account regulated by the Dubai Land Department. The developer draws against
              certified construction progress, not against your goodwill. It is the
              protection that makes buying a building that does not exist yet a sane thing
              to do.
            </p>
            <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-4 border border-line bg-ink/60 px-6 py-5 text-left backdrop-blur-sm">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="shrink-0 text-gold"
                  aria-hidden
                >
                  <path d="M12 2l7 4v6c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-4z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                <p className="font-semibold">DLD-regulated escrow on every project</p>
              </div>
              <div className="flex items-center gap-4 border border-line bg-ink/60 px-6 py-5 text-left backdrop-blur-sm">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="shrink-0 text-gold"
                  aria-hidden
                >
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.5 13l1.5 9-5-3-5 3 1.5-9" />
                </svg>
                <p className="font-semibold">DLD licensed broker · 40+ years combined experience</p>
              </div>
            </div>
            <CtaPair center />
          </Reveal>
        </div>
      </section>

      {/* ============ 4. NOT A DISCOUNT ============ */}
      {/* The "assuming off-plan is a discount" mistake-point, moved high per
          the ads review. Saying it plainly is also the credibility play. */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <p className="kicker">The honest bit first</p>
            <h2 className="display-bold mt-4 text-4xl sm:text-5xl lg:text-6xl">
              Off-plan is not a discount. It is a payment structure.
            </h2>
            <p className="mt-6 max-w-2xl text-[1.02rem] text-muted">
              In 2026, off-plan apartments often cost 10% to 18% more than a comparable
              ready unit in the same community. Anyone selling you off-plan as
              automatically cheaper is not reading the same transaction records we are.
            </p>
            <p className="mt-4 max-w-2xl text-[1.02rem] text-cream/90">
              What a payment plan actually buys you is time. Your capital goes in over
              years instead of on day one, you lock today&apos;s price on a building
              delivered years from now, and the completion balance can be planned for
              rather than found overnight. Whether that trade is worth it depends on the
              specific unit, which is why we price every off-plan option against a ready
              alternative before you commit.
            </p>
            <CtaPair />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden border border-line-gold/60 bg-panel">
              <div className="relative h-[240px] overflow-hidden sm:h-[300px]">
                <img
                  src="/img/yield-interior-1200.jpg"
                  alt="Living room of a modern apartment with panoramic windows in the evening"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <p className="text-[0.75rem] uppercase tracking-[0.2em] text-gold">
                  The comparison we run for you
                </p>
                <p className="mt-4 text-[0.98rem] text-cream/90">
                  Off-plan price against ready price, per square foot, in the same
                  community, from Dubai Land Department records. Then the payment plan laid
                  over it, so you can see what spreading the money is really costing you.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 5. PAYMENT PLAN COMPARISON ============ */}
      <section className="border-y border-line bg-ink-2">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-28">
          <Reveal>
            <p className="kicker">Off-plan apartments in Dubai, available now</p>
            <h2 className="display-bold mt-4 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
              Three projects, three payment plans
            </h2>
            <p className="mt-6 max-w-2xl text-muted">
              All three are off-plan on a 20% booking payment. The difference is how the
              rest is spread, and how much lands at completion.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.06}>
                <div className="flex h-full flex-col overflow-hidden border border-line bg-panel">
                  <div className="relative h-[200px] overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.alt}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <p className="kicker">{p.area}</p>
                    <h3 className="display-bold mt-2 text-2xl text-cream">{p.name}</h3>
                    <p className="mt-1.5 text-[0.78rem] uppercase tracking-[0.16em] text-muted">
                      {p.dev}
                    </p>
                    {/* The plan itself, as emphasised figures: label left,
                        share right and bold. */}
                    <div className="mt-5 divide-y divide-line border-y border-line">
                      <div className="flex items-baseline justify-between gap-4 py-2.5">
                        <span className="text-[0.9rem] text-muted">On booking</span>
                        <span className="price text-[1.05rem] font-bold text-cream">{p.booking}</span>
                      </div>
                      <div className="flex items-baseline justify-between gap-4 py-2.5">
                        <span className="text-[0.9rem] text-muted">During construction</span>
                        <span className="text-right text-[0.9rem] text-cream">{p.instalments}</span>
                      </div>
                      <div className="flex items-baseline justify-between gap-4 py-2.5">
                        <span className="text-[0.9rem] text-muted">On completion</span>
                        <span className="price text-[1.05rem] font-bold text-cream">{p.completion}</span>
                      </div>
                    </div>
                    <p className="mt-4 text-[0.9rem] font-semibold text-cream">{p.sizes}</p>
                    <p className="mt-3 flex-1 text-[0.9rem] text-muted">{p.note}</p>
                    <div className="mt-6 flex flex-col gap-3">
                      <ModalCta
                        label="Get more details"
                        className="btn-gold !w-full !py-3.5 text-center !text-[0.78rem]"
                      />
                      <WhatsAppCta label="Ask on WhatsApp" className="!w-full !py-3.5 !text-[0.78rem]" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 6. WHAT YOU GET ON THE CALL + VIDEO ============ */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Reveal>
              <p className="kicker">One call, real numbers</p>
              <h2 className="display-bold mt-4 text-4xl sm:text-5xl">
                What you get on the call
              </h2>
              <p className="mt-6 max-w-2xl text-lg text-muted">
                Fifteen minutes, no obligation, everything in pounds. This is what an
                advisor covers on an off-plan purchase.
              </p>
            </Reveal>
            <div className="mt-10 space-y-6">
              {callItems.map((c, i) => (
                <Reveal key={c.title} delay={(i % 2) * 0.08}>
                  <div className="flex gap-5">
                    <span className="display-bold mt-0.5 text-2xl text-gold/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="display-bold text-lg text-cream">{c.title}</h3>
                      <p className="mt-2 text-[0.95rem] text-muted">{c.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <CtaButton />
            </Reveal>
          </div>
          <Reveal delay={0.1} className="flex justify-center lg:justify-end">
            <RafVideo />
          </Reveal>
        </div>
      </section>

      {/* ============ 7. FAQ ============ */}
      {/* The instalments question leads, per the ads review: it is the search
          intent behind the whole ad group. */}
      <section className="border-y border-line bg-ink-2">
        <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
          <Reveal>
            <p className="kicker">The questions, answered plainly</p>
            <h2 className="display-bold mt-4 text-4xl sm:text-5xl">
              Buying off-plan from the UK, answered
            </h2>
          </Reveal>
          <div className="mt-10 divide-y divide-line border-y border-line">
            {faq.map((f) => (
              <Reveal key={f.q}>
                <details className="group py-2">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 [&::-webkit-details-marker]:hidden">
                    <h3 className="display-bold text-lg text-cream">{f.q}</h3>
                    <span
                      aria-hidden
                      className="display-bold shrink-0 text-2xl text-gold transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="pb-5 text-[0.95rem] text-muted">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 8. CLOSING FORM ============ */}
      <section id="get-prices" className="section-dark relative scroll-mt-16 overflow-hidden text-cream">
        <ParallaxImg
          src="/img/hero-apartments-1920.webp"
          alt="Apartment building beside a lagoon at dusk"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          drift={60}
        />
        <div className="absolute inset-0 bg-ink/85" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-32">
          <Reveal>
            <p className="kicker">One conversation</p>
            <h2 className="display-bold mt-4 text-4xl sm:text-5xl">
              See the payment plan on a real unit
            </h2>
            <p className="mt-6 max-w-md text-muted">
              Name and number is all we need. An advisor calls you back with the current
              off-plan options that fit, the full payment schedule and the complete cost,
              in pounds.
            </p>
            <p className="mt-4 text-sm text-muted">
              Prefer to message? WhatsApp us instead and we will pick it up from there.
            </p>
            <div className="mt-6 max-w-sm">
              <WhatsAppCta className="!py-4 !text-[0.8rem]" />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="border border-line bg-ink/80 p-7 backdrop-blur-md sm:p-8">
              <LeadForm
                formName="closing"
                buttonLabel={CTA}
                showEmail={false}
                showBudget={false}
                showNote
              />
              <div className="mt-4">
                <ContactRow />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter
        links={[
          { href: "/apartments-for-sale-in-dubai/", label: "Apartments for sale in Dubai" },
          { href: "/dubai-villas-for-sale/", label: "Villas for sale in Dubai" },
          { href: "/buying-property-in-dubai-from-uk/", label: "Buying property in Dubai from the UK" },
          { href: "/risks-of-buying-property-in-dubai/", label: "The risks of buying property in Dubai" },
        ]}
        fxNote="GBP figures on this page convert from dirhams at £1 to AED 4.93, the rate at 21 July 2026, and are rounded. Dubai property transacts in dirhams, so pound figures move with the exchange rate."
      />
    </main>
  );
}
