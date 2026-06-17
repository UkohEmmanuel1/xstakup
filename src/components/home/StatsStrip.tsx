"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import type { StatsItem } from "@/types";

interface StatsStripProps {
  items: StatsItem[];
  className?: string;
}

export function StatsStrip({ items, className }: StatsStripProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className={`${className ?? "mt-20"} grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-xl glass w-full max-w-4xl`}
    >
      {items.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
          className="px-4 py-4 md:px-6 md:py-6 bg-[color:var(--void-surface)]/50"
        >
          <Counter value={s.value} />
          <p className="mt-1 text-xs uppercase tracking-widest text-white/80">{s.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const match = value.match(/^([^0-9.-]*)([0-9.-]+)(.*)$/);

  const prefix = match ? match[1] : "";
  const numericTarget = match ? parseFloat(match[2].replace(/,/g, "")) : 0;
  const suffix = match ? match[3] : value;

  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) => {
    const formattedNumber = Math.floor(latest).toLocaleString();
    return `${prefix}${formattedNumber}${suffix}`;
  });

  useEffect(() => {
    if (inView && !isNaN(numericTarget)) {
      const controls = animate(count, numericTarget, {
        duration: 2,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.4,
      });
      return () => controls.stop();
    }
  }, [inView, numericTarget, count]);

  return (
    <motion.p
      ref={ref}
      className="font-mono text-2xl md:text-3xl font-bold text-white inline-block"
    >
      {isNaN(numericTarget) ? value : rounded}
    </motion.p>
  );
}
