import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
}

interface Pulse {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  progress: number;
  speed: number;
  alpha: number;
}

const CircuitBackground = () => {
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

    const COLS = 14;
    const ROWS = 7;
    const nodes: Node[] = [];
    const pulses: Pulse[] = [];

    // Build grid of nodes with slight random offset
    for (let r = 0; r <= ROWS; r++) {
      for (let c = 0; c <= COLS; c++) {
        nodes.push({
          x: (c / COLS) * W + (Math.random() - 0.5) * (W / COLS) * 0.4,
          y: (r / ROWS) * H + (Math.random() - 0.5) * (H / ROWS) * 0.4,
        });
      }
    }

    // Spawn a pulse along a random edge
    const spawnPulse = () => {
      const a = nodes[Math.floor(Math.random() * nodes.length)];
      const b = nodes[Math.floor(Math.random() * nodes.length)];
      if (a === b) return;
      pulses.push({
        fromX: a.x, fromY: a.y,
        toX: b.x, toY: b.y,
        progress: 0,
        speed: 0.008 + Math.random() * 0.014,
        alpha: 0.6 + Math.random() * 0.4,
      });
    };

    for (let i = 0; i < 12; i++) spawnPulse();

    let raf: number;
    let frame = 0;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Draw static circuit lines
      ctx.lineWidth = 0.6;
      for (let r = 0; r <= ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const a = nodes[r * (COLS + 1) + c];
          const b = nodes[r * (COLS + 1) + c + 1];
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = "rgba(41,98,255,0.12)";
          ctx.stroke();
        }
      }
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c <= COLS; c++) {
          const a = nodes[r * (COLS + 1) + c];
          const b = nodes[(r + 1) * (COLS + 1) + c];
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = "rgba(41,98,255,0.12)";
          ctx.stroke();
        }
      }

      // Draw nodes
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(65,105,225,0.25)";
        ctx.fill();
      });

      // Draw & update pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.progress += p.speed;

        const px = p.fromX + (p.toX - p.fromX) * p.progress;
        const py = p.fromY + (p.toY - p.fromY) * p.progress;

        // Trailing glow
        const grad = ctx.createRadialGradient(px, py, 0, px, py, 14);
        grad.addColorStop(0, `rgba(100,160,255,${p.alpha})`);
        grad.addColorStop(0.4, `rgba(41,98,255,${p.alpha * 0.4})`);
        grad.addColorStop(1, "rgba(41,98,255,0)");
        ctx.beginPath();
        ctx.arc(px, py, 14, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Bright core dot
        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180,220,255,${p.alpha})`;
        ctx.fill();

        if (p.progress >= 1) {
          pulses.splice(i, 1);
          spawnPulse();
        }
      }

      // Occasionally spawn extra pulses
      if (frame % 40 === 0 && pulses.length < 20) spawnPulse();
      frame++;

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

export default CircuitBackground;
