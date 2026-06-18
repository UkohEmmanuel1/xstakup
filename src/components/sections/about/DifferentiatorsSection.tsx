"use client";

import { motion } from "framer-motion";
import { SectionLabel, AnimatedSection, staggerContainer, staggerItem } from "@/components/common";
import { differentiators } from "@/data/about";

export function DifferentiatorsSection() {
  return (
    <AnimatedSection>
      <section className="py-12 md:py-24 bg-[color:var(--void-section)] border-y border-border overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-14">
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2 className="mt-4 text-2xl md:text-5xl font-bold">
              Why Companies Choose Our Custom Software Development Services
            </h2>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {differentiators.map((d, i) => (
              <motion.div
                key={d.title}
                variants={staggerItem}
                whileHover={{ y: -4, borderColor: "oklch(0.65 0.18 230 / 0.4)" }}
                className="group relative rounded-xl bg-card-solid-bg p-4 md:p-6 transition-colors"
              >
                <div className="font-mono text-xs text-signal">0{i + 1}</div>
                <h3 className="mt-4 text-lg font-semibold text-white">{d.title}</h3>
                <p className="mt-3 text-base text-white/80 leading-relaxed">{d.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
