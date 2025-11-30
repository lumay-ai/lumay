import { Link } from "react-router-dom";
import { ArrowRight, Bot, Workflow, Activity, TrendingUp, Building2, ShieldCheck, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    icon: Bot,
    name: "SmartAssist",
    description: "Your AI-Driven Virtual Assistant",
    href: "/products/smartassist",
  },
  {
    icon: Workflow,
    name: "SmartFlow",
    description: "Low-Code/No-Code Orchestration Platform",
    href: "/products/smartflow",
  },
  {
    icon: Activity,
    name: "SmartSense",
    description: "Real-Time Anomaly Detection",
    href: "/products/smartsense",
  },
  {
    icon: TrendingUp,
    name: "SmartTrends",
    description: "Predictive Analytics & Forecasting",
    href: "/products/smarttrends",
  },
  {
    icon: Building2,
    name: "SmartDynamics365",
    description: "AI-Powered Business Automation",
    href: "/products/smartdynamics365",
  },
  {
    icon: ShieldCheck,
    name: "SmartOCG Compliance",
    description: "AI Compliance & Risk Management",
    href: "/products/smartcompliance",
  },
  {
    icon: Phone,
    name: "SmartCall",
    description: "Autonomous AI Voice Agent",
    href: "/products/smartcall",
  },
];

export function ProductsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Products</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-foreground">
            Our Product Suite
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Link
              key={product.name}
              to={product.href}
              className="group card-gradient rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <product.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">{product.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
              <span className="inline-flex items-center text-sm text-primary font-medium group-hover:gap-2 transition-all">
                View more
                <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </span>
            </Link>
          ))}
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
