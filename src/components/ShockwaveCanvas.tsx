import { useEffect, useRef } from "react";

interface Ring {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  speed: number;
  width: number;
}

const ShockwaveCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rings = useRef<Ring[]>([]);
  const rafRef = useRef<number>(0);
  const cursorRef = useRef({ x: -999, y: -999 });
  const cursorTargetRef = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const spawnRings = (x: number, y: number) => {
      // Spawn 3 rings per click — thick, medium, thin
      [
        { speed: 7,  width: 6,  max: 320 },
        { speed: 10, width: 3,  max: 500 },
        { speed: 14, width: 1.5, max: 700 },
      ].forEach(({ speed, width, max }) => {
        rings.current.push({ x, y, radius: 0, maxRadius: max, alpha: 1, speed, width });
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth cursor orb
      cursorRef.current.x += (cursorTargetRef.current.x - cursorRef.current.x) * 0.1;
      cursorRef.current.y += (cursorTargetRef.current.y - cursorRef.current.y) * 0.1;

      const cx = cursorRef.current.x;
      const cy = cursorRef.current.y;

      if (cx > 0) {
        // Outer glow
        const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 80);
        glow.addColorStop(0, "rgba(41, 98, 255, 0.18)");
        glow.addColorStop(1, "rgba(41, 98, 255, 0)");
        ctx.beginPath();
        ctx.arc(cx, cy, 80, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Inner orb
        const inner = ctx.createRadialGradient(cx, cy, 0, cx, cy, 18);
        inner.addColorStop(0, "rgba(130, 170, 255, 0.9)");
        inner.addColorStop(0.4, "rgba(65, 105, 225, 0.7)");
        inner.addColorStop(1, "rgba(41, 98, 255, 0)");
        ctx.beginPath();
        ctx.arc(cx, cy, 18, 0, Math.PI * 2);
        ctx.fillStyle = inner;
        ctx.fill();
      }

      // Draw & update rings
      rings.current = rings.current.filter((r) => r.alpha > 0.01);
      rings.current.forEach((r) => {
        r.radius += r.speed;
        r.alpha = Math.max(0, 1 - r.radius / r.maxRadius);

        // Ring glow
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(65, 105, 225, ${r.alpha * 0.25})`;
        ctx.lineWidth = r.width * 4;
        ctx.stroke();

        // Sharp ring edge
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(140, 180, 255, ${r.alpha})`;
        ctx.lineWidth = r.width;
        ctx.stroke();
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    const onClick = (e: MouseEvent) => spawnRings(e.clientX, e.clientY);
    const onMove = (e: MouseEvent) => {
      cursorTargetRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("click", onClick);
    window.addEventListener("mousemove", onMove);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("click", onClick);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[50] pointer-events-none"
    />
  );
};

export default ShockwaveCanvas;
