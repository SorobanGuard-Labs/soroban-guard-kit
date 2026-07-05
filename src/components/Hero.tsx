import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-[linear-gradient(135deg,#f8fafc_0%,#ecfeff_45%,#f0fdf4_100%)]">
      <div className="mx-auto grid min-h-[640px] max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-emerald-700">SorobanGuard Labs</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-slate-950 md:text-6xl">Soroban Guard Kit</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            An open-source security and readiness toolkit for Stellar and Soroban maintainers preparing repositories for audits, contributor programs, documentation review, and production-readiness discussions.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/toolkit" className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 px-5 py-3 font-semibold text-white shadow-sm hover:bg-emerald-700">
              Open toolkit <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/docs" className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 hover:border-emerald-500">
              Read docs
            </Link>
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-xl">
          <div className="grid gap-4">
            {["Risk score from 0 to 100", "Security checklist for Soroban projects", "Contributor-ready issue generator", "Audit and test readiness panels"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-md border border-slate-200 p-4">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                <span className="font-medium text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
