"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CalmFooter from "@/components/CalmFooter";
import ServiceExplainer from "@/components/explainers/ServiceExplainers";
import InteractiveDemoModal from "@/components/InteractiveDemoModal";
import { getSeo } from "@/content/seo";
import { getRelatedServices } from "@/content/related";
import { getServiceOverride } from "@/content/overrides/serviceData";
import { PageData } from "@/lib/content";
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  ChevronDown, 
  ShieldCheck,
  Zap,
  Activity,
  Layers,
  Phone,
  Mail,
  Sparkles
} from "lucide-react";
import { 
  ZendeskLogo, 
  SalesforceLogo, 
  ZohoLogo, 
  FreshdeskLogo, 
  HubSpotLogo, 
  IntercomLogo, 
  WhatsAppLogo 
} from "@/components/IntegrationLogos";

interface ServicePageProps {
  page: PageData;
}

export default function ServicePage({ page }: ServicePageProps) {
  const seo = getSeo(page.path);
  const related = getRelatedServices(page.path);
  const override = getServiceOverride(page.path);

  const [demoOpen, setDemoOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const integrations = [
    { name: "Zoho CRM", path: "/zoho", logo: ZohoLogo },
    { name: "Salesforce", path: "/salesforce", logo: SalesforceLogo },
    { name: "Zendesk", path: "/zendesk", logo: ZendeskLogo },
    { name: "Freshdesk", path: "/freshdesk", logo: FreshdeskLogo },
    { name: "HubSpot", path: "/hubspot", logo: HubSpotLogo },
    { name: "WhatsApp Business", path: "/whatsapp-business", logo: WhatsAppLogo },
    { name: "Intercom", path: "/intercom-integration", logo: IntercomLogo },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-sky-500/20 selection:text-sky-900">
      
      {/* 1. Global Navigation */}
      <Navbar onRequestQuote={() => setDemoOpen(true)} />

      {/* 2. Minimalist Breadcrumb Bar */}
      <nav aria-label="Breadcrumb" className="bg-white/80 backdrop-blur-sm border-b border-slate-200/80 py-3 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" aria-hidden="true" />
          <span className="text-slate-400">{seo.group || "Platform Solutions"}</span>
          <ChevronRight className="w-3 h-3 text-slate-400" aria-hidden="true" />
          <span className="text-slate-900 font-semibold truncate max-w-sm">{seo.h1}</span>
        </div>
      </nav>

      {/* 3. High-Impact Minimal Hero */}
      <section className="bg-white border-b border-slate-200/80 pt-12 pb-16 lg:pt-16 lg:pb-20 relative overflow-hidden">
        {/* Subtle Ambient Top Glow */}
        <div 
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] rounded-full bg-gradient-to-b from-sky-400/10 via-sky-200/15 to-transparent blur-3xl opacity-80"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            
            {/* Category Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/60 text-xs font-semibold text-sky-800">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-600 animate-pulse" aria-hidden="true" />
              <span>{seo.group || "CXdynamIQ Platform Architecture"}</span>
            </div>

            {/* Main Page H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.14]">
              {seo.h1}
            </h1>

            {/* Authoritative Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal pt-1">
              {seo.description}
            </p>

            {/* Dual CTAs: Self-Serve PLG (cxq360.ai) + Enterprise Demo */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              <a
                href="https://cxq360.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold bg-sky-700 hover:bg-sky-800 text-white rounded-xl shadow-sm transition-colors cursor-pointer"
              >
                <span>Start Free Trial on CXQ360.ai</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={() => setDemoOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 rounded-xl border border-slate-200 shadow-2xs transition-colors cursor-pointer"
              >
                <span>Book a Demo</span>
              </button>
            </div>

            {/* Trust Assurance Strip */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                14-Day Free Sandbox on CXQ360.ai
              </span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                Sub-15ms Media Latency
              </span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                Carrier-Grade 99.999% SLA
              </span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                Zero PBX Hardware
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Live Interactive Simulator / Visual Architecture Showcase */}
      <section className="py-14 sm:py-18 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold text-sky-800 uppercase tracking-wider font-mono">
              Live Product Simulation
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              See How It Operates in Production
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Test-drive the interactive workflow below to explore how {seo.h1} functions in an active enterprise deployment.
            </p>
          </div>

          {/* Interactive Simulation Frame */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-6 lg:p-8 shadow-sm">
            <ServiceExplainer path={page.path} />
          </div>
        </div>
      </section>

      {/* 5. Minimalist Architecture & Core Capabilities (2-Column Editorial Grid) */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Plain-Language Overview & Ideal Use-Cases (5 Cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-semibold text-sky-800 uppercase tracking-wider font-mono">
                  Enterprise Architecture
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  What is {seo.h1}?
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-1 font-normal">
                  {override.whatIs}
                </p>
              </div>

              {/* Who It Is Built For */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
                  Purpose-Built For:
                </h3>
                <div className="space-y-2.5">
                  {override.whoItsFor.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: 4 Concrete Business Advantages (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-semibold text-sky-800 uppercase tracking-wider font-mono">
                  Quantified Impact
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
                  Core Enterprise Advantages
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {override.benefits.map((benefit, idx) => (
                  <div 
                    key={idx} 
                    className="p-6 bg-slate-50/70 hover:bg-white rounded-2xl border border-slate-200/80 hover:border-sky-500/40 shadow-2xs hover:shadow-sm transition-all duration-200 space-y-2 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center font-mono font-bold text-xs border border-sky-100">
                        0{idx + 1}
                      </div>
                      <h4 className="font-semibold text-base text-slate-900 leading-snug">
                        {benefit.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Measurable Outcomes (Minimalist 4-Stat Strip) */}
      <section className="py-12 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
            
            <div className="pt-4 lg:pt-0 lg:px-4">
              <div className="font-headline font-bold text-3xl sm:text-4xl text-sky-700 tracking-tight tabular-nums">
                74.8%
              </div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                Average AI containment rate
              </div>
            </div>

            <div className="pt-4 lg:pt-0 lg:px-4">
              <div className="font-headline font-bold text-3xl sm:text-4xl text-emerald-700 tracking-tight tabular-nums">
                &lt;15ms
              </div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                Carrier voice streaming latency
              </div>
            </div>

            <div className="pt-4 lg:pt-0 lg:px-4">
              <div className="font-headline font-bold text-3xl sm:text-4xl text-sky-700 tracking-tight tabular-nums">
                100%
              </div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                Automated conversation QA audit scope
              </div>
            </div>

            <div className="pt-4 lg:pt-0 lg:px-4">
              <div className="font-headline font-bold text-3xl sm:text-4xl text-emerald-700 tracking-tight tabular-nums">
                -44%
              </div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                Lower Average Handle Time (AHT)
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Native Ecosystem & CRM Screen-Pop Strip */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-sky-800 uppercase tracking-wider font-mono">
              Ecosystem Compatibility
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Works Natively With Your CRM Stack
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Automatic screen-pop, bi-directional record sync, and click-to-dial with zero custom engineering.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {integrations.map((item, idx) => {
              const Logo = item.logo;
              return (
                <Link
                  key={idx}
                  href={item.path}
                  className="p-4 bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-sky-500/40 rounded-xl flex flex-col items-center text-center gap-2 transition-all duration-200 shadow-2xs group"
                >
                  <div className="w-6 h-6 text-slate-500 group-hover:text-slate-900 transition-colors">
                    <Logo className="w-full h-full" />
                  </div>
                  <span className="text-xs font-semibold text-slate-800 group-hover:text-sky-700 transition-colors truncate">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Frequently Asked Questions (Minimal Clean Accordion) */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-semibold text-sky-800 uppercase tracking-wider font-mono">
              Clear Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Key operational and architecture details about implementing {seo.h1}.
            </p>
          </div>

          <div className="space-y-3">
            {override.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-white border border-slate-200/90 rounded-xl shadow-2xs overflow-hidden transition-colors">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left font-semibold text-slate-900 text-sm hover:text-sky-700 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? "rotate-180 text-sky-700" : ""}`} aria-hidden="true" />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Related Connected Modules */}
      {related.length > 0 && (
        <section className="py-14 sm:py-18 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-sky-800 uppercase tracking-wider font-mono">
                  Connected Architecture
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Related Platform Modules
                </h2>
              </div>
              <Link href="/products" className="text-xs font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1 transition-colors">
                Explore complete platform catalog <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {related.slice(0, 4).map((card, idx) => (
                <Link
                  key={idx}
                  href={card.path}
                  className="p-5 bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-sky-500/40 rounded-xl shadow-2xs hover:shadow-sm transition-all duration-200 space-y-2.5 group flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-semibold text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-100 font-mono">
                      {card.badge || "Module"}
                    </span>
                    <h4 className="font-semibold text-sm text-slate-900 group-hover:text-sky-700 transition-colors">
                      {card.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {card.desc}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-200/60 text-xs font-semibold text-sky-700 flex items-center gap-1">
                    <span>Learn more</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 10. Light-First Minimal Pre-Footer Dual Conversion Card */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/60 text-xs font-semibold text-sky-800">
              <Sparkles className="w-3.5 h-3.5 text-sky-700" aria-hidden="true" />
              <span>Ready for Enterprise Evaluation</span>
            </div>

            <div className="space-y-3 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Ready to deploy <span className="text-sky-700">{seo.h1}</span>?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Spin up a live interactive sandbox in CXQ360.ai in 60 seconds, or book a bespoke architecture consultation with our solutions engineering team.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href="https://cxq360.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold bg-sky-700 hover:bg-sky-800 text-white rounded-xl shadow-sm transition-colors cursor-pointer"
              >
                <span>Start Free Trial on CXQ360.ai</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={() => setDemoOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl border border-slate-200 transition-colors cursor-pointer"
              >
                <span>Book Architecture Review</span>
              </button>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
              <a href="tel:+639060986036" className="flex items-center gap-1.5 hover:text-slate-900 transition-colors">
                <Phone className="w-3.5 h-3.5 text-sky-700" aria-hidden="true" />
                <span>+63 906 098 6036</span>
              </a>
              <span className="text-slate-300">•</span>
              <a href="mailto:sales@cxdynamiq.com" className="flex items-center gap-1.5 hover:text-slate-900 transition-colors">
                <Mail className="w-3.5 h-3.5 text-sky-700" aria-hidden="true" />
                <span>sales@cxdynamiq.com</span>
              </a>
              <span className="text-slate-300">•</span>
              <span>24/7 VIP Engineering Onboarding</span>
            </div>

          </div>
        </div>
      </section>

      {/* 11. Enterprise Footer */}
      <CalmFooter />

      {/* 12. Interactive Call Flow Demo Modal */}
      <InteractiveDemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />

    </main>
  );
}
