import { useEffect, useState } from "react";
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

export function ParallaxIcons({ 
  sectionOffset = 0, 
  density = "medium",
  direction = "down" 
}: ParallaxIconsProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const iconCount = density === "low" ? 6 : density === "medium" ? 10 : 14;
  const selectedIcons = icons.slice(0, iconCount);

  // Pre-calculated positions for icons
  const positions = [
    { x: 5, y: 10, size: 24, speed: 0.3, rotate: true },
    { x: 90, y: 15, size: 32, speed: 0.5, rotate: false },
    { x: 15, y: 40, size: 20, speed: 0.2, rotate: true },
    { x: 85, y: 45, size: 28, speed: 0.4, rotate: false },
    { x: 8, y: 70, size: 36, speed: 0.35, rotate: true },
    { x: 92, y: 75, size: 22, speed: 0.25, rotate: false },
    { x: 20, y: 85, size: 26, speed: 0.45, rotate: true },
    { x: 80, y: 30, size: 30, speed: 0.3, rotate: false },
    { x: 3, y: 55, size: 18, speed: 0.5, rotate: true },
    { x: 97, y: 60, size: 34, speed: 0.2, rotate: false },
    { x: 12, y: 25, size: 22, speed: 0.4, rotate: true },
    { x: 88, y: 90, size: 28, speed: 0.35, rotate: false },
    { x: 6, y: 95, size: 20, speed: 0.45, rotate: true },
    { x: 94, y: 5, size: 26, speed: 0.3, rotate: false },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {selectedIcons.map((item, index) => {
        const pos = positions[index];
        const adjustedScroll = (scrollY - sectionOffset) * pos.speed;
        const directionMultiplier = 
          direction === "down" ? 1 : 
          direction === "up" ? -1 : 
          index % 2 === 0 ? 1 : -1;
        
        return (
          <div
            key={index}
            className={`absolute transition-transform duration-100 ${item.color} opacity-20 hover:opacity-40`}
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              transform: `translateY(${adjustedScroll * directionMultiplier}px) rotate(${pos.rotate ? adjustedScroll * 0.1 : 0}deg)`,
            }}
          >
            <item.Icon size={pos.size} strokeWidth={1.5} />
          </div>
        );
      })}
    </div>
  );
}
