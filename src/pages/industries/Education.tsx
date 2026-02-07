import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { PageBreadcrumb } from "@/components/shared/PageBreadcrumb";
import { 
  ArrowRight, 
  GraduationCap, 
  CheckCircle, 
  TrendingUp, 
  MessageSquare, 
  BookOpen,
  Users,
  Globe,
  Clock,
  FileText,
  Brain,
  Shield
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    icon: MessageSquare,
    title: "AI Student Support",
    description: "SmartAssist provides 24/7 student support for admissions inquiries, enrollment questions, academic guidance, and campus services."
  },
  {
    icon: Brain,
    title: "Personalized Learning",
    description: "AI-powered learning companions adapt to individual student needs, providing tutoring, feedback, and study recommendations."
  },
  {
    icon: FileText,
    title: "Administrative Automation",
    description: "SmartFlow automates enrollment processing, financial aid workflows, transcript requests, and other administrative tasks."
  },
  {
    icon: TrendingUp,
    title: "Student Success Analytics",
    description: "SmartTrends identifies at-risk students, predicts outcomes, and recommends interventions to improve retention and graduation rates."
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "SmartTranslation enables communication with international students and families in their native languages."
  },
  {
    icon: Shield,
    title: "Compliance & Accreditation",
    description: "SmartOCG Compliance automates compliance monitoring and documentation for accreditation, FERPA, and other regulatory requirements."
  }
];

const benefits = [
  "50% reduction in administrative response times",
  "35% improvement in student satisfaction scores",
  "24/7 multilingual student support",
  "40% faster enrollment processing",
  "Early identification of at-risk students",
  "FERPA-compliant data handling"
];

const useCases = [
  {
    title: "Intelligent Admissions Support",
    description: "LuMay AI agents guide prospective students through the admissions process, answering questions, providing personalized program recommendations, and tracking application status."
  },
  {
    title: "Student Retention Intervention",
    description: "SmartTrends analyzes student engagement, academic performance, and behavioral signals to identify at-risk students early, enabling proactive outreach and support interventions."
  },
  {
    title: "Automated Financial Aid Processing",
    description: "SmartFlow automates financial aid document collection, verification, and award processing, reducing processing times and improving the student experience."
  },
  {
    title: "AI Tutoring and Learning Support",
    description: "AI-powered tutoring agents provide personalized academic support, answering questions, explaining concepts, and adapting to individual learning styles."
  }
];

const faqs = [
  {
    question: "How does LuMay ensure FERPA compliance?",
    answer: "LuMay is designed with FERPA compliance as a foundational requirement. We implement strict access controls based on educational records permissions, maintain comprehensive audit trails, and ensure student data is only accessible to authorized personnel. Our platform supports consent management for data sharing and provides tools for responding to student data requests."
  },
  {
    question: "Can LuMay integrate with our Student Information System (SIS)?",
    answer: "Yes, LuMay integrates with major SIS platforms including Banner, Colleague, PeopleSoft, Workday Student, and Jenzabar. We support standard education data formats and APIs. Integration enables real-time access to student records for personalized support while maintaining appropriate access controls."
  },
  {
    question: "How does LuMay support student retention efforts?",
    answer: "LuMay SmartTrends analyzes multiple data sources—academic performance, engagement metrics, financial indicators, and behavioral signals—to identify students at risk of attrition. The system generates risk scores, recommends interventions, and tracks outreach effectiveness. Early warning alerts enable advisors to provide timely support."
  },
  {
    question: "What languages does LuMay support for international students?",
    answer: "LuMay SmartTranslation supports over 100 languages for student communications. AI agents can converse naturally with international students and families in their preferred languages, handling admissions inquiries, enrollment support, and academic guidance. We maintain education-specific terminology accuracy across languages."
  },
  {
    question: "Can LuMay help with online and hybrid learning environments?",
    answer: "Yes, LuMay supports online and hybrid learning through AI tutoring agents, virtual office hours support, and automated assignment feedback. Our platform integrates with major LMS systems including Canvas, Blackboard, and Moodle. AI agents can facilitate online discussions, answer course-related questions, and support student engagement."
  },
  {
    question: "How does LuMay support accreditation compliance?",
    answer: "SmartOCG Compliance automates accreditation documentation and evidence collection. The platform tracks compliance with accreditor standards, generates reports for site visits, and maintains audit trails for assessment activities. We support regional accreditors, professional accreditation, and specialized program accreditation requirements."
  },
  {
    question: "What financial aid automation does LuMay provide?",
    answer: "LuMay SmartFlow automates financial aid workflows including FAFSA processing, document collection and verification, need analysis, and award packaging. AI agents assist students with financial aid questions and application guidance. The system tracks satisfactory academic progress and automates appeals workflows."
  },
  {
    question: "Can LuMay provide AI tutoring for specific subjects?",
    answer: "Yes, LuMay AI tutoring agents can be trained on specific subject matter to provide personalized academic support. The system adapts to individual learning styles, identifies knowledge gaps, and provides targeted explanations and practice. We support STEM subjects, writing assistance, and general academic support."
  },
  {
    question: "How does LuMay support career services?",
    answer: "LuMay enhances career services through AI-powered resume review, job matching, and career guidance. SmartAssist handles career counseling inquiries while SmartTrends analyzes employment outcomes to identify successful pathways. We integrate with career management platforms and employer recruiting systems."
  },
  {
    question: "What analytics does LuMay provide for institutional research?",
    answer: "LuMay SmartTrends provides comprehensive analytics for institutional research including enrollment trends, retention analysis, student success metrics, and outcome tracking. The platform supports predictive modeling for strategic planning and generates reports aligned with institutional effectiveness frameworks."
  },
  {
    question: "How does LuMay handle student data privacy?",
    answer: "LuMay implements comprehensive privacy protections for student data. We follow data minimization principles, implement purpose limitations, and provide transparency about data usage. Students and families can access their data and exercise privacy rights. All data handling complies with FERPA, GDPR (for international students), and state privacy laws."
  },
  {
    question: "What is the implementation timeline for educational institutions?",
    answer: "LuMay implementations for education typically span 8-16 weeks depending on scope. Student-facing AI assistants often go live within 4-6 weeks, with administrative automation and analytics following. We align implementations with academic calendars and provide training for faculty and staff."
  }
];

export default function Education() {
  return (
    <Layout>
      <Helmet>
        <title>Education AI | LuMay Enterprise Agentic AI Platform</title>
        <meta name="description" content="Transform education with LuMay's AI agents. Enhance student support, automate administration, and improve outcomes with FERPA-compliant intelligent automation." />
        <meta name="keywords" content="education AI, higher education AI, student support AI, learning AI, enrollment automation, LuMay education, EdTech AI, student retention" />
        <link rel="canonical" href="https://lumay-agentic-ai.42web.io/industries/education" />
        <meta property="og:title" content="Education AI | LuMay Enterprise Agentic AI Platform" />
        <meta property="og:description" content="Transform education with LuMay's AI agents. Enhance student support, automate administration, and improve outcomes." />
        <meta property="og:url" content="https://lumay-agentic-ai.42web.io/industries/education" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "LuMay Education AI Solutions",
            "description": "Enterprise AI platform for education including student support automation, learning assistance, administrative automation, and student success analytics.",
            "provider": {
              "@type": "Organization",
              "name": "LuMay",
              "url": "https://lumay-agentic-ai.42web.io"
            },
            "serviceType": "Education AI",
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
            { label: "Education" }
          ]} />
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4" />
              Industry Solutions
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Education <span className="text-gradient">AI Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Empower educational excellence with LuMay's autonomous AI agents. Enhance student support, personalize learning, and streamline administration with FERPA-compliant intelligent automation.
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
              Intelligent Education Transformation with LuMay
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Education is undergoing profound transformation. Students expect personalized experiences and instant support. Institutions face pressure to improve outcomes while managing costs. LuMay's enterprise agentic AI platform helps educational institutions navigate this transformation by deploying intelligent AI agents that enhance student experiences, support faculty, and streamline operations.
              </p>
              <p>
                LuMay understands the unique requirements of educational environments. Our platform is designed with FERPA compliance at its foundation, ensuring student data is protected while enabling personalized support. AI agents can assist students 24/7 with admissions questions, enrollment processes, academic guidance, and campus services—all while maintaining the privacy and trust that educational relationships require.
              </p>
              <p>
                Beyond student services, LuMay brings AI intelligence to institutional operations. SmartFlow automates administrative workflows from enrollment processing to financial aid. SmartTrends provides analytics that identify at-risk students, predict enrollment trends, and support institutional planning. SmartOCG Compliance ensures continuous alignment with accreditation and regulatory requirements.
              </p>
              <p>
                Educational institutions implementing LuMay typically see dramatic improvements in student satisfaction and operational efficiency. Response times for student inquiries decrease from days to seconds. Administrative processing accelerates significantly. Student retention improves as AI-powered early warning systems enable proactive intervention. Staff can focus on high-impact interactions that shape student success.
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
              AI-Powered Education Capabilities
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              LuMay delivers comprehensive AI solutions for modern educational institutions.
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
              Measurable Educational Impact
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
              Education Use Cases
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover how LuMay AI agents transform educational experiences and operations.
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
              The Future of Education AI with LuMay
            </h2>
            
            <h3 className="text-foreground">Transforming the Student Experience</h3>
            <p>
              Today's students are digital natives who expect instant, personalized service. LuMay meets these expectations by providing AI-powered support that's available whenever students need it. From the first admissions inquiry through graduation and beyond, our autonomous agents guide students through their educational journey. This isn't about replacing human connection—it's about ensuring students always have access to support while freeing advisors and staff for the mentorship moments that matter most.
            </p>
            
            <h3 className="text-foreground">Admissions and Enrollment Excellence</h3>
            <p>
              The admissions process is often a prospective student's first impression of an institution. LuMay SmartAssist ensures this impression is positive by providing immediate, accurate responses to admissions inquiries. AI agents guide students through application requirements, track application status, and provide personalized program recommendations. SmartFlow automates enrollment processing, reducing friction and accelerating time to enrollment.
            </p>
            
            <h3 className="text-foreground">Personalized Learning Support</h3>
            <p>
              Every student learns differently, and personalized support can make the difference between success and struggle. LuMay AI tutoring agents adapt to individual learning styles, providing explanations, practice problems, and feedback tailored to each student. These agents don't replace faculty—they extend faculty reach by handling routine questions and freeing instructors to focus on complex concepts and student mentorship.
            </p>
            
            <h3 className="text-foreground">Student Success and Retention</h3>
            <p>
              Student success is the ultimate measure of educational effectiveness. LuMay SmartTrends brings predictive analytics to student success, identifying students at risk of academic difficulty or attrition before problems become crises. Early warning indicators trigger proactive outreach from advisors, counselors, or support services. Intervention tracking ensures at-risk students receive the support they need to succeed.
            </p>
            
            <h3 className="text-foreground">Administrative Transformation</h3>
            <p>
              Educational institutions are burdened by administrative processes that consume resources better spent on student success. LuMay SmartFlow automates these processes—from financial aid verification to transcript processing to graduation clearance. Automation reduces processing times, improves accuracy, and enables staff to focus on complex cases and student interactions.
            </p>
            
            <h3 className="text-foreground">Global Education Support</h3>
            <p>
              International students bring diversity and perspective to campuses, but also unique support needs. LuMay SmartTranslation enables seamless communication with international students and families in over 100 languages. AI agents provide admissions guidance, visa information, cultural adjustment support, and academic assistance in students' native languages.
            </p>
            
            <h3 className="text-foreground">Compliance and Accreditation</h3>
            <p>
              Educational institutions operate in a complex regulatory environment spanning FERPA, accreditation requirements, and state regulations. LuMay SmartOCG Compliance automates compliance monitoring and documentation. The platform tracks requirements across accreditors and agencies, generates evidence for site visits, and maintains audit trails for all compliance activities.
            </p>
            
            <h3 className="text-foreground">Faculty Support</h3>
            <p>
              Faculty are the heart of educational institutions, and supporting their work is essential. LuMay provides AI tools that reduce administrative burden, automate routine communications, and provide teaching insights. AI agents can handle student questions outside class, grade routine assignments, and identify students who may need additional attention. This support enables faculty to focus on teaching and scholarship.
            </p>
            
            <h3 className="text-foreground">Privacy and Trust</h3>
            <p>
              Educational data requires the highest levels of protection. LuMay's platform is designed with FERPA compliance and student privacy as foundational requirements. We implement strict access controls, maintain comprehensive audit trails, and ensure transparency about AI usage. Students and families can trust that their data is protected while benefiting from AI-enhanced support and services.
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
              Transform Education with AI
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Discover how LuMay's AI platform can enhance student success, streamline operations, and empower educational excellence.
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
