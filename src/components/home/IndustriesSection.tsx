import { Link } from "react-router-dom";
import { ArrowRight, Building2, Heart, Wallet, ShoppingCart, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  {
    icon: Building2,
    name: "Dynamics 365 AI",
    tag: "Featured",
    description: "Transform your Microsoft Dynamics 365 with CRM Copilot and AI automation. Reduce quote time by 85% with D365 AI agents.",
    href: "/industries#dynamics365",
  },
  {
    icon: Heart,
    name: "Health & Life Sciences",
    description: "Enhance healthcare efficiency and compliance with AI-powered solutions that simplify operations and improve patient experiences.",
    href: "/industries#healthcare",
  },
  {
    icon: Wallet,
    name: "Finance",
    description: "Boost compliance and agility in financial services with AI-driven insights, workflow automation, and personalized customer solutions.",
    href: "/industries#finance",
  },
  {
    icon: ShoppingCart,
    name: "eCommerce",
    description: "Accelerate growth with AI solutions that personalize shopping, predict behavior, and optimize the end-to-end customer journey.",
    href: "/industries#ecommerce",
  },
  {
    icon: Leaf,
    name: "ESG & Sustainability",
    description: "Advance ESG goals with automated data, CSRD/GRI alignment, and platform-driven visibility that turns compliance into strategy.",
    href: "/industries#esg",
  },
];

export function IndustriesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Industries</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-foreground">
            Expertise across industries
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We partner with you to bridge industry-specific gaps, accelerate innovation, 
            and enable data-driven growth across complex environments
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <Link
              key={industry.name}
              to={industry.href}
              className="group card-gradient rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <industry.icon className="w-6 h-6 text-primary" />
                </div>
                {industry.tag && (
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {industry.tag}
                  </span>
                )}
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">{industry.name}</h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{industry.description}</p>
              <span className="inline-flex items-center text-sm text-primary font-medium group-hover:gap-2 transition-all">
                Learn more
                <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/industries">
              Explore all industries
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
