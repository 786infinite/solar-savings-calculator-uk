import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import FaqSchema from "@/components/FaqSchema";

export const metadata: Metadata = {
  title: "Best EV Chargers UK | SolarCal",
  description: "Compare EV charger types, smart charging features, solar compatibility, tethered vs untethered chargers, installation cost, and home charging options.",
};


const chargerTypes = [
  {
    type: "Tethered EV charger",
    bestFor: "Convenience",
    description:
      "Comes with a cable attached, so it is quicker to plug in at home.",
  },
  {
    type: "Untethered EV charger",
    bestFor: "Cleaner look / flexibility",
    description:
      "Uses a separate cable, which can look tidier and may suit different cars.",
  },
  {
    type: "Smart EV charger",
    bestFor: "Scheduling and tariffs",
    description:
      "Can help schedule charging, use app controls, and work with some smart tariffs.",
  },
  {
    type: "Solar-compatible EV charger",
    bestFor: "Solar panel homes",
    description:
      "May include features that help use surplus solar electricity for charging.",
  },
];

const buyingFactors = [
  "Compatibility with your EV",
  "Tethered or untethered design",
  "Smart charging features",
  "Solar compatibility",
  "App controls and scheduling",
  "Charging speed and home electrical capacity",
  "Installation cost",
  "Warranty and support",
];

const faqs = [
  {
    question: "What is the best EV charger for solar panels?",
    answer:
      "The best EV charger for solar depends on whether you want solar diversion features, smart tariff scheduling, app control, and compatibility with your car and home electrical setup.",
  },
  {
    question: "Do I need a smart EV charger?",
    answer:
      "A smart EV charger is usually worth considering because it can help schedule charging, manage energy use, and work with some tariffs. The right charger depends on your car, home, and charging habits.",
  },
  {
    question: "Is tethered or untethered better?",
    answer:
      "Tethered chargers are convenient because the cable is attached. Untethered chargers can look tidier and may offer more flexibility if you change cars or cable type later.",
  },
  {
    question: "Can an EV charger use solar electricity?",
    answer:
      "Some chargers can work with solar generation or surplus solar features. Whether this works well depends on the charger, solar system, car, and when the vehicle is plugged in.",
  },
];

export default function BestEVChargersUKPage() {
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
              EV charger guide
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
              Best EV Chargers UK
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              The best EV charger for your home depends on your car, charging
              habits, electricity tariff, home electrical setup, solar panel
              plans, and whether you want smart charging or solar-compatible
              features.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/solar-panels-and-ev-charging"
                className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Read solar and EV guide
              </a>

              <a
                href="/go/ev-charger"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                See EV charger options
              </a>
            </div>
          
            <p className="mt-4 text-sm text-slate-400">
              Last updated: May 2026
            </p>
          </header>

          <section className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h2 className="text-2xl font-bold">Quick answer</h2>

            <p className="mt-4 leading-7 text-slate-300">
              For many UK homes, the best EV charger is a smart charger that is
              easy to use, compatible with the vehicle, professionally installed,
              and suitable for your tariff and charging routine.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              If you have or plan to install solar panels, it may be worth
              comparing chargers with solar-compatible features. These can help
              use more of your own solar electricity when the car is plugged in
              during daylight hours.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">Types of EV chargers</h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              EV chargers vary by cable type, smart features, solar
              compatibility, charging speed, and installation requirements.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {chargerTypes.map((charger) => (
                <div
                  key={charger.type}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <p className="text-sm font-medium text-emerald-300">
                    {charger.bestFor}
                  </p>
                  <h3 className="mt-3 text-xl font-bold">{charger.type}</h3>
                  <p className="mt-3 leading-7 text-slate-300">
                    {charger.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              What should you look for in a home EV charger?
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              The right EV charger should match your car, your home electrical
              setup, your charging routine, and any solar or smart tariff plans.
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

          <section className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">Tethered EV chargers</h2>

              <p className="mt-4 leading-7 text-slate-300">
                A tethered EV charger has the cable permanently attached. This
                is usually more convenient because you can simply park, plug in,
                and charge.
              </p>

              <p className="mt-4 leading-7 text-slate-300">
                The downside is that the cable is always visible, and you need
                to make sure the connector type suits your vehicle.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">Untethered EV chargers</h2>

              <p className="mt-4 leading-7 text-slate-300">
                An untethered EV charger does not have a fixed cable. You plug
                in your own cable when you want to charge.
              </p>

              <p className="mt-4 leading-7 text-slate-300">
                This can look tidier and may offer more flexibility, but it is
                slightly less convenient day to day.
              </p>
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              EV chargers for homes with solar panels
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              If your home has solar panels or you plan to install them, look
              for chargers that support smart scheduling, solar features, or
              energy monitoring where relevant.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              Solar-compatible charging is most useful when your car is plugged
              in during daylight hours. If the car is usually charged overnight,
              a smart tariff, battery storage, or different charging strategy
              may be more important.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="/solar-panels-and-ev-charging"
                className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Read solar and EV charging guide
              </a>

              <a
                href="/solar-savings-calculator"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Estimate solar savings
              </a>
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              Installation cost and professional fitting
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              EV charger installation cost depends on the charger, cable run,
              consumer unit, property layout, earthing requirements, and any
              extra electrical work needed.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              A proper installer should check your home electrical setup and
              explain the charger, installation work, warranty, and any ongoing
              app or subscription requirements.
            </p>
          </section>

          <section className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h2 className="text-3xl font-bold">
              Compare EV charger options
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Use this guide to understand what features matter, then compare
              charger options based on your EV, charging habits, solar plans,
              and home installation requirements.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="/go/ev-accessories"
                className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                See EV charger accessories
              </a>

              <a
                href="/solar-savings-calculator"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Use solar calculator
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
              This guide is for general information only. EV charger suitability,
              installation cost, solar compatibility, charging speed, and
              features depend on your car, property, electrical setup, tariff,
              installer, product choice, and how you use the charger.
            </p>
          </section>
        </article>
      </main>
    </SiteShell>
  );
}