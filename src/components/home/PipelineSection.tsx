"use client";

import { motion } from "framer-motion";
import { AnimatedSection, staggerContainer } from "@/components/common";
import { PipelineCard } from "./PipelineCard";
import { pipeline } from "@/data/home";

export function PipelineSection() {
  return (
    <AnimatedSection>
      <section className="relative py-16 md:py-24 overflow-hidden bg-cover bg-center bg-no-repeat"
               style={{ backgroundImage: "url('/assets/background.png')" }}>
        <div className="absolute inset-0 bg-void-section/80 backdrop-blur-[1px]" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">Development Pipeline</h2>
            <p className="mt-4 text-white/80 max-w-xl">
              Proven engineering for web, mobile, AI, and Web3.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {pipeline.map((s) => (
              <PipelineCard key={s.number} step={s} />
            ))}
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
