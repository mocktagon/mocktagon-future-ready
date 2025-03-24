
import React from 'react';
import { Layout } from '@/components/Layout';
import ReportHeader from '@/components/report/ReportHeader';
import SkillsRadarChart from '@/components/report/SkillsRadarChart';
import PerformanceSummary from '@/components/report/PerformanceSummary';
import QuestionAnalysis from '@/components/report/QuestionAnalysis';
import Recommendations from '@/components/report/Recommendations';

const InterviewReport = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <ReportHeader />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <SkillsRadarChart />
          <PerformanceSummary />
        </div>

        <QuestionAnalysis />
        
        <Recommendations />
      </div>
    </Layout>
  );
};

export default InterviewReport;
