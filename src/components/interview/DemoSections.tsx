
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import DemoCard from './DemoCard';
import { Play } from 'lucide-react';

const CopilotDemos = () => {
  return (
    <div className="mb-12">
      <h2 className="text-xl font-semibold mb-6">Watch the Interview Copilot™ demo</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Demo 1 */}
        <DemoCard 
          title="How to set up Interview Copilot™ for Live Interview?" 
          buttonText="Watch the tutorial on YouTube"
        >
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg h-24 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-purple-400"></div>
          </div>
        </DemoCard>
        
        {/* Demo 2 */}
        <DemoCard 
          title="How to set up Interview Copilot™ for Coding Interviews?" 
          buttonText="Watch the tutorial"
        >
          <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg h-24 flex items-center justify-center">
            <div className="p-2 text-center text-white bg-gradient-to-r from-orange-500 to-red-500 rounded w-32">
              <span className="text-xs">Interview Copilot for Coding</span>
            </div>
          </div>
        </DemoCard>
        
        {/* Demo 3 */}
        <DemoCard 
          title="How to use AI Mock Interview?" 
          buttonText="Watch the tutorial"
        >
          <div className="bg-gray-100 rounded-lg h-24 flex items-center justify-center">
            <div className="bg-white border border-gray-200 rounded w-16 h-20"></div>
          </div>
        </DemoCard>
        
        {/* Demo 4 */}
        <DemoCard 
          title="How to change Interview Copilot™ settings?" 
          buttonText="Watch the tutorial"
        >
          <div className="bg-gray-100 rounded-lg h-24 flex items-center justify-center">
            <div className="bg-white border border-gray-200 rounded w-16 h-20 relative">
              <div className="absolute bottom-0 right-0 w-8 h-6 bg-orange-500 rounded-tl"></div>
            </div>
          </div>
        </DemoCard>
      </div>
    </div>
  );
};

const AutoApplyDemo = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Watch the Auto Apply demo</h2>
      
      <Card className="rounded-lg overflow-hidden">
        <CardContent className="p-6">
          <div className="md:flex md:gap-6 items-start">
            <div className="mb-4 md:mb-0 md:flex-1">
              <h3 className="font-medium mb-4">Why we need Auto Apply</h3>
              <Button 
                variant="outline" 
                className="flex items-center gap-2 text-sm"
              >
                <Play className="h-4 w-4" />
                Watch the tutorial on YouTube
              </Button>
            </div>
            <div className="md:flex-1">
              <div className="bg-gray-100 rounded-lg h-24 flex items-center justify-center">
                <div className="bg-white border border-gray-200 rounded w-16 h-20"></div>
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
      <CopilotDemos />
      <AutoApplyDemo />
    </>
  );
};

export default DemoSections;
