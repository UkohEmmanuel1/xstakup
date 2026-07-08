"use client";

import { motion } from "framer-motion";
import { Linkedin, Instagram } from "lucide-react";
import { socialLinks } from "@/data";
import type { ContactInfo } from "@/types";

const contactItems: ContactInfo[] = [
  {
    label: "Direct Contact",
    value: "partnerships@xstakup.com",
    href: "mailto:partnerships@xstakup.com",
  },
  { label: "Engineering HQ", value: "Lagos, Nigeria" },
  { label: "Response Time", value: "less than 24 hours" },
];

export function ContactInfoPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40, scale: 0.97 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
        Let's <span className="text-gradient-blue">Build Together</span>
      </h1>
      <p className="mt-6 text-white/80">A senior engineer responds within 24 hours.</p>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
        }}
        className="mt-12 space-y-5"
      >
        {contactItems.map((item) => (
          <motion.div
            key={item.label}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="text-xs uppercase tracking-widest text-blue">{item.label}</p>
            {item.href ? (
              <a
                href={item.href}
                className="mt-2 block text-lg text-white hover:text-blue transition-colors"
              >
                {item.value}
              </a>
            ) : (
              <p className="mt-2 text-white">{item.value}</p>
            )}
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-10">
        <p className="text-xs uppercase tracking-widest text-blue">Social</p>
        <div className="mt-3 flex items-center gap-3">
          {socialLinks.map((s) => {
            const Icon = s.platform === "LinkedIn" ? Linkedin : Instagram;
            return (
              <a
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="h-10 w-10 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-blue hover:border-blue/50 transition-colors"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
