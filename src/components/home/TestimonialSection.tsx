import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/common";

export function TestimonialSection() {
  return (
    <AnimatedSection>
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-2xl p-10 md:p-16"
            style={{ background: "linear-gradient(135deg, #0F1A7A 0%, #0A0B10 100%)" }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-signal/20 blur-3xl"
            />
            <div className="relative">
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-mono text-6xl text-signal/40 leading-none"
              >
                &quot;
              </motion.span>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-2 text-2xl md:text-3xl font-medium text-white leading-relaxed"
              >
                XStakUp isn&apos;t a vendor — they&apos;re embedded in our roadmap. They
                shipped our payment infrastructure faster and more securely than
                any in-house team we&apos;d hired. They engineer like founders.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-10 flex items-center gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="h-12 w-12 rounded-full bg-quantum-gradient"
                />
                <div>
                  <p className="font-semibold text-white">Adaeze Okonkwo</p>
                  <p className="text-sm text-white/60 font-mono">CTO, XPay</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
