
import React, { useState, useEffect } from 'react';
import { Menu, X, LogIn } from 'lucide-react';
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
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="h-10 overflow-hidden flex items-center">
                <img 
                  src="/lovable-uploads/7bff41a0-1308-42fa-bbd1-bca3cf573134.png" 
                  alt="Mocktagon Logo" 
                  className="h-40 object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
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
              onClick={() => scrollToSection('categories')}
              className="text-gray-800 hover:text-primary font-medium transition-colors"
            >
              Categories
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

          {/* Login and CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button className="bg-mocktagon-100 hover:bg-mocktagon-200 text-mocktagon-800 gap-1.5 border-none h-[42px] px-4 py-2">
                <LogIn className="h-4 w-4" />
                Login
              </Button>
            </Link>
            <Link to="/signup" className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md font-medium transition-colors">
              Start Free Trial
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Link to="/login" className="mr-4">
              <Button className="bg-mocktagon-100 hover:bg-mocktagon-200 text-mocktagon-800 gap-1.5 border-none h-[42px] px-4 py-2">
                <LogIn className="h-4 w-4" />
                Login
              </Button>
            </Link>
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
              onClick={() => scrollToSection('categories')}
              className="block px-3 py-3 text-gray-800 font-medium rounded-md w-full text-left hover:bg-secondary"
            >
              Categories
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
            <Link 
              to="/signup"
              className="block w-full px-3 py-3 text-center bg-primary hover:bg-primary/90 text-white rounded-md mt-3 font-medium transition-colors"
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
