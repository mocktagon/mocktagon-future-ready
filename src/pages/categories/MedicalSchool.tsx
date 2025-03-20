
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';

const MedicalSchool = () => {
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
              <h1 className="text-4xl font-bold mb-6">Medical School Admissions</h1>
              <p className="text-lg text-gray-600 mb-8">
                Prepare for medical school interviews with our specialized AI coach. Practice Multiple Mini Interviews (MMI), traditional interviews, and ethical scenarios to increase your chances of admission.
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
                    <span className="text-xl mr-2">⚕️</span>
                    <span>Practice with realistic MMI scenarios and traditional interview questions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">🔍</span>
                    <span>Get feedback on your approach to ethical and situational questions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">🤝</span>
                    <span>Improve your communication of compassion, empathy, and clinical reasoning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">📊</span>
                    <span>Track your progress and focus on areas that need improvement</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="md:w-1/2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 via-indigo-500/10 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <span className="text-7xl mb-4 inline-block">⚕️</span>
                <h3 className="text-2xl font-bold mb-2">Your path to becoming a physician</h3>
                <p className="mb-6">Master medical school interviews with our AI coach.</p>
                <Button asChild>
                  <Link to="/signup">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Interview Focus Areas</h2>
            
            <Tabs defaultValue="mmi" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
                <TabsTrigger value="mmi">Multiple Mini Interviews</TabsTrigger>
                <TabsTrigger value="traditional">Traditional Interviews</TabsTrigger>
                <TabsTrigger value="ethics">Ethical Scenarios</TabsTrigger>
                <TabsTrigger value="medicine">Why Medicine?</TabsTrigger>
              </TabsList>
              <TabsContent value="mmi" className="p-6 bg-secondary/10 rounded-lg mt-4">
                <h3 className="text-xl font-bold mb-4">Multiple Mini Interviews (MMI)</h3>
                <p className="mb-4">
                  Many medical schools use the MMI format, which consists of multiple short interview stations with different scenarios and questions.
                </p>
                <h4 className="font-bold mt-4 mb-2">Sample Scenarios:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>You observe a fellow student cheating on an exam. What do you do?</li>
                  <li>A patient refuses treatment based on religious beliefs. How do you respond?</li>
                  <li>Discuss the ethical implications of organ donation policies with the interviewer.</li>
                  <li>Role-play breaking difficult news to a standardized patient.</li>
                </ul>
              </TabsContent>
              <TabsContent value="traditional" className="p-6 bg-secondary/10 rounded-lg mt-4">
                <h3 className="text-xl font-bold mb-4">Traditional Interviews</h3>
                <p className="mb-4">
                  Traditional interviews assess your personal qualities, experiences, and fit for both medicine and the specific medical school.
                </p>
                <h4 className="font-bold mt-4 mb-2">Sample Questions:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Tell me about yourself and why you want to become a doctor.</li>
                  <li>Describe a challenging situation you've faced and how you handled it.</li>
                  <li>How do you handle stress and maintain work-life balance?</li>
                  <li>What do you see as the biggest challenges facing healthcare today?</li>
                </ul>
              </TabsContent>
              <TabsContent value="ethics" className="p-6 bg-secondary/10 rounded-lg mt-4">
                <h3 className="text-xl font-bold mb-4">Ethical Scenarios</h3>
                <p className="mb-4">
                  These questions assess your ability to recognize ethical dilemmas in medicine and reason through complex situations.
                </p>
                <h4 className="font-bold mt-4 mb-2">Sample Scenarios:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>A 17-year-old patient doesn't want her parents to know about her pregnancy. What would you do?</li>
                  <li>How would you allocate limited medical resources during a crisis?</li>
                  <li>A family wants to continue aggressive treatment that the medical team believes is futile. How would you approach this situation?</li>
                </ul>
              </TabsContent>
              <TabsContent value="medicine" className="p-6 bg-secondary/10 rounded-lg mt-4">
                <h3 className="text-xl font-bold mb-4">Why Medicine?</h3>
                <p className="mb-4">
                  These questions explore your motivation for pursuing medicine and how your experiences have prepared you for a medical career.
                </p>
                <h4 className="font-bold mt-4 mb-2">Sample Questions:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Why do you want to be a doctor rather than pursuing another healthcare profession?</li>
                  <li>How have your clinical experiences influenced your decision to pursue medicine?</li>
                  <li>What specialty interests you and why?</li>
                  <li>How have you prepared yourself for the demands of medical school?</li>
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

export default MedicalSchool;
