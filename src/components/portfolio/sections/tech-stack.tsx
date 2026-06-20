import { SectionHeading } from "@/components/portfolio/section-heading";
import { MONO } from "@/components/portfolio/styles";
import { TECH_GROUPS } from "@/data/portfolio";

export function TechStack() {
  return (
    <section style={{ maxWidth: 1120, margin: "0 auto", padding: "48px clamp(20px,7vw,90px)" }}>
      <SectionHeading title="Building with modern tools" rule />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))",
          gap: "30px 36px",
        }}
      >
        {TECH_GROUPS.map((group) => (
          <div key={group.label}>
            <div
              style={{
                ...MONO,
                fontSize: 11.5,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--accent-2)",
                marginBottom: 13,
              }}
            >
              {group.label}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {group.items.map((item) => (
                <span
                  key={item}
                  style={{
                    fontSize: 13.5,
                    fontWeight: 500,
                    color: "var(--text)",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    padding: "6px 12px",
                    borderRadius: 8,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
