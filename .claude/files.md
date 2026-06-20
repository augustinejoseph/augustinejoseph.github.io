# Key Files

The files you'll touch most often, and what each is responsible for.

## Data sources (single source of truth)

| File | Purpose |
|------|---------|
| `api/projectListV2.json` | All project content: title, slug, year, industry, tags, description, features, thumbnail, links. Edit here to change project content. |
| `api/experienceListV2.json` | Work-experience entries. |
| `src/data/portfolio.ts` | Glue layer. Maps the JSON into typed `PROJECTS`, exposes `FEATURED_PROJECTS`, `getProject()`, theme palettes, and `fetchPosts()` (Medium RSS). Holds the `PRESENTATION` array — display-only fields per project. |
| `src/lib/constants.ts` | `LINKS` — the Medium RSS feed URL (`LINKS.MEDIUM`, via rss2json) and section routes. |

## Projects rendering

| File | Purpose |
|------|---------|
| `src/app/projects/page.tsx` | Projects list page — maps `PROJECTS` to wide cards. |
| `src/app/projects/[id]/page.tsx` | Project detail/case-study page. `[id]` is the JSON `slug`. Uses `generateStaticParams()` over `PROJECTS`, so every project becomes a static page. Renders thumbnail or hatch placeholder. |
| `src/components/portfolio/project-card.tsx` | `ProjectCard` (compact + wide variants) and `ProjectMedia` (shows the real `<img>` thumbnail, or a hatched placeholder + domain badge when none). |
| `src/components/portfolio/sections/featured-projects.tsx` | Home-page grid of `FEATURED_PROJECTS`. |

## Blog (Medium RSS)

| File | Purpose |
|------|---------|
| `src/app/blog/page.tsx` | Blog index. Async server component — `await fetchPosts()` at build time. |
| `src/components/portfolio/sections/recent-writing.tsx` | Home-page "latest posts" — also `await fetchPosts()`, top 3. |
| `src/components/portfolio/blog-item.tsx` | Renders a single post (compact + full variants). |

## Config / cross-cutting

| File | Purpose |
|------|---------|
| `next.config.js` | `output: 'export'` → **static export, no image optimizer**. Use plain `<img>`, not `next/image`. |
| `src/app/sitemap.ts` | Sitemap. Lists static routes + project pages. Blog posts are external Medium URLs and are intentionally excluded. |
| `src/app/seo.tsx` | `generatePageMetadata()` used by pages for `<title>`/OG tags. |
| `src/components/portfolio/styles.ts` | Shared inline-style tokens (`MONO`, `CARD`, `TAG_CHIP`, `hatch()`, etc.). |

See also: [folder-structure.md](folder-structure.md) and [adding-projects.md](adding-projects.md).
