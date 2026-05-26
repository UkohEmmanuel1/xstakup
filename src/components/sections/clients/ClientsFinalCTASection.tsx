"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function ClientsFinalCTASection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-2xl p-12 md:p-20 text-center animate-gradient-shift"
          style={{ background: "linear-gradient(135deg, #0F1A7A 0%, #0F1A7A 30%, #1E2BFF 60%, #0F1A7A 100%)" }}
        >
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-signal/30 blur-3xl"
          />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold text-white max-w-3xl mx-auto">
              Your Product Deserves Elite Engineering.
            </h2>
            <p className="mt-5 text-white/70 max-w-xl mx-auto">
              Don&apos;t risk your launch on outsourced templates. Partner with the
              dedicated engineers at XStakUp.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-[color:var(--deep-core)] hover:bg-signal hover:text-white transition-all"
              >
                Initialize Your Build <span>→</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
