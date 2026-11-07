"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import CalmHero from "@/components/CalmHero";
import ProofAndMarquee from "@/components/ProofAndMarquee";
import ModernVsLegacySection from "@/components/ModernVsLegacySection";
import IntegrationsSection from "@/components/IntegrationsSection";
import PlatformModesSection from "@/components/PlatformModesSection";
import OmnichannelSection from "@/components/OmnichannelSection";
import ProductsBento from "@/components/ProductsBento";
import AIQASection from "@/components/AIQASection";
import CXAnalyticsSection from "@/components/CXAnalyticsSection";
import BusinessChallengesSection from "@/components/BusinessChallengesSection";
import CXQ360TrialJourney from "@/components/CXQ360TrialJourney";
import WhyChooseUs from "@/components/WhyChooseUs";
import KnowledgeCentre from "@/components/KnowledgeCentre";
import CallbackSection from "@/components/CallbackSection";
import CalmFooter from "@/components/CalmFooter";
import InteractiveDemoModal from "@/components/InteractiveDemoModal";
import { siteConfig } from "@/lib/site";

export default function Home() {
  const [demoOpen, setDemoOpen] = useState(false);

  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.cxdynamiq.com/#organization",
        "name": "CXdynamIQ",
        "url": "https://www.cxdynamiq.com",
        "logo": "https://www.cxdynamiq.com/cxdynamiq-favicon.png",
        "telephone": siteConfig.phones.primaryRaw,
        "email": siteConfig.emails.info,
        "sameAs": [
          "https://www.linkedin.com/company/cxdynamiq",
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": siteConfig.address.street,
          "addressLocality": siteConfig.address.city,
          "postalCode": siteConfig.address.postal,
          "addressCountry": "IN",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.cxdynamiq.com/#website",
        "url": "https://www.cxdynamiq.com",
        "name": "CXdynamIQ — AI-Powered Omnichannel CX & Contact Center Platform",
        "publisher": { "@id": "https://www.cxdynamiq.com/#organization" },
        "description": "Agentic AI, omnichannel engagement, human-AI copilot collaboration, and 100% conversation intelligence. Resolving customer inquiries in real time across Voice, WhatsApp, and digital channels.",
      },
    ],
  };

  return (
    <main className="relative min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-sky-500/20 selection:text-sky-900">
      <a
        href="#homepage-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-slate-900 focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
      >
        Skip to main content
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />

      {/* 1. Sticky Nav with Start Free Trial (CXQ360.ai) and Book a Demo */}
      <Navbar onRequestQuote={() => setDemoOpen(true)} />

      <div id="homepage-content" tabIndex={-1}>

      {/* Fold 1 — Hero: AI-First Positioning + Dual CTAs (CXQ360.ai Trial + Book a Demo) */}
      <CalmHero onOpenDemo={() => setDemoOpen(true)} />

      {/* Fold 2 — Proof Strip: 4 Core AI SaaS Metrics (72% Containment, 3.8x FCR, 100% QA, -44% Cost) */}
      <ProofAndMarquee />

      {/* Fold 2.5 — Architecture Comparison: Modern Cloud Voice vs Yesterday's PBX */}
      <ModernVsLegacySection />

      {/* Fold 3 — Three Operating Modes: Team-Led, AI-Assisted, AI-Led Continuum */}
      <PlatformModesSection />

      {/* Fold 4 — Enterprise Ecosystem Integrations: CRM, service, ERP, APIs, webhooks, apps, and AI/LLM */}
      <IntegrationsSection />

      {/* Fold 6 — Omnichannel Engagement & Cross-Channel Context Preservation */}
      <OmnichannelSection />

      {/* Fold 7 — Intelligent Contact Center Core (Routing, IVR, Inbound/Outbound, Dialers) */}
      <ProductsBento />

      {/* Fold 8 — AI Quality Assurance & 100% Conversation Intelligence */}
      <AIQASection />

      {/* Fold 9 — Real-Time CX Analytics & Interactive Enterprise ROI Calculator */}
      <CXAnalyticsSection />

      {/* Fold 10 — High-Stakes Industry & Workflow Solutions */}
      <BusinessChallengesSection />

      {/* Fold 11 — The 5-Step CXQ360.ai Trial-to-License Journey */}
      <CXQ360TrialJourney />

      {/* Fold 12 — Trust and operating principles */}
      <WhyChooseUs />

      {/* Fold 12 — Knowledge Centre / Technical Guides */}
      <KnowledgeCentre />

      {/* Fold 13 — Quick Callback & Demo Form */}
      <CallbackSection />

      {/* Fold 16 — Calm Footer with Full Sitemap, Security Badges & WhatsApp Float */}
      <CalmFooter />

      {/* Fold 17 — Interactive Call Flow Demo Modal */}
      </div>

      <InteractiveDemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </main>
  );
}
