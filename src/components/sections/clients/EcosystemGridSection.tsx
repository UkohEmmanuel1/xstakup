"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel, AnimatedSection, staggerContainer, staggerItem } from "@/components/common";
import type { EcosystemItem } from "@/types";

const ecosystem: EcosystemItem[] = [
  { title: "Digidrop", description: "Web3 social platform with on-chain identity.", icon: "⬡" },
  { title: "BePopula", description: "Agency infrastructure & creator monetization.", icon: "◇" },
  { title: "MediCore ERP", description: "Healthcare resource planning at hospital scale.", icon: "✚" },
  { title: "LearnStack", description: "EdTech platform with adaptive learning paths.", icon: "✦" },
  { title: "FleetOps", description: "Logistics command center & real-time tracking.", icon: "▤" },
  { title: "GreenLedger", description: "Carbon credit tokenization on-chain.", icon: "⟁" },
  { title: "PulseHR", description: "Distributed-team HR & payroll for Africa.", icon: "◈" },
  { title: "VaultSign", description: "E-signature & document custody platform.", icon: "▢" },
  { title: "Opraf", description: "Enterprise operations & workflow management.", icon: "⟐" },
];

export function EcosystemGridSection() {
  return (
    <AnimatedSection>
      <section className="py-24 bg-[color:var(--void-section)] border-y border-border mt-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>The Broader Ecosystem</SectionLabel>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold">
                More Enterprise Software Deployments
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Sleek systems shipped across Web3, healthcare, EdTech, and enterprise logistics.
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
                key={e.title}
                href="#"
                variants={staggerItem}
                whileHover={{ y: -4, borderColor: "oklch(0.52 0.28 265 / 0.6)" }}
                className="group rounded-xl glass p-6 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="font-mono text-2xl text-signal">
                    {e.title === "Digidrop" ? (
                      <div className="relative h-8 w-8">
                        <Image
                          src="/assets/Digidrop socials.webp"
                          alt="Digidrop logo"
                          fill
                          sizes="32px"
                          className="object-contain"
                        />
                      </div>
                    ) : e.title === "Opraf" ? (
                      <div className="relative h-8 w-8">
                        <Image
                          src="/assets/opraf.webp"
                          alt="Opraf logo"
                          fill
                          sizes="32px"
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      e.icon
                    )}
                  </div>
                  <span className="text-muted-foreground group-hover:text-signal group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{e.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.description}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
