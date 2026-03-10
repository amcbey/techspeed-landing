import { Star, ShieldCheck, HeartHandshake } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const reasons = [
  {
    icon: Star,
    title: "Proven Expertise",
    description: "Years of experience in financial clearing and risk management.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description: "Top-tier security and reliability in safeguarding client assets.",
  },
  {
    icon: HeartHandshake,
    title: "Client-Focused",
    description: "Dedicated support and tailored solutions for your needs.",
  },
];

const WhyChooseSection = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-foreground/85 z-10" />
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
      </div>

      <div className="container relative z-20">
        <h2 className="text-3xl font-bold text-primary-foreground text-center mb-12">
          Why Choose TechSpeed Clearing?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="flex flex-col items-start p-6 rounded-lg transition-all duration-200 hover:bg-primary-foreground/10 cursor-default group"
            >
              <div className="flex items-center gap-3 mb-3">
                <r.icon className="w-6 h-6 text-primary-foreground" strokeWidth={2} />
                <h3 className="text-lg font-bold text-primary-foreground">{r.title}</h3>
              </div>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
