"use client";

import { motion } from "framer-motion";
import { SectionLabel, AnimatedSection, staggerContainer, staggerItem } from "@/components/common";
import { leaders, leaderGradients, leaderCardColors } from "@/data/about";

export function LeadershipSection() {
  return (
    <AnimatedSection>
      <section className="py-16 md:py-24 bg-[color:var(--void-section)] border-y border-border overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel>Leadership</SectionLabel>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold">
              Leadership <span className="text-gradient-blue">Team</span>
            </h2>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
          >
            {leaders.map((l, i) => {
              const c = leaderCardColors[i % leaderCardColors.length];
              return (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  whileHover={{ y: -6 }}
                  className="group rounded-xl overflow-hidden transition-shadow hover:shadow-blue"
                  style={{ border: `1px solid ${c.border}`, background: c.bg }}
                >
                  <motion.div
                    className="aspect-[4/5] relative overflow-hidden"
                    style={{ background: leaderGradients[i] }}
                  >
                    <div className="absolute inset-0 grid-pattern opacity-25" />
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="absolute inset-0 flex items-center justify-center text-6xl text-white/80"
                    >
                      {l.name.charAt(0)}
                    </motion.div>
                    <div className="absolute top-0 left-3 right-3 h-[2px] rounded-full" style={{ background: c.accent }} />
                  </motion.div>
                  <div className="p-6">
                    <h3 className="font-semibold text-white">{l.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-widest" style={{ color: c.hover }}>
                      {l.role}
                    </p>
                    <p className="mt-3 text-sm text-white/70">{l.bio}</p>
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
