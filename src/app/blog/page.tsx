import type { Metadata } from "next";
import { BlogPage } from "@/components/pages";

export const metadata: Metadata = {
  title: "XStakUp Blog | Insights, Tutorials & Industry Trends",
  description:
    "Stay ahead of the curve with expert insights, technical tutorials, and industry trends from the XStakUp engineering team. Learn about web development, AI, mobile, cloud, security, and more.",
  openGraph: {
    title: "XStakUp Blog | Software Development Insights",
    description:
      "Expert insights, technical tutorials, and industry trends from experienced developers and technology leaders covering web, mobile, AI, cloud, and security.",
  },
};

export default function Page() {
  return <BlogPage />;
}
