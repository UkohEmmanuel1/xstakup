import type {
  ServiceItem,
  CaseStudyCard,
  CaseStudyFull,
  ProcessStep,
  IndustryItem,
  WhyItem,
  TechCategory,
  UseCase,
  EngagementModel,
  StatsItem,
} from "@/types";

export const capabilities = [
  "Web Apps",
  "Mobile Apps",
  "SaaS Platforms",
  "AI Systems",
  "Fintech Products",
  "Web3 Products",
  "APIs",
  "Cloud Infrastructure",
  "Automation",
];

export const services: ServiceItem[] = [
  {
    id: "product-engineering",
    title: "Product Engineering",
    shortDesc: "From concept to launch — full product development.",
    description: "From MVP to scale, we design, build, and ship production-ready software.",
    icon: "code",
    deliverables: [
      "Product strategy & roadmapping",
      "UI/UX design",
      "Full-stack development",
      "QA & testing",
      "Deployment & monitoring",
    ],
    slug: "/services/product-engineering",
  },
  {
    id: "web-apps",
    title: "Web App Development",
    shortDesc: "High-performance web apps with modern frameworks.",
    description: "Responsive, scalable web apps built with React, Next.js, and modern stacks.",
    icon: "globe",
    deliverables: [
      "Responsive frontend",
      "Server-side rendering",
      "API integration",
      "Dashboard interfaces",
      "Progressive web apps",
    ],
    slug: "/services/web-apps",
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    shortDesc: "Cross-platform iOS and Android apps.",
    description:
      "iOS and Android apps built with React Native and Expo for consistent cross-device experiences.",
    icon: "smartphone",
    deliverables: [
      "Cross-platform apps",
      "Native modules",
      "App store deployment",
      "Push notifications",
      "Offline support",
    ],
    slug: "/services/mobile-apps",
  },
  {
    id: "saas",
    title: "SaaS Development",
    shortDesc: "Multi-tenant SaaS with subscription infrastructure.",
    description:
      "Scalable SaaS platforms with auth, billing, team management, and analytics built in.",
    icon: "cloud",
    deliverables: [
      "Multi-tenant architecture",
      "Subscription billing",
      "User management",
      "Admin dashboards",
      "Usage analytics",
    ],
    slug: "/services/saas",
  },
  {
    id: "ai",
    title: "AI & Automation",
    shortDesc: "LLMs, chatbots, and workflow automation.",
    description:
      "AI integration including LLMs, chatbots, recommendation engines, and intelligent automation.",
    icon: "brain",
    deliverables: [
      "LLM integration",
      "AI chatbots",
      "Workflow automation",
      "Data processing pipelines",
      "Custom AI APIs",
    ],
    slug: "/services/ai",
  },
  {
    id: "fintech",
    title: "Fintech Development",
    shortDesc: "Payment gateways, wallets, and lending systems.",
    description:
      "Secure fintech systems — payment gateways, wallet infrastructure, lending platforms, and transaction engines.",
    icon: "wallet",
    deliverables: [
      "Payment integration",
      "Wallet systems",
      "Transaction ledgers",
      "Compliance tooling",
      "Financial dashboards",
    ],
    slug: "/services/fintech",
  },
  {
    id: "web3",
    title: "Web3 & Blockchain",
    shortDesc: "dApps, smart contracts, and Web3 infrastructure.",
    description:
      "dApps, smart contracts, wallet integrations, and decentralized infra on EVM chains.",
    icon: "hexagon",
    deliverables: [
      "Smart contracts",
      "dApp frontends",
      "WalletConnect integration",
      "Token systems",
      "NFT infrastructure",
    ],
    slug: "/services/web3",
  },
  {
    id: "backend",
    title: "Backend, APIs & Cloud",
    shortDesc: "Backend systems, APIs, and cloud deployment.",
    description:
      "Scalable backend services, REST/GraphQL APIs, database architecture, and cloud infrastructure.",
    icon: "server",
    deliverables: [
      "REST/GraphQL APIs",
      "Database design",
      "Cloud deployment",
      "CI/CD pipelines",
      "Infrastructure monitoring",
    ],
    slug: "/services/backend-api",
  },
];

export const caseStudiesFull: CaseStudyFull[] = [
  {
    id: "xpay",
    title: "XPay",
    industry: "Fintech / Web3",
    platform: "Web App",
    tags: ["Fintech", "Web3", "Payments"],
    summary: "Multi-currency payment infrastructure for crypto, gift cards, and fiat.",
    problem:
      "A high-liquidity payment gateway processing both traditional and digital assets across borders.",
    goal: "Unified payment platform for crypto, gift cards, and fiat with real-time settlement.",
    scope: "User wallets, transaction ledgers, admin dashboard, and multi-currency support.",
    features: [
      "Crypto wallet integration",
      "Gift card processing",
      "Fiat payment rails",
      "Real-time settlement engine",
      "Admin dashboard",
      "Transaction history",
    ],
    techStack: ["React", "Node.js", "TypeScript", "PostgreSQL", "Web3.js", "Paystack", "Stripe"],
    designApproach: "Clean financial interface with clear transaction flows and real-time status.",
    outcome:
      "A production-ready platform processing multiple payment types through one unified interface.",
    slug: "xpay",
  },
  {
    id: "quik",
    title: "QuikAi",
    industry: "AI / Automation",
    platform: "Mobile App",
    tags: ["AI", "NLP", "Automation"],
    summary: "AI booking assistant that syncs availability and automates communication.",
    problem:
      "Traditional scheduling apps require manual entry. Needed an autonomous agent for natural language booking.",
    goal: "AI assistant that handles booking, availability, and communication automatically.",
    scope: "NLP engine, booking system, calendar integration, and automated communication.",
    features: [
      "Natural language processing",
      "Real-time availability sync",
      "Automated booking confirmations",
      "Calendar integration",
      "Customer communication",
      "Admin dashboard",
    ],
    techStack: ["Python", "OpenAI", "React Native", "Node.js", "PostgreSQL", "Redis"],
    designApproach: "Conversational UI blending chat and traditional booking interfaces.",
    outcome: "AI booking assistant that reduces manual coordination and accelerates responses.",
    slug: "quik",
  },
  {
    id: "digidrops",
    title: "Digidrops",
    industry: "Web3 / Social",
    platform: "Web App",
    tags: ["Web3", "SocialFi", "Blockchain"],
    summary: "Web3 SocialFi platform with wallet login and NFT passes.",
    problem:
      "Building a social platform combining Web3 wallet auth with engaging user experiences.",
    goal: "SocialFi platform with wallet login, quest rewards, and NFT passes.",
    scope: "Wallet authentication, quest system, NFT marketplace, and user dashboard.",
    features: [
      "Wallet login (WalletConnect)",
      "NFT pass minting",
      "Quest and reward system",
      "User dashboard",
      "Social feed",
      "Wallet-to-wallet messaging",
    ],
    techStack: ["Next.js", "Solidity", "WalletConnect", "The Graph", "PostgreSQL", "Tailwind CSS"],
    designApproach: "Gaming-inspired UI with animated rewards and clear wallet flows.",
    outcome: "Functional SocialFi platform with wallet-based identity and gamified engagement.",
    slug: "digidrops",
  },
  {
    id: "diction-masters",
    title: "Diction Masters",
    industry: "EdTech",
    platform: "Mobile App",
    tags: ["EdTech", "NLP", "Mobile"],
    summary: "Pronunciation coaching with real-time speech analysis and personalized paths.",
    problem:
      "Language learners needed real-time pronunciation feedback across dialects and accents.",
    goal: "Mobile app with real-time speech analysis and personalized coaching.",
    scope: "Speech recognition, phoneme analysis, learning paths, and admin platform.",
    features: [
      "Real-time speech analysis",
      "Phoneme-level feedback",
      "Personalized learning paths",
      "Progress tracking",
      "Admin dashboard",
      "Multiple accent support",
    ],
    techStack: ["Python", "TensorFlow", "React Native", "WebSocket", "Node.js", "PostgreSQL"],
    designApproach: "Clean interface with visual feedback on pronunciation accuracy.",
    outcome: "EdTech platform delivering instant, accurate pronunciation feedback.",
    slug: "diction-masters",
  },
  {
    id: "bepopula",
    title: "Bepopula",
    industry: "Web / Mobile",
    platform: "Web App",
    tags: ["Web", "Mobile", "Full-Stack"],
    summary: "Full-stack web and mobile platform built for modern digital experiences.",
    problem: "Needed a unified platform delivering consistent experiences across web and mobile.",
    goal: "Modern full-stack platform with responsive web and native mobile apps.",
    scope: "Frontend, backend, mobile app, and cloud infrastructure.",
    features: [
      "Responsive web app",
      "Native mobile apps",
      "Real-time sync",
      "User dashboard",
      "Push notifications",
      "Analytics",
    ],
    techStack: ["Next.js", "React Native", "Node.js", "PostgreSQL", "Tailwind CSS"],
    designApproach: "Clean, consistent UI across web and mobile platforms.",
    outcome: "Unified platform delivering seamless cross-device user experiences.",
    slug: "bepopula",
  },
  {
    id: "shoopa",
    title: "Shoopa",
    industry: "E-Commerce",
    platform: "Web App",
    tags: ["E-Commerce", "Marketplace", "Payments"],
    summary:
      "Scalable e-commerce infrastructure with multi-vendor support and payment orchestration.",
    problem: "Complex multi-vendor marketplace requiring scalable checkout and inventory.",
    goal: "Full e-commerce platform with multi-vendor capabilities.",
    scope: "Vendor onboarding, listings, checkout, payments, and admin.",
    features: [
      "Multi-vendor support",
      "Real-time inventory",
      "Payment orchestration",
      "Order management",
      "Vendor dashboard",
      "Admin panel",
    ],
    techStack: ["Next.js", "Node.js", "Stripe", "PostgreSQL", "Redis"],
    designApproach: "Clean marketplace UI with intuitive vendor and buyer flows.",
    outcome: "Production e-commerce platform supporting multiple vendors and payment methods.",
    slug: "shoopa",
  },
  {
    id: "spc",
    title: "SPC",
    industry: "Enterprise SaaS",
    platform: "Web App",
    tags: ["SaaS", "Enterprise", "Analytics"],
    summary:
      "Enterprise-grade SaaS platform with multi-tenant architecture and advanced analytics.",
    problem: "Needed a secure, scalable SaaS platform with role-based access.",
    goal: "Multi-tenant enterprise platform with granular access controls.",
    scope: "Tenant management, RBAC, analytics, and infrastructure.",
    features: [
      "Multi-tenant architecture",
      "Role-based access control",
      "Advanced analytics",
      "Audit logging",
      "API gateway",
      "Usage billing",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
    designApproach: "Professional enterprise UI with role-aware interfaces.",
    outcome: "Enterprise SaaS platform serving multiple organizations with isolated tenancy.",
    slug: "spc",
  },
  {
    id: "tapn",
    title: "TapN",
    industry: "Fintech",
    platform: "Mobile App",
    tags: ["Fintech", "Mobile", "Payments"],
    summary: "Mobile-first payment solution enabling seamless contactless transactions.",
    problem: "Need for seamless mobile payment experience with contactless support.",
    goal: "Mobile payment app with NFC and real-time processing.",
    scope: "Mobile app, payment processing, security, and compliance.",
    features: [
      "NFC payments",
      "Real-time processing",
      "Transaction history",
      "User wallet",
      "Security compliance",
      "Push notifications",
    ],
    techStack: ["React Native", "Node.js", "PostgreSQL", "WebSocket", "Paystack"],
    designApproach: "Sleek fintech UI focused on speed and security.",
    outcome: "Contactless payment app handling real-time transactions with robust security.",
    slug: "tapn",
  },
  {
    id: "usetiks",
    title: "Usetiks",
    industry: "Web3",
    platform: "Web App",
    tags: ["Web3", "NFT", "Blockchain"],
    summary:
      "NFT ticketing platform with blockchain-verified ownership and secondary market trading.",
    problem: "Ticket fraud and lack of transparent secondary market.",
    goal: "Blockchain-based ticketing with verified ownership and trading.",
    scope: "NFT minting, ticket marketplace, wallet integration, and analytics.",
    features: [
      "NFT ticket minting",
      "Wallet authentication",
      "Secondary market",
      "Event management",
      "Royalty system",
      "Analytics dashboard",
    ],
    techStack: ["Next.js", "Solidity", "WalletConnect", "The Graph", "PostgreSQL"],
    designApproach: "Modern Web3 UI with clear wallet interactions and marketplace flows.",
    outcome: "NFT ticketing platform reducing fraud and enabling transparent secondary trading.",
    slug: "usetiks",
  },
];

export const caseStudies: CaseStudyCard[] = [
  {
    title: "XPay",
    industry: "Fintech / Web3",
    tags: ["Fintech", "Web3", "Payments"],
    summary: "Multi-currency payment infrastructure for crypto, gift cards, and fiat.",
    platform: "Web App",
    slug: "/work/xpay",
  },
  {
    title: "QuikAi",
    industry: "AI / Automation",
    tags: ["AI", "NLP", "Automation"],
    summary: "AI booking assistant that syncs availability and automates communication.",
    platform: "Mobile App",
    slug: "/work/quik",
  },
  {
    title: "Digidrops",
    industry: "Web3 / Social",
    tags: ["Web3", "SocialFi", "Blockchain"],
    summary: "Web3 SocialFi platform with wallet login and NFT passes.",
    platform: "Web App",
    slug: "/work/digidrops",
  },
  {
    title: "Diction Masters",
    industry: "EdTech",
    tags: ["EdTech", "NLP", "Mobile"],
    summary: "Pronunciation coaching with real-time speech analysis and personalized paths.",
    platform: "Mobile App",
    slug: "/work/diction-masters",
  },
  {
    title: "Bepopula",
    industry: "Web / Mobile",
    tags: ["Web", "Mobile", "Full-Stack"],
    summary: "Full-stack web and mobile platform built for modern digital experiences.",
    platform: "Web App",
    slug: "/work/bepopula",
  },
  {
    title: "Shoopa",
    industry: "E-Commerce",
    tags: ["E-Commerce", "Marketplace", "Payments"],
    summary: "Scalable e-commerce infrastructure with multi-vendor support.",
    platform: "Web App",
    slug: "/work/shoopa",
  },
  {
    title: "SPC",
    industry: "Enterprise SaaS",
    tags: ["SaaS", "Enterprise", "Analytics"],
    summary: "Enterprise SaaS platform with multi-tenant architecture and analytics.",
    platform: "Web App",
    slug: "/work/spc",
  },
  {
    title: "TapN",
    industry: "Fintech",
    tags: ["Fintech", "Mobile", "Payments"],
    summary: "Mobile-first contactless payment solution.",
    platform: "Mobile App",
    slug: "/work/tapn",
  },
  {
    title: "Usetiks",
    industry: "Web3",
    tags: ["Web3", "NFT", "Blockchain"],
    summary: "NFT ticketing platform with blockchain-verified ownership.",
    platform: "Web App",
    slug: "/work/usetiks",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "Understand your product idea, goals, and technical requirements.",
    details: "Stakeholder interviews, user research, and technical discovery to align on vision.",
  },
  {
    number: "02",
    title: "Define",
    description: "Shape scope, roadmap, architecture, and development plan.",
    details:
      "Product roadmap, technical architecture, and feature prioritization for the first build cycle.",
  },
  {
    number: "03",
    title: "Design",
    description: "User flows, wireframes, UI screens, and system architecture.",
    details:
      "High-fidelity mockups, interactive prototypes, and system diagrams for stakeholder approval.",
  },
  {
    number: "04",
    title: "Build",
    description: "Frontend, backend, APIs, database, and infrastructure.",
    details: "Code shipped in sprint cycles with CI, code reviews, and automated testing.",
  },
  {
    number: "05",
    title: "Test",
    description: "Performance, security, responsiveness, and edge cases.",
    details:
      "QA cycles with load testing, security audits, cross-browser, and user acceptance testing.",
  },
  {
    number: "06",
    title: "Launch & Support",
    description: "Deploy, monitor, and support post-launch.",
    details: "Production deployment, monitoring, alerting, and ongoing maintenance and iteration.",
  },
];

export const industries: IndustryItem[] = [
  {
    title: "Fintech",
    description:
      "Payment platforms, wallet infrastructure, lending systems, and financial dashboards.",
    icon: "building-bank",
  },
  {
    title: "SaaS",
    description:
      "Multi-tenant platforms, subscription management, admin portals, and usage analytics.",
    icon: "cloud",
  },
  {
    title: "AI & Automation",
    description:
      "Intelligent chatbots, workflow automation, data pipelines, and predictive systems.",
    icon: "sparkles",
  },
  {
    title: "Web3",
    description: "dApps, smart contracts, wallet integrations, token systems, and NFT platforms.",
    icon: "hexagon",
  },
  {
    title: "EdTech",
    description:
      "Learning management systems, assessment platforms, and interactive educational tools.",
    icon: "book-open",
  },
  {
    title: "Marketplaces",
    description:
      "Multi-vendor platforms, booking systems, listing engines, and payment orchestration.",
    icon: "shopping-cart",
  },
  {
    title: "Logistics",
    description:
      "Fleet management, tracking systems, route optimization, and supply chain dashboards.",
    icon: "truck",
  },
  {
    title: "Creator & Media",
    description: "Content platforms, streaming infrastructure, and creator monetization tools.",
    icon: "camera",
  },
  {
    title: "Business Operations",
    description: "Internal dashboards, CRM systems, inventory management, and HR platforms.",
    icon: "briefcase",
  },
  {
    title: "E-commerce",
    description: "Online stores, payment integration, inventory systems, and customer portals.",
    icon: "store",
  },
];

export const whyItems: WhyItem[] = [
  {
    title: "Product partners, not just developers",
    description: "We care about your business outcomes, not just shipping tickets.",
  },
  {
    title: "We build scalable architecture from the start",
    description: "No shortcuts. We design systems that grow with your user base.",
  },
  {
    title: "Deep understanding of African and global markets",
    description: "We build for the unique constraints and opportunities of emerging markets.",
  },
  {
    title: "End-to-end delivery, zero handoff friction",
    description: "Strategy, design, development, and deployment from one team.",
  },
  {
    title: "Speed without sacrificing structure",
    description: "Speed and quality are not a trade-off. We deliver both.",
  },
  {
    title: "Clear guidance for non-technical founders",
    description: "Clear communication, technical context, and honest guidance.",
  },
];

export const techCategories: TechCategory[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vite", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "TypeScript", "Python"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "Supabase", "MongoDB"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Vercel", "Railway", "DigitalOcean", "AWS", "Docker", "CI/CD"],
  },
  {
    category: "AI",
    items: ["OpenAI", "LangChain", "Dialogflow", "Custom AI APIs"],
  },
  {
    category: "Payments",
    items: ["Paystack", "Stripe", "Crypto Payment Rails"],
  },
  {
    category: "Web3",
    items: ["Solidity", "EVM Chains", "WalletConnect", "The Graph", "Moralis"],
  },
];

export const useCases: UseCase[] = [
  {
    title: "MVP for a startup idea",
    problem: "Validated concept but no technical team to build the first version.",
    solution: "Functional MVP in 6-12 weeks with core features, user flows, and deployment.",
    output: "A working product for beta users and investor demos.",
  },
  {
    title: "Internal admin dashboard",
    problem: "Team needs a centralized system to manage operations and data.",
    solution:
      "Custom dashboard with role-based access, data visualization, and existing tool integration.",
    output: "An operations hub that reduces manual work and improves decision-making.",
  },
  {
    title: "Payment platform",
    problem: "Need to accept, process, and settle payments across multiple methods and currencies.",
    solution:
      "Payment infrastructure with wallet systems, transaction ledgers, and compliance tooling.",
    output: "Secure platform handling fiat, crypto, and gift card transactions.",
  },
  {
    title: "Booking platform",
    problem: "Customers need to book services, check availability, and manage reservations online.",
    solution:
      "Booking engine with real-time availability, automated confirmations, and calendar sync.",
    output: "A system that reduces manual coordination and improves customer experience.",
  },
  {
    title: "AI chatbot or AI assistant",
    problem: "Need to automate customer support or provide intelligent assistance.",
    solution:
      "LLM-powered chatbots integrated with your knowledge base and trained on your use case.",
    output:
      "AI assistant that handles inquiries, reduces support load, and improves response times.",
  },
  {
    title: "SaaS customer portal",
    problem: "Customers need a self-service portal for accounts, billing, and settings.",
    solution: "Multi-tenant portal with auth, subscription management, and usage analytics.",
    output: "A portal that reduces support tickets and improves user autonomy.",
  },
  {
    title: "Marketplace platform",
    problem: "Need to connect buyers and sellers with listings, payments, and communication.",
    solution:
      "Marketplace with vendor onboarding, listing management, escrow payments, and reviews.",
    output: "A two-sided marketplace handling transactions and building trust.",
  },
  {
    title: "Web3 wallet-based app",
    problem: "Need a dApp with wallet authentication and on-chain interactions.",
    solution:
      "Web3 app with WalletConnect, smart contract integration, and transaction management.",
    output: "A dApp users can access with their crypto wallet.",
  },
  {
    title: "Learning platform",
    problem: "Need to deliver content, track progress, and assess learners online.",
    solution: "LMS with course authoring, assessments, and progress tracking.",
    output: "An educational platform scalable from small cohorts to thousands.",
  },
  {
    title: "Business automation tool",
    problem: "Manual processes slowing down your team and causing errors.",
    solution: "Custom automation pipelines using APIs and event-driven architecture.",
    output: "Automated processes saving hours of manual work each week.",
  },
];

export const engagementModels: EngagementModel[] = [
  {
    title: "MVP Build",
    bestFor: "Founders turning an idea into a working product.",
    includes: [
      "Product strategy & scoping",
      "UI/UX design",
      "Core feature development",
      "Testing & QA",
      "Deployment & launch support",
    ],
  },
  {
    title: "Product Team Extension",
    bestFor: "Companies needing extra engineering capacity.",
    includes: [
      "Dedicated developer(s)",
      "Integration with your team",
      "Daily standups & sprint planning",
      "Code reviews & quality gates",
      "Flexible scaling up or down",
    ],
  },
  {
    title: "Dedicated Product Squad",
    bestFor: "Teams needing full design, frontend, backend, and deployment support.",
    includes: [
      "Full product team",
      "Design, frontend & backend",
      "Infrastructure & DevOps",
      "Product management",
      "Ongoing iteration & support",
    ],
  },
  {
    title: "Technical Strategy Sprint",
    bestFor: "Founders needing architecture and roadmap clarity before building.",
    includes: [
      "Architecture review & planning",
      "Technology stack recommendations",
      "Product roadmap",
      "Risk assessment",
      "Budget & timeline estimation",
    ],
  },
  {
    title: "Maintenance & Scale Support",
    bestFor: "Products needing bug fixes, monitoring, and infrastructure improvement.",
    includes: [
      "Bug fixes & hotfixes",
      "Performance monitoring",
      "Infrastructure management",
      "Feature enhancements",
      "Security updates",
    ],
  },
];

import type { CardColor } from "@/types";

export const cardColor: CardColor = {
  border: "var(--card-border)",
  hover: "var(--card-hover)",
  accent: "var(--card-accent)",
  bg: "var(--card-bg)",
};

export const cardColorAlt: CardColor = {
  border: "rgba(0, 148, 199, 0.3)",
  hover: "rgba(0, 148, 199, 0.55)",
  accent: "rgba(0, 148, 199, 0.65)",
  bg: "var(--card-bg)",
};

export const cardColorExpertise: CardColor = {
  border: "rgba(0, 148, 199, 0.3)",
  hover: "rgba(0, 148, 199, 0.6)",
  accent: "rgba(0, 148, 199, 0.7)",
  bg: "var(--card-bg)",
};

export const stats: StatsItem[] = [
  { value: "4+", label: "Years Building" },
  { value: "20+", label: "Products Delivered" },
  { value: "8+", label: "Tech Capabilities" },
  { value: "99%", label: "Project Success Rate" },
];

export { socialLinks } from "./social";
export type { SocialLink } from "./social";
