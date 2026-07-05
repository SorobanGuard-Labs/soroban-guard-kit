import type { ContributorIssueInput } from "@/types/issue";
import { auditReadinessItems } from "@/lib/auditReadiness";
import { securityRules } from "@/lib/securityRules";

export const sampleIssueInput: ContributorIssueInput = {
  title: "Review Soroban authorization and negative test coverage",
  kind: "security-review",
  severity: "high",
  context: "The repository should confirm that privileged Soroban contract paths reject unauthorized callers and invalid state transitions.",
  files: ["contracts/*/src", "tests", "docs/audit-readiness.md"],
  acceptanceCriteria: [
    "List privileged entrypoints and expected callers",
    "Add or identify negative tests for unauthorized access",
    "Document any unresolved assumptions for maintainer review",
  ],
};

export const demoData = { auditReadinessItems, securityRules, sampleIssueInput };
