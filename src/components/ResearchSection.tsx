import { TrendingUp, BarChart2, BookOpen, FileText, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const articles = [
  {
    category: "Market Analysis",
    icon: TrendingUp,
    title: "Q1 2026 Equity Markets Outlook",
    excerpt:
      "An in-depth analysis of equity market trends, volatility patterns, and clearing volume projections for the first quarter of 2026.",
    date: "March 2026",
  },
  {
    category: "Risk Management",
    icon: BarChart2,
    title: "Margin Risk Framework: Best Practices",
    excerpt:
      "A comprehensive guide to margin risk assessment, stress testing methodologies, and regulatory compliance for broker-dealers.",
    date: "February 2026",
  },
  {
    category: "Industry Insight",
    icon: BookOpen,
    title: "The Future of Securities Lending",
    excerpt:
      "How evolving market dynamics, technology, and regulation are reshaping securities lending and fully paid lending programs.",
    date: "January 2026",
  },
  {
    category: "White Paper",
    icon: FileText,
    title: "Smart Order Routing in Modern Markets",
    excerpt:
      "Examining algorithmic execution strategies, dark pool access, and liquidity sourcing for optimal trade performance.",
    date: "December 2025",
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Research &amp; Insights
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            Market analysis, industry perspectives, and best-practice guides from
            the TechSpeed Clearing research team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <article
              key={article.title}
              className="flex flex-col bg-background rounded-lg border border-border p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <div className="flex items-center justify-between mb-4">
                <Badge variant="secondary" className="text-xs font-medium">
                  {article.category}
                </Badge>
                <span className="text-xs text-muted-foreground">{article.date}</span>
              </div>

              <div className="flex items-start gap-4 flex-1">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/10 transition-colors">
                  <article.icon className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-foreground mb-2 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <button className="flex items-center gap-1.5 text-xs font-medium text-foreground/60 hover:text-foreground transition-colors group/btn">
                  Read more
                  <ArrowRight
                    size={12}
                    className="transition-transform group-hover/btn:translate-x-0.5"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
