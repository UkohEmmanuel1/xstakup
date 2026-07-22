import type { Differentiator, ValueItem, Leader, CardColor } from "@/types";
import { cardColor, cardColorAlt } from "@/data";

export const companyStory = {
  founded: "2020",
  headquarters: "Lagos, Nigeria",
  group: "FTRX Group",
  paragraphs: [
    "Founded in 2020 and headquartered in Lagos, Nigeria, XStakUp is a leading software development agency that architects custom enterprise solutions for businesses worldwide. As part of the FTRX Group, we combine deep technical expertise with a commitment to transforming businesses through cutting-edge technology.",
    "Our team of dedicated software engineers, architects, and strategists specializes in web development, mobile applications, AI integration, and Web3 infrastructure. We partner with ambitious businesses to build production-grade systems that scale from MVP to millions of users  delivering measurable outcomes at every stage of growth.",
    "What sets XStakUp apart is our product-first mindset. We don't just write code  we understand your business goals, your users, and your market before we write a single line. From fintech and AI to blockchain and cloud architecture, every solution we deliver is engineered for performance, security, and long-term success.",
    "With a global talent network and offices serving clients across Africa, Europe, and North America, XStakUp provides round-the-clock engineering velocity. Our DevSecOps practices, AI-first approach, and commitment to 99.9% uptime ensure that the systems we build don't just work  they lead markets.",
  ],
};

export const differentiators: Differentiator[] = [
  {
    title: "Client First Architecture",
    description: "Your goals dictate our stack. We build for your scale, not ours.",
  },
  {
    title: "Uncompromising Security",
    description: "Security isn't a feature  it's the foundation of every line we ship.",
  },
  {
    title: "99.9% Engineering Rigor",
    description: "DevSecOps and automated QA for 24/7 stability and performance.",
  },
  {
    title: "Full Stack Delivery",
    description: "From frontend to infrastructure, we own the entire stack.",
  },
  {
    title: "AI First Approach",
    description: "AI integrated into every layer  from code generation to predictive ops.",
  },
  {
    title: "Global Talent Network",
    description: "Distributed team delivering round the clock engineering velocity.",
  },
];

export const values: ValueItem[] = [
  { icon: "✦", title: "Excellence", description: "We don't ship 'good enough.' We ship elite." },
  {
    icon: "◇",
    title: "Transparency",
    description: "Open communication and clear roadmaps every sprint.",
  },
  {
    icon: "⬡",
    title: "Ownership",
    description: "We treat your product like it's our own internal infrastructure.",
  },
  {
    icon: "⟁",
    title: "Innovation",
    description: "Evolving our stack with AI, blockchain, and edge to keep you ahead.",
  },
  {
    icon: "⌘",
    title: "Collaboration",
    description: "We embed with your team as a seamless extension of your engineering org.",
  },
  {
    icon: "▣",
    title: "Impact",
    description: "Every line ships with measurable business outcomes and real user value.",
  },
];

export const leaders: Leader[] = [
  {
    name: "Glory Umukoro",
    role: "Founder & CEO",
    bio: "Vision-led founder driving XStakUp's growth and engineering culture across Africa and global markets.",
  },
  {
    name: "Adaobi Nwosu",
    role: "CTO",
    bio: "Enterprise architect specializing in distributed systems, cloud infrastructure, and fintech.",
  },
  {
    name: "Chidi Okonkwo",
    role: "VP of Engineering",
    bio: "Leads cross-functional squads delivering high-scale platforms for fintech, logistics, and Web3.",
  },
  {
    name: "Tunde Bakare",
    role: "Head of AI & Data",
    bio: "Drives AI/ML strategy and production-grade model deployment across client platforms.",
  },
];

export const leaderGradients = [
  "linear-gradient(135deg, #0094C7, #303030)",
  "linear-gradient(135deg, #0094C7, #303030)",
  "linear-gradient(135deg, #0094C7, #303030)",
  "linear-gradient(135deg, #0094C7, #303030)",
];

export const differentiatorCardColors: CardColor[] = [
  cardColor,
  cardColor,
  cardColor,
  cardColor,
  cardColorAlt,
  cardColor,
];

export const valueCardColors: CardColor[] = [
  cardColor,
  cardColor,
  cardColor,
  cardColor,
  cardColorAlt,
  cardColor,
];

export const leaderCardColors: CardColor[] = [cardColor, cardColor, cardColor, cardColor];
