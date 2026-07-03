import type { JobPosting, FAQItem, BenefitItem, CardColor } from "@/types";

export const jobOpenings: JobPosting[] = [
  {
    id: "be-01",
    title: "Senior Backend Engineer",
    department: "Backend",
    location: "Lagos, Nigeria (Remote)",
    type: "Full time",
    description:
      "Design and build high-performance distributed systems for enterprise fintech and logistics platforms.",
    requirements: [
      "5+ years in Node.js, Go, or Python",
      "Experience with PostgreSQL, Redis, Kafka",
      "Strong knowledge of microservices architecture",
      "Familiarity with Docker and Kubernetes",
    ],
    applyUrl: "mailto:partnerships@xstakup.com?subject=Senior Backend Engineer Application",
  },
  {
    id: "be-02",
    title: "Backend Engineer (Mid-Level)",
    department: "Backend",
    location: "Lagos, Nigeria (Remote)",
    type: "Full time",
    description:
      "Build and maintain RESTful APIs and event-driven services for high-scale client deployments.",
    requirements: [
      "3+ years experience in Node.js or Go",
      "Proficiency with SQL and NoSQL databases",
      "Understanding of CI/CD pipelines",
      "Experience with cloud platforms (AWS/GCP)",
    ],
    applyUrl: "mailto:partnerships@xstakup.com?subject=Backend Engineer Application",
  },
  {
    id: "ai-01",
    title: "AI/ML Engineer",
    department: "AI",
    location: "Remote (Global)",
    type: "Full time",
    description:
      "Develop production-grade ML models and AI pipelines for predictive analytics, fraud detection, and automation.",
    requirements: [
      "4+ years in ML engineering or data science",
      "Proficiency with PyTorch, TensorFlow, or JAX",
      "Experience deploying models to production",
      "Background in NLP or computer vision preferred",
    ],
    applyUrl: "mailto:partnerships@xstakup.com?subject=AI/ML Engineer Application",
  },
  {
    id: "web3-01",
    title: "Web3 / Blockchain Engineer",
    department: "Web3",
    location: "Remote (Global)",
    type: "Full time",
    description:
      "Architect and deploy smart contracts, dApps, and DeFi protocols on EVM chains.",
    requirements: [
      "3+ years Solidity development experience",
      "Deep knowledge of Ethereum and Layer-2 scaling",
      "Experience with Hardhat, Foundry, or Truffle",
      "Familiarity with Web3.js or ethers.js",
    ],
    applyUrl: "mailto:partnerships@xstakup.com?subject=Web3 Engineer Application",
  },
  {
    id: "devsec-01",
    title: "DevSecOps Engineer",
    department: "DevSecOps",
    location: "Lagos, Nigeria (Remote)",
    type: "Full time",
    description:
      "Own infrastructure security, automated pipelines, and cloud reliability for enterprise clients.",
    requirements: [
      "4+ years in DevOps or Site Reliability Engineering",
      "Expertise in AWS, GCP, or Azure",
      "Strong knowledge of Terraform, Ansible, or Pulumi",
      "Experience with security scanning and compliance frameworks",
    ],
    applyUrl: "mailto:partnerships@xstakup.com?subject=DevSecOps Engineer Application",
  },
  {
    id: "fe-01",
    title: "Frontend Engineer (React)",
    department: "Frontend",
    location: "Lagos, Nigeria (Remote)",
    type: "Full time",
    description:
      "Craft responsive, high-performance UIs for enterprise dashboards and customer-facing platforms.",
    requirements: [
      "3+ years in React, TypeScript, and Next.js",
      "Strong understanding of state management and SSR",
      "Experience with Tailwind CSS and design systems",
      "Familiarity with testing frameworks (Vitest, Playwright)",
    ],
    applyUrl: "mailto:partnerships@xstakup.com?subject=Frontend Engineer Application",
  },
];

export const benefits: BenefitItem[] = [
  {
    icon: "◇",
    title: "Competitive Compensation",
    description:
      "Industry-leading salary with performance bonuses and equity options for full-time team members.",
  },
  {
    icon: "⌘",
    title: "Remote First Culture",
    description:
      "Work from anywhere. Async-first with flexible hours and quarterly team meetups.",
  },
  {
    icon: "⬡",
    title: "Growth & Learning",
    description:
      "Annual learning stipend, conference access, and internal mentorship programs.",
  },
  {
    icon: "⊞",
    title: "Health & Wellness",
    description:
      "Comprehensive health insurance covering you and your dependents, plus wellness support.",
  },
  {
    icon: "▣",
    title: "Latest Tools & Tech",
    description:
      "MacBook Pro, ergonomic setup budget, and access to cutting-edge AI and cloud tooling.",
  },
  {
    icon: "⟁",
    title: "Paid Time Off",
    description:
      "Generous PTO with 4 weeks vacation, public holidays, and parental leave.",
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "What is the hiring process like?",
    answer:
      "Screening call, technical assessment or take-home project, technical interview, and culture fit conversation. Completed within 2–3 weeks.",
  },
  {
    question: "Do you offer remote positions?",
    answer:
      "Yes. We are remote-first. Most roles are fully remote with optional co-working in Lagos. Some roles may require occasional travel.",
  },
  {
    question: "What technologies does the team use?",
    answer:
      "Node.js, Go, Python, React, Next.js, PostgreSQL, Redis, Kafka, Docker, Kubernetes, AWS/GCP, and Solidity. We choose the right tools for each project.",
  },
  {
    question: "Does XStakUp sponsor visas?",
    answer:
      "We sponsor work visas for Nigeria-based roles. Global remote positions hire through our international contractor model.",
  },
  {
    question: "What is the company culture like?",
    answer:
      "We value ownership, transparency, and continuous improvement. We ship elite code while prioritizing work-life balance and psychological safety.",
  },
  {
    question: "Are there internship opportunities?",
    answer:
      "Yes. We run a seasonal internship program. Positions are posted on this page and through our community channels.",
  },
];

export const jobCardColors: CardColor[] = [
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

export const statCardColors: CardColor[] = [
  { border: "rgba(0, 148, 199, 0.25)", hover: "rgba(0, 148, 199, 0.5)", accent: "rgba(0, 148, 199, 0.6)", bg: "#303030" },
  { border: "rgba(0, 148, 199, 0.25)", hover: "rgba(0, 148, 199, 0.5)", accent: "rgba(0, 148, 199, 0.6)", bg: "#303030" },
  { border: "rgba(0, 148, 199, 0.25)", hover: "rgba(0, 148, 199, 0.5)", accent: "rgba(0, 148, 199, 0.6)", bg: "#303030" },
  { border: "rgba(0, 148, 199, 0.25)", hover: "rgba(0, 148, 199, 0.5)", accent: "rgba(0, 148, 199, 0.6)", bg: "#303030" },
];

export const faqCardColors: CardColor[] = [
  { border: "rgba(0, 148, 199, 0.25)", hover: "rgba(0, 148, 199, 0.5)", accent: "rgba(0, 148, 199, 0.6)", bg: "#303030" },
  { border: "rgba(0, 148, 199, 0.25)", hover: "rgba(0, 148, 199, 0.5)", accent: "rgba(0, 148, 199, 0.6)", bg: "#303030" },
  { border: "rgba(0, 148, 199, 0.25)", hover: "rgba(0, 148, 199, 0.5)", accent: "rgba(0, 148, 199, 0.6)", bg: "#303030" },
  { border: "rgba(0, 148, 199, 0.25)", hover: "rgba(0, 148, 199, 0.5)", accent: "rgba(0, 148, 199, 0.6)", bg: "#303030" },
  { border: "rgba(0, 148, 199, 0.3)", hover: "rgba(0, 148, 199, 0.55)", accent: "rgba(0, 148, 199, 0.65)", bg: "#303030" },
  { border: "rgba(0, 148, 199, 0.25)", hover: "rgba(0, 148, 199, 0.5)", accent: "rgba(0, 148, 199, 0.6)", bg: "#303030" },
];
