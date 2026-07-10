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
    image: "/assets/xpay.jpeg",
  },
  {
    title: "Quik",
    tag: "AI / NLP",
    description:
      "AI powered booking application that intelligently syncs availability and automates communication.",
    image: "/assets/quikai.jpeg",
  },
  {
    title: "Bepopula",
    tag: "Web / Mobile",
    description:
      "Full-stack web and mobile platform built for modern digital experiences.",
    image: "/assets/bepopula.jpeg",
  },
  {
    title: "Shoopa",
    tag: "E-Commerce",
    description:
      "Scalable e-commerce infrastructure with multi-vendor support and payment orchestration.",
    image: "/assets/shoopa.jpeg",
  },
  {
    title: "SPC",
    tag: "Enterprise SaaS",
    description:
      "Enterprise-grade SaaS platform with multi-tenant architecture and advanced analytics.",
    image: "/assets/spc.jpeg",
  },
  {
    title: "TapN",
    tag: "Fintech / Mobile",
    description:
      "Mobile-first payment solution enabling seamless contactless transactions.",
    image: "/assets/tapn.jpeg",
  },
  {
    title: "Usetiks",
    tag: "Web3 / NFT",
    description:
      "NFT ticketing platform with blockchain-verified ownership and secondary market trading.",
    image: "/assets/usetiks.jpeg",
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
];

export const expertiseCaseColors = [
  cardColorExpertise,
  cardColor,
  cardColor,
  cardColor,
  cardColor,
  cardColor,
  cardColorAlt,
];
