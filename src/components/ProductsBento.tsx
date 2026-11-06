"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  PhoneCall, 
  PhoneOutgoing, 
  Phone, 
  Shuffle, 
  Flame, 
  Bot, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Building2 
} from "lucide-react";

export default function ProductsBento() {
  const [balancedToggled, setBalancedToggled] = useState(false);
  const [ivrStep, setIvrStep] = useState(0);
  const [leadCount, setLeadCount] = useState(384);
  const [hubSentiment, setHubSentiment] = useState("+0.88");
  const [activeIndustryIdx, setActiveIndustryIdx] = useState(0);

  // Subtle interactive simulation loops (paused on reduced motion)
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const t1 = setInterval(() => {
      setBalancedToggled((prev) => !prev);
    }, 3800);

    const t2 = setInterval(() => {
      setIvrStep((prev) => (prev + 1) % 3);
    }, 2800);

    const t3 = setInterval(() => {
      setLeadCount((prev) => (prev >= 518 ? 384 : prev + 6));
    }, 2200);

    const sentiments = ["+0.88", "+0.92", "+0.85", "+0.94"];
    let sIdx = 0;
    const t4 = setInterval(() => {
      sIdx = (sIdx + 1) % sentiments.length;
      setHubSentiment(sentiments[sIdx]);
    }, 4500);

    const t5 = setInterval(() => {
      setActiveIndustryIdx((prev) => (prev + 1) % 4);
    }, 4000);

    return () => {
      clearInterval(t1);
      clearInterval(t2);
      clearInterval(t3);
      clearInterval(t4);
      clearInterval(t5);
    };
  }, []);

  return (
    <section id="products" className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div id="products-bento" className="sr-only" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
              A Complete Suite Built for High-Volume Communication
            </h2>
            <p className="text-base text-slate-600">
              Explore 15+ specialized products engineered to deploy in hours and integrate directly with your current workflows.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-2xs">
            <div className="text-2xl font-bold text-sky-700 tabular-nums">15+</div>
            <div className="text-xs text-slate-600 font-semibold leading-tight">
              Products and solutions live
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Call Center Solutions (Inverted bg-slate-900) */}
          <div className="md:col-span-7 rounded-2xl p-6 sm:p-8 bg-slate-900 text-white border border-slate-800 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-xl bg-sky-950/80 text-sky-400 border border-sky-800/40">
                  <PhoneCall className="w-5 h-5" />
                </span>
                <span className="text-xs font-semibold text-sky-300 bg-sky-950/60 px-2.5 py-0.5 rounded-full border border-sky-800/40">
                  Core Telephony Engine
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Call Center Solutions
                </h3>
                <p className="text-sm text-slate-300 mt-1.5 leading-relaxed">
                  Blended inbound and outbound call routing with automated agent assignment, real-time call recording, whisper coaching, and zero telephony hardware to maintain.
                </p>
              </div>

              {/* Mini Queue Bars */}
              <div className="p-4 rounded-xl bg-slate-950/90 border border-white/10 space-y-2.5 text-xs">
                <div className="flex items-center justify-between text-slate-400 font-semibold pb-1.5 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-300">Routing Distribution Pool</span>
                    <span className="text-xs px-1.5 py-0.5 rounded bg-white/10 text-sky-300 font-normal">Real-Time</span>
                  </div>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded transition-colors ${
                    balancedToggled ? "bg-sky-500/20 text-sky-300" : "bg-emerald-500/20 text-emerald-300"
                  }`}>
                    {balancedToggled ? "Auto Balanced" : "Queue Optimal"}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2.5 text-center pt-1">
                  <div className="bg-slate-900/80 p-2.5 rounded-lg border border-white/5 space-y-1">
                    <div className="text-xs text-slate-400 font-medium">Inbound Queue</div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-sky-400 w-[65%]" />
                    </div>
                    <div className="text-xs font-semibold text-white pt-0.5">Priority Paced</div>
                  </div>

                  <div className="bg-slate-900/80 p-2.5 rounded-lg border border-white/5 space-y-1">
                    <div className="text-xs text-slate-400 font-medium">Outbound Pacing</div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-400 w-[82%]" />
                    </div>
                    <div className="text-xs font-semibold text-white pt-0.5">Campaign Active</div>
                  </div>

                  <div className="bg-slate-900/80 p-2.5 rounded-lg border border-white/5 space-y-1">
                    <div className="text-xs text-slate-400 font-medium">Blended SLA</div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-sky-400 w-[95%]" />
                    </div>
                    <div className="text-xs font-semibold text-sky-300 pt-0.5">High SLA</div>
                  </div>
                </div>
              </div>

              {/* Sub-links */}
              <div className="flex flex-wrap gap-2 pt-2">
                <Link href="/inbound-calling" className="text-xs font-semibold px-2.5 py-1.5 rounded-md bg-white/10 text-slate-200 hover:text-sky-300 hover:bg-white/15 transition-colors inline-flex items-center gap-1.5">
                  <span>Inbound Calling</span>
                  <ArrowRight className="w-3 h-3 text-slate-400" aria-hidden="true" />
                </Link>
                <Link href="/outbound-calling" className="text-xs font-semibold px-2.5 py-1.5 rounded-md bg-white/10 text-slate-200 hover:text-sky-300 hover:bg-white/15 transition-colors inline-flex items-center gap-1.5">
                  <span>Outbound Calling</span>
                  <ArrowRight className="w-3 h-3 text-slate-400" aria-hidden="true" />
                </Link>
                <Link href="/blended-call-centre" className="text-xs font-semibold px-2.5 py-1.5 rounded-md bg-white/10 text-slate-200 hover:text-sky-300 hover:bg-white/15 transition-colors inline-flex items-center gap-1.5">
                  <span>Blended Center</span>
                  <ArrowRight className="w-3 h-3 text-slate-400" aria-hidden="true" />
                </Link>
                <Link href="/cti-integrations" className="text-xs font-semibold px-2.5 py-1.5 rounded-md bg-white/10 text-slate-200 hover:text-sky-300 hover:bg-white/15 transition-colors inline-flex items-center gap-1.5">
                  <span>CTI Screen-Pop</span>
                  <ArrowRight className="w-3 h-3 text-slate-400" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
              <Link href="/inbound-calling" className="text-xs font-semibold text-sky-400 hover:text-sky-300 inline-flex items-center gap-1.5">
                <span>Explore Call Center Solutions</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
              <span className="text-xs text-slate-400">Carrier SIP Telephony</span>
            </div>
          </div>

          {/* Card 2: Business Phone System (Light bg-white, 5 cols) */}
          <div className="md:col-span-5 p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-2xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
                  <Phone className="w-5 h-5" />
                </span>
                <span className="text-xs font-semibold text-slate-500">Virtual Office</span>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Business Phone System
                </h3>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  Cloud virtual receptionist and smart contact management to handle incoming inquiries professionally 24 hours a day.
                </p>
              </div>

              {/* Sequential IVR Highlight */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <div className="font-semibold text-slate-700 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span>Interactive IVR Attendant Flow</span>
                    <span className="text-xs px-1.5 py-0.5 rounded bg-slate-200/60 text-slate-600 font-normal">Live Telemetry</span>
                  </div>
                  <span className="text-xs text-emerald-600 font-semibold">Simulating</span>
                </div>
                <div className="space-y-1.5">
                  <div className={`p-2 rounded-md text-xs font-medium transition-colors ${
                    ivrStep === 0 ? "bg-white text-sky-700 border border-sky-500 font-semibold shadow-2xs" : "bg-transparent text-slate-600"
                  }`}>
                    1. Greeting: “Welcome to CXdynamIQ”
                  </div>
                  <div className={`p-2 rounded-md text-xs font-medium transition-colors ${
                    ivrStep === 1 ? "bg-white text-sky-700 border border-sky-500 font-semibold shadow-2xs" : "bg-transparent text-slate-600"
                  }`}>
                    2. Press 1 for Sales, Press 2 for VIP Support
                  </div>
                  <div className={`p-2 rounded-md text-xs font-medium transition-colors ${
                    ivrStep === 2 ? "bg-white text-emerald-700 border border-emerald-500 font-semibold shadow-2xs" : "bg-transparent text-slate-600"
                  }`}>
                    3. Auto-Forward to Assigned Agent Phone
                  </div>
                </div>
              </div>

              {/* Sub-links */}
              <div className="flex flex-wrap gap-2 pt-1">
                <Link href="/auto-attendant" className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 hover:text-sky-700 inline-flex items-center gap-1">
                  <span>Auto Attendant</span>
                  <ArrowRight className="w-3 h-3 text-slate-400" aria-hidden="true" />
                </Link>
                <Link href="/contact-manager" className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 hover:text-sky-700 inline-flex items-center gap-1">
                  <span>Contact Manager</span>
                  <ArrowRight className="w-3 h-3 text-slate-400" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 mt-4">
              <Link href="/auto-attendant" className="text-xs font-semibold text-sky-700 hover:text-sky-800 inline-flex items-center gap-1">
                <span>Explore Business Phone</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Card 3: Sales Dialer Solutions (Light bg-white, 5 cols) */}
          <div className="md:col-span-5 p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-2xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-xl bg-orange-50 text-orange-600">
                  <Flame className="w-5 h-5" />
                </span>
                <span className="text-xs font-semibold text-slate-500">Sales Velocity</span>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Sales Dialer Solution
                </h3>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  Triple outbound talk time with automated dialing, 1-click CRM calls, and predictive contact pacing.
                </p>
              </div>

              {/* Progress Bar */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                <div className="flex justify-between items-center text-slate-600 font-semibold">
                  <div className="flex items-center gap-2">
                    <span>Active Campaign Progress</span>
                    <span className="text-xs px-1.5 py-0.5 rounded bg-slate-200/60 text-slate-600 font-normal">Active Campaign</span>
                  </div>
                  <span className="text-orange-600 font-semibold">Auto-Pacing</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-orange-500 h-full"
                    style={{ width: `${(leadCount / 520) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Batch #4: Priority Leads</span>
                  <span className="font-semibold text-slate-700 tabular-nums">{leadCount} / 520 dialed</span>
                </div>
              </div>

              {/* Sub-links */}
              <div className="flex flex-wrap gap-2 pt-1">
                <Link href="/auto-dialer" className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 hover:text-sky-700 inline-flex items-center gap-1">
                  <span>Auto Dialer</span>
                  <ArrowRight className="w-3 h-3 text-slate-400" aria-hidden="true" />
                </Link>
                <Link href="/click-to-call" className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 hover:text-sky-700 inline-flex items-center gap-1">
                  <span>Click to Call</span>
                  <ArrowRight className="w-3 h-3 text-slate-400" aria-hidden="true" />
                </Link>
                <Link href="/power-dialer" className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 hover:text-sky-700 inline-flex items-center gap-1">
                  <span>Power Dialer</span>
                  <ArrowRight className="w-3 h-3 text-slate-400" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 mt-4">
              <Link href="/auto-dialer" className="text-xs font-semibold text-sky-700 hover:text-sky-800 inline-flex items-center gap-1">
                <span>Explore Sales Dialers</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Card 4: CX Hub & CTI Integrations (Wide, 7 cols) */}
          <div className="md:col-span-7 p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-2xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-xl bg-purple-50 text-purple-600">
                  <Bot className="w-5 h-5" />
                </span>
                <span className="text-xs font-semibold text-slate-500">Omnichannel &amp; AI</span>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  CX Hub &amp; CTI Integrations
                </h3>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  Route interactions across Voice and WhatsApp directly. Deploy Conversational AI for intelligent self-service and analyze sentiment across 100% of interactions.
                </p>
              </div>

              {/* Omnichannel Telemetry */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">Omnichannel Telemetry</span>
                  <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">Unified Stream</span>
                </div>
                <div className="grid grid-cols-3 gap-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-xs text-slate-500 font-medium">Conversational AI</div>
                    <div className="text-xs font-semibold text-slate-800 mt-1">Multi-Turn GenAI</div>
                    <div className="text-xs text-emerald-600 font-medium mt-0.5">Automated Containment</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-xs text-slate-500 font-medium">Speech Analytics</div>
                    <div className="text-xs font-semibold text-slate-800 mt-1">Acoustic Valence</div>
                    <div className="text-xs text-sky-700 font-semibold mt-0.5 tabular-nums">
                      Score: {hubSentiment}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-xs text-slate-500 font-medium">WhatsApp Cloud</div>
                    <div className="text-xs font-semibold text-slate-800 mt-1">Meta Cloud API</div>
                    <div className="text-xs text-slate-600 mt-0.5">Interactive Messaging</div>
                  </div>
                </div>
              </div>

              {/* Sub-links */}
              <div className="flex flex-wrap gap-2 pt-1">
                <Link href="/omnichannel-routing" className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 hover:text-sky-700 inline-flex items-center gap-1">
                  <span>Omnichannel Routing</span>
                  <ArrowRight className="w-3 h-3 text-slate-400" aria-hidden="true" />
                </Link>
                <Link href="/conversational-ai" className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 hover:text-sky-700 inline-flex items-center gap-1">
                  <span>Conversational AI</span>
                  <ArrowRight className="w-3 h-3 text-slate-400" aria-hidden="true" />
                </Link>
                <Link href="/speech-analytics" className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 hover:text-sky-700 inline-flex items-center gap-1">
                  <span>Speech Analytics</span>
                  <ArrowRight className="w-3 h-3 text-slate-400" aria-hidden="true" />
                </Link>
                <Link href="/whatsapp-business" className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 hover:text-sky-700 inline-flex items-center gap-1">
                  <span>WhatsApp Solution</span>
                  <ArrowRight className="w-3 h-3 text-slate-400" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 mt-4">
              <Link href="/conversational-ai" className="text-xs font-semibold text-sky-700 hover:text-sky-800 inline-flex items-center gap-1">
                <span>Explore CX Hub &amp; AI Platform</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Card 5: Industry Solutions (Wide 12 cols) */}
          <div className="md:col-span-12 p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-sky-600" />
                <h3 className="text-xl font-semibold text-slate-900">
                  Tailored Industry Solutions
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pre-configured compliance, routing templates, and workflows tailored for Enterprise, BPO Outsourcing, Higher Education, and Growing Small Businesses.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                { name: "Enterprises", path: "/enterprise" },
                { name: "BPO Providers", path: "/bpo" },
                { name: "Education & Admissions", path: "/education" },
                { name: "Small Businesses", path: "/small-business" },
              ].map((ind, i) => (
                <Link
                  key={i}
                  href={ind.path}
                  className={`px-4 py-2.5 rounded-xl border text-xs font-semibold transition-colors inline-flex items-center gap-1.5 ${
                    activeIndustryIdx === i
                      ? "bg-sky-50 border-sky-600 text-sky-800 shadow-2xs"
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <span>{ind.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
