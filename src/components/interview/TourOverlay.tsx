
import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, ChevronLeft, ChevronRight, Brain, Target, Play } from 'lucide-react';

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
    icon: <Brain className="h-8 w-8" />,
    color: "bg-blue-500"
  },
  {
    title: "Personalized Insights", 
    description: "Get detailed analysis of your performance with actionable recommendations tailored to your specific needs and career goals.",
    icon: <Target className="h-8 w-8" />,
    color: "bg-green-500"
  },
  {
    title: "See It In Action",
    description: "Watch how Mocktagon transforms interview preparation with real examples and success stories.",
    icon: <Play className="h-8 w-8" />,
    color: "bg-purple-500"
  }
];

interface TourOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const TourOverlay: React.FC<TourOverlayProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentTourStep = tourSteps[currentStep];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 gap-0">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>

          <div className="p-8 text-center">
            {/* Icon or Video */}
            {currentStep === tourSteps.length - 1 ? (
              <div className="mb-6">
                <div className="relative w-full max-w-sm mx-auto aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Mocktagon Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  />
                </div>
              </div>
            ) : (
              <div className={`mx-auto w-16 h-16 ${currentTourStep.color} rounded-2xl flex items-center justify-center text-white mb-6`}>
                {currentTourStep.icon}
              </div>
            )}

            {/* Title */}
            <h2 className="text-2xl font-bold mb-2">
              {currentStep === 0 ? "Welcome to Mocktagon!" : currentTourStep.title}
            </h2>

            {/* Step indicator */}
            <p className="text-sm text-blue-500 font-medium mb-4">
              Step {currentStep + 1} of {tourSteps.length}
            </p>

            {/* Description */}
            <p className="text-gray-600 mb-8 leading-relaxed">
              {currentStep === 0 
                ? "Your AI-powered interview companion that adapts to your interview preparation needs"
                : currentTourStep.description
              }
            </p>

            {/* Main CTA Button */}
            {currentStep === 0 && (
              <Button 
                onClick={nextStep}
                className="w-full mb-6 h-12 text-base bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              >
                Start your interview journey
              </Button>
            )}

            {/* Demo buttons for last step */}
            {currentStep === tourSteps.length - 1 && (
              <div className="space-y-3 mb-6">
                <Button 
                  variant="outline" 
                  className="w-full justify-center gap-2"
                  onClick={() => console.log('Quick interview clicked')}
                >
                  Take a quick interview (no signup)
                </Button>
                <Button 
                  className="w-full justify-center gap-2 bg-purple-600 hover:bg-purple-700"
                  onClick={() => console.log('Personalized interview clicked')}
                >
                  Personalized interview
                </Button>
              </div>
            )}

            {/* Progress dots */}
            <div className="flex justify-center space-x-2 mb-6">
              {tourSteps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentStep 
                      ? 'bg-blue-500' 
                      : index < currentStep 
                        ? 'bg-blue-300' 
                        : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between items-center">
              <Button
                variant="ghost"
                onClick={prevStep}
                disabled={currentStep === 0}
                className="flex items-center gap-1 text-gray-500 disabled:opacity-40"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>

              <Button
                onClick={currentStep === tourSteps.length - 1 ? onClose : nextStep}
                className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600"
              >
                {currentStep === tourSteps.length - 1 ? 'Get Started' : 'Next'}
                {currentStep !== tourSteps.length - 1 && <ChevronRight className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TourOverlay;
