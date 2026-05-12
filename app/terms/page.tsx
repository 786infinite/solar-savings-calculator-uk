import type { Metadata } from "next";
import { LegalCard } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Terms of Use | SolarCal",
  description: "Read the SolarCal terms of use for calculator estimates, website content, affiliate links, third-party partners, disclaimers, and user responsibility.",
};


export default function TermsPage() {
  return (
    <LegalCard label="Legal" title="Terms of Use">
      <p>
        These terms explain how you may use SolarCal. By using this website, you
        agree to use it responsibly and understand that the information provided
        is for general guidance only.
      </p>

      <p>
        SolarCal is a UK-focused solar calculator, guide, and affiliate website.
        We help users estimate solar panel savings, installation costs, payback
        periods, battery benefits, EV charging relevance, and possible next
        steps.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        General information only
      </h2>

      <p>
        The content and calculator results on this website are provided for
        general information only. They are not financial advice, technical
        advice, installation advice, legal advice, a formal quotation, or a
        guarantee of savings.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        Calculator estimates
      </h2>

      <p>
        Solar calculator results are based on simplified assumptions. Final
        costs, savings, payback periods, export income, system suitability, and
        product performance depend on many factors.
      </p>

      <p>
        These factors may include property survey results, roof condition, roof
        direction, shading, location, electricity usage, tariff, export rate,
        installer pricing, product choice, and future energy prices.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        No guarantee
      </h2>

      <p>
        We do not guarantee that any specific solar installation, battery, EV
        charger, portable power station, solar generator, or home energy product
        will achieve a particular saving, return, payback period, or performance
        level.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        We do not install solar panels
      </h2>

      <p>
        SolarCal does not install solar panels, provide formal quotes, arrange
        surveys directly, or manually close customers.
      </p>

      <p>
        If you click a quote comparison link or partner link, the relevant
        partner, installer, retailer, or service provider is responsible for
        their own pricing, quotes, surveys, products, installation, warranties,
        customer support, and terms.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        Third-party links
      </h2>

      <p>
        This website may include links to third-party websites, affiliate
        partners, quote comparison services, retailers, installers, and product
        providers.
      </p>

      <p>
        We are not responsible for third-party websites, offers, prices,
        products, services, claims, warranties, privacy policies, or customer
        support.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        Affiliate income
      </h2>

      <p>
        We may earn commission, referral fees, or lead payments when users click
        certain links or complete qualifying actions with partners.
      </p>

      <p>
        You can read more on our affiliate disclosure page.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        User responsibility
      </h2>

      <p>
        Before buying solar panels, batteries, EV chargers, portable power
        stations, solar generators, or related products, you should compare
        providers, check installer credentials, review warranties, understand
        contract terms, and seek professional advice where needed.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        Website availability
      </h2>

      <p>
        We aim to keep the website available, but we do not guarantee that it
        will always be online, error-free, secure, or uninterrupted.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        Content updates
      </h2>

      <p>
        Solar costs, tariffs, product availability, export rates, grants,
        policies, and market conditions can change. We may update, edit, remove,
        or replace website content at any time.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        Acceptable use
      </h2>

      <p>
        You must not misuse the website, attempt to disrupt it, copy content at
        scale, interfere with analytics or tracking, or use the website for
        unlawful purposes.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        Changes to these terms
      </h2>

      <p>
        We may update these terms as the website develops, adds partners, adds
        new calculators, or changes how it operates.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        Contact
      </h2>

      <p>
        If you have questions about these terms, contact us at:
      </p>

      <p>
        <a
          href="mailto:hello@solarcal.co.uk"
          className="font-semibold text-emerald-300 hover:text-emerald-200"
        >
          hello@solarcal.co.uk
        </a>
      </p>

      <p className="text-sm text-slate-400">
        These are starter website terms and should be reviewed before adding
        lead capture forms, direct installer deals, advertising partners, or
        more advanced commercial features.
      </p>
    </LegalCard>
  );
}