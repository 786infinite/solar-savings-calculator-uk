const affiliateLinks: Record<
  string,
  {
    label: string;
    title: string;
    description: string;
    explanation: string;
    placeholderUrl: string;
    buttonText: string;
  }
> = {
  "solar-quotes": {
    label: "Solar quote partner",
    title: "Compare free solar quotes",
    description:
      "This page will later send visitors to an approved UK solar quote partner.",
    explanation:
      "For now, this is a placeholder while affiliate and lead-generation partners are being reviewed. Once approved, this page can redirect to a tracked solar quote partner link.",
    placeholderUrl: "/affiliate-disclosure",
    buttonText: "Continue",
  },
  "solar-battery": {
    label: "Battery partner",
    title: "Compare solar battery options",
    description:
      "This page will later send visitors to a solar battery quote, retailer, or affiliate partner.",
    explanation:
      "Battery recommendations should depend on household usage, solar generation, evening electricity demand, tariff, and product compatibility.",
    placeholderUrl: "/affiliate-disclosure",
    buttonText: "Continue",
  },
  "ev-charger": {
    label: "EV charger partner",
    title: "See recommended EV chargers",
    description:
      "This page will later send visitors to an EV charger retailer, installer, or affiliate partner.",
    explanation:
      "EV charger recommendations should consider smart charging, solar compatibility, tethered or untethered design, installation cost, and vehicle needs.",
    placeholderUrl: "/affiliate-disclosure",
    buttonText: "Continue",
  },
  "portable-power": {
    label: "Portable power partner",
    title: "See portable power stations",
    description:
      "This page will later send visitors to portable power station, solar generator, or product affiliate partners.",
    explanation:
      "Portable power products may suit backup power, camping, garden offices, off-grid use, or people who are not ready for a full roof solar installation.",
    placeholderUrl: "/affiliate-disclosure",
    buttonText: "Continue",
  },
};

export default async function GoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const link = affiliateLinks[slug];

  if (!link) {
    return (
      <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
        <section className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8">
          <a href="/" className="text-emerald-300 hover:text-emerald-200">
            ← Back to homepage
          </a>

          <p className="mt-8 inline-flex rounded-full border border-red-400/30 bg-red-400/10 px-4 py-2 text-sm font-medium text-red-300">
            Link not found
          </p>

          <h1 className="mt-6 text-4xl font-bold">Affiliate link not found</h1>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            This partner link has not been set up yet.
          </p>

          <a
            href="/"
            className="mt-8 inline-flex rounded-xl bg-emerald-400 px-6 py-4 font-semibold text-slate-950 hover:bg-emerald-300"
          >
            Return to homepage
          </a>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <section className="mx-auto max-w-4xl">
        <a href="/" className="text-emerald-300 hover:text-emerald-200">
          ← Back to homepage
        </a>

        <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
          <div className="border-b border-white/10 bg-emerald-400/10 p-8">
            <p className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
              {link.label}
            </p>

            <h1 className="mt-6 text-4xl font-bold">{link.title}</h1>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              {link.description}
            </p>
          </div>

          <div className="p-8">
            <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h2 className="text-2xl font-semibold">
                  Placeholder partner page
                </h2>

                <p className="mt-4 leading-7 text-slate-300">
                  {link.explanation}
                </p>

                <p className="mt-4 leading-7 text-slate-300">
                  This website does not install solar panels, provide formal
                  quotes, arrange surveys, or manually close customers. Any final
                  quote, installation, product sale, or customer service will be
                  handled by the selected partner.
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-400">
                  Once affiliate approval is complete, this page can be updated
                  with the real tracking link.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
                <h2 className="text-xl font-semibold">Before you continue</h2>

                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                  <li>• Results and recommendations are estimates only</li>
                  <li>• Final prices depend on partner quotes and surveys</li>
                  <li>• Some links may earn commission or lead revenue</li>
                </ul>

                <a
                  href={link.placeholderUrl}
                  className="mt-6 inline-flex w-full justify-center rounded-xl bg-emerald-400 px-6 py-4 font-semibold text-slate-950 hover:bg-emerald-300"
                >
                  {link.buttonText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}