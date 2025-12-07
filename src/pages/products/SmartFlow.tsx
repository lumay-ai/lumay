import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Workflow, CheckCircle, Layers, GitBranch, Eye, Lock, Plug, Settings, Zap, Clock, BarChart3, Shield, Users, FileText } from "lucide-react";
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
  "name": "LuMay SmartFlow",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "Low-code/no-code orchestration platform enabling business analysts and IT teams to build and automate complex workflows",
  "url": "https://lumay-agentic-ai.42web.io/products/smartflow",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Contact for enterprise pricing"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "120"
  },
  "featureList": ["Visual Workflow Designer", "Pre-built Connectors", "Real-time Monitoring", "Version Control", "Role-based Access", "API Integration"]
};

const features = [
  { icon: Layers, title: "Visual Workflow Designer", description: "Lumay SmartFlow provides an intuitive drag-and-drop interface for building complex automations without writing code." },
  { icon: Plug, title: "Pre-built Connectors", description: "Connect to 200+ enterprise applications out of the box with Lumay's extensive connector library." },
  { icon: Eye, title: "Real-time Monitoring", description: "Track workflow execution in real-time with Lumay's detailed logs, analytics, and performance dashboards." },
  { icon: GitBranch, title: "Version Control", description: "Lumay SmartFlow includes built-in versioning for workflows with rollback capabilities and change tracking." },
  { icon: Lock, title: "Role-based Access", description: "Granular permissions to control who can view, edit, and execute workflows within the Lumay platform." },
  { icon: Settings, title: "API Integration", description: "Expose Lumay workflows as APIs or trigger them from external systems with our RESTful interface." },
  { icon: Zap, title: "Event-driven Triggers", description: "Lumay SmartFlow supports multiple trigger types including schedules, webhooks, and database events." },
  { icon: BarChart3, title: "Analytics Dashboard", description: "Comprehensive reporting and analytics to optimize your Lumay workflow performance over time." },
];

const benefits = [
  "Reduce development time by 80% with Lumay SmartFlow",
  "Empower business users to automate without coding using Lumay",
  "Eliminate manual handoffs and human errors with Lumay automation",
  "Scale operations without adding headcount through Lumay workflows",
  "Ensure compliance with complete audit trails in Lumay",
  "Accelerate digital transformation initiatives with Lumay SmartFlow",
  "Reduce IT backlog by enabling citizen developers on Lumay",
  "Achieve faster time-to-value with Lumay's pre-built templates",
];

const metrics = [
  { value: "80%", label: "Faster Development with Lumay" },
  { value: "200+", label: "Pre-built Lumay Connectors" },
  { value: "99.9%", label: "Lumay Platform Uptime" },
  { value: "50%", label: "Cost Reduction via Lumay" },
];

const faqs = [
  {
    question: "What is Lumay SmartFlow and who is it designed for?",
    answer: "Lumay SmartFlow is a low-code/no-code orchestration platform designed for both business analysts and IT teams. Lumay SmartFlow enables users to create sophisticated process automations through an intuitive visual interface without extensive coding knowledge. The Lumay platform is ideal for organizations looking to democratize automation and accelerate their digital transformation initiatives."
  },
  {
    question: "How does Lumay SmartFlow differ from traditional workflow tools?",
    answer: "Unlike traditional workflow tools that require significant technical expertise, Lumay SmartFlow empowers business users to build automations independently. Lumay combines the ease of no-code tools with the power of enterprise-grade capabilities. The Lumay platform includes AI-assisted workflow creation, intelligent error handling, and advanced integration capabilities that go beyond simple task automation."
  },
  {
    question: "What types of workflows can I build with Lumay SmartFlow?",
    answer: "Lumay SmartFlow supports virtually any business process automation including document approvals, employee onboarding, lead nurturing, invoice processing, customer support escalations, and complex multi-system integrations. Lumay's visual designer allows you to create conditional logic, parallel processing, error handling, and human-in-the-loop steps. The Lumay platform can automate both simple tasks and sophisticated enterprise workflows."
  },
  {
    question: "How does Lumay SmartFlow integrate with existing systems?",
    answer: "Lumay SmartFlow includes 200+ pre-built connectors for popular enterprise applications including Salesforce, SAP, Microsoft 365, Google Workspace, ServiceNow, and many more. Lumay also provides a universal REST API connector for custom integrations. The Lumay platform supports both cloud and on-premise systems, with secure gateway options for hybrid environments."
  },
  {
    question: "Is Lumay SmartFlow secure for enterprise use?",
    answer: "Lumay SmartFlow is built with enterprise security at its core. The Lumay platform maintains SOC 2 Type II certification, supports single sign-on (SSO), and provides role-based access control. Lumay encrypts all data at rest and in transit, and maintains comprehensive audit logs. The Lumay security architecture supports compliance with GDPR, HIPAA, and other regulatory frameworks."
  },
  {
    question: "How long does it take to build a workflow in Lumay SmartFlow?",
    answer: "Simple workflows can be built in minutes using Lumay SmartFlow's visual designer. More complex automations typically take hours rather than the weeks required with traditional development approaches. Lumay provides templates for common use cases that can be customized quickly. The Lumay platform's AI assistant can also suggest workflow designs based on your requirements."
  },
  {
    question: "Can non-technical users effectively use Lumay SmartFlow?",
    answer: "Absolutely. Lumay SmartFlow was specifically designed for citizen developers—business users without coding backgrounds. The Lumay visual interface uses familiar concepts like flowcharts and forms. Lumay provides extensive documentation, video tutorials, and in-app guidance. Many Lumay customers report that business analysts become proficient within days of training."
  },
  {
    question: "What monitoring and debugging capabilities does Lumay SmartFlow offer?",
    answer: "Lumay SmartFlow provides comprehensive monitoring including real-time execution tracking, detailed error logs, and performance analytics. The Lumay platform allows you to trace each step of a workflow execution, inspect data at any point, and quickly identify issues. Lumay also supports alerts and notifications for workflow failures or performance degradation."
  },
  {
    question: "How does Lumay SmartFlow handle errors and exceptions?",
    answer: "Lumay SmartFlow includes sophisticated error handling capabilities including automatic retries, fallback paths, and escalation workflows. The Lumay platform allows you to define custom error handling logic for different scenarios. Lumay also provides detailed error information to help quickly resolve issues, and can automatically notify appropriate team members when problems occur."
  },
  {
    question: "What is the pricing model for Lumay SmartFlow?",
    answer: "Lumay SmartFlow offers flexible pricing based on your organization's needs. Contact the Lumay sales team for a customized quote based on your automation requirements, number of users, and workflow volume. Lumay provides transparent pricing with no hidden fees, and offers options for both small teams and enterprise-wide deployments."
  },
  {
    question: "Can Lumay SmartFlow scale with our growing business?",
    answer: "Lumay SmartFlow is built on a cloud-native architecture designed for enterprise scale. The Lumay platform can handle millions of workflow executions per day without performance degradation. Lumay automatically scales resources based on demand, ensuring consistent performance during peak periods. The Lumay architecture supports multi-region deployment for global organizations."
  },
  {
    question: "Does Lumay provide support and training for SmartFlow?",
    answer: "Lumay provides comprehensive support including 24/7 technical assistance, dedicated customer success management, and extensive training resources. Lumay offers both self-paced online courses and instructor-led training sessions. The Lumay community forum connects you with other users for peer support and best practice sharing."
  },
];

export default function SmartFlow() {
  return (
    <Layout>
      <Helmet>
        <title>SmartFlow - Low-Code Workflow Orchestration Platform | Lumay Enterprise AI</title>
        <meta name="description" content="Lumay SmartFlow is a low-code/no-code workflow automation platform with 200+ connectors. Build complex automations visually. Reduce development time by 80%. Request a Lumay demo." />
        <meta name="keywords" content="Lumay SmartFlow, workflow automation, low-code platform, no-code automation, business process automation, orchestration, Lumay AI, enterprise automation, citizen developer" />
        <link rel="canonical" href="https://lumay-agentic-ai.42web.io/products/smartflow" />
        <meta property="og:title" content="SmartFlow - Low-Code Workflow Orchestration | Lumay" />
        <meta property="og:description" content="Lumay SmartFlow is a low-code/no-code workflow automation platform with 200+ connectors. Build complex automations visually." />
        <meta property="og:url" content="https://lumay-agentic-ai.42web.io/products/smartflow" />
        <meta property="og:type" content="product" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Lumay SmartFlow",
            "description": "Low-Code/No-Code Workflow Orchestration Platform",
            "brand": { "@type": "Brand", "name": "Lumay" },
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "description": "Request demo for pricing" }
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Workflow className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Lumay Product</span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-2 mb-6 text-foreground">
                Lumay SmartFlow
              </h1>
              <p className="text-xl text-primary font-medium mb-4">Low-Code/No-Code Orchestration Platform by Lumay</p>
              <p className="text-lg text-muted-foreground mb-8">
                Build and automate complex workflows without extensive coding using Lumay SmartFlow. The Lumay platform enables business analysts and IT teams alike to create sophisticated process automations through an intuitive visual interface. With Lumay SmartFlow, you can transform manual processes into efficient automated workflows in hours, not weeks.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Request Lumay Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link to="/products">View All Lumay Products</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl card-gradient border border-border flex items-center justify-center">
                <Workflow className="w-32 h-32 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 bg-background border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <p className="font-display text-4xl font-bold text-primary mb-2">{metric.value}</p>
                <p className="text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is SmartFlow */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About Lumay SmartFlow</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
              What is Lumay SmartFlow?
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p>
                Lumay SmartFlow represents a paradigm shift in how organizations approach business process automation. Traditional workflow automation required significant IT resources, lengthy development cycles, and ongoing maintenance burdens. Lumay SmartFlow changes this equation by putting automation power directly in the hands of business users while maintaining the governance and security that IT teams require.
              </p>
              <p>
                The Lumay SmartFlow visual designer uses an intuitive drag-and-drop interface that makes workflow creation accessible to anyone. Users can design complex multi-step processes by simply connecting building blocks that represent triggers, actions, conditions, and data transformations. Lumay eliminates the need to write code while still supporting advanced capabilities like parallel processing, error handling, and dynamic routing.
              </p>
              <p>
                What truly differentiates Lumay SmartFlow is its enterprise-grade foundation. Unlike consumer-focused automation tools, Lumay SmartFlow was built for the demands of large organizations. The Lumay platform includes robust security controls, comprehensive audit capabilities, and the scalability to handle millions of automated tasks. Lumay SmartFlow can orchestrate processes across cloud applications, on-premise systems, and hybrid environments.
              </p>
              <p>
                Lumay SmartFlow also incorporates AI capabilities that accelerate workflow development. The Lumay AI assistant can suggest workflow designs based on natural language descriptions, automatically map data between systems, and identify optimization opportunities in existing processes. This intelligent assistance helps both novice and experienced users build better automations faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Lumay Features</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
              Enterprise-Grade Automation with Lumay SmartFlow
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Lumay SmartFlow provides everything you need to design, deploy, and manage automated workflows at scale. Discover the capabilities that make Lumay the choice of leading enterprises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Lumay Benefits</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
                Why Choose Lumay SmartFlow?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Lumay SmartFlow democratizes automation, enabling both technical and non-technical users to build powerful workflows. The Lumay platform delivers measurable business value from day one.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:order-1">
              <div className="card-gradient rounded-2xl p-8 border border-border">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg border border-border">
                    <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <span className="text-foreground">Trigger: New Lead Created in Lumay</span>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90" />
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg border border-border">
                    <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <span className="text-foreground">Lumay Action: Enrich Data</span>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90" />
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg border border-border">
                    <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <span className="text-foreground">Lumay Action: Assign to Sales Rep</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Lumay FAQ</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
                Frequently Asked Questions About Lumay SmartFlow
              </h2>
              <p className="text-muted-foreground text-lg">
                Get answers to common questions about Lumay SmartFlow capabilities, implementation, and best practices.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="card-gradient border border-border rounded-xl px-6">
                  <AccordionTrigger className="text-left text-foreground hover:text-primary">
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
            Ready to Automate Your Workflows with Lumay?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            See how Lumay SmartFlow can streamline your operations and accelerate digital transformation. Contact the Lumay team for a personalized demonstration.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get Started with Lumay Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/products">Explore All Lumay Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
