import type { Metadata } from "next";
import { HomePage } from "@/components/pages";

export const metadata: Metadata = {
  title: "XStakUp — Custom Enterprise Software Development Partner",
  description:
    "Your dedicated engineering team. XStakUp architects scalable web, mobile, AI, and Web3 applications for ambitious businesses.",
  openGraph: {
    title: "XStakUp — Custom Enterprise Software Development",
    description:
    "Dedicated engineering team building scalable web, mobile, AI, and Web3 infrastructure.",
  },
};

export default function Page() {
  return <HomePage />;
}
