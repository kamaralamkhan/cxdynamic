"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { 
  Users, 
  Sparkles, 
  Bot, 
  PhoneCall, 
  Shuffle, 
  Headphones, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Activity, 
  Globe2, 
  MessageSquare,
  MessageCircle,
  FileText,
  Mic,
  Volume2,
  BarChart3,
  PhoneForwarded,
  Clock,
  UserCheck
} from "lucide-react";
import { SalesforceLogo, ZohoLogo, WhatsAppLogo } from "@/components/IntegrationLogos";

type ModeId = "team-led" | "ai-assisted" | "ai-led";

interface SubFeature {
  id: string;
  stepNumber: string;
  tag: string;
  title: string;
  desc: string;
  linkText: string;
  linkHref: string;
  badges: string[];
}

interface PlatformMode {
  id: ModeId;
  label: string;
  navTitle: string;
  navIcon: typeof Users;
  headline: string;
  subhead: string;
  features: SubFeature[];
}

const MODES: PlatformMode[] = [
  {
    id: "team-led",
    label: "TEAM-LED",
    navTitle: "Team-Led Telephony",
    navIcon: Users,
    headline: "Powered by a modern cloud phone platform.",
    subhead: "High-fidelity carrier SIP trunking, predictive pacing dialers, and blended queue distribution empower your human agents to resolve calls with zero dropped audio.",
    features: [
      {
        id: "clear-calling",
        stepNumber: "01",
        tag: "VOICE INFRASTRUCTURE",
        title: "CLEAR AND RELIABLE CALLING",
        desc: "Enterprise-grade connectivity and crystal-clear audio keep every customer conversation stable, secure, and carrier-grade.",
        linkText: "Explore Inbound Calling",
        linkHref: "/inbound-calling",
        badges: ["Carrier SIP Trunking", "Sub-15ms Latency", "High-Availability Uptime"],
      },
      {
        id: "collaborative-workspace",
        stepNumber: "02",
        tag: "AGENT EXPERIENCE",
        title: "ONE COLLABORATIVE WORKSPACE",
        desc: "Consolidated softphone, live agent directory, warm transfers, and multi-party conference tools in a single browser tab.",
        linkText: "Explore Blended Call Centre",
        linkHref: "/blended-call-centre",
        badges: ["WebRTC Browser Phone", "Warm Live Transfer", "Supervisor Whisper"],
      },
      {
        id: "omnichannel-dialers",
        stepNumber: "03",
        tag: "CAMPAIGN PACING",
        title: "CONNECTED ACROSS EVERY CHANNEL",
        desc: "Seamlessly blend high-velocity outbound sales dialers with inbound customer support queues without switching tools.",
        linkText: "Explore Sales Dialers",
        linkHref: "/auto-dialer",
        badges: ["Predictive Dialer", "Auto & Power Modes", "AMD Voice Detection"],
      },
    ],
  },
  {
    id: "ai-assisted",
    label: "AI-ASSISTED",
    navTitle: "AI-Assisted Operations",
    navIcon: Sparkles,
    headline: "Live in-call intelligence for every agent.",
    subhead: "Native integrations with Salesforce, Zoho, Zendesk and HubSpot automatically sync customer context, trigger screen pops, and generate AI call summaries.",
    features: [
      {
        id: "crm-screen-pop",
        stepNumber: "01",
        tag: "NATIVE CTI INTEGRATION",
        title: "INSTANT CRM SCREEN-POP",
        desc: "Caller identification matches incoming numbers to your database and displays account history before the agent even answers.",
        linkText: "Explore CTI Integrations",
        linkHref: "/cti-integrations",
        badges: ["Salesforce CTI", "Zoho PhoneBridge", "Sub-Second Data Sync"],
      },
      {
        id: "in-call-guidance",
        stepNumber: "02",
        tag: "SPEECH INTELLIGENCE",
        title: "LIVE IN-CALL GUIDANCE",
        desc: "Real-time speech analytics monitors live sentiment, flags customer churn risks, and prompts reps with objection-handling scripts.",
        linkText: "Explore Speech Analytics",
        linkHref: "/speech-analytics",
        badges: ["Real-Time Sentiment", "Live QA Coaching", "Script Compliance"],
      },
      {
        id: "automated-notes",
        stepNumber: "03",
        tag: "ZERO MANUAL WORK",
        title: "AUTOMATED POST-CALL NOTES",
        desc: "Eliminate manual after-call wrap-up. Automated transcription logs key action items, tags, and disposition codes straight to CRM.",
        linkText: "Explore CRM Integrations",
        linkHref: "/crm-integrations",
        badges: ["AI Auto-Transcription", "CRM Timeline Sync", "Auto-Disposition"],
      },
    ],
  },
  {
    id: "ai-led",
    label: "AI-LED",
    navTitle: "AI-Led Autonomous",
    navIcon: Bot,
    headline: "Autonomous customer conversations at scale.",
    subhead: "Human-sounding Conversational AI voicebots and official WhatsApp Business bots resolve routine inquiries, verify accounts, and schedule callbacks around the clock.",
    features: [
      {
        id: "autonomous-voice",
        stepNumber: "01",
        tag: "24/7 VOICEBOTS",
        title: "AUTONOMOUS AI VOICE AGENTS",
        desc: "Natural-sounding speech bots handle Tier-1 inbound calls with zero hold times, answering FAQs and verifying caller intent autonomously.",
        linkText: "Explore Conversational AI",
        linkHref: "/conversational-ai",
        badges: ["Natural Speech Synthesis", "Zero Hold Queue", "24/7 Availability"],
      },
      {
        id: "whatsapp-automation",
        stepNumber: "02",
        tag: "META VERIFIED MESSAGING",
        title: "OFFICIAL WHATSAPP BUSINESS SUITE",
        desc: "Send proactive payment reminders, order updates, and interactive self-service buttons directly inside WhatsApp.",
        linkText: "Explore WhatsApp Business",
        linkHref: "/whatsapp-business",
        badges: ["Official Meta API", "Interactive Rich Menus", "Payment Link Sync"],
      },
      {
        id: "smart-escalation",
        stepNumber: "03",
        tag: "HYBRID HANDOVER",
        title: "INTELLIGENT OMNICHANNEL ROUTING",
        desc: "Complex customer queries seamlessly escalate to human specialists with the complete bot conversation transcript attached.",
        linkText: "Explore Omnichannel Routing",
        linkHref: "/omnichannel-routing",
        badges: ["Warm Live Handover", "Context Preserved", "Multi-Skill Matrix"],
      },
    ],
  },
];

export default function PlatformModesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [activeModeIdx, setActiveModeIdx] = useState(0);
  const [activeSubFeatureIdx, setActiveSubFeatureIdx] = useState(0);
  const [progressFills, setProgressFills] = useState<number[]>([0, 0, 0]);
  const [isManualScroll, setIsManualScroll] = useState(false);

  // Synchronize pinned scroll progress with both the 3 Tiers AND the 3 Steps inside each Tier
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScrollProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    const updateScrollProgress = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const runwayHeight = rect.height - viewportHeight;

      // On mobile or if runway is negligible, skip scroll lock calculation
      if (runwayHeight <= 100) return;

      // Distance user has scrolled inside the pinned section (0.0 to 1.0)
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / runwayHeight));

      // Calculate Tier (0, 1, 2) and Sub-feature step (0, 1, 2) inside that Tier
      let activeIdx = 0;
      let activeStep = 0;
      let f1 = 0;
      let f2 = 0;
      let f3 = 0;

      if (progress <= 0.333) {
        activeIdx = 0;
        const tierProgress = progress / 0.333; // 0.0 to 1.0 within Tier 1
        f1 = tierProgress * 100;
        f2 = 0;
        f3 = 0;
        activeStep = Math.min(2, Math.floor(tierProgress * 3));
      } else if (progress <= 0.666) {
        activeIdx = 1;
        const tierProgress = (progress - 0.333) / 0.333; // 0.0 to 1.0 within Tier 2
        f1 = 100;
        f2 = tierProgress * 100;
        f3 = 0;
        activeStep = Math.min(2, Math.floor(tierProgress * 3));
      } else {
        activeIdx = 2;
        const tierProgress = (progress - 0.666) / 0.334; // 0.0 to 1.0 within Tier 3
        f1 = 100;
        f2 = 100;
        f3 = tierProgress * 100;
        activeStep = Math.min(2, Math.floor(tierProgress * 3));
      }

      setProgressFills([
        Math.min(100, Math.max(0, Math.round(f1))),
        Math.min(100, Math.max(0, Math.round(f2))),
        Math.min(100, Math.max(0, Math.round(f3))),
      ]);

      if (!isManualScroll) {
        setActiveModeIdx(activeIdx);
        setActiveSubFeatureIdx(activeStep);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScrollProgress();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isManualScroll]);

  // Click tab to jump directly to that tier and position scroll runway
  const handleTabClick = (index: number) => {
    setIsManualScroll(true);
    setActiveModeIdx(index);
    setActiveSubFeatureIdx(0);

    if (containerRef.current) {
      const containerTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
      const runwayHeight = containerRef.current.offsetHeight - window.innerHeight;

      if (runwayHeight > 100) {
        const targetPercent = index === 0 ? 0.05 : index === 1 ? 0.38 : 0.72;
        const targetScroll = containerTop + runwayHeight * targetPercent;

        window.scrollTo({
          top: targetScroll,
          behavior: "smooth",
        });
      }
    }

    const fills = [0, 0, 0];
    for (let i = 0; i < index; i++) fills[i] = 100;
    fills[index] = 100;
    setProgressFills(fills);

    setTimeout(() => {
      setIsManualScroll(false);
    }, 800);
  };

  const activeMode = MODES[activeModeIdx] || MODES[0];
  const activeSubFeature = activeMode.features[activeSubFeatureIdx] || activeMode.features[0];

  return (
    <section 
      ref={containerRef}
      id="how-it-works"
      className="relative bg-white border-b border-slate-200 lg:h-[350vh] scroll-mt-12"
    >
      <div id="platform-modes" className="sr-only" aria-hidden="true" />
      
      {/* Background radial glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-sky-50 via-cyan-50/40 to-transparent rounded-full blur-3xl -z-10" 
      />

      {/* ==================================================================== */}
      {/* STICKY VIEWPORT CONTAINER: Stays pinned while scrolling through tiers */}
      {/* ==================================================================== */}
      <div className="lg:sticky lg:top-20 xl:top-24 lg:h-[calc(100vh-5rem)] flex flex-col justify-center py-10 lg:py-0 lg:overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* ======================================================== */}
            {/* 1. LEFT SUB-NAVIGATION (Aircall Inspired Sticky Subnav)   */}
            {/* ======================================================== */}
            <aside className="lg:col-span-3 space-y-4">
              
              <div className="hidden lg:block space-y-1 pb-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Platform Architecture
                </span>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  Three Operating Modes
                </h3>
              </div>

              {/* Subnav Pill Links with Dynamic Scroll Progress Bars */}
              <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-none">
                {MODES.map((mode, idx) => {
                  const Icon = mode.navIcon;
                  const isCurrent = activeModeIdx === idx;
                  const fillPercent = progressFills[idx] || (isCurrent ? 100 : 0);

                  return (
                    <button
                      key={mode.id}
                      onClick={() => handleTabClick(idx)}
                      className={`group w-full text-left p-3 sm:p-3.5 rounded-2xl transition-all cursor-pointer border shrink-0 min-w-[160px] sm:min-w-[180px] lg:min-w-0 ${
                        isCurrent
                          ? "bg-slate-900 text-white border-slate-900 shadow-md"
                          : "bg-slate-50 text-slate-600 border-slate-200/80 hover:bg-slate-100/80 hover:text-slate-900"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <Icon className={`w-4 h-4 transition-colors ${
                            isCurrent ? "text-sky-400" : "text-slate-400 group-hover:text-slate-700"
                          }`} />
                          <span className="text-xs font-bold uppercase tracking-wider font-mono">
                            {mode.label}
                          </span>
                        </div>
                        
                        <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded ${
                          isCurrent 
                            ? "bg-white/10 text-sky-300" 
                            : "bg-slate-200/60 text-slate-500"
                        }`}>
                          {mode.id === "team-led" ? "Tier 1" : mode.id === "ai-assisted" ? "Tier 2" : "Tier 3"}
                        </span>
                      </div>

                      <div className={`text-xs font-semibold mt-1 transition-colors ${
                        isCurrent ? "text-slate-200" : "text-slate-700"
                      }`}>
                        {mode.navTitle}
                      </div>

                      {/* Dynamic Progress Bar Fill (fills from 0% to 100% as user scrolls) */}
                      <div className="mt-2.5 w-full h-1 bg-slate-200/40 rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-150 ease-out rounded-full ${
                            isCurrent ? "bg-sky-400" : "bg-transparent"
                          }`}
                          style={{ width: `${isCurrent ? fillPercent : 0}%` }}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Quick Consultation Prompt */}
              <div className="hidden lg:block pt-3 border-t border-slate-100 space-y-1.5">
                <span className="text-xs text-slate-500 block">
                  Not sure which mode suits your workflow?
                </span>
                <Link
                  href="/contact-us"
                  className="text-xs font-semibold text-sky-700 hover:text-sky-800 hover:underline inline-flex items-center gap-1"
                >
                  <span>Talk to a Solutions Architect</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </aside>

            {/* ======================================================== */}
            {/* 2. RIGHT PINNED CONTENT: Active Mode Card (Transitions)   */}
            {/* ======================================================== */}
            <div className="lg:col-span-9 space-y-4">
              
              {/* Header for current active mode */}
              <div className="space-y-1.5 text-left transition-all duration-300">
                <div className="flex items-center gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-800 text-xs font-semibold uppercase tracking-wider font-mono">
                    <span>{activeMode.label}</span>
                    <span>•</span>
                    <span>
                      {activeMode.id === "team-led" 
                        ? "Human Agents" 
                        : activeMode.id === "ai-assisted" 
                        ? "Agent Augmentation" 
                        : "Autonomous Bots"}
                    </span>
                  </div>

                  {/* Active Step Pill */}
                  <span className="text-[11px] font-mono font-bold text-sky-700 bg-sky-100/80 border border-sky-200 px-2.5 py-0.5 rounded-full">
                    Step {activeSubFeatureIdx + 1} of 3
                  </span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {activeMode.headline}
                </h2>
                
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                  {activeMode.subhead}
                </p>
              </div>

              {/* Rounded Sleek Platform Container (Pinned in viewport) */}
              <div 
                key={activeMode.id}
                className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50/80 via-sky-50/30 to-cyan-50/20 p-5 sm:p-6 lg:p-7 shadow-lg shadow-slate-100 transition-all duration-300 animate-in fade-in"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Left Column inside card: 3 Sub-features with animated stepping */}
                  <div className="lg:col-span-6 space-y-2.5">
                    {activeMode.features.map((feature, featIdx) => {
                      const isSelected = activeSubFeatureIdx === featIdx;
                      return (
                        <div
                          key={feature.id}
                          onClick={() => setActiveSubFeatureIdx(featIdx)}
                          className={`p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 cursor-pointer text-left ${
                            isSelected
                              ? "bg-white border-sky-400 shadow-md ring-2 ring-sky-300/30 translate-x-1"
                              : "bg-white/60 border-slate-200/80 hover:bg-white hover:border-slate-300"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <span className={`w-2 h-2 rounded-full ${
                                isSelected ? "bg-emerald-500 animate-pulse" : "bg-slate-300"
                              }`} />
                              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                                {feature.tag}
                              </span>
                            </div>
                            <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                              isSelected ? "bg-sky-100 text-sky-800" : "bg-slate-100 text-slate-400"
                            }`}>
                              0{featIdx + 1}
                            </span>
                          </div>

                          <h4 className={`text-xs sm:text-sm font-bold tracking-tight uppercase ${
                            isSelected ? "text-sky-900" : "text-slate-800"
                          }`}>
                            {feature.title}
                          </h4>

                          {isSelected && (
                            <div className="mt-2 space-y-2 animate-in fade-in duration-200">
                              <p className="text-xs text-slate-600 leading-relaxed">
                                {feature.desc}
                              </p>

                              <div className="flex flex-wrap gap-1 pt-0.5">
                                {feature.badges.map((b, bIdx) => (
                                  <span 
                                    key={bIdx}
                                    className="text-[9px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200"
                                  >
                                    {b}
                                  </span>
                                ))}
                              </div>

                              <div className="pt-1">
                                <Link
                                  href={feature.linkHref}
                                  className="text-xs font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1 group/link"
                                >
                                  <span>{feature.linkText}</span>
                                  <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                                </Link>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Right Column inside card: Step-Synchronized Visual Simulation */}
                  <div className="lg:col-span-6">
                    <div className="rounded-2xl border border-slate-200 bg-white shadow-md p-5 space-y-4 min-h-[340px] flex flex-col justify-between">
                      
                      {/* ======================================================== */}
                      {/* 1. VISUAL SIMULATIONS FOR TIER 1: TEAM-LED               */}
                      {/* ======================================================== */}
                      {activeMode.id === "team-led" && activeSubFeatureIdx === 0 && (
                        <div className="space-y-4 animate-in fade-in duration-300">
                          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                            <div className="flex items-center gap-2">
                              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                              <span className="text-xs font-bold text-slate-900">
                                Carrier Telecom Mesh
                              </span>
                            </div>
                            <span className="text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                              SIP Trunk Active
                            </span>
                          </div>

                          <div className="space-y-2.5">
                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                                <Globe2 className="w-4 h-4" />
                              </div>
                              <div className="text-left">
                                <div className="text-xs font-bold text-slate-900">Enterprise-grade Reliability</div>
                                <div className="text-[11px] text-slate-500 font-mono">High-Availability Telephony Architecture</div>
                              </div>
                            </div>

                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                                <Activity className="w-4 h-4" />
                              </div>
                              <div className="text-left">
                                <div className="text-xs font-bold text-slate-900">HD Voice Processing</div>
                                <div className="text-[11px] text-slate-500 font-mono">Crystal-Clear G.711 &amp; Opus Codecs</div>
                              </div>
                            </div>

                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                                <ShieldCheck className="w-4 h-4" />
                              </div>
                              <div className="text-left">
                                <div className="text-xs font-bold text-slate-900">End-to-End Encryption</div>
                                <div className="text-[11px] text-slate-500 font-mono">TLS Signaling &amp; Secure SRTP Media</div>
                              </div>
                            </div>
                          </div>

                          <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100">
                            <span>SIP Carrier: Multi-zone routing</span>
                            <span className="font-mono font-bold text-slate-900">0% Packet Loss</span>
                          </div>
                        </div>
                      )}

                      {activeMode.id === "team-led" && activeSubFeatureIdx === 1 && (
                        <div className="space-y-4 animate-in fade-in duration-300">
                          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                            <div className="flex items-center gap-2">
                              <Headphones className="w-4 h-4 text-sky-600" />
                              <span className="text-xs font-bold text-slate-900">
                                Unified Agent Softphone
                              </span>
                            </div>
                            <span className="text-[10px] font-mono font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                              Live Call · 02:45
                            </span>
                          </div>

                          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-left">
                            <div className="flex items-center justify-between text-[11px]">
                              <span className="font-bold text-slate-900">Caller: +1 (415) 890-2341</span>
                              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">Connected</span>
                            </div>
                            <div className="flex items-center gap-1.5 pt-1">
                              <div className="w-1.5 h-4 bg-emerald-500 rounded-full animate-pulse" />
                              <div className="w-1.5 h-6 bg-emerald-500 rounded-full animate-pulse" />
                              <div className="w-1.5 h-3 bg-emerald-500 rounded-full animate-pulse" />
                              <div className="w-1.5 h-7 bg-emerald-500 rounded-full animate-pulse" />
                              <div className="w-1.5 h-5 bg-emerald-500 rounded-full animate-pulse" />
                              <span className="text-[10px] font-mono text-slate-500 ml-2">Audio Stream Active</span>
                            </div>
                          </div>

                          <div className="grid grid-cols-3 gap-2 text-center text-xs">
                            <div className="p-2 bg-slate-100 rounded-lg font-semibold text-slate-700">Mute</div>
                            <div className="p-2 bg-slate-100 rounded-lg font-semibold text-slate-700">Hold</div>
                            <div className="p-2 bg-sky-100 text-sky-800 rounded-lg font-bold">Transfer</div>
                          </div>

                          <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100">
                            <span>Supervisor Whisper: Active</span>
                            <span className="text-emerald-700 font-bold">1-Click Warm Transfer</span>
                          </div>
                        </div>
                      )}

                      {activeMode.id === "team-led" && activeSubFeatureIdx === 2 && (
                        <div className="space-y-4 animate-in fade-in duration-300">
                          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                            <div className="flex items-center gap-2">
                              <Zap className="w-4 h-4 text-amber-500" />
                              <span className="text-xs font-bold text-slate-900">
                                Predictive Campaign Pacing
                              </span>
                            </div>
                            <span className="text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                              AMD Filter Active
                            </span>
                          </div>

                          <div className="grid grid-cols-2 gap-2 text-left">
                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                              <div className="text-[10px] uppercase font-bold text-slate-400">Pacing Speed</div>
                              <div className="text-lg font-extrabold text-slate-900 font-mono mt-0.5">84 calls/hr</div>
                              <span className="text-[10px] text-emerald-600 font-semibold">3.2x vs manual</span>
                            </div>
                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                              <div className="text-[10px] uppercase font-bold text-slate-400">Voicemail Filter</div>
                              <div className="text-lg font-extrabold text-slate-900 font-mono mt-0.5">&lt;380ms</div>
                              <span className="text-[10px] text-sky-600 font-semibold">12 dropped silent</span>
                            </div>
                          </div>

                          <div className="p-2.5 bg-emerald-50/80 rounded-xl border border-emerald-200 text-xs text-emerald-950 font-medium text-left">
                            Live Rep Utilization: 82% talk time (Industry avg: 28%)
                          </div>

                          <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100">
                            <span>Pacing Mode: Smart Adaptive</span>
                            <span className="text-slate-900 font-bold">100% Live Prospects</span>
                          </div>
                        </div>
                      )}

                      {/* ======================================================== */}
                      {/* 2. VISUAL SIMULATIONS FOR TIER 2: AI-ASSISTED            */}
                      {/* ======================================================== */}
                      {activeMode.id === "ai-assisted" && activeSubFeatureIdx === 0 && (
                        <div className="space-y-4 animate-in fade-in duration-300">
                          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                            <div className="flex items-center gap-2">
                              <SalesforceLogo className="w-4 h-4" />
                              <span className="text-xs font-bold text-slate-900">
                                Live CTI Screen-Pop
                              </span>
                            </div>
                            <span className="text-[10px] font-mono font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                              Instant Sync
                            </span>
                          </div>

                          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-left">
                            <div className="flex justify-between items-center text-[11px]">
                              <span className="font-bold text-slate-900">Caller: Sarah Jenkins (Apex Global)</span>
                              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">VIP Client</span>
                            </div>
                            <div className="text-xs text-slate-600">
                              Recent Ticket: #SF-8921 • Contract Renewal Q4 • Annual ARR: $48,000
                            </div>
                          </div>

                          <div className="p-3 bg-white rounded-xl border border-sky-100 shadow-2xs space-y-1 text-left">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-sky-800">Account Timeline</span>
                            <p className="text-xs text-slate-700">Last interaction 3 days ago via email with Account Exec David.</p>
                          </div>

                          <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100">
                            <span className="flex items-center gap-1"><ZohoLogo className="w-3 h-3" /> Auto-timeline update</span>
                            <span className="text-emerald-700 font-semibold">100% Automated</span>
                          </div>
                        </div>
                      )}

                      {activeMode.id === "ai-assisted" && activeSubFeatureIdx === 1 && (
                        <div className="space-y-4 animate-in fade-in duration-300">
                          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                            <div className="flex items-center gap-2">
                              <Sparkles className="w-4 h-4 text-sky-600" />
                              <span className="text-xs font-bold text-slate-900">
                                Live In-Call Guidance
                              </span>
                            </div>
                            <span className="text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                              Real-Time Speech
                            </span>
                          </div>

                          <div className="p-3 bg-white rounded-xl border border-sky-100 shadow-2xs space-y-1.5 text-left">
                            <div className="flex items-center justify-between text-xs">
                              <span className="font-bold text-sky-950 flex items-center gap-1.5">
                                Live Sentiment Gauge
                              </span>
                              <span className="font-mono font-bold text-emerald-600">+0.94 Positive</span>
                            </div>
                            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                              <div className="h-full bg-emerald-500 w-[94%]" />
                            </div>
                          </div>

                          <div className="p-3.5 bg-sky-50/80 rounded-xl border border-sky-200 space-y-1 text-left">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-sky-900">AI In-Call Script Tip</span>
                            <p className="text-xs text-slate-800 leading-snug">
                              Customer confirmed expanding to 50 agent seats. Prompt standard enterprise discount code: <strong className="font-mono text-sky-700">ENT-50</strong>.
                            </p>
                          </div>

                          <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100">
                            <span>Script Compliance: 100%</span>
                            <span className="text-sky-700 font-bold">Objection Handled</span>
                          </div>
                        </div>
                      )}

                      {activeMode.id === "ai-assisted" && activeSubFeatureIdx === 2 && (
                        <div className="space-y-4 animate-in fade-in duration-300">
                          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                            <div className="flex items-center gap-2">
                              <FileText className="w-4 h-4 text-purple-600" />
                              <span className="text-xs font-bold text-slate-900">
                                Automated Post-Call Wrap-up
                              </span>
                            </div>
                            <span className="text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                              AI Summary Ready
                            </span>
                          </div>

                          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5 text-left">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Auto-Generated Summary</span>
                            <p className="text-xs text-slate-700 leading-relaxed">
                              &quot;Caller requested Q4 renewal terms and WhatsApp confirmation. Agreed to 50 additional licenses. Follow-up demo scheduled for Thursday.&quot;
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-1.5">
                            <span className="text-[10px] font-mono bg-sky-100 text-sky-800 px-2 py-0.5 rounded">#ContractRenewal</span>
                            <span className="text-[10px] font-mono bg-purple-100 text-purple-800 px-2 py-0.5 rounded">#WhatsAppConfirm</span>
                            <span className="text-[10px] font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">#WonOpportunity</span>
                          </div>

                          <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100">
                            <span>Manual Wrap-up Time Saved: 4.5m</span>
                            <span className="text-emerald-700 font-bold">Synced to CRM</span>
                          </div>
                        </div>
                      )}

                      {/* ======================================================== */}
                      {/* 3. VISUAL SIMULATIONS FOR TIER 3: AI-LED                 */}
                      {/* ======================================================== */}
                      {activeMode.id === "ai-led" && activeSubFeatureIdx === 0 && (
                        <div className="space-y-4 animate-in fade-in duration-300">
                          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                            <div className="flex items-center gap-2">
                              <Bot className="w-4 h-4 text-sky-600" />
                              <span className="text-xs font-bold text-slate-900">
                                Autonomous Resolution Engine
                              </span>
                            </div>
                            <span className="text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                              0.8s Response
                            </span>
                          </div>

                          <div className="space-y-2 text-xs text-left">
                            <div className="bg-slate-100 p-2.5 rounded-xl rounded-tl-none max-w-[85%] text-slate-800">
                              &quot;Can you verify my payment status and send details to my WhatsApp?&quot;
                            </div>
                            <div className="bg-sky-600 text-white p-2.5 rounded-xl rounded-tr-none max-w-[85%] ml-auto shadow-2xs">
                              &quot;Invoice #INV-2901 of $1,250 cleared at 10:15 AM. I&apos;ve sent your receipt link to your WhatsApp!&quot;
                            </div>
                          </div>

                          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center justify-between text-xs">
                            <span className="font-bold text-emerald-950 flex items-center gap-1.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              Resolved Autonomously
                            </span>
                            <span className="text-[10px] font-mono text-emerald-700 font-bold">Zero Hold Time</span>
                          </div>

                          <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100">
                            <span>Availability: 24/7/365</span>
                            <span className="text-sky-700 font-semibold">Zero Wait Queue</span>
                          </div>
                        </div>
                      )}

                      {activeMode.id === "ai-led" && activeSubFeatureIdx === 1 && (
                        <div className="space-y-4 animate-in fade-in duration-300">
                          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                            <div className="flex items-center gap-2">
                              <WhatsAppLogo className="w-4 h-4" />
                              <span className="text-xs font-bold text-slate-900">
                                Official WhatsApp Business Suite
                              </span>
                            </div>
                            <span className="text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                              Meta Verified
                            </span>
                          </div>

                          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5 text-left">
                            <div className="text-xs text-slate-800 font-medium">
                              &quot;Hello John! Your package #CX-882 is scheduled for delivery today by 4 PM.&quot;
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-center text-xs">
                              <div className="p-2 bg-white rounded-lg border border-slate-200 font-semibold text-slate-800 shadow-2xs">
                                📍 Live Courier Map
                              </div>
                              <div className="p-2 bg-emerald-600 text-white rounded-lg font-bold shadow-2xs">
                                💳 Pay on Delivery
                              </div>
                            </div>
                          </div>

                          <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100">
                            <span>Interactive Rich Buttons</span>
                            <span className="text-emerald-700 font-bold">100% Delivery Sync</span>
                          </div>
                        </div>
                      )}

                      {activeMode.id === "ai-led" && activeSubFeatureIdx === 2 && (
                        <div className="space-y-4 animate-in fade-in duration-300">
                          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                            <div className="flex items-center gap-2">
                              <UserCheck className="w-4 h-4 text-sky-600" />
                              <span className="text-xs font-bold text-slate-900">
                                Warm Live Specialist Handover
                              </span>
                            </div>
                            <span className="text-[10px] font-mono font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                              Context Intact
                            </span>
                          </div>

                          <div className="p-3 bg-purple-50/70 rounded-xl border border-purple-200 space-y-1.5 text-left">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-purple-900">AI Handover Summary Passed to Agent</span>
                            <p className="text-xs text-slate-700 leading-snug">
                              &quot;Customer verified via OTP. Requesting custom enterprise SLA and multi-region SIP failover pricing.&quot;
                            </p>
                          </div>

                          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                            <span className="font-semibold text-slate-800">Bridging to Senior Tier-2 Rep...</span>
                            <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">0s Delay</span>
                          </div>

                          <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100">
                            <span>Omnichannel Transcript: 100% Passed</span>
                            <span className="text-sky-700 font-bold">Warm Connect</span>
                          </div>
                        </div>
                      )}

                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
