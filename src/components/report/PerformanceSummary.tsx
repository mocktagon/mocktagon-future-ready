
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PerformanceSummary = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Overall Score</h3>
            <p className="text-3xl font-bold mt-1">86%</p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Strengths</h3>
            <ul className="mt-1 list-disc list-inside">
              <li>Safety Awareness</li>
              <li>Problem Solving</li>
              <li>Regulatory Compliance</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Areas for Improvement</h3>
            <ul className="mt-1 list-disc list-inside">
              <li>Communication Skills</li>
              <li>Cross-functional Collaboration</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Questions Answered</h3>
            <p className="text-xl font-semibold mt-1">5/5</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceSummary;
