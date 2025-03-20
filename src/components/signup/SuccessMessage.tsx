
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SuccessMessage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="text-center space-y-6 py-12">
      <div className="mb-4 flex justify-center">
        <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-10 w-10 text-primary" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
              clipRule="evenodd" 
            />
          </svg>
        </div>
      </div>
      <h2 className="text-2xl font-bold">Thank You for Registering!</h2>
      <p className="text-muted-foreground max-w-md mx-auto">
        We've sent a welcome email with further details about your free trial. 
        Please check your inbox for next steps to begin your interview practice.
      </p>
      <Button 
        variant="outline" 
        onClick={() => navigate("/")}
        className="mt-4"
      >
        Return to Home
      </Button>
    </div>
  );
};

export default SuccessMessage;
