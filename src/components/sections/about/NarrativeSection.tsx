import { motion } from "framer-motion";
import { SectionLabel, AnimatedSection, slideFromLeft, slideFromRight } from "@/components/common";

export function NarrativeSection() {
  return (
    <AnimatedSection>
      <section className="py-24 bg-[color:var(--void-section)] border-y border-border">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">
              We bridge the gap between ambition and infrastructure.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                XStakUp was founded on a simple premise: businesses deserve
                better than &quot;off-the-shelf&quot; solutions. We saw the gap between
                ambitious product ideas and the technical infrastructure
                required to sustain them.
              </p>
              <p>
                Today, we bridge that gap. As the engineering engine within the{" "}
                <span className="text-foreground font-medium">FTRX Group</span>{" "}
                ecosystem, we bring specialized expertise in fintech, AI, and
                scalable cloud architecture to every client partner.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 rounded-2xl glass overflow-hidden">
              <div className="absolute inset-0 grid-pattern opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.svg
                  viewBox="0 0 200 200"
                  className="w-3/4 h-3/4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  <defs>
                    <linearGradient id="narrativeGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#00D1FF" />
                      <stop offset="100%" stopColor="#1E2BFF" />
                    </linearGradient>
                  </defs>
                  {[20, 40, 60, 80].map(r => (
                    <polygon
                      key={r}
                      points={`100,${100 - r} ${100 + r * 0.866},${100 + r * 0.5} ${100 - r * 0.866},${100 + r * 0.5}`}
                      fill="none"
                      stroke="url(#narrativeGrad)"
                      strokeOpacity={0.4 + r / 200}
                    />
                  ))}
                  <motion.circle
                    cx="100" cy="100" r="4" fill="#00D1FF"
                    animate={{ r: [4, 6, 4] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.svg>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
