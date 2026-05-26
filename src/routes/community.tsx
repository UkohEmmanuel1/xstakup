import { createFileRoute } from "@tanstack/react-router";
import { CommunityPage } from "@/components/pages";

export const Route = createFileRoute("/community")({
  head: () => ({ meta: [{ title: "Community — XStakUp" }, { name: "description", content: "Join the XStakUp engineering community across Africa." }] }),
  component: CommunityPage,
});
