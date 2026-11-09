"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Headphones, CheckCircle2, ArrowRight, ExternalLink, MessageSquare, FileText, Zap, Play, Pause, Bot, Database, BarChart3, Check, UserCheck, Layers, ArrowRightLeft, SlidersHorizontal } from "lucide-react";

interface JourneyStage {
  id: string;
  step: string;
  title: string;
  shortTitle: string;
  role: string;
  badge: string;
  metric: string;
  metricLabel: string;
  description: string;
  previewType: "self-service" | "ai-agent" | "handoff" | "copilot" | "acw" | "qa";
}

const JOURNEY_STAGES: JourneyStage[] = [
  {
    id: "self-service",
    step: "01",
    title: "AI Self-Service",
    shortTitle: "Deflection",
    role: "Zero-Touch Triage",
    badge: "Multilingual IVR & WhatsApp Bots",
    metric: "45.2%",
    metricLabel: "Tier-0 Deflection",
    description:
      "Multilingual IVR and WhatsApp bots handle identity verification, balance checks, order lookups, and routine FAQs autonomously in <220ms without human queuing.",
    previewType: "self-service",
  },
  {
    id: "ai-agent",
    step: "02",
    title: "Autonomous Voicebot",
    shortTitle: "Agentic Voice",
    role: "Autonomous Execution",
    badge: "Direct ERP Tool Calling",
    metric: "74.8%",
    metricLabel: "AI Containment",
    description:
      "Autonomous voicebots reason over enterprise business logic and execute backend API mutations directly (e.g. rescheduling couriers, issuing refunds, booking slots).",
    previewType: "ai-agent",
  },
  {
    id: "handoff",
    step: "03",
    title: "Warm Human Handoff",
    shortTitle: "Context Handoff",
    role: "Zero Context Loss",
    badge: "Deterministic ACD Routing",
    metric: "0",
    metricLabel: "Repeated Questions",
    description:
      "When empathy, complex reasoning, or high-tier VIP accounts are detected, calls transfer instantly with full WhatsApp chat history, CRM dossier, and sentiment pre-populated.",
    previewType: "handoff",
  },
  {
    id: "copilot",
    step: "04",
    title: "In-Call Copilot",
    role: "Real-Time Augmentation",
    shortTitle: "Agent Assist",
    badge: "Live Playbooks & Whisper Assist",
    metric: "-28%",
    metricLabel: "Avg Handle Time",
    description:
      "The Copilot desktop listens to live audio, pops keyword coach cards, auto-checks compliance playbooks, and suggests next-best-actions in real time without cognitive fatigue.",
    previewType: "copilot",
  },
  {
    id: "acw",
    step: "05",
    title: "Resolution & ACW",
    shortTitle: "Zero-Touch ACW",
    role: "Automated Wrap-Up",
    badge: "1-Click CRM Auto-Disposition",
    metric: "-50%",
    metricLabel: "Wrap-Up Duration",
    description:
      "AI auto-generates structured call summaries, tags CRM disposition codes, and updates Salesforce/Zoho in 1 click, eliminating manual post-call wrap-up fatigue.",
    previewType: "acw",
  },
  {
    id: "qa",
    step: "06",
    title: "Continuous AI QA",
    shortTitle: "Continuous Audit",
    role: "100% Quality Audit",
    badge: "Speech Intelligence & Coaching",
    metric: "100%",
    metricLabel: "Audit Coverage",
    description:
      "100% of interactions are scored for compliance, script adherence, sentiment trajectory, and predictive CSAT to coach agents and reinforce AI models.",
    previewType: "qa",
  },
];

const AUTOPLAY_INTERVAL_MS = 6000;

export default function HumanAIJourneySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStageIndex, setActiveStageIndex] = useState(2); // Default to Warm Handoff
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbookCompleted, setPlaybookCompleted] = useState<number[]>([1, 2, 3]);

  // Stage selection
  const selectStage = (index: number) => {
    setActiveStageIndex(index);
    setIsPlaying(false);
  };

  // Toggle checklist item
  const togglePlaybookItem = (id: number) => {
    setPlaybookCompleted((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Autoplay progression timer
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % JOURNEY_STAGES.length);
    }, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const activeStage = JOURNEY_STAGES[activeStageIndex];

  return (
    <section
      ref={sectionRef}
      id="human-ai-collaboration"
      className="relative overflow-hidden border-b border-slate-200 bg-white py-14 sm:py-18 lg:py-24 text-slate-900 scroll-mt-20"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 lg:space-y-10">
        
        {/* Section Header: Enterprise Architectural Positioning */}
        <header className="mx-auto max-w-3xl text-center space-y-3.5">

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.03em] text-slate-900 leading-tight">
            AI handles high-velocity volume,{" "}
            <span className="text-sky-700">while human specialists protect customer trust.</span>
          </h2>

          <p className="text-sm sm:text-[15px] text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Eliminate robotic dead-ends. CXdynamIQ delivers an unbroken continuum where autonomous AI agents resolve routine inquiries and augment human specialists with real-time in-call telemetry.
          </p>
        </header>

        {/* 6-Stage Integrated Lifecycle Topology Bar */}
        <div className="space-y-3">
          
          {/* Top Control Bar: Topology label and Guided Tour Toggle */}
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
              <Layers className="w-3.5 h-3.5 text-sky-700" />
              <span className="font-mono uppercase tracking-wider text-[11px] text-slate-600">
                End-to-End Conversation Topology
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause guided walkthrough" : "Start guided walkthrough"}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-pointer shadow-2xs"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3 h-3 text-sky-700" />
                  <span>Pause Guided Tour</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 text-sky-700" />
                  <span>Play Guided Tour</span>
                </>
              )}
            </button>
          </div>

          {/* Stepper Cards: 6-Stage Pipeline with Hairline Precision */}
          <div
            role="tablist"
            aria-label="Human and AI collaboration lifecycle stages"
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5"
          >
            {JOURNEY_STAGES.map((stage, idx) => {
              const isActive = activeStageIndex === idx;
              return (
                <button
                  key={stage.id}
                  id={`journey-tab-${idx}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="journey-simulation-canvas"
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => selectStage(idx)}
                  className={`group relative flex flex-col justify-between p-3 sm:p-3.5 rounded-xl border text-left transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                    isActive
                      ? "border-sky-600/50 bg-sky-50/50 shadow-xs ring-1 ring-sky-600/20"
                      : "border-slate-200/90 bg-white hover:border-slate-300 hover:bg-slate-50/60"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <span
                      className={`font-mono text-xs font-bold transition-colors ${
                        isActive ? "text-sky-700" : "text-slate-400 group-hover:text-slate-600"
                      }`}
                    >
                      {stage.step}
                    </span>
                    <span className="font-mono text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/60 tabular-nums">
                      {stage.metric}
                    </span>
                  </div>

                  <div className="space-y-0.5">
                    <h3 className="text-xs sm:text-[13px] font-semibold text-slate-900 line-clamp-1">
                      {stage.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 line-clamp-1">
                      {stage.role}
                    </p>
                  </div>

                  {/* Active Top Accent Line */}
                  {isActive && (
                    <div className="absolute -top-px left-3 right-3 h-0.5 bg-sky-700 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Context Banner: Explains current stage logic */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 rounded-xl border border-slate-200/80 bg-slate-50/70 px-4 py-2.5 text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-sky-800 uppercase tracking-tight text-[11px]">
                Stage {activeStage.step} // {activeStage.shortTitle}
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600 hidden sm:inline">{activeStage.description}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 shrink-0 font-medium text-slate-700 bg-white border border-slate-200 px-2.5 py-0.5 rounded-md text-[11px] shadow-2xs">
              <SlidersHorizontal className="w-3 h-3 text-sky-700" />
              <span>{activeStage.badge}</span>
            </div>
          </div>
        </div>

        {/* Unified Live Simulation Console (Single-Surface Architecture) */}
        <div
          id="journey-simulation-canvas"
          role="tabpanel"
          aria-labelledby={`journey-tab-${activeStageIndex}`}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all"
        >
          
          {/* Top Status & Telemetry Bar: Telecom Console Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 bg-slate-50/80 px-5 py-3 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500 motion-safe:animate-pulse" />
              <span className="font-semibold text-slate-900">
                Live Telecom Session // {activeStage.title}
              </span>
              <span className="hidden sm:inline font-mono text-[10px] text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded">
                SIP Trunk · Opus HD 12ms
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-500">
              <span className="text-[11px] bg-white border border-slate-200 px-2.5 py-1 rounded-md text-slate-700">
                Caller: Marcus Vance (+1 415 ••• ••89)
              </span>
              <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">
                Sentiment: +0.86 Positive
              </span>
            </div>
          </div>

          {/* Dynamic Stage Viewport */}
          <div className="p-5 sm:p-6 lg:p-7">
            
            {/* VIEW 01: AI Self-Service (Zero-Touch Deflection) */}
            {activeStage.previewType === "self-service" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-6 space-y-3">
                  <div className="rounded-xl border border-slate-200/90 bg-slate-50/50 p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-800 border-b border-slate-200 pb-2">
                      <span className="flex items-center gap-1.5 text-sky-800">
                        <MessageSquare className="w-3.5 h-3.5 text-sky-700" />
                        Inbound WhatsApp Self-Service Session
                      </span>
                      <span className="font-mono text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/70">
                        Zero-Touch Deflection
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-700 shrink-0">
                          MV
                        </div>
                        <div className="bg-white border border-slate-200 rounded-lg p-2.5 max-w-[85%] text-slate-700 shadow-2xs">
                          &quot;Hi! I want to check my order status for #CX-88492 and change the recipient name to Sarah Vance.&quot;
                        </div>
                      </div>

                      <div className="flex items-start gap-2 flex-row-reverse">
                        <div className="h-6 w-6 rounded-full bg-sky-700 flex items-center justify-center text-[10px] font-bold text-white shrink-0">
                          AI
                        </div>
                        <div className="bg-sky-50/70 border border-sky-200/80 rounded-lg p-2.5 max-w-[85%] text-slate-800 shadow-2xs">
                          &quot;Hello Marcus! Order #CX-88492 is at the sorting hub. I updated the recipient name to <strong>Sarah Vance</strong> and dispatched a secure digital receipt to your phone.&quot;
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-3">
                  <div className="rounded-xl border border-slate-200/90 bg-white p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-900 border-b border-slate-100 pb-2">
                      <span>Autonomous Deflection Outcomes</span>
                      <span className="font-mono text-[11px] text-sky-700">Latency: 210ms</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-slate-50 border border-slate-200/80 p-3">
                        <span className="block text-[10px] font-mono uppercase text-slate-400">Deflection Rate</span>
                        <span className="text-2xl font-bold font-display text-sky-700 tabular-nums">45.2%</span>
                        <span className="block text-[10px] text-slate-500 mt-0.5">Routine volume diverted</span>
                      </div>
                      <div className="rounded-lg bg-slate-50 border border-slate-200/80 p-3">
                        <span className="block text-[10px] font-mono uppercase text-slate-400">Cost Per Contact</span>
                        <span className="text-2xl font-bold font-display text-emerald-700 tabular-nums">$0.08</span>
                        <span className="block text-[10px] text-slate-500 mt-0.5">vs $4.50 human voice</span>
                      </div>
                    </div>
                    <div className="rounded-lg bg-emerald-50/70 border border-emerald-200/70 p-2.5 text-xs text-emerald-900 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>Zero human queue latency. Resolved autonomously in under 3 seconds.</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 02: Autonomous Voicebot (Agentic Execution) */}
            {activeStage.previewType === "ai-agent" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-6 space-y-3">
                  <div className="rounded-xl border border-slate-200/90 bg-slate-50/50 p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-800 border-b border-slate-200 pb-2">
                      <span className="flex items-center gap-1.5 text-sky-800">
                        <Bot className="w-3.5 h-3.5 text-sky-700" />
                        Autonomous Voicebot Execution Trace
                      </span>
                      <span className="font-mono text-[10px] text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-200/80">
                        Deepgram Whisper &lt;200ms
                      </span>
                    </div>

                    <div className="space-y-2 text-xs text-slate-700">
                      <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs space-y-1">
                        <span className="font-mono font-medium text-slate-500 text-[10px] uppercase">
                          Caller Audio Stream
                        </span>
                        <p>&quot;I need to reroute delivery #CX-88492 to Suite 400 before 6 PM today.&quot;</p>
                      </div>
                      <div className="p-2.5 rounded-lg bg-sky-50/60 border border-sky-200/80 shadow-2xs space-y-1">
                        <span className="font-mono font-semibold text-sky-800 text-[10px] uppercase">
                          Deterministic ERP Mutation
                        </span>
                        <p className="font-mono text-[11px] text-slate-800">
                          logisticsERP.updateDropPoint(&quot;CX-88492&quot;, &quot;Suite 400&quot;) → HTTP 200 OK
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-3">
                  <div className="rounded-xl border border-slate-200/90 bg-white p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-900 border-b border-slate-100 pb-2">
                      <span>Agentic Voice Containment</span>
                      <span className="font-mono text-[11px] text-emerald-700">Containment: 74.8%</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-slate-50 border border-slate-200/80 p-3">
                        <span className="block text-[10px] font-mono uppercase text-slate-400">Policy Latency</span>
                        <span className="text-2xl font-bold font-display text-sky-700 tabular-nums">140ms</span>
                        <span className="block text-[10px] text-slate-500 mt-0.5">ERP constraint check</span>
                      </div>
                      <div className="rounded-lg bg-slate-50 border border-slate-200/80 p-3">
                        <span className="block text-[10px] font-mono uppercase text-slate-400">Customer CSAT</span>
                        <span className="text-2xl font-bold font-display text-emerald-700 tabular-nums">4.9 / 5</span>
                        <span className="block text-[10px] text-slate-500 mt-0.5">Instant resolution</span>
                      </div>
                    </div>
                    <div className="rounded-lg bg-sky-50/70 border border-sky-200/70 p-2.5 text-xs text-sky-900 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0" />
                      <span>Zero human intervention required. Courier re-route tag updated in ERP.</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 03: Warm Human Handoff (Zero Repeated Questions) */}
            {activeStage.previewType === "handoff" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Left 6 cols: Omnichannel Context Transfer Buffer */}
                <div className="lg:col-span-6 space-y-3">
                  <div className="rounded-xl border border-slate-200/90 bg-white p-4 space-y-2.5 shadow-2xs">
                    <div className="flex items-center justify-between text-xs font-semibold text-sky-800 border-b border-slate-100 pb-2">
                      <span className="flex items-center gap-1.5">
                        <ArrowRightLeft className="w-3.5 h-3.5 text-sky-700" />
                        Warm Context Transfer from Prior WhatsApp Interaction
                      </span>
                      <span className="font-mono text-slate-400 font-normal text-[10px]">14:18 (4m ago)</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Customer attempted automated address change on WhatsApp. Transit rule cutoff required voice confirmation. Identity verified via 2FA token (#9942).
                    </p>
                    <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px]">
                      <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">
                        Tier: Enterprise Gold
                      </span>
                      <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono">
                        Order #CX-88492
                      </span>
                      <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded font-medium">
                        Verified 2FA
                      </span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200/90 bg-slate-50/60 p-3.5 text-xs space-y-2">
                    <div className="flex items-center justify-between text-slate-500 border-b border-slate-200/80 pb-1.5">
                      <span className="flex items-center gap-1.5 font-semibold text-slate-700">
                        <Headphones className="w-3.5 h-3.5 text-sky-700" />
                        Live Voice Audio Stream (Opus HD · 12ms)
                      </span>
                      <span className="font-mono text-[10px] font-semibold text-emerald-700">
                        PII REDACTION ACTIVE
                      </span>
                    </div>
                    <div className="space-y-1.5 text-xs text-slate-700">
                      <p>
                        <strong className="text-slate-500 font-medium">Caller (Marcus):</strong> &quot;Hi, I spoke to the WhatsApp bot earlier. I need my package sent to Suite 400.&quot;
                      </p>
                      <p>
                        <strong className="text-sky-700 font-semibold">Agent (Sarah):</strong> &quot;Hello Marcus! I see your WhatsApp ticket for Order #CX-88492 right here on my screen. Let me confirm that re-route immediately.&quot;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right 6 cols: Zero Context Loss Advantage */}
                <div className="lg:col-span-6 space-y-3">
                  <div className="rounded-xl border border-slate-200/90 bg-white p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-900 border-b border-slate-100 pb-2">
                      <span>Zero Context Loss Advantage</span>
                      <span className="font-mono text-[11px] text-emerald-700 font-semibold">
                        0 Repeated Questions
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-slate-50 border border-slate-200/80 p-3">
                        <span className="block text-[10px] font-mono uppercase text-slate-400">Context Retention</span>
                        <span className="text-2xl font-bold font-display text-sky-700 tabular-nums">100%</span>
                        <span className="block text-[10px] text-slate-500 mt-0.5">Chat &amp; caller history</span>
                      </div>
                      <div className="rounded-lg bg-slate-50 border border-slate-200/80 p-3">
                        <span className="block text-[10px] font-mono uppercase text-slate-400">Transfer Latency</span>
                        <span className="text-2xl font-bold font-display text-emerald-700 tabular-nums">0.8s</span>
                        <span className="block text-[10px] text-slate-500 mt-0.5">Instant ACD pop</span>
                      </div>
                    </div>
                    <div className="rounded-lg bg-emerald-50/70 border border-emerald-200/70 p-2.5 text-xs text-emerald-900 flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>Customer never has to repeat their name, tracking ID, or problem history.</span>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* VIEW 04: In-Call Copilot & Playbooks */}
            {activeStage.previewType === "copilot" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-6 space-y-3">
                  {/* Deterministic Real-Time Whisper Card */}
                  <div className="p-4 rounded-xl bg-sky-50/60 border border-sky-200/80 space-y-2 shadow-2xs">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-sky-800 flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-sky-700" />
                        Live Assist Card: Logistics Re-Route Confirmation
                      </span>
                      <span className="text-[10px] font-mono font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Match: 99.4%
                      </span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Recommended response: <em>&quot;Marcus, I updated the drop coordinates in our logistics dispatch portal. Courier slot confirmed for tomorrow between 9:00 AM and 12:00 PM.&quot;</em>
                    </p>
                    <div className="pt-1 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-slate-700 bg-white border border-slate-200 px-2.5 py-1 rounded shadow-2xs">
                        Trigger SAP API Mutation #TX-9102
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono">1-Click CRM Sync</span>
                    </div>
                  </div>

                  {/* Interactive Checklist */}
                  <div className="p-4 rounded-xl bg-white border border-slate-200/90 space-y-2.5">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-900">
                      <span>Adherence Playbook: Tier-1 Logistics Inbound</span>
                      <span className="text-xs font-mono font-semibold text-sky-700">
                        {playbookCompleted.length} of 4 Completed
                      </span>
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-700">
                      {[
                        { id: 1, text: "Warm Greeting & Customer Name Stated" },
                        { id: 2, text: "Acknowledge Previous WhatsApp Intent" },
                        { id: 3, text: "Confirm New Suite & Delivery Window" },
                        { id: 4, text: "Offer WhatsApp Digital Confirmation Receipt" },
                      ].map((item) => {
                        const isDone = playbookCompleted.includes(item.id);
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => togglePlaybookItem(item.id)}
                            className="flex items-center gap-2 text-left w-full cursor-pointer hover:bg-slate-50 p-1 rounded transition-colors"
                          >
                            <span
                              className={`h-4 w-4 rounded-md flex items-center justify-center border ${
                                isDone
                                  ? "bg-emerald-600 border-emerald-600 text-white"
                                  : "border-slate-300 bg-white"
                              }`}
                            >
                              {isDone && <Check className="w-3 h-3" />}
                            </span>
                            <span className={isDone ? "line-through text-slate-400" : "text-slate-800 font-medium"}>
                              {item.text}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-3">
                  <div className="rounded-xl border border-slate-200/90 bg-white p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-900 border-b border-slate-100 pb-2">
                      <span>Agent Productivity Telemetry</span>
                      <span className="font-mono text-[11px] text-sky-700">-28% Handle Time</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-slate-50 border border-slate-200/80 p-3">
                        <span className="block text-[10px] font-mono uppercase text-slate-400">First Contact Resolution</span>
                        <span className="text-2xl font-bold font-display text-sky-700 tabular-nums">91.4%</span>
                        <span className="block text-[10px] text-slate-500 mt-0.5">+18% above industry</span>
                      </div>
                      <div className="rounded-lg bg-slate-50 border border-slate-200/80 p-3">
                        <span className="block text-[10px] font-mono uppercase text-slate-400">Script Adherence</span>
                        <span className="text-2xl font-bold font-display text-emerald-700 tabular-nums">100%</span>
                        <span className="block text-[10px] text-slate-500 mt-0.5">Automated compliance</span>
                      </div>
                    </div>
                    <div className="rounded-lg bg-emerald-50/70 border border-emerald-200/70 p-2.5 text-xs text-emerald-900 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>Copilot surfaces real-time answers in &lt;100ms, removing knowledge-base searches.</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 05: Resolution & Zero-Touch ACW */}
            {activeStage.previewType === "acw" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-6 space-y-3">
                  <div className="rounded-xl border border-slate-200/90 bg-white p-4 space-y-3 shadow-2xs">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-900 border-b border-slate-100 pb-2">
                      <span className="flex items-center gap-1.5 text-sky-800">
                        <FileText className="w-3.5 h-3.5 text-sky-700" />
                        AI Zero-Touch Post-Call AutoSummary
                      </span>
                      <span className="font-mono text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        -50% ACW Slashed
                      </span>
                    </div>
                    <div className="rounded-lg bg-slate-50 border border-slate-200 p-3 space-y-1.5 text-xs text-slate-700">
                      <p>
                        <strong>Call Intent:</strong> Delivery Destination Update (Order #CX-88492)
                      </p>
                      <p>
                        <strong>Outcome:</strong> Re-routed to Suite 400. SAP ERP dispatch token TX-9102 confirmed for tomorrow 09:00-12:00.
                      </p>
                      <p>
                        <strong>Follow-Up:</strong> WhatsApp tracking confirmation receipt dispatched automatically.
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-[11px] pt-1">
                      <span className="text-slate-500">Salesforce Case #88492 disposition:</span>
                      <span className="font-mono font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        RESOLVED_AUTONOMOUSLY
                      </span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-3">
                  <div className="rounded-xl border border-slate-200/90 bg-white p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-900 border-b border-slate-100 pb-2">
                      <span>Post-Call Time Savings</span>
                      <span className="font-mono text-[11px] text-sky-700">Sync: 0.4s</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-slate-50 border border-slate-200/80 p-3">
                        <span className="block text-[10px] font-mono uppercase text-slate-400">ACW Duration</span>
                        <span className="text-2xl font-bold font-display text-sky-700 tabular-nums">12s</span>
                        <span className="block text-[10px] text-slate-500 mt-0.5">vs 120s manual wrap-up</span>
                      </div>
                      <div className="rounded-lg bg-slate-50 border border-slate-200/80 p-3">
                        <span className="block text-[10px] font-mono uppercase text-slate-400">Wrap-Up Time Cut</span>
                        <span className="text-2xl font-bold font-display text-emerald-700 tabular-nums">-50%</span>
                        <span className="block text-[10px] text-slate-500 mt-0.5">More agent availability</span>
                      </div>
                    </div>
                    <div className="rounded-lg bg-emerald-50/70 border border-emerald-200/70 p-2.5 text-xs text-emerald-900 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>Zero manual data entry. Agents take their next call immediately without burnout.</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 06: Continuous AI QA & Analytics */}
            {activeStage.previewType === "qa" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-6 space-y-3">
                  <div className="rounded-xl border border-slate-200/90 bg-white p-4 space-y-3 shadow-2xs">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-900 border-b border-slate-100 pb-2">
                      <span className="flex items-center gap-1.5 text-sky-800">
                        <BarChart3 className="w-3.5 h-3.5 text-sky-700" />
                        100% Automated Conversation QA Scorecard
                      </span>
                      <span className="font-mono text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Continuous Audit
                      </span>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600">Script Adherence Score:</span>
                        <span className="font-mono font-bold text-emerald-700">100% (4/4 steps)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600">Regulatory Compliance:</span>
                        <span className="font-mono font-bold text-emerald-700">PASS (Zero PII leaks)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600">Predicted CSAT Rating:</span>
                        <span className="font-mono font-bold text-sky-700">4.9 / 5.0 (High)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600">Sentiment Trajectory:</span>
                        <span className="font-mono font-bold text-emerald-700">-0.42 → +0.86 (Uplift)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-3">
                  <div className="rounded-xl border border-slate-200/90 bg-white p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-900 border-b border-slate-100 pb-2">
                      <span>Continuous Reinforcement Loop</span>
                      <span className="font-mono text-[11px] text-sky-700">Self-Tuning</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-slate-50 border border-slate-200/80 p-3">
                        <span className="block text-[10px] font-mono uppercase text-slate-400">Audit Coverage</span>
                        <span className="text-2xl font-bold font-display text-sky-700 tabular-nums">100%</span>
                        <span className="block text-[10px] text-slate-500 mt-0.5">vs 2% legacy sampling</span>
                      </div>
                      <div className="rounded-lg bg-slate-50 border border-slate-200/80 p-3">
                        <span className="block text-[10px] font-mono uppercase text-slate-400">Supervisor Review Time</span>
                        <span className="text-2xl font-bold font-display text-emerald-700 tabular-nums">-80%</span>
                        <span className="block text-[10px] text-slate-500 mt-0.5">Targeted coaching</span>
                      </div>
                    </div>
                    <div className="rounded-lg bg-sky-50/70 border border-sky-200/70 p-2.5 text-xs text-sky-900 flex items-center gap-2">
                      <Database className="w-4 h-4 text-sky-700 shrink-0" />
                      <span>Turn telemetry fed directly into prompt embeddings for non-stop model accuracy gains.</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Bottom Card Footer Actions: Ecosystem Telemetry & Primary Conversion Links */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-200 bg-slate-50/70 px-5 py-4">
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>Turnkey Integrations: Salesforce · HubSpot · Zoho · Zendesk · SAP</span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://cxq360.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-sky-700 px-5 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sky-800"
              >
                <span>Experience Copilot in CXQ360.ai</span>
                <ExternalLink className="h-3.5 w-3.5 shrink-0" />
              </a>

              <Link
                href="/contact-us#quote"
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-5 py-2 text-xs sm:text-sm font-semibold text-slate-900 shadow-2xs transition-colors hover:bg-slate-50"
              >
                <span>Book a Guided Demo</span>
                <ArrowRight className="h-3.5 w-3.5 shrink-0" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
