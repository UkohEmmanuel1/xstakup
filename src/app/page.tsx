import type { Metadata } from "next";
import { HomePage } from "@/components/pages";

export const metadata: Metadata = {
  title: "Enterprise Software Development Company | Web, Mobile, AI & Web3",
  description:
    "XStakUp is a premier enterprise software development company offering custom web development, mobile app development, AI solutions, and Web3 development services. Your dedicated engineering team for scalable, production-grade systems.",
  openGraph: {
    title: "Enterprise Software Development Company | XStakUp",
    description:
      "Custom enterprise software development for web, mobile, AI, and Web3. Dedicated engineering team building scalable applications for ambitious businesses.",
  },
};

export default function Page() {
  return <HomePage />;
}
