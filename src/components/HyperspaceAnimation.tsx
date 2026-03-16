import { useEffect, useRef, useState } from "react";

const DURATION_MS = 2800;
const FADE_MS = 600;
const STAR_COUNT = 300;

interface Star {
  x: number; // origin x relative to center
  y: number; // origin y relative to center
  z: number; // depth (0 = far, 1 = close)
  speed: number;
  brightness: number;
}

const HyperspaceAnimation = ({ onDone }: { onDone: () => void }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fading, setFading] = useState(false);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number>(0);
  const starsRef = useRef<Star[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const initStars = () => {
      starsRef.current = Array.from({ length: STAR_COUNT }, () => ({
        x: (Math.random() - 0.5) * W,
        y: (Math.random() - 0.5) * H,
        z: Math.random() * 0.3, // start far away
        speed: 0.4 + Math.random() * 0.6,
        brightness: 0.6 + Math.random() * 0.4,
      }));
    };
    initStars();

    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
      initStars();
    };
    window.addEventListener("resize", resize);

    const draw = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const progress = Math.min(elapsed / DURATION_MS, 1);

      // Acceleration curve — slow start, fast finish
      const accel = Math.pow(progress, 2.5);

      const cx = W / 2;
      const cy = H / 2;

      ctx.fillStyle = "rgba(0, 0, 8, 0.3)";
      ctx.fillRect(0, 0, W, H);

      starsRef.current.forEach((star) => {
        star.z += star.speed * 0.012 * (0.5 + accel * 6);
        if (star.z >= 1) {
          star.x = (Math.random() - 0.5) * W;
          star.y = (Math.random() - 0.5) * H;
          star.z = 0;
        }

        const scale = 1 / (1 - star.z);
        const sx = cx + star.x * scale;
        const sy = cy + star.y * scale;

        // Previous position for streak
        const prevScale = 1 / (1 - Math.max(0, star.z - 0.04 * (1 + accel * 5)));
        const px = cx + star.x * prevScale;
        const py = cy + star.y * prevScale;

        const size = 0.5 + star.z * 2.5;
        const alpha = star.brightness * Math.min(star.z * 3, 1);

        // Streak
        const grad = ctx.createLinearGradient(px, py, sx, sy);
        grad.addColorStop(0, `rgba(180, 210, 255, 0)`);
        grad.addColorStop(1, `rgba(220, 235, 255, ${alpha})`);

        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(sx, sy);
        ctx.strokeStyle = grad;
        ctx.lineWidth = size * (1 + accel * 1.5);
        ctx.stroke();

        // Star dot at tip
        ctx.beginPath();
        ctx.arc(sx, sy, size * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240, 248, 255, ${alpha})`;
        ctx.fill();
      });

      if (elapsed < DURATION_MS) {
        rafRef.current = requestAnimationFrame(draw);
      } else {
        setFading(true);
        setTimeout(onDone, FADE_MS);
      }
    };

    // Black fill before first frame
    ctx.fillStyle = "rgb(0,0,8)";
    ctx.fillRect(0, 0, W, H);

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-[100]"
      style={{
        opacity: fading ? 0 : 1,
        transition: fading ? `opacity ${FADE_MS}ms ease-out` : undefined,
        pointerEvents: "none",
      }}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default HyperspaceAnimation;
