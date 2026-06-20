import { CSSProperties } from "react";

/** Monospace label styling used throughout the design (JetBrains Mono). */
export const MONO: CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
};

/** Centered page container shared by every view. */
export const CONTAINER: CSSProperties = {
  maxWidth: 1120,
  margin: "0 auto",
};

/** Theme-aware card chrome (border + shadow driven by --card-bd / --card-sh). */
export const CARD: CSSProperties = {
  background: "var(--surface)",
  border: "var(--card-bd)",
  boxShadow: "var(--card-sh)",
};

/** Eyebrow / kicker label above section and page headings. */
export const EYEBROW: CSSProperties = {
  ...MONO,
  fontSize: 12.5,
  letterSpacing: "0.12em",
  color: "var(--accent-2)",
  textTransform: "uppercase",
};

/** Small monospace tag chip. */
export const TAG_CHIP: CSSProperties = {
  ...MONO,
  fontSize: 11.5,
  color: "var(--soft)",
  background: "var(--soft-bg)",
  padding: "4px 9px",
  borderRadius: 6,
};

/** Diagonal hatch fill used for the placeholder project artwork. */
export function hatch(size = 10): CSSProperties {
  return {
    backgroundImage: `repeating-linear-gradient(135deg, var(--soft-bg) 0, var(--soft-bg) ${size}px, transparent ${size}px, transparent ${size * 2}px)`,
  };
}
