
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';

const SoftwareEngineering = () => {
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
              <h1 className="text-4xl font-bold mb-6">Software Engineering Interviews</h1>
              <p className="text-lg text-gray-600 mb-8">
                Prepare for technical interviews with personalized practice sessions covering algorithms, system design, and coding challenges. Perfect for roles at top tech companies and startups.
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
                    <span className="text-xl mr-2">💻</span>
                    <span>Real-time coding challenges with syntax highlighting and execution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">🧩</span>
                    <span>In-depth algorithm and data structure problem-solving practice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">🏗️</span>
                    <span>System design interview preparation with whiteboarding tools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">🔍</span>
                    <span>Detailed code review and optimization suggestions</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="md:w-1/2 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 via-indigo-500/10 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <span className="text-7xl mb-4 inline-block">💻</span>
                <h3 className="text-2xl font-bold mb-2">Land your dream tech role</h3>
                <p className="mb-6">Practice with our AI-powered technical interview coach.</p>
                <Button asChild>
                  <Link to="/signup">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Interview Focus Areas</h2>
            
            <Tabs defaultValue="algorithms" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
                <TabsTrigger value="algorithms">Algorithms & Data Structures</TabsTrigger>
                <TabsTrigger value="system-design">System Design</TabsTrigger>
                <TabsTrigger value="behavioral">Behavioral Questions</TabsTrigger>
                <TabsTrigger value="coding">Coding Challenges</TabsTrigger>
              </TabsList>
              <TabsContent value="algorithms" className="p-6 bg-secondary/10 rounded-lg mt-4">
                <h3 className="text-xl font-bold mb-4">Algorithms & Data Structures</h3>
                <p className="mb-4">
                  Strengthen your problem-solving abilities with practice on common algorithm patterns and data structures
                  frequently tested in technical interviews.
                </p>
                <h4 className="font-bold mt-4 mb-2">Key Topics:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Array manipulation and two-pointer techniques</li>
                  <li>Graph traversal (BFS/DFS) and pathfinding algorithms</li>
                  <li>Dynamic programming and optimization problems</li>
                  <li>Tree algorithms and balanced search structures</li>
                </ul>
              </TabsContent>
              <TabsContent value="system-design" className="p-6 bg-secondary/10 rounded-lg mt-4">
                <h3 className="text-xl font-bold mb-4">System Design</h3>
                <p className="mb-4">
                  Practice designing scalable systems and architecture solutions for real-world problems
                  that demonstrate your engineering judgment.
                </p>
                <h4 className="font-bold mt-4 mb-2">Key Topics:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Distributed systems and microservice architecture</li>
                  <li>Database design, indexing, and query optimization</li>
                  <li>Caching strategies and content delivery networks</li>
                  <li>Load balancing and horizontal scaling</li>
                </ul>
              </TabsContent>
              <TabsContent value="behavioral" className="p-6 bg-secondary/10 rounded-lg mt-4">
                <h3 className="text-xl font-bold mb-4">Behavioral Questions</h3>
                <p className="mb-4">
                  Prepare for questions that assess your teamwork, leadership, and problem-solving approach
                  in real engineering environments.
                </p>
                <h4 className="font-bold mt-4 mb-2">Sample Questions:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Describe a time when you had to resolve a technical disagreement with a colleague.</li>
                  <li>How have you handled a project that was behind schedule?</li>
                  <li>Tell me about a time you improved a technical process.</li>
                </ul>
              </TabsContent>
              <TabsContent value="coding" className="p-6 bg-secondary/10 rounded-lg mt-4">
                <h3 className="text-xl font-bold mb-4">Coding Challenges</h3>
                <p className="mb-4">
                  Practice writing clean, efficient code in real-time with our interactive coding environment.
                </p>
                <h4 className="font-bold mt-4 mb-2">Languages Supported:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>JavaScript/TypeScript</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>C++</li>
                  <li>Go</li>
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

export default SoftwareEngineering;
