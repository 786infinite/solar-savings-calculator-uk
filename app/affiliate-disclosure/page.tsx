import { LegalCard } from "@/components/SiteShell";

export default function AffiliateDisclosurePage() {
  return (
    <LegalCard label="Disclosure" title="Affiliate Disclosure">
      <p>
        SolarCal may earn commission, referral fees, or lead payments when you
        click certain links on this website and go on to request a quote, buy a
        product, or complete another qualifying action with one of our partners.
      </p>

      <p>
        This helps support the website and allows us to provide free calculators,
        guides, and comparison content.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        What are affiliate links?
      </h2>

      <p>
        Some links on this website may be affiliate links. This means that if you
        click a link and then complete a qualifying action, such as requesting a
        solar quote or buying a product, we may receive a commission or referral
        payment.
      </p>

      <p>
        Using an affiliate link does not usually cost you extra. The partner or
        retailer is responsible for their own prices, quotes, products, services,
        warranties, customer support, and terms.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        Solar quote partners
      </h2>

      <p>
        Some buttons may direct users to solar quote comparison partners,
        installer networks, or renewable energy lead partners. These partners may
        help users compare solar installation options.
      </p>

      <p>
        SolarCal does not install solar panels, arrange surveys directly, provide
        formal quotes, or manually close customers. If you choose to request a
        quote through a partner, that partner or installer will handle the quote,
        survey, product advice, installation, and customer service.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        Product recommendations
      </h2>

      <p>
        Product links may include solar batteries, EV chargers, portable power
        stations, solar generators, solar panel kits, energy monitors, smart
        thermostats, and related home energy products.
      </p>

      <p>
        We aim to make recommendations relevant and useful. Product mentions
        should not be treated as personalised advice or a guarantee that a
        product is suitable for your home.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        Calculator estimates
      </h2>

      <p>
        Calculator results are estimates only. They are designed to help you
        understand possible solar panel costs, savings, payback periods, battery
        benefits, EV charging benefits, and possible next steps.
      </p>

      <p>
        They are not formal quotes, guarantees, financial advice, technical
        advice, installation advice, or professional survey results.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        Final prices and savings
      </h2>

      <p>
        Final solar installation costs, savings, export income, payback period,
        and system suitability depend on your property, roof condition, location,
        shading, electricity usage, tariff, installer pricing, product choice,
        survey results, and future energy prices.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        Editorial independence
      </h2>

      <p>
        Affiliate relationships may influence which links or partners appear on
        the website, but our content should still be written to help users
        understand their options clearly.
      </p>

      <p>
        You should compare multiple providers, read independent reviews, check
        installer credentials, understand warranties, and make your own decision
        before buying a product or requesting an installation quote.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        Your choice
      </h2>

      <p>
        You are never required to use our affiliate links. You can visit
        providers directly, compare other companies, or seek independent
        professional advice before making a decision.
      </p>

      <p className="text-sm text-slate-400">
        This disclosure may be updated as SolarCal adds or changes affiliate,
        advertising, quote comparison, or lead-generation partners.
      </p>
    </LegalCard>
  );
}