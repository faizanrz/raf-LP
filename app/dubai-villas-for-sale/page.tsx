import type { Metadata } from "next";
import ContactRow from "@/components/ContactRow";
import InlineCta from "@/components/InlineCta";
import ParallaxImg from "@/components/ParallaxImg";
import StickyCta from "@/components/StickyCta";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import LeadForm from "@/components/LeadForm";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Villas for Sale in Dubai | Prices, Communities & Fees for UK Buyers",
  description:
    "Compare Dubai villa communities on price, service charges and handover. Freehold for UK buyers. Villas from AED 4.9M. Speak to a DLD licensed broker.",
};

/*
  BEFORE GO-LIVE, confirm with RAF:
  - UK phone, WhatsApp and callback links (lib/site.ts)
  - Community table figures (price/sqft, service charges, plot sizes)
  - Broker names, photographs and RERA BRN numbers
  Market figures compiled July 2026: DLD 2025 annual (AED 917bn / 270k+ / +20%,
  via Dubai Media Office Jan 2026), residential AED 682.5bn via DLD Annual Report,
  yields Engel & Völkers H1 2026, growth forecast ValuStrat via Global Property
  Guide June 2026. Reconfirm at publish and quarterly.
  - Lunaya handover date is deliberately omitted (published sources conflict)
*/

const communities = [
  {
    name: "Dubai Hills Estate",
    tier: "Established",
    sqft: "AED 2,300 to 2,900",
    sqftGbp: "£489 to £617",
    plot: "5,000 to 10,000 sqft",
    handover: "Ready, active resale market",
    service: "AED 3.00 to 4.50",
    dxb: "20 to 25 min",
    school: "GEMS Wellington Academy Al Khail, adjacent",
  },
  {
    name: "Arabian Ranches",
    tier: "Established",
    sqft: "AED 1,500 to 2,000",
    sqftGbp: "£319 to £426",
    plot: "5,500 to 12,000 sqft",
    handover: "Ready, mature community",
    service: "AED 2.50 to 4.00",
    dxb: "25 to 30 min",
    school: "JESS Arabian Ranches, in community",
  },
  {
    name: "Damac Hills",
    tier: "Established",
    sqft: "AED 1,300 to 1,800",
    sqftGbp: "£277 to £383",
    plot: "4,000 to 8,000 sqft",
    handover: "Ready",
    service: "AED 3.50 to 5.00",
    dxb: "30 to 35 min",
    school: "Jebel Ali School, in community",
  },
  {
    name: "Tilal Al Ghaf",
    tier: "Established",
    sqft: "AED 2,000 to 2,600",
    sqftGbp: "£426 to £553",
    plot: "4,500 to 9,000 sqft",
    handover: "Ready, new phases off plan",
    service: "AED 3.50 to 5.00",
    dxb: "30 to 35 min",
    school: "RGS Guildford Dubai, in community",
  },
  {
    name: "Jumeirah Golf Estates",
    tier: "Established",
    sqft: "AED 1,800 to 2,400",
    sqftGbp: "£383 to £511",
    plot: "6,000 to 15,000 sqft",
    handover: "Ready",
    service: "AED 4.00 to 6.00",
    dxb: "30 to 35 min",
    school: "Victory Heights Primary, adjacent",
  },
  {
    name: "Jebel Ali corridor",
    tier: "Emerging",
    sqft: "AED 1,400 to 1,900",
    sqftGbp: "£298 to £404",
    plot: "3,000 to 7,000 sqft",
    handover: "Off plan, phased",
    service: "AED 3.00 to 5.00, project specific",
    dxb: "35 to 40 min",
    school: "The Arbor School, Al Furjan",
  },
  {
    name: "Dubailand",
    tier: "Emerging",
    sqft: "AED 1,000 to 1,500",
    sqftGbp: "£213 to £319",
    plot: "3,000 to 6,000 sqft",
    handover: "Off plan led",
    service: "AED 3.00 to 4.50",
    dxb: "25 to 30 min",
    school: "The Aquila School, in district",
  },
  {
    name: "Villanova",
    tier: "Emerging",
    sqft: "AED 1,100 to 1,450",
    sqftGbp: "£234 to £309",
    plot: "3,000 to 5,500 sqft",
    handover: "Ready and phased",
    service: "AED 2.50 to 3.50",
    dxb: "25 to 30 min",
    school: "The Aquila School, 10 minutes",
  },
];

const mistakes = [
  {
    title: "Service charges erode the yield",
    body: "The gross yield that sold you on Dubai is quoted before service charges. On a villa they are lower per square foot than on an apartment, but the square footage is far larger. Ask for the community's current service charge schedule, not last year's.",
  },
  {
    title: "Snagging on handover",
    body: "New villas hand over with defects. The developer's contract sets a defect liability period, typically one year. Commission an independent snagging survey before you accept handover, because the cost of missed defects transfers to you the day you sign.",
  },
  {
    title: "Community fees on villa plots",
    body: "Villa owners pay master community fees on the plot itself, a charge apartment buyers never encounter. It covers roads, landscaping and shared infrastructure, and it is billed whether the villa is occupied or not.",
  },
  {
    title: "Chiller charges billed separately",
    body: "Where district cooling applies, the cooling provider bills capacity and consumption separately from your utility account. On a large villa in summer this is a material line. Ask which communities on your shortlist carry district cooling before you compare running costs.",
  },
  {
    title: "The 60% lending cap",
    body: "Non resident buyers borrow up to 60% of the property value from UAE lenders, which means finding 40% in cash plus costs. Budget from that number, not from the UK style 90% mortgage you may be used to.",
  },
  {
    title: "You are taking a currency position",
    body: "The AED is pegged to the US dollar. A sterling buyer therefore holds a GBP/USD position for the life of the asset. Rent arrives in a dollar pegged currency and is spent in sterling, and the exchange rate on the day you sell is not the rate on the day you bought.",
  },
  {
    title: "The two year trap",
    body: "Acquisition costs of 6% to 8% mean a sale inside two years rarely recovers entry through capital growth alone. If your horizon is shorter than three years, say so before you shortlist anything, and expect us to tell you to wait.",
  },
];

export default function Page() {
  return (
    <main className="bg-ink pb-16 text-cream md:pb-0">
      <SiteHeader />
      <StickyCta ctaLabel="Request a call-back" />
      <WhatsAppFloat />

      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="hero-zoom absolute inset-0">
            <ParallaxImg
              src="/img/hero-lunaya-1920.webp"
              srcSet="/img/hero-lunaya-960.webp 960w, /img/hero-lunaya-1920.webp 1920w"
              sizes="100vw"
              alt="Villa exterior at dusk in a Dubai villa community"
              className="h-full w-full object-cover"
              fetchPriority="high"
              drift={70}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/25" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-6 pb-16 pt-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8">
          <div>
            <Reveal>
              <p className="kicker">RAF Real Estate · DLD licensed brokerage</p>
              <h1 className="display mt-5 text-5xl text-cream sm:text-6xl lg:text-7xl">
                Villas for Sale <span className="text-gold-bright">in Dubai</span>
              </h1>
              <div className="gold-rule mt-7" />
              <p className="mt-7 max-w-xl text-lg text-cream/90">
                Four bedroom villas start from AED 4.9M (£1.04M). UK nationals own freehold
                outright, and no UAE residency is required to buy.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div id="lead-form" className="border border-line bg-ink/75 p-7 backdrop-blur-md sm:p-8">
              <p className="display text-2xl">Villa prices and availability</p>
              <p className="mb-6 mt-2 text-sm text-muted">
                Current price lists, service charge schedules and payment plans, sent the same
                day by a DLD licensed broker.
              </p>
              <LeadForm formName="hero" buttonLabel="Request a call-back" />
              <div className="mt-4">
                <ContactRow />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ KEY NUMBERS BAND ============ */}
      <section className="border-b border-line bg-ink-2">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px lg:grid-cols-4">
          {[
            { n: "AED 4.9M", d: "villas from (£1.04M)" },
            { n: "6% to 8%", d: "total buying costs" },
            { n: "60%", d: "max non resident mortgage" },
            { n: "40/60", d: "payment plans available" },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06} className="px-6 py-8 text-center">
              <p className="display text-3xl text-gold-bright">{s.n}</p>
              <p className="mt-1 text-[0.78rem] uppercase tracking-[0.14em] text-muted">{s.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ WHAT IT COSTS ============ */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
        <Reveal>
          <p className="kicker">The numbers first</p>
          <h2 className="display mt-4 max-w-2xl text-4xl sm:text-5xl">
            What a Dubai villa actually costs
          </h2>
          <p className="mt-6 max-w-2xl text-muted">
            Worked on a £1,000,000 purchase, which is AED 4.7M at AED 4.70 to £1. These are the
            costs on top of the price, and they apply to every buyer, cash or mortgaged.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <Reveal delay={0.05}>
            <h3 className="text-[0.75rem] uppercase tracking-[0.2em] text-gold">
              At purchase
            </h3>
            <div className="mt-4 overflow-x-auto">
              <table className="lux-table">
                <tbody>
                  <tr>
                    <td>DLD transfer fee, 4% of price</td>
                    <td className="text-right">AED 188,000<span className="sub">£40,000</span></td>
                  </tr>
                  <tr>
                    <td>Agency commission, typically 2% plus VAT</td>
                    <td className="text-right">AED 98,700<span className="sub">£21,000</span></td>
                  </tr>
                  <tr>
                    <td>DLD admin and title deed issuance</td>
                    <td className="text-right">AED 4,580<span className="sub">£975</span></td>
                  </tr>
                  <tr>
                    <td>Trustee office fee</td>
                    <td className="text-right">AED 4,200<span className="sub">£895</span></td>
                  </tr>
                  <tr>
                    <td className="text-gold-bright">Total, cash purchase, about 6.3%</td>
                    <td className="text-right text-gold-bright">
                      AED 295,480<span className="sub">£62,870</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-5 text-sm text-muted">
              Buying with a mortgage adds a bank valuation of around AED 3,000 (£640), an
              arrangement fee of up to 1% of the loan, AED 28,200 (£6,000) here, and mortgage
              registration at 0.25% of the loan, AED 7,050 (£1,500). Total acquisition cost then
              reaches about 7.1%. Across cash and financed purchases the all in figure lands
              between 6% and 8% of the price.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <h3 className="text-[0.75rem] uppercase tracking-[0.2em] text-gold">
              Every year after
            </h3>
            <ul className="mt-4 space-y-5 border-l border-line-gold pl-6 text-[0.95rem]">
              <li>
                <span className="text-cream">Service charges.</span>{" "}
                <span className="text-muted">
                  Villa communities typically levy AED 2.50 to 6.00 per sqft per year. On a
                  5,000 sqft built up area that is AED 12,500 to 30,000 a year (£2,660 to
                  £6,380).
                </span>
              </li>
              <li>
                <span className="text-cream">Chiller charges.</span>{" "}
                <span className="text-muted">
                  Where district cooling applies it is billed separately, as a fixed capacity
                  charge plus consumption.
                </span>
              </li>
              <li>
                <span className="text-cream">Master community fees.</span>{" "}
                <span className="text-muted">
                  Levied on the villa plot itself, covering roads, parks and shared
                  infrastructure.
                </span>
              </li>
              <li>
                <span className="text-cream">Management.</span>{" "}
                <span className="text-muted">
                  Letting remotely from the UK typically costs 5% to 8% of annual rent.
                </span>
              </li>
            </ul>
            <p className="mt-6 border border-line bg-panel p-5 text-[0.95rem] text-cream/90">
              A gross yield quoted at 8% is not 8% in the bank. After service charges, cooling,
              community fees and management, the net figure is lower, and the net figure is the
              one to demand on any villa you shortlist, calculated from achieved rents rather
              than projections.
            </p>
          </Reveal>
        </div>
        <Reveal>
          <InlineCta
            label="Get in touch"
            sub="Want these numbers run on your budget? We will send the itemised sheet the same day."
          />
        </Reveal>
      </section>

      {/* ============ FULL-BLEED DIVIDER ============ */}
      <section className="relative h-[52vh] min-h-[380px] overflow-hidden">
        <ParallaxImg
          src="/img/lunaya-dusk-1200.webp"
          alt="Villas reflected in still water at dusk"
          className="h-full w-full object-cover"
          loading="lazy"
          drift={70}
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
            <Reveal>
              <p className="display max-w-2xl text-3xl leading-snug text-cream sm:text-4xl">
                The right villa is a set of numbers before it is a photograph.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ COMMUNITIES ============ */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
        <Reveal>
          <p className="kicker">The map</p>
          <h2 className="display mt-4 max-w-2xl text-4xl sm:text-5xl">
            Where Dubai&apos;s villa communities are
          </h2>
          <p className="mt-6 max-w-2xl text-muted">
            Every community below is sold by every broker in Dubai, including the ones we do not
            hold inventory in. Compare them on the numbers.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 overflow-x-auto border border-line">
            <table className="lux-table min-w-[900px]">
              <thead>
                <tr>
                  <th>Community</th>
                  <th>Price per sqft</th>
                  <th>Typical plot</th>
                  <th>Handover</th>
                  <th>Service charge / sqft / yr</th>
                  <th>Drive to DXB</th>
                  <th>Nearest British school</th>
                </tr>
              </thead>
              <tbody>
                {communities.map((c) => (
                  <tr key={c.name}>
                    <td>
                      <span className="text-cream">{c.name}</span>
                      <span className="sub">{c.tier}</span>
                    </td>
                    <td>
                      {c.sqft}
                      <span className="sub">{c.sqftGbp}</span>
                    </td>
                    <td>{c.plot}</td>
                    <td>{c.handover}</td>
                    <td>{c.service}</td>
                    <td>{c.dxb}</td>
                    <td>{c.school}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[0.78rem] text-muted/80">
            Indicative ranges at July 2026, compiled from DLD transaction data and community
            service charge schedules. Confirm current figures with a broker before relying on
            them.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal delay={0.05}>
            <div className="h-full border border-line bg-panel p-8">
              <p className="kicker">Established</p>
              <p className="display mt-3 text-2xl text-cream">You pay for certainty</p>
              <ul className="mt-5 space-y-3 text-[0.92rem] text-muted">
                <li className="flex gap-3">
                  <span className="mt-2 h-px w-4 shrink-0 bg-gold" />
                  Proven resale markets, with years of recorded transactions a seller can point
                  to
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-px w-4 shrink-0 bg-gold" />
                  Schools, parks and retail built and operating, not announced
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-px w-4 shrink-0 bg-gold" />
                  Higher entry: Dubai Hills Estate and Tilal Al Ghaf top the villa market on
                  price per square foot
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="h-full border border-line bg-panel p-8">
              <p className="kicker">Emerging</p>
              <p className="display mt-3 text-2xl text-cream">You are paid for patience</p>
              <ul className="mt-5 space-y-3 text-[0.92rem] text-muted">
                <li className="flex gap-3">
                  <span className="mt-2 h-px w-4 shrink-0 bg-gold" />
                  Jebel Ali, Dubailand and Villanova price 30% to 50% lower per square foot
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-px w-4 shrink-0 bg-gold" />
                  The trade is time and infrastructure risk: parts of these districts are
                  announced rather than open, and delivery may not match the masterplan&apos;s
                  schedule
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-px w-4 shrink-0 bg-gold" />
                  Right for a five year horizon or longer. A buyer who needs certainty inside
                  two years should stay established and pay for it
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <InlineCta
            label="Get in touch"
            sub="Tell us your budget and we will send current availability in the communities that fit it."
          />
        </Reveal>
      </section>

      {/* ============ VILLA VS TOWNHOUSE VS APARTMENT ============ */}
      <section className="border-y border-line bg-ink-2">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <Reveal>
            <p className="kicker">Confirming the choice</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">Villa, townhouse or apartment</h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                head: "Gross yield",
                body: "Villas average 4.5% gross against 5.1% for townhouses and 6.9% for apartments, per Engel & Völkers Dubai's H1 2026 review. The income case favours apartments, and it always has.",
              },
              {
                head: "Service charge burden",
                body: "Lower per square foot on villas, but on far more square feet. Townhouses sit between the two.",
              },
              {
                head: "Resale liquidity",
                body: "Apartments sell faster. The buyer pool for a specific villa in a specific community is smaller, and time to sale is longer.",
              },
              {
                head: "Capital growth",
                body: "Land appreciates and buildings depreciate. Villas hold the land: ValuStrat forecasts villa capital values up 17.7% in 2026 against roughly 10% citywide. A third party forecast, not a promise.",
              },
            ].map((c, i) => (
              <Reveal key={c.head} delay={i * 0.07} className="bg-ink-2 p-7">
                <p className="text-[0.75rem] uppercase tracking-[0.2em] text-gold">{c.head}</p>
                <p className="mt-3 text-[0.92rem] text-muted">{c.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-3xl text-muted">
              In short, a villa trades income for growth and liquidity for land. If you are
              buying primarily for rental income, an apartment is the better instrument. If you
              are buying space, schools and a long hold, the villa case stands.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ WHAT UK BUYERS GET WRONG ============ */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
        <Reveal>
          <p className="kicker">Read this before you shortlist</p>
          <h2 className="display mt-4 max-w-2xl text-4xl sm:text-5xl">
            What UK buyers get wrong
          </h2>
          <p className="mt-6 max-w-2xl text-muted">
            Seven things we explain to UK clients after they have spoken to other brokers, not
            before.
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
        <Reveal>
          <InlineCta
            label="Get in touch"
            sub="Put any of these seven to a broker on a call. If the numbers do not work for you, we will say so."
          />
        </Reveal>
      </section>

      {/* ============ LARGE FAMILIES ============ */}
      <section className="border-y border-line bg-ink-2">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-8">
          <Reveal>
            <p className="kicker">Space, schools, security</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">
              Villas in Dubai for large families
            </h2>
            <div className="mt-7 space-y-5 text-[0.98rem] text-muted">
              <p>
                Four bedroom villas in Dubai typically run from about 3,000 to 5,500 sqft, and
                five bedroom layouts from 4,500 to well beyond 7,000 sqft, on plots that give
                every child a bedroom and the garden UK houses at this price cannot. Layouts
                routinely include a maid&apos;s room, and larger plots add a driver&apos;s room,
                a study and a private pool.
              </p>
              <p>
                British curriculum schooling is the practical anchor. School runs of five to
                ten minutes are normal in gated communities, and that fact shapes where UK
                families buy more than any other.
              </p>
            </div>
            <div className="mt-6">
              <p className="text-[0.6875rem] uppercase tracking-[0.2em] text-gold">
                British curriculum, on the doorstep
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {[
                  "JESS Arabian Ranches",
                  "Jebel Ali School · Damac Hills",
                  "RGS Guildford Dubai · Tilal Al Ghaf",
                  "The Arbor School · Al Furjan",
                  "The Aquila School · Dubailand",
                ].map((s) => (
                  <li
                    key={s}
                    className="border border-line bg-panel px-3.5 py-1.5 text-[0.8rem] text-cream/85"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-6 text-[0.98rem] text-muted">
              The communities are gated with staffed entry, and the newer masterplans add resort
              infrastructure. Lagoon and beach access has become the defining amenity of the
              current villa generation, and it changes how a family actually uses the house in
              the hotter months.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="relative h-[420px] w-full overflow-hidden border border-line lg:h-[560px]">
              <ParallaxImg
                src="/img/lunaya-park-1200.webp"
                alt="Townhouses facing a landscaped community park"
                className="h-full w-full object-cover"
                loading="lazy"
                drift={45}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ INVENTORY: LUNAYA ============ */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
          <Reveal>
            <p className="kicker">Villas available now</p>
            <h2 className="display mt-4 max-w-3xl text-4xl sm:text-5xl">
              A shortlist, not a catalogue
            </h2>
            <p className="mt-6 max-w-2xl text-muted">
              We put forward one villa project to UK buyers at this price point, and here is the
              reasoning.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
            <Reveal delay={0.08}>
              <div className="grid grid-cols-2 gap-3">
                <img
                  src="/img/lunaya-lagoon-900.webp"
                  alt="Waterway running past villa terraces at Lunaya"
                  className="h-full min-h-[420px] w-full border border-line object-cover"
                  loading="lazy"
                />
                <div className="grid grid-rows-2 gap-3">
                  <img
                    src="/img/lunaya-night-900.webp"
                    alt="Villa at night with warm interior lighting"
                    className="aspect-[4/5] h-full w-full border border-line object-cover"
                    loading="lazy"
                  />
                  <img
                    src="/img/lunaya-living-1200.webp"
                    alt="Open plan villa living and dining room"
                    className="aspect-[4/5] h-full w-full border border-line object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <h3 className="display text-3xl text-cream sm:text-4xl">Lunaya by Zaya</h3>
              <p className="mt-2 text-[0.8125rem] uppercase tracking-[0.18em] text-muted">
                4 and 5 bedroom villas and townhouses · Jebel Ali
              </p>

              <p className="mt-6 text-[0.98rem] text-muted">
                A 900,000 sqft swimmable lagoon runs through the community, villas start at
                2,966 sqft, and the payment structure is the reason it makes this page. Lunaya
                sells on a 40/60 plan: 40% staged across the construction period and 60% due at
                handover. Set that against the financing constraint above. A non resident
                buying a ready villa must find 40% in cash on day one against the 60% lending
                cap. Here the same 40% is spread across the build in instalments, which is a
                materially different cash flow for a UK buyer.
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-line py-6 text-sm">
                <div>
                  <dt className="text-[0.6875rem] uppercase tracking-[0.18em] text-gold">From</dt>
                  <dd className="mt-1 text-lg text-cream">AED 4.9M <span className="text-sm text-muted">£1.04M</span></dd>
                </div>
                <div>
                  <dt className="text-[0.6875rem] uppercase tracking-[0.18em] text-gold">Payment plan</dt>
                  <dd className="mt-1 text-lg text-cream">40 / 60</dd>
                </div>
                <div>
                  <dt className="text-[0.6875rem] uppercase tracking-[0.18em] text-gold">Villa sizes</dt>
                  <dd className="mt-1 text-lg text-cream">From 2,966 sqft</dd>
                </div>
                <div>
                  <dt className="text-[0.6875rem] uppercase tracking-[0.18em] text-gold">Access</dt>
                  <dd className="mt-1 text-lg text-cream">Sheikh Zayed Road frontage</dd>
                </div>
              </dl>

              <a href="#get-prices" className="btn-gold mt-8 text-center">
                Request a call-back about Lunaya
              </a>

              <p className="mt-4 text-sm text-muted">
                Handover schedule, floor plans and the full payment calendar are confirmed on
                enquiry, in writing.
              </p>

              <p className="mt-6 text-sm text-muted">
                Ultra prime villa and residence stock in Downtown Dubai exists at a different
                price point. If that is the brief,{" "}
                <a href="#get-prices" className="text-gold hover:text-gold-bright">
                  request a call-back
                </a>{" "}
                and we will take it from there.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ WHY RAF ============ */}
      <section className="border-y border-line bg-ink-2">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <Reveal>
            <p className="kicker">The market, sourced</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">Why buy through RAF</h2>
          </Reveal>

          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-3">
            {/* Figures compiled July 2026. Reconfirm DLD headline numbers at publish and quarterly. */}
            {[
              {
                stat: "AED 917bn",
                sub: "£195bn of Dubai property transactions in 2025 across 270,000 plus deals, up 20% year on year, the fifth consecutive record year. Source: Dubai Land Department, January 2026.",
              },
              {
                stat: "AED 682.5bn",
                sub: "£145bn of residential sales across 214,912 transactions in 2025, up 30.6% in value on 2024. Source: DLD 2025 Annual Report.",
              },
              {
                stat: "129,600",
                sub: "new investors entered the Dubai market in 2025, up 23% on the year before. Source: Dubai Land Department.",
              },
            ].map((s, i) => (
              <Reveal key={s.stat} delay={i * 0.07} className="bg-ink-2 p-8">
                <p className="display text-3xl text-gold-bright">{s.stat}</p>
                <p className="mt-3 text-[0.85rem] text-muted">{s.sub}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              <p className="text-muted">
                RAF Real Estate is a Dubai Land Department licensed brokerage. Every broker who
                will speak to you carries a RERA broker card, and the card number sits beside
                their name below. We transact in the communities on this page weekly, we hold
                the current service charge schedules, and we will show you achieved rents rather
                than projections.
              </p>
              {/* PLACEHOLDER: real broker names, photographs and BRN numbers from RAF */}
              <div className="grid grid-cols-2 gap-4">
                {["Broker name", "Broker name"].map((n, i) => (
                  <div key={i} className="border border-line bg-panel p-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-line-gold text-gold">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" />
                      </svg>
                    </div>
                    <p className="mt-4 text-cream">{n}</p>
                    <p className="text-[0.78rem] text-muted">RERA BRN 00000 · photograph to follow</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ CLOSING FORM ============ */}
      <section id="get-prices" className="relative scroll-mt-16 overflow-hidden">
        <ParallaxImg
          src="/img/lunaya-rooftop-1200.webp"
          alt="Rooftop terrace at night"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          drift={60}
        />
        <div className="absolute inset-0 bg-ink/80" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-32">
          <Reveal>
            <p className="kicker">One conversation</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">
              You have seen the numbers. Now get the current ones.
            </h2>
            <p className="mt-6 max-w-md text-muted">
              Price lists, service charge schedules and payment calendars for the communities on
              this page, sent the same day. RAF works UK hours by phone and WhatsApp.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="border border-line bg-ink/80 p-7 backdrop-blur-md sm:p-8">
              <LeadForm formName="closing" buttonLabel="Request a call-back" />
              <div className="mt-4">
                <ContactRow />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter
        links={[
          { href: "/risks-of-buying-property-in-dubai/", label: "The risks of buying property in Dubai" },
          { href: "/buying-property-in-dubai-from-uk/", label: "Buying property in Dubai from the UK" },
        ]}
      />
    </main>
  );
}
