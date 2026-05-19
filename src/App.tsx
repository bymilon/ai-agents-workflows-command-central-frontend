import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Shell } from './components/layout/Shell';
import { WorkflowWorkspace } from './features/workflows/Workspace';
import { RegistryView } from './features/agents/RegistryView';
import { TailwindInjector } from './components/layout/TailwindInjector';
import { DashboardView } from './features/dashboard/DashboardView';
import { MemoryView } from './features/memory/MemoryView';
import { TracesView } from './features/observability/TracesView';

export default function App() {
  return (
    <TailwindInjector>
      <Router>
        <Shell>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<DashboardView />} />
            <Route path="/workflows" element={<WorkflowWorkspace />} />
            <Route path="/agents" element={<RegistryView />} />
            <Route path="/memory" element={<MemoryView />} />
            <Route path="/traces" element={<TracesView />} />
          </Routes>
        </Shell>
      </Router>
    </TailwindInjector>
  );
}
