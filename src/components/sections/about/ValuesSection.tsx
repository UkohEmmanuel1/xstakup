"use client";

import { motion } from "framer-motion";
import {AnimatedSection, staggerContainer, staggerItem } from "@/components/common";
import type { ValueItem } from "@/types";

const values: ValueItem[] = [
  { icon: "✦", title: "Excellence", description: "We don't ship 'good enough.' We ship elite." },
  {
    icon: "◇",
    title: "Transparency",
    description: "Open communication and clear technical roadmaps at every sprint.",
  },
  { icon: "⬡", title: "Ownership", description: "We treat your product like it's our own internal infrastructure." },
  {
    icon: "⟁",
    title: "Innovation",
    description: "Constantly evolving our stack  AI, Blockchain, Edge  to keep you ahead.",
  },
];

export function ValuesSection() {
  return (
    <AnimatedSection>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            
            <h2 className="mt-4 text-3xl md:text-5xl font-bold">
              Software Engineering Core Values
            </h2>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={staggerItem}
                whileHover={{ y: -4, borderColor: "oklch(0.65 0.18 230 / 0.4)" }}
                className="rounded-xl glass p-6 transition-colors"
              >
                <div className="font-mono text-3xl text-signal">{v.icon}</div>
                <h3 className="mt-4 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
