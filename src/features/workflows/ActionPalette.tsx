import React from 'react';
import { Mail, Database, Webhook, Clock, GitMerge, Expand, GripVertical } from 'lucide-react';
import { cn } from '../../lib/utils';

const NODE_CATEGORIES = [
  {
    title: 'MESSAGES',
    items: [
      { id: 'send-email', label: 'Send Email', icon: Mail, type: 'email' },
    ]
  },
  {
    title: 'DATA',
    items: [
      { id: 'update-subscription', label: 'Update Subscription', icon: Database, type: 'update' },
      { id: 'send-webhook', label: 'Send Webhook', icon: Webhook, type: 'webhook' },
    ]
  },
  {
    title: 'DELAYS',
    items: [
      { id: 'wait-until', label: 'Wait Until', icon: Clock, type: 'delay' },
      { id: 'time-delay', label: 'Time Delay', icon: Clock, type: 'delay' },
    ]
  },
  {
    title: 'FLOW CONTROL',
    items: [
      { id: 'true-false-branch', label: 'True/False Branch', icon: GitMerge, type: 'branch' },
      { id: 'enroll', label: 'Enroll in Automation', icon: GitMerge, type: 'branch' },
    ]
  }
];

export function ActionPalette() {
  const onDragStart = (event: React.DragEvent, nodeType: string, label: string) => {
    event.dataTransfer.setData('application/reactflow/type', nodeType);
    event.dataTransfer.setData('application/reactflow/label', label);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="absolute left-4 top-4 w-[260px] bg-surface-elevated/90 backdrop-blur-lg border border-border-default rounded-lg shadow-lg flex flex-col z-10 max-h-[calc(100%-32px)] overflow-hidden">
      
      {/* Palette Header */}
      <div className="flex items-center justify-between px-3 py-2.5 border-b border-border-subtle shrink-0 bg-surface-raised/50">
        <h3 className="text-[13px] font-medium text-text-primary tracking-tight">Actions</h3>
        <button className="text-text-tertiary hover:text-text-primary transition-colors bg-white/0 hover:bg-white/5 rounded p-1">
          <Expand className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Palette Body */}
      <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-5 custom-scrollbar">
        {NODE_CATEGORIES.map(category => (
          <div key={category.title} className="flex flex-col gap-1.5">
            <span className="text-[10px] font-medium text-text-tertiary tracking-widest uppercase px-1">
              {category.title}
            </span>
            <div className="flex flex-col gap-0.5">
              {category.items.map(item => (
                <div
                  key={item.id}
                  className="flex items-center gap-2.5 px-2 py-1.5 rounded-md cursor-grab active:cursor-grabbing hover:bg-white/5 group transition-colors border border-transparent"
                  draggable
                  onDragStart={(e) => onDragStart(e, item.type, item.label)}
                >
                  <div className={cn(
                    "flex items-center justify-center w-6 h-6 rounded border shrink-0 transition-colors",
                    item.type === 'email' ? 'bg-semantic-info/10 border-semantic-info/20 text-semantic-info group-hover:bg-semantic-info/20' :
                    item.type === 'update' ? 'bg-semantic-success/10 border-semantic-success/20 text-semantic-success group-hover:bg-semantic-success/20' :
                    item.type === 'delay' ? 'bg-semantic-danger/10 border-semantic-danger/20 text-semantic-danger group-hover:bg-semantic-danger/20' :
                    item.type === 'branch' ? 'bg-semantic-warning/10 border-semantic-warning/20 text-semantic-warning group-hover:bg-semantic-warning/20' :
                    item.type === 'webhook' ? 'bg-primary-500/10 border-primary-500/20 text-primary-300 group-hover:bg-primary-500/20' :
                    'bg-surface-raised border-border-subtle text-text-secondary group-hover:bg-white/5 group-hover:border-white/10 group-hover:text-text-primary'
                  )}>
                    <item.icon className="w-[14px] h-[14px]" />
                  </div>
                  <span className={cn(
                    "text-[12px] font-medium transition-colors",
                    item.type === 'email' ? 'text-semantic-info/90 group-hover:text-semantic-info' :
                    item.type === 'update' ? 'text-semantic-success/90 group-hover:text-semantic-success' :
                    item.type === 'delay' ? 'text-semantic-danger/90 group-hover:text-semantic-danger' :
                    item.type === 'branch' ? 'text-semantic-warning/90 group-hover:text-semantic-warning' :
                    item.type === 'webhook' ? 'text-primary-300/90 group-hover:text-primary-300' :
                    'text-text-secondary group-hover:text-text-primary'
                  )}>
                    {item.label}
                  </span>
                  
                  <div className="ml-auto opacity-0 group-hover:opacity-100 text-text-tertiary">
                    <GripVertical className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
