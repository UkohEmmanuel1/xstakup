"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection, slideFromLeft, slideFromRight } from "@/components/common";

export function NarrativeSection() {
  return (
    <AnimatedSection>
      <section className="bg-[var(--void-section)] border-border border-y py-12 md:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">

          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-white">
              Software Engineering Company: Bridging Ambition and Infrastructure
            </h2>
            <div className="mt-6 space-y-4 text-white/80 leading-relaxed">
              <p>
                XStakUp was founded on a simple premise: businesses deserve better than
                off-the-shelf software solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative aspect-square max-w-md mx-auto w-full flex items-center justify-center"
          >
            <Image
              src="/assets/Brandidentity.webp"
              alt="XStakUp Brand Identity"
              className="object-contain max-h-full w-auto drop-shadow-lg"
              priority
              width={400}
              height={400}
            />
          </motion.div>

        </div>
      </section>
    </AnimatedSection>
  );
}