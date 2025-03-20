
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';

const MBAInterviews = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="mb-4 inline-block px-3 py-1 text-sm font-medium bg-secondary text-primary rounded-full">
                Interview Category
              </div>
              <h1 className="text-4xl font-bold mb-6">MBA Interviews</h1>
              <p className="text-lg text-gray-600 mb-8">
                Prepare for business school admissions interviews with our specialized coach. Practice answering common MBA interview questions, work through case studies, and perfect your personal narrative.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" asChild>
                  <Link to="/signup">Start Free Trial</Link>
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
              
              <div className="bg-secondary/20 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3">Key Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-xl mr-2">📝</span>
                    <span>Practice with real MBA interview questions from top business schools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">💼</span>
                    <span>Master case studies and business analysis frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">🎯</span>
                    <span>Develop a compelling personal narrative that highlights your unique value</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">🔄</span>
                    <span>Get feedback on your responses and improve with each practice session</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="md:w-1/2 bg-gradient-to-br from-red-500/20 to-rose-500/20 via-pink-500/10 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <span className="text-7xl mb-4 inline-block">📝</span>
                <h3 className="text-2xl font-bold mb-2">Get into your dream business school</h3>
                <p className="mb-6">Prepare for MBA interviews with our AI coach.</p>
                <Button asChild>
                  <Link to="/signup">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Interview Focus Areas</h2>
            
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
                <TabsTrigger value="personal">Personal Background</TabsTrigger>
                <TabsTrigger value="career">Career Goals</TabsTrigger>
                <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
                <TabsTrigger value="school-fit">School Fit</TabsTrigger>
              </TabsList>
              <TabsContent value="personal" className="p-6 bg-secondary/10 rounded-lg mt-4">
                <h3 className="text-xl font-bold mb-4">Personal Background</h3>
                <p className="mb-4">
                  These questions explore your personal journey, values, and experiences that have shaped your decision to pursue an MBA.
                </p>
                <h4 className="font-bold mt-4 mb-2">Sample Questions:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Walk me through your resume.</li>
                  <li>Tell me about a time you demonstrated leadership.</li>
                  <li>What are your strengths and weaknesses?</li>
                  <li>How have your past experiences prepared you for business school?</li>
                </ul>
              </TabsContent>
              <TabsContent value="career" className="p-6 bg-secondary/10 rounded-lg mt-4">
                <h3 className="text-xl font-bold mb-4">Career Goals</h3>
                <p className="mb-4">
                  These questions assess the clarity and feasibility of your career plans and how an MBA fits into your professional trajectory.
                </p>
                <h4 className="font-bold mt-4 mb-2">Sample Questions:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Why do you want to pursue an MBA at this point in your career?</li>
                  <li>What are your short-term and long-term career goals?</li>
                  <li>How will our MBA program help you achieve these goals?</li>
                  <li>What's your backup plan if your primary career goal doesn't materialize?</li>
                </ul>
              </TabsContent>
              <TabsContent value="case-studies" className="p-6 bg-secondary/10 rounded-lg mt-4">
                <h3 className="text-xl font-bold mb-4">Case Studies</h3>
                <p className="mb-4">
                  Some business schools include case-based questions to assess your analytical thinking and problem-solving approach.
                </p>
                <h4 className="font-bold mt-4 mb-2">Example Scenarios:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>A retail company is experiencing declining sales. What would you recommend?</li>
                  <li>Should a technology company enter an emerging market? What factors would you consider?</li>
                  <li>How would you value a startup for acquisition?</li>
                </ul>
              </TabsContent>
              <TabsContent value="school-fit" className="p-6 bg-secondary/10 rounded-lg mt-4">
                <h3 className="text-xl font-bold mb-4">School Fit</h3>
                <p className="mb-4">
                  These questions evaluate your knowledge of the program and how well you've researched why this specific school is right for you.
                </p>
                <h4 className="font-bold mt-4 mb-2">Sample Questions:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Why our business school?</li>
                  <li>Which courses, clubs, or initiatives interest you most?</li>
                  <li>How do you plan to contribute to our MBA community?</li>
                  <li>What other schools are you applying to and why?</li>
                </ul>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MBAInterviews;
