"use client";

import { useState } from "react";
import { 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  TrendingUp, 
  UserCheck, 
  Sparkles, 
  BarChart3, 
  FileCheck2, 
  MessageSquare,
  Award
} from "lucide-react";

interface AuditMetric {
  title: string;
  legacy: string;
  cxdynamiq: string;
  badge: string;
}

const AUDIT_METRICS: AuditMetric[] = [
  {
    title: "Conversation Audit Coverage",
    legacy: "1% – 2% random sample",
    cxdynamiq: "100% of all interactions",
    badge: "50x Audit Scope",
  },
  {
    title: "Compliance Risk Detection",
    legacy: "Days or weeks later (post-call)",
    cxdynamiq: "Real-time instant alert (<1s)",
    badge: "Zero Regulatory Fines",
  },
  {
    title: "Scoring Objectivity",
    legacy: "Subjective human evaluator bias",
    cxdynamiq: "Standardized AI rubric",
    badge: "100% Consistent",
  },
  {
    title: "QA Team Cost & Time",
    legacy: "15 mins per audited call",
    cxdynamiq: "0.2s automated scoring",
    badge: "85% Cost Reduction",
  },
];

export default function AIQASection() {
  const [activeCallSample, setActiveCallSample] = useState(0);

  const sampleCalls = [
    {
      id: "CALL-88421",
      agent: "Sarah Jenkins",
      customer: "Mark Peterson",
      score: 96,
      sentiment: "+0.92 Positive",
      scriptAdherence: "98.5%",
      disclosuresPassed: true,
      notes: "Mandatory regulatory disclosure read verbatim. Empathy demonstrated during tier explanation. Zero hold time.",
      tags: ["HIPAA Verified", "Script Adherent", "High Empathy"],
    },
    {
      id: "CALL-88422",
      agent: "Liam Cooper",
      customer: "Elena Rostova",
      score: 88,
      sentiment: "+0.74 Neutral-Positive",
      scriptAdherence: "92.0%",
      disclosuresPassed: true,
      notes: "Slight hesitation during cancellation fee policy explanation. AI Copilot surfaced rebuttal card, recovering sentiment.",
      tags: ["Policy Recovered", "AI Copilot Used"],
    },
  ];

  const currentCall = sampleCalls[activeCallSample];

  return (
    <section id="ai-qa" className="py-20 lg:py-28 bg-[#f7f6f0] border-b border-slate-200/90 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs text-xs font-semibold text-[#012635]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#008f6d]" />
            <span className="mono-label">100% CONVERSATION INTELLIGENCE</span>
          </div>

          <h2 className="heading-fluid-section font-display font-extrabold text-[#002620] tracking-tight">
            Ditch the 2% Sample Audit.{" "}
            <span className="text-sky-700">Inspect 100% of Conversations.</span>
          </h2>

          <p className="text-base text-[#012635] leading-relaxed font-normal">
            Legacy contact centers manually grade 2 out of 100 calls and miss 98% of compliance breaches. 
            CXdynamIQ's Conversation Intelligence audits every voice, chat, and WhatsApp interaction automatically.
          </p>
        </div>

        {/* Legacy vs CXdynamIQ Comparison Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {AUDIT_METRICS.map((m, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                {m.title}
              </span>
              <div className="space-y-1.5 pt-1">
                <div className="text-xs text-red-600 line-through font-medium">
                  {m.legacy}
                </div>
                <div className="text-base font-bold text-[#012635]">
                  {m.cxdynamiq}
                </div>
              </div>
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-semibold">
                {m.badge}
              </div>
            </div>
          ))}
        </div>

        {/* Live Conversation Intelligence Inspection Console */}
        <div className="rounded-3xl bg-[#012635] text-white p-6 sm:p-8 lg:p-10 border border-slate-800 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 text-xs font-semibold mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span className="mono-label">LIVE SUPERVISOR AUDIT CONSOLE</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                Automated Scorecard &amp; Script Adherence Telemetry
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveCallSample(0)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeCallSample === 0 ? "bg-cyan-500 text-slate-950 font-bold" : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                Sample 1 (High Score)
              </button>
              <button
                onClick={() => setActiveCallSample(1)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeCallSample === 1 ? "bg-cyan-500 text-slate-950 font-bold" : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                Sample 2 (Assisted)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Column 1: Overall QA Score */}
            <div className="bg-slate-950/80 rounded-2xl border border-white/10 p-6 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs text-slate-400 uppercase font-semibold">Interaction Reference</span>
                <div className="text-lg font-mono font-bold text-white mt-1">{currentCall.id}</div>
                <div className="text-xs text-slate-400 mt-0.5">Agent: {currentCall.agent}</div>
              </div>

              <div className="text-center py-4 bg-slate-900 rounded-xl border border-white/5 space-y-1">
                <div className="text-4xl sm:text-5xl font-mono font-extrabold text-cyan-400">
                  {currentCall.score}
                  <span className="text-lg text-slate-400 font-normal">/100</span>
                </div>
                <div className="text-xs font-semibold text-emerald-400">Automated Grade: PASS (A+)</div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Sentiment Trajectory</span>
                  <span className="text-cyan-300 font-bold">{currentCall.sentiment}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Script Adherence</span>
                  <span className="text-emerald-400 font-bold">{currentCall.scriptAdherence}</span>
                </div>
              </div>
            </div>

            {/* Column 2: Mandatory Disclosures & Compliance Flags */}
            <div className="bg-slate-950/80 rounded-2xl border border-white/10 p-6 space-y-4">
              <span className="text-xs text-slate-400 uppercase font-semibold flex items-center gap-1.5">
                <FileCheck2 className="w-4 h-4 text-cyan-400" />
                Compliance &amp; Script Checklist
              </span>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/40 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Call Recording Disclosure</div>
                    <div className="text-slate-300 text-[11px] mt-0.5">Spoken within first 5 seconds. Verbatim match.</div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/40 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Security &amp; OTP Verification</div>
                    <div className="text-slate-300 text-[11px] mt-0.5">Two-factor identity confirmed before account access.</div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/40 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Cancellation Terms Disclosure</div>
                    <div className="text-slate-300 text-[11px] mt-0.5">Statutory refund window explicitly stated.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: AI Coaching & Next-Step Guidance */}
            <div className="bg-slate-950/80 rounded-2xl border border-white/10 p-6 space-y-4 flex flex-col justify-between">
              <div>
                <span className="text-xs text-slate-400 uppercase font-semibold flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-purple-400" />
                  Automated Coaching Insights
                </span>

                <p className="text-xs text-slate-300 leading-relaxed mt-3">
                  {currentCall.notes}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {currentCall.tags.map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded-md bg-white/10 text-cyan-300 text-[11px] font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-800/40 text-[11px] text-purple-200">
                <span className="font-bold text-purple-300 block mb-0.5">Supervisor Action:</span>
                No manual calibration needed. Transcript synced to Salesforce CRM with automated QA audit tag.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

