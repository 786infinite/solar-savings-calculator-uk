"use client";

import Script from "next/script";
import { useState, type ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

type Result = {
  annualUsage: number;
  systemSize: number;
  annualGeneration: number;
  installCostLow: number;
  installCostHigh: number;
  annualSavings: number;
  paybackLow: number;
  paybackHigh: number;
  co2Saved: number;
  recommendation: string;
  resultSummary: string;
};

const regionYield: Record<string, number> = {
  south: 950,
  midlands: 900,
  north: 850,
  scotland: 800,
};

const directionMultiplier: Record<string, number> = {
  south: 1,
  southeast: 0.95,
  eastwest: 0.85,
  north: 0.55,
  unknown: 0.85,
};

const shadingMultiplier: Record<string, number> = {
  none: 1,
  light: 0.9,
  moderate: 0.75,
  heavy: 0.55,
};

export default function SolarSavingsCalculatorPage() {
  const [monthlyBill, setMonthlyBill] = useState("120");
  const [bedrooms, setBedrooms] = useState("3");
  const [region, setRegion] = useState("midlands");
  const [roofDirection, setRoofDirection] = useState("south");
  const [shading, setShading] = useState("none");
  const [daytimeUsage, setDaytimeUsage] = useState("medium");
  const [battery, setBattery] = useState("maybe");
  const [ev, setEv] = useState("no");
  const [timeframe, setTimeframe] = useState("3months");
  const [result, setResult] = useState<Result | null>(null);

  function calculateSavings() {
    const bill = Number(monthlyBill) || 0;

    const electricityRate = 0.27;
    const exportRate = 0.08;
    const gridCarbonFactor = 0.18;
    const selectedYield = regionYield[region] ?? 900;

    const annualUsage = Math.round((bill * 12) / electricityRate);

    let systemSize = annualUsage / 900;

    if (bedrooms === "1-2") {
      systemSize = Math.min(Math.max(systemSize, 2), 3.5);
    }

    if (bedrooms === "3") {
      systemSize = Math.min(Math.max(systemSize, 3.5), 4.5);
    }

    if (bedrooms === "4") {
      systemSize = Math.min(Math.max(systemSize, 4.5), 6);
    }

    if (bedrooms === "5+") {
      systemSize = Math.min(Math.max(systemSize, 5.5), 8);
    }

    const annualGeneration = Math.round(
      systemSize *
        selectedYield *
        directionMultiplier[roofDirection] *
        shadingMultiplier[shading]
    );

    let selfConsumptionRate = 0.45;

    if (daytimeUsage === "low") {
      selfConsumptionRate = 0.3;
    }

    if (daytimeUsage === "medium") {
      selfConsumptionRate = 0.45;
    }

    if (daytimeUsage === "high") {
      selfConsumptionRate = 0.6;
    }

    if (battery === "yes") {
      selfConsumptionRate += 0.2;
    }

    if (battery === "maybe") {
      selfConsumptionRate += 0.1;
    }

    if (ev === "yes") {
      selfConsumptionRate += 0.05;
    }

    selfConsumptionRate = Math.min(selfConsumptionRate, 0.85);

    const selfConsumed = Math.min(
      annualUsage,
      Math.round(annualGeneration * selfConsumptionRate)
    );

    const exported = Math.max(0, annualGeneration - selfConsumed);

    const billSavings = selfConsumed * electricityRate;
    const exportIncome = exported * exportRate;
    const annualSavings = Math.max(1, Math.round(billSavings + exportIncome));

    const installCostLow = Math.round(
      Math.max(4500, 4500 + (systemSize - 3) * 900)
    );

    const installCostHigh = Math.round(
      Math.max(6500, 6500 + (systemSize - 3) * 1300)
    );

    const paybackLow = Number((installCostLow / annualSavings).toFixed(1));
    const paybackHigh = Number((installCostHigh / annualSavings).toFixed(1));

    const co2Saved = Math.round(annualGeneration * gridCarbonFactor);

    let recommendation =
      "Compare real solar quotes from UK installers to confirm pricing, roof suitability, and product options.";

    let resultSummary =
      "Your estimate suggests solar could be worth exploring further, especially if your roof is suitable and your final quote is competitive.";

    if (shading === "heavy") {
      recommendation =
        "Your roof may need a proper survey because heavy shading can reduce solar output.";
      resultSummary =
        "Your estimate may be more sensitive to roof conditions because heavy shading can reduce generation. A proper installer survey is important.";
    } else if (battery === "yes" || battery === "maybe") {
      recommendation =
        "A solar battery may improve self-consumption, especially if you use more electricity in the evening.";
      resultSummary =
        "Because you are interested in battery storage, your next step should compare solar-only and solar-plus-battery options.";
    } else if (ev === "yes") {
      recommendation =
        "Solar panels can pair well with EV charging, especially if you can charge during daylight hours.";
      resultSummary =
        "Because you own or plan to buy an EV, solar may be more useful if you can shift some charging to daylight hours.";
    } else if (timeframe === "researching") {
      recommendation =
        "Start by comparing estimated savings and learning about roof suitability before requesting quotes.";
      resultSummary =
        "You are still researching, so use this estimate as a starting point before comparing installer quotes.";
    }

    const calculatedResult: Result = {
      annualUsage,
      systemSize: Number(systemSize.toFixed(1)),
      annualGeneration,
      installCostLow,
      installCostHigh,
      annualSavings,
      paybackLow,
      paybackHigh,
      co2Saved,
      recommendation,
      resultSummary,
    };

    trackEvent("calculator_completed", {
      monthly_bill: bill,
      bedrooms,
      region,
      roof_direction: roofDirection,
      shading,
      daytime_usage: daytimeUsage,
      battery,
      ev,
      timeframe,
      estimated_system_size_kw: calculatedResult.systemSize,
      estimated_annual_savings: calculatedResult.annualSavings,
      estimated_payback_low: calculatedResult.paybackLow,
      estimated_payback_high: calculatedResult.paybackHigh,
    });

    setResult(calculatedResult);
  }

  function trackQuoteClick() {
    trackEvent("quote_cta_clicked", {
      partner: "placeholder",
      destination: "solar-quotes",
      page: "solar-savings-calculator",
    });
  }

  function trackGuideClick(destination: string) {
    trackEvent("guide_cta_clicked", {
      destination,
      page: "solar-savings-calculator",
    });
  }

  function trackAffiliateClick(category: string, destination: string) {
    trackEvent("affiliate_product_clicked", {
      category,
      destination,
      page: "solar-savings-calculator",
    });
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Script src="https://payhip.com/payhip.js" strategy="afterInteractive" />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <a
          href="/"
          className="text-sm font-medium text-emerald-300 hover:text-emerald-200"
        >
          ← Back to homepage
        </a>

        <div className="mt-8">
          <p className="mb-4 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
            Free UK solar calculator
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
            Solar Savings Calculator UK
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Answer a few simple questions to estimate your solar panel system
            size, installation cost, yearly savings, payback period, and whether
            a battery or EV charger could make sense.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-2xl font-semibold">Quick estimate</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                These inputs create a rough estimate only. A real quote needs a
                roof survey and installer assessment.
              </p>
            </div>

            <p className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">
              Takes around 1 minute
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Field label="Monthly electricity bill">
              <input
                value={monthlyBill}
                onChange={(event) => setMonthlyBill(event.target.value)}
                type="number"
                placeholder="Example: 120"
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-emerald-400"
              />
            </Field>

            <Field label="Number of bedrooms">
              <select
                value={bedrooms}
                onChange={(event) => setBedrooms(event.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-emerald-400"
              >
                <option value="1-2">1-2 bedrooms</option>
                <option value="3">3 bedrooms</option>
                <option value="4">4 bedrooms</option>
                <option value="5+">5+ bedrooms</option>
              </select>
            </Field>

            <Field label="UK region">
              <select
                value={region}
                onChange={(event) => setRegion(event.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-emerald-400"
              >
                <option value="south">South England</option>
                <option value="midlands">Midlands / Wales</option>
                <option value="north">North England</option>
                <option value="scotland">Scotland / Northern regions</option>
              </select>
            </Field>

            <Field label="Roof direction">
              <select
                value={roofDirection}
                onChange={(event) => setRoofDirection(event.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-emerald-400"
              >
                <option value="south">South</option>
                <option value="southeast">South-east / South-west</option>
                <option value="eastwest">East / West</option>
                <option value="north">North</option>
                <option value="unknown">Not sure</option>
              </select>
            </Field>

            <Field label="Shading level">
              <select
                value={shading}
                onChange={(event) => setShading(event.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-emerald-400"
              >
                <option value="none">No shading</option>
                <option value="light">Light shading</option>
                <option value="moderate">Moderate shading</option>
                <option value="heavy">Heavy shading</option>
              </select>
            </Field>

            <Field label="Daytime electricity usage">
              <select
                value={daytimeUsage}
                onChange={(event) => setDaytimeUsage(event.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-emerald-400"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </Field>

            <Field label="Interested in battery storage?">
              <select
                value={battery}
                onChange={(event) => setBattery(event.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-emerald-400"
              >
                <option value="maybe">Maybe</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </Field>

            <Field label="Own or plan to buy an EV?">
              <select
                value={ev}
                onChange={(event) => setEv(event.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-emerald-400"
              >
                <option value="no">No</option>
                <option value="yes">Yes / planning to</option>
              </select>
            </Field>

            <Field label="Installation timeframe">
              <select
                value={timeframe}
                onChange={(event) => setTimeframe(event.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-emerald-400"
              >
                <option value="now">Now</option>
                <option value="3months">Within 3 months</option>
                <option value="6months">Within 6 months</option>
                <option value="researching">Just researching</option>
              </select>
            </Field>
          </div>

          <button
            onClick={calculateSavings}
            className="mt-8 rounded-xl bg-emerald-400 px-6 py-4 font-semibold text-slate-950 shadow-lg shadow-emerald-400/20 hover:bg-emerald-300"
          >
            Calculate my solar savings
          </button>
        </div>

        {result && (
          <div className="mt-10 overflow-hidden rounded-3xl border border-emerald-400/20 bg-slate-900 shadow-2xl">
            <div className="border-b border-white/10 bg-emerald-400/10 p-6">
              <p className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
                Your estimated result
              </p>

              <div className="mt-5 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                <div>
                  <h2 className="text-3xl font-bold">
                    Estimated annual benefit: £
                    {result.annualSavings.toLocaleString()}
                  </h2>

                  <p className="mt-4 max-w-3xl leading-7 text-slate-300">
                    {result.resultSummary}
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-400/20 bg-slate-950 p-5">
                  <p className="text-sm text-slate-400">
                    Estimated payback range
                  </p>
                  <p className="mt-2 text-3xl font-bold text-emerald-300">
                    {result.paybackLow} - {result.paybackHigh} years
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Based on simplified assumptions and your answers.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <ResultCard
                  label="Estimated system size"
                  value={`${result.systemSize} kW`}
                />
                <ResultCard
                  label="Annual generation"
                  value={`${result.annualGeneration.toLocaleString()} kWh`}
                />
                <ResultCard
                  label="Installation cost"
                  value={`£${result.installCostLow.toLocaleString()} - £${result.installCostHigh.toLocaleString()}`}
                />
                <ResultCard
                  label="CO2 saving"
                  value={`${result.co2Saved.toLocaleString()} kg/year`}
                />
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <ResultCard
                  label="Estimated annual electricity usage"
                  value={`${result.annualUsage.toLocaleString()} kWh`}
                />
                <ResultCard
                  label="Recommended next step"
                  value={result.recommendation}
                />
              </div>

              <div className="mt-8 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
                <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                  <div>
                    <h2 className="text-2xl font-bold">
                      Ready to compare real solar quotes?
                    </h2>
                    <p className="mt-3 leading-7 text-slate-300">
                      Your estimate is a starting point. A quote partner or
                      installer can check your roof, product options, battery
                      suitability, and final pricing.
                    </p>

                    <ul className="mt-4 space-y-2 text-sm text-slate-300">
                      <li>• No manual sales calls from this website</li>
                      <li>• Partner handles quote, survey, and installation</li>
                      <li>• Final price depends on your property and products</li>
                    </ul>
                  </div>

                  <a
                    href="/go/solar-quotes"
                    onClick={trackQuoteClick}
                    className="inline-flex justify-center rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
                  >
                    Compare free solar quotes
                  </a>
                </div>
              </div>

              <div className="mt-8 rounded-3xl border border-emerald-400/20 bg-slate-950 p-6">
                <p className="text-sm font-medium text-emerald-300">
                  Free guide + premium buyer pack
                </p>

                <h2 className="mt-3 text-2xl font-bold">
                  Before you choose an installer, download the guide
                </h2>

                <p className="mt-4 max-w-4xl leading-7 text-slate-300">
                  Use the free SolarCal guide to understand your estimate,
                  compare solar quotes, and avoid common buying mistakes. You
                  can also upgrade to the full Buyer’s Pack for extra checklists
                  and quote comparison help.
                </p>

                <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="/free-solar-guide"
                    onClick={() => trackGuideClick("free-solar-guide")}
                    className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
                  >
                    Download the free guide
                  </a>

                  <a
                    href="https://payhip.com/b/BMvmN"
                    onClick={() => trackGuideClick("buyers-pack")}
                    className="payhip-buy-button rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
                    data-theme="green"
                    data-product="BMvmN"
                  >
                    View the Buyer’s Pack
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold">Other options to consider</h2>
                <p className="mt-3 max-w-3xl leading-7 text-slate-300">
                  These are secondary options based on your answers. The main
                  next step for installation pricing is still comparing solar
                  quotes.
                </p>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <AffiliateCard
                    title="Compare solar batteries"
                    description="Useful if you use more electricity in the evening or want to increase self-consumption."
                    href="/go/solar-battery"
                    onClick={() =>
                      trackAffiliateClick("solar-battery", "solar-battery")
                    }
                  />

                  <AffiliateCard
                    title="See EV chargers"
                    description="Useful if you own or plan to buy an EV and want smarter home charging."
                    href="/go/ev-charger"
                    onClick={() =>
                      trackAffiliateClick("ev-charger", "ev-charger")
                    }
                  />

                  <AffiliateCard
                    title="Portable power stations"
                    description="For backup power, camping, off-grid use, or smaller solar setups."
                    href="/go/portable-power"
                    onClick={() =>
                      trackAffiliateClick("portable-power", "portable-power")
                    }
                  />
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950 p-5">
                <h2 className="text-xl font-semibold">
                  Important estimate note
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Results are estimates only. They are not formal quotes,
                  guarantees, financial advice, or survey results. Final costs,
                  savings, export income, payback period, roof suitability, and
                  system performance depend on survey results, location,
                  shading, household usage, tariff, installer pricing, future
                  energy prices, and product choice.
                </p>
              </div>
            </div>
          </div>
        )}

        <section className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
            How the calculator works
          </p>

          <h2 className="mt-5 text-3xl font-bold">
            How SolarCal estimates your solar savings
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-slate-300">
            SolarCal uses your monthly electricity bill, home size, region, roof
            direction, shading, daytime usage, battery interest, and EV plans to
            create a simple UK solar estimate. The result is not a formal quote,
            but it helps you understand whether solar panels may be worth
            exploring before speaking to installers.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <SeoCard
              title="1. Electricity usage"
              description="Your monthly bill is converted into a rough annual electricity usage estimate. Higher usage normally means a larger solar system may be useful."
            />

            <SeoCard
              title="2. System size"
              description="The calculator estimates a likely solar panel system size based on your usage and home size, then keeps it within a sensible range."
            />

            <SeoCard
              title="3. Solar generation"
              description="Estimated annual generation is adjusted for UK region, roof direction, and shading because these can affect solar output."
            />

            <SeoCard
              title="4. Self-consumption"
              description="Solar savings are higher when you use more of your own solar electricity at home instead of exporting it."
            />

            <SeoCard
              title="5. Battery and EV impact"
              description="Battery storage and daytime EV charging can increase the amount of solar electricity you use yourself."
            />

            <SeoCard
              title="6. Payback estimate"
              description="The payback range compares estimated installation costs against estimated annual benefit from bill savings and export income."
            />
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-900 p-8">
            <h2 className="text-3xl font-bold">
              What affects solar panel savings?
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Solar savings vary from home to home. A south-facing roof with low
              shading and good daytime electricity usage will usually perform
              better than a shaded roof where most electricity is used at night.
              Your tariff, export rate, battery choice, EV charging habits, and
              final installer quote also make a big difference.
            </p>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
              <li>• Roof direction and angle</li>
              <li>• Shading from trees, chimneys, buildings, or dormers</li>
              <li>• How much electricity you use during daylight hours</li>
              <li>• Whether you add battery storage</li>
              <li>• Whether you charge an EV at home</li>
              <li>• Export tariff and electricity import tariff</li>
              <li>• Final installer pricing and product choice</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900 p-8">
            <h2 className="text-3xl font-bold">
              Why your payback period may vary
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              A solar payback period is only an estimate. The same solar system
              can pay back faster for one home than another because electricity
              usage, export income, battery use, roof suitability, and upfront
              installation cost can all be different.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              The calculator gives a useful starting range, but you should still
              compare installer quotes and check the exact products, warranty,
              roof survey, scaffolding needs, battery compatibility, and
              aftercare before buying.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-8">
          <h2 className="text-3xl font-bold">
            Should you add a solar battery or EV charger?
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-slate-300">
            A solar battery may help if you use a lot of electricity in the
            evening, want to store more of your solar generation, or have a
            tariff that makes stored electricity useful. An EV charger may work
            well with solar if you can charge your car during daylight hours or
            use smart charging features.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <a
              href="/solar-battery-worth-it"
              className="rounded-2xl border border-white/10 bg-slate-950 p-5 font-semibold hover:bg-emerald-400 hover:text-slate-950"
            >
              Is a solar battery worth it?
            </a>

            <a
              href="/solar-panels-with-battery-cost"
              className="rounded-2xl border border-white/10 bg-slate-950 p-5 font-semibold hover:bg-emerald-400 hover:text-slate-950"
            >
              Solar panels with battery cost
            </a>

            <a
              href="/solar-panels-and-ev-charging"
              className="rounded-2xl border border-white/10 bg-slate-950 p-5 font-semibold hover:bg-emerald-400 hover:text-slate-950"
            >
              Solar panels and EV charging
            </a>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-3xl font-bold">Solar calculator FAQs</h2>

          <div className="mt-8 space-y-5">
            <FaqItem question="Is this solar calculator a formal quote?">
              No. SolarCal gives an estimate only. A formal quote needs a roof
              survey, product selection, installer pricing, scaffolding details,
              electrical checks, and property-specific assessment.
            </FaqItem>

            <FaqItem question="How accurate is the estimated solar saving?">
              It is a useful starting point, not a guarantee. Actual savings
              depend on electricity usage, roof conditions, shading, tariffs,
              export rates, system performance, battery use, and final
              installation cost.
            </FaqItem>

            <FaqItem question="Does a solar battery always improve payback?">
              Not always. A battery can increase self-consumption, but it also
              adds upfront cost. It may be more useful for homes with higher
              evening usage or tariffs that reward storing and shifting energy.
            </FaqItem>

            <FaqItem question="Can solar panels help with EV charging?">
              Yes, especially if the car can be charged during daylight hours.
              If most charging happens at night, a battery or smart tariff may
              matter more.
            </FaqItem>

            <FaqItem question="What should I do after getting my estimate?">
              Use the estimate as a starting point, download the free SolarCal
              guide, compare more than one quote, check warranties, ask about
              roof suitability, and use the Buyer’s Pack if you want a more
              detailed checklist before choosing an installer.
            </FaqItem>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/free-solar-guide"
              className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
            >
              Download the free solar guide
            </a>

            <a
              href="/calculator-methodology"
              className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
            >
              View calculator methodology
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block text-sm font-medium text-slate-200">
      {label}
      {children}
    </label>
  );
}

function ResultCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950 p-5">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-2 text-xl font-semibold text-white">{value}</p>
    </div>
  );
}

function AffiliateCard({
  title,
  description,
  href,
  onClick,
}: {
  title: string;
  description: string;
  href: string;
  onClick: () => void;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950 p-5">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>

      <a
        href={href}
        onClick={onClick}
        className="mt-5 inline-flex rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-300"
      >
        Continue
      </a>
    </div>
  );
}

function SeoCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950 p-5">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
    </div>
  );
}

function FaqItem({
  question,
  children,
}: {
  question: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950 p-5">
      <h3 className="text-lg font-semibold">{question}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{children}</p>
    </div>
  );
}