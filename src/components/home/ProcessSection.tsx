"use client";

import { motion } from "framer-motion";
import { AnimatedSection, SectionLabel } from "@/components/common";
import { processSteps } from "@/data";

export function ProcessSection() {
  return (
    <AnimatedSection className="py-16 md:py-24 border-b border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <SectionLabel>Process</SectionLabel>
            <h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-tight max-w-2xl mx-auto">
              Custom Software Process
            </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-6 hover:shadow-card-hover transition-all"
            >
              <span className="text-3xl font-heading font-bold text-blue/30">
                {step.number}
              </span>
              <h3 className="mt-2 text-lg font-heading font-bold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-foreground/80">{step.description}</p>
              <p className="mt-2 text-xs text-muted-foreground">{step.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
