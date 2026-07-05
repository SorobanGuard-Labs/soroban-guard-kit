import type { RiskScore, RiskSignal } from "@/types/risk";

const severityWeights = {
  low: 5,
  medium: 10,
  high: 18,
  critical: 28,
} as const;

export function calculateRiskScore(signals: RiskSignal[]): RiskScore {
  const detectedSignals = signals.filter((signal) => signal.detected);
  const penalty = detectedSignals.reduce(
    (total, signal) => total + severityWeights[signal.severity],
    0,
  );
  const score = Math.max(0, Math.min(100, 100 - penalty));

  if (score >= 85) {
    return { score, level: "excellent", detectedSignals, summary: "Strong readiness posture with only minor follow-up items." };
  }

  if (score >= 70) {
    return { score, level: "healthy", detectedSignals, summary: "Good baseline, but several review items should be closed before audit scheduling." };
  }

  if (score >= 50) {
    return { score, level: "needs-work", detectedSignals, summary: "Meaningful readiness gaps remain across security, tests, or operations." };
  }

  return { score, level: "high-risk", detectedSignals, summary: "High-risk posture. Resolve critical findings before external review." };
}

// TODO: Integrate with Soroban Risk Indexer when repository-level telemetry is available.
