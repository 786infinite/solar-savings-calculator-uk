import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import FaqSchema from "@/components/FaqSchema";

export const metadata: Metadata = {
  title: "Best Portable Power Stations UK | SolarCal",
  description: "Compare portable power stations for home backup, camping, garden offices, off-grid use, solar charging, battery capacity, and output power.",
};


const useCases = [
  {
    title: "Home backup",
    description:
      "Useful for keeping phones, routers, laptops, lights, or small appliances powered during short outages.",
  },
  {
    title: "Camping and travel",
    description:
      "Useful for charging phones, cameras, laptops, lights, cool boxes, and other portable devices.",
  },
  {
    title: "Garden offices",
    description:
      "Can support low-power equipment where running permanent power is difficult or expensive.",
  },
  {
    title: "Solar charging",
    description:
      "Some portable power stations can recharge from compatible portable solar panels.",
  },
];

const buyingFactors = [
  "Battery capacity in Wh",
  "AC output power",
  "Number and type of ports",
  "Solar input compatibility",
  "Charging speed",
  "Battery chemistry",
  "Weight and portability",
  "Warranty and support",
  "Noise level compared with fuel generators",
  "Whether it can power the devices you actually need",
];

const productTypes = [
  {
    type: "Small portable power station",
    bestFor: "Phones, laptops, lights, routers",
    note: "Lower cost and easier to carry, but limited capacity",
  },
  {
    type: "Medium portable power station",
    bestFor: "Camping, garden offices, short backup use",
    note: "Better balance of capacity, output, and portability",
  },
  {
    type: "Large portable power station",
    bestFor: "Home backup and higher-power devices",
    note: "More expensive and heavier, but more capable",
  },
  {
    type: "Solar generator bundle",
    bestFor: "Portable power station plus solar panels",
    note: "Useful for off-grid recharging, but solar speed depends on weather",
  },
];

const faqs = [
  {
    question: "Are portable power stations worth it?",
    answer:
      "A portable power station can be worth it if you need backup power, camping power, off-grid charging, or a quieter alternative to a fuel generator for smaller devices.",
  },
  {
    question: "Can a portable power station run a house?",
    answer:
      "Most portable power stations cannot run an entire house like a full backup system. They are usually better for selected devices such as routers, phones, laptops, lights, and small appliances.",
  },
  {
    question: "Can you charge a portable power station with solar panels?",
    answer:
      "Many models can charge from compatible portable solar panels, but charging speed depends on panel size, sunlight, weather, and the power station’s solar input limit.",
  },
  {
    question: "Is a portable power station the same as solar panels on a roof?",
    answer:
      "No. A portable power station is a rechargeable battery unit. Roof solar is a fixed home energy system. A portable setup can be useful, but it is not a direct replacement for a full solar installation.",
  },
];

export default function BestPortablePowerStationsUKPage() {
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
              Portable power guide
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
              Best Portable Power Stations UK
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Portable power stations can be useful for backup power, camping,
              garden offices, off-grid charging, and emergency use. The best
              choice depends on what you need to power, how long you need it to
              run, and whether you want solar charging.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/go/portable-power"
                className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                See portable power options
              </a>

              <a
                href="/best-solar-generators-uk"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                View solar generator guide
              </a>
            </div>
          
            <p className="mt-4 text-sm text-slate-400">
              Last updated: May 2026
            </p>
          </header>

          <section className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h2 className="text-2xl font-bold">Quick answer</h2>

            <p className="mt-4 leading-7 text-slate-300">
              The best portable power station is the one that can safely power
              the devices you actually need, for long enough, without being too
              heavy or expensive. Capacity, output power, charging speed, solar
              input, and warranty matter more than brand name alone.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              For basic backup, a smaller unit may be enough. For camping,
              garden offices, or longer outages, a medium or larger power station
              may be more useful.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              Common uses for portable power stations
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {useCases.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              Portable power station types
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Portable power stations vary from compact units for small devices
              to larger systems designed for backup and higher-power loads.
            </p>

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
                  {productTypes.map((row) => (
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
                What size portable power station do you need?
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Start by listing the devices you want to power, their wattage,
                and how many hours you want to run them. A laptop and phone need
                far less capacity than a fridge, heater, kettle, or power tool.
              </p>

              <p className="mt-4 leading-7 text-slate-300">
                Always check both battery capacity and maximum output. A unit
                may have enough stored energy but still not enough output to run
                a high-power device.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">
                Solar charging compatibility
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Many portable power stations can be charged from solar panels,
                but only if the panel voltage, connector, and input limit are
                compatible.
              </p>

              <p className="mt-4 leading-7 text-slate-300">
                Solar charging speed depends on sunlight, panel size, weather,
                panel angle, and the power station’s maximum solar input.
              </p>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              What to compare before buying
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {buyingFactors.map((factor) => (
                <div
                  key={factor}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-slate-300">{factor}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              Portable power station vs roof solar
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              A portable power station is not the same as a full roof solar
              installation. It is usually a rechargeable battery box that can
              power selected devices. Roof solar is a fixed system designed to
              generate electricity for your home.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              Portable power can be a good option for renters, camping, backup
              power, or people not ready for a full solar installation. If you
              own your home and want to reduce electricity bills long term, roof
              solar may be worth estimating separately.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="/solar-savings-calculator"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Estimate roof solar savings
              </a>

              <a
                href="/best-solar-generators-uk"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                View solar generator guide
              </a>
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h2 className="text-3xl font-bold">
              Compare portable power options
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              This section will later link to approved product affiliates such as
              portable power stations, solar generator bundles, and compatible
              portable solar panels.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="/go/portable-power"
                className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                See portable power options
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
              This guide is for general information only. Portable power station
              suitability depends on battery capacity, output power, device
              requirements, charging method, solar compatibility, warranty,
              safety instructions, and product choice.
            </p>
          </section>
        </article>
      </main>
    </SiteShell>
  );
}