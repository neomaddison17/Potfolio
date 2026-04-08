import React, { useEffect, useState } from 'react';
interface Particle {
  id: number;
  left: string;
  size: string;
  duration: string;
  delay: string;
  color: string;
}
export function Particles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  useEffect(() => {
    const colors = ['#a855f7', '#06b6d4', '#ec4899', '#ffffff'];
    const newParticles: Particle[] = Array.from({
      length: 40
    }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      size: `${Math.random() * 4 + 1}px`,
      duration: `${Math.random() * 15 + 10}s`,
      delay: `${Math.random() * 10}s`,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    setParticles(newParticles);
  }, []);
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) =>
      <div
        key={p.id}
        className="particle"
        style={{
          left: p.left,
          width: p.size,
          height: p.size,
          backgroundColor: p.color,
          color: p.color,
          animationDuration: p.duration,
          animationDelay: p.delay
        }} />

      )}

      {/* Background Gradients for depth */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyber-purple/10 blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyber-cyan/10 blur-[120px]" />
    </div>);

}