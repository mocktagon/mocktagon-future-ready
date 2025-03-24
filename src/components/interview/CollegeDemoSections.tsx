
import React from 'react';
import DemoCard from './DemoCard';
import { GraduationCap, BookOpen, Award, Users, Star } from 'lucide-react';

const CollegeDemoSections = () => {
  return (
    <div className="mt-12 space-y-6">
      <h2 className="text-xl font-semibold mb-6">Common College Admission Interview Questions</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DemoCard
          icon={<GraduationCap className="h-8 w-8 text-primary" />}
          title="Why This School?"
          description="Practice explaining your interest in specific colleges and what makes them a good fit for your goals and aspirations."
        />
        <DemoCard
          icon={<BookOpen className="h-8 w-8 text-primary" />}
          title="Academic Interests"
          description="Discuss your favorite subjects, academic achievements, and how your studies relate to your future goals."
        />
        <DemoCard
          icon={<Users className="h-8 w-8 text-primary" />}
          title="Extracurricular Activities"
          description="Highlight your involvement outside the classroom and how these activities demonstrate your character and leadership."
        />
        <DemoCard
          icon={<Award className="h-8 w-8 text-primary" />}
          title="Personal Strengths & Challenges"
          description="Articulate your personal qualities, achievements, and how you've overcome obstacles in your life."
        />
      </div>
      
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-6">Specialized Preparation</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DemoCard
            icon={<Star className="h-8 w-8 text-primary" />}
            title="Ivy League Interviews"
            description="Get specialized practice for prestigious school interviews with more challenging questions and higher expectations."
          />
          <DemoCard
            icon={<GraduationCap className="h-8 w-8 text-primary" />}
            title="Scholarship Interviews"
            description="Prepare for merit-based scholarship interviews by highlighting your achievements and future potential."
          />
        </div>
      </div>
    </div>
  );
};

export default CollegeDemoSections;
