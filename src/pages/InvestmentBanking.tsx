import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";


const InvestmentBanking = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Banner */}
        <div className="relative overflow-hidden bg-foreground py-24 flex items-center justify-center min-h-[280px]">
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
              Capital Markets
            </motion.p>
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Investment Banking
            </motion.h1>
            <motion.p
              className="text-white/60 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Strategic advisory, capital raising, and transaction services to help businesses grow, restructure, and access the capital markets.
            </motion.p>
          </div>
        </div>

        <section className="py-16 bg-background">
          <div className="container max-w-4xl">
            <p className="text-muted-foreground leading-relaxed">
              Content coming soon.
            </p>
          </div>
        </section>

        <CTABanner
          heading="Explore Investment Banking Services"
          subtext="Contact our team to discuss how TechSpeed can support your capital markets and advisory needs."
          buttonLabel="Get in Touch"
        />
      </main>
      <Footer />
    </div>
  );
};

export default InvestmentBanking;
