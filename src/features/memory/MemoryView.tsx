import React from 'react';
import { Search, Plus, Database, Box, FileText, Settings, ArrowUpDown, Filter, MoreHorizontal, Cpu } from 'lucide-react';
import { cn } from '../../lib/utils';

const COLLECTIONS = [
  { id: 'col_9v2m1', name: 'Product Documentation', status: 'ready', documents: 142, chunks: '3.4k', size: '12.4 MB', updated: '2 hrs ago' },
  { id: 'col_8x3k5', name: 'Customer Support Logs', status: 'indexing', documents: 89, chunks: '1.2k', size: '4.8 MB', updated: 'Just now' },
  { id: 'col_1m4n9', name: 'Competitor Analysis', status: 'ready', documents: 24, chunks: '450', size: '1.2 MB', updated: 'Yesterday' },
  { id: 'col_5b7v2', name: 'Internal Wiki', status: 'ready', documents: 412, chunks: '12.8k', size: '45.1 MB', updated: '3 days ago' },
];

export function MemoryView() {
  return (
    <div className="w-full h-full bg-surface-base p-6 md:p-8 overflow-y-auto">
      <div className="max-w-[1100px] mx-auto flex flex-col gap-8">
        {/* Header */}
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-2xl font-semibold text-text-primary tracking-tight">Vectors & Memory</h1>
            <p className="text-text-secondary text-[13px]">Manage semantic search collections and long-term agent memory.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3 py-1.5 bg-surface-elevated border border-border-default rounded-md text-[13px] font-medium text-text-primary hover:bg-white/5 transition-colors shadow-sm">
              <Settings className="w-4 h-4 text-text-tertiary" />
              Embedding Settings
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-primary-600/90 text-white border border-primary-500/20 rounded-md text-[13px] font-medium hover:bg-primary-500 transition-colors shadow-sm">
              <Plus className="w-4 h-4" />
              New Collection
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-surface-elevated border border-border-default rounded-xl p-5 flex flex-col gap-4 shadow-sm hover:border-border-strong transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-medium text-text-secondary tracking-tight">Total Collections</span>
              <Database className="w-4 h-4 text-primary-400" />
            </div>
            <div className="flex items-end gap-2 mt-1">
              <span className="text-3xl font-semibold text-text-primary tracking-tight leading-none">12</span>
            </div>
          </div>
          <div className="bg-surface-elevated border border-border-default rounded-xl p-5 flex flex-col gap-4 shadow-sm hover:border-border-strong transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-medium text-text-secondary tracking-tight">Total Vector Chunks</span>
              <Box className="w-4 h-4 text-primary-400" />
            </div>
            <div className="flex items-end gap-2 mt-1">
              <span className="text-3xl font-semibold text-text-primary tracking-tight leading-none">17.8k</span>
            </div>
          </div>
          <div className="bg-surface-elevated border border-border-default rounded-xl p-5 flex flex-col gap-4 shadow-sm hover:border-border-strong transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-medium text-text-secondary tracking-tight">Storage Used</span>
              <Cpu className="w-4 h-4 text-primary-400" />
            </div>
            <div className="flex items-end gap-2 mt-1">
              <span className="text-3xl font-semibold text-text-primary tracking-tight leading-none">63.5 MB</span>
              <span className="text-[12px] font-medium text-text-tertiary mb-0.5">/ 1 GB</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {/* Toolbar */}
          <div className="flex items-center gap-3 bg-surface-elevated border border-border-default rounded-lg p-1.5 shrink-0 shadow-sm">
            <div className="flex-1 relative flex items-center ml-2">
              <Search className="w-4 h-4 text-text-tertiary absolute" />
              <input 
                type="text" 
                placeholder="Search collections..." 
                className="w-full bg-transparent border-none outline-none text-[13px] text-text-primary pl-8 placeholder:text-text-tertiary h-8"
              />
            </div>
            <div className="h-5 w-px bg-border-subtle mx-1" />
            <button className="px-3 py-1.5 text-[12px] text-text-secondary hover:text-text-primary rounded text-left hover:bg-white/5 transition-colors font-medium flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 opacity-70" /> Filter
            </button>
            <button className="px-3 py-1.5 text-[12px] text-text-secondary hover:text-text-primary rounded text-left hover:bg-white/5 transition-colors font-medium flex items-center gap-1.5">
              <ArrowUpDown className="w-3.5 h-3.5 opacity-70" /> Sort
            </button>
          </div>

          {/* Table */}
          <div className="border border-border-default rounded-xl overflow-hidden bg-surface-elevated shadow-sm">
            <table className="w-full text-left text-[13px] whitespace-nowrap">
              <thead className="bg-surface-raised border-b border-border-default">
                <tr>
                  <th className="px-5 py-3.5 font-medium text-text-tertiary uppercase tracking-wider text-[11px]">Collection Name</th>
                  <th className="px-5 py-3.5 font-medium text-text-tertiary uppercase tracking-wider text-[11px]">Status</th>
                  <th className="px-5 py-3.5 font-medium text-text-tertiary uppercase tracking-wider text-[11px]">Documents</th>
                  <th className="px-5 py-3.5 font-medium text-text-tertiary uppercase tracking-wider text-[11px]">Chunks</th>
                  <th className="px-5 py-3.5 font-medium text-text-tertiary uppercase tracking-wider text-[11px]">Size</th>
                  <th className="px-5 py-3.5 font-medium text-text-tertiary uppercase tracking-wider text-[11px]">Last Updated</th>
                  <th className="px-5 py-3.5 font-medium text-text-tertiary uppercase tracking-wider text-[11px] text-right"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                {COLLECTIONS.map((col) => (
                  <tr key={col.id} className="hover:bg-white/[0.02] transition-colors group cursor-pointer">
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded border border-border-subtle bg-surface-raised flex items-center justify-center shrink-0 group-hover:bg-primary-500/10 group-hover:border-primary-500/20 group-hover:text-primary-400 transition-colors">
                          <Database className="w-4 h-4 text-text-secondary group-hover:text-primary-400 transition-colors" />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="font-medium text-text-primary tracking-tight leading-none">{col.name}</span>
                          <span className="text-[11px] text-text-tertiary font-mono leading-none">{col.id}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center">
                        <span className={cn(
                          "capitalize text-[11px] font-medium px-2 py-0.5 rounded flex items-center gap-1.5 border",
                          col.status === 'ready' ? "bg-semantic-success/10 text-semantic-success border-semantic-success/20" :
                          "bg-semantic-warning/10 text-semantic-warning border-semantic-warning/20 animate-pulse"
                        )}>
                          {col.status === 'ready' ? <div className="w-1.5 h-1.5 rounded-full bg-current" /> : <div className="w-1.5 h-1.5 rounded-full border border-current border-t-transparent animate-spin" />}
                          {col.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-text-secondary">
                      <div className="flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 opacity-50" />
                        {col.documents}
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-text-secondary font-mono text-[12px]">{col.chunks}</td>
                    <td className="px-5 py-3.5 text-text-secondary font-mono text-[12px]">{col.size}</td>
                    <td className="px-5 py-3.5 text-text-secondary text-[12px]">{col.updated}</td>
                    <td className="px-5 py-3.5 text-right">
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
    </div>
  );
}
