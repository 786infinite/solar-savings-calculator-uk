import type { ReactNode } from "react";

export function HeaderLinks() {
  return (
    <header className="border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="/" className="text-lg font-bold tracking-tight">
          Solar Savings Calculator UK
        </a>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a href="/solar-savings-calculator" className="hover:text-emerald-300">
            Calculator
          </a>
          <a href="/how-much-do-solar-panels-cost-uk" className="hover:text-emerald-300">
            Solar Costs
          </a>
          <a href="/are-solar-panels-worth-it-uk" className="hover:text-emerald-300">
            Worth It?
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
            <h2 className="font-bold">Solar Savings Calculator UK</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Estimate solar panel savings, installation cost, payback period,
              battery benefit, and EV charging potential.
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
                <a href="/solar-panels-for-3-bedroom-house" className="hover:text-emerald-300">
                  3-bedroom house solar
                </a>
              </li>
              <li>
                <a href="/solar-panels-for-4-bedroom-house" className="hover:text-emerald-300">
                  4-bedroom house solar
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Legal</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
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
                <a href="/contact" className="hover:text-emerald-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-sm leading-6 text-slate-500">
          Calculator results are estimates only. Final costs, savings, payback,
          export income, and suitability depend on roof survey, location,
          shading, household usage, tariff, installer pricing, and product
          choice.
        </p>
      </div>
    </footer>
  );
}

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <HeaderLinks />
      {children}
      <FooterLinks />
    </div>
  );
}