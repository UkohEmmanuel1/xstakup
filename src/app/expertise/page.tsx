import type { Metadata } from "next";
import { ExpertisePage } from "@/components/pages";

export const metadata: Metadata = {
  title: "Expertise — XStakUp",
  description:
    "Eight specialized engineering practices: product, Web3, AI, fintech, mobile, DevSecOps and more.",
};

export default function Page() {
  return <ExpertisePage />;
}
