import React from 'react';
import { LLD_COMPONENT_SPECS } from '../../mock';
import * as Icons from 'lucide-react';

const LLDComponentPalette = () => {
  const categories = [
    { name: 'Classes', key: 'class', color: 'bg-blue-100 text-blue-700' },
    { name: 'Design Patterns', key: 'design_pattern', color: 'bg-purple-100 text-purple-700' },
    { name: 'Data Structures', key: 'data_structure', color: 'bg-green-100 text-green-700' },
    { name: 'Interfaces', key: 'interface', color: 'bg-yellow-100 text-yellow-700' },
    { name: 'Tables', key: 'table', color: 'bg-pink-100 text-pink-700' },
    { name: 'API Endpoints', key: 'api_endpoint', color: 'bg-orange-100 text-orange-700' }
  ];

  const onDragStart = (event, component) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify(component));
    event.dataTransfer.effectAllowed = 'move';
  };

  const getIcon = (iconName) => {
    const IconComponent = Icons[iconName.charAt(0).toUpperCase() + iconName.slice(1).replace(/-/g, '')];
    return IconComponent || Icons.Box;
  };

  return (
    <div className="w-64 bg-white border-r border-slate-200 overflow-y-auto">
      <div className="p-4 border-b border-slate-200">
        <h2 className="font-bold text-slate-900">LLD Components</h2>
        <p className="text-xs text-slate-500 mt-1">Drag to canvas</p>
      </div>

      <div className="p-3 space-y-4">
        {categories.map((category) => {
          const components = Object.values(LLD_COMPONENT_SPECS).filter(
            (c) => c.category === category.key
          );

          if (components.length === 0) return null;

          return (
            <div key={category.key}>
              <div className={`text-xs font-semibold px-2 py-1 rounded ${category.color} mb-2`}>
                {category.name}
              </div>
              <div className="space-y-2">
                {components.map((component) => {
                  const Icon = getIcon(component.icon);
                  return (
                    <div
                      key={component.id}
                      draggable
                      onDragStart={(e) => onDragStart(e, component)}
                      className="flex items-center gap-2 p-2 rounded-lg border border-slate-200 bg-white hover:border-blue-400 hover:shadow-md cursor-move transition-all"
                    >
                      <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-slate-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-medium text-slate-900 truncate">
                          {component.name}
                        </div>
                        {component.type === 'design_pattern' && (
                          <div className="text-xs text-slate-500">
                            {component.designPattern} Pattern
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LLDComponentPalette;