import { motion } from "framer-motion";
import { SectionLabel } from "@/components/common";

export function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-quantum/30 blur-[120px]"
      />
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-28 md:pt-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SectionLabel>About XStakUp</SectionLabel>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl mx-auto"
        >
          Engineering the Future of{" "}
          <span className="text-gradient-quantum">Digital Commerce</span> and Enterprise.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground"
        >
          We are a team of dedicated engineers, architects, and strategists
          committed to building the robust infrastructure that powers
          market-leading businesses across Africa and beyond.
        </motion.p>
      </div>
    </section>
  );
}
