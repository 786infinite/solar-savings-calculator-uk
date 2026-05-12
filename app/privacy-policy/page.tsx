import type { Metadata } from "next";
import { LegalCard } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Privacy Policy | SolarCal",
  description: "Read the SolarCal privacy policy covering analytics, calculator interactions, affiliate links, cookies, third-party partners, and website data use.",
};


export default function PrivacyPolicyPage() {
  return (
    <LegalCard label="Legal" title="Privacy Policy">
      <p>
        This privacy policy explains how SolarCal may collect, use, and protect
        information when you use this website.
      </p>

      <p>
        SolarCal is a UK-focused solar calculator and information website. It
        provides general estimates, guides, affiliate links, and partner links.
        We do not install solar panels, provide formal quotes directly, or
        arrange surveys ourselves.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        Information we may collect
      </h2>

      <p>
        We may collect basic website usage information, such as pages viewed,
        calculator interactions, button clicks, affiliate link clicks, device
        type, browser type, approximate location, and traffic source.
      </p>

      <p>
        If forms are added in the future, we may collect information you choose
        to submit, such as your name, email address, phone number, postcode,
        property details, and installation preferences.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        Calculator information
      </h2>

      <p>
        The solar calculator may process information such as monthly electricity
        bill, home size, region, roof direction, shading, daytime usage, battery
        interest, EV ownership, and installation timeframe.
      </p>

      <p>
        This information is used to create an estimate and may also be used in
        anonymous analytics events to understand how visitors use the calculator.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        How we use information
      </h2>

      <p>
        We use information to operate the website, improve calculator results,
        understand which pages and buttons are useful, track affiliate clicks,
        measure website performance, and improve content.
      </p>

      <p>
        If lead forms are added later, submitted information may be used to
        connect users with relevant solar, battery, EV charger, or home energy
        partners.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        Analytics and tracking
      </h2>

      <p>
        This website may use analytics tools such as Google Analytics to measure
        website visits, page views, calculator completions, quote button clicks,
        affiliate clicks, and other interactions.
      </p>

      <p>
        Analytics tools may use cookies, device identifiers, or similar
        technologies. You can usually control cookies through your browser
        settings.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        Affiliate links and partner websites
      </h2>

      <p>
        Some links on this website may be affiliate links or partner links. If
        you click one of these links, the partner website may receive tracking
        information showing that you came from SolarCal.
      </p>

      <p>
        Partner websites are responsible for their own privacy policies, cookie
        policies, quote processes, products, services, and customer support.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        Cookies
      </h2>

      <p>
        We may use cookies or similar technologies for analytics, site
        functionality, affiliate tracking, and performance measurement.
      </p>

      <p>
        You can read more on our cookie policy page.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        Third-party services
      </h2>

      <p>
        This website may use third-party services such as Google Analytics,
        Vercel hosting, affiliate networks, quote partners, product retailers,
        and other tools needed to operate and monetise the site.
      </p>

      <p>
        These third parties may process information according to their own
        policies and terms.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        Data security
      </h2>

      <p>
        We take reasonable steps to keep the website secure. However, no website
        or internet transmission can be guaranteed to be completely secure.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        Your rights
      </h2>

      <p>
        Depending on applicable law, you may have rights to access, correct, or
        request deletion of personal information held about you. If contact forms
        or lead forms are added later, this section should be reviewed and
        expanded.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        Contact
      </h2>

      <p>
        If you have questions about this privacy policy, contact us at:
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
        This is a starter privacy policy and should be reviewed before adding
        lead capture forms, email marketing, advertising cookies, or advanced
        third-party tracking tools.
      </p>
    </LegalCard>
  );
}