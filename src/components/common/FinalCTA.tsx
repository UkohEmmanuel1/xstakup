import { motion } from "framer-motion";
import { PrimaryCTA } from "@/components/common/Button";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative overflow-hidden rounded-2xl p-12 md:p-20 text-center animate-gradient-shift"
          style={{
            background: "linear-gradient(135deg, #0F1A7A 0%, #0F1A7A 30%, #1E2BFF 60%, #0F1A7A 100%)",
          }}
        >
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-signal/30 blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-violet/30 blur-3xl"
          />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold text-white max-w-3xl mx-auto">
              Stop fighting technical debt. Let's engineer your solution.
            </h2>
            <p className="mt-5 text-white/70 max-w-xl mx-auto">
              Partner with a dedicated engineering team that ships elite,
              production-grade systems.
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
