import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Best Solar Batteries UK | SolarCal",
  description: "Compare solar battery capacity, usable storage, warranty, inverter compatibility, smart tariff features, EV charging, and battery payback factors.",
};


const batteryTypes = [
  {
    type: "Small solar battery",
    bestFor: "Lower usage homes",
    note: "Lower cost, but limited stored energy",
  },
  {
    type: "Medium solar battery",
    bestFor: "Typical family homes",
    note: "Good balance for evening usage and self-consumption",
  },
  {
    type: "Large solar battery",
    bestFor: "High usage homes / EV households",
    note: "More storage, but higher upfront cost",
  },
  {
    type: "Expandable battery system",
    bestFor: "Homes that may need more capacity later",
    note: "Flexible, but check compatibility and upgrade cost",
  },
];

const buyingFactors = [
  "Usable battery capacity",
  "Power output",
  "Warranty length",
  "Cycle life",
  "Battery chemistry",
  "Inverter compatibility",
  "Smart tariff compatibility",
  "Backup power capability",
  "Installation cost",
  "Monitoring and app controls",
];

const faqs = [
  {
    question: "What is the best solar battery in the UK?",
    answer:
      "The best solar battery depends on your electricity usage, solar generation, evening demand, inverter compatibility, budget, warranty needs, and whether you want backup or smart tariff features.",
  },
  {
    question: "What size solar battery do I need?",
    answer:
      "The right size depends on how much surplus solar electricity you generate and how much electricity you use when the sun is not shining. Bigger is not always better if the battery is not used efficiently.",
  },
  {
    question: "Are solar batteries worth it?",
    answer:
      "A solar battery can be worth it if it helps you use more of your own solar electricity. It is usually more attractive for homes with evening usage, low daytime usage, EV charging, or smart tariff interest.",
  },
  {
    question: "Can I add a battery to existing solar panels?",
    answer:
      "Often yes, but compatibility matters. You should check your inverter, system design, available space, warranty implications, and installation cost before adding a battery.",
  },
];

export default function BestSolarBatteriesUKPage() {
  return (
    <SiteShell>
      <main className="min-h-screen bg-slate-950 text-white">
        <article className="mx-auto max-w-5xl px-6 py-16">
          <a href="/" className="text-sm font-medium text-emerald-300 hover:text-emerald-200">
            ← Back to homepage
          </a>

          <header className="mt-8">
            <p className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
              Solar battery guide
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
              Best Solar Batteries UK
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              The best solar battery depends on your household usage, solar
              generation, evening electricity demand, tariff, inverter
              compatibility, warranty needs, and budget. The right battery
              should improve self-consumption without adding unnecessary cost.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/solar-savings-calculator"
                className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Estimate battery benefit
              </a>

              <a
                href="/go/solar-battery"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Compare battery options
              </a>
            </div>
          
            <p className="mt-4 text-sm text-slate-400">
              Last updated: May 2026
            </p>
          </header>

          <section className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h2 className="text-2xl font-bold">Quick answer</h2>

            <p className="mt-4 leading-7 text-slate-300">
              For most homes, the best solar battery is not simply the largest
              one. It is the battery that matches your solar generation, evening
              usage, inverter setup, and budget.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              A battery can help you store unused solar electricity for later,
              but it adds upfront cost. Always compare solar-only and
              solar-plus-battery quotes before deciding.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              Types of solar batteries to compare
            </h2>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-white/10 text-slate-200">
                  <tr>
                    <th className="p-4 font-semibold">Battery type</th>
                    <th className="p-4 font-semibold">Best for</th>
                    <th className="p-4 font-semibold">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {batteryTypes.map((row) => (
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
              <h2 className="text-2xl font-bold">Usable capacity</h2>

              <p className="mt-4 leading-7 text-slate-300">
                Battery capacity is usually shown in kWh, but usable capacity
                can be lower than the headline figure. Compare how much energy
                the battery can actually store and deliver.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">Power output</h2>

              <p className="mt-4 leading-7 text-slate-300">
                Power output affects what the battery can run at once. A battery
                may have enough capacity but still not enough output for larger
                loads.
              </p>
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              What to compare before choosing a solar battery
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Battery quotes should be compared on more than price. Capacity,
              compatibility, warranty, and expected self-consumption benefit all
              matter.
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
              Solar battery compatibility
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Not every battery works with every solar setup. Compatibility with
              the inverter, monitoring system, installation design, and warranty
              terms should be checked before buying.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              If you already have solar panels, adding a battery later may still
              be possible, but the best option depends on your existing
              equipment and installation layout.
            </p>
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              Battery storage, EV charging, and smart tariffs
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              A solar battery can be more attractive if your household has EV
              charging, high evening usage, or smart tariff opportunities.
              However, a battery should be sized around your whole home energy
              pattern, not only one device.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              If you mainly charge an EV overnight on a cheap tariff, compare
              whether battery storage adds enough extra value to justify its
              cost.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="/solar-panels-and-ev-charging"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Solar and EV charging guide
              </a>

              <a
                href="/solar-battery-worth-it"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Is a solar battery worth it?
              </a>
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h2 className="text-3xl font-bold">
              Compare solar battery options
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              This section will later link to approved solar battery partners,
              quote partners, or product affiliates.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="/go/solar-battery"
                className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Compare battery options
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
              This guide is for general information only. Solar battery
              suitability, savings, payback, compatibility, and performance
              depend on household usage, solar generation, tariff, export rate,
              battery size, inverter setup, installation design, product choice,
              and future energy prices.
            </p>
          </section>
        </article>
      </main>
    </SiteShell>
  );
}