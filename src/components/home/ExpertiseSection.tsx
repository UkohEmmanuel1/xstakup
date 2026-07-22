"use client";

import { motion } from "framer-motion";
import { AnimatedSection, staggerContainer } from "@/components/common";
import { ExpertiseCard } from "./ExpertiseCard";
import { expertise } from "@/data/home";

export function ExpertiseSection() {
  return (
    <AnimatedSection>
      <section className="relative overflow-hidden bg-[color:var(--void-surface)]">
        <div className="section-divider" />
        <div className="section-container">
          <div className="section-header">
            <h2>Engineering Expertise</h2>
            <p>Eight specialized engineering disciplines.</p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {expertise.map((e) => (
              <motion.div key={e.title}>
                <ExpertiseCard item={e} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
