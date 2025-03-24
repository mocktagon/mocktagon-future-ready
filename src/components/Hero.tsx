
import React, { useEffect } from 'react';
import { ArrowRight, Bot, Award, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const handleCTAClick = () => {
    const element = document.getElementById('cta');
    if (element) {
      const offsetPosition = element.offsetTop - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    // Trigger animations when component mounts
    const elements = document.querySelectorAll('.hero-animate');
    setTimeout(() => {
      elements.forEach(element => {
        element.classList.add('animated');
      });
    }, 100);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-hero-pattern pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-mocktagon-50/5 to-white pointer-events-none"></div>
      
      {/* Geometric shapes in background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-mocktagon-500/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-mocktagon-400/5 rounded-full filter blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        
        {/* Brand logo watermark */}
        <div className="absolute right-5 md:right-10 top-1/3 md:top-1/4 opacity-5 transform rotate-12">
          <img 
            src="/lovable-uploads/d4ea7aaf-9774-40a6-b082-340276f83fbd.png" 
            alt="" 
            className="w-64 md:w-80 lg:w-96 h-auto filter brightness-150"
          />
        </div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div className="space-y-5">
              <div className="inline-block hero-animate animate-on-scroll">
                <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-mocktagon-100 text-mocktagon-800 rounded-full">
                  <span className="flex h-2 w-2 rounded-full bg-mocktagon-500 mr-2"></span>
                  AI-Powered Interview Preparation
                </span>
              </div>
              
              <h1 className="heading-xl hero-animate animate-on-scroll">
                Master Your Interviews with <span className="text-gradient">AI Precision</span>
              </h1>
              
              <p className="subheading hero-animate animate-on-scroll">
                Practice with our AI that simulates real interviewers, provides personalized feedback, and helps you land your dream job.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 hero-animate animate-on-scroll">
              <Link to="/signup" className="cta-primary flex items-center gap-2">
                Start Free Trial <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/demo" className="cta-secondary flex items-center gap-2">
                Watch Demo
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-4 hero-animate animate-on-scroll">
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-mocktagon-100 mb-2">
                  <Bot className="h-6 w-6 text-mocktagon-700" />
                </div>
                <span className="text-sm font-medium text-mocktagon-900">AI-Driven</span>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-mocktagon-100 mb-2">
                  <Award className="h-6 w-6 text-mocktagon-700" />
                </div>
                <span className="text-sm font-medium text-mocktagon-900">Industry Leading</span>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-mocktagon-100 mb-2">
                  <BarChart className="h-6 w-6 text-mocktagon-700" />
                </div>
                <span className="text-sm font-medium text-mocktagon-900">Data Insights</span>
              </div>
            </div>
          </div>
          
          <div className="relative hero-animate animate-on-scroll">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-radial from-mocktagon-200/40 to-transparent rounded-full filter blur-2xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-mocktagon-100/60 shadow-xl animate-float">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 rounded-full bg-mocktagon-100 flex items-center justify-center">
                      <Bot className="h-6 w-6 text-mocktagon-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-mocktagon-900">AI Interviewer</h3>
                      <p className="text-sm text-mocktagon-700">Technical Interview</p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-mocktagon-50 rounded-lg">
                    <p className="text-sm text-mocktagon-800">"Tell me about a challenging project you worked on and how you overcame obstacles."</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-mocktagon-500">Analyzing response...</span>
                    <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-mocktagon-100 text-mocktagon-700 rounded-full">
                      Difficulty: Medium
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-4 bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-mocktagon-100/60 shadow-lg w-48 animate-float" style={{animationDelay: '1s'}}>
              <div className="space-y-2">
                <h4 className="font-medium text-sm text-mocktagon-900">Real-time Feedback</h4>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-2 flex-1 rounded-full bg-mocktagon-500"></div>
                  ))}
                  <div className="h-2 flex-1 rounded-full bg-mocktagon-200"></div>
                </div>
                <p className="text-xs text-mocktagon-700">Great detail in your examples</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
