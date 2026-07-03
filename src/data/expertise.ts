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
  "linear-gradient(135deg, #0094C7, #303030)",
  "linear-gradient(135deg, #0094C7, #303030)",
  "linear-gradient(135deg, #0094C7, #303030)",
  "linear-gradient(135deg, #0094C7, #303030)",
  "linear-gradient(135deg, #0094C7, #303030)",
  "linear-gradient(135deg, #0094C7, #303030)",
];

export const expertiseCaseColors: CardColor[] = [
  { border: "rgba(0, 148, 199, 0.3)", hover: "rgba(0, 148, 199, 0.6)", accent: "rgba(0, 148, 199, 0.7)", bg: "#303030" },
  { border: "rgba(0, 148, 199, 0.25)", hover: "rgba(0, 148, 199, 0.5)", accent: "rgba(0, 148, 199, 0.6)", bg: "#303030" },
  { border: "rgba(0, 148, 199, 0.25)", hover: "rgba(0, 148, 199, 0.5)", accent: "rgba(0, 148, 199, 0.6)", bg: "#303030" },
  { border: "rgba(0, 148, 199, 0.25)", hover: "rgba(0, 148, 199, 0.5)", accent: "rgba(0, 148, 199, 0.6)", bg: "#303030" },
  { border: "rgba(0, 148, 199, 0.25)", hover: "rgba(0, 148, 199, 0.5)", accent: "rgba(0, 148, 199, 0.6)", bg: "#303030" },
  { border: "rgba(0, 148, 199, 0.3)", hover: "rgba(0, 148, 199, 0.55)", accent: "rgba(0, 148, 199, 0.65)", bg: "#303030" },
];
