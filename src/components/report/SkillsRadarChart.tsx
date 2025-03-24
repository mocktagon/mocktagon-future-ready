
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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

const SkillsRadarChart = () => {
  return (
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
  );
};

export default SkillsRadarChart;
