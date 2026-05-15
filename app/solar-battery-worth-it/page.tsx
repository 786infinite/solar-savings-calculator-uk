import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import FaqSchema from "@/components/FaqSchema";
export const metadata: Metadata = {
  title: "Is a Solar Battery Worth It in the UK? | SolarCal",
  description:
    "Learn when solar battery storage may be worth it, what affects payback, battery cost, self-consumption, EV charging, and solar savings.",
};

const goodFitFactors = [
  "You use more electricity in the evening",
  "You are out during the day and export a lot of solar electricity",
  "You want to increase solar self-consumption",
  "You have or plan to buy an EV",
  "You are interested in smart tariffs",
  "You want backup or more control over home energy use",
];

const poorFitFactors = [
  "Your electricity usage is very low",
  "You already use most of your solar electricity during the day",
  "The battery quote is too expensive compared with the extra savings",
  "You may move home before the battery pays back",
  "Your solar system is too small to regularly charge the battery",
  "The battery is not well matched to your inverter or usage pattern",
];

const batteryFactors = [
  "Battery capacity in kWh",
  "Usable capacity versus advertised capacity",
  "Power output",
  "Warranty length and cycle life",
  "Compatibility with your inverter and solar system",
  "Smart tariff compatibility",
  "Installation cost",
  "Expected increase in self-consumption",
];

const faqs = [
  {
    question: "Is a solar battery worth it in the UK?",
    answer:
      "A solar battery can be worth it if it helps you use more of your own solar electricity instead of exporting it. It is usually more attractive for homes with evening usage, lower daytime usage, EV charging, or smart tariff opportunities.",
  },
  {
    question: "Does a solar battery reduce bills?",
    answer:
      "A battery can reduce bills by storing unused solar electricity for later use. The actual saving depends on your usage pattern, electricity tariff, export rate, battery size, and battery cost.",
  },
  {
    question: "Will a battery make solar pay back faster?",
    answer:
      "Not always. A battery can increase savings, but it also increases upfront cost. In some cases it improves the overall return, while in others it can lengthen the payback period.",
  },
  {
    question: "What size solar battery do I need?",
    answer:
      "The right size depends on your solar generation, evening usage, tariff, backup needs, and budget. Bigger is not always better if the battery does not get used efficiently.",
  },
];

export default function SolarBatteryWorthItPage() {
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
              Solar battery guide
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
              Is a Solar Battery Worth It?
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              A solar battery can help you store unused solar electricity and
              use it later. It may be worth it if you use more power in the
              evening, export a lot of solar electricity, or want to improve
              self-consumption — but it is not automatically the best choice for
              every home.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/solar-savings-calculator"
                className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Check battery benefit
              </a>

              <a
                href="/go/solar-battery"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Compare solar battery options
              </a>
            </div>
          
            <p className="mt-4 text-sm text-slate-400">
              Last updated: May 2026
            </p>
          </header>

          <section className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h2 className="text-2xl font-bold">Quick answer</h2>

            <p className="mt-4 leading-7 text-slate-300">
              A solar battery is most likely to be worth considering if your
              home generates solar electricity during the day but uses a lot of
              electricity in the evening. The battery stores surplus electricity
              so you can use more of your own generation instead of exporting it
              straight away.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              The main trade-off is cost. Battery storage can increase your
              savings, but it also increases the upfront price, so the payback
              should be compared against a solar-only system.
            </p>
          </section>

          <section className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">
                When a solar battery may be worth it
              </h2>

              <ul className="mt-5 space-y-3 text-slate-300">
                {goodFitFactors.map((factor) => (
                  <li key={factor} className="flex gap-3">
                    <span className="mt-1 text-emerald-300">✓</span>
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">
                When a battery may be less suitable
              </h2>

              <ul className="mt-5 space-y-3 text-slate-300">
                {poorFitFactors.map((factor) => (
                  <li key={factor} className="flex gap-3">
                    <span className="mt-1 text-red-300">•</span>
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              How does a solar battery improve self-consumption?
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Without a battery, solar electricity is normally used immediately
              by your home or exported to the grid. If you generate more than
              you are using at that moment, the surplus is exported.
            </p>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              With a battery, some of that surplus can be stored and used later.
              This may be useful if your home is empty during the day but uses
              more electricity in the evening.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <ProcessCard
                number="1"
                title="Panels generate"
                description="Your solar panels generate electricity during daylight hours."
              />
              <ProcessCard
                number="2"
                title="Battery stores surplus"
                description="Unused solar electricity can be stored instead of exported immediately."
              />
              <ProcessCard
                number="3"
                title="Home uses later"
                description="Stored electricity can be used later, often in the evening."
              />
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              Solar-only vs solar plus battery
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              The simplest comparison is whether the extra savings from the
              battery justify the extra upfront cost. Solar-only may be better
              if you can already use a lot of electricity during the day. Solar
              plus battery may be better if you export a lot and buy back
              electricity later at a higher price.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-white/10 text-slate-200">
                  <tr>
                    <th className="p-4 font-semibold">Setup</th>
                    <th className="p-4 font-semibold">Best for</th>
                    <th className="p-4 font-semibold">Trade-off</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-white/10">
                    <td className="p-4 font-medium text-white">Solar only</td>
                    <td className="p-4 text-slate-300">
                      Homes with good daytime electricity use
                    </td>
                    <td className="p-4 text-emerald-300">
                      Lower upfront cost, but more export possible
                    </td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="p-4 font-medium text-white">
                      Solar + battery
                    </td>
                    <td className="p-4 text-slate-300">
                      Homes with evening usage or lower daytime usage
                    </td>
                    <td className="p-4 text-emerald-300">
                      Higher upfront cost, potentially higher self-consumption
                    </td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="p-4 font-medium text-white">
                      Solar + battery + EV
                    </td>
                    <td className="p-4 text-slate-300">
                      Higher usage homes with smart charging needs
                    </td>
                    <td className="p-4 text-emerald-300">
                      More complex design, but can improve energy control
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              What should you compare before choosing a battery?
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Battery quotes should not be compared only on price. Capacity,
              warranty, compatibility, usable storage, and power output all
              matter.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {batteryFactors.map((factor) => (
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
              Battery storage and EV charging
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Battery storage can be useful for some EV households, but the
              right setup depends on when the car is usually at home, when it is
              charged, annual mileage, charger type, solar system size, and
              tariff.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              If the car can charge during the day, you may use solar directly.
              If the car is normally charged at night, a battery or smart tariff
              strategy may affect the best setup.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="/solar-panels-and-ev-charging"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Solar panels and EV charging
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
              Estimate whether a battery could make sense
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Use the solar calculator to estimate system size, annual benefit,
              payback range, and whether battery storage may improve
              self-consumption for your household.
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

          
          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              Planning to buy solar or battery storage soon?
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              The free SolarCal guide helps you understand solar savings,
              battery storage, quote comparison, payback periods, and common
              buying mistakes. If you want a more detailed checklist before
              choosing an installer, the Buyer’s Pack gives you extra quote
              comparison help and practical questions to ask.
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
              These links can help you understand UK solar panels, battery
              storage, certified installers, export payments, and consumer
              guidance. Always check current details before making a buying
              decision.
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
              This guide is for general information only. Solar battery savings,
              payback, suitability, and product performance depend on solar
              generation, household usage, tariff, export rate, battery size,
              installer pricing, product choice, future energy prices, and
              installation design.
            </p>
          </section>
        </article>
      </main>
    </SiteShell>
  );
}

function ProcessCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400 font-bold text-slate-950">
        {number}
      </div>
      <h3 className="mt-5 text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
    </div>
  );
}