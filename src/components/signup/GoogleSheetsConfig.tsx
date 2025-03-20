
import React from "react";
import { Input } from "@/components/ui/input";

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
      <h3 className="font-medium mb-2">Google Sheets Configuration</h3>
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
