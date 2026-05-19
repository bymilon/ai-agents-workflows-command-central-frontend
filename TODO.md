# TODO

Linear-style backlog for preparing `ai-agents-workflows-command-central-frontend` for open-source release. Status values: `Backlog`, `Todo`, `In Progress`, `Done`.

## Release Foundation

| ID | Status | Priority | Owner | Task |
| --- | --- | --- | --- | --- |
| WCC-001 | Done | P0 | Release | Rebrand the repository and package metadata in `package.json` for `ai-agents-workflows-command-central-frontend`, including name, description, version, license, author, repository, bugs URL, homepage, keywords, and `packageManager`. |
| WCC-002 | Done | P0 | Release | Remove AI Studio and Gemini residue from `index.html`, `.env.example`, `metadata.json`, and `vite.config.ts`, then confirm the repo tells one consistent frontend-only or full-stack story. |
| WCC-003 | Done | P0 | Release | Standardize on Bun for OSS usage: generate `bun.lock`, remove `package-lock.json` if npm is not intentionally supported, and align scripts and docs with the chosen package-manager policy. |
| WCC-004 | Done | P1 | Platform | Audit `package.json` for unused or misleading dependencies such as `@google/genai`, `dotenv`, `express`, duplicate `vite`, and the stale `clean` script path to `server.js`. |
| WCC-005 | Done | P1 | Release | Initialize the Git repository, set `origin` to `git@github.com:bymilon/ai-agents-workflows-command-central-frontend.git`, and verify the release branch and push flow before publishing. |

## Docs and Positioning

| ID | Status | Priority | Owner | Task |
| --- | --- | --- | --- | --- |
| WCC-006 | Done | P0 | Docs | Rewrite `README.md` to match the actual product: an AI agents workflow command center with dashboard, workflows, agents, memory, and traces routes. |
| WCC-007 | Done | P0 | Docs | Remove broken README references to nonexistent files and components, and replace them with real customization points under `src/features` and `src/components/layout`. |
| WCC-008 | Done | P1 | Docs | Expand `ROADMAP.md` so it separates current prototype capabilities, near-term OSS improvements, and future execution-engine work. |
| WCC-009 | Backlog | P2 | Docs | Add stable screenshots or a short demo GIF after the rebrand is finished and the UI copy is accurate. |
| WCC-010 | Backlog | P2 | Docs | Add a contributor-facing architecture quickstart that explains where mock data, routing, layout, and workflow state live. |

## Community and Governance

| ID | Status | Priority | Owner | Task |
| --- | --- | --- | --- | --- |
| WCC-011 | Done | P0 | Community | Add `LICENSE` and confirm the chosen license is referenced consistently in `README.md` and `package.json`. |
| WCC-012 | Done | P0 | Community | Add `CONTRIBUTING.md` with Bun setup, verification commands, screenshot expectations for UI changes, and focused pull-request guidance. |
| WCC-013 | Done | P1 | Community | Rewrite `SECURITY.md` into an OSS disclosure policy with a reporting channel, scope, response expectations, and supported versions guidance. |
| WCC-014 | Done | P1 | Community | Add `.github/ISSUE_TEMPLATE/bug_report.yml`, `.github/ISSUE_TEMPLATE/feature_request.yml`, and `.github/PULL_REQUEST_TEMPLATE.md`. |
| WCC-015 | Done | P2 | Community | Add `CODE_OF_CONDUCT.md` and link it from the README and contributor docs. |

## Quality and Verification

| ID | Status | Priority | Owner | Task |
| --- | --- | --- | --- | --- |
| WCC-016 | Done | P1 | Quality | Run `bun run lint` and `bun run build` after the cleanup pass, then capture any release blockers discovered during real verification. |
| WCC-017 | Backlog | P1 | Platform | Add GitHub Actions for Bun install, type-check, build, and a residue scan for generator terms and stale package-manager references. |
| WCC-018 | Backlog | P1 | Quality | Add a release checklist that verifies no generated-platform references remain in tracked source, docs, metadata, or config files. |
| WCC-019 | Backlog | P2 | Quality | Review external font usage in `src/index.css` and decide whether to self-host fonts for privacy, resilience, and predictable OSS demos. |
| WCC-027 | Backlog | P2 | Performance | Reduce the production bundle size or split routes so the main JavaScript chunk no longer exceeds Vite's 500 kB warning threshold. |

## UX and Accessibility

| ID | Status | Priority | Owner | Task |
| --- | --- | --- | --- | --- |
| WCC-020 | Backlog | P1 | Design | Audit the workflow canvas, shell layout, and dense tables for keyboard access, focus visibility, contrast, and screen-reader labeling. |
| WCC-021 | Backlog | P2 | Design | Improve mobile and narrow-width behavior across the shell, sidebar, topbar, and workflow workspace so the app remains usable beyond desktop screenshots. |
| WCC-022 | Backlog | P2 | Design | Add clearer empty states and prototype-status messaging so contributors understand which views are mock data and which interactions are intentionally non-functional. |

## Product Scope

| ID | Status | Priority | Owner | Task |
| --- | --- | --- | --- | --- |
| WCC-023 | Backlog | P1 | Product | Define the boundary between the frontend prototype and future backend/runtime work, then document non-goals in README and roadmap. |
| WCC-024 | Backlog | P2 | Product | Add persistence strategy notes for workflows, agents, memory items, and traces so contributors can extend the prototype coherently. |
| WCC-025 | Backlog | P2 | Product | Prototype native workflow execution states for trigger, delay, webhook, merge, and human-review nodes to reduce the gap between the UI and planned engine behavior. |
| WCC-026 | Backlog | P2 | Product | Add trace-debugging and AI-assisted workflow-generation backlog items with explicit acceptance criteria before they move into implementation. |

## Suggested Sequencing

1. WCC-001 to WCC-003
2. WCC-006 to WCC-012
3. WCC-013 to WCC-018
4. WCC-020 onward once the OSS release baseline is stable
