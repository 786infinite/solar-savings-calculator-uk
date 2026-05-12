"use client";

import { useState } from "react";
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
      "Compare real solar quotes from UK installers to confirm pricing and suitability.";

    if (shading === "heavy") {
      recommendation =
        "Your roof may need a proper survey because heavy shading can reduce solar output.";
    } else if (battery === "yes" || battery === "maybe") {
      recommendation =
        "A solar battery may improve self-consumption, especially if you use more electricity in the evening.";
    } else if (ev === "yes") {
      recommendation =
        "Solar panels can pair well with EV charging, especially if you can charge during daylight hours.";
    } else if (timeframe === "researching") {
      recommendation =
        "Start by comparing estimated savings and learning about roof suitability before requesting quotes.";
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

  function trackAffiliateClick(category: string, destination: string) {
    trackEvent("affiliate_product_clicked", {
      category,
      destination,
      page: "solar-savings-calculator",
    });
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <a href="/" className="text-sm font-medium text-emerald-300 hover:text-emerald-200">
          ← Back to homepage
        </a>

        <div className="mt-8">
          <p className="mb-4 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
            Free UK solar calculator
          </p>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Solar Savings Calculator UK
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Answer a few simple questions to estimate your solar panel system
            size, installation cost, yearly savings, payback period, and whether
            a battery or EV charger could make sense.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
          <h2 className="text-2xl font-semibold">Quick estimate</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-slate-200">
                Monthly electricity bill
              </label>
              <input
                value={monthlyBill}
                onChange={(event) => setMonthlyBill(event.target.value)}
                type="number"
                placeholder="Example: 120"
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-emerald-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-200">
                Number of bedrooms
              </label>
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
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-200">
                UK region
              </label>
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
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-200">
                Roof direction
              </label>
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
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-200">
                Shading level
              </label>
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
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-200">
                Daytime electricity usage
              </label>
              <select
                value={daytimeUsage}
                onChange={(event) => setDaytimeUsage(event.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-emerald-400"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-200">
                Interested in battery storage?
              </label>
              <select
                value={battery}
                onChange={(event) => setBattery(event.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-emerald-400"
              >
                <option value="maybe">Maybe</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-200">
                Own or plan to buy an EV?
              </label>
              <select
                value={ev}
                onChange={(event) => setEv(event.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-emerald-400"
              >
                <option value="no">No</option>
                <option value="yes">Yes / planning to</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-200">
                Installation timeframe
              </label>
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
            </div>
          </div>

          <button
            onClick={calculateSavings}
            className="mt-8 rounded-xl bg-emerald-400 px-6 py-4 font-semibold text-slate-950 shadow-lg shadow-emerald-400/20 hover:bg-emerald-300"
          >
            Calculate my solar savings
          </button>
        </div>

        {result && (
          <div className="mt-10 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h2 className="text-2xl font-bold">Your estimated result</h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <ResultCard
                label="Estimated annual usage"
                value={`${result.annualUsage.toLocaleString()} kWh`}
              />
              <ResultCard
                label="Estimated system size"
                value={`${result.systemSize} kW`}
              />
              <ResultCard
                label="Estimated annual generation"
                value={`${result.annualGeneration.toLocaleString()} kWh`}
              />
              <ResultCard
                label="Estimated installation cost"
                value={`£${result.installCostLow.toLocaleString()} - £${result.installCostHigh.toLocaleString()}`}
              />
              <ResultCard
                label="Estimated annual benefit"
                value={`£${result.annualSavings.toLocaleString()}`}
              />
              <ResultCard
                label="Estimated payback period"
                value={`${result.paybackLow} - ${result.paybackHigh} years`}
              />
              <ResultCard
                label="Estimated CO2 saving"
                value={`${result.co2Saved.toLocaleString()} kg/year`}
              />
              <ResultCard
                label="Recommended next step"
                value={result.recommendation}
              />
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <AffiliateCard
                title="Compare solar quotes"
                description="Check real pricing from UK installers."
                href="/go/solar-quotes"
                onClick={trackQuoteClick}
              />

              <AffiliateCard
                title="Compare solar batteries"
                description="Useful if you use electricity in the evening."
                href="/go/solar-battery"
                onClick={() =>
                  trackAffiliateClick("solar-battery", "solar-battery")
                }
              />

              <AffiliateCard
                title="See EV chargers"
                description="For EV owners or people planning to buy one."
                href="/go/ev-charger"
                onClick={() => trackAffiliateClick("ev-charger", "ev-charger")}
              />

              <AffiliateCard
                title="Portable power stations"
                description="Backup and off-grid solar options."
                href="/go/portable-power"
                onClick={() =>
                  trackAffiliateClick("portable-power", "portable-power")
                }
              />
            </div>
          </div>
        )}

        <p className="mt-8 text-sm leading-6 text-slate-400">
          Results are estimates only. Final costs, savings, export income, roof
          suitability, and payback period depend on survey results, location,
          shading, household usage, tariff, installer pricing, and product
          choice.
        </p>
      </section>
    </main>
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
    <div className="rounded-2xl bg-slate-950 p-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-slate-300">{description}</p>

      <a
        href={href}
        onClick={onClick}
        className="mt-5 inline-flex rounded-xl bg-emerald-400 px-6 py-4 font-semibold text-slate-950 hover:bg-emerald-300"
      >
        Continue
      </a>
    </div>
  );
}