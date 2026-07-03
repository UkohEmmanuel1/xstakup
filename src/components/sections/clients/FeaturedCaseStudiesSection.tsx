"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection, OutlineCTA, slideFromLeft, slideFromRight } from "@/components/common";
import type { FeaturedCase } from "@/types";
import type { CardColor } from "@/types";

const caseCardColors: CardColor[] = [
  { border: "rgba(0, 148, 199, 0.25)", hover: "rgba(0, 148, 199, 0.5)", accent: "rgba(0, 148, 199, 0.6)", bg: "#303030" },
  { border: "rgba(0, 148, 199, 0.25)", hover: "rgba(0, 148, 199, 0.5)", accent: "rgba(0, 148, 199, 0.6)", bg: "#303030" },
  { border: "rgba(0, 148, 199, 0.25)", hover: "rgba(0, 148, 199, 0.5)", accent: "rgba(0, 148, 199, 0.6)", bg: "#303030" },
  { border: "rgba(0, 148, 199, 0.25)", hover: "rgba(0, 148, 199, 0.5)", accent: "rgba(0, 148, 199, 0.6)", bg: "#303030" },
  { border: "rgba(0, 148, 199, 0.3)", hover: "rgba(0, 148, 199, 0.55)", accent: "rgba(0, 148, 199, 0.65)", bg: "#303030" },
];

const featured: FeaturedCase[] = [
  {
    name: "XPay",
    tag: "Fintech & Web3 Infrastructure",
    headline: "Bridging Crypto, Gift Cards, and Fiat Payments.",
    challenge:
      "Building a high-liquidity, zero-latency payment gateway capable of processing traditional and digital assets seamlessly across borders.",
    solution:
      "We engineered a highly secure, scalable payment architecture featuring real-time transaction ledgers, enterprise-grade fraud protection, and instant multi-currency settlements.",
    stack: ["React", "Node.js", "Web3.js", "AWS Secure Enclave", "PostgreSQL"],
    gradient: "linear-gradient(135deg, #0094C7, #303030)",
  },
  {
    name: "Quik",
    tag: "AI & Machine Learning",
    headline: "The Intelligent AI Booking Engine.",
    challenge:
      "Traditional scheduling apps require manual data entry. The market needed an autonomous agent capable of handling natural language requests and complex calendar integrations.",
    solution:
      "XStakUp developed a custom NLP booking application that intelligently syncs availability, manages conflicts, and automates client communication without human intervention.",
    stack: ["Python", "OpenAI API", "React Native", "GraphQL", "Redis"],
    gradient: "linear-gradient(135deg, #0094C7, #0094C7)",
  },
  {
    name: "Cashflow Africa",
    tag: "Enterprise SaaS & Trade Finance",
    headline: "Powering Intra-African Trade.",
    challenge:
      "Cross-border B2B trade in Africa suffers from fragmented financial data and slow liquidity cycles.",
    solution:
      "We deployed an enterprise-grade trade finance platform that digitizes invoicing, secures B2B lending, and provides real-time financial dashboards for high-volume merchants.",
    stack: ["Vue.js", "GoLang", "Kubernetes", "Snowflake", "Docker"],
    gradient: "linear-gradient(135deg, #0094C7, #303030)",
  },
  {
    name: "Diction Masters",
    tag: "EdTech & NLP",
    headline: "Language Learning Reimagined.",
    challenge:
      "Building an intelligent pronunciation coaching system that provides real-time feedback to language learners across different dialects and accents.",
    solution:
      "We built a speech recognition pipeline with real-time phoneme analysis, personalized learning paths, and native-language-accurate pronunciation scoring using custom NLP models.",
    stack: ["Python", "TensorFlow", "React Native", "WebSocket", "GCP"],
    gradient: "linear-gradient(135deg, #0094C7, #303030)",
  },
  {
    name: "Waterpro LLC",
    tag: "Enterprise IoT",
    headline: "Smart Water Management.",
    challenge:
      "Municipal water systems lacked real-time monitoring, leading to 30%+ losses from leaks and inefficient distribution across urban networks.",
    solution:
      "We deployed an IoT sensor network with a real-time analytics dashboard that detects leaks, predicts maintenance, and optimizes distribution flow across city infrastructure.",
    stack: ["Go", "React", "InfluxDB", "MQTT", "Kubernetes"],
    gradient: "linear-gradient(135deg, #0094C7, #303030)",
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
      <span className="inline-block text-xs uppercase tracking-widest border rounded-full px-3 py-1 text-[#0094C7] border-[#0094C7]/30">
        {c.tag}
      </span>
      <h2 className="mt-5 text-3xl md:text-4xl font-bold">
        <span className="text-gradient-blue">{c.name}:</span>{" "}
        <span className="text-white">{c.headline}</span>
      </h2>
      <div className="mt-6 space-y-5">
        <div>
          <p className="text-xs uppercase tracking-widest text-white/50">The Challenge</p>
          <p className="mt-2 text-white/70 leading-relaxed">{c.challenge}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-white/50">The Solution</p>
          <p className="mt-2 text-white/70 leading-relaxed">{c.solution}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-white/50">Tech Stack</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {c.stack.map((s) => (
              <span
                key={s}
                className="text-xs px-2.5 py-1 rounded border border-white/10 bg-white/5 text-white/70"
              >
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

function CaseStudyMockupPanel({ c, color }: { c: FeaturedCase; color: CardColor }) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden aspect-[4/3]"
      style={{ border: `1px solid ${color.border}`, background: color.bg }}
    >
      <div className="absolute top-0 left-3 right-3 h-[2px] rounded-full" style={{ background: color.accent }} />
      <div className="absolute inset-0" style={{ background: c.gradient, opacity: 0.85 }} />
      {c.name === "XPay" && (
        <Image
          src="/assets/XPAY LOGO.webp"
          alt="XPay Logo"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain opacity-30 p-8"
        />
      )}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-6 rounded-lg bg-[#303030]/60 backdrop-blur-sm p-4 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-[#0094C7]/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#0094C7]/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#0094C7]/60" />
          <span className="ml-2 text-[10px] text-white/50">
            {c.name.toLowerCase()}.xstakup.io
          </span>
        </div>
        <div className="flex-1 grid grid-cols-3 gap-2">
          <div className="col-span-2 rounded bg-white/5 p-3 flex flex-col gap-2">
            <div className="h-2 w-1/3 rounded" style={{ background: color.accent }} />
            <div className="h-8 rounded bg-blue/20" />
            <div className="h-2 w-2/3 rounded bg-white/10" />
            <div className="h-2 w-1/2 rounded bg-white/10" />
            <div className="mt-auto grid grid-cols-3 gap-1">
              <div className="h-6 rounded bg-blue/40" />
              <div className="h-6 rounded bg-steel/30" />
              <div className="h-6 rounded bg-blue/30" />
            </div>
          </div>
          <div className="rounded bg-white/5 p-3 flex flex-col gap-2">
            <div className="h-2 w-2/3 rounded" style={{ background: color.accent }} />
            {[1, 2, 3, 4].map((k) => (
              <div
                key={k}
                className="h-1.5 rounded bg-white/10"
                style={{ width: `${50 + k * 10}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturedCaseStudiesSection() {
  return (
    <AnimatedSection>
      <section id="cases" className="py-12 md:py-20 bg-void-section border-y border-border overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 space-y-16 md:space-y-32">
          {featured.map((c, i) => {
            const reverse = i % 2 === 1;
            const color = caseCardColors[i % caseCardColors.length];
            return (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className={`grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-20 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <motion.div
                  variants={reverse ? slideFromRight : slideFromLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative"
                >
                  <CaseStudyMockup gradient={c.gradient} name={c.name} />
                  <CaseStudyMockupPanel c={c} color={color} />
                </motion.div>

                <CaseStudyContent c={c} reverse={reverse} />
              </motion.div>
            );
          })}
        </div>
      </section>
    </AnimatedSection>
  );
}
