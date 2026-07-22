"use client";

import { motion } from "framer-motion";
import { AnimatedSection, staggerContainer, staggerItem } from "@/components/common";
import { communityProjects, projectCardColors } from "@/data/community";

export function OpenSourceSection() {
  return (
    <AnimatedSection>
      <section className="bg-void-section border-y border-border overflow-hidden">
        <div className="section-container">
          <div className="section-header text-center max-w-2xl mx-auto">
            <h2 className="section-title">
              Community <span className="text-gradient-blue">Projects</span>
            </h2>
            <p className="section-subtitle">Tools for Africa's engineering ecosystem.</p>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-5 md:gap-6 md:grid-cols-3"
          >
            {communityProjects.map((proj, i) => {
              const c = projectCardColors[i % projectCardColors.length];
              return (
                <motion.div
                  key={proj.name}
                  variants={staggerItem}
                  whileHover={{ y: -4, borderColor: c.hover }}
                  className="group relative rounded-xl p-8 md:p-10 transition-colors h-full min-h-[200px] flex flex-col"
                  style={{ border: `1px solid ${c.border}`, background: c.bg }}
                >
                  <div
                    className="absolute top-0 left-3 right-3 h-[2px] rounded-full"
                    style={{ background: c.accent }}
                  />
                  <h3 className="text-xl font-semibold text-white">{proj.name}</h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed flex-grow">
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
