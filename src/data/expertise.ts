import type { StatsItem, CaseStudy } from "@/types";
import { cardColor, cardColorAlt, cardColorExpertise } from "@/data";

export const expertiseStats: StatsItem[] = [
  { value: "200+", label: "Projects Shipped" },
  { value: "14+", label: "Tech Stacks" },
  { value: "50+", label: "Engineers" },
  { value: "99.9%", label: "Average Uptime" },
];

export const expertiseCases: CaseStudy[] = [
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
      "AI powered booking application that intelligently syncs availability and automates communication.",
  },
  {
    title: "Cashflow Africa",
    tag: "Trade Finance",
    description:
      "Intra African B2B trade finance platform digitizing invoicing and securing lending.",
  },
  {
    title: "TruRail",
    tag: "Logistics / IoT",
    description:
      "Real-time fleet tracking and logistics orchestration with IoT sensors and predictive maintenance.",
  },
  {
    title: "MediChain",
    tag: "Healthcare / Web3",
    description:
      "Decentralized patient records with HIPAA-compliant storage, smart contract consent, and cross-facility interoperability.",
  },
  {
    title: "AgriWise",
    tag: "AgriTech / AI",
    description:
      "AI-powered precision agriculture with crop yield predictions, supply chain optimization, and satellite imagery.",
  },
  {
    title: "Bepopula",
    tag: "Web / Mobile",
    description:
      "Full-stack web and mobile platform built for modern digital experiences.",
  },
  {
    title: "Shoopa",
    tag: "E-Commerce",
    description:
      "Scalable e-commerce infrastructure with multi-vendor support and payment orchestration.",
  },
  {
    title: "SPC",
    tag: "Enterprise SaaS",
    description:
      "Enterprise-grade SaaS platform with multi-tenant architecture and advanced analytics.",
  },
  {
    title: "TapN",
    tag: "Fintech / Mobile",
    description:
      "Mobile-first payment solution enabling seamless contactless transactions.",
  },
  {
    title: "Usetiks",
    tag: "Web3 / NFT",
    description:
      "NFT ticketing platform with blockchain-verified ownership and secondary market trading.",
  },
];

export const expertiseCaseGradients = [
  "linear-gradient(135deg, #0094C7, #303030)",
  "linear-gradient(135deg, #0094C7, #303030)",
  "linear-gradient(135deg, #0094C7, #303030)",
  "linear-gradient(135deg, #0094C7, #303030)",
  "linear-gradient(135deg, #0094C7, #303030)",
  "linear-gradient(135deg, #0094C7, #303030)",
  "linear-gradient(135deg, #0094C7, #303030)",
  "linear-gradient(135deg, #0094C7, #303030)",
  "linear-gradient(135deg, #0094C7, #303030)",
  "linear-gradient(135deg, #0094C7, #303030)",
  "linear-gradient(135deg, #0094C7, #303030)",
];

export const expertiseCaseColors = [
  cardColorExpertise,
  cardColor,
  cardColor,
  cardColor,
  cardColor,
  cardColorAlt,
  cardColor,
  cardColor,
  cardColor,
  cardColor,
  cardColorAlt,
];
