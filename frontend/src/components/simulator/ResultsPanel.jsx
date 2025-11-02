import React from 'react';
import ReactMarkdown from 'react-markdown';
import { ScrollArea } from '../ui/scroll-area';
import { CheckCircle, Activity } from 'lucide-react';

const ResultsPanel = ({ results }) => {
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
          <div className={`flex items-center gap-3 p-3 rounded-lg ${
            results.error 
              ? 'bg-red-50 border border-red-200' 
              : 'bg-emerald-50 border border-emerald-200'
          }`}>
            {results.error ? (
              <div className="text-sm font-medium text-red-900">
                Simulation Error
              </div>
            ) : (
              <>
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <div>
                  <div className="text-sm font-semibold text-emerald-900">Simulation Complete</div>
                  <div className="text-xs text-emerald-600">Architecture validated successfully</div>
                </div>
              </>
            )}
          </div>

          {/* Feedback */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Feedback
            </h4>
            <div className="space-y-4">
              {/* Analysis */}
              <div className="bg-slate-50 rounded-lg p-3">
                <div className="text-sm text-slate-800 prose">
                  <ReactMarkdown>{results.analysis}</ReactMarkdown>
                </div>
              </div>

              {/* Bottlenecks */}
              {results.bottlenecks && results.bottlenecks.length > 0 && (
                <div>
                  <h5 className="text-sm font-semibold text-slate-900 mb-2">Potential Bottlenecks</h5>
                  <div className="space-y-2">
                    {results.bottlenecks.map((item, index) => (
                      <div key={index} className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                        <div className="text-sm font-medium text-orange-900 mb-1">{item.component}</div>
                        <div className="text-sm text-orange-800">{item.issue}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Suggestions */}
              {results.suggestions && results.suggestions.length > 0 && (
                <div>
                  <h5 className="text-sm font-semibold text-slate-900 mb-2">Suggestions</h5>
                  <div className="space-y-2">
                    {results.suggestions.map((item, index) => (
                      <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                        <div className="text-sm font-medium text-blue-900 mb-1">{item.component}</div>
                        <div className="text-sm text-blue-800">{item.suggestion}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default ResultsPanel;
