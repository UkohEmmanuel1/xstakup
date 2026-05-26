"use client";

import { motion } from "framer-motion";
import { SectionLabel, AnimatedSection } from "@/components/common";

export function GlobalFootprintSection() {
  return (
    <AnimatedSection>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <SectionLabel>Global Footprint</SectionLabel>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold">
            Headquartered in Lagos. Engineering for the World.
          </h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto mt-12 max-w-3xl aspect-[2/1]"
          >
            <div className="absolute inset-0 rounded-2xl glass overflow-hidden">
              <div className="absolute inset-0 grid-pattern opacity-30" />
              <motion.svg
                viewBox="0 0 600 300"
                className="absolute inset-0 w-full h-full"
                animate={{ rotate: [0, 1, 0, -1, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              >
                {[
                  "M80,120 Q120,80 180,100 T280,140 Q300,180 260,210 T160,200 Q100,180 80,120",
                  "M320,90 Q380,70 440,100 T520,140 Q510,200 450,210 T350,180 Q310,140 320,90",
                ].map((d, i) => (
                  <path key={i} d={d} fill="#1E2BFF" fillOpacity="0.15" stroke="#1E2BFF" strokeOpacity="0.4" />
                ))}
                <circle cx="200" cy="170" r="6" fill="#00D1FF">
                  <animate attributeName="r" values="6;12;6" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="200" cy="170" r="3" fill="#fff" />
                <text x="210" y="168" fill="#F9FAFB" fontSize="11" fontFamily="monospace">LAGOS</text>
                {[[120, 100], [280, 140], [380, 110], [460, 160], [500, 200]].map(([x, y], i) => (
                  <g key={i}>
                    <circle cx={x} cy={y} r="3" fill="#7A5CFF" />
                    <line x1="200" y1="170" x2={x} y2={y} stroke="#00D1FF" strokeOpacity="0.2" strokeDasharray="2 3" />
                  </g>
                ))}
              </motion.svg>
            </div>
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
