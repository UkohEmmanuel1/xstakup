import { motion } from "framer-motion";
import { SectionLabel, PrimaryCTA, AnimatedSection } from "@/components/common";

export function GlobalReachSection() {
  return (
    <AnimatedSection>
      <section className="py-24 bg-[color:var(--void-section)] border-y border-border overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel>Global Reach</SectionLabel>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold">
              We build impactful technology for businesses worldwide.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Let&apos;s build yours. Headquartered in Lagos, deploying systems across
              Africa, Europe, and the Americas.
            </p>
            <div className="mt-8">
              <PrimaryCTA>Initialize Your Build</PrimaryCTA>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-quantum/20 blur-3xl"
            />
            <motion.svg
              viewBox="0 0 400 400"
              className="relative w-full h-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              <defs>
                <radialGradient id="globe">
                  <stop offset="0%" stopColor="#1E2BFF" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#0A0B10" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="200" cy="200" r="180" fill="url(#globe)" />
              <circle cx="200" cy="200" r="180" fill="none" stroke="#1E2BFF" strokeOpacity="0.3" />
              <circle cx="200" cy="200" r="140" fill="none" stroke="#00D1FF" strokeOpacity="0.2" strokeDasharray="2 4" />
              <circle cx="200" cy="200" r="100" fill="none" stroke="#7A5CFF" strokeOpacity="0.2" strokeDasharray="2 4" />
              {[0, 1, 2, 3, 4].map(i => (
                <ellipse key={i} cx="200" cy="200" rx="180" ry={180 - i * 35} fill="none" stroke="#1E2BFF" strokeOpacity="0.15" />
              ))}
              <g>
                <circle cx="210" cy="220" r="6" fill="#00D1FF">
                  <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="210" cy="220" r="3" fill="#fff" />
                <text x="220" y="218" fill="#F9FAFB" fontSize="10" fontFamily="monospace">LAGOS, NG</text>
              </g>
              {[[120, 140], [280, 160], [310, 240], [150, 280], [240, 110]].map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="3" fill="#7A5CFF" opacity="0.7" />
              ))}
            </motion.svg>
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
