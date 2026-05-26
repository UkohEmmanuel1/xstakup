import { createFileRoute } from "@tanstack/react-router";
import { ClientsPage } from "@/components/pages";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Client Deployments — High-Performance Systems by XStakUp" },
      { name: "description", content: "Explore enterprise software, fintech infrastructure, and AI applications engineered by XStakUp: XPay, Quik, Cashflow Africa, and more." },
      { property: "og:title", content: "Client Deployments — XStakUp" },
      { property: "og:description", content: "Market-leading platforms engineered by XStakUp." },
    ],
  }),
  component: ClientsPage,
});
