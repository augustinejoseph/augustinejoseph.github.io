import Link from "next/link";
import { CARD, hatch, MONO, TAG_CHIP } from "@/components/portfolio/styles";
import { Img } from "@/components/portfolio/img";
import { PortfolioProject } from "@/data/portfolio";

interface ProjectCardProps {
  project: PortfolioProject;
  /** "compact" = home grid card, "wide" = projects-list row. */
  variant?: "compact" | "wide";
}

export function ProjectCard({ project, variant = "compact" }: ProjectCardProps) {
  return variant === "compact" ? (
    <CompactCard project={project} />
  ) : (
    <WideCard project={project} />
  );
}

function DomainBadge({ domain }: { domain: string }) {
  return (
    <span
      style={{
        ...MONO,
        fontSize: 12,
        color: "var(--accent-2)",
        background: "var(--bg)",
        padding: "4px 9px",
        borderRadius: 6,
        border: "1px solid var(--border)",
      }}
    >
      {domain}
    </span>
  );
}

function TagRow({ tags }: { tags: string[] }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
      {tags.map((tag) => (
        <span key={tag} style={TAG_CHIP}>
          {tag}
        </span>
      ))}
    </div>
  );
}

/**
 * Project media: the real thumbnail when one exists, otherwise the hatched
 * placeholder with a domain badge. `extra` styles size the media per variant.
 */
function ProjectMedia({
  project,
  extra,
}: {
  project: PortfolioProject;
  extra: React.CSSProperties;
}) {
  if (project.thumbnail) {
    return (
      <Img
        src={project.thumbnail}
        alt={`${project.name} preview`}
        loading="lazy"
        style={{ ...extra, width: "100%", objectFit: "cover", display: "block" }}
      />
    );
  }
  return (
    <div
      style={{
        ...hatch(10),
        width: "100%",
        ...extra,
        display: "flex",
        alignItems: "flex-end",
        padding: 16,
        boxSizing: "border-box",
      }}
    >
      <DomainBadge domain={project.domain} />
    </div>
  );
}

function CompactCard({ project }: { project: PortfolioProject }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="hover-lift"
      style={{
        ...CARD,
        display: "block",
        textAlign: "left",
        borderRadius: 16,
        overflow: "hidden",
      }}
    >
      <ProjectMedia
        project={project}
        extra={{ height: 160, borderBottom: "1px solid var(--border)" }}
      />
      <div style={{ padding: "20px 22px 24px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            gap: 12,
          }}
        >
          <h3 style={{ fontSize: 19, fontWeight: 700, margin: 0, letterSpacing: "-0.01em" }}>
            {project.name}
          </h3>
          <span style={{ ...MONO, fontSize: 12, color: "var(--soft)" }}>{project.year}</span>
        </div>
        <p
          style={{
            color: "var(--soft)",
            fontSize: 14.5,
            lineHeight: 1.55,
            margin: "8px 0 16px",
          }}
        >
          {project.tagline}
        </p>
        <TagRow tags={project.previewTags} />
      </div>
    </Link>
  );
}

function WideCard({ project }: { project: PortfolioProject }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="hover-accent-border project-wide"
      style={{
        ...CARD,
        textAlign: "left",
        display: "grid",
        gridTemplateColumns: "minmax(0,1.4fr) minmax(0,1fr)",
        borderRadius: 18,
        overflow: "hidden",
      }}
    >
      <div className="project-wide-body" style={{ padding: "30px clamp(22px,3vw,38px)" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: 0, letterSpacing: "-0.02em" }}>
            {project.name}
          </h2>
          <span style={{ ...MONO, fontSize: 12, color: "var(--soft)" }}>{project.year}</span>
        </div>
        <div style={{ fontWeight: 600, color: "var(--accent-2)", fontSize: 15, marginTop: 6 }}>
          {project.tagline}
        </div>
        <p
          style={{
            color: "var(--soft)",
            fontSize: 15,
            lineHeight: 1.6,
            margin: "14px 0 18px",
            maxWidth: "52ch",
          }}
        >
          {project.overview}
        </p>
        <TagRow tags={project.previewTags} />
        <div
          style={{
            marginTop: 22,
            ...MONO,
            fontSize: 13,
            color: "var(--accent-2)",
            fontWeight: 500,
          }}
        >
          View case study →
        </div>
      </div>
      <div className="project-wide-media">
        <ProjectMedia project={project} extra={{ minHeight: 200, height: "100%" }} />
      </div>
    </Link>
  );
}
