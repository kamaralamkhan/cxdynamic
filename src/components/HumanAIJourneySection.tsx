"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Bot, 
  Users, 
  Sparkles, 
  Headphones, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  ExternalLink,
  PhoneCall, 
  MessageSquare, 
  FileText, 
  Activity,
  Zap,
  Clock,
  Compass
} from "lucide-react";

interface LifecycleStage {
  id: string;
  step: string;
  title: string;
  role: string;
  description: string;
  metric: string;
}

const LIFECYCLE_STAGES: LifecycleStage[] = [
  {
    id: "self-service",
    step: "01",
    title: "AI Self-Service",
    role: "Zero-Touch Deflection",
    description: "Multilingual IVR and WhatsApp bots handle identity verification, balance checks, order lookups, and routine FAQs autonomously in <300ms.",
    metric: "45% of Routine Contacts",
  },
  {
    id: "ai-agent",
    step: "02",
    title: "AI Voice / Chat Agent",
    role: "Autonomous Execution",
    description: "Agentic AI reasons over business rules and triggers backend APIs directly (e.g. rescheduling deliveries, issuing refunds, booking appointments).",
    metric: "72%+ AI Containment",
  },
  {
    id: "human-agent",
    step: "03",
    title: "Human Agent Handoff",
    role: "Warm Context Transfer",
    description: "When empathy, complex reasoning, or policy exceptions are required, the call transfers instantly with 100% of WhatsApp and bot context preserved.",
    metric: "Zero Repeated Questions",
  },
  {
    id: "ai-assist",
    step: "04",
    title: "AI Assist & Copilot",
    role: "In-Call Augmentation",
    description: "The Copilot desktop listens to live audio, pops keyword coach cards, auto-checks compliance playbooks, and suggests next-best-actions in real time.",
    metric: "-28% Average Handle Time",
  },
  {
    id: "resolution",
    step: "05",
    title: "Resolution & ACW",
    role: "Automated Wrap-Up",
    description: "AI auto-generates structured call summaries, tags CRM disposition codes, and updates Salesforce/Zoho in 1 click, eliminating manual post-call wrap-up.",
    metric: "50% Less Wrap-Up Time",
  },
  {
    id: "qa-analytics",
    step: "06",
    title: "AI QA & Analytics",
    role: "100% Continuous Audit",
    description: "100% of interactions are scored for compliance, script adherence, sentiment trajectory, and predictive CSAT to coach agents and refine AI models.",
    metric: "100% Audit Coverage",
  },
];

export default function HumanAIJourneySection() {
  const [activeStageIndex, setActiveStageIndex] = useState(2); // Default to Human Agent
  const [activePlaybookStep, setActivePlaybookStep] = useState(2);

  const activeStage = LIFECYCLE_STAGES[activeStageIndex];

  return (
    <section id="human-ai-collaboration" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Core Positioning Banner */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/90 border border-sky-500/40 text-sky-300 text-xs font-semibold shadow-inner">
            <Users className="w-3.5 h-3.5 text-sky-400" />
            <span>Human and AI Collaboration Journey</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight leading-snug font-display">
            AI handles automation and repetitive interactions,{" "}
            <span className="text-sky-400">while human agents handle complex, sensitive and high-value conversations.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Never force customers into cold robotic dead-ends. CXdynamIQ creates an integrated continuum where autonomous AI agents resolve routine volume and assist human specialists with real-time in-call intelligence.
          </p>
        </div>

        {/* 6-Stage Horizontal Architecture Stepper */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {LIFECYCLE_STAGES.map((stage, idx) => {
              const isCurrent = activeStageIndex === idx;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`p-4 rounded-xl text-left border transition-colors cursor-pointer relative focus-visible:outline-2 focus-visible:outline-sky-400 ${
                    isCurrent
                      ? "bg-sky-950/80 border-sky-400 shadow-md ring-1 ring-sky-400/50"
                      : "bg-slate-950/60 border-slate-800 hover:bg-slate-800/60 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-sky-400">{stage.step}</span>
                    <span className="text-[10px] text-slate-400 font-medium">{stage.metric}</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white line-clamp-2">
                    {stage.title}
                  </h4>
                  <p className="text-[11px] text-slate-300 line-clamp-2 mt-0.5">
                    {stage.role}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detail Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/90 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-sky-400">
                Phase {activeStage.step}: {activeStage.title} ({activeStage.role})
              </span>
              <p className="text-xs sm:text-sm text-slate-200 max-w-3xl leading-relaxed">
                {activeStage.description}
              </p>
            </div>
            <div className="shrink-0 bg-sky-950/90 border border-sky-500/40 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-sky-300">
              {activeStage.metric}
            </div>
          </div>
        </div>

        {/* Live Agent Experience & AI Copilot Desktop UI */}
        <div className="bg-slate-950 rounded-3xl border border-slate-800 shadow-lg p-6 sm:p-8 lg:p-10 space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 motion-safe:animate-pulse motion-reduce:animate-none" />
                <span>Active Call · Agent Copilot Desktop</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                Live In-Call Assistance, Knowledge Suggestions &amp; Auto-ACW
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                Caller: Marcus Vance (+1 415 ••• ••89)
              </span>
              <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/80 px-3 py-1.5 rounded-lg border border-emerald-500/40">
                Sentiment: +0.86 Positive
              </span>
            </div>
          </div>

          {/* Split Pane: Left Active Call Context & Transcript | Right AI Copilot Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 6 cols: Live Audio Stream, Context Preservation & Transcript */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* WhatsApp-to-Voice Context Preservation Card */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-sky-400 font-semibold flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5" />
                    Prior WhatsApp Context Handed Off
                  </span>
                  <span className="text-slate-400 text-[11px]">Today, 14:18 (4m ago)</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Customer attempted automated address change on WhatsApp. Transit rule cutoff required voice confirmation. Identity verified via 2FA token (#9942).
                </p>
                <div className="flex items-center gap-2 text-[11px] text-slate-300">
                  <span className="bg-slate-800 px-2 py-0.5 rounded">Tier: Enterprise Gold</span>
                  <span className="bg-slate-800 px-2 py-0.5 rounded">Order #CX-88492</span>
                  <span className="bg-emerald-950/70 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">Verified</span>
                </div>
              </div>

              {/* Live Audio Transcript with PII Masking */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 text-xs">
                <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
                  <span className="flex items-center gap-2">
                    <Headphones className="w-3.5 h-3.5 text-sky-400" />
                    Live Audio Stream (Opus HD · 12ms Latency)
                  </span>
                  <span className="text-[10px] text-emerald-400 font-semibold">AUTOMATIC PII REDACTION ON</span>
                </div>

                <div className="space-y-2.5 text-xs text-slate-200 max-h-48 overflow-y-auto pr-1">
                  <div>
                    <span className="text-slate-400 font-semibold">Caller (14:22:04): </span>
                    <span>&quot;Hi, I spoke to the WhatsApp bot earlier. I need my package sent to Suite 400 instead of the front lobby.&quot;</span>
                  </div>
                  <div>
                    <span className="text-sky-400 font-semibold">Agent (14:22:10): </span>
                    <span>&quot;Hello Marcus! I see your WhatsApp ticket for Order #CX-88492 right here on my screen. Let me confirm that re-route immediately.&quot;</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-semibold">Caller (14:22:18): </span>
                    <span>&quot;Perfect, thank you! My card ending in <span className="bg-slate-800 text-sky-300 px-1.5 py-0.5 rounded">•••• 4210</span> is on file for any delivery adjustment.&quot;</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right 6 cols: AI Copilot In-Call Panel */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Keyword-Triggered Live Coach Card */}
              <div className="p-4 rounded-xl bg-sky-950/70 border border-sky-500/40 space-y-2 shadow-inner">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-sky-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                    AI Live Coach Card: Logistics Address Update
                  </span>
                  <span className="text-[10px] tabular-nums font-semibold text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/40">
                    Confidence: 99.4%
                  </span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Recommended response: <em>&quot;Marcus, I have updated the drop coordinates in our logistics dispatch portal. Courier slot confirmed for tomorrow between 9:00 AM and 12:00 PM.&quot;</em>
                </p>
                <div className="pt-1 flex items-center gap-3">
                  <button className="text-[11px] font-semibold text-white bg-sky-700 hover:bg-sky-800 px-3 py-1 rounded-md transition-colors cursor-pointer">
                    Apply to CRM (1-Click)
                  </button>
                  <span className="text-[11px] text-slate-300">Triggers SAP API mutation #TX-9102</span>
                </div>
              </div>

              {/* Live Playbook Checklist */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
                <div className="flex items-center justify-between text-xs font-semibold text-white">
                  <span>Adherence Playbook: Tier-1 Logistics Inbound</span>
                  <span className="text-xs tabular-nums font-semibold text-sky-400">3 of 4 Completed</span>
                </div>

                <div className="space-y-1.5 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="line-through text-slate-400">Warm Greeting &amp; Customer Name Stated</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="line-through text-slate-400">Acknowledge Previous WhatsApp Intent</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="line-through text-slate-400">Confirm New Suite &amp; Delivery Window</span>
                  </div>
                  <div className="flex items-center gap-2 text-sky-300 font-medium">
                    <span className="w-3.5 h-3.5 rounded-full border border-sky-400 flex items-center justify-center shrink-0 text-[10px]">4</span>
                    <span>Offer WhatsApp Digital Confirmation Receipt</span>
                  </div>
                </div>
              </div>

              {/* Zero-Touch Post-Call AutoSummary (ACW Slashed by 50%) */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-sky-400" />
                    Zero-Touch Post-Call AutoSummary
                  </div>
                  <p className="text-[11px] text-slate-300">
                    Pre-compiled structured summary &amp; CRM disposition synced in 0.4s.
                  </p>
                </div>
                <span className="text-xs tabular-nums font-semibold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-500/40 shrink-0">
                  -50% ACW
                </span>
              </div>

            </div>

          </div>

          {/* Action CTAs */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-slate-300">
              Live in a day · Pre-integrated with Salesforce, Zoho, Zendesk &amp; HubSpot
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://cxq360.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-sky-700 hover:bg-sky-800 text-white shadow-sm transition-colors cursor-pointer"
              >
                <span>Experience Copilot in CXQ360.ai</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>

              <Link
                href="/contact-us#quote"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-white text-slate-900 hover:bg-slate-100 shadow-sm transition-colors"
              >
                <span>Book a Guided Demo</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
