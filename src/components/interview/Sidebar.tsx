
import React from 'react';
import { Mic, BookText, FileText, Play, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Card className="sticky top-24">
      <CardContent className="p-4">
        <div className="space-y-1">
          <h3 className="font-medium text-gray-500 mb-1 text-sm">Practice</h3>
          <Button variant="ghost" className="w-full justify-start gap-2 text-sm bg-orange-50 text-orange-600 py-2 h-auto">
            <Mic className="h-4 w-4" />
            Mock Interview
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 text-sm py-2 h-auto" asChild>
            <Link to="/college-admission">
              <GraduationCap className="h-4 w-4" />
              College Admission
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 text-sm py-2 h-auto">
            <Play className="h-4 w-4" />
            Guided Sessions
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 text-sm py-2 h-auto">
            <BookText className="h-4 w-4" />
            Learning Resources
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 text-sm py-2 h-auto">
            <FileText className="h-4 w-4" />
            Study Materials
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Sidebar;
