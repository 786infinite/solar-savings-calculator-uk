import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Free UK Solar Savings Guide 2026 | SolarCal",
  description:
    "Download the free SolarCal UK Solar Savings Starter Guide 2026 covering solar panels, battery storage, portable power stations, common mistakes, and next steps.",
};

export default function FreeSolarGuidePage() {
  return (
    <SiteShell>
      <main className="min-h-screen bg-slate-950 text-white">
        <article className="mx-auto max-w-5xl px-6 py-16">
          <a href="/" className="text-sm font-medium text-emerald-300 hover:text-emerald-200">
            ← Back to homepage
          </a>

          <header className="mt-8">
            <p className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
              Free PDF guide
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
              UK Solar Savings Starter Guide 2026
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Download our free plain-English starter guide to solar panels,
              battery storage, portable power stations, and cutting UK
              electricity bills.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/guides/uk-solar-savings-starter-guide-2026.pdf"
                download
                className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Download free PDF guide
              </a>

              <a
                href="/solar-savings-calculator"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Use the solar calculator
              </a>
            </div>
          </header>

          <section className="mt-12 grid gap-6 md:grid-cols-3">
            <GuideCard
              title="Solar panels"
              description="Understand how solar savings work, what affects payback, and when solar may or may not suit your home."
            />

            <GuideCard
              title="Battery storage"
              description="Learn when a battery can help, when it may not be worth it, and what to check before buying."
            />

            <GuideCard
              title="Portable power"
              description="Compare portable power stations, solar generators, backup power use cases, and key specs to check."
            />
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">What is inside the guide?</h2>

            <ul className="mt-6 grid gap-4 text-slate-300 md:grid-cols-2">
              <li>• How UK solar savings actually work</li>
              <li>• What affects your solar payback</li>
              <li>• Battery storage explained simply</li>
              <li>• Portable power stations explained</li>
              <li>• Solar panels vs batteries vs portable power</li>
              <li>• Example UK household scenarios</li>
              <li>• Common buyer mistakes to avoid</li>
              <li>• Simple buying checklists</li>
              <li>• Power station size guide</li>
              <li>• Next steps before comparing quotes or products</li>
            </ul>
          </section>

          <section className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h2 className="text-3xl font-bold">Want the full paid version?</h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              A more detailed paid version is being built. It will include more
              examples, deeper product comparisons, more detailed checklists,
              and extra planning tools.
            </p>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              For now, start with the free guide and use the SolarCal calculator
              to estimate your possible solar savings.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="/guides/uk-solar-savings-starter-guide-2026.pdf"
                download
                className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Download free guide
              </a>

              <a
                href="/solar-savings-calculator"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Estimate savings
              </a>
            </div>
          </section>

          <section className="mt-12 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <h2 className="text-2xl font-bold">Important note</h2>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              This guide is for general information only. It is not financial,
              electrical, installation, or product advice. Always check your own
              usage, property, roof condition, warranty, and installation
              requirements before making a decision.
            </p>
          </section>
        </article>
      </main>
    </SiteShell>
  );
}

function GuideCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-3 leading-7 text-slate-300">{description}</p>
    </div>
  );
}
