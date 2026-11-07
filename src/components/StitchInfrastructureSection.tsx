"use client";

import { useState } from "react";
import { 
  Activity, 
  ShieldCheck, 
  Zap, 
  Server, 
  Globe2, 
  CheckCircle2, 
  Radio, 
  Network,
  Cpu,
  Layers
} from "lucide-react";

interface NodeDetail {
  id: string;
  city: string;
  region: string;
  role: string;
  ping: string;
  jitter: string;
  carrier: string;
  redundancy: string;
  compliance: string;
}

const GLOBAL_NODES: Record<string, NodeDetail> = {
  manila: {
    id: "manila",
    city: "Metro Manila HQ",
    region: "APAC Primary Core (Ortigas Center, Pasig)",
    role: "Primary Voice Switch & Carrier Interconnect",
    ping: "11.8 ms",
    jitter: "0.12 ms",
    carrier: "PLDT Enterprise / Globe Telecom / Telstra Direct",
    redundancy: "N+2 Hot-Standby Anycast",
    compliance: "PCI-DSS Level 1 • ISO 27001 • Local Telco Licensed"
  },
  singapore: {
    id: "singapore",
    city: "Singapore (SIN)",
    region: "Southeast Asia Regional Gateway",
    role: "Cloud Edge POP & Cross-Strait SIP Peering",
    ping: "18.4 ms",
    jitter: "0.18 ms",
    carrier: "Singtel / Tata Communications",
    redundancy: "Dual Anycast Subsea Cable Paths",
    compliance: "MAS Guidelines • SOC 2 Type II"
  },
  tokyo: {
    id: "tokyo",
    city: "Tokyo (TYO)",
    region: "East Asia Telephony Ingress",
    role: "Low-Latency WebRTC Edge POP",
    ping: "28.2 ms",
    jitter: "0.22 ms",
    carrier: "NTT Communications / KDDI Direct",
    redundancy: "Automatic Carrier Failover",
    compliance: "FISC Japanese Financial Standards"
  },
  frankfurt: {
    id: "frankfurt",
    city: "Frankfurt (FRA)",
    region: "EMEA Core Gateway (Equinix FR5)",
    role: "European SIP Ingress & Dedicated GDPR Residency",
    ping: "68.5 ms",
    jitter: "0.31 ms",
    carrier: "Deutsche Telekom / Colt Technology",
    redundancy: "BGP Anycast Ring Failover",
    compliance: "Strict GDPR Article 28 • EU Sovereign Data"
  },
  useast: {
    id: "useast",
    city: "US East (IAD / Virginia)",
    region: "Americas Switch & CRM Sync Ingress",
    role: "Tier-1 Carrier Peering & LLM Whisper Bridge",
    ping: "41.9 ms",
    jitter: "0.24 ms",
    carrier: "Lumen / Cogent Communications / AWS DirectConnect",
    redundancy: "Multi-Homed Direct BGP",
    compliance: "HIPAA • SOC 2 Type II • FedRAMP High Ready"
  },
  sydney: {
    id: "sydney",
    city: "Sydney (SYD)",
    region: "Oceania Edge Node (Equinix SY3)",
    role: "Oceania WebRTC & Local Number Ingress",
    ping: "45.1 ms",
    jitter: "0.20 ms",
    carrier: "Telstra / Optus Enterprise",
    redundancy: "Subsea Southern Cross Transit Failover",
    compliance: "Australian Privacy Principles (APP)"
  }
};

export default function StitchInfrastructureSection() {
  const [selectedNode, setSelectedNode] = useState<string>("manila");
  const activeNode = GLOBAL_NODES[selectedNode] || GLOBAL_NODES.manila;

  return (
    <section className="w-full bg-gradient-to-b from-[#f8f9ff] via-[#eef4ff]/60 to-[#f8f9ff] py-16 lg:py-24 relative overflow-hidden border-b border-slate-200" id="infrastructure">
      
      {/* Background Ambient Glow Mesh */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <div className="w-[850px] h-[550px] bg-sky-200/25 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header with Minimal Font-to-Text Ratio */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs mb-3 text-xs font-semibold text-sky-800">
            <Radio className="w-3.5 h-3.5 text-sky-700 animate-pulse" />
            <span>Sub-Millisecond Edge Telephony</span>
          </div>
          <h2 className="font-headline font-semibold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight leading-snug">
            Global Voice Telephony Infrastructure
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Sub-millisecond WebRTC voice points of presence deployed across 180+ regions worldwide. Direct carrier SIP peering ensures zero packet loss and lossless Opus audio.
          </p>
        </div>

        {/* Telephony Network Interactive Cockpit Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 overflow-hidden p-6 lg:p-8 max-w-5xl mx-auto">
          
          {/* Top Status & SLA Verification Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-3 w-3">
                <span aria-hidden="true" className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-slate-900">Global WebRTC Mesh: Nominal (99.999% SLA)</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700">
                Zero-Jitter Carrier Failover
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700">
                Automatic Anycast BGP
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-medium border border-emerald-100">
                GDPR &amp; Local Data Residency
              </span>
            </div>
          </div>

          {/* SVG Network Topology & Interconnected Nodes Canvas */}
          <div className="relative w-full h-[380px] sm:h-[460px] bg-gradient-to-b from-white via-sky-50/20 to-white rounded-xl overflow-hidden border border-slate-200 mt-5 flex items-center justify-center select-none shadow-inner">
            
            {/* Ambient Background Grid Pattern */}
            <div 
              className="absolute inset-0 bg-[radial-gradient(#0369a1_0.75px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" 
              aria-hidden="true"
            />

            {/* Top Live Telemetry Overlay Badge */}
            <div className="absolute top-3 left-4 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xs text-[11px] font-mono text-slate-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              <span className="font-semibold text-sky-800">Global Mesh Routing:</span>
              <span>Dynamic Anycast BGP • Multi-Carrier Failover Active</span>
            </div>

            {/* Edge Telephony Topology Vector Canvas */}
            <svg 
              className="w-full h-full text-slate-300 relative z-10" 
              fill="none" 
              preserveAspectRatio="xMidYMid meet" 
              viewBox="0 0 960 480"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="primary-mesh-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0369A1" stopOpacity="0.75" />
                  <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#00724E" stopOpacity="0.65" />
                </linearGradient>
                <linearGradient id="pulse-grad-apac" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0284C7" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>

              {/* World Landmass Silhouettes (Soft Elegant Contours) */}
              {/* Americas */}
              <path d="M130,120 Q160,95 210,135 Q240,165 250,210 Q215,245 170,250 Q130,225 110,175 Z" fill="#d4e4fa" fillOpacity="0.45" />
              <path d="M190,265 Q235,270 255,310 Q245,380 215,410 Q190,380 180,320 Z" fill="#d4e4fa" fillOpacity="0.35" />
              {/* EMEA / Europe */}
              <path d="M410,105 Q470,85 520,115 Q540,150 515,190 Q465,195 425,165 Z" fill="#d4e4fa" fillOpacity="0.5" />
              <path d="M425,195 Q495,200 520,250 Q500,340 455,370 Q415,310 405,240 Z" fill="#d4e4fa" fillOpacity="0.32" />
              {/* Asia & APAC */}
              <path d="M545,95 Q640,80 735,120 Q770,185 710,240 Q620,230 550,180 Z" fill="#d4e4fa" fillOpacity="0.5" />
              {/* Southeast Asia & Philippines Archipelago */}
              <path d="M685,250 Q725,240 735,280 Q715,320 670,305 Z" fill="#d4e4fa" fillOpacity="0.5" />
              {/* Australia / Oceania */}
              <path d="M735,330 Q815,320 835,365 Q815,420 750,415 Q725,375 735,330 Z" fill="#d4e4fa" fillOpacity="0.4" />

              {/* Carrier SIP Peering Mesh Backbones with Flow Animation */}
              {/* US East (VA) <-> Frankfurt */}
              <path className="audio-flow-line" d="M235,185 Q350,120 475,150" stroke="url(#primary-mesh-grad)" strokeDasharray="5 4" strokeWidth="2" />
              {/* Frankfurt <-> Singapore */}
              <path className="audio-flow-line" d="M475,150 Q570,180 660,265" stroke="url(#primary-mesh-grad)" strokeDasharray="6 4" strokeWidth="2" />
              {/* Singapore <-> Manila HQ */}
              <path d="M660,265 Q685,245 715,235" stroke="#00724E" strokeWidth="2.5" />
              {/* Manila HQ <-> Tokyo */}
              <path className="audio-flow-line" d="M715,235 Q745,190 775,160" stroke="url(#primary-mesh-grad)" strokeDasharray="5 4" strokeWidth="2" />
              {/* Manila HQ <-> Sydney */}
              <path className="audio-flow-line" d="M715,235 Q760,290 780,360" stroke="url(#primary-mesh-grad)" strokeDasharray="5 4" strokeWidth="2" />
              {/* Tokyo <-> US East Transpacific Ring */}
              <path d="M775,160 Q860,130 920,130" opacity="0.7" stroke="#38BDF8" strokeDasharray="4 4" strokeWidth="1.75" />
              <path d="M40,150 Q120,165 235,185" opacity="0.7" stroke="#38BDF8" strokeDasharray="4 4" strokeWidth="1.75" />
              {/* US East <-> Sydney Direct Backup */}
              <path d="M235,185 Q490,440 780,360" stroke="#0369A1" strokeDasharray="6 6" strokeOpacity="0.28" strokeWidth="1.2" />

              {/* Animated Low-Latency Audio SIP Data Packets */}
              <circle fill="#0284C7" r="4">
                <animateMotion dur="3.2s" path="M235,185 Q350,120 475,150" repeatCount="indefinite" />
              </circle>
              <circle fill="#00724E" r="4.5">
                <animateMotion dur="3.8s" path="M475,150 Q570,180 660,265" repeatCount="indefinite" />
              </circle>
              <circle fill="#0369A1" r="4.5">
                <animateMotion dur="1.4s" path="M660,265 L715,235" repeatCount="indefinite" />
              </circle>
              <circle fill="#38BDF8" r="4">
                <animateMotion dur="2.6s" path="M715,235 Q745,190 775,160" repeatCount="indefinite" />
              </circle>
              <circle fill="#00724E" r="4">
                <animateMotion dur="3s" path="M715,235 Q760,290 780,360" repeatCount="indefinite" />
              </circle>
            </svg>

            {/* Interactive Carrier Presence Nodes (Click to Inspect) */}
            
            {/* 1. MANILA HQ (Metro Manila / APAC Primary Telephony Node) */}
            <div 
              onClick={() => setSelectedNode("manila")}
              className="absolute left-[72%] sm:left-[73.5%] top-[46%] sm:top-[47%] -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center group cursor-pointer"
            >
              <div className="relative flex items-center justify-center">
                <span className="w-7 h-7 rounded-full bg-emerald-400/35 animate-ping absolute" aria-hidden="true" />
                <span className="w-5 h-5 rounded-full bg-emerald-600/30 animate-pulse absolute" />
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-600 border-2 border-white shadow-md relative z-10" />
              </div>
              <div className={`mt-1.5 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-sm border-2 shadow-md flex items-center gap-1.5 transition-transform group-hover:scale-105 ${
                selectedNode === "manila" ? "border-emerald-600 ring-2 ring-emerald-200" : "border-emerald-500"
              }`}>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[11px] font-bold text-slate-900 flex items-center gap-1">
                    Manila HQ
                    <span className="text-[10px] px-1 py-0.2 bg-emerald-100 text-emerald-800 rounded font-mono font-semibold uppercase">
                      Primary
                    </span>
                  </span>
                  <span className="text-[10px] text-emerald-700 font-mono font-semibold mt-0.5">11.8ms • Ortigas Hub</span>
                </div>
              </div>
            </div>

            {/* 2. SINGAPORE (Regional Cloud Gateway / Peering) */}
            <div 
              onClick={() => setSelectedNode("singapore")}
              className="absolute left-[66%] sm:left-[67.5%] top-[53%] sm:top-[54%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center group cursor-pointer"
            >
              <div className="relative flex items-center justify-center">
                <span className="w-5 h-5 rounded-full bg-sky-500/25 animate-ping absolute" aria-hidden="true" />
                <span className="w-3 h-3 rounded-full bg-sky-700 border-2 border-white shadow-sm relative z-10" />
              </div>
              <div className={`mt-1 px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-sm border shadow-2xs flex items-center gap-1.5 transition-transform group-hover:scale-105 ${
                selectedNode === "singapore" ? "border-sky-600 ring-2 ring-sky-200" : "border-slate-200"
              }`}>
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[10px] font-bold text-slate-900">Singapore</span>
                  <span className="text-[10px] text-sky-700 font-mono font-semibold">18ms • Peering</span>
                </div>
              </div>
            </div>

            {/* 3. TOKYO (East Asia Edge Node) */}
            <div 
              onClick={() => setSelectedNode("tokyo")}
              className="absolute left-[79%] sm:left-[80%] top-[31%] sm:top-[32%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center group cursor-pointer"
            >
              <div className="relative flex items-center justify-center">
                <span className="w-4 h-4 rounded-full bg-sky-600/20 animate-ping absolute" aria-hidden="true" />
                <span className="w-3 h-3 rounded-full bg-sky-700 border-2 border-white shadow-sm relative z-10" />
              </div>
              <div className={`mt-1 px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-sm border shadow-2xs flex items-center gap-1 transition-transform group-hover:scale-105 ${
                selectedNode === "tokyo" ? "border-sky-600 ring-2 ring-sky-200" : "border-slate-200"
              }`}>
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[10px] font-bold text-slate-900">Tokyo</span>
                  <span className="text-[10px] text-sky-700 font-mono font-semibold">28ms • Edge</span>
                </div>
              </div>
            </div>

            {/* 4. FRANKFURT (EMEA Core SIP Ingress & GDPR Data Residency) */}
            <div 
              onClick={() => setSelectedNode("frankfurt")}
              className="absolute left-[48%] sm:left-[49%] top-[30%] sm:top-[31%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center group cursor-pointer"
            >
              <div className="relative flex items-center justify-center">
                <span className="w-5 h-5 rounded-full bg-sky-700/25 animate-ping absolute" aria-hidden="true" />
                <span className="w-3 h-3 rounded-full bg-sky-700 border-2 border-white shadow-sm relative z-10" />
              </div>
              <div className={`mt-1 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-sm border shadow-2xs flex items-center gap-1.5 transition-transform group-hover:scale-105 ${
                selectedNode === "frankfurt" ? "border-sky-600 ring-2 ring-sky-200" : "border-slate-200"
              }`}>
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[10px] font-bold text-slate-900 flex items-center gap-1">
                    Frankfurt
                    <span className="text-[10px] px-1 rounded bg-slate-100 text-sky-800 font-semibold">GDPR</span>
                  </span>
                  <span className="text-[10px] text-sky-700 font-mono font-semibold mt-0.5">68ms • Core SIP</span>
                </div>
              </div>
            </div>

            {/* 5. US EAST / VIRGINIA (Americas Core Switch & Carrier Peering) */}
            <div 
              onClick={() => setSelectedNode("useast")}
              className="absolute left-[23%] sm:left-[24%] top-[37%] sm:top-[38%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center group cursor-pointer"
            >
              <div className="relative flex items-center justify-center">
                <span className="w-5 h-5 rounded-full bg-sky-700/30 animate-ping absolute" aria-hidden="true" />
                <span className="w-3 h-3 rounded-full bg-sky-700 border-2 border-white shadow-sm relative z-10" />
              </div>
              <div className={`mt-1 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-sm border shadow-2xs flex items-center gap-1.5 transition-transform group-hover:scale-105 ${
                selectedNode === "useast" ? "border-sky-600 ring-2 ring-sky-200" : "border-slate-200"
              }`}>
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[10px] font-bold text-slate-900">US-East (VA)</span>
                  <span className="text-[10px] text-sky-700 font-mono font-semibold mt-0.5">42ms • Tier-1 Peering</span>
                </div>
              </div>
            </div>

            {/* 6. SYDNEY (Oceania Edge Node) */}
            <div 
              onClick={() => setSelectedNode("sydney")}
              className="absolute left-[80%] sm:left-[81%] top-[74%] sm:top-[75%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center group cursor-pointer"
            >
              <div className="relative flex items-center justify-center">
                <span className="w-4 h-4 rounded-full bg-sky-600/25 animate-ping absolute" aria-hidden="true" />
                <span className="w-3 h-3 rounded-full bg-sky-600 border-2 border-white shadow-sm relative z-10" />
              </div>
              <div className={`mt-1 px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-sm border shadow-2xs flex items-center gap-1 transition-transform group-hover:scale-105 ${
                selectedNode === "sydney" ? "border-sky-600 ring-2 ring-sky-200" : "border-slate-200"
              }`}>
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[10px] font-bold text-slate-900">Sydney</span>
                  <span className="text-[10px] text-sky-700 font-mono font-semibold">45ms • Edge</span>
                </div>
              </div>
            </div>

            {/* Bottom Right Map Legend */}
            <div className="absolute bottom-3 right-4 z-20 hidden md:flex items-center gap-3 px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 shadow-2xs text-[10px] text-slate-500">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                <span className="text-slate-800 font-medium">CXdynamIQ HQ &amp; Core</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-sky-700" />
                <span className="text-slate-800 font-medium">Direct Carrier SIP Peering</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-sky-500" />
                <span className="text-slate-800 font-medium">Edge WebRTC POP</span>
              </div>
            </div>

          </div>

          {/* Interactive Node Telemetry Inspector Card (Selected City Live Telemetry) */}
          <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-sky-100 flex items-center justify-center text-sky-800 shrink-0 mt-0.5">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-900">{activeNode.city}</span>
                  <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-100 px-1.5 py-0.2 rounded font-mono">
                    LIVE • {activeNode.ping}
                  </span>
                </div>
                <div className="text-xs text-slate-600 mt-0.5">{activeNode.region}</div>
                <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                  <span className="font-semibold text-slate-700">Carrier:</span> {activeNode.carrier} • <span className="font-semibold text-slate-700">Jitter:</span> {activeNode.jitter}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 self-stretch md:self-auto justify-end">
              <div className="text-right">
                <span className="text-[10px] uppercase font-semibold text-slate-400 block tracking-wider">Compliance</span>
                <span className="text-xs font-semibold text-slate-800">{activeNode.compliance.split("•")[0]}</span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedNode("manila")}
                className="text-xs font-semibold text-sky-700 bg-white border border-slate-200 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Reset to HQ
              </button>
            </div>
          </div>

          {/* Telemetry Bottom Bar (4 Key Metric Badges) */}
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-3.5 rounded-xl bg-[#f8f9ff] border border-slate-200/80">
              <div className="text-[11px] text-slate-500 uppercase font-semibold tracking-wider">Active Carrier Trunks</div>
              <div className="text-base font-bold text-slate-900 mt-0.5">34 Tier-1 Partners</div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#f8f9ff] border border-slate-200/80">
              <div className="text-[11px] text-slate-500 uppercase font-semibold tracking-wider">Avg Core Ping</div>
              <div className="text-base font-bold text-emerald-700 mt-0.5">&lt; 7.4 ms</div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#f8f9ff] border border-slate-200/80">
              <div className="text-[11px] text-slate-500 uppercase font-semibold tracking-wider">Packet Loss</div>
              <div className="text-base font-bold text-slate-900 mt-0.5">0.0001% (Lossless)</div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#f8f9ff] border border-slate-200/80">
              <div className="text-[11px] text-slate-500 uppercase font-semibold tracking-wider">Codecs Supported</div>
              <div className="text-base font-bold text-sky-800 mt-0.5">Opus, G.711, G.722</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
