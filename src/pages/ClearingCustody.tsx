import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ClearingCustody = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 bg-background">
          <div className="container max-w-4xl">
            <h1 className="text-4xl font-bold text-foreground mb-6">Clearing &amp; Custody</h1>
            <p className="text-muted-foreground leading-relaxed mb-12">
              TechSpeed offers robust clearing and execution services with highly competitive pricing.
              In addition, we can scale to support any client, regardless of size or location, while
              providing custom reporting and a focus on customer service.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">Correspondent Clearing Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We provide comprehensive clearing services using one system for post-trade processing,
              boosting efficiency, reducing risk and allowing us to offer competitive rates for
              matching, clearing, settlement and custody.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Equities &amp; ETFs</li>
              <li>Options on Equities &amp; ETFs</li>
              <li>Fixed Income and Mutual Funds</li>
              <li>Futures</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ClearingCustody;
