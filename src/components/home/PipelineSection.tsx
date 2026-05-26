"use client";

import { motion } from "framer-motion";
import { SectionLabel, AnimatedSection, staggerContainer } from "@/components/common";
import { PipelineCard } from "./PipelineCard";
import { pipeline } from "@/data/home";

export function PipelineSection() {
  return (
    <AnimatedSection>
      <section className="py-24 bg-[color:var(--void-section)] border-y border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <SectionLabel>The Engineering Pipeline</SectionLabel>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold">
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
