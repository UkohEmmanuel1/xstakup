"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { AnimatedSection, staggerContainer, staggerItem } from "@/components/common";
import { expertise, expertiseCardColors } from "@/data/home";

export function ExpertiseDetailSection() {
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
      <section id="expertise" className="bg-void-section border-y border-border overflow-hidden">
        <div className="section-container">
          <div className="section-header text-center max-w-2xl mx-auto">
            <h2 className="section-title">
              Engineering <span className="text-gradient-blue">Disciplines</span>
            </h2>
            <p className="section-subtitle">Eight production-grade engineering disciplines.</p>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {randomSix.map((e, i) => {
              const c = expertiseCardColors[i % expertiseCardColors.length];
              return (
                <motion.div
                  key={e.title}
                  variants={staggerItem}
                  whileHover={{ y: -4, borderColor: c.hover }}
                  className="group relative rounded-xl p-8 md:p-10 transition-colors"
                  style={{ border: `1px solid ${c.border}`, background: c.bg }}
                >
                  <div
                    className="absolute top-0 left-3 right-3 h-[2px] rounded-full"
                    style={{ background: c.accent }}
                  />
                  <div className="text-3xl" style={{ color: c.hover }}>
                    {e.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{e.title}</h3>
                  <p className="mt-2 text-base text-muted-foreground leading-relaxed">
                    {e.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
