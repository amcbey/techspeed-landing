import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

const ClearingCustody = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Banner */}
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
          <motion.div
            className="absolute w-48 h-48 rounded-full bg-blue-400/10 blur-2xl"
            animate={{ x: [0, 30, -20, 0], y: [0, -30, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            style={{ top: "20%", right: "25%" }}
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
