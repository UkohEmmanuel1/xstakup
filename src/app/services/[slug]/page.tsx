import type { Metadata } from "next";
import { ServiceDetailPageComponent } from "@/components/pages/ServiceDetailPage";
import { services } from "@/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | XStakUp Services`,
    description: service.shortDesc,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <ServiceDetailPageComponent serviceId={slug} />;
}
