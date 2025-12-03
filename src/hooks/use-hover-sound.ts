import { useCallback, useRef } from 'react';

// Web Audio API for sci-fi hover sounds
export function useHoverSound() {
  const audioContextRef = useRef<AudioContext | null>(null);
  
  const playHoverSound = useCallback((frequency: number = 800, duration: number = 0.1) => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      
      const ctx = audioContextRef.current;
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      // Sci-fi synth sound
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(frequency * 1.5, ctx.currentTime + duration * 0.3);
      oscillator.frequency.exponentialRampToValueAtTime(frequency * 0.8, ctx.currentTime + duration);
      
      // Fade in/out
      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      
      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + duration);
    } catch (e) {
      // Audio not supported or blocked
    }
  }, []);
  
  return { playHoverSound };
}
