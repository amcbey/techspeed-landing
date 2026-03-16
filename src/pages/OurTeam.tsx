import Header from "@/components/Header";
import Footer from "@/components/Footer";

const OurTeam = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 bg-background">
          <div className="container max-w-3xl">
            <h1 className="text-4xl font-bold text-foreground mb-6">Our Team</h1>
            <p className="text-muted-foreground leading-relaxed">
              {/* Placeholder — paragraph text to be added */}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurTeam;
