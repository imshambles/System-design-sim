import React, { useState, useCallback, useMemo } from 'react';
import { ReactFlow, Background, Controls, MiniMap, addEdge, useNodesState, useEdgesState, MarkerType } from 'reactflow';
import 'reactflow/dist/style.css';
import ComponentPalette from '../components/simulator/ComponentPalette';
import ConfigPanel from '../components/simulator/ConfigPanel';
import ResultsPanel from '../components/simulator/ResultsPanel';
import CustomNode from '../components/simulator/CustomNode';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Play, RotateCcw, Settings } from 'lucide-react';
import { SCENARIOS, MOCK_SIMULATION_RESULTS } from '../mock';

const SimulatorPage = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [selectedScenario, setSelectedScenario] = useState('url_shortener');
  const [simulationResults, setSimulationResults] = useState(null);
  const [showConfig, setShowConfig] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Define custom node types
  const nodeTypes = useMemo(() => ({ custom: CustomNode }), []);
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
        type: 'custom',
        position,
        data: {
          label: componentData.name,
          component: componentData,
          instanceCount: 1
        },
        style: {
          background: getCategoryColor(componentData.category),
          border: '2px solid #3b82f6',
          borderRadius: '8px',
          padding: '0px',
          minWidth: 160
        }
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
    setSelectedNode(null);
    setShowConfig(false);
  };

  const handleUpdateNode = (nodeId, updates) => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === nodeId
          ? { ...node, data: { ...node.data, ...updates } }
          : node
      )
    );
  };

  const scenario = SCENARIOS[selectedScenario];

  return (
    <div className="h-screen flex flex-col bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
            <Settings className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900">System Design Simulator</h1>
            <p className="text-xs text-slate-500">Build & validate your architecture</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Select value={selectedScenario} onValueChange={setSelectedScenario}>
            <SelectTrigger className="w-64">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.values(SCENARIOS).map((s) => (
                <SelectItem key={s.id} value={s.id}>
                  {s.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button onClick={handleRunSimulation} className="bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
            {isLoading ? (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
            ) : (
              <Play className="w-4 h-4 mr-2" />
            )}
            {isLoading ? 'Running...' : 'Run Simulation'}
          </Button>
          <Button onClick={handleReset} variant="outline">
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Component Palette */}
        <ComponentPalette />

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
