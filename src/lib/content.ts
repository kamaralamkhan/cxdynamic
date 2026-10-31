import sitemapData from "@/data/sitemap.json";
import fs from "node:fs";
import path from "node:path";

export interface PageBlock {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "li" | "img" | "cta";
  text?: string;
  src?: string;
  alt?: string;
  href?: string;
}

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
}

export interface PageData {
  url: string;
  path: string;
  meta: PageMeta;
  blocks: PageBlock[];
}

export interface SitemapEntry {
  slug: string;
  path: string;
  title: string;
  blocks?: number;
  h1?: string;
  words?: number;
}

// Clean typographic errors and legacy artifacts through a clean override layer
const TEXT_OVERRIDES: Record<string, string> = {
  "Gloabal": "Global",
  "Hubstpot": "HubSpot",
  "Centere": "Center",
  "CXDYNAMIQglobal": "CXDYNAMIQ",
};

export function cleanText(input?: string): string {
  if (!input) return "";
  let res = input;
  for (const [bad, good] of Object.entries(TEXT_OVERRIDES)) {
    res = res.replaceAll(bad, good);
  }
  return res.trim();
}

export function pathToSlug(p: string): string {
  if (p === "/" || p === "") return "home";
  return p.replace(/^\//, "").replace(/[\/\s%]+/g, "__");
}

export function slugToPath(slug: string): string {
  if (slug === "home") return "/";
  const entry = sitemapData.find((s) => s.slug === slug);
  if (entry) return entry.path;
  return "/" + slug.replace(/__/g, "/");
}

export function getPageData(slug: string): PageData | null {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "pages", `${slug}.json`);
    if (!fs.existsSync(filePath)) {
      return null;
    }
    const raw = fs.readFileSync(filePath, "utf-8");
    const data: PageData = JSON.parse(raw);
    
    // Apply clean overrides to metadata and blocks
    return {
      ...data,
      meta: {
        ...data.meta,
        title: cleanText(data.meta.title),
        description: cleanText(data.meta.description),
      },
      blocks: data.blocks.map((b) => ({
        ...b,
        text: b.text ? cleanText(b.text) : undefined,
      })),
    };
  } catch (err) {
    console.error(`Failed to load page data for slug: ${slug}`, err);
    return null;
  }
}

export function getSitemap(): SitemapEntry[] {
  return sitemapData;
}

export function getAllPageSlugs(): string[] {
  return sitemapData.map((s) => s.slug);
}

// Identify category of page
export function getPageCategory(pathStr: string): "industry" | "call-center" | "business-phone" | "sales-dialer" | "cx-hub" | "integration" | "feature" | "blog" | "general" {
  if (["/enterprise", "/bpo", "/education", "/small-business"].includes(pathStr)) return "industry";
  if (["/inbound-calling", "/outbound-calling", "/blended-call-centre", "/cti-integrations"].includes(pathStr)) return "call-center";
  if (["/auto-attendant", "/contact-manager"].includes(pathStr)) return "business-phone";
  if (["/click-to-call", "/auto-dialer", "/crm-integrations"].includes(pathStr)) return "sales-dialer";
  if (["/omnichannel-routing", "/conversational-ai", "/speech-analytics"].includes(pathStr)) return "cx-hub";
  if (["/zoho", "/zendesk", "/salesforce", "/freshdesk", "/hubspot", "/whatsapp-business", "/intercom-integration"].includes(pathStr)) return "integration";
  if (["/power-dialer", "/predictive-dialer", "/ivr", "/acd"].includes(pathStr)) return "feature";
  if (pathStr.startsWith("/blog")) return "blog";
  return "general";
}
