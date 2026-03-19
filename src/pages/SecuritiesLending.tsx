import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

const subsections1 = [
  {
    title: "Easy-To-Borrow Securities",
    body: "For seamless transactions throughout the day, we provide an easy-to-borrow securities list to our clients before the market opening.",
  },
  {
    title: "Locate Required Securities",
    body: "We can help you locate stocks that require locates due to their limited supply, unlisted status, or low liquidity. TechSpeed specializes in locating the most in-demand securities for our clients.",
  },
  {
    title: "API Connectivity For Locates",
    body: "TechSpeed has streamlined the securities locate process by combining multiple trading system search functions into our platform allowing customers to complete transactions quickly. Through API connectivity, users on various trading platforms, grey boxes or black boxes can easily place short trades while comfortably remaining in compliance with industry regulations.",
  },
];

const subsections2 = [
  {
    title: "Securities Lending and Borrowing",
    body: "Techspeed's Securities Lending System, managed by a professional team, allows us to control costs and rates of securities lending and borrowing. We offer clients term loans on certain securities, providing protection from rate and term changes and removing recall risk. We can also re-rate loans for the benefit of our customers.",
  },
  {
    title: "Fully Paid Lending",
    body: "Fully paid for lending for clearing and prime customers offers portfolio rebate opportunities. TechSpeed can lend securities, receive rebates, and share with the client. Loans are secured by cash collateral and held at a separate bank in the customer's name. TechSpeed can offer fully paid lending to our omnibus customers and to fully disclosed customers on a case-by-case basis.",
  },
  {
    title: "Margin Lending",
    body: "Utilize margin lending through Regulation T or portfolio margin to trade on leverage or to access funding for a margin loan.",
    disclaimer: "*Margin borrowing entails significant risk and is only for experienced investors. You may lose more than your initial investment.",
  },
];

const SecuritiesLending = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Banner */}
        <div className="relative overflow-hidden bg-black py-24 flex items-center justify-center min-h-[280px]">
          <motion.div
            className="absolute w-80 h-80 rounded-full blur-3xl"
            style={{ background: "rgba(0,255,255,0.08)" }}
            animate={{ x: [0, 50, -30, 0], y: [0, -30, 40, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            style={{ top: "-5rem", left: "5%", background: "rgba(41,98,255,0.15)" }}
          />
          <motion.div
            className="absolute w-96 h-96 rounded-full blur-3xl"
            animate={{ x: [0, -40, 20, 0], y: [0, 40, -30, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            style={{ bottom: "-6rem", right: "8%", background: "rgba(61,90,254,0.12)" }}
          />
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: "linear-gradient(rgba(41,98,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(41,98,255,0.3) 1px, transparent 1px)",
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
              Financing Solutions
            </motion.p>
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-5"
              style={{ color: "#ffffff", textShadow: "0 0 30px rgba(41,98,255,0.4)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Securities Lending &amp; Financing
            </motion.h1>
            <motion.p
              className="text-white/60 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Full-service lending solutions including easy-to-borrow, hard-to-borrow locates, fully paid lending, and API connectivity.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-8 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { label: "Locate Access", value: "API" },
                { label: "Lending Types", value: "3+" },
                { label: "Collateral", value: "Cash Secured" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold" style={{ color: "#2962ff", textShadow: "0 0 12px rgba(41,98,255,0.8)" }}>{stat.value}</div>
                  <div className="text-xs text-white/50 mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <section className="py-16 bg-background">
          <div className="container max-w-5xl">
            <p className="text-muted-foreground leading-relaxed mb-12">
              TechSpeed Clearing specializes in securities lending services working with diverse
              counterparties to generate meaningful revenue for our clients. Featuring seasoned
              market expertise, an exceptional breadth of securities, and white glove client
              services, we work with multiple partners to &ldquo;locate&rdquo; a supply of
              securities to enable short sales and, for positions being held overnight, provision
              a loan of the actual shares themselves. We also offer fully paid lending, an
              excellent revenue opportunity for clients.
            </p>

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {subsections1.map((s) => (
                <div key={s.title}>
                  <h3 className="text-lg font-bold text-foreground mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {subsections2.map((s) => (
                <div key={s.title}>
                  <h3 className="text-lg font-bold text-foreground mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                  {s.disclaimer && (
                    <p className="text-xs text-muted-foreground/70 mt-3 italic">{s.disclaimer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        <CTABanner
          heading="Explore Our Lending Solutions"
          subtext="Contact our team to discuss how TechSpeed's securities lending and financing services can work for your business."
          buttonLabel="Get in Touch"
        />
      </main>
      <Footer />
    </div>
  );
};

export default SecuritiesLending;
