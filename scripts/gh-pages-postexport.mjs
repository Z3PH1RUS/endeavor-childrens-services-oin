/**
 * GitHub Pages serves extensionless URLs from *.html but trailing-slash URLs
 * require a directory index.html. Mirror each exported page into route/index.html.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const outDir = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "out");
const skipHtml = new Set(["index.html", "404.html", "_not-found.html"]);

function collectHtmlFiles(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "_next") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectHtmlFiles(full));
    } else if (entry.name.endsWith(".html") && !skipHtml.has(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

if (!fs.existsSync(outDir)) {
  console.error("gh-pages-postexport: out/ not found — run next build first.");
  process.exit(1);
}

for (const htmlPath of collectHtmlFiles(outDir)) {
  const rel = path.relative(outDir, htmlPath);
  const routeDir = path.join(outDir, rel.slice(0, -".html".length));
  fs.mkdirSync(routeDir, { recursive: true });
  fs.copyFileSync(htmlPath, path.join(routeDir, "index.html"));
}

console.log("gh-pages-postexport: trailing-slash index.html copies written.");
