
import React from 'react';
import { Layout } from '@/components/Layout';
import Sidebar from '@/components/interview/Sidebar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Video, FileText, BookText, Download, ExternalLink } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const LearningResources = () => {
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
              <h1 className="text-2xl font-bold">Learning Resources</h1>
              <p className="text-gray-600 mt-2">
                Comprehensive materials to help you prepare for your interviews
              </p>
            </div>
            
            <Tabs defaultValue="guides" className="mb-8">
              <TabsList className="mb-4">
                <TabsTrigger value="guides">Guides</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
                <TabsTrigger value="templates">Templates</TabsTrigger>
              </TabsList>
              
              <TabsContent value="guides">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookText className="h-5 w-5 text-primary" />
                        Resume & Cover Letter Guide
                      </CardTitle>
                      <CardDescription>
                        Craft standout documents that get you interviews
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">
                        Learn how to highlight your skills and experiences effectively. Includes templates and examples for different industries.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-secondary text-xs px-2 py-1 rounded-full">Resume Writing</span>
                        <span className="bg-secondary text-xs px-2 py-1 rounded-full">Templates</span>
                        <span className="bg-secondary text-xs px-2 py-1 rounded-full">ATS Optimization</span>
                      </div>
                      <Button className="w-full">Read Guide</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookText className="h-5 w-5 text-primary" />
                        Behavioral Interview Handbook
                      </CardTitle>
                      <CardDescription>
                        Master the art of STAR method responses
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">
                        Comprehensive guide to behavioral questions with 50+ example answers and frameworks to structure your responses.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-secondary text-xs px-2 py-1 rounded-full">STAR Method</span>
                        <span className="bg-secondary text-xs px-2 py-1 rounded-full">Example Answers</span>
                        <span className="bg-secondary text-xs px-2 py-1 rounded-full">Common Questions</span>
                      </div>
                      <Button className="w-full">Read Guide</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookText className="h-5 w-5 text-primary" />
                        Technical Interview Prep
                      </CardTitle>
                      <CardDescription>
                        Industry-specific technical interview preparation
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">
                        Deep dive into technical questions across engineering, finance, healthcare, and more with detailed explanation and solutions.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-secondary text-xs px-2 py-1 rounded-full">Problem Solving</span>
                        <span className="bg-secondary text-xs px-2 py-1 rounded-full">Industry Specific</span>
                        <span className="bg-secondary text-xs px-2 py-1 rounded-full">Case Studies</span>
                      </div>
                      <Button className="w-full">Read Guide</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookText className="h-5 w-5 text-primary" />
                        Salary Negotiation Playbook
                      </CardTitle>
                      <CardDescription>
                        Strategies to maximize your compensation package
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">
                        Learn proven tactics to negotiate your salary, benefits, and perks. Includes scripts and industry-specific benchmark data.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-secondary text-xs px-2 py-1 rounded-full">Negotiation Scripts</span>
                        <span className="bg-secondary text-xs px-2 py-1 rounded-full">Benefits</span>
                        <span className="bg-secondary text-xs px-2 py-1 rounded-full">Market Rates</span>
                      </div>
                      <Button className="w-full">Read Guide</Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="videos">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <div className="aspect-video bg-gray-100 rounded-t-lg flex items-center justify-center">
                      <Video className="h-10 w-10 text-gray-400" />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-1">Body Language Mastery</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Learn how to project confidence and build rapport through non-verbal communication
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">18:32</span>
                        <Button size="sm" variant="outline" className="gap-1">
                          <ExternalLink className="h-4 w-4" />
                          Watch
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <div className="aspect-video bg-gray-100 rounded-t-lg flex items-center justify-center">
                      <Video className="h-10 w-10 text-gray-400" />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-1">Answering Difficult Questions</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Strategies for handling unexpected or challenging interview questions
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">24:15</span>
                        <Button size="sm" variant="outline" className="gap-1">
                          <ExternalLink className="h-4 w-4" />
                          Watch
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <div className="aspect-video bg-gray-100 rounded-t-lg flex items-center justify-center">
                      <Video className="h-10 w-10 text-gray-400" />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-1">Virtual Interview Setup</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        How to set up your space, technology, and appearance for online interviews
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">15:48</span>
                        <Button size="sm" variant="outline" className="gap-1">
                          <ExternalLink className="h-4 w-4" />
                          Watch
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <div className="aspect-video bg-gray-100 rounded-t-lg flex items-center justify-center">
                      <Video className="h-10 w-10 text-gray-400" />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-1">Interview Day Preparation</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        A complete checklist and timeline for the 24 hours before your interview
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">21:03</span>
                        <Button size="sm" variant="outline" className="gap-1">
                          <ExternalLink className="h-4 w-4" />
                          Watch
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="templates">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="bg-gray-100 p-4 rounded-md mb-3 flex items-center justify-center">
                        <FileText className="h-8 w-8 text-gray-500" />
                      </div>
                      <h3 className="font-semibold mb-1">Resume Template - Engineering</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        ATS-friendly template optimized for technical roles
                      </p>
                      <Button variant="outline" size="sm" className="w-full gap-1">
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <div className="bg-gray-100 p-4 rounded-md mb-3 flex items-center justify-center">
                        <FileText className="h-8 w-8 text-gray-500" />
                      </div>
                      <h3 className="font-semibold mb-1">Resume Template - Business</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Professional template for business and management roles
                      </p>
                      <Button variant="outline" size="sm" className="w-full gap-1">
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <div className="bg-gray-100 p-4 rounded-md mb-3 flex items-center justify-center">
                        <FileText className="h-8 w-8 text-gray-500" />
                      </div>
                      <h3 className="font-semibold mb-1">Cover Letter Template</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Versatile cover letter template with customizable sections
                      </p>
                      <Button variant="outline" size="sm" className="w-full gap-1">
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <div className="bg-gray-100 p-4 rounded-md mb-3 flex items-center justify-center">
                        <FileText className="h-8 w-8 text-gray-500" />
                      </div>
                      <h3 className="font-semibold mb-1">Thank You Email Template</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Post-interview thank you email with customizable sections
                      </p>
                      <Button variant="outline" size="sm" className="w-full gap-1">
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <div className="bg-gray-100 p-4 rounded-md mb-3 flex items-center justify-center">
                        <FileText className="h-8 w-8 text-gray-500" />
                      </div>
                      <h3 className="font-semibold mb-1">Interview Preparation Worksheet</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Worksheet to organize research and prepare questions
                      </p>
                      <Button variant="outline" size="sm" className="w-full gap-1">
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <div className="bg-gray-100 p-4 rounded-md mb-3 flex items-center justify-center">
                        <FileText className="h-8 w-8 text-gray-500" />
                      </div>
                      <h3 className="font-semibold mb-1">Salary Negotiation Script</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Customizable script for salary and benefits negotiation
                      </p>
                      <Button variant="outline" size="sm" className="w-full gap-1">
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">Need Personalized Resources?</h3>
                    <p className="text-gray-600">
                      Our premium members get access to industry-specific resources and personalized recommendations
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

export default LearningResources;
