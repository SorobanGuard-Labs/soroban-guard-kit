import type { AuditReadinessItem, AuditReadinessReport } from "@/types/audit";

export const auditReadinessItems: AuditReadinessItem[] = [
  {
    id: "threat-model",
    title: "Threat model",
    description: "Document trusted actors, assets, external calls, failure modes, and abuse cases.",
    status: "partial",
    owner: "security",
  },
  {
    id: "test-evidence",
    title: "Test evidence",
    description: "Collect unit, integration, negative, and regression coverage for contract flows.",
    status: "partial",
    owner: "maintainer",
  },
  {
    id: "issue-backlog",
    title: "Contributor-ready backlog",
    description: "Break readiness work into scoped issues with files, criteria, and expected outputs.",
    status: "ready",
    owner: "contributors",
  },
  {
    id: "operations-plan",
    title: "Operations plan",
    description: "Prepare deployment, upgrade, monitoring, incident response, and rollback notes.",
    status: "missing",
    owner: "maintainer",
  },
  {
    id: "docs-review",
    title: "Documentation review",
    description: "Confirm setup, architecture, security assumptions, and maintenance notes are current.",
    status: "ready",
    owner: "contributors",
  },
];

export function buildAuditReadinessReport(items: AuditReadinessItem[] = auditReadinessItems): AuditReadinessReport {
  const readyCount = items.filter((item) => item.status === "ready").length;
  const partialCount = items.filter((item) => item.status === "partial").length;
  const missingCount = items.filter((item) => item.status === "missing").length;
  const readinessPercent = items.length === 0 ? 0 : (readyCount / items.length) * 100;
  return { readyCount, partialCount, missingCount, readinessPercent, items };
}

// TODO: Add real repository scanning for docs, manifests, tests, CI, and Soroban contract metadata.
// TODO: Add saved checklists so maintainers can track readiness over time.
// TODO: Add audit report export for Markdown, JSON, and PDF handoff packages.
