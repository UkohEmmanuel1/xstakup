"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Clock } from "lucide-react";
import { AnimatedSection, staggerContainer, staggerItem } from "@/components/common";
import { jobOpenings, jobCardColors } from "@/data/careers";

const departments = ["All", "Backend", "Frontend", "AI", "Web3", "DevSecOps"];

export function OpenPositionsSection() {
  const [activeDept, setActiveDept] = useState("All");

  const filtered =
    activeDept === "All" ? jobOpenings : jobOpenings.filter((j) => j.department === activeDept);

  return (
    <AnimatedSection>
      <section id="open-positions" className="border-y border-border overflow-hidden">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="section-title">
                Open <span className="text-gradient-blue">Roles</span>
              </h2>
              <p className="section-subtitle">Engineers shipping elite code.</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDept(dept)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  activeDept === dept
                    ? "bg-blue-gradient text-white shadow-blue"
                    : "bg-card-solid-bg text-muted-foreground hover:text-white border border-white/10"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              No open positions in this department right now. Check back soon.
            </p>
          )}

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((job, i) => {
              const c = jobCardColors[i % jobCardColors.length];
              return (
                <motion.div
                  key={job.id}
                  variants={staggerItem}
                  whileHover={{ y: -4, borderColor: c.hover }}
                  className="group relative rounded-xl p-8 md:p-10 transition-colors h-full min-h-[200px] flex flex-col"
                  style={{ border: `1px solid ${c.border}`, background: c.bg }}
                >
                  <div
                    className="absolute top-0 left-3 right-3 h-[2px] rounded-full"
                    style={{ background: c.accent }}
                  />
                  <h3 className="text-lg md:text-xl font-semibold text-white">{job.title}</h3>
                  <div className="flex flex-wrap gap-3 mt-3 text-sm" style={{ color: c.hover }}>
                    <span className="inline-flex items-center gap-1">
                      <Briefcase className="h-3.5 w-3.5" />
                      {job.department}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {job.type}
                    </span>
                  </div>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed flex-grow">
                    {job.description}
                  </p>
                  <div className="mt-5">
                    <a
                      href={job.applyUrl}
                      className="inline-flex items-center gap-2 rounded-md bg-blue-gradient px-5 py-2.5 text-sm font-medium text-white shadow-blue hover:shadow-glow transition-shadow"
                    >
                      Apply Now
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
