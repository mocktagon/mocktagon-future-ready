
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";

// Import category pages
import CollegeAdmission from "./pages/categories/CollegeAdmission";
import SoftwareEngineering from "./pages/categories/SoftwareEngineering";
import ProductManagement from "./pages/categories/ProductManagement";
import DataScience from "./pages/categories/DataScience";
import MBAInterviews from "./pages/categories/MBAInterviews";
import MedicalSchool from "./pages/categories/MedicalSchool";
import LawSchool from "./pages/categories/LawSchool";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signup" element={<SignUp />} />
          
          {/* Category pages */}
          <Route path="/categories/college-admission" element={<CollegeAdmission />} />
          <Route path="/categories/software-engineering" element={<SoftwareEngineering />} />
          <Route path="/categories/product-management" element={<ProductManagement />} />
          <Route path="/categories/data-science" element={<DataScience />} />
          <Route path="/categories/mba-interviews" element={<MBAInterviews />} />
          <Route path="/categories/medical-school" element={<MedicalSchool />} />
          <Route path="/categories/law-school" element={<LawSchool />} />
          
          <Route path="/demo" element={<NotFound />} />
          <Route path="/terms" element={<NotFound />} />
          <Route path="/privacy" element={<NotFound />} />
          <Route path="/contact-sales" element={<NotFound />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
