import { MONO } from "@/components/portfolio/styles";
import { Img } from "@/components/portfolio/img";
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
      className="hover-fade blog-compact"
      style={{
        display: "flex",
        gap: 22,
        alignItems: "flex-start",
        padding: "22px 0",
        borderTop: "1px solid var(--border)",
      }}
    >
      <span
        className="blog-compact-date"
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
      {post.thumbnail && (
        <Img
          src={post.thumbnail}
          alt=""
          loading="lazy"
          className="blog-compact-thumb"
          style={{
            width: 96,
            height: 64,
            objectFit: "cover",
            borderRadius: 8,
            flexShrink: 0,
            border: "1px solid var(--border)",
          }}
        />
      )}
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
      className="hover-fade blog-full"
      style={{ display: "flex", gap: 24, padding: "28px 0", borderTop: "1px solid var(--border)" }}
    >
      {post.thumbnail && (
        <Img
          src={post.thumbnail}
          alt=""
          loading="lazy"
          style={{
            width: 180,
            height: 120,
            objectFit: "cover",
            borderRadius: 10,
            flexShrink: 0,
            border: "1px solid var(--border)",
          }}
        />
      )}
      <div style={{ minWidth: 0 }}>
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
      </div>
    </a>
  );
}
