import { LegalCard } from "@/components/SiteShell";

export default function CookiePolicyPage() {
  return (
    <LegalCard label="Legal" title="Cookie Policy">
      <p>
        This cookie policy explains how SolarCal may use cookies and similar
        technologies when you visit this website.
      </p>

      <p>
        Cookies are small files stored on your device by your browser. They can
        help websites work properly, remember choices, measure performance, and
        understand how visitors use the site.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        How SolarCal uses cookies
      </h2>

      <p>
        SolarCal may use cookies and similar technologies for website
        functionality, analytics, performance measurement, affiliate tracking,
        and improving the solar calculator experience.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        Essential cookies
      </h2>

      <p>
        Essential cookies help the website function properly. These may be used
        for basic site operation, security, and remembering simple choices such
        as whether you have dismissed the cookie notice.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        Analytics cookies
      </h2>

      <p>
        We may use analytics tools such as Google Analytics to understand how
        people use the website. Analytics may measure page views, calculator
        completions, quote button clicks, affiliate clicks, traffic sources,
        device types, and general visitor behaviour.
      </p>

      <p>
        This helps us understand which pages are useful, improve the calculator,
        and decide what content to create next.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        Affiliate tracking
      </h2>

      <p>
        Some links on this website may be affiliate or partner links. When you
        click one of these links, a partner website or affiliate network may use
        cookies, tracking IDs, or similar technologies to record that you came
        from SolarCal.
      </p>

      <p>
        This may allow SolarCal to earn commission, referral fees, or lead
        payments if you complete a qualifying action.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        Cookie notice choice
      </h2>

      <p>
        The website may store a simple local browser choice when you accept,
        dismiss, or interact with the cookie notice. This prevents the notice
        from showing repeatedly on every page.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        Third-party cookies
      </h2>

      <p>
        Third-party services such as Google Analytics, affiliate networks,
        product retailers, quote partners, and hosting or performance tools may
        set or read cookies according to their own policies.
      </p>

      <p>
        SolarCal does not control every cookie or tracking technology used by
        third-party websites after you leave this site.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        Managing cookies
      </h2>

      <p>
        You can manage or delete cookies through your browser settings. Most
        browsers let you block cookies, delete cookies, or receive warnings
        before cookies are stored.
      </p>

      <p>
        Blocking some cookies may affect how parts of the website work, including
        analytics, affiliate tracking, and saved cookie notice choices.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        Current cookie notice
      </h2>

      <p>
        SolarCal currently uses a simple cookie notice to explain that cookies
        and analytics may be used. As the website grows, this may be replaced
        with a more advanced consent management tool if needed.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        Updates to this policy
      </h2>

      <p>
        This cookie policy may be updated as SolarCal adds new analytics tools,
        advertising partners, affiliate programmes, quote partners, or website
        features.
      </p>

      <h2 className="text-2xl font-semibold text-white">
        Contact
      </h2>

      <p>
        If you have questions about this cookie policy, contact us at:
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
        This is a starter cookie policy and should be reviewed before adding
        advertising cookies, advanced remarketing, email marketing, or additional
        third-party tracking tools.
      </p>
    </LegalCard>
  );
}