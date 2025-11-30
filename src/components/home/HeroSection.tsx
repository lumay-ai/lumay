import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import lumayLogo from "@/assets/lumay-logo.png";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      <div className="hero-glow" />
      
      {/* Parallax Logo - moves from top to bottom on scroll */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-0 opacity-10"
        style={{
          top: `${-100 + scrollY * 0.5}px`,
          transform: `translateX(-50%) scale(${1 + scrollY * 0.0005})`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <img 
          src={lumayLogo} 
          alt="" 
          className="w-[600px] h-[600px] object-contain blur-sm"
        />
      </div>

      {/* Secondary parallax logo - slower movement */}
      <div 
        className="absolute right-10 pointer-events-none z-0 opacity-5"
        style={{
          top: `${50 + scrollY * 0.3}px`,
          transform: `rotate(${scrollY * 0.05}deg)`,
        }}
      >
        <img 
          src={lumayLogo} 
          alt="" 
          className="w-[300px] h-[300px] object-contain"
        />
      </div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Enterprise Agentic AI Platform</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">Intelligent Workflow</span>
            <br />
            <span className="text-gradient">Automation</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            SmartAssist is an AI-native virtual assistant that instantly answers questions, 
            solves problems, and executes workflows using your company's data.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Request Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/products">Explore Products</Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <p className="text-sm text-muted-foreground mb-6">Trusted by Global Enterprises and Fast-Moving Innovators</p>
            <div className="flex items-center justify-center gap-8 opacity-50">
              <div className="w-24 h-8 bg-muted rounded" />
              <div className="w-24 h-8 bg-muted rounded" />
              <div className="w-24 h-8 bg-muted rounded" />
              <div className="w-24 h-8 bg-muted rounded hidden sm:block" />
              <div className="w-24 h-8 bg-muted rounded hidden md:block" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
