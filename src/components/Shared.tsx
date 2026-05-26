import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function PrimaryCTA({ children = "Initialize Your Build", to = "/contact" as const }: { children?: ReactNode; to?: "/contact" }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className="inline-block"
    >
      <Link
        to={to}
        className="inline-flex items-center gap-2 rounded-md bg-quantum-gradient px-6 py-3 text-sm font-medium text-white shadow-quantum hover:shadow-glow transition-shadow relative overflow-hidden group"
      >
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "200%" }}
          transition={{ duration: 0.6 }}
        />
        <span className="relative z-10">{children}</span>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative z-10"
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </motion.svg>
      </Link>
    </motion.div>
  );
}

export function OutlineCTA({ children, to }: { children: ReactNode; to: "/clients" | "/about" | "/contact" }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="inline-block"
    >
      <Link
        to={to}
        className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-6 py-3 text-sm font-medium text-foreground hover:border-signal hover:text-signal transition-colors group"
      >
        <span>{children}</span>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </motion.svg>
      </Link>
    </motion.div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-signal"
    >
      <motion.span
        initial={{ width: 0 }}
        whileInView={{ width: 32 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="h-px bg-signal"
      />
      {children}
    </motion.div>
  );
}

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative overflow-hidden rounded-2xl p-12 md:p-20 text-center animate-gradient-shift"
          style={{
            background: "linear-gradient(135deg, #0F1A7A 0%, #0F1A7A 30%, #1E2BFF 60%, #0F1A7A 100%)",
          }}
        >
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-signal/30 blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-violet/30 blur-3xl"
          />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold text-white max-w-3xl mx-auto">
              Stop fighting technical debt. Let's engineer your solution.
            </h2>
            <p className="mt-5 text-white/70 max-w-xl mx-auto">
              Partner with a dedicated engineering team that ships elite,
              production-grade systems.
            </p>
            <div className="mt-10">
              <PrimaryCTA>Initialize Your Build</PrimaryCTA>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
