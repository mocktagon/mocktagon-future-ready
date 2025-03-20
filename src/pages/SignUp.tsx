
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SignUpForm, { SignUpFormData } from "@/components/signup/SignUpForm";
import GoogleSheetsConfig from "@/components/signup/GoogleSheetsConfig";
import SuccessMessage from "@/components/signup/SuccessMessage";

const SignUp = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [googleSheetsUrl, setGoogleSheetsUrl] = useState("");

  // Form submission handler
  const onSubmit = async (values: SignUpFormData) => {
    if (!googleSheetsUrl) {
      toast({
        title: "Configuration Error",
        description: "Please enter your Google Sheets Web App URL first.",
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

            <GoogleSheetsConfig 
              googleSheetsUrl={googleSheetsUrl}
              setGoogleSheetsUrl={setGoogleSheetsUrl}
            />

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
