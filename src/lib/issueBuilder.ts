import type { ContributorIssue, ContributorIssueInput } from "@/types/issue";
import { formatSeverity, joinList } from "@/utils/formatting";

const labelByKind = {
  "security-review": "security",
  "test-readiness": "testing",
  documentation: "documentation",
  "audit-prep": "audit-readiness",
} as const;

export function buildContributorIssue(input: ContributorIssueInput): ContributorIssue {
  const labels = ["contributor-task", labelByKind[input.kind], `severity:${input.severity}`, "soroban"];
  const body = [
    "## Problem",
    input.context,
    "",
    "## Files to review",
    joinList(input.files),
    "",
    "## Expected outcome",
    `Prepare a ${formatSeverity(input.severity)} ${input.kind.replace("-", " ")} contribution that improves Soroban project readiness.`,
    "",
    "## Acceptance criteria",
    ...input.acceptanceCriteria.map((criterion) => `- [ ] ${criterion}`),
    "",
    "## Notes",
    "This task is scoped for contributor-driven readiness work and does not imply official affiliation with Stellar or Soroban.",
  ].join("\n");
  return { title: input.title, labels, body };
}

// TODO: Add GitHub issue import so maintainers can convert existing backlog items into readiness tasks.
