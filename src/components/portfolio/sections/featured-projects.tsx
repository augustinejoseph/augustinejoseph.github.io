import { ViewAllLink } from "@/components/portfolio/page-header";
import { ProjectCard } from "@/components/portfolio/project-card";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { ViewMoreButton } from "@/components/portfolio/view-more-button";
import { FEATURED_PROJECTS, PROJECTS } from "@/data/portfolio";

export function FeaturedProjects() {
  return (
    <section style={{ maxWidth: 1120, margin: "0 auto", padding: "48px clamp(20px,7vw,90px)" }}>
      <SectionHeading title="Projects I'm proud of" action={<ViewAllLink href="/projects" />} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: 26,
        }}
      >
        {FEATURED_PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} variant="compact" />
        ))}
      </div>

      {PROJECTS.length > FEATURED_PROJECTS.length && <ViewMoreButton href="/projects" />}
    </section>
  );
}
