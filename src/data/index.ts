import type {
  ServiceItem,
  CaseStudyCard,
  ProcessStep,
  IndustryItem,
  WhyItem,
  TechCategory,
  UseCase,
  EngagementModel,
  StatItem,
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
    shortDesc: "End-to-end product development from concept to launch.",
    description:
      "We partner with founders and teams to design, build, and ship production-ready software products. From MVP to scale, we handle the full lifecycle.",
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
    shortDesc: "High-performance web applications built with modern frameworks.",
    description:
      "We build responsive, fast, and scalable web applications using React, Next.js, and modern frontend stacks designed for real users.",
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
    shortDesc: "Cross-platform and native mobile applications.",
    description:
      "We develop iOS and Android applications using React Native and Expo, delivering consistent experiences across devices.",
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
    shortDesc: "Scalable SaaS platforms with subscription infrastructure.",
    description:
      "We build multi-tenant SaaS platforms with authentication, billing, team management, and analytics built in from day one.",
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
    shortDesc: "Custom AI integration and intelligent automation.",
    description:
      "We integrate AI capabilities including LLMs, chatbots, recommendation engines, and workflow automation into your products.",
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
    shortDesc: "Payment platforms and financial infrastructure.",
    description:
      "We build secure financial systems including payment gateways, wallet infrastructure, lending platforms, and transaction engines.",
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
    shortDesc: "Decentralized applications and smart contracts.",
    description:
      "We develop dApps, smart contracts, wallet integrations, and decentralized infrastructure on EVM-compatible chains.",
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
    shortDesc: "Robust backend systems and cloud infrastructure.",
    description:
      "We design and deploy scalable backend services, RESTful and GraphQL APIs, database architecture, and cloud infrastructure.",
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

export const caseStudiesFull: CaseStudy[] = [
  {
    id: "xpay",
    title: "XPay",
    industry: "Fintech / Web3",
    platform: "Web App",
    tags: ["Fintech", "Web3", "Payments"],
    summary:
      "Multi-currency payment infrastructure supporting crypto, gift cards, and fiat with real-time settlement.",
    problem:
      "Building a high-liquidity payment gateway capable of processing traditional and digital assets seamlessly across borders.",
    goal: "Create a unified payment platform that handles crypto, gift cards, and fiat transactions with real-time settlement.",
    scope:
      "Full payment infrastructure including user wallets, transaction ledgers, admin dashboard, and multi-currency support.",
    features: [
      "Crypto wallet integration",
      "Gift card processing",
      "Fiat payment rails",
      "Real-time settlement engine",
      "Admin dashboard",
      "Transaction history",
    ],
    techStack: ["React", "Node.js", "TypeScript", "PostgreSQL", "Web3.js", "Paystack", "Stripe"],
    designApproach:
      "Clean, trustworthy financial interface with clear transaction flows and real-time status updates.",
    outcome:
      "A production-ready payment platform that processes multiple payment types through a single unified interface.",
    slug: "xpay",
  },
  {
    id: "quik",
    title: "QuikAi",
    industry: "AI / Automation",
    platform: "Mobile App",
    tags: ["AI", "NLP", "Automation"],
    summary:
      "AI-powered booking assistant that intelligently syncs availability and automates customer communication.",
    problem:
      "Traditional scheduling apps require manual data entry. The market needed an autonomous agent for natural language booking.",
    goal: "Build an AI assistant that handles booking requests, checks availability, and manages communication automatically.",
    scope:
      "NLP engine, booking system, calendar integration, and automated customer communication.",
    features: [
      "Natural language processing",
      "Real-time availability sync",
      "Automated booking confirmations",
      "Calendar integration",
      "Customer communication",
      "Admin dashboard",
    ],
    techStack: ["Python", "OpenAI", "React Native", "Node.js", "PostgreSQL", "Redis"],
    designApproach:
      "Conversational UI with smooth transitions between chat and traditional booking interfaces.",
    outcome:
      "An AI booking assistant that reduces manual coordination and improves customer response times.",
    slug: "quik",
  },
  {
    id: "digidrops",
    title: "Digidrops",
    industry: "Web3 / Social",
    platform: "Web App",
    tags: ["Web3", "SocialFi", "Blockchain"],
    summary: "Web3 SocialFi platform with wallet login, NFT passes, quests, and user dashboard.",
    problem:
      "Building a social platform that combines Web3 wallet authentication with engaging user experiences.",
    goal: "Create a SocialFi platform where users connect via wallets, earn through quests, and collect NFT passes.",
    scope: "Wallet authentication, quest system, NFT pass marketplace, and user dashboard.",
    features: [
      "Wallet login (WalletConnect)",
      "NFT pass minting",
      "Quest and reward system",
      "User dashboard",
      "Social feed",
      "Wallet-to-wallet messaging",
    ],
    techStack: ["Next.js", "Solidity", "WalletConnect", "The Graph", "PostgreSQL", "Tailwind CSS"],
    designApproach:
      "Gaming-inspired UI with dark theme, animated rewards, and clear wallet interaction flows.",
    outcome:
      "A fully functional SocialFi platform with wallet-based identity and gamified user engagement.",
    slug: "digidrops",
  },
  {
    id: "diction-masters",
    title: "Diction Masters",
    industry: "EdTech",
    platform: "Mobile App",
    tags: ["EdTech", "NLP", "Mobile"],
    summary:
      "Intelligent pronunciation coaching platform with real-time speech analysis and personalized learning paths.",
    problem:
      "Language learners needed real-time feedback on pronunciation across different dialects and accents.",
    goal: "Build a mobile app that provides real-time speech analysis and personalized pronunciation coaching.",
    scope:
      "Speech recognition, phoneme analysis, personalized learning paths, and admin management platform.",
    features: [
      "Real-time speech analysis",
      "Phoneme-level feedback",
      "Personalized learning paths",
      "Progress tracking",
      "Admin dashboard",
      "Multiple accent support",
    ],
    techStack: ["Python", "TensorFlow", "React Native", "WebSocket", "Node.js", "PostgreSQL"],
    designApproach: "Clean, encouraging interface with visual feedback on pronunciation accuracy.",
    outcome:
      "An EdTech platform that provides instant, accurate pronunciation feedback to language learners.",
    slug: "diction-masters",
  },
];

export const caseStudies: CaseStudyCard[] = [
  {
    title: "XPay",
    industry: "Fintech / Web3",
    tags: ["Fintech", "Web3", "Payments"],
    summary:
      "Multi-currency payment infrastructure supporting crypto, gift cards, and fiat with real-time settlement.",
    platform: "Web App",
    slug: "/work/xpay",
  },
  {
    title: "QuikAi",
    industry: "AI / Automation",
    tags: ["AI", "NLP", "Automation"],
    summary:
      "AI-powered booking assistant that intelligently syncs availability and automates customer communication.",
    platform: "Mobile App",
    slug: "/work/quik",
  },
  {
    title: "Digidrops",
    industry: "Web3 / Social",
    tags: ["Web3", "SocialFi", "Blockchain"],
    summary: "Web3 SocialFi platform with wallet login, NFT passes, quests, and user dashboard.",
    platform: "Web App",
    slug: "/work/digidrops",
  },
  {
    title: "Diction Masters",
    industry: "EdTech",
    tags: ["EdTech", "NLP", "Mobile"],
    summary:
      "Intelligent pronunciation coaching platform with real-time speech analysis and personalized learning paths.",
    platform: "Mobile App",
    slug: "/work/diction-masters",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "Understand your product idea, business goal, users, and technical requirements.",
    details:
      "We conduct stakeholder interviews, user research, and technical discovery to align on vision and constraints.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "Shape the product scope, roadmap, architecture, feature list, and development plan.",
    details:
      "We create a product roadmap, define technical architecture, and prioritize features for the first build cycle.",
  },
  {
    number: "03",
    title: "Design",
    description: "Create user flows, wireframes, UI screens, and system architecture.",
    details:
      "Our design team produces high-fidelity mockups, interactive prototypes, and system diagrams for approval.",
  },
  {
    number: "04",
    title: "Build",
    description: "Develop the frontend, backend, APIs, integrations, database, and infrastructure.",
    details:
      "We ship code in sprint cycles with continuous integration, code reviews, and automated testing.",
  },
  {
    number: "05",
    title: "Test",
    description: "Test performance, security, responsiveness, user flows, and edge cases.",
    details:
      "We run QA cycles including load testing, security audits, cross-browser testing, and user acceptance testing.",
  },
  {
    number: "06",
    title: "Launch & Support",
    description: "Deploy, monitor, improve, and support the product after launch.",
    details:
      "We handle production deployment, set up monitoring and alerting, and provide ongoing maintenance and iteration support.",
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
    title: "We think like product partners, not just developers",
    description: "We care about your business outcomes, not just shipping tickets.",
  },
  {
    title: "We build scalable architecture from the start",
    description: "No shortcuts. We design systems that grow with your user base.",
  },
  {
    title: "We understand African and global digital markets",
    description: "We build for the unique constraints and opportunities of emerging markets.",
  },
  {
    title: "We support strategy, design, development, and deployment",
    description: "End-to-end delivery from one team. No handoff friction.",
  },
  {
    title: "We can move fast without ignoring structure",
    description: "Speed and quality are not a trade-off. We deliver both.",
  },
  {
    title: "We help non-technical founders make better product decisions",
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
    problem: "You have a validated concept but no technical team to build the first version.",
    solution:
      "We design and build a functional MVP in 6-12 weeks with core features, user flows, and deployment.",
    output: "A working product ready for beta users and investor demos.",
  },
  {
    title: "Internal admin dashboard",
    problem: "Your team needs a centralized system to manage operations, data, and workflows.",
    solution:
      "We build a custom dashboard with role-based access, data visualization, and integration with your existing tools.",
    output: "A streamlined operations hub that reduces manual work and improves decision-making.",
  },
  {
    title: "Payment platform",
    problem:
      "You need to accept, process, and settle payments across multiple methods and currencies.",
    solution:
      "We build a payment infrastructure with wallet systems, transaction ledgers, and compliance tooling.",
    output: "A secure payment platform that handles fiat, crypto, and gift card transactions.",
  },
  {
    title: "Booking platform",
    problem:
      "Your customers need to book services, check availability, and manage reservations online.",
    solution:
      "We develop a booking engine with real-time availability, automated confirmations, and calendar sync.",
    output: "A booking system that reduces manual coordination and improves customer experience.",
  },
  {
    title: "AI chatbot or AI assistant",
    problem: "You want to automate customer support or provide intelligent assistance to users.",
    solution:
      "We integrate LLM-powered chatbots with your knowledge base and train them on your specific use case.",
    output:
      "An AI assistant that handles inquiries, reduces support load, and improves response times.",
  },
  {
    title: "SaaS customer portal",
    problem:
      "Your customers need a self-service portal to manage their accounts, billing, and settings.",
    solution:
      "We build a multi-tenant portal with authentication, subscription management, and usage analytics.",
    output: "A customer portal that reduces support tickets and improves user autonomy.",
  },
  {
    title: "Marketplace platform",
    problem: "You need to connect buyers and sellers with listings, payments, and communication.",
    solution:
      "We develop a marketplace with vendor onboarding, listing management, escrow payments, and reviews.",
    output: "A two-sided marketplace that handles transactions and builds trust between parties.",
  },
  {
    title: "Web3 wallet-based app",
    problem: "You want to build a dApp with wallet authentication and on-chain interactions.",
    solution:
      "We build a web3 application with WalletConnect, smart contract integration, and transaction management.",
    output: "A decentralized application that users can access with their crypto wallet.",
  },
  {
    title: "Learning platform",
    problem: "You need to deliver educational content, track progress, and assess learners online.",
    solution:
      "We build a learning management system with course authoring, assessments, and progress tracking.",
    output: "An educational platform that scales from small cohorts to thousands of learners.",
  },
  {
    title: "Business automation tool",
    problem: "Repetitive manual processes are slowing down your team and causing errors.",
    solution:
      "We analyze your workflows and build custom automation pipelines using APIs and event-driven architecture.",
    output: "Automated processes that save hours of manual work each week.",
  },
];

export const engagementModels: EngagementModel[] = [
  {
    title: "MVP Build",
    bestFor: "Founders who need to turn an idea into a working product.",
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
    bestFor: "Companies that need extra engineering capacity.",
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
    bestFor: "Teams that need design, frontend, backend, and deployment support.",
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
    bestFor: "Founders who need architecture, planning, and roadmap clarity before building.",
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
    bestFor: "Products that need bug fixes, monitoring, infrastructure, and improvement.",
    includes: [
      "Bug fixes & hotfixes",
      "Performance monitoring",
      "Infrastructure management",
      "Feature enhancements",
      "Security updates",
    ],
  },
];

export const stats: StatItem[] = [
  { value: "4+", label: "Years Building" },
  { value: "20+", label: "Products Delivered" },
  { value: "8+", label: "Tech Capabilities" },
  { value: "99%", label: "Project Success Rate" },
];
