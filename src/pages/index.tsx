import { BookOpenCheck, FileCheck2, ListChecks, ShieldAlert } from "lucide-react";
import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";
import { Layout } from "@/components/Layout";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-950">Built for maintainers who need evidence, not ceremony.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Soroban Guard Kit turns audit preparation into practical checklists, risk signals, and contributor-ready issues. It is designed for demo mode today and real repository scanning later.
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard icon={ShieldAlert} title="Security review" description="Review authorization, storage, dependency, and operational assumptions for Soroban contracts." />
          <FeatureCard icon={ListChecks} title="Readiness workflow" description="Track audit, documentation, test, and production discussion readiness in one place." />
          <FeatureCard icon={FileCheck2} title="Issue-based programs" description="Generate well-scoped tasks with labels, files, acceptance criteria, and contributor context." />
          <FeatureCard icon={BookOpenCheck} title="Practical docs" description="Use templates and guides that explain how maintainers should apply the toolkit." />
        </div>
      </section>
    </Layout>
  );
}
