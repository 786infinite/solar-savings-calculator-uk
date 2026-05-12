import { BackHome, FooterLinks, SiteShell } from "./SiteShell";

export function GuidePage({ title, intro, sections, cta = true }: { title: string; intro: string; sections: { heading: string; body: string }[]; cta?: boolean }) {
  return (
    <SiteShell>
      <section className="mx-auto max-w-4xl px-6 py-16">
        <BackHome />
        <article className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="mb-4 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">UK solar guide</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">{intro}</p>
          {cta && (
            <a href="/solar-savings-calculator" className="mt-8 inline-flex rounded-xl bg-emerald-400 px-6 py-4 font-semibold text-slate-950 hover:bg-emerald-300">Use the solar calculator</a>
          )}
          <div className="mt-10 space-y-9">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-semibold">{section.heading}</h2>
                <p className="mt-3 leading-7 text-slate-300">{section.body}</p>
              </section>
            ))}
          </div>
          <div className="mt-10 rounded-2xl bg-slate-950 p-6">
            <h2 className="text-xl font-semibold">Important note</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">Figures on this website are estimates only. Final costs, savings, export income, payback, and suitability depend on a property survey, roof condition, shading, location, usage, tariff, installer pricing, and product choice.</p>
          </div>
        </article>
      </section>
      <FooterLinks />
    </SiteShell>
  );
}
