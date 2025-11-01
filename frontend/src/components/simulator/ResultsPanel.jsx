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
          <div className="flex items-center gap-3 p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
            <CheckCircle className="w-5 h-5 text-emerald-600" />
            <div>
              <div className="text-sm font-semibold text-emerald-900">Simulation Complete</div>
              <div className="text-xs text-emerald-600">Architecture validated successfully</div>
            </div>
          </div>

          {/* Feedback */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Feedback
            </h4>
            <div className="space-y-2">
              <div className="bg-slate-50 rounded-lg p-3">
                <div className="text-sm text-slate-800 prose">
                  <ReactMarkdown>{results.message}</ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default ResultsPanel;
