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
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Buying Property in Dubai from the UK | Process, Costs, Tax & Golden Visa",
  description:
    "How a UK resident buys freehold property in Dubai. Full fee breakdown, off plan explained, 60% LTV for non residents, Golden Visa threshold, and what you still owe HMRC.",
  alternates: { canonical: "/buying-property-in-dubai-from-uk/" },
  openGraph: {
    title: "Buying Property in Dubai from the UK | Process, Costs, Tax & Golden Visa",
    description:
      "How a UK resident buys freehold property in Dubai. Full fee breakdown, off plan explained, and what you still owe HMRC.",
    url: "/buying-property-in-dubai-from-uk/",
    images: [{ url: "/img/hero-mrc-1920.webp", width: 1920, height: 1080 }],
  },
};

/*
  BEFORE GO-LIVE, confirm with RAF:
  - Written permission to use the Mr. C brand name on this page (licensed brand: page only, never ad copy)
  Figures compiled July 2026: Golden Visa AED 2M threshold and Feb 2026 upfront-payment
  rule removal (federal circular 20 Feb 2026); SDLT £37,500 resident / £47,500 non-resident
  on £500k (HMRC rates from 1 Apr 2025); EIBOR-linked rates 3.79% to 4.5% (May 2026).
  Reconfirm the Golden Visa rule and thresholds at publish and quarterly.
  - Tier inventory, prices and availability (113 Residences, Lunaya, Mr. C Residences)
  - 113 Residences facts are taken from the IMAN factsheet (Q2 2029 completion, 20/10/10/10/50 plan)
  - Lunaya handover date deliberately omitted (published sources conflict)
*/

const freeholdAreas = [
  "Downtown Dubai",
  "Dubai Marina",
  "Palm Jumeirah",
  "Business Bay",
  "Dubai Hills Estate",
  "Jumeirah Village",
  "Al Sufouh",
  "Emirates Hills",
  "Arabian Ranches",
  "Jebel Ali corridor",
];

const steps = [
  {
    n: "01",
    title: "Offer made",
    body: "Usually through the agent, in writing. On ready property the price is negotiated with the seller; on off plan it is the developer's published price list.",
    time: "Day one",
  },
  {
    n: "02",
    title: "Deposit paid",
    body: "Typically 10% on a resale purchase, held against the contract. On off plan, the booking amount is set by the developer's payment plan.",
    time: "Within days of the offer",
  },
  {
    n: "03",
    title: "Memorandum of Understanding signed",
    body: "Form F, the standard DLD sale contract, sets the price, the completion date and who pays what. Both parties sign it before anything moves.",
    time: "Same week",
  },
  {
    n: "04",
    title: "No Objection Certificate",
    body: "The developer confirms the seller has no outstanding service charges or obligations on the unit and clears the sale to proceed.",
    time: "Five to ten working days",
  },
  {
    n: "05",
    title: "Transfer at the Dubai Land Department",
    body: "Ownership transfers at a DLD trustee office, the 4% transfer fee is paid, and the title deed is issued in your name. You do not need to be in Dubai; a power of attorney can complete for you.",
    time: "One appointment",
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
              src="/img/hero-mrc-1920.webp"
              srcSet="/img/hero-mrc-960.webp 960w, /img/hero-mrc-1920.webp 1920w"
              sizes="100vw"
              alt="Dubai towers on Sheikh Zayed Road at dusk"
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
                Buying Property in Dubai <span className="text-gold-bright">from the UK</span>
              </h1>
              <div className="gold-rule mt-7" />
              <p className="mt-7 max-w-xl text-lg text-cream/90">
                A UK resident can buy freehold property in Dubai with nothing more than a valid
                passport. No residency visa, no UAE bank account, and the purchase can be
                completed remotely from the UK.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div id="lead-form" className="border border-line bg-ink/75 p-7 backdrop-blur-md sm:p-8">
              <p className="display text-2xl">The full cost breakdown</p>
              <p className="mb-6 mt-2 text-sm text-muted">
                Every fee on a Dubai purchase at your budget, itemised in AED and GBP, sent the
                same day by a DLD licensed broker.
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
            { n: "AED 1.8M", d: "entry price (£383,000)" },
            { n: "6% to 8%", d: "total buying costs" },
            { n: "60%", d: "max non resident mortgage" },
            { n: "AED 2M", d: "Golden Visa threshold (£426,000)" },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06} className="px-6 py-8 text-center">
              <p className="display text-3xl text-gold-bright">{s.n}</p>
              <p className="mt-1 text-[0.78rem] uppercase tracking-[0.14em] text-muted">{s.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ CAN A UK CITIZEN BUY ============ */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <Reveal>
            <p className="kicker">The short answer</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">
              Can a UK citizen buy property in Dubai?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted">
              Yes, in designated freehold zones, which now cover almost everywhere a UK buyer
              would look. Foreign nationals hold full ownership title, registered at the Dubai
              Land Department in their own name. A valid passport is the only document required
              at the point of purchase. No residency visa, no local sponsor, no UAE bank
              account.
            </p>
            <p className="mt-4 text-muted">
              The purchase itself can be completed without flying out. A power of attorney,
              notarised and attested, lets a representative sign the Memorandum of
              Understanding and attend the transfer appointment on your behalf, and funds move
              through the DLD&apos;s trustee system rather than to the seller directly. UK
              buyers routinely complete from London. Flying out to see the property before you
              commit remains a good idea for reasons that have nothing to do with paperwork.
            </p>
            <p className="mt-4 text-[0.6875rem] uppercase tracking-[0.2em] text-gold">
              Principal freehold areas
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {freeholdAreas.map((a) => (
                <li key={a} className="border border-line bg-panel px-3.5 py-1.5 text-[0.8rem] text-cream/85">
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="border-y border-line bg-ink-2">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-28">
          <Reveal>
            <p className="kicker">Offer to title deed</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">The buying process, step by step</h2>
          </Reveal>
          <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06} className="flex flex-col bg-ink-2 p-6">
                <span className="display text-2xl text-gold/70">{s.n}</span>
                <h3 className="mt-3 text-[1.05rem] leading-snug text-cream">{s.title}</h3>
                <p className="mt-2 flex-1 text-[0.85rem] text-muted">{s.body}</p>
                <p className="mt-4 text-[0.7rem] uppercase tracking-[0.16em] text-gold">{s.time}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-3xl text-muted">
              A cash purchase typically runs two to four weeks from offer to transfer. A
              mortgaged purchase runs six to eight weeks, because the lender's valuation and
              final offer letter sit between the MOU and the NOC.
            </p>
            <p className="mt-4 max-w-3xl text-muted">
              Two protections are worth knowing about before you start. Every practising agent
              must hold a RERA broker card, which you can ask to see and verify, and every off
              plan project must have a DLD registered escrow account before it can legally take
              your money. Both checks take minutes, and a seller or agent who resists either
              one has answered your question.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ WHAT IT COSTS ============ */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-28">
        <Reveal>
          <p className="kicker">The numbers, itemised</p>
          <h2 className="display mt-4 text-4xl sm:text-5xl">What it costs</h2>
          <p className="mt-6 max-w-2xl text-muted">
            Worked on a £1,000,000 purchase, which is AED 4.7M at AED 4.70 to £1. The awkward
            numbers are left in on purpose.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal delay={0.05}>
            <div className="overflow-x-auto border border-line">
              <table className="lux-table">
                <tbody>
                  <tr>
                    <td>DLD transfer fee, 4% of price</td>
                    <td className="text-right">AED 188,000<span className="sub">£40,000</span></td>
                  </tr>
                  <tr>
                    <td>DLD administration fee</td>
                    <td className="text-right">AED 580<span className="sub">£123</span></td>
                  </tr>
                  <tr>
                    <td>Registration trustee office fee</td>
                    <td className="text-right">AED 4,200<span className="sub">£895</span></td>
                  </tr>
                  <tr>
                    <td>Title deed issuance</td>
                    <td className="text-right">AED 250<span className="sub">£53</span></td>
                  </tr>
                  <tr>
                    <td>Agency commission, typically 2% plus VAT</td>
                    <td className="text-right">AED 98,700<span className="sub">£21,000</span></td>
                  </tr>
                  <tr>
                    <td>Conveyancing and legal representation, typical</td>
                    <td className="text-right">AED 8,000<span className="sub">£1,700</span></td>
                  </tr>
                  <tr>
                    <td className="text-gold-bright">Total, cash purchase, about 6.4%</td>
                    <td className="text-right text-gold-bright">AED 299,730<span className="sub">£63,770</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="flex h-full flex-col justify-between gap-6">
              <p className="text-muted">
                Buying with a mortgage adds the lender's valuation at around AED 3,000 (£640),
                an arrangement fee of up to 1% of the loan, AED 28,200 (£6,000) on a 60% loan
                here, and mortgage registration at 0.25% of the loan, AED 7,050 (£1,500). The
                all in figure then reaches about 7.2%.
              </p>
              <div className="border border-line-gold/60 bg-panel p-6">
                <p className="display text-2xl text-gold-bright">6% to 8%</p>
                <p className="mt-2 text-[0.9rem] text-muted">
                  is where total acquisition costs land on almost every Dubai purchase. You will
                  meet this number again below: it is the reason Dubai suits a three year
                  minimum horizon, because a sale inside two years rarely recovers entry costs
                  through capital growth alone.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <InlineCta
            label="Get in touch"
            sub="We will run this exact table on your budget, in AED and GBP, the same day."
          />
        </Reveal>
      </section>

      {/* ============ FULL-BLEED DIVIDER ============ */}
      <section className="relative h-[52vh] min-h-[380px] overflow-hidden">
        <ParallaxImg
          src="/img/mrc-sunset-1600.webp"
          alt="Rooftop pool terrace above Dubai at sunset"
          className="h-full w-full object-cover"
          loading="lazy"
          drift={70}
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
            <Reveal>
              <p className="display max-w-2xl text-3xl leading-snug text-cream sm:text-4xl">
                The broker who finishes the sentence is the one worth calling.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ OFF PLAN OR READY ============ */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
        <Reveal>
          <p className="kicker">Read before you commit a deposit</p>
          <h2 className="display mt-4 max-w-2xl text-4xl sm:text-5xl">Off plan or ready property</h2>
          <p className="mt-6 max-w-2xl text-muted">
            Off plan means purchasing before construction completes, with payments staged
            against build milestones rather than paid at transfer. It is neither a bargain nor a
            trap by definition. It is a different contract with different risks, and it deserves
            a proper explanation rather than a pitch.
          </p>
        </Reveal>

        <div className="mt-14 space-y-12">
          <Reveal>
            <div className="grid gap-8 border-t border-line pt-10 lg:grid-cols-[0.35fr_0.65fr]">
              <h3 className="display text-2xl text-cream">Escrow, and what it actually protects</h3>
              <div className="text-[0.95rem] text-muted">
                <p>
                  By law, buyer payments on off plan sales sit in an escrow account regulated by
                  the Dubai Land Department, released to the developer only against verified
                  construction progress.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="border border-line bg-panel p-5">
                    <p className="text-[0.7rem] uppercase tracking-[0.18em] text-gold">Escrow protects</p>
                    <p className="mt-2 text-[0.9rem]">
                      Your staged capital against misappropriation. The developer cannot spend
                      your instalments on another project or on anything other than this
                      building.
                    </p>
                  </div>
                  <div className="border border-line bg-panel p-5">
                    <p className="text-[0.7rem] uppercase tracking-[0.18em] text-gold">Escrow does not protect</p>
                    <p className="mt-2 text-[0.9rem]">
                      The delivery date, the build quality, or the market value of the finished
                      asset. Those risks remain yours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid gap-8 border-t border-line pt-10 lg:grid-cols-[0.35fr_0.65fr]">
              <h3 className="display text-2xl text-cream">Payment plans, in cash terms</h3>
              <div className="text-[0.95rem] text-muted">
                <p>
                  A 40/60 plan on a AED 4.9M (£1.04M) villa means 40%, roughly AED 1.96M
                  (£417,000), staged in instalments across the construction period, with AED
                  2.94M (£626,000) due on handover. Compare the ready alternative: a non
                  resident buying a completed property at the same price needs the same AED
                  1.96M (£417,000) in cash on day one, because UAE lenders cap non residents at
                  60% loan to value. The off plan structure is a financing mechanism, not a
                  discount. Treat it as one, and price the delivery risk you are taking in
                  exchange.
                </p>
                <p className="mt-4">
                  Two further details change the arithmetic. The 4% DLD fee on off plan is
                  usually payable on the full price at registration, not staged with the
                  instalments, so budget it up front. And a handover payment due in 2028 or
                  2029 is a sterling liability at an unknown future exchange rate, which is an
                  argument for forward planning with a currency broker rather than hoping.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid gap-8 border-t border-line pt-10 lg:grid-cols-[0.35fr_0.65fr]">
              <h3 className="display text-2xl text-cream">Delivery risk, and how to read a developer</h3>
              <div className="text-[0.95rem] text-muted">
                <p>
                  Projects are delayed. Some are cancelled. Before committing a deposit, read
                  the developer's completion record the way a lender would:
                </p>
                <ul className="mt-4 space-y-2.5">
                  {[
                    "Prior projects actually delivered, visited if possible, not renders",
                    "Average delay against the announced handover date on those projects",
                    "Whether the developer has completed at this scale before, in this asset class",
                    "Whether the project's escrow account is registered with the DLD, which you can verify",
                  ].map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-2.5 h-px w-4 shrink-0 bg-gold" />
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="mt-4">
                  A first time developer, or one whose track record sits entirely in a different
                  asset class, carries more risk than the marketing suggests.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid gap-8 border-t border-line pt-10 lg:grid-cols-[0.35fr_0.65fr]">
              <h3 className="display text-2xl text-cream">Exiting before completion</h3>
              <div className="text-[0.95rem] text-muted">
                <p>
                  Off plan contracts can usually be assigned to another buyer, but developers
                  commonly restrict resale until a threshold percentage of the price has been
                  paid, often 30% to 40%, and charge an assignment fee. In a rising market
                  assignment is straightforward. In a soft market the pool of buyers for a
                  part paid contract on an unbuilt unit is thin, and exiting can mean
                  discounting. Enter an off plan purchase intending to complete it.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <InlineCta
            label="Get in touch"
            sub="Name a project and we will pull its escrow registration and the developer's delivery record."
          />
        </Reveal>
      </section>

      {/* ============ FINANCING ============ */}
      <section className="border-y border-line bg-ink-2">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-28">
          <Reveal>
            <p className="kicker">Borrowing as a non resident</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">Financing for non residents</h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                head: "60% cap",
                body: "UAE lenders cap non resident borrowing at 60% of the property value. Plan around a 40% deposit plus the 6% to 8% in costs, all in cash.",
              },
              {
                head: "What lenders ask",
                body: "Income documentation, UK credit history, and age limits that typically require the loan to end by 65 to 70. Approval in principle is worth getting before you shortlist.",
              },
              {
                head: "Cash or mortgage",
                body: "The 4% DLD fee applies either way. A mortgage adds registration at 0.25% of the loan, an arrangement fee and a valuation, roughly one extra point on the total.",
              },
              {
                head: "Currency exposure",
                body: "The AED is pegged to the US dollar, so a GBP buyer holds a GBP/USD position for the life of the asset. Rent arrives dollar pegged and is spent in sterling.",
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
              In practice the deposit is the constraint, not the mortgage. UAE lenders will
              lend to UK residents with documented income, and rates are priced off EIBOR
              rather than the Bank of England base rate, currently around 3.79% to 4.5% per
              UAE lender guides at May 2026. What catches buyers out is
              assembling 40% plus 6% to 8% in costs, in cash, in AED, on the lender&apos;s
              timeline. Get an approval in principle before you shortlist and the rest of the
              process holds no surprises.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ GOLDEN VISA ============ */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-28">
        <Reveal>
          <p className="kicker">Residency through property</p>
          <h2 className="display mt-4 text-4xl sm:text-5xl">The Golden Visa property route</h2>
          <p className="mt-6 max-w-2xl text-muted">
            {/* Threshold and Feb 2026 rule change: reconfirm at publish and quarterly */}
            A property investment at or above AED 2 million (£426,000) in DLD certified value
            qualifies the owner to apply for the 10 year UAE Golden Visa. The rules moved in
            the buyer&apos;s favour in February 2026: a federal circular removed the old
            requirement to have paid 50% or AED 1M (£213,000) upfront, so eligibility now
            rests solely on the property reaching AED 2M in certified value, regardless of any
            mortgage balance. Salary, business ownership and specialised talent routes also
            exist, with different criteria, and this page is not about them.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal delay={0.05}>
            <div className="h-full border border-line bg-panel p-8">
              <p className="kicker">What it grants</p>
              <ul className="mt-5 space-y-3 text-[0.92rem] text-muted">
                {[
                  "Ten year renewable UAE residency, without a local sponsor",
                  "Sponsorship of your spouse, children of any age, and parents",
                  "No minimum stay: residency holds even if you remain outside the UAE beyond six months",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-2.5 h-px w-4 shrink-0 bg-gold" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="h-full border border-line bg-panel p-8">
              <p className="kicker">What it does not grant</p>
              <ul className="mt-5 space-y-3 text-[0.92rem] text-muted">
                {[
                  "Citizenship, or a path to it",
                  "Automatic UAE tax residency, which depends on physical presence tests",
                  "Any exemption from UK tax obligations while you remain UK resident",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-2.5 h-px w-4 shrink-0 bg-gold" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-3xl text-muted">
            Which properties qualify: freehold at or above the threshold, held in your name,
            and multiple properties can be combined to reach the AED 2M (£426,000) figure.
            Off plan qualifies at the Oqood recorded value from a RERA approved developer,
            even before handover, with a bank NOC where the property is mortgaged. That
            matters for staged purchases: a buyer on a 40/60 payment plan can qualify on the
            recorded value without having paid the full amount. The application itself runs
            through the Dubai Land Department once the title or Oqood supports it: a medical
            test, biometrics for the Emirates ID, and the visa typically issued within weeks
            rather than months. Buy the property because it is worth owning. If it also
            carries a ten year visa, that is a benefit, not a reason.
          </p>
        </Reveal>
        <Reveal>
          <InlineCta
            label="Get in touch"
            sub="Ask us whether a specific unit clears the threshold and how the off plan mechanics apply to it."
          />
        </Reveal>
      </section>

      {/* ============ TAX ============ */}
      <section className="border-y border-line bg-ink-2">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-28">
          <Reveal>
            <p className="kicker">Both sides of the ledger</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">Tax, honestly</h2>
            <p className="mt-6 max-w-2xl text-muted">
              &quot;Zero tax in Dubai&quot; is a true statement about UAE tax law and a
              misleading statement about a UK resident&apos;s total liability. Here is the whole
              sentence.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal delay={0.05}>
              <div className="h-full border border-line bg-panel p-8">
                <p className="kicker">In the UAE</p>
                <ul className="mt-5 space-y-3 text-[0.92rem] text-muted">
                  {[
                    "No personal income tax on rental earnings",
                    "No capital gains tax on sale",
                    "No annual property tax",
                    "A 4% DLD transfer fee at purchase, in place of anything resembling stamp duty. For contrast, UK stamp duty on a £500,000 (AED 2.35M) second property is £37,500 (AED 176,000) for a UK resident under HMRC rates in force since April 2025, and £47,500 (AED 223,000) with the non resident surcharge. The Dubai fee on our £1M (AED 4.7M) worked example is £40,000 (AED 188,000): the UK second home buyer pays nearly the same in pure tax on a property a third of the price.",
                  ].map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-2.5 h-px w-4 shrink-0 bg-gold" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="h-full border border-line-gold/60 bg-panel p-8">
                <p className="kicker">In the UK, the part nobody writes</p>
                <ul className="mt-5 space-y-3 text-[0.92rem] text-muted">
                  {[
                    "A UK resident pays UK tax on worldwide income on the arising basis. Dubai rental income is declarable to HMRC.",
                    "HMRC has been well resourced on offshore income detection since 2017, through automatic exchange of information. Undeclared overseas rental income attracts penalties, interest, and offshore tax geared penalties.",
                    "From April 2025, UK inheritance tax is assessed on a residence basis rather than domicile. A UK resident's Dubai property may fall within the UK IHT estate.",
                    "The UK and UAE hold a double taxation agreement. It prevents the same income being taxed twice and settles residency ties, but it does not remove the UK's right to tax a UK resident's worldwide income.",
                  ].map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-2.5 h-px w-4 shrink-0 bg-gold" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-3xl text-muted">
              What this means in practice: keep records from day one. Rental statements,
              service charge invoices, management fees and mortgage interest all matter to the
              HMRC position, and allowable expenses reduce the UK liability on the same income.
              A sophisticated UK investor already knows &quot;0% tax&quot; is half a sentence.
              The other half is a self assessment return, filed accurately, on income that
              HMRC can already see through automatic exchange of information.
            </p>
            <p className="mt-4 max-w-3xl text-[0.9rem] text-muted">
              RAF is a broker, not a tax adviser. Take advice from a UK tax adviser on your own
              position before you buy, and treat any broker who tells you otherwise with
              suspicion.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ TIERED INVENTORY ============ */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
        <Reveal>
          <p className="kicker">Properties available now</p>
          <h2 className="display mt-4 max-w-3xl text-4xl sm:text-5xl">
            Three price points, three different propositions
          </h2>
          <p className="mt-6 max-w-2xl text-muted">
            One project at each tier, chosen for the reasoning below rather than for the
            brochure. Availability confirmed on enquiry.
          </p>
        </Reveal>

        <div className="mt-14 space-y-8">
          {/* Tier 1 */}
          <Reveal>
            <div className="grid overflow-hidden border border-line bg-panel lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[260px] overflow-hidden lg:min-h-0">
                <img
                  src="/img/113-render-900.webp"
                  alt="Curved terraces of 113 Residences in Al Sufouh"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-8 lg:p-10">
                <p className="kicker">Tier one · Below the visa threshold</p>
                <h3 className="display mt-3 text-3xl text-cream">113 Residences</h3>
                <p className="mt-1 text-[0.8125rem] uppercase tracking-[0.18em] text-muted">
                  IMAN Developers · Al Sufouh
                </p>
                <p className="mt-5 text-[0.95rem] text-muted">
                  A boutique building of 113 apartments and duplexes, one minute from Sheikh
                  Zayed Road and eight minutes from Palm Jumeirah. Entry units sit below the
                  AED 2M (£426,000) Golden Visa threshold, which is worth being plain about: a
                  one bedroom here is a rental asset, not a visa. Two bedrooms from AED 2.56M
                  (£545,000) clear the threshold.
                </p>
                <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-6 text-sm sm:grid-cols-4">
                  <div>
                    <dt className="text-[0.6875rem] uppercase tracking-[0.18em] text-gold">From</dt>
                    <dd className="mt-1 text-cream">AED 1.8M <span className="block text-[0.8rem] text-muted">£383,000</span></dd>
                  </div>
                  <div>
                    <dt className="text-[0.6875rem] uppercase tracking-[0.18em] text-gold">Beds</dt>
                    <dd className="mt-1 text-cream">1 to 4 <span className="block text-[0.8rem] text-muted">689 to 3,250 sqft</span></dd>
                  </div>
                  <div>
                    <dt className="text-[0.6875rem] uppercase tracking-[0.18em] text-gold">Payment</dt>
                    <dd className="mt-1 text-cream">50 / 50 <span className="block text-[0.8rem] text-muted">staged to completion</span></dd>
                  </div>
                  <div>
                    <dt className="text-[0.6875rem] uppercase tracking-[0.18em] text-gold">Handover</dt>
                    <dd className="mt-1 text-cream">Q2 2029 <span className="block text-[0.8rem] text-muted">developer factsheet</span></dd>
                  </div>
                </dl>
              </div>
            </div>
          </Reveal>

          {/* Tier 2 */}
          <Reveal>
            <div className="grid overflow-hidden border border-line bg-panel lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[260px] overflow-hidden lg:min-h-0">
                <img
                  src="/img/lunaya-lagoon-900.webp"
                  alt="Waterway running past villa terraces at Lunaya"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-8 lg:p-10">
                <p className="kicker">Tier two · Visa qualifying</p>
                <h3 className="display mt-3 text-3xl text-cream">Lunaya by Zaya</h3>
                <p className="mt-1 text-[0.8125rem] uppercase tracking-[0.18em] text-muted">
                  Zaya · Jebel Ali
                </p>
                <p className="mt-5 text-[0.95rem] text-muted">
                  Four and five bedroom villas and townhouses around a 900,000 sqft swimmable
                  lagoon, with Sheikh Zayed Road frontage. The 40/60 payment plan is the answer
                  to the financing cap above: 40% staged across construction instead of found
                  in cash on day one. Clears the AED 2M (£426,000) visa threshold with room.
                </p>
                <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-6 text-sm sm:grid-cols-4">
                  <div>
                    <dt className="text-[0.6875rem] uppercase tracking-[0.18em] text-gold">From</dt>
                    <dd className="mt-1 text-cream">AED 4.9M <span className="block text-[0.8rem] text-muted">£1.04M</span></dd>
                  </div>
                  <div>
                    <dt className="text-[0.6875rem] uppercase tracking-[0.18em] text-gold">Beds</dt>
                    <dd className="mt-1 text-cream">4 to 5 <span className="block text-[0.8rem] text-muted">from 2,966 sqft</span></dd>
                  </div>
                  <div>
                    <dt className="text-[0.6875rem] uppercase tracking-[0.18em] text-gold">Payment</dt>
                    <dd className="mt-1 text-cream">40 / 60 <span className="block text-[0.8rem] text-muted">staged to handover</span></dd>
                  </div>
                  <div>
                    <dt className="text-[0.6875rem] uppercase tracking-[0.18em] text-gold">Handover</dt>
                    <dd className="mt-1 text-cream">On enquiry <span className="block text-[0.8rem] text-muted">confirmed in writing</span></dd>
                  </div>
                </dl>
              </div>
            </div>
          </Reveal>

          {/* Tier 3 */}
          <Reveal>
            <div className="grid overflow-hidden border border-line bg-panel lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[260px] overflow-hidden lg:min-h-0">
                <img
                  src="/img/mrc-living-900.webp"
                  alt="Residence living room overlooking the Downtown Dubai skyline"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-8 lg:p-10">
                {/* Licensed brand name: written confirmation from RAF required before publish */}
                <p className="kicker">Tier three · Ultra prime</p>
                <h3 className="display mt-3 text-3xl text-cream">Mr. C Residences Downtown</h3>
                <p className="mt-1 text-[0.8125rem] uppercase tracking-[0.18em] text-muted">
                  Alta Real Estate Development · Al Wasl, Downtown Dubai
                </p>
                <p className="mt-5 text-[0.95rem] text-muted">
                  Three and four bedroom residences in Downtown Dubai, a short handover horizon
                  rather than a 2029 one, and branded hotel style services. This tier buys
                  address and building quality rather than yield, and it should be assessed on
                  those terms.
                </p>
                <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-6 text-sm sm:grid-cols-4">
                  <div>
                    <dt className="text-[0.6875rem] uppercase tracking-[0.18em] text-gold">From</dt>
                    <dd className="mt-1 text-cream">AED 12M <span className="block text-[0.8rem] text-muted">£2.55M, 3 bed</span></dd>
                  </div>
                  <div>
                    <dt className="text-[0.6875rem] uppercase tracking-[0.18em] text-gold">Beds</dt>
                    <dd className="mt-1 text-cream">3 to 4 <span className="block text-[0.8rem] text-muted">sizes on enquiry</span></dd>
                  </div>
                  <div>
                    <dt className="text-[0.6875rem] uppercase tracking-[0.18em] text-gold">Payment</dt>
                    <dd className="mt-1 text-cream">40% <span className="block text-[0.8rem] text-muted">during construction</span></dd>
                  </div>
                  <div>
                    <dt className="text-[0.6875rem] uppercase tracking-[0.18em] text-gold">Handover</dt>
                    <dd className="mt-1 text-cream">Early 2027</dd>
                  </div>
                </dl>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <p className="mx-auto mt-10 max-w-3xl text-center text-muted">
            How to choose between them: tier one is an income play priced for entry, tier two
            is a family asset with the friendliest cash flow structure on this page, and tier
            three is an address with a short wait. If your budget sits between two tiers, say
            so on the form. The honest answer is sometimes the cheaper one.
          </p>
          <div className="mt-8 flex justify-center">
            <a href="#get-prices" className="btn-gold !w-auto px-10 text-center">
              Request a call-back
            </a>
          </div>
        </Reveal>
      </section>

      {/* ============ CLOSING FORM ============ */}
      <section id="get-prices" className="relative scroll-mt-16 overflow-hidden">
        <ParallaxImg
          src="/img/hero-mrc-1920.webp"
          alt="Dubai towers at dusk"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          drift={60}
        />
        <div className="absolute inset-0 bg-ink/85" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-32">
          <Reveal>
            <p className="kicker">One conversation</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">
              Get the process, the costs and the current price lists
            </h2>
            <p className="mt-6 max-w-md text-muted">
              The full fee breakdown at your budget, the step by step timeline, and availability
              across all three tiers, sent the same day. RAF works UK hours by phone and
              WhatsApp.
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
          { href: "/dubai-villas-for-sale/", label: "Villas for sale in Dubai" },
          { href: "/dubai-apartments-for-sale/", label: "Apartments for sale in Dubai" },
          { href: "/risks-of-buying-property-in-dubai/", label: "The risks of buying property in Dubai" },
        ]}
      />
    </main>
  );
}
