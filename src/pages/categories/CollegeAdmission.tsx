import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';

const CollegeAdmission = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="mb-4 inline-block px-3 py-1 text-sm font-medium bg-secondary text-primary rounded-full">
                Interview Category
              </div>
              <h1 className="text-4xl font-bold mb-6">College Admission Interviews</h1>
              <p className="text-lg text-gray-600 mb-8">
                Prepare for your college admission interviews with our AI-powered interview coach. Practice answering common
                questions, receive instant feedback, and improve your interview skills.
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
                    <span className="text-xl mr-2">🎯</span>
                    <span>Practice with actual questions from Ivy League and top university interviews</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">🔄</span>
                    <span>Receive detailed feedback on your responses to improve iteratively</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">📈</span>
                    <span>Track your progress and identify areas for improvement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">🧠</span>
                    <span>Learn strategies for answering challenging questions</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="md:w-1/2 bg-gradient-to-br from-purple-500/20 to-blue-500/20 via-pink-500/10 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <span className="text-7xl mb-4 inline-block">🎓</span>
                <h3 className="text-2xl font-bold mb-2">Ready to ace your college interview?</h3>
                <p className="mb-6">Try our AI-powered interview coach today.</p>
                <Button asChild>
                  <Link to="/signup">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Common Interview Topics</h2>
            
            <Tabs defaultValue="why-college" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
                <TabsTrigger value="why-college">Why This College?</TabsTrigger>
                <TabsTrigger value="personal">Personal Background</TabsTrigger>
                <TabsTrigger value="academics">Academic Interests</TabsTrigger>
                <TabsTrigger value="extracurricular">Extracurricular Activities</TabsTrigger>
              </TabsList>
              <TabsContent value="why-college" className="p-6 bg-secondary/10 rounded-lg mt-4">
                <h3 className="text-xl font-bold mb-4">Why This College?</h3>
                <p className="mb-4">
                  This is one of the most common questions in college interviews. Admissions committees want to know that
                  you've researched their institution and have specific reasons for wanting to attend.
                </p>
                <h4 className="font-bold mt-4 mb-2">Sample Questions:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Why are you interested in our university?</li>
                  <li>What specific programs or opportunities attract you to our school?</li>
                  <li>How do you see yourself contributing to our campus community?</li>
                </ul>
              </TabsContent>
              <TabsContent value="personal" className="p-6 bg-secondary/10 rounded-lg mt-4">
                <h3 className="text-xl font-bold mb-4">Personal Background</h3>
                <p className="mb-4">
                  These questions help interviewers get to know you beyond your academic achievements and understand what
                  experiences have shaped your character and goals.
                </p>
                <h4 className="font-bold mt-4 mb-2">Sample Questions:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Tell me about yourself.</li>
                  <li>What challenges have you overcome in your life?</li>
                  <li>How would your friends describe you?</li>
                </ul>
              </TabsContent>
              <TabsContent value="academics" className="p-6 bg-secondary/10 rounded-lg mt-4">
                <h3 className="text-xl font-bold mb-4">Academic Interests</h3>
                <p className="mb-4">
                  Interviewers want to understand your intellectual curiosity and how it aligns with the academic
                  opportunities at their institution.
                </p>
                <h4 className="font-bold mt-4 mb-2">Sample Questions:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>What subject are you most passionate about and why?</li>
                  <li>How do you plan to explore your academic interests at our university?</li>
                  <li>Describe a project or assignment that you found particularly engaging.</li>
                </ul>
              </TabsContent>
              <TabsContent value="extracurricular" className="p-6 bg-secondary/10 rounded-lg mt-4">
                <h3 className="text-xl font-bold mb-4">Extracurricular Activities</h3>
                <p className="mb-4">
                  These questions explore how you spend your time outside the classroom and what impact you've made in your
                  community or areas of interest.
                </p>
                <h4 className="font-bold mt-4 mb-2">Sample Questions:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>What extracurricular activity has been most meaningful to you?</li>
                  <li>How have your activities outside the classroom influenced your growth?</li>
                  <li>What leadership roles have you held, and what did you learn from them?</li>
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

export default CollegeAdmission;
