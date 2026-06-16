"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel, AnimatedSection, staggerContainer } from "@/components/common";
import { ExpertiseCard } from "./ExpertiseCard";
import { expertise } from "@/data/home";

export function ExpertiseSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleExpertise = isExpanded ? expertise : expertise.slice(0, 6);

  return (
    <AnimatedSection>
      <section className="py-24 border-y border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">
                Enterprise Software Development Expertise
              </h2>
              <p className="mt-3 text-foreground/80 max-w-lg">
                From AI and Web3 to fintech and mobile: our eight specialized engineering
                disciplines deliver production-grade custom software.
              </p>
            </div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-5 grid-cols-2 lg:grid-cols-3"
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
                  <ExpertiseCard item={e} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
