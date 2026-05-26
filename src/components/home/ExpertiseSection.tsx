"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel, AnimatedSection, staggerContainer } from "@/components/common";
import { ExpertiseCard } from "./ExpertiseCard";
import { expertise } from "@/data/home";

export function ExpertiseSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Slice the 8 items to show only 6 initially
  const visibleExpertise = isExpanded ? expertise : expertise.slice(0, 6);

  return (
    <AnimatedSection>
      <section className="py-24 bg-[color:var(--void-section)] border-y border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>Capabilities</SectionLabel>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold">Explore Our Expertise</h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Eight specialized practice areas, one accountable engineering team.
              Custom-built for the scale your business demands.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"
          >
            <AnimatePresence mode="popLayout">
              {visibleExpertise.map((e) => (
                <motion.div
                  key={e.t}
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

          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-6 py-3 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
            >
              {isExpanded ? "Show Less" : "View All"}
            </button>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}