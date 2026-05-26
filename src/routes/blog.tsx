import { createFileRoute } from "@tanstack/react-router";
import { BlogPage } from "@/components/pages";

export const Route = createFileRoute("/blog")({
  head: () => ({ meta: [{ title: "Engineering Blog — XStakUp" }, { name: "description", content: "Architecture deep-dives, post-mortems, and engineering perspectives from XStakUp." }] }),
  component: BlogPage,
});
