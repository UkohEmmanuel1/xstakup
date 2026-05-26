import type { Metadata } from "next";
import { CareersPage } from "@/components/pages";

export const metadata: Metadata = {
  title: "Careers — XStakUp",
  description: "Join XStakUp. Engineer for scale.",
};

export default function Page() {
  return <CareersPage />;
}
