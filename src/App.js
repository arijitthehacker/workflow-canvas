import React, { useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge } from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: 'horizontal-1',
    sourcePosition: 'right',
    type: 'input',
    data: { label: 'User Registered' },
    position: { x: 0, y: 80 },
  },
  {
    id: 'horizontal-2',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'KYC Done' },
    position: { x: 250, y: 0 },
  },
  {
    id: 'horizontal-3',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'KYC Not Done' },
    position: { x: 250, y: 160 },
  },
  {
    id: 'horizontal-4',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'Connect Accounts Dept' },
    position: { x: 500, y: 0 },
  },
  {
    id: 'horizontal-5',
    sourcePosition: 'top',
    targetPosition: 'bottom',
    data: { label: 'Do KYC' },
    position: { x: 500, y: 100 },
  },
  {
    id: 'horizontal-6',
    sourcePosition: 'bottom',
    targetPosition: 'top',
    data: { label: 'KYC Fails' },
    position: { x: 500, y: 230 },
  },
  {
    id: 'horizontal-7',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'Connect Accounts Dept.' },
    position: { x: 750, y: 50 },
  },
  {
    id: 'horizontal-8',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'Manual KYC' },
    position: { x: 750, y: 300 },
  },
];

const initialEdges = [
  {
    id: 'horizontal-e1-2',
    source: 'horizontal-1',
    type: 'smoothstep',
    target: 'horizontal-2',
    animated: true,
  },
  {
    id: 'horizontal-e1-3',
    source: 'horizontal-1',
    type: 'smoothstep',
    target: 'horizontal-3',
    animated: true,
  },
  {
    id: 'horizontal-e1-4',
    source: 'horizontal-2',
    type: 'smoothstep',
    target: 'horizontal-4',
    label: 'edge label',
  },
  {
    id: 'horizontal-e3-5',
    source: 'horizontal-3',
    type: 'smoothstep',
    target: 'horizontal-5',
    animated: true,
  },
  {
    id: 'horizontal-e3-6',
    source: 'horizontal-3',
    type: 'smoothstep',
    target: 'horizontal-6',
    animated: true,
  },
  {
    id: 'horizontal-e5-7',
    source: 'horizontal-5',
    type: 'smoothstep',
    target: 'horizontal-7',
    animated: true,
  },
  {
    id: 'horizontal-e6-8',
    source: 'horizontal-6',
    type: 'smoothstep',
    target: 'horizontal-8',
    animated: true,
  },
];

const HorizontalFlow = () => {
  // eslint-disable-next-line no-unused-vars
  const [nodes, _, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onConnect = useCallback((params) => setEdges((els) => addEdge(params, els)), []);

  return (
    <><ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      attributionPosition="bottom-left"
    ></ReactFlow>
      
      <header>Workflow Creator</header>
      <div style={{ position: 'absolute', top: '50%' }}>
        <div className="flex flex-col items-start gap-y-3 m-10 p-15">
          <label htmlFor="form" className="text-sm font-medium cursor-pointer">
            
          </label>
          <input
            type="text"
            id="form"
            name="name"
            placeholder="Add more fields"
            className="w-full m-20 p-10 bg-transparent border border-gray-200 rounded-lg outline-none "
            style={{ margin: '10px'}}
          />
        </div>
        <button type="submit" className="btn btn-primary" style={{margin: '10px'}}>Submit</button>
        </div></>
  );
};

export default HorizontalFlow;
