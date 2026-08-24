import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LeadModal from "./LeadModal";
import ModalCta from "./ModalCta";
import RafVideo from "./RafVideo";
import ContactRow from "@/components/ContactRow";
import LeadForm from "@/components/LeadForm";
import ParallaxImg from "@/components/ParallaxImg";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import StickyCta from "@/components/StickyCta";
import WhatsAppCta from "@/components/WhatsAppCta";
import WhatsAppGate from "@/components/WhatsAppGate";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apartments for Sale in Dubai | Real Prices in Pounds for UK Buyers",
  description:
    "Dubai apartments for sale, studios to family homes, freehold for UK buyers with no residency required. Tell us what you are looking for and an advisor calls you back with real prices, in pounds.",
  alternates: { canonical: "/apartments-for-sale-in-dubai/" },
  openGraph: {
    title: "Apartments for Sale in Dubai | Real Prices in Pounds for UK Buyers",
    description:
      "Studios to family homes across Dubai's best communities, freehold for UK buyers. Tell us what you are looking for and an advisor calls you back, real prices in pounds.",
    url: "/apartments-for-sale-in-dubai/",
    images: [{ url: "/img/hero-apartments-1920.webp", width: 1920, height: 1121 }],
  },
};

/*
  Copy source: raf-apartments-lp-copy-v2.md (revised copy, v2), reworked
  Aug 2026 as a conversation starter: no price anchors, name + phone + one
  optional note on the form, and the transactable detail (full cost
  breakdown, worked yield example, per-area price table) held back for the
  advisor to give on the call.
  Presentation rules from the copy doc: no data tables anywhere, all figures
  and area names stay as live text, one button style site-wide, primary CTA
  "Request my call back" everywhere, project cards "Get more details".
  No response-time promise anywhere on the page.
  Figures: DLD transaction records 1 Jan to 21 Jul 2026 at £1 = AED 4.93.
  Refresh quarterly with the rate.
*/

const CTA = "Request a call back";

const callItems = [
  {
    title: "What is the right strategy for you",
    body: "There are thousands of apartments in Dubai that you can browse but which one actually fits your objective and requirements? We help you figure it out.",
  },
  {
    title: "What your budget buys today",
    body: "Units move week to week, so we confirm what is genuinely open across Dubai projects on the day we speak, matched to the budget you tell us.",
  },
  {
    title: "The full cost to the pound",
    body: "Purchase price, DLD transfer fee, commission, registration. The complete acquisition figure before you commit to anything.",
  },
  {
    title: "The net yield, not the headline yield",
    body: "We calculate the yield on the specific units we show you, after service charges. The number that reaches your account, not the one in the advert.",
  },
];

const priceTiers = [
  {
    tier: "Entry",
    areas: "International City, Dubai Sports City, Dubai Production City",
    note: "The easiest way in, and the lowest running costs in the city.",
  },
  {
    tier: "Mid-market",
    areas: "Jumeirah Village Circle (JVC), Arjan, Motor City",
    note: "The deepest resale market and the strongest net yields.",
  },
  {
    tier: "Prime",
    areas: "Dubai Marina, Downtown, Business Bay, the Burj Khalifa district",
    note: "Landmark addresses, higher service charges, stronger capital growth.",
  },
];

const projects = [
  {
    area: "Jumeirah Village Circle",
    name: "113 Residences",
    dev: "IMAN Developers · 113 apartments · Completion Q2 2029",
    img: "/img/apt-113-900.webp",
    alt: "Bronze balconies of 113 Residences",
    chips: ["1 and 2 bedroom apartments", "3BR and 4BR duplexes with private pools", "Prices confirmed on enquiry, in pounds"],
    payment: "20% on booking, staged instalments through construction, 50% on completion.",
    positioning:
      "Look at this one first if resale matters to you. JVC is the second most-traded apartment community in Dubai, so there is a real market to sell back into.",
  },
  {
    area: "Motor City",
    name: "Sierra",
    dev: "IMAN Developers · 593 apartments · 41 floors · Completion Q2 2029",
    img: "/img/apt-sierra-900.webp",
    alt: "Sierra's landscaped amenity deck with pools and courts",
    chips: ["Studios to 4BR duplexes with private pools", "Prices confirmed on enquiry, in pounds"],
    payment: "20% on booking, staged instalments through construction, 40% on completion.",
    positioning:
      "Motor City is quieter and lower density than JVC, with wide boulevards and shaded parks. It suits a buyer who wants space over central bustle, and studios here are the smallest entry across our three projects.",
  },
  {
    area: "Mohammed Bin Rashid City",
    name: "Everly Place",
    dev: "Ellington · Boutique building beside the Meydan Horizon crystal lagoon",
    img: "/img/apt-everly-900.webp",
    alt: "Everly Place beside the Meydan Horizon lagoon at dusk",
    chips: ["1BR to 3BR plus study", "Freehold", "Prices confirmed on enquiry, in pounds"],
    payment: "20% on booking, staged instalments, 30% on completion.",
    positioning:
      "The premium option of the three, in a low-volume, higher-value district, from a developer known for design-led buildings.",
  },
];

const sizes = [
  {
    head: "Studios and one-bedroom flats",
    body: "The highest gross yields and the widest tenant pool, so they let and re-let fastest. Lowest entry price, lowest total service charge. This is where first-time buyers and yield-focused investors usually start.",
  },
  {
    head: "Two-bedroom",
    body: "Yield balanced against a larger, more stable tenant, often a family or a sharing professional pair. Rental demand is deep. The most common buy-to-let choice.",
  },
  {
    head: "Three and four-bedroom",
    body: "Yield traded for capital growth and scarcity. Fewer are built, so they hold value well, but they let more slowly and the service charge bill is larger.",
  },
];

const mistakes = [
  {
    title: "Reading gross yield as net",
    body: "The headline yield ignores service charges, which on an apartment can pull a 7% gross down toward 5% net. Always ask for the net. We quote it on every unit we show you.",
  },
  {
    title: "Underestimating service charges",
    body: "They vary building to building, not just area to area. Two towers next door to each other can differ by £2 per square foot. We check the specific building before you commit.",
  },
  {
    title: "Assuming off-plan is a discount",
    body: "In 2026, off-plan apartments often cost 10% to 18% more than a comparable ready unit. A payment plan is not automatically cheaper. We run the comparison for you.",
  },
  {
    title: "Paying the asking price",
    body: "Asking prices in Dubai often sit 6% to 9% above the final sale price, especially on resale. There is room to negotiate, and we do it for you.",
  },
];

const faq = [
  {
    q: "Can UK citizens buy an apartment in Dubai?",
    a: "Yes. UK nationals can buy freehold apartments and flats in Dubai's designated freehold areas, with full ownership. No residency and no UAE visa is required to purchase.",
  },
  {
    q: "How much do I need to start?",
    a: "Entry points vary widely across communities and projects, from the cheapest freehold areas through to prime waterfront addresses. We match options to your budget on the call rather than pushing you toward a number. Whatever the price, budget another 6% to 8% on top of it for transaction costs.",
  },
  {
    q: "Can I buy off-plan and pay in instalments?",
    a: "Yes. Off-plan apartments in Dubai are normally sold on a payment plan: a deposit on booking, staged instalments through construction, and the balance on completion. Buyer funds on off-plan projects sit in government-regulated escrow accounts. We walk you through the payment plan on each project on the call.",
  },
  {
    q: "Do I pay UK-style stamp duty?",
    a: "No. There is no annual property tax and no stamp duty in the UK sense. The main one-off cost is the 4% DLD transfer fee.",
  },
  {
    q: "How do I get paid the rent in the UK?",
    a: "Rental income can be collected and remitted to a UK account. We set up the management so it runs without you being in Dubai.",
  },
];

/* Both actions, always side by side and the same size. The call-back button
   opens the modal form; the WhatsApp button opens the gate in WhatsAppGate,
   which records the lead in LeadNudge before handing off to wa.me. */
function CtaPair({
  center = false,
  spacing = "mt-10",
  source = "Section CTA",
}: {
  center?: boolean;
  spacing?: string;
  source?: string;
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
      <WhatsAppCta
        source={source}
        className="!w-full !py-4 !text-[0.8rem] sm:!w-auto sm:whitespace-nowrap sm:!px-10"
      />
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
      {/* One instance per page. Every WhatsAppCta button opens this. */}
      <WhatsAppGate panelScope={`${inter.variable} font-inter theme-light`} />

      {/* ============ 1. HERO ============ */}
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
            <h1 className="display-bold mt-6 text-5xl text-cream sm:text-7xl lg:text-8xl">
              Apartments for Sale <span className="text-gold-bright">in Dubai</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-xl font-medium text-cream sm:text-2xl">
              Studios to family homes across Dubai&apos;s best communities, freehold for UK
              buyers, no residency required. Tell us what you&apos;re looking for and an
              advisor calls you back with the options that fit, real prices in pounds.
            </p>
            <div className="mx-auto mt-10 flex max-w-2xl flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <LeadModal
                ctaLabel={CTA}
                triggerClassName="btn-gold !w-full !py-5 text-center !text-[0.95rem] !font-bold !tracking-[0.12em] sm:!w-auto sm:px-12"
                panelScope={`${inter.variable} font-inter theme-light`}
              />
              <WhatsAppCta
                source="Hero"
                className="!w-full !py-5 !text-[0.95rem] !font-bold !tracking-[0.12em] sm:!w-auto sm:!px-12"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 2. MARKET STATEMENT ============ */}
      <section className="border-b border-line bg-ink-2">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center lg:py-20">
          <Reveal>
            <p className="display-bold price text-5xl text-gold-bright sm:text-6xl lg:text-7xl">
              £67 Billion
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-lg font-medium text-cream sm:text-xl">
              worth of property has changed hands in Dubai so far in 2026. It is one of
              the most actively traded residential markets in the world.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ WHY BUY IN DUBAI + VIDEO ============ */}
      <section className="border-b border-line bg-ink-2">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-24">
          <Reveal>
            <h2 className="display-bold text-4xl sm:text-5xl">
              Why Buy an Apartment in 🇦🇪 Dubai?
            </h2>
            <div className="mt-9 space-y-4">
              {[
                {
                  head: "No capital gains tax on property.",
                  lines: ["What you make on the sale stays yours."],
                },
                {
                  head: "No inheritance tax in most cases.",
                  lines: ["Assets can be structured and passed on efficiently."],
                },
                {
                  head: "Rental income is not taxed for individuals.",
                  lines: ["Your yield is your yield."],
                },
                {
                  head: "Clear ownership framework.",
                  lines: ["Freehold titles."],
                },
                {
                  head: "Buyer security.",
                  lines: [
                    "Government-regulated escrow accounts on off-plan projects protect buyer funds.",
                  ],
                },
              ].map((b) => (
                <div key={b.head} className="flex gap-4">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="mt-1 shrink-0 text-gold"
                    aria-hidden
                  >
                    <path d="M4 12l6 6L20 6" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-cream">{b.head}</h3>
                    {b.lines.map((l) => (
                      <p key={l} className="mt-0.5 text-[0.95rem] text-muted">
                        {l}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="display-bold mt-10 text-2xl text-cream sm:text-3xl">
              In the UK, taxes compound over time.
              <br />
              <span className="text-gold">In the UAE, returns compound instead.</span>
            </h3>

            <CtaPair />
          </Reveal>

          <Reveal delay={0.1} className="flex justify-center lg:justify-end">
            <RafVideo />
          </Reveal>
        </div>
      </section>

      {/* ============ 3. WHAT HAPPENS ON THE CALL ============ */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-28">
        <Reveal>
          <p className="kicker">One call, real numbers</p>
          <h2 className="display-bold mt-4 text-4xl sm:text-5xl lg:text-6xl">
            What you get on the call
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Whether you have been browsing apartments for sale in Dubai for months or you
            started this week, one call gets you further than a portal will. Fifteen
            minutes, no obligation, everything in pounds.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {callItems.map((c, i) => (
            <Reveal key={c.title} delay={(i % 2) * 0.08}>
              <div className="flex h-full gap-6 border border-line bg-panel p-8">
                <span className="display-bold mt-0.5 text-3xl text-gold/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="display-bold text-xl text-cream">{c.title}</h3>
                  <p className="mt-3 text-[0.95rem] text-muted">{c.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <CtaButton center />
        </Reveal>
      </section>

      {/* ============ WHY RAF ============ */}
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
              Why RAF Real Estate?
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg font-medium text-cream/95 sm:text-xl">
              With 40 years of combined experience in the U.K. real estate industry, in
              the last decade we have now introduced real estate investment opportunities
              in the UAE. We understand what would be the right strategy for you if you
              are looking to buy an apartment in Dubai.
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
                <p className="font-semibold">DLD Licensed Broker in the UAE</p>
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
                <p className="font-semibold">40+ Years of Combined Experience</p>
              </div>
            </div>
            <CtaPair center />
          </Reveal>
        </div>
      </section>

      {/* ============ 4. WHAT IT COSTS ============ */}
      {/* Teaser only. The itemised fee list and the worked gross-vs-net yield
          example are the advisor's value on the call, so they are deliberately
          not on the page. */}
      <section className="border-y border-line bg-ink-2">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <Reveal>
              <p className="kicker">The numbers first</p>
              <h2 className="display-bold mt-4 text-4xl sm:text-5xl lg:text-6xl">
                What a Dubai apartment actually costs
              </h2>
              <p className="mt-6 max-w-2xl text-[1.02rem] text-muted">
                The advertised price is not the price you pay. Transaction costs run
                roughly 6% to 8% on top of the price, covering the Dubai Land Department
                transfer fee, agency commission, registration and the title deed, and they
                sit at the higher end of that range on resale.
              </p>
              <p className="mt-4 max-w-2xl text-[1.02rem] text-cream/90">
                The exact figure depends on the unit, the developer and how you pay. We
                give it to you to the pound on the call, for the specific apartment you are
                looking at, before you commit to anything.
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
                    Gross yield is not net yield
                  </p>
                  <p className="mt-4 text-[0.98rem] text-cream/90">
                    Service charges are billed per square foot every year and they vary
                    building to building, so they pull a headline gross yield down toward
                    the net you actually bank. We calculate the real net on the units you
                    are considering.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FULL-BLEED DIVIDER ============ */}
      <section className="section-dark relative h-[52vh] min-h-[380px] overflow-hidden">
        <ParallaxImg
          src="/img/apt-canal-1400.webp"
          alt="Apartment terraces above a canal at sunset"
          className="h-full w-full object-cover"
          loading="lazy"
          drift={70}
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
            <Reveal>
              <p className="display-bold max-w-2xl text-3xl leading-tight text-cream sm:text-5xl">
                Dubai is not one market. It is a set of micro-markets.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 5. WHERE TO BUY ============ */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-28">
        <Reveal>
          <p className="kicker">The map, priced</p>
          <h2 className="display-bold mt-4 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
            Where to buy an apartment in Dubai
          </h2>
          <p className="mt-6 max-w-2xl text-muted">
            Flats in one community can cost twice as much per square foot as an identical
            flat ten minutes away. Broadly, the city sorts into three tiers.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {priceTiers.map((t, ti) => (
            <Reveal key={t.tier} delay={ti * 0.06}>
              <div className="flex h-full flex-col border border-line bg-panel p-7">
                <p className="text-[0.75rem] uppercase tracking-[0.2em] text-gold">
                  {t.tier}
                </p>
                <p className="mt-4 text-[1.05rem] font-medium text-cream">{t.areas}</p>
                <p className="mt-3 text-[0.9rem] text-muted">{t.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 max-w-3xl text-muted">
            We track what buyers actually paid, from Dubai Land Department transaction
            records rather than asking prices on portals, and we share those numbers for
            your shortlist on the call. Send us the communities you are weighing up and we
            will tell you where the value is.
          </p>
        </Reveal>

        <Reveal>
          <p className="mt-10 max-w-3xl text-muted">
            The trade is straightforward. Higher-priced areas give you a landmark address
            and deeper capital growth, with lower yields and higher service charges.
            Lower-priced areas give you the strongest net yield and the easiest entry, with
            more moderate growth. Neither is better. They suit different plans, which is
            what the call is for.
          </p>
          <p className="mt-6 max-w-3xl text-muted">
            Looking more broadly at property for sale in Dubai? We cover apartments across
            every major community. If you have been searching flats for sale in Dubai and
            comparing portal listings, bring the shortlist to the call and we will tell you
            what the DLD records say about each one before you buy property in Dubai.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-14 overflow-hidden border border-line bg-panel">
            <div className="relative h-[240px] overflow-hidden sm:h-[300px]">
              <img
                src="/img/jvc-aerial-1200.jpg"
                alt="Aerial view of a Dubai residential community with modern buildings and greenery"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-8 lg:p-10">
            <p className="kicker">The liquidity case</p>
            <h3 className="display-bold mt-3 text-2xl text-cream sm:text-4xl">
              Why so many buyers choose JVC
            </h3>
            <p className="mt-5 max-w-4xl text-[0.98rem] text-muted">
              Of the 126 Dubai communities where apartments changed hands this year,
              Jumeirah Village Circle ranks second. It recorded 5,431 apartment sales
              between January and July 2026, worth £1.19 billion. Roughly one in every
              fourteen apartments sold anywhere in Dubai sold in JVC.
            </p>
            <div className="mt-7 grid gap-6 md:grid-cols-3">
              {[
                { h: "Resale is easier", b: "A constant flow of buyers rather than a thin market you have to wait out." },
                { h: "Pricing is transparent", b: "Hundreds of comparable sales register every month, so nobody can tell you a number without evidence." },
                { h: "Tenant demand is deep", b: "Which is why JVC carries some of the strongest apartment yields in the city, at an entry price well below the prime waterfront communities." },
              ].map((c) => (
                <div key={c.h} className="border-l border-line-gold pl-5">
                  <p className="font-medium text-cream">{c.h}</p>
                  <p className="mt-2 text-[0.9rem] text-muted">{c.b}</p>
                </div>
              ))}
            </div>
            <p className="mt-7 max-w-3xl text-[0.95rem] text-muted">
              For a buyer who wants to be able to sell again without difficulty, that
              liquidity is the thing that matters most.
            </p>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <CtaButton />
        </Reveal>
      </section>

      {/* ============ 6. OUR APARTMENTS ============ */}
      <section className="border-y border-line bg-ink-2">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-28">
          <Reveal>
            <p className="kicker">Apartments we have available now</p>
            <h2 className="display-bold mt-4 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
              Three projects, three different answers
            </h2>
            <p className="mt-6 max-w-2xl text-muted">
              Our current Dubai apartments for sale sit across three projects, all off-plan
              on a payment plan. Units move week to week, so tell us what you are after and
              we will send what fits.
            </p>
          </Reveal>

          <div className="mt-14 space-y-8">
            {projects.map((p) => (
              <Reveal key={p.name}>
                <div className="grid overflow-hidden border border-line bg-panel lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative min-h-[260px] overflow-hidden lg:min-h-0">
                    <img
                      src={p.img}
                      alt={p.alt}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8 lg:p-10">
                    <p className="kicker">{p.area}</p>
                    <h3 className="display-bold mt-3 text-3xl text-cream sm:text-4xl">{p.name}</h3>
                    <p className="mt-2 text-[0.8125rem] uppercase tracking-[0.18em] text-muted">
                      {p.dev}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.chips.map((chip) => (
                        <span
                          key={chip}
                          className="border border-line-gold/60 px-3 py-1.5 text-[0.85rem] text-cream"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                    <p className="mt-5 text-[0.9rem] text-muted">{p.payment}</p>
                    <p className="mt-4 text-[0.95rem] text-cream/90">{p.positioning}</p>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                      <ModalCta
                        label="Get more details"
                        className="btn-gold !w-full !py-3.5 text-center !text-[0.78rem] sm:!w-auto sm:px-10"
                      />
                      <WhatsAppCta
                        label="Ask on WhatsApp"
                        message={`I would like more details on ${p.name} in ${p.area}.`}
                        source={p.name}
                        className="!w-full !py-3.5 !text-[0.78rem] sm:!w-auto sm:!px-8"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 7. WHICH SIZE ============ */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-28">
        <Reveal>
          <p className="kicker">Matching the unit to the plan</p>
          <h2 className="display-bold mt-4 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
            One, two or three bedroom, which to buy
          </h2>
          <p className="mt-6 max-w-2xl text-muted">
            Whether you call it an apartment or a flat, the right size depends on whether
            you are optimising for yield, for capital growth, or for your own use.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line lg:grid-cols-3">
          {sizes.map((c, i) => (
            <Reveal key={c.head} delay={i * 0.07} className="bg-panel p-8">
              <h3 className="display-bold text-xl text-cream">{c.head}</h3>
              <p className="mt-3 text-[0.92rem] text-muted">{c.body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-3xl text-muted">
            If the plan is income, weight toward 1 and 2 bedroom apartments. If the plan is
            long-term growth, larger units in prime areas do more work. Tell us the plan on
            the call and we will match the unit to it.
          </p>
        </Reveal>
      </section>

      {/* ============ 8. PORTFOLIO ============ */}
      <section className="border-y border-line bg-ink-2">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <Reveal>
              <p className="kicker">The pattern we see</p>
              <h2 className="display-bold mt-4 text-4xl sm:text-5xl">
                Why buyers start with one and end with several
              </h2>
              <div className="relative mt-8 hidden h-[220px] overflow-hidden border border-line lg:block">
                <img
                  src="/img/portfolio-keys-1200.jpg"
                  alt="Agent handing over the keys of a new apartment to a buyer"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-4 text-muted">
                <p>
                  An apartment is the accessible way into Dubai property, and it is often
                  the first unit rather than the only one. Buyers begin with a single
                  entry-level apartment, see the net yield land where we said it would, and
                  come back to add a second and a third. Once the first unit is let and
                  returning, the second is a smaller decision, and the third smaller still.
                </p>
                <p className="text-cream/90">
                  If that is the direction you are thinking in, say so when we speak. We
                  plan the entry differently when it is the first of several.
                </p>
                <CtaButton />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 9. WHAT UK BUYERS GET WRONG ============ */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-28">
        <Reveal>
          <p className="kicker">Before you shortlist</p>
          <h2 className="display-bold mt-4 max-w-2xl text-4xl sm:text-5xl lg:text-6xl">
            What UK buyers get wrong
          </h2>
          <p className="mt-6 max-w-2xl text-muted">
            The mistakes that cost money are the same ones, again and again.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {mistakes.map((m, i) => (
            <Reveal key={m.title} delay={(i % 2) * 0.08}>
              <div className="flex gap-5">
                <span className="display-bold mt-0.5 text-2xl text-gold/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="display-bold text-lg text-cream">{m.title}</h3>
                  <p className="mt-2 text-[0.95rem] text-muted">{m.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-10 max-w-3xl text-muted">
            We tell you these things before you buy, not after. That is the point of using
            an advisor rather than a portal.
          </p>
          <CtaButton />
        </Reveal>
      </section>

      {/* ============ 10. FAQ ============ */}
      <section className="border-y border-line bg-ink-2">
        <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
          <Reveal>
            <p className="kicker">The questions, answered plainly</p>
            <h2 className="display-bold mt-4 text-4xl sm:text-5xl">
              Buying from the UK, answered
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

      {/* ============ 11. CLOSING FORM ============ */}
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
              See the real numbers on a Dubai apartment
            </h2>
            <p className="mt-6 max-w-md text-muted">
              Name and number is all we need. An advisor calls you back with current
              apartments that fit, the full cost and the net yield, not the headline
              figure. Prices in pounds.
            </p>
            <p className="mt-4 text-sm text-muted">
              Prefer to message? WhatsApp us instead and we will pick it up from there.
            </p>
            <div className="mt-6 max-w-sm">
              <WhatsAppCta source="Closing section" className="!py-4 !text-[0.8rem]" />
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
          { href: "/dubai-villas-for-sale/", label: "Villas for sale in Dubai" },
          { href: "/buying-property-in-dubai-from-uk/", label: "Buying property in Dubai from the UK" },
          { href: "/risks-of-buying-property-in-dubai/", label: "The risks of buying property in Dubai" },
        ]}
        fxNote="GBP figures on this page convert from dirhams at £1 to AED 4.93, the rate at 21 July 2026, and are rounded. Dubai property transacts in dirhams, so pound figures move with the exchange rate."
      />
    </main>
  );
}
