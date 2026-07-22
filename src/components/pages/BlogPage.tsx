"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Clock, User, BookOpen, ArrowRight } from "lucide-react";
import { FinalCTA, AnimatedSection, SubPageHero } from "@/components/common";
import { blogPosts } from "@/data/blog";

const categories = [
  { id: "all", label: "All" },
  { id: "development", label: "Web Development" },
  { id: "mobile", label: "Mobile" },
  { id: "ai", label: "AI & ML" },
  { id: "cloud", label: "Cloud & DevOps" },
  { id: "security", label: "Security" },
  { id: "business", label: "Business" },
] as const;

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function BlogPostCard({
  post,
  index,
  featured,
}: {
  post: (typeof blogPosts)[number];
  index: number;
  featured?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group flex flex-col rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 ${featured ? "md:col-span-2 lg:col-span-2" : ""}`}
    >
      <div className="p-6 md:p-8 flex flex-col h-full">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          {featured && (
            <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-full text-white bg-blue">
              Featured
            </span>
          )}
          {post.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-blue/30 text-blue"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-lg md:text-xl font-bold text-foreground leading-snug group-hover:text-blue transition-colors duration-300">
          {post.title}
        </h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="mt-5 pt-4 border-t border-border/20 flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1">
              <User size={12} />
              {post.author}
            </span>
          </div>
          <span className="text-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredPosts = blogPosts.filter((p) => p.featured);
  const filtered = blogPosts.filter((p) => {
    const matchesCategory = activeCategory === "all" || p.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen w-full">
      <SubPageHero
        title="XStakUp Blog"
        subtitle="Stay ahead of the curve with expert insights, technical tutorials, and industry trends from our team of experienced developers and technology leaders."
        bgImage="/assets/blog.webp"
      />

      {featuredPosts.length > 0 && (
        <AnimatedSection>
          <section className="border-y border-border py-16 md:py-20 bg-[color:var(--void-surface)]">
            <div className="section-divider" />
            <div className="mx-auto max-w-7xl px-6">
              <div className="section-header text-center">
                <h2 className="section-title">
                  Featured <span className="text-gradient-blue">Articles</span>
                </h2>
                <p className="section-subtitle mx-auto">
                  Our most popular and impactful articles covering the latest in software
                  development and technology.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
                {featuredPosts.slice(0, 3).map((post, i) => (
                  <BlogPostCard key={post.slug} post={post} index={i} featured={i === 0} />
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>
      )}

      <AnimatedSection>
        <section className="py-16 md:py-20">
          <div className="section-container">
            <div className="rounded-2xl p-6 mb-12 border border-border bg-card">
              <div className="flex flex-col lg:flex-row gap-4 items-center">
                <div className="flex-1 relative w-full">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-[rgba(255,255,255,0.05)] border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs text-muted-foreground mr-1">Filter:</span>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        activeCategory === cat.id
                          ? "text-white bg-blue-gradient"
                          : "text-muted-foreground hover:text-foreground bg-[rgba(255,255,255,0.05)] border border-border"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="section-header text-center">
              <h2 className="section-title">
                All <span className="text-gradient-blue">Articles</span>
              </h2>
              <p className="section-subtitle mx-auto text-sm">
                {filtered.length} article{filtered.length !== 1 ? "s" : ""} found
              </p>
            </div>

            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {filtered.map((post, i) => (
                  <BlogPostCard key={post.slug} post={post} index={i} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="rounded-2xl p-12 inline-block border border-border bg-card">
                  <Search className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">No articles found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search terms or browse different categories.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </AnimatedSection>

      <section className="py-16 md:py-20 bg-[color:var(--void-surface)]">
        <div className="section-divider" />
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="rounded-3xl p-8 md:p-16 border border-border bg-card">
            <BookOpen className="w-12 h-12 text-blue mx-auto mb-6" />
            <h2 className="section-title mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the latest insights on software development, industry trends, and technology
              innovations delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.05)] border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button className="px-6 py-3 rounded-lg font-semibold text-white bg-blue-gradient transition-all duration-300 hover:opacity-90">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
