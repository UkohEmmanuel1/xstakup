import type { StatsItem, BenefitItem, CommunityEvent, CommunityProject, CardColor } from "@/types";

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
    description: "Monthly gathering of software engineers discussing distributed systems, architecture patterns, and production grade deployments.",
    icon: "◇",
  },
  {
    title: "Web3 Builders Workshop",
    date: "August 5, 2026",
    type: "Workshop",
    description: "Hands on workshop on Solidity smart contract development, Hardhat testing, and deploying to EVM testnets.",
    icon: "⬡",
  },
  {
    title: "AI in Production Talk",
    date: "August 22, 2026",
    type: "Talk",
    description: "Deep dive into deploying ML models at scale, from model registries to real time inference pipelines on Kubernetes.",
    icon: "✦",
  },
  {
    title: "Hackathon: Build for Africa",
    date: "September 10-12, 2026",
    type: "Hackathon",
    description: "48-hour virtual hackathon building open source tools that solve real African infrastructure and logistics challenges.",
    icon: "⟁",
  },
  {
    title: "DevSecOps Roundtable",
    date: "September 28, 2026",
    type: "Meetup",
    description: "Open discussion on security best practices, compliance frameworks, and building immutable cloud infrastructure.",
    icon: "⌘",
  },
  {
    title: "Fireside Chat: Scaling Engineering Teams",
    date: "October 14, 2026",
    type: "Talk",
    description: "Engineering leaders share lessons on hiring, culture, and maintaining velocity while scaling from startup to enterprise.",
    icon: "▣",
  },
];

export const communityBenefits: BenefitItem[] = [
  {
    icon: "◇",
    title: "Network with Peers",
    description: "Connect with fellow engineers, founders, and CTOs across fintech, Web3, AI, and cloud infrastructure.",
  },
  {
    icon: "⬡",
    title: "Hands On Learning",
    description: "Participate in workshops and hackathons that ship real code, not slides. Build portfolio projects with mentorship.",
  },
  {
    icon: "✦",
    title: "Mentorship Program",
    description: "Get paired with senior engineers from XStakUp's team for guided growth, code reviews, and career advice.",
  },
  {
    icon: "⟁",
    title: "Open Source Contributions",
    description: "Contribute to community maintained tools and libraries used by startups and enterprises across Africa.",
  },
  {
    icon: "⌘",
    title: "Career Opportunities",
    description: "Get early access to job openings, freelance gigs, and speaking opportunities at tech conferences.",
  },
  {
    icon: "▣",
    title: "Exclusive Resources",
    description: "Access private repositories, learning paths, architecture guides, and templates used by production engineering teams.",
  },
];

export const communityProjects: CommunityProject[] = [
  {
    name: "AfriStack CLI",
    description: "Open source CLI tool for scaffolding African fintech, logistics, and Web3 projects with pre configured CI/CD, monitoring, and compliance templates.",
    tech: ["Go", "TypeScript", "Docker", "Terraform"],
  },
  {
    name: "Pyng",
    description: "Distributed uptime monitoring platform built by the community for tracking Nigerian and Pan-African service endpoints with real time alerting.",
    tech: ["Rust", "React", "PostgreSQL", "Redis"],
  },
  {
    name: "Docs for Devs",
    description: "Community curated library of technical documentation, architecture decision records, and deployment runbooks for African engineering teams.",
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

export const eventCardColors: CardColor[] = [
  { border: "rgba(0, 148, 199, 0.25)", hover: "rgba(0, 148, 199, 0.5)", accent: "rgba(0, 148, 199, 0.6)", bg: "#303030" },
  { border: "rgba(0, 148, 199, 0.25)", hover: "rgba(0, 148, 199, 0.5)", accent: "rgba(0, 148, 199, 0.6)", bg: "#303030" },
  { border: "rgba(0, 148, 199, 0.25)", hover: "rgba(0, 148, 199, 0.5)", accent: "rgba(0, 148, 199, 0.6)", bg: "#303030" },
  { border: "rgba(0, 148, 199, 0.25)", hover: "rgba(0, 148, 199, 0.5)", accent: "rgba(0, 148, 199, 0.6)", bg: "#303030" },
  { border: "rgba(0, 148, 199, 0.3)", hover: "rgba(0, 148, 199, 0.55)", accent: "rgba(0, 148, 199, 0.65)", bg: "#303030" },
  { border: "rgba(0, 148, 199, 0.25)", hover: "rgba(0, 148, 199, 0.5)", accent: "rgba(0, 148, 199, 0.6)", bg: "#303030" },
];

export const benefitCardColors: CardColor[] = [
  { border: "rgba(0, 148, 199, 0.25)", hover: "rgba(0, 148, 199, 0.5)", accent: "rgba(0, 148, 199, 0.6)", bg: "#303030" },
  { border: "rgba(0, 148, 199, 0.25)", hover: "rgba(0, 148, 199, 0.5)", accent: "rgba(0, 148, 199, 0.6)", bg: "#303030" },
  { border: "rgba(0, 148, 199, 0.25)", hover: "rgba(0, 148, 199, 0.5)", accent: "rgba(0, 148, 199, 0.6)", bg: "#303030" },
  { border: "rgba(0, 148, 199, 0.25)", hover: "rgba(0, 148, 199, 0.5)", accent: "rgba(0, 148, 199, 0.6)", bg: "#303030" },
  { border: "rgba(0, 148, 199, 0.3)", hover: "rgba(0, 148, 199, 0.55)", accent: "rgba(0, 148, 199, 0.65)", bg: "#303030" },
  { border: "rgba(0, 148, 199, 0.25)", hover: "rgba(0, 148, 199, 0.5)", accent: "rgba(0, 148, 199, 0.6)", bg: "#303030" },
];

export const projectCardColors: CardColor[] = [
  { border: "rgba(0, 148, 199, 0.25)", hover: "rgba(0, 148, 199, 0.5)", accent: "rgba(0, 148, 199, 0.6)", bg: "#303030" },
  { border: "rgba(0, 148, 199, 0.25)", hover: "rgba(0, 148, 199, 0.5)", accent: "rgba(0, 148, 199, 0.6)", bg: "#303030" },
  { border: "rgba(0, 148, 199, 0.25)", hover: "rgba(0, 148, 199, 0.5)", accent: "rgba(0, 148, 199, 0.6)", bg: "#303030" },
];

export const testimonialCardColors: CardColor[] = [
  { border: "rgba(0, 148, 199, 0.25)", hover: "rgba(0, 148, 199, 0.5)", accent: "rgba(0, 148, 199, 0.6)", bg: "#303030" },
  { border: "rgba(0, 148, 199, 0.25)", hover: "rgba(0, 148, 199, 0.5)", accent: "rgba(0, 148, 199, 0.6)", bg: "#303030" },
  { border: "rgba(0, 148, 199, 0.25)", hover: "rgba(0, 148, 199, 0.5)", accent: "rgba(0, 148, 199, 0.6)", bg: "#303030" },
  { border: "rgba(0, 148, 199, 0.25)", hover: "rgba(0, 148, 199, 0.5)", accent: "rgba(0, 148, 199, 0.6)", bg: "#303030" },
];
