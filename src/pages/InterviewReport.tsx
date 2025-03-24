
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ChartContainer, 
  ChartLegend,
  ChartLegendContent 
} from '@/components/ui/chart';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis,
  PolarRadiusAxis
} from 'recharts';
import { 
  Download, 
  Share2, 
  ArrowLeft 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';

// Mock data for the radar chart
const skillsData = [
  { subject: 'Communication', score: 75, fullMark: 100 },
  { subject: 'Problem Solving', score: 82, fullMark: 100 },
  { subject: 'Technical Knowledge', score: 65, fullMark: 100 },
  { subject: 'Critical Thinking', score: 79, fullMark: 100 },
  { subject: 'Adaptability', score: 88, fullMark: 100 },
  { subject: 'Teamwork', score: 90, fullMark: 100 },
  { subject: 'Leadership', score: 70, fullMark: 100 },
  { subject: 'Work Ethic', score: 85, fullMark: 100 },
];

// Mock interview questions, answers and feedback
const interviewData = [
  {
    id: 1,
    question: "Tell me about a time when you had to work with a difficult team member.",
    answer: "I once worked with a colleague who frequently missed deadlines. I scheduled a private meeting to understand their challenges and offered to help with time management. We established a new workflow with more frequent check-ins.",
    suggestions: "Good start on addressing the issue directly. Could have elaborated more on the specific outcome of your intervention and any measurable improvements in team productivity. Also consider mentioning how this experience changed your approach to team conflicts."
  },
  {
    id: 2,
    question: "How do you prioritize tasks when you have multiple deadlines?",
    answer: "I use a combination of urgency and importance to prioritize. I create a list of all tasks, estimate time required, and identify dependencies. I usually tackle high-impact tasks first.",
    suggestions: "Your method is sound, but the answer would be stronger with a specific example demonstrating this approach in action. Consider adding details about how you communicate priorities with stakeholders and how you handle sudden changes to deadlines."
  },
  {
    id: 3,
    question: "Describe a project where you had to learn a new technology quickly.",
    answer: "For our client portal redesign, I needed to learn React in two weeks. I used online courses and built small components to practice before implementing the main features.",
    suggestions: "This answer would benefit from more specifics about your learning strategy. Mention which resources you found most helpful, how you measured your progress, and how you balanced learning with delivering on project milestones. Quantify the results of your work."
  },
  {
    id: 4,
    question: "What approach do you take when you need to explain complex technical concepts to non-technical stakeholders?",
    answer: "I try to use analogies and visual aids whenever possible. I focus on the business impact rather than technical details unless specifically asked.",
    suggestions: "This answer needs a concrete example to be effective. Describe a specific situation where you successfully translated technical information for a non-technical audience. What specific techniques did you use? How did you confirm they understood? What was the outcome?"
  },
  {
    id: 5,
    question: "How do you stay updated with industry trends and new technologies?",
    answer: "I follow several tech blogs, participate in online communities, and try to build small projects using new tools when I have free time.",
    suggestions: "Name specific resources you use and explain your learning process in more detail. Mention how you evaluate which new technologies are worth investing time in learning versus which might be passing trends. Include how you've applied this learning in your professional work."
  },
];

const InterviewReport = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/mock-interview">
              <Button variant="outline" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">Interview Performance Report</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1.5">
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
            <Button variant="outline" size="sm" className="gap-1.5">
              <Share2 className="h-4 w-4" />
              Share Report
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Skills Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ChartContainer 
                  config={{
                    skills: { color: '#ff6700' }
                  }}
                >
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar
                      name="Skills"
                      dataKey="score"
                      stroke="#ff6700"
                      fill="#ff6700"
                      fillOpacity={0.6}
                    />
                    <ChartLegend
                      content={
                        <ChartLegendContent
                          payload={[
                            {
                              value: 'Skills Score',
                              color: '#ff6700',
                              dataKey: 'skills',
                            },
                          ]}
                        />
                      }
                    />
                  </RadarChart>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Performance Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Overall Score</h3>
                  <p className="text-3xl font-bold mt-1">79%</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Strengths</h3>
                  <ul className="mt-1 list-disc list-inside">
                    <li>Teamwork & Collaboration</li>
                    <li>Adaptability</li>
                    <li>Work Ethic</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Areas for Improvement</h3>
                  <ul className="mt-1 list-disc list-inside">
                    <li>Technical Knowledge</li>
                    <li>Leadership Skills</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Questions Answered</h3>
                  <p className="text-xl font-semibold mt-1">5/5</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Question Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {interviewData.map((item) => (
                <div key={item.id} className="border-b pb-8 last:border-b-0 last:pb-0">
                  <h3 className="text-lg font-semibold mb-2">Question {item.id}: {item.question}</h3>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Your Answer</h4>
                    <p className="bg-muted p-3 rounded-md">{item.answer}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Improvement Suggestions</h4>
                    <p className="bg-orange-50 text-orange-800 p-3 rounded-md border border-orange-200">
                      {item.suggestions}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Overall Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>
                Based on your interview performance, here are some key recommendations to help you improve:
              </p>
              
              <ul className="list-disc list-inside space-y-2">
                <li>Use the STAR method (Situation, Task, Action, Result) more consistently when answering behavioral questions</li>
                <li>Provide more specific metrics and outcomes when discussing past achievements</li>
                <li>Enhance your technical knowledge in areas relevant to the position</li>
                <li>Practice concise communication - some answers could be more focused</li>
                <li>Prepare more diverse examples that showcase different aspects of your leadership experience</li>
              </ul>
              
              <div className="bg-green-50 text-green-800 p-4 rounded-md border border-green-200 mt-6">
                <h4 className="font-medium mb-2">Next Steps</h4>
                <p>
                  We recommend scheduling another mock interview in 2 weeks after working on these areas. 
                  Focus particularly on technical knowledge and providing concrete examples with measurable outcomes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default InterviewReport;
