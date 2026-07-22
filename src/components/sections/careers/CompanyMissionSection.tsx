"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection, staggerContainer, staggerItem } from "@/components/common";
import { statCardColors } from "@/data/careers";

export function CompanyMissionSection() {
  return (
    <AnimatedSection>
      <section className="overflow-hidden">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold">
                Africa&apos;s <span className="text-gradient-blue">Digital Future</span>
              </h2>
              <div className="mt-6 space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
                <p>
                  World-class infrastructure and expertise powering Africa&apos;s enterprise-scale
                  innovations.
                </p>
                <p>
                  Production systems for fintech, logistics, Web3, and AI across the continent and
                  beyond.
                </p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-blue/20 z-10" />
              <Image
                src="/assets/career.webp"
                alt="Engineering team"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 text-center"
          >
            {[
              { value: "50+", label: "Enterprise Clients" },
              { value: "99.9%", label: "Platform Uptime" },
              { value: "4", label: "Engineering Divisions" },
              { value: "6+", label: "Countries Represented" },
            ].map((stat, i) => {
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
