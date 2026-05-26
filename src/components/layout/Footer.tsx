"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const staggerColVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.5 },
  }),
};

const columns = [
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/careers", label: "Careers" },
      { to: "/blog", label: "Blog" },
      { to: "/community", label: "Community" },
    ],
  },
  {
    title: "Expertise",
    links: [
      { to: "/expertise", label: "Product Engineering" },
      { to: "/expertise", label: "Web3 & Blockchain" },
      { to: "/expertise", label: "AI & Machine Learning" },
      { to: "/expertise", label: "Fintech Solutions" },
    ],
  },
  {
    title: "Work",
    links: [
      { to: "/clients", label: "Client Deployments" },
      { to: "/clients", label: "XPay" },
      { to: "/clients", label: "Quik" },
      { to: "/clients", label: "Cashflow Africa" },
    ],
  },
] as const;

function FooterBrand() {
  return (
    <motion.div
      custom={0}
      variants={staggerColVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="lg:col-span-2"
    >
      <Link href="/" className="flex items-center gap-2">
        <motion.div
          whileHover={{ rotate: 5, scale: 1.05 }}
          className="relative h-8 w-8"
        >
          <div className="absolute inset-0 rounded-md bg-quantum-gradient" />
          <div className="absolute inset-[3px] rounded-[5px] bg-background flex items-center justify-center">
            <span className="font-mono text-xs font-bold text-signal">X</span>
          </div>
        </motion.div>
        <span className="font-semibold text-foreground">XStakUp</span>
      </Link>
      <p className="mt-4 text-sm text-muted-foreground max-w-sm">
        Custom enterprise software development. We architect scalable web,
        mobile, AI, and Web3 systems for market-leading businesses.
      </p>
      <div className="mt-6 space-y-1 text-sm">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Engineering HQ
        </p>
        <p className="text-foreground">Lagos, Nigeria</p>
        <a
          href="mailto:partnerships@xstakup.com"
          className="text-signal hover:underline"
        >
          partnerships@xstakup.com
        </a>
      </div>
    </motion.div>
  );
}

function FooterColumn({ col, index }: { col: typeof columns[number]; index: number }) {
  return (
    <motion.div
      custom={index + 1}
      variants={staggerColVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
        {col.title}
      </p>
      <ul className="space-y-2.5">
        {col.links.map((l, i) => (
          <li key={i}>
            <Link
              href={l.to}
              className="text-sm text-foreground/80 hover:text-signal transition-colors relative group inline-block"
            >
              {l.label}
              <span className="absolute bottom-0 left-0 right-0 h-px bg-signal scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function FooterBottom() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
      className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row gap-4 items-start md:items-center justify-between"
    >
      <p className="text-xs text-muted-foreground font-mono">
        © 2026 XStakUp. An FTRX Group Company. All rights reserved.
      </p>
      <div className="flex gap-6 text-xs text-muted-foreground font-mono">
        <span>SYSTEM STATUS: <span className="text-signal animate-pulse-glow">● OPERATIONAL</span></span>
        <span>UPTIME: 99.99%</span>
      </div>
    </motion.div>
  );
}

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative border-t border-border bg-[color:var(--void-section)]"
    >
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/50 to-transparent origin-left"
        style={{ background: "linear-gradient(90deg, transparent, oklch(0.82 0.16 220 / 0.4), transparent)" }}
      />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          <FooterBrand />
          {columns.map((col, idx) => (
            <FooterColumn key={col.title} col={col} index={idx} />
          ))}
        </div>
        <FooterBottom />
      </div>
    </motion.footer>
  );
}
