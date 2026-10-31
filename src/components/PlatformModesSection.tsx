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
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [activeModeIdx, setActiveModeIdx] = useState(0);
  const [activeSubFeatureIdx, setActiveSubFeatureIdx] = useState(0);
  const [progressFills, setProgressFills] = useState<number[]>([100, 0, 0]);
  const [isManualScroll, setIsManualScroll] = useState(false);

  // Track vertical scroll position and update progress bars
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

      const viewportHeight = window.innerHeight;
      const triggerPoint = viewportHeight * 0.45;
      const containerRect = containerRef.current.getBoundingClientRect();

      // If user hasn't reached the platform modes section yet, stay on Tier 1
      if (containerRect.top > triggerPoint) {
        setProgressFills([0, 0, 0]);
        if (!isManualScroll) {
          setActiveModeIdx(0);
        }
        return;
      }

      const newFills: number[] = [0, 0, 0];
      let currentActive = 0;

      sectionRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();

        // When the top of this section reaches the trigger point, set it active
        if (rect.top <= triggerPoint) {
          currentActive = index;
        }

        // Progress fill calculation
        if (rect.top > triggerPoint) {
          newFills[index] = 0;
        } else if (rect.bottom < triggerPoint) {
          newFills[index] = 100;
        } else {
          const progress = ((triggerPoint - rect.top) / rect.height) * 100;
          newFills[index] = Math.min(Math.max(Math.round(progress), 0), 100);
        }
      });

      // If user scrolled completely past this container, clamp to Tier 3
      if (containerRect.bottom < triggerPoint) {
        currentActive = 2;
        newFills[0] = 100;
        newFills[1] = 100;
        newFills[2] = 100;
      }

      setProgressFills(newFills);
      if (!isManualScroll) {
        setActiveModeIdx(currentActive);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScrollProgress();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isManualScroll]);

  // Click tab to scroll directly to that section runway
  const handleTabClick = (index: number) => {
    setIsManualScroll(true);
    setActiveModeIdx(index);
    setActiveSubFeatureIdx(0);

    const targetEl = sectionRefs.current[index];
    if (targetEl) {
      const headerOffset = 100;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setTimeout(() => {
      setIsManualScroll(false);
    }, 1000);
  };

  const activeMode = MODES[activeModeIdx] || MODES[0];
  const activeFeature = activeMode.features[activeSubFeatureIdx] || activeMode.features[0];

  return (
    <section 
      ref={containerRef}
      id="how-it-works"
      className="relative bg-white border-b border-slate-200 py-16 lg:py-24 scroll-mt-12 overflow-hidden"
    >
      <div id="platform-modes" className="sr-only" aria-hidden="true" />
      
      {/* Background radial glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-sky-50 via-cyan-50/40 to-transparent rounded-full blur-3xl -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sticky Desktop Layout: Left Subnav (Fixed) + Right Content Runway */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
          
          {/* ======================================================== */}
          {/* 1. LEFT STICKY SUB-NAVIGATION (Aircall Inspired Subnav) */}
          {/* ======================================================== */}
          <aside className="lg:col-span-3 lg:sticky lg:top-28 z-20 space-y-4">
            
            <div className="hidden lg:block space-y-2 pb-2">
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
                    className={`group w-full text-left p-3.5 rounded-2xl transition-all cursor-pointer border shrink-0 min-w-[200px] lg:min-w-0 ${
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

                    {/* Dynamic 2px Progress Bar Fill (0% to 100% on scroll) */}
                    <div className="mt-3 w-full h-1 bg-slate-200/40 rounded-full overflow-hidden">
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
            <div className="hidden lg:block pt-4 border-t border-slate-100 space-y-2">
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
          {/* 2. RIGHT SCROLL RUNWAY (3 Full Content Stages)           */}
          {/* ======================================================== */}
          <div className="lg:col-span-9 space-y-16 lg:space-y-24">
            
            {MODES.map((mode, modeIndex) => (
              <div
                key={mode.id}
                ref={(el) => { sectionRefs.current[modeIndex] = el; }}
                className="scroll-mt-24 space-y-6"
              >
                {/* Header for this mode */}
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-800 text-xs font-semibold uppercase tracking-wider font-mono">
                    <span>{mode.label}</span>
                    <span>•</span>
                    <span>{mode.id === "team-led" ? "Human Agents" : mode.id === "ai-assisted" ? "Agent Augmentation" : "Autonomous Bots"}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {mode.headline}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                    {mode.subhead}
                  </p>
                </div>

                {/* Rounded Sleek Platform Container (Like Aircall Screenshot) */}
                <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50/80 via-sky-50/30 to-cyan-50/20 p-5 sm:p-7 lg:p-8 shadow-lg shadow-slate-100">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Left Column inside card: 3 Sub-features list */}
                    <div className="lg:col-span-6 space-y-3">
                      {mode.features.map((feature, featIdx) => {
                        const isSelected = activeModeIdx === modeIndex && activeSubFeatureIdx === featIdx;
                        return (
                          <div
                            key={feature.id}
                            onClick={() => {
                              setActiveModeIdx(modeIndex);
                              setActiveSubFeatureIdx(featIdx);
                            }}
                            className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer text-left ${
                              isSelected
                                ? "bg-white border-sky-300 shadow-md translate-x-1"
                                : "bg-white/60 border-slate-200/80 hover:bg-white hover:border-slate-300"
                            }`}
                          >
                            <div className="flex items-center gap-2 mb-1.5">
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
                              <div className="mt-2 space-y-3 animate-in fade-in duration-200">
                                <p className="text-xs text-slate-600 leading-relaxed">
                                  {feature.desc}
                                </p>

                                <div className="flex flex-wrap gap-1.5 pt-1">
                                  {feature.badges.map((b, bIdx) => (
                                    <span 
                                      key={bIdx}
                                      className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200"
                                    >
                                      {b}
                                    </span>
                                  ))}
                                </div>

                                <div className="pt-2">
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
                        {mode.id === "team-led" && (
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

                            {/* Floating Network Indicators (matching screenshot) */}
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
                        {mode.id === "ai-assisted" && (
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
                        {mode.id === "ai-led" && (
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
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

