import { useEffect, useState, useRef } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  id: number;
  opacity: number;
}

export function CursorTrail() {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const idRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Only track if inside container
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        idRef.current += 1;
        setTrail(prev => [
          ...prev.slice(-15), // Keep last 15 points
          { x, y, id: idRef.current, opacity: 1 }
        ]);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    // Fade out trail points
    const fadeInterval = setInterval(() => {
      setTrail(prev => 
        prev
          .map(p => ({ ...p, opacity: p.opacity - 0.08 }))
          .filter(p => p.opacity > 0)
      );
    }, 30);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(fadeInterval);
    };
  }, []);
  
  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden z-50">
      {trail.map((point, index) => {
        const size = 8 + (index / trail.length) * 16;
        const blur = 4 + (1 - index / trail.length) * 8;
        
        return (
          <div
            key={point.id}
            className="absolute rounded-full bg-primary"
            style={{
              left: point.x - size / 2,
              top: point.y - size / 2,
              width: size,
              height: size,
              opacity: point.opacity * 0.6,
              filter: `blur(${blur}px)`,
              boxShadow: `0 0 ${size * 2}px hsl(var(--primary)), 0 0 ${size * 4}px hsl(var(--primary) / 0.5)`,
              transform: `scale(${0.5 + point.opacity * 0.5})`,
              transition: 'opacity 0.1s ease-out',
            }}
          />
        );
      })}
      
      {/* Main cursor glow */}
      {trail.length > 0 && (
        <div
          className="absolute rounded-full"
          style={{
            left: trail[trail.length - 1].x - 20,
            top: trail[trail.length - 1].y - 20,
            width: 40,
            height: 40,
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, transparent 70%)',
            filter: 'blur(8px)',
          }}
        />
      )}
    </div>
  );
}
