import type { Metadata } from "next";
import { AboutPage } from "@/components/pages";

export const metadata: Metadata = {
  title: "About XStakUp — Engineering the Future of Digital Enterprise",
  description:
    "XStakUp is a team of engineers, architects, and strategists building the technical infrastructure that powers market-leading businesses. Part of the FTRX Group.",
  openGraph: {
    title: "About XStakUp — Engineering for Scale",
    description:
    "Dedicated engineering partners specializing in fintech, AI, and scalable cloud architecture.",
  },
};

export default function Page() {
  return <AboutPage />;
}
