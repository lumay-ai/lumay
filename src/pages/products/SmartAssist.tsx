import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, CheckCircle, Zap, Database, Shield, Clock, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";

const features = [
  { icon: Zap, title: "Natural Language Processing", description: "Understand and respond to complex queries in natural language with context awareness." },
  { icon: Database, title: "Multi-source Integration", description: "Connect to all your internal tools, knowledge bases, and repositories seamlessly." },
  { icon: Shield, title: "Enterprise Security", description: "Bank-grade encryption and compliance with SOC 2, GDPR, and HIPAA standards." },
  { icon: Clock, title: "24/7 Availability", description: "Always-on assistance that never sleeps, ensuring continuous support for your team." },
  { icon: Users, title: "Context-aware Responses", description: "Delivers accurate, personalized answers based on user roles and permissions." },
  { icon: CheckCircle, title: "Workflow Automation", description: "Execute complex workflows and tasks automatically through simple commands." },
];

const useCases = [
  "Employee onboarding and HR queries",
  "IT helpdesk and technical support",
  "Sales enablement and product information",
  "Customer service automation",
  "Knowledge management and documentation",
  "Process automation and task execution",
];

export default function SmartAssist() {
  return (
    <Layout>
      <Helmet>
        <title>SmartAssist - AI-Driven Virtual Assistant | LuMay</title>
        <meta name="description" content="SmartAssist is an AI-native virtual assistant that instantly answers questions, solves problems, and executes workflows using your company's data." />
        <meta name="keywords" content="AI virtual assistant, enterprise chatbot, workflow automation, NLP, knowledge management" />
        <link rel="canonical" href="https://lumay.ai/products/smartassist" />
      </Helmet>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Bot className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Product</span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-2 mb-6 text-foreground">
                SmartAssist
              </h1>
              <p className="text-xl text-primary font-medium mb-4">Your AI-Driven Virtual Assistant</p>
              <p className="text-lg text-muted-foreground mb-8">
                SmartAssist is an AI-native virtual assistant that instantly answers questions, solves problems, and executes workflows using your company's data. It connects to all your internal tools, knowledge bases, and repositories to deliver accurate, context-rich answers—instantly and at scale.
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
                <Bot className="w-32 h-32 text-primary/30" />
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
              Powerful Capabilities
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              SmartAssist combines cutting-edge AI with enterprise-grade security to deliver intelligent assistance at scale.
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

      {/* Use Cases */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Use Cases</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
                Transform Your Operations
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                SmartAssist adapts to your unique business needs, providing intelligent assistance across departments and functions.
              </p>
              <ul className="space-y-4">
                {useCases.map((useCase) => (
                  <li key={useCase} className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-gradient rounded-2xl p-8 border border-border">
              <div className="space-y-4">
                <div className="bg-background/50 rounded-lg p-4 border border-border">
                  <p className="text-sm text-muted-foreground mb-2">User Query</p>
                  <p className="text-foreground">"What's our refund policy for enterprise customers?"</p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                  <p className="text-sm text-primary mb-2">SmartAssist Response</p>
                  <p className="text-foreground">Based on your enterprise agreement, customers are eligible for a full refund within 30 days of purchase. I can also initiate the refund process for you if needed.</p>
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
            Ready to transform your workforce?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            See how SmartAssist can revolutionize the way your team works
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
