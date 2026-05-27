"use client";

import { motion } from "framer-motion";
import { SectionLabel, AnimatedSection, staggerContainer } from "@/components/common";
import { PipelineCard } from "./PipelineCard";
import { pipeline } from "@/data/home";

export function PipelineSection() {
  return (
    <AnimatedSection>
      <section 
        className="relative py-24 bg-[color:var(--void-section)] border-y border-border bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url('/assets/PipelineSection.png')` }}
      >
        {/* Subtle dark overlay to ensure text contrast over the glowing circuit lines */}
        <div className="absolute inset-0 bg-[color:var(--void-section)]/80 backdrop-blur-sm pointer-events-none" />

        {/* Relative z-index to pull content above the overlay */}
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <SectionLabel>The Engineering Pipeline</SectionLabel>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">
              Build confidently with a team that puts your product first.
            </h2>
          </div>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {pipeline.map((s) => (
              <PipelineCard key={s.n} step={s} />
            ))}
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}