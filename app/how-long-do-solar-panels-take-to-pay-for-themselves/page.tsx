import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "How Long Do Solar Panels Take to Pay for Themselves? | SolarCal",
  description: "Understand solar panel payback in the UK, what affects payback time, installation cost, export income, self-consumption, batteries, and savings.",
};


const paybackFactors = [
  "Solar installation cost",
  "System size and expected generation",
  "Electricity unit rate",
  "Smart Export Guarantee export rate",
  "How much solar electricity you use at home",
  "Whether battery storage is included",
  "Roof direction, angle, and shading",
  "Future electricity prices",
  "Maintenance, warranty, and inverter replacement assumptions",
];

const exampleRows = [
  {
    scenario: "Lower usage home",
    typicalFeatures: "Smaller system, lower bill savings",
    paybackNote: "May take longer if annual benefit is low",
  },
  {
    scenario: "Typical family home",
    typicalFeatures: "Medium system, moderate electricity use",
    paybackNote: "Often depends heavily on quote price and self-consumption",
  },
  {
    scenario: "High usage home",
    typicalFeatures: "Larger system, higher electricity bills",
    paybackNote: "Can improve if more solar electricity is used at home",
  },
  {
    scenario: "Solar + battery",
    typicalFeatures: "Higher upfront cost, higher self-consumption",
    paybackNote: "Needs careful comparison against solar-only",
  },
];

const faqs = [
  {
    question: "How long do solar panels take to pay for themselves?",
    answer:
      "Solar panel payback depends on installation cost, electricity prices, export payments, system performance, and how much solar electricity you use at home. Many homes need several years to recover the upfront cost.",
  },
  {
    question: "What makes solar pay back faster?",
    answer:
      "Solar may pay back faster if the installation cost is competitive, electricity usage is high, the roof performs well, and you use more of the generated electricity at home.",
  },
  {
    question: "Does a battery reduce payback time?",
    answer:
      "Not always. A battery can increase self-consumption and savings, but it also increases upfront cost. It can improve or worsen payback depending on usage, tariff, and battery price.",
  },
  {
    question: "Should I rely on online payback estimates?",
    answer:
      "Online estimates are useful for planning, but they are not guarantees. A real quote and survey are needed to check system size, cost, generation, and suitability.",
  },
];

export default function SolarPanelsPaybackPage() {
  return (
    <SiteShell>
      <main className="min-h-screen bg-slate-950 text-white">
        <article className="mx-auto max-w-5xl px-6 py-16">
          <a href="/" className="text-sm font-medium text-emerald-300 hover:text-emerald-200">
            ← Back to homepage
          </a>

          <header className="mt-8">
            <p className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
              Solar payback guide
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
              How Long Do Solar Panels Take to Pay for Themselves?
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Solar panel payback depends on the upfront installation cost, how
              much electricity the system generates, how much you use at home,
              export payments, roof performance, and whether you add battery
              storage.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/solar-savings-calculator"
                className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Estimate your payback
              </a>

              <a
                href="/go/solar-quotes"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Compare free solar quotes
              </a>
            </div>
          </header>

          <section className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h2 className="text-2xl font-bold">Quick answer</h2>

            <p className="mt-4 leading-7 text-slate-300">
              Solar panels usually take several years to pay for themselves. The
              exact payback period depends on the final quote, electricity
              prices, export rate, roof suitability, and how much of the solar
              electricity you use yourself.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              A lower installation cost and higher self-consumption usually
              improve payback. A battery may increase savings, but it also adds
              upfront cost, so it should be compared carefully.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              What affects solar panel payback?
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Payback is the time it takes for estimated savings and export
              income to roughly equal the upfront installation cost.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {paybackFactors.map((factor) => (
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
              Example payback scenarios
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              These are simple planning examples, not fixed outcomes. Real
              payback depends on your quote and household usage.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-white/10 text-slate-200">
                  <tr>
                    <th className="p-4 font-semibold">Scenario</th>
                    <th className="p-4 font-semibold">Typical features</th>
                    <th className="p-4 font-semibold">Payback note</th>
                  </tr>
                </thead>
                <tbody>
                  {exampleRows.map((row) => (
                    <tr key={row.scenario} className="border-t border-white/10">
                      <td className="p-4 font-medium text-white">
                        {row.scenario}
                      </td>
                      <td className="p-4 text-slate-300">
                        {row.typicalFeatures}
                      </td>
                      <td className="p-4 text-emerald-300">
                        {row.paybackNote}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">
                Self-consumption matters
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Solar electricity used directly at home can reduce the amount
                you buy from the grid. Exported electricity may earn an export
                payment, but the value is often different from the price you pay
                to import electricity.
              </p>

              <p className="mt-4 leading-7 text-slate-300">
                Homes that use more electricity during the day may get stronger
                bill savings from the same system.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">
                Roof performance matters
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Roof direction, angle, shading, location, and available space
                all affect how much electricity the system can generate.
              </p>

              <p className="mt-4 leading-7 text-slate-300">
                A proper quote should include expected generation based on your
                property, not only a generic national estimate.
              </p>
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              Does battery storage improve solar payback?
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Battery storage can improve self-consumption by storing unused
              solar electricity for later. This can increase annual savings,
              especially for homes with evening electricity use.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              However, battery storage also increases upfront cost. Whether it
              improves payback depends on the battery price, usable capacity,
              tariff, export rate, and how often the battery is charged and
              discharged.
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
              Estimate your own solar payback
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Use the calculator to estimate installation cost range, annual
              benefit, system size, generation, and payback period based on your
              answers.
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
              This guide is for general information only. Solar payback depends
              on installation cost, system performance, tariff, export rate,
              self-consumption, roof suitability, battery storage, future energy
              prices, installer pricing, and product choice.
            </p>
          </section>
        </article>
      </main>
    </SiteShell>
  );
}