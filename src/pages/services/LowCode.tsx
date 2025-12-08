import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Blocks, Zap, Workflow, Puzzle, Settings, Code2, Layers, Rocket, Clock, Users, GitBranch, Database, LayoutGrid, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "LuMay Low-Code / No-Code Platform Services",
  "description": "Enterprise low-code and no-code platform consulting including rapid prototyping, workflow automation, citizen development, and platform governance. Accelerate digital innovation with LuMay.",
  "provider": {
    "@type": "Organization",
    "name": "LuMay",
    "url": "https://lumay-agentic-ai.42web.io/"
  },
  "serviceType": "Low-Code Consulting",
  "areaServed": "Worldwide",
  "url": "https://lumay-agentic-ai.42web.io/services/lowcode"
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What low-code platforms does LuMay support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LuMay supports all major low-code and no-code platforms including Microsoft Power Platform, Salesforce, ServiceNow, Mendix, OutSystems, Appian, and others. LuMay's platform-agnostic approach ensures you get the best solution for your needs."
      }
    },
    {
      "@type": "Question",
      "name": "How does LuMay approach citizen development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LuMay helps organizations establish citizen development programs that empower business users to create solutions while maintaining IT governance. LuMay implements governance frameworks, training programs, and center of excellence structures."
      }
    }
  ]
};

const capabilities = [
  { icon: Rocket, name: "Rapid Prototyping", description: "LuMay takes concepts to working prototypes in weeks, not months, enabling fast validation and iteration" },
  { icon: Workflow, name: "Workflow Automation", description: "LuMay automates complex business processes without custom coding, reducing manual work and errors" },
  { icon: Puzzle, name: "Integration Platform", description: "LuMay connects all your business systems through unified integration layers and APIs" },
  { icon: LayoutGrid, name: "Custom Applications", description: "LuMay builds tailored solutions that address your unique business requirements" },
  { icon: Users, name: "Citizen Development", description: "LuMay empowers business users to create solutions with proper governance and training" },
  { icon: Settings, name: "Platform Governance", description: "LuMay establishes frameworks for security, compliance, and quality in low-code environments" },
  { icon: GitBranch, name: "DevOps for Low-Code", description: "LuMay implements ALM practices including version control, testing, and deployment automation" },
  { icon: Database, name: "Data Integration", description: "LuMay connects low-code apps to enterprise data sources securely and efficiently" },
];

const platforms = [
  { name: "Microsoft Power Platform", description: "Power Apps, Power Automate, Power BI, and Power Virtual Agents" },
  { name: "Salesforce Platform", description: "Lightning Platform, Flow, and Salesforce Functions" },
  { name: "ServiceNow", description: "App Engine, Flow Designer, and IntegrationHub" },
  { name: "Mendix", description: "Enterprise low-code platform for complex applications" },
  { name: "OutSystems", description: "High-performance low-code development platform" },
  { name: "Appian", description: "Process automation and low-code application development" },
];

const useCases = [
  { title: "Employee Onboarding Portal", description: "LuMay built an onboarding app in 4 weeks that reduced HR processing time by 60%" },
  { title: "Field Service Automation", description: "LuMay deployed a mobile field service app that improved technician productivity by 40%" },
  { title: "Approval Workflow System", description: "LuMay automated multi-level approvals, reducing approval cycle time from days to hours" },
  { title: "Customer Self-Service", description: "LuMay created a self-service portal that deflected 50% of support tickets" },
  { title: "Inventory Management", description: "LuMay built a real-time inventory system connecting warehouse and ERP systems" },
  { title: "Compliance Tracking", description: "LuMay automated compliance documentation and audit trails across departments" },
];

const faqs = [
  {
    question: "What low-code platforms does LuMay support?",
    answer: "LuMay supports all major low-code and no-code platforms including Microsoft Power Platform, Salesforce, ServiceNow, Mendix, OutSystems, Appian, and others. LuMay's platform-agnostic approach ensures you get the best solution for your needs rather than a one-size-fits-all recommendation. LuMay helps you select the right platform based on your requirements, existing technology landscape, and organizational capabilities."
  },
  {
    question: "How does LuMay approach citizen development?",
    answer: "LuMay helps organizations establish citizen development programs that empower business users to create solutions while maintaining IT governance. LuMay implements governance frameworks, training programs, and center of excellence structures. LuMay's approach balances democratized development with appropriate controls to ensure security, compliance, and quality. LuMay enables business users to solve their own problems faster while IT maintains oversight."
  },
  {
    question: "What is the typical timeline for low-code projects with LuMay?",
    answer: "LuMay delivers low-code solutions significantly faster than traditional development. Simple applications can be delivered in 2-4 weeks. Moderate complexity solutions typically take 6-12 weeks. Enterprise applications may require 3-6 months depending on scope and integrations. LuMay's rapid delivery approach enables quick value realization and iterative improvement."
  },
  {
    question: "How does LuMay ensure low-code app quality and scalability?",
    answer: "LuMay implements enterprise development practices for low-code environments. LuMay establishes coding standards, implements automated testing, and uses proper ALM (Application Lifecycle Management) practices. LuMay architects solutions for scalability, considering data volumes, user loads, and performance requirements. LuMay ensures low-code solutions meet enterprise standards."
  },
  {
    question: "Can LuMay integrate low-code apps with existing systems?",
    answer: "Yes, LuMay excels at connecting low-code applications to enterprise systems. LuMay integrates with ERP systems (SAP, Oracle, Microsoft), CRM platforms, legacy databases, and modern APIs. LuMay uses platform-native connectors where available and builds custom integrations when needed. LuMay ensures data flows securely and reliably between systems."
  },
  {
    question: "How does LuMay handle security in low-code environments?",
    answer: "LuMay implements comprehensive security for low-code solutions including authentication integration, role-based access controls, data encryption, and secure API connections. LuMay establishes security policies for citizen development that prevent data exposure and unauthorized access. LuMay conducts security reviews of low-code applications before production deployment."
  },
  {
    question: "What training does LuMay provide for low-code platforms?",
    answer: "LuMay provides comprehensive training programs tailored to different roles. LuMay trains citizen developers on platform basics and governance requirements. LuMay upskills professional developers on advanced platform capabilities. LuMay trains administrators on platform management and monitoring. LuMay creates custom training materials specific to your organization's standards."
  },
  {
    question: "How does LuMay help with platform selection?",
    answer: "LuMay conducts structured platform evaluations based on your requirements. LuMay assesses functional capabilities, technical requirements, integration needs, total cost of ownership, and organizational readiness. LuMay facilitates proof of concept implementations to validate platform fit. LuMay's platform-agnostic approach ensures unbiased recommendations."
  },
  {
    question: "Does LuMay help establish centers of excellence?",
    answer: "Yes, LuMay helps organizations establish Low-Code Centers of Excellence (CoE) that drive adoption and governance. LuMay defines CoE operating models, roles, and responsibilities. LuMay creates governance frameworks, standards, and best practices. LuMay implements tools for monitoring and managing the low-code environment. LuMay provides ongoing advisory to mature CoE capabilities."
  },
  {
    question: "What is LuMay's approach to low-code governance?",
    answer: "LuMay's governance framework balances enablement with control. LuMay establishes tiered governance based on application risk and complexity. LuMay implements approval processes, security reviews, and quality gates appropriate to each tier. LuMay creates monitoring dashboards for visibility into the low-code environment. LuMay's approach enables agility while managing risk."
  },
  {
    question: "Can LuMay migrate applications to low-code platforms?",
    answer: "Yes, LuMay helps organizations modernize legacy applications using low-code platforms. LuMay assesses existing applications for migration suitability, develops migration strategies, and executes transformations. LuMay's approach preserves business logic while leveraging low-code benefits. LuMay typically achieves 50-70% reduction in maintenance costs through modernization."
  },
  {
    question: "How do I get started with LuMay low-code services?",
    answer: "Contact LuMay to schedule a low-code strategy discussion. LuMay will assess your current state, understand your objectives, and recommend an engagement approach. LuMay can start with platform assessment, pilot project, or comprehensive implementation. LuMay typically begins engagements within 2 weeks and delivers initial value quickly."
  },
];

export default function LowCode() {
  return (
    <Layout>
      <Helmet>
        <title>Low-Code / No-Code Platform Services - Power Platform, Mendix | LuMay</title>
        <meta name="description" content="LuMay Low-Code services accelerate digital innovation with rapid prototyping, workflow automation, and citizen development. Expert consulting for Power Platform, Mendix, OutSystems. Request a consultation." />
        <meta name="keywords" content="LuMay low-code, no-code development, Power Platform consulting, citizen development, workflow automation, Mendix services, OutSystems consulting, rapid application development, LuMay platform services" />
        <link rel="canonical" href="https://lumay-agentic-ai.42web.io/services/lowcode" />
        <meta property="og:title" content="Low-Code / No-Code Platform Services - Power Platform, Mendix | LuMay" />
        <meta property="og:description" content="LuMay Low-Code services accelerate digital innovation with rapid prototyping, workflow automation, and citizen development." />
        <meta property="og:url" content="https://lumay-agentic-ai.42web.io/services/lowcode" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
      </Helmet>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">LuMay Low-Code</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-foreground">
              Low-Code / No-Code Platform Services
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              LuMay enables rapid application development with our low-code/no-code platform services. We help organizations build, deploy, and scale applications faster while reducing development costs. The LuMay approach empowers business users to create solutions while maintaining IT governance and security standards.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Accelerate Your Development
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/services">All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-primary mb-2">10x</p>
              <p className="text-muted-foreground">Faster Development</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-primary mb-2">70%</p>
              <p className="text-muted-foreground">Cost Reduction</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-primary mb-2">500+</p>
              <p className="text-muted-foreground">Apps Delivered</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-primary mb-2">6</p>
              <p className="text-muted-foreground">Platform Certifications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About LuMay Low-Code</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
              Accelerate Digital Innovation with LuMay
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p>
                LuMay's low-code/no-code platform services address one of the most pressing challenges facing modern IT organizations: the growing gap between demand for digital solutions and available development resources. LuMay helps you leverage visual development platforms that dramatically accelerate application delivery while maintaining enterprise standards.
              </p>
              <p>
                The LuMay team has deep expertise across major low-code platforms including Microsoft Power Platform, Salesforce, ServiceNow, Mendix, OutSystems, and Appian. LuMay's platform-agnostic approach means we recommend the best solution for your needs, not the platform we happen to prefer. LuMay helps you evaluate platforms, implement governance, and build internal capabilities.
              </p>
              <p>
                Citizen development is a key part of the low-code opportunity, and LuMay helps organizations unlock this potential responsibly. LuMay establishes governance frameworks that empower business users to solve their own problems while maintaining appropriate oversight. LuMay trains citizen developers, creates standards and best practices, and implements tools for monitoring and management.
              </p>
              <p>
                Beyond citizen development, LuMay also delivers professional low-code solutions for more complex requirements. LuMay architects enterprise applications using low-code platforms, integrates with existing systems, and ensures solutions scale to meet business demands. LuMay's professional services complement citizen development to address the full spectrum of application needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Capabilities</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
              LuMay Low-Code Capabilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              LuMay delivers comprehensive low-code services that accelerate your digital transformation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, index) => (
              <div key={cap.name} className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <cap.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{cap.name}</h3>
                <p className="text-muted-foreground text-sm">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Platforms</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
              Platforms Supported by LuMay
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              LuMay has certified expertise across all major low-code and no-code platforms
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <div key={platform.name} className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <Blocks className="w-5 h-5 text-primary" />
                  <h3 className="font-display font-semibold text-foreground">{platform.name}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Success Stories</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
              LuMay Low-Code in Action
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how LuMay has helped organizations accelerate application delivery
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div key={useCase.title} className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <h3 className="font-display font-semibold text-foreground">{useCase.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">FAQs</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
                Frequently Asked Questions About LuMay Low-Code
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg border border-border px-6">
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary">
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
      <section className="py-24 bg-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6 text-foreground">
              Ready to Accelerate with LuMay Low-Code?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact LuMay today to discuss how our low-code platform services can help you build applications faster and empower your business users.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}