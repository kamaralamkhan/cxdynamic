"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import CalmHero from "@/components/CalmHero";
import StitchIntegrationsSection from "@/components/StitchIntegrationsSection";
import StitchBentoGrid from "@/components/StitchBentoGrid";
import StitchInfrastructureSection from "@/components/StitchInfrastructureSection";
import ModernVsLegacySection from "@/components/ModernVsLegacySection";
import StitchPillarsSection from "@/components/StitchPillarsSection";
import StitchTabsSection from "@/components/StitchTabsSection";
import StitchCallFlowSection from "@/components/StitchCallFlowSection";
import StitchIndustriesSection from "@/components/StitchIndustriesSection";
import StitchTestimonialSection from "@/components/StitchTestimonialSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CXQ360TrialJourney from "@/components/CXQ360TrialJourney";
import KnowledgeCentre from "@/components/KnowledgeCentre";
import PreFooterDualCTA from "@/components/PreFooterDualCTA";
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

      {/* 1. Sticky Nav with 2.5px Live Reading Progress Bar */}
      <Navbar onRequestQuote={() => setDemoOpen(true)} />

      <div id="homepage-content" tabIndex={-1}>

        {/* Section 1: Hero — Exact Design from Stitch Zip (Centered Headline, Ambient Globe, macOS Agent Workspace v3.0) */}
        <CalmHero onOpenDemo={() => setDemoOpen(true)} />

        {/* Section 2: Seamless Bi-directional Integration Across Your Entire Stack (Stitch Parabolic Drifting Nodes) */}
        <StitchIntegrationsSection />

        {/* Section 4: Feature Bento Grid — "Everything your modern revenue & support teams need to conquer call volume" */}
        <StitchBentoGrid />

        {/* Section 4: Global Voice Telephony Infrastructure — Sub-Millisecond Edge Network Canvas */}
        <StitchInfrastructureSection />

        {/* Section 5: Architecture Comparison — Modern Cloud Voice vs Yesterday's PBX */}
        <ModernVsLegacySection />

        {/* Section 6: Four Product Pillars with Interactive UI Mockups (Stitch Design) */}
        <StitchPillarsSection />

        {/* Section 7: Interactive Feature Story — "One system. Infinite control." (Stitch Tabbed Demo) */}
        <StitchTabsSection />

        {/* Section 8: End-to-End Orchestration — "How a call moves through CXDYNAMIQ" (4-Step Loop) */}
        <StitchCallFlowSection />

        {/* Section 9: Purpose-Built For Demanding Sectors — Global Enterprise, BPO, Education, Growing Businesses */}
        <StitchIndustriesSection />

        {/* Section 10: Verified High-Credibility Testimonial — Sarah Jenkins (+34% Queue Throughput) */}
        <StitchTestimonialSection />

        {/* Section 11: Why Leaders Migrate to CXDYNAMIQ — 30+ Yrs, Carrier SLA, Zero Downtime */}
        <WhyChooseUs />

        {/* Section 12: 5-Step CXQ360.ai Trial-to-License Journey */}
        <CXQ360TrialJourney />

        {/* Section 13: Knowledge Centre / Technical Guides */}
        <KnowledgeCentre />

        {/* Section 14: Pre-Footer Dual CTA — CXQ360.ai Sandbox vs Enterprise Consultation (Light Theme) */}
        <PreFooterDualCTA onOpenDemo={() => setDemoOpen(true)} />

        {/* Section 15: Quick Callback & Custom Demo Quote Form (Light Theme) */}
        <CallbackSection />

        {/* Section 16: Calm Footer with Full Sitemap, Security Badges & WhatsApp Float */}
        <CalmFooter />

      </div>

      {/* Interactive Call Flow Demo Modal */}
      <InteractiveDemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </main>
  );
}
