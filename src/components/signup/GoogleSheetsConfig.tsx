
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { InfoIcon } from "lucide-react";

interface GoogleSheetsConfigProps {
  googleSheetsUrl: string;
  setGoogleSheetsUrl: (url: string) => void;
}

const GoogleSheetsConfig: React.FC<GoogleSheetsConfigProps> = ({
  googleSheetsUrl,
  setGoogleSheetsUrl,
}) => {
  return (
    <div className="mb-6 p-4 border rounded-md bg-muted/20">
      <div className="flex items-center gap-2 mb-2">
        <h3 className="font-medium">Google Sheets Configuration</h3>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-5 w-5 rounded-full p-0">
                <InfoIcon className="h-4 w-4" />
                <span className="sr-only">Info</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent className="max-w-80">
              <p>Enter the Google Apps Script Web App URL that will save form submissions to your Google Sheet.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="space-y-2">
        <Input
          type="text"
          placeholder="Enter your Google Sheets Web App URL"
          value={googleSheetsUrl}
          onChange={(e) => setGoogleSheetsUrl(e.target.value)}
          className="text-sm"
        />
        <p className="text-xs text-muted-foreground">
          This URL is where your form data will be sent. You need to create a Google Apps Script Web App and paste its URL here.
        </p>
      </div>
    </div>
  );
};

export default GoogleSheetsConfig;
