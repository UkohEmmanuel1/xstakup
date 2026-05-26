import { createFileRoute } from "@tanstack/react-router";
import { ExpertisePage } from "@/components/pages";

export const Route = createFileRoute("/expertise")({
  head: () => ({ meta: [{ title: "Expertise — XStakUp" }, { name: "description", content: "Eight specialized engineering practices: product, Web3, AI, fintech, mobile, DevSecOps and more." }] }),
  component: ExpertisePage,
});
