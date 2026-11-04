"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import CalmHero from "@/components/CalmHero";
import ProofAndMarquee from "@/components/ProofAndMarquee";
import AgenticAISection from "@/components/AgenticAISection";
import OmnichannelSection from "@/components/OmnichannelSection";
import PlatformModesSection from "@/components/PlatformModesSection";
import AIQASection from "@/components/AIQASection";
import CXAnalyticsSection from "@/components/CXAnalyticsSection";
import ProductsBento from "@/components/ProductsBento";
import BusinessChallengesSection from "@/components/BusinessChallengesSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import KnowledgeCentre from "@/components/KnowledgeCentre";
import CallbackSection from "@/components/CallbackSection";
import PreFooterDualCTA from "@/components/PreFooterDualCTA";
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
        "name": "CXDYNAMIQ",
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
        "name": "CXdynamIQ — AI-Powered Omnichannel CX Platform",
        "publisher": { "@id": "https://www.cxdynamiq.com/#organization" },
        "description": "Agentic AI, omnichannel engagement, and 100% conversation intelligence. Resolving customer inquiries in real time across Voice, WhatsApp, and digital channels.",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-[#069bd8]/20 selection:text-[#069bd8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />

      {/* 1. Sticky Nav with Start Free Trial (CXQ360) and Book a Demo */}
      <Navbar onRequestQuote={() => setDemoOpen(true)} />

      {/* 2. Hero: AI-First Positioning + Dual CTAs (CXQ360.ai Trial + Interactive Demo Tour) */}
      <CalmHero onOpenDemo={() => setDemoOpen(true)} />

      {/* 3. Proof Strip: 4 Core AI SaaS Metrics (72% Containment, 3.8x FCR, 100% QA, -44% Cost) */}
      <ProofAndMarquee />

      {/* 4. Agentic AI Engine: 5-Stage Stepper (Understand -> Reason -> Act -> Resolve -> Learn) [PDF Page 7] */}
      <AgenticAISection />

      {/* 5. Omnichannel Engagement: 7 Channels + 3-Day Cross-Channel Context Preservation Simulation [PDF Page 5] */}
      <OmnichannelSection />

      {/* 6. Human + AI Synergy: Operating Modes (Autonomous Bot, Copilot-Assisted, Outbound Campaigns) */}
      <PlatformModesSection />

      {/* 7. AI Quality Assurance & 100% Conversation Intelligence (Major Section) [PDF Page 6] */}
      <AIQASection />

      {/* 8. Real-Time CX Analytics & Interactive ROI Calculator [PDF Page 6-7] */}
      <CXAnalyticsSection />

      {/* 9. Products Bento: Complete Platform Modules */}
      <ProductsBento />

      {/* 10. Solve Real Business Challenges: Sales, Support, Collections */}
      <BusinessChallengesSection />

      {/* 11. About CXdynamIQ & Why Choose Us */}
      <AboutSection />
      <WhyChooseUs />

      {/* 12. Knowledge Centre / Real Guides */}
      <KnowledgeCentre />

      {/* 13. Pre-Footer Dual CTA: Self-Serve CXQ360.ai Sandbox vs Enterprise Whitelisting */}
      <PreFooterDualCTA onOpenDemo={() => setDemoOpen(true)} />

      {/* 14. Quick Callback Form */}
      <CallbackSection />

      {/* 15. Calm Footer with Full Sitemap, Security Badges & WhatsApp Float */}
      <CalmFooter />

      {/* 16. Interactive Call Flow Demo Modal */}
      <InteractiveDemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </main>
  );
}
