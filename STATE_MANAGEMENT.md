# State Management

## Local State
- Uses Zustand for low-overhead client-side storage.
- Extracted domain specific models (e.g., `useWorkflowStore` for Canvas nodes and edges).

## Remote State
- Using TanStack query (conceptual architecture) for server synchronization.
- Real-time updates and optimistic cache updates during agent deployments.
