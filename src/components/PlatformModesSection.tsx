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
  FileText
} from "lucide-react";
import { SalesforceLogo, ZohoLogo, WhatsAppLogo } from "@/components/IntegrationLogos";

type ModeId = "team-led" | "ai-assisted" | "ai-led";

interface SubFeature {
  id: string;
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
        tag: "VOICE INFRASTRUCTURE",
        title: "CLEAR AND RELIABLE CALLING",
        desc: "Enterprise-grade connectivity and crystal-clear audio keep every customer conversation stable, secure, and carrier-grade.",
        linkText: "Explore Inbound Calling",
        linkHref: "/inbound-calling",
        badges: ["Carrier SIP Trunking", "Sub-15ms Latency", "High-Availability Uptime"],
      },
      {
        id: "collaborative-workspace",
        tag: "AGENT EXPERIENCE",
        title: "ONE COLLABORATIVE WORKSPACE",
        desc: "Consolidated softphone, live agent directory, warm transfers, and multi-party conference tools in a single browser tab.",
        linkText: "Explore Blended Call Centre",
        linkHref: "/blended-call-centre",
        badges: ["WebRTC Browser Phone", "Warm Live Transfer", "Supervisor Whisper"],
      },
      {
        id: "omnichannel-dialers",
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
        tag: "NATIVE CTI INTEGRATION",
        title: "INSTANT CRM SCREEN-POP",
        desc: "Caller identification matches incoming numbers to your database and displays account history before the agent even answers.",
        linkText: "Explore CTI Integrations",
        linkHref: "/cti-integrations",
        badges: ["Salesforce CTI", "Zoho PhoneBridge", "Sub-Second Data Sync"],
      },
      {
        id: "in-call-guidance",
        tag: "SPEECH INTELLIGENCE",
        title: "LIVE IN-CALL GUIDANCE",
        desc: "Real-time speech analytics monitors live sentiment, flags customer churn risks, and prompts reps with objection-handling scripts.",
        linkText: "Explore Speech Analytics",
        linkHref: "/speech-analytics",
        badges: ["Real-Time Sentiment", "Live QA Coaching", "Script Compliance"],
      },
      {
        id: "automated-notes",
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
        tag: "24/7 VOICEBOTS",
        title: "AUTONOMOUS AI VOICE AGENTS",
        desc: "Natural-sounding speech bots handle Tier-1 inbound calls with zero hold times, answering FAQs and verifying caller intent autonomously.",
        linkText: "Explore Conversational AI",
        linkHref: "/conversational-ai",
        badges: ["Natural Speech Synthesis", "Zero Hold Queue", "24/7 Availability"],
      },
      {
        id: "whatsapp-automation",
        tag: "META VERIFIED MESSAGING",
        title: "OFFICIAL WHATSAPP BUSINESS SUITE",
        desc: "Send proactive payment reminders, order updates, and interactive self-service buttons directly inside WhatsApp.",
        linkText: "Explore WhatsApp Business",
        linkHref: "/whatsapp-business",
        badges: ["Official Meta API", "Interactive Rich Menus", "Payment Link Sync"],
      },
      {
        id: "smart-escalation",
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

  // Synchronize pinned scroll progress with the 3 tiers
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

      // On mobile or if runway is small, don't pin
      if (runwayHeight <= 100) return;

      // Distance user has scrolled inside the pinned section
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / runwayHeight));

      // Calculate fill percentages for each of the 3 tiers:
      // Tier 1: 0.00 -> 0.33
      // Tier 2: 0.33 -> 0.66
      // Tier 3: 0.66 -> 1.00
      let activeIdx = 0;
      let f1 = 0;
      let f2 = 0;
      let f3 = 0;

      if (progress <= 0.33) {
        activeIdx = 0;
        f1 = (progress / 0.33) * 100;
        f2 = 0;
        f3 = 0;
      } else if (progress <= 0.66) {
        activeIdx = 1;
        f1 = 100;
        f2 = ((progress - 0.33) / 0.33) * 100;
        f3 = 0;
      } else {
        activeIdx = 2;
        f1 = 100;
        f2 = 100;
        f3 = ((progress - 0.66) / 0.34) * 100;
      }

      setProgressFills([
        Math.min(100, Math.max(0, Math.round(f1))),
        Math.min(100, Math.max(0, Math.round(f2))),
        Math.min(100, Math.max(0, Math.round(f3))),
      ]);

      if (!isManualScroll) {
        setActiveModeIdx(activeIdx);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScrollProgress();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isManualScroll]);

  // Click tab to jump directly to that tier and scroll runway smoothly
  const handleTabClick = (index: number) => {
    setIsManualScroll(true);
    setActiveModeIdx(index);
    setActiveSubFeatureIdx(0);

    if (containerRef.current) {
      const containerTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
      const runwayHeight = containerRef.current.offsetHeight - window.innerHeight;

      if (runwayHeight > 100) {
        // Target scroll offsets: Tier 1 -> 0%, Tier 2 -> 45%, Tier 3 -> 85%
        const targetPercent = index === 0 ? 0 : index === 1 ? 0.45 : 0.85;
        const targetScroll = containerTop + runwayHeight * targetPercent;

        window.scrollTo({
          top: targetScroll,
          behavior: "smooth",
        });
      }
    }

    // Set fills for the clicked tab
    const fills = [0, 0, 0];
    for (let i = 0; i < index; i++) fills[i] = 100;
    fills[index] = 100;
    setProgressFills(fills);

    setTimeout(() => {
      setIsManualScroll(false);
    }, 800);
  };

  const activeMode = MODES[activeModeIdx] || MODES[0];

  return (
    <section 
      ref={containerRef}
      id="how-it-works"
      className="relative bg-white border-b border-slate-200 lg:h-[260vh] scroll-mt-12"
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
      <div className="lg:sticky lg:top-20 xl:top-24 lg:h-[calc(100vh-5rem)] flex flex-col justify-center py-12 lg:py-0 overflow-hidden">
        
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
                      className={`group w-full text-left p-3 sm:p-3.5 rounded-2xl transition-all cursor-pointer border shrink-0 min-w-[200px] lg:min-w-0 ${
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
                  
                  {/* Left Column inside card: 3 Sub-features */}
                  <div className="lg:col-span-6 space-y-2.5">
                    {activeMode.features.map((feature, featIdx) => {
                      const isSelected = activeSubFeatureIdx === featIdx;
                      return (
                        <div
                          key={feature.id}
                          onClick={() => setActiveSubFeatureIdx(featIdx)}
                          className={`p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer text-left ${
                            isSelected
                              ? "bg-white border-sky-300 shadow-md translate-x-1"
                              : "bg-white/60 border-slate-200/80 hover:bg-white hover:border-slate-300"
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`w-2 h-2 rounded-full ${
                              isSelected ? "bg-emerald-500 animate-pulse" : "bg-slate-300"
                            }`} />
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                              {feature.tag}
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

                  {/* Right Column inside card: Dynamic Visual Simulation */}
                  <div className="lg:col-span-6">
                    <div className="rounded-2xl border border-slate-200 bg-white shadow-md p-5 space-y-4">
                      
                      {/* 1. VISUAL FOR TEAM-LED: Global SIP Carrier Network */}
                      {activeMode.id === "team-led" && (
                        <div className="space-y-4">
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

                          {/* Floating Network Indicators */}
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

                      {/* 2. VISUAL FOR AI-ASSISTED: CRM Screen-Pop & Speech Coaching */}
                      {activeMode.id === "ai-assisted" && (
                        <div className="space-y-4">
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

                          {/* Screen-pop simulated ticket */}
                          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-left">
                            <div className="flex justify-between items-center text-[11px]">
                              <span className="font-bold text-slate-900">Caller: Sarah Jenkins (Acme Corp)</span>
                              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">VIP Client</span>
                            </div>
                            <div className="text-xs text-slate-600">
                              Recent Ticket: #SF-8921 • Contract Renewal Q4 • Annual ARR: $48,000
                            </div>
                          </div>

                          {/* Live Speech Analytics Indicator */}
                          <div className="p-3 bg-white rounded-xl border border-sky-100 shadow-2xs space-y-1.5 text-left">
                            <div className="flex items-center justify-between text-xs">
                              <span className="font-bold text-sky-950 flex items-center gap-1.5">
                                <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                                Live Sentiment Gauge
                              </span>
                              <span className="font-mono font-bold text-emerald-600">+0.94 Positive</span>
                            </div>
                            <p className="text-[11px] text-slate-600">
                              AI In-Call Tip: Customer confirmed interest in 50 additional dialer licenses. Offer standard enterprise billing.
                            </p>
                          </div>

                          <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100">
                            <span className="flex items-center gap-1"><ZohoLogo className="w-3 h-3" /> Auto-timeline update</span>
                            <span className="text-emerald-700 font-semibold">100% Automated</span>
                          </div>
                        </div>
                      )}

                      {/* 3. VISUAL FOR AI-LED: Conversational Voicebot & WhatsApp */}
                      {activeMode.id === "ai-led" && (
                        <div className="space-y-4">
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

                          {/* Dialogue simulation */}
                          <div className="space-y-2 text-xs text-left">
                            <div className="bg-slate-100 p-2.5 rounded-xl rounded-tl-none max-w-[85%] text-slate-800">
                              &quot;Can you confirm my flight status and send details to my WhatsApp?&quot;
                            </div>
                            <div className="bg-sky-600 text-white p-2.5 rounded-xl rounded-tr-none max-w-[85%] ml-auto shadow-2xs">
                              &quot;Flight 6E-204 is on time, gate 4B. I&apos;ve sent your boarding pass link to your verified WhatsApp!&quot;
                            </div>
                          </div>

                          {/* Verification badge */}
                          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center justify-between text-xs">
                            <span className="font-bold text-emerald-950 flex items-center gap-1.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              Resolved Autonomously
                            </span>
                            <span className="text-[10px] font-mono text-emerald-700 font-bold">Zero Hold Time</span>
                          </div>

                          <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100">
                            <span className="flex items-center gap-1"><WhatsAppLogo className="w-3.5 h-3.5" /> Official Meta Verified</span>
                            <span className="text-sky-700 font-semibold">Warm Handover Ready</span>
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
