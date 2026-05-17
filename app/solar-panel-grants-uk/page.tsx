import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import FaqSchema from "@/components/FaqSchema";

export const metadata: Metadata = {
  title: "Solar Panel Grants UK",
  description:
    "Learn about UK solar panel grants, ECO4, 0% VAT, Smart Export Guarantee payments, local funding, and what support may be available for solar panels.",
};

const supportOptions = [
  {
    name: "ECO4",
    type: "Energy efficiency support scheme",
    whoItMayHelp:
      "Some lower-income households, homes with lower energy efficiency, or eligible households through supplier/local authority routes.",
    importantNote:
      "Not everyone qualifies, and solar panels may be part of a wider package depending on eligibility and property assessment.",
  },
  {
    name: "0% VAT on qualifying installations",
    type: "Tax relief",
    whoItMayHelp:
      "Many households installing qualifying energy-saving materials through an installer.",
    importantNote:
      "This is not a grant, but it can reduce the VAT charged on qualifying installations.",
  },
  {
    name: "Smart Export Guarantee",
    type: "Export payment scheme",
    whoItMayHelp:
      "Solar owners who export unused electricity back to the grid through an eligible supplier tariff.",
    importantNote:
      "This is not upfront funding. It pays for exported electricity after the system is installed.",
  },
  {
    name: "Local council or supplier schemes",
    type: "Local or supplier support",
    whoItMayHelp:
      "Some households depending on postcode, income, benefits, property type, and local availability.",
    importantNote:
      "Availability changes, so check your local council and energy supplier before deciding.",
  },
];

const checklistItems = [
  "Check whether you are eligible for ECO4 or local authority flexible eligibility.",
  "Ask your council if any local home energy funding is available.",
  "Ask your energy supplier if they offer solar or energy efficiency support.",
  "Check whether your installer is applying the correct VAT treatment.",
  "Compare solar-only and solar-plus-battery quotes before buying.",
  "Check whether the quote includes MCS certification and DNO notification.",
  "Compare Smart Export Guarantee tariffs for exported electricity.",
  "Do not assume a solar advert is a government grant unless the scheme is clearly named.",
];

const grantMyths = [
  {
    myth: "Everyone can get free solar panels from the government.",
    reality:
      "There is no universal UK Government solar panel grant for every homeowner. Some households may qualify for support through specific schemes, but eligibility is limited.",
  },
  {
    myth: "SEG is a solar grant.",
    reality:
      "The Smart Export Guarantee is not an upfront grant. It is a payment for eligible exported electricity after your system is installed.",
  },
  {
    myth: "0% VAT means the solar system is free.",
    reality:
      "0% VAT can reduce the tax charged on qualifying installations, but you still pay the installation cost.",
  },
  {
    myth: "Any installer can guarantee grant funding.",
    reality:
      "Funding depends on scheme rules, household eligibility, property assessment, and whether the installer or supplier is approved for the scheme.",
  },
];

const faqs = [
  {
    question: "Are there solar panel grants in the UK?",
    answer:
      "There is no universal UK Government solar panel grant for every household. Some people may be able to access support through ECO4, local authority routes, supplier schemes, or other energy efficiency funding depending on eligibility.",
  },
  {
    question: "Can I get free solar panels in the UK?",
    answer:
      "Some eligible households may receive funded or partly funded energy efficiency improvements through specific schemes, but free solar panels are not available to everyone. Always check the scheme name, eligibility rules, and installer details.",
  },
  {
    question: "Does ECO4 cover solar panels?",
    answer:
      "ECO4 can support energy efficiency measures for eligible households, and solar PV may be included in some cases depending on the property, assessment, and scheme route. Eligibility is not automatic.",
  },
  {
    question: "Is 0% VAT the same as a solar grant?",
    answer:
      "No. 0% VAT is tax relief on qualifying installations, not a grant. It can reduce the VAT charged but does not cover the whole installation cost.",
  },
  {
    question: "Is the Smart Export Guarantee a solar grant?",
    answer:
      "No. The Smart Export Guarantee pays eligible generators for electricity exported back to the grid. It is not upfront funding for buying solar panels.",
  },
  {
    question: "What should I do before applying for solar funding?",
    answer:
      "Check your eligibility, speak to your council or energy supplier, compare quotes, confirm installer credentials, and use a calculator to estimate savings before deciding.",
  },
];

export default function SolarPanelGrantsUKPage() {
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
              UK solar funding guide
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
              Solar Panel Grants UK
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              If you are looking for help with the cost of solar panels, it is
              important to understand the difference between grants, tax relief,
              export payments, and local funding. Some support may be available,
              but there is no universal solar panel grant for every UK
              homeowner.
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
              There is not currently a dedicated UK Government solar panel grant
              that every homeowner can claim. However, some households may be
              able to get help through ECO4, local authority schemes, supplier
              support, or wider home energy efficiency funding.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              You may also benefit from 0% VAT on qualifying solar installations
              and Smart Export Guarantee payments for exported electricity, but
              these are not the same as an upfront grant.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              Main types of solar support to check
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Solar funding can be confusing because different schemes work in
              different ways. Some reduce upfront cost, some reduce tax, and
              some pay you later for exported electricity.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-white/10 text-slate-200">
                  <tr>
                    <th className="p-4 font-semibold">Support option</th>
                    <th className="p-4 font-semibold">Type</th>
                    <th className="p-4 font-semibold">Who it may help</th>
                    <th className="p-4 font-semibold">Important note</th>
                  </tr>
                </thead>
                <tbody>
                  {supportOptions.map((option) => (
                    <tr key={option.name} className="border-t border-white/10">
                      <td className="p-4 font-medium text-white">
                        {option.name}
                      </td>
                      <td className="p-4 text-emerald-300">{option.type}</td>
                      <td className="p-4 text-slate-300">
                        {option.whoItMayHelp}
                      </td>
                      <td className="p-4 text-slate-300">
                        {option.importantNote}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">ECO4 and solar panels</h2>

              <p className="mt-4 leading-7 text-slate-300">
                ECO4 is an energy efficiency scheme aimed at improving eligible
                homes. It is not a simple solar discount for everyone. Whether
                solar panels are included depends on eligibility, the property,
                the scheme route, and the assessment.
              </p>

              <p className="mt-4 leading-7 text-slate-300">
                If you think you may qualify, check with your energy supplier,
                local council, or a properly accredited provider before relying
                on any claim made in an advert.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">
                0% VAT on qualifying installations
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                0% VAT can reduce the cost of qualifying energy-saving material
                installations, including solar panels in the right
                circumstances. This is useful support, but it is not the same as
                a grant because it does not pay for the full installation.
              </p>

              <p className="mt-4 leading-7 text-slate-300">
                Ask your installer to confirm how VAT is being treated on your
                quote and whether all parts of the installation qualify.
              </p>
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              Smart Export Guarantee payments
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              The Smart Export Guarantee can pay you for electricity your solar
              panels export back to the grid. It is useful when comparing solar
              savings, but it should not be confused with a grant because it
              does not pay your upfront installation cost.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              Export rates vary by supplier and tariff. Your total solar benefit
              usually depends on both bill savings from using your own solar
              electricity and export payments for surplus electricity.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="/solar-savings-calculator"
                className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Estimate solar savings
              </a>

              <a
                href="/calculator-methodology"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                View calculator methodology
              </a>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              Common solar grant myths
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Be careful with adverts that make solar funding sound guaranteed.
              Always check the exact scheme, eligibility rules, installer
              details, and whether you are signing up for a finance agreement.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {grantMyths.map((item) => (
                <div
                  key={item.myth}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <h3 className="text-lg font-semibold">{item.myth}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {item.reality}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              What to check before applying for funding
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Before you apply for a scheme or accept a solar quote, check the
              funding route carefully. A good installer or provider should be
              able to explain the scheme, eligibility, products, warranties, and
              what you will still need to pay.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {checklistItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-950 p-5"
                >
                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h2 className="text-3xl font-bold">
              Estimate your solar savings before applying
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Even if you qualify for support, you should still understand the
              likely system size, yearly savings, payback range, export income,
              and whether a battery or EV charger could make sense.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="/solar-savings-calculator"
                className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Use the solar calculator
              </a>

              <a
                href="/free-solar-guide"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Download the free guide
              </a>
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-bold">
              Planning to buy solar soon?
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              The free SolarCal guide helps you understand savings, quote
              comparison, payback periods, battery storage, EV charging, and
              common buying mistakes. If you want a more detailed checklist
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
            <h2 className="text-2xl font-bold">Sources and further reading</h2>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              These official sources can help you check current UK solar
              funding, VAT, export payments, and scheme rules before making a
              buying decision.
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
                  href="https://www.ofgem.gov.uk/environmental-and-social-schemes/energy-company-obligation-eco"
                  className="text-emerald-300 hover:text-emerald-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ofgem: Energy Company Obligation
                </a>
              </li>
              <li>
                <a
                  href="https://www.gov.uk/guidance/vat-on-energy-saving-materials-and-heating-equipment-notice-7086"
                  className="text-emerald-300 hover:text-emerald-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  GOV.UK: VAT on energy-saving materials
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

          <section className="mt-12 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <h2 className="text-2xl font-bold">Important note</h2>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              This page is for general information only. Solar panel grants,
              ECO4 eligibility, VAT treatment, export payments, and local
              funding can change. Always check current scheme rules with the
              official provider, your council, your energy supplier, or a
              qualified installer before making a decision.
            </p>
          </section>
        </article>
      </main>
    </SiteShell>
  );
}