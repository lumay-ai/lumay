import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, CheckCircle, Zap, Database, Shield, Clock, Users, Brain, MessageSquare, Settings, Globe, Headphones, FileText, BarChart3, Lock } from "lucide-react";
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
  "name": "LuMay SmartAssist",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "AI-native virtual assistant that instantly answers questions, solves problems, and executes workflows using your company's data",
  "url": "https://lumay-agentic-ai.42web.io/products/smartassist",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Contact for enterprise pricing"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "150"
  },
  "featureList": ["Natural Language Processing", "Multi-source Integration", "Context-aware Responses", "Workflow Automation", "24/7 Availability", "Enterprise Security"]
};

const features = [
  { icon: Zap, title: "Natural Language Processing", description: "Lumay SmartAssist understands and responds to complex queries in natural language with advanced context awareness and semantic understanding." },
  { icon: Database, title: "Multi-source Integration", description: "Connect Lumay SmartAssist to all your internal tools, knowledge bases, CRM systems, and repositories for comprehensive data access." },
  { icon: Shield, title: "Enterprise Security", description: "Lumay provides bank-grade encryption and compliance with SOC 2, GDPR, HIPAA, and ISO 27001 standards for maximum data protection." },
  { icon: Clock, title: "24/7 Availability", description: "Lumay SmartAssist delivers always-on assistance that never sleeps, ensuring continuous support for your global team across all time zones." },
  { icon: Users, title: "Context-aware Responses", description: "Lumay AI delivers accurate, personalized answers based on user roles, permissions, and historical interaction patterns." },
  { icon: CheckCircle, title: "Workflow Automation", description: "Execute complex workflows and tasks automatically through simple natural language commands with Lumay SmartAssist." },
  { icon: Brain, title: "Machine Learning", description: "Lumay SmartAssist continuously learns from interactions to improve accuracy and provide increasingly relevant responses over time." },
  { icon: MessageSquare, title: "Multi-channel Support", description: "Deploy Lumay SmartAssist across Slack, Microsoft Teams, email, web chat, and mobile apps for seamless omnichannel experiences." },
];

const useCases = [
  "Employee onboarding and HR queries with Lumay AI assistance",
  "IT helpdesk and technical support automation powered by Lumay",
  "Sales enablement and product information retrieval via Lumay SmartAssist",
  "Customer service automation using Lumay enterprise AI",
  "Knowledge management and documentation search with Lumay",
  "Process automation and task execution through Lumay workflows",
  "Finance and accounting query resolution by Lumay SmartAssist",
  "Legal and compliance document analysis using Lumay AI",
  "Procurement and vendor management assistance from Lumay",
  "Training and development support powered by Lumay SmartAssist",
];

const benefits = [
  { metric: "85%", description: "Reduction in response time with Lumay SmartAssist" },
  { metric: "60%", description: "Decrease in support ticket volume using Lumay AI" },
  { metric: "40%", description: "Improvement in employee productivity via Lumay" },
  { metric: "95%", description: "User satisfaction rate with Lumay SmartAssist" },
];

const faqs = [
  {
    question: "What is Lumay SmartAssist and how does it work?",
    answer: "Lumay SmartAssist is an AI-native virtual assistant that instantly answers questions, solves problems, and executes workflows using your company's data. Lumay SmartAssist connects to all your internal tools, knowledge bases, and repositories to deliver accurate, context-rich answers instantly and at scale. The Lumay platform uses advanced natural language processing and machine learning to understand user intent and provide relevant responses."
  },
  {
    question: "How does Lumay SmartAssist integrate with existing enterprise systems?",
    answer: "Lumay SmartAssist offers seamless integration with 200+ enterprise applications including Salesforce, Microsoft 365, Google Workspace, ServiceNow, Jira, Confluence, and more. Lumay provides pre-built connectors and APIs that enable quick deployment without extensive custom development. The Lumay integration framework supports both cloud and on-premise systems."
  },
  {
    question: "Is Lumay SmartAssist secure for enterprise use?",
    answer: "Absolutely. Lumay SmartAssist is built with enterprise-grade security from the ground up. Lumay maintains SOC 2 Type II certification, GDPR compliance, HIPAA compliance, and ISO 27001 certification. All data processed by Lumay is encrypted at rest and in transit using AES-256 encryption. Lumay also supports single sign-on (SSO), role-based access control, and audit logging."
  },
  {
    question: "How long does it take to implement Lumay SmartAssist?",
    answer: "Most Lumay SmartAssist deployments are completed within 2-4 weeks depending on the complexity of your environment. Lumay provides a dedicated implementation team that handles configuration, integration, and training. The Lumay platform's no-code admin interface allows business users to make adjustments without IT involvement."
  },
  {
    question: "Can Lumay SmartAssist handle multiple languages?",
    answer: "Yes, Lumay SmartAssist supports over 100 languages with native-quality understanding and response generation. Lumay's neural translation technology ensures accurate communication regardless of the user's preferred language. The Lumay platform automatically detects the user's language and responds accordingly."
  },
  {
    question: "How does Lumay SmartAssist learn and improve over time?",
    answer: "Lumay SmartAssist uses continuous learning algorithms that analyze user interactions, feedback, and outcomes to improve response accuracy. Lumay's machine learning models are fine-tuned on your organization's specific data and terminology. The Lumay platform provides analytics dashboards that show improvement trends and areas for optimization."
  },
  {
    question: "What ROI can we expect from implementing Lumay SmartAssist?",
    answer: "Lumay customers typically see 200-400% ROI within the first year of implementation. Lumay SmartAssist reduces support costs by automating 60-80% of routine inquiries. Lumay also improves employee productivity by providing instant access to information and automating repetitive tasks. The Lumay platform includes ROI tracking tools to measure your specific results."
  },
  {
    question: "Does Lumay SmartAssist work with proprietary company data?",
    answer: "Yes, Lumay SmartAssist is specifically designed to work with your proprietary company data. Lumay can ingest and index documents, databases, wikis, and any structured or unstructured data sources. The Lumay platform respects existing access controls, ensuring users only see information they're authorized to access."
  },
  {
    question: "How does Lumay handle sensitive or confidential information?",
    answer: "Lumay implements multiple layers of protection for sensitive information. Lumay SmartAssist supports data classification, automatic PII detection, and redaction capabilities. The Lumay platform can be configured to restrict access to confidential information based on user roles and departments. All Lumay data processing occurs within your security perimeter or in isolated cloud environments."
  },
  {
    question: "Can Lumay SmartAssist be customized for our specific industry?",
    answer: "Lumay SmartAssist is highly customizable for industry-specific requirements. Lumay offers pre-built templates for healthcare, finance, manufacturing, retail, and other industries. The Lumay platform supports custom vocabulary, compliance requirements, and workflow rules specific to your industry. Lumay's professional services team can help tailor the solution to your exact needs."
  },
  {
    question: "What support does Lumay provide after implementation?",
    answer: "Lumay provides comprehensive post-implementation support including 24/7 technical assistance, regular platform updates, and dedicated customer success management. Lumay customers have access to online training resources, community forums, and best practice guides. The Lumay support team monitors system health and proactively addresses any issues."
  },
  {
    question: "How does Lumay SmartAssist compare to other AI assistants?",
    answer: "Lumay SmartAssist differentiates itself through enterprise-grade security, deep integration capabilities, and superior natural language understanding. Unlike consumer-focused AI assistants, Lumay is purpose-built for business environments with features like audit trails, compliance controls, and workflow automation. Lumay's agentic AI architecture enables autonomous task execution beyond simple Q&A."
  },
];

export default function SmartAssist() {
  return (
    <Layout>
      <Helmet>
        <title>SmartAssist - AI-Driven Virtual Assistant | Lumay Enterprise AI Platform</title>
        <meta name="description" content="Lumay SmartAssist is an enterprise AI virtual assistant that answers questions, solves problems, and automates workflows. 24/7 availability, 100+ languages, SOC 2 certified. Request a demo." />
        <meta name="keywords" content="Lumay SmartAssist, AI virtual assistant, enterprise chatbot, workflow automation, NLP, knowledge management, Lumay AI, agentic AI, business automation, employee productivity" />
        <link rel="canonical" href="https://lumay-agentic-ai.42web.io/products/smartassist" />
        <meta property="og:title" content="SmartAssist - AI-Driven Virtual Assistant | Lumay" />
        <meta property="og:description" content="Lumay SmartAssist is an enterprise AI virtual assistant that answers questions, solves problems, and automates workflows. Request a demo today." />
        <meta property="og:url" content="https://lumay-agentic-ai.42web.io/products/smartassist" />
        <meta property="og:type" content="product" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Lumay SmartAssist",
            "description": "AI-Driven Virtual Assistant for Enterprise",
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
                <Bot className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Lumay Product</span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-2 mb-6 text-foreground">
                Lumay SmartAssist
              </h1>
              <p className="text-xl text-primary font-medium mb-4">Your AI-Driven Virtual Assistant Powered by Lumay</p>
              <p className="text-lg text-muted-foreground mb-8">
                Lumay SmartAssist is an AI-native virtual assistant that instantly answers questions, solves problems, and executes workflows using your company's data. The Lumay platform connects to all your internal tools, knowledge bases, and repositories to deliver accurate, context-rich answers—instantly and at scale. With Lumay SmartAssist, your organization gains a 24/7 intelligent assistant that understands your business context and speaks your language.
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
                <Bot className="w-32 h-32 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Stats */}
      <section className="py-16 bg-background border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.description} className="text-center">
                <p className="font-display text-4xl font-bold text-primary mb-2">{benefit.metric}</p>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is SmartAssist */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About Lumay SmartAssist</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
              What is Lumay SmartAssist?
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p>
                Lumay SmartAssist represents the next generation of enterprise virtual assistants, combining advanced artificial intelligence with deep business integration capabilities. Unlike traditional chatbots that rely on rigid decision trees, Lumay SmartAssist uses agentic AI technology to understand context, learn from interactions, and autonomously execute complex tasks on behalf of users.
              </p>
              <p>
                The Lumay platform was designed from the ground up for enterprise environments, addressing the unique challenges businesses face when deploying AI solutions. Lumay SmartAssist understands that enterprise data is scattered across dozens of systems, that security and compliance are non-negotiable, and that users expect immediate, accurate responses regardless of the complexity of their questions.
              </p>
              <p>
                What sets Lumay SmartAssist apart is its ability to not just answer questions but to take action. When an employee asks about their remaining vacation days, Lumay SmartAssist doesn't just provide the information—it can also initiate a time-off request, check manager availability, and send calendar invites, all through a natural conversation. This agentic capability transforms Lumay from a simple Q&A tool into a true digital colleague that amplifies human productivity.
              </p>
              <p>
                Lumay SmartAssist integrates seamlessly with your existing technology stack, connecting to CRM systems, HRIS platforms, knowledge management tools, and custom databases. The Lumay connector library includes over 200 pre-built integrations, and the platform's open API architecture allows custom integrations for proprietary systems. This comprehensive connectivity ensures that Lumay SmartAssist has access to the information users need, regardless of where it resides.
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
              Powerful Capabilities of Lumay SmartAssist
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Lumay SmartAssist combines cutting-edge AI with enterprise-grade security to deliver intelligent assistance at scale. Discover why leading organizations choose Lumay for their AI initiatives.
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

      {/* Use Cases */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Lumay Use Cases</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
                Transform Your Operations with Lumay
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Lumay SmartAssist adapts to your unique business needs, providing intelligent assistance across departments and functions. The Lumay platform is designed to handle the diverse requirements of modern enterprises, from HR and IT to finance and operations.
              </p>
              <ul className="space-y-4">
                {useCases.map((useCase) => (
                  <li key={useCase} className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-gradient rounded-2xl p-8 border border-border">
              <div className="space-y-4">
                <div className="bg-background/50 rounded-lg p-4 border border-border">
                  <p className="text-sm text-muted-foreground mb-2">User Query to Lumay</p>
                  <p className="text-foreground">"What's our refund policy for enterprise customers?"</p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                  <p className="text-sm text-primary mb-2">Lumay SmartAssist Response</p>
                  <p className="text-foreground">Based on your enterprise agreement, customers are eligible for a full refund within 30 days of purchase. I can also initiate the refund process for you if needed. Would you like me to start that workflow?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">How Lumay Works</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
              The Lumay SmartAssist Process
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Understanding how Lumay SmartAssist processes requests helps you maximize the value of your AI investment. The Lumay platform uses a sophisticated multi-step approach to ensure accurate, relevant responses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">User Input</h3>
              <p className="text-muted-foreground text-sm">User submits a question or request through any Lumay-connected channel</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Lumay Analysis</h3>
              <p className="text-muted-foreground text-sm">Lumay AI analyzes intent, context, and user permissions to understand the request</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Data Retrieval</h3>
              <p className="text-muted-foreground text-sm">Lumay searches connected systems and knowledge bases for relevant information</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Response & Action</h3>
              <p className="text-muted-foreground text-sm">Lumay delivers the answer and can execute follow-up workflows automatically</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Lumay FAQ</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
                Frequently Asked Questions About Lumay SmartAssist
              </h2>
              <p className="text-muted-foreground text-lg">
                Get answers to common questions about Lumay SmartAssist, implementation, security, and ROI. Contact Lumay for personalized guidance.
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
            Ready to Transform Your Workforce with Lumay?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            See how Lumay SmartAssist can revolutionize the way your team works. Schedule a personalized demo with the Lumay team today and discover the power of enterprise agentic AI.
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
