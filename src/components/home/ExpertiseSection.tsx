"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection, staggerContainer } from "@/components/common";
import { ExpertiseCard } from "./ExpertiseCard";
import { expertise, expertiseCardColors } from "@/data/home";

export function ExpertiseSection() {
  const [isExpanded] = useState(false);

  const visibleExpertise = isExpanded ? expertise : expertise.slice(0, 6);

  return (
    <AnimatedSection>
      <section className="py-16 md:py-24 border-y border-border overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="mt-4 text-2xl md:text-5xl font-bold text-white">
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
            <AnimatePresence mode="popLayout">
              {visibleExpertise.map((e) => (
                <motion.div
                  key={e.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <ExpertiseCard
                    item={e}
                    color={expertiseCardColors[expertise.indexOf(e) % expertiseCardColors.length]}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
