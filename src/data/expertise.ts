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
  "linear-gradient(135deg, #1E2BFF, #0F1A7A)",
  "linear-gradient(135deg, #7A5CFF, #1E2BFF)",
  "linear-gradient(135deg, #00D1FF, #0F1A7A)",
  "linear-gradient(135deg, #0F1A7A, #1E2BFF)",
  "linear-gradient(135deg, #7A5CFF, #00D1FF)",
  "linear-gradient(135deg, #1E2BFF, #0A0B10)",
];

export const expertiseCaseColors: CardColor[] = [
  { border: "oklch(0.6 0.15 150 / 0.3)", hover: "oklch(0.6 0.15 150 / 0.6)", accent: "oklch(0.6 0.15 150 / 0.7)", bg: "oklch(0.21 0.07 150)" },
  { border: "oklch(0.55 0.22 290 / 0.25)", hover: "oklch(0.55 0.22 290 / 0.5)", accent: "oklch(0.55 0.22 290 / 0.6)", bg: "oklch(0.21 0.09 290)" },
  { border: "oklch(0.62 0.15 210 / 0.25)", hover: "oklch(0.62 0.15 210 / 0.5)", accent: "oklch(0.62 0.15 210 / 0.6)", bg: "oklch(0.21 0.06 210)" },
  { border: "oklch(0.65 0.18 230 / 0.25)", hover: "oklch(0.65 0.18 230 / 0.5)", accent: "oklch(0.65 0.18 230 / 0.6)", bg: "oklch(0.21 0.06 230)" },
  { border: "oklch(0.52 0.28 265 / 0.25)", hover: "oklch(0.52 0.28 265 / 0.5)", accent: "oklch(0.52 0.28 265 / 0.6)", bg: "oklch(0.21 0.08 265)" },
  { border: "oklch(0.65 0.14 95 / 0.3)", hover: "oklch(0.65 0.14 95 / 0.55)", accent: "oklch(0.65 0.14 95 / 0.65)", bg: "oklch(0.23 0.06 95)" },
];
