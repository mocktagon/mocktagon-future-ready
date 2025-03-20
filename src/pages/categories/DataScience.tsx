
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';

const DataScience = () => {
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
              <h1 className="text-4xl font-bold mb-6">Data Science Interviews</h1>
              <p className="text-lg text-gray-600 mb-8">
                Master data science interviews with our specialized AI coach. Practice statistical analysis, machine learning concepts, and data modeling to land roles at top companies.
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
                    <span className="text-xl mr-2">📈</span>
                    <span>Practice with real-world data science problems and case studies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">🧮</span>
                    <span>Strengthen statistical and probability fundamentals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">🤖</span>
                    <span>Review machine learning algorithms and model evaluation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">💡</span>
                    <span>Improve your ability to communicate complex analysis clearly</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="md:w-1/2 bg-gradient-to-br from-orange-500/20 to-amber-500/20 via-yellow-500/10 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <span className="text-7xl mb-4 inline-block">📈</span>
                <h3 className="text-2xl font-bold mb-2">Turn data into insights</h3>
                <p className="mb-6">Prepare for data science interviews with our AI coach.</p>
                <Button asChild>
                  <Link to="/signup">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Interview Focus Areas</h2>
            
            <Tabs defaultValue="statistics" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
                <TabsTrigger value="statistics">Statistics & Probability</TabsTrigger>
                <TabsTrigger value="machine-learning">Machine Learning</TabsTrigger>
                <TabsTrigger value="sql">SQL & Data Manipulation</TabsTrigger>
                <TabsTrigger value="case-studies">Business Case Studies</TabsTrigger>
              </TabsList>
              <TabsContent value="statistics" className="p-6 bg-secondary/10 rounded-lg mt-4">
                <h3 className="text-xl font-bold mb-4">Statistics & Probability</h3>
                <p className="mb-4">
                  These questions test your understanding of fundamental statistical concepts that form the foundation of data science.
                </p>
                <h4 className="font-bold mt-4 mb-2">Key Topics:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Probability distributions and their applications</li>
                  <li>Hypothesis testing and confidence intervals</li>
                  <li>A/B testing methodology and analysis</li>
                  <li>Bayesian statistics and its practical applications</li>
                </ul>
              </TabsContent>
              <TabsContent value="machine-learning" className="p-6 bg-secondary/10 rounded-lg mt-4">
                <h3 className="text-xl font-bold mb-4">Machine Learning</h3>
                <p className="mb-4">
                  These questions assess your understanding of machine learning algorithms, model evaluation, and practical implementation considerations.
                </p>
                <h4 className="font-bold mt-4 mb-2">Key Topics:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Supervised vs. unsupervised learning approaches</li>
                  <li>Model selection, validation, and evaluation metrics</li>
                  <li>Feature engineering and selection techniques</li>
                  <li>Handling imbalanced datasets and edge cases</li>
                </ul>
              </TabsContent>
              <TabsContent value="sql" className="p-6 bg-secondary/10 rounded-lg mt-4">
                <h3 className="text-xl font-bold mb-4">SQL & Data Manipulation</h3>
                <p className="mb-4">
                  These questions test your ability to extract, transform, and analyze data using SQL and other programming tools.
                </p>
                <h4 className="font-bold mt-4 mb-2">Key Topics:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Complex SQL queries with multiple joins and subqueries</li>
                  <li>Window functions and advanced aggregations</li>
                  <li>Data cleaning and preprocessing techniques</li>
                  <li>Performance optimization for large datasets</li>
                </ul>
              </TabsContent>
              <TabsContent value="case-studies" className="p-6 bg-secondary/10 rounded-lg mt-4">
                <h3 className="text-xl font-bold mb-4">Business Case Studies</h3>
                <p className="mb-4">
                  These questions evaluate your ability to apply data science skills to solve real business problems and communicate insights effectively.
                </p>
                <h4 className="font-bold mt-4 mb-2">Sample Questions:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>How would you design a recommendation system for our product?</li>
                  <li>Our user engagement has dropped by 15%. How would you analyze this issue?</li>
                  <li>How would you determine if a new feature has positively impacted user retention?</li>
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

export default DataScience;
