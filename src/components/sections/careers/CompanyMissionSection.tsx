"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {  AnimatedSection, staggerContainer, staggerItem } from "@/components/common";
import { statCardColors } from "@/data/careers";

export function CompanyMissionSection() {
  return (
    <AnimatedSection>
      <section className="py-12 md:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold">
                Engineering <span className="text-gradient-blue">Africa&apos;s Digital Future</span>
              </h2>
              <div className="mt-6 space-y-6 text-white/70 text-base md:text-lg leading-relaxed">
                <p>
                  XStakUp exists to provide world-class technical infrastructure and engineering
                  expertise that empowers businesses to scale without limits. We believe Africa&apos;s
                  greatest innovations will be built on enterprise-grade software.
                </p>
                <p>
                  Every engineer on our team contributes directly to that mission: shipping
                  production systems for fintech, logistics, Web3, and AI platforms that serve
                  millions of users across the continent and beyond.
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
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
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
                  className="group relative rounded-xl p-6"
                  style={{ border: `1px solid ${c.border}`, background: c.bg }}
                >
                  <div className="absolute top-0 left-3 right-3 h-[2px] rounded-full" style={{ background: c.accent }} />
                  <div className="text-3xl md:text-4xl font-bold text-gradient-blue">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-white/60 uppercase tracking-wide">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
