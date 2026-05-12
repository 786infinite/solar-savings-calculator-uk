import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import FaqSchema from "@/components/FaqSchema";

export const metadata: Metadata = {
  title: "Best Solar Generators UK | SolarCal",
  description: "Compare solar generators for camping, backup power, off-grid use, portable solar charging, battery capacity, output power, and home energy backup.",
};


const generatorTypes = [
  {
    type: "Small solar generator",
    bestFor: "Phones, laptops, cameras, lights",
    note: "Portable and lower cost, but limited capacity",
  },
  {
    type: "Medium solar generator",
    bestFor: "Camping, vans, garden offices, short backup",
    note: "Better balance of capacity, output, and portability",
  },
  {
    type: "Large solar generator",
    bestFor: "Home backup and higher-power devices",
    note: "More capable, but heavier and more expensive",
  },
  {
    type: "Expandable solar generator",
    bestFor: "People who may add extra batteries later",
    note: "Flexible, but check compatibility and total cost",
  },
];

const buyingFactors = [
  "Battery capacity in Wh",
  "Usable capacity",
  "Maximum AC output",
  "Solar panel input limit",
  "Solar charging speed",
  "Battery chemistry",
  "Port selection",
  "Weight and portability",
  "Expandable battery support",
  "Warranty and product support",
];

const useCases = [
  "Camping and caravan trips",
  "Emergency home backup",
  "Off-grid cabins or sheds",
  "Garden offices",
  "Outdoor events",
  "Charging phones, laptops, cameras, lights, and small appliances",
];

const faqs = [
  {
    question: "What is a solar generator?",
    answer:
      "A solar generator usually means a portable power station that can be recharged using compatible solar panels. It stores electricity in a battery and can power selected devices.",
  },
  {
    question: "Can a solar generator power a house?",
    answer:
      "Most portable solar generators are not designed to power an entire house. They are usually better for selected devices such as phones, laptops, routers, lights, and small appliances.",
  },
  {
    question: "How long does a solar generator take to charge?",
    answer:
      "Charging time depends on the battery size, solar panel wattage, sunlight, weather, panel angle, and the generator’s maximum solar input.",
  },
  {
    question: "Is a solar generator better than roof solar?",
    answer:
      "They are different products. A solar generator is portable backup power, while roof solar is a fixed home energy system designed to reduce grid electricity use over time.",
  },
];

export default function BestSolarGeneratorsUKPage() {
  return (
    <SiteShell>
      <main className="min-h-screen bg-slate-950 text-white">
        <article className="mx-auto max-w-5xl px-6 py-16">
          <FaqSchema faqs={faqs} />
          <a href="/" className="text-sm font-medium text-emerald-300 hover:text-emerald-200">
            ← Back to homepage
          </a>

          <header className="mt-8">
            <p className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
              Solar generator guide
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
              Best Solar Generators UK
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Solar generators can provide portable power for camping, backup,
              garden offices, off-grid use, and emergency charging. The best
              option depends on battery capacity, output power, solar charging
              speed, portability, and what you need to run.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/go/portable-power"
                className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                See solar generator options
              </a>

              <a
                href="/best-portable-power-stations-uk"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                View portable power guide
              </a>
            </div>
          
            <p className="mt-4 text-sm text-slate-400">
              Last updated: May 2026
            </p>
          </header>

          <section className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h2 className="text-2xl font-bold">Quick answer</h2>

            <p className="mt-4 leading-7 text-slate-300">
              The best solar generator is the one that can power your required
              devices, recharge reliably from solar panels, and remain practical
              to move or store. Larger systems offer more capacity, but they
              cost more and are less portable.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              For most people, the key is to match the generator to the job:
              small devices, camping, backup power, or heavier off-grid use.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">Types of solar generators</h2>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-white/10 text-slate-200">
                  <tr>
                    <th className="p-4 font-semibold">Type</th>
                    <th className="p-4 font-semibold">Best for</th>
                    <th className="p-4 font-semibold">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {generatorTypes.map((row) => (
                    <tr key={row.type} className="border-t border-white/10">
                      <td className="p-4 font-medium text-white">
                        {row.type}
                      </td>
                      <td className="p-4 text-slate-300">{row.bestFor}</td>
                      <td className="p-4 text-emerald-300">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">
                What can a solar generator power?
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Solar generators are best for selected devices rather than an
                entire home. Common uses include phones, laptops, lights,
                routers, cameras, camping equipment, small appliances, and some
                low-power office equipment.
              </p>

              <p className="mt-4 leading-7 text-slate-300">
                High-power devices such as kettles, heaters, ovens, and large
                tools need much more output and can drain batteries quickly.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">
                How solar charging works
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                A solar generator charges from compatible solar panels. Charging
                speed depends on panel wattage, sunlight, weather, panel angle,
                and the generator’s maximum solar input.
              </p>

              <p className="mt-4 leading-7 text-slate-300">
                Solar charging is useful, but it is usually slower and less
                predictable than charging from the mains.
              </p>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              Common solar generator use cases
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {useCases.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              What to compare before buying
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Do not compare solar generators only by headline capacity. Output
              power, solar input, battery chemistry, expandability, ports,
              weight, and warranty can all matter.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {buyingFactors.map((factor) => (
                <div
                  key={factor}
                  className="rounded-2xl border border-white/10 bg-slate-950 p-5"
                >
                  <p className="text-slate-300">{factor}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              Solar generator vs petrol generator
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Solar generators are usually quieter and cleaner at the point of
              use than petrol generators, and they can be used indoors if the
              manufacturer says it is safe. They do not produce exhaust fumes
              like fuel generators.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              The trade-off is that solar generators store a limited amount of
              energy and may recharge slowly from solar panels depending on
              weather and panel size.
            </p>
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              Solar generator vs roof solar
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              A solar generator is a portable battery system. Roof solar is a
              fixed installation designed to reduce household electricity bills
              over the long term. They serve different purposes.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              If you rent, camp, need emergency backup, or want portable power,
              a solar generator may be useful. If you own your home and want to
              reduce electricity bills, a roof solar estimate may be more
              relevant.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="/solar-savings-calculator"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Estimate roof solar savings
              </a>

              <a
                href="/best-portable-power-stations-uk"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Portable power station guide
              </a>
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h2 className="text-3xl font-bold">
              Compare solar generator options
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              This section will later link to approved solar generator,
              portable power station, and compatible solar panel affiliate
              partners.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="/go/portable-power"
                className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                See solar generator options
              </a>

              <a
                href="/affiliate-disclosure"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Read affiliate disclosure
              </a>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">Frequently asked questions</h2>

            <div className="mt-6 space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-xl font-semibold">{faq.question}</h3>
                  <p className="mt-3 leading-7 text-slate-300">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <h2 className="text-2xl font-bold">Important note</h2>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              This guide is for general information only. Solar generator
              suitability depends on battery capacity, output power, device
              requirements, charging method, solar panel compatibility, warranty,
              safety guidance, and product choice.
            </p>
          </section>
        </article>
      </main>
    </SiteShell>
  );
}