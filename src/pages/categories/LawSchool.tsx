
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';

const LawSchool = () => {
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
              <h1 className="text-4xl font-bold mb-6">Law School Interviews</h1>
              <p className="text-lg text-gray-600 mb-8">
                Prepare for law school admissions interviews with our specialized AI coach. Practice answering questions about your personal statement, legal interests, and career goals to increase your chances of admission.
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
                    <span className="text-xl mr-2">⚖️</span>
                    <span>Practice with real law school interview questions from top programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">💬</span>
                    <span>Improve your articulation of complex legal concepts and opinions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">📝</span>
                    <span>Get feedback on responses to questions about your application materials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">🔍</span>
                    <span>Develop compelling answers about your legal interests and career goals</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="md:w-1/2 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 via-purple-500/10 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <span className="text-7xl mb-4 inline-block">⚖️</span>
                <h3 className="text-2xl font-bold mb-2">Your path to legal education</h3>
                <p className="mb-6">Master law school interviews with our AI coach.</p>
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
                <TabsTrigger value="legal-interests">Legal Interests</TabsTrigger>
                <TabsTrigger value="legal-issues">Current Legal Issues</TabsTrigger>
                <TabsTrigger value="career-goals">Career Goals</TabsTrigger>
              </TabsList>
              <TabsContent value="personal" className="p-6 bg-secondary/10 rounded-lg mt-4">
                <h3 className="text-xl font-bold mb-4">Personal Background</h3>
                <p className="mb-4">
                  These questions explore your personal journey and the experiences that have shaped your decision to pursue a legal education.
                </p>
                <h4 className="font-bold mt-4 mb-2">Sample Questions:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Walk me through your resume.</li>
                  <li>Why do you want to attend law school?</li>
                  <li>Tell me about a challenge you've overcome and what you learned from it.</li>
                  <li>How have your undergraduate studies prepared you for law school?</li>
                </ul>
              </TabsContent>
              <TabsContent value="legal-interests" className="p-6 bg-secondary/10 rounded-lg mt-4">
                <h3 className="text-xl font-bold mb-4">Legal Interests</h3>
                <p className="mb-4">
                  These questions assess your understanding of and interest in different areas of law and legal practice.
                </p>
                <h4 className="font-bold mt-4 mb-2">Sample Questions:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>What areas of law interest you most and why?</li>
                  <li>Tell me about a legal issue or case that you find particularly interesting.</li>
                  <li>How did you become interested in law?</li>
                  <li>What legal experiences or internships have you had, and what did you learn from them?</li>
                </ul>
              </TabsContent>
              <TabsContent value="legal-issues" className="p-6 bg-secondary/10 rounded-lg mt-4">
                <h3 className="text-xl font-bold mb-4">Current Legal Issues</h3>
                <p className="mb-4">
                  These questions evaluate your awareness of and perspective on current legal and social issues.
                </p>
                <h4 className="font-bold mt-4 mb-2">Sample Questions:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>What do you think is the most pressing legal issue facing our society today?</li>
                  <li>How would you approach a controversial legal issue like [specific topic]?</li>
                  <li>Discuss a recent Supreme Court decision that you found interesting or important.</li>
                  <li>How do you think technology is changing the legal profession?</li>
                </ul>
              </TabsContent>
              <TabsContent value="career-goals" className="p-6 bg-secondary/10 rounded-lg mt-4">
                <h3 className="text-xl font-bold mb-4">Career Goals</h3>
                <p className="mb-4">
                  These questions explore your professional aspirations and how a law degree from this specific school fits into your career plan.
                </p>
                <h4 className="font-bold mt-4 mb-2">Sample Questions:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Where do you see yourself five years after graduating law school?</li>
                  <li>Why are you interested in our law school specifically?</li>
                  <li>How do you plan to contribute to our legal community?</li>
                  <li>What specific programs or clinics at our school interest you?</li>
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

export default LawSchool;
