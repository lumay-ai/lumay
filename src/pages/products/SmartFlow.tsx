import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Workflow, CheckCircle, Layers, GitBranch, Eye, Lock, Plug, Settings } from "lucide-react";
import { Helmet } from "react-helmet-async";

const features = [
  { icon: Layers, title: "Visual Workflow Designer", description: "Intuitive drag-and-drop interface for building complex automations without code." },
  { icon: Plug, title: "Pre-built Connectors", description: "Connect to 200+ enterprise applications out of the box." },
  { icon: Eye, title: "Real-time Monitoring", description: "Track workflow execution in real-time with detailed logs and analytics." },
  { icon: GitBranch, title: "Version Control", description: "Built-in versioning for workflows with rollback capabilities." },
  { icon: Lock, title: "Role-based Access", description: "Granular permissions to control who can view, edit, and execute workflows." },
  { icon: Settings, title: "API Integration", description: "Expose workflows as APIs or trigger them from external systems." },
];

const benefits = [
  "Reduce development time by 80%",
  "Empower business users to automate",
  "Eliminate manual handoffs and errors",
  "Scale operations without adding headcount",
  "Ensure compliance with audit trails",
  "Accelerate digital transformation",
];

export default function SmartFlow() {
  return (
    <Layout>
      <Helmet>
        <title>SmartFlow - Low-Code Orchestration Platform | LuMay</title>
        <meta name="description" content="Build and automate complex workflows without extensive coding. SmartFlow enables business analysts and IT teams to create sophisticated process automations." />
        <meta name="keywords" content="workflow automation, low-code platform, no-code automation, business process automation, orchestration" />
        <link rel="canonical" href="https://lumay.ai/products/smartflow" />
      </Helmet>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Workflow className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Product</span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-2 mb-6 text-foreground">
                SmartFlow
              </h1>
              <p className="text-xl text-primary font-medium mb-4">Low-Code/No-Code Orchestration Platform</p>
              <p className="text-lg text-muted-foreground mb-8">
                Build and automate complex workflows without extensive coding. SmartFlow enables business analysts and IT teams alike to create sophisticated process automations through an intuitive visual interface.
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
                <Workflow className="w-32 h-32 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Features</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
              Enterprise-Grade Automation
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              SmartFlow provides everything you need to design, deploy, and manage automated workflows at scale.
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

      {/* Benefits */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Benefits</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
                Why Choose SmartFlow?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                SmartFlow democratizes automation, enabling both technical and non-technical users to build powerful workflows.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:order-1">
              <div className="card-gradient rounded-2xl p-8 border border-border">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg border border-border">
                    <div className="w-10 h-10 rounded bg-blue-500/20 flex items-center justify-center">
                      <span className="text-blue-400 font-bold">1</span>
                    </div>
                    <span className="text-foreground">Trigger: New Lead Created</span>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90" />
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg border border-border">
                    <div className="w-10 h-10 rounded bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-400 font-bold">2</span>
                    </div>
                    <span className="text-foreground">Action: Enrich Data</span>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90" />
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg border border-border">
                    <div className="w-10 h-10 rounded bg-purple-500/20 flex items-center justify-center">
                      <span className="text-purple-400 font-bold">3</span>
                    </div>
                    <span className="text-foreground">Action: Assign to Sales Rep</span>
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
            Ready to automate your workflows?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            See how SmartFlow can streamline your operations
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
