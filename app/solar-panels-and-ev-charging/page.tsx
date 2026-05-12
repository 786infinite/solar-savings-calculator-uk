import SiteShell from "@/components/SiteShell";

const benefits = [
  "Solar can reduce how much grid electricity you use for home charging",
  "Daytime charging can make better use of solar generation",
  "A smart EV charger can help control when charging happens",
  "Battery storage may help if your car is not usually home during the day",
  "Higher EV usage can make a larger solar system more useful",
  "Solar, EV charging, and smart tariffs can work together if designed properly",
];

const limitations = [
  "Solar panels generate most during daylight, not overnight",
  "Your EV may not be home when solar generation is highest",
  "A typical home solar system will not always fully charge an EV every day",
  "Charging speed depends on the charger, car, home electrics, and available solar output",
  "Battery storage adds cost and is not always the best answer",
  "A proper quote should check roof size, usage, charger setup, and electrical capacity",
];

const setupRows = [
  {
    setup: "Solar + EV charger",
    bestFor: "Cars that can charge at home during daylight",
    note: "Can use solar directly when generation is available",
  },
  {
    setup: "Solar + battery + EV charger",
    bestFor: "Homes with evening charging or lower daytime availability",
    note: "Can improve flexibility, but adds upfront cost",
  },
  {
    setup: "Solar + smart tariff",
    bestFor: "Homes that can shift usage and charging times",
    note: "May help combine solar generation with cheaper import periods",
  },
  {
    setup: "Solar only",
    bestFor: "Homes that mainly want to reduce general electricity bills",
    note: "May still help even if EV charging is mostly overnight",
  },
];

const faqs = [
  {
    question: "Can solar panels charge an electric car?",
    answer:
      "Yes, solar panels can help charge an electric car if the car is plugged in while the panels are generating electricity. The benefit is usually strongest when charging happens during daylight hours.",
  },
  {
    question: "Do I need a battery to charge an EV with solar?",
    answer:
      "Not always. If your car is often home during the day, you may be able to use solar electricity directly. A battery may help if you generate during the day but charge more in the evening, but it adds cost.",
  },
  {
    question: "How many solar panels do I need for an EV?",
    answer:
      "It depends on your mileage, EV efficiency, charging habits, household electricity usage, and roof space. A calculator can provide a rough estimate, but a proper quote should check your actual usage and roof suitability.",
  },
  {
    question: "Is a smart EV charger worth it with solar?",
    answer:
      "A smart EV charger can be useful because it may help schedule charging, use surplus solar where supported, and work with tariffs. The best option depends on your car, charger features, and home energy setup.",
  },
];

export default function SolarPanelsAndEVChargingPage() {
  return (
    <SiteShell>
      <main className="min-h-screen bg-slate-950 text-white">
        <article className="mx-auto max-w-5xl px-6 py-16">
          <a href="/" className="text-sm font-medium text-emerald-300 hover:text-emerald-200">
            ← Back to homepage
          </a>

          <header className="mt-8">
            <p className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
              Solar and EV guide
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
              Solar Panels and EV Charging
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Solar panels can work well with EV charging, especially if your
              car is at home during daylight hours. The real benefit depends on
              when you charge, your mileage, solar system size, roof suitability,
              battery storage, smart charger features, and tariff.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/solar-savings-calculator"
                className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Estimate solar and EV savings
              </a>

              <a
                href="/best-ev-chargers-uk"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                View EV charger guide
              </a>
            </div>
          </header>

          <section className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h2 className="text-2xl font-bold">Quick answer</h2>

            <p className="mt-4 leading-7 text-slate-300">
              Solar panels can help charge an EV, but the strongest benefit
              usually comes when the car is plugged in during daylight hours. If
              the car is usually away during the day and charged at night, solar
              may still reduce general home electricity usage, but direct EV
              charging benefit may be lower.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              A smart EV charger, battery storage, and tariff choice can all
              affect the best setup. The right system depends on your home,
              driving habits, and budget.
            </p>
          </section>

          <section className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">
                Why solar and EV charging can work well
              </h2>

              <ul className="mt-5 space-y-3 text-slate-300">
                {benefits.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 text-emerald-300">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">
                Limits to understand before buying
              </h2>

              <ul className="mt-5 space-y-3 text-slate-300">
                {limitations.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 text-red-300">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              Can solar panels fully charge an EV?
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Sometimes solar can provide a meaningful amount of EV charging,
              but it depends on system size, weather, time of year, driving
              mileage, when the vehicle is plugged in, and how much electricity
              the rest of the home is using at the same time.
            </p>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              For many households, solar reduces the amount of grid electricity
              needed rather than completely replacing it. This is still useful,
              but expectations should be realistic.
            </p>
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              Common solar and EV charging setups
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              The best setup depends on whether the car is home during daylight,
              whether you want battery storage, and whether a smart tariff or
              solar-compatible EV charger makes sense.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-white/10 text-slate-200">
                  <tr>
                    <th className="p-4 font-semibold">Setup</th>
                    <th className="p-4 font-semibold">Best for</th>
                    <th className="p-4 font-semibold">Important note</th>
                  </tr>
                </thead>
                <tbody>
                  {setupRows.map((row) => (
                    <tr key={row.setup} className="border-t border-white/10">
                      <td className="p-4 font-medium text-white">
                        {row.setup}
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
                Charging during the day
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                If your EV is regularly parked at home during the day, solar
                charging can be more useful because the car can charge while the
                panels are generating.
              </p>

              <p className="mt-4 leading-7 text-slate-300">
                This may suit people who work from home, have flexible charging
                habits, or use the car mainly outside daytime hours.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">
                Charging overnight
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                If your EV is mostly charged overnight, solar may still reduce
                your general home electricity bill, but direct solar-to-car
                charging is less likely unless a battery or smart charging
                strategy is used.
              </p>

              <p className="mt-4 leading-7 text-slate-300">
                In this case, compare the value of battery storage carefully
                against cheaper overnight tariffs and the extra battery cost.
              </p>
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              Do you need a solar-compatible EV charger?
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Some EV chargers include features designed to work with solar
              generation, such as using surplus solar electricity where
              available. Other smart chargers focus on scheduled charging, tariff
              optimisation, app control, and load management.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              The best charger depends on your car, your home electrical setup,
              whether you have solar already, and whether you want solar
              diversion features.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="/best-ev-chargers-uk"
                className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                View EV charger guide
              </a>

              <a
                href="/go/ev-charger"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                See EV charger options
              </a>
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              Should you add a battery for EV charging?
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Battery storage can help store solar electricity for later use,
              but it is not automatically the best option for EV charging. EVs
              have large batteries themselves, and home battery capacity is
              often much smaller than an EV battery.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              A battery may make more sense if it also supports your household
              evening usage, smart tariff strategy, and general solar
              self-consumption — not only EV charging.
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
              Estimate solar, battery, and EV benefit
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Use the calculator to estimate system size, annual benefit,
              payback range, and whether EV charging or battery storage may
              change the best next step.
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
              This guide is for general information only. Solar and EV charging
              savings depend on solar generation, driving mileage, charging
              habits, household usage, roof suitability, tariff, charger
              features, battery storage, installer pricing, future energy
              prices, and product choice.
            </p>
          </section>
        </article>
      </main>
    </SiteShell>
  );
}