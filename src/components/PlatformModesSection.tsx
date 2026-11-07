"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Users, 
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
  Mic,
  BarChart3,
  Check
} from "lucide-react";
import { SalesforceLogo, ZohoLogo, ZendeskLogo, WhatsAppLogo } from "@/components/IntegrationLogos";

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
  headline: string;
  subhead: string;
  features: SubFeature[];
}

const MODES: PlatformMode[] = [
  {
    id: "team-led",
    label: "Team-Led Telephony",
    headline: "High-reliability cloud telephony for human agent teams.",
    subhead: "Carrier-grade SIP trunking, predictive pacing dialers, and blended queue distribution help human agents resolve calls with zero dropped audio.",
    features: [
      {
        id: "clear-calling",
        stepNumber: "01",
        tag: "Voice Infrastructure",
        title: "Clear and reliable cloud calling",
        desc: "Carrier-grade connectivity, ultra-low latency, and TLS encryption keep every customer conversation stable and compliant.",
        linkText: "Explore Inbound Calling",
        linkHref: "/inbound-calling",
        badges: ["Carrier SIP trunking", "Low latency", "High availability"],
      },
      {
        id: "collaborative-workspace",
        stepNumber: "02",
        tag: "Agent Experience",
        title: "One collaborative softphone workspace",
        desc: "WebRTC browser phone, warm transfers, supervisor whisper, and live agent presence in a single unified interface.",
        linkText: "Explore Blended Call Center",
        linkHref: "/blended-call-centre",
        badges: ["WebRTC softphone", "Warm live transfer", "Supervisor whisper"],
      },
      {
        id: "omnichannel-dialers",
        stepNumber: "03",
        tag: "Campaign Pacing",
        title: "High-velocity sales dialers",
        desc: "Seamlessly blend predictive, power, and progressive outbound sales campaigns with inbound support queues.",
        linkText: "Explore Sales Dialers",
        linkHref: "/auto-dialer",
        badges: ["Predictive dialer", "AMD voice detection", "CRM sync"],
      },
    ],
  },
  {
    id: "ai-assisted",
    label: "AI-Assisted Copilot",
    headline: "Live in-call intelligence, augmenting every human agent.",
    subhead: "Native integrations with Salesforce, Zoho, Zendesk and HubSpot automatically sync customer context, trigger screen pops, and generate AI call summaries.",
    features: [
      {
        id: "realtime-coaching",
        stepNumber: "01",
        tag: "Agent Copilot",
        title: "Live transcription and whisper coaching",
        desc: "Real-time speech-to-text with keyword-triggered suggestion cards guides agents through complex policies as callers speak.",
        linkText: "Explore Speech Analytics",
        linkHref: "/speech-analytics",
        badges: ["Live transcription", "Sentiment scoring", "PII masking"],
      },
      {
        id: "crm-screenpop",
        stepNumber: "02",
        tag: "Context Sync",
        title: "Instant CRM screen-pop before answer",
        desc: "Caller profile, recent order history, and previous support tickets pop up on screen before the agent answers the line.",
        linkText: "Explore CRM Integrations",
        linkHref: "/crm-integrations",
        badges: ["Salesforce CTI", "Zoho PhoneBridge", "Zendesk sync"],
      },
      {
        id: "auto-summaries",
        stepNumber: "03",
        tag: "After-Call Work",
        title: "One-click AI call summaries",
        desc: "Automatically drafts post-call notes, tags call disposition, and logs structured CRM tickets in seconds.",
        linkText: "Explore Contact Manager",
        linkHref: "/contact-manager",
        badges: ["Zero manual notes", "Auto-disposition", "Instant export"],
      },
    ],
  },
  {
    id: "ai-led",
    label: "Autonomous Agentic AI",
    headline: "End-to-end resolution for routine customer requests.",
    subhead: "AI voice and chat agents reason over business rules, trigger backend APIs, and close tickets with zero hold time and zero human latency.",
    features: [
      {
        id: "voice-agent",
        stepNumber: "01",
        tag: "AI Telephony",
        title: "Conversational voice agents",
        desc: "Natural human-sounding voicebots handle tier-1 calls, verify customer identity, and answer FAQs with natural pacing.",
        linkText: "Explore Conversational AI",
        linkHref: "/conversational-ai",
        badges: ["Sub-second latency", "Voice biometrics", "Multilingual"],
      },
      {
        id: "api-execution",
        stepNumber: "02",
        tag: "Agentic Execution",
        title: "Authenticated backend API actions",
        desc: "Beyond static text responses, our agents execute database updates, courier reschedules, and billing workflows autonomously.",
        linkText: "Explore Omnichannel Routing",
        linkHref: "/omnichannel-routing",
        badges: ["API actions", "Policy validation", "Enterprise security"],
      },
      {
        id: "seamless-handoff",
        stepNumber: "03",
        tag: "Hybrid Routing",
        title: "Frictionless warm handoff to specialists",
        desc: "When a customer requires empathy or complex negotiation, the call transfers instantly with full context pre-compiled.",
        linkText: "Explore Enterprise Solutions",
        linkHref: "/enterprise",
        badges: ["Zero context loss", "Warm escalation", "Unified ticket"],
      },
    ],
  },
];

export default function PlatformModesSection() {
  const [activeModeIdx, setActiveModeIdx] = useState(0);
  const [activeSubFeatureIdx, setActiveSubFeatureIdx] = useState(0);

  const activeMode = MODES[activeModeIdx] || MODES[0];
  const activeSubFeature = activeMode.features[activeSubFeatureIdx] || activeMode.features[0];

  const handleModeChange = (index: number) => {
    setActiveModeIdx(index);
    setActiveSubFeatureIdx(0);
  };

  return (
    <section 
      id="how-it-works"
      className="relative bg-white border-b border-slate-200 py-16 sm:py-20 lg:py-24 scroll-mt-16"
    >
      <div id="platform-modes" className="sr-only" aria-hidden="true" />
      <div id="modes" className="sr-only" aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-700">
            <span>Operating Continuum</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-[-0.03em] text-slate-900 leading-tight">
            Flexibility across the entire <span className="text-sky-700">human and AI spectrum.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Choose the right balance for each queue: equip human agents with cloud telephony, assist specialists with real-time AI copilot, or deploy autonomous agentic AI for instant tier-1 resolution.
          </p>
        </div>

        {/* 3-Tab Segmented Control (Aircall Style) */}
        <div className="mt-10 flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-2xl max-w-2xl">
          {MODES.map((mode, idx) => {
            const isCurrent = activeModeIdx === idx;
            return (
              <button
                key={mode.id}
                type="button"
                onClick={() => handleModeChange(idx)}
                className={`flex-1 min-w-[160px] py-3 px-4 rounded-xl text-sm font-semibold transition-colors cursor-pointer text-center focus-visible:outline-2 focus-visible:outline-sky-600 ${
                  isCurrent
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {mode.label}
              </button>
            );
          })}
        </div>

        {/* Mode Content Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: 3 Sub-Features Accordion */}
          <div className="lg:col-span-5 space-y-4">
            <div className="pb-3 border-b border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 tracking-tight">
                {activeMode.headline}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {activeMode.subhead}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {activeMode.features.map((feat, fIdx) => {
                const isSelected = activeSubFeatureIdx === fIdx;
                return (
                  <button
                    key={feat.id}
                    type="button"
                    onClick={() => setActiveSubFeatureIdx(fIdx)}
                    className={`w-full text-left p-4 rounded-xl border transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-sky-600 ${
                      isSelected
                        ? "bg-slate-50 border-sky-600 shadow-2xs"
                        : "bg-white border-slate-200 hover:bg-slate-50/60"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-sky-700">{feat.tag}</span>
                      <span className="text-xs font-semibold text-slate-400">{feat.stepNumber}</span>
                    </div>
                    <h4 className="mt-1.5 text-base font-semibold text-slate-900">
                      {feat.title}
                    </h4>
                    <p className="mt-1 text-sm text-slate-600 line-clamp-2">
                      {feat.desc}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {feat.badges.map((b) => (
                        <span key={b} className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 bg-slate-200/60 px-2 py-0.5 rounded-md">
                          <Check className="w-3 h-3 text-emerald-600" />
                          {b}
                        </span>
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-2">
              <Link
                href={activeSubFeature.linkHref}
                className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-800 transition-colors"
              >
                <span>{activeSubFeature.linkText}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Mode Showcase Card */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-slate-900 p-6 text-white shadow-md">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-xs font-semibold text-slate-300">
                    Live Mode Preview: {activeMode.label}
                  </span>
                </div>
                <span className="text-xs text-sky-400 font-medium">
                  {activeSubFeature.tag}
                </span>
              </div>

              {/* MODE 1: Team-Led Showcase */}
              {activeMode.id === "team-led" && (
                <div className="mt-5 space-y-4">
                  <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-300 border-b border-slate-700/80 pb-2">
                      <span className="font-semibold text-white">Cloud Softphone Workspace</span>
                      <span className="text-emerald-400">WebRTC Audio Connected</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-white">Active Inbound Queue: Tier 1 Escalations</p>
                        <p className="text-xs text-slate-400 mt-0.5">3 calls in queue · 14s avg wait (8 agents online)</p>
                      </div>
                      <span className="px-2.5 py-1 rounded-md bg-emerald-950/80 border border-emerald-700 text-xs font-semibold text-emerald-300">
                        99.99% SIP Uptime
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-xs">
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                      <p className="text-slate-400">Carrier Trunk</p>
                      <p className="text-white font-semibold mt-1">G.711 / Opus</p>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                      <p className="text-slate-400">Call Pacing</p>
                      <p className="text-white font-semibold mt-1">Predictive AMD</p>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                      <p className="text-slate-400">Packet Loss</p>
                      <p className="text-emerald-400 font-semibold mt-1">0.00%</p>
                    </div>
                  </div>
                </div>
              )}

              {/* MODE 2: AI-Assisted Showcase */}
              {activeMode.id === "ai-assisted" && (
                <div className="mt-5 space-y-4">
                  <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-300 border-b border-slate-700/80 pb-2">
                      <span className="font-semibold text-sky-300">In-Call Agent Assist</span>
                      <span className="text-emerald-400">CRM Screen-Pop: Salesforce</span>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      <strong>Customer asks:</strong> “How do I activate the international roaming pack for Singapore?”
                    </p>
                    <div className="p-3 rounded-lg bg-sky-950/60 border border-sky-800 text-xs text-sky-200">
                      <p className="font-semibold text-white">Suggested Knowledge Card:</p>
                      <p className="mt-1 text-slate-300">Singapore 7-Day Business Pass ($25). Code: ROAM-SG. Direct activation link via SMS.</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs">
                    <span className="text-slate-300">Auto-generated summary ready for CRM</span>
                    <button type="button" className="px-3 py-1 rounded bg-sky-600 hover:bg-sky-500 text-white font-semibold transition-colors">
                      Push to Salesforce
                    </button>
                  </div>
                </div>
              )}

              {/* MODE 3: Autonomous Agentic AI Showcase */}
              {activeMode.id === "ai-led" && (
                <div className="mt-5 space-y-4">
                  <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-300 border-b border-slate-700/80 pb-2">
                      <span className="font-semibold text-emerald-400">Autonomous Workflow Triggered</span>
                      <span className="text-slate-400">Zero Hold Time</span>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-2 text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Caller requested billing invoice copy for May 2026</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Identity verified with secure caller phone number</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Invoice PDF generated and dispatched via WhatsApp</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800 text-xs text-emerald-200 flex items-center justify-between">
                    <span>Ticket #CX-94182 closed autonomously with 5/5 CSAT</span>
                    <span className="font-semibold">Resolved in 42s</span>
                  </div>
                </div>
              )}

              {/* CTA at card footer */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Ready to test this mode with your real callers?
                </span>
                <Link
                  href="/contact-us#quote"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <span>Request Live Setup</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
