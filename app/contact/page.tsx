import { LegalCard } from "@/components/SiteShell";

export default function ContactPage() {
  return (
    <LegalCard label="Contact" title="Contact SolarCal">
      <p>
        SolarCal is a UK-focused solar calculator and guide website. We help
        users estimate solar panel savings, installation costs, payback periods,
        battery benefits, EV charging relevance, and possible next steps.
      </p>

      <p>
        We do not install solar panels, provide formal quotes, arrange surveys
        directly, or manually close customers.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        What you can contact us about
      </h2>

      <ul className="list-disc space-y-3 pl-6">
        <li>Website feedback</li>
        <li>Corrections or updates to our content</li>
        <li>Affiliate or partnership enquiries</li>
        <li>Questions about how this website works</li>
        <li>Technical issues with the website or calculator</li>
      </ul>

      <h2 className="text-2xl font-semibold text-white">
        What we cannot help with directly
      </h2>

      <ul className="list-disc space-y-3 pl-6">
        <li>Providing formal solar installation quotes</li>
        <li>Arranging home surveys ourselves</li>
        <li>Giving personalised financial advice</li>
        <li>Handling installer or retailer customer service issues</li>
        <li>Guaranteeing savings, payback, or product performance</li>
      </ul>

      <h2 className="text-2xl font-semibold text-white">
        If you want solar installation pricing
      </h2>

      <p>
        Use the solar calculator first. If the estimate looks useful, compare
        quotes through the relevant partner links. Any quote partner, installer,
        or retailer you choose will handle their own survey, pricing, product
        advice, installation, warranties, and customer service.
      </p>

      <h2 className="text-2xl font-semibold text-white">Email</h2>

      <p>
        You can contact us at:
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
        If this email address has not been set up yet, it should be replaced
        with the preferred business email before wider launch.
      </p>
    </LegalCard>
  );
}