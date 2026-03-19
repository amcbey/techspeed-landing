import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroVideo from "@/assets/hero-video2.mp4";
import CTABanner from "@/components/CTABanner";

const sections = [
  {
    title: "A Modern Trading Environment",
    body: "FinTrade delivers a streamlined experience designed for both speed and precision. Clients can place orders, review positions, and access account information through a single, integrated platform. The interface has been structured to prioritise usability without compromising on functionality. Clear dashboards, logical workflows, and real-time data allow clients to make informed decisions with confidence.",
    bullets: null,
    footer: null,
  },
  {
    title: "Order Management & Execution",
    body: "The platform supports the full lifecycle of a trade — from order entry through to confirmation and reporting.",
    bullets: [
      "Market, limit, and stop order functionality",
      "Real-time order status updates",
      "Trade confirmations and detailed transaction records",
      "Automated validation and compliance checks",
      "Comprehensive audit trails",
    ],
    footer: "Every transaction is processed within a secure and controlled framework designed to maintain accuracy and operational integrity.",
  },
  {
    title: "Portfolio & Account Oversight",
    body: "FinTrade provides complete visibility over holdings and account balances. Clients can monitor performance, review historical activity, and access statements at any time.",
    bullets: [
      "Live position tracking",
      "Profit and loss reporting",
      "Cash and balance visibility",
      "Historical transaction review",
      "Downloadable documentation",
    ],
    footer: "All information is presented clearly to support ongoing portfolio oversight and reporting requirements.",
  },
  {
    title: "Security & Infrastructure",
    body: "Security underpins every aspect of the FinTrade platform. Our infrastructure is designed to safeguard client data and ensure system resilience.",
    bullets: [
      "Encrypted data transmission",
      "Multi-factor authentication",
      "Controlled user permissions",
      "Continuous system monitoring",
      "Secure hosting environment",
    ],
    footer: "The platform is built to align with regulatory expectations and industry best practices.",
  },
  {
    title: "Integration & Scalability",
    body: "FinTrade has been engineered with flexibility in mind. Its architecture supports integration with market data providers, custodians, and internal systems, ensuring operational efficiency across the investment process. The system is scalable and adaptable, allowing for future enhancements as client requirements and market conditions evolve.",
    bullets: null,
    footer: null,
  },
  {
    title: "Our Approach to Technology",
    body: "Technology is not an add-on to our service — it is central to it. FinTrade has been developed to enhance transparency, strengthen control, and deliver a dependable trading experience for our clients. We continue to invest in its development to ensure the platform remains robust, secure, and aligned with the needs of modern investors.",
    bullets: null,
    footer: null,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

function AnimatedSection({ section, index }: { section: typeof sections[0]; index: number }) {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      key={section.title}
      className="border-t border-border pt-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      custom={0}
      variants={fadeUp}
    >
      <h2 className="text-2xl font-bold text-foreground mb-4">{section.title}</h2>
      <p className="text-muted-foreground leading-relaxed mb-4">{section.body}</p>
      {section.bullets && (
        <>
          <p className="text-muted-foreground mb-3">Capabilities include:</p>
          <ul className="space-y-2 mb-4">
            {section.bullets.map((b, i) => (
              <motion.li
                key={b}
                className="flex items-center gap-2 text-muted-foreground"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeLeft}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                {b}
              </motion.li>
            ))}
          </ul>
        </>
      )}
      {section.footer && (
        <p className="text-muted-foreground leading-relaxed">{section.footer}</p>
      )}
    </motion.div>
  );
}

const FinTrade = () => {
  const heroRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Animated hero banner */}
        <div ref={heroRef} className="relative overflow-hidden bg-foreground py-24 flex items-center justify-center min-h-[320px]">
          <video ref={videoRef} autoPlay muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/10" />
          {/* Animated grid lines */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "linear-gradient(rgba(96,165,250,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <motion.div
            className="relative z-10 text-center px-6"
            style={{ y: heroY, opacity: heroOpacity }}
          >
            <motion.p
              className="text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#2962ff" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Proprietary Platform
            </motion.p>
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-5"
              style={{ color: "#ffffff" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              FinTrade Order Management System
            </motion.h1>
            <motion.p
              className="text-white/60 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              FinTrade is our proprietary Order Management System, developed to provide clients
              with a secure, efficient, and transparent trading environment.
            </motion.p>

            {/* Animated stats bar */}
            <motion.div
              className="flex flex-wrap justify-center gap-8 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { label: "Uptime", value: "99.9%" },
                { label: "Asset Classes", value: "Multi" },
                { label: "Security", value: "MFA + Encrypted" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold" style={{ color: "#2962ff", textShadow: "0 0 10px rgba(41,98,255,1), 0 0 30px rgba(41,98,255,0.8), 0 0 60px rgba(41,98,255,0.5)" }}>{stat.value}</div>
                  <div className="text-xs text-white/50 mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Intro text */}
        <motion.section
          className="py-12 bg-background border-b border-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="container max-w-4xl">
            <p className="text-muted-foreground leading-relaxed">
              The platform combines institutional-grade infrastructure with a clean, intuitive
              interface, allowing clients to manage transactions and monitor portfolios with
              clarity and control. Built in-house, FinTrade reflects our commitment to
              reliability, performance, and continuous innovation.
            </p>
          </div>
        </motion.section>

        {/* Content sections */}
        <section className="py-16 bg-background">
          <div className="container max-w-4xl space-y-12">
            {sections.map((s, i) => (
              <AnimatedSection key={s.title} section={s} index={i} />
            ))}
          </div>
        </section>
        <CTABanner
          heading="Schedule a FinTrade Demo"
          subtext="Reach out to our team to arrange a demonstration and learn how FinTrade can streamline your trading operations."
          buttonLabel="Request a Demo"
        />
      </main>
      <Footer />
    </div>
  );
};

export default FinTrade;
