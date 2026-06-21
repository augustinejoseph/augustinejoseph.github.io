import { BlogItem } from "@/components/portfolio/blog-item";
import { PageHeader } from "@/components/portfolio/page-header";
import { generatePageMetadata } from "../seo";
import { fetchPosts, MEDIUM_URL } from "@/data/portfolio";

export const metadata = generatePageMetadata({
  title: "Blog",
  description:
    "Notes on engineering — performance benchmarks, deployment gotchas, and lessons from building real products.",
});

export default async function Blog() {
  const posts = await fetchPosts();

  return (
    <div
      className="animate-fade-up"
      style={{
        maxWidth: 920,
        margin: "0 auto",
        padding: "clamp(48px,7vw,84px) clamp(20px,7vw,90px) 70px",
      }}
    >
      <PageHeader
        eyebrow="Writing"
        title="Blog"
        description={
          <>
            Notes on engineering — performance benchmarks, deployment gotchas, and lessons from
            building real products. Published on{" "}
            <a
              href={MEDIUM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline-accent"
              style={{ color: "var(--accent-2)" }}
            >
              Medium
            </a>
            .
          </>
        }
      />

      <div style={{ display: "flex", flexDirection: "column" }}>
        {posts.map((post) => (
          <BlogItem key={post.url} post={post} variant="full" />
        ))}
      </div>
    </div>
  );
}
