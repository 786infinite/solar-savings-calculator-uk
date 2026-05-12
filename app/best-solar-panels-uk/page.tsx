import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Best Solar Panels UK | SolarCal",
  description: "Compare solar panel types, efficiency, warranties, installation quality, roof suitability, batteries, EV charging, and how to choose solar panels.",
};


const panelTypes = [
  {
    type: "Monocrystalline panels",
    bestFor: "Most home installations",
    note: "Often efficient and widely used for residential solar systems",
  },
  {
    type: "High-efficiency panels",
    bestFor: "Limited roof space",
    note: "Can generate more from smaller roof areas, but may cost more",
  },
  {
    type: "Budget panels",
    bestFor: "Lower upfront cost",
    note: "May be suitable, but compare warranty, output, and installer support",
  },
  {
    type: "Premium panels",
    bestFor: "Long-term performance and warranty focus",
    note: "Often higher cost, so value depends on quote and expected output",
  },
];

const buyingFactors = [
  "Panel efficiency",
  "Product warranty",
  "Performance warranty",
  "Degradation rate",
  "Installer experience",
  "Roof space available",
  "Shading and roof direction",
  "Inverter compatibility",
  "Monitoring options",
  "Total installed system price",
];

const faqs = [
  {
    question: "What are the best solar panels in the UK?",
    answer:
      "The best solar panels depend on your roof space, budget, installer options, warranty preferences, and expected generation. A higher-efficiency panel may be useful where roof space is limited.",
  },
  {
    question: "Are premium solar panels worth it?",
    answer:
      "Premium panels may offer higher efficiency, stronger warranties, or better long-term performance, but they can cost more. The best choice depends on the full quote, not just the panel brand.",
  },
  {
    question: "Do solar panel brands matter?",
    answer:
      "Panel brand can matter, but installation quality, inverter choice, roof design, warranty, and aftercare are also important. A good system is more than just the panels.",
  },
  {
    question: "Should I choose the cheapest solar panels?",
    answer:
      "Not always. Cheap panels may still work well, but you should compare efficiency, warranty, installer reputation, expected output, and total system value.",
  },
];

export default function BestSolarPanelsUKPage() {
  return (
    <SiteShell>
      <main className="min-h-screen bg-slate-950 text-white">
        <article className="mx-auto max-w-5xl px-6 py-16">
          <a href="/" className="text-sm font-medium text-emerald-300 hover:text-emerald-200">
            ← Back to homepage
          </a>

          <header className="mt-8">
            <p className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
              Solar panel guide
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
              Best Solar Panels UK
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              The best solar panels for your home depend on roof space,
              electricity usage, budget, efficiency, warranty, installer quality,
              and the full system design. The right choice is usually the best
              overall system, not just the highest-rated panel.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/solar-savings-calculator"
                className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Estimate your solar savings
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
              For most UK homes, the best solar panel is one that balances good
              efficiency, strong warranty, reliable performance, and a fair
              installed price. If your roof space is limited, higher-efficiency
              panels may be worth comparing.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              Panel choice should be considered alongside inverter quality,
              system design, roof suitability, battery options, and installer
              aftercare.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              Types of solar panels to compare
            </h2>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-white/10 text-slate-200">
                  <tr>
                    <th className="p-4 font-semibold">Panel type</th>
                    <th className="p-4 font-semibold">Best for</th>
                    <th className="p-4 font-semibold">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {panelTypes.map((row) => (
                    <tr key={row.type} className="border-t border-white/10">
                      <td className="p-4 font-medium text-white">
                        {row.type}
                      </td>
                      <td className="p-4 text-slate-300">{row.bestFor}</td>
                      <td className="p-4 text-emerald-300">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">
                Efficiency and roof space
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Higher-efficiency panels can be useful if you have limited roof
                space because they can generate more from a smaller area. If you
                have plenty of roof space, the best value may come from a
                balanced system rather than the most expensive panels.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">
                Warranty and performance
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Solar panels usually come with product and performance warranty
                terms. Compare how long the warranty lasts, what it covers, and
                whether the installer provides clear aftercare.
              </p>
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              What to compare before choosing solar panels
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Do not compare solar panels only by brand or headline efficiency.
              The whole system design matters.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {buyingFactors.map((factor) => (
                <div
                  key={factor}
                  className="rounded-2xl border border-white/10 bg-slate-950 p-5"
                >
                  <p className="text-slate-300">{factor}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              Solar panels, batteries, and EV charging
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Your panel choice may affect how much electricity the system can
              generate, but battery storage and EV charging also change the
              overall value. A battery can help store unused solar electricity,
              while EV charging can increase home electricity demand.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              If you are considering solar with a battery or EV charger, compare
              full system quotes rather than judging panels separately.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="/solar-battery-worth-it"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Solar battery guide
              </a>

              <a
                href="/solar-panels-and-ev-charging"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Solar and EV charging guide
              </a>
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h2 className="text-3xl font-bold">
              Compare solar panel quotes
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              A proper solar quote should include panel choice, inverter,
              expected generation, installation cost, warranty, monitoring,
              battery options, and roof suitability.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="/go/solar-quotes"
                className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Compare free solar quotes
              </a>

              <a
                href="/solar-savings-calculator"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Estimate savings first
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
              This guide is for general information only. Solar panel
              suitability, generation, cost, savings, warranty value, and
              performance depend on your roof, location, shading, system design,
              installer, tariff, future energy prices, and product choice.
            </p>
          </section>
        </article>
      </main>
    </SiteShell>
  );
}