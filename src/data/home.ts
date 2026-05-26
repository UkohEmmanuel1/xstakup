import type { PipelineStep, ExpertiseItem, CaseStudy, StatsItem } from "@/types";

export const pipeline: PipelineStep[] = [
  { n: "01", t: "System Strategy", d: "Clear technical roadmapping for complex software solutions aligned with your business goals." },
  { n: "02", t: "Architecture & UI/UX Design", d: "User-centered, interactive, and scalable system design built for your target audience." },
  { n: "03", t: "Full-Stack Development", d: "Robust, custom coding (web, mobile, and Web3) tailored to your exact specifications." },
  { n: "04", t: "DevSecOps & Support", d: "Secure, scalable deployments, post-launch monitoring, and 99.9% uptime maintenance." },
];

export const expertise: ExpertiseItem[] = [
  { t: "Product Engineering", d: "End-to-end development from your idea to launch.", i: "◇" },
  { t: "Web3 & Blockchain", d: "Smart contracts and decentralized infrastructure.", i: "⬡" },
  { t: "Web & SaaS Development", d: "Custom, high-performance web applications.", i: "▤" },
  { t: "Mobile Development", d: "High-performing iOS & Android applications.", i: "▢" },
  { t: "AI & Machine Learning", d: "Custom AI integrations to make your business smarter.", i: "✦" },
  { t: "Fintech Solutions", d: "Payment gateways and secure financial architecture.", i: "₿" },
  { t: "CTO-as-a-Service", d: "On-demand technical leadership to guide your internal team.", i: "◈" },
  { t: "DevSecOps", d: "Secure, scalable, and worry-free deployments for your peace of mind.", i: "⟁" },
];

export const cases: CaseStudy[] = [
  { t: "XPay", tag: "Fintech / Web3", d: "Crypto, gift card & fiat payment infrastructure with real-time multi-currency settlement." },
  { t: "Quik", tag: "AI / NLP", d: "AI-powered booking application that intelligently syncs availability and automates communication." },
  { t: "Cashflow Africa", tag: "Trade Finance", d: "Intra-African B2B trade finance platform digitizing invoicing and securing lending." },
];

export const caseGradients = [
  "linear-gradient(135deg, #1E2BFF, #0F1A7A)",
  "linear-gradient(135deg, #7A5CFF, #1E2BFF)",
  "linear-gradient(135deg, #00D1FF, #0F1A7A)",
];

export const marqueeItems = [
  "React", "Node.js", "Solidity", "AWS", "Python", "Kubernetes",
  "PostgreSQL", "Go", "TypeScript", "OpenAI", "PayStack", "Stripe",
  "Web3.js", "GraphQL",
];

export const stats: StatsItem[] = [
  { v: "99.99%", l: "Average Uptime" },
  { v: "5M+", l: "Transactions" },
  { v: "10+", l: "Enterprise Builds" },
  { v: "0", l: "Security Breaches" },
];
