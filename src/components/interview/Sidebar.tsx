
import React from 'react';
import { BookText, FileText, MessageSquare, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Sidebar = () => {
  return (
    <Card className="sticky top-24">
      <CardContent className="p-4">
        <div className="space-y-1">
          <h3 className="font-medium text-gray-500 mb-1 text-sm">Practice</h3>
          <Button variant="ghost" className="w-full justify-start gap-2 text-sm bg-orange-50 text-orange-600 py-2 h-auto">
            <MessageSquare className="h-4 w-4" />
            Mock Interview
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 text-sm py-2 h-auto">
            <MessageSquare className="h-4 w-4" />
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
        
        <Separator className="my-4" />
        
        <div className="space-y-1">
          <h3 className="font-medium text-gray-500 mb-1 text-sm">Features</h3>
          <Button variant="ghost" className="w-full justify-start gap-2 text-sm py-2 h-auto">
            <BookText className="h-4 w-4" />
            Content Creator
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 text-sm py-2 h-auto">
            <Users className="h-4 w-4" />
            Quick Apply <span className="ml-1 bg-slate-100 text-slate-800 rounded text-xs px-1">Beta</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 text-sm py-2 h-auto">
            <MessageSquare className="h-4 w-4" />
            Question Library
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 text-sm py-2 h-auto">
            <FileText className="h-4 w-4" />
            Help Center
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Sidebar;
