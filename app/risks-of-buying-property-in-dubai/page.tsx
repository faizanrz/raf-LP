import type { Metadata } from "next";
import ContactRow from "@/components/ContactRow";
import LeadForm from "@/components/LeadForm";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import StickyCta from "@/components/StickyCta";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Risks of Buying Property in Dubai | And How UK Buyers Manage Them",
  description:
    "Oversupply, delivery delays, liquidity, service charges and HMRC. The real problems UK buyers hit in Dubai, and how a DLD licensed broker handles each one.",
};

/*
  BEFORE GO-LIVE, confirm with RAF:
  - Broker names, photographs and RERA BRN numbers in "If you still want to buy"
  - DLD licence and RERA numbers (lib/site.ts)
  Figures compiled July 2026: 120,000 scheduled 2026 handovers (Fitch via The
  National, Jan 2026); delivery rates 46-48%, one quarter at 41% (Knight Frank /
  Moody's / Cavendish Maxwell, Q1-Q2 2026); rents -6.7% early 2026, prime -15%;
  Q1 2026 values -3.8% QoQ, 2026 forecasts +1% (Knight Frank) to -7% (S&P), all
  Q2 2026 consultancy reporting. Reconfirm at publish and quarterly.
  HARD RULES on this page: no inventory, no prices, no property photography,
  no project names. Each section ends on RAF's mechanism, never on the bare
  problem, and never on empty reassurance.
*/

const faq = [
  {
    q: "Is there an oversupply risk in Dubai property?",
    a: "Around 120,000 units are scheduled for handover in Dubai in 2026, though historical delivery rates near 46% to 48% suggest actual completions closer to 33,000 to 50,000. The pressure concentrates in volume apartment districts with deep off plan pipelines, while prime areas with constrained land behave differently. The management is district level: before shortlisting, check the three year handover pipeline for the specific district, which a licensed broker can produce.",
  },
  {
    q: "What happens if a Dubai off plan project is delayed or cancelled?",
    a: "Off plan payments sit in a DLD regulated escrow account released against verified construction progress. Escrow protects staged capital against misappropriation, not the handover date, build quality or finished value. The management is developer due diligence before committing: prior projects delivered, average delay against announced dates, comparable scale, and a DLD registered escrow account.",
  },
  {
    q: "How quickly can you sell a Dubai property?",
    a: "Acquisition costs run to 6% to 8% of the purchase price, so a sale inside two years rarely recovers entry costs through growth alone. Dubai suits a three year minimum horizon. A competent broker sets that expectation before purchase and recommends waiting where a buyer's timeline is shorter.",
  },
  {
    q: "Do UK residents pay UK tax on Dubai property?",
    a: "Yes. A UK resident pays UK tax on worldwide income on the arising basis, so Dubai rental income is declarable to HMRC, and from April 2025 UK inheritance tax is assessed on a residence basis. Take independent UK tax advice before buying, and keep full transaction records for self assessment.",
  },
  {
    q: "Are guaranteed rental returns in Dubai real?",
    a: "A guaranteed rental return is a fixed payment from the developer or seller for a defined period, usually funded from an inflated purchase price. It is not a yield. When the guarantee ends, the property earns whatever the market pays. Identify one by a return promised by the seller rather than evidenced by the market, and a price above comparable units in the same building.",
  },
];

function Mechanism({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-7 border-l-2 border-gold/70 bg-panel/70 py-5 pl-6 pr-5">
      <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gold">How RAF manages it</p>
      <div className="mt-2.5 space-y-4 text-[0.98rem] leading-relaxed text-cream/85">{children}</div>
    </div>
  );
}

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
      <StickyCta ctaLabel="Speak to a broker" />
      <WhatsAppFloat />

      {/* ============ HERO: TYPE ONLY, NO IMAGE, NO FORM ============ */}
      <section className="relative flex min-h-[88svh] items-center overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(198,166,106,0.07),transparent_55%)]" />
        <div className="relative mx-auto w-full max-w-4xl px-6 pb-20 pt-32 lg:px-8">
          <Reveal>
            <p className="kicker">The real problems, and how they are handled</p>
            <h1 className="display mt-6 text-5xl leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
              The Risks of Buying Property in Dubai
            </h1>
            <div className="gold-rule mt-8" />
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream/85">
              Every property market has real problems, and Dubai&apos;s are specific and
              knowable. This page sets out the ones UK buyers actually hit, and how a licensed
              broker manages each one. Read it and you will know what to check, what to ask,
              and when the honest answer is to wait. Some readers should not buy in Dubai, and
              this page will say so. The rest should buy with their eyes open, and this is how.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ RISK SECTIONS ============ */}
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* 01 Oversupply */}
        <section className="border-b border-line py-20">
          <Reveal>
            <p className="kicker">01 · Supply</p>
            <h2 className="display mt-4 text-3xl sm:text-4xl">Oversupply</h2>
            <div className="mt-7 space-y-5 text-[1.02rem] leading-relaxed text-muted">
              <p>
                Around 120,000 units are scheduled for handover in Dubai in 2026, one of the
                largest pipelines in the city&apos;s history, per Fitch via The National.
                Scheduled is not delivered: completion rates in Dubai have historically run
                well below schedule, with Knight Frank and Moody&apos;s estimating real
                delivery near 46% to 48% and one recent quarter landing at 41%, which points
                to actual 2026 completions closer to 33,000 to 50,000 units. Both numbers
                matter. The scheduled figure tells you where the pressure is aimed. The
                delivery rate tells you it arrives slower than the headlines suggest, and
                arrives all the same.
              </p>
              <p>
                Supply on that scale does what supply always does, and the market is already
                showing it: rents fell roughly 6.7% across early 2026, with prime areas off
                around 15%, per Q2 2026 market reporting. Values tell the same two sided
                story. Q1 2026 residential prices fell 3.8% quarter on quarter, the first
                quarterly decline since 2020, with a partial rebound in April. Full year 2026
                forecasts range from roughly +1% at Knight Frank to −7% at S&amp;P. Anyone
                quoting you a single confident number is selling something.
              </p>
              <p>
                The pressure does not land evenly. It concentrates where the cranes are:
                volume apartment districts with deep off plan pipelines, sold heavily to
                investors who will all be seeking tenants in the same quarter. Prime locations
                with constrained land and established communities where nothing new can be
                built behave differently, because their supply is fixed while the city&apos;s
                demand keeps arriving. If the unit you are considering competes with 5,000
                identical units handing over in the same district in the same year, its rent
                and its resale price are set by that fact, not by the brochure.
              </p>
            </div>
            <Mechanism>
              <p>
                Before we put a unit in front of a UK buyer, we pull the three year handover
                pipeline for that specific district: how many units, from which developers, at
                what price points. We steer toward stock with constrained supply and away from
                districts about to flood. The oversupply is real, and it is exactly why the
                pipeline check happens before the shortlist, not after. The{" "}
                <a href="/dubai-villas-for-sale/" className="text-gold underline decoration-gold/40 underline-offset-4 hover:text-gold-bright">
                  community comparison on our villas page
                </a>{" "}
                shows the established against emerging trade this check feeds.
              </p>
            </Mechanism>
          </Reveal>
        </section>

        {/* 02 Delivery */}
        <section className="border-b border-line py-20">
          <Reveal>
            <p className="kicker">02 · Delivery</p>
            <h2 className="display mt-4 text-3xl sm:text-4xl">Delivery and developer risk</h2>
            <div className="mt-7 space-y-5 text-[1.02rem] leading-relaxed text-muted">
              <p>
                Off plan projects are delayed. Some are cancelled. Some developers have
                failed. None of this is rare enough to ignore.
              </p>
              <p>
                Dubai&apos;s protection is the escrow system, and it is worth understanding
                precisely. By law, buyer payments on off plan sales sit in an escrow account
                regulated by the Dubai Land Department, released to the developer only against
                verified construction progress. Escrow protects your staged capital against
                misappropriation. That is all it protects. It does not guarantee the handover
                date. It does not guarantee the build quality. It does not guarantee the
                market value of the finished asset.
              </p>
              <p>
                Where a project is formally cancelled, RERA winds it up and buyers are repaid
                from the escrow account. The mechanism works, and it can still take years,
                during which the capital earns nothing and buys nothing.
              </p>
            </div>
            <Mechanism>
              <p>
                We run the developer check you would struggle to run alone: prior projects
                actually delivered and visited, average delay against announced handover
                dates, whether the developer has completed at this scale in this asset class,
                and whether the project&apos;s escrow account is registered with the DLD.
                First time developers and cross asset class track records get flagged, not
                hidden. The risk is why the due diligence is a line item, not an afterthought.
                The escrow system and off plan mechanics are set out in full in{" "}
                <a href="/buying-property-in-dubai-from-uk/" className="text-gold underline decoration-gold/40 underline-offset-4 hover:text-gold-bright">
                  our guide to buying from the UK
                </a>
                .
              </p>
            </Mechanism>
          </Reveal>
        </section>

        {/* 03 Liquidity */}
        <section className="border-b border-line py-20">
          <Reveal>
            <p className="kicker">03 · Liquidity</p>
            <h2 className="display mt-4 text-3xl sm:text-4xl">Liquidity</h2>
            <div className="mt-7 space-y-5 text-[1.02rem] leading-relaxed text-muted">
              <p>
                Buying costs 6% to 8% of the purchase price once the 4% DLD transfer fee,
                agency commission, registration and trustee fees are counted. That number sets
                the arithmetic of exit. A sale inside two years rarely recovers the entry cost
                through capital growth alone. Dubai suits a buyer with a three year minimum
                horizon and no requirement to access the capital on demand.
              </p>
              <p>
                Time to sale is the other half of liquidity. In a strong market, well priced
                stock sells in weeks. In a soft market, months, and the first offer often
                arrives below asking. Off plan positions are less liquid still: developers
                commonly block resale until 30% to 40% of the price has been paid, and the
                pool of buyers for a part paid contract on an unbuilt unit is the thinnest
                corner of the whole market.
              </p>
              <p>
                If there is any scenario in which you need this capital back at short notice,
                property in Dubai is the wrong place for it.
              </p>
            </div>
            <Mechanism>
              <p>
                We set the horizon expectation before purchase, and we price the realistic
                exit rather than the hopeful one. Where a buyer&apos;s timeline is short, we
                say so and recommend waiting, or a more liquid segment: the{" "}
                <a href="/dubai-villas-for-sale/" className="text-gold underline decoration-gold/40 underline-offset-4 hover:text-gold-bright">
                  established communities with active resale markets
                </a>{" "}
                trade at higher entry precisely because they exit faster. The liquidity limit
                is why the horizon conversation happens on the first call, not at resale.
              </p>
            </Mechanism>
          </Reveal>
        </section>

        {/* 04 HMRC */}
        <section className="border-b border-line py-20">
          <Reveal>
            <p className="kicker">04 · Tax</p>
            <h2 className="display mt-4 text-3xl sm:text-4xl">What you still owe HMRC</h2>
            <div className="mt-7 space-y-5 text-[1.02rem] leading-relaxed text-muted">
              <p>
                &quot;Zero tax in Dubai&quot; is a true statement about UAE tax law and a
                misleading statement about a UK resident&apos;s total liability. The UAE will
                not tax your rental income or your gain on sale. The United Kingdom will.
              </p>
              <ul className="space-y-2.5">
                {[
                  "A UK resident pays UK tax on worldwide income on the arising basis. Rental income from a Dubai property is declarable to HMRC through self assessment.",
                  "HMRC has invested heavily in offshore income detection since 2017 through automatic exchange of information. It does not rely on you volunteering. Undeclared overseas rental income attracts penalties, interest, and offshore tax geared penalties on top.",
                  "From April 2025, UK inheritance tax is assessed on a residence basis rather than domicile. A UK resident's Dubai property may fall within the UK IHT estate.",
                  "Capital gains follow the same logic. The UAE will not tax the gain when you sell. A UK resident is assessed for UK capital gains tax on worldwide disposals, and the gain is computed in sterling, which means the exchange rate movement forms part of the taxable gain or loss.",
                  "The UK and UAE hold a double taxation agreement. It prevents the same income being taxed twice and settles questions of residency. It does not remove the UK's right to tax a UK resident's worldwide income.",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-3 h-px w-4 shrink-0 bg-gold" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <Mechanism>
              <p>
                Our role is to make sure you know all of this before you buy, not after, and
                to point you to a UK tax adviser for your own position. We keep the
                transaction records a UK buyer needs for self assessment: purchase costs,
                rental statements, service charge invoices and disposal figures. RAF is a
                broker, not a tax adviser, and any broker claiming otherwise should be treated
                with suspicion. The full fee and tax breakdown for UK buyers sits in{" "}
                <a href="/buying-property-in-dubai-from-uk/" className="text-gold underline decoration-gold/40 underline-offset-4 hover:text-gold-bright">
                  the buying guide
                </a>
                .
              </p>
            </Mechanism>
          </Reveal>
        </section>

        {/* 05 Gross to net */}
        <section className="border-b border-line py-20">
          <Reveal>
            <p className="kicker">05 · Yield</p>
            <h2 className="display mt-4 text-3xl sm:text-4xl">
              Service charges, and the gap between gross and net
            </h2>
            <div className="mt-7 space-y-5 text-[1.02rem] leading-relaxed text-muted">
              <p>
                An advertised gross yield is not the number that reaches your bank. Between
                the two sit costs that the advertisement does not mention:
              </p>
              <ul className="space-y-2.5">
                {[
                  "Service charges, levied per square foot, every year",
                  "Chiller charges, billed separately where district cooling applies",
                  "Community and master community fees on villa plots",
                  "Sinking fund contributions toward future major works",
                  "Management fees where the property is let from the UK",
                  "Void periods, which arrive on schedule in an oversupplied district. Rents fell roughly 6.7% across early 2026, with prime areas off around 15%, so a yield computed on last year's rent is already stale",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-3 h-px w-4 shrink-0 bg-gold" />
                    {t}
                  </li>
                ))}
              </ul>
              <p>Walk an advertised 8% gross down, as a share of the property&apos;s value each year:</p>
              <div className="overflow-x-auto border border-line">
                <table className="lux-table">
                  <tbody>
                    <tr>
                      <td>Advertised gross yield</td>
                      <td className="text-right">8.0%</td>
                    </tr>
                    <tr>
                      <td>Service charges and cooling</td>
                      <td className="text-right">−1.6%</td>
                    </tr>
                    <tr>
                      <td>Management at 6% of rent</td>
                      <td className="text-right">−0.5%</td>
                    </tr>
                    <tr>
                      <td>One month void in twelve</td>
                      <td className="text-right">−0.7%</td>
                    </tr>
                    <tr>
                      <td>Sinking fund and sundries</td>
                      <td className="text-right">−0.2%</td>
                    </tr>
                    <tr>
                      <td className="text-gold-bright">Net, before UK tax</td>
                      <td className="text-right text-gold-bright">5.0%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                The deductions above are illustrative and vary by building and community,
                which is exactly the point.
              </p>
            </div>
            <Mechanism>
              <p>
                We obtain the actual service charge schedule and the actual achieved rents on
                any unit we show you, and we run this net calculation with you before
                commitment, not after. &quot;Show me achieved rents, not projections&quot; is
                the single most useful sentence a buyer can say to any broker. We expect to be
                asked, and we have the numbers ready.
              </p>
            </Mechanism>
          </Reveal>
        </section>

        {/* 06 Guaranteed returns */}
        <section className="border-b border-line py-20">
          <Reveal>
            <p className="kicker">06 · The oldest trick</p>
            <h2 className="display mt-4 text-3xl sm:text-4xl">&quot;Guaranteed&quot; returns</h2>
            <div className="mt-7 space-y-5 text-[1.02rem] leading-relaxed text-muted">
              <p>
                A guaranteed rental return is a fixed payment made by the developer or the
                seller, usually for a defined period of one to three years. It is not a yield.
                It is a marketing instrument, and it is usually funded from the purchase price
                you paid.
              </p>
              <p>
                The mechanics are simple. The headline price is inflated above market value.
                The premium funds the guaranteed payment schedule. The advertised return was
                never supported by market rent, and when the guarantee period ends the
                property earns whatever tenants will actually pay, which may be materially
                less. The buyer financed their own guarantee and paid for the privilege.
              </p>
              <p>
                RAF does not sell guaranteed return products. You can identify one in the
                wild: a return promised by the seller rather than evidenced by the market, a
                price above comparable units in the same building, and a contract in which the
                payment obligation ends precisely when the market takes over. Walk away from
                all three at once.
              </p>
            </div>
          </Reveal>
        </section>

        {/* 07 Currency */}
        <section className="border-b border-line py-20">
          <Reveal>
            <p className="kicker">07 · Currency</p>
            <h2 className="display mt-4 text-3xl sm:text-4xl">Currency</h2>
            <div className="mt-7 space-y-5 text-[1.02rem] leading-relaxed text-muted">
              <p>
                The AED is pegged to the US dollar. A sterling buyer is therefore holding a
                GBP/USD position for the life of the asset, whether they intended to take one
                or not.
              </p>
              <p>
                Rental income arrives in a dollar pegged currency and is spent in sterling.
                Capital is repatriated at whatever the exchange rate is on the day of sale,
                not the day of purchase. A strong dollar flatters the returns and a weak
                dollar erodes them, independently of anything the property itself does. Over a
                five year hold, the currency move can be larger than the property&apos;s
                entire net rental return, in either direction.
              </p>
            </div>
            <Mechanism>
              <p>
                The exposure is manageable, but only deliberately. We flag where forward
                contracts through a currency broker can fix staged off plan payments due years
                out, and where sale proceeds can be converted on a plan rather than on
                whatever day the transfer happens to complete. Currency is not a reason not to
                buy. It is a variable to manage on purpose rather than ignore.
              </p>
            </Mechanism>
          </Reveal>
        </section>

        {/* 08 Who we tell to wait */}
        <section className="py-20">
          <Reveal>
            <p className="kicker">08 · The honest filter</p>
            <h2 className="display mt-4 text-3xl sm:text-4xl">Who we tell to wait</h2>
            <p className="mt-7 max-w-2xl text-[1.02rem] leading-relaxed text-muted">
              We have told buyers to wait, to buy elsewhere, and occasionally not to buy at
              all. That advice costs us a commission and earns us the next three clients.
              Here is who we tell to wait:
            </p>
            <ul className="mt-8 space-y-4">
              {[
                <>A horizon shorter than three years</>,
                <>Any need to access the capital at short notice</>,
                <>A need to borrow above 60% loan to value, which non residents cannot do</>,
                <>A plan built on projected rents rather than achieved ones</>,
                <>A reliance on pre handover income to service UK obligations</>,
                <>
                  A{" "}
                  <a href="/buying-property-in-dubai-from-uk/" className="text-gold underline decoration-gold/40 underline-offset-4 hover:text-gold-bright">
                    Golden Visa
                  </a>{" "}
                  as the reason to buy, rather than a consequence of buying something worth
                  owning
                </>,
              ].map((t, i) => (
                <li key={i} className="flex gap-5 border-b border-line pb-4 text-[1.02rem] text-cream/90">
                  <span className="display text-xl text-gold/70">{String(i + 1).padStart(2, "0")}</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>
      </div>

      {/* ============ IF YOU STILL WANT TO BUY ============ */}
      <section className="border-y border-line bg-ink-2">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <Reveal>
            <p className="kicker">The turn, gently</p>
            <h2 className="display mt-4 text-3xl sm:text-4xl">If you still want to buy</h2>
            <div className="mt-7 space-y-5 text-[1.02rem] leading-relaxed text-muted">
              <p>
                Everything above is survivable with the right checks, and the checks are a
                licensed broker&apos;s actual job: verify the developer&apos;s escrow
                registration before you pay a dirham, pull the community&apos;s real service
                charge history rather than the estimate, obtain achieved rents rather than
                projected ones, and advise against the purchase where the numbers do not
                work. That is the service. The properties are the easy part.
              </p>
            </div>
            {/* PLACEHOLDER: real broker names, photographs and BRN numbers from RAF */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
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
            <p className="mt-6 text-sm text-muted">
              {site.brand} · {site.dldLicence} · {site.reraOrn}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ SINGLE FORM, BOTTOM ============ */}
      <section id="get-prices" className="scroll-mt-16">
        <div className="mx-auto grid max-w-4xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-8 lg:py-28">
          <Reveal>
            <p className="kicker">One conversation</p>
            <h2 className="display mt-4 text-3xl sm:text-4xl">
              Put your situation to a broker
            </h2>
            <p className="mt-6 max-w-md text-muted">
              Three fields, no budget question. Tell us your horizon and what you are trying
              to achieve, and we will tell you whether Dubai fits it. Sometimes the answer is
              no.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="border border-line bg-panel p-7 sm:p-8">
              <LeadForm
                formName="risks"
                buttonLabel="Speak to a broker who will tell you when not to buy"
                showBudget={false}
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
        ]}
      />
    </main>
  );
}
