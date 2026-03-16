import Header from "@/components/Header";
import Footer from "@/components/Footer";

const row1 = [
  {
    title: "Smart Order Routing",
    body: "Our low-touch tech provides algorithmic and smart order strategies to improve speed, optimize trade execution, and lower costs by finding the best available price for each order.",
  },
  {
    title: "Dark Pools, Markets",
    body: "Secure liquidity sources to execute orders and trades privately without impacting public market price. We focus on providing superior execution and economically sourced liquidity with sponsored access to all major exchanges, ECNs, ATSs, and single broker platforms.",
  },
  {
    title: "Correspondent Brokerage",
    body: "Scale your business and increase your firm's assets under management and profitability by offering a comprehensive range of services and execution routes from Velocity to benefit your clients.",
  },
];

const row2 = [
  {
    title: "Performance Reporting",
    body: "Secured FTP and mobile access to data, analytics, and seamless integration for front, middle, and back-office workflows.",
  },
  {
    title: "High Touch Service",
    body: "For clients with high-volume, complex, or specialized processes, we provide high-touch, personalized, hands-on service from our highly experienced trading desk staff.",
  },
  {
    title: "Low Touch Service",
    body: "We provide low-touch services for clients looking for a more automated, independent model using our technology-driven tools.",
  },
];

const ExecutionServices = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 bg-background">
          <div className="container max-w-5xl">
            <h1 className="text-4xl font-bold text-foreground mb-6">Execution Services</h1>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Our team of experts is focused on high-touch execution and providing our clients
              with transparency and flexibility to enhance their trading performance and
              operational efficiencies. The TechSpeed Clearing platform is system agnostic,
              works with any trading solution, and easily integrates with external systems.
              If your system isn&apos;t integrated with TechSpeed, we&apos;ll work with you
              to ensure a smooth and seamless transition.
            </p>

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {row1.map((s) => (
                <div key={s.title}>
                  <h3 className="text-lg font-bold text-foreground mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {row2.map((s) => (
                <div key={s.title}>
                  <h3 className="text-lg font-bold text-foreground mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ExecutionServices;
