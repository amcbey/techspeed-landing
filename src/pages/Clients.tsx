import { motion } from "framer-motion";
import { Building2, TrendingUp, User, Landmark } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

const sections = [
  {
    id: "correspondent-clearing",
    number: "01",
    icon: TrendingUp,
    title: "Correspondent Clearing",
    body: "We provide competitive pricing, technological infrastructure, trading tools, real-time data, and client support including detailed reporting to prop traders, market makers, and high-frequency trading groups to help them excel in the high-risk, high-reward ecosystem in which they operate.",
  },
  {
    id: "proprietary-trading-groups",
    number: "02",
    icon: Building2,
    title: "Proprietary Trading Groups",
    body: "We provide capital, technological infrastructure, trading tools, real-time data, and client support to prop traders, market makers, and high-frequency trading groups to help them excel in the high-risk, high-reward ecosystem in which they operate.",
  },
  {
    id: "high-net-worth-individuals",
    number: "03",
    icon: User,
    title: "High Net Worth Individuals",
    body: "High-net-worth investment clients have unique tax needs requiring specialized investment products, services, and strategies. TechSpeed provides real-time data, market analysis, and the programs and services high net-worth individuals need to manage a more complex portfolio.",
  },
  {
    id: "family-offices",
    number: "04",
    icon: Landmark,
    title: "Family Offices & Institutional Clients",
    body: "Institutional clients invest large volumes of capital into markets, from funds to endowments, to private equity and venture capital. TechSpeed's agile business model flexes up or down to suit the needs of our clients offering robust systems and high-touch client care to execute at scale.",
  },
];

const Clients = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <div className="relative overflow-hidden bg-foreground py-24 flex items-center justify-center min-h-[280px]">
          <motion.div
            className="absolute w-72 h-72 rounded-full bg-blue-500/20 blur-3xl"
            animate={{ x: [0, 60, -40, 0], y: [0, -40, 30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            style={{ top: "-4rem", left: "10%" }}
          />
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-indigo-500/15 blur-3xl"
            animate={{ x: [0, -50, 30, 0], y: [0, 50, -20, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            style={{ bottom: "-6rem", right: "5%" }}
          />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "linear-gradient(rgba(96,165,250,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="relative z-10 text-center px-6">
            <motion.p
              className="text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#2962ff" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Who We Serve
            </motion.p>
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Our Clients
            </motion.h1>
            <motion.p
              className="text-white/60 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              From prop traders to institutional investors, TechSpeed Clearing delivers tailored solutions for every type of client.
            </motion.p>
          </div>
        </div>

        {/* Animated sections */}
        <section className="py-24 bg-background overflow-hidden">
          <div className="container max-w-4xl space-y-0">
            {sections.map((s, i) => (
              <motion.div
                key={s.id}
                id={s.id}
                className="relative flex flex-col gap-4 py-16 border-b border-border scroll-mt-24"
                initial={{ opacity: 0, scale: 0.95, rotateX: 8 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
              >
                {/* Giant background number */}
                <span
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-[10rem] font-black text-foreground/5 leading-none select-none pointer-events-none"
                >
                  {s.number}
                </span>

                <div className="flex items-center gap-4">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
                  >
                    <s.icon className="w-5 h-5 text-blue-500" strokeWidth={1.5} />
                  </motion.div>
                  <p className="text-blue-500 text-xs font-semibold tracking-widest uppercase">{s.number}</p>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-foreground">{s.title}</h2>
                <div className="w-12 h-0.5 bg-blue-500" />
                <p className="text-muted-foreground leading-relaxed max-w-2xl">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <CTABanner
          heading="Ready to Work With Us?"
          subtext="Reach out to learn how TechSpeed Clearing can serve your business, regardless of size or strategy."
          buttonLabel="Get in Touch"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Clients;
