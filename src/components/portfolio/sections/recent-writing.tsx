import { BlogItem } from "@/components/portfolio/blog-item";
import { ViewAllLink } from "@/components/portfolio/page-header";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { ViewMoreButton } from "@/components/portfolio/view-more-button";
import { fetchPosts } from "@/data/portfolio";

export async function RecentWriting() {
  const posts = await fetchPosts();
  const featured = posts.slice(0, 3);

  return (
    <section
      style={{ maxWidth: 1120, margin: "0 auto", padding: "48px clamp(20px,7vw,90px) 70px" }}
    >
      <SectionHeading title="Insights from my work" action={<ViewAllLink href="/blog" />} />

      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {featured.map((post) => (
          <BlogItem key={post.url} post={post} variant="compact" />
        ))}
      </div>

      {posts.length > featured.length && <ViewMoreButton href="/blog" label="View all posts" />}
    </section>
  );
}
