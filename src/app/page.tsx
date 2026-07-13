import type { Metadata } from "next";
import { HomePage } from "@/components/pages";

export const metadata: Metadata = {
  title: "Leading Software Development Agency | Web, Mobile, AI & Web3",
  description:
    "XStakUp is a leading software development agency offering custom web development, mobile app development, AI solutions, and Web3 services. Transform your business with cutting-edge technology and a dedicated engineering team.",
  openGraph: {
    title: "Leading Software Development Agency | XStakUp",
    description:
      "Leading software development for web, mobile, AI, and Web3. Transform your business with cutting-edge technology and a dedicated engineering team building scalable applications.",
  },
};

export default function Page() {
  return <HomePage />;
}
