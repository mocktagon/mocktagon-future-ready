
import React, { useEffect } from 'react';
import { ArrowRight, Bot } from 'lucide-react';
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
    <section id="home" className="relative min-h-screen flex items-center bg-[#f9fafb] pt-32 pb-16">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f9fafb] to-[#f3f4f6]/90 pointer-events-none"></div>
      
      {/* Geometric shapes in background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-12 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-12 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="section-container relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-8">
            {/* AI-Powered Label */}
            <div className="inline-block hero-animate animate-on-scroll">
              <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-white text-primary rounded-full border border-gray-100 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2"></span>
                AI-Powered Interviewing
              </span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 hero-animate animate-on-scroll leading-tight">
                Master Your <br className="hidden md:block" />Next Interview
              </h1>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary hero-animate animate-on-scroll">
                With AI Precision
              </h2>
              
              <p className="text-lg text-gray-600 mt-4 hero-animate animate-on-scroll max-w-lg">
                Practice with our AI that simulates real interviewers, provides personalized feedback, and helps you land your dream job.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 hero-animate animate-on-scroll pt-4">
              <Link to="/signup" className="bg-primary hover:bg-primary/90 text-white px-7 py-3 rounded-lg font-medium transition-all duration-300 shadow-md flex items-center gap-2">
                Start Free Trial <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/demo" className="bg-white hover:bg-gray-50 text-gray-800 px-7 py-3 rounded-lg font-medium border border-gray-100 transition-all duration-300 shadow-sm flex items-center gap-2">
                Watch Demo
                <div className="h-5 w-5 bg-gray-100 rounded-sm flex items-center justify-center">
                  <div className="w-0 h-0 border-t-transparent border-b-transparent border-l-[6px] border-l-gray-600 ml-0.5"></div>
                </div>
              </Link>
            </div>
          </div>
          
          <div className="relative hero-animate animate-on-scroll md:ml-8 lg:ml-0">
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-[#f1f5f9] rounded-full"></div>
            <div className="absolute -bottom-4 -right-8 w-24 h-24 bg-[#f1f5f9] rounded-full"></div>
            
            {/* Main AI Interviewer Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Bot className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900">AI Interviewer</h3>
                  <p className="text-gray-500 text-sm">Technical Interview</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-xl mb-6">
                <p className="text-gray-800">"Tell me about a challenging project you worked on and how you overcame obstacles."</p>
              </div>
              
              {/* Feedback Card */}
              <div className="relative">
                <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-lg mb-6">
                  <h4 className="font-medium mb-3 text-gray-800">Real-time Feedback</h4>
                  <div className="flex gap-1 mb-3">
                    <div className="h-2 w-20 rounded-full bg-primary"></div>
                    <div className="h-2 w-20 rounded-full bg-primary"></div>
                    <div className="h-2 w-20 rounded-full bg-primary"></div>
                    <div className="h-2 w-20 rounded-full bg-gray-200"></div>
                  </div>
                  <p className="text-sm text-gray-600">Great details in your examples</p>
                </div>
                
                <div className="absolute -bottom-4 -right-2 bg-primary text-white px-4 py-2 rounded-full text-sm">
                  <div className="flex items-center gap-2">
                    Analyzing Response... <span className="font-bold">78%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
