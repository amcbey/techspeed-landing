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
            ctx.strokeStyle = `rgba(255,255,255,${0.12 * (1 - dist / 160)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      p.forEach(pt => {
        const x = (pt.x / 100) * canvas.width;
        const y = (pt.y / 100) * canvas.height;
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.4)";
        ctx.fill();
      });

      raf.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(raf.current!);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

const row1 = [
  {
    title: "Smart Order Routing",
    body: "Our low-touch tech provides algorithmic and smart order strategies to improve speed, optimize trade execution, and lower costs by finding the best available price for each order.",
  },
  {
    title: "Dark Pools, Markets",
    body: "Secure liquidity sources to execute orders and trades privately without impacting public market price. We focus on providing superior execution and economically sourced liquidity with sponsored access to all major exchanges, ECNs, ATSs, and single broker platforms.",
  },
  {
    title: "Correspondent Brokerage",
    body: "Scale your business and increase your firm's assets under management and profitability by offering a comprehensive range of services and execution routes from us to benefit your clients.",
  },
];

const row2 = [
  {
    title: "Performance Reporting",
    body: "Secured FTP and mobile access to data, analytics, and seamless integration for front, middle, and back-office workflows.",
  },
  {
    title: "High Touch Service",
    body: "For clients with high-volume, complex, or specialized processes, we provide high-touch, personalized, hands-on service from our highly experienced trading desk staff.",
  },
  {
    title: "Low Touch Service",
    body: "We provide low-touch services for clients looking for a more automated, independent model using our technology-driven tools.",
  },
];

const ExecutionServices = () => {
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
              Trade Execution
            </motion.p>
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Execution Services
            </motion.h1>
            <motion.p
              className="text-white/60 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              High-touch and low-touch execution with smart order routing, dark pool access, and real-time performance reporting.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-8 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { label: "Order Types", value: "Multi" },
                { label: "Liquidity", value: "Dark + Lit" },
                { label: "Reporting", value: "Real-Time" },
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
          <div className="container max-w-5xl">
            <p className="text-muted-foreground leading-relaxed mb-12">
              Our team of experts is focused on high-touch execution and providing our clients
              with transparency and flexibility to enhance their trading performance and
              operational efficiencies. The TechSpeed Clearing platform is system agnostic,
              works with any trading solution, and easily integrates with external systems.
              If your system isn&apos;t integrated with TechSpeed, we&apos;ll work with you
              to ensure a smooth and seamless transition.
            </p>

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {row1.map((s) => (
                <div key={s.title}>
                  <h3 className="text-lg font-bold text-foreground mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {row2.map((s) => (
                <div key={s.title}>
                  <h3 className="text-lg font-bold text-foreground mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <CTABanner
          heading="Enhance Your Execution Strategy"
          subtext="Contact our team to learn how TechSpeed's execution services can improve the quality and efficiency of your trading operations."
          buttonLabel="Get in Touch"
        />
      </main>
      <Footer />
    </div>
  );
};

export default ExecutionServices;
