import Link from "next/link";
import { Layout } from "@/components/Layout";

const docs = [
  ["Getting started", "/docs/getting-started.md", "Install, run demo mode, and understand the first maintainer workflow."],
  ["Audit readiness", "/docs/audit-readiness.md", "Prepare threat models, test evidence, operational notes, and review handoff."],
  ["Risk checklists", "/docs/risk-checklists.md", "Use Soroban-specific prompts for authorization, storage, dependencies, and testing."],
  ["Contributor guide", "/docs/contributor-guide.md", "Scope issues so contributors can produce reviewable security and testing improvements."],
  ["Roadmap", "/docs/roadmap.md", "See the path toward scanning, imports, saved checklists, exports, and indexer integrations."],
];

export default function DocsPage() {
  return (
    <Layout title="Docs | Soroban Guard Kit">
      <section className="mx-auto max-w-6xl px-5 py-12">
        <h1 className="text-4xl font-bold text-slate-950">Documentation</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
          Practical maintainer docs live in the repository and mirror the workflows exposed in the toolkit UI.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {docs.map(([title, href, description]) => (
            <article key={title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-950">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              <Link className="mt-4 inline-flex text-sm font-semibold text-emerald-700" href={href}>Open file</Link>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
