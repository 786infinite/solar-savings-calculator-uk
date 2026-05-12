import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import FaqSchema from "@/components/FaqSchema";
export const metadata: Metadata = {
  title: "Solar Panels for a 4-Bedroom House UK | SolarCal",
  description:
    "Estimate solar panel system size, cost, savings, battery storage benefit, EV charging potential, and payback for a 4-bedroom house in the UK.",
};

const quickStats = [
  {
    label: "Typical system size",
    value: "4.5kW - 6kW",
  },
  {
    label: "Typical panel count",
    value: "10 - 16 panels",
  },
  {
    label: "Often suitable for",
    value: "Higher-usage homes",
  },
  {
    label: "Battery storage",
    value: "Often worth comparing",
  },
];

const costFactors = [
  "Annual electricity usage",
  "Available roof space",
  "Roof direction and shading",
  "Whether the home has an EV charger",
  "Whether battery storage is included",
  "Panel and inverter choice",
  "Scaffolding, access, and installation complexity",
  "Installer pricing, warranty, and aftercare",
];

const setupRows = [
  {
    setup: "Solar only",
    useCase: "Homes with good daytime electricity usage",
    note: "Lower upfront cost than solar plus battery",
  },
  {
    setup: "Solar + battery",
    useCase: "Homes with evening usage or lower daytime usage",
    note: "Higher cost, but may improve self-consumption",
  },
  {
    setup: "Solar + EV charger",
    useCase: "Homes with an EV or planned EV purchase",
    note: "Can be useful if charging can happen during daylight",
  },
  {
    setup: "Larger solar system",
    useCase: "Homes with high electricity usage",
    note: "May need more roof space and a higher installation budget",
  },
];

const faqs = [
  {
    question: "How many solar panels does a 4-bedroom house need?",
    answer:
      "A 4-bedroom house may often need around 10 to 16 panels, but the exact number depends on panel output, electricity usage, roof space, shading, and system design.",
  },
  {
    question: "What size solar system is best for a 4-bedroom house?",
    answer:
      "Many 4-bedroom homes may look at a system around 4.5kW to 6kW, but the best size depends on actual electricity consumption, roof suitability, and whether the home has an EV or battery.",
  },
  {
    question: "Is battery storage useful for a 4-bedroom house?",
    answer:
      "Battery storage can be useful for 4-bedroom homes with higher evening usage, EV charging, or low daytime usage. It adds upfront cost, so solar-only and solar-plus-battery quotes should be compared.",
  },
  {
    question: "Can a 4-bedroom house generate enough solar for an EV?",
    answer:
      "Solar can help reduce EV charging costs if the car is charged during daylight hours. The benefit depends on annual mileage, charging habits, system size, and whether smart charging or battery storage is used.",
  },
];

export default function SolarPanelsFor4BedroomHousePage() {
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
              UK solar guide
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
              Solar Panels for a 4-Bedroom House
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              A 4-bedroom house in the UK may need a larger solar panel system,
              especially if the household has high electricity usage, works from
              home, owns an EV, or is considering battery storage.
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

          <section className="mt-12 grid gap-4 md:grid-cols-4">
            {quickStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-sm text-slate-400">{stat.label}</p>
                <p className="mt-2 text-xl font-bold text-emerald-300">
                  {stat.value}
                </p>
              </div>
            ))}
          </section>

          <section className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h2 className="text-2xl font-bold">Quick answer</h2>

            <p className="mt-4 leading-7 text-slate-300">
              Many 4-bedroom homes may look at a solar system around 4.5kW to
              6kW, often using roughly 10 to 16 panels depending on panel output
              and available roof space.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              The right setup depends on electricity usage, roof suitability,
              shading, battery interest, EV charging, and budget. A larger
              household does not automatically need the biggest system — annual
              kWh usage is usually the better guide.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              How much could solar panels cost for a 4-bedroom house?
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              A 4-bedroom house may need a larger system than a smaller home, so
              installation costs can be higher. Battery storage, EV charging,
              roof complexity, scaffolding, and equipment choice can all change
              the final quote.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-white/10 text-slate-200">
                  <tr>
                    <th className="p-4 font-semibold">Setup</th>
                    <th className="p-4 font-semibold">Typical use case</th>
                    <th className="p-4 font-semibold">Cost / value note</th>
                  </tr>
                </thead>
                <tbody>
                  {setupRows.map((row) => (
                    <tr key={row.setup} className="border-t border-white/10">
                      <td className="p-4 font-medium text-white">
                        {row.setup}
                      </td>
                      <td className="p-4 text-slate-300">{row.useCase}</td>
                      <td className="p-4 text-emerald-300">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              These are planning notes only. Real pricing depends on a survey,
              system design, equipment, and installer quote.
            </p>
          </section>

          <section className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">
                Why 4-bedroom homes often need a larger system
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                A 4-bedroom home often has more occupants, more appliances, and
                higher electricity demand. If the household also has an EV,
                home office, electric cooking, or heat pump, usage can be much
                higher.
              </p>

              <p className="mt-4 leading-7 text-slate-300">
                However, bedroom count is only a rough guide. Your electricity
                bill or annual kWh usage is more important for estimating the
                right solar system size.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">
                Roof space and layout matter
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                A larger system needs enough suitable roof space. Roof direction,
                roof angle, shading, chimneys, dormers, skylights, and roof
                condition can all affect how many panels can be installed.
              </p>

              <p className="mt-4 leading-7 text-slate-300">
                A proper survey should confirm how many panels can fit safely
                and what generation level is realistic.
              </p>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              What affects the best solar setup for a 4-bedroom house?
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {costFactors.map((factor) => (
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
              Should a 4-bedroom house add battery storage?
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Battery storage may be more relevant for 4-bedroom homes because
              larger households often use more electricity outside peak solar
              generation hours. A battery can help store some unused solar
              electricity for later use.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              Battery storage can also be useful if you have an EV, use more
              electricity in the evening, or want to improve self-consumption.
              But it adds upfront cost, so compare solar-only and
              solar-plus-battery quotes before deciding.
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

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              Solar panels, EV charging, and 4-bedroom homes
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              If your household owns or plans to buy an EV, solar panels may
              become more useful. Charging during daylight can help you use more
              solar electricity at home instead of exporting it.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              If the EV is usually charged overnight, a smart charger, tariff
              strategy, or battery may affect the best setup. The calculator can
              help estimate the rough benefit.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="/solar-panels-and-ev-charging"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Read the solar and EV guide
              </a>

              <a
                href="/best-ev-chargers-uk"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                View EV charger guide
              </a>
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h2 className="text-3xl font-bold">
              Estimate solar savings for your 4-bedroom house
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Use the calculator to estimate system size, installation cost
              range, annual savings, payback period, battery benefit, and EV
              charging potential.
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
              This guide is for general information only. Solar panel costs,
              savings, payback, export income, system size, and suitability vary
              by property, roof survey, location, shading, usage, tariff,
              installer pricing, future energy prices, and product choice.
            </p>
          </section>
        </article>
      </main>
    </SiteShell>
  );
}