"use client";

import { motion } from "framer-motion";
import { PrimaryCTA } from "@/components/common/Button";

export function FinalCTA() {
  return (
    <section className="relative z-30 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none animate-gradient-shift"
        style={{
          background: "linear-gradient(135deg, #0A1A2A 0%, #0A1A2A 30%, #00BFFF 60%, #0A1A2A 100%)",
          opacity: 0.15,
        }}
      />

      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-blue/20 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-steel/20 blur-3xl pointer-events-none"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="rounded-2xl p-8 md:p-12 text-center"
        >
          <div>
            <h2 className="text-2xl md:text-5xl font-bold text-white max-w-3xl mx-auto tracking-tight">
              Ready for Custom Enterprise Software Development?
            </h2>
            <p className="mt-5 text-white/80 max-w-xl mx-auto text-base md:text-lg">
              Partner with a dedicated engineering team that ships elite, production grade web,
              mobile, AI, and Web3 systems.
            </p>
            <div className="mt-10">
              <PrimaryCTA>Initialize Your Build</PrimaryCTA>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
