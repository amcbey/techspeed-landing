import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import logo from "@/assets/logo.png";

const serviceLinks = [
  { label: "Clearing & Custody", href: "/services/clearing-custody" },
  { label: "Securities Lending & Financing", href: "/services/securities-lending" },
  { label: "Execution Services", href: "/services/execution-services" },
];

const aboutLinks = [
  { label: "Our Mission", href: "/about/our-mission" },
  { label: "Our Team", href: "/about/our-team" },
];

const otherNavLinks = [
  { label: "Home", href: "/" },
  { label: "Clients", href: "/clients" },
  { label: "Research", href: "/research" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/")) {
      navigate(href);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSignOut = async () => {
    setMobileOpen(false);
    await signOut();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); navigate("/"); }}
          className="flex items-center gap-2 font-bold text-xl tracking-tight text-foreground"
        >
          <img src={logo} alt="TechSpeed logo" className="h-8 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {/* Home */}
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); navigate("/"); }}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </a>

          {/* Services dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors outline-none">
              Services <ChevronDown size={14} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {serviceLinks.map((link) => (
                <DropdownMenuItem
                  key={link.href}
                  onClick={() => navigate(link.href)}
                  className="cursor-pointer"
                >
                  {link.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Technology link */}
          <a
            href="/technology/fintrade"
            onClick={(e) => { e.preventDefault(); navigate("/technology/fintrade"); }}
            className="text-sm font-medium nav-tech-glow"
          >
            Technology
          </a>

          {/* About dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors outline-none">
              About <ChevronDown size={14} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-40">
              {aboutLinks.map((link) => (
                <DropdownMenuItem
                  key={link.href}
                  onClick={() => navigate(link.href)}
                  className="cursor-pointer"
                >
                  {link.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Other links */}
          {otherNavLinks.filter(l => l.label !== "Home").map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA buttons */}
        <div className="hidden md:flex items-center gap-2">
          {user ? (
            <>
              <span className="text-sm text-muted-foreground mr-2">{user.email}</span>
              <Button variant="nav-login" size="sm" onClick={handleSignOut}>
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button variant="nav-login" size="sm" onClick={() => window.open("https://clearingola.pacsquare.com/", "_blank")}>
                Log In
              </Button>
              <Button variant="nav-create" size="sm" onClick={() => window.open("https://clearingola.pacsquare.com/", "_blank")}>
                Create Account
              </Button>
            </>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background pb-4">
          <nav className="container flex flex-col gap-2 pt-4">
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); handleNavClick("/"); }}
              className="text-sm font-medium text-muted-foreground hover:text-foreground py-2 transition-colors"
            >
              Home
            </a>

            {/* Mobile Services expandable */}
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground py-2 transition-colors text-left"
            >
              Services <ChevronDown size={14} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 flex flex-col gap-2">
                {serviceLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-sm text-muted-foreground hover:text-foreground py-1 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            {/* Mobile Technology link */}
            <a
              href="/technology/fintrade"
              onClick={(e) => { e.preventDefault(); handleNavClick("/technology/fintrade"); }}
              className="text-sm font-medium text-muted-foreground hover:text-foreground py-2 transition-colors"
            >
              Technology
            </a>

            {/* Mobile About expandable */}
            <button
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground py-2 transition-colors text-left"
            >
              About <ChevronDown size={14} className={`transition-transform ${mobileAboutOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileAboutOpen && (
              <div className="pl-4 flex flex-col gap-2">
                {aboutLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-sm text-muted-foreground hover:text-foreground py-1 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            {otherNavLinks.filter(l => l.label !== "Home").map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-sm font-medium text-muted-foreground hover:text-foreground py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="flex gap-2 pt-2">
              {user ? (
                <>
                  <span className="text-sm text-muted-foreground self-center mr-2">{user.email}</span>
                  <Button variant="nav-login" size="sm" onClick={handleSignOut}>
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="nav-login" size="sm" onClick={() => { setMobileOpen(false); window.open("https://clearingola.pacsquare.com/", "_blank"); }}>
                    Log In
                  </Button>
                  <Button variant="nav-create" size="sm" onClick={() => { setMobileOpen(false); window.open("https://clearingola.pacsquare.com/", "_blank"); }}>
                    Create Account
                  </Button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
