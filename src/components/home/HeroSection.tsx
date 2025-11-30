import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Brain, Cpu, Bot, Zap, Network, Atom, CircuitBoard, Binary, Cog, Database } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const floatingIcons = [
  { Icon: Brain, x: 5, y: 12, z: 80, size: 44, speed: 0.5, rotateBase: 15 },
  { Icon: Cpu, x: 92, y: 18, z: 160, size: 38, speed: 0.3, rotateBase: -20 },
  { Icon: Bot, x: 8, y: 55, z: 60, size: 48, speed: 0.7, rotateBase: 10 },
  { Icon: Zap, x: 90, y: 50, z: 120, size: 34, speed: 0.4, rotateBase: -15 },
  { Icon: Network, x: 12, y: 78, z: 100, size: 40, speed: 0.55, rotateBase: 25 },
  { Icon: Atom, x: 88, y: 72, z: 180, size: 46, speed: 0.25, rotateBase: -25 },
  { Icon: CircuitBoard, x: 3, y: 35, z: 140, size: 36, speed: 0.45, rotateBase: 20 },
  { Icon: Binary, x: 96, y: 38, z: 90, size: 32, speed: 0.6, rotateBase: -10 },
  { Icon: Cog, x: 18, y: 25, z: 110, size: 30, speed: 0.35, rotateBase: 12 },
  { Icon: Sparkles, x: 82, y: 85, z: 70, size: 42, speed: 0.65, rotateBase: -18 },
  { Icon: Database, x: 6, y: 88, z: 150, size: 36, speed: 0.38, rotateBase: 22 },
];

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{ perspective: "1200px", perspectiveOrigin: "50% 50%" }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      <div className="hero-glow" />
      
      {/* 3D Parallax AI Icons */}
      {floatingIcons.map((item, index) => {
        const direction = index % 2 === 0 ? 1 : -1;
        const yOffset = scrollY * item.speed * direction;
        
        // 3D depth calculations
        const depthScale = 1 - (item.z / 300);
        const depthOpacity = 0.06 + (depthScale * 0.14);
        const depthBlur = item.z > 140 ? 1.5 : item.z > 100 ? 0.5 : 0;
        
        // Mouse parallax - closer objects react more
        const mouseInfluence = (1 - item.z / 250) * 40;
        const mouseOffsetX = (mousePos.x - 0.5) * mouseInfluence;
        const mouseOffsetY = (mousePos.y - 0.5) * mouseInfluence;
        
        // Dynamic rotation based on scroll and mouse
        const rotateX = item.rotateBase + (scrollY * 0.03 * direction) + ((mousePos.y - 0.5) * 10);
        const rotateY = -item.rotateBase + (scrollY * 0.02 * direction) + ((mousePos.x - 0.5) * 15);
        const rotateZ = scrollY * 0.01 * direction;
        
        return (
          <div
            key={index}
            className="absolute pointer-events-none text-primary transition-transform duration-150 ease-out"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              opacity: depthOpacity,
              filter: depthBlur ? `blur(${depthBlur}px)` : 'none',
              transform: `
                translate3d(${mouseOffsetX}px, ${mouseOffsetY + yOffset}px, ${item.z}px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                rotateZ(${rotateZ}deg)
                scale(${depthScale + scrollY * 0.0001})
              `,
              transformStyle: "preserve-3d",
            }}
          >
            <item.Icon 
              size={item.size} 
              strokeWidth={1}
              className="drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]"
            />
          </div>
        );
      })}
      
      {/* 3D Floating glow orbs */}
      <div 
        className="absolute w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse-glow"
        style={{
          left: '25%',
          top: '25%',
          transform: `translate3d(${(mousePos.x - 0.5) * 30}px, ${(mousePos.y - 0.5) * 30 + scrollY * 0.1}px, -50px)`,
        }}
      />
      <div 
        className="absolute w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse-glow"
        style={{
          right: '20%',
          bottom: '20%',
          animationDelay: "1s",
          transform: `translate3d(${(mousePos.x - 0.5) * -25}px, ${(mousePos.y - 0.5) * -25 - scrollY * 0.08}px, -100px)`,
        }}
      />

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
