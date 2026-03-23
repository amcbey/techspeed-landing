// Archived RocketCanvas animation — restore to OurMission.tsx hero if needed

import { useEffect, useRef } from "react";

export function RocketCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const raf = useRef<number>();
  const progress = useRef(0);
  const stars = useRef<{ x: number; y: number; r: number; o: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    stars.current = Array.from({ length: 60 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.2 + 0.3,
      o: Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      progress.current += 0.004;
      if (progress.current > 1.4) progress.current = 0;
      const t = Math.min(progress.current, 1);

      stars.current.forEach(s => {
        ctx.beginPath();
        ctx.arc(s.x * w, s.y * h, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.o})`;
        ctx.fill();
      });

      const moonX = w * 0.78;
      const moonY = h * 0.22;
      const moonR = Math.min(w, h) * 0.09;
      ctx.beginPath();
      ctx.arc(moonX, moonY, moonR, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.08)";
      ctx.fill();
      ctx.strokeStyle = "rgba(255,255,255,0.2)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      [[0.3, -0.3, 0.12], [-0.2, 0.2, 0.08], [0.1, 0.35, 0.06]].forEach(([dx, dy, dr]) => {
        ctx.beginPath();
        ctx.arc(moonX + dx * moonR * 2, moonY + dy * moonR * 2, dr * moonR * 2, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255,255,255,0.1)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      const startX = w * 0.2;
      const startY = h * 1.1;
      const endX = moonX;
      const endY = moonY;
      const cpX = w * 0.3;
      const cpY = h * -0.1;

      const rx = (1 - t) * (1 - t) * startX + 2 * (1 - t) * t * cpX + t * t * endX;
      const ry = (1 - t) * (1 - t) * startY + 2 * (1 - t) * t * cpY + t * t * endY;

      for (let i = 0; i < 18; i++) {
        const trail = Math.max(0, t - i * 0.012);
        if (trail <= 0) continue;
        const tx2 = (1 - trail) * (1 - trail) * startX + 2 * (1 - trail) * trail * cpX + trail * trail * endX;
        const ty2 = (1 - trail) * (1 - trail) * startY + 2 * (1 - trail) * trail * cpY + trail * trail * endY;
        ctx.beginPath();
        ctx.arc(tx2, ty2, 2.5 - i * 0.12, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(41,98,255,${0.4 - i * 0.02})`;
        ctx.fill();
      }

      const dt = 0.01;
      const t2 = Math.min(t + dt, 1);
      const nx = (1 - t2) * (1 - t2) * startX + 2 * (1 - t2) * t2 * cpX + t2 * t2 * endX;
      const ny = (1 - t2) * (1 - t2) * startY + 2 * (1 - t2) * t2 * cpY + t2 * t2 * endY;
      const angle = Math.atan2(ny - ry, nx - rx);

      ctx.save();
      ctx.translate(rx, ry);
      ctx.rotate(angle + Math.PI / 2);

      const rs = Math.min(w, h) * 0.035;
      ctx.beginPath();
      ctx.moveTo(0, -rs * 1.8);
      ctx.lineTo(rs * 0.5, rs * 0.8);
      ctx.lineTo(-rs * 0.5, rs * 0.8);
      ctx.closePath();
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(0, -rs * 0.4, rs * 0.22, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(41,98,255,0.8)";
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(-rs * 0.5, rs * 0.4);
      ctx.lineTo(-rs * 0.9, rs * 0.9);
      ctx.lineTo(-rs * 0.5, rs * 0.8);
      ctx.closePath();
      ctx.fillStyle = "rgba(255,255,255,0.6)";
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(rs * 0.5, rs * 0.4);
      ctx.lineTo(rs * 0.9, rs * 0.9);
      ctx.lineTo(rs * 0.5, rs * 0.8);
      ctx.closePath();
      ctx.fillStyle = "rgba(255,255,255,0.6)";
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(-rs * 0.3, rs * 0.8);
      ctx.lineTo(0, rs * 1.6);
      ctx.lineTo(rs * 0.3, rs * 0.8);
      ctx.closePath();
      ctx.fillStyle = "rgba(41,98,255,0.7)";
      ctx.fill();

      ctx.restore();

      raf.current = requestAnimationFrame(draw);
    };

    raf.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf.current!);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}
