import { ClipboardCheck, FlaskConical, GitPullRequest } from "lucide-react";

export function TestReadinessPanel() {
  const items = [
    { icon: FlaskConical, title: "Contract behavior", text: "Positive, negative, boundary, and repeated-call cases for core Soroban flows." },
    { icon: ClipboardCheck, title: "Evidence package", text: "Coverage notes, command output, fixtures, and unresolved assumptions for auditors." },
    { icon: GitPullRequest, title: "Contributor scope", text: "Small issues with explicit files, expected behavior, and review criteria." },
  ];
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm" aria-label="Test readiness">
      <h2 className="text-xl font-semibold text-slate-950">Test readiness</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-md border border-slate-200 p-4">
            <Icon className="h-5 w-5 text-emerald-600" aria-hidden="true" />
            <p className="mt-3 font-semibold text-slate-900">{title}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
