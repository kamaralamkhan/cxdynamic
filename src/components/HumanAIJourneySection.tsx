"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Users,
  Sparkles,
  Headphones,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  MessageSquare,
  FileText,
  Activity,
  Zap,
  Clock,
  Play,
  Pause,
  PhoneCall,
  Bot,
  Database,
  BarChart3,
  Check,
  UserCheck,
} from "lucide-react";

interface JourneyStage {
  id: string;
  step: string;
  title: string;
  role: string;
  badge: string;
  metric: string;
  highlight: string;
  description: string;
  previewType: "self-service" | "ai-agent" | "handoff" | "copilot" | "acw" | "qa";
}

const JOURNEY_STAGES: JourneyStage[] = [
  {
    id: "self-service",
    step: "01",
    title: "AI Self-Service",
    role: "Zero-Touch Deflection",
    badge: "Multilingual IVR & WhatsApp Bots",
    metric: "45% of Routine Contacts",
    highlight: "<220ms response time",
    description:
      "Multilingual IVR and WhatsApp bots handle identity verification, balance checks, order lookups, and routine FAQs autonomously with zero agent queue time.",
    previewType: "self-service",
  },
  {
    id: "ai-agent",
    step: "02",
    title: "AI Voice & Chat Agent",
    role: "Autonomous Execution",
    badge: "Agentic Tool Calling & ERP Write",
    metric: "74.8% AI Containment",
    highlight: "Sub-second backend mutation",
    description:
      "Autonomous voicebots reason over complex enterprise business logic and execute backend API mutations directly (e.g. rescheduling couriers, issuing refunds, booking slots).",
    previewType: "ai-agent",
  },
  {
    id: "handoff",
    step: "03",
    title: "Warm Human Handoff",
    role: "Zero Context Loss",
    badge: "Deterministic ACD Routing",
    metric: "Zero Repeated Questions",
    highlight: "100% transcript preserved",
    description:
      "When empathy, complex reasoning, or high-tier VIP accounts are detected, calls transfer instantly with full WhatsApp chat history, CRM dossier, and sentiment already on screen.",
    previewType: "handoff",
  },
  {
    id: "copilot",
    step: "04",
    title: "AI Assist & Copilot",
    role: "In-Call Augmentation",
    badge: "Real-Time Whisper & Live Playbooks",
    metric: "-28% Avg Handle Time",
    highlight: "Real-time compliance checks",
    description:
      "The Copilot desktop listens to live audio, pops keyword coach cards, auto-checks compliance playbooks, and suggests next-best-actions in real time without distracting the agent.",
    previewType: "copilot",
  },
  {
    id: "acw",
    step: "05",
    title: "Resolution & ACW",
    role: "Automated Wrap-Up",
    badge: "1-Click CRM Auto-Disposition",
    metric: "50% Less Wrap-Up Time",
    highlight: "0.4s CRM synchronization",
    description:
      "AI auto-generates structured call summaries, tags CRM disposition codes, and updates Salesforce/Zoho in 1 click, eliminating manual post-call wrap-up fatigue.",
    previewType: "acw",
  },
  {
    id: "qa",
    step: "06",
    title: "AI QA & Analytics",
    role: "100% Continuous Audit",
    badge: "Speech Intelligence & Coaching",
    metric: "100% Audit Coverage",
    highlight: "Continuous self-tuning loop",
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

  // Handle stage selection
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
      className="relative overflow-hidden border-b border-slate-200 bg-white py-12 sm:py-16 lg:py-20 text-slate-900 scroll-mt-20"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <header className="mx-auto max-w-3xl text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-semibold">
            <Users className="w-3.5 h-3.5 text-sky-700" />
            <span>Human and AI Collaboration Journey</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 leading-snug">
            AI handles automation and repetitive volume,{" "}
            <span className="text-sky-700">while human agents resolve high-value relationships.</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Never force customers into cold robotic dead-ends. CXdynamIQ creates an integrated continuum where autonomous AI agents resolve routine inquiries and augment human specialists with real-time in-call intelligence.
          </p>
        </header>

        {/* 6-Stage Timeline Stepper Strip */}
        <div className="space-y-4">
          
          {/* Stepper Navigation: Responsive Touch Carousel on mobile, 6-col grid on desktop */}
          <div className="flex items-center justify-between pb-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Interactive 6-Stage Journey
            </span>
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-sky-700 hover:text-sky-800 cursor-pointer"
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

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {JOURNEY_STAGES.map((stage, idx) => {
              const isActive = activeStageIndex === idx;
              return (
                <button
                  key={stage.id}
                  onClick={() => selectStage(idx)}
                  className={`group relative flex flex-col justify-between p-3 sm:p-3.5 rounded-xl border text-left transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                    isActive
                      ? "border-sky-300 bg-sky-50/70 shadow-2xs ring-1 ring-sky-300/60"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/70"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1.5">
                    <span
                      className={`font-mono text-xs font-bold transition-colors ${
                        isActive ? "text-sky-700" : "text-slate-400 group-hover:text-slate-600"
                      }`}
                    >
                      {stage.step}
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/50">
                      {stage.metric.split(" ")[0]}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-slate-900 line-clamp-1">
                      {stage.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                      {stage.role}
                    </p>
                  </div>

                  {/* Active Indicator Bar */}
                  {isActive && (
                    <div className="absolute -bottom-1 left-3 right-3 h-0.5 bg-sky-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Stage Context Capsule */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 rounded-xl border border-sky-100 bg-sky-50/50 px-4 py-2.5 text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sky-800 uppercase tracking-wider text-[11px]">
                Stage {activeStage.step}: {activeStage.title}
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600 hidden sm:inline">{activeStage.description}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 shrink-0 font-semibold text-sky-800 bg-white border border-sky-200/80 px-2.5 py-1 rounded-md text-[11px] shadow-2xs">
              <Sparkles className="w-3 h-3 text-sky-700" />
              <span>{activeStage.badge}</span>
            </div>
          </div>
        </div>

        {/* Dynamic Interactive Stage Simulation Canvas */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300">
          
          {/* Sub-Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 bg-slate-50/70 px-5 py-3 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500 motion-safe:animate-pulse" />
              <span className="font-bold text-slate-800">
                Live Interactive Simulation · {activeStage.title}
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-500">
              <span className="text-[11px] bg-white border border-slate-200 px-2.5 py-1 rounded-md">
                Caller: Marcus Vance (+1 415 ••• ••89)
              </span>
              <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">
                Sentiment: +0.86 Positive
              </span>
            </div>
          </div>

          {/* Stage Dynamic Body View */}
          <div className="p-5 sm:p-6 lg:p-7">
            
            {/* VIEW 01: AI Self-Service */}
            {activeStage.previewType === "self-service" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-6 space-y-3">
                  <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-800 border-b border-slate-200 pb-2">
                      <span className="flex items-center gap-1.5 text-sky-700">
                        <MessageSquare className="w-3.5 h-3.5" />
                        Inbound WhatsApp Self-Service Flow
                      </span>
                      <span className="font-mono text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
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
                        <div className="bg-sky-50 border border-sky-200 rounded-lg p-2.5 max-w-[85%] text-slate-800 shadow-2xs">
                          &quot;Hello Marcus! Order #CX-88492 is currently at the sorting hub. I have updated the recipient name to <strong>Sarah Vance</strong> and sent a secure confirmation link to your phone.&quot;
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-3">
                  <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-900 border-b border-slate-100 pb-2">
                      <span>Autonomous Deflection Outcomes</span>
                      <span className="font-mono text-[11px] text-sky-700">Latency: 210ms</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-slate-50 border border-slate-200/80 p-3">
                        <span className="block text-[10px] font-bold uppercase text-slate-400">Deflection Rate</span>
                        <span className="text-xl font-bold font-display text-sky-700">45.2%</span>
                        <span className="block text-[10px] text-slate-500 mt-0.5">Routine volume diverted</span>
                      </div>
                      <div className="rounded-lg bg-slate-50 border border-slate-200/80 p-3">
                        <span className="block text-[10px] font-bold uppercase text-slate-400">Cost Per Contact</span>
                        <span className="text-xl font-bold font-display text-emerald-700">$0.08</span>
                        <span className="block text-[10px] text-slate-500 mt-0.5">vs $4.50 human voice</span>
                      </div>
                    </div>
                    <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-2.5 text-xs text-emerald-900 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>Zero human queue latency. Resolved autonomously in under 3 seconds.</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 02: AI Voice & Chat Agent */}
            {activeStage.previewType === "ai-agent" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-6 space-y-3">
                  <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-800 border-b border-slate-200 pb-2">
                      <span className="flex items-center gap-1.5 text-sky-700">
                        <Bot className="w-3.5 h-3.5" />
                        Autonomous Voicebot Execution
                      </span>
                      <span className="font-mono text-[10px] text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                        Deepgram Whisper &lt;200ms
                      </span>
                    </div>

                    <div className="space-y-2 text-xs text-slate-700">
                      <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs space-y-1">
                        <span className="font-semibold text-slate-500 text-[10px] uppercase">Caller Audio Prompt</span>
                        <p>&quot;I need to reroute delivery #CX-88492 to Suite 400 before 6 PM today.&quot;</p>
                      </div>
                      <div className="p-2.5 rounded-lg bg-sky-50 border border-sky-200 shadow-2xs space-y-1">
                        <span className="font-semibold text-sky-800 text-[10px] uppercase">Autonomous Tool Call</span>
                        <p className="font-mono text-[11px] text-slate-800">
                          logisticsERP.updateDropPoint(&quot;CX-88492&quot;, &quot;Suite 400&quot;) → HTTP 200 OK
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-3">
                  <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-900 border-b border-slate-100 pb-2">
                      <span>Agentic Voice Containment</span>
                      <span className="font-mono text-[11px] text-emerald-700">Containment: 74.8%</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-slate-50 border border-slate-200/80 p-3">
                        <span className="block text-[10px] font-bold uppercase text-slate-400">API Latency</span>
                        <span className="text-xl font-bold font-display text-sky-700">140ms</span>
                        <span className="block text-[10px] text-slate-500 mt-0.5">ERP policy check</span>
                      </div>
                      <div className="rounded-lg bg-slate-50 border border-slate-200/80 p-3">
                        <span className="block text-[10px] font-bold uppercase text-slate-400">Customer CSAT</span>
                        <span className="text-xl font-bold font-display text-emerald-700">4.9 / 5</span>
                        <span className="block text-[10px] text-slate-500 mt-0.5">Instant resolution</span>
                      </div>
                    </div>
                    <div className="rounded-lg bg-sky-50 border border-sky-200 p-2.5 text-xs text-sky-900 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0" />
                      <span>Zero human intervention required. Courier re-route tag updated in ERP.</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 03: Human Agent Handoff */}
            {activeStage.previewType === "handoff" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-6 space-y-3">
                  <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-2.5 shadow-2xs">
                    <div className="flex items-center justify-between text-xs font-semibold text-sky-700 border-b border-slate-100 pb-2">
                      <span className="flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5" />
                        Warm Context Transfer from Prior WhatsApp Interaction
                      </span>
                      <span className="text-slate-400 font-normal text-[10px]">Today, 14:18 (4m ago)</span>
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

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-xs space-y-2">
                    <div className="flex items-center justify-between text-slate-500 border-b border-slate-200/80 pb-1.5">
                      <span className="flex items-center gap-1.5 font-semibold text-slate-700">
                        <Headphones className="w-3.5 h-3.5 text-sky-700" />
                        Live Audio Stream (Opus HD · 12ms)
                      </span>
                      <span className="text-[10px] font-semibold text-emerald-700">PII REDACTION ACTIVE</span>
                    </div>
                    <div className="space-y-1.5 text-xs text-slate-700">
                      <p>
                        <strong className="text-slate-500">Caller:</strong> &quot;Hi, I spoke to the WhatsApp bot earlier. I need my package sent to Suite 400.&quot;
                      </p>
                      <p>
                        <strong className="text-sky-700">Agent:</strong> &quot;Hello Marcus! I see your WhatsApp ticket for Order #CX-88492 right here on my screen.&quot;
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-3">
                  <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-900 border-b border-slate-100 pb-2">
                      <span>Zero Context Loss Advantage</span>
                      <span className="font-mono text-[11px] text-emerald-700">0 Repeated Questions</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-slate-50 border border-slate-200/80 p-3">
                        <span className="block text-[10px] font-bold uppercase text-slate-400">Context Retention</span>
                        <span className="text-xl font-bold font-display text-sky-700">100%</span>
                        <span className="block text-[10px] text-slate-500 mt-0.5">Chat &amp; caller history</span>
                      </div>
                      <div className="rounded-lg bg-slate-50 border border-slate-200/80 p-3">
                        <span className="block text-[10px] font-bold uppercase text-slate-400">Transfer Latency</span>
                        <span className="text-xl font-bold font-display text-emerald-700">0.8s</span>
                        <span className="block text-[10px] text-slate-500 mt-0.5">Instant ACD pop</span>
                      </div>
                    </div>
                    <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-2.5 text-xs text-emerald-900 flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>Customer never has to repeat their name, account number, or problem.</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 04: AI Assist & Copilot */}
            {activeStage.previewType === "copilot" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-6 space-y-3">
                  {/* Keyword Coach Card */}
                  <div className="p-4 rounded-xl bg-sky-50/70 border border-sky-300 space-y-2 shadow-inner">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-sky-800 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-sky-700" />
                        AI Live Coach Card: Logistics Address Update
                      </span>
                      <span className="text-[10px] tabular-nums font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Confidence: 99.4%
                      </span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Recommended response: <em>&quot;Marcus, I have updated the drop coordinates in our logistics dispatch portal. Courier slot confirmed for tomorrow between 9:00 AM and 12:00 PM.&quot;</em>
                    </p>
                    <div className="pt-1 flex items-center gap-3">
                      <button className="text-[11px] font-semibold text-white bg-sky-700 hover:bg-sky-800 px-3 py-1 rounded-md transition-colors cursor-pointer">
                        Apply to CRM (1-Click)
                      </button>
                      <span className="text-[11px] text-slate-600">Triggers SAP API mutation #TX-9102</span>
                    </div>
                  </div>

                  {/* Interactive Checklist */}
                  <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2.5">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-900">
                      <span>Adherence Playbook: Tier-1 Logistics Inbound</span>
                      <span className="text-xs tabular-nums font-semibold text-sky-700">
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
                  <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-900 border-b border-slate-100 pb-2">
                      <span>Agent Productivity Gains</span>
                      <span className="font-mono text-[11px] text-sky-700">-28% Handle Time</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-slate-50 border border-slate-200/80 p-3">
                        <span className="block text-[10px] font-bold uppercase text-slate-400">First Contact Resolution</span>
                        <span className="text-xl font-bold font-display text-sky-700">91.4%</span>
                        <span className="block text-[10px] text-slate-500 mt-0.5">+18% above industry</span>
                      </div>
                      <div className="rounded-lg bg-slate-50 border border-slate-200/80 p-3">
                        <span className="block text-[10px] font-bold uppercase text-slate-400">Script Adherence</span>
                        <span className="text-xl font-bold font-display text-emerald-700">100%</span>
                        <span className="block text-[10px] text-slate-500 mt-0.5">Automated compliance</span>
                      </div>
                    </div>
                    <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-2.5 text-xs text-emerald-900 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>Copilot surfaces real-time answers in &lt;100ms, removing knowledge-base searches.</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 05: Resolution & ACW */}
            {activeStage.previewType === "acw" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-6 space-y-3">
                  <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-3 shadow-2xs">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-900 border-b border-slate-100 pb-2">
                      <span className="flex items-center gap-1.5 text-sky-700">
                        <FileText className="w-3.5 h-3.5" />
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
                      <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        RESOLVED_AUTONOMOUSLY
                      </span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-3">
                  <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-900 border-b border-slate-100 pb-2">
                      <span>Post-Call Time Savings</span>
                      <span className="font-mono text-[11px] text-sky-700">Sync: 0.4s</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-slate-50 border border-slate-200/80 p-3">
                        <span className="block text-[10px] font-bold uppercase text-slate-400">ACW Duration</span>
                        <span className="text-xl font-bold font-display text-sky-700">12s</span>
                        <span className="block text-[10px] text-slate-500 mt-0.5">vs 120s manual wrap-up</span>
                      </div>
                      <div className="rounded-lg bg-slate-50 border border-slate-200/80 p-3">
                        <span className="block text-[10px] font-bold uppercase text-slate-400">Wrap-Up Time Cut</span>
                        <span className="text-xl font-bold font-display text-emerald-700">-50%</span>
                        <span className="block text-[10px] text-slate-500 mt-0.5">More agent availability</span>
                      </div>
                    </div>
                    <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-2.5 text-xs text-emerald-900 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>Zero manual data entry. Agents take their next call immediately without burnout.</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 06: AI QA & Analytics */}
            {activeStage.previewType === "qa" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-6 space-y-3">
                  <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-3 shadow-2xs">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-900 border-b border-slate-100 pb-2">
                      <span className="flex items-center gap-1.5 text-sky-700">
                        <BarChart3 className="w-3.5 h-3.5" />
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
                  <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-900 border-b border-slate-100 pb-2">
                      <span>Continuous Reinforcement Loop</span>
                      <span className="font-mono text-[11px] text-sky-700">Self-Tuning</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-slate-50 border border-slate-200/80 p-3">
                        <span className="block text-[10px] font-bold uppercase text-slate-400">Audit Coverage</span>
                        <span className="text-xl font-bold font-display text-sky-700">100%</span>
                        <span className="block text-[10px] text-slate-500 mt-0.5">vs 2% legacy sampling</span>
                      </div>
                      <div className="rounded-lg bg-slate-50 border border-slate-200/80 p-3">
                        <span className="block text-[10px] font-bold uppercase text-slate-400">Supervisor Review Time</span>
                        <span className="text-xl font-bold font-display text-emerald-700">-80%</span>
                        <span className="block text-[10px] text-slate-500 mt-0.5">Targeted coaching</span>
                      </div>
                    </div>
                    <div className="rounded-lg bg-sky-50 border border-sky-200 p-2.5 text-xs text-sky-900 flex items-center gap-2">
                      <Database className="w-4 h-4 text-sky-700 shrink-0" />
                      <span>Turn telemetry fed directly into prompt embeddings for non-stop model accuracy gains.</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Bottom Card Footer Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-200 bg-slate-50/60 px-5 py-3.5">
            <p className="text-xs text-slate-500">
              Live in a day · Pre-integrated with Salesforce, Zoho, Zendesk &amp; HubSpot
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://cxq360.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-sky-700 px-5 py-2 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-sky-800"
              >
                <span>Experience Copilot in CXQ360.ai</span>
                <ExternalLink className="h-3.5 w-3.5 shrink-0" />
              </a>

              <Link
                href="/contact-us#quote"
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-5 py-2 text-xs font-semibold text-slate-900 shadow-2xs transition-colors hover:bg-slate-50"
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
