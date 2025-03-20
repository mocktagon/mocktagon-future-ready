
import React, { useEffect, useState } from 'react';
import { Check, Info, Mail } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.pricing-animate').forEach(item => {
      observer.observe(item);
    });

    return () => {
      document.querySelectorAll('.pricing-animate').forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  const getPrice = (monthly: number, discount: number = 0.2) => {
    if (isAnnual) {
      const annualPrice = monthly * 12 * (1 - discount);
      return Math.round(annualPrice / 12);
    }
    return monthly;
  };

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

  return (
    <section id="pricing" className="relative py-24 bg-mocktagon-50/50">
      <div className="section-container">
        <div className="text-center space-y-4 mb-10 max-w-3xl mx-auto pricing-animate animate-on-scroll">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-mocktagon-100 text-mocktagon-800 rounded-full">
            Pricing
          </span>
          <h2 className="heading-lg">
            Plans for Every Stage of Your Career
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan to elevate your interview skills and land your dream job.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex justify-center items-center space-x-3 mb-12 pricing-animate animate-on-scroll">
          <span className={`text-sm font-medium ${isAnnual ? 'text-mocktagon-800' : 'text-gray-500'}`}>
            Annual Billing
          </span>
          <button 
            className="relative w-14 h-7 bg-mocktagon-200 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-mocktagon-500 focus:ring-offset-2"
            onClick={() => setIsAnnual(!isAnnual)}
          >
            <div 
              className={`absolute w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
                isAnnual ? 'left-1' : 'left-8'
              }`} 
            />
          </button>
          <span className={`text-sm font-medium ${!isAnnual ? 'text-mocktagon-800' : 'text-gray-500'}`}>
            Monthly Billing
          </span>
          <div className="relative ml-2">
            {isAnnual && (
              <span className="absolute -top-7 -right-2 bg-mocktagon-600 text-white text-xs font-medium px-2 py-0.5 rounded-md">
                Save 20%
              </span>
            )}
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="pricing-card bg-white pricing-animate animate-on-scroll">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-mocktagon-900 mb-2">Basic</h3>
              <p className="text-gray-600 text-sm">Perfect for beginners</p>
            </div>
            
            <div className="flex items-baseline mb-6">
              <span className="text-5xl font-bold text-mocktagon-900">${getPrice(19)}</span>
              <span className="text-gray-500 ml-2">/ month</span>
            </div>
            
            <div className="border-t border-mocktagon-100 my-6 pt-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mocktagon-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">5 AI interview sessions per month</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mocktagon-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Basic performance analytics</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mocktagon-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">General interview questions</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mocktagon-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Email support</span>
                </li>
              </ul>
            </div>
            
            <button 
              onClick={handleCTAClick}
              className="w-full py-3 bg-white border border-mocktagon-600 text-mocktagon-800 rounded-lg font-medium transition-all duration-300 hover:bg-mocktagon-50"
            >
              Start Free Trial
            </button>
          </div>

          {/* Pro Plan */}
          <div className="pricing-card bg-white relative pricing-animate animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-mocktagon-400 to-mocktagon-600 rounded-t-lg"></div>
            <span className="absolute -top-5 right-5 bg-mocktagon-600 text-white text-xs font-medium px-3 py-1 rounded-full">
              Most Popular
            </span>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-mocktagon-900 mb-2">Professional</h3>
              <p className="text-gray-600 text-sm">For serious job seekers</p>
            </div>
            
            <div className="flex items-baseline mb-6">
              <span className="text-5xl font-bold text-mocktagon-900">${getPrice(39)}</span>
              <span className="text-gray-500 ml-2">/ month</span>
            </div>
            
            <div className="border-t border-mocktagon-100 my-6 pt-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mocktagon-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Unlimited AI interview sessions</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mocktagon-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Advanced performance analytics</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mocktagon-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Industry-specific questions</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mocktagon-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Answer evaluation & tips</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mocktagon-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Priority email & chat support</span>
                </li>
              </ul>
            </div>
            
            <button 
              onClick={handleCTAClick}
              className="w-full py-3 bg-mocktagon-600 text-white rounded-lg font-medium transition-all duration-300 hover:bg-mocktagon-700 shadow-lg"
            >
              Start Free Trial
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="pricing-card bg-white pricing-animate animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-mocktagon-900 mb-2">Enterprise</h3>
              <p className="text-gray-600 text-sm">For teams & organizations</p>
            </div>
            
            <div className="flex items-baseline mb-6">
              <span className="text-5xl font-bold text-mocktagon-900">${getPrice(99)}</span>
              <span className="text-gray-500 ml-2">/ month</span>
            </div>
            
            <div className="border-t border-mocktagon-100 my-6 pt-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mocktagon-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Everything in Professional plan</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mocktagon-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Team management dashboard</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mocktagon-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Custom question libraries</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mocktagon-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Organization-specific feedback</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mocktagon-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Dedicated account manager</span>
                </li>
              </ul>
            </div>
            
            <button className="w-full py-3 flex items-center justify-center bg-white border border-mocktagon-600 text-mocktagon-800 rounded-lg font-medium transition-all duration-300 hover:bg-mocktagon-50">
              <Mail className="w-4 h-4 mr-2" /> Contact Sales
            </button>
          </div>
        </div>

        {/* Student discount note */}
        <div className="mt-10 text-center pricing-animate animate-on-scroll">
          <div className="inline-flex items-center bg-mocktagon-100/70 text-mocktagon-800 px-4 py-2 rounded-lg">
            <Info className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">Students receive a 50% discount on all plans with valid ID</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
