"use client";

import { motion } from "framer-motion";
import { AnimatedSection, staggerContainer, staggerItem } from "@/components/common";
import { statCardColors } from "@/data/careers";

const metrics = [
  { value: "99.99%", label: "Average Uptime" },
  { value: "5M+", label: "Transactions Processed" },
  { value: "0", label: "Security Breaches" },
  { value: "10+", label: "Enterprise Deployments" },
];

export function ImpactMarqueeSection() {
  return (
    <AnimatedSection>
      <section className="py-16 md:py-24 border-y border-border overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 text-center"
          >
            {metrics.map((m, i) => {
              const c = statCardColors[i % statCardColors.length];
              return (
                <motion.div
                  key={m.label}
                  variants={staggerItem}
                  whileHover={{ y: -4, borderColor: c.hover }}
                  className="group relative rounded-xl p-8 md:p-10"
                  style={{ border: `1px solid ${c.border}`, background: c.bg }}
                >
                  <div className="absolute top-0 left-3 right-3 h-[2px] rounded-full" style={{ background: c.accent }} />
                  <div className="text-3xl md:text-4xl font-bold text-gradient-blue">
                    {m.value}
                  </div>
                  <div className="mt-2 text-sm text-white/60 uppercase tracking-wide">{m.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
