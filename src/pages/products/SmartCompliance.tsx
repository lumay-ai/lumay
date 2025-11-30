import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, CheckCircle, FileSearch, AlertTriangle, ClipboardCheck, Lock, Bell, BarChart3 } from "lucide-react";
import { Helmet } from "react-helmet-async";

const features = [
  { icon: FileSearch, title: "Regulatory Tracking", description: "Stay updated with changing regulations across jurisdictions automatically." },
  { icon: ClipboardCheck, title: "Automated Audits", description: "Continuous compliance monitoring with automated audit trails." },
  { icon: AlertTriangle, title: "Risk Assessment", description: "AI-powered risk scoring and prioritization of compliance gaps." },
  { icon: BarChart3, title: "Compliance Reports", description: "Generate comprehensive compliance reports with one click." },
  { icon: Lock, title: "Policy Management", description: "Centralized repository for all policies with version control." },
  { icon: Bell, title: "Alert System", description: "Real-time notifications for compliance violations and deadlines." },
];

const regulations = [
  "GDPR",
  "SOC 2",
  "HIPAA",
  "PCI DSS",
  "ISO 27001",
  "CCPA",
  "SOX",
  "NIST",
];

export default function SmartCompliance() {
  return (
    <Layout>
      <Helmet>
        <title>SmartOCG Compliance - AI Compliance & Risk Management | LuMay</title>
        <meta name="description" content="Stay compliant with evolving regulations through automated monitoring and reporting. Manage risk, ensure compliance, and maintain audit readiness." />
        <meta name="keywords" content="compliance management, risk management, regulatory compliance, audit automation, GDPR, SOC 2, HIPAA" />
        <link rel="canonical" href="https://lumay.ai/products/smartcompliance" />
      </Helmet>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Product</span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-2 mb-6 text-foreground">
                SmartOCG Compliance
              </h1>
              <p className="text-xl text-primary font-medium mb-4">AI Compliance & Risk Management</p>
              <p className="text-lg text-muted-foreground mb-8">
                Stay compliant with evolving regulations through automated monitoring and reporting. SmartOCG helps you manage risk, ensure compliance, and maintain audit readiness.
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
                <ShieldCheck className="w-32 h-32 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Regulations */}
      <section className="py-16 bg-background border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-muted-foreground mb-8">Supported Frameworks & Regulations</p>
          <div className="flex flex-wrap justify-center gap-4">
            {regulations.map((reg) => (
              <div key={reg} className="px-6 py-3 bg-secondary/50 rounded-full border border-border">
                <span className="text-foreground font-medium">{reg}</span>
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
              Comprehensive Compliance
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              SmartOCG provides end-to-end compliance management with AI-powered automation.
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

      {/* Dashboard Preview */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Dashboard</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
                Real-Time Compliance Visibility
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Get a complete view of your compliance posture across all frameworks and regulations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  Unified compliance dashboard
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  Risk heat maps and trends
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  Control effectiveness metrics
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  Audit-ready documentation
                </li>
              </ul>
            </div>
            <div className="card-gradient rounded-2xl p-6 border border-border">
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold text-foreground">Compliance Score</span>
                  <span className="text-2xl font-bold text-green-400">94%</span>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">GDPR</span>
                      <span className="text-green-400">98%</span>
                    </div>
                    <div className="h-2 bg-background rounded-full overflow-hidden">
                      <div className="h-full bg-green-400 rounded-full" style={{ width: '98%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">SOC 2</span>
                      <span className="text-green-400">95%</span>
                    </div>
                    <div className="h-2 bg-background rounded-full overflow-hidden">
                      <div className="h-full bg-green-400 rounded-full" style={{ width: '95%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">HIPAA</span>
                      <span className="text-yellow-400">87%</span>
                    </div>
                    <div className="h-2 bg-background rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-400 rounded-full" style={{ width: '87%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">ISO 27001</span>
                      <span className="text-green-400">96%</span>
                    </div>
                    <div className="h-2 bg-background rounded-full overflow-hidden">
                      <div className="h-full bg-green-400 rounded-full" style={{ width: '96%' }} />
                    </div>
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
            Ready to simplify compliance?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            See how SmartOCG can transform your compliance operations
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
