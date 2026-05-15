import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Free UK Solar Savings Guide 2026 | SolarCal",
  description:
    "Download the free UK Solar Savings Starter Guide 2026 and learn how to compare solar quotes, understand savings and avoid common buying mistakes.",
};

export default function FreeSolarGuidePage() {
  return (
    <>
      <Script src="https://payhip.com/payhip.js" strategy="afterInteractive" />

      <main className="min-h-screen bg-white">
        <section className="mx-auto max-w-4xl px-6 py-16">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-green-700">
              Free Solar Guide
            </p>

            <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
              UK Solar Savings Starter Guide 2026
            </h1>

            <p className="mb-6 text-lg leading-8 text-gray-700">
              Download the free starter guide to understand the basics of solar
              panel savings, quote comparison, payback periods and the common
              mistakes to avoid before buying a solar system in the UK.
            </p>

            <div className="mb-8 rounded-xl bg-green-50 p-5">
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                What’s inside the free guide?
              </h2>

              <ul className="list-inside list-disc space-y-2 text-gray-700">
                <li>How solar savings work in plain English</li>
                <li>What affects your payback period</li>
                <li>Questions to ask before accepting a quote</li>
                <li>Common mistakes UK homeowners should avoid</li>
                <li>How to use SolarCal before speaking to installers</li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="/guides/uk-solar-savings-starter-guide-2026.pdf"
                download
                className="inline-block rounded-lg bg-gray-900 px-6 py-3 text-center font-semibold text-white hover:bg-gray-800"
              >
                Download Free PDF
              </a>

              <Link
                href="/solar-savings-calculator"
                className="inline-block rounded-lg border border-gray-300 px-6 py-3 text-center font-semibold text-gray-900 hover:bg-gray-50"
              >
                Use the Solar Calculator
              </Link>
            </div>

            <div className="mt-8 rounded-xl border border-green-200 bg-green-50 p-5">
              <h2 className="mb-2 text-xl font-semibold text-gray-900">
                Want the full Buyer’s Pack?
              </h2>

              <p className="mb-4 text-gray-700">
                Get the premium version with extra buyer guidance, quote
                comparison help, supplier checklist and practical steps before
                choosing a solar installer.
              </p>

              <a
                href="https://payhip.com/b/BMvmN"
                className="payhip-buy-button inline-block rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
                data-theme="green"
                data-product="BMvmN"
              >
                Buy the Full Buyer’s Pack
              </a>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              The free guide is for general information only. Always compare
              quotes and check the details of any solar installation before
              buying.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}