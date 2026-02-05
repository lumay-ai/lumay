import { Link } from "react-router-dom";
import { ArrowRight, Bot, Workflow, Activity, TrendingUp, Building2, ShieldCheck, Phone, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParallaxIcons } from "@/components/shared/ParallaxIcons";

const smartAIPlatforms = [
  {
    icon: Bot,
    name: "SmartAssist",
    description: "AI-powered virtual assistant that automates customer support, handles inquiries, and provides intelligent responses 24/7.",
    href: "/products/smartassist",
  },
  {
    icon: Workflow,
    name: "SmartFlow",
    description: "Intelligent workflow automation platform that streamlines business processes and optimizes operational efficiency.",
    href: "/products/smartflow",
  },
  {
    icon: TrendingUp,
    name: "SmartTrends",
    description: "Market intelligence and trend analysis platform that helps businesses stay ahead with data-driven insights.",
    href: "/products/smarttrends",
  },
  {
    icon: Activity,
    name: "SmartSense",
    description: "Advanced analytics and sensing platform that provides real-time insights and predictive intelligence for your business.",
    href: "/products/smartsense",
  },
];

const agenticAIPlatforms = [
  {
    icon: Building2,
    name: "SmartDynamics365",
    description: "Intelligent business automation agent integrated with Microsoft CRM365 Pro for enhanced CRM and ERP workflows.",
    href: "/products/smartdynamics365",
  },
  {
    icon: Languages,
    name: "SmartTranslation",
    description: "AI-powered translation and localization platform that breaks language barriers for global business communication.",
    href: "/products/smarttranslation",
  },
  {
    icon: ShieldCheck,
    name: "SmartOCG Compliance",
    description: "Comprehensive governance, risk, and compliance platform powered by AI for automated regulatory adherence.",
    href: "/products/smartcompliance",
  },
  {
    icon: Phone,
    name: "SmartCall",
    description: "Autonomous AI voice agent for high-volume business conversations with real-time action and system integration.",
    href: "/products/smartcall",
  },
];

export function ProductsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      <ParallaxIcons sectionOffset={800} density="medium" direction="mixed" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Products</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-foreground">
            Enterprise AI Product Suite
          </h2>
          <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
            Discover our enterprise-grade AI ecosystem, featuring the <span className="text-primary font-medium">SmartAI Enterprise Platform</span> for secure, intelligent automation and <span className="text-primary font-medium">Agentic AI for Enterprise</span> solutions designed to enable scalable, autonomous business operations.
          </p>
        </div>

        {/* Smart AI Platforms */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-3">
              Smart AI Platforms
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Core AI solutions that power intelligent automation and enhance operational efficiency across your business.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {smartAIPlatforms.map((product, index) => (
              <Link
                key={product.name}
                to={product.href}
                className="group card-gradient rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <product.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display font-semibold text-lg text-foreground mb-2">{product.name}</h4>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{product.description}</p>
                <span className="inline-flex items-center text-sm text-primary font-medium group-hover:gap-2 transition-all">
                  Explore Solution
                  <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Agentic AI Platforms */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-3">
              Business Agentic AI Platforms
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advanced autonomous AI agents that handle complex business processes and decision-making with minimal human intervention.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {agenticAIPlatforms.map((product, index) => (
              <Link
                key={product.name}
                to={product.href}
                className="group card-gradient rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <product.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display font-semibold text-lg text-foreground mb-2">{product.name}</h4>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{product.description}</p>
                <span className="inline-flex items-center text-sm text-primary font-medium group-hover:gap-2 transition-all">
                  Explore Solution
                  <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/products">
              Explore all products
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
