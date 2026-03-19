import { motion } from "framer-motion";
import { TrendingUp, BarChart2, BookOpen, FileText, ArrowRight, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

const featured = {
  category: "Regulatory Update",
  title: "FINRA Publishes 2026 Regulatory Oversight Report",
  excerpt:
    "FINRA released its nearly 90-page 2026 Annual Regulatory Oversight Report, highlighting emerging compliance risks for broker-dealers including generative AI, cybersecurity and cyber-enabled fraud, manipulative trading in small-cap equities, and third-party vendor risk. The report reemphasizes perennial focus areas such as Regulation Best Interest, best execution, net capital, and consolidated audit trail compliance.",
  date: "December 9, 2025",
  source: "FINRA",
  href: "https://www.finra.org/media-center/newsreleases/2025/finra-publishes-2026-regulatory-oversight-report-empower-member-firm",
};

const articles = [
  {
    category: "Industry Insight",
    icon: TrendingUp,
    title: "CME Says SEC Approved New Clearing House for Treasuries, Repo",
    excerpt:
      "The SEC approved CME Securities Clearing Inc. as a registered clearing agency for U.S. Treasury securities, creating a second central counterparty alongside DTCC's FICC ahead of the mandatory clearing deadlines.",
    date: "December 2, 2025",
    source: "Bloomberg",
    href: "https://www.bloomberg.com/news/articles/2025-12-02/cme-says-sec-approved-new-clearing-house-for-treasuries-repo",
  },
  {
    category: "Regulatory Update",
    icon: Activity,
    title: "SEC Extends U.S. Treasury Clearing Compliance Deadlines",
    excerpt:
      "The SEC extended mandatory central clearing compliance deadlines — pushing the cash market to December 31, 2026 and repo to June 30, 2027 — to give broker-dealers and clearing agencies additional time to resolve outstanding implementation issues.",
    date: "March 4, 2025",
    source: "Federal Register / SEC",
    href: "https://www.federalregister.gov/documents/2025/03/04/2025-03351/extension-of-compliance-dates-for-standards-for-covered-clearing-agencies-for-us-treasury-securities",
  },
  {
    category: "Compliance",
    icon: FileText,
    title: "SEC Issues FAQs for Broker-Dealers on Treasury Clearing Requirements",
    excerpt:
      "The SEC's Division of Trading and Markets issued detailed FAQs guiding broker-dealers through the customer protection rule amendments tied to the U.S. Treasury clearing mandate ahead of the 2026 deadline.",
    date: "August 6, 2025",
    source: "SEC.gov",
    href: "https://www.sec.gov/newsroom/press-releases/2025-105-staff-issues-faqs-help-broker-dealers-implement-financial-responsibility-requirements-related-us",
  },
  {
    category: "Enforcement",
    icon: BarChart2,
    title: "SEC and FINRA Enforcement Trends for Broker-Dealers: 2026 Outlook",
    excerpt:
      "An analysis of the significant leadership changes and 'back to basics' enforcement shift at the SEC and FINRA in 2025, and what broker-dealers should expect from examinations and enforcement in 2026.",
    date: "March 2026",
    source: "Morgan Lewis",
    href: "https://www.morganlewis.com/pubs/2026/03/sec-and-finra-enforcement-trends-for-broker-dealers-2025-2026",
  },
  {
    category: "Industry Insight",
    icon: BookOpen,
    title: "Securities Lending Outlook for 2026",
    excerpt:
      "An industry outlook examining T+1 expansion into European markets, Basel III endgame capital rules, increased lending activity in Asia-Pacific, and the integration of AI and collateral optimization into lending platforms.",
    date: "March 11, 2026",
    source: "Securities Finance Times",
    href: "https://www.securitiesfinancetimes.com/specialistfeatures/specialistfeature.php?specialist_id=946",
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
