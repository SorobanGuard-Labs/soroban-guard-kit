import { formatPercent } from "@/utils/formatting";
import type { AuditReadinessItem } from "@/types/audit";
import { useAuditReadiness } from "@/hooks/useAuditReadiness";

interface Props { items: AuditReadinessItem[]; }

export function AuditReadinessDashboard({ items }: Props) {
  const report = useAuditReadiness(items);
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm" aria-label="Audit readiness dashboard">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-950">Audit readiness</h2>
          <p className="mt-1 text-sm text-slate-600">Track the evidence maintainers need before an external review.</p>
        </div>
        <div className="text-3xl font-bold text-emerald-700">{formatPercent(report.readinessPercent)}</div>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <div className="rounded-md bg-emerald-50 p-3"><p className="text-sm text-slate-600">Ready</p><p className="text-2xl font-bold text-emerald-700">{report.readyCount}</p></div>
        <div className="rounded-md bg-amber-50 p-3"><p className="text-sm text-slate-600">Partial</p><p className="text-2xl font-bold text-amber-700">{report.partialCount}</p></div>
        <div className="rounded-md bg-rose-50 p-3"><p className="text-sm text-slate-600">Missing</p><p className="text-2xl font-bold text-rose-700">{report.missingCount}</p></div>
      </div>
      <ul className="mt-5 space-y-3">
        {report.items.map((item) => (
          <li key={item.id} className="rounded-md border border-slate-200 p-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-semibold text-slate-900">{item.title}</p>
              <span className="text-sm font-medium capitalize text-slate-600">{item.status} - {item.owner}</span>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
