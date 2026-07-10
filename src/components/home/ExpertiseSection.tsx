"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { AnimatedSection, staggerContainer } from "@/components/common";
import { ExpertiseCard } from "./ExpertiseCard";
import { expertise } from "@/data/home";

export function ExpertiseSection() {
  const randomSix = useMemo(() => {
    const shuffled = [...expertise];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, 6);
  }, []);

  return (
    <AnimatedSection>
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">
                Engineering Expertise
              </h2>
              <p className="mt-3 text-white/80 max-w-lg">
                Eight specialized engineering disciplines.
              </p>
            </div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {randomSix.map((e) => (
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
