"use client";

import { motion } from "framer-motion";
import { SectionLabel, AnimatedSection, staggerContainer } from "@/components/common";
import { PipelineCard } from "./PipelineCard";
import { pipeline } from "@/data/home";

export function PipelineSection() {
  return (
    <AnimatedSection>
      <section className="relative py-24 border-y border-border overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-14">
            <h2 className="mt-4 text-3xl md:text-5xl font-bold">
              Custom Enterprise Software Development: Our Process
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              From strategy to deployment: our proven software engineering pipeline delivers
              production-grade systems for web, mobile, AI, and Web3.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
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
