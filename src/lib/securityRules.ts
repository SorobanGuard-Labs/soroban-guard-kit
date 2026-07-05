import type { RiskSignal } from "@/types/risk";

export const securityRules: RiskSignal[] = [
  {
    id: "auth-boundaries",
    category: "authorization",
    title: "Authorization boundaries are documented",
    description: "Privileged functions should clearly identify callers, roles, and signer expectations.",
    severity: "critical",
    detected: true,
    recommendation: "Document every admin, upgrade, and emergency path before audit review.",
  },
  {
    id: "storage-invariants",
    category: "storage",
    title: "Storage invariants need review",
    description: "Persistent keys, TTL assumptions, and migration behavior should be explicit.",
    severity: "high",
    detected: true,
    recommendation: "Add a storage map and invariant checklist for contract state transitions.",
  },
  {
    id: "negative-tests",
    category: "testing",
    title: "Negative tests are incomplete",
    description: "Security-sensitive failure paths need coverage alongside happy-path flows.",
    severity: "high",
    detected: true,
    recommendation: "Add unauthorized caller, invalid input, overflow, and repeated-call tests.",
  },
  {
    id: "dependency-policy",
    category: "dependencies",
    title: "Dependency policy is visible",
    description: "Pinned dependencies and review expectations reduce supply-chain ambiguity.",
    severity: "medium",
    detected: false,
    recommendation: "Keep lockfiles committed and document dependency update review rules.",
  },
  {
    id: "runbook",
    category: "operations",
    title: "Production runbook is missing",
    description: "Deployment, rollback, monitoring, and incident steps should be available to maintainers.",
    severity: "medium",
    detected: true,
    recommendation: "Create an operations runbook before mainnet or production discussions.",
  },
  {
    id: "docs-review",
    category: "documentation",
    title: "Contributor documentation is present",
    description: "Issue-based contribution programs need clear setup, scope, and acceptance criteria.",
    severity: "low",
    detected: false,
    recommendation: "Keep contributor tasks small, testable, and tied to repository readiness.",
  },
];

// TODO: Add security rule presets for DeFi, identity, payments, oracle, and DAO-style Soroban projects.
