"use client";

import { motion } from "framer-motion";
import { SectionLabel, AnimatedSection, staggerContainer, staggerItem } from "@/components/common";
import type { ValueItem } from "@/types";

const values: ValueItem[] = [
  { i: "✦", t: "Excellence", d: "We don't ship 'good enough.' We ship elite." },
  { i: "◇", t: "Transparency", d: "Open communication and clear technical roadmaps at every sprint." },
  { i: "⬡", t: "Ownership", d: "We treat your product like it's our own internal infrastructure." },
  { i: "⟁", t: "Innovation", d: "Constantly evolving our stack — AI, Blockchain, Edge — to keep you ahead." },
];

export function ValuesSection() {
  return (
    <AnimatedSection>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>Our DNA</SectionLabel>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold">Core Values</h2>
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
                key={v.t}
                variants={staggerItem}
                whileHover={{ y: -4, borderColor: "rgba(0, 209, 255, 0.4)" }}
                className="rounded-xl glass p-6 transition-colors"
              >
                <div className="font-mono text-3xl text-signal">{v.i}</div>
                <h3 className="mt-4 text-lg font-semibold">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
