import { AuditReadinessDashboard } from "@/components/AuditReadinessDashboard";
import { IssueGenerator } from "@/components/IssueGenerator";
import { Layout } from "@/components/Layout";
import { RiskScoreCard } from "@/components/RiskScoreCard";
import { SecurityChecklist } from "@/components/SecurityChecklist";
import { TestReadinessPanel } from "@/components/TestReadinessPanel";
import { DEMO_MODE } from "@/utils/constants";
import { demoData } from "@/utils/sampleData";

export default function ToolkitPage() {
  return (
    <Layout title="Toolkit | Soroban Guard Kit">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">{DEMO_MODE ? "Demo mode" : "Repository mode"}</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-950">Readiness toolkit</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
            Review audit readiness, security risk signals, contributor issue quality, and test readiness for Soroban repositories.
          </p>
        </div>
      </section>
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <AuditReadinessDashboard items={demoData.auditReadinessItems} />
          <RiskScoreCard signals={demoData.securityRules} />
        </div>
        <SecurityChecklist rules={demoData.securityRules} />
        <IssueGenerator input={demoData.sampleIssueInput} />
        <TestReadinessPanel />
      </div>
    </Layout>
  );
}
