import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Lock, Eye, AlertTriangle, FileCheck, Server, Users, Fingerprint, Network, Bug, ShieldCheck, Key, Scan, MonitorCheck, CloudCog, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { PageBreadcrumb } from "@/components/shared/PageBreadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "LuMay Cybersecurity Services",
  "description": "Enterprise cybersecurity consulting including threat detection, security audits, compliance, incident response, and managed security services. Protect your organization with LuMay.",
  "provider": {
    "@type": "Organization",
    "name": "LuMay",
    "url": "https://lumay-agentic-ai.42web.io/"
  },
  "serviceType": "Cybersecurity Consulting",
  "areaServed": "Worldwide",
  "url": "https://lumay-agentic-ai.42web.io/services/cybersecurity"
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What cybersecurity services does LuMay offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LuMay offers comprehensive cybersecurity services including threat detection and monitoring, vulnerability assessments, penetration testing, compliance consulting (SOC 2, HIPAA, GDPR, PCI DSS), incident response, security architecture design, and managed security services."
      }
    },
    {
      "@type": "Question",
      "name": "How does LuMay approach enterprise security?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LuMay takes a defense-in-depth approach, implementing multiple layers of security controls that work together to detect, prevent, and respond to threats. LuMay's methodology encompasses people, processes, and technology for comprehensive protection."
      }
    }
  ]
};

const capabilities = [
  { icon: Eye, name: "Threat Detection", description: "LuMay provides 24/7 security monitoring with advanced threat intelligence and AI-powered detection" },
  { icon: Bug, name: "Vulnerability Assessment", description: "LuMay identifies security weaknesses through comprehensive scanning and penetration testing" },
  { icon: FileCheck, name: "Compliance", description: "LuMay helps achieve and maintain compliance with SOC 2, HIPAA, GDPR, PCI DSS, and ISO 27001" },
  { icon: AlertTriangle, name: "Incident Response", description: "LuMay delivers rapid response and forensic investigation when security events occur" },
  { icon: Network, name: "Security Architecture", description: "LuMay designs secure network, cloud, and application architectures following zero-trust principles" },
  { icon: Key, name: "Identity Management", description: "LuMay implements robust IAM solutions including MFA, SSO, and privileged access management" },
  { icon: CloudCog, name: "Cloud Security", description: "LuMay secures AWS, Azure, and GCP environments with proper configurations and monitoring" },
  { icon: MonitorCheck, name: "Managed Security", description: "LuMay provides ongoing security operations and 24/7 security operations center services" },
];

const useCases = [
  { title: "SOC 2 Certification", description: "LuMay helped a SaaS company achieve SOC 2 Type II certification in under 6 months" },
  { title: "Ransomware Prevention", description: "LuMay implemented defenses that blocked a targeted ransomware campaign" },
  { title: "Cloud Security Posture", description: "LuMay remediated 500+ security misconfigurations in a multi-cloud environment" },
  { title: "Zero Trust Implementation", description: "LuMay deployed zero-trust architecture reducing lateral movement risk by 90%" },
  { title: "Incident Response", description: "LuMay contained a data breach within 4 hours, limiting exposure to 0.1% of records" },
  { title: "Security Awareness", description: "LuMay reduced phishing susceptibility from 32% to 3% through training programs" },
];

const faqs = [
  {
    question: "What cybersecurity services does LuMay offer?",
    answer: "LuMay offers comprehensive cybersecurity services including threat detection and monitoring, vulnerability assessments, penetration testing, compliance consulting (SOC 2, HIPAA, GDPR, PCI DSS), incident response, security architecture design, and managed security services. LuMay's security team combines deep technical expertise with business risk understanding to create effective protection strategies tailored to your organization."
  },
  {
    question: "How does LuMay approach enterprise security?",
    answer: "LuMay takes a defense-in-depth approach, implementing multiple layers of security controls that work together to detect, prevent, and respond to threats. LuMay's methodology encompasses people, processes, and technology—because effective security requires more than just tools. LuMay security experts stay current with the latest threat intelligence and attack techniques, ensuring your defenses evolve with the threat landscape."
  },
  {
    question: "What compliance frameworks does LuMay support?",
    answer: "LuMay maintains expertise in major regulatory frameworks including SOC 2 Type I and II, HIPAA, GDPR, PCI DSS, ISO 27001, NIST Cybersecurity Framework, and CMMC. LuMay conducts gap assessments to identify compliance deficiencies, develops remediation plans, and implements controls that satisfy auditor requirements. LuMay also provides ongoing monitoring to maintain compliance over time."
  },
  {
    question: "How does LuMay handle incident response?",
    answer: "LuMay provides rapid incident response services with experienced security professionals available 24/7. LuMay's incident response includes initial containment, forensic investigation, evidence preservation, eradication of threats, system recovery, and post-incident analysis. LuMay helps organizations prepare with incident response planning and tabletop exercises before incidents occur."
  },
  {
    question: "Does LuMay offer penetration testing services?",
    answer: "Yes, LuMay provides comprehensive penetration testing including network, web application, mobile, API, and social engineering assessments. LuMay's ethical hackers use the same techniques as real attackers to identify vulnerabilities before they can be exploited. LuMay delivers detailed findings with remediation recommendations and retesting to verify fixes."
  },
  {
    question: "How does LuMay approach cloud security?",
    answer: "LuMay secures cloud environments across AWS, Azure, and GCP with configuration assessments, security monitoring, and best practice implementation. LuMay addresses cloud-specific risks including misconfigurations, excessive permissions, data exposure, and compliance gaps. LuMay implements cloud-native security tools and integrates with existing security operations."
  },
  {
    question: "What is LuMay's managed security service?",
    answer: "LuMay's managed security services provide 24/7 security operations center (SOC) capabilities including continuous monitoring, threat detection, alert triage, and incident response. LuMay's SOC analysts investigate threats on your behalf and escalate critical issues. LuMay manages security tools, provides regular reporting, and continuously improves detection capabilities."
  },
  {
    question: "How does LuMay help with security awareness training?",
    answer: "LuMay provides security awareness programs that change employee behavior around security. LuMay delivers engaging training content, conducts simulated phishing campaigns, and measures improvement over time. LuMay's programs are tailored to your industry and risk profile, addressing the specific threats your employees face."
  },
  {
    question: "Can LuMay help with zero trust implementation?",
    answer: "Yes, LuMay helps organizations adopt zero trust architecture principles including verify explicitly, use least privilege access, and assume breach. LuMay implements identity-centric security, micro-segmentation, and continuous validation. LuMay develops zero trust roadmaps that enable gradual migration from traditional perimeter-based security."
  },
  {
    question: "What makes LuMay different from other security firms?",
    answer: "LuMay differentiates through deep technical expertise combined with practical implementation focus. LuMay's security professionals have backgrounds in offensive security, compliance, and enterprise security operations. Unlike firms that only assess, LuMay implements solutions and takes accountability for outcomes. LuMay's AI capabilities also enhance threat detection and response."
  },
  {
    question: "How does LuMay price cybersecurity services?",
    answer: "LuMay offers flexible pricing models including project-based engagements for assessments and implementations, retainer-based services for ongoing advisory, and subscription pricing for managed security services. LuMay works with organizations of all sizes and tailors engagement structures to match your needs and budget."
  },
  {
    question: "How do I get started with LuMay cybersecurity services?",
    answer: "Contact LuMay to schedule a security consultation where we'll discuss your current security posture, compliance requirements, and concerns. LuMay can conduct a security assessment to identify gaps and prioritize improvements. LuMay typically begins engagements within 1-2 weeks for urgent needs or as scheduled for planned initiatives."
  },
];

export default function Cybersecurity() {
  return (
    <Layout>
      <Helmet>
        <title>Cybersecurity Services - Threat Detection, Compliance, Pentesting | LuMay</title>
        <meta name="description" content="LuMay Cybersecurity services protect your organization with threat detection, vulnerability assessments, compliance consulting, and incident response. Enterprise-grade security solutions. Request a consultation." />
        <meta name="keywords" content="LuMay cybersecurity, threat detection, penetration testing, SOC 2 compliance, HIPAA security, GDPR compliance, incident response, security consulting, managed security services, LuMay security" />
        <link rel="canonical" href="https://lumay-agentic-ai.42web.io/services/cybersecurity" />
        <meta property="og:title" content="Cybersecurity Services - Threat Detection, Compliance, Pentesting | LuMay" />
        <meta property="og:description" content="LuMay Cybersecurity services protect your organization with threat detection, vulnerability assessments, compliance consulting, and incident response." />
        <meta property="og:url" content="https://lumay-agentic-ai.42web.io/services/cybersecurity" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
      </Helmet>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <PageBreadcrumb items={[
            { label: "Services", href: "/services" },
            { label: "Cybersecurity" }
          ]} />
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">LuMay Cybersecurity</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-foreground">
              Enterprise Cybersecurity Services
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              LuMay provides comprehensive cybersecurity solutions that protect your organization from evolving threats. We deliver end-to-end security services from assessment to implementation and ongoing monitoring. The LuMay security team combines deep technical expertise with an understanding of business risk to create effective protection strategies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get Security Assessment
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
              <p className="font-display text-4xl font-bold text-primary mb-2">24/7</p>
              <p className="text-muted-foreground">Security Monitoring</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-primary mb-2">99.9%</p>
              <p className="text-muted-foreground">Threat Detection Rate</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-primary mb-2">4hr</p>
              <p className="text-muted-foreground">Avg. Response Time</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-primary mb-2">100+</p>
              <p className="text-muted-foreground">Compliance Certifications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About LuMay Cybersecurity</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
              Protect Your Digital Assets with LuMay
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p>
                In an era of increasingly sophisticated cyber threats, LuMay's cybersecurity services provide the protection your business needs to operate confidently. LuMay takes a defense-in-depth approach, implementing multiple layers of security controls that work together to detect, prevent, and respond to threats. Our LuMay security experts stay current with the latest threat intelligence and attack techniques, ensuring your defenses evolve with the threat landscape.
              </p>
              <p>
                LuMay's cybersecurity methodology encompasses people, processes, and technology—because effective security requires more than just tools. LuMay helps organizations build security-aware cultures through training and awareness programs. LuMay establishes security processes and policies that enable business operations while managing risk. LuMay implements and manages security technologies that provide visibility and protection across your environment.
              </p>
              <p>
                The cyber threat landscape continues to evolve rapidly, with attackers using increasingly sophisticated techniques including AI-powered attacks, supply chain compromises, and advanced persistent threats. LuMay's security team maintains deep expertise in offensive and defensive security, enabling us to anticipate attacker techniques and implement effective countermeasures. LuMay's proactive approach helps organizations stay ahead of emerging threats.
              </p>
              <p>
                Compliance is often a key driver for security investments, and LuMay has extensive experience helping organizations achieve and maintain compliance with regulations and frameworks including SOC 2, HIPAA, GDPR, PCI DSS, and ISO 27001. LuMay's compliance approach goes beyond checkbox security to implement controls that provide genuine protection while satisfying auditor requirements.
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
              LuMay Cybersecurity Capabilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              LuMay delivers comprehensive security services that protect your organization across all attack surfaces
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

      {/* Use Cases */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Success Stories</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
              LuMay Security in Action
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how LuMay has helped organizations strengthen their security posture
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div key={useCase.title} className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <h3 className="font-display font-semibold text-foreground">{useCase.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">FAQs</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
                Frequently Asked Questions About LuMay Cybersecurity
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
              Ready to Strengthen Your Security with LuMay?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact LuMay today to discuss your security needs and learn how our cybersecurity services can protect your organization from evolving threats.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Schedule a Security Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}