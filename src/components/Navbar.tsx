
import React, { useState, useEffect } from 'react';
import { Menu, X, Octagon } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetPosition = element.offsetTop - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo with concentric octagons */}
          <div className="flex items-center">
            <div className="relative mr-2">
              <Octagon className="h-8 w-8 text-primary absolute" strokeWidth={1.5} />
              <Octagon className="h-6 w-6 text-accent absolute top-1 left-1" strokeWidth={1.5} />
            </div>
            <span className="text-2xl font-bold pl-8">
              <span className="text-gradient">Mocktagon</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-800 hover:text-primary font-medium transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-800 hover:text-primary font-medium transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-800 hover:text-primary font-medium transition-colors"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-800 hover:text-primary font-medium transition-colors"
            >
              Pricing
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              className="cta-primary"
              onClick={() => scrollToSection('cta')}
            >
              Start Free Trial
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-800 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg mt-2 animate-slide-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button 
              onClick={() => scrollToSection('features')}
              className="block px-3 py-3 text-gray-800 font-medium rounded-md w-full text-left hover:bg-secondary"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="block px-3 py-3 text-gray-800 font-medium rounded-md w-full text-left hover:bg-secondary"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="block px-3 py-3 text-gray-800 font-medium rounded-md w-full text-left hover:bg-secondary"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="block px-3 py-3 text-gray-800 font-medium rounded-md w-full text-left hover:bg-secondary"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('cta')}
              className="block w-full px-3 py-3 text-center cta-primary mt-3"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
