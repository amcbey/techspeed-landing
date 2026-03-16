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
                <a href="tel:+12142829256" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Phone size={16} /> 214-282-9256
                </a>
              </li>
              <li>
                <a href="mailto:general@techspeedclearing.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Mail size={16} /> general@techspeedclearing.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={16} /> 16479 Dallas Parkway, Addison, Texas 75001
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="bg-footer-bottom-bg py-10">
        <div className="container flex flex-col items-center gap-5">
          {/* Logo */}
          <div className="flex items-center gap-2 font-bold text-lg text-footer-bottom-foreground">
            <img src={logo} alt="TechSpeed logo" className="h-12 w-auto object-contain" />
          </div>

          <a
            href="https://www.linkedin.com/company/techspeed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-footer-bottom-foreground/60 hover:text-footer-bottom-foreground transition-colors"
          >
            <Linkedin size={20} />
          </a>

          {/* Regulatory disclosures */}
          <div className="w-full border-t border-white/10 pt-5 flex flex-col gap-3 max-w-4xl">
            <p className="text-xs text-footer-bottom-foreground/70 text-center leading-relaxed">
              <span className="font-semibold text-footer-bottom-foreground/90">TechSpeed Clearing LLC</span> is a registered broker-dealer with the U.S. Securities and Exchange Commission (SEC) and a member of the{" "}
              <a href="https://www.finra.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-footer-bottom-foreground transition-colors">Financial Industry Regulatory Authority (FINRA)</a>{" "}
              and the{" "}
              <a href="https://www.sipc.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-footer-bottom-foreground transition-colors">Securities Investor Protection Corporation (SIPC)</a>.
            </p>
            <p className="text-xs text-footer-bottom-foreground/70 text-center leading-relaxed">
              Securities products and services offered through TechSpeed Clearing LLC are <span className="font-semibold">not FDIC insured</span>, are <span className="font-semibold">not bank deposits or obligations</span>, are <span className="font-semibold">not guaranteed by any bank</span>, and <span className="font-semibold">may lose value</span>.
            </p>
            <p className="text-xs text-footer-bottom-foreground/70 text-center leading-relaxed">
              SIPC protects customers of SIPC-member broker-dealers if the firm fails financially, covering up to $500,000 per customer (including up to $250,000 for cash claims). SIPC protection does not cover investment losses due to market fluctuation. For more information, visit{" "}
              <a href="https://www.sipc.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-footer-bottom-foreground transition-colors">www.sipc.org</a>{" "}
              or call SIPC at (202) 371-8300.
            </p>
            <p className="text-xs text-footer-bottom-foreground/70 text-center leading-relaxed">
              Margin trading involves significant risk and is not suitable for all investors. You may lose more than your initial investment. Options trading involves risk and is not appropriate for all investors. Please read the{" "}
              <span className="italic">Characteristics and Risks of Standardized Options</span> before trading options.
            </p>
            <p className="text-xs text-footer-bottom-foreground/50 text-center leading-relaxed">
              Check the background of TechSpeed Clearing LLC and its registered representatives on{" "}
              <a href="https://brokercheck.finra.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-footer-bottom-foreground transition-colors">FINRA BrokerCheck</a>.
              &nbsp;|&nbsp; © {new Date().getFullYear()} TechSpeed Clearing LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
