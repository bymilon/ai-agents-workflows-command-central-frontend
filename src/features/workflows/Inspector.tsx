import React from 'react';
import { X, Search } from 'lucide-react';

export function Inspector() {
  return (
    <div className="absolute right-4 top-4 w-[280px] bg-surface-elevated/90 backdrop-blur-lg border border-border-default rounded-lg shadow-lg flex flex-col z-10 max-h-[calc(100%-32px)]">
      
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2.5 border-b border-border-subtle shrink-0 bg-surface-raised/50">
        <h3 className="text-[13px] font-medium text-text-primary tracking-tight">Configuration</h3>
        <button className="text-text-tertiary hover:text-text-primary transition-colors bg-white/0 hover:bg-white/5 rounded p-1">
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-6 custom-scrollbar">
        
        {/* Section 1 */}
        <div className="flex flex-col gap-3">
          <span className="text-[10px] font-medium text-text-tertiary tracking-widest uppercase">
            General
          </span>
          
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-medium text-text-secondary">Node Name</label>
            <input 
              type="text" 
              defaultValue="Webhook Trigger"
              className="bg-surface-raised border border-border-default rounded-md px-2.5 py-1.5 text-[12px] text-text-primary focus:outline-none focus:border-border-focus transition-colors shadow-sm placeholder:text-text-tertiary w-full"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-medium text-text-secondary">Description</label>
            <textarea 
              defaultValue="Listens for incoming Stripe payment events."
              rows={3}
              className="bg-surface-raised border border-border-default rounded-md px-2.5 py-1.5 text-[12px] text-text-primary focus:outline-none focus:border-border-focus transition-colors shadow-sm placeholder:text-text-tertiary w-full resize-none"
            />
          </div>
        </div>
        
        {/* Section 2 */}
        <div className="flex flex-col gap-3">
          <span className="text-[10px] font-medium text-text-tertiary tracking-widest uppercase">
            Execution Settings
          </span>
          
          <div className="flex items-center justify-between py-1">
            <span className="text-[12px] font-medium text-text-secondary">Retry on failure</span>
            
            {/* Custom Toggle */}
            <button className="w-7 h-4 rounded-full bg-primary-600/90 relative cursor-pointer border border-primary-500/20 focus:outline-none focus:ring-1 focus:ring-primary-400">
              <div className="absolute right-[2px] top-[2px] w-2.5 h-2.5 bg-white/90 rounded-full shadow-sm" />
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-[12px] font-medium text-text-secondary">Timeout (ms)</span>
            <input 
              type="number" 
              defaultValue={5000}
              className="w-20 bg-surface-raised border border-border-default rounded-md px-2 py-1 text-[12px] text-text-primary text-right focus:outline-none focus:border-border-focus transition-colors shadow-sm"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
