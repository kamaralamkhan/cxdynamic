"use client";

import { useState } from "react";
import { 
  RefreshCw, 
  Terminal, 
  ShieldCheck, 
  Webhook, 
  Layers,
  ArrowRight
} from "lucide-react";
import { 
  SalesforceLogo, 
  ZohoLogo, 
  ZendeskLogo, 
  WhatsAppLogo, 
  FreshdeskLogo,
  HubSpotLogo 
} from "@/components/IntegrationLogos";

export default function StitchIntegrationsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <section className="w-full bg-gradient-to-b from-[#eef4ff]/70 via-[#eef4ff]/40 to-[#f8f9ff] py-16 lg:py-24 relative overflow-hidden border-b border-slate-200" id="integrations">
      
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-60" aria-hidden="true">
        <div className="w-[850px] h-[480px] bg-gradient-to-tr from-sky-200/30 via-blue-200/15 to-emerald-200/20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top 100+ Enterprise Platforms Logo Grid Strip */}
        <div className="mb-12 pb-10 border-b border-slate-200/70">
          <div className="text-center mb-6">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500 font-mono">
              Integrates with 100+ Enterprise Platforms &amp; CRMs
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-6 gap-3 sm:gap-4 items-center max-w-4xl mx-auto">
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-sky-300 transition-colors flex flex-col items-center justify-center gap-1.5 cursor-pointer">
              <ZohoLogo className="h-5 w-auto" />
              <span className="text-[11px] font-semibold text-slate-700">Zoho CRM</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-sky-300 transition-colors flex flex-col items-center justify-center gap-1.5 cursor-pointer">
              <SalesforceLogo className="h-5 w-auto" />
              <span className="text-[11px] font-semibold text-slate-700">Salesforce</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-sky-300 transition-colors flex flex-col items-center justify-center gap-1.5 cursor-pointer">
              <HubSpotLogo className="h-5 w-auto" />
              <span className="text-[11px] font-semibold text-slate-700">HubSpot</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-sky-300 transition-colors flex flex-col items-center justify-center gap-1.5 cursor-pointer">
              <ZendeskLogo className="h-5 w-auto" />
              <span className="text-[11px] font-semibold text-slate-700">Zendesk</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-sky-300 transition-colors flex flex-col items-center justify-center gap-1.5 cursor-pointer">
              <FreshdeskLogo className="h-5 w-auto" />
              <span className="text-[11px] font-semibold text-slate-700">Freshdesk</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-sky-300 transition-colors flex flex-col items-center justify-center gap-1.5 cursor-pointer">
              <WhatsAppLogo className="h-5 w-auto" />
              <span className="text-[11px] font-semibold text-slate-700">WhatsApp</span>
            </div>
          </div>
        </div>

        {/* Section Header with Minimal Font Ratio */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs mb-3 text-xs font-semibold text-sky-800">
            <span className="relative flex h-2 w-2">
              <span aria-hidden="true" className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Enterprise Ecosystem Connectivity</span>
            <span className="text-slate-300">•</span>
            <span className="text-emerald-700 font-medium">100+ Live Connectors</span>
          </div>

          <h2 className="font-headline font-semibold text-2xl sm:text-3xl lg:text-[34px] text-slate-900 tracking-tight leading-snug">
            Seamless Bi-directional Integration Across Your Entire Stack
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Synchronize voice records, live call transcripts, SMS logs, and AI disposition tags directly with your existing CRM and data pipelines in sub-120ms with zero custom code.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: "All Ecosystem (120+)" },
              { id: "crm", label: "CRMs & Pipeline" },
              { id: "helpdesk", label: "Helpdesk & CX" },
              { id: "data", label: "Data Warehouse & Analytics" },
              { id: "messaging", label: "Chat & Messaging" }
            ].map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                  activeFilter === filter.id
                    ? "bg-sky-700 text-white shadow-2xs"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Central Orchestration Mesh Canvas with Parabolic Drifting Nodes */}
        <div className="relative w-full min-h-[460px] sm:min-h-[500px] rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-10 flex flex-col justify-between select-none">
          
          {/* Subtle Mesh Grid */}
          <div 
            className="absolute inset-0 bg-[radial-gradient(#0369a1_0.75px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" 
            aria-hidden="true"
          />

          {/* SVG Connector Signal Rays */}
          <svg className="absolute inset-0 w-full h-full text-sky-700/30 pointer-events-none z-0" fill="none" preserveAspectRatio="none" viewBox="0 0 1000 500" aria-hidden="true">
            <defs>
              <linearGradient id="paraMeshGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0369a1" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#00724e" stopOpacity="0.7" />
              </linearGradient>
            </defs>
            <path d="M 80 340 C 240 120, 380 90, 500 250 C 620 410, 780 380, 920 180" stroke="url(#paraMeshGrad)" strokeWidth="2" className="sync-glow-ray" />
            <path d="M 100 180 C 260 380, 400 400, 500 250 C 600 100, 760 110, 900 320" stroke="url(#paraMeshGrad)" strokeWidth="1.5" strokeDasharray="6 8" opacity="0.4" />
            <path d="M 200 440 C 350 430, 420 310, 500 250 C 580 190, 650 70, 800 60" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="4 6" opacity="0.35" />
          </svg>

          {/* Top Live Sync Status Bar */}
          <div className="relative z-20 flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-slate-900">CXDYNAMIQ Unified Sync Mesh</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-mono font-semibold border border-emerald-100">
                Real-Time Webhooks
              </span>
            </div>
            <div className="hidden md:flex items-center gap-4 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sky-700" />
                CRM Ingestion: 84ms
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                Dual-way SSL Peered
              </span>
            </div>
          </div>

          {/* Middle Floating Core and Surrounding Ecosystem Satellite Nodes */}
          <div className="relative z-10 w-full h-[320px] sm:h-[340px] my-4">
            
            {/* Central CXDYNAMIQ CORE Node */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-700 to-sky-900 text-white shadow-xl flex items-center justify-center ring-4 ring-sky-100 transition-transform hover:scale-105 cursor-pointer">
                <Layers className="w-8 h-8 text-white" />
              </div>
              <div className="mt-2 px-3 py-1 rounded-full bg-white shadow-md border border-slate-200 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-bold font-headline text-slate-900">CXDYNAMIQ CORE</span>
              </div>
              <span className="text-[10px] text-sky-700 font-mono font-semibold mt-0.5">99.999% SLA Gateway</span>
            </div>

            {/* Satellite Node 1: Salesforce */}
            <div className="absolute left-[4%] sm:left-[6%] top-[22%] z-20 parabolic-node-1 group cursor-pointer">
              <div className="p-3 sm:px-4 sm:py-2.5 rounded-2xl bg-white shadow-md border border-slate-200 hover:border-sky-500 transition-all flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-700 font-bold text-xs font-headline">
                  SF
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Salesforce</div>
                  <div className="text-[10px] text-emerald-700 font-mono font-semibold">• Sub-120ms Sync</div>
                </div>
              </div>
            </div>

            {/* Satellite Node 2: HubSpot */}
            <div className="absolute left-[18%] sm:left-[20%] top-[4%] z-20 parabolic-node-2 group cursor-pointer">
              <div className="p-3 sm:px-4 sm:py-2.5 rounded-2xl bg-white shadow-md border border-slate-200 hover:border-sky-500 transition-all flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xs font-headline">
                  HS
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">HubSpot CRM</div>
                  <div className="text-[10px] text-slate-500 font-mono">• Bi-directional 2-Way</div>
                </div>
              </div>
            </div>

            {/* Satellite Node 3: WhatsApp */}
            <div className="absolute left-[8%] sm:left-[12%] bottom-[12%] z-20 parabolic-node-3 group cursor-pointer">
              <div className="p-3 sm:px-4 sm:py-2.5 rounded-2xl bg-white shadow-md border border-slate-200 hover:border-sky-500 transition-all flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs font-headline">
                  WA
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">WhatsApp Business</div>
                  <div className="text-[10px] text-emerald-700 font-mono font-semibold">• Meta Cloud API</div>
                </div>
              </div>
            </div>

            {/* Satellite Node 4: Zendesk */}
            <div className="absolute left-[30%] sm:left-[33%] bottom-[4%] z-20 parabolic-node-1 group cursor-pointer">
              <div className="p-3 sm:px-4 sm:py-2.5 rounded-2xl bg-white shadow-md border border-slate-200 hover:border-sky-500 transition-all flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center font-bold text-xs font-headline">
                  ZD
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Zendesk</div>
                  <div className="text-[10px] text-slate-500 font-mono">• Auto Ticket Pop</div>
                </div>
              </div>
            </div>

            {/* Satellite Node 5: Stripe */}
            <div className="absolute right-[4%] sm:right-[8%] top-[12%] z-20 parabolic-node-2 group cursor-pointer">
              <div className="p-3 sm:px-4 sm:py-2.5 rounded-2xl bg-white shadow-md border border-slate-200 hover:border-sky-500 transition-all flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold text-xs font-headline">
                  ST
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Stripe</div>
                  <div className="text-[10px] text-emerald-700 font-mono font-semibold">• Billing Telemetry</div>
                </div>
              </div>
            </div>

            {/* Satellite Node 6: Snowflake */}
            <div className="absolute right-[18%] sm:right-[22%] top-[3%] z-20 parabolic-node-3 group cursor-pointer">
              <div className="p-3 sm:px-4 sm:py-2.5 rounded-2xl bg-white shadow-md border border-slate-200 hover:border-sky-500 transition-all flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center font-bold text-xs font-headline">
                  SF
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Snowflake</div>
                  <div className="text-[10px] text-slate-500 font-mono">• Lossless SQL Stream</div>
                </div>
              </div>
            </div>

            {/* Satellite Node 7: Teams */}
            <div className="absolute right-[4%] sm:right-[6%] bottom-[20%] z-20 parabolic-node-1 group cursor-pointer">
              <div className="p-3 sm:px-4 sm:py-2.5 rounded-2xl bg-white shadow-md border border-slate-200 hover:border-sky-500 transition-all flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center font-bold text-xs font-headline">
                  MS
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Microsoft Teams</div>
                  <div className="text-[10px] text-slate-500 font-mono">• Direct SIP Routing</div>
                </div>
              </div>
            </div>

            {/* Satellite Node 8: Zoho */}
            <div className="absolute right-[24%] sm:right-[28%] bottom-[6%] z-20 parabolic-node-2 group cursor-pointer">
              <div className="p-3 sm:px-4 sm:py-2.5 rounded-2xl bg-white shadow-md border border-slate-200 hover:border-sky-500 transition-all flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center font-bold text-xs font-headline">
                  ZH
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Zoho CRM &amp; Desk</div>
                  <div className="text-[10px] text-emerald-700 font-mono font-semibold">• Zero-Code Hook</div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom 4 Enterprise Integration Capabilities */}
          <div className="relative z-20 pt-4 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center text-sky-800 shrink-0">
                <RefreshCw className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-900">Bi-directional Sync</div>
                <div className="text-[10px] text-slate-500 font-mono">Sub-120ms latency SLA</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-900">Zero-Code Pipelines</div>
                <div className="text-[10px] text-slate-500">Turnkey pre-built recipes</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-900">SOC 2 &amp; GDPR Compliant</div>
                <div className="text-[10px] text-slate-500">Encrypted audio &amp; logs</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Webhook className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-900">Custom Webhooks</div>
                <div className="text-[10px] text-slate-500 font-mono">GraphQL &amp; REST APIs</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
