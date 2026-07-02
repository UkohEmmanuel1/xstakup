import type { Metadata } from "next";
import { ProcessPageComponent } from "@/components/pages/ProcessPage";

export const metadata: Metadata = {
  title: "Our Process | XStakUp",
  description:
    "A clear 8-step engineering process from idea to launch. Discovery, planning, design, development, testing, deployment, and support.",
  openGraph: {
    title: "Our Engineering Process | XStakUp",
    description: "From idea to deployment, with structure at every step.",
  },
};

export default function Page() {
  return <ProcessPageComponent />;
}
