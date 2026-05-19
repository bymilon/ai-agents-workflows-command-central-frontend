# Contributing

Thanks for contributing to AI Agents Workflows Command Central Frontend.

## Local Setup

```bash
bun install
bun run dev
```

The app runs locally at `http://localhost:3000`.

## Before Opening a Pull Request

Run:

```bash
bun run lint
bun run build
```

## Pull Request Expectations

- Keep PRs focused on one problem or feature slice.
- Include screenshots or a short recording for visual changes.
- Call out any intentional follow-up work or known limitations.
- Update docs when behavior, setup, or contributor workflow changes.

## Project Map

- `src/components/layout`: shared shell, sidebar, topbar, and layout wrappers.
- `src/features/workflows`: workflow canvas, node palette, custom nodes, and inspector.
- `src/features/dashboard`: overview metrics and recent runs.
- `src/features/agents`: agent registry UI.
- `src/features/memory`: vector and memory UI.
- `src/features/observability`: traces and telemetry UI.
- `src/store`: Zustand workflow state.

## Design Notes

This repo is currently a frontend prototype. Mock data lives directly in feature views, and backend/runtime notes in the markdown docs are directional rather than implemented behavior.
