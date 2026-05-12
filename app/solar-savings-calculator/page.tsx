"use client";

import { useState } from "react";
import { FooterLinks } from "@/components/SiteShell";

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

export default function SolarSavingsCalculatorPage() {
  const [monthlyBill, setMonthlyBill] = useState("120");
  const [bedrooms, setBedrooms] = useState("3");
  const [region, setRegion] = useState("midlands");
  const [roofDirection, setRoofDirection] = useState("south");
  const [shading, setShading] = useState("none");
  const [daytimeUse, setDaytimeUse] = useState("medium");
  const [battery, setBattery] = useState("maybe");
  const [ev, setEv] = useState("no");
  const [timeframe, setTimeframe] = useState("3months");
  const [result, setResult] = useState<Result | null>(null);

  function calculateSavings() {
    const bill = Number(monthlyBill) || 0;
    const electricityRate = 0.27;
    const exportRate = 0.08;
    const gridCarbonFactor = 0.18;
    const regionalYield: Record<string, number> = { south: 950, midlands: 900, north: 850, scotland: 800 };
    const annualUsage = Math.round((bill * 12) / electricityRate);
    let systemSize = annualUsage / 900;
    if (bedrooms === "1-2") systemSize = Math.min(Math.max(systemSize, 2), 3.5);
    if (bedrooms === "3") systemSize = Math.min(Math.max(systemSize, 3.5), 4.5);
    if (bedrooms === "4") systemSize = Math.min(Math.max(systemSize, 4.5), 6);
    if (bedrooms === "5+") systemSize = Math.min(Math.max(systemSize, 5.5), 8);
    const directionMultiplier: Record<string, number> = { south: 1, southeast: 0.95, eastwest: 0.85, north: 0.55, unknown: 0.85 };
    const shadingMultiplier: Record<string, number> = { none: 1, light: 0.9, moderate: 0.75, heavy: 0.55 };
    const annualGeneration = Math.round(systemSize * regionalYield[region] * directionMultiplier[roofDirection] * shadingMultiplier[shading]);
    let selfConsumptionRate = daytimeUse === "low" ? 0.3 : daytimeUse === "high" ? 0.6 : 0.45;
    if (battery === "yes") selfConsumptionRate = Math.max(selfConsumptionRate, 0.7);
    if (battery === "maybe") selfConsumptionRate = Math.max(selfConsumptionRate, 0.55);
    if (ev === "yes") selfConsumptionRate += 0.05;
    const selfConsumed = Math.min(annualUsage, Math.round(annualGeneration * selfConsumptionRate));
    const exported = Math.max(0, annualGeneration - selfConsumed);
    const annualSavings = Math.round(selfConsumed * electricityRate + exported * exportRate);
    const installCostLow = Math.round(Math.max(4500, 4500 + (systemSize - 3) * 900));
    const installCostHigh = Math.round(Math.max(6500, 6500 + (systemSize - 3) * 1300));
    const paybackLow = Number((installCostLow / Math.max(annualSavings, 1)).toFixed(1));
    const paybackHigh = Number((installCostHigh / Math.max(annualSavings, 1)).toFixed(1));
    const co2Saved = Math.round(annualGeneration * gridCarbonFactor);
    let recommendation = "Compare free solar quotes to check real installer pricing for your home.";
    if (shading === "heavy") recommendation = "Your roof may need a proper survey because heavy shading can reduce solar output.";
    else if (timeframe === "researching") recommendation = "Start by saving your estimate, reading cost guides, and comparing options before requesting quotes.";
    else if (battery === "yes" || battery === "maybe") recommendation = "A solar battery may improve self-consumption, especially if you use more electricity in the evening.";
    else if (ev === "yes") recommendation = "Solar panels can pair well with EV charging, especially if you can charge during daylight hours.";
    setResult({ annualUsage, systemSize: Number(systemSize.toFixed(1)), annualGeneration, installCostLow, installCostHigh, annualSavings, paybackLow, paybackHigh, co2Saved, recommendation });
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <a href="/" className="text-sm font-medium text-emerald-300 hover:text-emerald-200">← Back to homepage</a>
        <div className="mt-8"><p className="mb-4 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">Free UK solar calculator</p><h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">Solar Savings Calculator UK</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Answer a few simple questions to estimate your solar panel system size, installation cost, yearly savings, payback period, and whether a battery or EV charger could make sense.</p></div>
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl"><h2 className="text-2xl font-semibold">Quick estimate</h2><div className="mt-8 grid gap-6 md:grid-cols-2">
          <Field label="Monthly electricity bill"><input value={monthlyBill} onChange={(e) => setMonthlyBill(e.target.value)} type="number" className="input" placeholder="Example: 120" /></Field>
          <Field label="Number of bedrooms"><select value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} className="input"><option value="1-2">1-2 bedrooms</option><option value="3">3 bedrooms</option><option value="4">4 bedrooms</option><option value="5+">5+ bedrooms</option></select></Field>
          <Field label="UK region"><select value={region} onChange={(e) => setRegion(e.target.value)} className="input"><option value="south">South England</option><option value="midlands">Midlands / Wales</option><option value="north">North England</option><option value="scotland">Scotland / Northern regions</option></select></Field>
          <Field label="Roof direction"><select value={roofDirection} onChange={(e) => setRoofDirection(e.target.value)} className="input"><option value="south">South</option><option value="southeast">South-east / South-west</option><option value="eastwest">East / West</option><option value="north">North</option><option value="unknown">Not sure</option></select></Field>
          <Field label="Shading level"><select value={shading} onChange={(e) => setShading(e.target.value)} className="input"><option value="none">No shading</option><option value="light">Light shading</option><option value="moderate">Moderate shading</option><option value="heavy">Heavy shading</option></select></Field>
          <Field label="Daytime electricity usage"><select value={daytimeUse} onChange={(e) => setDaytimeUse(e.target.value)} className="input"><option value="low">Low</option><option value="medium">Medium</option><option value="high">High</option></select></Field>
          <Field label="Interested in battery storage?"><select value={battery} onChange={(e) => setBattery(e.target.value)} className="input"><option value="maybe">Maybe</option><option value="yes">Yes</option><option value="no">No</option></select></Field>
          <Field label="Own or plan to buy an EV?"><select value={ev} onChange={(e) => setEv(e.target.value)} className="input"><option value="no">No</option><option value="yes">Yes / planning to</option></select></Field>
          <Field label="Installation timeframe"><select value={timeframe} onChange={(e) => setTimeframe(e.target.value)} className="input"><option value="now">Now</option><option value="3months">Within 3 months</option><option value="6months">Within 6 months</option><option value="researching">Just researching</option></select></Field>
        </div><button onClick={calculateSavings} className="mt-8 rounded-xl bg-emerald-400 px-6 py-4 font-semibold text-slate-950 shadow-lg shadow-emerald-400/20 hover:bg-emerald-300">Calculate my solar savings</button></div>
        {result && <Results result={result} />}
        <p className="mt-8 text-sm leading-6 text-slate-400">Results are estimates only. Final costs, savings, export income, roof suitability, and payback period depend on survey results, location, shading, household usage, tariff, installer pricing, and product choice.</p>
      </section>
      <FooterLinks />
      <style jsx>{`.input{margin-top:0.5rem;width:100%;border-radius:0.75rem;border:1px solid rgba(255,255,255,.1);background:#0f172a;padding:.75rem 1rem;color:white;outline:none}.input:focus{border-color:#34d399}`}</style>
    </main>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) { return <div><label className="block text-sm font-medium text-slate-200">{label}</label>{children}</div>; }
function ResultCard({ label, value }: { label: string; value: string }) { return <div className="rounded-2xl border border-white/10 bg-slate-950 p-5"><p className="text-sm text-slate-400">{label}</p><p className="mt-2 text-xl font-semibold text-white">{value}</p></div>; }
function Results({ result }: { result: Result }) { return <div className="mt-10 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6"><h2 className="text-2xl font-bold">Your estimated result</h2><div className="mt-6 grid gap-4 md:grid-cols-2"><ResultCard label="Estimated annual usage" value={`${result.annualUsage.toLocaleString()} kWh`} /><ResultCard label="Estimated system size" value={`${result.systemSize} kW`} /><ResultCard label="Estimated annual generation" value={`${result.annualGeneration.toLocaleString()} kWh`} /><ResultCard label="Estimated installation cost" value={`£${result.installCostLow.toLocaleString()} - £${result.installCostHigh.toLocaleString()}`} /><ResultCard label="Estimated annual benefit" value={`£${result.annualSavings.toLocaleString()}`} /><ResultCard label="Estimated payback period" value={`${result.paybackLow} - ${result.paybackHigh} years`} /><ResultCard label="Estimated CO2 saving" value={`${result.co2Saved.toLocaleString()} kg/year`} /><ResultCard label="Recommended next step" value={result.recommendation} /></div><div className="mt-8 grid gap-4 md:grid-cols-2"><CTA title="Compare solar quotes" text="Check real pricing from UK installers." href="/go/solar-quotes" /><CTA title="Compare solar batteries" text="Useful if you use electricity in the evening." href="/go/solar-battery" /><CTA title="See EV chargers" text="For EV owners or people planning to buy one." href="/go/ev-charger" /><CTA title="Portable power stations" text="Backup and off-grid solar options." href="/go/portable-power" /></div></div>; }
function CTA({ title, text, href }: { title: string; text: string; href: string }) { return <div className="rounded-2xl bg-slate-950 p-6"><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 text-slate-300">{text}</p><a href={href} className="mt-5 inline-flex rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-slate-950 hover:bg-emerald-300">Continue</a></div>; }
