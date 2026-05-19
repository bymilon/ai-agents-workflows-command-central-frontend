# Observability System

## Tracing
- Every node execution gets logged with a `trace_id`.
- Support distributed traces across multiple child agents.

## Metrics
- P90 / P99 latency visualization.
- Token cost aggregations (input vs. output tokens).

## Edge Execution Logs
- Logs are streamed live to the UI via Server-Sent Events (simulated).
- Hard filtering on agent ID, run status, and temporal boundaries.
