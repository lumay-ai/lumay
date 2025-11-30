import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, CheckCircle, Mic, Globe, BarChart3, Users, MessageSquare, Headphones } from "lucide-react";
import { Helmet } from "react-helmet-async";

const features = [
  { icon: Mic, title: "Natural Voice AI", description: "Human-like voice interactions that understand context and nuance." },
  { icon: Globe, title: "Multi-language Support", description: "Support customers in 50+ languages with native-quality speech." },
  { icon: BarChart3, title: "Call Analytics", description: "Deep insights into call patterns, sentiment, and outcomes." },
  { icon: Users, title: "CRM Integration", description: "Seamlessly sync with your existing CRM and support systems." },
  { icon: MessageSquare, title: "Smart Escalation", description: "Intelligently route complex issues to human agents." },
  { icon: Headphones, title: "Quality Monitoring", description: "Real-time call quality scoring and compliance monitoring." },
];

const stats = [
  { value: "70%", label: "Calls Resolved Autonomously" },
  { value: "24/7", label: "Availability" },
  { value: "50+", label: "Languages Supported" },
  { value: "<2s", label: "Average Response Time" },
];

export default function SmartCall() {
  return (
    <Layout>
      <Helmet>
        <title>SmartCall - Autonomous AI Voice Agent | LuMay</title>
        <meta name="description" content="Deploy intelligent voice agents that handle customer calls with natural conversation. SmartCall understands context, resolves issues, and escalates when needed." />
        <meta name="keywords" content="AI voice agent, conversational AI, call center automation, voice bot, customer service AI" />
        <link rel="canonical" href="https://lumay.ai/products/smartcall" />
      </Helmet>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Product</span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-2 mb-6 text-foreground">
                SmartCall
              </h1>
              <p className="text-xl text-primary font-medium mb-4">Autonomous AI Voice Agent</p>
              <p className="text-lg text-muted-foreground mb-8">
                Deploy intelligent voice agents that handle customer calls with natural conversation. SmartCall understands context, resolves issues, and escalates when needed.
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
                <Phone className="w-32 h-32 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
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
              Next-Gen Voice AI
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              SmartCall combines advanced speech recognition with natural language understanding for human-like conversations.
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

      {/* Conversation Demo */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Demo</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
                Natural Conversations
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                SmartCall handles complex conversations with context awareness and emotional intelligence.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  Understands interruptions and follow-ups
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  Detects customer sentiment in real-time
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  Adapts tone based on conversation context
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  Seamless handoff to human agents
                </li>
              </ul>
            </div>
            <div className="card-gradient rounded-2xl p-6 border border-border">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div className="bg-primary/10 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-foreground">Hi! Thank you for calling. How can I help you today?</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 justify-end">
                  <div className="bg-background/50 rounded-lg p-3 max-w-[80%] border border-border">
                    <p className="text-sm text-foreground">I'd like to check the status of my order from last week.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div className="bg-primary/10 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-foreground">I'd be happy to help! I found your order #45892. It shipped yesterday and is expected to arrive by Thursday. Would you like the tracking number?</p>
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
            Ready to transform your call center?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            See how SmartCall can handle your customer conversations
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
