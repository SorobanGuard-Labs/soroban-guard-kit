import { useMemo } from "react";
import { calculateRiskScore } from "@/lib/riskScoring";
import type { RiskSignal } from "@/types/risk";

export function useRiskScore(signals: RiskSignal[]) {
  return useMemo(() => calculateRiskScore(signals), [signals]);
}
