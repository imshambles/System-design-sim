import React from 'react';
import { COMPONENT_SPECS } from '../../mock';
import * as Icons from 'lucide-react';
import { Button } from '../ui/button';

const ComponentPalette = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const categories = [
    { name: 'Infrastructure', key: 'infrastructure', color: 'bg-emerald-100 text-emerald-700' },
    { name: 'Compute', key: 'compute', color: 'bg-blue-100 text-blue-700' },
    { name: 'Storage', key: 'storage', color: 'bg-amber-100 text-amber-700' },
    { name: 'Cache', key: 'cache', color: 'bg-pink-100 text-pink-700' },
    { name: 'Async', key: 'async', color: 'bg-indigo-100 text-indigo-700' }
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
    <div 
      className={`bg-white border-r border-slate-200 overflow-y-auto transition-all duration-300 flex-shrink-0 ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
      style={{ minWidth: isCollapsed ? '4rem' : '16rem' }}
    >
      <div className="border-b border-slate-200">
        {isCollapsed ? (
          <div className="flex flex-col items-center py-4 gap-3">
            <div 
              className="text-sm font-bold text-slate-900 whitespace-nowrap"
              style={{ 
                writingMode: 'vertical-rl', 
                textOrientation: 'mixed',
                transform: 'rotate(180deg)'
              }}
            >
              Components
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="transition-transform flex-shrink-0 h-8 w-8 p-0"
            >
              <Icons.ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <div className="p-4 flex items-center justify-between">
            <div>
              <h2 className="font-bold text-slate-900">Components</h2>
              <p className="text-xs text-slate-500 mt-1">Drag to canvas</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="transition-transform flex-shrink-0 h-8 w-8 p-0"
            >
              <Icons.ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      {!isCollapsed && (
        <div className="p-3 space-y-4">
          {categories.map((category) => {
            const components = Object.values(COMPONENT_SPECS).filter(
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
                          <div className="text-xs text-slate-500">
                            {component.performance.maxRPS
                              ? `${(component.performance.maxRPS / 1000).toFixed(0)}K RPS`
                              : component.performance.maxReadQPS
                              ? `${(component.performance.maxReadQPS / 1000).toFixed(0)}K QPS`
                              : 'Scalable'}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ComponentPalette;