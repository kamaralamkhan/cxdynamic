"use client";

import Link from "next/link";
import {
  ArrowRight,
  PhoneCall,
  Zap,
  Activity,
  CheckCircle2,
} from "lucide-react";

interface ServiceItem {
  id: string;
  category: string;
  title: string;
  description: string;
  href: string;
  badge: string;
  videoSrc?: string;
  posterSrc?: string;
  renderAnimation: () => React.ReactNode;
}

export default function AnimatedServiceGrid() {
  const services: ServiceItem[] = [
    {
      id: "ai-voice",
      category: "Intelligent Inbound",
      title: "Autonomous AI Voice & Conversational IVR",
      description: "Natural multi-turn voicebots resolving 72% of Tier-1 inquiries with sub-200ms speech synthesis and zero agent burnout.",
      href: "/conversational-ai",
      badge: "72% Containment",
      renderAnimation: () => (
        <div className="relative w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-sky-50/70 via-white to-slate-50 select-none overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-sky-200/40 rounded-full blur-2xl pointer-events-none" />

          {/* Top Status */}
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 z-10">
            <span className="flex items-center gap-1.5 text-sky-800 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Live SIP Stream
            </span>
            <span className="bg-white/90 px-2 py-0.5 rounded border border-slate-200 text-slate-700 font-bold">18ms ASR</span>
          </div>

          {/* Center Soundwave Pulse */}
          <div className="flex flex-col items-center justify-center my-auto z-10">
            <div className="relative flex items-center justify-center">
              <span className="w-16 h-16 rounded-full bg-sky-400/20 animate-ping absolute" />
              <span className="w-12 h-12 rounded-full bg-sky-700 text-white flex items-center justify-center shadow-md relative z-10 group-hover:scale-110 transition-transform duration-300">
                <PhoneCall className="w-5 h-5 text-white" />
              </span>
            </div>

            {/* Audio Spectrum Frequency Bars */}
            <div className="flex items-center justify-center gap-1 mt-4 h-6">
              {[40, 75, 100, 60, 90, 45, 80, 65, 95, 50, 70].map((h, i) => (
                <span
                  key={i}
                  className="w-1 bg-sky-700 rounded-full audio-wave-bar"
                  style={{
                    height: `${h}%`,
                    animationDuration: `${0.6 + (i % 5) * 0.15}s`,
                    animationDelay: `${i * 0.08}s`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Bottom Transcription Simulation */}
          <div className="z-10 bg-white/90 backdrop-blur-sm p-2.5 rounded-lg border border-slate-200/80 shadow-2xs">
            <div className="flex items-center justify-between text-[10px] text-slate-500 mb-1">
              <span className="font-semibold text-slate-700 font-mono">Deepgram Whisper</span>
              <span className="text-emerald-700 font-semibold">Lossless Opus</span>
            </div>
            <p className="text-[11px] text-slate-800 font-medium truncate">
              &quot;I&apos;d like to upgrade my team to 40 SIP seats...&quot;
            </p>
          </div>
        </div>
      )
    },
    {
      id: "omnichannel",
      category: "Unified Messaging",
      title: "WhatsApp & Omnichannel Cloud Inbox",
      description: "Connect Meta WhatsApp Business, SMS, live webchat, and email into one unified queue with sub-120ms CRM synchronization.",
      href: "/omnichannel-routing",
      badge: "Meta Verified API",
      renderAnimation: () => (
        <div className="relative w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-emerald-50/50 via-white to-slate-50 select-none overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute -top-10 -left-10 w-28 h-28 bg-emerald-200/35 rounded-full blur-2xl pointer-events-none" />

          {/* Top Status */}
          <div className="flex items-center justify-between text-[11px] z-10">
            <span className="flex items-center gap-1.5 text-emerald-800 font-semibold font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Meta Cloud 99.99%
            </span>
            <span className="bg-emerald-100/80 text-emerald-800 px-2 py-0.5 rounded text-[10px] font-bold font-mono">
              48ms Webhook
            </span>
          </div>

          {/* Center Chat Thread Simulation */}
          <div className="space-y-2.5 my-auto z-10 py-1">
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-700 shrink-0">
                ER
              </div>
              <div className="bg-white border border-slate-200 p-2 rounded-xl rounded-tl-none shadow-2xs text-[11px] text-slate-800 max-w-[85%]">
                Can we migrate 60 agents from our legacy PBX?
              </div>
            </div>

            <div className="flex items-start gap-2 justify-end">
              <div className="bg-emerald-700 text-white p-2 rounded-xl rounded-tr-none shadow-2xs text-[11px] max-w-[85%]">
                Yes! Turnkey bot flows + instant HubSpot match.
              </div>
              <div className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                CX
              </div>
            </div>
          </div>

          {/* Bottom CRM Sync Status */}
          <div className="z-10 bg-white/95 backdrop-blur-sm p-2.5 rounded-lg border border-slate-200/80 shadow-2xs flex items-center justify-between text-[10px]">
            <span className="text-slate-600 font-medium flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              HubSpot &amp; Salesforce
            </span>
            <span className="text-emerald-700 font-mono font-bold">Synced in 94ms</span>
          </div>
        </div>
      )
    },
    {
      id: "dialers",
      category: "Outbound Revenue",
      title: "Smart Predictive & High-Velocity Dialers",
      description: "Triple agent talk time to 46 mins/hour with zero idle algorithm, local caller ID presence matching, and automated voicemail drop.",
      href: "/predictive-dialer",
      badge: "3.4x Talk Time",
      renderAnimation: () => (
        <div className="relative w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-sky-50/60 via-white to-blue-50/40 select-none overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-sky-200/35 rounded-full blur-2xl pointer-events-none" />

          {/* Top Status */}
          <div className="flex items-center justify-between text-[11px] font-mono z-10">
            <span className="flex items-center gap-1.5 text-sky-800 font-semibold">
              <Zap className="w-3.5 h-3.5 text-sky-700" />
              Power Pacing
            </span>
            <span className="bg-sky-100 text-sky-800 px-2 py-0.5 rounded text-[10px] font-bold">1.8x Speed</span>
          </div>

          {/* Center Pacing Speedometer Dial */}
          <div className="flex flex-col items-center justify-center my-auto z-10">
            <div className="relative w-24 h-24 flex items-center justify-center">
              {/* Circular Gauge Track */}
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#e2e8f0"
                  strokeWidth="8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#0369a1"
                  strokeWidth="8"
                  strokeDasharray="251.2"
                  strokeDashoffset="62.8"
                  strokeLinecap="round"
                  className="transition-all duration-700"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-xl font-bold font-headline text-slate-900 leading-none">46m</span>
                <span className="text-[9px] text-slate-500 uppercase font-mono mt-0.5">Talk / Hr</span>
              </div>
            </div>
          </div>

          {/* Bottom Speed Metric */}
          <div className="z-10 bg-white/95 backdrop-blur-sm p-2.5 rounded-lg border border-slate-200/80 shadow-2xs flex items-center justify-between text-[10px]">
            <span className="text-slate-600 font-medium">Local DID Match:</span>
            <span className="text-emerald-700 font-mono font-bold">+38% Answer Rate</span>
          </div>
        </div>
      )
    },
    {
      id: "analytics",
      category: "Supervisor Intelligence",
      title: "Live Speech Analytics & 100% QA Scoring",
      description: "Continuous Deepgram Nova-2 speech intelligence, sentiment trend tracking, and automated scorecard generation for every call.",
      href: "/speech-analytics",
      badge: "100% QA Coverage",
      renderAnimation: () => (
        <div className="relative w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-indigo-50/50 via-white to-slate-50 select-none overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-100/30 rounded-full blur-2xl pointer-events-none" />

          {/* Top Status */}
          <div className="flex items-center justify-between text-[11px] font-mono z-10">
            <span className="flex items-center gap-1.5 text-indigo-900 font-semibold">
              <Activity className="w-3.5 h-3.5 text-indigo-600" />
              Live Speech Floor
            </span>
            <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded text-[10px] font-bold border border-emerald-100">
              96 / 100 QA
            </span>
          </div>

          {/* Center Talk Ratio Visualizer */}
          <div className="space-y-3 my-auto z-10 w-full px-1">
            <div>
              <div className="flex justify-between text-[10px] text-slate-500 font-semibold mb-1">
                <span>Talk-to-Listen Ratio</span>
                <span className="text-emerald-700 font-mono">Optimal</span>
              </div>
              <div className="h-2.5 w-full bg-slate-200 rounded-full overflow-hidden flex">
                <div className="bg-sky-700 h-full w-[38%]" />
                <div className="bg-emerald-600 h-full w-[62%]" />
              </div>
            </div>

            {/* Keyword Trigger Badges */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[10px] font-semibold border border-emerald-200">
                ✓ SLA 99.999%
              </span>
              <span className="px-2 py-0.5 rounded bg-sky-50 text-sky-800 text-[10px] font-semibold border border-sky-200">
                ✓ SOC2 Verified
              </span>
            </div>
          </div>

          {/* Bottom CSAT Predictor */}
          <div className="z-10 bg-white/95 backdrop-blur-sm p-2.5 rounded-lg border border-slate-200/80 shadow-2xs flex items-center justify-between text-[10px]">
            <span className="text-slate-600 font-medium">Predicted CSAT:</span>
            <span className="text-emerald-700 font-bold font-mono">4.9 / 5.0 ★ High</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24 border-b border-slate-200" id="services">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="mb-4 flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
            <span className="h-px w-8 bg-sky-300" aria-hidden="true" />
            <span>One connected system</span>
            <span className="h-px w-8 bg-sky-300" aria-hidden="true" />
          </div>
          <h2 className="font-headline font-semibold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight leading-snug">
            Built for the way customer conversations move.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Replace legacy telephony fragments with four purpose-built modules designed to scale from 10 seats to 10,000 global agents with zero downtime.
          </p>
        </div>

        {/* 4-Column Responsive Animated Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
          {services.map((service) => (
            <article
              key={service.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-solid border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-sky-500 hover:shadow-lg"
            >
              {/* Media Container: Aspect Square */}
              <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-slate-50 mb-5 border border-slate-200/80 group-hover:border-sky-300 transition-colors">
                {service.videoSrc ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={service.posterSrc}
                    aria-label={`${service.title} animated demonstration`}
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                  >
                    <source src={service.videoSrc} type="video/mp4" />
                  </video>
                ) : (
                  service.renderAnimation()
                )}
              </div>

              {/* Service Content */}
              <div className="flex flex-col gap-4 grow">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                      {service.category}
                    </p>
                    <span className="text-[10px] font-semibold text-sky-800 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200">
                      {service.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-headline font-bold leading-snug text-slate-900 group-hover:text-sky-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-auto pt-3 border-t border-slate-100">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-sky-700 hover:text-sky-800 group-hover:gap-2 transition-all cursor-pointer"
                  >
                    <span>Explore Platform Details</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
