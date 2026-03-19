import { motion } from "framer-motion";
import { ShieldCheck, Lock, BadgeCheck } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "SIPC Protected",
    body: "Client assets held with TechSpeed are protected by the Securities Investor Protection Corporation (SIPC) up to $500,000, including up to $250,000 for cash claims.",
    badge: "Member SIPC",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    icon: Lock,
    title: "SEC Registered",
    body: "TechSpeed Clearing LLC is a registered broker-dealer with the U.S. Securities and Exchange Commission, subject to ongoing regulatory oversight and compliance requirements.",
    badge: "SEC Registered",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    icon: BadgeCheck,
    title: "FINRA Member",
    body: "As a FINRA member firm, TechSpeed Clearing is held to the highest standards of professional conduct. Verify our registration anytime on FINRA BrokerCheck.",
    badge: "Member FINRA",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
];

const TrustSection = () => (
  <section className="py-20 bg-secondary/40 border-y border-border">
    <div className="container">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase mb-2">Regulatory Standing</p>
        <h2 className="text-3xl font-bold text-foreground mb-3">Your Assets Are Protected</h2>
        <p className="text-muted-foreground text-sm max-w-xl mx-auto">
          TechSpeed Clearing operates under strict regulatory oversight to ensure the safety,
          integrity, and protection of every client relationship.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            className="bg-background rounded-lg border border-border p-6 flex flex-col gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <p.icon className="w-5 h-5 text-blue-600" strokeWidth={1.5} />
              </div>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${p.badgeColor}`}>
                {p.badge}
              </span>
            </div>
            <div>
              <h3 className="text-base font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-center text-xs text-muted-foreground mt-8 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Check the background of TechSpeed Clearing LLC on{" "}
        <a
          href="https://brokercheck.finra.org/firm/summary/313766"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800 transition-colors"
        >
          FINRA BrokerCheck
        </a>
        . SIPC coverage does not protect against market losses.
      </motion.p>
    </div>
  </section>
);

export default TrustSection;
