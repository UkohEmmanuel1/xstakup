import type { Metadata } from "next";
import { IndustriesPageComponent } from "@/components/pages/IndustriesPage";

export const metadata: Metadata = {
  title: "Industries | XStakUp",
  description:
    "Technical solutions for fintech, SaaS, AI, Web3, EdTech, marketplaces, logistics, media, and business operations.",
  openGraph: {
    title: "Industries We Serve | XStakUp",
    description: "Engineering support across modern digital industries.",
  },
};

export default function Page() {
  return <IndustriesPageComponent />;
}
