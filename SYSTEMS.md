# Systems Architecture

## Frontend Systems
- **Core View**: Single Page App with `react-router-dom` for top level navigation.
- **Workflow Graph Engine**: `@xyflow/react` powered infinite canvas.
- **Data Mutators**: Zustand stores ensuring atomic state updates per feature block.

## Backend Infrastructure (Conceptual)
- **Edge Functions**: Cloudflare Workers for near-zero latency invocation of AI tasks.
- **Persistent Storage**: KV / D1 for agent states and trace logs.
- **Long-Running Workflows**: Durable Objects + Temporal-style sleep-and-wake mechanics for delayed steps (`Wait Until`).
