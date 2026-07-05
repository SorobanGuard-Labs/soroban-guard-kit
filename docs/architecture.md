# Architecture

Soroban Guard Kit is a modular Next.js Pages Router app. The UI reads typed demo data from `src/utils/sampleData.ts`, renders workflow-focused components, and delegates calculations to pure library functions.

## Layers

- `src/pages`: route entry points for the landing page, toolkit, and docs index.
- `src/components`: reusable UI panels for readiness, risk, checklist, issue generation, and tests.
- `src/hooks`: React wrappers around readiness and scoring state.
- `src/lib`: pure functions and rule definitions.
- `src/types`: shared contracts for audit items, issue generation, and risk signals.

## Data flow

Demo data enters through `demoData`, flows into components as props, and is transformed by hooks or pure functions. This keeps future repository scanning and GitHub imports separate from presentation concerns.

## Extension points

- Add scanning adapters that produce `RiskSignal[]` and `AuditReadinessItem[]`.
- Add persistence for saved checklists without changing current component contracts.
- Add export adapters that serialize readiness reports to Markdown, JSON, or PDF.
