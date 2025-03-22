
import React from 'react';
import { MessageSquare, BookText, FileText, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Sidebar = () => {
  return (
    <Card className="sticky top-24">
      <CardContent className="p-4">
        <div className="font-bold text-xl mb-6 flex items-center gap-2">
          <span className="bg-orange-500 text-white rounded px-1 text-xs">AI</span>
          Final Round
        </div>
        
        <div className="space-y-1">
          <h3 className="font-medium text-gray-500 mb-1 text-sm">Interview</h3>
          <Button variant="ghost" className="w-full justify-start gap-2 text-sm py-2 h-auto">
            <MessageSquare className="h-4 w-4" />
            Live Interview
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 text-sm bg-orange-50 text-orange-600 py-2 h-auto">
            <MessageSquare className="h-4 w-4" />
            Mock Interview
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 text-sm py-2 h-auto">
            <BookText className="h-4 w-4" />
            Preparation Hub
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 text-sm py-2 h-auto">
            <FileText className="h-4 w-4" />
            Document Center
          </Button>
        </div>
        
        <Separator className="my-4" />
        
        <div className="space-y-1">
          <h3 className="font-medium text-gray-500 mb-1 text-sm">Tools</h3>
          <Button variant="ghost" className="w-full justify-start gap-2 text-sm py-2 h-auto">
            <BookText className="h-4 w-4" />
            AI Material Generator
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 text-sm py-2 h-auto">
            <Users className="h-4 w-4" />
            Auto Apply <span className="ml-1 bg-slate-100 text-slate-800 rounded text-xs px-1">Beta</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 text-sm py-2 h-auto">
            <MessageSquare className="h-4 w-4" />
            Interview Question Bank
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 text-sm py-2 h-auto">
            <FileText className="h-4 w-4" />
            Get Started
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Sidebar;
