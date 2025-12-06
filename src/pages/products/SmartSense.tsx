import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Activity, CheckCircle, AlertTriangle, BarChart3, Search, Bell, Cpu, TrendingUp, Shield, Zap, Clock, Database, Eye, Settings } from "lucide-react";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  { icon: Activity, title: "Real-time Monitoring", description: "LuMay SmartSense provides continuous 24/7 monitoring of all your systems, applications, and data streams. LuMay's monitoring agents capture millions of data points per second, ensuring complete visibility into your infrastructure health." },
  { icon: Cpu, title: "ML-powered Detection", description: "LuMay SmartSense uses advanced machine learning algorithms that learn your system's normal behavior patterns. LuMay's AI models automatically adapt to seasonal variations, growth patterns, and evolving baselines without manual reconfiguration." },
  { icon: Bell, title: "Custom Alert Rules", description: "LuMay SmartSense allows you to configure sophisticated alert rules based on your specific thresholds, conditions, and business logic. LuMay supports multi-condition alerts, correlation rules, and intelligent alert suppression to reduce noise." },
  { icon: Search, title: "Root Cause Analysis", description: "LuMay SmartSense automatically identifies the source of anomalies through AI-powered root cause analysis. LuMay's causal inference engine traces issues back through your system topology to pinpoint the origin." },
  { icon: TrendingUp, title: "Historical Trending", description: "LuMay SmartSense tracks patterns over time to predict and prevent future issues. LuMay's trend analysis identifies gradual degradation, capacity constraints, and seasonal patterns before they impact operations." },
  { icon: BarChart3, title: "Integration APIs", description: "LuMay SmartSense connects with your existing monitoring and alerting infrastructure through comprehensive REST and webhook APIs. LuMay integrates with PagerDuty, Slack, ServiceNow, and 50+ other platforms." },
];

const metrics = [
  { value: "99.9%", label: "Detection Accuracy" },
  { value: "<1s", label: "Alert Latency" },
  { value: "80%", label: "Fewer False Positives" },
  { value: "50%", label: "Faster Resolution" },
];

const capabilities = [
  { icon: Shield, title: "Security Monitoring", description: "LuMay SmartSense monitors security events, access patterns, and potential threats in real-time. LuMay's security anomaly detection identifies unusual behavior that may indicate breaches or insider threats." },
  { icon: Database, title: "Database Performance", description: "LuMay SmartSense tracks database query performance, connection pools, and resource utilization. LuMay identifies slow queries, locking issues, and capacity problems before they affect applications." },
  { icon: Eye, title: "Application Performance", description: "LuMay SmartSense monitors application response times, error rates, and throughput. LuMay's APM capabilities provide deep visibility into application behavior and user experience metrics." },
  { icon: Settings, title: "Infrastructure Health", description: "LuMay SmartSense tracks CPU, memory, disk, and network metrics across your infrastructure. LuMay's infrastructure monitoring supports cloud, on-premises, and hybrid environments." },
];

const useCases = [
  "Detect and resolve issues before customers are impacted",
  "Reduce mean time to detection (MTTD) by 90%",
  "Eliminate false positive alerts that waste team time",
  "Automate incident response with intelligent workflows",
  "Predict capacity needs and prevent outages",
  "Monitor complex microservices architectures",
  "Ensure SLA compliance with proactive alerting",
  "Correlate events across distributed systems"
];

const faqs = [
  {
    question: "What types of systems can LuMay SmartSense monitor?",
    answer: "LuMay SmartSense monitors virtually any system that produces metrics, logs, or events. This includes cloud infrastructure (AWS, Azure, GCP), on-premises servers, databases, applications, network devices, containers, Kubernetes clusters, and custom applications. LuMay's extensible agent architecture and API integrations ensure comprehensive coverage of your entire technology stack."
  },
  {
    question: "How does LuMay SmartSense reduce false positive alerts?",
    answer: "LuMay SmartSense uses advanced machine learning to establish dynamic baselines that adapt to your system's normal behavior patterns. Unlike static thresholds, LuMay's AI understands daily/weekly patterns, seasonal variations, and gradual changes. LuMay also employs multi-signal correlation, requiring multiple indicators before triggering alerts, and intelligent suppression to eliminate alert storms."
  },
  {
    question: "How quickly can LuMay SmartSense detect anomalies?",
    answer: "LuMay SmartSense provides sub-second anomaly detection with typical alert latency under one second from event occurrence to notification. LuMay's stream processing architecture analyzes millions of data points in real-time, enabling immediate detection of sudden changes, threshold breaches, and unusual patterns without waiting for batch processing."
  },
  {
    question: "What integrations does LuMay SmartSense support?",
    answer: "LuMay SmartSense integrates with 50+ platforms including alerting systems (PagerDuty, Opsgenie, VictorOps), collaboration tools (Slack, Microsoft Teams), ticketing systems (ServiceNow, Jira), and CI/CD pipelines. LuMay also provides REST APIs, webhooks, and a Terraform provider for custom integrations and infrastructure-as-code deployments."
  },
  {
    question: "How does LuMay SmartSense perform root cause analysis?",
    answer: "LuMay SmartSense uses AI-powered causal inference to trace anomalies back through your system topology. LuMay automatically maps dependencies between services, correlates events across systems, and identifies the originating issue. The root cause analysis considers timing, topology, and historical patterns to provide accurate attribution even in complex distributed systems."
  },
  {
    question: "Can LuMay SmartSense predict future issues?",
    answer: "Yes, LuMay SmartSense includes predictive capabilities that analyze trends to forecast future issues. LuMay's predictive models identify gradual performance degradation, approaching capacity limits, and seasonal patterns. LuMay can alert teams days or weeks before a predicted issue would impact operations, enabling proactive intervention."
  },
  {
    question: "How does LuMay SmartSense handle high data volumes?",
    answer: "LuMay SmartSense is built on a distributed, horizontally scalable architecture that handles millions of metrics per second. LuMay's stream processing engine performs real-time analysis without requiring data storage first, ensuring consistent performance regardless of data volume. LuMay supports configurable data retention and intelligent sampling for cost optimization."
  },
  {
    question: "What security features does LuMay SmartSense include?",
    answer: "LuMay SmartSense implements enterprise-grade security including end-to-end encryption, role-based access controls, SSO integration, and comprehensive audit logging. LuMay is SOC 2 Type II certified and supports deployment in regulated environments including healthcare (HIPAA) and financial services (PCI DSS). LuMay also offers on-premises deployment options."
  },
  {
    question: "How long does LuMay SmartSense take to learn normal behavior?",
    answer: "LuMay SmartSense typically establishes accurate baselines within 24-48 hours of deployment. LuMay's machine learning algorithms quickly identify patterns in your data while continuously refining models as more data becomes available. For complex seasonal patterns, LuMay may take 1-2 weeks to fully optimize predictions, but provides value immediately with static threshold detection."
  },
  {
    question: "Can LuMay SmartSense automate incident response?",
    answer: "Yes, LuMay SmartSense integrates with LuMay SmartFlow to trigger automated incident response workflows. When SmartSense detects an anomaly, it can automatically execute runbooks, scale resources, restart services, page on-call engineers, or create tickets. LuMay's automation reduces manual intervention and accelerates mean time to resolution (MTTR)."
  },
  {
    question: "How does LuMay SmartSense pricing work?",
    answer: "LuMay SmartSense pricing is based on the number of hosts monitored and data volume ingested. LuMay offers flexible pricing tiers for different organization sizes, with volume discounts for larger deployments. Contact LuMay sales for a customized quote based on your specific monitoring requirements and infrastructure scale."
  },
  {
    question: "What support does LuMay provide for SmartSense?",
    answer: "LuMay provides 24/7 technical support for SmartSense enterprise customers, including dedicated support engineers and customer success managers. LuMay offers comprehensive documentation, training programs, and professional services for custom implementations. LuMay's support SLAs ensure rapid response times for critical issues affecting production monitoring."
  }
];

export default function SmartSense() {
  return (
    <Layout>
      <Helmet>
        <title>SmartSense - AI-Powered Real-Time Anomaly Detection | LuMay Enterprise AI</title>
        <meta name="description" content="LuMay SmartSense delivers real-time anomaly detection with 99.9% accuracy and sub-second alerting. AI-powered monitoring for enterprise systems, applications, and infrastructure. Reduce false positives by 80%." />
        <meta name="keywords" content="LuMay SmartSense, anomaly detection, real-time monitoring, ML monitoring, predictive alerts, system monitoring, AI observability, AIOps, IT operations, infrastructure monitoring, application performance monitoring" />
        <link rel="canonical" href="https://lumay-agentic-ai.42web.io/products/smartsense" />
        
        {/* Open Graph */}
        <meta property="og:title" content="SmartSense - AI-Powered Real-Time Anomaly Detection | LuMay" />
        <meta property="og:description" content="LuMay SmartSense delivers real-time anomaly detection with 99.9% accuracy. AI-powered monitoring for enterprise systems with sub-second alerting." />
        <meta property="og:url" content="https://lumay-agentic-ai.42web.io/products/smartsense" />
        <meta property="og:type" content="product" />
        <meta property="og:site_name" content="LuMay Enterprise AI" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SmartSense - Real-Time Anomaly Detection | LuMay" />
        <meta name="twitter:description" content="AI-powered monitoring with 99.9% detection accuracy, sub-second alerts, and 80% fewer false positives." />
      </Helmet>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Activity className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">LuMay Product</span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-2 mb-6 text-foreground">
                SmartSense
              </h1>
              <p className="text-xl text-primary font-medium mb-4">AI-Powered Real-Time Anomaly Detection</p>
              <p className="text-lg text-muted-foreground mb-6">
                LuMay SmartSense revolutionizes how enterprises monitor their systems, applications, and infrastructure. Using advanced machine learning algorithms, LuMay SmartSense identifies patterns, predicts issues, and alerts your team before problems impact operations. LuMay's intelligent monitoring platform delivers 99.9% detection accuracy with sub-second alert latency, enabling organizations to shift from reactive firefighting to proactive operations.
              </p>
              <p className="text-muted-foreground mb-8">
                Unlike traditional threshold-based monitoring tools, LuMay SmartSense automatically learns your system's normal behavior and adapts to changes without manual configuration. LuMay's AI-powered approach reduces false positive alerts by 80% while catching subtle anomalies that rule-based systems miss.
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
                <Activity className="w-32 h-32 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 bg-background border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <p className="font-display text-4xl font-bold text-primary mb-2">{metric.value}</p>
                <p className="text-muted-foreground">{metric.label}</p>
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
              Why Enterprises Choose LuMay SmartSense for Anomaly Detection
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p>
                In today's complex IT environments, traditional monitoring approaches simply cannot keep pace with the volume and velocity of data generated by modern applications and infrastructure. LuMay SmartSense represents a paradigm shift in how organizations approach observability, combining the power of artificial intelligence with deep domain expertise in enterprise operations.
              </p>
              <p>
                LuMay SmartSense continuously analyzes millions of metrics, logs, and events across your entire technology stack. Rather than relying on static thresholds that quickly become outdated, LuMay's machine learning models dynamically adapt to your system's evolving behavior patterns. This intelligent approach enables LuMay SmartSense to detect subtle anomalies that would be invisible to traditional monitoring tools while dramatically reducing the alert noise that plagues operations teams.
              </p>
              <p>
                The platform's real-time capabilities ensure that when issues do occur, your team knows about them immediately. LuMay SmartSense delivers sub-second alert latency, meaning the time between an anomaly occurring and your team being notified is measured in milliseconds, not minutes. This rapid detection is critical for maintaining service level agreements and minimizing the business impact of incidents.
              </p>
              <p>
                Beyond detection, LuMay SmartSense provides powerful root cause analysis capabilities that help teams quickly identify the source of issues. LuMay's AI-powered causal inference engine automatically maps dependencies, correlates events across systems, and traces problems back to their origin. This accelerates mean time to resolution and helps teams build institutional knowledge about their systems.
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
              Intelligent Monitoring Capabilities from LuMay
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              LuMay SmartSense combines advanced AI with enterprise-grade reliability to deliver monitoring capabilities that traditional rule-based systems simply cannot match. Explore the core features that make LuMay SmartSense the choice for leading enterprises.
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
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Monitoring Domains</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
              Comprehensive Coverage Across Your Technology Stack
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              LuMay SmartSense provides specialized monitoring capabilities for every layer of your infrastructure. From security events to application performance, LuMay delivers deep visibility with intelligent analysis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={capability.title}
                className="card-gradient rounded-xl p-8 border border-border"
              >
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
                Transform Your Operations with LuMay SmartSense
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                LuMay SmartSense empowers operations teams to move from reactive incident response to proactive issue prevention. Discover how leading enterprises leverage LuMay's intelligent monitoring capabilities.
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
                <div className="flex items-start gap-4 p-4 bg-red-500/10 rounded-lg border border-red-500/30">
                  <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Critical Alert Detected by LuMay</p>
                    <p className="text-sm text-muted-foreground">CPU usage spike detected on server-prod-03. 95th percentile exceeded by 40%. LuMay SmartSense identified the root cause as a memory leak in the payment service.</p>
                    <p className="text-xs text-muted-foreground mt-2">2 minutes ago • Auto-remediation triggered</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
                  <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Warning from LuMay SmartSense</p>
                    <p className="text-sm text-muted-foreground">Unusual traffic pattern detected. API latency increased by 23%. LuMay predicts potential capacity issue in 6 hours at current growth rate.</p>
                    <p className="text-xs text-muted-foreground mt-2">15 minutes ago • Scaling recommendation sent</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-green-500/10 rounded-lg border border-green-500/30">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Issue Resolved</p>
                    <p className="text-sm text-muted-foreground">Database connection pool issue automatically resolved by LuMay SmartFlow integration. Service restored to normal operation.</p>
                    <p className="text-xs text-muted-foreground mt-2">1 hour ago • MTTR: 4 minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="card-gradient rounded-2xl p-8 border border-border space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Deploy LuMay Agents</p>
                    <p className="text-sm text-muted-foreground">Install lightweight agents or connect via API</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">LuMay Learns Baselines</p>
                    <p className="text-sm text-muted-foreground">AI models establish normal behavior patterns</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Real-time Analysis</p>
                    <p className="text-sm text-muted-foreground">LuMay continuously monitors for anomalies</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Intelligent Alerts</p>
                    <p className="text-sm text-muted-foreground">LuMay notifies the right people with context</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold">5</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Automated Response</p>
                    <p className="text-sm text-muted-foreground">LuMay triggers remediation workflows</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">How It Works</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
                Proactive Issue Detection with LuMay SmartSense
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                LuMay SmartSense transforms monitoring from a reactive necessity into a proactive capability. Our AI-powered platform learns your system's unique behavior patterns and automatically identifies deviations that warrant attention.
              </p>
              <p className="text-muted-foreground mb-6">
                LuMay's baseline learning typically completes within 24 hours of deployment, enabling immediate value while continuously refining detection accuracy. LuMay's adaptive thresholds evolve with your system, eliminating the need for constant manual tuning that traditional monitoring tools require.
              </p>
              <p className="text-muted-foreground">
                When LuMay SmartSense detects an anomaly, it doesn't just alert—it provides rich context including probable root cause, affected dependencies, historical patterns, and recommended actions. This contextual intelligence accelerates troubleshooting and enables faster resolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">FAQs</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
                Frequently Asked Questions About LuMay SmartSense
              </h2>
              <p className="text-muted-foreground text-lg">
                Find answers to common questions about LuMay SmartSense's AI-powered anomaly detection, integration capabilities, and enterprise features.
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
            Stop Reacting. Start Predicting with LuMay SmartSense.
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join leading enterprises that have transformed their operations with LuMay SmartSense. Experience the power of AI-driven anomaly detection with a personalized demo from our team.
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