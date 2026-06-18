"use client";

import { motion } from "framer-motion";
import { SectionLabel, AnimatedSection, staggerContainer, staggerItem } from "@/components/common";
import { communityProjects, projectCardColors } from "@/data/community";

export function OpenSourceSection() {
  return (
    <AnimatedSection>
      <section className="py-12 md:py-24 bg-void-section border-y border-border overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>Open Source</SectionLabel>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold">
              Community <span className="text-gradient-quantum">Projects</span>
            </h2>
            <p className="mt-4 text-white/70 text-base md:text-lg">
              Open-source tools built and maintained by our community for the African engineering ecosystem.
            </p>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-3"
          >
            {communityProjects.map((proj, i) => {
              const c = projectCardColors[i % projectCardColors.length];
              return (
                <motion.div
                  key={proj.name}
                  variants={staggerItem}
                  whileHover={{ y: -4, borderColor: c.hover }}
                  className="group relative rounded-xl p-6 transition-colors flex flex-col"
                  style={{ border: `1px solid ${c.border}`, background: c.bg }}
                >
                  <div className="absolute top-0 left-3 right-3 h-[2px] rounded-full" style={{ background: c.accent }} />
                  <h3 className="text-xl font-semibold text-white">{proj.name}</h3>
                  <p className="mt-3 text-white/60 text-sm leading-relaxed flex-grow">
                    {proj.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full"
                        style={{ border: `1px solid ${c.border}`, color: c.hover }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
