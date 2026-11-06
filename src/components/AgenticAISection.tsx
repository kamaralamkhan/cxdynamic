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
  const playbackLabel = reduceMotion ? "Autoplay disabled" : isPlaying ? "Pause sequence" : "Play sequence";

  return (
    <section ref={sectionRef} id="agentic-ai" className="relative overflow-hidden border-b border-slate-800 bg-slate-950 py-16 text-white scroll-mt-20 sm:py-20 lg:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="text-xs font-semibold text-sky-400">Autonomous Agentic Architecture</span>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
              Beyond static chatbots. <span className="text-sky-400">AI that finishes the job.</span>
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-slate-300 lg:justify-self-end">
            True Agentic AI understands intent, reasons over policy, takes authenticated action, resolves across channels, and learns from every outcome.
          </p>
        </header>

        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-md">
          <div className="flex flex-col gap-4 border-b border-white/10 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <div className="flex items-center gap-3"><Cpu className="h-5 w-5 text-sky-300" aria-hidden="true" /><div><p className="text-sm font-semibold text-white">One customer request. Five autonomous decisions.</p><p className="mt-1 text-xs text-slate-400">Explore each phase or let the execution trace run.</p></div></div>
            <button type="button" onClick={() => setIsPlaying((playing) => !playing)} aria-pressed={isPlaying && !reduceMotion} disabled={reduceMotion} className="inline-flex min-h-10 items-center gap-2 self-start rounded-lg border border-sky-400/50 bg-sky-400/10 px-3 text-xs font-semibold text-sky-100 transition-colors hover:bg-sky-400/20 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 disabled:cursor-not-allowed disabled:opacity-50 sm:self-auto">{isPlaying && !reduceMotion ? <Pause className="h-3.5 w-3.5" aria-hidden="true" /> : <Play className="h-3.5 w-3.5" aria-hidden="true" />}{playbackLabel}</button>
          </div>

          <div className="grid lg:grid-cols-[15rem_1fr]">
            <nav className="border-b border-white/10 p-3 lg:border-b-0 lg:border-r lg:p-4" aria-label="Agentic AI workflow phases">
              <div role="tablist" className="flex gap-2 overflow-x-auto lg:block lg:space-y-2">
                {AGENTIC_STEPS.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = activeStepIndex === index;
                  return <button key={step.step} id={`agentic-tab-${index}`} type="button" role="tab" aria-selected={isActive} aria-controls="agentic-workflow-panel" tabIndex={isActive ? 0 : -1} onFocus={handleTabFocus} onClick={() => { setIsPlaying(false); selectStep(index); }} onKeyDown={(event) => handleStepKeyDown(event, index)} className={`flex min-w-[8.5rem] items-center gap-3 rounded-xl border px-3 py-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 lg:w-full ${isActive ? "border-sky-300 bg-sky-400/10" : "border-transparent hover:border-white/10 hover:bg-white/[0.04]"}`}><span className={`text-xs font-semibold ${isActive ? "text-sky-200" : "text-slate-500"}`}>{step.step}</span><Icon className="h-4 w-4 shrink-0" style={{ color: step.color }} aria-hidden="true" /><span className="min-w-0"><span className="block text-xs font-semibold text-white">{step.title}</span><span className="mt-0.5 block truncate text-[10px] text-slate-400">{step.shortBadge}</span></span></button>;
                })}
              </div>
              <div className="mt-5 hidden border-t border-white/10 pt-5 lg:block"><span className="text-[11px] font-medium text-slate-400">Workflow Progress</span><div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-sky-400" style={{ width: `${((activeStepIndex + progress / 100) / AGENTIC_STEPS.length) * 100}%` }} /></div><p className="mt-2 text-xs text-slate-400">{Math.round(progress)}% through {currentStep.title.toLowerCase()}</p></div>
            </nav>

            <div id="agentic-workflow-panel" role="tabpanel" aria-labelledby={`agentic-tab-${activeStepIndex}`} className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex flex-wrap items-start justify-between gap-4"><div className="flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ backgroundColor: `${currentStep.color}20`, color: currentStep.color }}><StepIcon className="h-5 w-5" aria-hidden="true" /></div><div><p className="text-xs font-semibold text-sky-300">{currentStep.badge}</p><h3 className="mt-1 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-white">{currentStep.title}</h3></div></div><span className="rounded-full border border-emerald-400/35 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">{currentStep.metric}</span></div>
                <p className="mt-7 max-w-[68ch] text-base leading-8 text-slate-200">{currentStep.summary}</p>
                <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.04] p-5"><div className="flex items-center gap-2 text-sm font-semibold text-sky-200"><Zap className="h-4 w-4" aria-hidden="true" />Live workflow outcome</div><p className="mt-3 text-sm leading-7 text-slate-100">{currentStep.actionDetails}</p></div>
                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">{currentStep.signals.map((signal) => <span key={signal} className="inline-flex items-center gap-2 text-xs text-slate-200"><CheckCircle2 className="h-4 w-4 text-emerald-300" aria-hidden="true" />{signal}</span>)}</div>
                <div className="mt-7 flex items-center gap-2 border-t border-white/10 pt-5 text-xs text-slate-400"><ShieldCheck className="h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />Guardrails and permissions stay active at every phase.</div>
              </div>

              <div className="border-t border-white/10 bg-slate-950 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10"><div className="flex items-center justify-between border-b border-white/10 pb-4"><span className="text-xs font-semibold text-sky-200">Execution Trace</span><span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />Authenticated</span></div><div className="mt-6 space-y-4"><div><p className="text-[11px] font-medium text-slate-400">Current Signal</p><p className="mt-2 text-sm leading-6 text-white">{currentStep.shortBadge} is active for this customer request.</p></div><div className="border-y border-white/10 py-4"><p className="text-[11px] font-medium text-slate-400">System Action</p><p className="mt-2 text-sm leading-6 text-slate-200">{currentStep.actionDetails}</p></div><details className="group"><summary className="flex cursor-pointer list-none items-center justify-between text-xs font-semibold text-sky-200"><span>View implementation trace</span><ChevronRight className="h-4 w-4 motion-safe:transition-transform motion-reduce:transition-none group-open:rotate-90" aria-hidden="true" /></summary><pre className="mt-4 max-h-56 overflow-auto whitespace-pre-wrap rounded-lg border border-white/10 bg-black/40 p-4 font-mono text-[11px] leading-6 text-sky-200"><code>{currentStep.codeSnippet}</code></pre></details></div><ol className="mt-8 space-y-3 border-t border-white/10 pt-5">{currentStep.signals.map((signal, index) => <li key={signal} className="flex items-center gap-3 text-xs text-slate-200"><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-sky-400/35 text-[10px] text-sky-200">{index + 1}</span>{signal}</li>)}</ol></div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3.5"><a href="https://cxq360.ai/" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex min-h-11 items-center gap-2 rounded-lg px-5 py-2.5 text-sm whitespace-nowrap">Test Agentic Workflows in CXQ360.ai<ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" /></a><Link href="/contact-us#quote" className="btn-inverse inline-flex min-h-11 items-center gap-2 rounded-lg px-5 py-2.5 text-sm whitespace-nowrap">Book an architecture walkthrough<ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" /></Link></div>
      </div>
    </section>
  );
}
