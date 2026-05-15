const fs = require("fs");
const path = require("path");

const root = process.cwd();

const pages = [
  {
    file: "app/best-solar-panels-uk/page.tsx",
    insertBefore:
      '<section className="mt-12">\n            <h2 className="text-3xl font-bold">Frequently asked questions</h2>',
    section: `
          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              Planning to choose solar panels?
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              The free SolarCal guide helps you understand solar savings,
              quote comparison, payback periods, battery options, and common
              buying mistakes. If you want a more detailed checklist before
              choosing an installer, the Buyer’s Pack gives you extra quote
              comparison help and practical questions to ask.
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

          <section className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h2 className="text-3xl font-bold">
              Solar products and equipment
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              If you are researching panels, kits, batteries, inverters, or
              off-grid solar equipment, you can also compare solar product
              options through SolarCal’s partner route.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="/go/solar-products"
                className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                View solar products
              </a>

              <a
                href="/affiliate-disclosure"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Read affiliate disclosure
              </a>
            </div>
          </section>

          <section className="mt-12 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <h2 className="text-2xl font-bold">Sources and further reading</h2>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              These links can help you understand UK solar panels, certified
              installers, export payments, and SolarCal’s estimate method.
            </p>

            <ul className="mt-5 space-y-3 text-sm text-slate-300">
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
                  href="/calculator-methodology"
                  className="text-emerald-300 hover:text-emerald-200"
                >
                  SolarCal calculator methodology
                </a>
              </li>
            </ul>
          </section>
`,
  },
  {
    file: "app/best-solar-batteries-uk/page.tsx",
    insertBefore:
      '<section className="mt-12">\n            <h2 className="text-3xl font-bold">Frequently asked questions</h2>',
    section: `
          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              Planning to choose a solar battery?
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              The free SolarCal guide helps you understand solar savings,
              battery storage, quote comparison, payback periods, and common
              buying mistakes. If you want a more detailed checklist before
              choosing an installer, the Buyer’s Pack gives you extra quote
              comparison help and practical questions to ask.
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

          <section className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h2 className="text-3xl font-bold">
              Compare solar battery next steps
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Battery storage should be matched to your solar generation,
              evening usage, tariff, inverter setup, and budget. Use the
              calculator first, then compare battery options carefully.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="/solar-savings-calculator"
                className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Estimate battery benefit
              </a>

              <a
                href="/go/solar-battery"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Compare battery options
              </a>
            </div>
          </section>

          <section className="mt-12 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <h2 className="text-2xl font-bold">Sources and further reading</h2>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              These links can help you understand UK solar panels, battery
              storage, certified installers, export payments, and SolarCal’s
              estimate method.
            </p>

            <ul className="mt-5 space-y-3 text-sm text-slate-300">
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
                  href="/calculator-methodology"
                  className="text-emerald-300 hover:text-emerald-200"
                >
                  SolarCal calculator methodology
                </a>
              </li>
            </ul>
          </section>
`,
  },
  {
    file: "app/best-ev-chargers-uk/page.tsx",
    insertBefore:
      '<section className="mt-12">\n            <h2 className="text-3xl font-bold">Frequently asked questions</h2>',
    section: `
          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              Planning solar panels or EV charging?
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              The free SolarCal guide helps you understand solar savings,
              EV charging, battery storage, quote comparison, payback periods,
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

          <section className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h2 className="text-3xl font-bold">
              EV charger accessories and next steps
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              If you already have a charger or are planning home charging, you
              may also need accessories such as charging cables, cable storage,
              adapters, or related EV charging products.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="/go/ev-accessories"
                className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                See EV accessories
              </a>

              <a
                href="/affiliate-disclosure"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Read affiliate disclosure
              </a>
            </div>
          </section>

          <section className="mt-12 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <h2 className="text-2xl font-bold">Sources and further reading</h2>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              These links can help you understand electric vehicles, home
              charging, solar panels, and export payments.
            </p>

            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li>
                <a
                  href="https://energysavingtrust.org.uk/advice/electric-vehicles/"
                  className="text-emerald-300 hover:text-emerald-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  Energy Saving Trust: Electric vehicles
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
                  href="https://www.gov.uk/government/collections/government-grants-for-low-emission-vehicles"
                  className="text-emerald-300 hover:text-emerald-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  GOV.UK: Low-emission vehicle grants and schemes
                </a>
              </li>
              <li>
                <a
                  href="/calculator-methodology"
                  className="text-emerald-300 hover:text-emerald-200"
                >
                  SolarCal calculator methodology
                </a>
              </li>
            </ul>
          </section>
`,
  },
  {
    file: "app/best-portable-power-stations-uk/page.tsx",
    insertBefore:
      '<section className="mt-12">\n            <h2 className="text-3xl font-bold">Frequently asked questions</h2>',
    section: `
          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              Need portable power or roof solar?
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Portable power stations can be useful for backup, camping, and
              off-grid charging. If you own your home and want to reduce energy
              bills long term, also compare fixed roof solar using the SolarCal
              calculator and free guide.
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

          <section className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h2 className="text-3xl font-bold">
              Compare portable power partners
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Compare portable power stations, solar generator bundles, and
              portable solar options through SolarCal partner routes.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="/go/portable-power"
                className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                See portable power options
              </a>

              <a
                href="/go/allpowers"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                View ALLPOWERS products
              </a>
            </div>
          </section>

          <section className="mt-12 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <h2 className="text-2xl font-bold">Sources and further reading</h2>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              These links can help you understand solar panels, electrical
              safety, product comparison, and SolarCal’s methodology.
            </p>

            <ul className="mt-5 space-y-3 text-sm text-slate-300">
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
                  href="/best-solar-generators-uk"
                  className="text-emerald-300 hover:text-emerald-200"
                >
                  SolarCal: Solar generator guide
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
              <li>
                <a
                  href="/calculator-methodology"
                  className="text-emerald-300 hover:text-emerald-200"
                >
                  SolarCal calculator methodology
                </a>
              </li>
            </ul>
          </section>
`,
  },
  {
    file: "app/best-solar-generators-uk/page.tsx",
    insertBefore:
      '<section className="mt-12">\n            <h2 className="text-3xl font-bold">Frequently asked questions</h2>',
    section: `
          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              Need a solar generator or fixed roof solar?
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Solar generators can be useful for portable backup, camping, and
              off-grid power. If you own your home and want to reduce bills long
              term, also compare fixed roof solar using the SolarCal calculator
              and free guide.
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

          <section className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h2 className="text-3xl font-bold">
              Compare solar generator partners
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Compare solar generator options, portable power stations, and
              compatible portable solar products through SolarCal partner routes.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="/go/solar-generators"
                className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                See solar generator options
              </a>

              <a
                href="/go/allpowers"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                View ALLPOWERS products
              </a>
            </div>
          </section>

          <section className="mt-12 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <h2 className="text-2xl font-bold">Sources and further reading</h2>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              These links can help you understand portable solar, fixed roof
              solar, product comparison, and SolarCal’s methodology.
            </p>

            <ul className="mt-5 space-y-3 text-sm text-slate-300">
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
                  href="/best-portable-power-stations-uk"
                  className="text-emerald-300 hover:text-emerald-200"
                >
                  SolarCal: Portable power station guide
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
              <li>
                <a
                  href="/calculator-methodology"
                  className="text-emerald-300 hover:text-emerald-200"
                >
                  SolarCal calculator methodology
                </a>
              </li>
            </ul>
          </section>
`,
  },
];

function updateFile({ file, insertBefore, section }) {
  const fullPath = path.join(root, file);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`File not found: ${file}`);
  }

  let content = fs.readFileSync(fullPath, "utf8");

  if (
    content.includes("View the Buyer’s Pack") &&
    content.includes("Sources and further reading")
  ) {
    console.log(`Already updated: ${file}`);
    return;
  }

  if (!content.includes(insertBefore)) {
    throw new Error(`Could not find insertion point in: ${file}`);
  }

  content = content.replace(insertBefore, `${section}\n${insertBefore}`);

  fs.writeFileSync(fullPath, content, "utf8");
  console.log(`Updated: ${file}`);
}

for (const page of pages) {
  updateFile(page);
}

console.log("Done. Now run: npm run build");