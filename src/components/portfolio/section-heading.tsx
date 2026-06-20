import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  /** Optional trailing element, e.g. a "View all →" link. */
  action?: ReactNode;
  /** When true, a thin rule fills the space after the title. */
  rule?: boolean;
}

/** Section heading used on the home page (h2 with optional rule or action). */
export function SectionHeading({ title, action, rule = false }: SectionHeadingProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        justifyContent: action ? "space-between" : undefined,
        gap: 14,
        marginBottom: 28,
      }}
    >
      <h2
        style={{
          fontSize: "clamp(22px,2.6vw,30px)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          margin: 0,
        }}
      >
        {title}
      </h2>
      {rule && <span style={{ flex: 1, height: 1, background: "var(--border)" }} />}
      {action}
    </div>
  );
}
