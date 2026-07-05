import type { RiskSeverity } from "./risk";

export type IssueKind = "security-review" | "test-readiness" | "documentation" | "audit-prep";

export interface ContributorIssueInput {
  title: string;
  kind: IssueKind;
  severity: RiskSeverity;
  context: string;
  files: string[];
  acceptanceCriteria: string[];
}

export interface ContributorIssue {
  title: string;
  labels: string[];
  body: string;
}
