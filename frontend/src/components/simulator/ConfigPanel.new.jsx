import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { X, Server } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';
import LLDConfigPanel from './LLDConfigPanel';

const HLDConfigPanel = ({ node, onUpdate }) => {
  const component = node.data.component;
  const [instanceCount, setInstanceCount] = useState(node.data.instanceCount || 1);
  const [config, setConfig] = useState({});

  return (
    <div className="space-y-6">
      <div>
        <div className="text-sm font-semibold text-slate-900 mb-2">{component.name}</div>
        <div className="text-xs text-slate-500 mb-3">{component.type.replace(/_/g, ' ')}</div>

        <div className="bg-slate-50 rounded-lg p-3 space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-slate-500">Availability:</span>
            <span className="font-medium text-slate-900">
              {(component.performance.baseAvailability * 100).toFixed(2)}%
            </span>
          </div>
          {component.performance.maxRPS && (
            <div className="flex justify-between">
              <span className="text-slate-500">Max RPS:</span>
              <span className="font-medium text-slate-900">
                {component.performance.maxRPS.toLocaleString()}
              </span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-slate-500">Cost/hour:</span>
            <span className="font-medium text-slate-900">
              ${component.cost.hourly.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {component.scaling.horizontal && (
        <div>
          <Label htmlFor="instances" className="text-sm font-semibold text-slate-900">
            Instance Count
          </Label>
          <div className="flex items-center gap-2 mt-2">
            <Server className="w-4 h-4 text-slate-400" />
            <Input
              id="instances"
              type="number"
              min="1"
              max="10"
              value={instanceCount}
              onChange={(e) => {
                const value = parseInt(e.target.value) || 1;
                setInstanceCount(value);
                onUpdate(node.id, { instanceCount: value });
              }}
              className="flex-1"
            />
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Scale horizontally to handle more load
          </p>
        </div>
      )}

      {component.configuration && Object.keys(component.configuration).length > 0 && (
        <div className="space-y-4">
          <div className="text-sm font-semibold text-slate-900">Advanced Settings</div>
          {Object.entries(component.configuration).map(([key, configOption]) => (
            <div key={key}>
              <Label htmlFor={key} className="text-xs text-slate-700">
                {configOption.label}
              </Label>
              {configOption.type === 'number' ? (
                <Input
                  id={key}
                  type="number"
                  min={configOption.min || 0}
                  max={configOption.max || 100}
                  defaultValue={configOption.default}
                  onChange={(e) => {
                    const newConfig = { ...config, [key]: parseInt(e.target.value) };
                    setConfig(newConfig);
                    onUpdate(node.id, { configuration: newConfig });
                  }}
                  className="mt-1"
                />
              ) : configOption.type === 'select' ? (
                <Select
                  defaultValue={String(configOption.default)}
                  onValueChange={(value) => {
                    const newConfig = { ...config, [key]: value };
                    setConfig(newConfig);
                    onUpdate(node.id, { configuration: newConfig });
                  }}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {configOption.options.map((opt) => (
                      <SelectItem key={opt} value={String(opt)}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : null}
              <p className="text-xs text-slate-500 mt-1">{configOption.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Scaling Capabilities */}
      <div>
        <div className="text-sm font-semibold text-slate-900 mb-2">Scaling Capabilities</div>
        <div className="space-y-1 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-slate-500">Horizontal Scaling:</span>
            <span className={component.scaling.horizontal ? 'text-emerald-600' : 'text-slate-400'}>
              {component.scaling.horizontal ? 'Supported' : 'Not Available'}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-500">Vertical Scaling:</span>
            <span className={component.scaling.vertical ? 'text-emerald-600' : 'text-slate-400'}>
              {component.scaling.vertical ? 'Supported' : 'Not Available'}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-500">Auto-Scaling:</span>
            <span className={component.scaling.autoScale ? 'text-emerald-600' : 'text-slate-400'}>
              {component.scaling.autoScale ? 'Enabled' : 'Manual'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ConfigPanel = ({ node, onUpdate, onClose }) => {
  const isLLD = node.type === 'lld';

  return (
    <div className="w-80 bg-white border-l border-slate-200 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-slate-200 flex items-center justify-between">
        <h3 className="font-bold text-slate-900">Configuration</h3>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="w-4 h-4" />
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4">
          {isLLD ? (
            <LLDConfigPanel node={node} onUpdate={onUpdate} />
          ) : (
            <HLDConfigPanel node={node} onUpdate={onUpdate} />
          )}
        </div>
      </ScrollArea>

      {/* Footer */}
      <div className="p-4 border-t border-slate-200">
        <Button onClick={() => onUpdate(node.id, {})} className="w-full bg-blue-600 hover:bg-blue-700">
          Apply Changes
        </Button>
      </div>
    </div>
  );
};

export default ConfigPanel;