import React from 'react';
import { Search, Plus, MoreHorizontal, Activity, CheckCircle2, XCircle, Filter, ArrowUpDown } from 'lucide-react';
import { cn } from '../../lib/utils';

const MOCK_AGENTS = [
  { id: 'agt_01', name: 'Triager Agent', model: 'gpt-4-turbo', status: 'running', latency: '240ms', tools: 4 },
  { id: 'agt_02', name: 'Code Reviewer', model: 'claude-3-opus', status: 'idle', latency: '--', tools: 2 },
  { id: 'agt_03', name: 'Customer Support', model: 'gpt-4o', status: 'running', latency: '412ms', tools: 7 },
  { id: 'agt_04', name: 'Database Migrator', model: 'gpt-4-turbo', status: 'failed', latency: '8.4s', tools: 1 },
];

export function RegistryView() {
  return (
    <div className="w-full h-full bg-surface-base p-6 md:p-8 overflow-y-auto">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-medium text-text-primary tracking-tight">Agent Registry</h1>
            <p className="text-text-secondary text-[13px]">Manage, configure, and monitor deployed AI agents.</p>
          </div>
          <button className="px-3 py-1.5 bg-primary-600/90 hover:bg-primary-500 transition-colors text-white text-[13px] font-medium rounded-md flex items-center gap-1.5 shadow-sm">
            <Plus className="w-3.5 h-3.5" />
            Create Agent
          </button>
        </div>

        {/* Toolbar */}
        <div className="flex items-center gap-3 bg-surface-elevated border border-border-default rounded-lg p-1.5 shrink-0 shadow-sm">
          <div className="flex-1 relative flex items-center ml-2">
            <Search className="w-3.5 h-3.5 text-text-tertiary absolute" />
            <input 
              type="text" 
              placeholder="Search by name, ID, or model..." 
              className="w-full bg-transparent border-none outline-none text-[13px] text-text-primary pl-7 placeholder:text-text-tertiary h-7"
            />
          </div>
          <div className="h-4 w-px bg-border-subtle mx-1" />
          <button className="px-2.5 py-1 text-[12px] text-text-secondary hover:text-text-primary rounded text-left hover:bg-white/5 transition-colors font-medium flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 opacity-70" /> Filter
          </button>
          <button className="px-2.5 py-1 text-[12px] text-text-secondary hover:text-text-primary rounded text-left hover:bg-white/5 transition-colors font-medium flex items-center gap-1.5">
            <ArrowUpDown className="w-3.5 h-3.5 opacity-70" /> Sort
          </button>
        </div>

        {/* Table */}
        <div className="border border-border-default rounded-lg overflow-hidden bg-surface-elevated shadow-sm">
          <table className="w-full text-left text-[13px] whitespace-nowrap">
            <thead className="bg-[#0A0C13] border-b border-border-default">
              <tr>
                <th className="px-5 py-3 font-medium text-text-tertiary uppercase tracking-wider text-[10px]">Agent</th>
                <th className="px-5 py-3 font-medium text-text-tertiary uppercase tracking-wider text-[10px]">Model</th>
                <th className="px-5 py-3 font-medium text-text-tertiary uppercase tracking-wider text-[10px]">Status</th>
                <th className="px-5 py-3 font-medium text-text-tertiary uppercase tracking-wider text-[10px]">Latency</th>
                <th className="px-5 py-3 font-medium text-text-tertiary uppercase tracking-wider text-[10px]">Tools</th>
                <th className="px-5 py-3 font-medium text-text-tertiary uppercase tracking-wider text-[10px] text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle">
              {MOCK_AGENTS.map((agent) => (
                <tr key={agent.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded border border-border-subtle bg-surface-raised flex items-center justify-center shrink-0">
                        <Activity className="w-3.5 h-3.5 text-primary-300" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-text-primary">{agent.name}</span>
                        <span className="text-[11px] text-text-tertiary font-mono">{agent.id}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-text-secondary">
                    <span className="px-2 py-0.5 bg-surface-raised border border-border-subtle rounded text-[11px] font-mono">{agent.model}</span>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center">
                      <span className={cn(
                        "capitalize text-[11px] font-medium px-1.5 py-0.5 rounded flex items-center gap-1 border",
                        agent.status === 'running' ? "bg-semantic-success/10 text-semantic-success border-semantic-success/20" :
                        agent.status === 'failed' ? "bg-semantic-danger/10 text-semantic-danger border-semantic-danger/20" :
                        "bg-surface-raised text-text-secondary border-border-subtle"
                      )}>
                        {agent.status === 'running' && <CheckCircle2 className="w-3 h-3" />}
                        {agent.status === 'idle' && <div className="w-1.5 h-1.5 rounded-full bg-current" />}
                        {agent.status === 'failed' && <XCircle className="w-3 h-3" />}
                        {agent.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-text-secondary font-mono text-[12px]">{agent.latency}</td>
                  <td className="px-5 py-3 text-text-secondary text-[12px]">{agent.tools} active</td>
                  <td className="px-5 py-3 text-right">
                    <button className="p-1.5 text-text-tertiary hover:text-text-primary hover:bg-white/5 rounded transition-colors opacity-0 group-hover:opacity-100">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
