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
import { ScrollArea } from '../components/ui/scroll-area';
import { Badge } from '../components/ui/badge';
import { SCENARIOS } from '../mock';
import { QUESTIONS } from '../mock/questions.js';

// Helper function to get the color for difficulty badges
const getDifficultyColor = (difficulty) => {
  switch (difficulty) {
    case 'Easy':
      return 'bg-green-100 text-green-800';
    case 'Medium':
      return 'bg-yellow-100 text-yellow-800';
    case 'Hard':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};
import ApiKeyDialog from '../components/simulator/ApiKeyDialog';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Styles for ReactFlow container
const reactFlowDefaultStyles = {
  height: '100%',
  width: '100%'
};

// Styles for SelectItem to ensure consistent height and alignment
const selectItemStyles = {
  height: '40px',
  padding: '0 8px',
  display: 'flex',
  alignItems: 'center',
  transition: 'background-color 150ms',
};

const SimulatorPage = () => {
  const [mode, setMode] = useState('HLD'); // 'HLD' or 'LLD'
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [showApiKeyDialog, setShowApiKeyDialog] = useState(false);

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

  const handleSaveApiKey = (apiKey) => {
    localStorage.setItem('apiKey', apiKey);
  };

  const handleRunSimulation = async () => {
    const apiKey = localStorage.getItem('apiKey');
    if (!apiKey) {
      setShowApiKeyDialog(true);
      return;
    }

    setIsLoading(true);
    setSimulationResults(null);

    const connectedNodes = new Set();
    edges.forEach(edge => {
      connectedNodes.add(edge.source);
      connectedNodes.add(edge.target);
    });

    const nodesToSend = nodes.filter(node => connectedNodes.has(node.id));

    const simulationData = {
      scenario: selectedScenario,
      nodes: nodesToSend.map(node => ({ id: node.id, ...node.data })),
      edges: edges.map(edge => ({
        id: edge.id,
        source: edge.source,
        target: edge.target
      }))
    };

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });
      const prompt = `Simulate a system design for the following scenario: ${JSON.stringify(simulationData)}. Provide a detailed analysis of the design, including potential bottlenecks, scalability issues, and suggestions for improvement. Return the response as a JSON object with the following structure: { "analysis": "<your_analysis_here>", "bottlenecks": [{"component": "<component_name>", "issue": "<issue_description>"}], "suggestions": [{"component": "<component_name>", "suggestion": "<suggestion_description>"}] }`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.candidates[0].content.parts[0].text;
      const jsonStart = text.indexOf('{');
      const jsonEnd = text.lastIndexOf('}');
      const jsonString = text.substring(jsonStart, jsonEnd + 1);
      setSimulationResults(JSON.parse(jsonString));
    } catch (error) {
      console.error("Error running simulation:", error);
      setSimulationResults({
        analysis: "An error occurred while running the simulation. This could be due to:\n\n" +
                 "1. Invalid API key\n" +
                 "2. Network connectivity issues\n" +
                 "3. Service unavailability\n\n" +
                 "Please try again or check your API key in settings.",
        error: true
      });
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
    <div className="flex flex-col h-screen">
      {/* Top Control Bar */}
      <div className="flex items-center justify-between p-4 border-b bg-slate-50">
        <div className="flex items-center gap-4">
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
          <div className="w-[300px]">
            <Select value={selectedScenario} onValueChange={setSelectedScenario}>
              <SelectTrigger className="w-full">
                <SelectValue>
                  {QUESTIONS[selectedScenario]?.title || "Select a question"}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {(() => {
                  const filteredQuestions = Object.values(QUESTIONS).filter(q => q.type === mode);
                  const itemHeight = 40; // Height of each item in pixels
                  const maxVisibleItems = 5;
                  const contentHeight = Math.min(filteredQuestions.length, maxVisibleItems) * itemHeight;
                  const needsScroll = filteredQuestions.length > maxVisibleItems;

                  return (
                    <ScrollArea className={`${needsScroll ? `h-[${maxVisibleItems * itemHeight}px]` : ''}`}>
                      <div className={`py-1 ${!needsScroll ? 'h-fit' : ''}`}>
                        {filteredQuestions.map(question => (
                          <SelectItem 
                            key={question.id} 
                            value={question.id}
                            className="h-[40px]"
                          >
                            <div className="flex items-center justify-between w-full pr-4">
                              <span>{question.title}</span>
                              <Badge 
                                variant="outline"
                                className={getDifficultyColor(question.difficulty)}
                              >
                                {question.difficulty}
                              </Badge>
                            </div>
                          </SelectItem>
                        ))}
                      </div>
                    </ScrollArea>
                  );
                })()}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowApiKeyDialog(true)}
          >
            <Settings className="w-4 h-4 mr-2" />
            Enter your LLM API Key
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleReset}
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={handleRunSimulation}
            disabled={isLoading || nodes.length === 0}
          >
            {isLoading ? (
              <span className="animate-spin mr-2">⌛</span>
            ) : (
              <Play className="w-4 h-4 mr-2" />
            )}
            Run Simulation
          </Button>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        <div className="flex flex-shrink-0">
          {/* Component Palette */}
          {mode === 'HLD' ? <ComponentPalette /> : <LLDComponentPalette />}
        </div>

        {/* Canvas */}
        <div className="flex-1 relative min-w-[600px] h-full">
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
            connectionRadius={50}
            className="bg-slate-50 h-full w-full connection-status"
          >
            <Background color="#cbd5e1" gap={16} />
            <Controls />
            <MiniMap
              nodeColor={(node) => node.style?.background || '#f3f4f6'}
              maskColor="rgba(0, 0, 0, 0.1)"
            />
          </ReactFlow>

          {/* Question Info Overlay */}
          {QUESTIONS[selectedScenario] && (
            <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-sm border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-1">{QUESTIONS[selectedScenario].title}</h3>
              <p className="text-xs text-slate-600 mb-3">{QUESTIONS[selectedScenario].description}</p>
              <div className="space-y-2 text-xs">
                <div>
                  <h4 className="font-semibold text-slate-700 mb-1">Requirements:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {QUESTIONS[selectedScenario].requirements.map((req, index) => (
                      <li key={index} className="text-slate-600">{req}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 mb-1">Constraints:</h4>
                  <div className="space-y-1">
                    {Object.entries(QUESTIONS[selectedScenario].constraints).map(([key, value], index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-slate-500">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                        <span className="font-medium text-slate-900">{value}</span>
                      </div>
                    ))}
                  </div>
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
      <ApiKeyDialog
        open={showApiKeyDialog}
        onClose={() => setShowApiKeyDialog(false)}
        onSave={handleSaveApiKey}
      />
    </div>
  );
};

export default SimulatorPage;
