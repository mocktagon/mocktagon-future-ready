import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SignUpForm, { SignUpFormData } from "@/components/signup/SignUpForm";
import SuccessMessage from "@/components/signup/SuccessMessage";

// If you want to set a default Google Sheets URL, replace this empty string
// with your deployed Google Apps Script Web App URL
const DEFAULT_SHEETS_URL = "https://script.google.com/macros/s/AKfycbzSj0H_LJMmlUqdCtpO0EcY_U8K3Z4WJww1dVBpP4JxUBqC06rrfiw8pLbo7Elllp8OGw/exec";

const SignUp = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // We'll keep the state but remove the UI element for changing it
  const [googleSheetsUrl] = useState(DEFAULT_SHEETS_URL);

  // Form submission handler
  const onSubmit = async (values: SignUpFormData) => {
    if (!googleSheetsUrl) {
      toast({
        title: "Configuration Error",
        description: "Google Sheets URL is not configured. Please contact support.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    console.log("Form submitted:", values);
    
    try {
      // Submit to Google Sheets
      const response = await fetch(googleSheetsUrl, {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script web apps
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      
      setIsSubmitted(true);
      toast({
        title: "Registration Successful!",
        description: "Please check your email for further instructions.",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your information. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-grow container max-w-md mx-auto px-4 py-16">
        {!isSubmitted ? (
          <>
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold tracking-tight">Start Your Free Trial</h1>
              <p className="text-muted-foreground mt-2">
                Fill in your details to begin your interview practice journey.
              </p>
            </div>

            {/* Removed GoogleSheetsConfig component */}

            <SignUpForm 
              onSubmit={onSubmit}
              isSubmitting={isSubmitting}
              googleSheetsUrl={googleSheetsUrl}
            />
          </>
        ) : (
          <SuccessMessage />
        )}
      </div>

      <Footer />
    </div>
  );
};

export default SignUp;
