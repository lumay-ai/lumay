import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, CheckCircle, Zap, Users, FileText, Bot, BarChart3, Settings } from "lucide-react";
import { Helmet } from "react-helmet-async";

const features = [
  { icon: Building2, title: "D365 Integration", description: "Seamless integration with Microsoft Dynamics 365 ecosystem." },
  { icon: Bot, title: "CRM Copilot", description: "AI-powered assistant embedded directly in your CRM workflow." },
  { icon: FileText, title: "Quote Automation", description: "Reduce quote generation time by 85% with intelligent automation." },
  { icon: BarChart3, title: "Sales Intelligence", description: "AI-driven insights to identify and prioritize opportunities." },
  { icon: Users, title: "Customer Insights", description: "360-degree customer view with predictive behavior analysis." },
  { icon: Settings, title: "Process Optimization", description: "Continuously optimize workflows based on performance data." },
];

const results = [
  { metric: "85%", description: "Reduction in quote generation time" },
  { metric: "40%", description: "Increase in sales productivity" },
  { metric: "60%", description: "Faster customer response times" },
  { metric: "3x", description: "Improvement in lead conversion" },
];

export default function SmartDynamics365() {
  return (
    <Layout>
      <Helmet>
        <title>SmartDynamics365 - AI-Powered Business Automation | LuMay</title>
        <meta name="description" content="Supercharge your Microsoft Dynamics 365 with AI automation. Reduce quote time by 85%, enhance CRM with Copilot capabilities." />
        <meta name="keywords" content="Dynamics 365, CRM AI, sales automation, quote automation, Microsoft CRM, business automation" />
        <link rel="canonical" href="https://lumay.ai/products/smartdynamics365" />
      </Helmet>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Product</span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-2 mb-6 text-foreground">
                SmartDynamics365
              </h1>
              <p className="text-xl text-primary font-medium mb-4">AI-Powered Business Automation</p>
              <p className="text-lg text-muted-foreground mb-8">
                Supercharge your Microsoft Dynamics 365 with AI automation. Reduce quote time by 85%, enhance CRM with Copilot capabilities, and streamline business processes.
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
                <Building2 className="w-32 h-32 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-background border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result) => (
              <div key={result.description} className="text-center">
                <p className="font-display text-4xl font-bold text-primary mb-2">{result.metric}</p>
                <p className="text-muted-foreground text-sm">{result.description}</p>
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
              Transform Your D365 Experience
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              SmartDynamics365 brings the power of AI directly into your existing Microsoft ecosystem.
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

      {/* Use Case */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Use Case</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
                Intelligent Quote Generation
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Transform your quote-to-cash process with AI that understands your products, pricing, and customers.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Auto-populate quotes based on customer history and preferences</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>AI-recommended upsells and cross-sells</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Dynamic pricing optimization based on deal context</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Automated approval workflows with smart routing</span>
                </li>
              </ul>
            </div>
            <div className="card-gradient rounded-2xl p-8 border border-border">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Zap className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Before SmartDynamics365</p>
                    <p className="text-sm text-muted-foreground">Average quote time: 4 hours</p>
                  </div>
                </div>
                <div className="h-px bg-border" />
                <div className="flex items-center gap-4">
                  <Zap className="w-8 h-8 text-green-400" />
                  <div>
                    <p className="font-semibold text-foreground">After SmartDynamics365</p>
                    <p className="text-sm text-green-400">Average quote time: 35 minutes</p>
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
            Ready to supercharge your D365?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            See how SmartDynamics365 can transform your Microsoft ecosystem
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
