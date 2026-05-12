import { affiliateTracker } from "@/lib/affiliateTracker";

export default function AffiliateTrackerPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <section className="mx-auto max-w-6xl">
        <a href="/" className="text-sm font-medium text-emerald-300 hover:text-emerald-200">
          ← Back to homepage
        </a>

        <h1 className="mt-8 text-4xl font-bold">Affiliate Tracker</h1>

        <p className="mt-4 max-w-3xl leading-7 text-slate-300">
          Internal reference page for tracking affiliate applications,
          placeholder links, target pages, and replacement priorities.
        </p>

        <div className="mt-10 grid gap-5">
          {affiliateTracker.map((item) => (
            <div
              key={`${item.partner}-${item.placeholderSlug}`}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div>
                  <p className="text-sm font-medium text-emerald-300">
                    {item.category}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold">{item.partner}</h2>
                  <p className="mt-2 text-slate-400">
                    Network: {item.network}
                  </p>
                </div>

                <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">
                  {item.status}
                </span>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold">Placeholder slug</h3>
                  <p className="mt-2 rounded-xl bg-slate-950 p-3 font-mono text-sm text-emerald-300">
                    /go/{item.placeholderSlug}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">Notes</h3>
                  <p className="mt-2 leading-7 text-slate-300">{item.notes}</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold">Target pages</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.targetPages.map((page) => (
                    <a
                      key={page}
                      href={page}
                      className="rounded-full bg-slate-950 px-4 py-2 text-sm text-slate-300 hover:text-emerald-300"
                    >
                      {page}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}