
import React from 'react';
import { Play } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface DemoCardProps {
  title: string;
  buttonText?: string;
  description?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const DemoCard = ({ title, buttonText = "Watch Demo", description, icon, children }: DemoCardProps) => {
  return (
    <Card className="rounded-lg overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-3">
          {icon && <div className="shrink-0">{icon}</div>}
          <h3 className="font-medium">{title}</h3>
        </div>
        
        {description && <p className="text-sm text-gray-600 mb-4">{description}</p>}
        
        <Button 
          variant="outline" 
          className="flex items-center gap-2 text-sm"
        >
          <Play className="h-4 w-4" />
          {buttonText}
        </Button>
        
        {children && (
          <div className="mt-4">
            {children}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DemoCard;
