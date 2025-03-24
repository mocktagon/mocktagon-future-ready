
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface StepProps {
  number: number;
  title: string;
  description: string;
  link?: string;
}

const Step = ({ number, title, description, link }: StepProps) => {
  const StepContent = () => (
    <CardContent className="p-4 flex flex-col h-full">
      <div className="flex items-start gap-3 mb-2">
        <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">{number}</span>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="mt-auto flex justify-end">
        <ChevronRight className="h-5 w-5 text-gray-400" />
      </div>
    </CardContent>
  );

  return (
    <Card className="rounded-lg hover:shadow-md transition-shadow">
      {link ? (
        <Link to={link} className="block h-full">
          <StepContent />
        </Link>
      ) : (
        <StepContent />
      )}
    </Card>
  );
};

const StepCards = () => {
  const steps = [
    {
      number: 1,
      title: "Add your resume",
      description: "Upload your resume and cover letter to customize your AI"
    },
    {
      number: 2,
      title: "Add your position",
      description: "Upload job description so that AI can provide customized answer"
    },
    {
      number: 3,
      title: "Launch an interview",
      description: "Launch your interview Copilot™ for real-time interview support"
    },
    {
      number: 4,
      title: "View interview report",
      description: "Review your interview notes and past interview performance",
      link: "/interview-report"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
      {steps.map((step) => (
        <Step 
          key={step.number}
          number={step.number}
          title={step.title}
          description={step.description}
          link={step.link}
        />
      ))}
    </div>
  );
};

export default StepCards;
