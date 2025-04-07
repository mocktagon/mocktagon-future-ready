
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

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
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-[#f9fafb] py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="h-10 overflow-hidden flex items-center">
                <img 
                  src="/lovable-uploads/7bff41a0-1308-42fa-bbd1-bca3cf573134.png" 
                  alt="Mocktagon Logo" 
                  className="h-8 object-contain"
                />
                <span className="text-xl font-bold text-gray-900 ml-2">mocktagon</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-primary font-medium transition-colors text-sm"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-primary font-medium transition-colors text-sm"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-700 hover:text-primary font-medium transition-colors text-sm"
            >
              How it works
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-primary font-medium transition-colors text-sm"
            >
              Pricing
            </button>
          </div>

          {/* Login Button */}
          <div className="hidden md:flex items-center">
            <Link to="/login" className="text-gray-700 hover:text-primary font-medium text-sm">
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Link to="/login" className="mr-4 text-gray-700 font-medium text-sm">
              Login
            </Link>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 focus:outline-none"
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
              onClick={() => scrollToSection('home')}
              className="block px-3 py-3 text-primary font-medium rounded-md w-full text-left hover:bg-secondary text-sm"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="block px-3 py-3 text-gray-700 font-medium rounded-md w-full text-left hover:bg-secondary text-sm"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="block px-3 py-3 text-gray-700 font-medium rounded-md w-full text-left hover:bg-secondary text-sm"
            >
              How it works
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="block px-3 py-3 text-gray-700 font-medium rounded-md w-full text-left hover:bg-secondary text-sm"
            >
              Pricing
            </button>
            <Link 
              to="/signup"
              className="block w-full px-3 py-3 text-center bg-primary hover:bg-primary/90 text-white rounded-md mt-3 font-medium transition-colors text-sm"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
