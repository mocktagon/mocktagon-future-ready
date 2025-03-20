
import React, { useEffect } from 'react';
import { 
  UserPlus, 
  BrainCircuit, 
  MessageSquare, 
  BarChart 
} from 'lucide-react';

const HowItWorks = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.process-animate').forEach(item => {
      observer.observe(item);
    });

    return () => {
      document.querySelectorAll('.process-animate').forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="how-it-works" className="relative py-24 bg-white">
      <div className="section-container">
        <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto process-animate animate-on-scroll">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-secondary text-primary rounded-full">
            How It Works
          </span>
          <h2 className="heading-lg">
            Simple Process, Powerful Results
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform makes interview preparation straightforward and effective, guiding you to interview success.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-8 bottom-0 w-0.5 bg-secondary hidden md:block" />

          {/* Steps */}
          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 gap-8 relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col md:items-end text-right process-animate animate-on-scroll">
              <div className="md:order-1 mb-4 md:mb-0">
                <div className="relative flex items-center justify-center">
                  <div className="md:absolute md:right-[-50px] h-16 w-16 rounded-full bg-secondary flex items-center justify-center z-10">
                    <UserPlus className="h-8 w-8 text-primary" />
                  </div>
                  <div className="hidden md:block md:ml-8 w-8 h-0.5 bg-secondary" />
                </div>
              </div>
              <div className="glass-card p-6 rounded-xl md:mr-12">
                <h3 className="heading-md mb-2 text-gray-900">Create Your Profile</h3>
                <p className="text-gray-600">
                  Sign up and customize your profile with your industry, experience level, and target positions to receive tailored interview content.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:items-start text-left md:mt-32 process-animate animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
              <div className="mb-4 md:mb-0">
                <div className="relative flex items-center justify-center">
                  <div className="md:absolute md:left-[-50px] h-16 w-16 rounded-full bg-secondary flex items-center justify-center z-10">
                    <BrainCircuit className="h-8 w-8 text-primary" />
                  </div>
                  <div className="hidden md:block md:mr-8 w-8 h-0.5 bg-secondary" />
                </div>
              </div>
              <div className="glass-card p-6 rounded-xl md:ml-12">
                <h3 className="heading-md mb-2 text-gray-900">Select Interview Type</h3>
                <p className="text-gray-600">
                  Choose from a variety of interview formats, including behavioral, technical, case studies, or specific roles like software engineering or product management.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:items-end text-right process-animate animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <div className="md:order-1 mb-4 md:mb-0">
                <div className="relative flex items-center justify-center">
                  <div className="md:absolute md:right-[-50px] h-16 w-16 rounded-full bg-secondary flex items-center justify-center z-10">
                    <MessageSquare className="h-8 w-8 text-primary" />
                  </div>
                  <div className="hidden md:block md:ml-8 w-8 h-0.5 bg-secondary" />
                </div>
              </div>
              <div className="glass-card p-6 rounded-xl md:mr-12">
                <h3 className="heading-md mb-2 text-gray-900">Practice with AI</h3>
                <p className="text-gray-600">
                  Engage in realistic interview sessions with our AI interviewer that adapts to your responses and provides real-time feedback on your answers.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:items-start text-left md:mt-32 process-animate animate-on-scroll" style={{ transitionDelay: '0.3s' }}>
              <div className="mb-4 md:mb-0">
                <div className="relative flex items-center justify-center">
                  <div className="md:absolute md:left-[-50px] h-16 w-16 rounded-full bg-secondary flex items-center justify-center z-10">
                    <BarChart className="h-8 w-8 text-primary" />
                  </div>
                  <div className="hidden md:block md:mr-8 w-8 h-0.5 bg-secondary" />
                </div>
              </div>
              <div className="glass-card p-6 rounded-xl md:ml-12">
                <h3 className="heading-md mb-2 text-gray-900">Review & Improve</h3>
                <p className="text-gray-600">
                  Analyze detailed performance metrics, review session recordings, and track your progress over time to continuously improve your interview skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
