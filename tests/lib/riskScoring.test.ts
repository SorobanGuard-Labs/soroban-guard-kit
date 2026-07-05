import { calculateRiskScore } from "@/lib/riskScoring";
import type { RiskSignal } from "@/types/risk";

const baseSignal: RiskSignal = {
  id: "test",
  category: "testing",
  title: "Test signal",
  description: "A test signal",
  severity: "high",
  detected: false,
  recommendation: "Fix it",
};

describe("calculateRiskScore", () => {
  it("returns 100 when no risks are detected", () => {
    const result = calculateRiskScore([baseSignal]);
    expect(result.score).toBe(100);
    expect(result.level).toBe("excellent");
  });

  it("deducts weighted penalties for detected severities", () => {
    const result = calculateRiskScore([
      { ...baseSignal, id: "critical", severity: "critical", detected: true },
      { ...baseSignal, id: "medium", severity: "medium", detected: true },
    ]);
    expect(result.score).toBe(62);
    expect(result.level).toBe("needs-work");
    expect(result.detectedSignals).toHaveLength(2);
  });

  it("never drops below zero", () => {
    const signals = Array.from({ length: 6 }, (_, index) => ({
      ...baseSignal,
      id: `critical-${index}`,
      severity: "critical" as const,
      detected: true,
    }));
    expect(calculateRiskScore(signals).score).toBe(0);
  });
});
