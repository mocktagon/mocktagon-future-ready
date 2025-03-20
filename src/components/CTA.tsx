
import React, { useEffect } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.cta-animate').forEach(item => {
      observer.observe(item);
    });

    return () => {
      document.querySelectorAll('.cta-animate').forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="cta" className="relative py-24 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-mocktagon-100 opacity-70"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-mocktagon-100 opacity-70"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="glass-card bg-mocktagon-600/5 rounded-2xl p-8 md:p-12 border border-mocktagon-300/20 shadow-xl max-w-5xl mx-auto cta-animate animate-on-scroll">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h2 className="heading-lg text-mocktagon-900">
                Ready to Ace Your Next Interview?
              </h2>
              <p className="text-lg text-gray-600">
                Start your free 7-day trial today and experience the power of AI-driven interview preparation. No credit card required.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mocktagon-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Full access to all features for 7 days</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mocktagon-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">No commitment required</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mocktagon-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Cancel anytime</span>
                </li>
              </ul>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/signup" className="cta-primary flex items-center gap-2">
                  Start Free Trial <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/demo" className="cta-secondary">
                  See Demo
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-radial from-mocktagon-200/20 to-transparent rounded-full filter blur-xl"></div>
              <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-xl border border-mocktagon-100/60 shadow-xl">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-mocktagon-900">Enter your details</h3>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-mocktagon-700 mb-1">Email</label>
                      <input 
                        type="email"
                        id="email"
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-lg border border-mocktagon-200 focus:ring-2 focus:ring-mocktagon-500 focus:border-mocktagon-500 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-mocktagon-700 mb-1">Full Name</label>
                      <input 
                        type="text"
                        id="name"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg border border-mocktagon-200 focus:ring-2 focus:ring-mocktagon-500 focus:border-mocktagon-500 outline-none transition-all"
                      />
                    </div>
                  </div>
                  
                  <Link to="/signup" className="w-full py-3 cta-primary block text-center">
                    Create Free Account
                  </Link>
                  
                  <p className="text-xs text-center text-gray-500">
                    By signing up, you agree to our <Link to="/terms" className="text-mocktagon-600 hover:underline">Terms</Link> and <Link to="/privacy" className="text-mocktagon-600 hover:underline">Privacy Policy</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
