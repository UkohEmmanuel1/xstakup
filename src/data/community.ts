import type { StatsItem, BenefitItem, CommunityEvent, CommunityProject } from "@/types";
import { cardColor, cardColorAlt } from "@/data";

export const communityStats: StatsItem[] = [
  { value: "500+", label: "Community Members" },
  { value: "24+", label: "Events Per Year" },
  { value: "8+", label: "Countries Represented" },
  { value: "12+", label: "Partner Organizations" },
];

export const communityEvents: CommunityEvent[] = [
  {
    title: "Lagos Engineering Meetup",
    date: "July 15, 2026",
    type: "Meetup",
    description:
      "Monthly meetup discussing distributed systems, architecture, and production deployments.",
    icon: "◇",
  },
  {
    title: "Web3 Builders Workshop",
    date: "August 5, 2026",
    type: "Workshop",
    description:
      "Hands-on Solidity workshop on smart contracts, Hardhat testing, and EVM deployment.",
    icon: "⬡",
  },
  {
    title: "AI in Production Talk",
    date: "August 22, 2026",
    type: "Talk",
    description:
      "Deep dive on deploying ML models at scale — from registries to real-time inference on Kubernetes.",
    icon: "✦",
  },
  {
    title: "Hackathon: Build for Africa",
    date: "September 10-12, 2026",
    type: "Hackathon",
    description:
      "48-hour virtual hackathon building open-source tools for African infrastructure and logistics.",
    icon: "⟁",
  },
  {
    title: "DevSecOps Roundtable",
    date: "September 28, 2026",
    type: "Meetup",
    description:
      "Open discussion on security best practices, compliance, and immutable cloud infrastructure.",
    icon: "⌘",
  },
  {
    title: "Fireside Chat: Scaling Engineering Teams",
    date: "October 14, 2026",
    type: "Talk",
    description: "Engineering leaders share lessons on hiring, culture, and scaling velocity.",
    icon: "▣",
  },
];

export const communityBenefits: BenefitItem[] = [
  {
    icon: "◇",
    title: "Network with Peers",
    description: "Connect with engineers, founders, and CTOs across fintech, Web3, and AI.",
  },
  {
    icon: "⬡",
    title: "Hands On Learning",
    description:
      "Workshops and hackathons that ship real code, not slides. Build portfolio projects with mentorship.",
  },
  {
    icon: "✦",
    title: "Mentorship Program",
    description: "Paired with senior engineers for guided growth, code reviews, and career advice.",
  },
  {
    icon: "⟁",
    title: "Open Source Contributions",
    description:
      "Contribute to community tools and libraries used by startups and enterprises across Africa.",
  },
  {
    icon: "⌘",
    title: "Career Opportunities",
    description: "Early access to job openings, freelance gigs, and speaking opportunities.",
  },
  {
    icon: "▣",
    title: "Exclusive Resources",
    description:
      "Private repositories, learning paths, architecture guides, and production-grade templates.",
  },
];

export const communityProjects: CommunityProject[] = [
  {
    name: "AfriStack CLI",
    description:
      "Open source CLI tool for scaffolding African fintech, logistics, and Web3 projects with pre configured CI/CD, monitoring, and compliance templates.",
    tech: ["Go", "TypeScript", "Docker", "Terraform"],
  },
  {
    name: "Pyng",
    description:
      "Distributed uptime monitoring platform built by the community for tracking Nigerian and Pan-African service endpoints with real time alerting.",
    tech: ["Rust", "React", "PostgreSQL", "Redis"],
  },
  {
    name: "Docs for Devs",
    description:
      "Community curated library of technical documentation, architecture decision records, and deployment runbooks for African engineering teams.",
    tech: ["Next.js", "MDX", "Tailwind", "OpenAPI"],
  },
];

export const communityTestimonials = [
  {
    name: "Chioma Eze",
    handle: "@chiomacodes",
    role: "Backend Engineer, PayStack",
    text: "XStakUp's community meetups completely changed how I think about distributed systems. The architecture deep-dives alone are worth joining. I've grown faster here than in any formal program.",
  },
  {
    name: "Samuel Adeyemi",
    handle: "@samadeyemi",
    role: "Founder, Railly",
    text: "I met my founding engineer at a XStakUp hackathon. We built the MVP together over 48 hours. Two years later, we're processing B2B payments across four African countries.",
  },
  {
    name: "Fatima Bello",
    handle: "@fatimaml",
    role: "ML Engineer, Andela",
    text: "The AI in Production talk series gave me a practical deployment framework I still use. This community isn't about theory; it's about shipping production grade systems.",
  },
  {
    name: "Emeka Okafor",
    handle: "@emekadev",
    role: "DevSecOps Lead, Flutterwave",
    text: "I've spoken at meetups around the world. XStakUp's engineering community has some of the most technically rigorous conversations I've experienced. The bar is genuinely high.",
  },
];

export const eventCardColors = [
  cardColor,
  cardColor,
  cardColor,
  cardColor,
  cardColorAlt,
  cardColor,
];

export const benefitCardColors = [
  cardColor,
  cardColor,
  cardColor,
  cardColor,
  cardColorAlt,
  cardColor,
];

export const projectCardColors = [cardColor, cardColor, cardColor];

export const testimonialCardColors = [cardColor, cardColor, cardColor, cardColor];
