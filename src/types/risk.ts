export type RiskSeverity = "low" | "medium" | "high" | "critical";

export type RiskCategory =
  | "authorization"
  | "storage"
  | "testing"
  | "operations"
  | "documentation"
  | "dependencies";

export interface RiskSignal {
  id: string;
  category: RiskCategory;
  title: string;
  description: string;
  severity: RiskSeverity;
  detected: boolean;
  recommendation: string;
}

export interface RiskScore {
  score: number;
  level: "excellent" | "healthy" | "needs-work" | "high-risk";
  detectedSignals: RiskSignal[];
  summary: string;
}
