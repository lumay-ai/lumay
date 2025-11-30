import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { ParallaxIcons } from "@/components/shared/ParallaxIcons";

const features = [
  "AI That Works, Not Just Talks",
  "Trusted by Global Enterprises and Fast-Moving Innovators",
  "Modular Platforms, Tailored Deployments",
  "Built for Scale. Designed for People.",
  "Ethical, Responsible, and Secure by Design",
];

export function WhyChooseSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <ParallaxIcons sectionOffset={3200} density="medium" direction="mixed" />
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-foreground">
              Why Choose LuMay?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              LuMay helps forward-thinking organizations operationalize AI — bridging strategy, 
              systems, and people to build adaptive, insight-driven enterprises that lead with 
              intelligence and scale with purpose.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li 
                  key={feature} 
                  className="flex items-start gap-3 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Let's talk
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl card-gradient border border-border p-8 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Animated circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full border border-primary/20 animate-pulse-glow" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full border border-primary/30 animate-pulse-glow" style={{ animationDelay: "0.5s" }} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center animate-pulse-glow" style={{ animationDelay: "1s" }}>
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                      <span className="font-display font-bold text-2xl text-primary-foreground">L</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
