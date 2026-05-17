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

const pageDir = path.join(root, "app", "mcs-certified-solar-installers-uk");
const pagePath = path.join(pageDir, "page.tsx");

ensureDir(pageDir);

const pageCode = `import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import FaqSchema from "@/components/FaqSchema";

export const metadata: Metadata = {
  title: "MCS Certified Solar Installers UK | SolarCal",
  description:
    "Learn why MCS certified solar installers matter in the UK, what to check before accepting a quote, and how certification links to warranties, SEG, and solar quality.",
};

const checks = [
  "Check whether the installer is MCS certified.",
  "Ask what solar panels, inverter, battery, and mounting system are included.",
  "Check the product warranty and workmanship warranty.",
  "Ask whether the quote includes scaffolding, monitoring, and handover documents.",
  "Ask for the expected annual generation estimate.",
  "Check whether DNO notification is included.",
  "Ask whether the system is eligible for Smart Export Guarantee payments.",
  "Compare more than one quote before choosing an installer.",
];

const warningSigns = [
  "Pressure to sign immediately",
  "No clear company details",
  "No clear MCS certification information",
  "Very vague equipment list",
  "No generation estimate",
  "No written warranty details",
  "Unclear deposit or finance terms",
  "No proper roof survey explanation",
];

const faqs = [
  {
    question: "What is an MCS certified solar installer?",
    answer:
      "An MCS certified solar installer is an installer certified under the Microgeneration Certification Scheme for installing low-carbon technologies such as solar PV. Certification can matter for quality assurance, documentation, and export tariff eligibility.",
  },
  {
    question: "Do I need an MCS installer for solar panels?",
    answer:
      "For many UK homeowners, using an MCS certified installer is important because it can affect documentation, consumer protection, and eligibility for Smart Export Guarantee export payments.",
  },
  {
    question: "Should I choose the cheapest solar installer?",
    answer:
      "Not automatically. Compare certification, equipment, warranty, generation estimate, aftercare, survey detail, and the full quote rather than only the headline price.",
  },
  {
    question: "What should a solar installer quote include?",
    answer:
      "A good quote should explain system size, panels, inverter, battery if included, estimated generation, installation cost, scaffolding, warranties, monitoring, certification, and any assumptions about shading or roof suitability.",
  },
  {
    question: "How many solar quotes should I compare?",
    answer:
      "It is sensible to compare more than one quote so you can understand the difference in price, equipment, warranty, installation design, and aftercare.",
  },
];

export default function McsCertifiedSolarInstallersUKPage() {
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
              UK solar installer guide
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
              MCS Certified Solar Installers UK
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Choosing the right installer is one of the most important parts of
              buying solar panels. MCS certification, clear warranties, product
              choice, survey quality, and aftercare can matter just as much as
              the headline price.
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
              For most UK solar buyers, choosing an MCS certified installer is a
              sensible starting point. It can help with installation standards,
              documentation, consumer confidence, and eligibility for export
              payments.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              Certification alone is not enough. You should still compare the
              full quote, product list, warranties, survey detail, expected
              generation, and aftercare before choosing an installer.
            </p>
          </section>

          <section className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">
                Why certification matters
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Solar panels are a long-term investment, so installation quality
                matters. A certified installer should provide proper paperwork,
                system design information, warranty details, and handover
                documents.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">
                Why quotes still need comparing
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Two certified installers can still offer different products,
                prices, warranty terms, generation estimates, battery options,
                and aftercare. The best quote is not always the cheapest quote.
              </p>
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              What to check before choosing an installer
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Before accepting a solar quote, ask for the details in writing.
              A good installer should explain the system clearly and avoid
              pressure selling.
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
              Warning signs when comparing solar quotes
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Be careful if a quote is vague, rushed, or difficult to compare.
              Solar should be explained clearly before you sign anything.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {warningSigns.map((item) => (
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
              Certification, SEG, and export payments
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              If you want to receive payments for exported solar electricity,
              check that your installer explains the Smart Export Guarantee,
              required documents, and whether your installation will meet the
              requirements of your chosen export supplier.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              Export payments are not the same as a grant. They are ongoing
              payments for eligible electricity exported back to the grid after
              installation.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="/solar-panel-grants-uk"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Solar grants and support guide
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
              Estimate savings before comparing quotes
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Use SolarCal to estimate likely system size, installation cost
              range, annual savings, payback period, battery benefit, and EV
              charging potential before speaking to installers.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="/solar-savings-calculator"
                className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Use the solar calculator
              </a>

              <a
                href="/how-much-do-solar-panels-cost-uk"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Solar panel cost guide
              </a>
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              Planning to buy solar soon?
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              The free SolarCal guide helps you understand savings, quote
              comparison, installer questions, warranties, roof suitability, and
              common buying mistakes. The Buyer’s Pack gives you extra checklist
              support before choosing a supplier.
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
            <h2 className="text-2xl font-bold">Sources and further reading</h2>

            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li>
                <a
                  href="https://mcscertified.com/"
                  className="text-emerald-300 hover:text-emerald-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  MCS: Certified low-carbon products and installers
                </a>
              </li>
              <li>
                <a
                  href="https://www.ofgem.gov.uk/environmental-and-social-schemes/smart-export-guarantee-seg"
                  className="text-emerald-300 hover:text-emerald-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ofgem: Smart Export Guarantee
                </a>
              </li>
              <li>
                <a
                  href="https://energysavingtrust.org.uk/advice/solar-panels/"
                  className="text-emerald-300 hover:text-emerald-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  Energy Saving Trust: Solar panels
                </a>
              </li>
              <li>
                <a
                  href="/affiliate-disclosure"
                  className="text-emerald-300 hover:text-emerald-200"
                >
                  SolarCal affiliate disclosure
                </a>
              </li>
            </ul>
          </section>

          <section className="mt-12 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <h2 className="text-2xl font-bold">Important note</h2>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              This guide is for general information only. Installer
              certification, scheme requirements, export tariff rules, product
              suitability, costs, warranties, and eligibility can change. Always
              check current details with the installer, supplier, certification
              body, and official scheme provider before making a decision.
            </p>
          </section>
        </article>
      </main>
    </SiteShell>
  );
}
`;

fs.writeFileSync(pagePath, pageCode, "utf8");
console.log("Created/updated MCS installer page.");

// Add to sitemap
updateFile("app/sitemap.ts", (content) => {
  if (content.includes("/mcs-certified-solar-installers-uk")) {
    return content;
  }

  return content.replace(
    '    "/solar-panel-shading-uk",',
    '    "/solar-panel-shading-uk",\n    "/mcs-certified-solar-installers-uk",'
  );
});

// Add to footer guide links
updateFile("components/SiteShell.tsx", (content) => {
  if (content.includes('href="/mcs-certified-solar-installers-uk"')) {
    return content;
  }

  const insertAfter = `              <li>
                <a
                  href="/solar-panel-shading-uk"
                  className="hover:text-emerald-300"
                >
                  Solar panel shading
                </a>
              </li>`;

  const newLink = `${insertAfter}
              <li>
                <a
                  href="/mcs-certified-solar-installers-uk"
                  className="hover:text-emerald-300"
                >
                  MCS certified installers
                </a>
              </li>`;

  if (!content.includes(insertAfter)) {
    throw new Error("Could not find footer insert point in SiteShell.");
  }

  return content.replace(insertAfter, newLink);
});

// Add to homepage popular guide cards
updateFile("app/page.tsx", (content) => {
  if (content.includes("/mcs-certified-solar-installers-uk")) {
    return content;
  }

  const insertAfter = `  {
    title: "Solar panel shading UK",
    href: "/solar-panel-shading-uk",
    description:
      "See how trees, chimneys, dormers, and shade affect solar output.",
  },`;

  const newCard = `${insertAfter}
  {
    title: "MCS certified solar installers",
    href: "/mcs-certified-solar-installers-uk",
    description:
      "Learn what to check before choosing a UK solar installer.",
  },`;

  if (!content.includes(insertAfter)) {
    throw new Error("Could not find homepage insert point.");
  }

  return content.replace(insertAfter, newCard);
});

console.log("Done. Now run: npm run build");