import React from 'react';
import { Handle, Position } from 'reactflow';
import * as Icons from 'lucide-react';

const LLDNode = ({ data }) => {
  const { label, component } = data;
  const Icon = Icons[component.icon.charAt(0).toUpperCase() + component.icon.slice(1).replace(/-/g, '')] || Icons.Box;

  // Render methods with proper visibility symbols
  const renderMethods = (methods = []) => {
    return methods.map((method, index) => {
      const visibilitySymbol = {
        public: '+',
        private: '-',
        protected: '#'
      }[method.visibility];

      const params = method.parameters.map(p => `${p.name}: ${p.type}`).join(', ');
      
      return (
        <div key={index} className="text-xs font-mono">
          {visibilitySymbol} {method.name}({params}): {method.returnType}
          {method.complexity && (
            <span className="text-slate-500 ml-1">{method.complexity}</span>
          )}
        </div>
      );
    });
  };

  // Render properties with proper visibility symbols
  const renderProperties = (properties = []) => {
    return properties.map((prop, index) => {
      const visibilitySymbol = {
        public: '+',
        private: '-',
        protected: '#'
      }[prop.visibility];

      return (
        <div key={index} className="text-xs font-mono">
          {visibilitySymbol} {prop.name}: {prop.type}
          {prop.isStatic && <span className="text-slate-500 ml-1">(static)</span>}
        </div>
      );
    });
  };

  // Determine node style based on component type
  const getNodeStyle = () => {
    switch (component.type) {
      case 'interface':
        return 'border-yellow-500 bg-yellow-50';
      case 'design_pattern':
        return 'border-purple-500 bg-purple-50';
      case 'table':
        return 'border-pink-500 bg-pink-50';
      case 'api_endpoint':
        return 'border-orange-500 bg-orange-50';
      default:
        return 'border-blue-500 bg-blue-50';
    }
  };

  return (
    <div className={`px-2 pt-2 pb-1 rounded-lg border-2 ${getNodeStyle()}`}>
      {/* Top Handle for incoming connections */}
      <Handle
        type="target"
        position={Position.Top}
        className="!bg-slate-500"
      />

      {/* Header */}
      <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
        <div className="w-6 h-6 rounded bg-white flex items-center justify-center">
          <Icon className="w-4 h-4 text-slate-600" />
        </div>
        <div className="flex-1">
          <div className="text-xs font-semibold text-slate-900">
            {component.type === 'interface' && '«interface»'}
            {component.type === 'design_pattern' && `«${component.designPattern}»`}
          </div>
          <div className="text-sm font-bold">{label}</div>
        </div>
      </div>

      {/* Properties Section */}
      {component.properties && component.properties.length > 0 && (
        <div className="py-1 border-b border-slate-200">
          {renderProperties(component.properties)}
        </div>
      )}

      {/* Methods Section */}
      {component.methods && component.methods.length > 0 && (
        <div className="py-1">
          {renderMethods(component.methods)}
        </div>
      )}

      {/* API Endpoint Info */}
      {component.type === 'api_endpoint' && component.endpoint && (
        <div className="py-1 text-xs">
          <div className="font-semibold">{component.endpoint.method} {component.endpoint.path}</div>
          {component.endpoint.authentication && (
            <div className="text-orange-600">🔒 Requires Auth</div>
          )}
        </div>
      )}

      {/* Table Schema Preview */}
      {component.type === 'table' && component.schema && (
        <div className="py-1 text-xs">
          <div className="font-semibold">PK: {component.schema.primaryKey}</div>
          <div className="text-slate-500">
            {component.schema.columns.length} columns, {component.schema.indexes.length} indexes
          </div>
        </div>
      )}

      {/* Bottom Handle for outgoing connections */}
      <Handle
        type="source"
        position={Position.Bottom}
        className="!bg-slate-500"
      />
    </div>
  );
};

export default LLDNode;