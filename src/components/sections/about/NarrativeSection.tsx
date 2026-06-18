"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel, AnimatedSection, slideFromLeft, slideFromRight } from "@/components/common";
// 1. Import the image directly
import brandIdentityImg from "@/../public/assets/Brandidentity.webp"; 

export function NarrativeSection() {
  return (
    <AnimatedSection>
      <section className="py-12 md:py-24 bg-[var(--void-section)] border-y border-border overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16 items-center">
          
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">
              Software Engineering Company: Bridging Ambition and Infrastructure
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
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
            className="relative aspect-square max-w-md mx-auto w-full"
          >
            <div className="absolute inset-0 rounded-2xl glass overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 grid-pattern opacity-40" />
              <div className="relative w-3/4 h-3/4 flex items-center justify-center">
                {/* 2. Drop the 'fill' and pass the static object directly */}
                <Image
                  src={brandIdentityImg}
                  alt="XStakUp Brand Identity"
                  className="object-contain max-h-full w-auto"
                  priority
                />
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </AnimatedSection>
  );
}