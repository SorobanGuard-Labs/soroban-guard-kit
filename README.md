# Soroban Guard Kit

Soroban Guard Kit is an open-source security and readiness toolkit for Stellar and Soroban projects. It helps maintainers prepare repositories for audits, contributor-driven work, documentation review, testing readiness, and production-readiness discussions.

Built by SorobanGuard Labs. This project is independent and is not officially affiliated with Stellar, Soroban, Drips Wave, or GrantFox.

## Why it exists

Soroban maintainers often need to turn broad security concerns into concrete evidence: tests, docs, issue scopes, operational notes, and review checklists. Soroban Guard Kit gives teams a reusable starting point for that work, especially when repositories are participating in issue-based contribution programs.

## Features

- Landing page explaining the project and workflows.
- Toolkit page with audit readiness, security checklist, risk score, issue generator, and test readiness panels.
- Risk scoring logic from 0 to 100.
- Soroban-oriented security rules and readiness prompts.
- Contributor-ready issue generation with labels and acceptance criteria.
- Practical docs and reusable Markdown templates.
- Vitest and React Testing Library coverage for logic, hooks, and components.
- GitHub Actions CI for lint, typecheck, test, and build.

## Tech stack

Next.js, React, TypeScript, Tailwind CSS, Vitest, React Testing Library, ESLint, and GitHub Actions.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Commands

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
npm run test
npm run test:watch
```

## Project structure

```text
.github/           Issue templates and CI
docs/              Practical maintainer documentation
templates/         Audit, security, test, and PR checklists
src/components/    Toolkit UI components
src/hooks/         Readiness and scoring hooks
src/lib/           Scoring, issue building, and rule logic
src/pages/         Next.js Pages Router routes
src/types/         Shared TypeScript models
tests/             Unit and component tests
```

## Mock/demo mode

The project ships in demo mode with sample Soroban readiness data. Configure it with:

```env
NEXT_PUBLIC_SOROBAN_GUARD_DEMO_MODE=true
NEXT_PUBLIC_APP_NAME=Soroban Guard Kit
```

Demo mode keeps the UI useful before repository scanning, GitHub imports, saved checklists, or external risk index integrations are available.

## Audit readiness workflow

1. Review the audit readiness dashboard and identify missing evidence.
2. Walk through the security checklist for authorization, storage, testing, operations, dependencies, and docs.
3. Convert gaps into contributor-ready issues with clear files and acceptance criteria.
4. Use the templates in `templates/` to prepare test evidence, review notes, and PR checks.
5. Re-run lint, typecheck, tests, and build before sharing a readiness package.

## Contributor guide

Start with `docs/contributor-guide.md` and `CONTRIBUTING.md`. Good issues should be small, reviewable, and tied to one readiness outcome. Security-sensitive findings should avoid public exploit details until maintainers have triaged them.

## Roadmap

- Real repository scanning.
- GitHub issue import.
- Saved checklists.
- Security rule presets.
- Audit report export.
- Integration with Soroban Risk Indexer.

## License

MIT. See `LICENSE`.


## Local Development with Docker

You can run the app locally with Docker to avoid machine-specific Node.js or package manager setup differences.

```bash
docker compose up --build
```

Then open:

```text
http://localhost:3000
```

To stop the app, press `Ctrl + C`, then run:

```bash
docker compose down
```

For detailed Docker setup, check commands, and troubleshooting, see [`docs/local-development.md`](docs/local-development.md).