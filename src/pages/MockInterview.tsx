
import React, { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import Sidebar from '@/components/interview/Sidebar';
import TourCards from '@/components/interview/TourCards';
import DemoSections from '@/components/interview/DemoSections';
import OnboardingBanner from '@/components/interview/OnboardingBanner';
import TourOverlay from '@/components/interview/TourOverlay';

const MockInterview = () => {
  const [showTour, setShowTour] = useState(false);

  useEffect(() => {
    // Show tour overlay when component mounts
    const timer = setTimeout(() => {
      setShowTour(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

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
            <div className="mb-4">
              <h1 className="text-2xl font-bold">Get started with your job interview practice</h1>
            </div>
            
            <h2 className="text-xl font-semibold mb-6">Discover the power of AI-driven interview preparation</h2>
            
            {/* Tour Cards */}
            <TourCards />
            
            {/* Demo Sections replaced with Mocktagon guide */}
            <DemoSections />
            
            {/* Onboarding banner */}
            <OnboardingBanner />
          </div>
        </div>
      </div>

      {/* Tour Overlay */}
      <TourOverlay 
        isOpen={showTour} 
        onClose={() => setShowTour(false)} 
      />
    </Layout>
  );
};

export default MockInterview;
