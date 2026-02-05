import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Heart, 
  CheckCircle, 
  Stethoscope, 
  Shield, 
  Brain,
  Users,
  FileText,
  Activity,
  Clock,
  Lock,
  Microscope
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    icon: Stethoscope,
    title: "Clinical Decision Support",
    description: "LuMay AI agents provide real-time clinical insights, treatment recommendations, and diagnostic assistance to healthcare providers at the point of care."
  },
  {
    icon: Users,
    title: "Patient Engagement Automation",
    description: "SmartAssist handles patient inquiries, appointment scheduling, and follow-up communications, improving patient experience while reducing administrative burden."
  },
  {
    icon: FileText,
    title: "Medical Documentation AI",
    description: "Autonomous AI agents automate clinical documentation, coding, and transcription, allowing healthcare professionals to focus on patient care."
  },
  {
    icon: Activity,
    title: "Real-Time Patient Monitoring",
    description: "SmartSense integrates with medical devices and EHR systems to provide continuous patient monitoring and early warning alerts for clinical teams."
  },
  {
    icon: Shield,
    title: "Healthcare Compliance",
    description: "SmartOCG Compliance ensures HIPAA, GDPR, and other regulatory adherence through automated monitoring, audit trails, and policy enforcement."
  },
  {
    icon: Brain,
    title: "Population Health Analytics",
    description: "SmartTrends analyzes patient populations to identify health trends, risk factors, and intervention opportunities for proactive care management."
  }
];

const benefits = [
  "30% reduction in clinical documentation time",
  "45% improvement in patient appointment adherence",
  "50% faster prior authorization processing",
  "HIPAA-compliant AI with full audit trails",
  "24/7 patient support through AI-powered channels",
  "Seamless EHR and clinical system integration"
];

const useCases = [
  {
    title: "Automated Patient Intake",
    description: "LuMay AI agents guide patients through intake processes, collecting medical history, insurance information, and consent forms digitally while ensuring data accuracy and compliance."
  },
  {
    title: "Prior Authorization Automation",
    description: "SmartFlow automates the prior authorization workflow, gathering required clinical documentation, submitting requests to payers, and tracking approval status in real-time."
  },
  {
    title: "Clinical Trial Matching",
    description: "AI agents analyze patient records against clinical trial criteria to identify eligible patients, streamlining recruitment and improving trial participation rates."
  },
  {
    title: "Revenue Cycle Optimization",
    description: "LuMay automates coding review, claim submission, and denial management, reducing revenue leakage and accelerating reimbursement cycles."
  }
];

const faqs = [
  {
    question: "How does LuMay ensure HIPAA compliance in healthcare deployments?",
    answer: "LuMay maintains comprehensive HIPAA compliance through encrypted data transmission and storage, role-based access controls, complete audit trails, and Business Associate Agreements (BAA) with all customers. Our platform undergoes regular third-party security assessments and maintains SOC 2 Type II certification. All AI agent activities are logged and auditable for compliance verification."
  },
  {
    question: "Can LuMay integrate with our existing EHR system?",
    answer: "Yes, LuMay provides certified integrations with major EHR systems including Epic, Cerner, Meditech, Allscripts, and athenahealth. We support HL7 FHIR, HL7 v2, and CCD/C-CDA standards for healthcare data interoperability. Our integration team works closely with your IT department to ensure seamless connectivity with your clinical systems."
  },
  {
    question: "What patient data does LuMay AI access and how is it protected?",
    answer: "LuMay AI agents access only the data necessary for their designated functions, following the principle of minimum necessary access. All PHI is encrypted at rest and in transit, processed within secure environments, and never shared with third parties. We implement de-identification and anonymization where appropriate and provide patients with transparency about AI usage in their care."
  },
  {
    question: "How does LuMay support clinical decision-making without replacing physician judgment?",
    answer: "LuMay AI agents are designed to augment, not replace, clinical judgment. Our clinical decision support tools provide evidence-based recommendations, surface relevant patient history, and flag potential concerns, but final clinical decisions always remain with licensed healthcare providers. We implement clear human-in-the-loop protocols for all clinical recommendations."
  },
  {
    question: "What is the implementation process for healthcare organizations?",
    answer: "LuMay healthcare implementations follow a structured methodology including clinical workflow analysis, integration planning, pilot deployment, clinical validation, and phased rollout. Typical implementations span 8-16 weeks depending on scope. We provide comprehensive training for clinical and administrative staff, along with ongoing optimization support."
  },
  {
    question: "How does LuMay handle multi-location healthcare systems?",
    answer: "LuMay supports complex multi-location deployments with centralized management and location-specific customization. Our platform enables consistent AI experiences across facilities while respecting local workflows, regulations, and patient populations. Enterprise dashboards provide visibility across all locations with drill-down capabilities."
  },
  {
    question: "Can LuMay AI agents handle patient communications in multiple languages?",
    answer: "Yes, LuMay SmartTranslation provides real-time translation for patient communications in over 100 languages. AI agents can engage patients in their preferred language for appointment scheduling, care instructions, and general inquiries. We support medical terminology translation and cultural sensitivity in all communications."
  },
  {
    question: "How does LuMay support telehealth and virtual care workflows?",
    answer: "LuMay integrates with telehealth platforms to enhance virtual care delivery. AI agents can triage patients before virtual visits, collect relevant clinical information, provide post-visit summaries, and coordinate follow-up care. SmartCall enables AI-powered voice interactions for patients who prefer phone-based communication."
  },
  {
    question: "What analytics and reporting capabilities does LuMay provide for healthcare?",
    answer: "LuMay provides comprehensive healthcare analytics including operational metrics, clinical outcomes, patient satisfaction, and financial performance. Our platform generates automated reports for quality measures, regulatory compliance, and strategic planning. SmartTrends delivers predictive analytics for capacity planning, readmission risk, and population health management."
  },
  {
    question: "How does LuMay help with healthcare staffing challenges?",
    answer: "LuMay addresses staffing challenges by automating routine administrative tasks, enabling clinical staff to work at the top of their license. AI agents handle appointment scheduling, patient inquiries, documentation assistance, and care coordination, reducing burnout and improving staff satisfaction. Our platform also supports intelligent scheduling optimization."
  },
  {
    question: "Can LuMay integrate with medical devices and IoT sensors?",
    answer: "Yes, SmartSense provides integration with medical devices, remote patient monitoring systems, and IoT sensors. We support FDA-approved devices and maintain appropriate regulatory compliance for medical device data integration. AI agents can analyze device data streams for anomaly detection and clinical alerting."
  },
  {
    question: "What patient consent mechanisms does LuMay support?",
    answer: "LuMay provides flexible consent management including digital consent capture, consent tracking, and preference management. Our platform supports granular consent for AI usage, data sharing, and communication preferences. We integrate with your existing consent management systems and maintain complete consent audit trails."
  }
];

export default function Healthcare() {
  return (
    <Layout>
      <Helmet>
        <title>Healthcare & Life Sciences AI | LuMay Enterprise Agentic AI Platform</title>
        <meta name="description" content="Transform healthcare with LuMay's HIPAA-compliant AI agents. Automate clinical workflows, patient engagement, and administrative tasks while ensuring regulatory compliance." />
        <meta name="keywords" content="healthcare AI, medical AI, clinical AI, HIPAA compliant AI, patient engagement AI, healthcare automation, LuMay healthcare, life sciences AI" />
        <link rel="canonical" href="https://lumay-agentic-ai.42web.io/industries/healthcare" />
        <meta property="og:title" content="Healthcare & Life Sciences AI | LuMay Enterprise Agentic AI Platform" />
        <meta property="og:description" content="Transform healthcare with LuMay's HIPAA-compliant AI agents. Automate clinical workflows, patient engagement, and administrative tasks." />
        <meta property="og:url" content="https://lumay-agentic-ai.42web.io/industries/healthcare" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "LuMay Healthcare & Life Sciences AI Solutions",
            "description": "HIPAA-compliant enterprise AI for healthcare organizations including clinical decision support, patient engagement, and administrative automation.",
            "provider": {
              "@type": "Organization",
              "name": "LuMay",
              "url": "https://lumay-agentic-ai.42web.io"
            },
            "serviceType": "Healthcare AI",
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
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Industry Solutions
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Healthcare & Life Sciences <span className="text-gradient">AI Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform patient care and operational efficiency with LuMay's HIPAA-compliant AI agents. From clinical decision support to automated patient engagement, deliver exceptional healthcare experiences with enterprise-grade security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg" asChild>
                <Link to="/contact">
                  Schedule Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg" asChild>
                <Link to="/products/smartassist">
                  Explore SmartAssist
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
              Intelligent Healthcare Transformation with LuMay
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Healthcare organizations face unprecedented challenges: rising costs, staffing shortages, increasing regulatory complexity, and growing patient expectations. LuMay's enterprise agentic AI platform addresses these challenges by deploying intelligent AI agents that automate administrative burdens, enhance clinical workflows, and improve patient experiences—all while maintaining strict HIPAA compliance and regulatory adherence.
              </p>
              <p>
                LuMay understands that healthcare AI must operate within a framework of trust, safety, and regulatory compliance. Our platform is purpose-built for healthcare, with native support for HIPAA, HITECH, and other healthcare regulations. Every AI agent action is logged, auditable, and designed to support—never replace—clinical judgment. We work closely with healthcare organizations to ensure our AI solutions align with clinical workflows and organizational policies.
              </p>
              <p>
                The LuMay healthcare platform encompasses the full spectrum of healthcare operations. SmartAssist handles patient inquiries and scheduling, reducing call center burden while improving patient access. Our clinical decision support tools surface relevant information at the point of care. SmartFlow automates complex administrative processes like prior authorization and revenue cycle management. SmartSense provides real-time monitoring and alerting for patient safety.
              </p>
              <p>
                Healthcare organizations implementing LuMay typically see dramatic improvements in operational efficiency and patient satisfaction. Clinical documentation time decreases by 30% or more. Patient no-show rates drop as AI-powered engagement keeps patients connected with their care. Revenue cycle performance improves through automated coding review and denial management. Staff satisfaction increases as tedious administrative tasks are handled by AI agents.
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
              AI-Powered Healthcare Capabilities
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              LuMay delivers comprehensive AI solutions across clinical and administrative healthcare functions.
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
              Measurable Healthcare Outcomes
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
              Healthcare Use Cases
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover how LuMay AI agents transform healthcare operations and patient care.
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
              The Future of Healthcare AI with LuMay
            </h2>
            
            <h3 className="text-foreground">Addressing Healthcare's Greatest Challenges</h3>
            <p>
              The healthcare industry stands at an inflection point where technology innovation can address longstanding challenges in access, quality, and cost. LuMay's agentic AI platform represents a new paradigm in healthcare technology—one where intelligent AI agents work autonomously to handle routine tasks while enabling healthcare professionals to focus on what matters most: patient care. Our approach is grounded in deep understanding of healthcare workflows, regulatory requirements, and the critical importance of maintaining the human element in care delivery.
            </p>
            
            <h3 className="text-foreground">Patient-Centered AI Experience</h3>
            <p>
              LuMay places patient experience at the center of our healthcare AI solutions. Our SmartAssist virtual agents provide 24/7 patient support, answering questions, scheduling appointments, and providing care navigation—all in a conversational, empathetic manner. Patients can interact through their preferred channels including voice, chat, SMS, and patient portals. LuMay AI agents remember patient context across interactions, providing continuity that builds trust and satisfaction.
            </p>
            
            <h3 className="text-foreground">Clinical Workflow Enhancement</h3>
            <p>
              Healthcare professionals spend too much time on documentation and administrative tasks. LuMay AI agents integrate directly into clinical workflows to reduce this burden. Our clinical documentation assistance captures relevant information during patient encounters, suggests appropriate codes, and generates summaries for the medical record. This allows clinicians to maintain eye contact with patients while ensuring accurate, complete documentation.
            </p>
            
            <h3 className="text-foreground">Revenue Cycle Intelligence</h3>
            <p>
              Healthcare revenue cycle management involves complex, error-prone processes that directly impact organizational financial health. LuMay automates revenue cycle workflows from patient registration through final payment. AI agents verify insurance eligibility in real-time, ensure clean claim submission, identify and resolve denials, and optimize collections. Organizations implementing LuMay typically see significant improvements in days in AR and clean claim rates.
            </p>
            
            <h3 className="text-foreground">Population Health and Value-Based Care</h3>
            <p>
              As healthcare transitions to value-based care models, organizations need sophisticated analytics and care management capabilities. LuMay SmartTrends provides population health intelligence that identifies high-risk patients, predicts healthcare utilization, and recommends interventions. AI agents automate care gap closure by reaching out to patients due for preventive services and coordinating with care teams to ensure follow-through.
            </p>
            
            <h3 className="text-foreground">Life Sciences and Research Applications</h3>
            <p>
              LuMay extends beyond healthcare delivery to support life sciences organizations in drug development, clinical research, and medical device innovation. Our AI agents accelerate clinical trial recruitment by matching patients to trials based on complex eligibility criteria. In pharmaceutical operations, LuMay automates regulatory documentation, pharmacovigilance monitoring, and medical information services.
            </p>
            
            <h3 className="text-foreground">Interoperability and Integration</h3>
            <p>
              Healthcare data is notoriously fragmented across systems and organizations. LuMay serves as an intelligent integration layer that connects disparate systems and enables unified workflows. We support all major healthcare data standards including HL7 FHIR, HL7 v2, NCPDP, X12, and CCD/C-CDA. Our platform can integrate with virtually any healthcare system, from legacy applications to modern cloud platforms.
            </p>
            
            <h3 className="text-foreground">Security, Privacy, and Compliance</h3>
            <p>
              Healthcare data demands the highest levels of protection. LuMay's security architecture exceeds healthcare industry requirements with end-to-end encryption, comprehensive access controls, and continuous monitoring. We maintain HIPAA compliance, SOC 2 Type II certification, and support HITRUST certification requirements. Every AI agent action creates an immutable audit trail for compliance verification and incident investigation.
            </p>
            
            <h3 className="text-foreground">Implementation Partnership</h3>
            <p>
              LuMay approaches healthcare implementations as true partnerships. We invest time to understand your organization's unique challenges, workflows, and goals. Our implementation team includes healthcare IT specialists, clinical informaticists, and change management experts who ensure successful deployment and adoption. We provide comprehensive training, ongoing optimization, and dedicated support to maximize the value of your LuMay investment.
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
              Transform Healthcare Delivery with AI
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Discover how LuMay's HIPAA-compliant AI platform can improve patient outcomes, reduce costs, and empower your healthcare teams.
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
