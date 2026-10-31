"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { 
  PhoneCall, 
  Phone, 
  Flame, 
  Bot, 
  Building2, 
  ArrowRight,
  Layers,
  Sparkles,
  Activity,
  CheckCircle2,
  RefreshCw
} from "lucide-react";

export default function ProductsBento() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Mini live animations state
  const [balancedToggled, setBalancedToggled] = useState(false);
  const [ivrStep, setIvrStep] = useState(0);
  const [leadCount, setLeadCount] = useState(384);
  const [hubSentiment, setHubSentiment] = useState("+0.88");
  const [activeIndustryIdx, setActiveIndustryIdx] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);

    const handleVisibility = () => {
      if (document.hidden) {
        setIsInView(false);
      } else if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setIsInView(rect.bottom > 0 && rect.top < window.innerHeight);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    // Check prefers-reduced-motion
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Call Centre badge toggle
    const balanceTimer = setInterval(() => {
      setBalancedToggled((prev) => !prev);
    }, 3000);

    // IVR flow stepper
    const ivrTimer = setInterval(() => {
      setIvrStep((prev) => (prev + 1) % 3);
    }, 2400);

    // Sales dialer counter
    const dialerTimer = setInterval(() => {
      setLeadCount((prev) => (prev >= 520 ? 384 : prev + 1));
    }, 800);

    // CX Hub sentiment toggle
    const sentimentTimer = setInterval(() => {
      setHubSentiment((prev) => (prev === "+0.88" ? "+0.94" : "+0.88"));
    }, 3500);

    // Industry loop
    const indTimer = setInterval(() => {
      setActiveIndustryIdx((prev) => (prev + 1) % 4);
    }, 2800);

    return () => {
      clearInterval(balanceTimer);
      clearInterval(ivrTimer);
      clearInterval(dialerTimer);
      clearInterval(sentimentTimer);
      clearInterval(indTimer);
    };
  }, [isInView]);

  return (
    <section ref={containerRef} id="products" className="py-24 bg-slate-50 border-b border-slate-200 scroll-mt-12">
      <div id="services" className="sr-only" aria-hidden="true" />
      <div id="products-bento" className="sr-only" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-cyan-700 text-xs font-semibold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-[#069bd8]" />
              <span>Platform Modules</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              A Complete Suite Built for High-Volume Communication
            </h2>
            <p className="text-base text-slate-600">
              Explore 15+ specialized products engineered to deploy in hours and integrate natively with your current workflows.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3 bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
            <div className="font-display font-extrabold text-2xl text-[#069bd8] tabular-nums">15+</div>
            <div className="text-xs text-slate-600 font-semibold leading-tight">
              Products &amp;<br />Solutions Live
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: FOCAL CARD -> Call Centre Solution (Inverted bg-slate-900, white text, cyan accents) */}
          <div className="md:col-span-7 rounded-2xl p-6 sm:p-8 bg-slate-900 text-white border border-slate-800 shadow-md flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-xl bg-cyan-950/80 text-cyan-400 border border-cyan-800/40">
                  <PhoneCall className="w-5 h-5" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-800/40">
                  Focal Platform Engine
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-2xl text-white">
                  Call Centre Solutions
                </h3>
                <p className="text-sm text-slate-300 mt-1.5 leading-relaxed">
                  Blended inbound and outbound call routing with automated agent assignment, real-time call recording, whisper coaching, and zero telephony hardware to maintain.
                </p>
              </div>

              {/* Mini Live Animated Component: Queue Bars Filling & Auto Balanced Toggle */}
              <div className="p-4 rounded-xl bg-slate-950/90 border border-white/10 space-y-2.5 text-xs">
                <div className="flex items-center justify-between text-slate-400 font-semibold pb-1.5 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-300">Routing Distribution Pool</span>
                    <span className="text-xs px-1.5 py-0.2 rounded bg-white/10 text-cyan-300 font-normal">Real-Time</span>
                  </div>
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded transition-all duration-300 ${
                    balancedToggled ? "bg-cyan-500/20 text-cyan-300" : "bg-emerald-500/20 text-emerald-300"
                  }`}>
                    {balancedToggled ? "Auto Balanced ✓" : "Queue Optimal"}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2.5 text-center pt-1">
                  <div className="bg-slate-900/80 p-2.5 rounded-lg border border-white/5 space-y-1">
                    <div className="text-xs text-slate-400 uppercase font-semibold">Inbound Queue</div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-400 transition-all duration-500 w-[65%]" />
                    </div>
                    <div className="text-xs font-bold text-white pt-0.5">Priority Paced</div>
                  </div>

                  <div className="bg-slate-900/80 p-2.5 rounded-lg border border-white/5 space-y-1">
                    <div className="text-xs text-slate-400 uppercase font-semibold">Outbound Pacing</div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-400 transition-all duration-500 w-[82%]" />
                    </div>
                    <div className="text-xs font-bold text-white pt-0.5">Campaign Active</div>
                  </div>

                  <div className="bg-slate-900/80 p-2.5 rounded-lg border border-white/5 space-y-1">
                    <div className="text-xs text-slate-400 uppercase font-semibold">Blended SLA</div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-400 transition-all duration-500 w-[95%]" />
                    </div>
                    <div className="text-xs font-bold text-cyan-300 pt-0.5">High SLA</div>
                  </div>
                </div>
              </div>

              {/* Sub-links with accessible contrast */}
              <div className="flex flex-wrap gap-2 pt-2">
                <Link href="/inbound-calling" className="text-xs font-semibold px-2.5 py-1.5 rounded-md bg-white/10 text-slate-200 hover:text-cyan-300 hover:bg-white/15 transition-colors">
                  Inbound Calling →
                </Link>
                <Link href="/outbound-calling" className="text-xs font-semibold px-2.5 py-1.5 rounded-md bg-white/10 text-slate-200 hover:text-cyan-300 hover:bg-white/15 transition-colors">
                  Outbound Calling →
                </Link>
                <Link href="/blended-call-centre" className="text-xs font-semibold px-2.5 py-1.5 rounded-md bg-white/10 text-slate-200 hover:text-cyan-300 hover:bg-white/15 transition-colors">
                  Blended Center →
                </Link>
                <Link href="/cti-integrations" className="text-xs font-semibold px-2.5 py-1.5 rounded-md bg-white/10 text-slate-200 hover:text-cyan-300 hover:bg-white/15 transition-colors">
                  CTI Screenpop →
                </Link>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
              <Link href="/inbound-calling" className="text-xs font-bold text-cyan-400 hover:text-cyan-300 hover:underline inline-flex items-center gap-1.5">
                Explore Call Center Solutions <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <span className="text-xs text-slate-400 font-mono">SIP Telephony</span>
            </div>
          </div>

          {/* Card 2: Business Phone System (Light bg-white, 5 cols) */}
          <div className="md:col-span-5 calm-card p-6 sm:p-8 bg-white border border-slate-200 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
                  <Phone className="w-5 h-5" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Virtual Office</span>
              </div>

              <div>
                <h3 className="font-display font-bold text-xl text-slate-900">
                  Business Phone System
                </h3>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  Cloud virtual receptionist and smart contact management to handle incoming inquiries professionally 24 hours a day.
                </p>
              </div>

              {/* Mini Live Animated Component: Sequential IVR Highlight */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <div className="font-semibold text-slate-700 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span>Interactive IVR Attendant Flow</span>
                    <span className="text-xs px-1.5 py-0.2 rounded bg-slate-200/60 text-slate-600 font-normal">Live Telemetry</span>
                  </div>
                  <span className="text-xs text-emerald-600 font-bold font-mono">Simulating</span>
                </div>
                <div className="space-y-1.5">
                  <div className={`p-1.5 rounded-md text-xs font-medium transition-all duration-300 ${
                    ivrStep === 0 ? "bg-white text-cyan-700 border border-[#069bd8] font-bold" : "bg-transparent text-slate-600"
                  }`}>
                    1. Greeting: "Welcome to CXDYNAMIQ"
                  </div>
                  <div className={`p-1.5 rounded-md text-xs font-medium transition-all duration-300 ${
                    ivrStep === 1 ? "bg-white text-cyan-700 border border-[#069bd8] font-bold" : "bg-transparent text-slate-600"
                  }`}>
                    2. Press 1 for Sales, Press 2 for VIP Support
                  </div>
                  <div className={`p-1.5 rounded-md text-xs font-medium transition-all duration-300 ${
                    ivrStep === 2 ? "bg-white text-emerald-700 border border-emerald-500 font-bold" : "bg-transparent text-slate-600"
                  }`}>
                    3. Auto-Forward to Assigned Agent Phone
                  </div>
                </div>
              </div>

              {/* Sub-links */}
              <div className="flex flex-wrap gap-2 pt-1">
                <Link href="/auto-attendant" className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 hover:text-cyan-700">
                  Auto Attendant →
                </Link>
                <Link href="/contact-manager" className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 hover:text-cyan-700">
                  Contact Manager →
                </Link>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 mt-4">
              <Link href="/auto-attendant" className="text-xs font-bold text-cyan-700 hover:underline inline-flex items-center gap-1">
                Explore Business Phone <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 3: Sales Dialer Solutions (Light bg-white, 5 cols) */}
          <div className="md:col-span-5 calm-card p-6 sm:p-8 bg-white border border-slate-200 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-xl bg-orange-50 text-orange-600">
                  <Flame className="w-5 h-5" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Sales Velocity</span>
              </div>

              <div>
                <h3 className="font-display font-bold text-xl text-slate-900">
                  Sales Dialer Solution
                </h3>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  Triple outbound talk time with automated dialing, 1-click CRM calls, and predictive contact pacing.
                </p>
              </div>

              {/* Mini Live Animated Component: Progress Bar Advancing */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                <div className="flex justify-between items-center text-slate-600 font-semibold">
                  <div className="flex items-center gap-2">
                    <span>Active Campaign Progress</span>
                    <span className="text-xs px-1.5 py-0.2 rounded bg-slate-200/60 text-slate-600 font-normal">Active Campaign</span>
                  </div>
                  <span className="text-orange-600 font-mono font-bold">Auto-Pacing</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-orange-500 h-full transition-all duration-300"
                    style={{ width: `${(leadCount / 520) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Batch #4 — Priority Leads</span>
                  <span className="font-mono font-bold text-slate-700 tabular-nums">{leadCount} / 520 dialed</span>
                </div>
              </div>

              {/* Sub-links */}
              <div className="flex flex-wrap gap-2 pt-1">
                <Link href="/auto-dialer" className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 hover:text-cyan-700">
                  Auto Dialer →
                </Link>
                <Link href="/click-to-call" className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 hover:text-cyan-700">
                  Click to Call →
                </Link>
                <Link href="/power-dialer" className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 hover:text-cyan-700">
                  Power Dialer →
                </Link>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 mt-4">
              <Link href="/auto-dialer" className="text-xs font-bold text-cyan-700 hover:underline inline-flex items-center gap-1">
                Explore Sales Dialers <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 4: CX Hub & CTI Integrations (Wide, 7 cols) */}
          <div className="md:col-span-7 calm-card p-6 sm:p-8 bg-white border border-slate-200 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-xl bg-purple-50 text-purple-600">
                  <Bot className="w-5 h-5" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Omnichannel &amp; AI</span>
              </div>

              <div>
                <h3 className="font-display font-bold text-2xl text-slate-900">
                  CX Hub &amp; CTI Integrations
                </h3>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  Route interactions across Voice and WhatsApp seamlessly. Deploy Conversational AI for intelligent self-service and analyze sentiment across 100% of interactions.
                </p>
              </div>

              {/* Mini Live Animated Component: Live Inbox Routing Lines */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">Omnichannel Telemetry</span>
                  <span className="px-1.5 py-0.2 rounded bg-slate-100 text-slate-600">Unified Stream</span>
                </div>
                <div className="grid grid-cols-3 gap-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-xs text-slate-500 uppercase font-semibold">Conversational AI</div>
                    <div className="text-xs font-bold text-slate-800 mt-1">Multi-Turn GenAI</div>
                    <div className="text-xs text-emerald-600 font-semibold mt-0.5">Automated Containment</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-xs text-slate-500 uppercase font-semibold">Speech Analytics</div>
                    <div className="text-xs font-bold text-slate-800 mt-1">Acoustic Valence</div>
                    <div className="text-xs text-cyan-700 font-bold font-mono mt-0.5 tabular-nums">
                      Score: {hubSentiment}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-xs text-slate-500 uppercase font-semibold">WhatsApp Cloud</div>
                    <div className="text-xs font-bold text-slate-800 mt-1">Meta Cloud API</div>
                    <div className="text-xs text-slate-600 mt-0.5">Interactive Messaging</div>
                  </div>
                </div>
              </div>

              {/* Sub-links */}
              <div className="flex flex-wrap gap-2 pt-1">
                <Link href="/omnichannel-routing" className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 hover:text-cyan-700">
                  Omnichannel Routing →
                </Link>
                <Link href="/conversational-ai" className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 hover:text-cyan-700">
                  Conversational AI →
                </Link>
                <Link href="/speech-analytics" className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 hover:text-cyan-700">
                  Speech Analytics →
                </Link>
                <Link href="/whatsapp-business" className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 hover:text-cyan-700">
                  WhatsApp Solution →
                </Link>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 mt-4">
              <Link href="/conversational-ai" className="text-xs font-bold text-cyan-700 hover:underline inline-flex items-center gap-1">
                Explore CX Hub &amp; AI Platform <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 5: Industry Solutions (Light bg-white, Wide 12 cols) with Gentle Loop */}
          <div className="md:col-span-12 calm-card p-6 sm:p-8 bg-white border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#069bd8]" />
                <h3 className="font-display font-bold text-xl text-slate-900">
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
                  className={`btn-tactile px-4 py-2.5 rounded-xl border text-xs font-bold transition-all duration-300 ${
                    activeIndustryIdx === i
                      ? "bg-sky-50 border-[#069bd8] text-cyan-800 shadow-2xs"
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {ind.name} →
                </Link>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
