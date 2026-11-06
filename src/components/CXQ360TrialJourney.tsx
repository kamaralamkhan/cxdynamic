"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  UserPlus, 
  LayoutDashboard, 
  Sparkles, 
  Sliders, 
  ShieldCheck, 
  ArrowRight, 
  ExternalLink,
  CheckCircle2,
  Lock
} from "lucide-react";

interface JourneyStep {
  step: string;
  title: string;
  badge: string;
  icon: typeof UserPlus;
  headline: string;
  description: string;
  highlights: string[];
}

const TRIAL_STEPS: JourneyStep[] = [
  {
    step: "01",
    title: "Register & Create Account",
    badge: "60-Second Setup",
    icon: UserPlus,
    headline: "Instant Sandbox Provisioning",
    description: "Create your dedicated organization workspace on https://cxq360.ai/ in under a minute using your corporate email. Zero credit card or hardware installation required.",
    highlights: ["No credit card required", "Instant cloud workspace", "Sample customer data preloaded"],
  },
  {
    step: "02",
    title: "Access Live CX Platform",
    badge: "Guided Tour",
    icon: LayoutDashboard,
    headline: "Immediate Access to Full Feature Suite",
    description: "Step into an interactive, guided trial version of the complete CXdynamIQ platform. Explore real-time supervisor wallboards, dialer pacing consoles, and telephony routing.",
    highlights: ["Browser-based WebRTC softphone", "Interactive routing simulator", "Real-time queue monitoring"],
  },
  {
    step: "03",
    title: "Experience AI Features",
    badge: "Voice + WhatsApp AI",
    icon: Sparkles,
    headline: "Test Autonomous Agents & Agent Copilot",
    description: "Trigger live AI Voicebot calls, test WhatsApp Business flows, evaluate in-call Agent Copilot guidance, and inspect 100% automated conversation QA scorecards.",
    highlights: ["Live Voicebot and WhatsApp testing", "Agent Copilot coach cards", "100% AI interaction scoring"],
  },
  {
    step: "04",
    title: "Flexible Trial Expansion",
    badge: "Custom Scale",
    icon: Sliders,
    headline: "Scale Seats, Channels & Integrations",
    description: "Expand your sandbox as needed. Add team members, invite supervisors, connect test SIP trunks, and test webhook synchronization with Salesforce, Zoho, or Zendesk.",
    highlights: ["Invite unlimited test reps", "Native CRM webhook sandbox", "Custom telephony trunk validation"],
  },
  {
    step: "05",
    title: "Commercial License",
    badge: "Production Ready",
    icon: ShieldCheck,
    headline: "Frictionless Production Deployment",
    description: "Seamlessly convert your trial setup into a full enterprise commercial deployment. Migrate all approved routing trees, prompts, and CRM connections with zero downtime or data loss.",
    highlights: ["Zero data loss transition", "Enterprise SLA & 99.99% uptime", "Dedicated VIP engineering support"],
  },
];

export default function CXQ360TrialJourney() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = TRIAL_STEPS[activeStepIndex];
  const StepIcon = currentStep.icon;

  return (
    <section id="trial-journey" className="py-20 lg:py-28 bg-white border-b border-slate-200 relative overflow-hidden">
      
      {/* Soft Top Glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-sky-50 via-sky-50/40 to-transparent rounded-full blur-3xl -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
            <span className="w-2 h-2 rounded-full bg-sky-600" />
            <span className="mono-label">ONBOARDING &amp; COMMERCIAL JOURNEY</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight font-display">
            The 5-Step Journey from{" "}
            <span className="text-sky-700">Instant Trial to Enterprise Production.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Test-drive the full power of CXdynamIQ inside our live sandbox at <strong className="text-slate-900 font-semibold">https://cxq360.ai/</strong> before scaling to commercial production.
          </p>
        </div>

        {/* 5-Step Interactive Tabs */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {TRIAL_STEPS.map((s, idx) => {
              const Icon = s.icon;
              const isCurrent = activeStepIndex === idx;
              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer relative ${
                    isCurrent
                      ? "bg-slate-50 border-sky-600 shadow-sm ring-1 ring-sky-600/30 -translate-y-0.5"
                      : "bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-sky-700">{s.step}</span>
                    <Icon className={`w-4 h-4 ${isCurrent ? "text-sky-700" : "text-slate-400"}`} />
                  </div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-900 truncate">
                    {s.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 truncate mt-0.5">
                    {s.badge}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Step Showcase Card */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 lg:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 text-sky-700 shadow-2xs">
                  <span>STEP {currentStep.step}</span>
                  <span>•</span>
                  <span>{currentStep.badge}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 tracking-tight">
                  {currentStep.headline}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {currentStep.description}
                </p>

                <div className="pt-2 space-y-2">
                  {currentStep.highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Visual Callout Box */}
              <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4 text-center">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center mx-auto border border-sky-100">
                  <StepIcon className="w-6 h-6" />
                </div>

                <div className="space-y-1">
                  <div className="text-sm font-bold text-slate-900">
                    Live Sandbox Environment
                  </div>
                  <p className="text-xs text-slate-500">
                    Hostinger staging connects directly to the live CXQ360.ai sandbox.
                  </p>
                </div>

                <div className="pt-2 flex flex-col gap-2.5">
                  <a
                    href="https://cxq360.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg text-xs sm:text-sm font-semibold bg-sky-700 hover:bg-sky-800 text-white shadow-sm transition-colors cursor-pointer"
                  >
                    <span>Launch Sandbox (CXQ360.ai)</span>
                    <ExternalLink className="w-4 h-4 shrink-0" />
                  </a>

                  <Link
                    href="/contact-us#quote"
                    className="inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-lg text-xs font-semibold bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 transition-colors"
                  >
                    <span>Talk to Solutions Engineer</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </Link>
                </div>

                <div className="pt-2 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                  <Lock className="w-3 h-3 text-slate-400" />
                  <span>SOC 2 Type II &amp; ISO 27001 Ready Architecture</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

