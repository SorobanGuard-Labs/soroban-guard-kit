# Audit readiness

Audit readiness means the repository can explain what the project does, what can go wrong, what is tested, and what still needs judgment.

## Evidence to prepare

- Threat model with assets, actors, trust boundaries, and abuse cases.
- Contract entrypoint inventory with authorization expectations.
- Storage map describing keys, TTL assumptions, and migration behavior.
- Test evidence for happy paths, negative paths, boundaries, and regressions.
- Deployment and rollback notes.
- Known issues and unresolved assumptions.

## Maintainer workflow

Use the dashboard to identify missing evidence, then convert each gap into a scoped issue. Keep acceptance criteria observable: a new test, a doc page, a checklist update, or a review summary.
