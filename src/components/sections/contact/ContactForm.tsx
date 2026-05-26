"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Field } from "@/components/common";

const fieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.6 + i * 0.08, duration: 0.4 } }),
};

function SubmittedState() {
  return (
    <motion.div
      key="submitted"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="text-center py-12"
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="mx-auto h-14 w-14 rounded-full bg-quantum-gradient flex items-center justify-center text-2xl"
      >
        ✓
      </motion.div>
      <h3 className="mt-6 text-2xl font-bold">Build initialized.</h3>
      <p className="mt-3 text-muted-foreground">A senior engineer will reach out within 24 hours.</p>
    </motion.div>
  );
}

function FormFields() {
  return (
    <motion.div
      key="form"
      initial="hidden"
      animate="visible"
      className="space-y-5"
    >
      <motion.div custom={0} variants={fieldVariants} className="grid sm:grid-cols-2 gap-5">
        <Field label="Full Name" name="name" />
        <Field label="Work Email" name="email" type="email" />
      </motion.div>
      <motion.div custom={1} variants={fieldVariants}>
        <Field label="Company" name="company" />
      </motion.div>
      <motion.div custom={2} variants={fieldVariants}>
        <Field label="Project Type" name="type" placeholder="Fintech, AI, Web3, SaaS..." />
      </motion.div>
      <motion.div custom={3} variants={fieldVariants}>
        <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Project Brief</label>
        <textarea
          required
          rows={5}
          className="mt-2 w-full rounded-md bg-[color:var(--void-main)] border border-border px-4 py-3 text-foreground focus:border-signal focus:outline-none transition-colors"
          placeholder="Tell us about the system you need to engineer..."
        />
      </motion.div>
      <motion.div custom={4} variants={fieldVariants}>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-quantum-gradient px-6 py-3.5 text-sm font-semibold text-white shadow-quantum hover:shadow-glow transition-all"
        >
          Initialize Your Build →
        </motion.button>
      </motion.div>
      <motion.p custom={5} variants={fieldVariants} className="text-xs text-muted-foreground text-center">
        NDA-friendly. Your information is never shared.
      </motion.p>
    </motion.div>
  );
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <motion.form
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      className="rounded-2xl glass-strong p-8 space-y-5 h-fit"
    >
      <AnimatePresence mode="wait">
        {submitted ? <SubmittedState /> : <FormFields />}
      </AnimatePresence>
    </motion.form>
  );
}
