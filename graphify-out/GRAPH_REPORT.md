# Graph Report - cxdynamiq  (2026-11-05)

## Corpus Check
- 105 files · ~141,395 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 8 file(s) not represented in the graph (top: (none) 3, .ico 3, .xml 1)

## Summary
- 393 nodes · 718 edges · 24 communities (17 shown, 7 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 19 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ba715e1a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- check-button-colors.js
- ServicePage.tsx
- 3. Homepage Detailed Wireframe & Content Blueprint (Fold by Fold)
- package.json
- next
- ServiceExplainers.tsx
- compilerOptions
- Antigravity Project Kickoff Prompt — CXdynamIQ Website Revamp
- CXdynamIQ — Website Revamp Deliverable
- TrustStrip.tsx
- Issues
- layout.tsx
- CXdynamIQ: Enterprise B2B SaaS Competitor Audit, 10-Fold Homepage Wireframe & Google Antigravity Master Blueprint
- README.md
- AGENTS.md
- postcss.config.mjs
- app/page.tsx
- CXdynamIQ — Production Website Architecture & Antigravity Specification
- getSeo
- ChannelConnectors.tsx

## God Nodes (most connected - your core abstractions)
1. `lucide-react` - 30 edges
2. `next` - 28 edges
3. `react` - 26 edges
4. `ServiceExplainer()` - 25 edges
5. `ExplainerShell()` - 23 edges
6. `Home()` - 20 edges
7. `ServicePage()` - 19 edges
8. `CalmFooter()` - 18 edges
9. `Navbar()` - 17 edges
10. `compilerOptions` - 16 edges

## Surprising Connections (you probably didn't know these)
- `ProductPageLayoutProps` --references--> `PageData`  [EXTRACTED]
  src/components/ProductPageLayout.tsx → src/lib/content.ts
- `ServicePageProps` --references--> `PageData`  [EXTRACTED]
  src/components/ServicePage.tsx → src/lib/content.ts
- `ProductsPage()` --calls--> `ProductsClientView()`  [EXTRACTED]
  src/app/products/page.tsx → src/app/products/ProductsClientView.tsx
- `ProductsClientView()` --calls--> `CalmFooter()`  [EXTRACTED]
  src/app/products/ProductsClientView.tsx → src/components/CalmFooter.tsx
- `ProductsClientView()` --calls--> `InteractiveDemoModal()`  [EXTRACTED]
  src/app/products/ProductsClientView.tsx → src/components/InteractiveDemoModal.tsx

## Import Cycles
- None detected.

## Communities (24 total, 7 thin omitted)

### Community 0 - "check-button-colors.js"
Cohesion: 0.25
Nodes (5): fs, path, scanDir(), SRC_DIR, violations

### Community 1 - "ServicePage.tsx"
Cohesion: 0.11
Nodes (32): metadata, ProductsPage(), CATEGORIES, ProductItem, PRODUCTS_DATA, ProductsClientView(), CalmHero(), CalmHeroProps (+24 more)

### Community 2 - "3. Homepage Detailed Wireframe & Content Blueprint (Fold by Fold)"
Cohesion: 0.05
Nodes (40): 3. Homepage Detailed Wireframe & Content Blueprint (Fold by Fold), FOLD 10: Client Testimonial & Case Study Carousel, FOLD 11: High-Conversion Pre-Footer Call to Action (The Dual Gateway), FOLD 12: Comprehensive Enterprise Footer, FOLD 1: Global Navigation & Hero Section (The 5-Second Hook), FOLD 2: Enterprise Social Proof & Trust Strip, FOLD 3: The Paradigm Shift — "Understand, Reason, Act, Resolve, Learn" (Agentic AI Showcase), FOLD 4: The Unified Product Ecosystem (Interactive Tabbed Showcase) (+32 more)

### Community 3 - "package.json"
Cohesion: 0.06
Nodes (37): eslintConfig, dependencies, framer-motion@^14.4.0, lucide-react@^1.46.0, next@16.3.5, react@19.2.8, react-dom@19.2.8, devDependencies (+29 more)

### Community 4 - "next"
Cohesion: 0.09
Nodes (31): OUT, sitemap, BlogPostPage(), generateMetadata(), generateStaticParams(), CategoryPage(), generateStaticParams(), NotFound() (+23 more)

### Community 5 - "ServiceExplainers.tsx"
Cohesion: 0.18
Nodes (27): ExplainerShell(), ExplainerShellProps, AcdExplainer(), AutoAttendantExplainer(), AutoDialerExplainer(), BlendedCallCentreExplainer(), BpoExplainer(), ClickToCallExplainer() (+19 more)

### Community 6 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 7 - "Antigravity Project Kickoff Prompt — CXdynamIQ Website Revamp"
Cohesion: 0.20
Nodes (9): Antigravity Project Kickoff Prompt — CXdynamIQ Website Revamp, CRITICAL PROCESS REQUIREMENT (do not skip), DESIGN DIRECTION, PROJECT CONTEXT, RECOMMENDED SITE STRUCTURE (from client brief — use as the base), Repositioning goal, TECHNICAL / NON-NEGOTIABLE REQUIREMENTS, The two properties involved (+1 more)

### Community 8 - "CXdynamIQ — Website Revamp Deliverable"
Cohesion: 0.20
Nodes (9): 1.1 The Repositioning Shift, 1.2 The Two-Property Ecosystem, 1. Executive Summary & Repositioning Strategy, 2. Comprehensive Sitemap & URL Hierarchy, 4. Key Ambiguities & Client Questions (To Flag with Mohan Singh), 5. Next Steps & Approval Gate, Complete Page Directory & Conversion Goals, CXdynamIQ — Website Revamp Deliverable (+1 more)

### Community 9 - "TrustStrip.tsx"
Cohesion: 0.36
Nodes (5): TrustStrip(), ClaimItem, claims, ClaimsConfig, getDisplayClaim()

### Community 10 - "Issues"
Cohesion: 0.25
Nodes (7): Forms found, HIGH, Issues, Legacy site audit, LOW, MED, Page inventory

### Community 11 - "layout.tsx"
Cohesion: 0.25
Nodes (5): instrumentSerif, inter, jakarta, jetbrainsMono, metadata

### Community 13 - "CXdynamIQ: Enterprise B2B SaaS Competitor Audit, 10-Fold Homepage Wireframe & Google Antigravity Master Blueprint"
Cohesion: 0.08
Nodes (24): 1. Value Proposition & Hero Positioning, 1. Value Proposition & Hero Positioning, 1. Value Proposition & Hero Positioning, 2. AI Architecture Presentation, 2. AI Architecture Presentation, 2. AI Architecture Presentation, 3. AI Quality Assurance (QA) & Conversation Intelligence, 3. AI Quality Assurance (QA) & Conversation Intelligence (+16 more)

### Community 14 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 20 - "app/page.tsx"
Cohesion: 0.07
Nodes (39): nextConfig, lucide-react, next, react, Home(), Page(), AboutSection(), AGENTIC_STEPS (+31 more)

### Community 21 - "CXdynamIQ — Production Website Architecture & Antigravity Specification"
Cohesion: 0.15
Nodes (12): 1. CRITICAL PRODUCTION GUARDRAILS (ZERO DEMO CONTENT / ZERO MISINFORMATION), 2. MANDATORY POSITIONING & CAPABILITIES (CLIENT BRIEF SECTION 1 & 2), 3. DEMO / TRIAL JOURNEY ROUTING TO `https://cxq360.ai/` (CLIENT BRIEF SECTION 3), 4. COMPLETE WEBSITE STRUCTURE & NAVIGATION SITEMAP (CLIENT BRIEF SECTION 4 & 8), 5. MANDATORY WORKFLOW DIAGRAMS TO BUILD IN CODE (CLIENT BRIEF SECTIONS 5 & 6), 6. 10-FOLD HOMEPAGE WIREFRAME & VISUAL DESIGN DIRECTION (CLIENT BRIEF SECTION 9 & 10), 7. TECHNICAL DELIVERY CHECKLIST (CLIENT BRIEF SECTION 10), CXdynamIQ — Production Website Architecture & Antigravity Specification (+4 more)

### Community 22 - "getSeo"
Cohesion: 0.33
Nodes (5): generateMetadata(), generateMetadata(), getSeo(), SEO_REGISTRY, SeoEntry

## Knowledge Gaps
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `lucide-react` connect `app/page.tsx` to `ServicePage.tsx`, `package.json`, `next`, `ServiceExplainers.tsx`, `TrustStrip.tsx`?**
  _High betweenness centrality (0.088) - this node is a cross-community bridge._
- **Should `ServicePage.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.11382113821138211 - nodes in this community are weakly interconnected._
- **Why does `next` connect `app/page.tsx` to `layout.tsx`, `ServicePage.tsx`, `package.json`, `next`?**
  _High betweenness centrality (0.084) - this node is a cross-community bridge._
- **Should `3. Homepage Detailed Wireframe & Content Blueprint (Fold by Fold)` be split into smaller, more focused modules?**
  _Cohesion score 0.05 - nodes in this community are weakly interconnected._
- **Why does `react` connect `app/page.tsx` to `ServicePage.tsx`, `package.json`, `next`, `ServiceExplainers.tsx`, `ChannelConnectors.tsx`?**
  _High betweenness centrality (0.075) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.06341463414634146 - nodes in this community are weakly interconnected._
- **Should `next` be split into smaller, more focused modules?**
  _Cohesion score 0.08888888888888889 - nodes in this community are weakly interconnected._