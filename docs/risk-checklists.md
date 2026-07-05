# Risk checklists

Use these prompts while reviewing Soroban repositories.

## Authorization

- Which functions require admin, signer, or role checks?
- Are emergency and upgrade paths documented?
- Do tests prove unauthorized callers fail?

## Storage

- Are persistent keys and TTL assumptions documented?
- Are migrations reversible or clearly one-way?
- Can repeated calls corrupt state?

## Testing

- Are negative tests present for invalid inputs and unauthorized callers?
- Are boundary values covered?
- Do fixtures model realistic ledger and account state?

## Operations

- Is there a deployment runbook?
- Are rollback and incident paths clear?
- Are production-readiness assumptions separated from audit claims?
