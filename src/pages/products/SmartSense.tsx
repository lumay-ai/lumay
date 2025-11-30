import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Activity, CheckCircle, AlertTriangle, BarChart3, Search, Bell, Cpu, TrendingUp } from "lucide-react";
import { Helmet } from "react-helmet-async";

const features = [
  { icon: Activity, title: "Real-time Monitoring", description: "Continuous monitoring of all your systems and data streams 24/7." },
  { icon: Cpu, title: "ML-powered Detection", description: "Advanced machine learning algorithms that learn your system's normal behavior." },
  { icon: Bell, title: "Custom Alert Rules", description: "Configure alerts based on your specific thresholds and conditions." },
  { icon: Search, title: "Root Cause Analysis", description: "Automatically identify the source of anomalies and issues." },
  { icon: TrendingUp, title: "Historical Trending", description: "Track patterns over time to predict and prevent future issues." },
  { icon: BarChart3, title: "Integration APIs", description: "Connect with your existing monitoring and alerting infrastructure." },
];

const metrics = [
  { value: "99.9%", label: "Detection Accuracy" },
  { value: "<1s", label: "Alert Latency" },
  { value: "80%", label: "Fewer False Positives" },
  { value: "50%", label: "Faster Resolution" },
];

export default function SmartSense() {
  return (
    <Layout>
      <Helmet>
        <title>SmartSense - Real-Time Anomaly Detection | LuMay</title>
        <meta name="description" content="Monitor your systems with AI-powered anomaly detection. SmartSense identifies patterns, predicts issues, and alerts your team before problems impact operations." />
        <meta name="keywords" content="anomaly detection, real-time monitoring, ML monitoring, predictive alerts, system monitoring" />
        <link rel="canonical" href="https://lumay.ai/products/smartsense" />
      </Helmet>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Activity className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Product</span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-2 mb-6 text-foreground">
                SmartSense
              </h1>
              <p className="text-xl text-primary font-medium mb-4">Real-Time Anomaly Detection</p>
              <p className="text-lg text-muted-foreground mb-8">
                Monitor your systems and data streams with AI-powered anomaly detection. SmartSense identifies patterns, predicts issues, and alerts your team before problems impact operations.
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

      {/* Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Features</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
              Intelligent Monitoring
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              SmartSense uses advanced AI to detect anomalies that traditional rule-based systems miss.
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

      {/* Alert Demo */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">How It Works</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
                Proactive Issue Detection
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                SmartSense learns your system's normal behavior and automatically alerts you when something unusual occurs.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  Baseline learning within 24 hours
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  Adaptive thresholds that evolve with your system
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  Correlation across multiple data sources
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  Automated incident response workflows
                </li>
              </ul>
            </div>
            <div className="card-gradient rounded-2xl p-6 border border-border">
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-red-500/10 rounded-lg border border-red-500/30">
                  <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Critical Alert</p>
                    <p className="text-sm text-muted-foreground">CPU usage spike detected on server-prod-03. 95th percentile exceeded by 40%.</p>
                    <p className="text-xs text-muted-foreground mt-2">2 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
                  <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Warning</p>
                    <p className="text-sm text-muted-foreground">Unusual traffic pattern detected. API latency increased by 23%.</p>
                    <p className="text-xs text-muted-foreground mt-2">15 minutes ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Stop reacting. Start predicting.
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            See how SmartSense can transform your monitoring strategy
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
