import type { Metadata } from "next";
import ContactRow from "@/components/ContactRow";
import InlineCta from "@/components/InlineCta";
import LeadForm from "@/components/LeadForm";
import ParallaxImg from "@/components/ParallaxImg";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import StickyCta from "@/components/StickyCta";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Apartments for Sale in Dubai | Prices, Yields & Costs for UK Buyers",
  description:
    "Buy an apartment in Dubai from the UK. Real prices, service charges and net yields by area, freehold for UK nationals, no residency required.",
  alternates: { canonical: "/dubai-apartments-for-sale/" },
  openGraph: {
    title: "Apartments for Sale in Dubai | Prices, Yields & Costs for UK Buyers",
    description:
      "Real prices, service charges and net yields by area. Freehold for UK nationals, no residency required.",
    url: "/dubai-apartments-for-sale/",
    images: [{ url: "/img/hero-apartments-1920.webp", width: 1920, height: 1121 }],
  },
};

/*
  Copy source: RAF-apartments-landing-page-copy.md (final copy, July 2026).
  BEFORE GO-LIVE, confirm with RAF:
  - Sierra and Everly Place starting prices by configuration [ASK RAF in copy doc]
  - The rent remittance / management answer in the FAQ [VERIFY in copy doc]
  - Availability is deliberately never stated as a count anywhere on the page
  Figures: DLD transaction records 1 Jan to 21 Jul 2026 at £1 = AED 4.93,
  supporting sources in the copy doc. Refresh quarterly with the rate.
*/

const GBP_BUDGETS = ["Under £400,000", "£400,000 to £600,000", "£600,000 to £1M", "£1M+"];

const areas = [
  { area: "International City", psf: "£156", sales: "839", profile: "Cheapest entry in the city" },
  { area: "Dubai Sports City", psf: "£255", sales: "1,488", profile: "Entry level, lowest running costs" },
  { area: "Dubai Production City", psf: "£258", sales: "1,817", profile: "Entry level" },
  { area: "Jumeirah Village Circle (JVC)", psf: "£286", sales: "5,431", profile: "Highest liquidity, strongest yields" },
  { area: "Motor City", psf: "£291", sales: "1,328", profile: "Mid-market, low density" },
  { area: "Arjan", psf: "£308", sales: "1,927", profile: "Mid-market" },
  { area: "Dubai Marina", psf: "£394", sales: "979", profile: "Waterfront lifestyle" },
  { area: "MBR City", psf: "£424", sales: "73", profile: "Low volume, values held steady" },
  { area: "Business Bay", psf: "£527", sales: "2,635", profile: "Central, strong rental demand" },
  { area: "Palm Deira", psf: "£574", sales: "2,631", profile: "Emerging waterfront" },
  { area: "Burj Khalifa district", psf: "£683", sales: "1,048", profile: "Landmark address" },
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

const mistakes = [
  {
    title: "Reading gross yield as net",
    body: "The headline yield ignores service charges, which on an apartment can pull a 7% gross down toward 5% net. Always ask for the net.",
  },
  {
    title: "Underestimating service charges",
    body: "They vary building to building, not just area to area. Two towers next door to each other can differ by £2 per square foot. Check the specific building, not the neighbourhood average.",
  },
  {
    title: "Assuming off-plan is a discount",
    body: "In 2026, off-plan apartments often cost 10% to 18% more than a comparable ready unit. A payment plan is not automatically cheaper.",
  },
  {
    title: "Paying the asking price",
    body: "Asking prices in Dubai often sit 6% to 9% above the final sale price, especially on resale. There is room to negotiate, and we do it for you.",
  },
];

export default function Page() {
  return (
    <main className="bg-ink pb-16 text-cream md:pb-0">
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
      <SiteHeader />
      <StickyCta ctaLabel="Request a call-back" />
      <WhatsAppFloat />

      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/25" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-6 pb-16 pt-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
          <div>
            <Reveal>
              <p className="kicker">RAF Real Estate · DLD licensed brokerage</p>
              <h1 className="display mt-5 text-5xl text-cream sm:text-6xl lg:text-7xl">
                Apartments for Sale <span className="text-gold-bright">in Dubai</span>
              </h1>
              <div className="gold-rule mt-7" />
              <p className="mt-7 max-w-xl text-lg text-cream/90">
                One-bedroom apartments in our Dubai projects start from £365,000, UK nationals
                can own them freehold, and no residency is required to buy.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div id="lead-form" className="border border-line bg-ink/75 p-7 backdrop-blur-md sm:p-8">
              <p className="display text-2xl">See what your budget buys</p>
              <p className="mb-6 mt-2 text-sm text-muted">
                Prices and availability sent within one working day, in pounds.
              </p>
              <LeadForm
                formName="hero"
                buttonLabel="Get apartment prices and availability"
                budgetOptions={GBP_BUDGETS}
                showPlan
              />
              <div className="mt-4">
                <ContactRow />
              </div>
              <p className="mt-3 text-[0.78rem] text-muted">
                We are four hours ahead of the UK. Tell us a time and we will call to suit
                you.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ KEY NUMBERS BAND ============ */}
      <section className="border-b border-line bg-ink-2">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px lg:grid-cols-4">
          {[
            { n: "£365,000", d: "one-bed entry price" },
            { n: "6% to 8%", d: "total buying costs" },
            { n: "£286 / sqft", d: "JVC entry, DLD records" },
            { n: "0", d: "UK-style stamp duty" },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06} className="px-6 py-8 text-center">
              <p className="display text-3xl text-gold-bright">{s.n}</p>
              <p className="mt-1 text-[0.78rem] uppercase tracking-[0.14em] text-muted">{s.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ WHAT IT COSTS ============ */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-28">
        <Reveal>
          <p className="kicker">The numbers first</p>
          <h2 className="display mt-4 max-w-2xl text-4xl sm:text-5xl">
            What a Dubai apartment actually costs
          </h2>
          <p className="mt-6 max-w-2xl text-muted">
            The advertised price is not the price you pay. Here is the full number, on a
            worked example of a £365,000 apartment, which is where our one-bedroom flats
            start.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <Reveal delay={0.05}>
            <h3 className="text-[0.75rem] uppercase tracking-[0.2em] text-gold">
              One-off purchase costs
            </h3>
            <div className="mt-4 overflow-x-auto border border-line">
              <table className="lux-table">
                <tbody>
                  <tr>
                    <td>Dubai Land Department transfer fee, 4% of the price</td>
                    <td className="text-right">£14,600</td>
                  </tr>
                  <tr>
                    <td>Agency commission, 2%</td>
                    <td className="text-right">£7,300</td>
                  </tr>
                  <tr>
                    <td>Property registration and trustee fees</td>
                    <td className="text-right">roughly £850</td>
                  </tr>
                  <tr>
                    <td>Title deed issuance</td>
                    <td className="text-right">£120</td>
                  </tr>
                  <tr>
                    <td>Mortgage registration, if you finance</td>
                    <td className="text-right">0.25% of the loan</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-5 text-sm text-muted">
              Buying in cash, your total acquisition cost lands at roughly 6% to 8% on top of
              the purchase price. On resale purchases specifically, closing costs typically
              run 6.5% to 8.5%. Budget for it from the start.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <h3 className="text-[0.75rem] uppercase tracking-[0.2em] text-gold">
              Annual holding costs
            </h3>
            <p className="mt-4 text-[0.95rem] text-muted">
              The cost that quietly eats your yield is the service charge, billed per square
              foot every year. Apartments carry higher service charges than villas, because
              you are sharing the cost of lifts, pools, lobbies and cooling. Across Dubai the
              median apartment service charge is around £3.45 per square foot, but the spread
              is wide:
            </p>
            <ul className="mt-5 space-y-3 border-l border-line-gold pl-6 text-[0.92rem]">
              <li>
                <span className="text-cream">Mid-market towers</span>{" "}
                <span className="text-muted">
                  such as JVC and Dubai Sports City: roughly £1.60 to £2.85 per square foot
                </span>
              </li>
              <li>
                <span className="text-cream">Mainstream high-rise</span>{" "}
                <span className="text-muted">
                  such as Business Bay and JLT: roughly £3.05 to £4.05 per square foot
                </span>
              </li>
              <li>
                <span className="text-cream">Prime waterfront</span>{" "}
                <span className="text-muted">
                  such as Dubai Marina and Downtown: roughly £3.65 to £5.70 per square foot
                </span>
              </li>
              <li>
                <span className="text-cream">Branded and ultra-prime addresses:</span>{" "}
                <span className="text-muted">£6.10 per square foot and above</span>
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 border border-line-gold/60 bg-panel p-7">
            <p className="text-[0.75rem] uppercase tracking-[0.2em] text-gold">
              Gross yield is not net yield
            </p>
            <p className="mt-3 max-w-4xl text-[0.98rem] text-cream/90">
              Worked example, using real Business Bay numbers. A 1,000 square foot one-bedroom
              at £223,000, renting at £15,800 a year, shows a 7.1% gross yield. Apply a £3.05
              per square foot service charge and you lose £3,050 a year, and the yield drops
              to 5.7% before you account for maintenance, insurance or vacancy. A gross yield
              quoted at 8% is not 8% in the bank. We show you the net.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <InlineCta
            label="Get in touch"
            sub="Two minute form, the full cost and the net yield on real units, within one working day."
          />
        </Reveal>
      </section>

      {/* ============ FULL-BLEED DIVIDER ============ */}
      <section className="relative h-[52vh] min-h-[380px] overflow-hidden">
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
              <p className="display max-w-2xl text-3xl leading-snug text-cream sm:text-4xl">
                Dubai is not one market. It is a set of micro-markets.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ WHERE TO BUY ============ */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-28">
        <Reveal>
          <p className="kicker">The map, priced</p>
          <h2 className="display mt-4 max-w-2xl text-4xl sm:text-5xl">
            Where to buy an apartment in Dubai
          </h2>
          <p className="mt-6 max-w-2xl text-muted">
            Flats in one community can cost twice as much per square foot as an identical
            flat ten minutes away. The same budget buys very different things depending on
            the area. The figures
            below come from Dubai Land Department transaction records, not from asking prices
            on portals. They are what buyers actually paid.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 overflow-x-auto border border-line">
            <table className="lux-table min-w-[720px]">
              <thead>
                <tr>
                  <th>Area</th>
                  <th>Price per sq ft</th>
                  <th>Apartment sales, Jan to Jul 2026</th>
                  <th>Profile</th>
                </tr>
              </thead>
              <tbody>
                {areas.map((a) => (
                  <tr key={a.area} className={a.area.includes("JVC") ? "bg-gold/5" : undefined}>
                    <td className="text-cream">{a.area}</td>
                    <td>{a.psf}</td>
                    <td>{a.sales}</td>
                    <td>{a.profile}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 max-w-4xl text-[0.78rem] text-muted/80">
            Source: Dubai Land Department transaction records, 1 January to 21 July 2026,
            converted at £1 to AED 4.93. Per-square-foot values are transaction-weighted
            across all sales in the area, so treat them as an area benchmark rather than a
            quote for a specific unit. Dubai property is bought and sold in dirhams, so the
            pound figures move with the exchange rate.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-10 max-w-3xl text-muted">
            The trade is straightforward. Higher-priced areas give you a landmark address and
            deeper capital growth, but the yield is lower and the service charges are higher.
            Lower-priced areas give you the strongest net yield and the easiest entry, with
            more moderate growth. Neither is better. They suit different plans, which is why
            the form asks what yours is.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 border border-line bg-ink-2 p-8 lg:p-10">
            <p className="kicker">The liquidity case</p>
            <h3 className="display mt-3 text-2xl text-cream sm:text-3xl">
              Why so many buyers choose JVC
            </h3>
            <p className="mt-5 max-w-4xl text-[0.98rem] text-muted">
              Of the 126 Dubai communities where apartments changed hands this year, Jumeirah
              Village Circle ranks second. It recorded 5,431 apartment sales between January
              and July 2026, worth £1.19 billion. That is roughly one in every fourteen
              apartments sold anywhere in Dubai.
            </p>
            <div className="mt-7 grid gap-6 md:grid-cols-3">
              {[
                { h: "Resale is easier", b: "There is a constant flow of buyers rather than a thin market you have to wait out." },
                { h: "Pricing is transparent", b: "Hundreds of comparable sales register every month and nobody can tell you a number without evidence." },
                { h: "Tenant demand is deep", b: "Which is why JVC carries some of the strongest apartment yields in the city at an entry price of £286 per square foot." },
              ].map((c) => (
                <div key={c.h} className="border-l border-line-gold pl-5">
                  <p className="text-cream">{c.h}</p>
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
      </section>

      {/* ============ AVAILABLE NOW ============ */}
      <section className="border-y border-line bg-ink-2">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-28">
          <Reveal>
            <p className="kicker">Apartments we have available now</p>
            <h2 className="display mt-4 max-w-3xl text-4xl sm:text-5xl">
              Three projects, three different answers
            </h2>
            <p className="mt-6 max-w-2xl text-muted">
              We hold current availability across three projects. Units move, so rather than
              publish a stock count that is out of date by the time you read it, tell us your
              budget and we will send what is genuinely available on the day you ask.
            </p>
          </Reveal>

          <div className="mt-14 space-y-8">
            {/* 113 Residences */}
            <Reveal>
              <div className="grid overflow-hidden border border-line bg-panel lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[260px] overflow-hidden lg:min-h-0">
                  <img
                    src="/img/apt-113-900.webp"
                    alt="Bronze balconies of 113 Residences"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 lg:p-10">
                  <p className="kicker">Jumeirah Village Circle</p>
                  <h3 className="display mt-3 text-3xl text-cream">113 Residences</h3>
                  <p className="mt-1 text-[0.8125rem] uppercase tracking-[0.18em] text-muted">
                    IMAN Developers · 113 apartments · B + G + 9 floors · Completion Q2 2029
                  </p>
                  <div className="mt-6 overflow-x-auto border border-line">
                    <table className="lux-table">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Size</th>
                          <th>From</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td>1 bedroom</td><td>689 to 915 sq ft</td><td>£365,000</td></tr>
                        <tr><td>2 bedroom</td><td>1,031 to 1,369 sq ft</td><td>£520,000</td></tr>
                        <tr><td>3 bedroom</td><td>1,588 to 2,059 sq ft</td><td>£740,000</td></tr>
                        <tr><td>4 bed duplex with pool</td><td>2,509 to 3,250 sq ft</td><td>£1,103,000</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-5 text-[0.9rem] text-muted">
                    Payment is staged: 20% on booking, 10% at 90 days, 10% at 40%
                    construction, 10% at 60% construction, and 50% on completion.
                  </p>
                  <p className="mt-4 text-[0.95rem] text-cream/90">
                    Look at this one first if resale matters to you. JVC is the second
                    most-traded apartment community in Dubai, so there is a real market to
                    sell back into.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Sierra */}
            <Reveal>
              <div className="grid overflow-hidden border border-line bg-panel lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[260px] overflow-hidden lg:min-h-0">
                  <img
                    src="/img/apt-sierra-900.webp"
                    alt="Sierra's landscaped amenity deck with pools and courts"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 lg:p-10">
                  <p className="kicker">Motor City</p>
                  <h3 className="display mt-3 text-3xl text-cream">Sierra</h3>
                  <p className="mt-1 text-[0.8125rem] uppercase tracking-[0.18em] text-muted">
                    IMAN Developers · 593 apartments · B + G + 41 floors · Completion Q2 2029
                  </p>
                  <p className="mt-5 text-[0.95rem] text-muted">
                    From studios to four-bedroom duplexes with private pools, plus 75,000 sq
                    ft of wellness amenities and five ground-floor retail units. Motor City is
                    quieter and lower density than JVC, with wide boulevards and shaded parks,
                    so it suits a buyer who wants space over central bustle. Studios here are
                    the smallest configuration across our three projects.
                  </p>
                  <p className="mt-4 text-[0.9rem] text-muted">
                    Payment is 20% on booking, 10% at 90 days, then 10% at each of 20%, 40%
                    and 60% construction, with 40% on completion.
                  </p>
                  {/* ASK RAF: starting prices by configuration before publishing them here */}
                  <p className="mt-4 text-[0.9rem] text-muted">
                    Starting prices by configuration are confirmed on enquiry, in pounds.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Everly Place */}
            <Reveal>
              <div className="grid overflow-hidden border border-line bg-panel lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[260px] overflow-hidden lg:min-h-0">
                  <img
                    src="/img/apt-everly-900.webp"
                    alt="Everly Place beside the Meydan Horizon lagoon at dusk"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 lg:p-10">
                  <p className="kicker">Mohammed Bin Rashid City</p>
                  <h3 className="display mt-3 text-3xl text-cream">Everly Place</h3>
                  <p className="mt-1 text-[0.8125rem] uppercase tracking-[0.18em] text-muted">
                    Ellington · Boutique: G + 2 podiums + 10 floors · Beside the Meydan
                    Horizon crystal lagoon
                  </p>
                  <p className="mt-5 text-[0.95rem] text-muted">
                    One-bedroom through three-bedroom plus study. Freehold, anticipated
                    service charge £3.25 per sq ft. This is the premium option of the three,
                    in a low-volume, higher-value district, from a developer known for
                    design-led buildings.
                  </p>
                  <p className="mt-4 text-[0.9rem] text-muted">
                    Payment is 20% on booking, staged instalments across construction, and
                    30% on completion.
                  </p>
                  {/* ASK RAF: starting prices by configuration before publishing them here */}
                  <p className="mt-4 text-[0.9rem] text-muted">
                    Starting prices by configuration are confirmed on enquiry, in pounds.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <p className="mx-auto mt-10 max-w-3xl text-center text-muted">
              Availability changes week to week. Use the form or call us, and we will confirm
              what is open right now, with the full cost and the net yield on each.
            </p>
            <div className="mt-8 flex justify-center">
              <a href="#get-prices" className="btn-gold !w-auto px-10 text-center">
                Get apartment prices and availability
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ WHICH SIZE ============ */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-28">
        <Reveal>
          <p className="kicker">Matching the unit to the plan</p>
          <h2 className="display mt-4 max-w-2xl text-4xl sm:text-5xl">
            One, two or three bedroom, which to buy
          </h2>
          <p className="mt-6 max-w-2xl text-muted">
            Whether you call it an apartment or a flat, the right size depends on whether
            you are optimising for yield, for capital growth, or for your own use.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line lg:grid-cols-3">
          {[
            {
              head: "Studios and one-bedroom flats",
              body: "Deliver the highest gross yields and the widest tenant pool, so they let and re-let fastest. They carry the lowest entry price and the lowest total service charge. This is where first-time buyers and yield-focused investors usually start.",
            },
            {
              head: "Two-bedroom",
              body: "Balance yield against a larger, more stable tenant, often a family or a sharing professional pair. Rental demand is deep. This is the most common buy-to-let choice.",
            },
            {
              head: "Three and four-bedroom",
              body: "Trade yield for capital growth and scarcity. Fewer are built, so they hold value well, but they let more slowly and the service charge bill is larger.",
            },
          ].map((c, i) => (
            <Reveal key={c.head} delay={i * 0.07} className="bg-ink p-8">
              <p className="text-[0.75rem] uppercase tracking-[0.2em] text-gold">{c.head}</p>
              <p className="mt-3 text-[0.92rem] text-muted">{c.body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-3xl text-muted">
            If the plan is income, weight toward one and two-bed. If the plan is long-term
            growth, larger units in prime areas do more work.
          </p>
        </Reveal>
      </section>

      {/* ============ PORTFOLIO ============ */}
      <section className="border-y border-line bg-ink-2">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <Reveal>
              <p className="kicker">The pattern we see</p>
              <h2 className="display mt-4 text-4xl sm:text-5xl">
                Why buyers start with one and end with several
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-4 text-muted">
                <p>
                  An apartment is the accessible way into Dubai property, and it is often the
                  first unit rather than the only one. We have watched buyers begin with a
                  single entry-level apartment, see the net yield land where we said it
                  would, and come back to add a second and a third. An entry that starts near
                  £365,000 becomes a portfolio worth several times that, built one confident
                  step at a time.
                </p>
                <p>
                  The reason is simple. Yield-per-unit thinking beats single-home thinking.
                  Once the first unit is let and returning, the second is a smaller decision,
                  and the third smaller still. Many of our buyers start with one apartment
                  and build from there.
                </p>
                <p className="text-cream/90">
                  If that is the direction you are thinking in, say so on the form. We plan
                  the entry differently when it is the first of several.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ WHAT UK BUYERS GET WRONG ============ */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-28">
        <Reveal>
          <p className="kicker">Before you shortlist</p>
          <h2 className="display mt-4 max-w-2xl text-4xl sm:text-5xl">
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
                <span className="display mt-0.5 text-2xl text-gold/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg text-cream">{m.title}</h3>
                  <p className="mt-2 text-[0.95rem] text-muted">{m.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-10 max-w-3xl text-muted">
            We tell you these things before you buy, not after. That is the point of using an
            advisor rather than a portal.
          </p>
        </Reveal>
      </section>

      {/* ============ FAQ ============ */}
      <section className="border-y border-line bg-ink-2">
        <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
          <Reveal>
            <p className="kicker">The questions, answered plainly</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">Buying from the UK, answered</h2>
          </Reveal>
          <div className="mt-10 space-y-8">
            {faq.map((f) => (
              <Reveal key={f.q}>
                <div className="border-b border-line pb-8">
                  <h3 className="text-lg text-cream">{f.q}</h3>
                  {/* VERIFY with RAF: the remittance and management answer, per copy doc */}
                  <p className="mt-3 text-[0.95rem] text-muted">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CLOSING FORM ============ */}
      <section id="get-prices" className="relative scroll-mt-16 overflow-hidden">
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
            <h2 className="display mt-4 text-4xl sm:text-5xl">
              See the real numbers on a Dubai apartment
            </h2>
            <p className="mt-6 max-w-md text-muted">
              Tell us your budget and your plan. We will send current apartments that fit,
              with the net yield and the full cost, not the headline figure. Prices in
              pounds, within one working day.
            </p>
            <p className="mt-4 text-sm text-muted">
              Prefer to talk? Call or WhatsApp us in UK hours.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="border border-line bg-ink/80 p-7 backdrop-blur-md sm:p-8">
              <LeadForm
                formName="closing"
                buttonLabel="Get apartment prices and availability"
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
