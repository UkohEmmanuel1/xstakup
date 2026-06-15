import type { Metadata } from "next";
import { CareersPage } from "@/components/pages";

export const metadata: Metadata = {
  title: "Software Engineering Careers | Join XStakUp",
  description:
    "Join XStakUp and build Africa's premier engineering team. Open positions in backend development, AI engineering, Web3 development, and DevSecOps. Engineer for scale with us.",
  openGraph: {
    title: "Software Engineering Careers | XStakUp",
    description:
      "Join Africa's premier enterprise software engineering team. Open roles in backend, AI, Web3, and DevSecOps.",
  },
};

export default function Page() {
  return <CareersPage />;
}
