import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import FaqSchema from "@/components/FaqSchema";
export const metadata: Metadata = {
  title: "Solar Panels for a 3-Bedroom House UK | SolarCal",
  description:
    "Estimate solar panel system size, cost, savings, battery storage benefit, and payback for a 3-bedroom house in the UK.",
};

const quickStats = [
  {
    label: "Typical system size",
    value: "3.5kW - 4.5kW",
  },
  {
    label: "Typical panel count",
    value: "8 - 12 panels",
  },
  {
    label: "Often suitable for",
    value: "Medium-usage homes",
  },
  {
    label: "Battery storage",
    value: "Useful for evening usage",
  },
];

const costFactors = [
  "How much electricity the household uses each year",
  "Available roof space and roof direction",
  "Shading from trees, chimneys, nearby buildings, or roof features",
  "Whether the home has daytime electricity usage",
  "Whether battery storage is included",
  "Whether the household owns or plans to buy an EV",
  "Installer pricing, warranty, and product choice",
];

const faqs = [
  {
    question: "How many solar panels does a 3-bedroom house need?",
    answer:
      "A 3-bedroom house may often need around 8 to 12 panels, but the exact number depends on panel output, electricity usage, roof space, and system design.",
  },
  {
    question: "What size solar system is best for a 3-bedroom house?",
    answer:
      "Many 3-bedroom homes may look at a system around 3.5kW to 4.5kW, but the best size depends on actual electricity consumption and roof suitability.",
  },
  {
    question: "Should a 3-bedroom house get a solar battery?",
    answer:
      "A battery may help if the household uses more electricity in the evening or wants to increase self-consumption. It adds cost, so solar-only and solar-plus-battery quotes should be compared.",
  },
  {
    question: "Can a 3-bedroom house charge an EV with solar?",
    answer:
      "Solar can help with EV charging, especially if the car is home during daylight hours. The benefit depends on driving habits, charging times, system size, and whether a smart charger or battery is used.",
  },
];

export default function SolarPanelsFor3BedroomHousePage() {
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
              Solar Panels for a 3-Bedroom House
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              A 3-bedroom house in the UK often suits a medium-sized solar panel
              system, depending on electricity usage, roof space, roof
              direction, shading, battery storage, and whether the home has an
              EV.
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
              Many 3-bedroom houses may be suitable for a solar system around
              3.5kW to 4.5kW, often using roughly 8 to 12 panels depending on
              panel output. The right size depends on how much electricity the
              home uses, how much roof space is available, and how much of the
              generated electricity can be used at home.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              A household with higher daytime usage, EV charging, or battery
              storage may benefit from a different system design than a home
              with low electricity usage.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              How much could solar panels cost for a 3-bedroom house?
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              For a typical 3-bedroom home, the cost can vary widely depending
              on system size, roof complexity, products, battery storage, and
              installer pricing. A medium-sized system without battery storage
              may cost several thousand pounds, while adding a battery can
              increase the total cost significantly.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-white/10 text-slate-200">
                  <tr>
                    <th className="p-4 font-semibold">Setup</th>
                    <th className="p-4 font-semibold">Typical use case</th>
                    <th className="p-4 font-semibold">Cost impact</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-white/10">
                    <td className="p-4 font-medium text-white">Solar only</td>
                    <td className="p-4 text-slate-300">
                      Homes that can use electricity during the day
                    </td>
                    <td className="p-4 text-emerald-300">
                      Lower upfront cost than solar + battery
                    </td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="p-4 font-medium text-white">
                      Solar + battery
                    </td>
                    <td className="p-4 text-slate-300">
                      Homes with evening usage or low daytime usage
                    </td>
                    <td className="p-4 text-emerald-300">
                      Higher upfront cost, possible higher self-consumption
                    </td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="p-4 font-medium text-white">
                      Solar + EV charger
                    </td>
                    <td className="p-4 text-slate-300">
                      Homes with EV charging during the day
                    </td>
                    <td className="p-4 text-emerald-300">
                      Can improve value if charging aligns with generation
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              These are planning estimates only. A real quote depends on a roof
              survey, usage profile, equipment, and installer pricing.
            </p>
          </section>

          <section className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">
                How much electricity does a 3-bedroom home use?
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Electricity usage varies a lot between 3-bedroom homes. A small
                family with gas heating and no EV may use much less electricity
                than a household with an EV, electric cooking, home working, or
                high appliance use.
              </p>

              <p className="mt-4 leading-7 text-slate-300">
                Your electricity bill or annual kWh usage is usually a better
                guide than bedroom count alone.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">
                Does roof direction matter?
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Yes. South-facing roofs are often strongest for generation, but
                east and west-facing roofs can still be useful. Heavy shading
                can reduce output and should be checked carefully before
                installation.
              </p>

              <p className="mt-4 leading-7 text-slate-300">
                A proper installer survey should check roof direction, angle,
                available space, shading, and condition.
              </p>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              What affects the best solar setup for a 3-bedroom house?
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
              Should a 3-bedroom house add battery storage?
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Battery storage can be useful if your household uses more
              electricity in the evening or if the home is often empty during
              the day. A battery can store some unused solar electricity for
              later, which may improve self-consumption.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              The trade-off is cost. A battery adds to the upfront price, so it
              is worth comparing solar-only and solar-plus-battery quotes before
              deciding.
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
              Estimate solar savings for your 3-bedroom house
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

          
          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              Planning solar for a 3-bedroom house?
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              The free SolarCal guide helps you understand solar savings,
              quote comparison, payback periods, battery storage, EV charging,
              and common buying mistakes. If you want a more detailed checklist
              before choosing an installer, the Buyer’s Pack gives you extra
              quote comparison help and practical questions to ask.
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

          <section className="mt-12 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <h2 className="text-2xl font-bold">Sources and further reading</h2>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              These links can help you understand UK solar panels, installer
              certification, export payments, and SolarCal’s estimate method.
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