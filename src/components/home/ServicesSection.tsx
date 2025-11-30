import { Link } from "react-router-dom";
import { ArrowRight, Brain, Shield, Blocks, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ParallaxIcons } from "@/components/shared/ParallaxIcons";

const services = [
  {
    id: "data-ai",
    icon: Brain,
    name: "DATA & AI",
    description: "We empower your business with AI-driven solutions that drive growth, security, and digital success.",
    features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
  },
  {
    id: "cybersecurity",
    icon: Shield,
    name: "CYBERSECURITY",
    description: "Protect your digital assets with enterprise-grade security solutions and threat intelligence.",
    features: ["Threat Detection", "Security Audits", "Compliance", "Incident Response"],
  },
  {
    id: "lowcode",
    icon: Blocks,
    name: "LOW-CODE / NO-CODE",
    description: "Accelerate development with powerful platforms that enable rapid application creation.",
    features: ["Rapid Prototyping", "Workflow Automation", "Integration Platform", "Custom Apps"],
  },
  {
    id: "cx",
    icon: Users,
    name: "CUSTOMER EXPERIENCE",
    description: "Transform customer journeys with personalized, AI-powered experiences across all touchpoints.",
    features: ["Journey Mapping", "Personalization", "Omnichannel Support", "Analytics"],
  },
];

export function ServicesSection() {
  const [activeService, setActiveService] = useState(services[0].id);
  const activeServiceData = services.find(s => s.id === activeService);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <ParallaxIcons sectionOffset={1600} density="low" direction="up" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Services</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-foreground">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We empower your business with AI-driven solutions that drive growth, security, and digital success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Service Tabs */}
          <div className="space-y-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={cn(
                  "w-full text-left p-6 rounded-xl border transition-all duration-300",
                  activeService === service.id
                    ? "bg-primary/10 border-primary"
                    : "bg-card border-border hover:border-primary/50"
                )}
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-12 h-12 rounded-lg flex items-center justify-center transition-colors",
                    activeService === service.id ? "bg-primary" : "bg-secondary"
                  )}>
                    <service.icon className={cn(
                      "w-6 h-6",
                      activeService === service.id ? "text-primary-foreground" : "text-primary"
                    )} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">{service.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{service.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Service Detail */}
          {activeServiceData && (
            <div className="card-gradient rounded-xl p-8 border border-border animate-fade-in">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <activeServiceData.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">{activeServiceData.name}</h3>
              <p className="text-muted-foreground mb-6">{activeServiceData.description}</p>
              
              <div className="grid grid-cols-2 gap-3 mb-8">
                {activeServiceData.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </div>
                ))}
              </div>

              <Button variant="default" asChild>
                <Link to={`/services#${activeServiceData.id}`}>
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/services">
              Explore all services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
