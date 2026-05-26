import { motion } from "framer-motion";
import { SectionLabel, AnimatedSection, staggerContainer, staggerItem } from "@/components/common";

export function MissionVisionSection() {
  const items = [
    { t: "Our Mission", d: "To provide world-class technical infrastructure and engineering expertise that empowers businesses to scale without limits." },
    { t: "Our Vision", d: "To be the most trusted global engineering partner for high-scale digital platforms, setting the standard for uptime, security, and innovation." },
  ];

  return (
    <AnimatedSection>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>The Blueprint</SectionLabel>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold">Mission & Vision</h2>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {items.map((c) => (
              <motion.div
                key={c.t}
                variants={staggerItem}
                className="relative rounded-2xl p-10 glass"
                style={{ borderColor: "rgba(0, 209, 255, 0.4)" }}
              >
                <div className="font-mono text-xs uppercase tracking-widest text-signal">{c.t}</div>
                <p className="mt-5 text-xl md:text-2xl text-foreground leading-relaxed font-medium">
                  {c.d}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
