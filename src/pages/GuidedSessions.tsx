
import React from 'react';
import { Layout } from '@/components/Layout';
import Sidebar from '@/components/interview/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, BookOpen, Award, Clock } from 'lucide-react';

const GuidedSessions = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 shrink-0">
            <Sidebar />
          </div>
          
          {/* Main Content Area */}
          <div className="flex-1">
            <div className="mb-6">
              <h1 className="text-2xl font-bold">Guided Interview Sessions</h1>
              <p className="text-gray-600 mt-2">
                Follow our structured interview preparation program with expert guidance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Play className="h-5 w-5 text-primary" />
                    Beginner Track
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Perfect for first-time interviewees or those looking to build core skills
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                    <Clock className="h-4 w-4" />
                    <span>4 sessions · 45 min each</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Award className="h-4 w-4" />
                    <span>Basic certificate upon completion</span>
                  </div>
                  <Button className="w-full">Start Track</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Play className="h-5 w-5 text-primary" />
                    Advanced Track
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    For experienced professionals looking to master interview techniques
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                    <Clock className="h-4 w-4" />
                    <span>6 sessions · 60 min each</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Award className="h-4 w-4" />
                    <span>Advanced certificate upon completion</span>
                  </div>
                  <Button className="w-full">Start Track</Button>
                </CardContent>
              </Card>
            </div>
            
            <h2 className="text-xl font-semibold mb-4">Specialized Sessions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Behavioral Questions</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Master the STAR method for answering behavioral questions
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    View Session
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Technical Interview</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Practice common technical questions for your field
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    View Session
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Salary Negotiation</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Learn strategies to negotiate the best compensation package
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    View Session
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">Upgrade for Full Access</h3>
                    <p className="text-gray-600">
                      Get unlimited access to all guided sessions, personalized feedback, and expert coaching
                    </p>
                  </div>
                  <Button className="w-full md:w-auto">Upgrade Now</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GuidedSessions;
