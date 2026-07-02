import type { Metadata } from "next";
import { InsightsDetailPageComponent } from "@/components/pages/InsightsDetailPage";
import { blogPosts } from "@/data/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | XStakUp Insights`,
    description: post.excerpt,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <InsightsDetailPageComponent slug={slug} />;
}
