import Link from "next/link";
import { MONO } from "@/components/portfolio/styles";

interface ViewMoreButtonProps {
  href: string;
  label?: string;
}

/** Prominent pill button shown below home-page section grids. */
export function ViewMoreButton({ href, label = "View more" }: ViewMoreButtonProps) {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 36 }}>
      <Link
        href={href}
        className="hover-accent-border"
        style={{
          ...MONO,
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          fontSize: 14,
          fontWeight: 500,
          color: "var(--accent-2)",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          padding: "12px 26px",
          borderRadius: 999,
        }}
      >
        {label} →
      </Link>
    </div>
  );
}
