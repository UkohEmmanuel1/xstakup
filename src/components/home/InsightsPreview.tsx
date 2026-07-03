"use client";

import Link from "next/link";
import { AnimatedSection, SectionLabel } from "@/components/common";
import { blogPosts } from "@/data/blog";

export function InsightsPreview() {
  const latest = blogPosts.slice(0, 3);

  return (
    <AnimatedSection className="py-16 md:py-24 border-b border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <SectionLabel>Insights</SectionLabel>
            <h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-tight">
              Engineering Insights
            </h2>
          </div>
          <Link
            href="/insights"
            className="text-sm font-medium text-blue hover:text-blue/80 transition-colors inline-flex items-center gap-1 shrink-0"
          >
            View all posts &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {latest.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="group rounded-xl border border-border bg-card p-8 md:p-10 hover:shadow-card-hover transition-all"
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.slice(0, 2).map((t) => (
                  <span
                    key={t}
                    className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="text-base font-heading font-bold text-foreground group-hover:text-blue transition-colors mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
              <p className="mt-3 text-xs text-muted-foreground">{post.date}</p>
            </Link>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
