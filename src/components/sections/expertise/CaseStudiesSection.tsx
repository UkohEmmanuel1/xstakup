"use client";

import { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection, staggerContainer, staggerItem } from "@/components/common";
import { expertiseCases, expertiseCaseGradients, expertiseCaseColors } from "@/data/expertise";

export function CaseStudiesSection() {
  const randomSix = useMemo(() => {
    const shuffled = [...expertiseCases];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, 6);
  }, []);

  return (
    <AnimatedSection>
      <section className="overflow-hidden">
        <div className="section-container">
          <div className="section-header text-center max-w-2xl mx-auto">
            <h2 className="section-title">
              Case <span className="text-gradient-blue">Studies</span>
            </h2>
            <p className="section-subtitle">Real systems for fintech, AI & Web3.</p>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {randomSix.map((c, i) => {
              const color = expertiseCaseColors[i % expertiseCaseColors.length];
              return (
                <motion.div
                  key={c.title}
                  variants={staggerItem}
                  whileHover={{ y: -4, borderColor: color.hover }}
                  className="border border-border bg-card rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div
                    className="relative w-full h-56 md:h-72 overflow-hidden flex-shrink-0"
                    style={{ background: expertiseCaseGradients[i] }}
                  >
                    <div
                      className="absolute top-0 left-3 right-3 h-[2px] rounded-full"
                      style={{ background: color.accent }}
                    />
                    <div className="absolute inset-0 bg-overlay/40" />
                    {c.image && (
                      <Image
                        src={c.image}
                        alt={`${c.title} logo`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover opacity-80"
                      />
                    )}
                    <span className="absolute top-3 left-3 rounded-lg bg-[#303030]/90 backdrop-blur-md px-3 py-1.5 shadow-lg border-l-2 border-blue text-blue text-xs font-bold uppercase tracking-wider z-10">
                      {c.tag}
                    </span>
                  </div>
                  <div className="flex flex-col flex-grow p-4 md:p-6">
                    <h3 className="text-xl font-semibold text-white">{c.title}</h3>
                    <p className="mt-2 text-base text-muted-foreground line-clamp-3 leading-relaxed flex-grow">
                      {c.description}
                    </p>
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
