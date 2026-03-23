import { Phone, Mail, MapPin, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo-footer.jpg";

const Footer = () => {
  const navigate = useNavigate();
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer>
      {/* Upper footer */}
      <div className="bg-footer-bg py-14">
        <div className="container grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Technology — FinTrade", href: "/technology/fintrade" },
                { label: "Clients", href: "/clients" },
                { label: "Research", href: "/research" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={(e) => { e.preventDefault(); if (l.href.startsWith("/")) { navigate(l.href); window.scrollTo(0, 0); } else { scrollTo(l.href); } }}
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
            <h4 className="font-bold text-foreground mb-4">Products & Services</h4>
            <ul className="space-y-2">
              {[
                { label: "Clearing & Custody", href: "/services/clearing-custody" },
                { label: "Securities Lending & Financing", href: "/services/securities-lending" },
                { label: "Execution Services", href: "/services/execution-services" },
                { label: "Corporate Treasury", href: "/services/corporate-treasury" },
                { label: "Regulatory & Compliance", href: "/services/regulatory-compliance" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={(e) => { e.preventDefault(); navigate(l.href); window.scrollTo(0, 0); }}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="font-bold text-foreground mb-4">About Us</h4>
            <ul className="space-y-2">
              {[
                { label: "Our Mission", href: "/about/our-mission" },
                { label: "Our Team", href: "/about/our-team" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={(e) => { e.preventDefault(); if (l.href.startsWith("/")) { navigate(l.href); window.scrollTo(0, 0); } else { scrollTo(l.href); } }}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Privacy */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Legal &amp; Privacy</h4>
            <ul className="space-y-2">
              {[
                { label: "Privacy Policy", href: "/privacy-policy.pdf" },
                { label: "Terms of Use", href: "/disclosures" },
                { label: "Regulatory Disclosures", href: "/disclosures" },
                { label: "FINRA BrokerCheck", href: "https://brokercheck.finra.org/firm/summary/313766" },
                { label: "SIPC", href: "https://www.sipc.org" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={(e) => { if (l.href.startsWith("/") && !l.href.endsWith(".pdf")) { e.preventDefault(); navigate(l.href); window.scrollTo(0, 0); } }}
                    target={l.href.startsWith("http") || l.href.endsWith(".pdf") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") || l.href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
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
                <a href="mailto:Info@techspeedclearing.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Mail size={16} /> Info@techspeedclearing.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={16} /> 16479 Dallas Parkway, Suite #135, Addison, Texas 75001
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Trust badges strip */}
      <div className="bg-secondary/60 border-t border-border py-5">
        <div className="container flex flex-wrap items-center justify-center gap-4">
          {[
            { label: "Member", sub: "FINRA", color: "border-blue-300 text-blue-800 bg-blue-50" },
            { label: "Member", sub: "SIPC", color: "border-blue-300 text-blue-800 bg-blue-50" },
            { label: "Registered", sub: "SEC", color: "border-blue-300 text-blue-800 bg-blue-50" },
          ].map((b) => (
            <div key={b.sub} className={`flex items-center gap-2 px-4 py-2 rounded border ${b.color} text-xs font-semibold`}>
              <span className="text-[10px] font-normal uppercase tracking-wider opacity-70">{b.label}</span>
              <span className="text-sm font-bold">{b.sub}</span>
            </div>
          ))}
          <div className="text-xs text-muted-foreground pl-2 hidden md:block">
            TechSpeed Clearing LLC — Broker-Dealer · SEC · FINRA · SIPC
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="bg-footer-bottom-bg py-10">
        <div className="container flex flex-col items-center gap-5">
          {/* Logo */}
          <div className="flex items-center gap-2 font-bold text-lg text-footer-bottom-foreground">
            <img src={logo} alt="TechSpeed logo" className="h-64 w-auto object-contain" />
          </div>

          <a
            href="https://www.linkedin.com/company/techspeed-clearing-llc/posts/?feedView=all"
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
              <a href="https://www.theocc.com/getcontentasset/a151a9ae-d784-4a15-bdeb-23a029f50b70/dfc3d011-8f63-43f6-9ed8-4b444333a1d0/riskstoc.pdf" target="_blank" rel="noopener noreferrer" className="italic underline hover:text-footer-bottom-foreground transition-colors">Characteristics and Risks of Standardized Options</a> before trading options.
            </p>
            <p className="text-xs text-footer-bottom-foreground/50 text-center leading-relaxed">
              Check the background of TechSpeed Clearing LLC and its registered representatives on{" "}
              <a href="https://brokercheck.finra.org/firm/summary/313766" target="_blank" rel="noopener noreferrer" className="underline hover:text-footer-bottom-foreground transition-colors">FINRA BrokerCheck</a>.
              &nbsp;|&nbsp;
              <a href="/disclosures" className="underline hover:text-footer-bottom-foreground transition-colors">Regulatory Disclosures</a>
              &nbsp;|&nbsp; © {new Date().getFullYear()} TechSpeed Clearing LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
