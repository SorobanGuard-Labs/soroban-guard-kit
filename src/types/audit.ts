export type AuditStatus = "ready" | "partial" | "missing";

export interface AuditReadinessItem {
  id: string;
  title: string;
  description: string;
  status: AuditStatus;
  owner: "maintainer" | "security" | "contributors";
}

export interface AuditReadinessReport {
  readyCount: number;
  partialCount: number;
  missingCount: number;
  readinessPercent: number;
  items: AuditReadinessItem[];
}
