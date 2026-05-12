export default function GuidePage() {
  const title = "Solar Panels for a 3-Bedroom House";
  const intro = "A 3-bedroom house in the UK often suits a medium-sized solar system, depending on electricity use, roof space, shading, and whether the home has an EV or battery.";
  const bullets = [
  "Many 3-bedroom homes may look at a system around 3.5kW to 4.5kW.",
  "The right size depends on actual electricity usage.",
  "A battery may help if the household uses more electricity in the evening.",
  "A proper quote should confirm system size and roof suitability."
];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <a href="/" className="text-sm font-medium text-emerald-300 hover:text-emerald-200">
          ← Back to homepage
        </a>

        <article className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="mb-4 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
            UK solar guide
          </p>

          <h1 className="text-4xl font-bold">{title}</h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">{intro}</p>

          <div className="mt-8 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h2 className="text-2xl font-semibold">Quick summary</h2>
            <p className="mt-3 leading-7 text-slate-300">
              Use this guide as a starting point, then use the calculator to get
              a more relevant estimate for your home.
            </p>

            <a
              href="/solar-savings-calculator"
              className="mt-5 inline-flex rounded-xl bg-emerald-400 px-6 py-4 font-semibold text-slate-950 hover:bg-emerald-300"
            >
              Use the solar savings calculator
            </a>
          </div>

          <h2 className="mt-10 text-2xl font-semibold">Key points</h2>

          <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-300">
            {bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2 className="mt-10 text-2xl font-semibold">Best next step</h2>

          <p className="mt-4 leading-7 text-slate-300">
            Start with an estimate, then compare proper installer quotes. Final
            costs, savings, payback, and suitability depend on roof survey,
            location, shading, usage, tariff, installer pricing, and product
            choice.
          </p>

          <div className="mt-10 rounded-2xl bg-slate-950 p-6">
            <h2 className="text-2xl font-semibold">Compare solar quotes</h2>
            <p className="mt-3 leading-7 text-slate-300">
              Once you understand the estimate, comparing quotes can help you see
              realistic pricing for your property.
            </p>

            <a
              href="/go/solar-quotes"
              className="mt-5 inline-flex rounded-xl bg-emerald-400 px-6 py-4 font-semibold text-slate-950 hover:bg-emerald-300"
            >
              Compare free solar quotes
            </a>
          </div>

          <p className="mt-10 text-sm leading-6 text-slate-400">
            This guide is for general information only. Calculator results and
            examples are estimates, not guarantees or formal quotes.
          </p>
        </article>
      </section>
    </main>
  );
}
