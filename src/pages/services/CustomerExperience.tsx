import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Heart, Smile, MessageCircle, Target, BarChart3, Headphones, Globe, Sparkles, UserCheck, TrendingUp, Megaphone, CheckCircle, Star, ThumbsUp } from "lucide-react";
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
  "name": "LuMay Customer Experience Services",
  "description": "Enterprise customer experience consulting including journey mapping, personalization, omnichannel support, and CX analytics. Transform customer relationships with LuMay.",
  "provider": {
    "@type": "Organization",
    "name": "LuMay",
    "url": "https://lumay-agentic-ai.42web.io/"
  },
  "serviceType": "Customer Experience Consulting",
  "areaServed": "Worldwide",
  "url": "https://lumay-agentic-ai.42web.io/services/customer-experience"
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What customer experience services does LuMay offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LuMay offers comprehensive CX services including customer journey mapping, personalization strategy, omnichannel experience design, voice of customer programs, CX analytics, and customer service transformation. LuMay helps organizations create exceptional experiences across all touchpoints."
      }
    },
    {
      "@type": "Question",
      "name": "How does LuMay approach CX transformation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LuMay takes a data-driven approach to CX transformation, combining customer research, journey analytics, and AI-powered personalization. LuMay aligns CX initiatives with business outcomes to ensure investments deliver measurable returns."
      }
    }
  ]
};

const capabilities = [
  { icon: Target, name: "Journey Mapping", description: "LuMay maps and optimizes end-to-end customer journeys across all touchpoints and channels" },
  { icon: Sparkles, name: "Personalization", description: "LuMay delivers tailored experiences at scale using AI, machine learning, and customer data platforms" },
  { icon: Globe, name: "Omnichannel Support", description: "LuMay ensures consistent experience across web, mobile, voice, social, and in-person channels" },
  { icon: BarChart3, name: "CX Analytics", description: "LuMay measures and continuously improves customer satisfaction, NPS, and customer lifetime value" },
  { icon: MessageCircle, name: "Voice of Customer", description: "LuMay implements feedback collection, sentiment analysis, and closed-loop response programs" },
  { icon: Headphones, name: "Service Transformation", description: "LuMay redesigns customer service operations with AI-powered self-service and agent enablement" },
  { icon: UserCheck, name: "Customer Success", description: "LuMay develops programs that drive adoption, retention, and expansion in B2B relationships" },
  { icon: TrendingUp, name: "CX Strategy", description: "LuMay creates comprehensive CX strategies aligned with brand promise and business objectives" },
];

const useCases = [
  { title: "NPS Improvement", description: "LuMay helped a retailer increase NPS from 32 to 58 through journey optimization and personalization" },
  { title: "Contact Center Transformation", description: "LuMay reduced average handle time by 40% while improving CSAT scores by implementing AI assist" },
  { title: "Digital Self-Service", description: "LuMay deployed self-service capabilities that deflected 60% of support contacts" },
  { title: "Personalization Engine", description: "LuMay implemented real-time personalization that increased conversion rates by 25%" },
  { title: "Omnichannel Unification", description: "LuMay created unified customer view enabling seamless handoffs between channels" },
  { title: "Customer Success Program", description: "LuMay developed a CSM program that reduced churn by 35% for a SaaS company" },
];

const faqs = [
  {
    question: "What customer experience services does LuMay offer?",
    answer: "LuMay offers comprehensive CX services including customer journey mapping, personalization strategy, omnichannel experience design, voice of customer programs, CX analytics, customer service transformation, and customer success program development. LuMay helps organizations create exceptional experiences across all touchpoints while driving measurable business outcomes."
  },
  {
    question: "How does LuMay approach CX transformation?",
    answer: "LuMay takes a data-driven approach to CX transformation, combining customer research, journey analytics, and AI-powered personalization. LuMay aligns CX initiatives with business outcomes to ensure investments deliver measurable returns. LuMay's methodology spans strategy, design, implementation, and measurement to ensure comprehensive CX improvement."
  },
  {
    question: "How does LuMay measure customer experience success?",
    answer: "LuMay uses a comprehensive measurement framework that includes leading indicators (customer satisfaction, customer effort) and lagging indicators (retention, lifetime value, referrals). LuMay implements analytics and feedback collection mechanisms to capture data across touchpoints. LuMay provides dashboards and reporting that give visibility into CX performance and identify improvement opportunities."
  },
  {
    question: "What is LuMay's approach to customer journey mapping?",
    answer: "LuMay conducts comprehensive journey mapping that captures the full customer lifecycle from awareness through advocacy. LuMay combines qualitative research (interviews, observations) with quantitative data (analytics, surveys) to build accurate journey maps. LuMay identifies moments of truth, pain points, and opportunities. LuMay creates actionable journey maps that drive specific improvements."
  },
  {
    question: "How does LuMay enable personalization at scale?",
    answer: "LuMay implements personalization strategies that use customer data, AI, and real-time decisioning to deliver relevant experiences. LuMay helps organizations build unified customer profiles, implement recommendation engines, and create dynamic content. LuMay's approach balances personalization with privacy, using first-party data responsibly to build trust."
  },
  {
    question: "Can LuMay help with contact center transformation?",
    answer: "Yes, LuMay provides comprehensive contact center transformation services. LuMay redesigns service operations with optimal channel mix, implements AI-powered self-service and agent assist, and optimizes workforce management. LuMay's approach improves customer satisfaction while reducing cost-to-serve. LuMay has experience with major contact center platforms."
  },
  {
    question: "What is LuMay's approach to voice of customer programs?",
    answer: "LuMay implements holistic VoC programs that capture feedback across touchpoints through surveys, social listening, and interaction analytics. LuMay uses AI to analyze sentiment and identify themes at scale. LuMay establishes closed-loop processes to act on feedback and close the loop with customers. LuMay helps organizations move from collecting feedback to driving action."
  },
  {
    question: "How does LuMay approach omnichannel experience design?",
    answer: "LuMay designs omnichannel experiences that provide consistency and continuity across channels. LuMay maps customer journeys across channels, identifies handoff points, and designs seamless transitions. LuMay implements unified customer data that enables context to follow the customer. LuMay ensures each channel plays its appropriate role in the overall experience."
  },
  {
    question: "Does LuMay help with customer success programs?",
    answer: "Yes, LuMay develops comprehensive customer success programs for B2B organizations. LuMay designs CSM operating models, defines success metrics, and implements technology platforms. LuMay creates playbooks for onboarding, adoption, expansion, and renewal. LuMay's approach drives measurable improvements in retention and net revenue retention."
  },
  {
    question: "How does LuMay use AI in customer experience?",
    answer: "LuMay applies AI throughout the customer experience including chatbots and virtual assistants, personalization engines, predictive analytics for churn and next-best-action, sentiment analysis, and agent assist tools. LuMay implements AI responsibly, ensuring human oversight and fallback options. LuMay's AI approach enhances rather than replaces human connection."
  },
  {
    question: "What ROI can we expect from LuMay CX investments?",
    answer: "LuMay CX initiatives typically deliver significant returns through improved retention, increased share of wallet, reduced cost-to-serve, and enhanced brand advocacy. Specific outcomes vary by industry and initiative, but LuMay customers commonly see 10-20% improvement in NPS, 15-30% reduction in churn, and measurable revenue impact. LuMay helps define success metrics upfront and tracks ROI throughout the engagement."
  },
  {
    question: "How do I get started with LuMay customer experience services?",
    answer: "Contact LuMay to schedule a CX discovery session where we'll learn about your current customer experience, challenges, and objectives. LuMay can conduct a CX assessment to identify gaps and prioritize improvements. LuMay typically begins engagements with focused initiatives that deliver quick wins while building toward comprehensive CX transformation."
  },
];

export default function CustomerExperience() {
  return (
    <Layout>
      <Helmet>
        <title>Customer Experience Services - Journey Mapping, Personalization | LuMay</title>
        <meta name="description" content="LuMay Customer Experience services transform customer relationships with journey mapping, personalization, omnichannel support, and CX analytics. Drive loyalty and growth. Request a consultation." />
        <meta name="keywords" content="LuMay customer experience, CX consulting, journey mapping, personalization, omnichannel experience, voice of customer, customer service transformation, CX analytics, LuMay CX services" />
        <link rel="canonical" href="https://lumay-agentic-ai.42web.io/services/customer-experience" />
        <meta property="og:title" content="Customer Experience Services - Journey Mapping, Personalization | LuMay" />
        <meta property="og:description" content="LuMay Customer Experience services transform customer relationships with journey mapping, personalization, omnichannel support, and CX analytics." />
        <meta property="og:url" content="https://lumay-agentic-ai.42web.io/services/customer-experience" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
      </Helmet>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">LuMay Customer Experience</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-foreground">
              Customer Experience Services
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              LuMay helps you create exceptional customer experiences across all channels. We help you understand your customers, personalize interactions, and build lasting relationships through AI-powered engagement. The LuMay CX team combines strategy, design, and technology to deliver measurable improvements in customer satisfaction and loyalty.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Transform Your CX
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
              <p className="font-display text-4xl font-bold text-primary mb-2">+26</p>
              <p className="text-muted-foreground">Avg. NPS Improvement</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-primary mb-2">35%</p>
              <p className="text-muted-foreground">Churn Reduction</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-primary mb-2">25%</p>
              <p className="text-muted-foreground">Conversion Increase</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-primary mb-2">40%</p>
              <p className="text-muted-foreground">Cost Reduction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About LuMay CX</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
              Transform Every Touchpoint with LuMay
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p>
                LuMay's Customer Experience services recognize that in today's competitive landscape, customer experience has become the primary differentiator. LuMay helps organizations move beyond transactional interactions to create emotional connections that drive loyalty and advocacy. Our LuMay CX experts use data-driven insights to understand customer needs, AI-powered personalization to deliver relevant experiences, and continuous optimization to improve outcomes over time.
              </p>
              <p>
                The LuMay approach spans strategy, design, implementation, and measurement to ensure comprehensive CX transformation. LuMay begins with deep understanding of your customers—their needs, expectations, and current experiences with your brand. LuMay maps customer journeys to identify moments of truth and pain points. LuMay designs improved experiences that align with your brand promise and business objectives.
              </p>
              <p>
                Technology is an enabler of great customer experiences, and LuMay implements the platforms and capabilities needed to deliver at scale. LuMay helps organizations build unified customer data foundations, implement personalization engines, and deploy AI-powered service capabilities. LuMay's technology approach focuses on outcomes rather than tools, ensuring investments translate to improved customer experiences.
              </p>
              <p>
                Measurement is essential to CX improvement, and LuMay establishes comprehensive analytics that connect customer experience to business outcomes. LuMay implements voice of customer programs that capture feedback across touchpoints. LuMay creates dashboards that give visibility into CX performance. LuMay helps organizations create cultures of continuous CX improvement.
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
              LuMay Customer Experience Capabilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              LuMay delivers comprehensive CX services that transform how you engage with customers
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
              LuMay CX in Action
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how LuMay has helped organizations transform their customer experiences
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div key={useCase.title} className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-5 h-5 text-primary" />
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
                Frequently Asked Questions About LuMay CX
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
              Ready to Transform Customer Experience with LuMay?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact LuMay today to discuss how our customer experience services can help you build lasting customer relationships and drive business growth.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Schedule a CX Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}