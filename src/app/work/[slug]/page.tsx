import type { Metadata } from "next";
import { WorkDetailPageComponent } from "@/components/pages/WorkDetailPage";
import { caseStudiesFull } from "@/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudiesFull.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudiesFull.find((c) => c.slug === slug);
  if (!study) return { title: "Case Study Not Found" };
  return {
    title: `${study.title} | Case Study | XStakUp`,
    description: study.summary,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <WorkDetailPageComponent slug={slug} />;
}
