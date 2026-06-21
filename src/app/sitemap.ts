import { MetadataRoute } from "next";
import { siteMetadata } from "@/data/siteMetadata";
import { PROJECTS } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl;
  const today = new Date().toISOString().split("T")[0];

  const staticRoutes = ["", "blog", "projects"].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: today,
  }));

  const projectRoutes = PROJECTS.map((project) => ({
    url: `${siteUrl}/projects/${project.id}`,
    lastModified: today,
  }));

  // Blog posts live on Medium (external URLs), so they're not part of this
  // site's sitemap — only the /blog index route above is.
  return [...staticRoutes, ...projectRoutes];
}
