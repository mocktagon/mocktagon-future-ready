
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Share2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ReportHeader = () => {
  return (
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
  );
};

export default ReportHeader;
