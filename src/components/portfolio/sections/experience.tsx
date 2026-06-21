import { SectionHeading } from "@/components/portfolio/section-heading";
import { CARD, MONO } from "@/components/portfolio/styles";
import { EXPERIENCES } from "@/data/portfolio";

export function Experience() {
  return (
    <section style={{ maxWidth: 1120, margin: "0 auto", padding: "48px clamp(20px,7vw,90px)" }}>
      <SectionHeading title="Where I've worked" rule />

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {EXPERIENCES.map((exp) => (
          <a
            key={exp.company}
            href={exp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-accent-border"
            style={{
              ...CARD,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 20,
              borderRadius: 14,
              padding: "22px 24px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 10,
                  background: "var(--soft-bg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  ...MONO,
                  fontWeight: 600,
                  color: "var(--accent-2)",
                  fontSize: 18,
                }}
              >
                {exp.initial}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 17 }}>{exp.company}</div>
                <div style={{ color: "var(--soft)", fontSize: 14.5, marginTop: 2 }}>
                  {exp.role}
                </div>
              </div>
            </div>
            <div
              style={{ ...MONO, fontSize: 13, color: "var(--soft)", whiteSpace: "nowrap" }}
            >
              {exp.period}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
