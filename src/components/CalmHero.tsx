"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  ExternalLink,
  Headphones,
  MessageCircle,
  MessageSquare,
  PhoneCall,
  ShieldCheck,
  Sparkles
} from "lucide-react";

interface CalmHeroProps {
  onOpenDemo: () => void;
}

const journey = [
  { id: "voice", label: "Voice", detail: "A customer reaches the team by phone.", Icon: PhoneCall },
  { id: "whatsapp", label: "WhatsApp", detail: "The same context continues in WhatsApp without dropped history.", Icon: MessageCircle },
  { id: "chat", label: "Web chat", detail: "Intent and customer verification are captured without starting over.", Icon: MessageSquare },
  { id: "ai", label: "AI agent", detail: "Autonomous AI agent understands the request and proposes next best action.", Icon: Bot },
  { id: "human", label: "Human copilot", detail: "A specialist joins with full conversational context attached.", Icon: Headphones },
  { id: "qa", label: "Quality review", detail: "100% of the interaction is audited against policy, empathy, and intent.", Icon: ShieldCheck },
  { id: "analytics", label: "Analytics", detail: "The journey becomes real-time business telemetry the entire team can act on.", Icon: BarChart3 },
] as const;

export default function CalmHero({ onOpenDemo }: CalmHeroProps) {
  const [activeId, setActiveId] = useState<(typeof journey)[number]["id"]>("ai");
  const active = journey.find((item) => item.id === activeId) ?? journey[3];

  const moveJourney = (currentId: (typeof journey)[number]["id"], direction: 1 | -1) => {
    const currentIndex = journey.findIndex((item) => item.id === currentId);
    const nextIndex = (currentIndex + direction + journey.length) % journey.length;
    setActiveId(journey[nextIndex].id);
  };

  return (
    <section id="home" className="relative isolate w-full max-w-full overflow-x-clip border-b border-slate-200 bg-[#f8fbfd]">
      {/* Background Decorative Carrier Lines */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70" aria-hidden="true">
        <svg className="h-full w-full" viewBox="0 0 1440 920" fill="none" preserveAspectRatio="none">
          <path d="M-40 260C190 180 200 430 420 360S720 120 920 260s270 30 560-120" stroke="#d8eef7" strokeWidth="2" />
          <path d="M-40 700c200-110 320 120 520 24s240-250 440-164 280 50 560-116" stroke="#dcefe8" strokeWidth="2" />
          <path d="M-40 276c180-65 232 70 390 34" stroke="#069bd8" strokeOpacity=".18" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-4 pb-14 pt-14 sm:px-6 lg:px-10 lg:pb-20 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,.88fr)_minmax(0,1.12fr)] lg:gap-16">
          
          {/* Left Column: AI-First Positioning & Conversion CTAs */}
          <div className="min-w-0 max-w-2xl space-y-6">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/60 text-xs font-semibold text-sky-800">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-600 animate-pulse" aria-hidden="true" />
              <span>CXDYNAMIQ 3.0 • AI-POWERED OMNICHANNEL CX PLATFORM</span>
            </div>

            {/* Main Headline */}
            <h1 className="w-full max-w-[calc(100vw-2rem)] break-words [overflow-wrap:anywhere] [text-wrap:wrap] font-display text-[clamp(2.1rem,6vw,4.8rem)] font-extrabold leading-[1.04] tracking-[-.045em] text-[#071936] sm:max-w-full">
              Every conversation understood.{" "}
              <span className="text-sky-700 block mt-1">Every resolution autonomous.</span>
            </h1>

            {/* Authoritative Subheadline */}
            <p className="max-w-xl text-base sm:text-lg leading-relaxed text-slate-600 font-normal">
              Unify Agentic Voice and WhatsApp bots, real-time human copilots, 100% conversation QA, and sub-15ms cloud telephony in one intelligent platform—live in a day.
            </p>

            {/* Dual CTAs: Self-Serve PLG (cxq360.ai) + Enterprise Demo */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a 
                href="https://cxq360.ai/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-tactile inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-sky-700 hover:bg-sky-800 px-7 text-sm font-semibold text-white shadow-sm transition-colors cursor-pointer"
              >
                <span>Start Free Trial on CXQ360.ai</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <button 
                type="button" 
                onClick={onOpenDemo} 
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 px-6 text-sm font-semibold text-slate-700 shadow-2xs transition-colors cursor-pointer"
              >
                <span>Book a Demo</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                14-Day Free Sandbox
              </span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                Sub-15ms Media Latency
              </span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                99.999% Global SLA
              </span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                Zero PBX Hardware
              </span>
            </div>

          </div>

          {/* Right Column: Connected CX Signal Flow Interactive Showcase */}
          <div className="relative min-w-0 min-h-[430px] lg:min-h-[520px]">
            <div className="absolute left-0 top-1/2 hidden h-px w-full -translate-y-1/2 bg-sky-100 sm:block" aria-hidden="true" />
            
            <div role="tablist" aria-label="Connected CX journey" className="relative grid gap-3 sm:grid-cols-2 lg:absolute lg:inset-0 lg:grid-cols-4 lg:gap-5">
              {journey.map(({ id, label, Icon }, index) => {
                const selected = activeId === id;
                const position = index < 4
                  ? index === 0
                    ? "lg:left-0 lg:top-[12%]"
                    : index === 1
                      ? "lg:left-[24%] lg:top-[57%]"
                      : index === 2
                        ? "lg:left-[48%] lg:top-[12%]"
                        : "lg:left-[72%] lg:top-[57%]"
                  : index === 4
                    ? "lg:right-[2%] lg:top-[8%]"
                    : index === 5
                      ? "lg:right-[2%] lg:top-[39%]"
                      : "lg:right-[2%] lg:top-[70%]";
                return (
                  <button
                    key={id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls={`journey-panel-${id}`}
                    tabIndex={selected ? 0 : -1}
                    onKeyDown={(event) => {
                      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                        event.preventDefault();
                        moveJourney(id, 1);
                      }
                      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                        event.preventDefault();
                        moveJourney(id, -1);
                      }
                    }}
                    onClick={() => setActiveId(id)}
                    className={`group relative flex min-h-24 items-center gap-3 rounded-2xl border bg-white/95 p-4 text-left shadow-[0_12px_36px_-28px_rgba(8,56,87,.55)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 sm:min-h-28 lg:absolute lg:w-[190px] ${position} ${selected ? "border-sky-600 ring-4 ring-sky-600/10" : "border-slate-200 hover:border-sky-300"}`}
                  >
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border ${selected ? "border-sky-300 bg-sky-50 text-sky-800" : "border-slate-200 bg-slate-50 text-sky-700"}`}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-[#071936]">{label}</span>
                      <span className="mt-1 block text-[11px] leading-4 text-slate-500">{selected ? "Active signal" : "Context continues"}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Light-First Focus Card (No dark block!) */}
            <div className="relative mt-5 rounded-2xl border border-slate-200/90 bg-white/95 backdrop-blur-sm p-5 text-slate-900 shadow-md sm:absolute sm:bottom-0 sm:left-0 sm:mt-0 sm:max-w-[420px]">
              <div className="flex items-center justify-between gap-4 pb-2 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-800 font-mono">
                  {active.label} Stage
                </span>
                <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                  Synced
                </span>
              </div>
              <p id={`journey-panel-${active.id}`} role="tabpanel" aria-live="polite" className="mt-3 text-sm leading-relaxed text-slate-600">
                {active.detail}
              </p>
              <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                <Link href="#agentic-ai" className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-800">
                  <span>Explore 5-step agentic loop</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
                <span className="text-[10px] text-slate-400 font-mono">&lt;200ms turn time</span>
              </div>
            </div>

          </div>
        </div>

        {/* Connected CX Channels Ribbon */}
        <div className="mt-14 overflow-x-auto border-y border-slate-200/80 py-4.5 [scrollbar-width:thin]">
          <div className="flex min-w-max items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-500">
            <span className="text-slate-900 font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-sky-700" />
              Unified Omnichannel Fabric:
            </span>
            <span className="h-px w-10 bg-slate-300" aria-hidden="true" />
            <span className="hover:text-slate-900 transition-colors">Voice</span>
            <span className="text-slate-300">•</span>
            <span className="hover:text-slate-900 transition-colors">WhatsApp Business</span>
            <span className="text-slate-300">•</span>
            <span className="hover:text-slate-900 transition-colors">Live Web Chat</span>
            <span className="text-slate-300">•</span>
            <span className="hover:text-slate-900 transition-colors">SMS Messaging</span>
            <span className="text-slate-300">•</span>
            <span className="hover:text-slate-900 transition-colors">Email</span>
            <span className="text-slate-300">•</span>
            <span className="hover:text-slate-900 transition-colors">Facebook Messenger</span>
            <span className="text-slate-300">•</span>
            <span className="hover:text-slate-900 transition-colors">Viber</span>
          </div>
        </div>
      </div>
    </section>
  );
}
