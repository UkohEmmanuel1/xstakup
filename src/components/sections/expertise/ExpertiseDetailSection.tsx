"use client";

import { motion } from "framer-motion";
import { SectionLabel, AnimatedSection, staggerContainer, staggerItem } from "@/components/common";
import { expertise, expertiseCardColors } from "@/data/home";

export function ExpertiseDetailSection() {
  return (
    <AnimatedSection>
      <section id="expertise" className="py-12 md:py-24 bg-void-section border-y border-border overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>Disciplines</SectionLabel>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold">
              Our Engineering <span className="text-gradient-quantum">Disciplines</span>
            </h2>
            <p className="mt-4 text-white/70 text-base md:text-lg">
              Eight specialized areas of expertise delivering production-grade enterprise software.
            </p>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {expertise.map((e, i) => {
              const c = expertiseCardColors[i % expertiseCardColors.length];
              return (
                <motion.div
                  key={e.title}
                  variants={staggerItem}
                  whileHover={{ y: -4, borderColor: c.hover }}
                  className="group relative rounded-xl p-5 md:p-6 transition-colors"
                  style={{ border: `1px solid ${c.border}`, background: c.bg }}
                >
                  <div className="absolute top-0 left-3 right-3 h-[2px] rounded-full" style={{ background: c.accent }} />
                  <div className="text-3xl" style={{ color: c.hover }}>{e.icon}</div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{e.title}</h3>
                  <p className="mt-2 text-base text-white/80 leading-relaxed">{e.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
