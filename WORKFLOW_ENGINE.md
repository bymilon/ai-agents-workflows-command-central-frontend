# Workflow Engine

## Execution Model
- Directed Acyclic Graph (DAG) parser.
- Stateful halts: Node pauses execution when `type === 'human_review'` until explicit callback/webhook resolves it.

## Concurrency
- Workflows support parallel branch execution (e.g., `Promise.all` logic inside workers).
