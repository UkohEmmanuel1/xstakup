export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
  tags: string[];
  featured?: boolean;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Building Scalable Web Applications with React and Node.js",
    excerpt:
      "A comprehensive guide to architecting high-performance web applications using React for the frontend and Node.js for the backend, covering state management, API design, and deployment strategies.",
    date: "2026-06-10",
    author: "Engineering Team",
    slug: "scalable-web-applications-react-nodejs",
    tags: ["Web Development", "React", "Node.js"],
    featured: true,
    category: "development",
  },
  {
    title: "AI Integration in Software Development: Practical Applications",
    excerpt:
      "Discover how AI is transforming software development workflows — from code generation and testing to intelligent automation — and learn practical ways to integrate LLMs into your projects.",
    date: "2026-05-28",
    author: "Engineering Team",
    slug: "ai-integration-software-development",
    tags: ["AI", "Machine Learning", "Development"],
    featured: true,
    category: "ai",
  },
  {
    title: "Microservices Architecture: A Complete Guide",
    excerpt:
      "Dive deep into microservices architecture, exploring benefits, challenges, and implementation strategies for building scalable, maintainable applications in production.",
    date: "2026-05-15",
    author: "Engineering Team",
    slug: "microservices-architecture-complete-guide",
    tags: ["Architecture", "Microservices", "Cloud"],
    featured: true,
    category: "cloud",
  },
  {
    title: "Cybersecurity Best Practices for Modern Applications",
    excerpt:
      "Essential security practices every development team should implement to protect applications and user data — from secure authentication to vulnerability scanning and incident response.",
    date: "2026-04-30",
    author: "Engineering Team",
    slug: "cybersecurity-best-practices",
    tags: ["Security", "Best Practices", "DevSecOps"],
    featured: false,
    category: "security",
  },
  {
    title: "Cloud-Native Development: Best Practices and Tools",
    excerpt:
      "Learn how to build applications designed specifically for cloud environments using containers, Kubernetes, serverless computing, and modern DevOps methodologies.",
    date: "2026-04-18",
    author: "Engineering Team",
    slug: "cloud-native-development-practices",
    tags: ["Cloud Native", "Kubernetes", "DevOps"],
    featured: false,
    category: "cloud",
  },
  {
    title: "The Future of Mobile Development with React Native",
    excerpt:
      "Explore how React Native is reshaping cross-platform mobile development, with practical patterns for performance optimization, native modules, and shared codebases.",
    date: "2026-04-05",
    author: "Engineering Team",
    slug: "future-mobile-development-react-native",
    tags: ["React Native", "Mobile", "Cross-Platform"],
    featured: false,
    category: "mobile",
  },
  {
    title: "Mobile App Performance Optimization Techniques",
    excerpt:
      "Comprehensive guide to optimizing mobile app performance — covering code optimization, memory management, network efficiency, and user experience improvements for iOS and Android.",
    date: "2026-03-20",
    author: "Engineering Team",
    slug: "mobile-app-performance-optimization",
    tags: ["Mobile", "Performance", "Optimization"],
    featured: false,
    category: "mobile",
  },
  {
    title: "The Business Case for Digital Transformation",
    excerpt:
      "Understanding the strategic importance of digital transformation and how to build a compelling business case for technology investments that drive real ROI.",
    date: "2026-03-08",
    author: "Engineering Team",
    slug: "business-case-digital-transformation",
    tags: ["Business", "Strategy", "Digital Transformation"],
    featured: false,
    category: "business",
  },
];
