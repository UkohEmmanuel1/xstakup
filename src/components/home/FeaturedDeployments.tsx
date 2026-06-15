// src/components/home/FeaturedDeployments.tsx
"use client";

import { motion } from "framer-motion";
import { AnimatedSection, staggerContainer } from "@/components/common";
import { DeploymentCard } from "./DeploymentCard";
import { cases, caseGradients } from "@/data/home";

export function FeaturedDeployments() {
  return (
    <AnimatedSection>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold">
                Enterprise Software Case Studies: Systems We&apos;ve Engineered
              </h2>
              <p className="mt-3 text-muted-foreground max-w-lg">
                Real-world software engineering projects — fintech infrastructure, AI platforms, and
                Web3 applications built for scale.
              </p>
            </div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-3"
          >
            {cases.map((c, i) => (
              <DeploymentCard key={c.title} caseStudy={c} gradient={caseGradients[i]} />
            ))}
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
