import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

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
    body: "Scale your business and increase your firm's assets under management and profitability by offering a comprehensive range of services and execution routes from Velocity to benefit your clients.",
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
          <motion.div
            className="absolute w-72 h-72 rounded-full bg-blue-500/20 blur-3xl"
            animate={{ x: [0, 70, -30, 0], y: [0, -30, 40, 0] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
            style={{ top: "-4rem", left: "8%" }}
          />
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-blue-700/15 blur-3xl"
            animate={{ x: [0, -45, 25, 0], y: [0, 45, -25, 0] }}
            transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            style={{ bottom: "-6rem", right: "6%" }}
          />
          <motion.div
            className="absolute w-48 h-48 rounded-full bg-indigo-400/10 blur-2xl"
            animate={{ x: [0, 25, -15, 0], y: [0, -25, 15, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            style={{ top: "20%", right: "22%" }}
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
