
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Info, Mic, BookText } from 'lucide-react';

const MocktagonGuide = () => {
  return (
    <div className="mb-12">
      <h2 className="text-xl font-semibold mb-6">Welcome to Mocktagon</h2>
      
      <Card className="rounded-lg overflow-hidden mb-6">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-orange-100 p-3 rounded-full">
              <Mic className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <h3 className="font-medium mb-2">Practice with Mock Interviews</h3>
              <p className="text-sm text-gray-600 mb-4">
                Mocktagon's AI-powered mock interviews provide realistic practice for your upcoming interviews. 
                Get immediate feedback and improve your responses.
              </p>
              <Button variant="outline" className="text-sm">
                Start a Mock Interview
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="rounded-lg overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <BookText className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium mb-2">Learn Interview Best Practices</h3>
              <p className="text-sm text-gray-600 mb-4">
                Our comprehensive guides cover everything from answering common questions to body language and presentation tips.
              </p>
              <Button variant="outline" className="text-sm">
                Explore Resources
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const MocktagonTips = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Interview Success Tips</h2>
      
      <Card className="rounded-lg overflow-hidden">
        <CardContent className="p-6">
          <div className="md:flex md:gap-6 items-start">
            <div className="mb-4 md:mb-0 md:flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Info className="h-5 w-5 text-orange-600" />
                <h3 className="font-medium">Get the most from Mocktagon</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li className="flex items-start gap-2">
                  <span className="bg-orange-100 text-orange-600 rounded-full h-5 w-5 flex items-center justify-center shrink-0 mt-0.5">1</span>
                  <span>Complete at least 5 mock interviews before your actual interview</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-orange-100 text-orange-600 rounded-full h-5 w-5 flex items-center justify-center shrink-0 mt-0.5">2</span>
                  <span>Review your feedback carefully after each session</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-orange-100 text-orange-600 rounded-full h-5 w-5 flex items-center justify-center shrink-0 mt-0.5">3</span>
                  <span>Practice with different interview types to build versatility</span>
                </li>
              </ul>
            </div>
            <div className="md:flex-1">
              <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg h-24 flex items-center justify-center">
                <div className="p-2 text-center text-white bg-gradient-to-r from-orange-500 to-red-500 rounded w-32">
                  <span className="text-xs">Mocktagon Guide</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const DemoSections = () => {
  return (
    <>
      <MocktagonGuide />
      <MocktagonTips />
    </>
  );
};

export default DemoSections;
