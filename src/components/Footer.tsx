import { Phone, Mail, MapPin, Linkedin } from "lucide-react";
import logo from "@/assets/logo-white.png";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer>
      {/* Upper footer */}
      <div className="bg-footer-bg py-14">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {["Clearing & Settlement", "Custody Services", "Risk Management"].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); scrollTo("#services"); }}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div id="contact">
            <h4 className="font-bold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+18001234567" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Phone size={16} /> +1-800-123-4567
                </a>
              </li>
              <li>
                <a href="mailto:info@techspeedclearing.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Mail size={16} /> info@techspeedclearing.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={16} /> US Office: 1234 Financial St, New York, NY 10001
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="bg-footer-bottom-bg py-10">
        <div className="container flex flex-col items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 font-bold text-lg text-footer-bottom-foreground">
            <img src={logo} alt="TechSpeed logo" className="h-12 w-auto brightness-0 invert object-contain" />
          </div>
          <p className="text-xs text-footer-bottom-foreground/60 text-center max-w-2xl leading-relaxed">
            Investment products and services are not FDIC insured, are not bank guaranteed, and may lose value. TechSpeed Clearing is a registered broker-dealer and member of FINRA/SIPC.
          </p>

          <a
            href="https://www.linkedin.com/company/techspeed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-footer-bottom-foreground/60 hover:text-footer-bottom-foreground transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
