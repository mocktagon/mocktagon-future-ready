
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';

const ProductManagement = () => {
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
              <h1 className="text-4xl font-bold mb-6">Product Management Interviews</h1>
              <p className="text-lg text-gray-600 mb-8">
                Prepare for PM interviews with our specialized AI coach. Practice product sense, analytical thinking, and strategy questions to land roles at top tech companies.
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
                    <span className="text-xl mr-2">📊</span>
                    <span>Practice with realistic product case studies and frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">🧠</span>
                    <span>Develop structured approaches to product design questions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">📈</span>
                    <span>Strengthen analytical skills with metrics and data-driven exercises</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">💬</span>
                    <span>Improve communication of product decisions and strategies</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="md:w-1/2 bg-gradient-to-br from-green-500/20 to-emerald-500/20 via-teal-500/10 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <span className="text-7xl mb-4 inline-block">📊</span>
                <h3 className="text-2xl font-bold mb-2">Become a product leader</h3>
                <p className="mb-6">Master PM interviews with our AI-powered coach.</p>
                <Button asChild>
                  <Link to="/signup">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Interview Focus Areas</h2>
            
            <Tabs defaultValue="product-sense" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
                <TabsTrigger value="product-sense">Product Sense</TabsTrigger>
                <TabsTrigger value="analytical">Analytical Thinking</TabsTrigger>
                <TabsTrigger value="strategy">Product Strategy</TabsTrigger>
                <TabsTrigger value="behavioral">Behavioral Questions</TabsTrigger>
              </TabsList>
              <TabsContent value="product-sense" className="p-6 bg-secondary/10 rounded-lg mt-4">
                <h3 className="text-xl font-bold mb-4">Product Sense</h3>
                <p className="mb-4">
                  Product sense questions assess how you think about product design, user experience, and feature prioritization.
                </p>
                <h4 className="font-bold mt-4 mb-2">Sample Questions:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Design a product to help people find roommates.</li>
                  <li>How would you improve our company's flagship product?</li>
                  <li>What metrics would you use to measure the success of feature X?</li>
                </ul>
              </TabsContent>
              <TabsContent value="analytical" className="p-6 bg-secondary/10 rounded-lg mt-4">
                <h3 className="text-xl font-bold mb-4">Analytical Thinking</h3>
                <p className="mb-4">
                  These questions evaluate your ability to work with data, identify insights, and make data-driven decisions.
                </p>
                <h4 className="font-bold mt-4 mb-2">Sample Questions:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Revenue is down 20% this quarter. How would you investigate the cause?</li>
                  <li>How would you determine if a feature launch was successful?</li>
                  <li>Estimate the market size for electric scooters in San Francisco.</li>
                </ul>
              </TabsContent>
              <TabsContent value="strategy" className="p-6 bg-secondary/10 rounded-lg mt-4">
                <h3 className="text-xl font-bold mb-4">Product Strategy</h3>
                <p className="mb-4">
                  Strategy questions assess your ability to think long-term about product vision, market positioning, and growth.
                </p>
                <h4 className="font-bold mt-4 mb-2">Sample Questions:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Should our company enter the smart home market? Why or why not?</li>
                  <li>How would you prioritize these three potential product initiatives?</li>
                  <li>What's our biggest threat in the market and how should we respond?</li>
                </ul>
              </TabsContent>
              <TabsContent value="behavioral" className="p-6 bg-secondary/10 rounded-lg mt-4">
                <h3 className="text-xl font-bold mb-4">Behavioral Questions</h3>
                <p className="mb-4">
                  These questions explore your past experiences, teamwork, leadership, and how you've handled challenges.
                </p>
                <h4 className="font-bold mt-4 mb-2">Sample Questions:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Tell me about a time you had to make a decision with incomplete information.</li>
                  <li>Describe a situation where you influenced engineering to build something they initially disagreed with.</li>
                  <li>How have you handled a situation where stakeholders had conflicting priorities?</li>
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

export default ProductManagement;
