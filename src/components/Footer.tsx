
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Github, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetPosition = element.offsetTop - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-mocktagon-950 text-white pt-16 pb-8">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <span className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-mocktagon-400 to-mocktagon-200 bg-clip-text text-transparent">Mocktagon</span>
              </span>
            </div>
            <p className="text-mocktagon-300">
              Revolutionizing interview preparation with AI technology to help you land your dream job.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-mocktagon-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-mocktagon-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-mocktagon-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-mocktagon-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-mocktagon-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-mocktagon-300 hover:text-white transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-mocktagon-300 hover:text-white transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-mocktagon-300 hover:text-white transition-colors"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="text-mocktagon-300 hover:text-white transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <a href="#" className="text-mocktagon-300 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-mocktagon-300 hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-mocktagon-300 hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-mocktagon-300 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-mocktagon-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-mocktagon-300 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-mocktagon-400 mr-3 mt-0.5 flex-shrink-0" />
                <a href="mailto:support@mocktagon.com" className="text-mocktagon-300 hover:text-white transition-colors">
                  support@mocktagon.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-mocktagon-400 mr-3 mt-0.5 flex-shrink-0" />
                <a href="tel:+1-555-123-4567" className="text-mocktagon-300 hover:text-white transition-colors">
                  +1-555-123-4567
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-white">Subscribe to our newsletter</h4>
              <div className="flex">
                <input 
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-lg bg-mocktagon-800 border border-mocktagon-700 text-white placeholder-mocktagon-400 focus:outline-none focus:ring-2 focus:ring-mocktagon-500 flex-grow"
                />
                <button className="px-4 py-2 bg-mocktagon-600 text-white rounded-r-lg hover:bg-mocktagon-500 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-mocktagon-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-mocktagon-400 text-sm">
              © {currentYear} Mocktagon. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a href="#" className="text-sm text-mocktagon-400 hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-mocktagon-400 hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-mocktagon-400 hover:text-white transition-colors">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
