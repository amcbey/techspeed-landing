import Header from "@/components/Header";
import ResearchSection from "@/components/ResearchSection";
import Footer from "@/components/Footer";

const Research = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ResearchSection />
      </main>
      <Footer />
    </div>
  );
};

export default Research;
