import { useEffect, useRef } from "react";

const symbols = [
  "SPY", "QQQ", "AAPL", "MSFT", "NVDA", "GS", "JPM", "BAC", "BRK", "XLF",
  "+1.24%", "-0.38%", "+2.17%", "-1.05%", "+0.89%", "+3.41%", "-0.72%",
  "19,842", "4,521.3", "438.92", "182.64", "521.10", "147.33", "38,204",
  "BUY", "SELL", "FILL", "EXEC", "ACK", "CLR", "STL",
];

interface Particle {
  x: number;
  y: number;
  text: string;
  speed: number;
  alpha: number;
  fadeIn: boolean;
  size: number;
}

const MarketDataBackground = () => {
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

    const particles: Particle[] = [];

    const spawn = (): Particle => ({
      x: Math.random() * W,
      y: H + 20,
      text: symbols[Math.floor(Math.random() * symbols.length)],
      speed: 0.3 + Math.random() * 0.5,
      alpha: 0,
      fadeIn: true,
      size: 10 + Math.random() * 4,
    });

    for (let i = 0; i < 30; i++) {
      const p = spawn();
      p.y = Math.random() * H;
      p.alpha = Math.random() * 0.15;
      particles.push(p);
    }

    let raf: number;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.font = `${12}px monospace`;

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.y -= p.speed;

        if (p.fadeIn) {
          p.alpha += 0.003;
          if (p.alpha >= 0.18) p.fadeIn = false;
        } else {
          p.alpha -= 0.001;
        }

        if (p.y < -20 || p.alpha <= 0) {
          particles.splice(i, 1);
          particles.push(spawn());
          continue;
        }

        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = "#2962ff";
        ctx.font = `${p.size}px monospace`;
        ctx.fillText(p.text, p.x, p.y);
      }

      ctx.globalAlpha = 1;
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
    />
  );
};

export default MarketDataBackground;
