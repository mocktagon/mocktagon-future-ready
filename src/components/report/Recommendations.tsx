
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
            Based on your interview performance for the Aircraft Engineer Team Lead position, here are key recommendations to strengthen your candidacy:
          </p>
          
          <ul className="list-disc list-inside space-y-2">
            <li>Provide more specific examples of how you've ensured regulatory compliance in past projects</li>
            <li>Develop stronger responses about cross-functional team collaboration, particularly with quality assurance and manufacturing</li>
            <li>Prepare more concrete examples of how you've optimized aircraft systems for both performance and manufacturability</li>
            <li>Enhance your communication of technical concepts in ways accessible to non-technical stakeholders</li>
            <li>Expand on your experience with emerging aerospace technologies like advanced composites and electric propulsion systems</li>
          </ul>
          
          <div className="bg-green-50 text-green-800 p-4 rounded-md border border-green-200 mt-6">
            <h4 className="font-medium mb-2">Next Steps</h4>
            <p>
              We recommend scheduling another mock interview focused specifically on aerospace regulatory knowledge and team leadership scenarios. 
              Also consider preparing a brief technical presentation on a complex aircraft system to demonstrate your communication skills.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Recommendations;
