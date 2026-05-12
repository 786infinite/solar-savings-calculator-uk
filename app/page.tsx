import { FooterLinks } from "@/components/SiteShell";

const guides = [
  ["How much do solar panels cost?", "/how-much-do-solar-panels-cost-uk"],
  ["Are solar panels worth it?", "/are-solar-panels-worth-it-uk"],
  ["Solar panels for a 3-bedroom house", "/solar-panels-for-3-bedroom-house"],
  ["Best EV chargers UK", "/best-ev-chargers-uk"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
        <p className="mb-4 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">UK Solar Savings Calculator</p>
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">Estimate your solar panel savings in minutes</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Use our free UK solar calculator to estimate installation cost, annual savings, payback period, battery benefit, EV charging potential, and your next best step.</p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a href="/solar-savings-calculator" className="rounded-xl bg-emerald-400 px-6 py-4 text-base font-semibold text-slate-950 shadow-lg shadow-emerald-400/20 transition hover:bg-emerald-300">Start the solar calculator</a>
          <a href="/how-much-do-solar-panels-cost-uk" className="rounded-xl border border-white/20 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10">Learn about UK solar costs</a>
        </div>
        <div className="mt-16 grid w-full gap-6 text-left md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6"><h2 className="text-xl font-semibold">Estimate savings</h2><p className="mt-3 text-slate-300">Get a simple estimate for annual bill savings, export income, and total yearly benefit.</p></div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6"><h2 className="text-xl font-semibold">Check payback</h2><p className="mt-3 text-slate-300">See a rough payback range based on electricity use, roof direction, shading, and battery choice.</p></div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6"><h2 className="text-xl font-semibold">Compare next steps</h2><p className="mt-3 text-slate-300">Find out whether to compare solar quotes, consider a battery, look at EV chargers, or start with an energy monitor.</p></div>
        </div>
        <div className="mt-16 w-full rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
          <h2 className="text-2xl font-semibold">Popular guides</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {guides.map(([title, href]) => <a key={href} href={href} className="rounded-2xl border border-white/10 bg-slate-950 p-5 hover:border-emerald-400/50">{title}</a>)}
          </div>
        </div>
        <p className="mt-12 max-w-3xl text-sm text-slate-400">Calculator results are estimates only. Final costs, savings, payback, and suitability depend on roof survey, location, shading, tariff, installer pricing, product choice, and household usage.</p>
      </section>
      <FooterLinks />
    </main>
  );
}
