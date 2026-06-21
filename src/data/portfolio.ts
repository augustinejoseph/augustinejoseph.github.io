/**
 * Single source of truth for the portfolio content and theming.
 *
 * Ported from the Claude Design import (Portfolio.dc.html). Keeping the
 * content here — rather than scattered across pages — makes the site easy to
 * update and keeps every view (home / projects / project detail / blog) in sync.
 */

import { LINKS } from "@/lib/constants";

export type ThemeName = "clay" | "sage" | "plum" | "ink";
export type CardStyle = "bordered" | "elevated";

/** CSS custom-property map applied to the theme root. */
export type ThemeVars = Record<string, string>;

export const PALETTES: Record<ThemeName, ThemeVars> = {
  clay: {
    "--bg": "#f6f1e9",
    "--surface": "#fffdf9",
    "--text": "#2b2620",
    "--soft": "#7b7264",
    "--border": "#e7dece",
    "--accent": "#bf6347",
    "--accent-2": "#a8513a",
    "--soft-bg": "#efe2d6",
  },
  sage: {
    "--bg": "#f1f3ed",
    "--surface": "#fffefb",
    "--text": "#262a23",
    "--soft": "#6e7468",
    "--border": "#dde1d3",
    "--accent": "#5d7a55",
    "--accent-2": "#4b6645",
    "--soft-bg": "#e2e8da",
  },
  plum: {
    "--bg": "#f5eff1",
    "--surface": "#fffdfd",
    "--text": "#2c2329",
    "--soft": "#796c72",
    "--border": "#e7dade",
    "--accent": "#8a566f",
    "--accent-2": "#73455c",
    "--soft-bg": "#ecdde4",
  },
  ink: {
    "--bg": "#1c1916",
    "--surface": "#262019",
    "--text": "#efe7da",
    "--soft": "#a99d8b",
    "--border": "#39322a",
    "--accent": "#e0915f",
    "--accent-2": "#eaa873",
    "--soft-bg": "#2c2419",
  },
};

export const CARD_VARS: Record<CardStyle, ThemeVars> = {
  bordered: {
    "--card-bd": "1px solid var(--border)",
    "--card-sh": "none",
  },
  elevated: {
    "--card-bd": "1px solid transparent",
    "--card-sh": "0 14px 34px -16px rgba(40,28,16,0.22)",
  },
};

export const DEFAULT_THEME: ThemeName = "clay";
export const DEFAULT_CARD_STYLE: CardStyle = "bordered";

/** Build the inline `style` string for the theme root element. */
export function buildThemeStyle(
  theme: ThemeName = DEFAULT_THEME,
  cardStyle: CardStyle = DEFAULT_CARD_STYLE,
): string {
  const merged = { ...PALETTES[theme], ...CARD_VARS[cardStyle] };
  return Object.entries(merged)
    .map(([key, value]) => `${key}:${value}`)
    .join("; ");
}

/* ------------------------------------------------------------------ */
/* Profile + navigation                                                */
/* ------------------------------------------------------------------ */

export const PROFILE = {
  name: "Augustine Joseph",
  role: "Full-stack + AI engineer — Bangalore, India",
  avatar: "https://augustinejoseph.github.io/_static/me.jpg",
  email: "developer.augustine@gmail.com",
  cv: "https://drive.google.com/uc?export=download&id=1vsD_2FvKdwtqzkwAzABVI4Lkdaki9d4e",
  intro:
    "I'm a full-stack software engineer and AI developer who loves turning complex ideas into products people actually enjoy using. I started with Python and Django, then grew into React, React Native, Node.js, and the cloud — building everything from enterprise platforms to IoT mobile apps. Lately I've been deep in AI, weaving intelligent features into web and mobile products.",
} as const;

export interface SocialLink {
  label: string;
  url: string;
}

export const SOCIALS: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/augustinejoseph" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/augustinjoseph/" },
  { label: "Medium", url: "https://augustinejoseph.medium.com/" },
  { label: "Email", url: "mailto:developer.augustine@gmail.com" },
  { label: "WhatsApp", url: "https://wa.me/+916238083182" },
];

/* ------------------------------------------------------------------ */
/* Tech stack                                                          */
/* ------------------------------------------------------------------ */

export interface TechItem {
  label: string;
  /** simple-icons slug (e.g. "react"), or undefined when no brand icon exists. */
  icon?: string;
}

export interface TechGroup {
  label: string;
  items: TechItem[];
}

export const TECH_GROUPS: TechGroup[] = [
  {
    label: "Languages",
    items: [
      { label: "Python", icon: "python" },
      { label: "JavaScript", icon: "javascript" },
      { label: "TypeScript", icon: "typescript" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { label: "React", icon: "react" },
      { label: "React Native", icon: "react" },
      { label: "Next.js", icon: "nextdotjs" },
      { label: "Expo", icon: "expo" },
      { label: "Redux", icon: "redux" },
      { label: "Tailwind", icon: "tailwindcss" },
      { label: "PWA", icon: "pwa" },
    ],
  },
  {
    label: "Backend & Data",
    items: [
      { label: "Django", icon: "django" },
      { label: "FastAPI", icon: "fastapi" },
      { label: "Node.js", icon: "nodedotjs" },
      { label: "GraphQL", icon: "graphql" },
      { label: "REST API" },
      { label: "WebSocket", icon: "socketdotio" },
      { label: "JWT", icon: "jsonwebtokens" },
      { label: "PostgreSQL", icon: "postgresql" },
      { label: "MongoDB", icon: "mongodb" },
    ],
  },
  {
    label: "Architecture & Integrations",
    items: [
      { label: "Microservice Architecture", icon: "microservices" },
      { label: "SAP", icon: "sap" },
      { label: "Spotify API", icon: "spotify" },
    ],
  },
  {
    label: "Payments & Messaging",
    items: [
      { label: "Stripe", icon: "stripe" },
      { label: "Razorpay", icon: "razorpay" },
      { label: "WhatsApp Business API", icon: "whatsapp" },
      { label: "Twilio", icon: "twilio" },
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      { label: "AWS", icon: "aws" },
      { label: "S3", icon: "s3" },
      { label: "GCP", icon: "googlecloud" },
      { label: "Oracle Cloud", icon: "oracle" },
      { label: "Cloudflare", icon: "cloudflare" },
      { label: "Docker", icon: "docker" },
      { label: "Nginx", icon: "nginx" },
      { label: "Linux", icon: "linux" },
      { label: "Git", icon: "git" },
      { label: "GitHub Actions", icon: "githubactions" },
      { label: "CI/CD", icon: "cicd" },
    ],
  },
  {
    label: "AI",
    items: [
      { label: "Agentic AI", icon: "ai" },
      { label: "AI Integration", icon: "ai" },
      { label: "LLM Apps", icon: "ai" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export interface Experience {
  initial: string;
  company: string;
  role: string;
  period: string;
  url: string;
}

export const EXPERIENCES: Experience[] = [
  {
    initial: "R",
    company: "Reckonsys Tech Labs",
    role: "Software Engineer",
    period: "2023 — Present",
    url: "http://www.reckonsys.com",
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export interface PortfolioProject {
  id: string;
  name: string;
  tagline: string;
  domain: string;
  year: string;
  /** Live site / repo URL, or undefined when no working link exists. */
  url?: string;
  /** Label for the primary link button ("Visit live site" vs "View source"). */
  urlLabel?: string;
  overview: string;
  contributions: string[];
  tags: string[];
  previewTags: string[];
  /** Longer-form impact + context paragraphs from the JSON, when present. */
  businessImpact?: string;
  additionalInfo?: string;
  /** Gallery images under `public/`, in display order. */
  images: string[];
  /** Whether gallery images are portrait-oriented (affects layout). */
  isPortraitImages?: boolean;
  /** Thumbnail under `public/`, or undefined when none exists. */
  thumbnail?: string;
  /** Highlighted on the home page. */
  featured?: boolean;
}

/**
 * `api/projectListV2.json` is the single source of truth for project content
 * (year, links, description, features, tech tags, thumbnail). The records below
 * supply only the presentation bits the JSON doesn't carry — a clean display
 * name + tagline, the card tags, and which projects are featured — keyed by
 * slug. This array's order is also the order projects render in.
 */
import rawProjects from "../../api/projectListV2.json";

interface ProjectPresentation {
  slug: string;
  name: string;
  tagline: string;
  domain?: string;
  url?: string;
  previewTags: string[];
  featured?: boolean;
}

const PRESENTATION: ProjectPresentation[] = [
  {
    slug: "getreplies",
    name: "GetReplies.ai",
    tagline: "AI Autonomous Lifecycle Marketing",
    domain: "getreplies.ai",
    featured: true,
    previewTags: ["FastAPI", "MongoDB", "Agentic AI", "AWS"],
  },
  {
    slug: "tahatok_reading_app",
    name: "Tahatok",
    tagline: "PWA Reading App for Children's Stories",
    domain: "tahatok.com",
    url: "https://tahatok.com",
    featured: true,
    previewTags: ["Django", "PostgreSQL", "AWS", "PWA"],
  },
  {
    slug: "tracktune_music_artist_app",
    name: "TrackTune",
    tagline: "Workflow & Release Tracker for Music Artists",
    domain: "React Native · iOS / Android",
    featured: true,
    previewTags: ["React Native", "AI", "Redux", "iOS / Android"],
  },
  {
    slug: "seafotr-fish-tracability",
    name: "Fish Traceability System",
    tagline: "Sea to Shelf Tracking",
    domain: "Fisheries",
    previewTags: ["Django", "PostgreSQL", "Docker", "AWS"],
  },
  {
    slug: "inaxes_mobile_app",
    name: "Inaxes Dashcam",
    tagline: "Android & iOS App for Car Dashcams",
    domain: "Automotive",
    previewTags: ["React Native", "Redux", "iOS / Android"],
  },
  {
    slug: "globev",
    name: "Ferroglobe Platform",
    tagline: "End-to-End Solution for a Silicon Manufacturer",
    domain: "Specialty Metals",
    previewTags: ["Django", "React", "PostgreSQL", "SAP"],
  },
  {
    slug: "data_lens",
    name: "DataLens",
    tagline: "Article Publishing Platform",
    domain: "datalens.live",
    previewTags: ["React", "Django", "NodeJS", "Microservices"],
  },
  {
    slug: "happy_feets",
    name: "Happy Feets",
    tagline: "eCommerce Site for Footwear",
    domain: "happyfeetz.in",
    previewTags: ["Django", "React", "PostgreSQL", "Razorpay"],
  },
  {
    slug: "movie_finder",
    name: "Movie Finder",
    tagline: "Find Movies and TV Show Details",
    domain: "React · TMDB",
    previewTags: ["React", "Axios", "TMDB"],
  },
];

/**
 * Resolve the primary link for a project, honouring the JSON's expiry flags so
 * dead links never render as a button. An explicit `meta.url` always wins; then
 * a non-expired live link; then a non-expired repo. Returns undefined when no
 * working link exists, so the detail page can hide the button entirely.
 */
function resolveLink(
  meta: ProjectPresentation,
  raw: (typeof rawProjects)[number],
): { url: string; label: string } | undefined {
  if (meta.url) return { url: meta.url, label: "Visit live site" };
  if (raw.liveLink && !raw.liveLinkExpired) {
    return { url: raw.liveLink, label: "Visit live site" };
  }
  if (raw.repo && !raw.repoLinkExpired) {
    return { url: raw.repo, label: "View source" };
  }
  return undefined;
}

export const PROJECTS: PortfolioProject[] = PRESENTATION.flatMap((meta) => {
  const raw = rawProjects.find((p) => p.slug === meta.slug);
  if (!raw) return [];
  const link = resolveLink(meta, raw);
  return [
    {
      id: raw.slug,
      name: meta.name,
      tagline: meta.tagline,
      domain: meta.domain ?? raw.industry,
      year: String(raw.year),
      url: link?.url,
      urlLabel: link?.label,
      overview: raw.description,
      contributions: raw.features,
      tags: raw.tags,
      previewTags: meta.previewTags,
      businessImpact: ("businessImpact" in raw && raw.businessImpact) || undefined,
      additionalInfo: ("additionalInfo" in raw && raw.additionalInfo) || undefined,
      images: raw.images,
      isPortraitImages: raw.isPortraitImages,
      thumbnail: raw.thumbnail || undefined,
      featured: meta.featured,
    },
  ];
});

export const FEATURED_PROJECTS = PROJECTS.filter((project) => project.featured);

export function getProject(id: string): PortfolioProject | undefined {
  return PROJECTS.find((project) => project.id === id);
}

/* ------------------------------------------------------------------ */
/* Blog                                                                */
/* ------------------------------------------------------------------ */

export interface BlogPost {
  date: string;
  tag: string;
  title: string;
  excerpt: string;
  url: string;
  /** Cover image pulled from the Medium RSS feed, if any. */
  thumbnail?: string;
}

export const MEDIUM_URL = "https://augustinejoseph.medium.com/";

/** Shape of a single item returned by the rss2json Medium feed. */
interface MediumItem {
  title: string;
  pubDate: string;
  link: string;
  description: string;
  categories: string[];
  thumbnail?: string;
  content?: string;
}

function formatDate(pubDate: string): string {
  const date = new Date(pubDate.replace(" ", "T"));
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/** Use the feed's thumbnail, else the first <img> found in the HTML content. */
function toThumbnail(item: MediumItem): string | undefined {
  if (item.thumbnail) return item.thumbnail;
  const html = item.content ?? item.description ?? "";
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match?.[1];
}

/** Strip HTML tags and collapse whitespace into a short excerpt. */
function toExcerpt(html: string, limit = 180): string {
  const text = html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > limit ? `${text.slice(0, limit).trimEnd()}…` : text;
}

function toPost(item: MediumItem): BlogPost {
  return {
    date: formatDate(item.pubDate),
    tag: item.categories[0] ?? "Article",
    title: item.title.replace(/\s*[—-]\s*$|…$/g, "").trim(),
    excerpt: toExcerpt(item.description),
    url: item.link,
    thumbnail: toThumbnail(item),
  };
}

/**
 * Fetch the latest posts from the Medium RSS feed (via rss2json) at build time.
 * Returns an empty list if the feed is unreachable.
 */
export async function fetchPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(LINKS.MEDIUM);
    if (!res.ok) return [];
    const data: { items?: MediumItem[] } = await res.json();
    return (data.items ?? []).map(toPost);
  } catch {
    return [];
  }
}
