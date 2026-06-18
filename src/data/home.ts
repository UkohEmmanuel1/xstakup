import type { PipelineStep, ExpertiseItem, CaseStudy, StatsItem } from "@/types";

export const pipeline: PipelineStep[] = [
  {
    number: "01",
    title: "Software Strategy & Planning",
    description:
      "Technical roadmapping and requirement analysis for custom enterprise software aligned with your business objectives.",
  },
  {
    number: "02",
    title: "Architecture & UX Design",
    description:
      "Scalable system architecture design with user-centered UI/UX built for your target audience and growth requirements.",
  },
  {
    number: "03",
    title: "Full-Stack Development",
    description:
      "Custom software development across web, mobile, and Web3 platforms using modern frameworks and best practices.",
  },
  {
    number: "04",
    title: "DevSecOps & Deployment",
    description:
      "Secure CI/CD pipelines, cloud infrastructure, post-launch monitoring, and 99.9% uptime maintenance.",
  },
];

export const expertise: ExpertiseItem[] = [
  {
    title: "Product Engineering",
    description: "End-to-end custom software development from concept to launch.",
    icon: "◇",
  },
  {
    title: "Web3 & Blockchain",
    description: "Smart contract development, dApps, and decentralized infrastructure.",
    icon: "⬡",
  },
  {
    title: "Web & SaaS Development",
    description: "High-performance web applications and scalable SaaS platforms.",
    icon: "▤",
  },
  {
    title: "Mobile Development",
    description: "Native iOS and Android applications with cross-platform expertise.",
    icon: "▢",
  },
  {
    title: "AI & Machine Learning",
    description: "Custom AI integration, NLP solutions, and intelligent automation services.",
    icon: "✦",
  },
  {
    title: "Fintech Solutions",
    description:
      "Payment gateway integration, financial architecture, and secure transaction systems.",
    icon: "₿",
  },
  {
    title: "CTO-as-a-Service",
    description: "On-demand technical leadership and software architecture guidance for your team.",
    icon: "◈",
  },
  {
    title: "DevSecOps",
    description:
      "Secure cloud deployments, automated CI/CD pipelines, and infrastructure management.",
    icon: "⟁",
  },
];

export const cases: CaseStudy[] = [
  {
    title: "XPay",
    tag: "Fintech / Web3",
    description:
      "Crypto, gift card & fiat payment infrastructure with real time multi currency settlement.",
  },
  {
    title: "Quik",
    tag: "AI / NLP",
    description:
      "AI-powered booking application that intelligently syncs availability and automates communication.",
  },
  {
    title: "Cashflow Africa",
    tag: "Trade Finance",
    description:
      "Intra African B2B trade finance platform digitizing invoicing and securing lending.",
  },
];

export const caseGradients = [
  "linear-gradient(135deg, #1E2BFF, #0F1A7A)",
  "linear-gradient(135deg, #7A5CFF, #1E2BFF)",
  "linear-gradient(135deg, #00D1FF, #0F1A7A)",
];

export const marqueeItems = [
  "React",
  "Node.js",
  "Solidity",
  "AWS",
  "Python",
  "Kubernetes",
  "PostgreSQL",
  "Go",
  "TypeScript",
  "OpenAI",
  "PayStack",
  "Stripe",
  "Web3.js",
  "GraphQL",
];



export const pipelineCardColors: CardColor[] = [
  { border: "oklch(0.65 0.18 230 / 0.25)", hover: "oklch(0.65 0.18 230 / 0.5)", accent: "oklch(0.65 0.18 230 / 0.6)", bg: "oklch(0.21 0.06 230)" },
  { border: "oklch(0.52 0.28 265 / 0.25)", hover: "oklch(0.52 0.28 265 / 0.5)", accent: "oklch(0.52 0.28 265 / 0.6)", bg: "oklch(0.21 0.08 265)" },
  { border: "oklch(0.55 0.22 290 / 0.25)", hover: "oklch(0.55 0.22 290 / 0.5)", accent: "oklch(0.55 0.22 290 / 0.6)", bg: "oklch(0.21 0.09 290)" },
  { border: "oklch(0.6 0.15 200 / 0.25)", hover: "oklch(0.6 0.15 200 / 0.5)", accent: "oklch(0.6 0.15 200 / 0.6)", bg: "oklch(0.21 0.06 200)" },
];

export const expertiseCardColors: CardColor[] = [
  { border: "oklch(0.65 0.18 230 / 0.25)", hover: "oklch(0.65 0.18 230 / 0.5)", accent: "oklch(0.65 0.18 230 / 0.6)", bg: "oklch(0.21 0.06 230)" },
  { border: "oklch(0.52 0.28 265 / 0.25)", hover: "oklch(0.52 0.28 265 / 0.5)", accent: "oklch(0.52 0.28 265 / 0.6)", bg: "oklch(0.21 0.08 265)" },
  { border: "oklch(0.55 0.22 290 / 0.25)", hover: "oklch(0.55 0.22 290 / 0.5)", accent: "oklch(0.55 0.22 290 / 0.6)", bg: "oklch(0.21 0.09 290)" },
  { border: "oklch(0.6 0.15 200 / 0.25)", hover: "oklch(0.6 0.15 200 / 0.5)", accent: "oklch(0.6 0.15 200 / 0.6)", bg: "oklch(0.21 0.06 200)" },
  { border: "oklch(0.65 0.14 95 / 0.3)", hover: "oklch(0.65 0.14 95 / 0.55)", accent: "oklch(0.65 0.14 95 / 0.65)", bg: "oklch(0.23 0.06 95)" },
  { border: "oklch(0.6 0.15 150 / 0.25)", hover: "oklch(0.6 0.15 150 / 0.5)", accent: "oklch(0.6 0.15 150 / 0.6)", bg: "oklch(0.21 0.06 150)" },
  { border: "oklch(0.65 0.15 80 / 0.25)", hover: "oklch(0.65 0.15 80 / 0.5)", accent: "oklch(0.65 0.15 80 / 0.6)", bg: "oklch(0.22 0.07 80)" },
  { border: "oklch(0.62 0.15 210 / 0.25)", hover: "oklch(0.62 0.15 210 / 0.5)", accent: "oklch(0.62 0.15 210 / 0.6)", bg: "oklch(0.21 0.06 210)" },
];

export const deploymentCardColors: CardColor[] = [
  { border: "oklch(0.6 0.15 150 / 0.3)", hover: "oklch(0.6 0.15 150 / 0.6)", accent: "oklch(0.6 0.15 150 / 0.7)", bg: "oklch(0.21 0.07 150)" },
  { border: "oklch(0.55 0.22 290 / 0.25)", hover: "oklch(0.55 0.22 290 / 0.5)", accent: "oklch(0.55 0.22 290 / 0.6)", bg: "oklch(0.21 0.09 290)" },
  { border: "oklch(0.62 0.15 210 / 0.25)", hover: "oklch(0.62 0.15 210 / 0.5)", accent: "oklch(0.62 0.15 210 / 0.6)", bg: "oklch(0.21 0.06 210)" },
];

export const tweetCardColors: CardColor[] = [
  { border: "oklch(0.52 0.28 265 / 0.25)", hover: "oklch(0.52 0.28 265 / 0.5)", accent: "oklch(0.52 0.28 265 / 0.6)", bg: "oklch(0.21 0.08 265)" },
  { border: "oklch(0.6 0.15 150 / 0.25)", hover: "oklch(0.6 0.15 150 / 0.5)", accent: "oklch(0.6 0.15 150 / 0.6)", bg: "oklch(0.21 0.06 150)" },
  { border: "oklch(0.55 0.22 290 / 0.25)", hover: "oklch(0.55 0.22 290 / 0.5)", accent: "oklch(0.55 0.22 290 / 0.6)", bg: "oklch(0.21 0.09 290)" },
  { border: "oklch(0.65 0.15 80 / 0.25)", hover: "oklch(0.65 0.15 80 / 0.5)", accent: "oklch(0.65 0.15 80 / 0.6)", bg: "oklch(0.22 0.07 80)" },
];

export const stats: StatsItem[] = [
  { value: "99.99%", label: "Average Uptime" },
  { value: "5M+", label: "Transactions" },
  { value: "10+", label: "Enterprise Builds" },
  { value: "0", label: "Security Breaches" },
];
