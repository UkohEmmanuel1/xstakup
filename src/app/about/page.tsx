import type { Metadata } from "next";
import { AboutPage } from "@/components/pages";

export const metadata: Metadata = {
  title: "About XStakUp | Enterprise Software Engineering Team",
  description:
    "Learn about XStakUp, a team of dedicated software engineers, architects, and strategists building enterprise technical infrastructure. Part of the FTRX Group, specializing in fintech, AI, Web3, and scalable cloud architecture.",
  openGraph: {
    title: "About XStakUp | Enterprise Software Engineering Team",
    description:
      "Dedicated engineering partners building market-leading enterprise software. Specializing in fintech, AI, and scalable cloud architecture.",
  },
};

export default function Page() {
  return <AboutPage />;
}
