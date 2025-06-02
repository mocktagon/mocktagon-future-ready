
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, Target, Play, Eye, User } from 'lucide-react';

const TourCards = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      {/* Card 1: AI-Powered Practice */}
      <Card className="p-6 border border-gray-200 hover:shadow-lg transition-shadow">
        <CardContent className="p-0">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
            <Brain className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold mb-3">AI-Powered Practice</h3>
          <p className="text-gray-600 text-sm mb-4">
            Practice with our advanced AI that adapts to your responses and provides real-time feedback to improve your interview skills.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              Realistic interview scenarios
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              Instant feedback
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Card 2: Personalized Insights */}
      <Card className="p-6 border border-gray-200 hover:shadow-lg transition-shadow">
        <CardContent className="p-0">
          <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
            <Target className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold mb-3">Personalized Insights</h3>
          <p className="text-gray-600 text-sm mb-4">
            Get detailed analysis of your performance with actionable recommendations tailored to your specific needs and career goals.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              Performance analytics
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              Improvement suggestions
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Card 3: Demo Video */}
      <Card className="p-6 border border-gray-200 hover:shadow-lg transition-shadow">
        <CardContent className="p-0">
          <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
            <Play className="h-6 w-6 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold mb-3">See It In Action</h3>
          <p className="text-gray-600 text-sm mb-4">
            Watch how Mocktagon transforms interview preparation with real examples and success stories.
          </p>
          
          <div className="space-y-3">
            <Button 
              variant="outline" 
              className="w-full justify-start gap-2 text-sm"
            >
              <Eye className="h-4 w-4" />
              Quick Sneak Peek (2 min)
            </Button>
            
            <Button 
              className="w-full justify-start gap-2 text-sm bg-purple-600 hover:bg-purple-700"
            >
              <User className="h-4 w-4" />
              Full Personalized Experience
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TourCards;
