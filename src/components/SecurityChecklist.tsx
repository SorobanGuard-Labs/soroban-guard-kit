import type { RiskSignal } from "@/types/risk";
import { useSecurityChecklist } from "@/hooks/useSecurityChecklist";

interface Props { rules: RiskSignal[]; }

export function SecurityChecklist({ rules: initialRules }: Props) {
  const { rules, detectedCount, toggleRule } = useSecurityChecklist(initialRules);
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm" aria-label="Security checklist">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-slate-950">Security checklist</h2>
          <p className="mt-1 text-sm text-slate-600">Common Soroban project risks and review prompts.</p>
        </div>
        <span className="rounded-md bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">{detectedCount} active</span>
      </div>
      <ul className="mt-5 space-y-3">
        {rules.map((rule) => (
          <li key={rule.id} className="rounded-md border border-slate-200 p-4">
            <label className="flex cursor-pointer gap-3">
              <input className="mt-1 h-4 w-4 accent-emerald-600" type="checkbox" checked={rule.detected} onChange={() => toggleRule(rule.id)} />
              <span>
                <span className="block font-semibold text-slate-900">{rule.title}</span>
                <span className="mt-1 block text-sm leading-6 text-slate-600">{rule.description}</span>
                <span className="mt-2 block text-sm font-medium text-emerald-700">{rule.recommendation}</span>
              </span>
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
}
