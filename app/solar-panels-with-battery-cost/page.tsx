import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Solar Panels with Battery Cost UK | SolarCal",
  description: "Understand solar panels with battery cost in the UK, what affects battery pricing, payback, self-consumption, and whether solar plus storage makes sense.",
};


const costRows = [
  {
    setup: "Solar panels only",
    typicalUse: "Homes with good daytime usage",
    costNote: "Lower upfront cost",
  },
  {
    setup: "Solar + small battery",
    typicalUse: "Lower usage homes / light evening usage",
    costNote: "Adds several thousand pounds",
  },
  {
    setup: "Solar + medium battery",
    typicalUse: "Typical family homes with evening usage",
    costNote: "Higher cost, more storage flexibility",
  },
  {
    setup: "Solar + larger battery",
    typicalUse: "High usage homes / EV / smart tariff interest",
    costNote: "Highest upfront cost, needs careful payback check",
  },
];

const batteryCostFactors = [
  "Solar system size",
  "Battery capacity in kWh",
  "Usable battery capacity",
  "Battery power output",
  "Inverter compatibility",
  "Installation complexity",
  "Warranty and cycle life",
  "Smart tariff compatibility",
  "Whether the battery is installed with solar or added later",
];

const faqs = [
  {
    question: "How much does solar with a battery cost?",
    answer:
      "Solar panels with battery storage usually cost more than solar panels alone. The final price depends on system size, battery capacity, inverter choice, installation complexity, and installer pricing.",
  },
  {
    question: "Is it cheaper to install a battery with solar panels?",
    answer:
      "It can be more efficient to install solar and battery storage at the same time because some installation work can be combined. However, the total upfront cost will still be higher than solar-only.",
  },
  {
    question: "Does a battery improve payback?",
    answer:
      "Sometimes. A battery can increase self-consumption, but it also adds cost. Whether it improves payback depends on your usage pattern, tariff, export rate, battery cost, and how much stored energy you use.",
  },
  {
    question: "Can I add a battery later?",
    answer:
      "Often yes, but compatibility matters. You should check inverter type, available space, wiring, warranty implications, and whether adding a battery later costs more than installing it upfront.",
  },
];

export default function SolarPanelsWithBatteryCostPage() {
  return (
    <SiteShell>
      <main className="min-h-screen bg-slate-950 text-white">
        <article className="mx-auto max-w-5xl px-6 py-16">
          <a href="/" className="text-sm font-medium text-emerald-300 hover:text-emerald-200">
            ← Back to homepage
          </a>

          <header className="mt-8">
            <p className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
              Solar battery cost guide
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
              Solar Panels with Battery Cost UK
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Solar panels with battery storage cost more than solar panels
              alone, but a battery can help you use more of your own solar
              electricity. The right choice depends on household usage, evening
              demand, tariff, battery size, and the final quote.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/solar-savings-calculator"
                className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Estimate solar and battery savings
              </a>

              <a
                href="/go/solar-battery"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Compare battery options
              </a>
            </div>
          </header>

          <section className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h2 className="text-2xl font-bold">Quick answer</h2>

            <p className="mt-4 leading-7 text-slate-300">
              Adding a solar battery can increase the upfront cost by thousands
              of pounds. A small battery may suit lighter usage, while larger
              batteries may suit higher evening usage, EV households, or people
              interested in smart tariffs.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              The key question is whether the extra savings from storing solar
              electricity justify the extra battery cost.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              Solar and battery cost comparison
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              These are planning notes, not fixed prices. Real quotes depend on
              your home, chosen products, installation design, and installer.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-white/10 text-slate-200">
                  <tr>
                    <th className="p-4 font-semibold">Setup</th>
                    <th className="p-4 font-semibold">Often suitable for</th>
                    <th className="p-4 font-semibold">Cost note</th>
                  </tr>
                </thead>
                <tbody>
                  {costRows.map((row) => (
                    <tr key={row.setup} className="border-t border-white/10">
                      <td className="p-4 font-medium text-white">
                        {row.setup}
                      </td>
                      <td className="p-4 text-slate-300">{row.typicalUse}</td>
                      <td className="p-4 text-emerald-300">{row.costNote}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">
                Why batteries increase upfront cost
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                A battery adds hardware, installation work, wiring, setup,
                monitoring, and sometimes inverter changes. Larger batteries
                usually cost more, but capacity alone is not the only factor.
              </p>

              <p className="mt-4 leading-7 text-slate-300">
                Warranty, usable capacity, power output, and compatibility can
                all affect value.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">
                Why batteries can improve savings
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Without a battery, unused solar electricity is exported. With a
                battery, some surplus electricity can be stored and used later,
                often in the evening when the home is using more power.
              </p>

              <p className="mt-4 leading-7 text-slate-300">
                This can increase self-consumption, but the extra savings need
                to be compared with the battery cost.
              </p>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              What affects solar battery cost?
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {batteryCostFactors.map((factor) => (
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
              Is solar plus battery better than solar-only?
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Solar-only may be better if you can use a lot of electricity
              during the day and want a lower upfront cost. Solar plus battery
              may be better if you export a lot during the day and buy
              electricity back later at a higher rate.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              The best way to compare is to ask for both solar-only and
              solar-plus-battery quotes, then compare the total cost, expected
              annual benefit, warranties, and payback range.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="/solar-battery-worth-it"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Is a solar battery worth it?
              </a>

              <a
                href="/solar-savings-calculator"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Use the calculator
              </a>
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h2 className="text-3xl font-bold">
              Estimate solar plus battery payback
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Use the calculator to estimate system size, annual savings,
              payback range, and whether battery storage may make sense for your
              usage pattern.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="/solar-savings-calculator"
                className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Start the calculator
              </a>

              <a
                href="/go/solar-battery"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Compare battery options
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
              This page is for general information only. Solar and battery costs,
              savings, payback, suitability, and product performance depend on
              property survey, usage, generation, tariff, export rate, battery
              size, installer pricing, future energy prices, and product choice.
            </p>
          </section>
        </article>
      </main>
    </SiteShell>
  );
}