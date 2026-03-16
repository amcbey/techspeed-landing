import Header from "@/components/Header";
import Footer from "@/components/Footer";

const OurMission = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 bg-background">
          <div className="container max-w-3xl">
            <h1 className="text-4xl font-bold text-foreground mb-6">Our Mission</h1>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to power the financial ecosystem with uncompromising integrity,
              seamless operational excellence, and innovative clearing solutions that empower
              our clients to grow with confidence. We strive to remove friction from every
              transaction, safeguard the markets we serve, and deliver the clarity, reliability,
              and partnership that enable firms to thrive in a rapidly evolving financial landscape.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurMission;
