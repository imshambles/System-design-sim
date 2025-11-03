import React from 'react';
import { Handle, Position } from 'reactflow';
import * as Icons from 'lucide-react';

const CustomNode = ({ data }) => {
  const getIcon = (iconName) => {
    const IconComponent = Icons[iconName?.charAt(0).toUpperCase() + iconName?.slice(1).replace(/-/g, '')] || Icons.Box;
    return IconComponent;
  };

  const Icon = getIcon(data.component?.icon);

  return (
    <div className="relative">
      {/* Input Handle (top) */}
      <Handle
        type="target"
        position={Position.Top}
        className="w-3 h-3 !bg-blue-500 border-2 border-white connecting"
      />
      <Handle
        type="target"
        position={Position.Left}
        id="left-target"
        className="w-3 h-3 !bg-blue-500 border-2 border-white connecting"
      />
      <Handle
        type="target"
        position={Position.Right}
        id="right-target"
        className="w-3 h-3 !bg-blue-500 border-2 border-white connecting"
      />
      
      {/* Node Content */}
      <div className="px-4 py-3 min-w-[160px]">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded bg-white bg-opacity-50 flex items-center justify-center">
            <Icon className="w-5 h-5 text-slate-700" />
          </div>
          <div className="flex-1">
            <div className="font-semibold text-sm text-slate-900">
              {data.label}
            </div>
          </div>
        </div>
        
        {data.instanceCount > 1 && (
          <div className="text-xs text-slate-600 bg-white bg-opacity-40 rounded px-2 py-1">
            {data.instanceCount}x instances
          </div>
        )}
      </div>

      {/* Output Handles (bottom, left, right) */}
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-3 h-3 !bg-blue-500 border-2 border-white connecting"
      />
      <Handle
        type="source"
        position={Position.Left}
        id="left"
        className="w-3 h-3 !bg-blue-500 border-2 border-white connecting"
      />
      <Handle
        type="source"
        position={Position.Right}
        id="right"
        className="w-3 h-3 !bg-blue-500 border-2 border-white connecting"
      />
    </div>
  );
};

export default CustomNode;
