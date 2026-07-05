import type { RiskSignal } from "@/types/risk";
import { useRiskScore } from "@/hooks/useRiskScore";

interface Props { signals: RiskSignal[]; }

export function RiskScoreCard({ signals }: Props) {
  const riskScore = useRiskScore(signals);
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm" aria-label="Risk score">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-slate-950">Risk score</h2>
          <p className="mt-1 text-sm text-slate-600">A demo score based on detected readiness signals.</p>
        </div>
        <div className="text-right">
          <p className="text-4xl font-bold text-slate-950">{riskScore.score}</p>
          <p className="text-sm font-semibold capitalize text-emerald-700">{riskScore.level.replace("-", " ")}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-700">{riskScore.summary}</p>
      <div className="mt-5 h-3 rounded-full bg-slate-100">
        <div className="h-3 rounded-full bg-emerald-600" style={{ width: `${riskScore.score}%` }} />
      </div>
    </section>
  );
}
