"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/common";
import { whyItems } from "@/data";
import { CheckCircle } from "lucide-react";

export function WhySection() {
  return (
    <AnimatedSection className="py-16 md:py-24 border-b border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1 max-w-xl">
            <h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-tight">
              Built For Scale
            </h2>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {whyItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex gap-3"
              >
                <CheckCircle size={18} className="text-blue flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-heading font-bold text-foreground">{item.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
