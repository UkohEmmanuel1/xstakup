import type { Metadata } from "next";
import { ClientsPage } from "@/components/pages";

export const metadata: Metadata = {
  title: "Client Success Stories | Enterprise Software Case Studies",
  description:
    "Explore enterprise software case studies and client success stories engineered by XStakUp. See how we built XPay fintech infrastructure, Quik AI booking engine, Cashflow Africa trade finance platform, and more.",
  openGraph: {
    title: "Client Success Stories | XStakUp Case Studies",
    description:
      "Real enterprise software deployments: XPay fintech, Quik AI, Cashflow Africa trade finance, and more.",
  },
};

export default function Page() {
  return <ClientsPage />;
}
