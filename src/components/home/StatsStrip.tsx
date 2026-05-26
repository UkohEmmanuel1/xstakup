"use client";

import { motion } from "framer-motion";
import type { StatsItem } from "@/types";

interface StatsStripProps {
  items: StatsItem[];
}

export function StatsStrip({ items }: StatsStripProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.65 }}
      className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-xl glass w-full max-w-4xl"
    >
      {items.map((s, i) => (
        <motion.div
          key={s.l}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
          className="px-6 py-6 bg-[color:var(--void-surface)]/50"
        >
          <p className="font-mono text-2xl md:text-3xl font-bold text-foreground">{s.v}</p>
          <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
