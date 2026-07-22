"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection, slideFromLeft, slideFromRight } from "@/components/common";
import { companyStory } from "@/data/about";

export function NarrativeSection() {
  return (
    <AnimatedSection>
      <section className="bg-[var(--void-section)] border-border border-y overflow-hidden">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 items-center">
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs uppercase tracking-widest border border-[#0094C7]/30 text-[#0094C7] mb-4">
              Est. {companyStory.founded}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Engineering Excellence
            </h2>
            <h3 className="mt-2 text-lg text-muted-foreground">
              {companyStory.headquarters} &middot; {companyStory.group}
            </h3>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              {companyStory.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
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
              src="/assets/brandidentity.webp"
              alt="XStakUp Brand Identity"
              className="object-contain object-top"
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
