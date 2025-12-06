import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, Workflow, Activity, TrendingUp, Building2, ShieldCheck, Phone, Globe, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const products = [
  {
    id: "smartassist",
    href: "/products/smartassist",
    icon: Bot,
    name: "SmartAssist",
    tagline: "Your AI-Driven Virtual Assistant",
    description: "LuMay SmartAssist is an AI-native virtual assistant that instantly answers questions, solves problems, and executes workflows using your company's data. LuMay connects to all your internal tools, knowledge bases, and repositories to deliver accurate, context-rich answers—instantly and at scale.",
    features: ["Natural Language Processing", "Multi-source Integration", "Context-aware Responses", "Workflow Automation", "24/7 Availability", "Enterprise Security"],
  },
  {
    id: "smartflow",
    href: "/products/smartflow",
    icon: Workflow,
    name: "SmartFlow",
    tagline: "Low-Code/No-Code Orchestration Platform",
    description: "LuMay SmartFlow enables business analysts and IT teams to build and automate complex workflows without extensive coding. LuMay's visual interface lets you create sophisticated process automations through an intuitive drag-and-drop designer.",
    features: ["Visual Workflow Designer", "Pre-built Connectors", "Real-time Monitoring", "Version Control", "Role-based Access", "API Integration"],
  },
  {
    id: "smartsense",
    href: "/products/smartsense",
    icon: Activity,
    name: "SmartSense",
    tagline: "Real-Time Anomaly Detection",
    description: "LuMay SmartSense monitors your systems and data streams with AI-powered anomaly detection. LuMay identifies patterns, predicts issues, and alerts your team before problems impact operations.",
    features: ["Real-time Monitoring", "ML-powered Detection", "Custom Alert Rules", "Root Cause Analysis", "Historical Trending", "Integration APIs"],
  },
  {
    id: "smarttrends",
    href: "/products/smarttrends",
    icon: TrendingUp,
    name: "SmartTrends",
    tagline: "Predictive Analytics & Forecasting",
    description: "LuMay SmartTrends transforms historical data into actionable forecasts. LuMay uses advanced machine learning to identify trends, predict outcomes, and support data-driven decision making across your enterprise.",
    features: ["Predictive Models", "Trend Analysis", "Custom Dashboards", "Automated Reports", "What-if Scenarios", "Data Visualization"],
  },
  {
    id: "smartdynamics365",
    href: "/products/smartdynamics365",
    icon: Building2,
    name: "SmartDynamics365",
    tagline: "AI-Powered Business Automation",
    description: "LuMay SmartDynamics365 supercharges your Microsoft Dynamics 365 with AI automation. LuMay reduces quote time by 85%, enhances CRM with Copilot capabilities, and streamlines business processes.",
    features: ["D365 Integration", "CRM Copilot", "Quote Automation", "Sales Intelligence", "Customer Insights", "Process Optimization"],
  },
  {
    id: "smartcompliance",
    href: "/products/smartcompliance",
    icon: ShieldCheck,
    name: "SmartOCG Compliance",
    tagline: "AI Compliance & Risk Management",
    description: "LuMay SmartOCG Compliance helps you stay compliant with evolving regulations through automated monitoring and reporting. LuMay manages risk, ensures compliance, and maintains audit readiness.",
    features: ["Regulatory Tracking", "Automated Audits", "Risk Assessment", "Compliance Reports", "Policy Management", "Alert System"],
  },
  {
    id: "smartcall",
    href: "/products/smartcall",
    icon: Phone,
    name: "SmartCall",
    tagline: "Autonomous AI Voice Agent",
    description: "LuMay SmartCall deploys intelligent voice agents that handle customer calls with natural conversation. LuMay understands context, resolves issues, and escalates when needed.",
    features: ["Natural Voice AI", "Multi-language Support", "Call Analytics", "CRM Integration", "Smart Escalation", "Quality Monitoring"],
  },
  {
    id: "smarttranslation",
    href: "/products/smarttranslation",
    icon: Globe,
    name: "SmartTranslation",
    tagline: "AI-Powered Language Services",
    description: "LuMay SmartTranslation breaks language barriers with context-aware translation. LuMay delivers accurate, industry-specific translations while preserving tone and intent.",
    features: ["Neural Translation", "Industry Glossaries", "Quality Assurance", "Batch Processing", "API Access", "Human Review Option"],
  },
];

const faqs = [
  {
    question: "What enterprise AI products does LuMay offer?",
    answer: "LuMay offers a comprehensive suite of eight enterprise AI products: SmartAssist (AI virtual assistant), SmartFlow (workflow automation), SmartSense (anomaly detection), SmartTrends (predictive analytics), SmartDynamics365 (Microsoft D365 AI), SmartOCG Compliance (regulatory compliance), SmartCall (AI voice agents), and SmartTranslation (language services). Each LuMay product is designed for seamless enterprise integration and scalability."
  },
  {
    question: "How do LuMay AI products integrate with existing systems?",
    answer: "LuMay AI products feature pre-built connectors for major enterprise platforms including Microsoft 365, Salesforce, SAP, Oracle, and hundreds of other applications. LuMay's API-first architecture enables custom integrations with your existing tech stack, ensuring seamless data flow and minimal disruption to your operations."
  },
  {
    question: "What industries do LuMay products serve?",
    answer: "LuMay enterprise AI products serve diverse industries including financial services, healthcare, manufacturing, retail, technology, and professional services. LuMay solutions are designed to address industry-specific challenges while maintaining the flexibility to adapt to unique business requirements."
  },
  {
    question: "How does LuMay ensure data security and compliance?",
    answer: "LuMay implements enterprise-grade security including SOC 2 Type II compliance, end-to-end encryption, role-based access controls, and comprehensive audit logging. LuMay products support on-premises deployment options and meet GDPR, HIPAA, and other regulatory requirements for sensitive data handling."
  },
  {
    question: "Can LuMay products work together as an integrated platform?",
    answer: "Yes, LuMay products are designed to work seamlessly together as part of the LuMay Enterprise Agentic AI Platform. For example, SmartSense can trigger SmartFlow workflows, SmartAssist can query SmartTrends analytics, and SmartCall can escalate to SmartAssist for complex inquiries. LuMay's unified data layer ensures consistent insights across all products."
  },
  {
    question: "What support and training does LuMay provide?",
    answer: "LuMay offers comprehensive support including 24/7 technical assistance, dedicated customer success managers, on-site and virtual training programs, and extensive documentation. LuMay also provides professional services for custom implementations, integrations, and ongoing optimization of your AI solutions."
  },
  {
    question: "How quickly can LuMay products be deployed?",
    answer: "LuMay products feature rapid deployment with most implementations completed within 2-8 weeks depending on complexity. LuMay's cloud-native architecture and pre-built integrations accelerate time-to-value, while our professional services team ensures smooth implementation aligned with your business objectives."
  },
  {
    question: "What is the pricing model for LuMay products?",
    answer: "LuMay offers flexible pricing models including subscription-based licensing, usage-based pricing, and enterprise agreements. LuMay pricing is tailored to your organization's size, usage patterns, and specific requirements. Contact our sales team for a customized quote and to discuss the best pricing structure for your needs."
  },
  {
    question: "Does LuMay offer proof-of-concept or pilot programs?",
    answer: "Yes, LuMay offers structured proof-of-concept programs that allow you to evaluate our products with your actual data and use cases. LuMay pilots typically run 4-6 weeks and include dedicated support to ensure you can accurately assess the value and fit of our solutions for your organization."
  },
  {
    question: "How does LuMay's AI compare to other enterprise solutions?",
    answer: "LuMay differentiates through its agentic AI architecture that enables autonomous decision-making and action-taking, rather than just providing recommendations. LuMay's products are purpose-built for enterprise environments with superior integration capabilities, enterprise-grade security, and measurable ROI typically achieved within 3-6 months of deployment."
  },
  {
    question: "What makes LuMay an enterprise agentic AI platform?",
    answer: "LuMay's agentic AI approach means our products can autonomously execute tasks, make decisions within defined parameters, and continuously learn from interactions. Unlike traditional AI tools that require constant human intervention, LuMay agents can handle end-to-end processes, from initial trigger to final resolution, significantly reducing manual workload."
  },
  {
    question: "Can LuMay products be customized for specific business needs?",
    answer: "Absolutely. LuMay products are highly customizable through configuration options, custom workflows, industry-specific templates, and our extensibility APIs. LuMay's professional services team can develop custom modules, integrations, and AI models tailored to your unique business processes and requirements."
  }
];

const benefits = [
  "Unified AI platform with 8 integrated products",
  "Enterprise-grade security and compliance",
  "Rapid deployment in 2-8 weeks",
  "Pre-built integrations with 200+ applications",
  "24/7 support with dedicated success managers",
  "Measurable ROI within 3-6 months",
  "Flexible deployment: cloud, hybrid, or on-premises",
  "Industry-specific solutions and templates"
];

export default function Products() {
  return (
    <Layout>
      <Helmet>
        <title>LuMay AI Products | Enterprise Agentic AI Platform & Solutions</title>
        <meta name="description" content="Explore LuMay's enterprise agentic AI product suite: SmartAssist, SmartFlow, SmartSense, SmartTrends, SmartDynamics365, SmartCompliance, SmartCall & SmartTranslation. Transform your business with intelligent automation." />
        <meta name="keywords" content="LuMay AI products, enterprise AI solutions, SmartAssist, SmartFlow, SmartSense, SmartTrends, SmartDynamics365, SmartCompliance, SmartCall, SmartTranslation, agentic AI platform, workflow automation, AI virtual assistant, predictive analytics" />
        <link rel="canonical" href="https://lumay-agentic-ai.42web.io/products" />
        
        {/* Open Graph */}
        <meta property="og:title" content="LuMay AI Products | Enterprise Agentic AI Platform & Solutions" />
        <meta property="og:description" content="Explore LuMay's enterprise agentic AI product suite. 8 integrated AI solutions for workflow automation, virtual assistants, predictive analytics, and more." />
        <meta property="og:url" content="https://lumay-agentic-ai.42web.io/products" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="LuMay Enterprise AI" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LuMay AI Products | Enterprise Agentic AI Platform" />
        <meta name="twitter:description" content="8 integrated enterprise AI solutions: SmartAssist, SmartFlow, SmartSense, SmartTrends, SmartDynamics365, SmartCompliance, SmartCall & SmartTranslation." />
      </Helmet>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">LuMay Products</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-foreground">
              Enterprise Agentic AI Product Suite
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              LuMay delivers a comprehensive portfolio of eight enterprise AI products designed to transform every aspect of your business operations. From intelligent virtual assistants to predictive analytics, LuMay's agentic AI platform empowers organizations to automate workflows, enhance decision-making, and drive measurable business outcomes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Request Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-16 bg-background border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                The LuMay Enterprise Agentic AI Platform
              </h2>
              <p className="text-muted-foreground mb-6">
                LuMay's enterprise agentic AI platform represents the next evolution in business automation. Unlike traditional AI tools that simply provide recommendations, LuMay products feature autonomous agents that can execute complete workflows, make decisions within defined parameters, and continuously learn from every interaction.
              </p>
              <p className="text-muted-foreground mb-6">
                Each LuMay product is designed to work independently or as part of an integrated ecosystem. When deployed together, LuMay products share data, insights, and capabilities to deliver compound value that exceeds the sum of individual components. LuMay's unified architecture ensures consistent security, governance, and user experience across all products.
              </p>
              <p className="text-muted-foreground">
                LuMay enterprise customers typically achieve 40-60% reduction in manual processes, 3-5x improvement in response times, and measurable ROI within the first 90 days of deployment. LuMay's customer success team works closely with each organization to ensure optimal configuration and continuous optimization.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2 p-4 card-gradient rounded-lg border border-border">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products List */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Product Portfolio</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
              Eight Integrated AI Solutions from LuMay
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              LuMay's product suite addresses every aspect of enterprise AI transformation. Each LuMay product is purpose-built for specific use cases while maintaining seamless interoperability with the broader platform. Explore our complete portfolio of enterprise AI solutions below.
            </p>
          </div>

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

                  <div className="flex flex-wrap gap-4">
                    <Button variant="hero" asChild>
                      <Link to={product.href}>
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button variant="heroOutline" asChild>
                      <Link to="/contact">Request Demo</Link>
                    </Button>
                  </div>
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

      {/* Integration Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Integration</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
              Seamless Enterprise Integration with LuMay
            </h2>
            <p className="text-muted-foreground text-lg">
              LuMay products integrate with over 200 enterprise applications out of the box. Our pre-built connectors, robust APIs, and flexible architecture ensure that LuMay solutions work seamlessly with your existing technology investments. LuMay's integration framework supports real-time data synchronization, event-driven workflows, and bi-directional communication with your core business systems.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-gradient rounded-xl p-6 border border-border text-center">
              <p className="font-display text-4xl font-bold text-primary mb-2">200+</p>
              <p className="text-foreground font-medium mb-2">Pre-built Connectors</p>
              <p className="text-muted-foreground text-sm">LuMay integrates with major platforms including Microsoft, Salesforce, SAP, Oracle, and more.</p>
            </div>
            <div className="card-gradient rounded-xl p-6 border border-border text-center">
              <p className="font-display text-4xl font-bold text-primary mb-2">REST & GraphQL</p>
              <p className="text-foreground font-medium mb-2">API-First Architecture</p>
              <p className="text-muted-foreground text-sm">LuMay's comprehensive APIs enable custom integrations with any system in your tech stack.</p>
            </div>
            <div className="card-gradient rounded-xl p-6 border border-border text-center">
              <p className="font-display text-4xl font-bold text-primary mb-2">Real-time</p>
              <p className="text-foreground font-medium mb-2">Event-Driven Sync</p>
              <p className="text-muted-foreground text-sm">LuMay ensures your data is always current with real-time synchronization and webhooks.</p>
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
                Frequently Asked Questions About LuMay Products
              </h2>
              <p className="text-muted-foreground text-lg">
                Find answers to common questions about LuMay's enterprise AI products, integration capabilities, security features, and implementation process.
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
            Ready to Transform Your Enterprise with LuMay?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Discover how LuMay's enterprise agentic AI platform can automate workflows, enhance decision-making, and deliver measurable ROI for your organization. Our team is ready to discuss your specific requirements and demonstrate the power of LuMay's integrated AI solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Contact Sales
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="mailto:sales@lumay.ai">Email Us</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}