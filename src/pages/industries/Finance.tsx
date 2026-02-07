import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { PageBreadcrumb } from "@/components/shared/PageBreadcrumb";
import { 
  ArrowRight, 
  Landmark, 
  CheckCircle, 
  TrendingUp, 
  Shield, 
  BarChart3,
  Users,
  FileText,
  AlertTriangle,
  Lock,
  Globe,
  Zap
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    icon: Shield,
    title: "Fraud Detection & Prevention",
    description: "LuMay SmartSense provides real-time transaction monitoring and anomaly detection to identify fraudulent activities before they impact customers or operations."
  },
  {
    icon: FileText,
    title: "Regulatory Compliance Automation",
    description: "SmartOCG Compliance automates regulatory reporting, KYC/AML processes, and audit preparation, ensuring continuous compliance with financial regulations."
  },
  {
    icon: Users,
    title: "Intelligent Customer Service",
    description: "SmartAssist handles banking inquiries, account services, and financial guidance through AI-powered conversations across all customer channels."
  },
  {
    icon: TrendingUp,
    title: "Risk Assessment & Analytics",
    description: "SmartTrends delivers predictive risk modeling, credit scoring enhancement, and portfolio analytics for informed decision-making."
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "SmartFlow automates loan processing, account opening, and back-office operations, reducing processing times and operational costs."
  },
  {
    icon: Globe,
    title: "Cross-Border Operations",
    description: "SmartTranslation enables multilingual customer support and document processing for global financial institutions."
  }
];

const benefits = [
  "85% reduction in false positive fraud alerts",
  "60% faster loan processing times",
  "40% reduction in compliance monitoring costs",
  "SOC 2 Type II and PCI-DSS compliant platform",
  "24/7 automated customer support across channels",
  "Real-time regulatory reporting and audit trails"
];

const useCases = [
  {
    title: "Automated Loan Underwriting",
    description: "LuMay AI agents analyze applicant data, verify documentation, and assess risk factors to accelerate loan decisions while maintaining credit quality standards."
  },
  {
    title: "Real-Time Fraud Prevention",
    description: "SmartSense monitors transactions in real-time, detecting suspicious patterns and automatically triggering alerts or blocks based on risk thresholds."
  },
  {
    title: "Regulatory Report Generation",
    description: "SmartOCG Compliance automatically compiles and validates regulatory reports including call reports, SAR filings, and stress test documentation."
  },
  {
    title: "Wealth Management Support",
    description: "AI agents provide personalized investment insights, portfolio rebalancing recommendations, and market analysis for wealth advisors and clients."
  }
];

const faqs = [
  {
    question: "How does LuMay ensure security for financial data?",
    answer: "LuMay maintains the highest security standards required for financial services including SOC 2 Type II certification, PCI-DSS compliance, and end-to-end encryption. Our platform supports data residency requirements, implements comprehensive access controls, and provides complete audit trails for all AI agent activities. We regularly undergo third-party security assessments and penetration testing."
  },
  {
    question: "What regulatory frameworks does LuMay support for financial institutions?",
    answer: "LuMay supports compliance with major financial regulations including Dodd-Frank, Basel III, SOX, GDPR, CCPA, AML/BSA, and OFAC requirements. Our SmartOCG Compliance module provides automated monitoring, reporting, and documentation for regulatory examinations. We continuously update our platform to address evolving regulatory requirements."
  },
  {
    question: "Can LuMay integrate with core banking systems?",
    answer: "Yes, LuMay provides certified integrations with major core banking platforms including FIS, Fiserv, Jack Henry, Temenos, and Finastra. We support standard financial data formats and APIs, enabling seamless connectivity with your existing technology infrastructure. Our integration team has deep experience in financial services implementations."
  },
  {
    question: "How does LuMay AI handle sensitive customer financial data?",
    answer: "LuMay implements strict data handling protocols for financial information. All data is encrypted at rest and in transit, access is controlled through role-based permissions, and AI agents operate under the principle of minimum necessary access. We support data masking, tokenization, and anonymization for different use cases. Complete audit trails track all data access and modifications."
  },
  {
    question: "What fraud detection capabilities does LuMay provide?",
    answer: "LuMay SmartSense provides multi-layered fraud detection including real-time transaction monitoring, behavioral analytics, device fingerprinting integration, and network analysis. Our AI models detect various fraud types including account takeover, synthetic identity, payment fraud, and insider threats. The system learns from confirmed fraud cases to continuously improve detection accuracy."
  },
  {
    question: "How does LuMay support KYC and AML compliance?",
    answer: "LuMay automates KYC/AML processes including identity verification, document validation, sanctions screening, and ongoing monitoring. AI agents compile customer risk profiles, flag suspicious activities, and generate regulatory documentation. We integrate with third-party data providers for enhanced due diligence and maintain current sanctions and PEP lists."
  },
  {
    question: "Can LuMay help with credit risk assessment?",
    answer: "Yes, SmartTrends enhances credit risk assessment by analyzing traditional and alternative data sources to generate comprehensive risk profiles. Our AI models incorporate economic indicators, industry trends, and borrower-specific factors to improve credit decisions. We support fair lending compliance through bias detection and explainability features."
  },
  {
    question: "What is the implementation timeline for financial services?",
    answer: "LuMay financial services implementations typically span 8-16 weeks depending on scope and regulatory requirements. We follow a structured methodology including security assessment, integration planning, testing, regulatory review, and phased rollout. Our team includes financial services technology experts who understand the unique requirements of regulated institutions."
  },
  {
    question: "How does LuMay support branch and contact center operations?",
    answer: "LuMay provides AI assistance for both branch and contact center environments. SmartAssist handles routine customer inquiries, account services, and product information. AI agents provide real-time guidance to service representatives, surfacing relevant customer information and recommending next best actions. SmartCall enables voice-based AI interactions for phone banking."
  },
  {
    question: "Does LuMay support cryptocurrency and digital asset operations?",
    answer: "Yes, LuMay supports financial institutions engaged in cryptocurrency and digital asset services. Our platform provides transaction monitoring, compliance automation, and risk assessment for digital asset operations. We stay current with evolving regulatory guidance for cryptocurrency activities and support integration with blockchain analytics providers."
  },
  {
    question: "How does LuMay ensure model explainability for regulatory requirements?",
    answer: "LuMay provides comprehensive model explainability features required for regulated financial decisions. Our AI models generate explanations for credit decisions, risk assessments, and fraud alerts that meet regulatory standards. We support model validation, ongoing monitoring, and documentation requirements for regulatory examinations."
  },
  {
    question: "What disaster recovery capabilities does LuMay provide?",
    answer: "LuMay maintains enterprise-grade disaster recovery with automatic failover, geographic redundancy, and RPO/RTO guarantees that meet financial services requirements. Our platform supports active-active configurations for high availability and provides comprehensive backup and recovery capabilities. We conduct regular DR testing and provide detailed recovery documentation."
  }
];

export default function Finance() {
  return (
    <Layout>
      <Helmet>
        <title>Financial Services AI | LuMay Enterprise Agentic AI Platform</title>
        <meta name="description" content="Transform financial services with LuMay's secure AI agents. Automate compliance, detect fraud, enhance customer experience, and accelerate operations with enterprise-grade security." />
        <meta name="keywords" content="financial services AI, banking AI, fintech AI, fraud detection AI, compliance automation, LuMay finance, regulatory AI, wealth management AI" />
        <link rel="canonical" href="https://lumay-agentic-ai.42web.io/industries/finance" />
        <meta property="og:title" content="Financial Services AI | LuMay Enterprise Agentic AI Platform" />
        <meta property="og:description" content="Transform financial services with LuMay's secure AI agents. Automate compliance, detect fraud, and enhance customer experience." />
        <meta property="og:url" content="https://lumay-agentic-ai.42web.io/industries/finance" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "LuMay Financial Services AI Solutions",
            "description": "Enterprise AI platform for financial services including fraud detection, compliance automation, and intelligent customer service.",
            "provider": {
              "@type": "Organization",
              "name": "LuMay",
              "url": "https://lumay-agentic-ai.42web.io"
            },
            "serviceType": "Financial AI",
            "areaServed": "Global"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <PageBreadcrumb items={[
            { label: "Industries", href: "/industries" },
            { label: "Finance" }
          ]} />
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Landmark className="w-4 h-4" />
              Industry Solutions
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Financial Services <span className="text-gradient">AI Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Empower your financial institution with LuMay's enterprise AI platform. From fraud prevention to regulatory compliance, deliver exceptional customer experiences while managing risk and driving operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg" asChild>
                <Link to="/contact">
                  Schedule Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg" asChild>
                <Link to="/products/smartcompliance">
                  Explore SmartOCG Compliance
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6 text-foreground text-center">
              Intelligent Financial Services Transformation with LuMay
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                The financial services industry operates in an environment of intense competition, evolving customer expectations, and increasing regulatory scrutiny. LuMay's enterprise agentic AI platform empowers financial institutions to navigate this complexity by deploying autonomous AI agents that enhance every aspect of operations—from customer-facing services to back-office processing and risk management.
              </p>
              <p>
                LuMay understands that financial services AI must meet the highest standards for security, compliance, and reliability. Our platform is built on a foundation of enterprise-grade security with SOC 2 Type II certification, PCI-DSS compliance, and comprehensive data protection. Every AI agent action is logged, auditable, and designed to support regulatory examination requirements. We partner with financial institutions to ensure our solutions align with their risk management frameworks and regulatory obligations.
              </p>
              <p>
                The LuMay platform addresses the full spectrum of financial services needs. SmartAssist provides intelligent customer service across channels, handling routine inquiries while seamlessly escalating complex issues to human agents. SmartSense delivers real-time fraud detection and risk monitoring. SmartOCG Compliance automates regulatory reporting and audit preparation. SmartFlow streamlines loan processing, account opening, and operational workflows.
              </p>
              <p>
                Financial institutions implementing LuMay consistently achieve significant improvements in efficiency, risk management, and customer satisfaction. Fraud detection accuracy improves dramatically while false positives decrease. Loan processing times shrink from days to hours. Compliance teams spend less time on manual data gathering and more time on strategic risk management. Customer satisfaction scores rise as AI-powered service delivers faster, more personalized experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              AI-Powered Financial Services Capabilities
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              LuMay delivers comprehensive AI solutions for modern financial institutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8 text-foreground text-center">
              Measurable Financial Impact
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Financial Services Use Cases
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover how LuMay AI agents transform financial operations and customer experiences.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-3 text-foreground">{useCase.title}</h3>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg text-muted-foreground">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6 text-foreground">
              The Future of Financial Services AI with LuMay
            </h2>
            
            <h3 className="text-foreground">Digital Transformation in Financial Services</h3>
            <p>
              Financial services is undergoing rapid digital transformation driven by changing customer expectations, fintech competition, and technological innovation. LuMay's agentic AI platform accelerates this transformation by providing intelligent automation that enhances both customer experience and operational efficiency. Our autonomous AI agents work 24/7 to handle routine tasks, detect risks, and support decision-making while maintaining the trust and security that financial services demands.
            </p>
            
            <h3 className="text-foreground">Intelligent Customer Engagement</h3>
            <p>
              Today's financial customers expect seamless, personalized experiences across all channels. LuMay SmartAssist delivers intelligent customer engagement that meets these expectations. AI agents handle account inquiries, transaction support, product information, and basic financial guidance through natural conversations. The system understands customer context, sentiment, and history to provide personalized service. When complex issues arise, SmartAssist seamlessly transitions to human agents with full context.
            </p>
            
            <h3 className="text-foreground">Advanced Fraud Prevention</h3>
            <p>
              Fraud continues to evolve in sophistication, requiring equally advanced detection capabilities. LuMay SmartSense provides multi-layered fraud prevention that protects institutions and customers. Real-time transaction monitoring analyzes patterns across millions of data points to identify suspicious activities. Behavioral analytics detect account takeover attempts and synthetic identity fraud. Network analysis identifies fraud rings and organized crime patterns. The system continuously learns from confirmed fraud to improve detection while reducing false positives.
            </p>
            
            <h3 className="text-foreground">Regulatory Compliance Excellence</h3>
            <p>
              Regulatory compliance is a significant cost and complexity driver for financial institutions. LuMay SmartOCG Compliance transforms compliance from a burden to a competitive advantage. AI agents continuously monitor regulatory changes, assess impact on operations, and update compliance workflows accordingly. Automated reporting compiles accurate regulatory submissions with reduced manual effort. Complete audit trails and documentation support regulatory examinations and internal audits.
            </p>
            
            <h3 className="text-foreground">Lending and Credit Innovation</h3>
            <p>
              Lending operations benefit significantly from LuMay AI automation. SmartFlow orchestrates loan origination from application through funding, reducing processing times from days to hours. AI agents verify applicant information, analyze creditworthiness using traditional and alternative data, and generate loan recommendations. The system supports fair lending compliance through bias detection and explainability features that document decision factors.
            </p>
            
            <h3 className="text-foreground">Wealth Management Enhancement</h3>
            <p>
              LuMay empowers wealth management with AI-driven insights and automation. AI agents analyze market conditions, portfolio performance, and client goals to generate personalized recommendations. Automated rebalancing and tax-loss harvesting suggestions help advisors deliver superior outcomes. Client communications are enhanced with AI-generated insights and personalized content. SmartTrends provides predictive analytics for market trends and investment opportunities.
            </p>
            
            <h3 className="text-foreground">Operational Excellence</h3>
            <p>
              Back-office operations are transformed through LuMay automation. SmartFlow handles document processing, data entry, reconciliations, and exception handling that traditionally required significant manual effort. AI agents work around the clock to process transactions, update records, and resolve discrepancies. This operational automation reduces costs, improves accuracy, and enables staff to focus on higher-value activities.
            </p>
            
            <h3 className="text-foreground">Risk Management Intelligence</h3>
            <p>
              LuMay enhances enterprise risk management with AI-powered analytics and monitoring. SmartTrends provides predictive modeling for credit risk, market risk, and operational risk. AI agents continuously monitor risk indicators and alert teams to emerging concerns. Scenario analysis and stress testing capabilities help institutions prepare for various market conditions. Complete risk reporting supports board and regulatory requirements.
            </p>
            
            <h3 className="text-foreground">Security and Trust Foundation</h3>
            <p>
              Financial services demands the highest levels of security and trust. LuMay's platform architecture is designed from the ground up for financial services requirements. End-to-end encryption protects all data in transit and at rest. Comprehensive access controls ensure appropriate permissions. Complete audit trails document all system activities. Regular third-party assessments validate security controls. We maintain active certifications and support customer audit requirements.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8 text-foreground text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="bg-card border border-border rounded-lg px-6">
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

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6 text-foreground">
              Transform Your Financial Institution with AI
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Discover how LuMay's secure, compliant AI platform can enhance your operations, reduce risk, and deliver exceptional customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg" asChild>
                <Link to="/contact">
                  Request Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg" asChild>
                <Link to="/products">
                  Explore Products
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
