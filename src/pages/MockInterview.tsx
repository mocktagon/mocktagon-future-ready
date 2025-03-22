
import React from 'react';
import { Layout } from '@/components/Layout';
import { 
  FileText, MessageSquare, ChevronRight, BookText,
  Users, Play
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const MockInterview = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 shrink-0">
            <Card className="sticky top-24">
              <CardContent className="p-4">
                <div className="font-bold text-xl mb-6 flex items-center gap-2">
                  <span className="bg-orange-500 text-white rounded px-1 text-xs">AI</span>
                  Final Round
                </div>
                
                <div className="space-y-1">
                  <h3 className="font-medium text-gray-500 mb-1 text-sm">Interview</h3>
                  <Button variant="ghost" className="w-full justify-start gap-2 text-sm py-2 h-auto">
                    <MessageSquare className="h-4 w-4" />
                    Live Interview
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-2 text-sm bg-orange-50 text-orange-600 py-2 h-auto">
                    <MessageSquare className="h-4 w-4" />
                    Mock Interview
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-2 text-sm py-2 h-auto">
                    <BookText className="h-4 w-4" />
                    Preparation Hub
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-2 text-sm py-2 h-auto">
                    <FileText className="h-4 w-4" />
                    Document Center
                  </Button>
                </div>
                
                <Separator className="my-4" />
                
                <div className="space-y-1">
                  <h3 className="font-medium text-gray-500 mb-1 text-sm">Tools</h3>
                  <Button variant="ghost" className="w-full justify-start gap-2 text-sm py-2 h-auto">
                    <BookText className="h-4 w-4" />
                    AI Material Generator
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-2 text-sm py-2 h-auto">
                    <Users className="h-4 w-4" />
                    Auto Apply <span className="ml-1 bg-slate-100 text-slate-800 rounded text-xs px-1">Beta</span>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-2 text-sm py-2 h-auto">
                    <MessageSquare className="h-4 w-4" />
                    Interview Question Bank
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-2 text-sm py-2 h-auto">
                    <FileText className="h-4 w-4" />
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Content Area */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-4">Get the most out of Final Round AI</h1>
            
            <h2 className="text-xl font-semibold mb-6">Start with the basics</h2>
            
            {/* Steps Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {/* Step 1 */}
              <Card className="rounded-lg">
                <CardContent className="p-4 flex flex-col h-full">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                    <h3 className="font-semibold">Add your resume</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">Upload your resume and cover letter to customize your AI</p>
                  <div className="mt-auto flex justify-end">
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
              
              {/* Step 2 */}
              <Card className="rounded-lg">
                <CardContent className="p-4 flex flex-col h-full">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
                    <h3 className="font-semibold">Add your position</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">Upload job description so that AI can provide customized answer</p>
                  <div className="mt-auto flex justify-end">
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
              
              {/* Step 3 */}
              <Card className="rounded-lg">
                <CardContent className="p-4 flex flex-col h-full">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">3</span>
                    <h3 className="font-semibold">Launch an interview</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">Launch your interview Copilot™ for real-time interview support</p>
                  <div className="mt-auto flex justify-end">
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
              
              {/* Step 4 */}
              <Card className="rounded-lg">
                <CardContent className="p-4 flex flex-col h-full">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">4</span>
                    <h3 className="font-semibold">View interview report</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">Review your interview notes and past interview performance</p>
                  <div className="mt-auto flex justify-end">
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Copilot Demo Section */}
            <div className="mb-12">
              <h2 className="text-xl font-semibold mb-6">Watch the Interview Copilot™ demo</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Demo 1 */}
                <Card className="rounded-lg overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-4">How to set up Interview Copilot™ for Live Interview?</h3>
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2 text-sm"
                    >
                      <Play className="h-4 w-4" />
                      Watch the tutorial on YouTube
                    </Button>
                    <div className="mt-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg h-24 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-purple-400"></div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Demo 2 */}
                <Card className="rounded-lg overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-4">How to set up Interview Copilot™ for Coding Interviews?</h3>
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2 text-sm"
                    >
                      <Play className="h-4 w-4" />
                      Watch the tutorial
                    </Button>
                    <div className="mt-4 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg h-24 flex items-center justify-center">
                      <div className="p-2 text-center text-white bg-gradient-to-r from-orange-500 to-red-500 rounded w-32">
                        <span className="text-xs">Interview Copilot for Coding</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Demo 3 */}
                <Card className="rounded-lg overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-4">How to use AI Mock Interview?</h3>
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2 text-sm"
                    >
                      <Play className="h-4 w-4" />
                      Watch the tutorial
                    </Button>
                    <div className="mt-4 bg-gray-100 rounded-lg h-24 flex items-center justify-center">
                      <div className="bg-white border border-gray-200 rounded w-16 h-20"></div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Demo 4 */}
                <Card className="rounded-lg overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-4">How to change Interview Copilot™ settings?</h3>
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2 text-sm"
                    >
                      <Play className="h-4 w-4" />
                      Watch the tutorial
                    </Button>
                    <div className="mt-4 bg-gray-100 rounded-lg h-24 flex items-center justify-center">
                      <div className="bg-white border border-gray-200 rounded w-16 h-20 relative">
                        <div className="absolute bottom-0 right-0 w-8 h-6 bg-orange-500 rounded-tl"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Auto Apply Demo Section */}
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
            
            {/* Onboarding banner at the bottom */}
            <div className="fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-lg p-4 max-w-md flex items-center justify-between">
              <p className="text-sm font-medium">Complete onboarding tutorial and receive a reward</p>
              <Button size="sm" className="bg-orange-500 hover:bg-orange-600 ml-4">5</Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MockInterview;
