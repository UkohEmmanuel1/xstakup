"use client";

import { motion } from "framer-motion";
import { FinalCTA, AnimatedSection } from "@/components/common";
import { blogPosts } from "@/data/blog";

const blogCardColors = [
  { border: "oklch(0.65 0.18 230 / 0.25)", hover: "oklch(0.65 0.18 230 / 0.5)", accent: "oklch(0.65 0.18 230 / 0.6)", bg: "oklch(0.21 0.06 230)" },
  { border: "oklch(0.52 0.28 265 / 0.25)", hover: "oklch(0.52 0.28 265 / 0.5)", accent: "oklch(0.52 0.28 265 / 0.6)", bg: "oklch(0.21 0.08 265)" },
  { border: "oklch(0.55 0.22 290 / 0.25)", hover: "oklch(0.55 0.22 290 / 0.5)", accent: "oklch(0.55 0.22 290 / 0.6)", bg: "oklch(0.21 0.09 290)" },
  { border: "oklch(0.6 0.15 200 / 0.25)", hover: "oklch(0.6 0.15 200 / 0.5)", accent: "oklch(0.6 0.15 200 / 0.6)", bg: "oklch(0.21 0.06 200)" },
  { border: "oklch(0.65 0.14 95 / 0.3)", hover: "oklch(0.65 0.14 95 / 0.55)", accent: "oklch(0.65 0.14 95 / 0.65)", bg: "oklch(0.23 0.06 95)" },
  { border: "oklch(0.6 0.15 150 / 0.25)", hover: "oklch(0.6 0.15 150 / 0.5)", accent: "oklch(0.6 0.15 150 / 0.6)", bg: "oklch(0.21 0.06 150)" },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function BlogPostCard({ post, index }: { post: typeof blogPosts[number]; index: number }) {
  const c = blogCardColors[index % blogCardColors.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex flex-col h-full rounded-2xl p-6 shadow-sm transition-all duration-300"
      style={{ border: `1px solid ${c.border}`, background: c.bg }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = c.hover; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = c.border; }}
    >
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs uppercase tracking-wider px-2.5 py-1 rounded-full"
            style={{ border: `1px solid ${c.accent}`, color: c.accent }}
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-lg font-bold text-white leading-snug">{post.title}</h3>
      <p className="mt-3 text-sm text-white/80 leading-relaxed flex-1">{post.excerpt}</p>
      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
        <span>{formatDate(post.date)}</span>
        <span>{post.author}</span>
      </div>
    </motion.article>
  );
}

export function BlogPage() {
  return (
    <main
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat max-lg:bg-scroll bg-fixed"
      style={{ backgroundImage: "url('/assets/background.png')" }}
    >
      <div className="min-h-screen w-full bg-black/80 backdrop-blur-[1px]">
        <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-7xl font-bold tracking-tight"
            >
              <span className="text-gradient-quantum">Software Engineering Insights</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-6 text-lg text-white/70 max-w-2xl mx-auto"
            >
              Technical deep-dives on software architecture, system design, AI engineering, Web3
              development, and best practices from the XStakUp engineering team.
            </motion.p>
          </div>
        </section>

        <AnimatedSection>
          <section className="border-y border-border py-12 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post, i) => (
                  <BlogPostCard key={post.slug} post={post} index={i} />
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        <FinalCTA />
      </div>
    </main>
  );
}
