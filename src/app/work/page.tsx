import type { Metadata } from "next";
import { WorkPageComponent } from "@/components/pages/WorkPage";

export const metadata: Metadata = {
  title: "Our Work | Case Studies | XStakUp",
  description:
    "Explore our portfolio of product engineering projects across fintech, AI, Web3, SaaS, mobile, and more.",
  openGraph: {
    title: "Our Work | XStakUp Case Studies",
    description: "Real products, platforms, and systems we've designed, built, and deployed.",
  },
};

export default function Page() {
  return <WorkPageComponent />;
}
