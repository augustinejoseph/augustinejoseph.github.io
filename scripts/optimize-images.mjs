// Generates .webp siblings for every JPG/PNG under public/_static.
// Originals are left untouched; a <picture> wrapper serves the .webp
// when the browser supports it (see src/components/portfolio/img.tsx).
//
// Idempotent + cached: skips when an up-to-date .webp already exists.

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..", "public", "_static");

const SOURCE_EXT = new Set([".jpg", ".jpeg", ".png"]);
// Skip favicons/og cards — tiny or required in their original format.
const SKIP_DIRS = new Set(["favicons"]);

// Cap large images. Thumbnails get a tighter bound.
const MAX_WIDTH = 1600;
const THUMB_MAX_WIDTH = 900;
const WEBP_QUALITY = 80;

let converted = 0;
let skipped = 0;
let savedBytes = 0;

async function* walk(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      yield* walk(full);
    } else {
      yield full;
    }
  }
}

async function isStale(src, dest) {
  try {
    const [s, d] = await Promise.all([fs.stat(src), fs.stat(dest)]);
    return s.mtimeMs > d.mtimeMs; // source newer than webp → regenerate
  } catch {
    return true; // dest missing
  }
}

async function convert(src) {
  const ext = path.extname(src).toLowerCase();
  if (!SOURCE_EXT.has(ext)) return;

  const dest = src.slice(0, -ext.length) + ".webp";
  if (!(await isStale(src, dest))) {
    skipped++;
    return;
  }

  const isThumb = /thumbnail|thumb|cover|avatar|me\.(jpg|png)/i.test(src);
  const maxWidth = isThumb ? THUMB_MAX_WIDTH : MAX_WIDTH;

  const pipeline = sharp(src);
  const meta = await pipeline.metadata();
  if (meta.width && meta.width > maxWidth) {
    pipeline.resize({ width: maxWidth, withoutEnlargement: true });
  }

  await pipeline.webp({ quality: WEBP_QUALITY }).toFile(dest);

  const [srcStat, destStat] = await Promise.all([fs.stat(src), fs.stat(dest)]);
  savedBytes += srcStat.size - destStat.size;
  converted++;
  const rel = path.relative(ROOT, src);
  const pct = Math.round((1 - destStat.size / srcStat.size) * 100);
  console.log(
    `  ${rel}  ${(srcStat.size / 1024).toFixed(0)}K → ${(destStat.size / 1024).toFixed(0)}K  (-${pct}%)`,
  );
}

async function main() {
  try {
    await fs.access(ROOT);
  } catch {
    console.log("[optimize-images] no public/_static directory, skipping.");
    return;
  }

  console.log("[optimize-images] generating WebP variants…");
  for await (const file of walk(ROOT)) {
    await convert(file);
  }
  console.log(
    `[optimize-images] done. converted ${converted}, skipped ${skipped}, saved ${(savedBytes / 1024 / 1024).toFixed(1)}MB`,
  );
}

main().catch((err) => {
  console.error("[optimize-images] failed:", err);
  process.exit(1);
});
