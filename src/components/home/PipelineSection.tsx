"use client";

import { motion } from "framer-motion";
import { SectionLabel, AnimatedSection, staggerContainer } from "@/components/common";
import { PipelineCard } from "./PipelineCard";
import { pipeline, pipelineCardColors } from "@/data/home";

export function PipelineSection() {
  return (
    <AnimatedSection>
      <section className="relative py-12 md:py-24 border-y border-border overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-14">
            <h2 className="mt-4 text-2xl md:text-5xl font-bold text-white">
              Custom Enterprise Software Development: Our Process
            </h2>
            <p className="mt-4 text-white/80 max-w-xl">
              From strategy to deployment: our proven software engineering pipeline delivers
              production grade systems for web, mobile, AI, and Web3.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {pipeline.map((s, i) => (
              <PipelineCard key={s.number} step={s} color={pipelineCardColors[i]} />
            ))}
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
