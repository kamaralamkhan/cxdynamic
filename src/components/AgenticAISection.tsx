"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  Cpu, 
  Brain, 
  Workflow, 
  CheckCircle, 
  GraduationCap, 
  ArrowRight, 
  Zap, 
  ShieldCheck,
  ExternalLink,
  Pause,
  Play
} from "lucide-react";

interface WorkflowStep {
  step: string;
  title: string;
  shortBadge: string;
  badge: string;
  icon: typeof Brain;
  color: string;
  summary: string;
  actionDetails: string;
  codeSnippet: string;
  metric: string;
}

const AGENTIC_STEPS: WorkflowStep[] = [
  {
    step: "01",
    title: "UNDERSTAND",
    shortBadge: "Multilingual NLU",
    badge: "Multilingual & Acoustic Parsing",
    icon: Brain,
    color: "#38bdf8",
    summary: "Customer contacts support via WhatsApp or inbound Voice: 'My shipment hasn't arrived and I need to update my delivery address.' Natural language parsing detects multilingual intent, acoustic urgency, and sentiment in <300ms.",
    actionDetails: "Parsed Intent: SHIPMENT_ADDRESS_UPDATE. Customer authenticated via phone caller-ID & OTP. Emotion score: -0.42 (Frustrated) tagged with high priority routing.",
    codeSnippet: `// 01. Autonomous Semantic & Intent Parsing
const parsedIntent = await agenticEngine.understand({
  audioStream: customerCallStream,
  channel: "WHATSAPP_VOICE_INBOUND",
  detectEmotion: true,
  supportedLanguages: ["en", "es", "hi", "ar", "tl"]
});
// Result: { intent: "UPDATE_DELIVERY_ADDRESS", confidence: 0.988, urgency: "HIGH" }`,
    metric: "280ms Latency",
  },
  {
    step: "02",
    title: "REASON",
    shortBadge: "ERP Policy Check",
    badge: "ERP & Policy Evaluation",
    icon: Cpu,
    color: "#818cf8",
    summary: "Agentic AI queries your Logistics ERP, Salesforce CRM, and order fulfillment graph in real time to verify shipment status, courier transit cutoff rules, and address validation policies.",
    actionDetails: "Queries SAP/NetSuite ERP: Order #CX-88492 is currently at Regional Sorting Hub. Address change policy rule: ALLOWED before 18:00 local time. Zero human approval needed.",
    codeSnippet: `// 02. Policy & Entitlement Reasoning
const evaluation = await policyGraph.evaluate({
  orderId: "CX-88492",
  customerId: "cust_7721",
  action: "UPDATE_SHIPPING_DESTINATION",
  newAddress: "Suite 400, Ortigas Center, Pasig"
});
// Decision: APPROVED (Transit cutoff: 18:00 | Current: 14:22)`,
    metric: "100% Compliant",
  },
  {
    step: "03",
    title: "ACT",
    shortBadge: "API Tool Trigger",
    badge: "Autonomous Backend API Trigger",
    icon: Workflow,
    color: "#34d399",
    summary: "Unlike legacy chatbots that merely output static text, Agentic AI directly triggers authenticated backend mutations, ERP database writes, and courier dispatch webhooks in milliseconds.",
    actionDetails: "Executes Logistics ERP API to update destination coordinates, locks package re-routing tag, and issues a rescheduled courier dispatch window via webhook.",
    codeSnippet: `// 03. Authenticated Webhook & ERP Mutation
const dispatchMutation = await logisticsERP.updateDelivery({
  orderId: "CX-88492",
  newCoordinates: { lat: 14.5869, lng: 121.0614 },
  courierSlot: "TOMORROW_0900_1200",
  authorizedBy: "CXdynamIQ_Agentic_Engine"
});
await salesforce.updateCase({ status: "AUTONOMOUSLY_RESOLVED" });`,
    metric: "Sub-Second Mutation",
  },
  {
    step: "04",
    title: "RESOLVE",
    shortBadge: "Multichannel Sync",
    badge: "Omnichannel Resolution Sync",
    icon: CheckCircle,
    color: "#38bdf8",
    summary: "Routine inquiries complete with zero human latency. For complex edge-cases, the engine performs an instant warm handoff to a human specialist with full context pre-compiled.",
    actionDetails: "Ticket closed with zero hold time. Customer receives real-time voice confirmation on the call plus a branded WhatsApp tracking notification with the updated delivery window.",
    codeSnippet: `// 04. Multi-Channel Resolution Sync
await omnichannelBridge.dispatchConfirmation({
  recipient: customer.phone,
  channel: "WHATSAPP",
  message: "Your delivery address for Order #CX-88492 has been updated. New window: Tomorrow 9:00 AM - 12:00 PM. Tracking: cxd.link/tr-88492"
});`,
    metric: "74.8% Containment",
  },
  {
    step: "05",
    title: "LEARN",
    shortBadge: "Auto-QA & RL",
    badge: "Reinforcement & Auto QA",
    icon: GraduationCap,
    color: "#c084fc",
    summary: "Every interaction turn is automatically ingested by Conversation Intelligence to refine domain prompt embeddings, update agent coaching telemetry, and eliminate recurring issues.",
    actionDetails: "Interaction automatically graded (CSAT: 4.9/5, Script Adherence: 100%). Resolution path logged to knowledge-base reinforcement loop for future logistics inquiries.",
    codeSnippet: `// 05. Conversation Intelligence & RL Loop
await conversationQA.ingestTurn({
  interactionId: "tx_logistics_88492",
  scriptAdherence: 100,
  complianceScore: 1.0,
  predictedCSAT: 4.9,
  reinforceModel: true
});`,
    metric: "Continuous Self-Tuning",
  },
];

export default function AgenticAISection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const stepDurationMs = 5000; // 5 seconds per step

  // Auto-advance with smooth progress bar
  useEffect(() => {
    if (isPaused) return;

    const intervalTime = 50;
    const increment = (intervalTime / stepDurationMs) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveStepIndex((current) => (current + 1) % AGENTIC_STEPS.length);
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPaused, activeStepIndex]);

  const handleTabClick = (index: number) => {
    setActiveStepIndex(index);
    setProgress(0);
  };

  const currentStep = AGENTIC_STEPS[activeStepIndex] || AGENTIC_STEPS[0];
  const StepIcon = currentStep.icon;

  return (
    <section 
      id="agentic-ai" 
      className="relative bg-[#02131e] text-white border-b border-slate-800 py-16 sm:py-20 lg:py-24 scroll-mt-20 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Decorative Cyan Radial Lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-sky-500/15 via-cyan-500/10 to-transparent blur-3xl -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-8 sm:space-y-10">
        
        {/* Section Header - Compact, High Contrast, Perfectly Proportioned */}
        <div className="max-w-3xl mx-auto text-center space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/90 border border-sky-500/50 text-sky-300 text-xs font-semibold shadow-inner">
            <Cpu className="w-3.5 h-3.5 text-sky-400" />
            <span className="mono-label">AUTONOMOUS AGENTIC ARCHITECTURE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight font-display">
            Beyond Static Chatbots:{" "}
            <span className="text-sky-400">True Agentic AI for Enterprise CX.</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Legacy bots only answer canned FAQs. CXdynamIQ's Agentic AI reasons through business rules, 
            triggers real-time backend APIs, and autonomously resolves customer requests from end to end.
          </p>
        </div>

        {/* 5-Step Segmented Navigation Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-2.5">
          {AGENTIC_STEPS.map((s, idx) => {
            const Icon = s.icon;
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={s.step}
                onClick={() => handleTabClick(idx)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                  isActive 
                    ? "bg-slate-900 border-sky-400 shadow-lg ring-1 ring-sky-400/50" 
                    : "bg-slate-950/80 border-white/10 hover:bg-slate-900/60 hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-xs font-mono font-bold ${isActive ? "text-sky-400" : "text-slate-400"}`}>
                    {s.step}
                  </span>
                  <div 
                    className="w-5 h-5 rounded-md flex items-center justify-center transition-transform"
                    style={{ backgroundColor: `${s.color}25`, color: s.color }}
                  >
                    <Icon className="w-3 h-3" />
                  </div>
                </div>
                
                <div className="text-xs sm:text-sm font-semibold text-white tracking-wide truncate font-display">
                  {s.title}
                </div>
                <div className="text-[10px] text-slate-400 truncate mt-0.5">
                  {s.shortBadge}
                </div>

                {/* Animated Progress Bar on Active Tab */}
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-2">
                  <div 
                    className={`h-full bg-sky-400 rounded-full transition-all duration-75 ease-linear ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ width: isActive ? `${progress}%` : "0%" }}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Step Console Card - Perfectly Proportioned & Never Cut Off */}
        <div className="bg-[#051928] rounded-2xl border border-sky-900/60 p-5 sm:p-6 lg:p-7 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Column (7 cols): Step Details & Live Execution Scenario */}
            <div className="lg:col-span-7 space-y-3.5">
              
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-sky-950/90 border border-sky-500/40 text-sky-300">
                  <span className="mono-label">PHASE {currentStep.step} OF 05</span>
                  <span>•</span>
                  <span>{currentStep.badge}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-slate-400 font-mono">Target SLA:</span>
                  <span className="text-[11px] font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/40">
                    {currentStep.metric}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold font-display text-white tracking-tight">
                  {currentStep.step}. {currentStep.title}: How it Works
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mt-1">
                  {currentStep.summary}
                </p>
              </div>

              {/* Live Execution Scenario Box */}
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-700/80 space-y-1 shadow-inner">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-sky-400" />
                  Live Workflow Scenario
                </div>
                <div className="text-xs text-slate-100 leading-relaxed font-normal">
                  {currentStep.actionDetails}
                </div>
              </div>

              {/* Guardrails Footer */}
              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-300 border-t border-white/10">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  SOC 2 Type II &amp; HIPAA Guardrails Enforced
                </span>
                <span className="text-slate-400 text-[10px]">Hover to pause auto-play</span>
              </div>
            </div>

            {/* Right Column (5 cols): Code & Real-Time Payload Console */}
            <div className="lg:col-span-5 rounded-xl bg-[#010912] border border-sky-900/70 p-4 shadow-xl space-y-2 font-mono text-xs">
              
              <div className="flex items-center justify-between text-slate-300 border-b border-white/10 pb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="text-[11px] text-slate-200 ml-1">agentic_orchestrator.ts</span>
                </div>
                <span className="text-[9px] text-sky-300 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-800/60 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE TELEMETRY
                </span>
              </div>

              <pre className="text-sky-300 overflow-x-auto text-[10.5px] leading-relaxed py-1 max-h-[190px] scrollbar-thin">
                <code>{currentStep.codeSnippet}</code>
              </pre>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400">
                <span>Latency: 280ms</span>
                <span className="text-emerald-400">Authenticated ✓</span>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-1 text-center">
          <a
            href="https://cxq360.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-sky-700 hover:bg-sky-800 text-white shadow-md transition-all whitespace-nowrap cursor-pointer"
          >
            <span>Test Agentic Workflows in CXQ360.ai</span>
            <ExternalLink className="w-3.5 h-3.5 shrink-0" />
          </a>

          <Link
            href="/contact-us#quote"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-white text-slate-900 hover:bg-slate-100 shadow-md transition-all whitespace-nowrap"
          >
            <span>Book an Architecture Walkthrough</span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0" />
          </Link>
        </div>

      </div>
    </section>
  );
}
