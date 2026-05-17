const fs = require("fs");
const path = require("path");

const dirPath = path.join(
  process.cwd(),
  "app",
  "solar-panels-for-terraced-house"
);

const filePath = path.join(dirPath, "page.tsx");

if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath, { recursive: true });
}

const pageCode = `import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import FaqSchema from "@/components/FaqSchema";

export const metadata: Metadata = {
  title: "Solar Panels for Terraced Houses UK | SolarCal",
  description:
    "Learn whether solar panels are suitable for terraced houses in the UK, including roof space, shading, costs, savings, batteries, grants, and quote checks.",
};

const checks = [
  "Roof size and usable south, east, or west-facing area",
  "Shading from chimneys, neighbouring roofs, trees, or dormers",
  "Scaffolding access and whether neighbouring access is needed",
  "Loft, cable route, inverter, and meter location",
  "Whether the roof is shared, altered, listed, or in a conservation area",
  "Battery storage space and whether it improves self-consumption",
  "Export tariff options through the Smart Export Guarantee",
  "Whether the installer is MCS certified and provides clear warranties",
];

const prosAndCons = [
  {
    title: "Why solar can work well",
    points: [
      "Many terraced homes still have enough roof space for a useful system.",
      "Solar can reduce daytime electricity use and export surplus power.",
      "A smaller system can still provide meaningful savings if priced well.",
      "Battery storage may help if most electricity is used in the evening.",
    ],
  },
  {
    title: "What can make it harder",
    points: [
      "Some terraced roofs have limited usable space or awkward roof shapes.",
      "Chimneys and neighbouring buildings can create shading.",
      "Scaffolding and access may affect installation cost.",
      "Older roofs may need checking before panels are fitted.",
    ],
  },
];

const faqs = [
  {
    question: "Can you put solar panels on a terraced house?",
    answer:
      "Yes, many terraced houses can have solar panels, but suitability depends on roof space, direction, shading, access, roof condition, and whether any planning or property restrictions apply.",
  },
  {
    question: "How many solar panels fit on a terraced house?",
    answer:
      "It depends on the usable roof area and panel size. Some terraced houses may only fit a smaller system, while larger or wider terraces may fit more panels.",
  },
  {
    question: "Are solar panels worth it on a terraced house?",
    answer:
      "They can be worth it if the roof is suitable, the system is priced fairly, and enough electricity is used at home. A smaller system can still be useful, but payback depends on cost, usage, export income, and shading.",
  },
  {
    question: "Do terraced houses need planning permission for solar panels?",
    answer:
      "Many domestic solar installations are permitted development, but restrictions can apply for listed buildings, conservation areas, flats, shared roofs, and unusual installations. Always check before buying.",
  },
  {
    question: "Is a battery useful for a terraced house?",
    answer:
      "A battery may help if you generate surplus solar power during the day and use more electricity in the evening. It is not always worth it, so compare solar-only and solar-plus-battery quotes.",
  },
];

export default function SolarPanelsForTerracedHousePage() {
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
              UK solar house type guide
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
              Solar Panels for Terraced Houses UK
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Terraced houses can often have solar panels, but the best system
              size and value depend on roof space, shading, access, household
              electricity use, and installation cost.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/solar-savings-calculator"
                className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Estimate your solar savings
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
              Solar panels can work on many UK terraced houses, especially if
              the roof has usable south, east, or west-facing space with limited
              shading. The main things to check are roof size, access,
              scaffolding, shading, roof condition, and whether the final quote
              still gives a sensible payback.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              A terraced house may have a smaller system than a detached home,
              but a smaller system can still reduce bills if it is well designed
              and fairly priced.
            </p>
          </section>

          <section className="mt-12 grid gap-6 md:grid-cols-2">
            {prosAndCons.map((group) => (
              <div
                key={group.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <h2 className="text-2xl font-bold">{group.title}</h2>

                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                  {group.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              What to check before fitting solar panels
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Terraced homes can be more sensitive to roof space, access, and
              shading. Before accepting a quote, check the practical details as
              well as the estimated savings.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {checks.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-950 p-5"
                >
                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              Roof space, shading, and system size
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Terraced house roofs can vary a lot. Some have enough clear roof
              area for a good solar array, while others may be limited by
              chimneys, dormers, skylights, roof shape, or neighbouring
              buildings.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              If the roof is partly shaded, the installer should explain how
              that affects expected generation and whether optimisers,
              microinverters, or a different panel layout are worth considering.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="/solar-panels-for-3-bedroom-house"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                3-bedroom house solar guide
              </a>

              <a
                href="/solar-panels-for-4-bedroom-house"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                4-bedroom house solar guide
              </a>
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              Battery storage for terraced houses
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              A battery can be useful if your terraced house generates more
              solar electricity than you use during the day and you use more
              power in the evening. But battery storage adds cost, so compare
              solar-only and solar-plus-battery quotes before deciding.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              Also check where the battery and inverter would be installed,
              whether the location is suitable, and whether there are any space,
              ventilation, access, or warranty requirements.
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
              Estimate savings for your terraced house
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Use the SolarCal calculator to estimate system size, installation
              cost range, annual savings, export income, battery benefit, and
              payback period before comparing installer quotes.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="/solar-savings-calculator"
                className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Use the solar calculator
              </a>

              <a
                href="/solar-panel-grants-uk"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Check solar grants
              </a>
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              Planning to buy solar soon?
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              The free SolarCal guide helps you understand savings, quote
              comparison, payback periods, battery storage, EV charging, and
              common buying mistakes. If you want a more detailed checklist
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
              suitability, installation cost, savings, battery value, payback,
              and export income depend on roof survey, shading, household
              usage, tariff, installer pricing, product choice, and property
              details.
            </p>
          </section>
        </article>
      </main>
    </SiteShell>
  );
}
`;

fs.writeFileSync(filePath, pageCode, "utf8");

console.log("Created/updated app/solar-panels-for-terraced-house/page.tsx");