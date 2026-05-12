const affiliateLinks: Record<
  string,
  {
    title: string;
    description: string;
    placeholderUrl: string;
  }
> = {
  "solar-quotes": {
    title: "Compare free solar quotes",
    description:
      "This will later redirect to your approved UK solar quote affiliate partner.",
    placeholderUrl: "/affiliate-disclosure",
  },
  "solar-battery": {
    title: "Compare solar battery options",
    description:
      "This will later redirect to a solar battery affiliate or quote partner.",
    placeholderUrl: "/affiliate-disclosure",
  },
  "ev-charger": {
    title: "See recommended EV chargers",
    description: "This will later redirect to an EV charger affiliate partner.",
    placeholderUrl: "/affiliate-disclosure",
  },
  "portable-power": {
    title: "See portable power stations",
    description:
      "This will later redirect to an EcoFlow, Jackery, Renogy, or Amazon affiliate link.",
    placeholderUrl: "/affiliate-disclosure",
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
        <section className="mx-auto max-w-3xl">
          <a href="/" className="text-emerald-300 hover:text-emerald-200">
            ← Back to homepage
          </a>

          <h1 className="mt-8 text-4xl font-bold">Link not found</h1>

          <p className="mt-4 text-slate-300">
            This affiliate link has not been set up yet.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <section className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8">
        <a href="/" className="text-emerald-300 hover:text-emerald-200">
          ← Back to homepage
        </a>

        <p className="mt-8 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
          Affiliate placeholder
        </p>

        <h1 className="mt-6 text-4xl font-bold">{link.title}</h1>

        <p className="mt-4 text-lg leading-8 text-slate-300">
          {link.description}
        </p>

        <p className="mt-6 text-slate-400">
          For now, this button goes to your affiliate disclosure page. Once you
          are approved by an affiliate partner, we will replace this with your
          real tracking link.
        </p>

        <a
          href={link.placeholderUrl}
          className="mt-8 inline-flex rounded-xl bg-emerald-400 px-6 py-4 font-semibold text-slate-950 hover:bg-emerald-300"
        >
          Continue
        </a>
      </section>
    </main>
  );
}