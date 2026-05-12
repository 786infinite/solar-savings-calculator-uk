import { LegalCard } from "@/components/SiteShell";

export default function ContactPage() {
  return (
    <LegalCard label="Contact" title="Contact Solar Savings Calculator UK">
      <p>
        This website helps UK homeowners estimate solar panel savings,
        installation costs, battery benefits, EV charging potential, and possible
        next steps.
      </p>

      <p>
        We do not install solar panels, provide formal quotes, arrange surveys,
        or offer personalised financial advice directly.
      </p>

      <p>
        If you want real installation pricing, use the solar calculator and then
        compare quotes through the relevant partner links on the results page.
        Any installer, retailer, or quote partner you choose will handle their
        own pricing, survey, product advice, and customer service.
      </p>

      <h2 className="text-2xl font-semibold text-white">What you can contact us about</h2>

      <ul className="list-disc space-y-3 pl-6">
        <li>Website feedback</li>
        <li>Corrections or updates to our content</li>
        <li>Affiliate or partnership enquiries</li>
        <li>Questions about how this website works</li>
      </ul>

      <h2 className="text-2xl font-semibold text-white">Email</h2>

      <p>
        For now, contact us at:
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
        If this email address has not been set up yet, replace it later with
        your preferred business email or contact form.
      </p>
    </LegalCard>
  );
}