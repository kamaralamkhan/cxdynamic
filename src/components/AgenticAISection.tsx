"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Brain, CheckCircle2, Cpu, ExternalLink, GraduationCap, Pause, Play, ShieldCheck, Workflow, Zap, Terminal, FileCode } from "lucide-react";

interface WorkflowStep {
  step: string;
  title: string;
  shortBadge: string;
  badge: string;
  icon: typeof Brain;
  color: string;
  endpoint: string;
  httpStatus: string;
  summary: string;
  actionDetails: string;
  codeSnippet: string;
  metric: string;
  latencyMs: number;
  confidence: string;
  signals: string[];
  auditLogs: { time: string; event: string }[];
}

const AGENTIC_STEPS: WorkflowStep[] = [
  {
    step: "01",
    title: "UNDERSTAND",
    shortBadge: "Multilingual NLU",
    badge: "Multilingual & Acoustic Parsing",
    icon: Brain,
    color: "#0284c7", // sky-600
    endpoint: "POST /v1/nlu/acoustic-intent",
    httpStatus: "200 OK",
    summary:
      "Customer contacts support via WhatsApp audio or inbound Voice: 'My shipment hasn't arrived and I urgently need to update my delivery address.' Natural-language parsing detects multilingual intent, acoustic urgency, and sentiment in under 300ms.",
    actionDetails:
      "Parsed intent: SHIPMENT_ADDRESS_UPDATE. Customer authenticated via phone caller ID and OTP session token. Urgency score: 0.88, tagged for deterministic fast-track routing.",
    codeSnippet: `// 01. Autonomous semantic & intent parsing
const parsedIntent = await agenticEngine.understand({
  audioStream: customerCallStream,
  channel: "WHATSAPP_VOICE_INBOUND",
  detectUrgency: true,
  supportedLanguages: ["en", "es", "hi", "ar", "tl"]
});
// result: UPDATE_DELIVERY_ADDRESS | confidence: 0.994`,
    metric: "280ms latency",
    latencyMs: 280,
    confidence: "99.4%",
    signals: [
      "Multilingual intent classified",
      "Caller identity & OTP verified",
      "Acoustic urgency tagged 0.88",
    ],
    auditLogs: [
      { time: "14:22:04.112", event: "Opus audio stream ingested (12ms buffer)" },
      { time: "14:22:04.280", event: "Intent tagged: SHIPMENT_ADDRESS_UPDATE" },
      { time: "14:22:04.392", event: "Caller 2FA token #9942 matched to CRM" },
    ],
  },
  {
    step: "02",
    title: "REASON",
    shortBadge: "ERP Policy Check",
    badge: "ERP & Policy Evaluation",
    icon: Cpu,
    color: "#4f46e5", // indigo-600
    endpoint: "POST /v1/policy/graph-evaluate",
    httpStatus: "200 OK",
    summary:
      "Agentic AI queries your logistics ERP, Salesforce CRM, and order-fulfilment policy graph in real time to verify shipment status, courier transit cut-off rules, and destination validation constraints.",
    actionDetails:
      "SAP & NetSuite confirm Order #CX-88492 is at the regional sorting hub. Policy rule permits in-flight address updates prior to the 18:00 cutoff window—zero human supervisor approval needed.",
    codeSnippet: `// 02. Policy & entitlement reasoning
const evaluation = await policyGraph.evaluate({
  orderId: "CX-88492",
  customerId: "cust_7721",
  action: "UPDATE_SHIPPING_DESTINATION",
  newAddress: "Suite 400, Ortigas Center, Pasig"
});
// decision: APPROVED | transit cutoff: 18:00 (met)`,
    metric: "100% compliant",
    latencyMs: 140,
    confidence: "100%",
    signals: [
      "ERP shipment record retrieved",
      "Transit cut-off rules evaluated",
      "Autonomous re-route approved",
    ],
    auditLogs: [
      { time: "14:22:04.420", event: "SAP RFC query order #CX-88492 (status: IN_HUB)" },
      { time: "14:22:04.510", event: "Transit policy check: Cutoff 18:00 local time" },
      { time: "14:22:04.560", event: "Autonomous policy rule: APPROVED (no escalation)" },
    ],
  },
  {
    step: "03",
    title: "ACT",
    shortBadge: "API Tool Trigger",
    badge: "Autonomous Backend API Trigger",
    icon: Workflow,
    color: "#059669", // emerald-600
    endpoint: "PATCH /v1/logistics/dispatch-route",
    httpStatus: "200 MUTATION_APPLIED",
    summary:
      "Unlike legacy chatbots that merely recite static text, Agentic AI directly triggers authenticated backend mutations, ERP database writes, and courier dispatch webhooks with atomic idempotency.",
    actionDetails:
      "The logistics dispatch API receives the updated GPS coordinates, a package re-routing barcode tag is locked, and the courier dispatch window is rescheduled through an authenticated webhook.",
    codeSnippet: `// 03. Authenticated webhook & ERP mutation
const dispatchMutation = await logisticsERP.updateDelivery({
  orderId: "CX-88492",
  newCoordinates: { lat: 14.5869, lng: 121.0614 },
  courierSlot: "TOMORROW_0900_1200",
  authorizedBy: "CXdynamIQ_Agentic_Engine"
});
await salesforce.updateCase({ status: "AUTONOMOUSLY_RESOLVED" });`,
    metric: "Sub-second mutation",
    latencyMs: 310,
    confidence: "99.9%",
    signals: [
      "Cryptographic payload signed",
      "ERP database record mutated",
      "Courier dispatch webhook fired",
    ],
    auditLogs: [
      { time: "14:22:04.600", event: "Signed HMAC-SHA256 bearer token dispatched" },
      { time: "14:22:04.820", event: "Logistics ERP updated destination coords" },
      { time: "14:22:04.910", event: "Courier dispatch webhook returned HTTP 200" },
    ],
  },
  {
    step: "04",
    title: "RESOLVE",
    shortBadge: "Multichannel Sync",
    badge: "Omnichannel Resolution Sync",
    icon: CheckCircle2,
    color: "#0284c7", // sky-600
    endpoint: "POST /v1/omnichannel/dispatch-receipt",
    httpStatus: "200 SYNCED",
    summary:
      "Routine inquiries close with zero human latency. For complex edge cases, the engine executes an instantaneous warm transfer to a human specialist with 100% of the conversation context and CRM state pre-populated.",
    actionDetails:
      "The ticket closes with zero customer hold time. The customer receives immediate voice confirmation plus a branded WhatsApp receipt with the updated delivery window and real-time tracking link.",
    codeSnippet: `// 04. Multichannel resolution sync
await omnichannelBridge.dispatchConfirmation({
  recipient: customer.phone,
  channel: "WHATSAPP",
  template: "delivery_update_confirmed",
  trackingUrl: "https://track.cxdynamiq.com/CX-88492"
});
await customerRecord.closeCase("CX-88492", { csatSurvey: true });`,
    metric: "74.8% containment",
    latencyMs: 190,
    confidence: "100%",
    signals: [
      "Voice confirmation synthesized",
      "Branded WhatsApp receipt sent",
      "CRM case autonomously closed",
    ],
    auditLogs: [
      { time: "14:22:05.020", event: "Voice synthesis turn complete (<200ms TTFB)" },
      { time: "14:22:05.150", event: "WhatsApp Cloud API: receipt delivered" },
      { time: "14:22:05.210", event: "Salesforce case #88492 closed autonomously" },
    ],
  },
  {
    step: "05",
    title: "LEARN",
    shortBadge: "Auto-QA & RL",
    badge: "Reinforcement & Auto QA",
    icon: GraduationCap,
    color: "#7c3aed", // violet-600
    endpoint: "POST /v1/qa/ingest-reinforce",
    httpStatus: "200 INGESTED",
    summary:
      "Every single interaction turn is automatically ingested by Conversation Intelligence to refine domain prompt embeddings, update agent coaching telemetry, and prevent recurring operational bottlenecks.",
    actionDetails:
      "The interaction is automatically scored: predicted CSAT 4.9/5 and policy compliance 100%. Its resolution path is committed to the vector knowledge-base reinforcement loop for continuous accuracy gains.",
    codeSnippet: `// 05. Conversation intelligence & RL loop
await conversationQA.ingestTurn({
  interactionId: "tx_logistics_88492",
  scriptAdherence: 100,
  complianceScore: 1.0,
  predictedCSAT: 4.9,
  reinforceVectorGraph: true
});
// telemetry: model accuracy updated (+0.2%)`,
    metric: "Continuous self-tuning",
    latencyMs: 95,
    confidence: "100%",
    signals: [
      "100% conversation QA scored",
      "Domain prompt embeddings updated",
      "Operational telemetry synced",
    ],
    auditLogs: [
      { time: "14:22:05.300", event: "Whisper turn scored: 100% compliance" },
      { time: "14:22:05.340", event: "Predicted CSAT calculated: 4.9 / 5.0" },
      { time: "14:22:05.395", event: "Vector store updated with optimal resolution path" },
    ],
  },
];

const STEP_DURATION_MS = 5600;

export default function AgenticAISection() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef(0);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [pageIsVisible, setPageIsVisible] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(query.matches);
    updatePreference();
    query.addEventListener("change", updatePreference);
    return () => query.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => setPageIsVisible(!document.hidden);
    handleVisibilityChange();
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  useEffect(() => {
    if (!isPlaying || !isInView || !pageIsVisible || reduceMotion) return;

    let frameId = 0;
    let startedAt = performance.now() - (progressRef.current / 100) * STEP_DURATION_MS;

    const advance = (now: number) => {
      const nextProgress = ((now - startedAt) / STEP_DURATION_MS) * 100;
      if (nextProgress >= 100) {
        setActiveStepIndex((current) => (current + 1) % AGENTIC_STEPS.length);
        progressRef.current = 0;
        setProgress(0);
        startedAt = now;
      } else {
        progressRef.current = nextProgress;
        setProgress(nextProgress);
      }
      frameId = requestAnimationFrame(advance);
    };

    frameId = requestAnimationFrame(advance);
    return () => cancelAnimationFrame(frameId);
  }, [isPlaying, isInView, pageIsVisible, reduceMotion, activeStepIndex]);

  const selectStep = (index: number) => {
    setActiveStepIndex(index);
    progressRef.current = 0;
    setProgress(0);
  };

  const handleStepKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let nextIndex: number | null = null;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % AGENTIC_STEPS.length;
    }
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (index - 1 + AGENTIC_STEPS.length) % AGENTIC_STEPS.length;
    }
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = AGENTIC_STEPS.length - 1;

    if (nextIndex !== null) {
      event.preventDefault();
      setIsPlaying(false);
      selectStep(nextIndex);
      document.getElementById(`agentic-tab-${nextIndex}`)?.focus();
    }
  };

  const handleTabFocus = () => setIsPlaying(false);
  const currentStep = AGENTIC_STEPS[activeStepIndex] ?? AGENTIC_STEPS[0];
  const StepIcon = currentStep.icon;
  const playbackLabel = reduceMotion
    ? "Autoplay disabled"
    : isPlaying
    ? "Pause sequence"
    : "Play sequence";

  return (
    <section
      ref={sectionRef}
      id="agentic-ai"
      className="relative overflow-hidden border-b border-slate-200 bg-slate-50/50 py-14 sm:py-16 lg:py-20 text-slate-900 scroll-mt-20"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <header className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <h2 className="mt-2 font-display text-3xl font-semibold leading-tight tracking-[-0.03em] text-slate-900 sm:text-4xl lg:text-5xl">
              Beyond static chatbots.{" "}
              <span className="text-sky-700">AI that finishes the job.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base leading-relaxed text-slate-600 lg:justify-self-end max-w-lg">
            True Agentic AI doesn&apos;t just generate text. It understands intent, reasons over enterprise business logic, triggers authenticated backend actions, and resolves customer requests end-to-end.
          </p>
        </header>

        {/* Main Interactive Studio Canvas */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          
          {/* Top Control Bar */}
          <div className="flex flex-col gap-3 border-b border-slate-200 bg-slate-50/80 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100 text-sky-700">
                <Workflow className="h-4 w-4" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-slate-900">
                  One customer request. Five autonomous decisions.
                </p>
                <p className="text-[11px] text-slate-500">
                  Explore each phase or let the live execution trace run automatically.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsPlaying((playing) => !playing)}
                aria-pressed={isPlaying && !reduceMotion}
                disabled={reduceMotion}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900 shadow-2xs active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isPlaying && !reduceMotion ? (
                  <Pause className="h-3.5 w-3.5 text-sky-700" aria-hidden="true" />
                ) : (
                  <Play className="h-3.5 w-3.5 text-sky-700" aria-hidden="true" />
                )}
                <span>{playbackLabel}</span>
              </button>
            </div>
          </div>

          {/* Stepper Navigation Strip */}
          <nav
            aria-label="Agentic AI workflow phases"
            className="border-b border-slate-200 bg-slate-50/40 p-2 sm:p-3"
          >
            <div
              role="tablist"
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2"
            >
              {AGENTIC_STEPS.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeStepIndex === index;
                return (
                  <button
                    key={step.step}
                    id={`agentic-tab-${index}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="agentic-workflow-panel"
                    tabIndex={isActive ? 0 : -1}
                    onFocus={handleTabFocus}
                    onClick={() => {
                      setIsPlaying(false);
                      selectStep(index);
                    }}
                    onKeyDown={(event) => handleStepKeyDown(event, index)}
                    className={`group relative flex items-center gap-2.5 rounded-xl border p-2.5 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 cursor-pointer ${
                      isActive
                        ? "border-sky-300 bg-sky-50/70 text-slate-900 shadow-2xs ring-1 ring-sky-300/60"
                        : "border-slate-200/80 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50/80"
                    }`}
                  >
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold transition-colors ${
                        isActive
                          ? "bg-sky-700 text-white shadow-2xs"
                          : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                      }`}
                    >
                      {step.step}
                    </div>
                    <div className="min-w-0">
                      <span className="block truncate text-xs font-bold text-slate-900">
                        {step.title}
                      </span>
                      <span className="block truncate text-[10px] text-slate-500">
                        {step.shortBadge}
                      </span>
                    </div>

                    {/* Active Step Progress Pill Bar */}
                    {isActive && (
                      <div className="absolute -bottom-2 sm:-bottom-3 left-3 right-3 h-0.5 bg-sky-600 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Dual-Column Workspace: Stage Narrative (Left) & Developer Telemetry Inspector (Right) */}
          <div
            id="agentic-workflow-panel"
            role="tabpanel"
            aria-labelledby={`agentic-tab-${activeStepIndex}`}
            className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200"
          >
            
            {/* Left 7 cols: Stage Details, Natural Narrative & Outcome */}
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
              
              {/* Stage Identity Header */}
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-200 bg-sky-50 text-sky-700"
                  >
                    <StepIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-sky-700">
                      Phase {currentStep.step} · {currentStep.badge}
                    </span>
                    <h3 className="mt-0.5 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                      {currentStep.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 motion-safe:animate-pulse" />
                    {currentStep.metric}
                  </span>
                </div>
              </div>

              {/* Real-World Customer Narrative */}
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                {currentStep.summary}
              </p>

              {/* Live Outcome Box */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5 space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-sky-800">
                  <div className="flex items-center gap-1.5">
                    <Zap className="h-4 w-4 text-sky-700" aria-hidden="true" />
                    <span>Autonomous Decision Outcome</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">
                    Session: #tx_logistics_88492
                  </span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-800">
                  {currentStep.actionDetails}
                </p>
              </div>

              {/* Verified Signal Checkmarks */}
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Verified Phase Signals
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {currentStep.signals.map((signal) => (
                    <div
                      key={signal}
                      className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-800 shadow-2xs"
                    >
                      <CheckCircle2
                        className="h-4 w-4 shrink-0 text-emerald-600"
                        aria-hidden="true"
                      />
                      <span className="truncate">{signal}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guardrails Trust Line */}
              <div className="flex items-center gap-2 border-t border-slate-200 pt-4 text-xs text-slate-500">
                <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                <span>
                  Deterministic Guardrails Active · Zero PII Leakage · SOC2 &amp; HIPAA Compliant
                </span>
              </div>

            </div>

            {/* Right 5 cols: High-Craft Light Developer/Operator Telemetry Inspector */}
            <div className="lg:col-span-5 bg-slate-50/80 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              
              <div className="space-y-5">
                {/* Inspector Header */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-sky-700" aria-hidden="true" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      Live Telemetry Inspector
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-800">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {currentStep.httpStatus}
                  </span>
                </div>

                {/* API Request Metas */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-lg border border-slate-200 bg-white p-2.5">
                    <span className="block text-[10px] font-medium text-slate-400 uppercase">
                      Action Endpoint
                    </span>
                    <span className="mt-0.5 block truncate font-mono text-[11px] font-semibold text-slate-800">
                      {currentStep.endpoint}
                    </span>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-white p-2.5">
                    <span className="block text-[10px] font-medium text-slate-400 uppercase">
                      Decision Confidence
                    </span>
                    <span className="mt-0.5 block font-mono text-[11px] font-semibold text-emerald-700">
                      {currentStep.confidence}
                    </span>
                  </div>
                </div>

                {/* Light-Mode Code / Payload Viewer */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1 font-mono text-[11px]">
                      <FileCode className="h-3 w-3 text-sky-700" />
                      execution-trace.ts
                    </span>
                    <span className="font-mono text-[10px] text-slate-400">
                      {currentStep.latencyMs}ms TTFB
                    </span>
                  </div>
                  <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xs">
                    <div className="border-b border-slate-100 bg-slate-50/60 px-3 py-1.5 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-slate-300" />
                        <span className="h-2 w-2 rounded-full bg-slate-300" />
                        <span className="h-2 w-2 rounded-full bg-slate-300" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">TypeScript · Async</span>
                    </div>
                    <pre className="p-3.5 font-mono text-[11px] leading-relaxed text-slate-700 overflow-x-auto selection:bg-sky-100">
                      <code>{currentStep.codeSnippet}</code>
                    </pre>
                  </div>
                </div>

                {/* Micro Audit Events Timeline */}
                <div className="space-y-2">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Real-Time Micro Audit Events
                  </span>
                  <div className="space-y-1.5">
                    {currentStep.auditLogs.map((log, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between rounded-lg border border-slate-200/80 bg-white px-3 py-1.5 text-[11px] shadow-2xs"
                      >
                        <span className="truncate text-slate-700 font-medium">{log.event}</span>
                        <span className="shrink-0 font-mono text-[10px] text-slate-400 ml-2">
                          {log.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Progress Summary Footer */}
              <div className="border-t border-slate-200 pt-3 flex items-center justify-between text-xs text-slate-500">
                <span className="font-medium text-slate-700">
                  Step {activeStepIndex + 1} of {AGENTIC_STEPS.length}
                </span>
                <span className="font-mono text-[11px] text-sky-700 font-semibold">
                  {Math.round(progress)}% of step duration
                </span>
              </div>

            </div>

          </div>
        </div>

        {/* Bottom Dual CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="https://cxq360.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-700 px-7 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sky-800"
          >
            <span>Test Agentic Workflows in CXQ360.ai</span>
            <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
          </a>
          <Link
            href="/contact-us#quote"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-900 shadow-2xs transition-colors hover:bg-slate-50"
          >
            <span>Book an architecture walkthrough</span>
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </Link>
        </div>

      </div>
    </section>
  );
}
