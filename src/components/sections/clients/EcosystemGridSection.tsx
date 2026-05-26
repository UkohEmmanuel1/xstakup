"use client";

import { motion } from "framer-motion";
import { SectionLabel, AnimatedSection, staggerContainer, staggerItem } from "@/components/common";
import type { EcosystemItem } from "@/types";

const ecosystem: EcosystemItem[] = [
  { t: "Digidrop", d: "Web3 social platform with on-chain identity.", i: "⬡" },
  { t: "BePopula", d: "Agency infrastructure & creator monetization.", i: "◇" },
  { t: "MediCore ERP", d: "Healthcare resource planning at hospital scale.", i: "✚" },
  { t: "LearnStack", d: "EdTech platform with adaptive learning paths.", i: "✦" },
  { t: "FleetOps", d: "Logistics command center & real-time tracking.", i: "▤" },
  { t: "GreenLedger", d: "Carbon credit tokenization on-chain.", i: "⟁" },
  { t: "PulseHR", d: "Distributed-team HR & payroll for Africa.", i: "◈" },
  { t: "VaultSign", d: "E-signature & document custody platform.", i: "▢" },
];

export function EcosystemGridSection() {
  return (
    <AnimatedSection>
      <section className="py-24 bg-[color:var(--void-section)] border-y border-border mt-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>The Broader Ecosystem</SectionLabel>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold">Other Notable Deployments</h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Sleek systems shipped across Web3, healthcare, EdTech, and
              enterprise logistics.
            </p>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {ecosystem.map((e) => (
              <motion.a
                key={e.t}
                href="#"
                variants={staggerItem}
                whileHover={{ y: -4, borderColor: "rgba(30, 43, 255, 0.6)" }}
                className="group rounded-xl glass p-6 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="font-mono text-2xl text-signal">{e.i}</div>
                  <span className="text-muted-foreground group-hover:text-signal group-hover:translate-x-1 transition-all">→</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{e.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.d}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
