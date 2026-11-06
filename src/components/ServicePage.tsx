"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CalmFooter from "@/components/CalmFooter";
import TrustStrip from "@/components/TrustStrip";
import ServiceExplainer from "@/components/explainers/ServiceExplainers";
import { getSeo } from "@/content/seo";
import { getRelatedServices } from "@/content/related";
import { getServiceOverride } from "@/content/overrides/serviceData";
import { PageData } from "@/lib/content";
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  ChevronDown, 
  Send, 
  Rocket, 
  Calendar, 
  MousePointer, 
  Flame,
  ShieldCheck,
  Cpu
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

  // Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    interest: seo.h1,
    location: "",
    whatsapp: "",
    brief: "",
    agreeTerms: true,
    botcheck: "",
  });

  // Open FAQ accordion items
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Extract key features from scraped blocks
  const listItems = page.blocks.filter((b) => b.type === "li" && b.text).map((b) => b.text || "");
  const h3Headings = page.blocks.filter((b) => ["h2", "h3", "h4"].includes(b.type) && b.text).map((b) => b.text || "");
  const rawFeatures = listItems.length > 0 ? listItems : h3Headings.slice(0, 8);
  const features = rawFeatures.length >= 3 ? rawFeatures : [
    "Enterprise Cloud Telephony with Sub-Second SIP Carrier Routing",
    "Real-Time Supervisor Monitoring, Whisper Coaching & Call Barge-in",
    "Native 2-Way CRM Integration with Instant Screen-Pop",
    "Detailed Analytics Dashboards with First-Contact Resolution Metrics",
  ];

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.botcheck) return; // Honeypot guard
    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
    if (endpoint) {
      try {
        await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      } catch (err) {
        console.warn("Form submission fallback", err);
      }
    }
    setFormSubmitted(true);
  };

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
      {/* 0. Navigation */}
      <Navbar />

      {/* 1. Breadcrumb Bar */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-slate-200 py-3 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" aria-hidden="true" />
          <span className="text-slate-400">{seo.group || "Solutions"}</span>
          <ChevronRight className="w-3 h-3 text-slate-400" aria-hidden="true" />
          <span className="text-slate-900 font-semibold truncate max-w-xs">{seo.h1}</span>
        </div>
      </nav>

      {/* 2. Hero Section: Exactly ONE H1, Value Statement, CTAs */}
      <section id="home" className="bg-white border-b border-slate-200 pt-12 pb-16 lg:pt-16 lg:pb-20 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-100 text-xs font-semibold">
              <Cpu className="w-3.5 h-3.5 text-sky-600" aria-hidden="true" />
              <span>{seo.group || "Enterprise Telephony"}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.14]">
              {seo.h1}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {seo.description}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold bg-sky-700 hover:bg-sky-800 text-white rounded-xl shadow-sm transition-colors cursor-pointer"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <Link
                href="/contact-us#quote"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl border border-slate-200 transition-colors"
              >
                <span>Talk to an expert</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Shared Trust & SLA Strip */}
      <TrustStrip />

      {/* 3. "What is {service}?" Plain-Language Definition (H2) */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold text-sky-700">
              Overview &amp; Definition
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              What is {seo.h1}?
            </h2>
            <p className="text-base text-slate-600 leading-relaxed pt-2">
              {override.whatIs}
            </p>
          </div>
        </div>
      </section>

      {/* 4. Interactive Explainer: "See how it works" */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold text-sky-700">
              Interactive architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              See How It Works
            </h2>
            <p className="text-sm text-slate-600">
              Interact with the live simulator below to explore how {seo.h1} functions in an active production call center.
            </p>
          </div>

          {/* Mouse-Driven Interactive Explainer */}
          <div className="max-w-4xl">
            <ServiceExplainer path={page.path} />
          </div>
        </div>
      </section>

      {/* 5. Key Features (H2) */}
      <section id="services" className="py-20 bg-white border-b border-slate-200 scroll-mt-12">
        <div id="features" className="sr-only" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold text-sky-700">
              Core Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Key Features Built for Enterprise Reliability
            </h2>
            <p className="text-sm text-slate-600">
              Engineered with carrier-grade SIP telephony, automated failover, and sub-second queue dispatching.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="p-6 bg-white border border-slate-200 rounded-2xl space-y-3 hover:border-slate-300 shadow-sm transition-colors">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center font-bold text-xs">
                  0{idx + 1}
                </div>
                <h3 className="font-display font-bold text-base text-slate-900">
                  {feature}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Delivered with 99.9% uptime SLA, granular supervisory logging, and real-time dashboard visibility.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Benefits & Outcomes (H2) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold text-sky-700">
              Measurable ROI
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Measurable Outcomes for Your Business
            </h2>
            <p className="text-sm text-slate-600">
              How deploying {seo.h1} impacts your operational efficiency and customer retention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
            {override.benefits.map((benefit, idx) => (
              <div key={idx} className="p-6 sm:p-7 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-emerald-600">
                  <CheckCircle2 className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <h3 className="font-display font-bold text-lg text-slate-900">{benefit.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Who It's For + Works With (Integration Logos) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Who It's For */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold text-sky-700">
                  Ideal Candidates
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Who Is {seo.h1} For?
                </h2>
              </div>

              <div className="space-y-3">
                {override.whoItsFor.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Works With Native Integrations */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold text-sky-700">
                  Ecosystem Compatibility
                </span>
                <h3 className="font-display font-extrabold text-2xl text-slate-900">
                  Works With Your Current Stack
                </h3>
                <p className="text-xs text-slate-500">
                  Native browser screen-pop and 2-way data sync with no code required.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {integrations.map((item, idx) => {
                  const Logo = item.logo;
                  return (
                    <Link
                      key={idx}
                      href={item.path}
                      className="p-3.5 bg-white border border-slate-200 hover:border-sky-500 rounded-xl flex items-center gap-2.5 transition-colors shadow-2xs group"
                    >
                      <div className="w-5 h-5 text-slate-400 group-hover:text-slate-900 transition-colors">
                        <Logo className="w-full h-full" />
                      </div>
                      <span className="text-xs font-semibold text-slate-800 group-hover:text-slate-950 transition-colors truncate">
                        {item.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. How to Get Started: 4-Step Rollout */}
      <section className="py-20 bg-sky-50/50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-sky-800">
              Turnkey Onboarding
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              How to Get Started
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Deploy {seo.h1} into production in under 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold">
                <MousePointer className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="text-xs font-semibold text-sky-700">Step 01</div>
              <h3 className="font-display font-bold text-base text-slate-900">Choose A Product</h3>
              <p className="text-xs text-slate-600">
                Identify your required seat count and calling features.
              </p>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
                <Calendar className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="text-xs font-semibold text-indigo-700">Step 02</div>
              <h3 className="font-display font-bold text-base text-slate-900">Request A Meeting</h3>
              <p className="text-xs text-slate-600">
                Connect with our solutions engineers to review your carrier lines and numbers.
              </p>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold">
                <Rocket className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="text-xs font-semibold text-sky-700">Step 03</div>
              <h3 className="font-display font-bold text-base text-slate-900">Receive Rocket Plan</h3>
              <p className="text-xs text-slate-600">
                Get a customized technical blueprint and transparent pricing in minutes.
              </p>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <Flame className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="text-xs font-semibold text-emerald-700">Step 04</div>
              <h3 className="font-display font-bold text-base text-slate-900">Let&apos;s Make It Happen</h3>
              <p className="text-xs text-slate-600">
                Go live within 24 hours with dedicated VIP engineer onboarding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ Section (H2) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-semibold text-sky-700">
              Clear Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Key operational and architecture details about implementing {seo.h1}.
            </p>
          </div>

          <div className="space-y-3">
            {override.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left font-semibold text-slate-900 text-sm hover:text-sky-700 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? "rotate-180 text-sky-600" : ""}`} aria-hidden="true" />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. Related Services */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-sky-700">
                Connected Solutions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Related Platform Modules
              </h2>
            </div>
            <Link href="/contact-us#quote" className="text-xs font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1 transition-colors">
              Explore full platform catalog <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {related.map((card, idx) => (
              <Link
                key={idx}
                href={card.path}
                className="p-6 bg-white border border-slate-200 hover:border-sky-500 rounded-2xl shadow-sm transition-colors space-y-3 group flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                    {card.badge || "Solution"}
                  </span>
                  <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-sky-700 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-xs font-semibold text-sky-700 flex items-center gap-1">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Request a Quote / Free-Trial Form (id="contact" & id="quote" & id="quote-form") */}
      <section id="contact" className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-white/10 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Value Pitch */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
                <span>Production-ready deployment</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Request a Quote &amp; Demo for <span className="text-sky-400">{seo.h1}</span>
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                Connect directly with a CXDYNAMIQ deployment engineer. We configure custom pricing based on your active agent count and migrate your phone numbers with zero downtime.
              </p>

              <div className="space-y-2 text-xs text-slate-300 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                  <span>Zero hardware or upfront card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                  <span>Go live within 24 hours with VIP support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                  <span>Full native CRM screen-pop integration included</span>
                </div>
              </div>
            </div>

            {/* Right White Form Card with anchor targets */}
            <div id="quote" className="lg:col-span-7 scroll-mt-28">
              <div id="quote-form" className="p-6 sm:p-8 bg-white text-slate-900 border border-slate-200 rounded-2xl shadow-xl scroll-mt-28">
                {formSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
                    </div>
                    <h3 className="font-display font-extrabold text-2xl text-slate-900">
                      Request Received!
                    </h3>
                    <p className="text-xs text-slate-600 max-w-md mx-auto">
                      A senior CXDYNAMIQ deployment engineer will contact you via phone and email within 30 minutes with your custom quotation.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    {/* Honeypot anti-spam */}
                    <input
                      type="text"
                      name="botcheck"
                      value={formData.botcheck}
                      onChange={(e) => setFormData({ ...formData, botcheck: e.target.value })}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Rahul Sharma"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs bg-slate-50 focus:bg-white focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+63 917 123 4567"
                          value={formData.mobile}
                          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs bg-slate-50 focus:bg-white focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Business Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="name@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs bg-slate-50 focus:bg-white focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Interested In</label>
                        <select
                          value={formData.interest}
                          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs bg-slate-50 focus:bg-white focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600 transition-colors"
                        >
                          <option value={seo.h1}>{seo.h1}</option>
                          <option value="Inbound Calling">Inbound Calling</option>
                          <option value="Outbound Calling">Outbound Calling</option>
                          <option value="Blended Call Centre">Blended Call Centre</option>
                          <option value="Auto Dialer">Auto Dialer</option>
                          <option value="CTI Integration">CTI Integration</option>
                          <option value="Enterprise Phone System">Enterprise Phone System</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Your Location</label>
                        <input
                          type="text"
                          placeholder="e.g. Bangalore, India / Singapore"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs bg-slate-50 focus:bg-white focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">WhatsApp No.</label>
                        <input
                          type="tel"
                          placeholder="+63 917 123 4567"
                          value={formData.whatsapp}
                          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs bg-slate-50 focus:bg-white focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Project Details / Requirements (Optional)</label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your active seat count, current phone setup, and target go-live date..."
                        value={formData.brief}
                        onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs bg-slate-50 focus:bg-white focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600 transition-colors"
                      />
                    </div>

                    <div className="flex items-center gap-2 pt-1 text-xs text-slate-600">
                      <input
                        type="checkbox"
                        id="terms-check"
                        required
                        checked={formData.agreeTerms}
                        onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                        className="rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                      />
                      <label htmlFor="terms-check" className="cursor-pointer">
                        I agree to CXDYNAMIQ&apos;s{" "}
                        <Link href="/terms" className="text-sky-700 font-semibold hover:underline">
                          Terms &amp; Conditions
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy-policy" className="text-sky-700 font-semibold hover:underline">
                          Privacy Policy
                        </Link>
                        .
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl text-xs font-semibold bg-sky-700 hover:bg-sky-800 text-white flex items-center justify-center gap-2 cursor-pointer shadow-sm mt-2 transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Book a Demo</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 12. Footer with Legal Links & Floating WhatsApp */}
      <CalmFooter />
    </main>
  );
}
