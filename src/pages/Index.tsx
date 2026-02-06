import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { VisionSection } from "@/components/home/VisionSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>LuMay - Enterprise Agentic AI Platform for Intelligent Workflow Automation</title>
        <meta name="description" content="LuMay is an enterprise agentic AI platform that delivers intelligent workflow automation. Transform your business with SmartAssist, SmartFlow, and AI-powered solutions." />
        <meta name="keywords" content="AI platform, workflow automation, enterprise AI, SmartAssist, SmartFlow, LuMay, business automation" />
        <link rel="canonical" href="https://lumay.ai" />
        <meta property="og:title" content="LuMay - Enterprise Agentic AI Platform" />
        <meta property="og:description" content="Transform your business with intelligent workflow automation powered by AI." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <HeroSection />
      <ProductsSection />
      <ServicesSection />
      <VisionSection />
      <WhyChooseSection />
      <IndustriesSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
