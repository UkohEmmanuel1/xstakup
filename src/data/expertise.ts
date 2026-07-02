import type { StatsItem, CaseStudy, CardColor } from "@/types";

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
      "Real time fleet tracking and logistics orchestration platform with IoT sensor integration and predictive maintenance.",
  },
  {
    title: "MediChain",
    tag: "Healthcare / Web3",
    description:
      "Decentralized patient record system with HIPAA-compliant storage, smart contract consent management, and cross facility interoperability.",
  },
  {
    title: "AgriWise",
    tag: "AgriTech / AI",
    description:
      "AI powered precision agriculture platform delivering crop yield predictions, supply chain optimization, and satellite imagery analysis.",
  },
];

export const expertiseCaseGradients = [
  "linear-gradient(135deg, #05ff9b, #003d1a)",
  "linear-gradient(135deg, #00cc7a, #002610)",
  "linear-gradient(135deg, #05ff9b, #001a0e)",
  "linear-gradient(135deg, #00cc7a, #001a0e)",
  "linear-gradient(135deg, #00cc7a, #003d1a)",
  "linear-gradient(135deg, #05ff9b, #000d05)",
];

export const expertiseCaseColors: CardColor[] = [
  { border: "oklch(0.6 0.1 170 / 0.3)", hover: "oklch(0.6 0.1 170 / 0.6)", accent: "oklch(0.6 0.1 170 / 0.7)", bg: "oklch(0.12 0.03 160)" },
  { border: "oklch(0.65 0.15 150 / 0.25)", hover: "oklch(0.65 0.15 150 / 0.5)", accent: "oklch(0.65 0.15 150 / 0.6)", bg: "oklch(0.12 0.05 150)" },
  { border: "oklch(0.7 0.15 160 / 0.25)", hover: "oklch(0.7 0.15 160 / 0.5)", accent: "oklch(0.7 0.15 160 / 0.6)", bg: "oklch(0.12 0.04 160)" },
  { border: "oklch(0.65 0.12 160 / 0.25)", hover: "oklch(0.65 0.12 160 / 0.5)", accent: "oklch(0.65 0.12 160 / 0.6)", bg: "oklch(0.12 0.04 160)" },
  { border: "oklch(0.75 0.25 160 / 0.25)", hover: "oklch(0.75 0.25 160 / 0.5)", accent: "oklch(0.75 0.25 160 / 0.6)", bg: "oklch(0.14 0.06 160)" },
  { border: "oklch(0.7 0.12 120 / 0.3)", hover: "oklch(0.7 0.12 120 / 0.55)", accent: "oklch(0.7 0.12 120 / 0.65)", bg: "oklch(0.14 0.04 130)" },
];
