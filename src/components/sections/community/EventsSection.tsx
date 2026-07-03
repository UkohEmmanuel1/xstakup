"use client";

import { motion } from "framer-motion";
import { SectionLabel, AnimatedSection, staggerContainer, staggerItem } from "@/components/common";
import { communityEvents, eventCardColors } from "@/data/community";

const typeBadge: Record<string, string> = {
  Meetup: "border-[#0094C7]/30 text-[#0094C7]",
  Workshop: "border-[#0094C7]/30 text-[#0094C7]",
  Talk: "border-[#0094C7]/30 text-[#0094C7]",
  Hackathon: "border-[#0094C7]/30 text-[#0094C7]",
};

export function EventsSection() {
  return (
    <AnimatedSection>
      <section id="events" className="py-16 md:py-24 bg-void-section border-y border-border overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel>Events</SectionLabel>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold">
              Developer <span className="text-gradient-blue">Events</span>
            </h2>
            <p className="mt-4 text-white/70 text-base md:text-lg">
              Events for every engineer.
            </p>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {communityEvents.map((ev, i) => {
              const c = eventCardColors[i % eventCardColors.length];
              return (
                <motion.div
                  key={ev.title}
                  variants={staggerItem}
                  whileHover={{ y: -4, borderColor: c.hover }}
                  className="group relative rounded-xl p-8 md:p-10 transition-colors h-full min-h-[200px] flex flex-col"
                  style={{ border: `1px solid ${c.border}`, background: c.bg }}
                >
                  <div className="absolute top-0 left-3 right-3 h-[2px] rounded-full" style={{ background: c.accent }} />
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl" style={{ color: c.hover }}>{ev.icon}</div>
                    <span className={`text-xs uppercase tracking-wider px-2.5 py-1 rounded-full border ${typeBadge[ev.type] || ""}`}>
                      {ev.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{ev.title}</h3>
                  <p className="mt-1 text-sm" style={{ color: c.hover }}>{ev.date}</p>
                  <p className="mt-3 text-white/60 text-sm leading-relaxed flex-grow">
                    {ev.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
