import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/about", label: "About" },
  { to: "/clients", label: "Clients" },
  { to: "/expertise", label: "Expertise" },
  { to: "/community", label: "Community" },
  { to: "/careers", label: "Careers" },
  { to: "/blog", label: "Blog" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong shadow-quantum" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative h-8 w-8">
            <div className="absolute inset-0 rounded-md bg-quantum-gradient shadow-glow" />
            <div className="absolute inset-[3px] rounded-[5px] bg-background flex items-center justify-center">
              <span className="font-mono text-xs font-bold text-signal">X</span>
            </div>
          </div>
          <span className="font-semibold tracking-tight text-foreground">
            XStakUp
          </span>
          <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-widest text-muted-foreground border border-border rounded px-1.5 py-0.5 ml-1">
            FTRX Group
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors relative"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-md bg-quantum-gradient px-4 py-2 text-sm font-medium text-white shadow-quantum hover:shadow-glow transition-all"
          >
            Initialize Your Build
            <span aria-hidden>→</span>
          </Link>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="md:hidden text-foreground"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden glass-strong border-t border-border">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-md bg-quantum-gradient px-4 py-2 text-sm font-medium text-white"
            >
              Initialize Your Build
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
