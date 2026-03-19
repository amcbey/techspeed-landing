import { motion } from "framer-motion";
import { TrendingUp, BarChart2, BookOpen, FileText, ArrowRight, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

const featured = {
  category: "Regulatory Update",
  title: "2025 FINRA Annual Regulatory Oversight Report",
  excerpt:
    "FINRA's annual report covers 24 compliance priority areas for broker-dealers, including Regulation Best Interest, AML and fraud, third-party vendor risk, cybersecurity, AI in securities, extended-hours trading, and liquidity risk management — serving as a key compliance roadmap for the industry.",
  date: "January 2025",
  source: "FINRA",
  href: "https://www.finra.org/rules-guidance/guidance/reports/2025-finra-annual-regulatory-oversight-report",
};

const articles = [
  {
    category: "Regulatory Update",
    icon: Activity,
    title: "T+1 Settlement: What Investors Need to Know",
    excerpt:
      "The SEC's investor bulletin explains the rule shortening the standard settlement cycle from two business days to one for stocks, bonds, ETFs, and other securities.",
    date: "2024",
    source: "SEC.gov",
    href: "https://www.sec.gov/resources-for-investors/investor-alerts-bulletins/new-t1-settlement-cycle-what-investors-need-know-investor-bulletin",
    icon2: Activity,
  },
  {
    category: "Risk Alert",
    icon: BarChart2,
    title: "Shortening the Securities Transaction Settlement Cycle",
    excerpt:
      "The SEC's Division of Examinations outlines compliance expectations, operational readiness areas, and specific risks examiners reviewed during the T+1 transition.",
    date: "March 27, 2024",
    source: "SEC.gov",
    href: "https://www.sec.gov/compliance/risk-alerts/shortening-securities-transaction-settlement-cycle",
  },
  {
    category: "Press Release",
    icon: FileText,
    title: "SEC Extends Compliance Dates for U.S. Treasury Clearing Rules",
    excerpt:
      "The SEC extended mandatory central clearing deadlines for U.S. Treasury cash and repo transactions, giving broker-dealers and clearing firms additional time to meet operational requirements.",
    date: "2025",
    source: "SEC.gov",
    href: "https://www.sec.gov/newsroom/press-releases/2025-43",
  },
  {
    category: "Industry Insight",
    icon: BookOpen,
    title: "Impacts of Mandatory Clearing for U.S. Treasury Repo",
    excerpt:
      "DTCC examines how the SEC's mandate requiring central clearing of Treasury repo transactions will reshape risk management, margin requirements, and operational workflows for clearing firms.",
    date: "June 17, 2024",
    source: "DTCC",
    href: "https://www.dtcc.com/dtcc-connection/articles/2024/june/17/impacts-of-mandatory-clearing-for-us-treasury-repo",
  },
  {
    category: "Market Analysis",
    icon: TrendingUp,
    title: "Regulation, Deals, and Crypto: Fintech Themes to Watch in 2025",
    excerpt:
      "Bloomberg identifies deregulation, a rebound in fintech M&A, and expanding use of AI and blockchain in capital markets as the defining forces shaping broker-dealers and trading infrastructure in 2025.",
    date: "January 1, 2025",
    source: "Bloomberg",
    href: "https://www.bloomberg.com/news/articles/2025-01-01/regulation-deals-and-crypto-fintech-themes-to-watch-in-2025",
  },
];

const Research = () => {
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
              className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Knowledge Center
            </motion.p>
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Research &amp; Insights
            </motion.h1>
            <motion.p
              className="text-white/60 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Market analysis, industry perspectives, and best-practice guides from the TechSpeed Clearing research team.
            </motion.p>
          </div>
        </div>

        {/* Featured article */}
        <section className="py-14 bg-background border-b border-border">
          <div className="container max-w-5xl">
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-6">Featured</p>
            <motion.div
              className="bg-secondary/40 rounded-xl border border-border p-8 flex flex-col md:flex-row gap-8 hover:shadow-md transition-shadow group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="secondary">{featured.category}</Badge>
                  <span className="text-xs text-muted-foreground">{featured.date}</span>
                  <span className="text-xs text-muted-foreground">· {featured.source}</span>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3 leading-snug">{featured.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-5">{featured.excerpt}</p>
                <a
                  href={featured.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors group/btn"
                >
                  Read full report
                  <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-0.5" />
                </a>
              </div>
              <div className="hidden md:flex items-center justify-center w-40 shrink-0">
                <div className="w-28 h-28 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Activity className="w-12 h-12 text-blue-500" strokeWidth={1} />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article grid */}
        <section className="py-16 bg-background">
          <div className="container max-w-5xl">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-8">Latest Articles</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article, i) => (
                <motion.article
                  key={article.title}
                  className="flex flex-col bg-background rounded-lg border border-border p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="text-xs font-medium">{article.category}</Badge>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{article.date}</span>
                      <span>· {article.source}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/10 transition-colors">
                      <article.icon className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-foreground mb-2 leading-snug">{article.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{article.excerpt}</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <a
                      href={article.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-foreground/60 hover:text-foreground transition-colors group/btn"
                    >
                      Read more
                      <ArrowRight size={12} className="transition-transform group-hover/btn:translate-x-0.5" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          heading="Speak With Our Team"
          subtext="Our professionals are ready to answer your questions and help you find the right clearing solution for your business."
          buttonLabel="Contact Us"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Research;
