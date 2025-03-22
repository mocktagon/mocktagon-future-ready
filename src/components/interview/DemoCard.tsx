
import React from 'react';
import { Play } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface DemoCardProps {
  title: string;
  buttonText: string;
  children: React.ReactNode;
}

const DemoCard = ({ title, buttonText, children }: DemoCardProps) => {
  return (
    <Card className="rounded-lg overflow-hidden">
      <CardContent className="p-6">
        <h3 className="font-medium mb-4">{title}</h3>
        <Button 
          variant="outline" 
          className="flex items-center gap-2 text-sm"
        >
          <Play className="h-4 w-4" />
          {buttonText}
        </Button>
        <div className="mt-4">
          {children}
        </div>
      </CardContent>
    </Card>
  );
};

export default DemoCard;
