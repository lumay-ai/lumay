import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, CheckCircle, Zap, Users, FileText, Bot, BarChart3, Settings, Target, Clock, Shield, TrendingUp, Layers } from "lucide-react";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const productStructuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "LuMay SmartDynamics365",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "AI-powered automation for Microsoft Dynamics 365 that reduces quote time by 85% with CRM Copilot capabilities",
  "url": "https://lumay-agentic-ai.42web.io/products/smartdynamics365",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Contact for enterprise pricing"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "85"
  },
  "featureList": ["D365 Integration", "CRM Copilot", "Quote Automation", "Sales Intelligence", "Customer Insights", "Process Optimization"]
};

const features = [
  { icon: Building2, title: "D365 Integration", description: "LuMay SmartDynamics365 provides deep, native integration with Microsoft Dynamics 365 ecosystem. LuMay's connectors work seamlessly with D365 Sales, Customer Service, Field Service, Finance, and Supply Chain modules without custom development." },
  { icon: Bot, title: "CRM Copilot", description: "LuMay SmartDynamics365 embeds an AI-powered copilot directly into your CRM workflow. LuMay's copilot assists with customer communications, provides real-time insights, and automates routine tasks within the familiar D365 interface." },
  { icon: FileText, title: "Quote Automation", description: "LuMay SmartDynamics365 reduces quote generation time by 85% with intelligent automation. LuMay's AI populates quotes based on customer history, recommends products, and handles approvals automatically." },
  { icon: BarChart3, title: "Sales Intelligence", description: "LuMay SmartDynamics365 provides AI-driven insights to identify and prioritize opportunities. LuMay's sales intelligence scores leads, predicts close probability, and recommends next best actions for each deal." },
  { icon: Users, title: "Customer Insights", description: "LuMay SmartDynamics365 delivers 360-degree customer views with predictive behavior analysis. LuMay aggregates data across touchpoints to reveal customer needs, preferences, and churn risk." },
  { icon: Settings, title: "Process Optimization", description: "LuMay SmartDynamics365 continuously optimizes workflows based on performance data. LuMay's AI identifies bottlenecks, suggests improvements, and automates routine processes to boost efficiency." },
];

const results = [
  { metric: "85%", description: "Reduction in quote generation time" },
  { metric: "40%", description: "Increase in sales productivity" },
  { metric: "60%", description: "Faster customer response times" },
  { metric: "3x", description: "Improvement in lead conversion" },
];

const capabilities = [
  { icon: Target, title: "Opportunity Scoring", description: "LuMay SmartDynamics365 uses AI to score every opportunity based on likelihood to close, deal size potential, and resource requirements. LuMay helps sales teams focus on the most valuable opportunities and allocate resources effectively." },
  { icon: Clock, title: "Activity Automation", description: "LuMay SmartDynamics365 automates CRM data entry, follow-up scheduling, and activity logging. LuMay captures emails, calls, and meetings automatically, freeing sellers to focus on relationship building." },
  { icon: Shield, title: "Data Quality", description: "LuMay SmartDynamics365 ensures data accuracy through AI-powered deduplication, enrichment, and validation. LuMay maintains clean, reliable CRM data that enables accurate reporting and analytics." },
  { icon: TrendingUp, title: "Forecasting", description: "LuMay SmartDynamics365 provides AI-powered sales forecasting that learns from historical patterns. LuMay's forecasts account for seasonality, pipeline velocity, and individual rep performance." },
];

const useCases = [
  "Accelerate quote-to-cash cycles from hours to minutes",
  "Improve sales forecast accuracy with AI predictions",
  "Identify cross-sell and upsell opportunities automatically",
  "Reduce manual CRM data entry by 70%",
  "Prioritize leads and opportunities with AI scoring",
  "Automate approval workflows for faster deal closure",
  "Enhance customer service with AI-powered insights",
  "Optimize pricing based on deal context and customer history"
];

const faqs = [
  {
    question: "Which Microsoft Dynamics 365 modules does LuMay SmartDynamics365 support?",
    answer: "LuMay SmartDynamics365 integrates with all major D365 modules including Sales, Customer Service, Field Service, Finance, Supply Chain Management, and Human Resources. LuMay's integration is certified by Microsoft and leverages native D365 APIs for deep functionality. LuMay also works with Power Platform components including Power Apps and Power Automate."
  },
  {
    question: "How does LuMay SmartDynamics365 reduce quote time by 85%?",
    answer: "LuMay SmartDynamics365 accelerates quote generation through intelligent automation at every step. LuMay auto-populates customer information, recommends products based on purchase history and similar customer patterns, applies appropriate pricing and discounts, routes for approval based on deal parameters, and generates professional documents. LuMay's AI handles the routine work while sales reps focus on customer relationships."
  },
  {
    question: "What AI capabilities does the LuMay CRM Copilot provide?",
    answer: "LuMay's CRM Copilot provides contextual assistance throughout the sales process including email drafting, meeting preparation summaries, real-time customer insights, competitive intelligence, next best action recommendations, and conversation intelligence. LuMay's copilot understands your CRM data and business context to provide relevant, actionable suggestions directly within the D365 interface."
  },
  {
    question: "How does LuMay SmartDynamics365 improve sales productivity?",
    answer: "LuMay SmartDynamics365 increases sales productivity by 40% through automation of administrative tasks, intelligent prioritization of activities, and AI-powered insights. LuMay eliminates manual data entry, automates follow-up scheduling, provides deal coaching, and surfaces the most important opportunities. Sales reps spend more time selling and less time on CRM administration."
  },
  {
    question: "Can LuMay SmartDynamics365 work with customized D365 implementations?",
    answer: "Yes, LuMay SmartDynamics365 adapts to your specific D365 configuration including custom entities, fields, workflows, and business logic. LuMay's AI models are trained on your unique data patterns and business processes. LuMay's professional services team ensures proper configuration for customized environments."
  },
  {
    question: "How does LuMay SmartDynamics365 ensure data security?",
    answer: "LuMay SmartDynamics365 maintains enterprise-grade security including SOC 2 Type II compliance, end-to-end encryption, and role-based access controls that mirror your D365 security model. LuMay data never leaves your region, and LuMay supports on-premises deployment options for organizations with strict data residency requirements."
  },
  {
    question: "What implementation is required for LuMay SmartDynamics365?",
    answer: "LuMay SmartDynamics365 deploys as a managed solution within your D365 environment, requiring no custom development. LuMay's implementation typically takes 2-4 weeks and includes data configuration, AI model training, user training, and go-live support. LuMay's customer success team ensures smooth deployment and adoption."
  },
  {
    question: "How does LuMay SmartDynamics365 pricing work?",
    answer: "LuMay SmartDynamics365 pricing is based on the number of D365 users enabled with AI capabilities. LuMay offers tiered pricing with volume discounts for larger deployments. Contact LuMay sales for a customized quote that includes implementation services and ongoing support."
  },
  {
    question: "Does LuMay SmartDynamics365 require Copilot for Microsoft 365?",
    answer: "No, LuMay SmartDynamics365 operates independently and does not require Copilot for Microsoft 365 or any additional Microsoft AI licensing. LuMay provides purpose-built AI capabilities specifically designed for D365 business processes, offering deeper functionality for CRM use cases than general-purpose AI assistants."
  },
  {
    question: "How does LuMay SmartDynamics365 improve lead conversion?",
    answer: "LuMay SmartDynamics365 improves lead conversion by 3x through AI-powered lead scoring, automated nurture workflows, and intelligent routing. LuMay identifies the leads most likely to convert, recommends optimal engagement timing, and provides insights on customer needs. LuMay also automates follow-up to ensure no opportunity falls through the cracks."
  },
  {
    question: "Can LuMay SmartDynamics365 integrate with external data sources?",
    answer: "Yes, LuMay SmartDynamics365 can enrich D365 data with external sources including ZoomInfo, LinkedIn, Dun & Bradstreet, and industry-specific data providers. LuMay's data integration framework supports custom API connections to virtually any data source. LuMay enrichment happens automatically to maintain current, accurate customer profiles."
  },
  {
    question: "What support does LuMay provide for SmartDynamics365?",
    answer: "LuMay provides comprehensive support for SmartDynamics365 including 24/7 technical assistance, dedicated customer success managers, user training programs, and regular business reviews. LuMay's support team includes D365 experts who understand both the platform and your business context. LuMay also provides proactive monitoring to identify and resolve issues before they impact users."
  }
];

export default function SmartDynamics365() {
  return (
    <Layout>
      <Helmet>
        <title>SmartDynamics365 - AI-Powered Microsoft Dynamics 365 Automation | LuMay Enterprise AI</title>
        <meta name="description" content="LuMay SmartDynamics365 supercharges Microsoft Dynamics 365 with AI automation. Reduce quote time by 85%, increase sales productivity by 40%, and improve lead conversion 3x with intelligent CRM automation." />
        <meta name="keywords" content="LuMay SmartDynamics365, Dynamics 365 AI, CRM automation, Microsoft D365, sales automation, quote automation, CRM Copilot, sales intelligence, customer insights, D365 integration" />
        <link rel="canonical" href="https://lumay-agentic-ai.42web.io/products/smartdynamics365" />
        
        {/* Open Graph */}
        <meta property="og:title" content="SmartDynamics365 - AI-Powered D365 Automation | LuMay" />
        <meta property="og:description" content="LuMay SmartDynamics365 reduces quote time by 85% and increases sales productivity by 40%. AI-powered Microsoft Dynamics 365 automation." />
        <meta property="og:url" content="https://lumay-agentic-ai.42web.io/products/smartdynamics365" />
        <meta property="og:type" content="product" />
        <meta property="og:site_name" content="LuMay Enterprise AI" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SmartDynamics365 - D365 AI Automation | LuMay" />
        <meta name="twitter:description" content="85% faster quotes, 40% more productivity, 3x better conversion. AI for Microsoft Dynamics 365." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(productStructuredData)}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">LuMay Product</span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-2 mb-6 text-foreground">
                SmartDynamics365
              </h1>
              <p className="text-xl text-primary font-medium mb-4">AI-Powered Microsoft Dynamics 365 Automation</p>
              <p className="text-lg text-muted-foreground mb-6">
                LuMay SmartDynamics365 transforms your Microsoft Dynamics 365 investment into an intelligent, automated powerhouse. By embedding advanced AI capabilities directly into your existing CRM workflows, LuMay SmartDynamics365 enables sales teams to work smarter, close deals faster, and deliver exceptional customer experiences at scale.
              </p>
              <p className="text-muted-foreground mb-8">
                Organizations using LuMay SmartDynamics365 achieve an 85% reduction in quote generation time, 40% increase in sales productivity, and 3x improvement in lead conversion rates. LuMay's AI works seamlessly within the familiar D365 interface, requiring minimal training while delivering maximum impact.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Request Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link to="/products">View All Products</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl card-gradient border border-border flex items-center justify-center">
                <Building2 className="w-32 h-32 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-background border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result) => (
              <div key={result.description} className="text-center">
                <p className="font-display text-4xl font-bold text-primary mb-2">{result.metric}</p>
                <p className="text-muted-foreground text-sm">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">
              Why Enterprises Choose LuMay SmartDynamics365
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p>
                Microsoft Dynamics 365 is a powerful platform, but without intelligent automation, teams spend too much time on administrative tasks and not enough on building customer relationships. LuMay SmartDynamics365 bridges this gap by infusing your D365 environment with purpose-built AI that understands your business processes and actively works to accelerate them.
              </p>
              <p>
                Unlike generic AI add-ons, LuMay SmartDynamics365 is specifically designed for D365 workflows. LuMay's AI models are trained on CRM best practices and fine-tuned on your specific data patterns. This specialized focus enables LuMay to deliver relevant, actionable insights that generic tools simply cannot match.
              </p>
              <p>
                LuMay SmartDynamics365's quote automation capabilities are particularly transformative. What once took hours—gathering customer data, selecting products, calculating pricing, applying discounts, and routing for approval—now happens in minutes. LuMay's AI handles the complexity while maintaining accuracy, allowing sales teams to respond to customer requests faster than ever before.
              </p>
              <p>
                The embedded CRM Copilot provides real-time assistance throughout the sales process. From drafting personalized emails to preparing for meetings with comprehensive customer summaries, LuMay's copilot acts as an intelligent assistant that makes every sales rep more effective. LuMay's AI learns from your best performers to help everyone achieve top-tier results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Core Features</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
              Transform Your D365 Experience with LuMay
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              LuMay SmartDynamics365 brings the power of AI directly into your existing Microsoft ecosystem. Explore the capabilities that drive 85% faster quotes and 40% higher productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="card-gradient rounded-xl p-6 border border-border animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Advanced Capabilities</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
              AI-Powered Sales Excellence from LuMay
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability) => (
              <div key={capability.title} className="card-gradient rounded-xl p-8 border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <capability.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-3">{capability.title}</h3>
                <p className="text-muted-foreground">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Use Cases</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
                Transform Your Sales Operations with LuMay SmartDynamics365
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                LuMay SmartDynamics365 accelerates every aspect of your sales process, from lead qualification to deal closure. Discover how leading organizations leverage LuMay's AI capabilities to outperform competitors.
              </p>
              <ul className="space-y-4">
                {useCases.map((useCase, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-gradient rounded-2xl p-8 border border-border">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Zap className="w-8 h-8 text-muted-foreground" />
                  <div>
                    <p className="font-semibold text-foreground">Before LuMay SmartDynamics365</p>
                    <p className="text-sm text-muted-foreground">Average quote time: 4 hours</p>
                  </div>
                </div>
                <div className="h-px bg-border" />
                <div className="flex items-center gap-4">
                  <Zap className="w-8 h-8 text-green-400" />
                  <div>
                    <p className="font-semibold text-foreground">After LuMay SmartDynamics365</p>
                    <p className="text-sm text-green-400">Average quote time: 35 minutes</p>
                  </div>
                </div>
                <div className="h-px bg-border" />
                <div className="text-center pt-4">
                  <p className="text-3xl font-bold text-primary">85%</p>
                  <p className="text-muted-foreground">Time Saved with LuMay</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">FAQs</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
                Frequently Asked Questions About LuMay SmartDynamics365
              </h2>
              <p className="text-muted-foreground text-lg">
                Find answers to common questions about LuMay SmartDynamics365's D365 integration, AI capabilities, and implementation process.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="card-gradient rounded-xl border border-border px-6">
                  <AccordionTrigger className="text-foreground hover:text-primary text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Supercharge Your D365 with LuMay?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            See how LuMay SmartDynamics365 can transform your Microsoft ecosystem and deliver measurable ROI within 90 days. Schedule a personalized demo with our D365 experts.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="mailto:sales@lumay.ai">Contact Sales</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}