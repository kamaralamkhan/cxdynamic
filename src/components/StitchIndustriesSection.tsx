"use client";

import Link from "next/link";
import { Building2, Network, GraduationCap, Store, ArrowRight } from "lucide-react";

export default function StitchIndustriesSection() {
  const industries = [
    {
      tag: "Enterprise Support",
      icon: Building2,
      title: "Global Enterprises",
      desc: "Manage thousands of concurrent seats across multi-region deployments with centralized SAML SSO, granular role permissions, and SOC 2 Type II compliance.",
      badges: ["99.99% Guaranteed SLA", "Global DID Provisioning", "Dedicated SIP Trunking"],
      href: "/enterprise",
    },
    {
      tag: "Outsourced Contact Centers",
      icon: Network,
      title: "BPO & Shared Services",
      desc: "Multi-tenant campaign management that enables supervisors to assign seats to distinct clients on the fly with per-client billing and separate IVR pathways.",
      badges: ["Multi-tenant Segregation", "Real-time Agent Monitoring", "Automated Client Reporting"],
      href: "/bpo",
    },
    {
      tag: "Admissions & Outreach",
      icon: GraduationCap,
      title: "Education & EdTech",
      desc: "Power rapid admissions outreach campaigns with blended WhatsApp and telephony, helping admissions counselors connect with prospective students instantly.",
      badges: ["High Outreach Contact Rates", "WhatsApp Broadcast Sync", "Lead Stage Automations"],
      href: "/education",
    },
    {
      tag: "Fast-Growing Teams",
      icon: Store,
      title: "Growing Businesses",
      desc: "Project an enterprise-grade phone presence without complex telecommunication engineers. Set up business hours, auto-attendants, and call recording in minutes.",
      badges: ["Zero Setup Fees", "Mobile Softphone App", "Flat, Transparent Pricing"],
      href: "/small-business",
    },
  ];

  return (
    <section className="w-full py-20 bg-slate-50 border-y border-slate-200" id="industries">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-800 font-headline">
            Tailored Architecture
          </span>
          <h2 className="font-headline font-semibold text-2xl sm:text-3xl lg:text-[34px] text-slate-900 mt-2 tracking-tight leading-snug">
            Purpose-built for demanding sectors
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2.5 max-w-2xl font-normal leading-relaxed">
            Discover how organizations across industries configure CXDYNAMIQ to outpace their competitors.
          </p>
        </div>

        {/* 4 Wide Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.title}
                className="p-8 rounded-3xl bg-white shadow-sm border border-slate-200/90 hover:shadow-md hover:border-sky-500/40 transition-all duration-200 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-100">
                      {ind.tag}
                    </span>
                    <Icon className="w-5 h-5 text-slate-400" aria-hidden="true" />
                  </div>
                  <h3 className="font-headline font-semibold text-xl text-slate-900">
                    {ind.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {ind.desc}
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2 text-xs">
                    {ind.badges.map((b) => (
                      <span
                        key={b}
                        className="px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 font-medium border border-slate-200"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href={ind.href}
                    className="inline-flex items-center text-xs font-semibold text-sky-700 hover:text-sky-800 transition-colors group"
                  >
                    <span>Explore {ind.title} Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

