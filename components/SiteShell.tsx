import type { ReactNode } from "react";

export function BackHome() {
  return (
    <a href="/" className="text-sm font-medium text-emerald-300 hover:text-emerald-200">
      ← Back to homepage
    </a>
  );
}

export function HeaderLinks() {
  return (
    <header className="border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="/" className="text-xl font-bold tracking-tight">
          SolarCal
        </a>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a href="/solar-savings-calculator" className="hover:text-emerald-300">
            Calculator
          </a>
          <a href="/how-much-do-solar-panels-cost-uk" className="hover:text-emerald-300">
            Costs
          </a>
          <a href="/are-solar-panels-worth-it-uk" className="hover:text-emerald-300">
            Worth It?
          </a>
          <a href="/solar-battery-worth-it" className="hover:text-emerald-300">
            Batteries
          </a>
          <a href="/best-ev-chargers-uk" className="hover:text-emerald-300">
            EV Chargers
          </a>
        </nav>

        <a
          href="/solar-savings-calculator"
          className="rounded-xl bg-emerald-400 px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-300"
        >
          Start calculator
        </a>
      </div>
    </header>
  );
}

export function FooterLinks() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h2 className="font-bold">SolarCal</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              UK solar savings calculator and home energy guides. Estimate solar
              panel savings, installation costs, payback, batteries, and EV
              charging potential.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Calculators</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>
                <a href="/solar-savings-calculator" className="hover:text-emerald-300">
                  Solar savings calculator
                </a>
              </li>
              <li>
                <a href="/calculator-methodology" className="hover:text-emerald-300">
                  Calculator methodology
                </a>
              </li>
              <li>
                <a href="/go/solar-quotes" className="hover:text-emerald-300">
                  Compare solar quotes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Guides</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>
                <a href="/how-much-do-solar-panels-cost-uk" className="hover:text-emerald-300">
                  Solar panel costs
                </a>
              </li>
              <li>
                <a href="/are-solar-panels-worth-it-uk" className="hover:text-emerald-300">
                  Are solar panels worth it?
                </a>
              </li>
              <li>
                <a href="/how-long-do-solar-panels-take-to-pay-for-themselves" className="hover:text-emerald-300">
                  Solar payback
                </a>
              </li>
              <li>
                <a href="/solar-panels-for-3-bedroom-house" className="hover:text-emerald-300">
                  3-bedroom house solar
                </a>
              </li>
              <li>
                <a href="/solar-panels-for-4-bedroom-house" className="hover:text-emerald-300">
                  4-bedroom house solar
                </a>
              </li>
              <li>
                <a href="/solar-battery-worth-it" className="hover:text-emerald-300">
                  Solar battery worth it?
                </a>
              </li>
              <li>
                <a href="/solar-panels-and-ev-charging" className="hover:text-emerald-300">
                  Solar panels and EV charging
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Products & legal</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>
                <a href="/best-solar-panels-uk" className="hover:text-emerald-300">
                  Best solar panels UK
                </a>
              </li>
              <li>
                <a href="/best-solar-batteries-uk" className="hover:text-emerald-300">
                  Best solar batteries UK
                </a>
              </li>
              <li>
                <a href="/best-ev-chargers-uk" className="hover:text-emerald-300">
                  Best EV chargers UK
                </a>
              </li>
              <li>
                <a href="/best-portable-power-stations-uk" className="hover:text-emerald-300">
                  Portable power stations
                </a>
              </li>
              <li>
                <a href="/best-solar-generators-uk" className="hover:text-emerald-300">
                  Solar generators
                </a>
              </li>
              <li>
                <a href="/affiliate-disclosure" className="hover:text-emerald-300">
                  Affiliate disclosure
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-emerald-300">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="/cookie-policy" className="hover:text-emerald-300">
                  Cookie policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-emerald-300">
                  Terms
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-emerald-300">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-emerald-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-sm leading-6 text-slate-500">
          SolarCal calculator results are estimates only. Final costs, savings,
          payback, export income, and suitability depend on roof survey,
          location, shading, household usage, tariff, installer pricing, and
          product choice.
        </p>
      </div>
    </footer>
  );
}

export function LegalCard({
  label = "Legal",
  title,
  children,
}: {
  label?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <BackHome />

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="mb-4 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
            {label}
          </p>

          <h1 className="text-4xl font-bold">{title}</h1>

          <div className="mt-6 space-y-6 text-lg leading-8 text-slate-300">
            {children}
          </div>
        </div>
      </section>
    </main>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <HeaderLinks />
      {children}
      <FooterLinks />
    </div>
  );
}

export default SiteShell;