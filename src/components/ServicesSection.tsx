import { ArrowLeftRight, TrendingUp, Zap, Landmark, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: ArrowLeftRight,
    title: "Clearing & Custody",
    href: "/services/clearing-custody",
    description: "Comprehensive post-trade processing across equities, options, and fixed income — with competitive rates and custom reporting.",
    iconClass: "icon-float",
  },
  {
    icon: TrendingUp,
    title: "Securities Lending & Financing",
    href: "/services/securities-lending",
    description: "Full-service lending solutions including easy-to-borrow, hard-to-borrow locates, fully paid lending, and API connectivity.",
    iconClass: "icon-float",
  },
  {
    icon: Zap,
    title: "Execution Services",
    href: "/services/execution-services",
    description: "Smart order routing with dark pool access, high and low touch execution, and real-time performance reporting.",
    iconClass: "icon-shake",
  },
  {
    icon: Landmark,
    title: "Corporate Treasury",
    href: "/services/corporate-treasury",
    description: "Comprehensive treasury management solutions to optimize liquidity, manage risk, and support your organization's financial operations.",
    iconClass: "icon-float",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory & Compliance",
    href: "/services/regulatory-compliance",
    description: "End-to-end regulatory support and compliance frameworks to keep your firm operating within the highest standards of the industry.",
    iconClass: "icon-float",
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 [&>*:last-child]:md:col-span-2 [&>*:last-child]:md:max-w-sm [&>*:last-child]:md:mx-auto [&>*:last-child]:md:w-full">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
              onClick={() => navigate(s.href)}
              className="btn-fill flex flex-col items-center text-center p-6 rounded-lg border border-transparent hover:border-blue-500/40 hover:shadow-[0_0_18px_2px_rgba(41,98,255,0.15)] transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-primary/10">
                <s.icon className="w-7 h-7 text-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
