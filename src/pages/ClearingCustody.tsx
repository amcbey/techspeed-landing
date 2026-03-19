import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

const NODE_COUNT = 28;
const nodes = Array.from({ length: NODE_COUNT }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  dx: (Math.random() - 0.5) * 0.015,
  dy: (Math.random() - 0.5) * 0.015,
}));

function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pts = useRef(nodes.map(n => ({ ...n })));
  const raf = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const draw = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const p = pts.current;
      p.forEach(pt => {
        pt.x += pt.dx;
        pt.y += pt.dy;
        if (pt.x < 0 || pt.x > 100) pt.dx *= -1;
        if (pt.y < 0 || pt.y > 100) pt.dy *= -1;
      });

      // Draw edges
      for (let i = 0; i < p.length; i++) {
        for (let j = i + 1; j < p.length; j++) {
          const ax = (p[i].x / 100) * canvas.width;
          const ay = (p[i].y / 100) * canvas.height;
          const bx = (p[j].x / 100) * canvas.width;
          const by = (p[j].y / 100) * canvas.height;
          const dist = Math.hypot(ax - bx, ay - by);
          if (dist < 160) {
            ctx.beginPath();
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
            ctx.strokeStyle = `rgba(96,165,250,${0.12 * (1 - dist / 160)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      p.forEach(pt => {
        const x = (pt.x / 100) * canvas.width;
        const y = (pt.y / 100) * canvas.height;
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(96,165,250,0.4)";
        ctx.fill();
      });

      raf.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(raf.current!);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

const ClearingCustody = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Banner */}
        <div className="relative overflow-hidden bg-foreground py-24 flex items-center justify-center min-h-[280px]">
          <NetworkCanvas />
          <div className="relative z-10 text-center px-6">
            <motion.p
              className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Post-Trade Solutions
            </motion.p>
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Clearing &amp; Custody
            </motion.h1>
            <motion.p
              className="text-white/60 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Comprehensive post-trade processing with competitive pricing, custom reporting, and support for clients of any size.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-8 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { label: "", value: "Clearing" },
                { label: "", value: "Custody" },
                { label: "", value: "Reporting" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                  <div className="text-xs text-white/50 mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <section className="py-16 bg-background">
          <div className="container max-w-4xl">
            <p className="text-muted-foreground leading-relaxed mb-12">
              TechSpeed offers robust clearing and execution services with highly competitive pricing.
              In addition, we can scale to support any client, regardless of size or location, while
              providing custom reporting and a focus on customer service.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">Correspondent Clearing Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We provide comprehensive clearing services using one system for post-trade processing,
              boosting efficiency, reducing risk and allowing us to offer competitive rates for
              matching, clearing, settlement and custody.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Equities &amp; ETFs</li>
              <li>Options on Equities &amp; ETFs</li>
              <li>Fixed Income and Mutual Funds</li>
            </ul>
          </div>
        </section>
        <CTABanner
          heading="Begin Your Clearing Relationship"
          subtext="Reach out to our team to discuss how TechSpeed Clearing can support your clearing and custody needs."
          buttonLabel="Get in Touch"
        />
      </main>
      <Footer />
    </div>
  );
};

export default ClearingCustody;
