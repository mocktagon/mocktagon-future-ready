
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { 
  Eye, Search, MessageSquare, Clock, Users, 
  FileText, BookText 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const MockInterview = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedCompany, setSelectedCompany] = useState<string>("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("");
  
  const interviewQuestions = [
    {
      id: 1,
      views: "170.7K",
      timeAgo: "an hour ago",
      question: "Talk about a time when you worked on a team and demonstrated leadership.",
      category: "Behavioral",
      company: "Accenture",
      difficulty: "Medium",
      practiced: "1.1K"
    },
    {
      id: 2,
      views: "33.3K",
      timeAgo: "2 hours ago",
      question: "Can you describe a challenging problem you solved in a previous project and the steps you took to resolve it?",
      category: "Machine Learning",
      company: "Oracle",
      difficulty: "Hard",
      practiced: "222"
    },
    {
      id: 3,
      views: "284.7K",
      timeAgo: "3 hours ago",
      question: "Tell me about yourself.",
      category: "Behavioral",
      company: "Apple",
      difficulty: "Easy",
      practiced: "5.8K"
    },
  ];

  return (
    <Layout>
      <div className="pt-24 pb-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        {/* Top Banner */}
        <div className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 rounded-lg p-4 mb-8 flex justify-between items-center">
          <p className="text-white font-medium">
            Connect your Interview Copilot™ with your Interview rooms.
          </p>
          <Button variant="default" className="bg-white text-black hover:bg-white/90 gap-1">
            Get Started <FileText className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 shrink-0">
            <Card className="sticky top-24">
              <CardContent className="p-4">
                <div className="font-bold text-xl mb-6 flex items-center gap-2">
                  <span className="bg-orange-500 text-white rounded px-1 text-xs">AI</span>
                  Final Round
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-medium text-slate-500 mb-1">Interview</h3>
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Live Interview
                  </Button>
                  <Button variant="secondary" className="w-full justify-start gap-2 bg-slate-100">
                    <MessageSquare className="h-4 w-4" />
                    Mock Interview
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <BookText className="h-4 w-4" />
                    Preparation Hub
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <FileText className="h-4 w-4" />
                    Document Center
                  </Button>
                </div>
                
                <Separator className="my-4" />
                
                <div className="space-y-3">
                  <h3 className="font-medium text-slate-500 mb-1">Tools</h3>
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <BookText className="h-4 w-4" />
                    AI Material Generator
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <Users className="h-4 w-4" />
                    Auto Apply <span className="ml-1 bg-slate-200 text-slate-800 rounded text-xs px-1">Beta</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Question Bank */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-6">Question Bank</h1>
            
            {/* Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="behavioral">Behavioral</SelectItem>
                  <SelectItem value="technical">Technical</SelectItem>
                  <SelectItem value="machine-learning">Machine Learning</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={selectedCompany} onValueChange={setSelectedCompany}>
                <SelectTrigger>
                  <SelectValue placeholder="Company" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="google">Google</SelectItem>
                  <SelectItem value="microsoft">Microsoft</SelectItem>
                  <SelectItem value="accenture">Accenture</SelectItem>
                  <SelectItem value="oracle">Oracle</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <SelectTrigger>
                  <SelectValue placeholder="Difficulty Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="hard">Hard</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex justify-end mb-8">
              <div className="relative w-full sm:w-72">
                <Input 
                  type="search" 
                  placeholder="Search" 
                  className="pl-3 pr-10"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
            
            {/* Questions List */}
            <div className="space-y-6">
              {interviewQuestions.map((q) => (
                <Card key={q.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Eye className="h-4 w-4 mr-1" />
                      <span>{q.views} views</span>
                      <span className="ml-auto">{q.timeAgo}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-3">{q.question}</h3>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-slate-100 px-3 py-1 rounded-full text-sm">
                        {q.category}
                      </span>
                      <span className="bg-slate-100 px-3 py-1 rounded-full text-sm">
                        Asked at {q.company}
                      </span>
                      <span className="bg-slate-100 px-3 py-1 rounded-full text-sm">
                        Difficulty: {q.difficulty}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        {q.practiced} Users Practiced
                      </div>
                      <Button 
                        variant="default" 
                        className="bg-orange-500 hover:bg-orange-600"
                      >
                        Practice with This Question
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MockInterview;
