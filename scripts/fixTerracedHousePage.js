const fs = require("fs");
const path = require("path");

const dir = path.join(process.cwd(), "app", "solar-panels-for-terraced-house");
const file = path.join(dir, "page.tsx");

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const code = `import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Solar Panels for Terraced Houses UK | SolarCal",
  description:
    "Learn whether solar panels are suitable for terraced houses in the UK, including roof space, shading, costs, savings, batteries, grants, and quote checks.",
};

export default function SolarPanelsForTerracedHousePage() {
  return (
    <SiteShell>
      <main className="min-h-screen bg-slate-950 text-white">
        <article className="mx-auto max-w-5xl px-6 py-16">
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
              size and value depend on roof space, shading, access, electricity
              usage, and installation cost.
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
              shading. The main checks are roof size, access, scaffolding,
              shading, roof condition, and whether the final quote gives a
              sensible payback.
            </p>
          </section>

          <section className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">Why solar can work well</h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                <li>• Many terraced homes still have enough roof space for a useful system.</li>
                <li>• A smaller solar system can still reduce electricity bills.</li>
                <li>• Solar can work with battery storage if evening usage is high.</li>
                <li>• Export payments may add extra value for unused electricity.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">What can make it harder</h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                <li>• Chimneys, dormers, or neighbouring roofs can create shading.</li>
                <li>• Some terraced roofs have limited usable panel space.</li>
                <li>• Scaffolding and access can affect installation cost.</li>
                <li>• Older roofs may need checking before panels are fitted.</li>
              </ul>
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              What to check before fitting solar panels
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "Usable roof area and roof direction",
                "Shading from chimneys, trees, or neighbouring buildings",
                "Scaffolding access and installation complexity",
                "Roof condition and whether repairs are needed first",
                "Battery and inverter location",
                "MCS certification and installer warranty",
                "Smart Export Guarantee tariff options",
                "Solar-only versus solar-plus-battery quotes",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-950 p-5"
                >
                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
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
              common buying mistakes.
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
            <h2 className="text-2xl font-bold">Important note</h2>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              This guide is for general information only. Suitability, costs,
              savings, battery value, export income, and payback depend on roof
              survey, shading, household usage, tariff, installer pricing,
              product choice, and property details.
            </p>
          </section>
        </article>
      </main>
    </SiteShell>
  );
}
`;

fs.writeFileSync(file, code, "utf8");
console.log("Fixed terraced house page module.");