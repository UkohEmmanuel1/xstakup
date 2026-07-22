// src/components/home/FeaturedDeployments.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection, staggerContainer } from "@/components/common";
import { CTAButton } from "@/components/common/CTAButton";
import { DeploymentCard } from "./DeploymentCard";
import { cases as casesData, caseGradients as caseGradientsData } from "@/data/home";

export function FeaturedDeployments() {
  const [shuffled] = useState(() => {
    const items = casesData.map((c, i) => ({ caseStudy: c, gradient: caseGradientsData[i] }));
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    return items.slice(0, 3);
  });

  return (
    <AnimatedSection>
      <section className="relative overflow-hidden bg-[color:var(--void-section)]">
        <div className="section-divider" />
        <div className="section-container">
          <div className="section-header">
            <h2>Case Studies</h2>
            <p>Fintech infrastructure, AI platforms, and Web3 applications built for scale.</p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {shuffled.map(({ caseStudy, gradient }) => (
              <DeploymentCard key={caseStudy.title} caseStudy={caseStudy} gradient={gradient} />
            ))}
          </motion.div>
          <div className="mt-10 text-center">
            <CTAButton href="/work" variant="outline">
              View All Case Studies &rarr;
            </CTAButton>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
