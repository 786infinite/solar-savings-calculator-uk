const fs = require("fs");
const path = require("path");

const root = process.cwd();

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function updateFile(file, updater) {
  const filePath = path.join(root, file);

  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${file}`);
  }

  const before = fs.readFileSync(filePath, "utf8");
  const after = updater(before);

  if (before === after) {
    console.log(`No change needed: ${file}`);
    return;
  }

  fs.writeFileSync(filePath, after, "utf8");
  console.log(`Updated: ${file}`);
}

const pageDir = path.join(root, "app", "south-facing-solar-panels-uk");
const pagePath = path.join(pageDir, "page.tsx");

ensureDir(pageDir);

const pageCode = `import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import FaqSchema from "@/components/FaqSchema";

export const metadata: Metadata = {
  title: "South-Facing Solar Panels UK | SolarCal",
  description:
    "Learn how south-facing solar panels perform in the UK, how east-west and shaded roofs compare, and what to check before getting solar quotes.",
};

const comparisonRows = [
  {
    direction: "South-facing roof",
    outcome: "Usually strongest output",
    note: "Often the best direction for solar generation in the UK, especially with limited shading.",
  },
  {
    direction: "South-east or south-west roof",
    outcome: "Often still strong",
    note: "Usually only moderately lower than due south, depending on angle and shading.",
  },
  {
    direction: "East-west roof",
    outcome: "Can still work well",
    note: "Can spread generation across morning and afternoon, which may suit some usage patterns.",
  },
  {
    direction: "North-facing roof",
    outcome: "Needs careful checking",
    note: "Usually lower output and may not be financially attractive unless conditions are favourable.",
  },
];

const checks = [
  "Roof direction and pitch",
  "Shading from trees, chimneys, dormers, or nearby buildings",
  "Usable roof area and number of panels that can fit",
  "Whether east-west panels may suit your electricity usage better",
  "Whether optimisers or microinverters are useful for shaded sections",
  "Whether battery storage improves self-consumption",
  "Estimated generation from the installer",
  "Full quote cost, warranty, monitoring, and aftercare",
];

const faqs = [
  {
    question: "Are south-facing solar panels best in the UK?",
    answer:
      "South-facing solar panels usually give strong generation in the UK because they receive more direct sunlight during the middle of the day. However, south-east, south-west, and east-west roofs can still be worthwhile.",
  },
  {
    question: "Are east-west solar panels worth it?",
    answer:
      "East-west solar panels can be worth it if the roof has enough space and limited shading. They may generate less at midday than south-facing panels but can spread generation across the morning and afternoon.",
  },
  {
    question: "Can north-facing roofs have solar panels?",
    answer:
      "North-facing roofs usually generate less electricity and need careful assessment. They are not automatically impossible, but the financial case can be weaker.",
  },
  {
    question: "Does roof angle matter for solar panels?",
    answer:
      "Yes. Roof angle affects how much sunlight panels receive. Installers should estimate expected generation based on roof pitch, direction, shading, and location.",
  },
  {
    question: "Should I avoid solar if my roof is not south-facing?",
    answer:
      "Not necessarily. Many UK homes with south-east, south-west, east, or west-facing roofs can still benefit from solar. Use a calculator and compare installer estimates before deciding.",
  },
];

export default function SouthFacingSolarPanelsUKPage() {
  return (
    <SiteShell>
      <main className="min-h-screen bg-slate-950 text-white">
        <article className="mx-auto max-w-5xl px-6 py-16">
          <FaqSchema faqs={faqs} />

          <a
            href="/"
            className="text-sm font-medium text-emerald-300 hover:text-emerald-200"
          >
            ← Back to homepage
          </a>

          <header className="mt-8">
            <p className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
              UK solar roof direction guide
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
              South-Facing Solar Panels UK
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              South-facing roofs are often ideal for solar panels in the UK, but
              they are not the only option. South-east, south-west, and east-west
              roofs can also work well depending on shading, roof angle, system
              size, and how you use electricity.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/solar-savings-calculator"
                className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Estimate your solar savings
              </a>

              <a
                href="/free-solar-guide"
                className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-6 py-4 text-center font-semibold text-emerald-300 hover:bg-emerald-400/20"
              >
                Download the free solar guide
              </a>
            </div>

            <p className="mt-4 text-sm text-slate-400">
              Last updated: May 2026
            </p>
          </header>

          <section className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h2 className="text-2xl font-bold">Quick answer</h2>

            <p className="mt-4 leading-7 text-slate-300">
              A south-facing roof is usually one of the best roof directions for
              solar panels in the UK because it can receive strong sunlight
              through the middle of the day. But a non-south-facing roof can
              still be suitable if the design, shading, roof space, and quote
              make sense.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              The real question is not only which way the roof faces. You also
              need to check shading, roof pitch, usable space, your daytime
              electricity use, battery interest, and the final installation
              cost.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              Solar panel roof direction comparison
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Roof direction affects generation, but it does not decide the
              whole result by itself. A slightly less ideal roof with low
              shading may perform better than a south-facing roof with heavy
              shading.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-white/10 text-slate-200">
                  <tr>
                    <th className="p-4 font-semibold">Roof direction</th>
                    <th className="p-4 font-semibold">Likely outcome</th>
                    <th className="p-4 font-semibold">What to know</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.direction} className="border-t border-white/10">
                      <td className="p-4 font-medium text-white">
                        {row.direction}
                      </td>
                      <td className="p-4 font-semibold text-emerald-300">
                        {row.outcome}
                      </td>
                      <td className="p-4 text-slate-300">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">
                Why south-facing roofs are popular
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                In the UK, a south-facing roof often gives strong solar output
                because panels receive good sunlight around the middle of the
                day. This can improve annual generation and may support a better
                payback period if the installation cost is sensible.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">
                Why east-west roofs can still work
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                East-west systems can generate more in the morning and later
                afternoon rather than concentrating generation around midday.
                This may be useful for households that use electricity across
                the day.
              </p>
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              What to check before accepting a quote
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Ask the installer to explain how roof direction affects your
              expected generation and payback. The quote should show estimated
              output, system size, products, warranty, and any assumptions about
              shading.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {checks.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-950 p-5"
                >
                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              Shading can matter more than direction
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              A south-facing roof with heavy shading may perform worse than an
              east-west roof with clear sunlight. Trees, chimneys, nearby
              buildings, dormers, and roof obstructions can all reduce output.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              If shading affects only part of the roof, ask whether panel layout,
              optimisers, microinverters, or a smaller system could improve the
              design.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="/solar-panels-for-terraced-house"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Terraced house solar guide
              </a>

              <a
                href="/calculator-methodology"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Calculator methodology
              </a>
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h2 className="text-3xl font-bold">
              Estimate savings for your roof direction
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Use the SolarCal calculator to estimate system size, annual
              generation, installation cost range, savings, battery benefit, and
              payback based on roof direction, shading, region, and usage.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="/solar-savings-calculator"
                className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Use the solar calculator
              </a>

              <a
                href="/solar-panel-grants-uk"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Check solar grants
              </a>
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              Planning to buy solar soon?
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              The free SolarCal guide helps you understand savings, quote
              comparison, roof suitability, payback periods, battery storage,
              and common buying mistakes. If you want a more detailed checklist
              before choosing an installer, the Buyer’s Pack gives you extra
              quote comparison help and practical questions to ask.
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
              This guide is for general information only. Solar panel output,
              savings, payback, suitability, and installation cost depend on
              roof survey, shading, roof pitch, location, household usage,
              tariff, installer pricing, future energy prices, and product
              choice.
            </p>
          </section>
        </article>
      </main>
    </SiteShell>
  );
}
`;

fs.writeFileSync(pagePath, pageCode, "utf8");
console.log("Created/updated south-facing solar page.");

// Add to sitemap
updateFile("app/sitemap.ts", (content) => {
  if (content.includes("/south-facing-solar-panels-uk")) {
    return content;
  }

  return content.replace(
    '    "/solar-panel-grants-uk",',
    '    "/solar-panel-grants-uk",\n    "/south-facing-solar-panels-uk",'
  );
});

// Add to footer guide links
updateFile("components/SiteShell.tsx", (content) => {
  if (content.includes('href="/south-facing-solar-panels-uk"')) {
    return content;
  }

  const insertAfter = `              <li>
                <a
                  href="/solar-panel-grants-uk"
                  className="hover:text-emerald-300"
                >
                  Solar panel grants
                </a>
              </li>`;

  const newLink = `${insertAfter}
              <li>
                <a
                  href="/south-facing-solar-panels-uk"
                  className="hover:text-emerald-300"
                >
                  South-facing solar panels
                </a>
              </li>`;

  if (!content.includes(insertAfter)) {
    throw new Error("Could not find footer insert point in SiteShell.");
  }

  return content.replace(insertAfter, newLink);
});

// Add to homepage popular guide cards
updateFile("app/page.tsx", (content) => {
  if (content.includes("/south-facing-solar-panels-uk")) {
    return content;
  }

  const insertAfter = `  {
    title: "Solar panel grants UK",
    href: "/solar-panel-grants-uk",
    description:
      "Check ECO4, 0% VAT, SEG payments, and other UK solar support.",
  },`;

  const newCard = `${insertAfter}
  {
    title: "South-facing solar panels",
    href: "/south-facing-solar-panels-uk",
    description:
      "Compare south, east-west, and shaded roof solar performance.",
  },`;

  if (!content.includes(insertAfter)) {
    throw new Error("Could not find homepage insert point.");
  }

  return content.replace(insertAfter, newCard);
});

console.log("Done. Now run: npm run build");