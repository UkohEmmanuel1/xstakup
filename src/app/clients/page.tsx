import type { Metadata } from "next";
import { ClientsPage } from "@/components/pages";

export const metadata: Metadata = {
  title: "Client Deployments — High-Performance Systems by XStakUp",
  description:
    "Explore enterprise software, fintech infrastructure, and AI applications engineered by XStakUp: XPay, Quik, Cashflow Africa, and more.",
  openGraph: {
    title: "Client Deployments — XStakUp",
    description: "Market-leading platforms engineered by XStakUp.",
  },
};

export default function Page() {
  return <ClientsPage />;
}
