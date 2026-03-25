import { motion } from "framer-motion";
import Header from "@/components/Header";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import InquirySection from "@/components/InquirySection";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <ServicesSection />
        </motion.div>
        {/* Audited Financial Statements Banner */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <div className="bg-foreground py-10">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-1 h-12 bg-primary rounded-full hidden md:block" />
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-1">Transparency & Trust</p>
                  <h3 className="text-xl font-bold text-white">Audited Financial Statements</h3>
                  <p className="text-white/50 text-sm mt-1">Audited financials for the fiscal year 2025.</p>
                </div>
              </div>
              <a
                href="/audited-financial-statements-2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg shadow-[0_0_20px_rgba(41,98,255,0.3)] hover:shadow-[0_0_30px_rgba(41,98,255,0.5)] transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                View Audited Financials
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <WhyChooseSection />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <InquirySection />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
