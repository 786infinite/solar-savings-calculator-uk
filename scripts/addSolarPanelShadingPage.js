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

const pageDir = path.join(root, "app", "solar-panel-shading-uk");
const pagePath = path.join(pageDir, "page.tsx");

ensureDir(pageDir);

const pageCode = `import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import FaqSchema from "@/components/FaqSchema";

export const metadata: Metadata = {
  title: "Solar Panel Shading UK | SolarCal",
  description:
    "Learn how shading affects solar panels in the UK, including trees, chimneys, dormers, neighbouring buildings, optimisers, microinverters, and quote checks.",
};

const shadingSources = [
  {
    source: "Trees",
    impact:
      "Can shade panels at certain times of day or year, especially when the sun is lower.",
  },
  {
    source: "Chimneys",
    impact:
      "Can create narrow but important shade lines across panels, depending on layout.",
  },
  {
    source: "Dormers and roof features",
    impact:
      "Can reduce usable roof space and shade nearby panels.",
  },
  {
    source: "Neighbouring buildings",
    impact:
      "Can block sunlight, especially on tighter streets or terraced properties.",
  },
  {
    source: "Aerials, vents, and roof obstructions",
    impact:
      "Small objects can still affect layout and generation estimates.",
  },
];

const checks = [
  "Ask whether the installer has modelled shading properly.",
  "Check which parts of the roof are shaded and at what time of day.",
  "Ask if a smaller clear-roof system is better than using shaded sections.",
  "Ask whether optimisers or microinverters are useful for your layout.",
  "Compare estimated generation with and without shaded roof areas.",
  "Check whether trees could grow and increase shading over time.",
  "Ask how shading affects payback period and battery benefit.",
  "Make sure the quote explains assumptions clearly.",
];

const faqs = [
  {
    question: "Do solar panels work in shade?",
    answer:
      "Solar panels can still work with some shade, but shading usually reduces output. The effect depends on how much shade there is, when it happens, and how the system is designed.",
  },
  {
    question: "Can one shaded panel affect the whole solar system?",
    answer:
      "It can, depending on the system design. String inverters, optimisers, and microinverters can handle shading differently, so ask the installer to explain the layout.",
  },
  {
    question: "Are optimisers worth it for shaded solar panels?",
    answer:
      "Optimisers can help in some shaded or complex roof layouts, but they add cost. They should be compared against expected generation improvement and payback.",
  },
  {
    question: "Should I remove trees before installing solar panels?",
    answer:
      "Not always. You should first understand how much shading the trees create, whether pruning is allowed, and whether a different panel layout would solve the issue.",
  },
  {
    question: "Can a shaded roof still be worth solar?",
    answer:
      "Sometimes yes, especially if shading is light or only affects part of the day. Heavy shading can make solar less attractive and needs careful survey.",
  },
];

export default function SolarPanelShadingUKPage() {
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
              UK solar shading guide
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
              Solar Panel Shading UK
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Shading from trees, chimneys, dormers, nearby buildings, or roof
              obstructions can reduce solar panel output. The impact depends on
              how much shade there is, when it happens, and how the system is
              designed.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/solar-savings-calculator"
                className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Estimate solar savings
              </a>

              <a
                href="/free-solar-guide"
                className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-6 py-4 text-center font-semibold text-emerald-300 hover:bg-emerald-400/20"
              >
                Download the free guide
              </a>
            </div>

            <p className="mt-4 text-sm text-slate-400">
              Last updated: May 2026
            </p>
          </header>

          <section className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h2 className="text-2xl font-bold">Quick answer</h2>

            <p className="mt-4 leading-7 text-slate-300">
              Light shading does not always rule out solar panels, but heavy or
              regular shading can reduce generation and weaken payback. A good
              installer should assess shading before giving a final quote.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              The best solution may be a better panel layout, avoiding shaded
              roof areas, using optimisers or microinverters, or choosing a
              smaller system that performs more reliably.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              Common causes of solar panel shading
            </h2>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-white/10 text-slate-200">
                  <tr>
                    <th className="p-4 font-semibold">Shading source</th>
                    <th className="p-4 font-semibold">Why it matters</th>
                  </tr>
                </thead>
                <tbody>
                  {shadingSources.map((row) => (
                    <tr key={row.source} className="border-t border-white/10">
                      <td className="p-4 font-medium text-white">
                        {row.source}
                      </td>
                      <td className="p-4 text-slate-300">{row.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">
                Why shading affects output
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Solar panels generate less electricity when shaded. Even partial
                shading can affect output if it falls across important parts of
                the array or happens during strong sunlight hours.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">
                Why survey detail matters
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                A proper quote should explain roof direction, shading,
                estimated generation, panel layout, inverter choice, warranty,
                and how shading has been allowed for in the estimate.
              </p>
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              What to ask your installer about shading
            </h2>

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
              Optimisers, microinverters, and shaded roofs
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Optimisers and microinverters can help some systems handle
              shading better, especially where only some panels are affected.
              They are not automatically needed for every roof, and they can
              increase cost.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              Ask the installer to explain whether these products are needed,
              what generation improvement is expected, and how they affect
              warranty, monitoring, maintenance, and payback.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="/south-facing-solar-panels-uk"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Roof direction guide
              </a>

              <a
                href="/solar-panels-for-terraced-house"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Terraced house solar guide
              </a>
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h2 className="text-3xl font-bold">
              Estimate savings with shading in mind
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Use the SolarCal calculator to estimate solar savings, payback,
              battery benefit, and system size based on your region, roof
              direction, shading level, and electricity usage.
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
              comparison, roof suitability, shading, payback periods, battery
              storage, and common buying mistakes.
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
              This guide is for general information only. Solar output, savings,
              payback, suitability, and installation cost depend on roof survey,
              shading, roof direction, household usage, tariff, installer
              pricing, future energy prices, and product choice.
            </p>
          </section>
        </article>
      </main>
    </SiteShell>
  );
}
`;

fs.writeFileSync(pagePath, pageCode, "utf8");
console.log("Created/updated solar panel shading page.");

// Add to sitemap
updateFile("app/sitemap.ts", (content) => {
  if (content.includes("/solar-panel-shading-uk")) {
    return content;
  }

  return content.replace(
    '    "/south-facing-solar-panels-uk",',
    '    "/south-facing-solar-panels-uk",\n    "/solar-panel-shading-uk",'
  );
});

// Add to footer guide links
updateFile("components/SiteShell.tsx", (content) => {
  if (content.includes('href="/solar-panel-shading-uk"')) {
    return content;
  }

  const insertAfter = `              <li>
                <a
                  href="/south-facing-solar-panels-uk"
                  className="hover:text-emerald-300"
                >
                  South-facing solar panels
                </a>
              </li>`;

  const newLink = `${insertAfter}
              <li>
                <a
                  href="/solar-panel-shading-uk"
                  className="hover:text-emerald-300"
                >
                  Solar panel shading
                </a>
              </li>`;

  if (!content.includes(insertAfter)) {
    throw new Error("Could not find footer insert point in SiteShell.");
  }

  return content.replace(insertAfter, newLink);
});

// Add to homepage popular guide cards
updateFile("app/page.tsx", (content) => {
  if (content.includes("/solar-panel-shading-uk")) {
    return content;
  }

  const insertAfter = `  {
    title: "South-facing solar panels",
    href: "/south-facing-solar-panels-uk",
    description:
      "Compare south, east-west, and shaded roof solar performance.",
  },`;

  const newCard = `${insertAfter}
  {
    title: "Solar panel shading UK",
    href: "/solar-panel-shading-uk",
    description:
      "See how trees, chimneys, dormers, and shade affect solar output.",
  },`;

  if (!content.includes(insertAfter)) {
    throw new Error("Could not find homepage insert point.");
  }

  return content.replace(insertAfter, newCard);
});

console.log("Done. Now run: npm run build");