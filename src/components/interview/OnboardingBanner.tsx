
import React from 'react';
import { Button } from '@/components/ui/button';

const OnboardingBanner = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-lg p-4 max-w-md flex items-center justify-between">
      <p className="text-sm font-medium">Complete onboarding tutorial and receive a reward</p>
      <Button size="sm" className="bg-orange-500 hover:bg-orange-600 ml-4">5</Button>
    </div>
  );
};

export default OnboardingBanner;
