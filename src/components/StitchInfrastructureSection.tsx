"use client";

import { Activity, ShieldCheck, Zap } from "lucide-react";

export default function StitchInfrastructureSection() {
  return (
    <section className="w-full bg-gradient-to-b from-slate-50 via-sky-50/30 to-slate-50 py-20 lg:py-28 relative overflow-hidden border-b border-slate-200" id="infrastructure">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <div className="w-[700px] h-[500px] bg-sky-100/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700 font-headline">
            Sub-Millisecond Edge Telephony
          </span>
          <h2 className="mt-3 font-headline font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Global Voice Telephony Infrastructure
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Sub-millisecond WebRTC voice points of presence deployed across 180+ regions worldwide. Direct carrier SIP peering ensures zero jitter.
          </p>
        </div>

        {/* Telephony Network Interactive Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 overflow-hidden p-6 lg:p-10 max-w-5xl mx-auto">
          
          {/* Top Status Chips */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span aria-hidden="true" className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <span className="text-xs font-bold text-slate-900">Global WebRTC Mesh: Nominal</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-700">Zero-Jitter Carrier Failover</span>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-700">Automatic SIP Peering</span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-medium border border-emerald-100">GDPR &amp; Local Data Residency</span>
            </div>
          </div>

          {/* SVG Network Topology Canvas */}
          <div className="relative w-full h-[380px] sm:h-[460px] bg-gradient-to-b from-slate-50/50 via-sky-50/20 to-slate-50/50 rounded-xl overflow-hidden border border-slate-200 mt-6 flex items-center justify-center select-none">
            
            {/* Top live routing badge */}
            <div className="absolute top-3 left-4 z-20 hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 border border-slate-200 shadow-2xs text-[11px] font-mono text-slate-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              <span className="font-semibold text-sky-800">Global Mesh:</span>
              <span>Dynamic Anycast BGP • Multi-Carrier Failover Active</span>
            </div>

            {/* Edge Telephony Topology Vector Canvas */}
            <svg className="w-full h-full text-slate-300 relative z-10" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 960 480" aria-hidden="true">
              <defs>
                <linearGradient id="primary-mesh-grad" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#0369A1" stopOpacity="0.7" />
                  <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#00724E" stopOpacity="0.6" />
                </linearGradient>
              </defs>

              {/* World Landmass Silhouettes (soft styling) */}
              <path d="M130,120 Q160,95 210,135 Q240,165 250,210 Q215,245 170,250 Q130,225 110,175 Z" fill="#e0f2fe" fillOpacity="0.6" />
              <path d="M190,265 Q235,270 255,310 Q245,380 215,410 Q190,380 180,320 Z" fill="#e0f2fe" fillOpacity="0.5" />
              <path d="M410,105 Q470,85 520,115 Q540,150 515,190 Q465,195 425,165 Z" fill="#e0f2fe" fillOpacity="0.6" />
              <path d="M425,195 Q495,200 520,250 Q500,340 455,370 Q415,310 405,240 Z" fill="#e0f2fe" fillOpacity="0.45" />
              <path d="M545,95 Q640,80 735,120 Q770,185 710,240 Q620,230 550,180 Z" fill="#e0f2fe" fillOpacity="0.65" />
              <path d="M685,250 Q725,240 735,280 Q715,320 670,305 Z" fill="#e0f2fe" fillOpacity="0.6" />
              <path d="M735,330 Q815,320 835,365 Q815,420 750,415 Q725,375 735,330 Z" fill="#e0f2fe" fillOpacity="0.55" />

              {/* Carrier SIP Peering Mesh Backbones */}
              <path d="M235,185 Q350,120 475,150" stroke="url(#primary-mesh-grad)" strokeDasharray="5 4" strokeWidth="2" />
              <path d="M475,150 Q570,180 660,265" stroke="url(#primary-mesh-grad)" strokeDasharray="6 4" strokeWidth="2" />
              <path d="M660,265 Q685,245 715,235" stroke="#00724E" strokeWidth="2.5" />
              <path d="M715,235 Q745,190 775,160" stroke="url(#primary-mesh-grad)" strokeDasharray="5 4" strokeWidth="2" />
              <path d="M715,235 Q760,290 780,360" stroke="url(#primary-mesh-grad)" strokeDasharray="5 4" strokeWidth="2" />
              <path d="M775,160 Q860,130 920,130" opacity="0.6" stroke="#38BDF8" strokeDasharray="4 4" strokeWidth="1.5" />
              <path d="M40,150 Q120,165 235,185" opacity="0.6" stroke="#38BDF8" strokeDasharray="4 4" strokeWidth="1.5" />
            </svg>

            {/* Manila HQ Node (Primary Hub) */}
            <div className="absolute left-[72%] sm:left-[73.5%] top-[46%] sm:top-[47%] -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center group cursor-pointer">
              <div className="relative flex items-center justify-center">
                <span className="w-6 h-6 rounded-full bg-emerald-400/40 animate-ping absolute" aria-hidden="true" />
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-600 border-2 border-white shadow-md relative z-10" />
              </div>
              <div className="mt-1 px-2.5 py-1 rounded-lg bg-white/95 border-2 border-emerald-600 shadow-md flex items-center gap-1.5 transition-transform group-hover:scale-105">
                <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[11px] font-bold text-slate-900 flex items-center gap-1">
                    Manila HQ
                    <span className="text-[9px] px-1 py-0.2 bg-emerald-100 text-emerald-800 rounded font-mono font-semibold uppercase">Primary</span>
                  </span>
                  <span className="text-[9px] text-emerald-700 font-mono font-semibold mt-0.5">12ms • Ortigas Hub</span>
                </div>
              </div>
            </div>

            {/* Singapore Node */}
            <div className="absolute left-[66%] sm:left-[67.5%] top-[53%] sm:top-[54%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center group cursor-pointer">
              <div className="relative flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-sky-700 border-2 border-white shadow-sm relative z-10" />
              </div>
              <div className="mt-1 px-2 py-0.5 rounded-md bg-white/90 border border-slate-200 shadow-xs flex items-center gap-1 transition-transform group-hover:scale-105">
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[10px] font-bold text-slate-900">Singapore</span>
                  <span className="text-[9px] text-sky-700 font-mono font-semibold">18ms • Peering</span>
                </div>
              </div>
            </div>

            {/* Tokyo Node */}
            <div className="absolute left-[79%] sm:left-[80%] top-[31%] sm:top-[32%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center group cursor-pointer">
              <div className="relative flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-sky-700 border-2 border-white shadow-sm relative z-10" />
              </div>
              <div className="mt-1 px-2 py-0.5 rounded-md bg-white/90 border border-slate-200 shadow-xs flex items-center gap-1 transition-transform group-hover:scale-105">
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[10px] font-bold text-slate-900">Tokyo</span>
                  <span className="text-[9px] text-sky-700 font-mono font-semibold">28ms • Edge</span>
                </div>
              </div>
            </div>

            {/* Frankfurt Node */}
            <div className="absolute left-[47%] sm:left-[48%] top-[30%] sm:top-[31%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center group cursor-pointer">
              <div className="relative flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-sky-700 border-2 border-white shadow-sm relative z-10" />
              </div>
              <div className="mt-1 px-2 py-0.5 rounded-md bg-white/90 border border-slate-200 shadow-xs flex items-center gap-1 transition-transform group-hover:scale-105">
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[10px] font-bold text-slate-900">Frankfurt</span>
                  <span className="text-[9px] text-sky-700 font-mono font-semibold">22ms • EU Hub</span>
                </div>
              </div>
            </div>

            {/* US East / Virginia Node */}
            <div className="absolute left-[24%] sm:left-[25%] top-[36%] sm:top-[37%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center group cursor-pointer">
              <div className="relative flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-sky-700 border-2 border-white shadow-sm relative z-10" />
              </div>
              <div className="mt-1 px-2 py-0.5 rounded-md bg-white/90 border border-slate-200 shadow-xs flex items-center gap-1 transition-transform group-hover:scale-105">
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[10px] font-bold text-slate-900">US East</span>
                  <span className="text-[9px] text-sky-700 font-mono font-semibold">14ms • Carrier Core</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
