import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, CheckCircle, FileSearch, AlertTriangle, ClipboardCheck, Lock, Bell, BarChart3, Eye, Scale, Clock, Database, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  { icon: FileSearch, title: "Regulatory Tracking", description: "LuMay SmartOCG Compliance automatically monitors regulatory changes across jurisdictions and frameworks. LuMay's AI identifies which changes affect your organization and provides actionable guidance for maintaining compliance." },
  { icon: ClipboardCheck, title: "Automated Audits", description: "LuMay SmartOCG Compliance provides continuous compliance monitoring with automated audit trails. LuMay captures evidence, tracks control effectiveness, and maintains audit-ready documentation at all times." },
  { icon: AlertTriangle, title: "Risk Assessment", description: "LuMay SmartOCG Compliance uses AI-powered risk scoring to identify and prioritize compliance gaps. LuMay's risk assessment considers likelihood, impact, and regulatory exposure to focus your team on the highest-priority issues." },
  { icon: BarChart3, title: "Compliance Reports", description: "LuMay SmartOCG Compliance generates comprehensive compliance reports with one click. LuMay's reports are formatted for executives, auditors, and regulators with appropriate detail levels for each audience." },
  { icon: Lock, title: "Policy Management", description: "LuMay SmartOCG Compliance provides a centralized repository for all policies with version control and attestation tracking. LuMay ensures employees acknowledge policies and tracks completion across the organization." },
  { icon: Bell, title: "Alert System", description: "LuMay SmartOCG Compliance delivers real-time notifications for compliance violations, approaching deadlines, and regulatory changes. LuMay's smart alerting prevents notification fatigue while ensuring nothing is missed." },
];

const regulations = [
  "GDPR",
  "SOC 2",
  "HIPAA",
  "PCI DSS",
  "ISO 27001",
  "CCPA",
  "SOX",
  "NIST",
  "FedRAMP",
  "CMMC",
  "GLBA",
  "FERPA"
];

const capabilities = [
  { icon: Eye, title: "Continuous Monitoring", description: "LuMay SmartOCG Compliance monitors your environment 24/7 for compliance violations and control failures. LuMay's automated testing ensures you know about issues before auditors do." },
  { icon: Scale, title: "Control Framework Mapping", description: "LuMay SmartOCG Compliance maps controls across multiple frameworks to eliminate duplicate work. LuMay shows how a single control satisfies requirements across GDPR, SOC 2, ISO 27001, and more." },
  { icon: Database, title: "Evidence Collection", description: "LuMay SmartOCG Compliance automatically collects and organizes evidence for audits. LuMay integrates with your systems to gather screenshots, logs, and configuration data without manual effort." },
  { icon: Clock, title: "Deadline Management", description: "LuMay SmartOCG Compliance tracks regulatory deadlines, renewal dates, and certification timelines. LuMay ensures you never miss a critical compliance milestone with proactive notifications." },
];

const useCases = [
  "Maintain continuous compliance across multiple frameworks",
  "Reduce audit preparation time by 70%",
  "Track regulatory changes affecting your business",
  "Automate evidence collection for audits",
  "Monitor third-party vendor compliance",
  "Manage policy lifecycle and attestations",
  "Identify and remediate compliance gaps",
  "Generate board-ready compliance reports"
];

const faqs = [
  {
    question: "Which compliance frameworks does LuMay SmartOCG Compliance support?",
    answer: "LuMay SmartOCG Compliance supports all major compliance frameworks including SOC 2, ISO 27001, HIPAA, PCI DSS, GDPR, CCPA, SOX, NIST, FedRAMP, CMMC, GLBA, and FERPA. LuMay also supports custom frameworks and can map controls between multiple standards. LuMay's framework library is continuously updated as regulations evolve."
  },
  {
    question: "How does LuMay SmartOCG Compliance track regulatory changes?",
    answer: "LuMay SmartOCG Compliance uses AI to monitor thousands of regulatory sources worldwide, including government agencies, industry bodies, and legal databases. LuMay analyzes changes to identify those affecting your organization based on your industry, geography, and compliance scope. LuMay provides plain-language summaries and specific guidance on required actions."
  },
  {
    question: "Can LuMay SmartOCG Compliance automate evidence collection?",
    answer: "Yes, LuMay SmartOCG Compliance integrates with your cloud platforms (AWS, Azure, GCP), SaaS applications, identity providers, and security tools to automatically collect compliance evidence. LuMay captures configuration snapshots, access logs, security scans, and other evidence required for audits. This automation eliminates the manual scramble during audit season."
  },
  {
    question: "How does LuMay SmartOCG Compliance reduce audit preparation time?",
    answer: "LuMay SmartOCG Compliance reduces audit preparation by 70% through continuous compliance monitoring, automated evidence collection, and pre-formatted auditor reports. Instead of scrambling to gather evidence before an audit, LuMay maintains audit-ready documentation at all times. LuMay's auditor workspace provides external auditors secure access to relevant evidence."
  },
  {
    question: "Does LuMay SmartOCG Compliance support third-party risk management?",
    answer: "Yes, LuMay SmartOCG Compliance includes vendor risk management capabilities including security questionnaire automation, continuous vendor monitoring, and risk scoring. LuMay tracks vendor certifications, insurance, and compliance status. LuMay also integrates with vendor security rating services for external risk intelligence."
  },
  {
    question: "How does LuMay SmartOCG Compliance handle control mapping across frameworks?",
    answer: "LuMay SmartOCG Compliance automatically maps controls across multiple frameworks using its comprehensive control crosswalk database. When you implement a control for SOC 2, LuMay shows how that same control satisfies ISO 27001, HIPAA, and other applicable requirements. This eliminates duplicate work and provides a unified view of your compliance posture."
  },
  {
    question: "What integrations does LuMay SmartOCG Compliance support?",
    answer: "LuMay SmartOCG Compliance integrates with major cloud platforms (AWS, Azure, GCP), identity providers (Okta, Azure AD, Google Workspace), security tools (vulnerability scanners, SIEMs), HR systems, and ticketing platforms (Jira, ServiceNow). LuMay provides REST APIs for custom integrations and supports SSO for seamless user authentication."
  },
  {
    question: "How does LuMay SmartOCG Compliance ensure data security?",
    answer: "LuMay SmartOCG Compliance is itself SOC 2 Type II certified and implements bank-level security. LuMay encrypts all data at rest and in transit, supports customer-managed encryption keys, and provides granular access controls. LuMay's infrastructure is hosted in certified data centers with 99.99% uptime SLAs."
  },
  {
    question: "Can LuMay SmartOCG Compliance help with certification readiness?",
    answer: "Yes, LuMay SmartOCG Compliance provides certification readiness assessments that identify gaps and create remediation roadmaps. LuMay tracks your progress toward certification, provides task assignments, and estimates timeline to audit-ready status. Many LuMay customers achieve SOC 2 certification within 3 months of deployment."
  },
  {
    question: "How does LuMay SmartOCG Compliance handle policy management?",
    answer: "LuMay SmartOCG Compliance provides a complete policy lifecycle management system including templates, version control, approval workflows, employee attestation, and renewal tracking. LuMay includes 100+ policy templates aligned with major frameworks. LuMay tracks which employees have acknowledged each policy and sends reminders for outstanding attestations."
  },
  {
    question: "What reporting does LuMay SmartOCG Compliance provide?",
    answer: "LuMay SmartOCG Compliance provides executive dashboards, detailed compliance reports, auditor workspaces, and regulatory filings. LuMay reports include compliance scorecards, risk heat maps, trend analysis, and control effectiveness metrics. Reports can be scheduled for automatic generation and distribution to stakeholders."
  },
  {
    question: "How quickly can LuMay SmartOCG Compliance be implemented?",
    answer: "LuMay SmartOCG Compliance can be deployed in as little as 2 weeks with rapid time-to-value. LuMay's pre-built integrations, policy templates, and control libraries accelerate setup. LuMay's customer success team provides hands-on implementation support and training to ensure successful deployment."
  }
];

export default function SmartCompliance() {
  return (
    <Layout>
      <Helmet>
        <title>SmartOCG Compliance - AI Compliance & Risk Management Platform | LuMay Enterprise AI</title>
        <meta name="description" content="LuMay SmartOCG Compliance automates regulatory compliance across GDPR, SOC 2, HIPAA, ISO 27001, and more. Reduce audit prep time by 70% with AI-powered compliance monitoring, evidence collection, and risk management." />
        <meta name="keywords" content="LuMay SmartOCG Compliance, compliance management, regulatory compliance, audit automation, GDPR compliance, SOC 2, HIPAA, ISO 27001, risk management, compliance software, GRC platform" />
        <link rel="canonical" href="https://lumay-agentic-ai.42web.io/products/smartcompliance" />
        
        {/* Open Graph */}
        <meta property="og:title" content="SmartOCG Compliance - AI Compliance & Risk Management | LuMay" />
        <meta property="og:description" content="LuMay SmartOCG Compliance reduces audit prep time by 70%. Automated compliance monitoring for GDPR, SOC 2, HIPAA, ISO 27001, and more." />
        <meta property="og:url" content="https://lumay-agentic-ai.42web.io/products/smartcompliance" />
        <meta property="og:type" content="product" />
        <meta property="og:site_name" content="LuMay Enterprise AI" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SmartOCG Compliance - AI Compliance Platform | LuMay" />
        <meta name="twitter:description" content="70% faster audit prep. Automated compliance for GDPR, SOC 2, HIPAA, ISO 27001, and 50+ frameworks." />
      </Helmet>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">LuMay Product</span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-2 mb-6 text-foreground">
                SmartOCG Compliance
              </h1>
              <p className="text-xl text-primary font-medium mb-4">AI-Powered Compliance & Risk Management</p>
              <p className="text-lg text-muted-foreground mb-6">
                LuMay SmartOCG Compliance transforms how enterprises manage regulatory compliance and risk. In a world of ever-evolving regulations, LuMay SmartOCG provides continuous compliance monitoring, automated evidence collection, and intelligent risk assessment that keeps your organization audit-ready at all times.
              </p>
              <p className="text-muted-foreground mb-8">
                Organizations using LuMay SmartOCG Compliance reduce audit preparation time by 70%, achieve faster certifications, and maintain continuous compliance across multiple frameworks including GDPR, SOC 2, HIPAA, ISO 27001, and PCI DSS. LuMay's AI-powered platform eliminates compliance chaos and transforms it into a strategic advantage.
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
                <ShieldCheck className="w-32 h-32 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Regulations */}
      <section className="py-16 bg-background border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-muted-foreground mb-8">Supported Frameworks & Regulations by LuMay</p>
          <div className="flex flex-wrap justify-center gap-4">
            {regulations.map((reg) => (
              <div key={reg} className="px-6 py-3 bg-secondary/50 rounded-full border border-border">
                <span className="text-foreground font-medium">{reg}</span>
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
              Why Enterprises Choose LuMay SmartOCG Compliance
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p>
                Regulatory compliance has become one of the most challenging aspects of modern business operations. With regulations constantly evolving and auditors demanding more evidence, compliance teams are stretched thin. LuMay SmartOCG Compliance addresses this challenge by automating the most time-consuming aspects of compliance management while providing the intelligence needed to stay ahead of regulatory changes.
              </p>
              <p>
                LuMay SmartOCG Compliance takes a fundamentally different approach than traditional GRC tools. Rather than simply tracking tasks and storing documents, LuMay's AI actively monitors your environment, identifies compliance gaps, and collects evidence automatically. This continuous compliance approach means you're always audit-ready, not scrambling before auditor visits.
              </p>
              <p>
                The platform's multi-framework support is particularly valuable for organizations facing overlapping regulations. LuMay SmartOCG Compliance maps controls across frameworks, so when you implement a control for SOC 2, you automatically see how it satisfies ISO 27001, HIPAA, and other applicable requirements. This unified approach eliminates duplicate work and provides a comprehensive view of your compliance posture.
              </p>
              <p>
                LuMay SmartOCG Compliance also includes powerful vendor risk management capabilities. As supply chain attacks and third-party breaches increase, LuMay helps you assess and monitor vendor security, track certifications, and maintain a clear picture of your extended risk landscape. LuMay's integration with security rating services provides external validation of vendor security practices.
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
              Comprehensive Compliance from LuMay
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              LuMay SmartOCG Compliance provides end-to-end compliance management with AI-powered automation. Explore the features that help organizations achieve and maintain compliance effortlessly.
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
              Intelligent Compliance Automation from LuMay
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

      {/* Use Cases */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Use Cases</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
                Transform Your Compliance Operations with LuMay SmartOCG
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                LuMay SmartOCG Compliance empowers organizations to move from reactive compliance management to proactive risk prevention. Discover how leading enterprises leverage LuMay's intelligent compliance capabilities.
              </p>
              <ul className="space-y-4">
                {useCases.map((useCase, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-gradient rounded-2xl p-6 border border-border">
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold text-foreground">LuMay Compliance Score</span>
                  <span className="text-2xl font-bold text-green-400">94%</span>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">GDPR</span>
                      <span className="text-green-400">98%</span>
                    </div>
                    <div className="h-2 bg-background rounded-full overflow-hidden">
                      <div className="h-full bg-green-400 rounded-full" style={{ width: '98%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">SOC 2</span>
                      <span className="text-green-400">95%</span>
                    </div>
                    <div className="h-2 bg-background rounded-full overflow-hidden">
                      <div className="h-full bg-green-400 rounded-full" style={{ width: '95%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">HIPAA</span>
                      <span className="text-yellow-400">87%</span>
                    </div>
                    <div className="h-2 bg-background rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-400 rounded-full" style={{ width: '87%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">ISO 27001</span>
                      <span className="text-green-400">96%</span>
                    </div>
                    <div className="h-2 bg-background rounded-full overflow-hidden">
                      <div className="h-full bg-green-400 rounded-full" style={{ width: '96%' }} />
                    </div>
                  </div>
                </div>
                <div className="pt-4 text-center text-sm text-muted-foreground">
                  Real-time compliance monitoring by LuMay SmartOCG
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
                Frequently Asked Questions About LuMay SmartOCG Compliance
              </h2>
              <p className="text-muted-foreground text-lg">
                Find answers to common questions about LuMay SmartOCG Compliance's regulatory support, automation capabilities, and enterprise features.
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
            Ready to Simplify Compliance with LuMay SmartOCG?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join organizations that have transformed compliance from a burden into a competitive advantage. Experience the power of LuMay SmartOCG Compliance with a personalized demo from our compliance experts.
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