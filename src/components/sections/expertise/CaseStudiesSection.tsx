"use client";

import { motion } from "framer-motion";
import { SectionLabel, AnimatedSection, staggerContainer, staggerItem } from "@/components/common";
import { expertiseCases, expertiseCaseGradients, expertiseCaseColors } from "@/data/expertise";

export function CaseStudiesSection() {
  return (
    <AnimatedSection>
      <section className="py-12 md:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>Case Studies</SectionLabel>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold">
              Featured <span className="text-gradient-quantum">Projects</span>
            </h2>
            <p className="mt-4 text-white/70 text-base md:text-lg">
              Real-world systems we&apos;ve engineered across fintech, AI, Web3, logistics, and more.
            </p>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {expertiseCases.map((c, i) => {
              const color = expertiseCaseColors[i % expertiseCaseColors.length];
              return (
                <motion.div
                  key={c.title}
                  variants={staggerItem}
                  whileHover={{ y: -4, borderColor: color.hover }}
                  className="group rounded-xl overflow-hidden transition-colors flex flex-col"
                  style={{ border: `1px solid ${color.border}`, background: color.bg }}
                >
                  <div
                    className="relative w-full h-36 md:h-44 overflow-hidden"
                    style={{ background: expertiseCaseGradients[i] }}
                  >
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute top-0 left-3 right-3 h-[2px]" style={{ background: color.accent }} />
                  </div>
                  <div className="flex flex-col flex-grow p-4 md:p-6">
                    <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: color.accent }}>
                      {c.tag}
                    </span>
                    <h3 className="mt-2 text-xl font-semibold text-white">{c.title}</h3>
                    <p className="mt-3 text-base text-white/80 leading-relaxed flex-grow">
                      {c.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
