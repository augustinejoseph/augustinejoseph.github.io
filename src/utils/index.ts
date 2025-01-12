import { LINKS } from "@/lib/constants";

export function getDescriptionFromHtml(htmlString: any, wordLimit = 100) {
  const strippedText = htmlString.replace(/<\/?[^>]+(>|$)/g, "");
  const words = strippedText.split(/\s+/).slice(0, wordLimit);
  return words.join(" ") + (words.length === wordLimit ? "..." : "");
}

export async function fetchArticles() {
  try {
    const res = await fetch(LINKS.MEDIUM);
    if (!res.ok) {
      throw new Error("Failed to fetch articles");
    }
    const mediumArticles = await res.json();
    return mediumArticles.items;
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}
