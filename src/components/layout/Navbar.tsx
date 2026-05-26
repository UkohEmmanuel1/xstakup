"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { NavLink } from "@/types";

const links: NavLink[] = [
  { to: "/about", label: "About" },
  { to: "/clients", label: "Clients" },
  { to: "/expertise", label: "Expertise" },
  { to: "/community", label: "Community" },
  { to: "/careers", label: "Careers" },
  { to: "/blog", label: "Blog" },
];

const menuVariants = {
  hidden: { opacity: 0, y: -12, scaleY: 0.95 },
  visible: { opacity: 1, y: 0, scaleY: 1, transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { opacity: 0, y: -12, scaleY: 0.95, transition: { duration: 0.2 } },
};

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 z-50" onClick={() => setOpen(false)}>
      <motion.div
        whileHover={{ scale: 1.05, rotate: -3 }}
        className="relative h-12 w-12 flex-shrink-0"
      >
        <motion.div
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-lg bg-quantum-gradient shadow-glow"
        />
        <div className="absolute inset-[4px] rounded-[6px] bg-background flex items-center justify-center">
          <img
            src="/assets/logo.png"
            alt="XStakUp Logo"
            className="h-full w-full object-contain p-1"
          />
        </div>
      </motion.div>
      <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-widest text-muted-foreground border border-border rounded px-1.5 py-0.5 ml-1">
        FTRX Group
      </span>
    </Link>
  );
}

function DesktopNav() {
  const pathname = usePathname();
  return (
    <nav className="hidden md:flex items-center gap-1">
      {links.map((l) => (
        <Link
          key={l.to}
          href={l.to}
          className={`px-3 py-2 text-sm transition-colors relative group ${
            pathname === l.to
              ? "text-foreground font-medium"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {l.label}
          <span className="absolute bottom-0 left-3 right-3 h-px bg-signal scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </Link>
      ))}
    </nav>
  );
}

function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="md:hidden absolute top-16 inset-x-0 w-full glass-strong border-b border-border origin-top"
        >
          <nav className="flex flex-col px-6 py-5 gap-2">
            {links.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
              >
                <Link
                  href={l.to}
                  onClick={onClose}
                  className={`py-2.5 text-base border-b border-border/10 last:border-0 transition-colors block ${
                    pathname === l.to
                      ? "text-foreground font-semibold border-l-2 border-signal pl-3"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/contact"
                onClick={onClose}
                className="mt-4 inline-flex w-full justify-center items-center gap-2 rounded-md bg-quantum-gradient px-4 py-3 text-sm font-medium text-white shadow-quantum"
              >
                Initialize Your Build
              </Link>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function HamburgerButton({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Toggle Menu"
      className="md:hidden flex items-center justify-center p-2 text-foreground focus:outline-none"
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform duration-200"
      >
        {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
      </svg>
    </button>
  );
}

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
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "glass-strong shadow-quantum border-b border-border/40"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />
        <DesktopNav />

        <div className="flex items-center gap-3 z-50">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-md bg-quantum-gradient px-4 py-2 text-sm font-medium text-white shadow-quantum hover:shadow-glow transition-shadow relative overflow-hidden group"
            >
              <span className="relative z-10">Initialize Your Build</span>
              <motion.span
                className="absolute inset-0 bg-white/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.4 }}
              />
            </Link>
          </motion.div>

          <HamburgerButton open={open} onClick={() => setOpen(!open)} />
        </div>
      </div>

      <MobileNav open={open} onClose={() => setOpen(false)} />
    </motion.header>
  );
}
