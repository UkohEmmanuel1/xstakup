import type { Metadata } from "next";
import { AboutPage } from "@/components/pages";

export const metadata: Metadata = {
  title: "About XStakUp | Leading Software Development Agency",
  description:
    "Learn about XStakUp, a leading software development agency building custom enterprise solutions. Founded 2020 in Lagos, Nigeria, we specialize in web, mobile, AI, and Web3 infrastructure for global businesses. Part of the FTRX Group.",
  openGraph: {
    title: "About XStakUp | Leading Software Development Agency",
    description:
      "A leading software development agency transforming businesses with cutting-edge web, mobile, AI, and Web3 solutions. Your dedicated engineering partner for scalable, production-grade systems.",
  },
};

export default function Page() {
  return <AboutPage />;
}
