import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { Mail, Webhook, Clock, Database, Settings, GitMerge } from 'lucide-react';
import { cn } from '../../lib/utils';
import { WorkflowNodeData } from '../../store/workflowStore';

const colorMap: Record<string, {text: string, bg: string, border: string, icon: React.ReactNode}> = {
  webhook: { text: "text-primary-300", bg: "bg-primary-500/10", border: "border-primary-500/20", icon: <Webhook className="w-[14px] h-[14px]" /> },
  email: { text: "text-semantic-info", bg: "bg-semantic-info/10", border: "border-semantic-info/20", icon: <Mail className="w-[14px] h-[14px]" /> },
  update: { text: "text-semantic-success", bg: "bg-semantic-success/10", border: "border-semantic-success/20", icon: <Database className="w-[14px] h-[14px]" /> },
  delay: { text: "text-semantic-danger", bg: "bg-semantic-danger/10", border: "border-semantic-danger/20", icon: <Clock className="w-[14px] h-[14px]" /> },
  branch: { text: "text-semantic-warning", bg: "bg-semantic-warning/10", border: "border-semantic-warning/20", icon: <GitMerge className="w-[14px] h-[14px]" /> },
  default: { text: "text-text-secondary", bg: "bg-surface-raised", border: "border-border-subtle", icon: <Settings className="w-[14px] h-[14px]" /> }
};

export function CustomNode({ data, selected }: { data: WorkflowNodeData; selected: boolean }) {
  const config = colorMap[data.icon || ''] || colorMap.default;

  return (
    <div
      className={cn(
        "bg-surface-elevated border rounded-lg min-w-[200px] shadow-sm transition-all duration-150 flex flex-col px-1 pt-1 pb-2",
        selected 
          ? "border-primary-400 shadow-md ring-1 ring-primary-500/20" 
          : "border-border-default hover:border-border-strong"
      )}
    >
      <div className="flex items-center px-2 py-1.5 gap-2.5">
        <div className={cn("flex items-center justify-center w-6 h-6 rounded border shrink-0", config.bg, config.border, config.text)}>
          {config.icon}
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-[13px] font-medium tracking-tight text-text-primary leading-tight">
            {data.label}
          </span>
          {data.category && (
            <span className={cn("text-[10px] font-medium uppercase tracking-wider leading-tight mt-0.5", config.text)}>
              {data.category}
            </span>
          )}
        </div>
      </div>

      <Handle
        type="target"
        position={Position.Top}
        className="w-2.5 h-2.5 bg-surface-elevated border border-border-strong rounded-full -top-[6px] transition-colors hover:border-primary-400 focus:border-primary-400 focus:outline-none"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-2.5 h-2.5 bg-surface-elevated border border-border-strong rounded-full -bottom-[6px] transition-colors hover:border-primary-400 focus:border-primary-400 focus:outline-none"
      />
    </div>
  );
}
