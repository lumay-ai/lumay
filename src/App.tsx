import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/blog/BlogPost";
import NotFound from "./pages/NotFound";

// Product Pages
import SmartAssist from "./pages/products/SmartAssist";
import SmartFlow from "./pages/products/SmartFlow";
import SmartSense from "./pages/products/SmartSense";
import SmartTrends from "./pages/products/SmartTrends";
import SmartDynamics365 from "./pages/products/SmartDynamics365";
import SmartCompliance from "./pages/products/SmartCompliance";
import SmartCall from "./pages/products/SmartCall";
import SmartTranslation from "./pages/products/SmartTranslation";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/smartassist" element={<SmartAssist />} />
            <Route path="/products/smartflow" element={<SmartFlow />} />
            <Route path="/products/smartsense" element={<SmartSense />} />
            <Route path="/products/smarttrends" element={<SmartTrends />} />
            <Route path="/products/smartdynamics365" element={<SmartDynamics365 />} />
            <Route path="/products/smartcompliance" element={<SmartCompliance />} />
            <Route path="/products/smartcall" element={<SmartCall />} />
            <Route path="/products/smarttranslation" element={<SmartTranslation />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
