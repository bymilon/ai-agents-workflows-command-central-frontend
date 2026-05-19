# AI Agents Workflows Command Central Frontend

Frontend prototype for designing, reviewing, and monitoring AI agent workflows from one command-center interface.

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-19-61dafb.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646cff.svg)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8.svg)](https://tailwindcss.com/)

This repository packages a static React application for AI workflow operations. It includes a workflow canvas, agent registry, memory view, traces dashboard, and overview screens that can be adapted into internal tooling, demos, or a future production control plane.

The current repo is frontend-only. Data is mocked in the UI, execution is not wired to a runtime, and backend architecture notes in the docs should be treated as future direction rather than shipped capability.

## Features

- Workflow workspace built on `@xyflow/react` with a canvas, palette, and inspector.
- Overview dashboard for execution volume, recent runs, and system metrics.
- Agent registry, memory collections, and observability views with dense operator-focused UI.
- Tailwind CSS 4 theme tokens for a dark, high-density interface.
- Route-based shell that can be extended into a fuller orchestration product.

## Stack

- React 19
- TypeScript
- Vite 6
- Tailwind CSS 4
- Zustand
- React Flow
- Recharts
- Bun

## Quick Start

```bash
git clone git@github.com:bymilon/ai-agents-workflows-command-central-frontend.git
cd ai-agents-workflows-command-central-frontend
bun install
bun run dev
```

The dev server runs at `http://localhost:3000`.

## Scripts

```bash
bun run dev
bun run build
bun run preview
bun run lint
```

## Project Structure

```txt
src/
  components/layout/     Shell, sidebar, topbar, and shared layout wrappers
  features/dashboard/    Overview metrics and recent execution activity
  features/workflows/    Workflow canvas, custom nodes, palette, and inspector
  features/agents/       Agent registry view
  features/memory/       Memory and vector collection view
  features/observability/ Traces and telemetry view
  store/                 Zustand workflow state
DESIGN.md                Visual design notes
ARCHITECTURE.md          Feature-based structure and scaling notes
ROADMAP.md               Product direction
TODO.md                  OSS release and product backlog
```

## Customization

- Update navigation and shell behavior in [src/components/layout/Sidebar.tsx](/D:/FRONTEND/REACT/ai-agents-wcc/src/components/layout/Sidebar.tsx) and [src/components/layout/Topbar.tsx](/D:/FRONTEND/REACT/ai-agents-wcc/src/components/layout/Topbar.tsx).
- Adjust workflow node behavior and defaults in [src/features/workflows](/D:/FRONTEND/REACT/ai-agents-wcc/src/features/workflows).
- Replace mock operational data in [src/features/dashboard/DashboardView.tsx](/D:/FRONTEND/REACT/ai-agents-wcc/src/features/dashboard/DashboardView.tsx), [src/features/agents/RegistryView.tsx](/D:/FRONTEND/REACT/ai-agents-wcc/src/features/agents/RegistryView.tsx), [src/features/memory/MemoryView.tsx](/D:/FRONTEND/REACT/ai-agents-wcc/src/features/memory/MemoryView.tsx), and [src/features/observability/TracesView.tsx](/D:/FRONTEND/REACT/ai-agents-wcc/src/features/observability/TracesView.tsx).
- Tune colors, typography, and shared tokens in [src/index.css](/D:/FRONTEND/REACT/ai-agents-wcc/src/index.css).

## Roadmap

The near-term backlog lives in [TODO.md](TODO.md). It covers OSS release cleanup, contributor experience, accessibility, verification, and the next product slices after the prototype baseline is solid.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request. For UI changes, include screenshots or short recordings and run:

```bash
bun run lint
bun run build
```

## Security

Please do not open public issues for vulnerabilities. Follow [SECURITY.md](SECURITY.md).

## License

MIT. See [LICENSE](LICENSE).
