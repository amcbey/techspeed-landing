import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#inquiry")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[520px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <img
          src={heroBg}
          alt="Technology abstract background"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
      <div className="container relative z-20 py-20 md:py-28">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground mb-4">
            Accelerating Your Financial Success
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Trusted Clearing Solutions for Investors & Financial Institutions
          </p>
          <div className="flex items-center gap-4">
            <Button variant="hero" size="lg" onClick={scrollToContact}>Get Started</Button>
            <Button variant="hero-outline" size="lg" onClick={scrollToServices}>Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
