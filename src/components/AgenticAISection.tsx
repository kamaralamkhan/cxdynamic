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
  ExternalLink
} from "lucide-react";

interface WorkflowStep {
  step: string;
  title: string;
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
    metric: "280ms Parsing Latency",
  },
  {
    step: "02",
    title: "REASON",
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
    metric: "100% Policy Compliant",
  },
  {
    step: "03",
    title: "ACT",
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
    metric: "Sub-Second API Mutation",
  },
  {
    step: "04",
    title: "RESOLVE",
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
    metric: "74.8% Autonomous Containment",
  },
  {
    step: "05",
    title: "LEARN",
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [progressFills, setProgressFills] = useState<number[]>([100, 0, 0, 0, 0]);
  const [isManualScroll, setIsManualScroll] = useState<boolean>(false);

  // Smooth Scroll Runway Effect with Generous Center-Lock Offset
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerTop = rect.top + window.scrollY;
      const runwayHeight = containerRef.current.offsetHeight - window.innerHeight;
      if (runwayHeight <= 0) return;

      const scrolled = window.scrollY - containerTop;
      // Clamped progress from 0.0 to 1.0
      const rawProgress = Math.max(0, Math.min(1, scrolled / runwayHeight));

      // Ease into center: 0.0 to 0.06 is smooth centering lock; 0.06 to 0.94 runs the 5 steps; 0.94 to 1.0 exits gracefully
      const activeProgress = Math.max(0, Math.min(1, (rawProgress - 0.06) / 0.88));

      // 5 Steps -> each takes 20% (0.2) of active runway
      const stepIdx = Math.min(4, Math.max(0, Math.floor(activeProgress / 0.2)));
      const stepProgress = (activeProgress - (stepIdx * 0.2)) / 0.2; // 0.0 to 1.0 within current step

      const fills = [0, 0, 0, 0, 0];
      for (let i = 0; i < stepIdx; i++) fills[i] = 100;
      fills[stepIdx] = Math.min(100, Math.max(0, Math.round(stepProgress * 100)));

      setProgressFills(fills);

      if (!isManualScroll) {
        setActiveStepIndex(stepIdx);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isManualScroll]);

  // Click tab to jump directly to that step in the scroll runway
  const handleTabClick = (index: number) => {
    setIsManualScroll(true);
    setActiveStepIndex(index);

    const fills = [0, 0, 0, 0, 0];
    for (let i = 0; i <= index; i++) fills[i] = 100;
    setProgressFills(fills);

    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const containerTop = rect.top + window.scrollY;
      const runwayHeight = containerRef.current.offsetHeight - window.innerHeight;

      if (runwayHeight > 100) {
        const targetPercent = 0.06 + (index * 0.2 * 0.88) + 0.04;
        const targetScroll = containerTop + runwayHeight * targetPercent;

        window.scrollTo({
          top: targetScroll,
          behavior: "smooth",
        });
      }
    }

    setTimeout(() => {
      setIsManualScroll(false);
    }, 800);
  };

  const currentStep = AGENTIC_STEPS[activeStepIndex] || AGENTIC_STEPS[0];
  const StepIcon = currentStep.icon;

  return (
    <section 
      ref={containerRef}
      id="agentic-ai" 
      className="relative bg-[#02131e] text-white border-b border-slate-800 lg:h-[320vh] scroll-mt-24 pb-28 lg:pb-36"
    >
      {/* Decorative Cyan Radial Lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-sky-500/20 via-cyan-500/10 to-transparent blur-3xl -z-10" 
      />

      {/* Sticky Viewport Container - Perfectly Centered Vertically with Breathing Room Below Header */}
      <div className="lg:sticky lg:top-20 xl:top-24 lg:min-h-[calc(100vh-5.5rem)] flex flex-col justify-center py-8 lg:py-12 overflow-visible relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Section Header - High Contrast White & Sky Typography */}
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-950/90 border border-sky-500/50 text-sky-300 text-xs font-semibold shadow-inner">
              <Cpu className="w-3.5 h-3.5 text-sky-400" />
              <span className="mono-label">AUTONOMOUS AGENTIC ARCHITECTURE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight font-display">
              Beyond Static Chatbots:{" "}
              <span className="text-sky-400">True Agentic AI for Enterprise CX.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl mx-auto font-normal">
              Legacy bots only answer canned FAQs. CXdynamIQ's Agentic AI reasons through business rules, 
              triggers real-time backend APIs, and autonomously resolves customer requests from end to end.
            </p>
          </div>

          {/* 5-Step Stepper Navigation with Dynamic Scroll Fill Bars */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 mb-6 sm:mb-7">
            {AGENTIC_STEPS.map((s, idx) => {
              const Icon = s.icon;
              const isActive = activeStepIndex === idx;
              const fillPercent = progressFills[idx] ?? 0;
              return (
                <button
                  key={s.step}
                  onClick={() => handleTabClick(idx)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    isActive 
                      ? "bg-slate-900 border-sky-400 shadow-xl ring-1 ring-sky-400/50 translate-y-[-2px]" 
                      : "bg-slate-950/80 border-white/15 hover:bg-slate-900/70 hover:border-white/25"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono font-bold text-sky-400">{s.step}</span>
                    <div 
                      className="w-6 h-6 rounded-md flex items-center justify-center transition-transform"
                      style={{ backgroundColor: `${s.color}25`, color: s.color }}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white tracking-wide truncate font-display">{s.title}</div>
                  <div className="text-[11px] text-slate-300 mt-0.5 truncate">{s.badge}</div>

                  {/* Dynamic Progress Bar Fill on Scroll */}
                  <div className="w-full h-1 bg-white/15 rounded-full overflow-hidden mt-2.5">
                    <div 
                      className="h-full bg-sky-400 rounded-full transition-all duration-150 ease-out"
                      style={{ width: `${isActive ? Math.max(fillPercent, 10) : fillPercent}%` }}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Step Console Card - High Contrast Light on Dark */}
          <div className="bg-[#051928] rounded-2xl border border-sky-900/60 p-5 sm:p-7 lg:p-8 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-6 lg:gap-8 items-center">
              
              {/* Left: Step Details & Business Value (Crystal Clear Text!) */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-950/90 border border-sky-500/40 text-sky-300">
                  <span className="mono-label">PHASE {currentStep.step} OF 05</span>
                  <span>•</span>
                  <span>{currentStep.badge}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
                  {currentStep.step}. {currentStep.title}: How it Works
                </h3>

                <p className="text-sm text-slate-200 leading-relaxed">
                  {currentStep.summary}
                </p>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700/80 space-y-1.5 shadow-inner">
                  <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-sky-400" />
                    Live Execution Scenario
                  </div>
                  <div className="text-xs sm:text-sm text-slate-100 leading-relaxed font-normal">
                    {currentStep.actionDetails}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/15">
                  <span className="text-xs text-slate-300">Target Telemetry SLA</span>
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/70 px-3 py-1 rounded-md border border-emerald-500/50">
                    {currentStep.metric}
                  </span>
                </div>
              </div>

              {/* Right: Real-Time Code & Webhook Payload Execution */}
              <div className="rounded-xl bg-[#010912] border border-sky-900/70 p-4 sm:p-5 shadow-2xl space-y-2.5 font-mono text-xs">
                <div className="flex items-center justify-between text-slate-300 border-b border-white/10 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="text-[11px] text-slate-200 ml-1">agentic_orchestrator.ts</span>
                  </div>
                  <span className="text-[10px] text-sky-300 bg-sky-950/80 px-2.5 py-0.5 rounded border border-sky-800/60 font-semibold">
                    LIVE TELEMETRY
                  </span>
                </div>

                <pre className="text-sky-300 overflow-x-auto text-[11px] leading-relaxed py-2">
                  <code>{currentStep.codeSnippet}</code>
                </pre>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    SOC 2 &amp; HIPAA Guardrails Enforced
                  </span>
                  <span className="text-slate-400">Latency: 280ms</span>
                </div>
              </div>

            </div>
          </div>

          {/* Micro Bottom CTA - Dual Engine: Test in Sandbox or Book Demo */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4 text-center">
            <a
              href="https://cxq360.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs sm:text-sm font-semibold bg-sky-700 hover:bg-sky-800 text-white shadow-md transition-all whitespace-nowrap cursor-pointer"
            >
              <span>Test Agentic Workflows in CXQ360.ai</span>
              <ExternalLink className="w-4 h-4 shrink-0" />
            </a>

            <Link
              href="/contact-us#quote"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs sm:text-sm font-semibold bg-white text-slate-900 hover:bg-slate-100 shadow-md transition-all whitespace-nowrap"
            >
              <span>Book an Architecture Walkthrough</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
