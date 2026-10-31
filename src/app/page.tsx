"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import CalmHero from "@/components/CalmHero";
import ProofAndMarquee from "@/components/ProofAndMarquee";
import BusinessChallengesSection from "@/components/BusinessChallengesSection";
import AboutSection from "@/components/AboutSection";
import ProductsBento from "@/components/ProductsBento";
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
        "name": "CXDYNAMIQ",
        "url": "https://www.cxdynamiq.com",
        "logo": "https://www.cxdynamiq.com/images/favicon.png",
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
        "name": "CXDYNAMIQ Cloud Contact Center",
        "publisher": { "@id": "https://www.cxdynamiq.com/#organization" },
        "description": "Stress-free cloud contact center solutions. Deploy in a day with omnichannel routing, CTI integrations, and conversational AI.",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-[#069bd8]/20 selection:text-[#069bd8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />

      {/* 1. Sticky Nav with exact old menu tree */}
      <Navbar />

      {/* 2. Hero: VIP Support & React Dashboard Mockup with Demo Launcher */}
      <CalmHero onOpenDemo={() => setDemoOpen(true)} />

      {/* 3. Proof Strip & Integrations Infinite Marquee */}
      <ProofAndMarquee />

      {/* 4. Solve Real Business Challenges (Sales, Support, Collection) - Convin Inspired */}
      <BusinessChallengesSection />

      {/* 5. About CXDYNAMIQ */}
      <AboutSection />

      {/* 5. Products Bento Grid */}
      <ProductsBento />

      {/* 6. Why Choose Us & How It Works */}
      <WhyChooseUs />

      {/* 7. Knowledge Centre / Real Blog Guides */}
      <KnowledgeCentre />

      {/* 8. Callback & Request a Quote Form */}
      <CallbackSection />

      {/* 9. Calm Footer & Floating WhatsApp */}
      <CalmFooter />

      {/* 10. Interactive 30-Second Call Flow Demo Modal */}
      <InteractiveDemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </main>
  );
}
