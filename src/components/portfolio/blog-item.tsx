import { MONO } from "@/components/portfolio/styles";
import { BlogPost } from "@/data/portfolio";

interface BlogItemProps {
  post: BlogPost;
  /** "compact" = home list row, "full" = blog page entry with tag + CTA. */
  variant?: "compact" | "full";
}

export function BlogItem({ post, variant = "compact" }: BlogItemProps) {
  return variant === "compact" ? (
    <CompactItem post={post} />
  ) : (
    <FullItem post={post} />
  );
}

function CompactItem({ post }: { post: BlogPost }) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="hover-fade"
      style={{
        display: "flex",
        gap: 22,
        alignItems: "flex-start",
        padding: "22px 0",
        borderTop: "1px solid var(--border)",
      }}
    >
      <span
        style={{
          ...MONO,
          fontSize: 12.5,
          color: "var(--soft)",
          whiteSpace: "nowrap",
          paddingTop: 3,
          width: 130,
          flexShrink: 0,
        }}
      >
        {post.date}
      </span>
      <div>
        <h3
          style={{
            fontSize: 17.5,
            fontWeight: 600,
            margin: 0,
            lineHeight: 1.35,
            letterSpacing: "-0.01em",
          }}
        >
          {post.title}
        </h3>
        <p
          style={{
            color: "var(--soft)",
            fontSize: 14.5,
            lineHeight: 1.55,
            margin: "8px 0 0",
            maxWidth: "64ch",
          }}
        >
          {post.excerpt}
        </p>
      </div>
    </a>
  );
}

function FullItem({ post }: { post: BlogPost }) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="hover-fade"
      style={{ display: "block", padding: "28px 0", borderTop: "1px solid var(--border)" }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
        <span
          style={{
            ...MONO,
            fontSize: 11.5,
            color: "var(--accent-2)",
            background: "var(--soft-bg)",
            padding: "4px 9px",
            borderRadius: 6,
          }}
        >
          {post.tag}
        </span>
        <span style={{ ...MONO, fontSize: 12.5, color: "var(--soft)" }}>{post.date}</span>
      </div>
      <h2
        style={{
          fontSize: "clamp(20px,2.4vw,26px)",
          fontWeight: 700,
          margin: 0,
          lineHeight: 1.3,
          letterSpacing: "-0.015em",
        }}
      >
        {post.title}
      </h2>
      <p
        style={{
          color: "var(--soft)",
          fontSize: 15.5,
          lineHeight: 1.6,
          margin: "12px 0 0",
          maxWidth: "70ch",
        }}
      >
        {post.excerpt}
      </p>
      <div style={{ marginTop: 14, ...MONO, fontSize: 13, color: "var(--accent-2)" }}>
        Read on Medium →
      </div>
    </a>
  );
}
