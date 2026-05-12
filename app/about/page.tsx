import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "About SolarCal | UK Solar Savings Calculator",
  description:
    "Learn about SolarCal, a UK-focused solar savings calculator and home energy guide website helping homeowners estimate solar costs, savings, payback, batteries, and EV charging.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <main className="min-h-screen bg-slate-950 text-white">
        <article className="mx-auto max-w-5xl px-6 py-16">
          <a href="/" className="text-sm font-medium text-emerald-300 hover:text-emerald-200">
            ← Back to homepage
          </a>

          <header className="mt-8">
            <p className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
              About SolarCal
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
              About SolarCal
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              SolarCal is a UK-focused solar savings calculator and home energy
              guide website. It helps homeowners estimate solar panel costs,
              annual savings, payback period, battery storage relevance, EV
              charging potential, and possible next steps.
            </p>
          </header>

          <section className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h2 className="text-2xl font-bold">What SolarCal does</h2>

            <p className="mt-4 leading-7 text-slate-300">
              SolarCal provides a free solar savings calculator and simple UK
              guides covering solar panel costs, payback, battery storage, EV
              charging, solar products, and related home energy topics.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              The aim is to help users understand whether solar may be worth
              exploring before they compare real quotes or products.
            </p>
          </section>

          <section className="mt-12 grid gap-6 md:grid-cols-3">
            <InfoCard
              title="Estimate first"
              description="Use the calculator to estimate system size, costs, annual benefit, and payback."
            />

            <InfoCard
              title="Learn clearly"
              description="Read plain-English guides about solar panels, batteries, EV charging, and home energy products."
            />

            <InfoCard
              title="Compare next steps"
              description="Use partner links where relevant to compare quotes, batteries, EV chargers, or portable power options."
            />
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">What SolarCal does not do</h2>

            <ul className="mt-5 list-disc space-y-3 pl-6 text-slate-300">
              <li>SolarCal does not install solar panels.</li>
              <li>SolarCal does not provide formal installation quotes directly.</li>
              <li>SolarCal does not arrange home surveys itself.</li>
              <li>SolarCal does not provide personalised financial advice.</li>
              <li>SolarCal does not guarantee savings, payback, or product performance.</li>
            </ul>
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">How SolarCal may earn money</h2>

            <p className="mt-4 leading-7 text-slate-300">
              SolarCal may earn commission, referral fees, or lead payments from
              affiliate links, quote partners, product retailers, or other home
              energy partners.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              Affiliate relationships may influence which links appear on the
              website, but users should always compare multiple providers,
              check warranties, read reviews, and make their own decision.
            </p>

            <a
              href="/affiliate-disclosure"
              className="mt-6 inline-flex rounded-xl border border-white/15 px-6 py-4 font-semibold text-white hover:bg-white/10"
            >
              Read affiliate disclosure
            </a>
          </section>

          <section className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h2 className="text-3xl font-bold">Start with the calculator</h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Estimate your possible solar panel savings, installation cost
              range, payback period, battery benefit, and EV charging relevance.
            </p>

            <a
              href="/solar-savings-calculator"
              className="mt-6 inline-flex rounded-xl bg-emerald-400 px-6 py-4 font-semibold text-slate-950 hover:bg-emerald-300"
            >
              Use the solar calculator
            </a>
          </section>
        </article>
      </main>
    </SiteShell>
  );
}

function InfoCard({
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
