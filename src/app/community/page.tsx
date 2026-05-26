import type { Metadata } from "next";
import { CommunityPage } from "@/components/pages";

export const metadata: Metadata = {
  title: "Community — XStakUp",
  description: "Join the XStakUp engineering community across Africa.",
};

export default function Page() {
  return <CommunityPage />;
}
