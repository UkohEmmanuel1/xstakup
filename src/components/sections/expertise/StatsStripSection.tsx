"use client";

import { motion } from "framer-motion";
import { AnimatedSection, staggerContainer, staggerItem } from "@/components/common";
import { expertiseStats } from "@/data/expertise";
import { statCardColors } from "@/data/careers";

export function StatsStripSection() {
  return (
    <AnimatedSection>
      <section className="overflow-hidden">
        <div className="section-container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 text-center"
          >
            {expertiseStats.map((stat, i) => {
              const c = statCardColors[i % statCardColors.length];
              return (
                <motion.div
                  key={stat.label}
                  variants={staggerItem}
                  whileHover={{ y: -4, borderColor: c.hover }}
                  className="group relative rounded-xl p-8 md:p-10"
                  style={{ border: `1px solid ${c.border}`, background: c.bg }}
                >
                  <div
                    className="absolute top-0 left-3 right-3 h-[2px] rounded-full"
                    style={{ background: c.accent }}
                  />
                  <div className="text-3xl md:text-4xl font-bold text-gradient-blue">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground uppercase tracking-wide">
                    {stat.label}
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
