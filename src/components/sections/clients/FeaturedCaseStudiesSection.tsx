"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection, PrimaryCTA, slideFromLeft, slideFromRight } from "@/components/common";
import type { FeaturedCase } from "@/types";
import type { CardColor } from "@/types";

const caseCardColors: CardColor[] = [
  {
    border: "rgba(0, 148, 199, 0.25)",
    hover: "rgba(0, 148, 199, 0.5)",
    accent: "rgba(0, 148, 199, 0.6)",
    bg: "var(--card-bg)",
  },
  {
    border: "rgba(0, 148, 199, 0.25)",
    hover: "rgba(0, 148, 199, 0.5)",
    accent: "rgba(0, 148, 199, 0.6)",
    bg: "var(--card-bg)",
  },
  {
    border: "rgba(0, 148, 199, 0.25)",
    hover: "rgba(0, 148, 199, 0.5)",
    accent: "rgba(0, 148, 199, 0.6)",
    bg: "var(--card-bg)",
  },
  {
    border: "rgba(0, 148, 199, 0.25)",
    hover: "rgba(0, 148, 199, 0.5)",
    accent: "rgba(0, 148, 199, 0.6)",
    bg: "var(--card-bg)",
  },
  {
    border: "rgba(0, 148, 199, 0.3)",
    hover: "rgba(0, 148, 199, 0.55)",
    accent: "rgba(0, 148, 199, 0.65)",
    bg: "var(--card-bg)",
  },
  {
    border: "rgba(0, 148, 199, 0.3)",
    hover: "rgba(0, 148, 199, 0.55)",
    accent: "rgba(0, 148, 199, 0.65)",
    bg: "var(--card-bg)",
  },
  {
    border: "rgba(0, 148, 199, 0.25)",
    hover: "rgba(0, 148, 199, 0.5)",
    accent: "rgba(0, 148, 199, 0.6)",
    bg: "var(--card-bg)",
  },
  {
    border: "rgba(0, 148, 199, 0.25)",
    hover: "rgba(0, 148, 199, 0.5)",
    accent: "rgba(0, 148, 199, 0.6)",
    bg: "var(--card-bg)",
  },
  {
    border: "rgba(0, 148, 199, 0.25)",
    hover: "rgba(0, 148, 199, 0.5)",
    accent: "rgba(0, 148, 199, 0.6)",
    bg: "var(--card-bg)",
  },
  {
    border: "rgba(0, 148, 199, 0.25)",
    hover: "rgba(0, 148, 199, 0.5)",
    accent: "rgba(0, 148, 199, 0.6)",
    bg: "var(--card-bg)",
  },
  {
    border: "rgba(0, 148, 199, 0.3)",
    hover: "rgba(0, 148, 199, 0.55)",
    accent: "rgba(0, 148, 199, 0.65)",
    bg: "var(--card-bg)",
  },
  {
    border: "rgba(0, 148, 199, 0.3)",
    hover: "rgba(0, 148, 199, 0.55)",
    accent: "rgba(0, 148, 199, 0.65)",
    bg: "var(--card-bg)",
  },
];

const featured: FeaturedCase[] = [
  {
    name: "XPay",
    tag: "Fintech & Web3 Infrastructure",
    headline: "Bridging Crypto, Gift Cards, and Fiat Payments.",
    challenge: "Zero-latency payment gateway for traditional and digital assets.",
    solution:
      "Secure, scalable payment architecture with real-time ledgers, fraud protection, and multi-currency settlements.",
    stack: ["React", "Node.js", "Web3.js", "AWS Secure Enclave", "PostgreSQL"],
    gradient: "linear-gradient(135deg, #0094C7, #121212)",
  },
  {
    name: "Quik",
    tag: "AI & Machine Learning",
    headline: "The Intelligent AI Booking Engine.",
    challenge: "Autonomous scheduling agent for natural language booking and calendar management.",
    solution:
      "NLP booking engine with smart availability syncing, conflict management, and automated communication.",
    stack: ["Python", "OpenAI API", "React Native", "GraphQL", "Redis"],
    gradient: "linear-gradient(135deg, #0094C7, #0094C7)",
  },
  {
    name: "Lolliters",
    tag: "Travel Tech & Hospitality",
    headline: "All-in-One Travel Booking Platform.",
    challenge:
      "Fragmented travel booking experience across airlines, hotels, and local experiences.",
    solution:
      "Unified booking platform with real-time inventory, dynamic pricing, multi-language support, and AI-powered trip recommendations.",
    stack: ["Next.js", "Node.js", "GraphQL", "PostgreSQL", "Redis", "Docker"],
    gradient: "linear-gradient(135deg, #0094C7, #121212)",
  },
  {
    name: "Digidrops",
    tag: "Web3 / SocialFi",
    headline: "SocialFi Platform with Wallet Identity and NFT Rewards.",
    challenge:
      "Building a social platform combining Web3 wallet auth with engaging user experiences.",
    solution:
      "SocialFi platform with wallet-based identity, quest rewards, and gamified engagement.",
    stack: ["Next.js", "Solidity", "WalletConnect", "The Graph", "PostgreSQL", "Tailwind CSS"],
    gradient: "linear-gradient(135deg, #0094C7, #121212)",
  },
  {
    name: "Diction Masters",
    tag: "EdTech & NLP",
    headline: "Language Learning Reimagined.",
    challenge: "Real-time pronunciation coaching for language learners across dialects.",
    solution:
      "Speech recognition pipeline with phoneme analysis, personalized learning, and NLP scoring.",
    stack: ["Python", "TensorFlow", "React Native", "WebSocket", "GCP"],
    gradient: "linear-gradient(135deg, #0094C7, #121212)",
  },
  {
    name: "Waterpro LLC",
    tag: "Enterprise IoT",
    headline: "Smart Water Management.",
    challenge: "30%+ water losses from leaks due to no real-time monitoring.",
    solution:
      "IoT sensor network with real-time analytics for leak detection, maintenance prediction, and flow optimization.",
    stack: ["Go", "React", "InfluxDB", "MQTT", "Kubernetes"],
    gradient: "linear-gradient(135deg, #0094C7, #121212)",
  },
  {
    name: "Bepopula",
    tag: "Web & Mobile Development",
    headline: "Modern Digital Experience Platform.",
    challenge: "Needed a full-stack web and mobile platform with seamless user experience.",
    solution: "End-to-end platform built with modern frameworks for web and mobile delivery.",
    stack: ["Next.js", "React Native", "Node.js", "PostgreSQL", "Tailwind CSS"],
    gradient: "linear-gradient(135deg, #0094C7, #121212)",
  },
  {
    name: "Shoopa",
    tag: "E-Commerce Infrastructure",
    headline: "Multi-Vendor E-Commerce Platform.",
    challenge: "Complex multi-vendor marketplace requiring scalable checkout and inventory.",
    solution:
      "Full e-commerce infrastructure with multi-vendor support, real-time inventory, and integrated payments.",
    stack: ["Next.js", "Node.js", "Stripe", "PostgreSQL", "Redis"],
    gradient: "linear-gradient(135deg, #0094C7, #121212)",
  },
  {
    name: "SPC",
    tag: "Enterprise SaaS",
    headline: "Multi-Tenant Enterprise Platform.",
    challenge: "Needed a secure, scalable SaaS platform with role-based access and analytics.",
    solution:
      "Enterprise SaaS with multi-tenant architecture, advanced analytics, and granular access controls.",
    stack: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
    gradient: "linear-gradient(135deg, #0094C7, #121212)",
  },
  {
    name: "TapN",
    tag: "Fintech / Mobile Payments",
    headline: "Contactless Payment Solution.",
    challenge: "Seamless mobile-first payment experience for contactless transactions.",
    solution:
      "Mobile payment platform with NFC integration, real-time processing, and robust security.",
    stack: ["React Native", "Node.js", "PostgreSQL", "WebSocket", "Paystack"],
    gradient: "linear-gradient(135deg, #0094C7, #121212)",
  },
  {
    name: "Usetiks",
    tag: "Web3 / NFT Ticketing",
    headline: "Blockchain-Verified Ticketing Platform.",
    challenge: "Ticket fraud and lack of secondary market transparency.",
    solution:
      "NFT ticketing platform with blockchain-verified ownership, secure transfers, and secondary market trading.",
    stack: ["Next.js", "Solidity", "WalletConnect", "The Graph", "PostgreSQL"],
    gradient: "linear-gradient(135deg, #0094C7, #121212)",
  },
];

function CaseStudyMockup({ gradient, name: _name }: { gradient: string; name: string }) {
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
        <PrimaryCTA href="/contact">View Architecture Details</PrimaryCTA>
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
      <div
        className="absolute top-0 left-3 right-3 h-[2px] rounded-full"
        style={{ background: color.accent }}
      />
      <div className="absolute inset-0" style={{ background: c.gradient, opacity: 0.85 }} />
      {c.name === "XPay" && (
        <Image
          src="/assets/xpay.jpeg"
          alt="XPay Logo"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover opacity-50"
        />
      )}
      {c.name === "Lolliters" && (
        <Image
          src="/assets/Lolliters.png"
          alt="Lolliters Logo"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover opacity-50"
        />
      )}
      {c.name === "Digidrops" && (
        <Image
          src="/assets/digidrps.png"
          alt="Digidrops Logo"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover opacity-50"
        />
      )}
      {c.name === "Diction Masters" && (
        <Image
          src="/assets/diction_masters.jpeg"
          alt="Diction Masters Logo"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover opacity-50"
        />
      )}
      {c.name === "Waterpro LLC" && (
        <Image
          src="/assets/Waterpro_LLC.png"
          alt="Waterpro LLC Logo"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover opacity-50"
        />
      )}
      {c.name === "Bepopula" && (
        <Image
          src="/assets/bepopula.jpeg"
          alt="Bepopula Logo"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover opacity-50"
        />
      )}
      {c.name === "Shoopa" && (
        <Image
          src="/assets/shoopa.jpeg"
          alt="Shoopa Logo"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover opacity-50"
        />
      )}
      {c.name === "SPC" && (
        <Image
          src="/assets/spc.jpeg"
          alt="SPC Logo"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover opacity-50"
        />
      )}
      {c.name === "TapN" && (
        <Image
          src="/assets/tapn.jpeg"
          alt="TapN Logo"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover opacity-50"
        />
      )}
      {c.name === "Usetiks" && (
        <Image
          src="/assets/usetiks.jpeg"
          alt="Usetiks Logo"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover opacity-50"
        />
      )}
    </div>
  );
}

export function FeaturedCaseStudiesSection() {
  return (
    <AnimatedSection>
      <section
        id="cases"
        className="py-16 md:py-24 bg-void-section border-y border-border overflow-hidden"
      >
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
                className={`grid grid-cols-1 gap-5 md:gap-6 md:grid-cols-2 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}
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
