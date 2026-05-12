import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <section className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8">
        <p className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
          Page not found
        </p>

        <h1 className="mt-6 text-4xl font-bold">This page does not exist</h1>

        <p className="mt-4 text-lg leading-8 text-slate-300">
          The page may have moved, the link may be wrong, or the content may not
          exist yet.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-emerald-300"
          >
            Go to homepage
          </Link>

          <Link
            href="/solar-savings-calculator"
            className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
          >
            Use solar calculator
          </Link>
        </div>
      </section>
    </main>
  );
}
