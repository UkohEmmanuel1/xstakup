"use client";

import { motion } from "framer-motion";
import { OutlineCTA } from "@/components/common";
import { slideFromLeft, slideFromRight } from "@/components/common";
import type { FeaturedCase } from "@/types";

const featured: FeaturedCase[] = [
  {
    name: "XPay",
    tag: "Fintech & Web3 Infrastructure",
    headline: "Bridging Crypto, Gift Cards, and Fiat Payments.",
    challenge: "Building a high-liquidity, zero-latency payment gateway capable of processing traditional and digital assets seamlessly across borders.",
    solution: "We engineered a highly secure, scalable payment architecture featuring real-time transaction ledgers, enterprise-grade fraud protection, and instant multi-currency settlements.",
    stack: ["React", "Node.js", "Web3.js", "AWS Secure Enclave", "PostgreSQL"],
    gradient: "linear-gradient(135deg, #1E2BFF, #0F1A7A)",
  },
  {
    name: "Quik",
    tag: "AI & Machine Learning",
    headline: "The Intelligent AI Booking Engine.",
    challenge: "Traditional scheduling apps require manual data entry. The market needed an autonomous agent capable of handling natural language requests and complex calendar integrations.",
    solution: "XStakUp developed a custom NLP booking application that intelligently syncs availability, manages conflicts, and automates client communication without human intervention.",
    stack: ["Python", "OpenAI API", "React Native", "GraphQL", "Redis"],
    gradient: "linear-gradient(135deg, #7A5CFF, #1E2BFF)",
  },
  {
    name: "Cashflow Africa",
    tag: "Enterprise SaaS & Trade Finance",
    headline: "Powering Intra-African Trade.",
    challenge: "Cross-border B2B trade in Africa suffers from fragmented financial data and slow liquidity cycles.",
    solution: "We deployed an enterprise-grade trade finance platform that digitizes invoicing, secures B2B lending, and provides real-time financial dashboards for high-volume merchants.",
    stack: ["Vue.js", "GoLang", "Kubernetes", "Snowflake", "Docker"],
    gradient: "linear-gradient(135deg, #00D1FF, #0F1A7A)",
  },
];

function CaseStudyMockup({ gradient, name }: { gradient: string; name: string }) {
  return (
    <motion.div
      animate={{ scale: [1, 1.03, 1], opacity: [0.4, 0.5, 0.4] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -inset-6 rounded-3xl blur-3xl opacity-40"
      style={{ background: gradient }}
    />
  );
}

function CaseStudyContent({ c, reverse }: { c: FeaturedCase; reverse: boolean }) {
  return (
    <motion.div
      variants={reverse ? slideFromLeft : slideFromRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <span className="inline-block font-mono text-xs uppercase tracking-widest text-signal border border-signal/30 rounded-full px-3 py-1">
        {c.tag}
      </span>
      <h2 className="mt-5 text-3xl md:text-4xl font-bold">
        <span className="text-gradient-quantum">{c.name}:</span>{" "}
        <span className="text-foreground">{c.headline}</span>
      </h2>
      <div className="mt-6 space-y-5">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">The Challenge</p>
          <p className="mt-2 text-muted-foreground leading-relaxed">{c.challenge}</p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">The Solution</p>
          <p className="mt-2 text-muted-foreground leading-relaxed">{c.solution}</p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Tech Stack</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {c.stack.map((s) => (
              <span key={s} className="font-mono text-xs px-2.5 py-1 rounded border border-border bg-[color:var(--void-surface)]">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8">
        <OutlineCTA href="/contact">View Architecture Details</OutlineCTA>
      </div>
    </motion.div>
  );
}

function CaseStudyMockupPanel({ c }: { c: FeaturedCase }) {
  return (
    <div className="relative rounded-2xl glass-strong overflow-hidden aspect-[4/3]">
      <div className="absolute inset-0" style={{ background: c.gradient, opacity: 0.85 }} />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-6 rounded-lg bg-[color:var(--void-main)]/85 backdrop-blur-sm p-4 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
          <span className="ml-2 font-mono text-[10px] text-muted-foreground">{c.name.toLowerCase()}.xstakup.io</span>
        </div>
        <div className="flex-1 grid grid-cols-3 gap-2">
          <div className="col-span-2 rounded bg-white/5 p-3 flex flex-col gap-2">
            <div className="h-2 w-1/3 rounded bg-signal/60" />
            <div className="h-8 rounded bg-quantum/20" />
            <div className="h-2 w-2/3 rounded bg-white/10" />
            <div className="h-2 w-1/2 rounded bg-white/10" />
            <div className="mt-auto grid grid-cols-3 gap-1">
              <div className="h-6 rounded bg-quantum/40" />
              <div className="h-6 rounded bg-violet/30" />
              <div className="h-6 rounded bg-signal/30" />
            </div>
          </div>
          <div className="rounded bg-white/5 p-3 flex flex-col gap-2">
            <div className="h-2 w-2/3 rounded bg-signal/60" />
            {[1, 2, 3, 4].map(k => (
              <div key={k} className="h-1.5 rounded bg-white/10" style={{ width: `${50 + k * 10}%` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturedCaseStudiesSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-6 space-y-32">
        {featured.map((c, i) => {
          const reverse = i % 2 === 1;
          return (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <motion.div
                variants={reverse ? slideFromRight : slideFromLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <CaseStudyMockup gradient={c.gradient} name={c.name} />
                <CaseStudyMockupPanel c={c} />
              </motion.div>

              <CaseStudyContent c={c} reverse={reverse} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
