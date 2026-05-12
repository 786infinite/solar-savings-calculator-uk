import SiteShell from "@/components/SiteShell";

const worthItFactors = [
  "You own the property and can install panels permanently",
  "Your roof gets good sunlight and has limited shading",
  "Your electricity bills are medium to high",
  "You use electricity during the day or can shift usage to daylight hours",
  "You plan to stay in the property long enough to benefit from savings",
  "You may add a battery, EV charger, or smart tariff later",
];

const lessSuitableFactors = [
  "Your roof is heavily shaded for much of the day",
  "Your roof is very small, complex, or in poor condition",
  "You rent the property and cannot get permission",
  "Your electricity usage is very low",
  "You expect to move home soon",
  "The quote is too expensive compared with the expected annual benefit",
];

const paybackFactors = [
  "Installation cost",
  "System size",
  "Electricity unit rate",
  "Export payment rate",
  "How much solar electricity you use yourself",
  "Roof direction and shading",
  "Whether you add battery storage",
  "Future electricity prices",
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
    question: "Should I get quotes before deciding?",
    answer:
      "Yes. A calculator can give a useful estimate, but installer quotes are needed to confirm roof suitability, system design, equipment, final price, and expected generation.",
  },
];

export default function AreSolarPanelsWorthItUKPage() {
  return (
    <SiteShell>
      <main className="min-h-screen bg-slate-950 text-white">
        <article className="mx-auto max-w-5xl px-6 py-16">
          <a href="/" className="text-sm font-medium text-emerald-300 hover:text-emerald-200">
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
              property, usage, tariff, and expected payback period.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/solar-savings-calculator"
                className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Check your solar savings
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
              Solar panels are usually more attractive if your roof gets good
              sunlight, your electricity bills are high enough, and you can use
              a good share of the electricity your panels generate. They may be
              less attractive if your roof is heavily shaded, unsuitable, or you
              are likely to move before the system pays back.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              The safest approach is to estimate your savings first, then
              compare real quotes so you can judge the upfront cost against the
              expected yearly benefit.
            </p>
          </section>

          <section className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">
                When solar panels are more likely to be worth it
              </h2>

              <ul className="mt-5 space-y-3 text-slate-300">
                {worthItFactors.map((factor) => (
                  <li key={factor} className="flex gap-3">
                    <span className="mt-1 text-emerald-300">✓</span>
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">
                When solar panels may be less suitable
              </h2>

              <ul className="mt-5 space-y-3 text-slate-300">
                {lessSuitableFactors.map((factor) => (
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
              What affects whether solar is worth it?
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Solar value is not just about the cost of panels. The return
              depends on how much electricity the system generates, how much you
              use at home, and how much you are paid for exported electricity.
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
              electricity usage, but the direct EV charging benefit may be
              lower unless you combine it with battery storage or smart charging
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
              Use the calculator to estimate system size, annual savings,
              installation cost range, payback period, battery benefit, and EV
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