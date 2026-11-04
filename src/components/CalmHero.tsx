"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ArrowDown,
  PhoneCall, 
  MessageSquare, 
  Bot, 
  CheckCircle2, 
  Shuffle, 
  Headphones, 
  Sparkles,
  Zap,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Activity
} from "lucide-react";
import NetworkBackground from "@/components/NetworkBackground";
import { 
  SalesforceLogo, 
  ZohoLogo, 
  ZendeskLogo, 
  WhatsAppLogo, 
  FreshdeskLogo 
} from "@/components/IntegrationLogos";

interface CalmHeroProps {
  onOpenDemo: () => void;
}

type TabType = "voice" | "whatsapp" | "ai";

interface FlowStep {
  stepNum: string;
  badge: string;
  title: string;
  desc: string;
  icon: typeof PhoneCall;
}

const FLOW_DATA: Record<TabType, { label: string; tag: string; steps: FlowStep[] }> = {
  voice: {
    label: "Voice",
    tag: "SIP / PSTN",
    steps: [
      {
        stepNum: "01",
        badge: "Inbound Call",
        title: "Customer Calls +63 906 098 6036",
        desc: "Carrier-grade SIP trunk ingests call with zero hold-time queue.",
        icon: PhoneCall,
      },
      {
        stepNum: "02",
        badge: "IVR / ACD Routing",
        title: "Smart Routing Evaluates Skill & Language",
        desc: "Sub-second evaluation matches query to available Tier-2 Support agent.",
        icon: Shuffle,
      },
      {
        stepNum: "03",
        badge: "CRM Screen-Pop",
        title: "Agent Connects With Live CRM History",
        desc: "Salesforce / Zoho screen-pop displays caller profile before pickup.",
        icon: Headphones,
      },
    ],
  },
  whatsapp: {
    label: "WhatsApp",
    tag: "Official API",
    steps: [
      {
        stepNum: "01",
        badge: "Inbound Message",
        title: "Customer Sends WhatsApp Query",
        desc: "Automated greeting acknowledges message via official WhatsApp Business API.",
        icon: MessageSquare,
      },
      {
        stepNum: "02",
        badge: "Unified Queue",
        title: "Omnichannel Inbox Queues Message",
        desc: "Priority routing assigns ticket to first available omnichannel agent.",
        icon: Shuffle,
      },
      {
        stepNum: "03",
        badge: "Instant Resolution",
        title: "Agent Chats & Transcript Syncs to CRM",
        desc: "Live 2-way chat resolved inside unified console and logged to contact history.",
        icon: CheckCircle2,
      },
    ],
  },
  ai: {
    label: "AI Assistant",
    tag: "Autonomous",
    steps: [
      {
        stepNum: "01",
        badge: "Autonomous Greeting",
        title: "Conversational Voicebot Answers Instantly",
        desc: "Natural human-sounding voice handles initial greeting 24/7.",
        icon: Bot,
      },
      {
        stepNum: "02",
        badge: "Intent & Verification",
        title: "AI Understands Intent & Verifies Details",
        desc: "Answers FAQs, collects order numbers, or verifies OTP without human delay.",
        icon: Zap,
      },
      {
        stepNum: "03",
        badge: "Warm Handover",
        title: "Warm Transfer to Human Specialist",
        desc: "Complex cases bridged to live agent with full AI summary transcript.",
        icon: Sparkles,
      },
    ],
  },
};

export default function CalmHero({ onOpenDemo }: CalmHeroProps) {
  const [activeTab, setActiveTab] = useState<TabType>("voice");
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Auto-advance the 3 steps every 3.2 seconds (pauses when hovered)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 3200);
    return () => clearInterval(timer);
  }, [isPaused, activeTab]);

  // Interactive voice sample trigger
  const handleToggleVoicePreview = () => {
    if (typeof window === "undefined") return;

    if (isPlayingAudio) {
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      if ("speechSynthesis" in window) {
        const text = activeTab === "ai" 
          ? "Hello, thank you for calling CXDYNAMIQ. I'm your AI virtual assistant. How can I help you today?" 
          : "Thank you for calling CXDYNAMIQ customer care. Connecting you with our enterprise specialist now.";
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1.0;
        utterance.pitch = 1.0;
        utterance.onend = () => setIsPlayingAudio(false);
        utterance.onerror = () => setIsPlayingAudio(false);
        window.speechSynthesis.speak(utterance);
      } else {
        setTimeout(() => setIsPlayingAudio(false), 4000);
      }
    }
  };

  const currentFlow = FLOW_DATA[activeTab];

  return (
    <section 
      id="home" 
      className="relative isolate overflow-x-clip bg-[#fbfbfa] border-b border-slate-200/90 pt-10 pb-12 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-16"
    >
      {/* Subtle Dot Grid Background */}
      <NetworkBackground />

      {/* Very soft sky-50 radial glow top-right */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-0 right-0 w-[550px] h-[450px] bg-gradient-to-bl from-sky-100/40 via-sky-50/20 to-transparent rounded-full blur-3xl -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two-Column Responsive Split (visible above the fold at 1280x720) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Authoritative Copy & Verified Promise */}
          <div className="space-y-5 text-left">
            
            {/* 1. Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs text-xs font-semibold text-[#012635]">
              <span className="w-2 h-2 rounded-full bg-[#008f6d] animate-pulse" />
              <span className="mono-label">AGENTIC AI CUSTOMER EXPERIENCE</span>
            </div>

            {/* 2. H1 Headline (Clean Modern Enterprise SaaS Typography) */}
            <h1 className="heading-fluid-hero font-display text-[#002620] tracking-tight font-extrabold">
              The Agentic AI Platform That{" "}
              <span className="text-sky-700">Resolves Customer Inquiries in Real Time.</span>
            </h1>

            {/* 3. Sub-headline (Fellix/Inter readability spec: 16px, 1.625 line-height, #012635) */}
            <p className="text-base sm:text-lg text-[#012635] leading-relaxed max-w-xl font-normal">
              Combine autonomous Agentic AI with real-time human agent copilot across Voice, WhatsApp, and all digital channels — driving 72%+ containment with zero lost context.
            </p>

            {/* 4. Action CTAs (Guaranteed inline alignment without wrapping broken arrows) */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://cxq360.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold bg-[#008f6d] text-white hover:bg-[#007a5d] shadow-sm transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Experience CXdynamIQ Free</span>
                <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
              </a>

              <button
                type="button"
                onClick={onOpenDemo}
                className="btn-tactile group inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg text-sm font-semibold bg-white text-[#012635] border border-slate-300/80 hover:bg-slate-50 hover:border-slate-400 transition-all shadow-2xs cursor-pointer whitespace-nowrap"
              >
                <Play className="w-3.5 h-3.5 text-sky-600 fill-sky-600 shrink-0" />
                <span>Watch Platform Tour</span>
              </button>

              <a
                href="#omnichannel"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 underline-offset-4 hover:underline py-2 px-2 transition-colors whitespace-nowrap"
              >
                <span>Omnichannel Flow</span>
                <ArrowDown className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>

            {/* 5. Micro-line Under CTAs */}
            <div className="flex items-center gap-4 text-xs text-slate-600 flex-wrap pt-1">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#008f6d] shrink-0" />
                Free 14-day CXQ360.ai sandbox
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#008f6d] shrink-0" />
                Pre-integrated CRM &amp; WhatsApp
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#008f6d] shrink-0" />
                SOC 2 &amp; ISO 27001 Ready
              </span>
            </div>

          </div>

          {/* Right Column: CallFlowCard (Dialpad/Talkdesk Interactive Telemetry) */}
          <div 
            className="w-full max-w-md mx-auto lg:max-w-none"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="rounded-2xl border border-slate-200/90 bg-white shadow-xl shadow-slate-200/50 p-5 sm:p-6 space-y-4">
              
              {/* Header: Segmented Control Tabs + Live Indicator */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="inline-flex p-1 bg-slate-100 rounded-lg text-xs font-semibold gap-1">
                  {(["voice", "whatsapp", "ai"] as TabType[]).map((tabKey) => {
                    const isCurrent = activeTab === tabKey;
                    return (
                      <button
                        key={tabKey}
                        onClick={() => {
                          setActiveTab(tabKey);
                          setActiveStep(0);
                        }}
                        className={`px-3 py-1.5 rounded-md transition-all cursor-pointer capitalize text-xs ${
                          isCurrent
                            ? "bg-white text-[#012635] shadow-xs font-bold"
                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                        }`}
                      >
                        {FLOW_DATA[tabKey].label}
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-sky-700 bg-sky-50 border border-sky-100 px-2 py-0.5 rounded font-semibold hidden sm:inline-block">
                    {currentFlow.tag}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live
                  </span>
                </div>
              </div>

              {/* Body: 3-Step Vertical Timeline */}
              <div className="space-y-2.5">
                {currentFlow.steps.map((step, idx) => {
                  const Icon = step.icon;
                  const isCurrent = activeStep === idx;
                  return (
                    <div
                      key={step.stepNum}
                      onClick={() => setActiveStep(idx)}
                      className={`p-3 rounded-xl border transition-all cursor-pointer text-left ${
                        isCurrent
                          ? "border-sky-400 bg-sky-50/70 shadow-xs"
                          : "border-slate-100 bg-slate-50/50 hover:bg-slate-100/60"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                            isCurrent
                              ? "bg-sky-600 text-white shadow-2xs"
                              : "bg-slate-200 text-slate-600"
                          }`}>
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-sky-800 block font-mono">
                              {step.badge}
                            </span>
                            <h4 className="text-xs sm:text-[13px] font-bold text-[#012635] leading-tight">
                              {step.title}
                            </h4>
                          </div>
                        </div>

                        {/* Status indicator / Live Frequency Bars */}
                        <div className="flex items-center gap-1.5 shrink-0 pl-2">
                          {isCurrent ? (
                            <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-sky-700 bg-white px-2 py-0.5 rounded border border-sky-200">
                              {/* Animated Waveform bars */}
                              <span className="inline-flex items-end gap-0.5 h-3">
                                <span className="w-0.5 bg-sky-500 rounded-full animate-pulse h-2" />
                                <span className="w-0.5 bg-sky-600 rounded-full animate-pulse h-3 [animation-delay:150ms]" />
                                <span className="w-0.5 bg-sky-500 rounded-full animate-pulse h-1.5 [animation-delay:300ms]" />
                                <span className="w-0.5 bg-sky-600 rounded-full animate-pulse h-2.5 [animation-delay:450ms]" />
                              </span>
                              <span>Active</span>
                            </span>
                          ) : (
                            <span className="text-[10px] font-mono text-slate-400">
                              {step.stepNum}
                            </span>
                          )}
                        </div>
                      </div>

                      <p className="text-[11px] text-slate-600 mt-1.5 pl-9 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Interactive Telemetry / Audio Trigger Bar (Talkdesk / Dialpad feel) */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2 text-xs">
                <button
                  type="button"
                  onClick={handleToggleVoicePreview}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                    isPlayingAudio
                      ? "bg-emerald-50 text-emerald-800 border-emerald-300 ring-2 ring-emerald-200/50"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {isPlayingAudio ? (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-emerald-600 animate-bounce" />
                      <span>Speaking Sample... (Stop)</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 text-sky-600 fill-sky-600" />
                      <span>Listen to Audio Greeting</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-1 text-[11px] font-mono text-slate-500">
                  <Activity className="w-3 h-3 text-emerald-600" />
                  <span>Sub-15ms Latency</span>
                </div>
              </div>

            </div>

            {/* Under Card: Caption + Grayscale Integration Logos */}
            <div className="pt-3 px-2 space-y-2">
              <div className="text-[11px] font-medium text-slate-500 text-center sm:text-left">
                Works natively with your existing tools
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-5 sm:gap-6 opacity-75 hover:opacity-100 transition-opacity">
                <span className="flex items-center gap-1 text-xs font-semibold text-slate-700">
                  <SalesforceLogo className="w-4 h-4" />
                  <span className="hidden sm:inline">Salesforce</span>
                </span>
                <span className="flex items-center gap-1 text-xs font-semibold text-slate-700">
                  <ZohoLogo className="w-4 h-4" />
                  <span className="hidden sm:inline">Zoho</span>
                </span>
                <span className="flex items-center gap-1 text-xs font-semibold text-slate-700">
                  <ZendeskLogo className="w-4 h-4" />
                  <span className="hidden sm:inline">Zendesk</span>
                </span>
                <span className="flex items-center gap-1 text-xs font-semibold text-slate-700">
                  <WhatsAppLogo className="w-4 h-4" />
                  <span className="hidden sm:inline">WhatsApp</span>
                </span>
                <span className="flex items-center gap-1 text-xs font-semibold text-slate-700">
                  <FreshdeskLogo className="w-4 h-4" />
                  <span className="hidden sm:inline">Freshdesk</span>
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
