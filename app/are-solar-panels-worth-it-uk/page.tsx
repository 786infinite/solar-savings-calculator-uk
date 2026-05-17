import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import FaqSchema from "@/components/FaqSchema";

export const metadata: Metadata = {
  title: "Are Solar Panels Worth It UK? | SolarCal",
  description:
    "Find out when solar panels may be worth it in the UK, what affects payback, battery storage impact, EV charging benefits, and how to estimate your savings.",
};

const worthItFactors = [
  {
    title: "You have a suitable roof",
    description:
      "Solar panels are more likely to make sense if your roof has enough space, good sunlight, limited shading, and is in suitable condition.",
  },
  {
    title: "Your electricity bills are medium to high",
    description:
      "Higher electricity usage can make solar more valuable because you may save more by using your own generated electricity.",
  },
  {
    title: "You use electricity during the day",
    description:
      "Solar savings are usually stronger when you use more electricity while the panels are generating, rather than exporting most of it.",
  },
  {
    title: "You plan to stay in the property",
    description:
      "Solar panels can take years to pay back, so they are often more attractive if you expect to stay long enough to benefit from the savings.",
  },
  {
    title: "You can compare strong quotes",
    description:
      "A competitive quote with good equipment, warranty, and aftercare can make solar more attractive than a high-priced quote with unclear details.",
  },
  {
    title: "You may add a battery or EV charger",
    description:
      "Battery storage or daytime EV charging can increase self-consumption, but the extra cost needs to be compared carefully.",
  },
];

const lessSuitableFactors = [
  {
    title: "Heavy shading",
    description:
      "Trees, nearby buildings, chimneys, dormers, or roof obstructions can reduce generation and make the financial return weaker.",
  },
  {
    title: "Very low electricity usage",
    description:
      "If your electricity usage is low, your bill savings may not be high enough to justify a larger installation.",
  },
  {
    title: "You may move soon",
    description:
      "If you expect to move before the system has time to pay back, the return may be less attractive.",
  },
  {
    title: "Your roof needs work first",
    description:
      "If the roof needs repairs, replacement, or major access work, it may be better to fix that before installing solar panels.",
  },
  {
    title: "The quote is too expensive",
    description:
      "A high quote can lengthen the payback period, even if the property is otherwise suitable for solar.",
  },
  {
    title: "You cannot get permission",
    description:
      "Renters, leaseholders, listed buildings, or some flats may need permission before solar panels can be installed.",
  },
];

const paybackFactors = [
  {
    title: "Installation cost",
    description:
      "A lower-quality cheap quote is not always best, but a fair and competitive installation cost helps improve payback.",
  },
  {
    title: "System size",
    description:
      "The system needs to match your roof and usage. Bigger is not always better if you export too much electricity.",
  },
  {
    title: "Electricity unit rate",
    description:
      "Higher import electricity prices can make solar savings more valuable because every self-used kWh avoids buying electricity from the grid.",
  },
  {
    title: "Export payment rate",
    description:
      "Export payments can add value, but exported electricity is usually worth less than electricity you use yourself.",
  },
  {
    title: "Self-consumption",
    description:
      "The more solar electricity you use at home, the better the savings usually are.",
  },
  {
    title: "Roof direction and shading",
    description:
      "South-facing, east-west, and shaded roofs can all perform differently, which affects payback.",
  },
  {
    title: "Battery storage",
    description:
      "A battery may increase self-consumption, but it also adds cost. The payback impact depends on usage and tariff.",
  },
  {
    title: "Future energy prices",
    description:
      "Future electricity prices are uncertain, so solar payback should be treated as an estimate rather than a promise.",
  },
];

const comparisonRows = [
  {
    situation: "Good roof, high daytime usage",
    likelyOutcome: "Often more attractive",
    reason:
      "The home can use more solar electricity directly, which usually improves savings.",
  },
  {
    situation: "Good roof, low daytime usage",
    likelyOutcome: "May still be worth checking",
    reason:
      "Export income helps, but self-consumption may be lower unless usage is shifted or a battery is added.",
  },
  {
    situation: "Heavy shading",
    likelyOutcome: "Needs careful survey",
    reason:
      "Shading can reduce output and may weaken the financial case.",
  },
  {
    situation: "Solar plus battery",
    likelyOutcome: "Depends on usage and price",
    reason:
      "A battery can improve self-consumption, but the extra cost can extend payback.",
  },
  {
    situation: "EV at home during the day",
    likelyOutcome: "Can be attractive",
    reason:
      "Daytime EV charging can help use more solar generation at home.",
  },
];

const faqs = [
  {
    question: "Are solar panels worth it for most UK homes?",
    answer:
      "Solar panels can be worth it for many UK homeowners, but it depends on roof suitability, electricity usage, installation cost, export payments, and how long you plan to stay in the property.",
  },
  {
    question: "Are solar panels worth it without a battery?",
    answer:
      "They can be. A battery is not required, but without one you may export more unused electricity. The best choice depends on your usage pattern, tariff, and the extra battery cost.",
  },
  {
    question: "Do solar panels work in cloudy UK weather?",
    answer:
      "Yes, solar panels can still generate electricity in cloudy conditions, but output is lower than in direct sunlight. Location, roof angle, shading, and system size all affect generation.",
  },
  {
    question: "How long do solar panels take to pay for themselves?",
    answer:
      "The payback period can vary widely depending on installation cost, electricity usage, export tariff, roof suitability, battery choice, and future electricity prices. Use a calculator estimate and compare real quotes before deciding.",
  },
  {
    question: "Are solar panels worth it with an EV?",
    answer:
      "Solar panels can be more attractive if you have an EV and can charge during daylight hours. If most charging happens overnight, the benefit may depend more on battery storage or smart tariffs.",
  },
  {
    question: "Should I get quotes before deciding?",
    answer:
      "Yes. A calculator can give a useful estimate, but installer quotes are needed to confirm roof suitability, system design, equipment, final price, warranty, and expected generation.",
  },
];

export default function AreSolarPanelsWorthItUKPage() {
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
              UK solar guide
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
              Are Solar Panels Worth It in the UK?
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Solar panels can be worth it for many UK homeowners, especially if
              you have a suitable roof, reasonable electricity usage, and a
              competitive installation quote. The real answer depends on your
              property, usage, tariff, battery choice, and expected payback
              period.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/solar-panel-grants-uk"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Check solar grants
              </a>

              <a
                href="/solar-savings-calculator"
                className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Check your solar savings
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
              Solar panels are usually more attractive if your roof gets good
              sunlight, your electricity bills are high enough, and you can use
              a good share of the electricity your panels generate. They may be
              less attractive if your roof is heavily shaded, unsuitable, or you
              are likely to move before the system pays back.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              The safest approach is to estimate your savings first, then
              compare real quotes so you can judge the upfront cost against the
              expected yearly benefit, warranty, product quality, and aftercare.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              When are solar panels worth it?
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Solar panels tend to be more worthwhile when the system is matched
              properly to the home. The best results usually come from a
              suitable roof, sensible system size, good self-consumption, and a
              fair installation quote.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {worthItFactors.map((factor) => (
                <div
                  key={factor.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <h3 className="flex gap-3 text-lg font-semibold">
                    <span className="text-emerald-300">✓</span>
                    <span>{factor.title}</span>
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {factor.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              When might solar panels be less suitable?
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Solar is not automatically right for every home. If output is
              likely to be low or the quote is too expensive, the payback period
              can become less attractive.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {lessSuitableFactors.map((factor) => (
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

          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              What affects whether solar is worth it?
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Solar value is not just about the cost of panels. The return
              depends on how much electricity the system generates, how much you
              use at home, how much you export, and how much you pay for the
              installation.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {paybackFactors.map((factor) => (
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

          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              Solar worth-it examples
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              These examples show how different situations can affect whether
              solar panels may be financially attractive. They are not rules,
              but they help explain why quotes and payback periods vary.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-white/10 text-slate-200">
                  <tr>
                    <th className="p-4 font-semibold">Situation</th>
                    <th className="p-4 font-semibold">Likely outcome</th>
                    <th className="p-4 font-semibold">Why it matters</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.situation} className="border-t border-white/10">
                      <td className="p-4 font-medium text-white">
                        {row.situation}
                      </td>
                      <td className="p-4 font-semibold text-emerald-300">
                        {row.likelyOutcome}
                      </td>
                      <td className="p-4 text-slate-300">{row.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              Are solar panels worth it without a battery?
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Solar panels can still be worth it without a battery. A battery is
              not required for a solar system to reduce electricity bills. The
              key question is how much of your solar electricity you can use
              while it is being generated.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              Without a battery, surplus electricity is usually exported. That
              can still provide value, but export payments are usually lower
              than the value of electricity you use directly at home. If you are
              home during the day, work from home, run appliances in daylight
              hours, or charge an EV during the day, solar-only may still be
              useful.
            </p>
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              Solar panels with battery storage
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Battery storage can make solar more useful if you generate more
              electricity than you use during the day. Instead of exporting
              surplus electricity immediately, a battery can store some of it
              for evening use.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              However, batteries also add upfront cost. For some homes, a
              battery improves savings enough to be worthwhile. For others, it
              may make the payback period longer. The best comparison is usually
              solar-only versus solar-plus-battery quotes.
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
              Solar panels and EV charging
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Solar panels can be more attractive for households with an EV,
              especially if the car is at home during daylight hours. Daytime EV
              charging can help you use more of your own solar electricity.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              If you mainly charge overnight, solar may still help overall home
              electricity usage, but the direct EV charging benefit may be lower
              unless you combine it with battery storage or smart charging
              strategies.
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
              Check if solar could be worth it for your home
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Use the SolarCal calculator to estimate system size, annual
              savings, installation cost range, payback period, battery benefit,
              and EV charging potential.
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
              These links can help you understand UK solar panels, installation
              standards, export payments, and consumer guidance. Always check
              current details before making a buying decision.
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
              This page is for general information only. Solar panel savings,
              payback, export income, suitability, and installation costs vary
              by property, usage, tariff, roof condition, shading, location,
              installer pricing, future energy prices, and product choice. Use
              estimates as a starting point, not as a guaranteed result.
            </p>
          </section>
        </article>
      </main>
    </SiteShell>
  );
}