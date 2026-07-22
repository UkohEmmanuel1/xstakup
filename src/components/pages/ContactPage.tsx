"use client";

import { motion } from "framer-motion";
import { ContactInfoPanel, ContactForm } from "@/components/sections/contact";

export function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--void-main)] min-h-screen">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-blue/20 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
        <ContactInfoPanel />
        <ContactForm />
      </div>
    </section>
  );
}
