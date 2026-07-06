export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    title: "Building Resilient Distributed Systems in the African Fintech Landscape",
    excerpt:
      "Lessons from architecting payment infrastructure for high throughput, multi-currency settlement, and variable network reliability.",
    date: "2026-05-12",
    author: "Engineering Team",
    slug: "resilient-distributed-systems-fintech-africa",
    tags: ["Architecture", "Fintech", "Distributed Systems"],
  },
  {
    title: "A Practical Guide to Deploying LLMs in Production",
    excerpt:
      "From model selection to inference optimization, monitoring, and cost management — shipping AI features that work at scale.",
    date: "2026-04-28",
    author: "Engineering Team",
    slug: "practical-guide-llms-production",
    tags: ["AI", "MLOps", "Infrastructure"],
  },
  {
    title: "Smart Contract Security: Common Vulnerabilities and How to Avoid Them",
    excerpt:
      "Overview of frequently exploited smart contract vulnerabilities and auditing patterns that prevent them in production DeFi.",
    date: "2026-04-10",
    author: "Engineering Team",
    slug: "smart-contract-security-vulnerabilities",
    tags: ["Web3", "Security", "Solidity"],
  },
  {
    title: "Designing Data Intensive Applications for Pan African Scale",
    excerpt:
      "Data partitioning, replication, and consistency models for systems serving users across 10+ African countries.",
    date: "2026-03-22",
    author: "Engineering Team",
    slug: "data-intensive-applications-pan-african",
    tags: ["Architecture", "Data", "Backend"],
  },
  {
    title: "The DevSecOps Playbook for Regulated Industries",
    excerpt:
      "Embedding security into every stage of the software delivery lifecycle for fintech, healthtech, and government clients.",
    date: "2026-03-05",
    author: "Engineering Team",
    slug: "devsecops-playbook-regulated-industries",
    tags: ["DevSecOps", "Security", "Compliance"],
  },
  {
    title: "Monorepo Strategies for Growing Engineering Teams",
    excerpt:
      "Why we chose monorepo architecture, how we structure packages, and the tooling that keeps builds fast as the team scales.",
    date: "2026-02-18",
    author: "Engineering Team",
    slug: "monorepo-strategies-growing-teams",
    tags: ["Engineering", "Tooling", "Architecture"],
  },
];
