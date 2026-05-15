import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "SolarCal | Solar Savings Calculator UK",
  description:
    "Estimate UK solar panel savings, installation costs, payback period, battery benefit, EV charging potential, and compare next steps with SolarCal.",
};

const popularGuides = [
  {
    title: "How much do solar panels cost?",
    href: "/how-much-do-solar-panels-cost-uk",
    description: "See what affects UK solar panel installation costs.",
  },
  {
    title: "Are solar panels worth it?",
    href: "/are-solar-panels-worth-it-uk",
    description: "Understand when solar panels may make financial sense.",
  },
  {
    title: "Solar panels for a 3-bedroom house",
    href: "/solar-panels-for-3-bedroom-house",
    description: "Estimate system size and savings for a typical 3-bed home.",
  },
  {
    title: "Solar panels for a 4-bedroom house",
    href: "/solar-panels-for-4-bedroom-house",
    description: "Compare likely system needs for larger homes.",
  },
  {
    title: "Solar battery worth it?",
    href: "/solar-battery-worth-it",
    description: "Learn when battery storage may improve self-consumption.",
  },
  {
    title: "Solar panels and EV charging",
    href: "/solar-panels-and-ev-charging",
    description: "See how solar can work with home EV charging.",
  },
];

const productGuides = [
  {
    title: "Best solar panels UK",
    href: "/best-solar-panels-uk",
  },
  {
    title: "Best solar batteries UK",
    href: "/best-solar-batteries-uk",
  },
  {
    title: "Best EV chargers UK",
    href: "/best-ev-chargers-uk",
  },
  {
    title: "Best portable power stations UK",
    href: "/best-portable-power-stations-uk",
  },
  {
    title: "Best solar generators UK",
    href: "/best-solar-generators-uk",
  },
];

export default function HomePage() {
  return (
    <SiteShell>
      <main>
        <section className="mx-auto max-w-6xl px-6 py-20 text-center">
          <p className="mx-auto inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-5 py-2 text-sm font-medium text-emerald-300">
            UK Solar Savings Calculator
          </p>

          <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Estimate your solar panel savings in minutes
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Use our free UK solar calculator to estimate installation cost,
            annual savings, payback period, battery benefit, EV charging
            potential, and your next best step.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/solar-savings-calculator"
              className="rounded-xl bg-emerald-400 px-8 py-4 font-semibold text-slate-950 shadow-lg shadow-emerald-400/20 hover:bg-emerald-300"
            >
              Start the solar calculator
            </a>

            <a
              href="/how-much-do-solar-panels-cost-uk"
              className="rounded-xl border border-white/15 px-8 py-4 font-semibold text-white hover:bg-white/10"
            >
              Learn about UK solar costs
            </a>

            <a
              href="/free-solar-guide"
              className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-8 py-4 font-semibold text-emerald-300 hover:bg-emerald-400/20"
            >
              Download the free solar guide
            </a>
          </div>

          <div className="mt-16 grid gap-6 text-left md:grid-cols-3">
            <FeatureCard
              title="Estimate savings"
              description="Get a simple estimate for annual bill savings, export income, and total yearly benefit."
            />
            <FeatureCard
              title="Check payback"
              description="See a rough payback range based on electricity use, roof direction, shading, and battery choice."
            />
            <FeatureCard
              title="Compare next steps"
              description="Find out whether to compare solar quotes, consider a battery, look at EV chargers, or start with an energy monitor."
            />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-10">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="max-w-3xl">
              <p className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
                Start here
              </p>

              <h2 className="mt-5 text-3xl font-bold">
                Solar Savings Calculator UK
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Answer a few questions about your electricity bill, region,
                roof direction, shading, daytime usage, battery interest, and EV
                plans. The calculator then gives an estimated system size,
                installation cost range, annual savings, payback period, and
                recommended next step.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="/solar-savings-calculator"
                className="inline-flex rounded-xl bg-emerald-400 px-6 py-4 font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Use the free calculator
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-medium text-emerald-300">
                Solar guides
              </p>
              <h2 className="mt-3 text-3xl font-bold">Popular UK solar pages</h2>
              <p className="mt-4 max-w-3xl leading-7 text-slate-300">
                Read simple guides about solar panel costs, payback, battery
                storage, EV charging, and common home sizes.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {popularGuides.map((guide) => (
              <a
                key={guide.href}
                href={guide.href}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-emerald-400/40 hover:bg-emerald-400/10"
              >
                <h3 className="text-xl font-semibold">{guide.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {guide.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-10">
          <div className="rounded-3xl border border-white/10 bg-slate-900 p-8">
            <p className="text-sm font-medium text-emerald-300">
              Product and affiliate categories
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Compare solar-related options
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              As the site grows, recommendations can include solar quote
              partners, solar batteries, EV chargers, portable power stations,
              solar generators, energy monitors, and related home energy
              products.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <a
                href="/free-solar-guide"
                className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 font-semibold text-emerald-300 hover:bg-emerald-400 hover:text-slate-950"
              >
                Free Solar Guide + Buyer’s Pack
              </a>

              {productGuides.map((guide) => (
                <a
                  key={guide.href}
                  href={guide.href}
                  className="rounded-2xl bg-slate-950 p-5 font-semibold hover:bg-emerald-400 hover:text-slate-950"
                >
                  {guide.title}
                </a>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
              <h3 className="text-2xl font-bold">
                Planning to buy solar soon?
              </h3>

              <p className="mt-3 max-w-3xl leading-7 text-slate-300">
                Download the free guide first, then upgrade to the full Buyer’s
                Pack if you want extra quote comparison help, installer
                questions, and buying checklists before choosing a supplier.
              </p>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/free-solar-guide"
                  className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
                >
                  Download the free guide
                </a>

                <a
                  href="https://payhip.com/b/BMvmN"
                  className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
                >
                  View the Buyer’s Pack
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid gap-6 md:grid-cols-3">
            <InfoCard
              number="1"
              title="Enter your details"
              description="Add your monthly bill, home size, region, roof direction, shading, battery interest, and EV plans."
            />

            <InfoCard
              number="2"
              title="Review your estimate"
              description="See estimated system size, installation cost range, yearly benefit, payback period, and CO2 savings."
            />

            <InfoCard
              number="3"
              title="Choose your next step"
              description="Compare solar quotes, explore battery storage, look at EV chargers, or read more guides before deciding."
            />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-10">
          <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-8">
            <h2 className="text-3xl font-bold">
              Calculator results are estimates only
            </h2>

            <p className="mt-4 max-w-4xl leading-7 text-slate-300">
              Final costs, savings, payback period, export income, roof
              suitability, and product performance depend on your property,
              location, roof survey, shading, household usage, tariff, installer
              pricing, and product choice.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/calculator-methodology"
                className="rounded-xl border border-white/15 px-6 py-4 font-semibold text-white hover:bg-white/10"
              >
                View calculator methodology
              </a>

              <a
                href="/affiliate-disclosure"
                className="rounded-xl border border-white/15 px-6 py-4 font-semibold text-white hover:bg-white/10"
              >
                Read affiliate disclosure
              </a>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-4 leading-7 text-slate-300">{description}</p>
    </div>
  );
}

function InfoCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400 font-bold text-slate-950">
        {number}
      </div>
      <h3 className="mt-5 text-xl font-semibold">{title}</h3>
      <p className="mt-3 leading-7 text-slate-300">{description}</p>
    </div>
  );
}