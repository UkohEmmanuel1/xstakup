"use client";

import { motion } from "framer-motion";
import { SectionLabel, AnimatedSection, staggerContainer, staggerItem } from "@/components/common";
import { missionVisionItems } from "@/data/about";

export function MissionVisionSection() {
  return (
    <AnimatedSection>
      <section className="py-12 md:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>Mission & Vision</SectionLabel>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold">
              Software Company Mission & Vision
            </h2>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {missionVisionItems.map((c) => (
              <motion.div
                key={c.t}
                variants={staggerItem}
                className="relative rounded-2xl p-6 md:p-10 glass"
                style={{ borderColor: "oklch(0.65 0.18 230 / 0.4)" }}
              >
                <h3 className="font-mono text-xs uppercase tracking-widest text-signal">{c.t}</h3>
                <p className="mt-5 text-xl md:text-2xl text-foreground leading-relaxed font-medium">
                  {c.d}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
