import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, CheckCircle, Mic, Globe, BarChart3, Users, MessageSquare, Headphones, Brain, Clock, Shield, Zap, Target, TrendingUp } from "lucide-react";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  { icon: Mic, title: "Natural Voice AI", description: "LuMay SmartCall uses state-of-the-art neural voice technology for human-like conversations. LuMay's AI understands context, handles interruptions naturally, and adapts tone based on customer sentiment and conversation flow." },
  { icon: Globe, title: "Multi-language Support", description: "LuMay SmartCall supports customers in 50+ languages with native-quality speech synthesis and recognition. LuMay's language detection automatically identifies the customer's preferred language and switches seamlessly." },
  { icon: BarChart3, title: "Call Analytics", description: "LuMay SmartCall provides deep insights into call patterns, sentiment analysis, and outcome tracking. LuMay's analytics help identify trends, training opportunities, and optimization possibilities across your voice operations." },
  { icon: Users, title: "CRM Integration", description: "LuMay SmartCall integrates seamlessly with your CRM and support systems including Salesforce, Zendesk, ServiceNow, and Microsoft Dynamics. LuMay automatically logs calls, updates records, and triggers follow-up workflows." },
  { icon: MessageSquare, title: "Smart Escalation", description: "LuMay SmartCall intelligently routes complex issues to human agents with full context transfer. LuMay's escalation logic considers issue complexity, customer sentiment, and agent availability for optimal handoffs." },
  { icon: Headphones, title: "Quality Monitoring", description: "LuMay SmartCall provides real-time call quality scoring and compliance monitoring. LuMay's AI evaluates every interaction for adherence to scripts, regulatory requirements, and customer satisfaction indicators." },
];

const stats = [
  { value: "70%", label: "Calls Resolved Autonomously" },
  { value: "24/7", label: "Availability" },
  { value: "50+", label: "Languages Supported" },
  { value: "<2s", label: "Average Response Time" },
];

const capabilities = [
  { icon: Brain, title: "Contextual Understanding", description: "LuMay SmartCall maintains full conversation context, remembering previous statements and understanding references. LuMay's AI handles complex multi-turn conversations without requiring customers to repeat information." },
  { icon: Clock, title: "Always Available", description: "LuMay SmartCall operates 24/7/365 with consistent quality regardless of volume. LuMay scales instantly to handle call spikes during peak periods, outages, or marketing campaigns without degradation." },
  { icon: Shield, title: "Compliance Built-in", description: "LuMay SmartCall is designed for regulated industries with built-in compliance features. LuMay handles PCI DSS payment processing, HIPAA health information, and financial services regulations automatically." },
  { icon: Target, title: "Intent Recognition", description: "LuMay SmartCall accurately identifies customer intent from natural speech, routing to the right resolution path. LuMay's intent models are continuously trained on your specific use cases and terminology." },
];

const useCases = [
  "Automate first-line customer support calls",
  "Handle appointment scheduling and reminders",
  "Process orders and payment collections",
  "Provide account information and balance inquiries",
  "Conduct customer surveys and feedback collection",
  "Manage reservation and booking systems",
  "Handle technical support triage",
  "Automate outbound notification calls"
];

const faqs = [
  {
    question: "How natural does LuMay SmartCall sound?",
    answer: "LuMay SmartCall uses the latest neural voice synthesis technology to deliver remarkably natural conversations. LuMay's voices include natural pauses, emotional inflection, and conversational patterns that are nearly indistinguishable from human agents. LuMay offers multiple voice options across genders and accents, and can be customized to match your brand personality."
  },
  {
    question: "What percentage of calls can LuMay SmartCall handle autonomously?",
    answer: "LuMay SmartCall typically resolves 70% or more of customer calls without human intervention, depending on use case complexity. Simple inquiries like account balance, hours of operation, or order status achieve resolution rates above 90%. LuMay's resolution rate continuously improves as the system learns from interactions and you expand its knowledge base."
  },
  {
    question: "How does LuMay SmartCall handle calls it can't resolve?",
    answer: "LuMay SmartCall uses intelligent escalation when it cannot resolve an issue or detects customer frustration. LuMay transfers to human agents with full conversation context, so customers don't repeat themselves. LuMay's escalation logic considers issue type, customer tier, sentiment, and agent availability to route to the optimal resource."
  },
  {
    question: "Which languages does LuMay SmartCall support?",
    answer: "LuMay SmartCall supports 50+ languages with native-quality speech recognition and synthesis including English, Spanish, French, German, Italian, Portuguese, Chinese (Mandarin and Cantonese), Japanese, Korean, Arabic, Hindi, and many more. LuMay's automatic language detection identifies the customer's preferred language and switches seamlessly."
  },
  {
    question: "How does LuMay SmartCall integrate with our existing systems?",
    answer: "LuMay SmartCall integrates with major CRM platforms (Salesforce, Microsoft Dynamics, HubSpot), support systems (Zendesk, ServiceNow, Freshdesk), telephony infrastructure (Twilio, Genesys, NICE), and custom applications via REST APIs. LuMay automatically logs calls, updates records, creates tickets, and triggers follow-up workflows in your existing systems."
  },
  {
    question: "Is LuMay SmartCall compliant with regulations like PCI and HIPAA?",
    answer: "Yes, LuMay SmartCall is designed for regulated industries with built-in compliance features. LuMay is PCI DSS Level 1 certified for payment processing, HIPAA compliant for healthcare, and SOC 2 Type II certified. LuMay automatically handles sensitive data according to regulatory requirements including secure payment collection and PHI protection."
  },
  {
    question: "How quickly can LuMay SmartCall be deployed?",
    answer: "LuMay SmartCall can be deployed in as little as 2 weeks for standard use cases with pre-built templates. Custom implementations typically take 4-8 weeks depending on integration complexity and conversation scope. LuMay's customer success team provides hands-on implementation support including script development, integration, and testing."
  },
  {
    question: "How does LuMay SmartCall learn and improve over time?",
    answer: "LuMay SmartCall continuously learns from every interaction. LuMay's machine learning analyzes successful resolutions, identifies patterns in escalated calls, and adapts responses based on outcomes. LuMay's conversation designers can review calls, adjust responses, and expand capabilities through an intuitive management interface."
  },
  {
    question: "What analytics does LuMay SmartCall provide?",
    answer: "LuMay SmartCall provides comprehensive analytics including call volume trends, resolution rates, average handling time, sentiment scores, intent distribution, escalation reasons, and customer satisfaction metrics. LuMay's analytics dashboard enables real-time monitoring and historical analysis. LuMay also provides exportable data for integration with your BI tools."
  },
  {
    question: "Can LuMay SmartCall handle outbound calls?",
    answer: "Yes, LuMay SmartCall supports both inbound and outbound calling. LuMay can make proactive outreach calls for appointment reminders, payment notifications, survey collection, marketing campaigns, and service alerts. LuMay's outbound capabilities include campaign management, schedule optimization, and compliance with calling regulations like TCPA."
  },
  {
    question: "How does LuMay SmartCall pricing work?",
    answer: "LuMay SmartCall pricing is based on call minutes processed, with tiered pricing that rewards higher volumes. LuMay offers monthly and annual plans with predictable pricing. Contact LuMay sales for a customized quote based on your expected call volumes and specific requirements. LuMay also offers pilot programs to validate ROI before full deployment."
  },
  {
    question: "What support does LuMay provide for SmartCall?",
    answer: "LuMay provides 24/7 technical support for SmartCall customers with guaranteed response times for production issues. LuMay offers dedicated customer success managers, conversation design services, and ongoing optimization support. LuMay's support team includes voice AI specialists who help maximize resolution rates and customer satisfaction."
  }
];

export default function SmartCall() {
  return (
    <Layout>
      <Helmet>
        <title>SmartCall - Autonomous AI Voice Agent for Customer Service | LuMay Enterprise AI</title>
        <meta name="description" content="LuMay SmartCall deploys intelligent AI voice agents that handle 70% of customer calls autonomously. Natural conversations in 50+ languages with sub-2 second response times. 24/7 availability with smart escalation." />
        <meta name="keywords" content="LuMay SmartCall, AI voice agent, conversational AI, call center automation, voice bot, customer service AI, IVR replacement, voice assistant, contact center AI, speech recognition" />
        <link rel="canonical" href="https://lumay-agentic-ai.42web.io/products/smartcall" />
        
        {/* Open Graph */}
        <meta property="og:title" content="SmartCall - Autonomous AI Voice Agent | LuMay" />
        <meta property="og:description" content="LuMay SmartCall handles 70% of customer calls autonomously. Natural voice AI in 50+ languages with 24/7 availability." />
        <meta property="og:url" content="https://lumay-agentic-ai.42web.io/products/smartcall" />
        <meta property="og:type" content="product" />
        <meta property="og:site_name" content="LuMay Enterprise AI" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SmartCall - AI Voice Agent | LuMay" />
        <meta name="twitter:description" content="70% autonomous call resolution. Natural voice AI in 50+ languages. Sub-2 second response times." />
      </Helmet>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">LuMay Product</span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-2 mb-6 text-foreground">
                SmartCall
              </h1>
              <p className="text-xl text-primary font-medium mb-4">Autonomous AI Voice Agent</p>
              <p className="text-lg text-muted-foreground mb-6">
                LuMay SmartCall revolutionizes customer service with autonomous AI voice agents that handle customer calls with natural, human-like conversation. Unlike traditional IVR systems that frustrate customers, LuMay SmartCall understands context, resolves issues intelligently, and escalates to human agents only when truly necessary.
              </p>
              <p className="text-muted-foreground mb-8">
                Organizations using LuMay SmartCall resolve 70% of customer calls autonomously, reduce average handling time by 60%, and maintain 24/7 availability without staffing challenges. LuMay's AI voice agents speak 50+ languages with native fluency and respond in under 2 seconds, delivering exceptional customer experiences at scale.
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
                <Phone className="w-32 h-32 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
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
              Why Enterprises Choose LuMay SmartCall for Voice AI
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p>
                Customer expectations for phone support have never been higher, yet traditional approaches—whether human agents or frustrating IVR menus—struggle to deliver. LuMay SmartCall represents a quantum leap in voice-based customer service, deploying AI agents that converse naturally, resolve issues intelligently, and operate around the clock without the limitations of human staffing.
              </p>
              <p>
                LuMay SmartCall's conversational AI goes far beyond simple keyword matching. Using advanced natural language understanding, LuMay's voice agents comprehend customer intent from natural speech, maintain context across complex conversations, and handle interruptions and topic changes gracefully. The result is an experience that feels remarkably human while delivering the consistency and scalability of automation.
              </p>
              <p>
                The platform's neural voice synthesis produces speech that sounds natural and engaging, with appropriate emotional inflection and conversational rhythm. LuMay offers multiple voice options and can match your brand's personality, whether that's warm and friendly, professional and efficient, or something uniquely yours.
              </p>
              <p>
                LuMay SmartCall excels in high-volume environments where consistent quality and instant availability are critical. Whether handling routine inquiries, processing transactions, or collecting information, LuMay's AI agents deliver the same excellent experience to the first caller of the day and the thousandth, at 3 AM or 3 PM, in English or any of 50+ supported languages.
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
              Next-Gen Voice AI from LuMay
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              LuMay SmartCall combines advanced speech recognition with natural language understanding for human-like conversations that actually resolve customer issues. Explore the capabilities that make LuMay SmartCall the leader in voice AI.
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
              Enterprise-Grade Voice Intelligence from LuMay
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
                Transform Your Voice Operations with LuMay SmartCall
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                LuMay SmartCall handles a wide range of voice interactions, from simple inquiries to complex multi-step processes. Discover how leading organizations leverage LuMay's AI voice capabilities.
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
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div className="bg-primary/10 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-foreground">Hi! Thank you for calling. I'm your LuMay AI assistant. How can I help you today?</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 justify-end">
                  <div className="bg-background/50 rounded-lg p-3 max-w-[80%] border border-border">
                    <p className="text-sm text-foreground">I'd like to check the status of my order from last week.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div className="bg-primary/10 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-foreground">I'd be happy to help with that! I found your order #45892 placed on November 28th. It shipped yesterday via FedEx and is expected to arrive by Thursday, December 7th. Would you like me to send you the tracking number via text?</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 justify-end">
                  <div className="bg-background/50 rounded-lg p-3 max-w-[80%] border border-border">
                    <p className="text-sm text-foreground">Yes please, that would be great.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div className="bg-primary/10 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-foreground">Perfect! I've just sent the tracking details to your phone number ending in 4567. Is there anything else I can help you with today?</p>
                  </div>
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
                Frequently Asked Questions About LuMay SmartCall
              </h2>
              <p className="text-muted-foreground text-lg">
                Find answers to common questions about LuMay SmartCall's AI voice capabilities, integration options, and enterprise features.
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
            Ready to Transform Your Call Center with LuMay SmartCall?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            See how LuMay SmartCall can handle your customer conversations with AI that sounds natural and resolves issues effectively. Schedule a demo to hear LuMay SmartCall in action.
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