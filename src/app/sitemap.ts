import { MetadataRoute } from "next";
import { siteMetadata } from "@/data/siteMetadata";
import { fetchArticles } from "@/utils";
import { BlogCardProps } from "@/types";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = siteMetadata.siteUrl;

  const allMediumArticles: BlogCardProps[] = await fetchArticles();
  const mediumRoutes = allMediumArticles.map(({ pubDate, link }) => ({
    url: link,
    lastModified: pubDate,
  }));

  const routes = ["", "blog", "projects"].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...mediumRoutes];
}
