import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import FaqSchema from "@/components/FaqSchema";
export const metadata: Metadata = {
  title: "How Much Do Solar Panels Cost in the UK? | SolarCal",
  description:
    "See estimated UK solar panel costs by system size, battery cost impact, price factors, and use SolarCal to estimate solar savings and payback.",
};

const costRows = [
  {
    system: "Small system",
    size: "2kW - 3kW",
    suitableFor: "Small homes / low usage",
    estimatedCost: "£4,500 - £6,500",
  },
  {
    system: "Medium system",
    size: "3.5kW - 4.5kW",
    suitableFor: "Typical 3-bedroom homes",
    estimatedCost: "£5,500 - £8,500",
  },
  {
    system: "Larger system",
    size: "5kW - 6kW",
    suitableFor: "Larger homes / higher usage",
    estimatedCost: "£7,500 - £11,500",
  },
  {
    system: "Solar + battery",
    size: "Varies",
    suitableFor: "Evening usage / higher self-consumption",
    estimatedCost: "Solar cost + £3,000 - £10,000+",
  },
];

const factors = [
  "System size and number of panels",
  "Roof size, roof angle, roof direction, and shading",
  "Whether scaffolding or extra access work is needed",
  "Panel, inverter, mounting, and monitoring equipment choice",
  "Whether battery storage is included",
  "Installer pricing, warranty length, and aftercare",
  "Electrical work, consumer unit suitability, and home layout",
];

const faqs = [
  {
    question: "What is the average cost of solar panels in the UK?",
    answer:
      "Many UK home solar installations cost several thousand pounds, with the final price depending on system size, roof suitability, installer pricing, and whether battery storage is included.",
  },
  {
    question: "Does adding a battery increase the cost?",
    answer:
      "Yes. Battery storage can add thousands of pounds to the upfront cost, but it may help you use more of your solar electricity in the evening or during higher-demand periods.",
  },
  {
    question: "Is the cheapest solar quote the best?",
    answer:
      "Not always. You should compare equipment quality, warranty, installer reputation, survey detail, monitoring, aftercare, and expected generation — not just the headline price.",
  },
  {
    question: "Can I get an exact solar price online?",
    answer:
      "An online calculator can give a useful estimate, but a proper installer quote usually needs a roof survey, usage review, product selection, and site-specific assessment.",
  },
];

export default function SolarPanelCostUKPage() {
  return (
    <SiteShell>
      <main className="min-h-screen bg-slate-950 text-white">
        <article className="mx-auto max-w-5xl px-6 py-16">
          <FaqSchema faqs={faqs} />
          <a href="/" className="text-sm font-medium text-emerald-300 hover:text-emerald-200">
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
              the calculator to estimate costs and payback for your own home.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/solar-savings-calculator"
                className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Use the solar savings calculator
              </a>

              <a
                href="/go/solar-quotes"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Compare free solar quotes
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
              your roof, usage, and product options.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              Estimated solar panel cost by system size
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              These are rough guide ranges only. Your actual quote may be higher
              or lower depending on roof complexity, equipment, installer, and
              whether a battery is included.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-white/10 text-slate-200">
                  <tr>
                    <th className="p-4 font-semibold">System type</th>
                    <th className="p-4 font-semibold">Typical size</th>
                    <th className="p-4 font-semibold">Often suitable for</th>
                    <th className="p-4 font-semibold">Rough cost range</th>
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
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              These figures are broad estimates for planning only. They are not
              quotes and should not be treated as guaranteed prices.
            </p>
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
                  key={factor}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-slate-300">{factor}</p>
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
                href="/go/solar-quotes"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Compare free solar quotes
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