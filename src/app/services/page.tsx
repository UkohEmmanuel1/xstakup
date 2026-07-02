import type { Metadata } from "next";
import { ServicesPageComponent } from "@/components/pages/ServicesPage";

export const metadata: Metadata = {
  title: "Software Development Services | XStakUp",
  description:
    "Product engineering, web development, mobile apps, SaaS, AI, fintech, Web3, and cloud infrastructure services for startups and modern businesses.",
  openGraph: {
    title: "Software Development Services | XStakUp",
    description:
      "From product strategy to deployment — we design, build, and scale production-ready digital products.",
  },
};

export default function Page() {
  return <ServicesPageComponent />;
}
