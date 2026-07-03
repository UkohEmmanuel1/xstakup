"use client";

import { motion } from "framer-motion";
import { ContactInfoPanel, ContactForm } from "@/components/sections/contact";

export function ContactPage() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat max-w-full"
      style={{ backgroundImage: `url('/assets/contact.webp')` }}
    >
      <div className="absolute inset-0 bg-[#303030]/85" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-blue/30 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
        <ContactInfoPanel />
        <ContactForm />
      </div>
    </section>
  );
}
