
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

// Updated data for aircraft engineer team lead role
const skillsData = [
  { subject: 'Technical Knowledge', score: 87, fullMark: 100 },
  { subject: 'Leadership', score: 82, fullMark: 100 },
  { subject: 'Problem Solving', score: 90, fullMark: 100 },
  { subject: 'Safety Awareness', score: 95, fullMark: 100 },
  { subject: 'Communication', score: 78, fullMark: 100 },
  { subject: 'Project Management', score: 85, fullMark: 100 },
  { subject: 'Regulatory Compliance', score: 92, fullMark: 100 },
  { subject: 'Team Collaboration', score: 88, fullMark: 100 },
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
              skills: { color: '#7c3aed' }
            }}
          >
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar
                name="Skills"
                dataKey="score"
                stroke="#7c3aed"
                fill="#7c3aed"
                fillOpacity={0.6}
              />
              <ChartLegend
                content={
                  <ChartLegendContent
                    payload={[
                      {
                        value: 'Skills Score',
                        color: '#7c3aed',
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
