import React from 'react';
import { ChevronRight, Play } from 'lucide-react';

export function Topbar() {
  return (
    <div className="h-[48px] bg-surface-base/80 backdrop-blur-lg border-b border-border-subtle shrink-0 flex items-center justify-between px-4 z-40 relative">
      <div className="flex items-center gap-1.5 text-[13px] text-text-secondary font-medium tracking-tight">
        <span className="hover:text-text-primary transition-colors cursor-pointer">Automations</span>
        <ChevronRight className="w-3.5 h-3.5 opacity-50" />
        <span className="text-text-primary">User Onboarding Flow</span>
        
        <div className="ml-2 px-1.5 py-0.5 rounded-md bg-primary-500/10 text-primary-300 text-[11px] font-medium tracking-wide border border-primary-500/10 leading-none">
          Draft
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center bg-surface-elevated rounded-md p-0.5 border border-border-default shadow-sm">
          <button className="px-2.5 py-1 text-[12px] text-text-primary bg-white/10 rounded shadow-sm font-medium">Overview</button>
          <button className="px-2.5 py-1 text-[12px] text-text-secondary hover:text-text-primary transition-colors font-medium">Workflow</button>
          <button className="px-2.5 py-1 text-[12px] text-text-secondary hover:text-text-primary transition-colors font-medium">Settings</button>
        </div>
        
        <button className="px-3 py-1 flex items-center gap-1.5 text-[12px] font-medium rounded-md bg-primary-600/90 text-white hover:bg-primary-500 transition-colors shadow-sm ring-1 ring-inset ring-white/10">
          <Play className="w-3 h-3 fill-current" />
          Run
        </button>
      </div>
    </div>
  );
}
