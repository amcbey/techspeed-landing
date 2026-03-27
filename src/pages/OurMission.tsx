import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const statements = [
  {
    heading: "We Remove Friction.",
    body: "Every unnecessary step, every delay, every point of failure — we eliminate it. Our clearing infrastructure is built to make complexity invisible.",
    align: "left",
  },
  {
    heading: "We Power Growth.",
    body: "Our clients don't just survive in volatile markets — they thrive. We give firms the operational backbone to scale without limits.",
    align: "right",
  },
  {
    heading: "We Operate with Integrity.",
    body: "Integrity is non-negotiable. Every trade we touch is processed with precision, transparency, and an unwavering commitment to market safety.",
    align: "left",
  },
  {
    heading: "We Move with Speed.",
    body: "In financial markets, milliseconds matter. Our technology is engineered for performance — fast, reliable, and always on.",
    align: "right",
  },
  {
    heading: "We Deliver Clarity.",
    body: "No surprises. No ambiguity. Our clients always know where they stand — with real-time data, custom reporting, and direct access to our team.",
    align: "left",
  },
];

const OurMission = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <div className="relative overflow-hidden bg-foreground py-28 flex items-center justify-center min-h-[300px]">
          <div className="relative z-10 text-center px-6 max-w-3xl">
            <motion.p
              className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#4169E1" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Who We Are
            </motion.p>
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Our Mission
            </motion.h1>
            <motion.p
              className="text-white/60 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              To power the financial ecosystem with uncompromising integrity, seamless operational
              excellence, and innovative clearing solutions that empower our clients to grow with confidence.
            </motion.p>
          </div>
        </div>

        {/* Manifesto */}
        <section className="py-24 bg-background overflow-hidden">
          <div className="container max-w-4xl space-y-24">
            {statements.map((s, i) => (
              <motion.div
                key={s.heading}
                className={`flex flex-col ${s.align === "right" ? "items-end text-right" : "items-start text-left"}`}
                initial={{ opacity: 0, x: s.align === "right" ? 80 : -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <div className="max-w-xl">
                  <p className="text-blue-500 text-xs font-semibold tracking-widest uppercase mb-3">
                    0{i + 1}
                  </p>
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                    {s.heading.includes("Speed") ? (
                      <>We Move with <span className="animated-gradient-text">Speed.</span></>
                    ) : s.heading}
                  </h2>
                  <div className={`w-16 h-0.5 bg-blue-500 mb-4 ${s.align === "right" ? "ml-auto" : ""}`} />
                  <p className="text-muted-foreground leading-relaxed text-lg">{s.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurMission;
