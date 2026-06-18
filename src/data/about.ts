import type { Differentiator, ValueItem, Leader, CardColor } from "@/types";

export const missionVisionItems = [
  {
    t: "Our Mission",
    d: "To provide world-class technical infrastructure and engineering expertise that empowers businesses to scale without limits.",
  },
  {
    t: "Our Vision",
    d: "To be the most trusted global engineering partner for high scale digital platforms, setting the standard for uptime, security, and innovation.",
  },
];

export const differentiators: Differentiator[] = [
  {
    title: "Client First Architecture",
    description: "Your business goals dictate our technical stack. We build for your specific scale, not ours.",
  },
  {
    title: "Uncompromising Security",
    description: "From fintech gateways to Web3 dApps, security isn't a feature it's the foundation of every line of code we ship.",
  },
  {
    title: "99.9% Engineering Rigor",
    description: "We utilize DevSecOps and automated QA pipelines to ensure your system remains stable and high-performing 24/7.",
  },
  {
    title: "Full Stack Delivery",
    description: "From frontend to infrastructure, we own the entire stack and deliver production-ready systems every sprint.",
  },
  {
    title: "AI First Approach",
    description: "We integrate AI into every layer of development — from code generation to intelligent monitoring and predictive ops.",
  },
  {
    title: "Global Talent Network",
    description: "Our distributed team brings diverse expertise across time zones, ensuring round the clock engineering velocity.",
  },
];

export const values: ValueItem[] = [
  { icon: "✦", title: "Excellence", description: "We don't ship 'good enough.' We ship elite." },
  {
    icon: "◇",
    title: "Transparency",
    description: "Open communication and clear technical roadmaps at every sprint.",
  },
  { icon: "⬡", title: "Ownership", description: "We treat your product like it's our own internal infrastructure." },
  {
    icon: "⟁",
    title: "Innovation",
    description: "Constantly evolving our stack — AI, Blockchain, Edge — to keep you ahead.",
  },
  {
    icon: "⌘",
    title: "Collaboration",
    description: "We embed with your team, working as a seamless extension of your engineering organization.",
  },
  {
    icon: "▣",
    title: "Impact",
    description: "Every line of code ships with measurable business outcomes and real user value.",
  },
];

export const leaders: Leader[] = [
  {
    name: "Glory Umukoro",
    role: "Founder & CEO",
    bio: "Vision led founder driving XStakUp's growth and engineering culture across Africa and global markets.",
  },
  {
    name: "Adaobi Nwosu",
    role: "CTO",
    bio: "Enterprise architect with deep expertise in distributed systems, cloud infrastructure, and fintech engineering.",
  },
  {
    name: "Chidi Okonkwo",
    role: "VP of Engineering",
    bio: "Leads cross functional engineering squads delivering high scale platforms for fintech, logistics, and Web3.",
  },
  {
    name: "Tunde Bakare",
    role: "Head of AI & Data",
    bio: "Drives AI/ML strategy and production grade model deployment across client platforms.",
  },
];

export const leaderGradients = [
  "linear-gradient(135deg, #1E2BFF, #0F1A7A)",
  "linear-gradient(135deg, #7A5CFF, #0F1A7A)",
  "linear-gradient(135deg, #00D1FF, #0F1A7A)",
  "linear-gradient(135deg, #1E2BFF, #0A0B10)",
];

export const mvCardColors: CardColor[] = [
  { border: "oklch(0.52 0.28 265 / 0.25)", hover: "oklch(0.52 0.28 265 / 0.5)", accent: "oklch(0.52 0.28 265 / 0.6)", bg: "oklch(0.21 0.08 265)" },
  { border: "oklch(0.55 0.22 290 / 0.25)", hover: "oklch(0.55 0.22 290 / 0.5)", accent: "oklch(0.55 0.22 290 / 0.6)", bg: "oklch(0.21 0.09 290)" },
];

export const differentiatorCardColors: CardColor[] = [
  { border: "oklch(0.65 0.18 230 / 0.25)", hover: "oklch(0.65 0.18 230 / 0.5)", accent: "oklch(0.65 0.18 230 / 0.6)", bg: "oklch(0.21 0.06 230)" },
  { border: "oklch(0.52 0.28 265 / 0.25)", hover: "oklch(0.52 0.28 265 / 0.5)", accent: "oklch(0.52 0.28 265 / 0.6)", bg: "oklch(0.21 0.08 265)" },
  { border: "oklch(0.55 0.22 290 / 0.25)", hover: "oklch(0.55 0.22 290 / 0.5)", accent: "oklch(0.55 0.22 290 / 0.6)", bg: "oklch(0.21 0.09 290)" },
  { border: "oklch(0.6 0.15 200 / 0.25)", hover: "oklch(0.6 0.15 200 / 0.5)", accent: "oklch(0.6 0.15 200 / 0.6)", bg: "oklch(0.21 0.06 200)" },
  { border: "oklch(0.65 0.14 95 / 0.3)", hover: "oklch(0.65 0.14 95 / 0.55)", accent: "oklch(0.65 0.14 95 / 0.65)", bg: "oklch(0.23 0.06 95)" },
  { border: "oklch(0.6 0.15 150 / 0.25)", hover: "oklch(0.6 0.15 150 / 0.5)", accent: "oklch(0.6 0.15 150 / 0.6)", bg: "oklch(0.21 0.06 150)" },
];

export const valueCardColors: CardColor[] = [
  { border: "oklch(0.65 0.18 230 / 0.25)", hover: "oklch(0.65 0.18 230 / 0.5)", accent: "oklch(0.65 0.18 230 / 0.6)", bg: "oklch(0.21 0.06 230)" },
  { border: "oklch(0.52 0.28 265 / 0.25)", hover: "oklch(0.52 0.28 265 / 0.5)", accent: "oklch(0.52 0.28 265 / 0.6)", bg: "oklch(0.21 0.08 265)" },
  { border: "oklch(0.55 0.22 290 / 0.25)", hover: "oklch(0.55 0.22 290 / 0.5)", accent: "oklch(0.55 0.22 290 / 0.6)", bg: "oklch(0.21 0.09 290)" },
  { border: "oklch(0.6 0.15 200 / 0.25)", hover: "oklch(0.6 0.15 200 / 0.5)", accent: "oklch(0.6 0.15 200 / 0.6)", bg: "oklch(0.21 0.06 200)" },
  { border: "oklch(0.65 0.14 95 / 0.3)", hover: "oklch(0.65 0.14 95 / 0.55)", accent: "oklch(0.65 0.14 95 / 0.65)", bg: "oklch(0.23 0.06 95)" },
  { border: "oklch(0.6 0.15 150 / 0.25)", hover: "oklch(0.6 0.15 150 / 0.5)", accent: "oklch(0.6 0.15 150 / 0.6)", bg: "oklch(0.21 0.06 150)" },
];

export const leaderCardColors: CardColor[] = [
  { border: "oklch(0.65 0.18 230 / 0.25)", hover: "oklch(0.65 0.18 230 / 0.5)", accent: "oklch(0.65 0.18 230 / 0.6)", bg: "oklch(0.21 0.06 230)" },
  { border: "oklch(0.52 0.28 265 / 0.25)", hover: "oklch(0.52 0.28 265 / 0.5)", accent: "oklch(0.52 0.28 265 / 0.6)", bg: "oklch(0.21 0.08 265)" },
  { border: "oklch(0.55 0.22 290 / 0.25)", hover: "oklch(0.55 0.22 290 / 0.5)", accent: "oklch(0.55 0.22 290 / 0.6)", bg: "oklch(0.21 0.09 290)" },
  { border: "oklch(0.6 0.15 200 / 0.25)", hover: "oklch(0.6 0.15 200 / 0.5)", accent: "oklch(0.6 0.15 200 / 0.6)", bg: "oklch(0.21 0.06 200)" },
];
