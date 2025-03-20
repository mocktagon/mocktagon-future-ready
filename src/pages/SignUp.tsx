
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  category: z.string({
    required_error: "Please select an interview category.",
  }),
});

// Categories data (matching the ones in Categories.tsx)
const categories = [
  { id: "college-admission", label: "College Admission Interviews" },
  { id: "software-engineering", label: "Software Engineering" },
  { id: "product-management", label: "Product Management" },
  { id: "data-science", label: "Data Science" },
  { id: "mba-interviews", label: "MBA Interviews" },
  { id: "medical-school", label: "Medical School Admissions" },
  { id: "law-school", label: "Law School Interviews" },
];

const SignUp = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [googleSheetsUrl, setGoogleSheetsUrl] = useState("");

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      category: "",
    },
  });

  // Form submission handler
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
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

            {/* Google Sheets URL Configuration */}
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

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Interview Category</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem 
                              key={category.id} 
                              value={category.id}
                            >
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting || !googleSheetsUrl}
                >
                  {isSubmitting ? "Submitting..." : "Start Free Trial"}
                </Button>
              </form>
            </Form>
          </>
        ) : (
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
        )}
      </div>

      <Footer />
    </div>
  );
};

export default SignUp;
