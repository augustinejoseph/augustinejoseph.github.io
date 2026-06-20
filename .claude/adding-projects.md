# Adding a Project

A project needs **two** edits — a content record in the JSON and a presentation
record in `portfolio.ts` — plus its images. The mapping in `portfolio.ts` only
emits projects whose `slug` exists in **both** places, so missing either one
silently drops the project.

## 1. Add content to `api/projectListV2.json`

Append an object to the array. Full shape (empty strings are fine for unused
fields):

```json
{
  "title": "Project Name - Short Descriptor",
  "slug": "my_project",
  "year": 2025,
  "industry": "Fintech",
  "location": "Bangalore, India",
  "companyName": "",
  "tags": ["React", "Django", "PostgreSQL"],
  "metaKeywords": ["seo keyword", "another keyword"],
  "description": "One-paragraph overview shown on the detail page.",
  "features": [
    "What you built / contributed — one bullet each.",
    "Shown under 'What I worked on'."
  ],
  "businessImpact": "",
  "thumbnail": "/_static/projects/my_project/thumbnail.png",
  "images": [],
  "isPortraitImages": false,
  "repo": "https://github.com/...",
  "repoLinkExpired": false,
  "liveLink": "https://example.com",
  "liveLinkExpired": false
}
```

Fields used by the site: `slug`, `year`, `industry`, `tags`, `description`,
`features`, `thumbnail`, `liveLink`, `repo`. (`liveLink` is preferred for the
"Visit site" button; it falls back to `repo`.)

## 2. Add presentation to `src/data/portfolio.ts`

Add an entry to the `PRESENTATION` array with the **same `slug`**. This array's
order is the order projects render in (put new/featured work near the top).

```ts
{
  slug: "my_project",            // MUST match the JSON slug
  name: "Project Name",          // clean display name
  tagline: "Short Descriptor",   // accent subtitle
  domain: "example.com",         // optional; defaults to JSON `industry`
  url: "https://example.com",    // optional; defaults to liveLink || repo
  featured: true,                // optional; shows on the home page
  previewTags: ["React", "Django", "PostgreSQL", "AWS"],  // up to ~4 card tags
},
```

Only these presentation fields live here; all substantive content comes from the
JSON.

## 3. Add images

Put files in `public/_static/projects/<slug>/` and point the JSON `thumbnail` at
`/_static/projects/<slug>/<file>.png` (jpg/webp also fine).

- **No thumbnail?** Leave `thumbnail` empty (`""`). The card/detail page falls
  back to a hatched placeholder with the domain badge — no broken image.
- This is a **static export** — images render via plain `<img>`, so any path
  under `public/` works. Do not use `next/image`.

## 4. Verify

```bash
npm run build
```

The new project should appear in the build output's static routes
(`/projects/<slug>`) and on the projects list. The detail page is generated
automatically via `generateStaticParams()` — no routing changes needed.

See also: [files.md](files.md) and [folder-structure.md](folder-structure.md).
