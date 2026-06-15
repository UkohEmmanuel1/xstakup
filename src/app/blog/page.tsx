import type { Metadata } from "next";
import { BlogPage } from "@/components/pages";

export const metadata: Metadata = {
  title: "Software Engineering Blog | Architecture & Development Insights",
  description:
    "Technical deep-dives, software architecture insights, development best practices, and engineering perspectives from the XStakUp team. Learn about scalable system design, AI, Web3, and more.",
  openGraph: {
    title: "XStakUp Engineering Blog | Architecture & Insights",
    description:
      "Technical deep-dives on software architecture, system design, AI engineering, and Web3 development from the XStakUp team.",
  },
};

export default function Page() {
  return <BlogPage />;
}
