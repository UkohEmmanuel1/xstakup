import { createFileRoute } from "@tanstack/react-router";
import { CareersPage } from "@/components/pages";

export const Route = createFileRoute("/careers")({
  head: () => ({ meta: [{ title: "Careers — XStakUp" }, { name: "description", content: "Join XStakUp. Engineer for scale." }] }),
  component: CareersPage,
});
