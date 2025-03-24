
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Recommendations = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Overall Recommendations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p>
            Based on your interview performance, here are some key recommendations to help you improve:
          </p>
          
          <ul className="list-disc list-inside space-y-2">
            <li>Use the STAR method (Situation, Task, Action, Result) more consistently when answering behavioral questions</li>
            <li>Provide more specific metrics and outcomes when discussing past achievements</li>
            <li>Enhance your technical knowledge in areas relevant to the position</li>
            <li>Practice concise communication - some answers could be more focused</li>
            <li>Prepare more diverse examples that showcase different aspects of your leadership experience</li>
          </ul>
          
          <div className="bg-green-50 text-green-800 p-4 rounded-md border border-green-200 mt-6">
            <h4 className="font-medium mb-2">Next Steps</h4>
            <p>
              We recommend scheduling another mock interview in 2 weeks after working on these areas. 
              Focus particularly on technical knowledge and providing concrete examples with measurable outcomes.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Recommendations;
