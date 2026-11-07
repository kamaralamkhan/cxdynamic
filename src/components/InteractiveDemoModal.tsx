"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { 
  X, 
  Play, 
  Pause, 
  RotateCcw, 
  ChevronRight, 
  ChevronLeft, 
  Activity, 
  ArrowRight
} from "lucide-react";

interface InteractiveDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const steps = [
  {
    step: 1,
    title: "Customer Inbound Call Initiated",
    badge: "Voice / PSTN Trunk",
    time: "00:01",
    desc: "Caller connects to CXDYNAMIQ carrier trunk with sub-second latency.",
    visual: {
      type: "incoming",
      status: "Ringing (0.8s latency)",
      caller: "Enterprise Client (Manila / Global)",
      channel: "SIP Inbound · Priority Routing",
    },
  },
  {
    step: 2,
    title: "Intelligent IVR & Auto-Attendant",
    badge: "24/7 Self-Service",
    time: "00:04",
    desc: "The caller hears: 'Welcome to CXDYNAMIQ. Press 1 for Sales, 2 for Technical VIP Support.' Caller selects '2'.",
    visual: {
      type: "ivr",
      selection: "Option 2: Technical VIP Support",
      logic: "Intent: Tech_Support_Priority (Confidence 99.4%)",
    },
  },
  {
    step: 3,
    title: "Intelligent ACD Routing Engine",
    badge: "Skills-Based Routing",
    time: "00:07",
    desc: "ACD checks live agent queue. Matches caller to Priya S. based on tier proficiency, language, and lowest idle time.",
    visual: {
      type: "acd",
      queue: "VIP Tech Support Queue",
      matchedAgent: "Priya S. (Senior Cloud Architect · Available)",
      waitScore: "0s Queue Wait Time",
    },
  },
  {
    step: 4,
    title: "Instant CRM Screen-Pop (CTI)",
    badge: "Zoho / Salesforce / Zendesk",
    time: "00:12",
    desc: "Before Priya says 'Hello', her browser screen pops the full customer profile, past support tickets, and open deals.",
    visual: {
      type: "crm",
      account: "Apex Global Enterprises · Tier 1 VIP",
      activeDeals: "50 Seats Cloud Contact Center Renewal",
      tickets: "0 Open Escalations · CSAT History 5/5",
    },
  },
  {
    step: 5,
    title: "100% Speech AI & Automated QA Score",
    badge: "Continuous Intelligence",
    time: "00:25",
    desc: "Call finishes. Audio is transcribed, PII is masked, sentiment is rated Positive (+0.92), and QA scorecard auto-saves to CRM.",
    visual: {
      type: "qa",
      score: "98 / 100 QA Score (Pass)",
      sentiment: "Positive Valence (+0.92)",
      acwStatus: "Zero-Click After Call Work Saved ✓",
    },
  },
];

export default function InteractiveDemoModal({ isOpen, onClose }: InteractiveDemoModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  // Auto-advance steps
  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
    }, 5500);
    return () => clearInterval(timer);
  }, [isOpen, isPlaying]);

  // Handle escape key and focus trap
  useEffect(() => {
    if (!isOpen) return;
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => modalRef.current?.querySelector<HTMLButtonElement>("button")?.focus());
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
      if (e.key === "ArrowLeft") setCurrentStep((prev) => Math.max(prev - 1, 0));
      if (e.key === "Tab" && modalRef.current) {
        const focusable = Array.from(modalRef.current.querySelectorAll<HTMLElement>("button, a[href], [tabindex]:not([tabindex='-1'])"));
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previouslyFocused.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const active = steps[currentStep];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 animate-in fade-in duration-150" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-title"
        aria-describedby="demo-description"
        className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl p-5 sm:p-8 space-y-5 sm:space-y-6 text-slate-900 max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700">
              <Activity className="w-3.5 h-3.5 text-sky-600" aria-hidden="true" />
              <span>Interactive workflow simulation</span>
            </div>
            <h3 id="demo-title" className="font-display font-extrabold text-xl text-slate-900 mt-0.5">
              See a call flow in 30 seconds
            </h3>
            <p id="demo-description" className="sr-only">An interactive five-step simulation of a customer support call.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* 5-Step Progress Indicators */}
        <div className="grid grid-cols-5 gap-2">
          {steps.map((st, i) => (
            <button
              type="button"
              key={i}
              onClick={() => {
                setCurrentStep(i);
                setIsPlaying(false);
              }}
              aria-label={`View step ${st.step}: ${st.title}`}
              aria-current={i === currentStep ? "step" : undefined}
              className="text-left group cursor-pointer focus:outline-none"
            >
              <div
                className={`h-1.5 rounded-full transition-colors duration-300 ${
                  i === currentStep
                    ? "bg-sky-600"
                    : i < currentStep
                    ? "bg-slate-300"
                    : "bg-slate-100"
                }`}
              />
              <span className="text-xs font-semibold text-slate-500 mt-1 block group-hover:text-slate-900 transition-colors">
                0{st.step}
              </span>
            </button>
          ))}
        </div>

        {/* Step Details Stage */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4" aria-live="polite">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-md bg-sky-50 text-sky-700 font-semibold text-xs border border-sky-100">
              Step {active.step}: {active.badge}
            </span>
            <span className="text-xs font-semibold text-slate-500 tabular-nums">{active.time} elapsed</span>
          </div>

          <h4 className="font-display font-bold text-lg text-slate-900">
            {active.title}
          </h4>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {active.desc}
          </p>

          {/* Dynamic Mockup UI Box per step */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2 text-xs">
            {active.visual.type === "incoming" && (
              <div className="space-y-1.5">
                <div className="flex justify-between font-semibold text-slate-700">
                  <span>Inbound PSTN Stream</span>
                  <span className="text-emerald-600 font-semibold tabular-nums">{active.visual.status}</span>
                </div>
                <div className="text-slate-500">Caller: {active.visual.caller}</div>
                <div className="text-[11px] text-sky-600 font-medium">{active.visual.channel}</div>
              </div>
            )}

            {active.visual.type === "ivr" && (
              <div className="space-y-1.5">
                <div className="flex justify-between font-semibold text-slate-700">
                  <span>Virtual IVR Receptionist</span>
                  <span className="text-sky-600 font-semibold">DTMF Tone Recognized</span>
                </div>
                <div className="p-2 rounded bg-slate-50 font-mono text-[11px] text-slate-800">
                  {active.visual.selection}
                </div>
                <div className="text-[11px] text-slate-500">{active.visual.logic}</div>
              </div>
            )}

            {active.visual.type === "acd" && (
              <div className="space-y-1.5">
                <div className="flex justify-between font-semibold text-slate-700">
                  <span>ACD Queue Distribution</span>
                  <span className="text-emerald-600 font-semibold">{active.visual.waitScore}</span>
                </div>
                <div className="text-slate-800 font-medium">Assigned Rep: {active.visual.matchedAgent}</div>
                <div className="text-[11px] text-slate-500">Routing Logic: Multi-Skill Matrix Algorithm</div>
              </div>
            )}

            {active.visual.type === "crm" && (
              <div className="space-y-1.5">
                <div className="flex justify-between font-semibold text-slate-700">
                  <span>CTI Screen-Pop Triggered</span>
                  <span className="text-sky-600 font-semibold">Instant Sync</span>
                </div>
                <div className="text-slate-800 font-medium">{active.visual.account}</div>
                <div className="text-[11px] text-slate-500">{active.visual.activeDeals}</div>
              </div>
            )}

            {active.visual.type === "qa" && (
              <div className="space-y-1.5">
                <div className="flex justify-between font-semibold text-slate-700">
                  <span>Speech Analytics &amp; QA Dossier</span>
                  <span className="text-emerald-600 font-semibold">{active.visual.score}</span>
                </div>
                <div className="text-slate-800 font-medium">Customer Sentiment: {active.visual.sentiment}</div>
                <div className="text-[11px] text-emerald-600 font-semibold">{active.visual.acwStatus}</div>
              </div>
            )}
          </div>
        </div>

        {/* Controls Footer */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" aria-hidden="true" /> : <Play className="w-3.5 h-3.5" aria-hidden="true" />}
              <span>{isPlaying ? "Pause" : "Play"}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setCurrentStep(0);
                setIsPlaying(true);
              }}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Replay</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={() => setCurrentStep((prev) => prev - 1)}
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1 cursor-pointer transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" aria-hidden="true" /> Back
              </button>
            )}

            {currentStep < steps.length - 1 ? (
              <button
                type="button"
                onClick={() => setCurrentStep((prev) => prev + 1)}
                className="px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 flex items-center gap-1 cursor-pointer transition-colors"
              >
                Next Step <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            ) : (
              <Link
                href="/contact-us#quote"
                onClick={onClose}
                className="px-5 py-2 rounded-lg text-xs font-semibold bg-sky-700 hover:bg-sky-800 text-white inline-flex items-center gap-1.5 shadow-sm transition-colors"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
