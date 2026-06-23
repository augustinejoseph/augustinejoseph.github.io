import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { EYEBROW, hatch, MONO } from "@/components/portfolio/styles";
import { Img } from "@/components/portfolio/img";
import { getProject, PROJECTS } from "@/data/portfolio";

interface Params {
  params: { id: string };
}

export default function ProjectDetail({ params }: Params) {
  const project = getProject(params.id);

  if (!project) {
    notFound();
  }

  return (
    <div
      className="animate-fade-up"
      style={{
        maxWidth: 840,
        margin: "0 auto",
        padding: "clamp(36px,5vw,60px) clamp(20px,7vw,90px) 70px",
      }}
    >
      <Link
        href="/projects"
        className="hover-accent-text"
        style={{
          ...MONO,
          fontSize: 13,
          color: "var(--soft)",
          display: "inline-block",
          marginBottom: 30,
        }}
      >
        ← All projects
      </Link>

      <div style={{ ...EYEBROW, fontSize: 12.5, letterSpacing: "0.1em" }}>
        {project.year} · Case study
      </div>
      <h1
        style={{
          fontSize: "clamp(30px,4.6vw,50px)",
          fontWeight: 800,
          letterSpacing: "-0.025em",
          margin: "14px 0 8px",
        }}
      >
        {project.name}
      </h1>
      <div style={{ fontSize: 19, fontWeight: 600, color: "var(--accent-2)" }}>
        {project.tagline}
      </div>

      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover-accent-bg"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            marginTop: 22,
            background: "var(--accent)",
            color: "#fff",
            fontWeight: 600,
            fontSize: 14.5,
            padding: "11px 20px",
            borderRadius: 999,
          }}
        >
          {project.urlLabel ?? "Visit live site"} ↗
        </a>
      ) : null}

      {project.thumbnail ? (
        <Img
          src={project.thumbnail}
          alt={`${project.name} preview`}
          style={{
            width: "100%",
            height: "auto",
            margin: "38px 0",
            borderRadius: 18,
            border: "1px solid var(--border)",
            display: "block",
          }}
        />
      ) : (
        <div
          style={{
            ...hatch(13),
            height: 230,
            margin: "38px 0",
            borderRadius: 18,
            border: "1px solid var(--border)",
            display: "flex",
            alignItems: "flex-end",
            padding: 20,
          }}
        >
          <span
            style={{
              ...MONO,
              fontSize: 13,
              color: "var(--accent-2)",
              background: "var(--bg)",
              padding: "6px 12px",
              borderRadius: 7,
              border: "1px solid var(--border)",
            }}
          >
            {project.domain}
          </span>
        </div>
      )}

      <DetailHeading>Overview</DetailHeading>
      <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--text)", margin: "0 0 40px" }}>
        {project.overview}
      </p>

      <DetailHeading>What I worked on</DetailHeading>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: "0 0 40px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        {project.contributions.map((item) => (
          <li
            key={item}
            style={{
              display: "flex",
              gap: 13,
              fontSize: 16.5,
              lineHeight: 1.6,
              color: "var(--text)",
            }}
          >
            <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: 1 }}>◆</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <DetailHeading>Tech stack</DetailHeading>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "var(--text)",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              padding: "7px 13px",
              borderRadius: 8,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {project.businessImpact ? (
        <>
          <DetailHeading style={{ marginTop: 48 }}>Impact</DetailHeading>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--text)", margin: "0 0 40px" }}>
            {project.businessImpact}
          </p>
        </>
      ) : null}

      {project.additionalInfo ? (
        <>
          <DetailHeading style={project.businessImpact ? undefined : { marginTop: 48 }}>
            Additional details
          </DetailHeading>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--text)", margin: "0 0 40px" }}>
            {project.additionalInfo}
          </p>
        </>
      ) : null}

      {project.images.length > 0 ? (
        <>
          <DetailHeading style={{ marginTop: 48 }}>Gallery</DetailHeading>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: project.isPortraitImages
                ? "repeat(auto-fill, minmax(180px, 1fr))"
                : "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {project.images.map((src) => (
              <Img
                key={src}
                src={src}
                alt={`${project.name} screenshot`}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 14,
                  border: "1px solid var(--border)",
                  display: "block",
                }}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

/** Small monospace uppercase section label used in the case study. */
function DetailHeading({
  children,
  style,
}: {
  children: string;
  style?: React.CSSProperties;
}) {
  return (
    <h2
      style={{
        ...MONO,
        fontSize: 14,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "var(--accent-2)",
        margin: "0 0 16px",
        ...style,
      }}
    >
      {children}
    </h2>
  );
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ id: project.id }));
}

export function generateMetadata({ params }: Params): Metadata {
  const project = getProject(params.id);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.name,
    description: project.overview,
    keywords: project.tags.join(", "),
    openGraph: {
      title: project.name,
      description: project.overview,
      type: "website",
      url: `/projects/${project.id}`,
    },
    twitter: {
      card: "summary_large_image",
      title: project.name,
      description: project.overview,
    },
  };
}
