import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 99.9, suffix: "%", label: "Platform Uptime" },
  { value: 25,   suffix: "+", label: "Years of Experience" },
  { value: 500,  suffix: "B+", label: "Assets Cleared Daily", prefix: "$" },
  { value: 24,   suffix: "/7", label: "Client Support" },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * target).toFixed(1)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);

  return count;
}

function StatCard({ stat, active }: { stat: typeof stats[0]; active: boolean }) {
  const count = useCountUp(stat.value, 1800, active);
  const display = Number.isInteger(stat.value) ? Math.round(count) : count.toFixed(1);

  return (
    <div className="flex flex-col items-center text-center px-6 py-8">
      <div className="text-4xl md:text-5xl font-black text-primary-foreground mb-2 tabular-nums">
        {stat.prefix ?? ""}{display}{stat.suffix}
      </div>
      <div className="text-sm font-medium text-primary-foreground/60 uppercase tracking-widest">
        {stat.label}
      </div>
    </div>
  );
}

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-foreground border-y border-white/5">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {stats.map((s) => (
            <StatCard key={s.label} stat={s} active={active} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
