"use client";

import { PhoneIncoming, GitFork, Sparkles, BarChart3 } from "lucide-react";

export default function StitchCallFlowSection() {
  const steps = [
    {
      num: "01",
      title: "1. Receive",
      desc: "High-availability SIP lines capture the call with sub-15ms carrier interconnects. Multi-language interactive voice response (IVR) greets the customer.",
      icon: PhoneIncoming,
      accent: "text-sky-700 bg-sky-50",
    },
    {
      num: "02",
      title: "2. Route",
      desc: "Intelligent ACD evaluates caller history, agent skill levels, and queue wait times to deliver the interaction to the optimal specialist in milliseconds.",
      icon: GitFork,
      accent: "text-indigo-700 bg-indigo-50",
    },
    {
      num: "03",
      title: "3. Assist",
      desc: "The agent softphone triggers instant CRM screen-pops, dynamic knowledge prompts, and live real-time AI transcription for effortless resolution.",
      icon: Sparkles,
      accent: "text-sky-700 bg-sky-50",
    },
    {
      num: "04",
      title: "4. Review",
      desc: "Stereo audio recordings, AI conversation summaries, and sentiment scores automatically attach to your CRM contact timeline for QA reviews.",
      icon: BarChart3,
      accent: "text-emerald-700 bg-emerald-50",
    },
  ];

  return (
    <section className="w-full py-20 lg:py-28 max-w-7xl mx-auto px-6 lg:px-12 relative overflow-hidden bg-white">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-semibold text-sky-700 font-headline">
          End-to-End Orchestration
        </span>
        <h2 className="font-headline font-semibold text-3xl sm:text-4xl text-slate-900 mt-2 tracking-tight">
          How a call moves through <span className="text-sky-700">CXDYNAMIQ</span>
        </h2>
        <p className="text-base text-slate-600 mt-2">
          A seamless 4-step loop that turns inbound chaos into measurable, recorded intelligence.
        </p>
      </div>

      {/* Progress Track (Desktop) */}
      <div className="hidden lg:block relative mb-8 h-1.5 w-full max-w-5xl mx-auto bg-slate-100 rounded-full overflow-hidden" aria-hidden="true">
        <div className="w-full h-full bg-gradient-to-r from-sky-400 via-sky-600 to-emerald-500 rounded-full opacity-60" />
      </div>

      {/* 4 Step Loop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.num}
              className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200/90 hover:shadow-md hover:border-sky-500/50 transition-all duration-200 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${step.accent}`}>
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400">{step.num}</span>
                </div>
                <h3 className="font-headline font-semibold text-lg text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

