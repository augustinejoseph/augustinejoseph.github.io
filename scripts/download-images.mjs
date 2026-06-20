import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const jsonPath = path.join(root, "api", "projectListV2.json");
const publicBase = path.join(root, "public", "_static", "projects");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchWithRetry(url, retries = 3) {
  let lastErr;
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, { redirect: "follow" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length === 0) throw new Error("empty body");
      return buf;
    } catch (err) {
      lastErr = err;
      if (attempt < retries) await sleep(attempt * 1500);
    }
  }
  throw lastErr;
}

function filenameFromUrl(url) {
  return path.basename(new URL(url).pathname);
}

const projects = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
const failures = [];
let downloaded = 0;

for (const project of projects) {
  const slug = project.slug;
  const dir = path.join(publicBase, slug);

  // Collect every postimg URL field on this project.
  const rewriteField = async (url) => {
    if (typeof url !== "string" || !url.includes("postimg.cc")) return url;
    fs.mkdirSync(dir, { recursive: true });
    const filename = filenameFromUrl(url);
    const dest = path.join(dir, filename);
    const localPath = `/_static/projects/${slug}/${filename}`;
    try {
      const buf = await fetchWithRetry(url, 6);
      fs.writeFileSync(dest, buf);
      downloaded++;
      console.log(`  ✓ ${slug}/${filename}`);
      return localPath;
    } catch (err) {
      failures.push({ slug, url, error: String(err.message || err) });
      console.log(`  ✗ ${slug}/${filename} — ${err.message || err}`);
      return url; // leave original URL untouched on failure
    }
  };

  console.log(`\n# ${slug}`);
  if (project.thumbnail) {
    project.thumbnail = await rewriteField(project.thumbnail);
  }
  if (Array.isArray(project.images)) {
    const next = [];
    for (const img of project.images) next.push(await rewriteField(img));
    project.images = next;
  }
}

fs.writeFileSync(jsonPath, JSON.stringify(projects, null, 2) + "\n");

console.log(`\n=== Done. Downloaded ${downloaded} images. ===`);
if (failures.length) {
  console.log(`\n${failures.length} FAILED (left as original URL):`);
  for (const f of failures) console.log(`  ${f.slug}: ${f.url} (${f.error})`);
  process.exitCode = 1;
} else {
  console.log("All images downloaded successfully.");
}
