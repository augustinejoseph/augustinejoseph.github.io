import * as simpleIcons from "simple-icons";
import type { SimpleIcon } from "simple-icons";
import { LOCAL_ICONS } from "@/components/portfolio/local-icons";

/** Resolve a simple-icons slug (e.g. "react") to its exported icon ("siReact"). */
function lookup(slug: string): SimpleIcon | undefined {
  const key = "si" + slug.charAt(0).toUpperCase() + slug.slice(1);
  return (simpleIcons as Record<string, SimpleIcon>)[key];
}

/**
 * Inline glyph for a tech item. Prefers a local fallback path (for brands
 * absent from simple-icons), then the simple-icons set. Renders nothing when
 * the slug is missing or unknown, so such items show a text-only chip.
 */
export function TechIcon({ slug, size = 15 }: { slug?: string; size?: number }) {
  if (!slug) return null;
  const path = LOCAL_ICONS[slug] ?? lookup(slug)?.path;
  if (!path) return null;

  return (
    <svg
      role="img"
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      style={{ flexShrink: 0 }}
    >
      <path d={path} />
    </svg>
  );
}
