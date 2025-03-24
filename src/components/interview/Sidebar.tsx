
import React from 'react';
import { Mic, BookText, Play, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Card className="sticky top-24">
      <CardContent className="p-4">
        <div className="space-y-1">
          <h3 className="font-medium text-gray-500 mb-1 text-sm">Practice</h3>
          <Button 
            variant="ghost" 
            className={`w-full justify-start gap-2 text-sm py-2 h-auto ${
              currentPath === '/mock-interview' ? 'bg-orange-50 text-orange-600' : ''
            }`} 
            asChild
          >
            <Link to="/mock-interview">
              <Mic className="h-4 w-4" />
              Mock Job Interview
            </Link>
          </Button>
          <Button 
            variant="ghost" 
            className={`w-full justify-start gap-2 text-sm py-2 h-auto ${
              currentPath === '/college-admission' ? 'bg-orange-50 text-orange-600' : ''
            }`} 
            asChild
          >
            <Link to="/college-admission">
              <GraduationCap className="h-4 w-4" />
              College Admission
            </Link>
          </Button>
          <Button 
            variant="ghost" 
            className={`w-full justify-start gap-2 text-sm py-2 h-auto ${
              currentPath === '/guided-sessions' ? 'bg-orange-50 text-orange-600' : ''
            }`} 
            asChild
          >
            <Link to="/guided-sessions">
              <Play className="h-4 w-4" />
              Guided Sessions
            </Link>
          </Button>
          <Button 
            variant="ghost" 
            className={`w-full justify-start gap-2 text-sm py-2 h-auto ${
              currentPath === '/learning-resources' ? 'bg-orange-50 text-orange-600' : ''
            }`} 
            asChild
          >
            <Link to="/learning-resources">
              <BookText className="h-4 w-4" />
              Learning Resources
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Sidebar;
