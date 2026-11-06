"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  ChevronRight,
  Cpu,
  ExternalLink,
  GraduationCap,
  Pause,
  Play,
  ShieldCheck,
  Workflow,
  Zap,
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
  signals: string[];
}

const AGENTIC_STEPS: WorkflowStep[] = [
  {
    step: "01",
    title: "UNDERSTAND",
    shortBadge: "Multilingual NLU",
    badge: "Multilingual & Acoustic Parsing",
    icon: Brain,
    color: "#38bdf8",
    summary: "Customer contacts support via WhatsApp or inbound Voice: ‘My shipment hasn’t arrived and I need to update my delivery address.’ Natural-language parsing detects multilingual intent, acoustic urgency, and sentiment in under 300ms.",
    actionDetails: "Parsed intent: SHIPMENT_ADDRESS_UPDATE. Customer authenticated via phone caller ID and OTP. Emotion score: -0.42 (frustrated), tagged for priority routing.",
    codeSnippet: `// 01. Autonomous semantic & intent parsing
const parsedIntent = await agenticEngine.understand({
  audioStream: customerCallStream,
  channel: "WHATSAPP_VOICE_INBOUND",
  detectEmotion: true,
  supportedLanguages: ["en", "es", "hi", "ar", "tl"]
});
// intent: UPDATE_DELIVERY_ADDRESS | confidence: 0.988`,
    metric: "280ms latency",
    signals: ["Intent classified", "Identity verified", "Priority route set"],
  },
  {
    step: "02",
    title: "REASON",
    shortBadge: "ERP Policy Check",
    badge: "ERP & Policy Evaluation",
    icon: Cpu,
    color: "#818cf8",
    summary: "Agentic AI queries your logistics ERP, Salesforce CRM, and order-fulfilment graph in real time to verify shipment status, courier transit cut-off rules, and address-validation policies.",
    actionDetails: "SAP/NetSuite confirms Order #CX-88492 is at the regional sorting hub. The address-change rule is allowed before 18:00 local time—no human approval is needed.",
    codeSnippet: `// 02. Policy & entitlement reasoning
const evaluation = await policyGraph.evaluate({
  orderId: "CX-88492",
  customerId: "cust_7721",
  action: "UPDATE_SHIPPING_DESTINATION",
  newAddress: "Suite 400, Ortigas Center, Pasig"
});
// decision: APPROVED | transit cutoff: 18:00`,
    metric: "100% compliant",
    signals: ["ERP record found", "Policy evaluated", "Change approved"],
  },
  {
    step: "03",
    title: "ACT",
    shortBadge: "API Tool Trigger",
    badge: "Autonomous Backend API Trigger",
    icon: Workflow,
    color: "#34d399",
    summary: "Unlike legacy chatbots that merely output static text, Agentic AI directly triggers authenticated backend mutations, ERP database writes, and courier dispatch webhooks in milliseconds.",
    actionDetails: "The logistics ERP receives the destination coordinates, a package re-routing tag is locked, and the courier dispatch window is rescheduled through an authenticated webhook.",
    codeSnippet: `// 03. Authenticated webhook & ERP mutation
const dispatchMutation = await logisticsERP.updateDelivery({
  orderId: "CX-88492",
  newCoordinates: { lat: 14.5869, lng: 121.0614 },
  courierSlot: "TOMORROW_0900_1200",
  authorizedBy: "CXdynamIQ_Agentic_Engine"
});
await salesforce.updateCase({ status: "AUTONOMOUSLY_RESOLVED" });`,
    metric: "Sub-second mutation",
    signals: ["Request signed", "ERP updated", "Courier notified"],
  },
  {
    step: "04",
    title: "RESOLVE",
    shortBadge: "Multichannel Sync",
    badge: "Omnichannel Resolution Sync",
    icon: CheckCircle2,
    color: "#38bdf8",
    summary: "Routine inquiries complete with zero human latency. For complex edge cases, the engine performs an instant warm handoff to a human specialist with the full context already compiled.",
    actionDetails: "The ticket closes with no hold time. The customer receives voice confirmation plus a branded WhatsApp notification with the updated delivery window and tracking link.",
    codeSnippet: `// 04. Multichannel resolution sync
await omnichannelBridge.dispatchConfirmation({
  recipient: customer.phone,
  channel: "WHATSAPP",
  message: "Your delivery address has been updated."
});
await customerRecord.closeCase("CX-88492");`,
    metric: "74.8% containment",
    signals: ["Case resolved", "Customer notified", "Context retained"],
  },
  {
    step: "05",
    title: "LEARN",
    shortBadge: "Auto-QA & RL",
    badge: "Reinforcement & Auto QA",
    icon: GraduationCap,
    color: "#c084fc",
    summary: "Every interaction turn is automatically ingested by Conversation Intelligence to refine domain prompt embeddings, update agent coaching telemetry, and eliminate recurring issues.",
    actionDetails: "The interaction is automatically graded: predicted CSAT 4.9/5 and script adherence 100%. Its resolution path is logged to the knowledge-base reinforcement loop.",
    codeSnippet: `// 05. Conversation intelligence & RL loop
await conversationQA.ingestTurn({
  interactionId: "tx_logistics_88492",
  scriptAdherence: 100,
  complianceScore: 1.0,
  predictedCSAT: 4.9,
  reinforceModel: true
});`,
    metric: "Continuous self-tuning",
    signals: ["Interaction graded", "Knowledge updated", "Model reinforced"],
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

  const handleStepKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number | null = null;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (index + 1) % AGENTIC_STEPS.length;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (index - 1 + AGENTIC_STEPS.length) % AGENTIC_STEPS.length;
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
  const isAutoplaying = isPlaying && isInView && pageIsVisible && !reduceMotion;
  const playbackLabel = reduceMotion ? "Autoplay disabled" : isPlaying ? "Pause sequence" : "Play sequence";

  return (
    <section ref={sectionRef} id="agentic-ai" className="relative overflow-hidden border-b border-slate-800 bg-[#02131e] py-16 text-white sm:py-20 lg:py-24 scroll-mt-20">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-[28rem] w-[55rem] -translate-x-1/2 bg-sky-400/10 blur-3xl" />

      <div className="mx-auto w-full max-w-7xl space-y-8 px-4 sm:space-y-10 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Beyond Static Chatbots: <span className="text-sky-300">True Agentic AI for Enterprise CX.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
            Legacy bots only answer canned FAQs. CXdynamIQ&apos;s Agentic AI reasons through business rules, triggers real-time backend APIs, and autonomously resolves customer requests end to end.
          </p>
        </header>

        <div className="overflow-hidden rounded-2xl border border-sky-900/70 bg-[#051928]">
          <div className="flex flex-col gap-4 border-b border-white/10 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300"><Cpu className="h-5 w-5" aria-hidden="true" /></div>
              <div>
                <p className="text-sm font-semibold text-white">Follow one request through the autonomous workflow</p>
                <p className="mt-0.5 text-xs text-slate-300">Select any phase or let the sequence demonstrate the handoffs.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 self-start sm:self-auto">
              <span className="hidden text-xs text-slate-300 sm:inline">{reduceMotion ? "Manual sequence" : isAutoplaying ? "Sequence running" : "Sequence paused"}</span>
              <button type="button" onClick={() => setIsPlaying((playing) => !playing)} aria-pressed={isPlaying && !reduceMotion} disabled={reduceMotion} className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-sky-400/50 bg-sky-400/10 px-3 text-xs font-semibold text-sky-100 transition-colors hover:bg-sky-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 disabled:cursor-not-allowed disabled:opacity-50">
                {isPlaying && !reduceMotion ? <Pause className="h-3.5 w-3.5" aria-hidden="true" /> : <Play className="h-3.5 w-3.5" aria-hidden="true" />}
                {playbackLabel}
              </button>
            </div>
          </div>

          <div className="px-4 py-4 sm:px-6 sm:py-5">
            <div className="mb-4 flex items-center justify-between gap-4 text-xs text-slate-300">
              <span className="font-mono">PHASE {currentStep.step} / {AGENTIC_STEPS.length.toString().padStart(2, "0")}</span>
              <span className="tabular-nums">{Math.round(progress)}% through current phase</span>
            </div>
            <div className="h-1 overflow-hidden rounded-full bg-white/10" aria-hidden="true"><div className="h-full rounded-full bg-sky-300 transition-[width] duration-100 ease-linear motion-reduce:transition-none" style={{ width: `${progress}%` }} /></div>

            <div role="tablist" aria-label="Agentic AI workflow phases" className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-5">
              {AGENTIC_STEPS.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeStepIndex === index;
                return (
                  <button key={step.step} id={`agentic-tab-${index}`} type="button" role="tab" aria-selected={isActive} aria-controls="agentic-workflow-panel" tabIndex={isActive ? 0 : -1} onFocus={handleTabFocus} onClick={() => { setIsPlaying(false); selectStep(index); }} onKeyDown={(event) => handleStepKeyDown(event, index)} className={`group relative min-h-24 overflow-hidden rounded-xl border p-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 ${isActive ? "border-sky-300 bg-sky-400/10" : "border-white/10 bg-slate-950/35 hover:border-sky-300/45 hover:bg-white/[0.04]"}`}>
                    <div className="flex items-center justify-between gap-2"><span className={`font-mono text-xs font-bold ${isActive ? "text-sky-200" : "text-slate-400"}`}>{step.step}</span><Icon className="h-4 w-4" style={{ color: step.color }} aria-hidden="true" /></div>
                    <span className="mt-3 block text-sm font-semibold tracking-wide text-white">{step.title}</span>
                    <span className="mt-1 block truncate text-[11px] text-slate-300">{step.shortBadge}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div id="agentic-workflow-panel" role="tabpanel" aria-labelledby={`agentic-tab-${activeStepIndex}`} className="grid lg:grid-cols-12">
            <div className="border-t border-white/10 p-5 sm:p-6 lg:col-span-7 lg:border-r lg:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ backgroundColor: `${currentStep.color}20`, color: currentStep.color }}><StepIcon className="h-5 w-5" aria-hidden="true" /></div>
                  <div><p className="font-mono text-[11px] font-semibold tracking-[0.14em] text-sky-200">{currentStep.badge}</p><h3 className="mt-1 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">{currentStep.title}</h3></div>
                </div>
                <span className="rounded-full border border-emerald-400/35 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">{currentStep.metric}</span>
              </div>
              <p className="mt-6 max-w-[68ch] text-sm leading-7 text-slate-200 sm:text-base">{currentStep.summary}</p>
              <div className="mt-7 border-y border-white/10 py-5"><div className="flex items-center gap-2 text-sm font-semibold text-sky-200"><Zap className="h-4 w-4" aria-hidden="true" />Live workflow outcome</div><p className="mt-2 max-w-[68ch] text-sm leading-7 text-slate-100">{currentStep.actionDetails}</p></div>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3" aria-label="Execution checks">
                {currentStep.signals.map((signal) => <span key={signal} className="inline-flex items-center gap-2 text-xs text-slate-200"><CheckCircle2 className="h-4 w-4 text-emerald-300" aria-hidden="true" />{signal}</span>)}
              </div>
              <div className="mt-7 flex items-center gap-2 border-t border-white/10 pt-5 text-xs text-slate-300"><ShieldCheck className="h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />SOC 2 Type II and HIPAA guardrails are enforced at every phase.</div>
            </div>

            <div className="border-t border-white/10 bg-[#010912] p-5 sm:p-6 lg:col-span-5 lg:border-t-0 lg:p-8">
              <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3"><div className="flex items-center gap-2" aria-hidden="true"><span className="h-2.5 w-2.5 rounded-full bg-red-400/90" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" /></div><span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold tracking-wide text-sky-200"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />AUTHENTICATED TRACE</span></div>
              <pre className="mt-5 max-h-[18rem] overflow-auto whitespace-pre-wrap font-mono text-[11px] leading-6 text-sky-200 sm:text-xs"><code>{currentStep.codeSnippet}</code></pre>
              <div className="mt-6 border-t border-white/10 pt-4"><p className="font-mono text-[10px] font-semibold tracking-[0.14em] text-slate-400">EXECUTION LOG</p><ol className="mt-3 space-y-3">{currentStep.signals.map((signal, index) => <li key={signal} className="flex items-center gap-3 text-xs text-slate-200"><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-sky-400/35 text-[10px] text-sky-200">{index + 1}</span><span>{signal}</span>{index < currentStep.signals.length - 1 && <ChevronRight className="ml-auto h-3.5 w-3.5 text-slate-500" aria-hidden="true" />}</li>)}</ol></div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3.5 text-center">
          <a href="https://cxq360.ai/" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex min-h-11 items-center gap-2 rounded-lg px-5 py-2.5 text-sm">Test Agentic Workflows in CXQ360.ai<ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" /></a>
          <Link href="/contact-us#quote" className="btn-inverse inline-flex min-h-11 items-center gap-2 rounded-lg px-5 py-2.5 text-sm">Book an architecture walkthrough<ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
