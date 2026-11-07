"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import CalmHero from "@/components/CalmHero";
import AnimatedServiceGrid from "@/components/AnimatedServiceGrid";
import AgenticAISection from "@/components/AgenticAISection";
import HumanAIJourneySection from "@/components/HumanAIJourneySection";
import OmnichannelSection from "@/components/OmnichannelSection";
import StitchBentoGrid from "@/components/StitchBentoGrid";
import AIQASection from "@/components/AIQASection";
import CXAnalyticsSection from "@/components/CXAnalyticsSection";
import StitchIntegrationsSection from "@/components/StitchIntegrationsSection";
import StitchInfrastructureSection from "@/components/StitchInfrastructureSection";
import ModernVsLegacySection from "@/components/ModernVsLegacySection";
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

        {/* Section 1: Hero — macOS Agent Workspace v3.0 with interactive tabs & real-time telemetry */}
        <CalmHero onOpenDemo={() => setDemoOpen(true)} />

        {/* Section 2: Animated Service Grid (4-Column Responsive Module Suite) */}
        <AnimatedServiceGrid />

        {/* Section 3 (PDF Section 5): Dedicated Agentic AI — Autonomous 5-Step Loop (Understand → Reason → Act → Resolve → Learn) */}
        <AgenticAISection />

        {/* Section 4 (PDF Section 6): Dedicated Human + AI Collaboration — The Complete 6-Stage Service Continuum */}
        <HumanAIJourneySection />

        {/* Section 5 (PDF Section 4): Unified Omnichannel Fabric across 7 Channels with Persistent Context */}
        <OmnichannelSection />

        {/* Section 6 (PDF Section 4): Intelligent Contact Center — ACD, IVR, Predictive/Progressive Dialers, CTI Screen Pops */}
        <StitchBentoGrid />

        {/* Section 7 (PDF Section 4 & 6): AI Quality & Conversation Intelligence — 100% Interaction Auditing vs 2% Legacy Sample */}
        <AIQASection />

        {/* Section 8 (PDF Section 4): Real-Time CX Analytics & Business Intelligence — Containment, FCR, AHT, CSAT & ROI Calculator */}
        <CXAnalyticsSection />

        {/* Section 9 (PDF Section 7): Seamless Bi-directional Enterprise Integrations (CRM, ERP, Helpdesk, APIs) */}
        <StitchIntegrationsSection />

        {/* Section 10: Global Voice Telephony Infrastructure — Sub-Millisecond Edge Network Canvas */}
        <StitchInfrastructureSection />

        {/* Section 11: Architecture Comparison — Modern Cloud Voice vs Yesterday's PBX */}
        <ModernVsLegacySection />

        {/* Section 12 (PDF Section 8): Sector-Specific AI & Contact Center Blueprints (8 Major Industry Verticals) */}
        <StitchIndustriesSection />

        {/* Section 13: Verified Customer Credibility & Metric-Driven Social Proof */}
        <StitchTestimonialSection />

        {/* Section 14: Enterprise Heritage & Reliability SLA (30+ Years, Carrier Interconnects) */}
        <WhyChooseUs />

        {/* Section 15 (PDF Section 3): 5-Step CXQ360.ai Trial-to-License Onboarding Journey */}
        <CXQ360TrialJourney />

        {/* Section 16: Technical Knowledge Centre & Architecture Guides */}
        <KnowledgeCentre />

        {/* Section 17 (PDF Section 3 & 11): Pre-Footer Dual CTA — CXQ360.ai Sandbox vs Enterprise Consultation */}
        <PreFooterDualCTA onOpenDemo={() => setDemoOpen(true)} />

        {/* Section 18: Instant Enterprise Callback & Custom Demo Quote Form */}
        <CallbackSection />

        {/* Section 19: Enterprise Footer with ISO 27001, SOC 2, HIPAA, GDPR Security Badges & WhatsApp Float */}
        <CalmFooter />

      </div>

      {/* Interactive Call Flow Demo Modal */}
      <InteractiveDemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </main>
  );
}
