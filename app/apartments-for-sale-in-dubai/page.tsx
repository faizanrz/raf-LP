import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LeadModal from "./LeadModal";
import ModalCta from "./ModalCta";
import ContactRow from "@/components/ContactRow";
import LeadForm from "@/components/LeadForm";
import ParallaxImg from "@/components/ParallaxImg";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import StickyCta from "@/components/StickyCta";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apartments for Sale in Dubai | Real Prices in Pounds for UK Buyers",
  description:
    "One-bedroom apartments from £365,000, freehold for UK nationals, no residency required. Tell us your budget and we call you back with real prices, in pounds.",
  alternates: { canonical: "/apartments-for-sale-in-dubai/" },
  openGraph: {
    title: "Apartments for Sale in Dubai | Real Prices in Pounds for UK Buyers",
    description:
      "One-bedroom apartments from £365,000, freehold for UK nationals, no residency required. Real prices, in pounds.",
    url: "/apartments-for-sale-in-dubai/",
    images: [{ url: "/img/hero-apartments-1920.webp", width: 1920, height: 1121 }],
  },
};

/*
  Copy source: raf-apartments-lp-copy-v2.md (revised copy, v2).
  Presentation rules from the copy doc: no data tables anywhere, all figures
  and area names stay as live text, one button style site-wide, primary CTA
  "Request my call back" everywhere, project cards "Get more details".
  No response-time promise anywhere on the page.
  Figures: DLD transaction records 1 Jan to 21 Jul 2026 at £1 = AED 4.93.
  Refresh quarterly with the rate.
*/

const GBP_BUDGETS = ["Under £400,000", "£400,000 to £600,000", "£600,000 to £1M", "£1M+"];

const CTA = "Request my call back";

const callItems = [
  {
    title: "What is the right strategy for you",
    body: "There are thousands of apartments in Dubai that you can browse but which one actually fits your objective and requirements? We help you figure it out.",
  },
  {
    title: "What your budget buys today",
    body: "Units move week to week, so we confirm what is genuinely open across Dubai projects on the day we speak, matched to your budget band.",
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

const costCards = [
  { n: "£14,600", d: "Dubai Land Department transfer fee, 4% of the price" },
  { n: "£7,300", d: "Agency commission, 2%" },
  { n: "~£850", d: "Property registration and trustee fees" },
  { n: "£120", d: "Title deed issuance" },
];

const serviceBands = [
  { label: "Mid-market towers such as JVC and Dubai Sports City", figure: "£1.60 to £2.85 / sqft" },
  { label: "Mainstream high-rise such as Business Bay and JLT", figure: "£3.05 to £4.05 / sqft" },
  { label: "Prime waterfront such as Dubai Marina and Downtown", figure: "£3.65 to £5.70 / sqft" },
  { label: "Branded and ultra-prime addresses", figure: "£6.10 / sqft and above" },
];

type AreaCard = { area: string; psf: string; sales: string; profile: string; hot?: boolean };

const tiers: { tier: string; areas: AreaCard[] }[] = [
  {
    tier: "Entry level",
    areas: [
      { area: "International City", psf: "£156", sales: "839 sales", profile: "Cheapest entry in the city" },
      { area: "Dubai Sports City", psf: "£255", sales: "1,488 sales", profile: "Lowest running costs" },
      { area: "Dubai Production City", psf: "£258", sales: "1,817 sales", profile: "Entry level" },
    ],
  },
  {
    tier: "Mid-market",
    areas: [
      { area: "Jumeirah Village Circle (JVC)", psf: "£286", sales: "5,431 sales", profile: "Highest liquidity, strongest yields", hot: true },
      { area: "Motor City", psf: "£291", sales: "1,328 sales", profile: "Low density" },
      { area: "Arjan", psf: "£308", sales: "1,927 sales", profile: "Mid-market" },
    ],
  },
  {
    tier: "Prime",
    areas: [
      { area: "Dubai Marina", psf: "£394", sales: "979 sales", profile: "Waterfront lifestyle" },
      { area: "MBR City", psf: "£424", sales: "73 sales", profile: "Low volume, values held steady" },
      { area: "Business Bay", psf: "£527", sales: "2,635 sales", profile: "Central, strong rental demand" },
      { area: "Palm Deira", psf: "£574", sales: "2,631 sales", profile: "Emerging waterfront" },
      { area: "Burj Khalifa district", psf: "£683", sales: "1,048 sales", profile: "Landmark address" },
    ],
  },
];

const projects = [
  {
    area: "Jumeirah Village Circle",
    name: "113 Residences",
    dev: "IMAN Developers · 113 apartments · Completion Q2 2029",
    img: "/img/apt-113-900.webp",
    alt: "Bronze balconies of 113 Residences",
    chips: ["1BR from £365,000", "2BR from £520,000", "3BR from £740,000", "4BR duplex with pool from £1,103,000"],
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
    chips: ["1BR to 3BR plus study", "Freehold", "Service charge ~£3.25 / sqft", "Prices confirmed on enquiry, in pounds"],
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
    a: "Across Dubai as a whole, entry budgets start lower, but for new-build stock in a well-traded community you should plan on £365,000 upward for a one-bedroom flat, before transaction costs. Our own projects start at that level. Budget another 6% to 8% on top for fees.",
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

function CtaButton({ center = false }: { center?: boolean }) {
  return (
    <div className={`mt-12 flex ${center ? "justify-center" : ""}`}>
      <ModalCta
        label={CTA}
        className="btn-gold !w-full !py-4 text-center !text-[0.8rem] sm:!w-auto sm:px-12"
      />
    </div>
  );
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
      <WhatsAppFloat />

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
              One-bedroom apartments in our Dubai projects start from £365,000. UK
              nationals own them freehold, and no residency is required to buy.
            </p>
            <div className="mt-10 flex justify-center">
              <LeadModal
                budgetOptions={GBP_BUDGETS}
                ctaLabel="Request A Call Back"
                panelScope={`${inter.variable} font-inter theme-light`}
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
              worth of property transactions have already happened in 2026 in Dubai so
              far.
            </p>
            <p className="mt-2 text-lg font-semibold text-gold sm:text-xl">
              You are missing out.
            </p>
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
            Fifteen minutes, no obligation, everything in pounds.
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
            <div className="mt-10 flex justify-center">
              <ModalCta
                label={CTA}
                className="btn-gold !w-full !py-4 text-center !text-[0.8rem] sm:!w-auto sm:px-12"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 4. WHAT IT COSTS ============ */}
      <section className="border-y border-line bg-ink-2">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-28">
          <Reveal>
            <p className="kicker">The numbers first</p>
            <h2 className="display-bold mt-4 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
              What a Dubai apartment actually costs
            </h2>
            <p className="mt-6 max-w-2xl text-muted">
              The advertised price is not the price you pay. Here is the full number, on a
              worked example of a £365,000 apartment, which is where our one-bedroom flats
              start.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h3 className="mt-14 text-[0.75rem] uppercase tracking-[0.2em] text-gold">
              One-off purchase costs
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {costCards.map((c) => (
                <div key={c.d} className="border border-line bg-panel p-6">
                  <p className="display-bold price text-3xl text-gold-bright">{c.n}</p>
                  <p className="mt-3 text-[0.85rem] text-muted">{c.d}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[0.8rem] text-muted/80">
              Financing? Mortgage registration adds 0.25% of the loan.
            </p>
            <p className="mt-5 max-w-3xl text-[0.95rem] text-muted">
              Buying in cash, your total acquisition cost lands at roughly 6% to 8% on top
              of the purchase price. On resale purchases specifically, closing costs
              typically run 6.5% to 8.5%. Budget for it from the start.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h3 className="mt-14 text-[0.75rem] uppercase tracking-[0.2em] text-gold">
              Annual holding costs
            </h3>
            <p className="mt-4 max-w-3xl text-[0.95rem] text-muted">
              The cost that quietly eats your yield is the service charge, billed per square
              foot every year. Apartments carry higher service charges than villas, because
              you are sharing the cost of lifts, pools, lobbies and cooling. Across Dubai
              the median apartment service charge is around £3.45 per square foot, and the
              spread is wide:
            </p>
            <ul className="mt-6 max-w-3xl divide-y divide-line border border-line bg-panel">
              {serviceBands.map((b) => (
                <li key={b.label} className="flex items-baseline justify-between gap-6 px-6 py-4">
                  <span className="text-[0.92rem] text-muted">{b.label}</span>
                  <span className="display-bold price shrink-0 text-right text-lg text-cream">
                    {b.figure}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-14 border border-line-gold/60 bg-panel p-8">
              <p className="text-[0.75rem] uppercase tracking-[0.2em] text-gold">
                Gross yield is not net yield
              </p>
              <p className="mt-4 max-w-4xl text-[0.98rem] text-cream/90">
                Worked example, using real Business Bay numbers. A 1,000 square foot
                one-bedroom at £223,000, renting at £15,800 a year, shows a 7.1% gross
                yield. Apply a £3.05 per square foot service charge and you lose £3,050 a
                year, and the yield drops to 5.7% before you account for maintenance,
                insurance or vacancy. A gross yield quoted at 8% is not 8% in the bank. On
                the call, we show you the net on the units you are actually considering.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <CtaButton />
          </Reveal>
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
            Dubai is not one market. It is a set of micro-markets. Flats in one community
            can cost twice as much per square foot as an identical flat ten minutes away.
            The figures below come from Dubai Land Department transaction records, not from
            asking prices on portals. They are what buyers actually paid.
          </p>
        </Reveal>

        {tiers.map((t, ti) => (
          <Reveal key={t.tier} delay={ti * 0.05}>
            <h3 className="mt-14 text-[0.75rem] uppercase tracking-[0.2em] text-gold">
              {t.tier}
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {t.areas.map((a) => (
                <div
                  key={a.area}
                  className={`border p-6 ${
                    a.hot ? "border-gold bg-gold/5" : "border-line bg-panel"
                  }`}
                >
                  <p className="text-[0.95rem] font-medium text-cream">{a.area}</p>
                  <p className="display-bold price mt-3 text-4xl text-gold-bright">{a.psf}</p>
                  <p className="text-[0.72rem] uppercase tracking-[0.14em] text-muted">
                    per sq ft
                  </p>
                  <p className="mt-3 text-[0.85rem] text-muted">
                    {a.sales} · {a.profile}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        ))}

        <Reveal>
          <p className="mt-6 max-w-4xl text-[0.78rem] text-muted/80">
            Source: Dubai Land Department transaction records, 1 January to 21 July 2026,
            converted at £1 to AED 4.93. Per-square-foot values are transaction-weighted
            across all sales in the area, so treat them as an area benchmark rather than a
            quote for a specific unit. Dubai property is bought and sold in dirhams, so the
            pound figures move with the exchange rate.
          </p>
          <p className="mt-10 max-w-3xl text-muted">
            The trade is straightforward. Higher-priced areas give you a landmark address
            and deeper capital growth, with lower yields and higher service charges.
            Lower-priced areas give you the strongest net yield and the easiest entry, with
            more moderate growth. Neither is better. They suit different plans, which is
            why the form asks what yours is.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-14 border border-line bg-panel p-8 lg:p-10">
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
                { h: "Tenant demand is deep", b: "Which is why JVC carries some of the strongest apartment yields in the city at an entry price of £286 per square foot." },
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
              We hold current availability across three projects. Units move, so tell us
              your budget and we will send what fits.
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
                    <ModalCta
                      label="Get more details"
                      className="btn-gold mt-6 !w-full !py-3.5 text-center !text-[0.78rem] sm:!w-auto sm:px-10"
                    />
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
            If the plan is income, weight toward one and two-bed. If the plan is long-term
            growth, larger units in prime areas do more work. Tell us the plan on the form
            and we will match the unit to it.
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
                  If that is the direction you are thinking in, choose &quot;Building a
                  portfolio&quot; on the form. We plan the entry differently when it is the
                  first of several.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <CtaButton center />
          </Reveal>
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
              Tell us your budget and your plan. We call you back with current apartments
              that fit, the net yield and the full cost, not the headline figure. Prices in
              pounds.
            </p>
            <p className="mt-4 text-sm text-muted">
              Prefer to talk? Call or WhatsApp us in UK hours.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="border border-line bg-ink/80 p-7 backdrop-blur-md sm:p-8">
              <LeadForm
                formName="closing"
                buttonLabel={CTA}
                budgetOptions={GBP_BUDGETS}
                showPlan
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
