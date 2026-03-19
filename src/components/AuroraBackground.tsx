import { useEffect, useRef } from "react";

const AuroraBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = canvas.offsetWidth;
    let H = canvas.offsetHeight;
    canvas.width = W;
    canvas.height = H;

    let t = 0;
    let raf: number;

    const orbs = [
      { x: 0.2, y: 0.3, r: 0.45, color: [41, 98, 255], speed: 0.0004 },
      { x: 0.7, y: 0.6, r: 0.5,  color: [99, 60, 220], speed: 0.0003 },
      { x: 0.5, y: 0.1, r: 0.4,  color: [0, 160, 255], speed: 0.0005 },
      { x: 0.85, y: 0.2, r: 0.35, color: [80, 40, 200], speed: 0.0006 },
    ];

    const draw = () => {
      t += 1;
      ctx.clearRect(0, 0, W, H);

      orbs.forEach((orb, i) => {
        const cx = (orb.x + Math.sin(t * orb.speed + i * 1.5) * 0.18) * W;
        const cy = (orb.y + Math.cos(t * orb.speed + i * 2.1) * 0.15) * H;
        const radius = orb.r * Math.min(W, H);

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        grad.addColorStop(0, `rgba(${orb.color[0]},${orb.color[1]},${orb.color[2]},0.22)`);
        grad.addColorStop(0.5, `rgba(${orb.color[0]},${orb.color[1]},${orb.color[2]},0.08)`);
        grad.addColorStop(1, `rgba(${orb.color[0]},${orb.color[1]},${orb.color[2]},0)`);

        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    draw();

    const resize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ filter: "blur(40px)" }}
    />
  );
};

export default AuroraBackground;
