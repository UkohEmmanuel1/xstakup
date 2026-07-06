// src/components/home/FeaturedDeployments.tsx
"use client";

import { motion } from "framer-motion";
import { AnimatedSection, staggerContainer } from "@/components/common";
import { DeploymentCard } from "./DeploymentCard";
import { cases, caseGradients, deploymentCardColors } from "@/data/home";

export function FeaturedDeployments() {
  return (
    <AnimatedSection>
      <section className="py-16 md:py-24 border-b border-border overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="mt-4 text-xl md:text-3xl lg:text-5xl font-bold text-white">
                Case Studies
              </h2>
              <p className="mt-3 text-white/80 max-w-lg">
                Fintech infrastructure, AI platforms, and Web3 applications built for scale.
              </p>
            </div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8"
          >
            {cases.map((c, i) => (
              <DeploymentCard
                key={c.title}
                caseStudy={c}
                gradient={caseGradients[i]}
                color={deploymentCardColors[i]}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
