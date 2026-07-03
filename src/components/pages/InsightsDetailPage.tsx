"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { AnimatedSection, FinalCTA } from "@/components/common";
import { blogPosts } from "@/data/blog";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

interface Props {
  slug: string;
}

export function InsightsDetailPageComponent({ slug }: Props) {
  const post = blogPosts.find((p) => p.slug === slug);
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const next =
    currentIndex >= 0 && currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  const prev = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-md px-6">
          <h1 className="text-4xl font-heading font-bold text-foreground">Post not found</h1>
          <p className="mt-4 text-muted-foreground">
            This article doesn&apos;t exist or has been removed.
          </p>
          <Link
            href="/insights"
            className="mt-6 inline-flex items-center gap-2 text-blue hover:text-blue/80 transition-colors"
          >
            <ArrowLeft size={16} /> Back to insights
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <PageHero title={post.title} subtitle={`${formatDate(post.date)} · ${post.author}`}>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {post.tags.map((t) => (
            <span key={t} className="text-xs text-white/50 bg-white/5 px-2.5 py-0.5 rounded-full">
              {t}
            </span>
          ))}
        </div>
      </PageHero>

      <AnimatedSection className="py-16 md:py-24 border-b border-border">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-base text-muted-foreground leading-relaxed mb-8">{post.excerpt}</p>
          <div className="prose prose-sm max-w-none text-foreground/80">
            <p className="text-base leading-relaxed">
              This article is being written. Check back soon for the full post.
            </p>
            <p className="text-base leading-relaxed mt-4">
              In the meantime, feel free to{" "}
              <Link href="/contact" className="text-blue hover:underline">
                reach out to us
              </Link>{" "}
              if you&apos;d like to discuss this topic or have questions about your product.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <section className="py-16 md:py-24 border-b border-border">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              {prev && (
                <Link
                  href={`/insights/${prev.slug}`}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-blue transition-colors"
                >
                  <ArrowLeft size={16} /> {prev.title}
                </Link>
              )}
            </div>
            <div>
              {next && (
                <Link
                  href={`/insights/${next.slug}`}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-blue transition-colors"
                >
                  {next.title} <ArrowRight size={16} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
