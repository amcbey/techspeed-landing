import { useEffect, useRef, useState } from "react";

const NuclearExplosion = ({ onDone }: { onDone: () => void }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const W = canvas.width;
    const H = canvas.height;
    const cx = W / 2;
    const cy = H * 0.65;

    let frame = 0;
    let raf: number;

    // Particles for debris
    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number; color: string }[] = [];
    for (let i = 0; i < 120; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 6;
      particles.push({
        x: cx, y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 3,
        r: 1 + Math.random() * 3,
        alpha: 1,
        color: `hsl(${20 + Math.random() * 40}, 100%, ${50 + Math.random() * 30}%)`,
      });
    }

    const draw = () => {
      frame++;
      ctx.clearRect(0, 0, W, H);

      const progress = Math.min(frame / 120, 1);

      // Ground flash
      if (frame < 20) {
        const flashAlpha = 1 - frame / 20;
        ctx.fillStyle = `rgba(255,255,240,${flashAlpha * 0.95})`;
        ctx.fillRect(0, 0, W, H);
      }

      // Shockwave ring
      if (frame > 10) {
        const shockR = (frame - 10) * 18;
        const shockAlpha = Math.max(0, 1 - (frame - 10) / 60);
        ctx.beginPath();
        ctx.arc(cx, cy, shockR, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255,200,100,${shockAlpha * 0.8})`;
        ctx.lineWidth = 8;
        ctx.stroke();

        // Second ring
        if (frame > 20) {
          const shock2R = (frame - 20) * 14;
          const shock2Alpha = Math.max(0, 1 - (frame - 20) / 50);
          ctx.beginPath();
          ctx.arc(cx, cy, shock2R, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255,120,40,${shock2Alpha * 0.5})`;
          ctx.lineWidth = 4;
          ctx.stroke();
        }
      }

      // Main fireball
      const fireballR = Math.min(frame * 5, 220);
      const fireGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, fireballR);
      fireGrad.addColorStop(0, `rgba(255,255,200,${Math.min(1, progress * 3)})`);
      fireGrad.addColorStop(0.3, `rgba(255,180,40,${Math.min(0.9, progress * 2)})`);
      fireGrad.addColorStop(0.7, `rgba(255,60,0,${Math.min(0.7, progress * 1.5)})`);
      fireGrad.addColorStop(1, "rgba(80,0,0,0)");
      ctx.beginPath();
      ctx.arc(cx, cy, fireballR, 0, Math.PI * 2);
      ctx.fillStyle = fireGrad;
      ctx.fill();

      // Mushroom stem
      if (frame > 30) {
        const stemProgress = Math.min((frame - 30) / 60, 1);
        const stemH = stemProgress * H * 0.5;
        const stemGrad = ctx.createLinearGradient(cx, cy, cx, cy - stemH);
        stemGrad.addColorStop(0, `rgba(255,120,20,${0.7 * stemProgress})`);
        stemGrad.addColorStop(0.5, `rgba(180,60,10,${0.5 * stemProgress})`);
        stemGrad.addColorStop(1, `rgba(100,30,5,${0.3 * stemProgress})`);
        ctx.beginPath();
        ctx.moveTo(cx - 40, cy);
        ctx.lineTo(cx + 40, cy);
        ctx.lineTo(cx + 20, cy - stemH);
        ctx.lineTo(cx - 20, cy - stemH);
        ctx.closePath();
        ctx.fillStyle = stemGrad;
        ctx.fill();

        // Mushroom cap
        if (frame > 50) {
          const capProgress = Math.min((frame - 50) / 60, 1);
          const capY = cy - stemH;
          const capR = capProgress * 160;
          const capGrad = ctx.createRadialGradient(cx, capY, 0, cx, capY, capR);
          capGrad.addColorStop(0, `rgba(255,140,30,${0.8 * capProgress})`);
          capGrad.addColorStop(0.5, `rgba(200,60,10,${0.6 * capProgress})`);
          capGrad.addColorStop(1, `rgba(80,20,5,0)`);
          ctx.beginPath();
          ctx.ellipse(cx, capY, capR, capR * 0.5, 0, 0, Math.PI * 2);
          ctx.fillStyle = capGrad;
          ctx.fill();
        }
      }

      // Debris particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.15;
        p.alpha -= 0.012;
        if (p.alpha > 0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha;
          ctx.fill();
          ctx.globalAlpha = 1;
        }
      });

      if (frame < 180) {
        raf = requestAnimationFrame(draw);
      } else {
        setFading(true);
        setTimeout(onDone, 800);
      }
    };

    draw();
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black"
      style={{
        opacity: fading ? 0 : 1,
        transition: fading ? "opacity 0.8s ease-out" : "none",
      }}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default NuclearExplosion;
