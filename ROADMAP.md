# Roadmap

## Current Prototype

- Route-based command-center shell for dashboard, workflows, agents, memory, and observability.
- Workflow canvas built with `@xyflow/react` and Zustand-backed local state.
- Dense operator-facing mock views for execution metrics, traces, agent registry, and vector collections.

## Near-Term OSS Improvements

- Complete repository cleanup for public release, including docs, community files, and package metadata.
- Improve accessibility, keyboard behavior, and narrow-screen usability across dense data views.
- Replace inline mock data with clearer fixtures or a lightweight demo-data layer.
- Add verification automation for lint, build, and release residue checks.

## Future Execution Engine

- Introduce executable workflow states for trigger, webhook, delay, merge, and human-review nodes.
- Define persistence for workflows, agents, traces, and memory collections.
- Add runtime observability that maps real executions back into the existing traces UI.

## Future Copilot Layer

- Generate workflow scaffolds from natural-language prompts.
- Add trace-debugging assistance that can explain failed or slow runs.
- Support richer agent configuration flows and model/tool policy controls.
