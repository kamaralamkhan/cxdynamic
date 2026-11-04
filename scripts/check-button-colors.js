/**
 * CI / Build Guard: Validates that no CTA Button or <a> element uses
 * emerald, green, or teal background classes.
 * Specification: Primary is sky-700, secondary is white/slate-300,
 * and navy inverse is white/slate-900. Emerald is reserved for status dots only.
 */

const fs = require("fs");
const path = require("path");

const SRC_DIR = path.join(__dirname, "..", "src");

// Regex to catch <button or <a or Link elements with bg-emerald, bg-green, bg-teal or #008f6d
const BANNED_BUTTON_PATTERN = /<(button|a|Link)\b[^>]*\bclass(Name)?=["'][^"']*\b(bg-emerald-(?:500|600|700)|bg-green-(?:500|600|700)|bg-teal-(?:500|600|700)|bg-\[#008f6d\])[^"']*["']/i;

let violations = [];

function scanDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDir(fullPath);
    } else if (/\.(tsx|jsx|html)$/.test(entry.name)) {
      const content = fs.readFileSync(fullPath, "utf-8");
      const lines = content.split("\n");
      for (let i = 0; i < lines.length; i++) {
        if (BANNED_BUTTON_PATTERN.test(lines[i])) {
          violations.push({
            file: path.relative(path.join(__dirname, ".."), fullPath),
            line: i + 1,
            code: lines[i].trim(),
          });
        }
      }
    }
  }
}

scanDir(SRC_DIR);

if (violations.length > 0) {
  console.error("\n❌ Button Color Violation Found (v5/v6 spec violation):");
  console.error("Buttons and <a> CTAs must use sky-700, white/slate, or navy inverse. No emerald/green/teal backgrounds allowed.\n");
  violations.forEach((v) => {
    console.error(`  - ${v.file}:${v.line} -> ${v.code}`);
  });
  console.error("\nPlease update button classes to sky-700 or white.\n");
  process.exit(1);
} else {
  console.log("✅ Button color audit passed: Zero buttons or links use green/emerald/teal backgrounds.");
}
