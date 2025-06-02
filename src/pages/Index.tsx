
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import HowItWorks from '../components/HowItWorks';
import Categories from '../components/Categories';
import Pricing from '../components/Pricing';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import TourOverlay from '../components/interview/TourOverlay';

const Index = () => {
  const [showTour, setShowTour] = useState(false);

  useEffect(() => {
    // Function to handle animation on scroll
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        
        if (elementPosition < screenPosition - 100) {
          element.classList.add('animated');
        }
      });
    };

    // Show tour overlay when component mounts
    const timer = setTimeout(() => {
      setShowTour(true);
    }, 500);

    // Initial check for elements in view on page load
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Categories />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
      
      {/* Tour Overlay */}
      <TourOverlay 
        isOpen={showTour} 
        onClose={() => setShowTour(false)} 
      />
    </div>
  );
};

export default Index;
