# Architecture

## Core Principles
- **Feature-Based Monolith**: Horizontal slicing by feature (`workflows`, `agents`, `observability`, `memory`).
- **State Management**: Local UI state via `zustand`. Server state simulated/managed centrally.
- **Workflow Engine**: Extensible node-graph system powered by `@xyflow/react`.

## Directory Structure
```
/src
  /components     # Global UI primitives (buttons, cards, layout shell)
  /features
    /workflows    # Graph orchestration components
    /agents       # Agent registry and config
    /memory       # Memory system explorers
    /observability # Logs, traces, metrics
  /lib            # Utils and shared helpers
  /store          # Zustand global stores
```

## Scaling
- **Performance**: Virtualized nodes in graphs, memoized react components. Minimum re-renders through targeted Zustand selectors.
- **Modularity**: Every feature is self-contained with its own route views, UI components, and tyings.
