import type { Metadata } from "next";
import { InsightsPageComponent } from "@/components/pages/InsightsPage";

export const metadata: Metadata = {
  title: "Insights | XStakUp",
  description:
    "Notes on product engineering, software development, AI, and digital growth from the XStakUp team.",
  openGraph: {
    title: "Insights | XStakUp",
    description: "Notes on product, engineering, AI, and digital growth.",
  },
};

export default function Page() {
  return <InsightsPageComponent />;
}
