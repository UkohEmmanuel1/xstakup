"use client";

import { motion } from "framer-motion";
import { AnimatedSection, staggerContainer, staggerItem } from "@/components/common";
import { differentiators, differentiatorCardColors } from "@/data/about";

export function DifferentiatorsSection() {
  return (
    <AnimatedSection>
      <section
        id="differentiators"
        className="py-16 md:py-24 bg-[color:var(--void-section)] border-y border-border overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="mt-4 text-2xl md:text-5xl font-bold">
              Key <span className="text-gradient-blue">Differentiators</span>
            </h2>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {differentiators.map((d, i) => {
              const c = differentiatorCardColors[i % differentiatorCardColors.length];
              return (
                <motion.div
                  key={d.title}
                  variants={staggerItem}
                  whileHover={{ y: -4, borderColor: c.hover }}
                  className="group relative rounded-xl p-8 md:p-10 transition-colors"
                  style={{ border: `1px solid ${c.border}`, background: c.bg }}
                >
                  <div
                    className="absolute top-0 left-3 right-3 h-[2px] rounded-full"
                    style={{ background: c.accent }}
                  />
                  <div className="text-xs" style={{ color: c.hover }}>
                    0{i + 1}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{d.title}</h3>
                  <p className="mt-3 text-base text-white/80 leading-relaxed">{d.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
