"use client";

import { useState } from "react";
import { 
  Cpu, 
  Brain, 
  Workflow, 
  CheckCircle, 
  GraduationCap, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Activity, 
  ShieldCheck,
  Code2,
  Database
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
    badge: "Semantic & Acoustic Parsing",
    icon: Brain,
    color: "#069bd8",
    summary: "Deep natural language parsing detects multilingual intents, emotion shifts, and acoustic stress in <350ms across 30+ languages.",
    actionDetails: "Extracts customer intent: 'Cancel subscription & refund last charge'. Analyzes caller sentiment (-0.64 frustrated) and tags urgency priority.",
    codeSnippet: `// 01. Semantic & Intent Parsing
const parsedIntent = await agenticEngine.understand({
  audioStream: customerInput,
  detectEmotion: true,
  supportedLanguages: ["en", "es", "hi", "ar", "tl"]
});
// Result: { intent: "REFUND_REQUEST", confidence: 0.982, urgency: "HIGH" }`,
    metric: "320ms Parsing Latency",
  },
  {
    step: "02",
    title: "REASON",
    badge: "Context & Policy Evaluation",
    icon: Cpu,
    color: "#6366f1",
    summary: "The reasoning model queries your CRM, ERP, and internal knowledge graph in milliseconds to check customer entitlement and refund rules.",
    actionDetails: "Checks Salesforce customer tier (Gold Member), Stripe billing history (eligible for full refund within 30 days), and policy compliance.",
    codeSnippet: `// 02. Policy & Entitlement Reasoning
const evaluation = await policyGraph.evaluate({
  customerId: "cust_gold_882",
  policy: "AUTOMATIC_REFUND_30D",
  orderAmount: 189.00
});
// Decision: APPROVED (Autonomous Execution Permitted)`,
    metric: "100% Policy Compliant",
  },
  {
    step: "03",
    title: "ACT",
    badge: "Autonomous Tool & API Trigger",
    icon: Workflow,
    color: "#008f6d",
    summary: "Unlike static chatbots that only output text, Agentic AI directly triggers authenticated backend tools, database mutations, and webhooks.",
    actionDetails: "Executes Stripe refund API ($189.00), updates subscription status in Salesforce CRM, and sends instant WhatsApp confirmation with receipt PDF.",
    codeSnippet: `// 03. Authenticated Webhook & API Call
const tx = await stripeConnector.refund({
  chargeId: "ch_3N884x",
  amount: 18900,
  reason: "customer_requested"
});
await salesforce.updateCase({ status: "RESOLVED", resolutionCode: "AI_AUTO" });`,
    metric: "Sub-Second API Mutation",
  },
  {
    step: "04",
    title: "RESOLVE",
    badge: "Autonomous or Warm Handoff",
    icon: CheckCircle,
    color: "#069bd8",
    summary: "72%+ of routine inquiries complete autonomously. For complex edge-cases, the engine triggers a warm handoff with a pre-compiled summary.",
    actionDetails: "Ticket closed with zero human delay. Customer receives voice confirmation and a branded WhatsApp notification with transaction receipt.",
    codeSnippet: `// 04. Multi-Channel Resolution Sync
await omnichannelBridge.dispatchConfirmation({
  recipient: customer.phone,
  channel: "WHATSAPP",
  message: "Your refund of $189.00 has been processed. Reference: #RF-9941."
});`,
    metric: "74.8% Autonomous Containment",
  },
  {
    step: "05",
    title: "LEARN",
    badge: "Reinforcement & Auto QA",
    icon: GraduationCap,
    color: "#8b5cf6",
    summary: "Every turn is fed into our 100% automated Conversation Intelligence engine to refine prompt embeddings and update coaching telemetry.",
    actionDetails: "Auto-scores conversation (CSAT predicted: 4.9/5). Flags high-performing resolution pattern for knowledge-base reinforcement learning.",
    codeSnippet: `// 05. Conversation Intelligence & RL Loop
await conversationQA.ingestTurn({
  interactionId: "tx_88319",
  scriptAdherence: 100,
  complianceScore: 1.0,
  reinforceModel: true
});`,
    metric: "Continuous Self-Tuning",
  },
];

export default function AgenticAISection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = AGENTIC_STEPS[activeStepIndex];
  const StepIcon = currentStep.icon;

  return (
    <section id="agentic-ai" className="py-20 lg:py-28 bg-[#012635] text-white relative overflow-hidden border-b border-slate-800">
      {/* Decorative Glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-cyan-500/10 via-sky-500/5 to-transparent blur-3xl -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>PDF Brief Page 7 · Enterprise Differentiator</span>
          </div>

          <h2 className="heading-fluid-section font-serif-heading text-white tracking-tight font-bold">
            Beyond Static Chatbots:{" "}
            <span className="italic font-normal text-cyan-400">True Agentic AI for Enterprise CX.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Legacy bots only answer FAQs. CXdynamIQ's Agentic AI reasons through business rules, 
            triggers real-time backend APIs, and autonomously resolves customer requests from end to end.
          </p>
        </div>

        {/* 5-Step Stepper Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {AGENTIC_STEPS.map((s, idx) => {
            const Icon = s.icon;
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  isActive 
                    ? "bg-slate-800/95 border-cyan-400 shadow-lg ring-1 ring-cyan-400/50 translate-y-[-2px]" 
                    : "bg-slate-900/60 border-white/10 hover:bg-slate-800/60 hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-cyan-400">{s.step}</span>
                  <div 
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${s.color}20`, color: s.color }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="text-sm font-bold text-white tracking-wide">{s.title}</div>
                <div className="text-[11px] text-slate-400 mt-0.5 truncate">{s.badge}</div>
              </button>
            );
          })}
        </div>

        {/* Interactive Step Console */}
        <div className="bg-slate-950 rounded-2xl border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-center">
            
            {/* Left: Step Details & Business Value */}
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/80 border border-cyan-800/50 text-cyan-300">
                <span>Phase {currentStep.step} of 05</span>
                <span>•</span>
                <span>{currentStep.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-serif-heading text-white">
                {currentStep.step}. {currentStep.title}: How it Works
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {currentStep.summary}
              </p>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-white/10 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  Live Execution Scenario
                </div>
                <div className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {currentStep.actionDetails}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-white/10">
                <span className="text-xs text-slate-400">Target Telemetry SLA</span>
                <span className="text-sm font-mono font-bold text-emerald-400 bg-emerald-950/50 px-3 py-1 rounded-md border border-emerald-800/50">
                  {currentStep.metric}
                </span>
              </div>
            </div>

            {/* Right: Real-Time Code & Webhook Payload Execution */}
            <div className="rounded-xl bg-[#030914] border border-cyan-950/80 p-5 shadow-inner space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-400 border-b border-white/10 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="text-[11px] text-slate-300 ml-1">agentic_orchestrator.ts</span>
                </div>
                <span className="text-[10px] text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                  LIVE TELEMETRY
                </span>
              </div>

              <pre className="text-cyan-300/90 overflow-x-auto text-[11px] leading-relaxed py-2">
                <code>{currentStep.codeSnippet}</code>
              </pre>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  SOC2 &amp; HIPAA Guardrails Enforced
                </span>
                <span className="text-slate-500">Latency: 418ms</span>
              </div>
            </div>

          </div>
        </div>

        {/* Micro Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://cxq360.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-[#008f6d] hover:bg-[#007a5d] text-white shadow-md transition-all"
          >
            <span>Test-Drive Agentic Workflows on CXQ360.ai Sandbox</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
