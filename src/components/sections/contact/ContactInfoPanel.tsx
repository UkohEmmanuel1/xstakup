"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/common";
import type { ContactInfo } from "@/types";

const contactItems: ContactInfo[] = [
  { label: "Direct Contact", value: "partnerships@xstakup.com", href: "mailto:partnerships@xstakup.com" },
  { label: "Engineering HQ", value: "Lagos, Nigeria" },
  { label: "Response Time", value: "< 24 hours" },
];

export function ContactInfoPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
    >
      <SectionLabel>Initialize Your Build</SectionLabel>
      <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
        Let's <span className="text-gradient-quantum">engineer your solution.</span>
      </h1>
      <p className="mt-6 text-muted-foreground">
        Tell us about your product. A senior engineer will respond within 24
        hours with a technical roadmap proposal.
      </p>
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
            <p className="font-mono text-xs uppercase tracking-widest text-signal">{item.label}</p>
            {item.href ? (
              <a href={item.href} className="mt-2 block text-lg text-foreground hover:text-signal transition-colors">
                {item.value}
              </a>
            ) : (
              <p className="mt-2 text-foreground">{item.value}</p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
