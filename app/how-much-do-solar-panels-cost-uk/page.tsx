import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import FaqSchema from "@/components/FaqSchema";

export const metadata: Metadata = {
  title: "How Much Do Solar Panels Cost in the UK? | SolarCal",
  description:
    "See estimated UK solar panel costs by system size, battery cost impact, quote factors, payback considerations, and use SolarCal to estimate solar savings.",
};

const costRows = [
  {
    system: "Small solar system",
    size: "2kW - 3kW",
    suitableFor: "Small homes / lower electricity usage",
    estimatedCost: "£4,500 - £6,500",
    notes: "Usually fewer panels and simpler installation, if roof access is straightforward.",
  },
  {
    system: "Medium solar system",
    size: "3.5kW - 4.5kW",
    suitableFor: "Typical 3-bedroom homes",
    estimatedCost: "£5,500 - £8,500",
    notes: "Often a common starting range for UK family homes with average usage.",
  },
  {
    system: "Larger solar system",
    size: "5kW - 6kW",
    suitableFor: "Larger homes / higher usage",
    estimatedCost: "£7,500 - £11,500",
    notes: "May suit larger roofs, higher electricity bills, or homes with EV charging.",
  },
  {
    system: "Solar panels + battery",
    size: "Varies",
    suitableFor: "Evening usage / higher self-consumption",
    estimatedCost: "Solar cost + £3,000 - £10,000+",
    notes: "Battery price depends on capacity, brand, inverter setup, and installation design.",
  },
];

const exampleRows = [
  {
    home: "1-2 bedroom home",
    likelySystem: "2kW - 3.5kW",
    roughCost: "£4,500 - £7,000",
    bestFor: "Lower usage households and smaller roofs.",
  },
  {
    home: "3-bedroom home",
    likelySystem: "3.5kW - 4.5kW",
    roughCost: "£5,500 - £8,500",
    bestFor: "Typical family homes with moderate electricity usage.",
  },
  {
    home: "4-bedroom home",
    likelySystem: "4.5kW - 6kW",
    roughCost: "£7,000 - £11,500",
    bestFor: "Higher usage homes, larger roofs, or future EV charging.",
  },
  {
    home: "Solar + battery home",
    likelySystem: "System size varies",
    roughCost: "£9,000 - £18,000+",
    bestFor: "Homes that want to store more solar electricity for evening use.",
  },
];

const factors = [
  {
    title: "System size",
    description:
      "Larger systems usually cost more upfront because they need more panels, mounting equipment, wiring, and installation time.",
  },
  {
    title: "Roof direction and shading",
    description:
      "South-facing roofs with little shading often perform better. Shading from trees, chimneys, buildings, or dormers can reduce output.",
  },
  {
    title: "Scaffolding and access",
    description:
      "Difficult roof access, multiple roof faces, tall buildings, or awkward layouts can increase installation cost.",
  },
  {
    title: "Panel and inverter choice",
    description:
      "Higher-spec panels, microinverters, optimisers, monitoring systems, and longer warranties can increase the final quote.",
  },
  {
    title: "Battery storage",
    description:
      "Adding a battery can increase upfront cost but may help you use more of your own solar electricity later in the day.",
  },
  {
    title: "Electrical work",
    description:
      "Consumer unit upgrades, cable routes, extra meters, or complicated home layouts can affect the final installation price.",
  },
  {
    title: "Installer pricing",
    description:
      "Quotes vary by installer, labour, warranty, aftercare, product package, and whether the company uses subcontractors.",
  },
  {
    title: "Export tariff and usage pattern",
    description:
      "Your savings depend on how much solar electricity you use at home and how much you export back to the grid.",
  },
];

const quoteChecks = [
  "What panel brand, inverter, mounting system, and battery are included?",
  "Is scaffolding included in the quote?",
  "Is the quote based on an actual roof survey or only an online estimate?",
  "What generation estimate has the installer given?",
  "What warranties apply to panels, inverter, battery, workmanship, and monitoring?",
  "Is bird protection included or optional?",
  "Will the system include monitoring so you can see generation and usage?",
  "Are MCS certification, DNO notification, and handover documents included?",
  "What happens if the installation date changes or extra work is discovered?",
  "Is aftercare included and who handles warranty claims?",
];

const faqs = [
  {
    question: "What is the average cost of solar panels in the UK?",
    answer:
      "Many UK home solar installations cost several thousand pounds, with the final price depending on system size, roof suitability, installer pricing, equipment choice, and whether battery storage is included.",
  },
  {
    question: "How much do solar panels cost for a 3-bedroom house?",
    answer:
      "A typical 3-bedroom house often needs a medium-sized solar system, commonly around 3.5kW to 4.5kW. A rough planning range may be around £5,500 to £8,500 before adding a battery, depending on roof and product choices.",
  },
  {
    question: "How much extra does a solar battery cost?",
    answer:
      "Battery storage can add thousands of pounds to the upfront cost. A simple battery setup may add around £3,000 to £6,000, while larger or higher-spec systems can cost more than £10,000 extra.",
  },
  {
    question: "Is the cheapest solar quote the best?",
    answer:
      "Not always. You should compare equipment quality, warranty, installer reputation, survey detail, monitoring, aftercare, and expected generation, not just the headline price.",
  },
  {
    question: "Can I get an exact solar price online?",
    answer:
      "An online calculator can give a useful estimate, but a proper installer quote usually needs a roof survey, usage review, product selection, and site-specific assessment.",
  },
  {
    question: "Do solar panels pay for themselves?",
    answer:
      "Solar panels can pay for themselves over time through bill savings and export income, but the payback period depends on installation cost, electricity prices, usage pattern, export tariff, roof suitability, and whether you add a battery.",
  },
];

export default function SolarPanelCostUKPage() {
  return (
    <SiteShell>
      <main className="min-h-screen bg-slate-950 text-white">
        <article className="mx-auto max-w-5xl px-6 py-16">
          <FaqSchema faqs={faqs} />

          <a
            href="/"
            className="text-sm font-medium text-emerald-300 hover:text-emerald-200"
          >
            ← Back to homepage
          </a>

          <header className="mt-8">
            <p className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
              UK solar cost guide
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
              How Much Do Solar Panels Cost in the UK?
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Solar panel costs in the UK depend on system size, roof
              suitability, equipment choice, installer pricing, and whether you
              add battery storage. Use this guide as a starting point, then use
              the SolarCal calculator to estimate costs and payback for your own
              home.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/solar-savings-calculator"
                className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Use the solar savings calculator
              </a>

              <a
                href="/free-solar-guide"
                className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-6 py-4 text-center font-semibold text-emerald-300 hover:bg-emerald-400/20"
              >
                Download the free solar guide
              </a>
            </div>

            <p className="mt-4 text-sm text-slate-400">
              Last updated: May 2026
            </p>
          </header>

          <section className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h2 className="text-2xl font-bold">Quick answer</h2>

            <p className="mt-4 leading-7 text-slate-300">
              A typical UK residential solar installation can cost from several
              thousand pounds to over £10,000 depending on system size and
              specification. Battery storage can increase the total cost
              significantly, but may improve how much solar electricity you use
              yourself.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              The most useful way to estimate your own cost is to combine a
              calculator estimate with real quotes from installers who can assess
              your roof, electricity usage, battery needs, and product options.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              Estimated solar panel cost by system size
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              These are rough guide ranges only. Your actual quote may be higher
              or lower depending on roof complexity, equipment, installer,
              scaffolding, electrical work, and whether a battery is included.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-white/10 text-slate-200">
                  <tr>
                    <th className="p-4 font-semibold">System type</th>
                    <th className="p-4 font-semibold">Typical size</th>
                    <th className="p-4 font-semibold">Often suitable for</th>
                    <th className="p-4 font-semibold">Rough cost range</th>
                    <th className="p-4 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {costRows.map((row) => (
                    <tr key={row.system} className="border-t border-white/10">
                      <td className="p-4 font-medium text-white">
                        {row.system}
                      </td>
                      <td className="p-4 text-slate-300">{row.size}</td>
                      <td className="p-4 text-slate-300">
                        {row.suitableFor}
                      </td>
                      <td className="p-4 font-semibold text-emerald-300">
                        {row.estimatedCost}
                      </td>
                      <td className="p-4 text-slate-300">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              These figures are broad estimates for planning only. They are not
              formal quotes and should not be treated as guaranteed prices.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              Example solar costs by home size
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Home size is only a rough guide. A smaller home with high
              electricity usage may need a bigger system than a larger home with
              low usage. Roof space, shading, battery plans, and EV charging can
              also change the right system size.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {exampleRows.map((row) => (
                <div
                  key={row.home}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-xl font-semibold">{row.home}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    <span className="font-semibold text-white">
                      Likely system:
                    </span>{" "}
                    {row.likelySystem}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    <span className="font-semibold text-white">
                      Rough cost:
                    </span>{" "}
                    {row.roughCost}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {row.bestFor}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">
                Solar panel cost for a 3-bedroom house
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                A 3-bedroom house often needs a medium-sized system, commonly in
                the 3.5kW to 4.5kW range. The right size depends on actual
                electricity usage, roof space, shading, and whether the home has
                an EV or battery.
              </p>

              <a
                href="/solar-panels-for-3-bedroom-house"
                className="mt-5 inline-flex text-sm font-semibold text-emerald-300 hover:text-emerald-200"
              >
                Read the 3-bedroom house guide →
              </a>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">
                Solar panel cost for a 4-bedroom house
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                A 4-bedroom house may need a larger system, especially if usage
                is high or the property has EV charging. Larger systems can
                cost more upfront but may generate more electricity each year.
              </p>

              <a
                href="/solar-panels-for-4-bedroom-house"
                className="mt-5 inline-flex text-sm font-semibold text-emerald-300 hover:text-emerald-200"
              >
                Read the 4-bedroom house guide →
              </a>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              What affects the final solar installation price?
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Two homes with similar electricity usage can receive different
              quotes because the installation conditions, products, and design
              can vary.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {factors.map((factor) => (
                <div
                  key={factor.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <h3 className="text-lg font-semibold">{factor.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {factor.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              How much extra does a solar battery cost?
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              A solar battery can add a significant amount to the installation
              cost. Smaller batteries may cost a few thousand pounds, while
              larger or higher-spec batteries can cost considerably more.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              The benefit is that a battery can help you store unused solar
              electricity and use it later, instead of exporting it straight
              away. This can be useful if you are out during the day, use more
              electricity in the evening, or want to combine solar with smart
              tariffs or EV charging.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="/solar-battery-worth-it"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Is a solar battery worth it?
              </a>

              <a
                href="/solar-panels-with-battery-cost"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Solar panels with battery cost
              </a>
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-slate-900 p-6">
            <h2 className="text-3xl font-bold">
              What should a solar quote include?
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              When comparing solar quotes, do not only look at the final price.
              A cheaper quote may not include the same equipment, warranty,
              roof survey detail, monitoring, scaffolding, or aftercare.
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {quoteChecks.map((check) => (
                <div
                  key={check}
                  className="rounded-2xl border border-white/10 bg-slate-950 p-4 text-sm leading-6 text-slate-300"
                >
                  {check}
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h2 className="text-3xl font-bold">
              Estimate your own solar cost and payback
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Use the calculator to estimate your system size, installation cost
              range, yearly benefit, payback period, and whether a battery or EV
              charger may make sense.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="/solar-savings-calculator"
                className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Start the calculator
              </a>

              <a
                href="/free-solar-guide"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Download the free solar guide
              </a>
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              Planning to buy solar soon?
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              The free SolarCal guide helps you understand savings, quote
              comparison, payback periods, and common buying mistakes. If you
              want a more detailed checklist before choosing an installer, the
              Buyer’s Pack gives you extra quote comparison help and practical
              questions to ask.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="/free-solar-guide"
                className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Download the free guide
              </a>

              <a
                href="https://payhip.com/b/BMvmN"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                View the Buyer’s Pack
              </a>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">Frequently asked questions</h2>

            <div className="mt-6 space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-xl font-semibold">{faq.question}</h3>
                  <p className="mt-3 leading-7 text-slate-300">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <h2 className="text-2xl font-bold">Sources and further reading</h2>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              These links can help you understand UK solar standards, smart
              export payments, certification, and consumer guidance. Always
              check current details before making a buying decision.
            </p>

            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li>
                <a
                  href="https://energysavingtrust.org.uk/advice/solar-panels/"
                  className="text-emerald-300 hover:text-emerald-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  Energy Saving Trust: Solar panels
                </a>
              </li>
              <li>
                <a
                  href="https://mcscertified.com/"
                  className="text-emerald-300 hover:text-emerald-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  MCS: Certified low-carbon products and installers
                </a>
              </li>
              <li>
                <a
                  href="https://www.ofgem.gov.uk/environmental-and-social-schemes/smart-export-guarantee-seg"
                  className="text-emerald-300 hover:text-emerald-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ofgem: Smart Export Guarantee
                </a>
              </li>
              <li>
                <a
                  href="/calculator-methodology"
                  className="text-emerald-300 hover:text-emerald-200"
                >
                  SolarCal calculator methodology
                </a>
              </li>
            </ul>
          </section>

          <section className="mt-12 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <h2 className="text-2xl font-bold">Important note</h2>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              This page is for general information only. Solar costs, savings,
              export income, payback period, and suitability depend on your
              property, roof survey, location, shading, household usage, tariff,
              installer pricing, future energy prices, and product choice. Use
              estimates as a starting point, not as a guaranteed quote.
            </p>
          </section>
        </article>
      </main>
    </SiteShell>
  );
}