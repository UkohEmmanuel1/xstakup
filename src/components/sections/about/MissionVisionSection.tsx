"use client";

import { motion } from "framer-motion";
import { SectionLabel, AnimatedSection, staggerContainer, staggerItem } from "@/components/common";
import { missionVisionItems, mvCardColors } from "@/data/about";

export function MissionVisionSection() {
  return (
    <AnimatedSection>
      <section className="py-12 md:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>Mission & Vision</SectionLabel>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold">
              Software Company <span className="text-gradient-blue">Mission & Vision</span>
            </h2>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {missionVisionItems.map((item, i) => {
              const color = mvCardColors[i];
              return (
                <motion.div
                  key={item.title}
                  variants={staggerItem}
                  whileHover={{ y: -4, borderColor: color.hover }}
                  className="group relative rounded-xl p-6 md:p-10"
                  style={{ border: `1px solid ${color.border}`, background: color.bg }}
                >
                  <div className="absolute top-0 left-3 right-3 h-[2px] rounded-full" style={{ background: color.accent }} />
                  <h3 className="text-xs uppercase tracking-widest" style={{ color: color.hover }}>{item.title}</h3>
                  <p className="mt-5 text-xl md:text-2xl text-white leading-relaxed font-medium">
                    {item.description}
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
