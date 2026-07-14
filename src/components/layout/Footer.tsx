"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Instagram, X } from "lucide-react";
import { socialLinks } from "@/data";

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
        <div className="relative h-14 w-14 md:h-16 md:w-16">
          <Image
            src="/assets/xstakup_logo.png"
            alt="XStakUp footer logo"
            fill
            sizes="64px"
            className="object-contain"
          />
        </div>
      </Link>
      <p className="mt-4 text-sm text-muted-foreground max-w-sm">
        A leading software development agency architecting scalable web, mobile, AI, and Web3
        systems that transform businesses with cutting-edge technology.
      </p>
      <div className="mt-6 space-y-1 text-sm">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Engineering HQ</p>
        <p className="text-foreground">Lagos, Nigeria</p>
        <a href="mailto:partnerships@xstakup.com" className="text-blue hover:underline">
          partnerships@xstakup.com
        </a>
      </div>
      <div className="mt-6 flex items-center gap-3">
        {socialLinks.map((s) => {
          const iconMap = { LinkedIn: Linkedin, Instagram: Instagram, X: X } as const;
          const Icon = iconMap[s.platform];
          return (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="h-9 w-9 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-blue hover:border-blue/50 transition-colors"
            >
              <Icon size={16} />
            </a>
          );
        })}
      </div>
    </motion.div>
  );
}

function FooterColumn({ col, index }: { col: (typeof columns)[number]; index: number }) {
  return (
    <motion.div
      custom={index + 1}
      variants={staggerColVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">{col.title}</p>
      <ul className="space-y-2.5">
        {col.links.map((l, i) => (
          <li key={i}>
            <Link
              href={l.to}
              className="text-sm text-foreground/80 hover:text-blue transition-colors relative group inline-block"
            >
              {l.label}
              <span className="absolute bottom-0 left-0 right-0 h-px bg-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
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
      <p className="text-xs text-muted-foreground">
        © 2026 XStakUp. An FTRX Group Company. All rights reserved.
      </p>
      <div className="flex gap-6 text-xs text-muted-foreground">
        <Link href="/terms" className="hover:text-blue transition-colors">
          Terms & Conditions
        </Link>
        <Link href="/privacy" className="hover:text-blue transition-colors">
          Privacy Policy
        </Link>
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
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue/40 to-transparent origin-left"
      />
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
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
