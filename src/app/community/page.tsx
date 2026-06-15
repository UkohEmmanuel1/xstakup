import type { Metadata } from "next";
import { CommunityPage } from "@/components/pages";

export const metadata: Metadata = {
  title: "Developer Community | Tech Meetups & Open Source",
  description:
    "Join the XStakUp engineering community. Participate in tech meetups, technical talks, and open-source contributions powering Africa's next generation of software builders.",
  openGraph: {
    title: "XStakUp Developer Community | Tech Meetups & Open Source",
    description:
      "Join our engineering community for tech meetups, technical talks, and open-source contributions across Africa.",
  },
};

export default function Page() {
  return <CommunityPage />;
}
