import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ChevronRight } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { ScrollArea } from '../ui/scroll-area';
import { QUESTIONS } from '../../mock/questions.js';

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

const QuestionSelector = ({ selectedQuestionId, onQuestionSelect, mode }) => {
  const questions = Object.values(QUESTIONS).filter(q => q.type === mode);

  const [isCollapsed, setIsCollapsed] = React.useState(false);

  return (
    <div className={`bg-white border-r border-slate-200 flex flex-col transition-all duration-300 flex-shrink-0 ${
      isCollapsed ? 'w-12' : 'w-96'
    }`}>
      <div className="p-4 border-b border-slate-200 flex items-center justify-between relative">
        {!isCollapsed ? (
          <div>
            <h2 className="font-bold text-slate-900">Select a Question</h2>
            <p className="text-xs text-slate-500 mt-1">
              Choose a {mode} question to practice
            </p>
          </div>
        ) : (
          <div className="flex-1 flex justify-center">
            <span className="font-bold text-slate-900 transform -rotate-90 whitespace-nowrap origin-center translate-y-8">
              Questions
            </span>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`${isCollapsed ? 'rotate-180' : ''} transition-transform absolute right-2`}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-4">
          {!isCollapsed && questions.map((question) => (
            <Card
              key={question.id}
              className={`cursor-pointer transition-all hover:border-blue-400 ${
                selectedQuestionId === question.id ? 'border-blue-500 shadow-md' : ''
              }`}
              onClick={() => onQuestionSelect(question.id)}
            >
              <CardHeader className="p-4 pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{question.title}</CardTitle>
                  <Badge 
                    variant="outline"
                    className={getDifficultyColor(question.difficulty)}
                  >
                    {question.difficulty}
                  </Badge>
                </div>
                <CardDescription className="text-sm">
                  {question.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-2">
                <div className="text-xs text-slate-500 space-y-2">
                  <h4 className="font-semibold text-slate-700">Requirements:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {question.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

QuestionSelector.propTypes = {
  selectedQuestionId: PropTypes.string.isRequired,
  onQuestionSelect: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(['HLD', 'LLD']).isRequired
};

export default QuestionSelector;