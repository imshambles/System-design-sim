import React, { useState, useCallback, useMemo } from 'react';
import { ReactFlow, Background, Controls, MiniMap, addEdge, useNodesState, useEdgesState, MarkerType } from 'reactflow';
import 'reactflow/dist/style.css';
import ComponentPalette from '../components/simulator/ComponentPalette';
import LLDComponentPalette from '../components/simulator/LLDComponentPalette';
import ConfigPanel from '../components/simulator/ConfigPanel';
import ResultsPanel from '../components/simulator/ResultsPanel';
import CustomNode from '../components/simulator/CustomNode';
import LLDNode from '../components/simulator/LLDNode';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Play, RotateCcw, Settings } from 'lucide-react';
import { SCENARIOS, MOCK_SIMULATION_RESULTS } from '../mock';

const SimulatorPage = () => {
  const [mode, setMode] = useState('HLD'); // 'HLD' or 'LLD'
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  // Define custom node types based on mode
  const nodeTypes = useMemo(() => ({
    custom: CustomNode,
    lld: LLDNode,
  }), []);

  // Callback for ReactFlow edge creation
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ 
      ...params, 
      animated: true,
      style: { stroke: '#3b82f6', strokeWidth: 2 },
      type: 'smoothstep',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#3b82f6',
      },
    }, eds)),
    [setEdges]
  );

  const onNodeClick = useCallback((event, node) => {
    setSelectedNode(node);
    setShowConfig(true);
  }, []);
  const [selectedNode, setSelectedNode] = useState(null);
  const [selectedScenario, setSelectedScenario] = useState('url_shortener');
  const [simulationResults, setSimulationResults] = useState(null);
  const [showConfig, setShowConfig] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const componentData = JSON.parse(event.dataTransfer.getData('application/reactflow'));
      const reactFlowBounds = event.target.getBoundingClientRect();
      const position = {
        x: event.clientX - reactFlowBounds.left - 75,
        y: event.clientY - reactFlowBounds.top - 40,
      };
      const newNode = {
        id: `node-${nodes.length + 1}`,
        type: mode === 'LLD' ? 'lld' : 'custom',
        position,
        data: {
          label: componentData.name,
          component: componentData,
          instanceCount: mode === 'HLD' ? 1 : undefined
        },
        style: mode === 'HLD' ? {
          background: getCategoryColor(componentData.category),
          border: '2px solid #3b82f6',
          borderRadius: '8px',
          padding: '0px',
          minWidth: 160
        } : undefined
      };
      setNodes((nds) => nds.concat(newNode));
    },
    [nodes, setNodes]
  );
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);
  const getCategoryColor = (category) => {
    const colors = {
      compute: '#dbeafe',
      storage: '#fef3c7',
      cache: '#fce7f3',
      infrastructure: '#d1fae5',
      async: '#e0e7ff'
    };
    return colors[category] || '#f3f4f6';
  };

  const handleRunSimulation = async () => {
    setIsLoading(true);
    setSimulationResults(null);

    const simulationData = {
      scenario: selectedScenario,
      nodes: nodes.map(node => ({ id: node.id, ...node.data })),
      edges: edges.map(edge => ({
        id: edge.id,
        source: edge.source,
        target: edge.target
      }))
    };

    try {
      const response = await fetch('http://localhost:8000/api/simulate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(simulationData)
      });
      const results = await response.json();
      setSimulationResults(results);
    } catch (error) {
      console.error("Error running simulation:", error);
      // Handle error state appropriately
    }

    setIsLoading(false);
  };

  const handleReset = () => {
    setNodes([]);
    setEdges([]);
    setSimulationResults(null);
  };

  const handleUpdateNode = useCallback((nodeId, newData) => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === nodeId) {
          return {
            ...node,
            data: {
              ...node.data,
              ...newData,
            },
          };
        }
        return node;
      })
    );
  }, [setNodes]);

  // Get scenario details
  const scenario = SCENARIOS[selectedScenario];

  return (
    <div className="flex flex-col h-full">
      {/* Mode Selector UI */}
      <div className="flex items-center justify-center gap-4 p-4 border-b bg-slate-50">
        <Button
          variant={mode === 'HLD' ? 'default' : 'outline'}
          onClick={() => setMode('HLD')}
        >
          HLD Mode
        </Button>
        <Button
          variant={mode === 'LLD' ? 'default' : 'outline'}
          onClick={() => setMode('LLD')}
        >
          LLD Mode
        </Button>
      </div>
      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Component Palette */}
        {mode === 'HLD' ? <ComponentPalette /> : <LLDComponentPalette />}

        {/* Canvas */}
        <div className="flex-1 relative">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={onNodeClick}
            onDrop={onDrop}
            onDragOver={onDragOver}
            nodeTypes={nodeTypes}
            fitView
            className="bg-slate-50"
          >
            <Background color="#cbd5e1" gap={16} />
            <Controls />
            <MiniMap
              nodeColor={(node) => node.style?.background || '#f3f4f6'}
              maskColor="rgba(0, 0, 0, 0.1)"
            />
          </ReactFlow>

          {/* Scenario Info Overlay */}
          {scenario && (
            <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-sm border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-1">{scenario.name}</h3>
              <p className="text-xs text-slate-600 mb-3">{scenario.description}</p>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Daily Users:</span>
                  <span className="font-medium text-slate-900">
                    {(scenario.requirements.dailyActiveUsers / 1000000).toFixed(1)}M
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Target Latency (p99):</span>
                  <span className="font-medium text-slate-900">
                    {scenario.requirements.targetLatency.p99}ms
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Data Size:</span>
                  <span className="font-medium text-slate-900">
                    {scenario.requirements.estimatedDataSize}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar */}
        {showConfig && selectedNode ? (
          <ConfigPanel
            node={selectedNode}
            onUpdate={handleUpdateNode}
            onClose={() => setShowConfig(false)}
          />
        ) : simulationResults ? (
          <ResultsPanel results={simulationResults} />
        ) : null}
      </div>
    </div>
  );
};

export default SimulatorPage;
