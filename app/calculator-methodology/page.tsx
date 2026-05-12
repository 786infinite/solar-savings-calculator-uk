import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Solar Calculator Methodology | SolarCal",
  description: "See how the SolarCal calculator estimates UK solar panel savings, system size, installation cost, generation, payback, battery benefit, and EV charging impact.",
};


const assumptions = [
  {
    title: "Electricity bill to annual usage",
    description:
      "The calculator estimates annual electricity usage by converting your monthly electricity bill into yearly spend, then dividing by an assumed electricity unit rate.",
  },
  {
    title: "System size estimate",
    description:
      "The calculator estimates a rough solar system size based on annual usage and typical UK generation assumptions, then adjusts the size based on bedroom count.",
  },
  {
    title: "Regional generation",
    description:
      "The calculator uses different generation assumptions for South England, Midlands/Wales, North England, and Scotland/Northern regions.",
  },
  {
    title: "Roof direction",
    description:
      "South-facing roofs are treated as strongest. South-east and south-west are slightly reduced, east/west is reduced further, and north-facing roofs are reduced significantly.",
  },
  {
    title: "Shading",
    description:
      "No shading uses the full estimate. Light, moderate, and heavy shading reduce estimated generation.",
  },
  {
    title: "Self-consumption",
    description:
      "The calculator estimates how much solar electricity is used at home based on daytime usage, battery interest, and EV ownership.",
  },
  {
    title: "Export income",
    description:
      "Unused estimated solar generation is treated as exported electricity and valued using a simple assumed export rate.",
  },
  {
    title: "Payback period",
    description:
      "Estimated payback is calculated by dividing the estimated installation cost range by the estimated annual benefit.",
  },
];

const limitations = [
  "It does not inspect your actual roof",
  "It does not check planning, structural, or electrical suitability",
  "It does not use live electricity tariffs",
  "It does not guarantee Smart Export Guarantee rates",
  "It does not include all possible installation complications",
  "It does not replace an MCS installer quote or survey",
  "It does not guarantee savings, payback, or performance",
];

const factors = [
  "Roof direction, pitch, size, condition, and shading",
  "Location and local solar generation conditions",
  "Household electricity usage and when electricity is used",
  "Electricity import tariff and export tariff",
  "Solar panel, inverter, battery, and EV charger choice",
  "Installer pricing, warranty, scaffolding, and installation complexity",
  "Future electricity prices and export rates",
];

export default function CalculatorMethodologyPage() {
  return (
    <SiteShell>
      <main className="min-h-screen bg-slate-950 text-white">
        <article className="mx-auto max-w-5xl px-6 py-16">
          <a href="/" className="text-sm font-medium text-emerald-300 hover:text-emerald-200">
            ← Back to homepage
          </a>

          <header className="mt-8">
            <p className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
              Methodology
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
              Calculator Methodology
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              This page explains how the Solar Savings Calculator UK creates its
              estimates, what assumptions it uses, and why the results should be
              treated as a starting point rather than a formal solar quote.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/solar-savings-calculator"
                className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Use the calculator
              </a>

              <a
                href="/affiliate-disclosure"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Read affiliate disclosure
              </a>
            </div>
          </header>

          <section className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h2 className="text-2xl font-bold">Important summary</h2>

            <p className="mt-4 leading-7 text-slate-300">
              The calculator is designed to give a quick planning estimate for
              UK homeowners. It estimates system size, generation, installation
              cost range, annual benefit, payback period, battery benefit, EV
              charging relevance, and CO2 savings.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              It does not replace a proper installer survey. Final quotes,
              system design, suitability, savings, and payback depend on your
              actual property and chosen products.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              Main calculator assumptions
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {assumptions.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              How the estimate is calculated
            </h2>

            <div className="mt-6 space-y-5">
              <Step
                number="1"
                title="Estimate annual electricity usage"
                description="Monthly electricity bill is converted into estimated yearly electricity spend, then divided by an assumed electricity unit rate."
              />

              <Step
                number="2"
                title="Estimate solar system size"
                description="The calculator estimates a rough system size based on annual usage, then keeps the result within a typical range for the selected property size."
              />

              <Step
                number="3"
                title="Estimate annual generation"
                description="Estimated system size is multiplied by a regional generation assumption, then adjusted for roof direction and shading."
              />

              <Step
                number="4"
                title="Estimate self-consumption and export"
                description="The calculator estimates how much solar electricity is used at home and how much may be exported to the grid."
              />

              <Step
                number="5"
                title="Estimate annual benefit and payback"
                description="Estimated bill savings and export income are added together, then compared with the estimated installation cost range."
              />
            </div>
          </section>

          <section className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">What the calculator includes</h2>

              <ul className="mt-5 space-y-3 text-slate-300">
                <li>• Estimated annual electricity usage</li>
                <li>• Estimated system size</li>
                <li>• Estimated generation</li>
                <li>• Estimated installation cost range</li>
                <li>• Estimated annual benefit</li>
                <li>• Estimated payback range</li>
                <li>• Estimated CO2 saving</li>
                <li>• Battery and EV relevance</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">
                What the calculator does not include
              </h2>

              <ul className="mt-5 space-y-3 text-slate-300">
                {limitations.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              Why your real quote may be different
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Solar installations are property-specific. Two homes with the same
              electricity bill can still need different system designs and
              receive different quotes.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {factors.map((factor) => (
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
              How to use the results properly
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Use the calculator as an early planning tool. It can help you
              understand whether solar may be worth exploring, what size system
              may be relevant, and whether battery storage or EV charging could
              change the result.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              Before making a decision, compare real installer quotes and check
              roof suitability, warranties, product choice, export rates,
              electrical requirements, and final installation cost.
            </p>
          </section>

          <section className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h2 className="text-3xl font-bold">Next step</h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Start with the calculator estimate, then compare quotes if the
              result looks promising.
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
        </article>
      </main>
    </SiteShell>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950 p-5">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-400 font-bold text-slate-950">
          {number}
        </div>

        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="mt-2 leading-7 text-slate-300">{description}</p>
        </div>
      </div>
    </div>
  );
}