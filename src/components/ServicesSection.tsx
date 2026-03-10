import { Workflow, ShieldCheck, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Workflow,
    title: "Clearing & Settlement",
    description: "Streamlined clearing and settlement services to ensure accurate and reliable trade execution.",
  },
  {
    icon: ShieldCheck,
    title: "Custody Services",
    description: "Secure custody and reporting solutions to manage and protect your assets with confidence.",
  },
  {
    icon: BarChart3,
    title: "Risk Management",
    description: "Advanced risk management solutions to safeguard your investments and optimize performance.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex flex-col items-center text-center p-6 rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-1 cursor-default group"
            >
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <s.icon className="w-8 h-8 text-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
