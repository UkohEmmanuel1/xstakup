import type { Metadata } from "next";
import { ExpertisePage } from "@/components/pages";

export const metadata: Metadata = {
  title: "Software Development Expertise | Web, Mobile, AI, Web3 & More",
  description:
    "Explore XStakUp's eight specialized engineering disciplines: product engineering, Web3 blockchain development, AI machine learning, fintech solutions, mobile app development, DevSecOps, and CTO-as-a-Service.",
  openGraph: {
    title: "Software Development Expertise | XStakUp",
    description:
      "Eight specialized engineering disciplines: product engineering, Web3, AI/ML, fintech, mobile, and DevSecOps.",
  },
};

export default function Page() {
  return <ExpertisePage />;
}
