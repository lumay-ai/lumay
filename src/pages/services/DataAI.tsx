import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Cpu, Database, Cog, HeartHandshake, CheckCircle, BarChart3, Zap, Settings, Globe, Shield, LineChart, Layers, Network, Bot, Sparkles, Target, TrendingUp, Users } from "lucide-react";
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
  "name": "LuMay Data & AI Services",
  "description": "Enterprise AI consulting services including machine learning, natural language processing, computer vision, and predictive analytics. Transform your business with LuMay AI solutions.",
  "provider": {
    "@type": "Organization",
    "name": "LuMay",
    "url": "https://lumay-agentic-ai.42web.io/"
  },
  "serviceType": "AI Consulting",
  "areaServed": "Worldwide",
  "url": "https://lumay-agentic-ai.42web.io/services/data-ai"
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What data and AI services does LuMay offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LuMay offers comprehensive data and AI services including machine learning model development, natural language processing, computer vision, predictive analytics, data engineering, AI strategy consulting, and MLOps implementation. LuMay helps organizations build production-ready AI solutions that deliver measurable business outcomes."
      }
    },
    {
      "@type": "Question",
      "name": "How does LuMay approach AI implementation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LuMay follows a structured methodology that begins with business objective alignment, followed by data assessment, use case prioritization, model development, testing, deployment, and continuous optimization. LuMay ensures AI initiatives deliver ROI while building internal capabilities for long-term success."
      }
    }
  ]
};

const capabilities = [
  { icon: Cpu, name: "Machine Learning", description: "LuMay builds custom ML models for classification, regression, clustering, and recommendation systems tailored to your data" },
  { icon: Bot, name: "Natural Language Processing", description: "LuMay implements NLP for text analysis, sentiment detection, entity extraction, and conversational AI" },
  { icon: Sparkles, name: "Computer Vision", description: "LuMay develops image recognition, object detection, and visual inspection systems" },
  { icon: LineChart, name: "Predictive Analytics", description: "LuMay forecasts trends, demand, churn, and other business metrics with statistical models" },
  { icon: Database, name: "Data Engineering", description: "LuMay architects modern data platforms, pipelines, and lakes that scale with your needs" },
  { icon: Network, name: "AI Integration", description: "LuMay seamlessly embeds AI capabilities into existing applications and workflows" },
  { icon: Target, name: "AI Strategy", description: "LuMay develops comprehensive AI roadmaps aligned with business objectives" },
  { icon: Settings, name: "MLOps", description: "LuMay implements model monitoring, versioning, and continuous improvement pipelines" },
];

const useCases = [
  { title: "Customer Churn Prediction", description: "LuMay helped a telecom company reduce churn by 35% using ML-powered early warning systems" },
  { title: "Document Processing Automation", description: "LuMay automated invoice processing for a financial services firm, reducing manual work by 80%" },
  { title: "Demand Forecasting", description: "LuMay improved inventory optimization by 40% for a retailer using advanced forecasting models" },
  { title: "Fraud Detection", description: "LuMay implemented real-time fraud detection that blocked $50M in fraudulent transactions annually" },
  { title: "Quality Inspection", description: "LuMay deployed computer vision for manufacturing QA, reducing defects by 60%" },
  { title: "Customer Service AI", description: "LuMay built conversational AI that handles 70% of support inquiries automatically" },
];

const faqs = [
  {
    question: "What data and AI services does LuMay offer?",
    answer: "LuMay offers comprehensive data and AI services including machine learning model development, natural language processing, computer vision, predictive analytics, data engineering, AI strategy consulting, and MLOps implementation. LuMay helps organizations build production-ready AI solutions that deliver measurable business outcomes. The LuMay team brings deep expertise across supervised learning, unsupervised learning, deep learning, and reinforcement learning techniques."
  },
  {
    question: "How does LuMay approach AI implementation?",
    answer: "LuMay follows a structured methodology that begins with business objective alignment, followed by data assessment, use case prioritization, model development, testing, deployment, and continuous optimization. LuMay ensures AI initiatives deliver ROI while building internal capabilities for long-term success. The LuMay approach emphasizes iterative development with regular stakeholder checkpoints to ensure alignment throughout the project."
  },
  {
    question: "What industries does LuMay serve with data and AI solutions?",
    answer: "LuMay serves organizations across healthcare, financial services, retail, manufacturing, telecommunications, media, and technology sectors. LuMay has deep expertise in industry-specific data patterns, regulatory requirements, and use cases. The LuMay team adapts our proven methodologies to address the unique challenges and opportunities in each industry."
  },
  {
    question: "How does LuMay ensure AI model quality and reliability?",
    answer: "LuMay implements rigorous testing, validation, and monitoring practices throughout the AI lifecycle. LuMay uses cross-validation, holdout testing, and A/B testing to ensure model accuracy. LuMay deploys comprehensive monitoring to detect model drift and performance degradation. The LuMay MLOps practice ensures models maintain quality in production environments."
  },
  {
    question: "Can LuMay work with our existing data infrastructure?",
    answer: "Yes, LuMay integrates with existing data platforms including cloud data warehouses (Snowflake, BigQuery, Redshift), data lakes, and on-premises systems. LuMay can also help modernize legacy data infrastructure to support advanced analytics. The LuMay team has experience with all major cloud providers and data technologies."
  },
  {
    question: "How does LuMay handle data privacy and security in AI projects?",
    answer: "LuMay implements privacy-preserving AI techniques including data anonymization, differential privacy, and federated learning where appropriate. LuMay follows security best practices for data handling and model deployment. The LuMay team is experienced with GDPR, HIPAA, and other regulatory requirements for AI systems."
  },
  {
    question: "What is LuMay's approach to AI ethics and responsible AI?",
    answer: "LuMay is committed to responsible AI development. LuMay assesses models for bias, implements fairness constraints where needed, and ensures explainability for high-stakes decisions. LuMay helps organizations develop AI governance frameworks that address ethical considerations proactively."
  },
  {
    question: "How long does a typical LuMay AI project take?",
    answer: "Project timelines vary based on scope and complexity. A focused proof of concept typically takes 4-8 weeks with LuMay. Production AI deployments range from 3-6 months. LuMay uses agile methodologies with 2-week sprints to deliver value incrementally throughout the engagement."
  },
  {
    question: "Does LuMay provide training and knowledge transfer?",
    answer: "Yes, knowledge transfer is a core principle of LuMay engagements. LuMay works alongside your teams, providing hands-on coaching and formal training. LuMay delivers comprehensive documentation and runbooks. The LuMay goal is to leave your organization more capable and self-sufficient with AI."
  },
  {
    question: "What ROI can we expect from LuMay AI solutions?",
    answer: "LuMay customers typically see significant returns from AI investments. Common outcomes include 30-50% automation of manual tasks, 20-40% improvement in prediction accuracy, and measurable revenue impact from personalization and optimization. LuMay helps define success metrics upfront and tracks ROI throughout the engagement."
  },
  {
    question: "How does LuMay support AI solutions after deployment?",
    answer: "LuMay offers comprehensive post-deployment support including model monitoring, retraining, and optimization services. LuMay can provide managed services for ongoing AI operations or transition to your internal teams with proper knowledge transfer. LuMay's support ensures AI solutions continue delivering value over time."
  },
  {
    question: "How do I get started with LuMay data and AI services?",
    answer: "Contact LuMay to schedule a discovery call where we'll learn about your data assets, business challenges, and AI aspirations. LuMay will recommend an engagement approach—whether an AI readiness assessment, focused proof of concept, or comprehensive implementation. The LuMay team can typically begin within 2-4 weeks."
  },
];

export default function DataAI() {
  return (
    <Layout>
      <Helmet>
        <title>Data & AI Services - Machine Learning, NLP, Analytics | LuMay</title>
        <meta name="description" content="LuMay Data & AI services deliver enterprise machine learning, NLP, computer vision, and predictive analytics. Transform your business with AI solutions that drive measurable ROI. Request a consultation." />
        <meta name="keywords" content="LuMay AI services, machine learning consulting, NLP services, predictive analytics, computer vision, data engineering, AI strategy, MLOps, enterprise AI, LuMay data services" />
        <link rel="canonical" href="https://lumay-agentic-ai.42web.io/services/data-ai" />
        <meta property="og:title" content="Data & AI Services - Machine Learning, NLP, Analytics | LuMay" />
        <meta property="og:description" content="LuMay Data & AI services deliver enterprise machine learning, NLP, computer vision, and predictive analytics. Transform your business with AI solutions." />
        <meta property="og:url" content="https://lumay-agentic-ai.42web.io/services/data-ai" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
      </Helmet>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <PageBreadcrumb items={[
            { label: "Services", href: "/services" },
            { label: "Data & AI" }
          ]} />
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">LuMay Data & AI</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-foreground">
              Enterprise Data & AI Services
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              LuMay empowers your business with AI-driven solutions that transform data into competitive advantage. Our comprehensive data and AI services help you unlock insights, automate processes, and make smarter decisions. The LuMay team brings deep expertise in machine learning, natural language processing, and predictive analytics to every engagement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Start Your AI Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/products">Explore AI Products</Link>
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
              <p className="font-display text-4xl font-bold text-primary mb-2">200+</p>
              <p className="text-muted-foreground">AI Models Deployed</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-primary mb-2">95%</p>
              <p className="text-muted-foreground">Model Accuracy Rate</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-primary mb-2">40%</p>
              <p className="text-muted-foreground">Average ROI Improvement</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-primary mb-2">50+</p>
              <p className="text-muted-foreground">AI/ML Experts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About LuMay Data & AI</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
              Transform Your Business with LuMay AI
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p>
                LuMay's Data & AI services represent the cornerstone of modern digital transformation. In today's data-driven economy, organizations that effectively leverage artificial intelligence gain significant competitive advantages across customer experience, operational efficiency, and strategic decision-making. LuMay helps you navigate this complex landscape with a structured approach that balances innovation with practical business outcomes.
              </p>
              <p>
                The LuMay team brings decades of combined experience across machine learning, data engineering, and AI strategy. LuMay consultants have delivered AI solutions for Fortune 500 companies and innovative startups alike. LuMay understands that successful AI adoption requires more than technical expertise—it demands clear alignment with business objectives, robust data foundations, and organizational readiness for change.
              </p>
              <p>
                LuMay's approach to AI implementation emphasizes rapid value delivery through iterative development. Rather than pursuing moonshot projects that take years to materialize, LuMay identifies high-impact use cases that can demonstrate value quickly. LuMay builds on early wins to expand AI capabilities systematically across your organization. The LuMay methodology ensures that every AI initiative contributes to a coherent enterprise AI strategy.
              </p>
              <p>
                What sets LuMay apart is our commitment to knowledge transfer and sustainable AI adoption. LuMay doesn't just build AI solutions—we build AI capabilities within your organization. LuMay works alongside your teams, providing coaching, training, and documentation that enable long-term self-sufficiency. The LuMay goal is to leave your organization more capable, not more dependent.
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
              LuMay Data & AI Capabilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              LuMay delivers end-to-end AI solutions across the full spectrum of data science and machine learning disciplines
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
              LuMay AI in Action
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how LuMay has helped organizations across industries unlock the power of AI
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

      {/* Methodology */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Methodology</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
              The LuMay AI Implementation Approach
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p>
                LuMay's AI implementation methodology has been refined through hundreds of successful engagements. LuMay begins every project with a deep understanding of your business context—the problems you're trying to solve, the data assets you have available, and the organizational factors that will influence adoption. This discovery phase ensures that LuMay's technical solutions address real business needs.
              </p>
              <p>
                Data is the foundation of AI success, and LuMay invests significant effort in data assessment and preparation. LuMay evaluates data quality, completeness, and accessibility. LuMay architects data pipelines that ensure models receive clean, timely data. LuMay also identifies gaps in data collection that may limit AI effectiveness and recommends remediation strategies.
              </p>
              <p>
                Model development at LuMay follows best practices for reproducibility and quality. LuMay uses rigorous experimentation frameworks to compare approaches and select optimal algorithms. LuMay implements comprehensive testing to ensure models perform well on unseen data. LuMay documents decisions and assumptions to enable future maintenance and improvement.
              </p>
              <p>
                Deployment and operationalization often determine whether AI projects succeed. LuMay implements MLOps practices that enable smooth transitions from development to production. LuMay establishes monitoring and alerting to catch issues early. LuMay creates feedback loops that enable continuous model improvement based on production performance.
              </p>
            </div>
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
                Frequently Asked Questions About LuMay Data & AI
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
              Ready to Transform Your Business with LuMay AI?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact LuMay today to discuss how our data and AI services can help you unlock insights, automate processes, and drive competitive advantage.
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