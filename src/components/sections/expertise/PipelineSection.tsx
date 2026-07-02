"use client";

import { motion } from "framer-motion";
import { SectionLabel, AnimatedSection, staggerContainer, staggerItem } from "@/components/common";
import { pipeline, pipelineCardColors } from "@/data/home";

export function PipelineSection() {
  return (
    <AnimatedSection>
      <section className="py-12 md:py-24 bg-void-section border-y border-border overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-14">
            <SectionLabel>Process</SectionLabel>
            <h2 className="mt-4 text-2xl md:text-5xl font-bold">
              Our Development <span className="text-gradient-blue">Pipeline</span>
            </h2>
            <p className="mt-4 text-white/80 max-w-xl">
              From strategy to deployment: our proven engineering pipeline delivers
              production-grade systems for web, mobile, AI, and Web3.
            </p>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {pipeline.map((s, i) => {
              const c = pipelineCardColors[i % pipelineCardColors.length];
              return (
                <motion.div
                  key={s.number}
                  variants={staggerItem}
                  whileHover={{ y: -4, borderColor: c.hover }}
                  className="group relative rounded-xl p-4 md:p-6 transition-colors h-full"
                  style={{ border: `1px solid ${c.border}`, background: c.bg }}
                >
                  <div className="absolute top-0 left-3 right-3 h-[2px] rounded-full" style={{ background: c.accent }} />
                  <div className="text-xs" style={{ color: c.hover }}>{s.number}</div>
                  <h3 className="mt-4 text-xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-3 text-base text-white/80 leading-relaxed">{s.description}</p>
                  <div className="mt-6 h-px" style={{ background: `linear-gradient(to right, ${c.accent}, transparent)` }} />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
