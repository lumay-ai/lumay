import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, CheckCircle, BookOpen, Shield, Layers, Zap, Users, FileText, Brain, Clock, Target, Building2, MessageSquare } from "lucide-react";
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
  "name": "LuMay SmartTranslation",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "AI-powered language services with context-aware neural translation for enterprise content localization",
  "url": "https://lumay-agentic-ai.42web.io/products/smarttranslation",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Contact for enterprise pricing"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "100"
  },
  "featureList": ["Neural Translation", "Industry Glossaries", "Quality Assurance", "Batch Processing", "API Access", "Human Review Option"]
};

const features = [
  { icon: Zap, title: "Neural Translation", description: "LuMay SmartTranslation uses state-of-the-art neural machine translation technology for natural, fluent translations. LuMay's AI understands context, idioms, and cultural nuances to deliver translations that read as if written by native speakers." },
  { icon: BookOpen, title: "Industry Glossaries", description: "LuMay SmartTranslation maintains custom terminology databases for your specific industry and brand. LuMay ensures consistent use of approved terms, product names, and specialized vocabulary across all translated content." },
  { icon: Shield, title: "Quality Assurance", description: "LuMay SmartTranslation implements multi-step validation including automated quality checks, consistency verification, and optional human review. LuMay's QA processes ensure accuracy and consistency across large translation volumes." },
  { icon: Layers, title: "Batch Processing", description: "LuMay SmartTranslation efficiently handles large document volumes with intelligent batch processing. LuMay can translate thousands of pages while maintaining terminology consistency and meeting tight deadlines." },
  { icon: FileText, title: "API Access", description: "LuMay SmartTranslation provides comprehensive REST APIs for seamless integration into your existing workflows. LuMay enables real-time translation within applications, websites, and content management systems." },
  { icon: Users, title: "Human Review Option", description: "LuMay SmartTranslation offers optional expert human review for mission-critical content. LuMay's network of professional translators provides additional quality assurance for high-stakes documents." },
];

const languages = [
  "English", "Spanish", "French", "German", "Chinese", "Japanese",
  "Korean", "Portuguese", "Italian", "Dutch", "Russian", "Arabic",
  "Hindi", "Thai", "Vietnamese", "Polish", "Turkish", "Swedish"
];

const capabilities = [
  { icon: Brain, title: "Context Understanding", description: "LuMay SmartTranslation analyzes full document context to deliver accurate translations. LuMay understands that the same word can have different meanings in different contexts and selects the appropriate translation." },
  { icon: Building2, title: "Enterprise Scale", description: "LuMay SmartTranslation handles enterprise-scale translation needs with consistent quality. LuMay processes millions of words monthly while maintaining terminology consistency and brand voice." },
  { icon: Clock, title: "Real-time Translation", description: "LuMay SmartTranslation provides instant translation for live content through APIs. LuMay enables real-time multilingual customer support, website localization, and application internationalization." },
  { icon: Target, title: "Domain Specialization", description: "LuMay SmartTranslation includes specialized models for legal, medical, financial, and technical content. LuMay's domain-specific training ensures accurate handling of specialized terminology and concepts." },
];

const useCases = [
  "Localize websites and applications for global markets",
  "Translate technical documentation and manuals",
  "Enable multilingual customer support content",
  "Translate marketing materials while preserving brand voice",
  "Process legal contracts and compliance documents",
  "Translate medical records and clinical documents",
  "Localize e-commerce product catalogs",
  "Enable real-time multilingual communication"
];

const faqs = [
  {
    question: "How accurate is LuMay SmartTranslation compared to human translation?",
    answer: "LuMay SmartTranslation achieves near-human quality for most content types, with accuracy rates exceeding 95% for general business content. For specialized domains like legal, medical, and technical content, LuMay's domain-specific models deliver even higher accuracy. LuMay offers optional human review for mission-critical content requiring 100% accuracy assurance."
  },
  {
    question: "Which languages does LuMay SmartTranslation support?",
    answer: "LuMay SmartTranslation supports 100+ languages including all major world languages and many regional varieties. LuMay offers high-quality translation between any language pair, not just to/from English. LuMay's language coverage continues to expand, with new languages and regional variants added regularly."
  },
  {
    question: "How does LuMay SmartTranslation handle industry terminology?",
    answer: "LuMay SmartTranslation uses custom glossaries and terminology databases to ensure consistent handling of industry-specific terms. You can upload approved terminology lists, and LuMay will use these terms consistently across all translations. LuMay also offers pre-built glossaries for legal, medical, financial, and technical domains."
  },
  {
    question: "Can LuMay SmartTranslation preserve formatting and layout?",
    answer: "Yes, LuMay SmartTranslation preserves document formatting including styles, tables, images, and layouts. LuMay supports major file formats including Word, PowerPoint, Excel, PDF, HTML, XML, JSON, and many more. LuMay's translation engine understands document structure and maintains it in the translated output."
  },
  {
    question: "How does LuMay SmartTranslation ensure translation quality?",
    answer: "LuMay SmartTranslation implements multiple quality assurance steps including automated consistency checks, terminology verification, fluency scoring, and optional human review. LuMay's QA catches errors, inconsistencies, and unnatural phrasing. LuMay provides quality metrics and confidence scores for every translation."
  },
  {
    question: "Can LuMay SmartTranslation handle confidential documents?",
    answer: "Yes, LuMay SmartTranslation is designed for enterprise security with end-to-end encryption, secure data handling, and strict privacy controls. LuMay is SOC 2 Type II certified and offers data residency options for regulated industries. LuMay never uses your content to train public models—your data remains private."
  },
  {
    question: "How does LuMay SmartTranslation integrate with existing systems?",
    answer: "LuMay SmartTranslation provides REST APIs for seamless integration with content management systems, product databases, support platforms, and custom applications. LuMay offers pre-built connectors for popular platforms including WordPress, Drupal, Contentful, and Salesforce. LuMay's API enables real-time translation within your existing workflows."
  },
  {
    question: "What is the turnaround time for LuMay SmartTranslation?",
    answer: "LuMay SmartTranslation provides instant translation for API requests and batch processing typically completes within hours even for large document sets. LuMay's real-time API delivers translations in milliseconds for live content. Projects requiring human review typically add 24-48 hours depending on volume and language pair."
  },
  {
    question: "How does LuMay SmartTranslation handle brand voice and style?",
    answer: "LuMay SmartTranslation can be configured with style guides that define your brand's voice, tone, and preferences. LuMay maintains consistent brand voice across languages, adapting cultural nuances while preserving your identity. LuMay's style learning improves over time as you provide feedback on translations."
  },
  {
    question: "Can LuMay SmartTranslation translate websites in real-time?",
    answer: "Yes, LuMay SmartTranslation offers JavaScript integration for real-time website translation. LuMay can translate page content dynamically as visitors access your site, or pre-translate content for static localization. LuMay's CDN delivery ensures fast page loads for visitors worldwide."
  },
  {
    question: "How does LuMay SmartTranslation pricing work?",
    answer: "LuMay SmartTranslation pricing is based on word volume with tiered rates that decrease at higher volumes. LuMay offers monthly and annual plans with predictable pricing. Human review, specialized domains, and premium language pairs may have additional costs. Contact LuMay sales for a customized quote based on your translation needs."
  },
  {
    question: "What support does LuMay provide for SmartTranslation?",
    answer: "LuMay provides 24/7 technical support for SmartTranslation customers with dedicated account managers for enterprise accounts. LuMay offers implementation support, API integration assistance, and ongoing optimization. LuMay's localization experts can advise on global content strategy and best practices."
  }
];

export default function SmartTranslation() {
  return (
    <Layout>
      <Helmet>
        <title>SmartTranslation - AI-Powered Enterprise Language Services | LuMay Enterprise AI</title>
        <meta name="description" content="LuMay SmartTranslation delivers AI-powered translation in 100+ languages with industry-leading accuracy. Neural machine translation with custom glossaries, quality assurance, and seamless API integration for enterprise localization." />
        <meta name="keywords" content="LuMay SmartTranslation, AI translation, neural translation, enterprise localization, language services, multilingual content, translation API, document translation, website localization, machine translation" />
        <link rel="canonical" href="https://lumay-agentic-ai.42web.io/products/smarttranslation" />
        
        {/* Open Graph */}
        <meta property="og:title" content="SmartTranslation - AI-Powered Enterprise Translation | LuMay" />
        <meta property="og:description" content="LuMay SmartTranslation delivers neural translation in 100+ languages with custom glossaries and enterprise-grade quality." />
        <meta property="og:url" content="https://lumay-agentic-ai.42web.io/products/smarttranslation" />
        <meta property="og:type" content="product" />
        <meta property="og:site_name" content="LuMay Enterprise AI" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SmartTranslation - AI Translation | LuMay" />
        <meta name="twitter:description" content="Neural translation in 100+ languages. Custom glossaries. Enterprise-grade quality and API integration." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(productStructuredData)}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">LuMay Product</span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-2 mb-6 text-foreground">
                SmartTranslation
              </h1>
              <p className="text-xl text-primary font-medium mb-4">AI-Powered Enterprise Language Services</p>
              <p className="text-lg text-muted-foreground mb-6">
                LuMay SmartTranslation breaks down language barriers with context-aware neural translation that preserves meaning, tone, and intent across 100+ languages. Unlike basic translation tools, LuMay SmartTranslation understands your industry, learns your terminology, and maintains your brand voice in every language.
              </p>
              <p className="text-muted-foreground mb-8">
                Organizations using LuMay SmartTranslation accelerate global expansion, reduce translation costs by 60%, and deliver consistent multilingual experiences across all customer touchpoints. LuMay's enterprise-grade platform handles everything from real-time API translation to large-scale document localization with built-in quality assurance.
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
                <Globe className="w-32 h-32 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-16 bg-background border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-muted-foreground mb-8">100+ Languages Supported by LuMay SmartTranslation</p>
          <div className="flex flex-wrap justify-center gap-3">
            {languages.map((lang) => (
              <div key={lang} className="px-4 py-2 bg-secondary/50 rounded-full border border-border">
                <span className="text-foreground text-sm">{lang}</span>
              </div>
            ))}
            <div className="px-4 py-2 bg-primary/20 rounded-full border border-primary/30">
              <span className="text-primary text-sm">+82 more</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">
              Why Enterprises Choose LuMay SmartTranslation
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p>
                In today's global economy, language should never be a barrier to reaching customers, partners, or employees. LuMay SmartTranslation provides the translation capabilities enterprises need to operate seamlessly across languages, combining the speed and scalability of AI with the quality and nuance traditionally available only through human translation.
              </p>
              <p>
                LuMay SmartTranslation's neural translation engine represents a significant advancement over traditional machine translation. By understanding context, idioms, and cultural nuances, LuMay produces translations that read naturally and accurately convey your intended message. Whether you're translating technical documentation, marketing content, or legal contracts, LuMay's domain-specific models ensure appropriate handling of specialized terminology.
              </p>
              <p>
                The platform's terminology management capabilities are essential for enterprise consistency. LuMay SmartTranslation maintains custom glossaries that ensure your approved terms, product names, and brand language are used consistently across all translated content. This consistency is crucial for maintaining brand integrity and avoiding confusion as you communicate across languages.
              </p>
              <p>
                LuMay SmartTranslation integrates seamlessly into your existing workflows through comprehensive APIs. Whether you need real-time translation for customer support, batch processing for documentation, or website localization for global reach, LuMay provides the connectivity and flexibility to meet your requirements. LuMay's enterprise-grade security ensures your confidential content remains protected throughout the translation process.
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
              Enterprise Translation from LuMay
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              LuMay SmartTranslation goes beyond word-for-word translation to deliver natural, contextually accurate content that resonates with global audiences. Explore the capabilities that make LuMay SmartTranslation the choice for enterprise localization.
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
              Intelligent Language Technology from LuMay
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

      {/* Demo */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Use Cases</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
                Context-Aware Translation with LuMay SmartTranslation
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                LuMay SmartTranslation understands context, preserves meaning, and adapts to your brand voice across all languages. Discover how enterprises leverage LuMay for global communication.
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
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">English (Original)</p>
                  <div className="bg-background/50 rounded-lg p-4 border border-border">
                    <p className="text-foreground">"LuMay's cutting-edge enterprise agentic AI platform delivers intelligent automation while maintaining seamless user experiences and enterprise-grade security."</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">German (LuMay Translation)</p>
                  <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                    <p className="text-foreground">"LuMays hochmoderne Enterprise-KI-Plattform für agentische Automatisierung bietet intelligente Prozessautomatisierung bei gleichzeitig nahtloser Benutzererfahrung und Sicherheit auf Unternehmensebene."</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Japanese (LuMay Translation)</p>
                  <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                    <p className="text-foreground">"LuMayの最先端エンタープライズ・エージェンティックAIプラットフォームは、シームレスなユーザー体験とエンタープライズグレードのセキュリティを維持しながら、インテリジェントな自動化を実現します。"</p>
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
                Frequently Asked Questions About LuMay SmartTranslation
              </h2>
              <p className="text-muted-foreground text-lg">
                Find answers to common questions about LuMay SmartTranslation's neural translation capabilities, language support, and enterprise features.
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
            Ready to Go Global with LuMay SmartTranslation?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Break down language barriers and reach customers worldwide with LuMay SmartTranslation. Experience the power of context-aware AI translation with a personalized demo.
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