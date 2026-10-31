import fs from "node:fs";
import path from "node:path";

const sitemap = JSON.parse(fs.readFileSync(path.join(process.cwd(), "src", "data", "sitemap.json"), "utf-8"));
const OUT = path.join(process.cwd(), "out");
let missing = 0;

for (const entry of sitemap) {
  const p = entry.path === "/" ? "index.html" : entry.path.replace(/^\//, "");
  
  // Could be file.html or file/index.html or exact file
  const candidate1 = path.join(OUT, p + ".html");
  const candidate2 = path.join(OUT, p, "index.html");
  const candidate3 = path.join(OUT, p);

  if (fs.existsSync(candidate1) || fs.existsSync(candidate2) || fs.existsSync(candidate3)) {
    console.log(`✓ RESOLVED: ${entry.path}`);
  } else {
    console.error(`✗ MISSING: ${entry.path}`);
    missing++;
  }
}

if (missing === 0) {
  console.log(`\nSUCCESS: All ${sitemap.length} sitemap paths exist in out/ with zero 404s.`);
} else {
  console.error(`\nFAILED: ${missing} paths missing in out/`);
  process.exit(1);
}
