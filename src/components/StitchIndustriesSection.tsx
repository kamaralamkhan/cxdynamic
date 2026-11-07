"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Building2, 
  Network, 
  GraduationCap, 
  Store, 
  ArrowRight,
  ShieldAlert,
  HeartPulse,
  ShoppingBag,
  Truck,
  PhoneCall,
  Sparkles,
  CheckCircle2
} from "lucide-react";

export default function StitchIndustriesSection() {
  const [activeTab, setActiveTab] = useState<"all" | "bfsi" | "ecommerce" | "healthcare" | "telecom">("all");

  const industries = [
    {
      category: "bfsi",
      tag: "BFSI & FinTech",
      icon: Building2,
      title: "Banking & Financial Services",
      desc: "Deploy PCI-DSS Level 1 compliant voicebots and secure WhatsApp channels for autonomous fraud alerts, loan status lookups, KYC verification, and frictionless account balance checks.",
      badges: ["PCI-DSS Compliant IVR", "Sub-120ms Core Banking Sync", "Voice Biometric Auth"],
      href: "/enterprise",
      useCase: "AI Voicebot authenticates caller via OTP and resolves 74% of balance & card inquiry volume with zero human wait time."
    },
    {
      category: "bfsi",
      tag: "Claims & Underwriting",
      icon: ShieldAlert,
      title: "Insurance & Claims Triage",
      desc: "Accelerate First Notice of Loss (FNOL) filings, automate policy renewals via WhatsApp carousels, and guide policyholders through claims tracking with real-time sentiment alerts.",
      badges: ["Automated FNOL Intake", "WhatsApp Policy Issuance", "Real-Time Sentiment Alerts"],
      href: "/enterprise",
      useCase: "Instant photo submission via WhatsApp for accident claims automatically ingested into CRM claims workflow."
    },
    {
      category: "healthcare",
      tag: "Clinical Care",
      icon: HeartPulse,
      title: "Healthcare & Telehealth",
      desc: "HIPAA-compliant patient communications with intelligent doctor scheduling, automated prescription refill reminders, and emergency triage routing that prioritizes acute caller signals.",
      badges: ["HIPAA Verified Cloud", "EHR / Epic / Cerner Sync", "Emergency Intent Triage"],
      href: "/enterprise",
      useCase: "Intelligent triage routing recognizes medical urgency signals in speech and escalates to registered nurses in <3 seconds."
    },
    {
      category: "ecommerce",
      tag: "Retail & D2C",
      icon: ShoppingBag,
      title: "E-Commerce & Retail",
      desc: "Turn delivery delays into brand loyalty. Let customers track shipments, reschedule courier delivery windows, or initiate instant returns through WhatsApp, SMS, or natural voice.",
      badges: ["Shopify & NetSuite Sync", "Sub-Second Return Labels", "Cart Recovery Broadcasts"],
      href: "/small-business",
      useCase: "Automated address change via WhatsApp modifies courier dispatch coordinates via API with zero human agent involvement."
    },
    {
      category: "ecommerce",
      tag: "Freight & Delivery",
      icon: Truck,
      title: "Logistics & Supply Chain",
      desc: "Empower drivers and dispatchers with hands-free voice telephony, real-time geofence arrival alerts, and automated exception management for high-volume delivery operations.",
      badges: ["Driver Hands-Free IVR", "Live Geofence Triggers", "Proof of Delivery Broadcasts"],
      href: "/enterprise",
      useCase: "Driver voicebot updates delivery status in ERP hands-free while on the road, eliminating dispatcher call delays."
    },
    {
      category: "telecom",
      tag: "Carriers & ISPs",
      icon: PhoneCall,
      title: "Telecom & Service Providers",
      desc: "Handle massive storm-driven outage surges without busy signals. Deflect 80%+ of billing and network inquiries to conversational AI while keeping SIP trunk latency under 20ms.",
      badges: ["Surge Auto-Scaling", "Carrier SIP Interconnect", "Outage IVR Deflection"],
      href: "/enterprise",
      useCase: "Dynamic outage voice tree detects caller geographic exchange and proactively announces local restoration ETA."
    },
    {
      category: "all",
      tag: "High-Volume Outreach",
      icon: Network,
      title: "BPO & Shared Services",
      desc: "Multi-tenant campaign management enabling supervisors to assign hundreds of seats to distinct clients on the fly with per-client billing, isolated IVRs, and real-time QA compliance.",
      badges: ["Multi-Tenant Segregation", "Real-Time Supervisor Barge-In", "Automated Client SLA Audits"],
      href: "/bpo",
      useCase: "Supervisors silently monitor 40 agents simultaneously with AI-generated live sentiment and compliance risk alerts."
    },
    {
      category: "all",
      tag: "Campus Outreach",
      icon: GraduationCap,
      title: "Education & Admissions",
      desc: "Power rapid prospective student outreach campaigns with blended WhatsApp and high-velocity dialers, connecting admissions counselors with qualified candidates in seconds.",
      badges: ["High Outreach Contact Rates", "WhatsApp Broadcast Sync", "Lead Stage Automations"],
      href: "/education",
      useCase: "Prospective student web inquiry triggers automated WhatsApp prospectus and optional counselor callback in 60s."
    },
  ];

  const filteredIndustries = activeTab === "all" 
    ? industries 
    : industries.filter((ind) => ind.category === activeTab || ind.category === "all");

  return (
    <section className="w-full py-16 lg:py-24 bg-slate-50 border-y border-slate-200" id="industries">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs text-xs font-semibold text-sky-800 mb-3.5">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" aria-hidden="true" />
            <span>Vertical AI &amp; Omnichannel Blueprints</span>
          </div>
          <h2 className="font-headline font-semibold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight leading-snug">
            Purpose-built for demanding, high-volume sectors.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            From regulated banking compliance to D2C delivery triage, explore how enterprise organizations configure CXDYNAMIQ to outpace competitors.
          </p>

          {/* Industry Category Filter Tabs */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: "All Sectors (8 Blueprints)" },
              { id: "bfsi", label: "Banking & Insurance" },
              { id: "healthcare", label: "Healthcare" },
              { id: "ecommerce", label: "Retail & Logistics" },
              { id: "telecom", label: "Telecom & Service Providers" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-sky-700 text-white shadow-2xs"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredIndustries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.title}
                className="p-6 sm:p-8 rounded-3xl bg-white shadow-sm border border-slate-200 hover:shadow-md hover:border-sky-400 transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-800 border border-sky-100">
                      {ind.tag}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-sky-700 border border-slate-100">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="font-headline font-semibold text-xl text-slate-900">
                    {ind.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {ind.desc}
                  </p>

                  {/* Concrete Use Case Blueprint Banner */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 space-y-1">
                    <div className="flex items-center gap-1.5 font-semibold text-slate-900 font-mono text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Enterprise Outcome Blueprint:</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed pl-5">
                      {ind.useCase}
                    </p>
                  </div>

                  {/* Feature Badges */}
                  <div className="pt-1 flex flex-wrap gap-2 text-xs">
                    {ind.badges.map((b) => (
                      <span
                        key={b}
                        className="px-2.5 py-1 rounded-lg bg-sky-50/60 text-slate-700 font-medium border border-sky-100 text-[11px]"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={ind.href}
                    className="inline-flex items-center text-xs font-semibold text-sky-700 hover:text-sky-800 transition-colors group cursor-pointer"
                  >
                    <span>View {ind.title} Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                  <a
                    href="https://cxq360.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold text-slate-500 hover:text-sky-700"
                  >
                    Try in CXQ360.ai →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
