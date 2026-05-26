import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionLabel, FinalCTA } from "@/components/Shared";

export const Route = createFileRoute("/blog")({
  head: () => ({ meta: [{ title: "Engineering Blog — XStakUp" }, { name: "description", content: "Architecture deep-dives, post-mortems, and engineering perspectives from XStakUp." }] }),
  component: () => (
    <>
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-signal/20 blur-[120px]"
        />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SectionLabel>Engineering Blog</SectionLabel>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-5xl md:text-7xl font-bold tracking-tight"
          >
            <span className="text-gradient-quantum">Architecture in Practice</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Technical deep-dives, post-mortems, and engineering perspectives.
            First articles dropping soon.
          </motion.p>
        </div>
      </section>
      <FinalCTA />
    </>
  ),
});
