import React, { useCallback, useRef } from 'react';
import { ReactFlowProvider } from '@xyflow/react';
import { Canvas } from './Canvas';
import { ActionPalette } from './ActionPalette';
import { Inspector } from './Inspector';

export function WorkflowWorkspace() {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full h-full flex relative overflow-hidden bg-[#070911]" ref={reactFlowWrapper}>
      <ReactFlowProvider>
        {/* Action Palette (Left floating/docked) */}
        <ActionPalette />
        
        {/* Main Canvas Area */}
        <div className="flex-1 h-full relative z-0">
          <Canvas />
        </div>

        {/* Inspector (Right floating/docked) */}
        <Inspector />
      </ReactFlowProvider>
    </div>
  );
}
