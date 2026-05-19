import { create } from 'zustand';
import {
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  addEdge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  applyNodeChanges,
  applyEdgeChanges,
} from '@xyflow/react';

export type WorkflowNodeData = {
  label: string;
  type?: string;
  icon?: string;
  category?: string;
};

export type RFState = {
  nodes: Node<WorkflowNodeData>[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  addNode: (node: Node<WorkflowNodeData>) => void;
};

// Initial setup with a single trigger node
const initialNodes: Node<WorkflowNodeData>[] = [
  {
    id: '1',
    type: 'custom',
    position: { x: 250, y: 150 },
    data: { label: 'Webhook Trigger', category: 'trigger', icon: 'webhook' },
  },
];
const initialEdges: Edge[] = [];

export const useWorkflowStore = create<RFState>((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes) as Node<WorkflowNodeData>[],
    });
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection: Connection) => {
    set({
      edges: addEdge(
        { ...connection, type: 'smoothstep', animated: false, style: { stroke: 'var(--color-primary-400)', strokeOpacity: 0.25, strokeWidth: 1.5 } },
        get().edges
      ),
    });
  },
  addNode: (node) => {
    set({ nodes: [...get().nodes, node] });
  },
}));
