"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {  AnimatedSection, slideFromLeft, slideFromRight } from "@/components/common";
import brandIdentityImg from "@/../public/assets/Brandidentity.webp";

const brandColor = {
  border: "oklch(0.52 0.28 265 / 0.25)",
  hover: "oklch(0.52 0.28 265 / 0.5)",
  accent: "oklch(0.52 0.28 265 / 0.6)",
  bg: "oklch(0.21 0.08 265)",
};

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
            <div
              className="relative h-full w-full rounded-2xl overflow-hidden flex flex-col items-center justify-center p-8 md:p-12 transition-all duration-300"
              style={{ border: `1px solid ${brandColor.border}`, background: brandColor.bg }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = brandColor.hover; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = brandColor.border; }}
            >
              <div className="absolute top-0 left-3 right-3 h-[2px] rounded-full" style={{ background: brandColor.accent }} />
              <p className="absolute top-4 left-4 text-xs uppercase tracking-[0.2em] font-semibold" style={{ color: brandColor.hover }}>
                Brand Identity
              </p>
              <div className="relative w-full h-full flex items-center justify-center pt-6">
                <Image
                  src={brandIdentityImg}
                  alt="XStakUp Brand Identity"
                  className="object-contain max-h-full w-auto drop-shadow-lg"
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