import type { Metadata } from "next";
import { BlogPage } from "@/components/pages";

export const metadata: Metadata = {
  title: "Engineering Blog — XStakUp",
  description:
    "Architecture deep-dives, post-mortems, and engineering perspectives from XStakUp.",
};

export default function Page() {
  return <BlogPage />;
}
