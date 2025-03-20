
import React, { useEffect } from 'react';
import { 
  BarChart3, 
  BrainCircuit, 
  MessageSquare, 
  LineChart, 
  TrendingUp, 
  BookOpenCheck 
} from 'lucide-react';

const Features = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.feature-animate').forEach(item => {
      observer.observe(item);
    });

    return () => {
      document.querySelectorAll('.feature-animate').forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-white to-mocktagon-50/50">
      <div className="section-container">
        <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto feature-animate animate-on-scroll">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-mocktagon-100 text-mocktagon-800 rounded-full">
            Features
          </span>
          <h2 className="heading-lg">
            AI-Powered Interview Excellence
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our cutting-edge AI technology simulates real interview experiences, providing personalized feedback to help you improve with every practice session.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="feature-card glass-card feature-animate animate-on-scroll">
            <div className="flex flex-col items-start">
              <div className="p-3 rounded-lg bg-mocktagon-100 text-mocktagon-700 mb-5">
                <BrainCircuit className="h-6 w-6" />
              </div>
              <h3 className="heading-md mb-2 text-mocktagon-900">AI Simulation</h3>
              <p className="text-gray-600">
                Experience realistic interviews with our AI that adapts to your responses and simulates different interviewer styles.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="feature-card glass-card feature-animate animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
            <div className="flex flex-col items-start">
              <div className="p-3 rounded-lg bg-mocktagon-100 text-mocktagon-700 mb-5">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="heading-md mb-2 text-mocktagon-900">Real-time Feedback</h3>
              <p className="text-gray-600">
                Get immediate analysis of your interview performance with actionable suggestions to improve your responses.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="feature-card glass-card feature-animate animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <div className="flex flex-col items-start">
              <div className="p-3 rounded-lg bg-mocktagon-100 text-mocktagon-700 mb-5">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="heading-md mb-2 text-mocktagon-900">Performance Analytics</h3>
              <p className="text-gray-600">
                Track your progress over time with detailed metrics and insights to identify areas for improvement.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="feature-card glass-card feature-animate animate-on-scroll">
            <div className="flex flex-col items-start">
              <div className="p-3 rounded-lg bg-mocktagon-100 text-mocktagon-700 mb-5">
                <LineChart className="h-6 w-6" />
              </div>
              <h3 className="heading-md mb-2 text-mocktagon-900">Adaptive Difficulty</h3>
              <p className="text-gray-600">
                Our system automatically adjusts question difficulty based on your skill level to ensure continuous growth.
              </p>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="feature-card glass-card feature-animate animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
            <div className="flex flex-col items-start">
              <div className="p-3 rounded-lg bg-mocktagon-100 text-mocktagon-700 mb-5">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="heading-md mb-2 text-mocktagon-900">Industry-Specific Training</h3>
              <p className="text-gray-600">
                Practice with questions tailored to your target industry, from tech to finance, healthcare, and more.
              </p>
            </div>
          </div>

          {/* Feature 6 */}
          <div className="feature-card glass-card feature-animate animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <div className="flex flex-col items-start">
              <div className="p-3 rounded-lg bg-mocktagon-100 text-mocktagon-700 mb-5">
                <BookOpenCheck className="h-6 w-6" />
              </div>
              <h3 className="heading-md mb-2 text-mocktagon-900">Interview Library</h3>
              <p className="text-gray-600">
                Access a vast collection of curated interview questions and expert sample answers for comprehensive preparation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
