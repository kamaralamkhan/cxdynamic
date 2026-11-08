"use client";

import { useState } from "react";
import { 
  RefreshCw, 
  Terminal, 
  ShieldCheck, 
  Webhook, 
  Layers,
  CheckCircle2,
  Cpu,
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

interface ConnectorNode {
  id: string;
  name: string;
  category: "crm" | "helpdesk" | "data" | "messaging";
  badge: string;
  badgeColor: string;
  subtext: string;
  latency: string;
  protocol: string;
  // Desktop orbital coordinates in % (calibrated with SVG lines)
  desktopStyle: {
    left: string;
    top: string;
  };
  // Line endpoint in 1000x440 viewBox
  anchorPoint: {
    x: number;
    y: number;
  };
  // Path from Core (500, 220) to this anchor
  pathD: string;
}

const CONNECTORS: ConnectorNode[] = [
  {
    id: "hubspot",
    name: "HubSpot CRM",
    category: "crm",
    badge: "HS",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    subtext: "Bi-directional 2-Way",
    latency: "84ms",
    protocol: "REST / Webhooks",
    desktopStyle: { left: "19%", top: "4%" },
    anchorPoint: { x: 310, y: 70 },
    pathD: "M 450 185 C 410 140, 360 85, 310 70",
  },
  {
    id: "salesforce",
    name: "Salesforce",
    category: "crm",
    badge: "SF",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    subtext: "Sub-120ms Sync",
    latency: "92ms",
    protocol: "OpenCTI & REST",
    desktopStyle: { left: "4%", top: "30%" },
    anchorPoint: { x: 195, y: 158 },
    pathD: "M 430 220 C 350 210, 270 175, 195 158",
  },
  {
    id: "whatsapp",
    name: "WhatsApp Business",
    category: "messaging",
    badge: "WA",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
    subtext: "Meta Cloud API",
    latency: "68ms",
    protocol: "Webhook Stream",
    desktopStyle: { left: "8%", top: "68%" },
    anchorPoint: { x: 235, y: 325 },
    pathD: "M 450 255 C 380 280, 310 310, 235 325",
  },
  {
    id: "zendesk",
    name: "Zendesk",
    category: "helpdesk",
    badge: "ZD",
    badgeColor: "bg-slate-100 text-slate-800 border-slate-200",
    subtext: "Auto Ticket Pop",
    latency: "110ms",
    protocol: "Voice SDK & API",
    desktopStyle: { left: "30%", top: "84%" },
    anchorPoint: { x: 375, y: 370 },
    pathD: "M 480 265 C 450 300, 410 340, 375 370",
  },
  {
    id: "snowflake",
    name: "Snowflake",
    category: "data",
    badge: "SF",
    badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
    subtext: "Lossless SQL Stream",
    latency: "140ms",
    protocol: "Snowpipe Streaming",
    desktopStyle: { left: "66%", top: "4%" },
    anchorPoint: { x: 690, y: 70 },
    pathD: "M 550 185 C 590 140, 640 85, 690 70",
  },
  {
    id: "stripe",
    name: "Stripe",
    category: "data",
    badge: "ST",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    subtext: "Billing Telemetry",
    latency: "76ms",
    protocol: "Signed Webhooks",
    desktopStyle: { left: "80%", top: "24%" },
    anchorPoint: { x: 800, y: 131 },
    pathD: "M 570 205 C 650 180, 720 145, 800 131",
  },
  {
    id: "teams",
    name: "Microsoft Teams",
    category: "messaging",
    badge: "MS",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    subtext: "Direct SIP Routing",
    latency: "12ms",
    protocol: "Direct Routing SIP",
    desktopStyle: { left: "78%", top: "64%" },
    anchorPoint: { x: 780, y: 305 },
    pathD: "M 550 255 C 630 275, 700 295, 780 305",
  },
  {
    id: "zoho",
    name: "Zoho CRM & Desk",
    category: "crm",
    badge: "ZH",
    badgeColor: "bg-red-50 text-red-700 border-red-200",
    subtext: "Zero-Code Hook",
    latency: "88ms",
    protocol: "PhoneBridge CTI",
    desktopStyle: { left: "56%", top: "84%" },
    anchorPoint: { x: 625, y: 370 },
    pathD: "M 520 265 C 550 300, 590 340, 625 370",
  },
];

export default function StitchIntegrationsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredConnectors = activeFilter === "all"
    ? CONNECTORS
    : CONNECTORS.filter((c) => c.category === activeFilter);

  return (
    <section
      className="w-full bg-slate-50/60 py-14 sm:py-18 lg:py-24 relative overflow-hidden border-b border-slate-200"
      id="integrations"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs text-xs font-semibold text-sky-800">
            <span className="relative flex h-2 w-2">
              <span aria-hidden="true" className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Enterprise Ecosystem Connectivity</span>
            <span className="text-slate-300">•</span>
            <span className="text-emerald-700 font-semibold">100+ Live Connectors</span>
          </div>

          <h2 className="font-display font-semibold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight leading-snug">
            Seamless Bi-directional Integration Across Your Entire Stack
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Synchronize voice records, live call transcripts, SMS logs, and AI disposition tags directly with your existing CRM and data pipelines in sub-120ms with zero custom code.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: "All Ecosystem (120+)" },
              { id: "crm", label: "CRMs & Pipeline" },
              { id: "helpdesk", label: "Helpdesk & CX" },
              { id: "data", label: "Data Warehouse & Analytics" },
              { id: "messaging", label: "Chat & Messaging" },
            ].map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  activeFilter === filter.id
                    ? "bg-sky-700 text-white shadow-2xs font-semibold"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </header>

        {/* Central Orchestration Mesh Canvas */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-sm overflow-hidden p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
          
          {/* Subtle Precision Mesh Dot Pattern */}
          <div 
            className="absolute inset-0 bg-[radial-gradient(#0284c7_0.75px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" 
            aria-hidden="true"
          />

          {/* Top Live Sync Status Bar */}
          <div className="relative z-20 flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 motion-safe:animate-pulse" />
              <span className="text-xs font-bold text-slate-900">CXDYNAMIQ Unified Sync Mesh</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-mono font-semibold border border-emerald-200/60">
                Real-Time Webhooks
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                CRM Ingestion: 84ms
              </span>
              <span className="hidden sm:flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                Dual-way SSL Peered
              </span>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* DESKTOP / TABLET ORBITAL VIEW (Calibrated SVG Rays + Satellite Cards)     */}
          {/* ========================================================================= */}
          <div className="hidden md:block relative z-10 w-full h-[430px] my-2">
            
            {/* Calibrated SVG Connector Signal Rays (Directly connected to each node) */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              fill="none"
              viewBox="0 0 1000 440"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="liveRayGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0284c7" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#059669" stopOpacity="0.8" />
                </linearGradient>

                {/* Subtle core glow halo */}
                <radialGradient id="coreHalo" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#0284c7" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Core Ambient Glow */}
              <circle cx="500" cy="220" r="140" fill="url(#coreHalo)" />

              {/* Cross-system Sync Mesh Arcs */}
              <path
                d="M 195 158 C 220 100, 260 75, 310 70"
                stroke="#38bdf8"
                strokeWidth="1.2"
                strokeDasharray="3 5"
                opacity="0.25"
              />
              <path
                d="M 690 70 C 740 85, 770 110, 800 131"
                stroke="#38bdf8"
                strokeWidth="1.2"
                strokeDasharray="3 5"
                opacity="0.25"
              />
              <path
                d="M 235 325 C 280 350, 320 365, 375 370"
                stroke="#38bdf8"
                strokeWidth="1.2"
                strokeDasharray="3 5"
                opacity="0.25"
              />
              <path
                d="M 625 370 C 690 360, 730 330, 780 305"
                stroke="#38bdf8"
                strokeWidth="1.2"
                strokeDasharray="3 5"
                opacity="0.25"
              />

              {/* 8 Dedicated Direct Connector Paths to Core (500, 220) */}
              {CONNECTORS.map((connector) => {
                const isMatch = activeFilter === "all" || connector.category === activeFilter;
                return (
                  <g key={connector.id} opacity={isMatch ? 1 : 0.2} className="transition-opacity duration-300">
                    {/* Underlying Glow Path */}
                    <path
                      d={connector.pathD}
                      stroke="url(#liveRayGradient)"
                      strokeWidth={isMatch ? "2" : "1"}
                      strokeDasharray="4 6"
                      strokeLinecap="round"
                    />

                    {/* Terminal Anchor Circle at Satellite Node */}
                    <circle
                      cx={connector.anchorPoint.x}
                      cy={connector.anchorPoint.y}
                      r="3.5"
                      fill="#0284c7"
                    />
                    <circle
                      cx={connector.anchorPoint.x}
                      cy={connector.anchorPoint.y}
                      r="7"
                      fill="none"
                      stroke="#0284c7"
                      strokeWidth="1"
                      strokeOpacity="0.4"
                    />

                    {/* Animated Signal Packet along the path */}
                    {isMatch && (
                      <circle r="2.5" fill="#0284c7">
                        <animateMotion
                          path={connector.pathD}
                          dur="3.2s"
                          repeatCount="indefinite"
                          keyPoints="0;1;0"
                          keyTimes="0;0.5;1"
                        />
                      </circle>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Central CXDYNAMIQ CORE Gateway */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center">
              <div className="w-15 h-15 rounded-2xl bg-sky-700 text-white shadow-md flex items-center justify-center ring-4 ring-sky-100 transition-transform hover:scale-105 cursor-pointer">
                <Layers className="w-7 h-7 text-white" />
              </div>
              <div className="mt-2 px-3 py-1 rounded-full bg-white shadow-xs border border-slate-200 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-bold text-slate-900 tracking-tight">CXDYNAMIQ CORE</span>
              </div>
              <span className="text-[10px] text-sky-700 font-mono font-semibold mt-0.5">
                99.999% SLA Gateway
              </span>
            </div>

            {/* 8 Satellite Nodes */}
            {CONNECTORS.map((connector) => {
              const isMatch = activeFilter === "all" || connector.category === activeFilter;
              return (
                <div
                  key={connector.id}
                  style={connector.desktopStyle}
                  className={`absolute z-20 transition-all duration-300 ${
                    isMatch ? "opacity-100 scale-100" : "opacity-35 scale-95"
                  }`}
                >
                  <div className="group p-2.5 sm:px-3.5 sm:py-2 rounded-xl bg-white shadow-2xs border border-slate-200 hover:border-sky-400 hover:shadow-xs transition-all flex items-center gap-2.5 cursor-pointer">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-[11px] font-mono border ${connector.badgeColor}`}
                    >
                      {connector.badge}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 leading-tight">
                        {connector.name}
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                        • {connector.subtext}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>

          {/* ========================================================================= */}
          {/* MOBILE-OPTIMIZED HUB & SPOKE VIEW (< 768px screens)                        */}
          {/* ========================================================================= */}
          <div className="block md:hidden relative z-10 w-full my-4 space-y-4">
            
            {/* Core Gateway Header on Mobile */}
            <div className="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-sky-50/70 border border-sky-200/80 text-center">
              <div className="w-12 h-12 rounded-xl bg-sky-700 text-white shadow-sm flex items-center justify-center mb-2">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 motion-safe:animate-pulse" />
                <span className="text-xs font-bold text-slate-900">CXDYNAMIQ CORE GATEWAY</span>
              </div>
              <span className="text-[10px] text-sky-700 font-mono font-medium mt-0.5">
                99.999% SLA Carrier Core · Sub-120ms Ingestion
              </span>
            </div>

            {/* Connecting Bus Line */}
            <div className="w-0.5 h-4 bg-sky-300 mx-auto" />

            {/* Mobile 2-Column Responsive Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {filteredConnectors.map((connector) => (
                <div
                  key={connector.id}
                  className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className={`w-7 h-7 rounded-lg shrink-0 flex items-center justify-center font-bold text-[11px] font-mono border ${connector.badgeColor}`}
                    >
                      {connector.badge}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-900 truncate">
                        {connector.name}
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono truncate">
                        {connector.subtext}
                      </div>
                    </div>
                  </div>

                  <span className="shrink-0 font-mono text-[10px] text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                    {connector.latency}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Bottom 4 Enterprise Capabilities */}
          <div className="relative z-20 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/70 border border-slate-200/80">
              <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center text-sky-800 shrink-0">
                <RefreshCw className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-900">Bi-directional Sync</div>
                <div className="text-[10px] text-slate-500 font-mono">Sub-120ms latency SLA</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/70 border border-slate-200/80">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-900">Zero-Code Pipelines</div>
                <div className="text-[10px] text-slate-500">Turnkey pre-built recipes</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/70 border border-slate-200/80">
              <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-900">SOC 2 &amp; GDPR Compliant</div>
                <div className="text-[10px] text-slate-500">Encrypted audio &amp; logs</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/70 border border-slate-200/80">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
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
