import type { Metadata } from "next";
import Script from "next/script";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Free UK Solar Guide 2026 | SolarCal",
  description:
    "Download the free UK Solar Savings Starter Guide 2026 and learn how to compare solar quotes, understand savings and avoid common buying mistakes.",
};

export default function FreeSolarGuidePage() {
  return (
    <SiteShell>
      <Script src="https://payhip.com/payhip.js" strategy="afterInteractive" />

      <main>
        <section className="mx-auto max-w-6xl px-6 py-20 text-center">
          <p className="mx-auto inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-5 py-2 text-sm font-medium text-emerald-300">
            Free Solar Guide
          </p>

          <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            UK Solar Savings Starter Guide 2026
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Download the free starter guide to understand solar panel savings,
            quote comparison, payback periods, and common mistakes to avoid
            before buying a solar system in the UK.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/guides/uk-solar-savings-starter-guide-2026.pdf"
              download
              className="rounded-xl bg-emerald-400 px-8 py-4 font-semibold text-slate-950 shadow-lg shadow-emerald-400/20 hover:bg-emerald-300"
            >
              Download Free PDF
            </a>

            <a
              href="/solar-savings-calculator"
              className="rounded-xl border border-white/15 px-8 py-4 font-semibold text-white hover:bg-white/10"
            >
              Use the solar calculator
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-10">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="max-w-3xl">
              <p className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
                What you get
              </p>

              <h2 className="mt-5 text-3xl font-bold">
                What’s inside the free guide?
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                The free guide gives you a simple starting point before
                speaking to installers or comparing solar quotes.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              <GuideCard
                title="How savings work"
                description="Understand the basics of bill savings, export income, and yearly benefit."
              />

              <GuideCard
                title="Payback period"
                description="Learn what affects how long it may take for solar panels to pay back."
              />

              <GuideCard
                title="Quote questions"
                description="See useful questions to ask before accepting a solar quote."
              />

              <GuideCard
                title="Common mistakes"
                description="Avoid simple buying mistakes that can lead to poor value or confusion."
              />

              <GuideCard
                title="Using SolarCal"
                description="Learn how to use the calculator before speaking to solar installers."
              />

              <GuideCard
                title="Next steps"
                description="Decide whether to compare quotes, consider a battery, or keep researching."
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-10">
          <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-8">
            <p className="text-sm font-medium text-emerald-300">
              Premium upgrade
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Want the full Buyer’s Pack?
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Get the premium version with extra buyer guidance, quote
              comparison help, supplier checklist, and practical steps before
              choosing a solar installer.
            </p>

            <div className="mt-8">
              <a
                href="https://payhip.com/b/BMvmN"
                className="payhip-buy-button inline-flex rounded-xl bg-emerald-400 px-8 py-4 font-semibold text-slate-950 shadow-lg shadow-emerald-400/20 hover:bg-emerald-300"
                data-theme="green"
                data-product="BMvmN"
              >
                Buy the Full Buyer’s Pack
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-10">
          <div className="rounded-3xl border border-white/10 bg-slate-900 p-8">
            <h2 className="text-3xl font-bold">Before you buy solar</h2>

            <p className="mt-4 max-w-4xl leading-7 text-slate-300">
              Solar savings depend on your property, electricity usage, roof
              direction, shading, battery choice, export tariff, installer
              pricing, and the final products installed. The guide is for
              general information only and should be used as a starting point
              before comparing quotes.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/solar-savings-calculator"
                className="rounded-xl bg-emerald-400 px-6 py-4 font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Use the free calculator
              </a>

              <a
                href="/calculator-methodology"
                className="rounded-xl border border-white/15 px-6 py-4 font-semibold text-white hover:bg-white/10"
              >
                View calculator methodology
              </a>
            </div>
          </div>
        </section>
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
    <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
    </div>
  );
}