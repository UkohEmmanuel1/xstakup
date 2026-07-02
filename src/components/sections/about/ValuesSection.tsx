"use client";

import { motion } from "framer-motion";
import { SectionLabel, AnimatedSection, staggerContainer, staggerItem } from "@/components/common";
import { values, valueCardColors } from "@/data/about";

export function ValuesSection() {
  return (
    <AnimatedSection>
      <section className="py-12 md:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>Core Values</SectionLabel>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold">
              Software Engineering <span className="text-gradient-blue">Core Values</span>
            </h2>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {values.map((v, i) => {
              const c = valueCardColors[i % valueCardColors.length];
              return (
                <motion.div
                  key={v.title}
                  variants={staggerItem}
                  whileHover={{ y: -4, borderColor: c.hover }}
                  className="group relative rounded-xl p-5 md:p-6 transition-colors"
                  style={{ border: `1px solid ${c.border}`, background: c.bg }}
                >
                  <div className="absolute top-0 left-3 right-3 h-[2px] rounded-full" style={{ background: c.accent }} />
                  <div className="text-3xl" style={{ color: c.hover }}>{v.icon}</div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{v.title}</h3>
                  <p className="mt-2 text-base text-white/80 leading-relaxed">{v.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
