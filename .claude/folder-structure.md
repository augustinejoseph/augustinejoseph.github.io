# Folder Structure

Next.js App Router portfolio site, exported as a static site (`output: 'export'`
in `next.config.js`). The current design lives under `src/components/portfolio/`.

```
augustinejoseph.github.io/
├── api/                        # Content data (single source of truth)
│   ├── projectListV2.json      # All projects — drives the projects pages
│   └── experienceListV2.json   # Work experience
├── public/
│   └── _static/
│       └── projects/<slug>/    # Project thumbnails + screenshots
├── out/                        # Build output (static export) — generated
├── src/
│   ├── app/                    # App Router pages & routes
│   │   ├── page.tsx            # Home (Hero, TechStack, Experience,
│   │   │                       #   FeaturedProjects, RecentWriting)
│   │   ├── layout.tsx          # Root layout
│   │   ├── global.css          # Global styles
│   │   ├── blog/page.tsx       # Blog index — Medium RSS (build-time)
│   │   ├── projects/page.tsx   # Projects list
│   │   ├── projects/[id]/page.tsx  # Project detail (id = JSON slug)
│   │   ├── sitemap.ts          # Sitemap (excludes external blog URLs)
│   │   ├── robots.ts
│   │   ├── seo.tsx             # generatePageMetadata helper
│   │   └── og/route.tsx        # OG image route
│   ├── components/
│   │   └── portfolio/          # ACTIVE design components
│   │       ├── navbar.tsx, footer.tsx, page-header.tsx
│   │       ├── project-card.tsx     # Card + ProjectMedia (image/placeholder)
│   │       ├── blog-item.tsx
│   │       ├── styles.ts            # Shared inline-style tokens (MONO, CARD…)
│   │       ├── theme-root.tsx       # Applies theme CSS variables
│   │       └── sections/            # Home-page sections
│   │           ├── hero.tsx, tech-stack.tsx, experience.tsx
│   │           ├── featured-projects.tsx
│   │           └── recent-writing.tsx
│   ├── data/
│   │   └── portfolio.ts        # Maps JSON → typed data; theme palettes;
│   │                           #   fetchPosts() for Medium RSS
│   ├── lib/
│   │   └── constants.ts        # LINKS (Medium RSS feed, section routes)
│   └── utils/index.ts          # fetchArticles, helpers
└── .claude/                    # This documentation
```

> Note: components directly under `src/components/` (not in `portfolio/`) are
> from an older design and are not part of the current pages.

See also: [files.md](files.md) and [adding-projects.md](adding-projects.md).
