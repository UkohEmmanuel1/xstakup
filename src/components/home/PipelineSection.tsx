"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection, staggerContainer } from "@/components/common";
import { PipelineCard } from "./PipelineCard";
import { pipeline } from "@/data/home";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function PipelineSection() {
  const [items] = useState(() => shuffle(pipeline).slice(0, 3));

  return (
    <AnimatedSection>
      <section className="relative overflow-hidden bg-[color:var(--void-surface)]">
        <div className="section-divider" />
        <div className="section-container">
          <div className="section-header">
            <h2>Development Pipeline</h2>
            <p>Proven engineering for web, mobile, AI, and Web3.</p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-5 md:gap-6 md:grid-cols-3"
          >
            {items.map((s) => (
              <PipelineCard key={s.title} step={s} />
            ))}
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
