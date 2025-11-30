import { useEffect, useState, useRef } from "react";
import { 
  Brain, 
  Cpu, 
  Sparkles, 
  Bot, 
  Zap, 
  Network, 
  Atom, 
  CircuitBoard,
  Binary,
  Cog,
  Database,
  Cloud,
  Code,
  Lightbulb
} from "lucide-react";

const icons = [
  { Icon: Brain, color: "text-primary" },
  { Icon: Cpu, color: "text-accent" },
  { Icon: Sparkles, color: "text-primary" },
  { Icon: Bot, color: "text-accent" },
  { Icon: Zap, color: "text-primary" },
  { Icon: Network, color: "text-accent" },
  { Icon: Atom, color: "text-primary" },
  { Icon: CircuitBoard, color: "text-accent" },
  { Icon: Binary, color: "text-primary" },
  { Icon: Cog, color: "text-accent" },
  { Icon: Database, color: "text-primary" },
  { Icon: Cloud, color: "text-accent" },
  { Icon: Code, color: "text-primary" },
  { Icon: Lightbulb, color: "text-accent" },
];

interface ParallaxIconsProps {
  sectionOffset?: number;
  density?: "low" | "medium" | "high";
  direction?: "down" | "up" | "mixed";
}

// Pre-calculated 3D positions with depth layers
const positions = [
  { x: 5, y: 10, z: 100, size: 28, speed: 0.6, rotateX: 15, rotateY: -10 },
  { x: 92, y: 12, z: 200, size: 36, speed: 0.3, rotateX: -20, rotateY: 15 },
  { x: 12, y: 35, z: 50, size: 22, speed: 0.8, rotateX: 10, rotateY: 20 },
  { x: 88, y: 40, z: 150, size: 32, speed: 0.4, rotateX: -15, rotateY: -20 },
  { x: 6, y: 60, z: 180, size: 40, speed: 0.35, rotateX: 25, rotateY: 10 },
  { x: 94, y: 65, z: 80, size: 26, speed: 0.7, rotateX: -10, rotateY: 25 },
  { x: 18, y: 80, z: 120, size: 30, speed: 0.5, rotateX: 20, rotateY: -15 },
  { x: 82, y: 25, z: 220, size: 34, speed: 0.25, rotateX: -25, rotateY: -5 },
  { x: 3, y: 48, z: 60, size: 20, speed: 0.9, rotateX: 5, rotateY: 30 },
  { x: 97, y: 55, z: 140, size: 38, speed: 0.45, rotateX: -5, rotateY: -25 },
  { x: 10, y: 22, z: 90, size: 24, speed: 0.65, rotateX: 30, rotateY: 5 },
  { x: 90, y: 88, z: 170, size: 32, speed: 0.38, rotateX: -30, rotateY: 20 },
  { x: 8, y: 92, z: 110, size: 26, speed: 0.55, rotateX: 12, rotateY: -30 },
  { x: 95, y: 8, z: 190, size: 30, speed: 0.32, rotateX: -12, rotateY: 12 },
];

export function ParallaxIcons({ 
  sectionOffset = 0, 
  density = "medium",
  direction = "down" 
}: ParallaxIconsProps) {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
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

  const iconCount = density === "low" ? 6 : density === "medium" ? 10 : 14;
  const selectedIcons = icons.slice(0, iconCount);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ 
        perspective: "1000px",
        perspectiveOrigin: "50% 50%",
      }}
    >
      {selectedIcons.map((item, index) => {
        const pos = positions[index];
        const adjustedScroll = (scrollY - sectionOffset) * pos.speed;
        const directionMultiplier = 
          direction === "down" ? 1 : 
          direction === "up" ? -1 : 
          index % 2 === 0 ? 1 : -1;
        
        // 3D depth calculations
        const depthScale = 1 - (pos.z / 400); // Further = smaller
        const depthOpacity = 0.08 + (depthScale * 0.15); // Further = more transparent
        const depthBlur = pos.z > 150 ? 1 : 0; // Blur far objects
        
        // Mouse parallax - closer objects move more
        const mouseInfluence = (1 - pos.z / 300) * 30;
        const mouseOffsetX = (mousePos.x - 0.5) * mouseInfluence;
        const mouseOffsetY = (mousePos.y - 0.5) * mouseInfluence;
        
        // Scroll-based rotation
        const scrollRotateX = pos.rotateX + (adjustedScroll * 0.02 * directionMultiplier);
        const scrollRotateY = pos.rotateY + (adjustedScroll * 0.015 * directionMultiplier);
        
        return (
          <div
            key={index}
            className={`absolute ${item.color} transition-all duration-200 ease-out`}
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              opacity: depthOpacity,
              filter: depthBlur ? `blur(${depthBlur}px)` : 'none',
              transform: `
                translate3d(${mouseOffsetX}px, ${mouseOffsetY + adjustedScroll * directionMultiplier}px, ${pos.z}px)
                rotateX(${scrollRotateX}deg)
                rotateY(${scrollRotateY}deg)
                scale(${depthScale})
              `,
              transformStyle: "preserve-3d",
            }}
          >
            <item.Icon 
              size={pos.size} 
              strokeWidth={1.5}
              className="drop-shadow-lg"
            />
          </div>
        );
      })}
      
      {/* Floating glow orbs for depth */}
      <div 
        className="absolute w-32 h-32 rounded-full bg-primary/10 blur-2xl"
        style={{
          left: '20%',
          top: '30%',
          transform: `translate3d(${(mousePos.x - 0.5) * 20}px, ${(mousePos.y - 0.5) * 20 + (scrollY - sectionOffset) * 0.2}px, 50px)`,
        }}
      />
      <div 
        className="absolute w-24 h-24 rounded-full bg-accent/10 blur-xl"
        style={{
          right: '15%',
          bottom: '25%',
          transform: `translate3d(${(mousePos.x - 0.5) * -15}px, ${(mousePos.y - 0.5) * -15 + (scrollY - sectionOffset) * -0.15}px, 100px)`,
        }}
      />
    </div>
  );
}
