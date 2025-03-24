
import React from 'react';

interface QuestionItemProps {
  id: number;
  question: string;
  answer: string;
  suggestions: string;
}

const QuestionItem = ({ id, question, answer, suggestions }: QuestionItemProps) => {
  return (
    <div className="border-b pb-8 last:border-b-0 last:pb-0">
      <h3 className="text-lg font-semibold mb-2">Question {id}: {question}</h3>
      
      <div className="mb-4">
        <h4 className="text-sm font-medium text-muted-foreground mb-1">Your Answer</h4>
        <p className="bg-muted p-3 rounded-md">{answer}</p>
      </div>
      
      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-1">Improvement Suggestions</h4>
        <p className="bg-orange-50 text-orange-800 p-3 rounded-md border border-orange-200">
          {suggestions}
        </p>
      </div>
    </div>
  );
};

export default QuestionItem;
