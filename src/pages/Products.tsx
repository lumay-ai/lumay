import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, Workflow, Activity, TrendingUp, Building2, ShieldCheck, Phone, Globe } from "lucide-react";
import { Helmet } from "react-helmet-async";

const products = [
  {
    id: "smartassist",
    icon: Bot,
    name: "SmartAssist",
    tagline: "Your AI-Driven Virtual Assistant",
    description: "SmartAssist is an AI-native virtual assistant that instantly answers questions, solves problems, and executes workflows using your company's data. It connects to all your internal tools, knowledge bases, and repositories to deliver accurate, context-rich answers—instantly and at scale.",
    features: ["Natural Language Processing", "Multi-source Integration", "Context-aware Responses", "Workflow Automation", "24/7 Availability", "Enterprise Security"],
  },
  {
    id: "smartflow",
    icon: Workflow,
    name: "SmartFlow",
    tagline: "Low-Code/No-Code Orchestration Platform",
    description: "Build and automate complex workflows without extensive coding. SmartFlow enables business analysts and IT teams alike to create sophisticated process automations through an intuitive visual interface.",
    features: ["Visual Workflow Designer", "Pre-built Connectors", "Real-time Monitoring", "Version Control", "Role-based Access", "API Integration"],
  },
  {
    id: "smartsense",
    icon: Activity,
    name: "SmartSense",
    tagline: "Real-Time Anomaly Detection",
    description: "Monitor your systems and data streams with AI-powered anomaly detection. SmartSense identifies patterns, predicts issues, and alerts your team before problems impact operations.",
    features: ["Real-time Monitoring", "ML-powered Detection", "Custom Alert Rules", "Root Cause Analysis", "Historical Trending", "Integration APIs"],
  },
  {
    id: "smarttrends",
    icon: TrendingUp,
    name: "SmartTrends",
    tagline: "Predictive Analytics & Forecasting",
    description: "Transform historical data into actionable forecasts. SmartTrends uses advanced machine learning to identify trends, predict outcomes, and support data-driven decision making.",
    features: ["Predictive Models", "Trend Analysis", "Custom Dashboards", "Automated Reports", "What-if Scenarios", "Data Visualization"],
  },
  {
    id: "smartdynamics",
    icon: Building2,
    name: "SmartDynamics365",
    tagline: "AI-Powered Business Automation",
    description: "Supercharge your Microsoft Dynamics 365 with AI automation. Reduce quote time by 85%, enhance CRM with Copilot capabilities, and streamline business processes.",
    features: ["D365 Integration", "CRM Copilot", "Quote Automation", "Sales Intelligence", "Customer Insights", "Process Optimization"],
  },
  {
    id: "compliance",
    icon: ShieldCheck,
    name: "SmartOCG Compliance",
    tagline: "AI Compliance & Risk Management",
    description: "Stay compliant with evolving regulations through automated monitoring and reporting. SmartOCG helps you manage risk, ensure compliance, and maintain audit readiness.",
    features: ["Regulatory Tracking", "Automated Audits", "Risk Assessment", "Compliance Reports", "Policy Management", "Alert System"],
  },
  {
    id: "smartcall",
    icon: Phone,
    name: "SmartCall",
    tagline: "Autonomous AI Voice Agent",
    description: "Deploy intelligent voice agents that handle customer calls with natural conversation. SmartCall understands context, resolves issues, and escalates when needed.",
    features: ["Natural Voice AI", "Multi-language Support", "Call Analytics", "CRM Integration", "Smart Escalation", "Quality Monitoring"],
  },
  {
    id: "translation",
    icon: Globe,
    name: "SmartTranslation",
    tagline: "AI-Powered Language Services",
    description: "Break language barriers with context-aware translation. SmartTranslation delivers accurate, industry-specific translations while preserving tone and intent.",
    features: ["Neural Translation", "Industry Glossaries", "Quality Assurance", "Batch Processing", "API Access", "Human Review Option"],
  },
];

export default function Products() {
  return (
    <Layout>
      <Helmet>
        <title>Products - LuMay Enterprise AI Solutions</title>
        <meta name="description" content="Explore LuMay's AI product suite: SmartAssist, SmartFlow, SmartSense, SmartTrends, and more. Enterprise-grade AI solutions for workflow automation." />
        <meta name="keywords" content="SmartAssist, SmartFlow, SmartSense, AI products, enterprise AI, workflow automation" />
        <link rel="canonical" href="https://lumay.ai/products" />
      </Helmet>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Products</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-foreground">
              Our Product Suite
            </h1>
            <p className="text-lg text-muted-foreground">
              Enterprise-grade AI solutions designed to transform your business operations
            </p>
          </div>
        </div>
      </section>

      {/* Products List */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {products.map((product, index) => (
              <div
                key={product.id}
                id={product.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <product.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                    {product.name}
                  </h2>
                  <p className="text-primary font-medium mb-4">{product.tagline}</p>
                  <p className="text-muted-foreground text-lg mb-8">{product.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button variant="hero" asChild>
                    <Link to="/contact">
                      Request Demo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-video rounded-2xl card-gradient border border-border flex items-center justify-center">
                    <product.icon className="w-24 h-24 text-primary/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to get started?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how LuMay's products can transform your business operations
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Contact Sales
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
