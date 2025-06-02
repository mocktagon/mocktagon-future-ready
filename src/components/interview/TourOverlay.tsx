
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, Brain, Target, Play } from 'lucide-react';

interface TourStep {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const tourSteps: TourStep[] = [
  {
    title: "AI-Powered Practice",
    description: "Practice with our advanced AI that adapts to your responses and provides real-time feedback to improve your interview skills.",
    icon: <Brain className="h-12 w-12" />,
    color: "bg-blue-500"
  },
  {
    title: "Personalized Insights", 
    description: "Get detailed analysis of your performance with actionable recommendations tailored to your specific needs and career goals.",
    icon: <Target className="h-12 w-12" />,
    color: "bg-green-500"
  },
  {
    title: "See It In Action",
    description: "Watch how Mocktagon transforms interview preparation with real examples and success stories.",
    icon: <Play className="h-12 w-12" />,
    color: "bg-purple-500"
  }
];

interface TourOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const TourOverlay: React.FC<TourOverlayProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (!isOpen) return;
      
      e.preventDefault();
      
      if (e.deltaY > 0 && currentStep < tourSteps.length - 1) {
        // Scroll down - next step
        setCurrentStep(prev => prev + 1);
      } else if (e.deltaY < 0 && currentStep > 0) {
        // Scroll up - previous step
        setCurrentStep(prev => prev - 1);
      }
    };

    if (isOpen) {
      document.addEventListener('wheel', handleScroll, { passive: false });
    }

    return () => {
      document.removeEventListener('wheel', handleScroll);
    };
  }, [isOpen, currentStep]);

  const currentTourStep = tourSteps[currentStep];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-none w-full h-full p-0 gap-0 border-0 rounded-none">
        <div className="relative w-full h-full overflow-hidden">
          <button
            onClick={onClose}
            className="absolute right-6 top-6 z-20 bg-white/80 backdrop-blur-sm rounded-full p-2 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </button>

          {/* Welcome Section */}
          <div 
            className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${
              currentStep === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
            }`}
            style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
          >
            <div className="text-center text-white px-8 max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Welcome to Mocktagon!
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Your AI-powered interview companion that adapts to your interview preparation needs
              </p>
              <p className="text-lg opacity-75">
                Scroll down to discover the power of AI-driven interview preparation
              </p>
            </div>
          </div>

          {/* Feature Steps */}
          {tourSteps.map((step, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${
                currentStep === index + 1 ? 'opacity-100 translate-y-0' : 
                currentStep < index + 1 ? 'opacity-0 translate-y-full' : 'opacity-0 -translate-y-full'
              }`}
              style={{ 
                background: index === 0 ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' :
                           index === 1 ? 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' :
                           'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
              }}
            >
              <div className="text-center text-white px-8 max-w-2xl">
                {/* Icon or Video */}
                {index === 2 ? (
                  <div className="mb-8">
                    <div className="relative w-full max-w-md mx-auto aspect-video bg-black/20 rounded-xl overflow-hidden shadow-2xl">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="Mocktagon Demo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="mb-8">
                    <div className="mx-auto w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center text-white mb-6 backdrop-blur-sm">
                      {step.icon}
                    </div>
                  </div>
                )}

                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  {step.title}
                </h2>
                <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
                  {step.description}
                </p>

                {/* Demo buttons for last step */}
                {index === 2 && (
                  <div className="space-y-4 max-w-sm mx-auto">
                    <Button 
                      variant="outline" 
                      className="w-full h-12 text-base bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                      onClick={() => console.log('Quick interview clicked')}
                    >
                      Take a quick interview (no signup)
                    </Button>
                    <Button 
                      className="w-full h-12 text-base bg-white text-gray-900 hover:bg-white/90"
                      onClick={() => console.log('Personalized interview clicked')}
                    >
                      Personalized interview
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Progress indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <div className="flex space-x-3">
              {[...Array(tourSteps.length + 1)].map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentStep 
                      ? 'bg-white scale-125' 
                      : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Scroll hint */}
          {currentStep < tourSteps.length && (
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white/70 text-sm animate-bounce">
              Scroll to continue
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TourOverlay;
