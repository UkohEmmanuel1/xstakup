"use client";

import { motion } from "framer-motion";
import { SectionLabel, AnimatedSection, staggerContainer, staggerItem } from "@/components/common";
import { communityBenefits, benefitCardColors } from "@/data/community";

export function BenefitsSection() {
  return (
    <AnimatedSection>
      <section className="py-16 md:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel>Why Join</SectionLabel>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold">
              Member <span className="text-gradient-blue">Perks</span>
            </h2>
            <p className="mt-4 text-white/70 text-base md:text-lg">Your engineering launchpad.</p>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          >
            {communityBenefits.map((b, i) => {
              const c = benefitCardColors[i % benefitCardColors.length];
              return (
                <motion.div
                  key={b.title}
                  variants={staggerItem}
                  whileHover={{ y: -4, borderColor: c.hover }}
                  className="group relative rounded-xl p-8 md:p-10 transition-colors h-full min-h-[200px]"
                  style={{ border: `1px solid ${c.border}`, background: c.bg }}
                >
                  <div
                    className="absolute top-0 left-3 right-3 h-[2px] rounded-full"
                    style={{ background: c.accent }}
                  />
                  <div className="text-3xl" style={{ color: c.hover }}>
                    {b.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{b.title}</h3>
                  <p className="mt-2 text-base text-white/70 leading-relaxed">{b.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
