import Link from "next/link";
import { ReactNode } from "react";
import { EYEBROW, MONO } from "@/components/portfolio/styles";

interface ViewAllLinkProps {
  href: string;
  label?: string;
}

/** "View all →" style link used in home section headings. */
export function ViewAllLink({ href, label = "View all →" }: ViewAllLinkProps) {
  return (
    <Link
      href={href}
      className="hover-accent-text"
      style={{ ...MONO, fontSize: 13, color: "var(--accent-2)", whiteSpace: "nowrap" }}
    >
      {label}
    </Link>
  );
}

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: ReactNode;
}

/** Eyebrow + big title + intro paragraph used atop the Projects and Blog pages. */
export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <>
      <div style={EYEBROW}>{eyebrow}</div>
      <h1
        style={{
          fontSize: "clamp(30px,4.6vw,52px)",
          fontWeight: 800,
          letterSpacing: "-0.025em",
          margin: "16px 0 12px",
        }}
      >
        {title}
      </h1>
      {description && (
        <p
          style={{
            color: "var(--soft)",
            fontSize: 17,
            lineHeight: 1.6,
            maxWidth: "56ch",
            margin: "0 0 40px",
          }}
        >
          {description}
        </p>
      )}
    </>
  );
}
