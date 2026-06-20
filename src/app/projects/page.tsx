import { PageHeader } from "@/components/portfolio/page-header";
import { ProjectCard } from "@/components/portfolio/project-card";
import { generatePageMetadata } from "../seo";
import { PROJECTS } from "@/data/portfolio";

export const metadata = generatePageMetadata({
  title: "Projects",
  description:
    "End-to-end products across AI, web, and mobile — from agentic marketing platforms to reading apps for kids.",
});

export default function Projects() {
  return (
    <div
      className="animate-fade-up"
      style={{
        maxWidth: 1120,
        margin: "0 auto",
        padding: "clamp(48px,7vw,84px) clamp(20px,7vw,90px) 70px",
      }}
    >
      <PageHeader
        eyebrow="Selected work"
        title="Projects"
        description="End-to-end products across AI, web, and mobile — from agentic marketing platforms to reading apps for kids."
      />

      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} variant="wide" />
        ))}
      </div>
    </div>
  );
}
