import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { PageBreadcrumb } from "@/components/shared/PageBreadcrumb";
import { 
  ArrowRight, 
  Factory, 
  CheckCircle, 
  TrendingUp, 
  Shield, 
  Cog,
  Wrench,
  Package,
  Activity,
  Clock,
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
    icon: Activity,
    title: "Predictive Maintenance",
    description: "SmartSense monitors equipment health in real-time, predicting failures before they occur and optimizing maintenance schedules to maximize uptime."
  },
  {
    icon: Cog,
    title: "Process Optimization",
    description: "LuMay AI agents continuously analyze production processes, identifying inefficiencies and recommending optimizations to improve yield and quality."
  },
  {
    icon: Package,
    title: "Supply Chain Intelligence",
    description: "SmartTrends provides demand forecasting and supply chain visibility, ensuring materials are available when needed while minimizing inventory costs."
  },
  {
    icon: BarChart3,
    title: "Quality Control Automation",
    description: "AI-powered quality inspection and defect detection reduces waste, improves product quality, and ensures compliance with specifications."
  },
  {
    icon: Wrench,
    title: "Workforce Management",
    description: "SmartFlow optimizes scheduling, task allocation, and training, ensuring the right skills are deployed at the right time for maximum productivity."
  },
  {
    icon: Shield,
    title: "Safety & Compliance",
    description: "SmartOCG Compliance monitors safety protocols, environmental regulations, and quality standards, ensuring continuous compliance across operations."
  }
];

const benefits = [
  "35% reduction in unplanned downtime",
  "25% improvement in overall equipment effectiveness (OEE)",
  "40% faster quality issue detection",
  "30% reduction in inventory carrying costs",
  "Real-time visibility across production operations",
  "Seamless integration with MES and ERP systems"
];

const useCases = [
  {
    title: "AI-Powered Equipment Monitoring",
    description: "LuMay SmartSense integrates with IoT sensors and equipment PLCs to monitor vibration, temperature, and performance metrics, predicting failures and scheduling maintenance proactively."
  },
  {
    title: "Production Planning Optimization",
    description: "AI agents analyze demand forecasts, capacity constraints, and material availability to generate optimized production schedules that maximize throughput and on-time delivery."
  },
  {
    title: "Automated Quality Inspection",
    description: "SmartSense analyzes visual inspection data and quality metrics to detect defects earlier in the process, reducing scrap and rework while improving customer satisfaction."
  },
  {
    title: "Supplier Performance Management",
    description: "LuMay monitors supplier quality, delivery performance, and risk factors, automatically alerting procurement teams to issues and recommending corrective actions."
  }
];

const faqs = [
  {
    question: "How does LuMay integrate with manufacturing equipment and systems?",
    answer: "LuMay supports integration with manufacturing systems through OPC-UA, MQTT, Modbus, and other industrial protocols. We connect with major MES platforms including Siemens, Rockwell, and SAP Manufacturing, as well as ERP systems. Our IoT gateway handles edge data collection while ensuring security and reliability for shop floor environments."
  },
  {
    question: "What types of predictive maintenance does LuMay support?",
    answer: "LuMay supports condition-based and predictive maintenance for various equipment types including rotating machinery, pumps, compressors, conveyors, and production lines. Our AI analyzes vibration, temperature, current, pressure, and other sensor data to predict failures, estimate remaining useful life, and optimize maintenance timing."
  },
  {
    question: "How does LuMay handle real-time data from manufacturing operations?",
    answer: "LuMay processes high-volume, high-velocity manufacturing data through our edge computing and streaming architecture. We support real-time data ingestion from thousands of sensors and data points, enabling millisecond-level anomaly detection and rapid response to production issues. Data is processed locally for latency-critical applications."
  },
  {
    question: "Can LuMay optimize production scheduling across multiple plants?",
    answer: "Yes, LuMay provides enterprise-wide production optimization across multiple plants and production lines. Our AI considers capacity, capability, material availability, and logistics to generate optimized schedules. We support constraint-based scheduling, finite capacity planning, and what-if scenario analysis."
  },
  {
    question: "How does LuMay support quality management in manufacturing?",
    answer: "LuMay provides comprehensive quality management including SPC (Statistical Process Control), automated defect detection, root cause analysis, and CAPA workflow automation. SmartSense analyzes quality data in real-time to identify out-of-control conditions, while SmartFlow automates quality-related workflows and documentation."
  },
  {
    question: "What safety and compliance capabilities does LuMay offer?",
    answer: "SmartOCG Compliance monitors safety metrics, environmental parameters, and regulatory requirements in real-time. We support ISO 9001, ISO 14001, OSHA, and industry-specific regulations. AI agents track compliance status, identify potential violations, and automate corrective action workflows before issues become violations."
  },
  {
    question: "How does LuMay help with supply chain disruptions?",
    answer: "LuMay provides supply chain visibility and risk management through supplier monitoring, demand sensing, and scenario planning. SmartTrends identifies potential disruptions early, enabling proactive mitigation. Our platform supports alternative supplier identification, expedite recommendations, and demand reallocation during disruptions."
  },
  {
    question: "Can LuMay support lean manufacturing and continuous improvement?",
    answer: "Yes, LuMay enables data-driven lean manufacturing and continuous improvement. Our analytics identify waste, variability, and improvement opportunities across operations. AI agents surface insights that support kaizen events, value stream mapping, and process improvement initiatives. We track improvement metrics over time."
  },
  {
    question: "What energy management capabilities does LuMay provide?",
    answer: "LuMay monitors and optimizes energy consumption across manufacturing operations. SmartSense tracks energy usage by equipment, line, and facility, identifying inefficiencies and optimization opportunities. We support demand response, peak shaving, and sustainability reporting for manufacturing energy consumption."
  },
  {
    question: "How does LuMay handle product traceability and serialization?",
    answer: "LuMay supports full product traceability from raw materials through finished goods. We integrate with serialization systems and maintain complete genealogy records. In the event of quality issues, our platform enables rapid lot containment and targeted recalls. We support FDA 21 CFR Part 11 and EU serialization requirements."
  },
  {
    question: "What is the implementation timeline for manufacturing?",
    answer: "LuMay manufacturing implementations typically span 8-16 weeks depending on scope and integration complexity. We follow a phased approach starting with data integration and visualization, then adding predictive and optimization capabilities. Our team includes manufacturing technology specialists who understand shop floor environments."
  },
  {
    question: "How does LuMay support workforce training and development?",
    answer: "LuMay helps optimize workforce effectiveness through skills tracking, training management, and performance analytics. AI agents identify skill gaps, recommend training, and track certification status. SmartAssist provides on-demand support for operators with procedure guidance and troubleshooting assistance."
  }
];

export default function Manufacturing() {
  return (
    <Layout>
      <Helmet>
        <title>Manufacturing & Industry 4.0 AI | LuMay Enterprise Agentic AI Platform</title>
        <meta name="description" content="Transform manufacturing with LuMay's AI agents. Enable predictive maintenance, optimize production, improve quality, and drive Industry 4.0 initiatives with enterprise AI." />
        <meta name="keywords" content="manufacturing AI, Industry 4.0, predictive maintenance, smart factory, production optimization, LuMay manufacturing, industrial AI, quality AI" />
        <link rel="canonical" href="https://lumay-agentic-ai.42web.io/industries/manufacturing" />
        <meta property="og:title" content="Manufacturing & Industry 4.0 AI | LuMay Enterprise Agentic AI Platform" />
        <meta property="og:description" content="Transform manufacturing with LuMay's AI agents. Enable predictive maintenance, optimize production, and drive Industry 4.0." />
        <meta property="og:url" content="https://lumay-agentic-ai.42web.io/industries/manufacturing" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "LuMay Manufacturing & Industry 4.0 AI Solutions",
            "description": "Enterprise AI platform for manufacturing including predictive maintenance, production optimization, quality control, and supply chain intelligence.",
            "provider": {
              "@type": "Organization",
              "name": "LuMay",
              "url": "https://lumay-agentic-ai.42web.io"
            },
            "serviceType": "Manufacturing AI",
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
            { label: "Manufacturing" }
          ]} />
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Factory className="w-4 h-4" />
              Industry Solutions
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Manufacturing & Industry 4.0 <span className="text-gradient">AI Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Accelerate your Industry 4.0 transformation with LuMay's autonomous AI agents. Predict equipment failures, optimize production, and drive operational excellence with intelligent automation built for manufacturing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg" asChild>
                <Link to="/contact">
                  Schedule Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg" asChild>
                <Link to="/products/smartsense">
                  Explore SmartSense
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
              Intelligent Manufacturing Transformation with LuMay
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Manufacturing is entering a new era of intelligence. Industry 4.0 technologies—IoT sensors, advanced analytics, and artificial intelligence—are creating opportunities to optimize every aspect of operations. LuMay's enterprise agentic AI platform helps manufacturers seize these opportunities by deploying autonomous AI agents that monitor, analyze, predict, and optimize across the production environment.
              </p>
              <p>
                LuMay understands the unique demands of manufacturing environments. Our platform is built for the high-volume, real-time data streams that characterize modern production facilities. We integrate with shop floor systems—PLCs, SCADA, MES, and ERP—to create unified visibility and intelligence across operations. AI agents operate reliably in demanding industrial environments, delivering the uptime and performance that manufacturing requires.
              </p>
              <p>
                The LuMay manufacturing platform addresses the full spectrum of operational challenges. SmartSense enables predictive maintenance that prevents unplanned downtime and extends equipment life. SmartTrends optimizes production planning and inventory management. SmartFlow automates quality workflows and ensures compliance with safety and regulatory requirements. Together, these capabilities drive measurable improvements in OEE, quality, and profitability.
              </p>
              <p>
                Manufacturers implementing LuMay typically achieve 35% reduction in unplanned downtime, 25% improvement in overall equipment effectiveness, and significant quality improvements. Our platform scales from pilot implementations on single production lines to enterprise-wide deployments across global manufacturing networks.
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
              AI-Powered Manufacturing Capabilities
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              LuMay delivers comprehensive AI solutions for modern manufacturing operations.
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
              Measurable Manufacturing Impact
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
              Manufacturing Use Cases
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover how LuMay AI agents transform manufacturing operations and productivity.
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
              The Future of Manufacturing AI with LuMay
            </h2>
            
            <h3 className="text-foreground">The Industry 4.0 Opportunity</h3>
            <p>
              Industry 4.0 represents the fourth industrial revolution—the integration of cyber-physical systems, the Internet of Things, and advanced analytics into manufacturing operations. LuMay's agentic AI platform accelerates Industry 4.0 adoption by providing the intelligent layer that transforms data into action. Our autonomous AI agents operate continuously, monitoring operations, detecting anomalies, predicting issues, and optimizing performance without constant human oversight.
            </p>
            
            <h3 className="text-foreground">Predictive Maintenance Excellence</h3>
            <p>
              Unplanned equipment failures are among the most costly events in manufacturing, resulting in production losses, quality issues, and emergency repair expenses. LuMay SmartSense transforms maintenance from reactive to predictive. Our AI analyzes sensor data—vibration, temperature, current, pressure, and more—to detect subtle changes that indicate impending failures. Maintenance can be scheduled during planned windows, parts ordered in advance, and failures prevented before they occur.
            </p>
            
            <h3 className="text-foreground">Production Optimization</h3>
            <p>
              Optimizing production in complex manufacturing environments requires balancing numerous constraints and variables. LuMay AI agents analyze capacity, demand, material availability, quality requirements, and energy costs to generate optimized production schedules. Real-time adjustments respond to disruptions, quality issues, and changing priorities. The result is improved throughput, better on-time delivery, and more efficient resource utilization.
            </p>
            
            <h3 className="text-foreground">Quality Intelligence</h3>
            <p>
              Quality is the foundation of manufacturing competitiveness. LuMay brings AI intelligence to quality management, detecting defects earlier in the process and identifying root causes faster. SmartSense analyzes inspection data, process parameters, and material characteristics to predict quality issues before they occur. Statistical process control is automated, with AI agents alerting operators to out-of-control conditions and recommending corrective actions.
            </p>
            
            <h3 className="text-foreground">Supply Chain Resilience</h3>
            <p>
              Global supply chains face unprecedented volatility, and manufacturers need visibility and agility to navigate disruptions. LuMay SmartTrends provides supply chain intelligence that enables proactive management. AI agents monitor supplier performance, track inbound materials, and identify potential disruptions early. Demand sensing capabilities improve forecast accuracy, while scenario planning tools help evaluate alternatives when disruptions occur.
            </p>
            
            <h3 className="text-foreground">Connected Workforce</h3>
            <p>
              Manufacturing excellence depends on skilled, engaged workers. LuMay enhances workforce effectiveness through intelligent support and optimization. SmartAssist provides on-demand guidance for operators, answering questions and walking through procedures. Skills tracking and training recommendations ensure workers develop capabilities aligned with operational needs. Scheduling optimization matches skills to requirements while respecting preferences and regulations.
            </p>
            
            <h3 className="text-foreground">Safety and Compliance</h3>
            <p>
              Safety is paramount in manufacturing environments, and regulatory compliance is increasingly complex. LuMay SmartOCG Compliance monitors safety metrics, environmental parameters, and regulatory requirements in real-time. AI agents identify potential compliance issues before they become violations, automate documentation, and ensure audit readiness. The platform supports ISO, OSHA, EPA, and industry-specific regulations.
            </p>
            
            <h3 className="text-foreground">Sustainability in Manufacturing</h3>
            <p>
              Manufacturers face growing pressure to reduce environmental impact while maintaining competitiveness. LuMay supports sustainability initiatives through energy optimization, waste reduction, and emissions monitoring. Our AI identifies opportunities to reduce consumption, optimize processes for efficiency, and track progress toward sustainability goals. This intelligence supports both cost reduction and environmental responsibility.
            </p>
            
            <h3 className="text-foreground">Implementation Partnership</h3>
            <p>
              LuMay understands that successful manufacturing AI requires deep domain expertise and careful implementation. Our team includes manufacturing technology specialists who understand shop floor realities. We work closely with your operations, engineering, and IT teams to ensure successful deployment and adoption. Phased implementations allow you to demonstrate value quickly while building toward comprehensive transformation.
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
              Transform Your Manufacturing Operations
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Discover how LuMay's AI platform can reduce downtime, improve quality, and drive operational excellence across your manufacturing operations.
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
