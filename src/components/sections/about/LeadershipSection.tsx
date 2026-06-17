"use client";

import { motion } from "framer-motion";
import { SectionLabel, AnimatedSection, staggerContainer, staggerItem } from "@/components/common";
import type { Leader } from "@/types";

const leaders: Leader[] = [
  {
    name: "Glory Umukoro",
    role: "Founder & CEO",
    bio: "Vision-led founder driving XStakUp's growth and engineering culture across Africa and global markets.",
  },
];

const gradients = [
  "linear-gradient(180deg, #1E2BFF, #0F1A7A)",
  "linear-gradient(180deg, #7A5CFF, #0F1A7A)",
  "linear-gradient(180deg, #00D1FF, #0F1A7A)",
  "linear-gradient(180deg, #1E2BFF, #0A0B10)",
];

export function LeadershipSection() {
  return (
    <AnimatedSection>
      <section className="py-12 md:py-24 bg-[color:var(--void-section)] border-y border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            
            <h2 className="mt-4 text-3xl md:text-5xl font-bold">
              Enterprise Software Leadership Team
            </h2>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {leaders.map((l, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                className="group rounded-xl glass overflow-hidden transition-shadow hover:shadow-quantum"
              >
                <motion.div
                  className="aspect-[4/5] relative overflow-hidden"
                  style={{ background: gradients[i] }}
                >
                  <div className="absolute inset-0 grid-pattern opacity-25" />
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute inset-0 flex items-center justify-center text-6xl font-mono text-white/80"
                  >
                    {l.name.charAt(0)}
                  </motion.div>
                </motion.div>
                <div className="p-5">
                  <h3 className="font-semibold text-foreground">{l.name}</h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-widest text-signal">
                    {l.role}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">{l.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
