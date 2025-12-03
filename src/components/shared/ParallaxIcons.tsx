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

const positions = [
  { x: 5, y: 10, z: 100, size: 28, speed: 0.6, rotateX: 15, rotateY: -10, bobSpeed: 2.5, bobAmount: 8 },
  { x: 92, y: 12, z: 200, size: 36, speed: 0.3, rotateX: -20, rotateY: 15, bobSpeed: 3.2, bobAmount: 6 },
  { x: 12, y: 35, z: 50, size: 22, speed: 0.8, rotateX: 10, rotateY: 20, bobSpeed: 2.8, bobAmount: 10 },
  { x: 88, y: 40, z: 150, size: 32, speed: 0.4, rotateX: -15, rotateY: -20, bobSpeed: 3.5, bobAmount: 7 },
  { x: 6, y: 60, z: 180, size: 40, speed: 0.35, rotateX: 25, rotateY: 10, bobSpeed: 2.2, bobAmount: 9 },
  { x: 94, y: 65, z: 80, size: 26, speed: 0.7, rotateX: -10, rotateY: 25, bobSpeed: 3.0, bobAmount: 8 },
  { x: 18, y: 80, z: 120, size: 30, speed: 0.5, rotateX: 20, rotateY: -15, bobSpeed: 2.6, bobAmount: 6 },
  { x: 82, y: 25, z: 220, size: 34, speed: 0.25, rotateX: -25, rotateY: -5, bobSpeed: 3.8, bobAmount: 5 },
  { x: 3, y: 48, z: 60, size: 20, speed: 0.9, rotateX: 5, rotateY: 30, bobSpeed: 2.4, bobAmount: 11 },
  { x: 97, y: 55, z: 140, size: 38, speed: 0.45, rotateX: -5, rotateY: -25, bobSpeed: 3.3, bobAmount: 7 },
  { x: 10, y: 22, z: 90, size: 24, speed: 0.65, rotateX: 30, rotateY: 5, bobSpeed: 2.9, bobAmount: 9 },
  { x: 90, y: 88, z: 170, size: 32, speed: 0.38, rotateX: -30, rotateY: 20, bobSpeed: 3.1, bobAmount: 6 },
  { x: 8, y: 92, z: 110, size: 26, speed: 0.55, rotateX: 12, rotateY: -30, bobSpeed: 2.7, bobAmount: 8 },
  { x: 95, y: 8, z: 190, size: 30, speed: 0.32, rotateX: -12, rotateY: 12, bobSpeed: 3.6, bobAmount: 5 },
];

// Particle configuration
const particles = Array.from({ length: 20 }, (_, i) => ({
  x: Math.random() * 100,
  size: 2 + Math.random() * 3,
  speed: 15 + Math.random() * 25,
  delay: Math.random() * 10,
  opacity: 0.2 + Math.random() * 0.3,
}));

export function ParallaxIcons({ 
  sectionOffset = 0, 
  density = "medium",
  direction = "down" 
}: ParallaxIconsProps) {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [time, setTime] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    // Animation loop for idle animations
    let animationId: number;
    const animate = () => {
      setTime(Date.now() / 1000);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const iconCount = density === "low" ? 6 : density === "medium" ? 10 : 14;
  const selectedIcons = icons.slice(0, iconCount);
  const selectedPositions = positions.slice(0, iconCount);

  // Calculate icon positions for neural network lines
  const iconPositions = selectedPositions.map((pos, index) => {
    const adjustedScroll = (scrollY - sectionOffset) * pos.speed;
    const directionMultiplier = direction === "down" ? 1 : direction === "up" ? -1 : index % 2 === 0 ? 1 : -1;
    const mouseInfluence = (1 - pos.z / 300) * 30;
    const bobOffset = Math.sin(time * pos.bobSpeed + index) * pos.bobAmount;
    
    return {
      x: pos.x + (mousePos.x - 0.5) * mouseInfluence * 0.1,
      y: pos.y + ((mousePos.y - 0.5) * mouseInfluence + adjustedScroll * directionMultiplier + bobOffset) * 0.01,
    };
  });

  // Generate neural network connections
  const connections: { from: number; to: number; distance: number }[] = [];
  for (let i = 0; i < iconPositions.length; i++) {
    for (let j = i + 1; j < iconPositions.length; j++) {
      const dx = iconPositions[i].x - iconPositions[j].x;
      const dy = iconPositions[i].y - iconPositions[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 40) {
        connections.push({ from: i, to: j, distance });
      }
    }
  }

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ perspective: "1000px", perspectiveOrigin: "50% 50%" }}
    >
      {/* Neural network connecting lines */}
      <svg className="absolute inset-0 w-full h-full">
        {connections.map((conn, idx) => {
          const from = iconPositions[conn.from];
          const to = iconPositions[conn.to];
          const pulseOffset = (time * 2 + idx) % 1;
          const lineOpacity = 0.15 * (1 - conn.distance / 40);
          
          return (
            <g key={idx}>
              <line
                x1={`${from.x}%`}
                y1={`${from.y}%`}
                x2={`${to.x}%`}
                y2={`${to.y}%`}
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                opacity={lineOpacity}
              />
              {/* Pulse effect */}
              <circle
                cx={`${from.x + (to.x - from.x) * pulseOffset}%`}
                cy={`${from.y + (to.y - from.y) * pulseOffset}%`}
                r="3"
                fill="hsl(var(--primary))"
                opacity={lineOpacity * 2 * Math.sin(pulseOffset * Math.PI)}
              />
            </g>
          );
        })}
      </svg>

      {/* Floating particles */}
      {particles.map((particle, idx) => (
        <div
          key={`particle-${idx}`}
          className="absolute rounded-full bg-primary"
          style={{
            left: `${particle.x}%`,
            bottom: `-${particle.size}px`,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            animation: `float-up ${particle.speed}s linear infinite`,
            animationDelay: `-${particle.delay}s`,
          }}
        />
      ))}

      {/* 3D Parallax Icons */}
      {selectedIcons.map((item, index) => {
        const pos = selectedPositions[index];
        const adjustedScroll = (scrollY - sectionOffset) * pos.speed;
        const directionMultiplier = direction === "down" ? 1 : direction === "up" ? -1 : index % 2 === 0 ? 1 : -1;
        
        const depthScale = 1 - (pos.z / 400);
        const baseOpacity = 0.08 + (depthScale * 0.15);
        const depthBlur = pos.z > 150 ? 1 : 0;
        
        const mouseInfluence = (1 - pos.z / 300) * 30;
        const mouseOffsetX = (mousePos.x - 0.5) * mouseInfluence;
        const mouseOffsetY = (mousePos.y - 0.5) * mouseInfluence;
        
        // Idle animations
        const idleBob = Math.sin(time * pos.bobSpeed + index) * pos.bobAmount;
        const idleRotate = Math.sin(time * 0.5 + index * 0.7) * 5;
        
        const scrollRotateX = pos.rotateX + (adjustedScroll * 0.02 * directionMultiplier);
        const scrollRotateY = pos.rotateY + (adjustedScroll * 0.015 * directionMultiplier) + idleRotate;
        
        // Proximity hover
        const iconCenterX = pos.x / 100;
        const iconCenterY = pos.y / 100;
        const distance = Math.sqrt(
          Math.pow(mousePos.x - iconCenterX, 2) + 
          Math.pow(mousePos.y - iconCenterY, 2)
        );
        const proximityThreshold = 0.15;
        const proximityFactor = Math.max(0, 1 - distance / proximityThreshold);
        const hoverScale = 1 + proximityFactor * 0.4;
        const hoverOpacity = baseOpacity + proximityFactor * 0.3;
        const hoverGlow = proximityFactor * 20;
        
        // Reduce idle animation when hovered
        const effectiveBob = idleBob * (1 - proximityFactor);
        
        return (
          <div
            key={index}
            className={`absolute ${item.color} transition-all duration-150 ease-out`}
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              opacity: hoverOpacity,
              filter: `blur(${depthBlur}px) drop-shadow(0 0 ${hoverGlow}px currentColor)`,
              transform: `
                translate3d(${mouseOffsetX}px, ${mouseOffsetY + adjustedScroll * directionMultiplier + effectiveBob}px, ${pos.z}px)
                rotateX(${scrollRotateX}deg)
                rotateY(${scrollRotateY}deg)
                scale(${depthScale * hoverScale})
              `,
              transformStyle: "preserve-3d",
            }}
          >
            <item.Icon size={pos.size} strokeWidth={1.5} className="drop-shadow-lg" />
          </div>
        );
      })}
      
      {/* Floating glow orbs */}
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
