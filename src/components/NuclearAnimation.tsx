import { useEffect, useRef, useState } from "react";

const TOTAL_MS = 3800;
const FADE_MS = 900;

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  r: number; alpha: number;
  color: string;
  gravity: number;
}

const NuclearAnimation = ({ onDone }: { onDone: () => void }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fading, setFading] = useState(false);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const spawnedRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const resize = () => {
      W = window.innerWidth; H = window.innerHeight;
      canvas.width = W; canvas.height = H;
    };
    window.addEventListener("resize", resize);

    const spawnParticles = () => {
      const cx = W / 2;
      const gy = H * 0.72; // ground level
      const colors = ["#ff6a00","#ff4500","#ffaa00","#ff8c00","#fff3a0","#ff3300","#ffd700"];
      for (let i = 0; i < 220; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 2 + Math.random() * 14;
        particlesRef.current.push({
          x: cx + (Math.random() - 0.5) * 40,
          y: gy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 6,
          r: 2 + Math.random() * 6,
          alpha: 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          gravity: 0.08 + Math.random() * 0.12,
        });
      }
    };

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
    const easeIn  = (t: number) => t * t * t;

    const draw = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const t = Math.min(elapsed / TOTAL_MS, 1);

      ctx.clearRect(0, 0, W, H);

      const cx = W / 2;
      const groundY = H * 0.72;

      // ── Sky background — darkens on flash then settles
      const flashT = Math.min(elapsed / 300, 1);
      const flashDecay = elapsed > 300 ? Math.max(0, 1 - (elapsed - 300) / 600) : 0;
      const skyBright = flashT * 255 * flashDecay;
      ctx.fillStyle = `rgb(${Math.round(skyBright)},${Math.round(skyBright * 0.5)},0)`;
      ctx.fillRect(0, 0, W, H);

      // Base dark sky
      ctx.fillStyle = `rgba(5, 2, 0, ${0.6 + t * 0.3})`;
      ctx.fillRect(0, 0, W, H);

      // ── Ground flash — bright circle at base
      if (elapsed < 800) {
        const gfT = easeOut(Math.min(elapsed / 300, 1));
        const gfDecay = elapsed > 200 ? Math.max(0, 1 - (elapsed - 200) / 600) : 1;
        const gfR = gfT * W * 0.7;
        const gGrad = ctx.createRadialGradient(cx, groundY, 0, cx, groundY, gfR);
        gGrad.addColorStop(0, `rgba(255,255,200,${gfDecay})`);
        gGrad.addColorStop(0.2, `rgba(255,180,0,${gfDecay * 0.8})`);
        gGrad.addColorStop(0.6, `rgba(255,60,0,${gfDecay * 0.4})`);
        gGrad.addColorStop(1, "rgba(255,0,0,0)");
        ctx.beginPath();
        ctx.ellipse(cx, groundY, gfR, gfR * 0.35, 0, 0, Math.PI * 2);
        ctx.fillStyle = gGrad;
        ctx.fill();
      }

      // ── Shockwave rings
      [0, 180, 320].forEach((delay, i) => {
        const rt = elapsed - delay;
        if (rt < 0) return;
        const rProgress = easeOut(Math.min(rt / 1200, 1));
        const rAlpha = Math.max(0, 1 - rProgress * 1.4);
        const rRadius = rProgress * W * (0.55 + i * 0.15);
        ctx.beginPath();
        ctx.ellipse(cx, groundY, rRadius, rRadius * 0.22, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 180, 60, ${rAlpha * 0.8})`;
        ctx.lineWidth = 3 - i;
        ctx.stroke();

        // outer glow ring
        ctx.beginPath();
        ctx.ellipse(cx, groundY, rRadius, rRadius * 0.22, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 100, 0, ${rAlpha * 0.3})`;
        ctx.lineWidth = 14 - i * 3;
        ctx.stroke();
      });

      // ── Spawn particles once
      if (elapsed > 100 && !spawnedRef.current) {
        spawnedRef.current = true;
        spawnParticles();
      }

      // ── Draw particles
      particlesRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.vx *= 0.98;
        p.alpha -= 0.008;
        if (p.alpha < 0) p.alpha = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.round(p.alpha * 255).toString(16).padStart(2, "0");
        ctx.fill();
      });

      // ── Fireball stem (column rising up)
      if (elapsed > 100) {
        const stemT = easeOut(Math.min((elapsed - 100) / 1800, 1));
        const stemH = stemT * H * 0.6;
        const stemW = 60 + stemT * 40;
        const stemGrad = ctx.createLinearGradient(cx, groundY, cx, groundY - stemH);
        stemGrad.addColorStop(0, `rgba(255,140,0,${0.9 * (1 - t * 0.4)})`);
        stemGrad.addColorStop(0.4, `rgba(200,60,0,${0.7 * (1 - t * 0.4)})`);
        stemGrad.addColorStop(1, `rgba(80,30,10,${0.5 * (1 - t * 0.4)})`);
        ctx.beginPath();
        ctx.ellipse(cx, groundY - stemH / 2, stemW / 2, stemH / 2, 0, 0, Math.PI * 2);
        ctx.fillStyle = stemGrad;
        ctx.fill();
      }

      // ── Mushroom cap
      if (elapsed > 400) {
        const capT = easeOut(Math.min((elapsed - 400) / 1600, 1));
        const capY = groundY - H * 0.35 - capT * H * 0.25;
        const capRX = capT * W * 0.32;
        const capRY = capT * H * 0.18;

        // Underbelly glow
        const underGrad = ctx.createRadialGradient(cx, capY, 0, cx, capY, capRX);
        underGrad.addColorStop(0, `rgba(255,120,0,${0.6 * (1 - t * 0.5)})`);
        underGrad.addColorStop(0.5, `rgba(180,50,0,${0.4 * (1 - t * 0.5)})`);
        underGrad.addColorStop(1, "rgba(40,10,0,0)");
        ctx.beginPath();
        ctx.ellipse(cx, capY, capRX, capRY, 0, 0, Math.PI * 2);
        ctx.fillStyle = underGrad;
        ctx.fill();

        // Main cap body — layered smoke
        for (let layer = 0; layer < 5; layer++) {
          const lScale = 0.6 + layer * 0.12;
          const lAlpha = (0.7 - layer * 0.1) * (1 - t * 0.5);
          const lY = capY - layer * 18;
          const capGrad = ctx.createRadialGradient(cx, lY, 0, cx, lY, capRX * lScale);
          capGrad.addColorStop(0, `rgba(240,100,10,${lAlpha})`);
          capGrad.addColorStop(0.3, `rgba(160,50,5,${lAlpha * 0.9})`);
          capGrad.addColorStop(0.7, `rgba(80,25,5,${lAlpha * 0.6})`);
          capGrad.addColorStop(1, "rgba(20,5,0,0)");
          ctx.beginPath();
          ctx.ellipse(cx, lY, capRX * lScale, capRY * lScale, 0, 0, Math.PI * 2);
          ctx.fillStyle = capGrad;
          ctx.fill();
        }

        // Bright core
        const coreAlpha = Math.max(0, 0.9 - t * 1.5);
        const coreGrad = ctx.createRadialGradient(cx, capY, 0, cx, capY, capRX * 0.35);
        coreGrad.addColorStop(0, `rgba(255,255,200,${coreAlpha})`);
        coreGrad.addColorStop(0.5, `rgba(255,180,50,${coreAlpha * 0.7})`);
        coreGrad.addColorStop(1, "rgba(255,80,0,0)");
        ctx.beginPath();
        ctx.ellipse(cx, capY, capRX * 0.35, capRY * 0.5, 0, 0, Math.PI * 2);
        ctx.fillStyle = coreGrad;
        ctx.fill();
      }

      // ── Dust cloud at ground
      if (elapsed > 200) {
        const dustT = easeOut(Math.min((elapsed - 200) / 1400, 1));
        const dustR = dustT * W * 0.65;
        const dustGrad = ctx.createRadialGradient(cx, groundY, 0, cx, groundY, dustR);
        dustGrad.addColorStop(0, `rgba(100,60,20,${0.7 * (1 - t * 0.6)})`);
        dustGrad.addColorStop(0.5, `rgba(60,35,10,${0.5 * (1 - t * 0.6)})`);
        dustGrad.addColorStop(1, "rgba(20,10,0,0)");
        ctx.beginPath();
        ctx.ellipse(cx, groundY, dustR, dustR * 0.2, 0, 0, Math.PI * 2);
        ctx.fillStyle = dustGrad;
        ctx.fill();
      }

      if (elapsed < TOTAL_MS) {
        rafRef.current = requestAnimationFrame(draw);
      } else {
        setFading(true);
        setTimeout(onDone, FADE_MS);
      }
    };

    // Initial black fill
    ctx.fillStyle = "#000";
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
        transition: fading ? `opacity ${FADE_MS}ms ease-in-out` : undefined,
        pointerEvents: "none",
      }}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default NuclearAnimation;
