import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { PageBreadcrumb } from "@/components/shared/PageBreadcrumb";
import { 
  ArrowRight, 
  ShoppingCart, 
  CheckCircle, 
  TrendingUp, 
  MessageSquare, 
  Package,
  Users,
  CreditCard,
  Search,
  Globe,
  Zap,
  BarChart3
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
    title: "AI-Powered Customer Support",
    description: "SmartAssist handles order inquiries, returns, product questions, and shipping updates 24/7, delivering personalized support that increases customer satisfaction."
  },
  {
    icon: TrendingUp,
    title: "Demand Forecasting",
    description: "SmartTrends analyzes sales patterns, market trends, and external factors to optimize inventory levels and prevent stockouts or overstock situations."
  },
  {
    icon: Search,
    title: "Intelligent Product Discovery",
    description: "AI-powered search and recommendations help customers find products faster while increasing average order values through personalized suggestions."
  },
  {
    icon: Package,
    title: "Supply Chain Optimization",
    description: "SmartFlow automates order fulfillment, supplier management, and logistics coordination for faster, more reliable delivery."
  },
  {
    icon: CreditCard,
    title: "Fraud Prevention",
    description: "SmartSense monitors transactions in real-time to detect and prevent fraudulent orders while minimizing false declines on legitimate purchases."
  },
  {
    icon: Globe,
    title: "Global Commerce Enablement",
    description: "SmartTranslation enables multilingual customer support and product content for seamless international expansion."
  }
];

const benefits = [
  "35% increase in customer satisfaction scores",
  "50% reduction in customer support ticket volume",
  "25% improvement in inventory turnover",
  "40% faster order processing times",
  "60% reduction in fraudulent transactions",
  "Seamless integration with major eCommerce platforms"
];

const useCases = [
  {
    title: "Automated Order Management",
    description: "LuMay AI agents handle order tracking, modifications, cancellations, and returns automatically, providing instant customer updates and freeing support teams for complex issues."
  },
  {
    title: "Personalized Shopping Experiences",
    description: "AI analyzes customer behavior, preferences, and purchase history to deliver personalized product recommendations, increasing conversion rates and average order values."
  },
  {
    title: "Inventory Optimization",
    description: "SmartTrends predicts demand across SKUs and channels, automatically generating purchase orders and rebalancing inventory across distribution centers."
  },
  {
    title: "Customer Retention Intelligence",
    description: "AI identifies at-risk customers and triggers personalized retention campaigns, loyalty offers, and win-back strategies to reduce churn and increase lifetime value."
  }
];

const faqs = [
  {
    question: "How does LuMay integrate with eCommerce platforms?",
    answer: "LuMay provides native integrations with major eCommerce platforms including Shopify, Magento, WooCommerce, BigCommerce, and Salesforce Commerce Cloud. We support standard APIs and webhooks for custom platforms. Integration typically takes 2-4 weeks and includes order management, customer data, inventory, and product catalog synchronization."
  },
  {
    question: "Can LuMay handle high-volume seasonal traffic spikes?",
    answer: "Absolutely. LuMay's cloud-native architecture automatically scales to handle traffic spikes during peak seasons like Black Friday, Cyber Monday, and holiday periods. Our platform has supported clients through 10x+ traffic increases without performance degradation. We recommend load testing before major sales events."
  },
  {
    question: "How does LuMay improve customer support efficiency?",
    answer: "LuMay SmartAssist typically handles 50-70% of customer inquiries automatically, including order tracking, returns initiation, product questions, and account updates. This reduces support ticket volume, decreases response times from hours to seconds, and allows human agents to focus on complex, high-value interactions."
  },
  {
    question: "What personalization capabilities does LuMay provide?",
    answer: "LuMay delivers personalization across the customer journey including product recommendations, search results ranking, email content, and promotional offers. Our AI analyzes real-time behavior, purchase history, and contextual signals to deliver relevant experiences. We support A/B testing and personalization rules customization."
  },
  {
    question: "How does LuMay prevent eCommerce fraud?",
    answer: "SmartSense provides real-time fraud detection analyzing transaction patterns, device fingerprints, behavioral signals, and network data. Our AI models detect various fraud types including payment fraud, account takeover, and promo abuse. The system balances fraud prevention with minimizing false declines on legitimate orders."
  },
  {
    question: "Can LuMay help with international eCommerce expansion?",
    answer: "Yes, LuMay supports global eCommerce through SmartTranslation for multilingual customer support and product content, multi-currency transaction handling, and region-specific compliance. Our AI agents can communicate with customers in their preferred language while maintaining brand voice consistency."
  },
  {
    question: "What inventory management features does LuMay offer?",
    answer: "SmartTrends provides demand forecasting, safety stock optimization, and automated replenishment recommendations. The system analyzes sales patterns, seasonality, market trends, and external factors to optimize inventory levels across channels and locations. We integrate with ERP and WMS systems for end-to-end visibility."
  },
  {
    question: "How does LuMay support omnichannel commerce?",
    answer: "LuMay provides unified customer intelligence and service across all channels including web, mobile, social, marketplace, and in-store. Customer interactions and preferences are synchronized across channels. AI agents maintain context as customers move between touchpoints, enabling seamless experiences."
  },
  {
    question: "What analytics and reporting does LuMay provide for eCommerce?",
    answer: "LuMay provides comprehensive analytics including customer behavior analysis, conversion funnel optimization, support performance metrics, and revenue attribution. SmartTrends delivers predictive analytics for demand, churn, and lifetime value. Dashboards and reports can be customized to your KPIs."
  },
  {
    question: "How quickly can LuMay be implemented for eCommerce?",
    answer: "Basic LuMay implementations for eCommerce typically take 4-8 weeks, with customer support automation often going live within 2-3 weeks. More comprehensive implementations including inventory optimization, personalization, and fraud prevention may take 8-12 weeks. We provide dedicated implementation support and training."
  },
  {
    question: "Does LuMay support subscription and recurring commerce?",
    answer: "Yes, LuMay supports subscription commerce models including subscription management, churn prediction, and subscriber retention automation. AI agents handle subscription modifications, billing inquiries, and renewal reminders. SmartTrends analyzes subscriber behavior to identify optimization opportunities."
  },
  {
    question: "How does LuMay handle product returns and exchanges?",
    answer: "LuMay automates the returns process from initiation through completion. AI agents guide customers through return requests, generate shipping labels, process refunds, and coordinate exchanges. The system analyzes return patterns to identify product quality issues and reduce return rates."
  }
];

export default function Ecommerce() {
  return (
    <Layout>
      <Helmet>
        <title>eCommerce & Retail AI | LuMay Enterprise Agentic AI Platform</title>
        <meta name="description" content="Transform eCommerce with LuMay's AI agents. Automate customer support, optimize inventory, personalize shopping experiences, and prevent fraud with enterprise AI." />
        <meta name="keywords" content="eCommerce AI, retail AI, customer support AI, inventory optimization, personalization AI, LuMay eCommerce, shopping AI, retail automation" />
        <link rel="canonical" href="https://lumay-agentic-ai.42web.io/industries/ecommerce" />
        <meta property="og:title" content="eCommerce & Retail AI | LuMay Enterprise Agentic AI Platform" />
        <meta property="og:description" content="Transform eCommerce with LuMay's AI agents. Automate customer support, optimize inventory, and personalize shopping experiences." />
        <meta property="og:url" content="https://lumay-agentic-ai.42web.io/industries/ecommerce" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "LuMay eCommerce & Retail AI Solutions",
            "description": "Enterprise AI platform for eCommerce including customer support automation, inventory optimization, personalization, and fraud prevention.",
            "provider": {
              "@type": "Organization",
              "name": "LuMay",
              "url": "https://lumay-agentic-ai.42web.io"
            },
            "serviceType": "eCommerce AI",
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
            { label: "eCommerce" }
          ]} />
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <ShoppingCart className="w-4 h-4" />
              Industry Solutions
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              eCommerce & Retail <span className="text-gradient">AI Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Revolutionize your eCommerce operations with LuMay's autonomous AI agents. Deliver exceptional customer experiences, optimize inventory, and drive growth with intelligent automation that scales with your business.
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
              Intelligent eCommerce Transformation with LuMay
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                The eCommerce landscape has never been more competitive. Customer expectations continue to rise, demanding personalized experiences, instant support, and seamless transactions across every touchpoint. LuMay's enterprise agentic AI platform empowers eCommerce businesses to meet these demands while optimizing operations and driving profitable growth.
              </p>
              <p>
                LuMay transforms eCommerce operations through intelligent automation that works around the clock. Our SmartAssist virtual agents handle customer inquiries with speed and accuracy that human teams alone cannot match—answering product questions, tracking orders, processing returns, and resolving issues instantly. This automation doesn't just reduce costs; it elevates customer satisfaction by eliminating wait times and providing consistent, helpful service.
              </p>
              <p>
                Beyond customer service, LuMay brings intelligence to every aspect of eCommerce operations. SmartTrends analyzes demand patterns to optimize inventory, preventing costly stockouts and overstock situations. Our AI-powered personalization delivers relevant product recommendations that increase conversion rates and average order values. SmartSense protects revenue through real-time fraud detection that catches bad actors while minimizing friction for legitimate customers.
              </p>
              <p>
                Whether you're a fast-growing direct-to-consumer brand, an established retailer expanding online presence, or a marketplace connecting buyers and sellers, LuMay provides the AI capabilities to compete and win. Our platform integrates seamlessly with your existing technology stack and scales effortlessly to handle seasonal peaks and business growth.
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
              AI-Powered eCommerce Capabilities
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              LuMay delivers comprehensive AI solutions for modern eCommerce success.
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
              Measurable eCommerce Impact
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
              eCommerce Use Cases
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover how LuMay AI agents transform eCommerce operations and customer experiences.
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
              The Future of eCommerce AI with LuMay
            </h2>
            
            <h3 className="text-foreground">The AI-Powered Commerce Revolution</h3>
            <p>
              eCommerce is undergoing a fundamental transformation as artificial intelligence moves from experimental technology to essential infrastructure. LuMay's agentic AI platform represents the next generation of commerce technology—autonomous AI agents that handle customer interactions, optimize operations, and drive growth without constant human oversight. This isn't about replacing human teams; it's about amplifying their capabilities and enabling them to focus on strategy, creativity, and high-value customer relationships.
            </p>
            
            <h3 className="text-foreground">Customer Experience Excellence</h3>
            <p>
              In eCommerce, customer experience is everything. LuMay SmartAssist transforms customer service from a cost center to a competitive advantage. AI agents provide instant, accurate responses to customer inquiries any time of day or night. They handle order tracking, product questions, returns, exchanges, and account management with the knowledge and patience that builds customer loyalty. When issues require human expertise, SmartAssist seamlessly escalates with full context, ensuring nothing falls through the cracks.
            </p>
            
            <h3 className="text-foreground">Personalization at Scale</h3>
            <p>
              Today's customers expect personalized experiences that anticipate their needs. LuMay's personalization engine analyzes customer behavior, purchase history, and contextual signals to deliver relevant product recommendations, search results, and promotional content. This personalization extends across the customer journey—from homepage content to email campaigns to customer service interactions. The result is higher conversion rates, increased average order values, and stronger customer relationships.
            </p>
            
            <h3 className="text-foreground">Inventory and Supply Chain Intelligence</h3>
            <p>
              Inventory is the lifeblood of eCommerce, and getting it right is crucial. Too much inventory ties up capital and leads to markdowns; too little results in stockouts and lost sales. LuMay SmartTrends brings predictive intelligence to inventory management, analyzing sales patterns, seasonality, market trends, and external factors to forecast demand accurately. The system automatically generates purchase recommendations and reorder alerts, ensuring you have the right products in the right places at the right times.
            </p>
            
            <h3 className="text-foreground">Fraud Prevention and Security</h3>
            <p>
              Fraud is a growing challenge for eCommerce, costing billions annually in lost revenue and chargebacks. LuMay SmartSense provides real-time fraud detection that protects your business without creating friction for legitimate customers. Our AI analyzes transaction patterns, device characteristics, behavioral signals, and network data to identify fraudulent orders before they ship. Machine learning models continuously improve as they learn from your specific fraud patterns.
            </p>
            
            <h3 className="text-foreground">Operational Automation</h3>
            <p>
              Behind every successful eCommerce operation is a web of processes that must execute flawlessly. LuMay SmartFlow automates these operational workflows—from order processing and fulfillment to vendor management and financial reconciliation. AI agents handle exceptions, resolve discrepancies, and keep orders moving through your fulfillment pipeline. This automation reduces errors, accelerates processing, and scales effortlessly during peak periods.
            </p>
            
            <h3 className="text-foreground">Global Commerce Enablement</h3>
            <p>
              Expanding internationally presents unique challenges including language barriers, cultural differences, and regulatory complexity. LuMay SmartTranslation enables multilingual customer support and product content that maintains brand voice while resonating with local audiences. AI agents communicate with customers in their preferred language, handle currency conversion, and navigate regional requirements to enable seamless global commerce.
            </p>
            
            <h3 className="text-foreground">Analytics and Continuous Optimization</h3>
            <p>
              Data-driven decision making is essential for eCommerce success. LuMay provides comprehensive analytics that illuminate every aspect of your business—customer behavior, conversion funnels, inventory performance, and operational efficiency. SmartTrends delivers predictive insights that help you anticipate trends and make proactive decisions. Continuous A/B testing and optimization ensure you're always improving.
            </p>
            
            <h3 className="text-foreground">Platform Integration Excellence</h3>
            <p>
              LuMay integrates seamlessly with your existing technology ecosystem. Whether you're on Shopify, Magento, WooCommerce, or a custom platform, our integration layer connects AI capabilities to your systems. We support major payment processors, shipping carriers, ERP systems, and marketing platforms. Implementation is fast and non-disruptive, with most clients going live within weeks.
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
              Transform Your eCommerce with AI
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Discover how LuMay's AI platform can boost customer satisfaction, optimize operations, and accelerate your eCommerce growth.
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
