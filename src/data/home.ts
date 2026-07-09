import type { PipelineStep, ExpertiseItem, CaseStudy, StatsItem } from "@/types";
import { cardColor } from "@/data";

export const pipeline: PipelineStep[] = [
  {
    number: "01",
    title: "Software Strategy & Planning",
    description:
      "Technical roadmapping and requirements analysis aligned with your business goals.",
  },
  {
    number: "02",
    title: "Architecture & UX Design",
    description: "Scalable architecture with user-centered UI/UX for your audience and growth.",
  },
  {
    number: "03",
    title: "Full Stack Development",
    description: "Full-stack development across web, mobile, and Web3 using modern frameworks.",
  },
  {
    number: "04",
    title: "DevSecOps & Deployment",
    description: "Secure CI/CD, cloud infrastructure, monitoring, and 99.9% uptime maintenance.",
  },
];

export const expertise: ExpertiseItem[] = [
  {
    title: "Product Engineering",
    description: "End-to-end software development from concept to launch.",
    icon: "◇",
  },
  {
    title: "Web3 & Blockchain",
    description: "Smart contract development, dApps, and decentralized infrastructure.",
    icon: "⬡",
  },
  {
    title: "Web & SaaS Development",
    description: "High-performance web apps and scalable SaaS platforms.",
    icon: "▤",
  },
  {
    title: "Mobile Development",
    description: "Native iOS and Android apps with cross-platform expertise.",
    icon: "▢",
  },
  {
    title: "AI & Machine Learning",
    description: "Custom AI, NLP solutions, and intelligent automation.",
    icon: "✦",
  },
  {
    title: "Fintech Solutions",
    description: "Payment gateways, financial architecture, and secure transaction systems.",
    icon: "₿",
  },
  {
    title: "CTO as a Service",
    description: "On-demand technical leadership and architecture guidance.",
    icon: "◈",
  },
  {
    title: "DevSecOps",
    description: "Secure cloud deployments, CI/CD pipelines, and infrastructure management.",
    icon: "⟁",
  },
];

export const cases: CaseStudy[] = [
  {
    title: "XPay",
    tag: "Fintech / Web3",
    description: "Crypto, gift card, and fiat payment infrastructure with real-time settlement.",
    image: "/assets/xpay.jpeg",
  },
  {
    title: "Quik",
    tag: "AI / NLP",
    description: "AI-powered booking app that syncs availability and automates communication.",
    image: "/assets/quikai.jpeg",
  },
  {
    title: "Bepopula",
    tag: "Web / Mobile",
    description: "Full-stack web and mobile platform built for modern digital experiences.",
    image: "/assets/bepopula.jpeg",
  },
  {
    title: "Shoopa",
    tag: "E-Commerce",
    description: "Scalable e-commerce infrastructure with multi-vendor support and payment orchestration.",
    image: "/assets/shoopa.jpeg",
  },
  {
    title: "SPC",
    tag: "Enterprise SaaS",
    description: "Enterprise-grade SaaS platform with multi-tenant architecture and advanced analytics.",
    image: "/assets/spc.jpeg",
  },
  {
    title: "TapN",
    tag: "Fintech / Mobile",
    description: "Mobile-first payment solution enabling seamless contactless transactions.",
    image: "/assets/tapn.jpeg",
  },
  {
    title: "Usetiks",
    tag: "Web3 / NFT",
    description: "NFT ticketing platform with blockchain-verified ownership and secondary market trading.",
    image: "/assets/usetiks.jpeg",
  },
];

export const caseGradients = [
  "linear-gradient(135deg, #0094C7, #303030)",
  "linear-gradient(135deg, #0094C7, #303030)",
  "linear-gradient(135deg, #0094C7, #303030)",
  "linear-gradient(135deg, #0094C7, #303030)",
  "linear-gradient(135deg, #0094C7, #303030)",
  "linear-gradient(135deg, #0094C7, #303030)",
  "linear-gradient(135deg, #0094C7, #303030)",
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

export const pipelineCardColors = Array(4).fill(cardColor);
export const expertiseCardColors = Array(8).fill(cardColor);
export const deploymentCardColors = Array(7).fill(cardColor);
export const tweetCardColors = Array(4).fill(cardColor);

export const stats: StatsItem[] = [
  { value: "99.99%", label: "Average Uptime" },
  { value: "5M+", label: "Transactions" },
  { value: "10+", label: "Enterprise Builds" },
  { value: "0", label: "Security Breaches" },
];
