import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sections = [
  {
    id: "correspondent-clearing",
    title: "Correspondent Clearing",
    body: "We provide competitive pricing, technological infrastructure, trading tools, real-time data, and client support including detailed reporting to prop traders, market makers, and high-frequency trading groups to help them excel in the high-risk, high-reward ecosystem in which they operate.",
  },
  {
    id: "proprietary-trading-groups",
    title: "Proprietary Trading Groups",
    body: "We provide capital, technological infrastructure, trading tools, real-time data, and client support to prop traders, market makers, and high-frequency trading groups to help them excel in the high-risk, high-reward ecosystem in which they operate.",
  },
  {
    id: "high-net-worth-individuals",
    title: "High Net Worth Individuals",
    body: "High-net-worth investment clients have unique tax needs requiring specialized investment products, services, and strategies. TechSpeed provides real-time data, market analysis, and the programs and services high net-worth individuals need to manage a more complex portfolio.",
  },
  {
    id: "family-offices",
    title: "Family Offices & Institutional Clients",
    body: "Institutional clients invest large volumes of capital into markets, from funds to endowments, to private equity and venture capital. TechSpeed's agile business model flexes up or down to suit the needs of our clients offering robust systems and high-touch client care to execute at scale.",
  },
];

const Clients = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Content sections */}
        <section className="py-16 bg-background">
          <div className="container max-w-3xl flex flex-col gap-16">
            {sections.map((s) => (
              <div key={s.id} id={s.id} className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-foreground mb-4">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Clients;
