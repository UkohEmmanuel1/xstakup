"use client";

import { motion } from "framer-motion";
import {AnimatedSection, staggerContainer, staggerItem } from "@/components/common";
import type { Differentiator } from "@/types";

const differentiators: Differentiator[] = [
  {
    title: "Client-First Architecture",
    description: "Your business goals dictate our technical stack. We build for your specific scale, not ours.",
  },
  {
    title: "Uncompromising Security",
    description: "From fintech gateways to Web3 dApps, security isn't a feature it's the foundation of every line of code we ship.",
  },
  {
    title: "99.9% Engineering Rigor",
    description: "We utilize DevSecOps and automated QA pipelines to ensure your system remains stable and high-performing 24/7.",
  },
];

export function DifferentiatorsSection() {
  return (
    <AnimatedSection>
      <section className="py-24 bg-[color:var(--void-section)] border-y border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-14">
            
            <h2 className="mt-4 text-3xl md:text-5xl font-bold">
              Why Companies Choose Our Custom Software Development Services
            </h2>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {differentiators.map((d, i) => (
              <motion.div
                key={d.title}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                className="relative rounded-xl glass p-8 transition-shadow hover:shadow-glow"
              >
                <div className="font-mono text-xs text-signal">0{i + 1}</div>
                <h3 className="mt-4 text-2xl font-semibold">{d.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{d.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
