import React from 'react';
import { ScrollArea } from '../ui/scroll-area';
import { AlertTriangle, CheckCircle, DollarSign, Activity, TrendingUp } from 'lucide-react';
import { Badge } from '../ui/badge';

const ResultsPanel = ({ results }) => {
  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'warning':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      default:
        return 'bg-blue-100 text-blue-700 border-blue-200';
    }
  };

  return (
    <div className="w-96 bg-white border-l border-slate-200 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-slate-200">
        <h3 className="font-bold text-slate-900">Simulation Results</h3>
        <p className="text-xs text-slate-500 mt-1">Analysis & recommendations</p>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-6">
          {/* Status */}
          <div className="flex items-center gap-3 p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
            <CheckCircle className="w-5 h-5 text-emerald-600" />
            <div>
              <div className="text-sm font-semibold text-emerald-900">Simulation Complete</div>
              <div className="text-xs text-emerald-600">Architecture validated successfully</div>
            </div>
          </div>

          {/* Traffic Metrics */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Traffic Analysis
            </h4>
            <div className="space-y-2">
              <div className="bg-slate-50 rounded-lg p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-slate-500">Peak RPS</span>
                  <span className="text-lg font-bold text-slate-900">
                    {results.traffic.peakRPS.toLocaleString()}
                  </span>
                </div>
                <div className="space-y-1">
                  {results.traffic.breakdown.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-xs">
                      <span className="text-slate-600">{item.operation}</span>
                      <span className="font-medium text-slate-900">
                        {item.rps.toLocaleString()} ({item.percentage}%)
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottlenecks */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Bottlenecks ({results.bottlenecks.length})
            </h4>
            <div className="space-y-3">
              {results.bottlenecks.length === 0 ? (
                <div className="text-xs text-slate-500 p-3 bg-slate-50 rounded-lg">
                  No bottlenecks detected. Your architecture looks good!
                </div>
              ) : (
                results.bottlenecks.map((issue) => (
                  <div
                    key={issue.id}
                    className={`p-3 rounded-lg border ${getSeverityColor(issue.severity)}`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="text-xs font-semibold">{issue.componentName}</div>
                        <div className="text-xs opacity-80 mt-0.5">{issue.message}</div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {issue.severity}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="opacity-80">Current / Capacity</span>
                      <span className="font-medium">
                        {typeof issue.current === 'number'
                          ? issue.current.toLocaleString()
                          : issue.current}
                        {' / '}
                        {typeof issue.capacity === 'number'
                          ? issue.capacity.toLocaleString()
                          : issue.capacity}
                      </span>
                    </div>
                    <div className="bg-white bg-opacity-50 rounded p-2 text-xs">
                      <span className="font-medium">Suggestion:</span> {issue.suggestion}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Cost Estimate */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Cost Analysis
            </h4>
            <div className="bg-slate-50 rounded-lg p-3">
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-600">Estimated Monthly Cost</span>
                <span className="text-xl font-bold text-slate-900">
                  ${results.estimatedCost.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              System Availability
            </h4>
            <div className="bg-slate-50 rounded-lg p-3">
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-600">Overall Availability</span>
                <span className="text-xl font-bold text-emerald-600">
                  {(results.availability * 100).toFixed(2)}%
                </span>
              </div>
              <div className="text-xs text-slate-500 mt-2">
                {(100 - results.availability * 100) < 0.1
                  ? '4 nines (excellent)'
                  : (100 - results.availability * 100) < 1
                  ? '3 nines (good)'
                  : '2 nines (acceptable)'}
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default ResultsPanel;
