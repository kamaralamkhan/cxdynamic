"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  PhoneCall, 
  Clock, 
  TrendingUp, 
  MessageSquare, 
  Activity, 
  ShieldCheck, 
  Play, 
  Users, 
  Sparkles,
  Bot
} from "lucide-react";
import NetworkBackground from "@/components/NetworkBackground";
import ChannelConnectors from "@/components/hero/ChannelConnectors";

interface CalmHeroProps {
  onOpenDemo: () => void;
}

export default function CalmHero({ onOpenDemo }: CalmHeroProps) {
  const [activeTab, setActiveTab] = useState<"calls" | "ai" | "agents">("calls");
  const [isPaused, setIsPaused] = useState(false);

  // Live ticking metrics
  const [activeCalls, setActiveCalls] = useState(128);
  const [answerSpeed, setAnswerSpeed] = useState(4.2);
  const [fcrRate, setFcrRate] = useState(84.6);

  // Call 1 live call timer (seconds)
  const [callTimer, setCallTimer] = useState(134);

  // Cycle states for feed items
  const [callState, setCallState] = useState<"Connected" | "Wrapping" | "Resolved">("Connected");

  // Telemetry drift
  useEffect(() => {
    const interval = setInterval(() => {
      // Small realistic fluctuations
      setActiveCalls((prev) => {
        const delta = Math.floor(Math.random() * 3) - 1; // -1, 0, +1
        return Math.min(Math.max(prev + delta, 122), 134);
      });
      setAnswerSpeed((prev) => {
        const delta = (Math.random() * 0.2 - 0.1);
        return Number((Math.min(Math.max(prev + delta, 4.0), 4.5)).toFixed(1));
      });
      setFcrRate((prev) => {
        const delta = (Math.random() * 0.4 - 0.2);
        return Number((Math.min(Math.max(prev + delta, 84.1), 85.3)).toFixed(1));
      });
      setCallTimer((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // State transitions for Call 1
  useEffect(() => {
    const stateInterval = setInterval(() => {
      setCallState((prev) => {
        if (prev === "Connected") return "Wrapping";
        if (prev === "Wrapping") return "Resolved";
        return "Connected";
      });
    }, 7000);
    return () => clearInterval(stateInterval);
  }, []);

  // Auto-advance tabs every 6 seconds, pause on hover/focus
  useEffect(() => {
    if (isPaused) return;
    const tabInterval = setInterval(() => {
      setActiveTab((prev) => {
        if (prev === "calls") return "ai";
        if (prev === "ai") return "agents";
        return "calls";
      });
    }, 6000);
    return () => clearInterval(tabInterval);
  }, [isPaused]);

  // Format timer mm:ss
  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <section className="relative isolate overflow-x-clip pt-12 pb-20 lg:pt-16 lg:pb-24 bg-white border-b border-slate-200">
      {/* Background with subtle dot-grid & desktop spotlight */}
      <NetworkBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-cyan-700 text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Stress-Free Contact Center Solutions
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Ultrafast Implementation with{" "}
              <span className="text-[#069bd8]">VIP Support.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Deploy a Cloud Contact Center in a day and automate it in minutes. Equip your agents with blended inbound/outbound calling, intelligent IVR, CTI CRM integrations, and real-time speech analytics.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                href="/contact-us"
                className="btn-tactile btn-primary-emerald inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-bold text-slate-950 rounded-xl shadow-xs cursor-pointer"
              >
                <span>Try It Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="#products-bento"
                className="btn-tactile inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl border border-slate-200 transition-colors"
              >
                <span>Explore Products</span>
              </a>
            </div>
          </div>

          {/* Right Column: Anchored Channel Connectors & Living Operations Console */}
          <div className="lg:col-span-6 relative">
            <ChannelConnectors>
              {/* Faint, subtle cyan-50 radial glow behind dashboard */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-100/25 via-sky-50/25 to-transparent rounded-3xl blur-2xl -z-10" />

              <div
                className="calm-card p-5 sm:p-6 bg-white border border-slate-200 shadow-sm transition-all"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onFocus={() => setIsPaused(true)}
                onBlur={() => setIsPaused(false)}
              >
                {/* Header Bar */}
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-xs font-bold text-slate-800">CXDYNAMIQ Live Operations Console</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400 font-medium">Sample data</span>
                    <div className="flex items-center gap-1 text-xs font-mono text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                      <Clock className="w-3 h-3 text-[#069bd8]" />
                      <span>SLA 99.8%</span>
                    </div>
                  </div>
                </div>

              {/* Console Subtabs */}
              <div className="flex gap-1.5 my-3.5 text-xs font-semibold bg-slate-50 p-1 rounded-xl border border-slate-100">
                <button
                  onClick={() => setActiveTab("calls")}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    activeTab === "calls"
                      ? "bg-white text-slate-900 border border-slate-200 shadow-2xs"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  Live Inbound &amp; Outbound
                </button>
                <button
                  onClick={() => setActiveTab("ai")}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    activeTab === "ai"
                      ? "bg-white text-slate-900 border border-slate-200 shadow-2xs"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  AI Sentiment &amp; QA
                </button>
                <button
                  onClick={() => setActiveTab("agents")}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    activeTab === "agents"
                      ? "bg-white text-slate-900 border border-slate-200 shadow-2xs"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  Active Agents (48)
                </button>
              </div>

              {/* Live Ticking Metric Tiles */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Calls</div>
                  <div className="text-xl font-extrabold text-slate-900 mt-0.5 tabular-nums transition-all">
                    {activeCalls}
                  </div>
                  <div className="text-xs text-emerald-600 font-semibold flex items-center gap-0.5 mt-0.5">
                    <TrendingUp className="w-3 h-3" /> +14% vs avg
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Avg Answer Speed</div>
                  <div className="text-xl font-extrabold text-[#069bd8] mt-0.5 tabular-nums transition-all">
                    {answerSpeed}s
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">Queue: 2 callers</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">FCR Rate</div>
                  <div className="text-xl font-extrabold text-slate-900 mt-0.5 tabular-nums transition-all">
                    {fcrRate}%
                  </div>
                  <div className="text-xs text-emerald-600 font-semibold mt-0.5">Optimal SLA</div>
                </div>
              </div>

              {/* Dynamic Tab Body with 200ms crossfade transition */}
              <div className="min-h-[195px] flex flex-col justify-between">
                
                {/* TAB 1: Live Inbound & Outbound */}
                {activeTab === "calls" && (
                  <div className="space-y-2 text-xs animate-in fade-in slide-in-from-top-1 duration-200">
                    {/* Dynamic Row 1 */}
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between transition-all">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-sky-50 text-[#069bd8]">
                          <PhoneCall className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900">Inbound Support — Priority Routing</div>
                          <div className="text-xs text-slate-500">Caller: +91 98450 • Agent: Priya S. (CTI Screenpop)</div>
                        </div>
                      </div>
                      <span className={`text-xs font-mono px-2 py-0.5 rounded-full font-bold border transition-colors ${
                        callState === "Connected"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : callState === "Wrapping"
                          ? "bg-amber-50 text-amber-700 border-amber-200"
                          : "bg-sky-50 text-sky-700 border-sky-200"
                      }`}>
                        {callState === "Connected" ? `Connected (${formatTimer(callTimer)})` : callState}
                      </span>
                    </div>

                    {/* Row 2 */}
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600">
                          <MessageSquare className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900">WhatsApp Business Automated Flow</div>
                          <div className="text-xs text-slate-500">Order verification #ORD-8921 • Conversational AI</div>
                        </div>
                      </div>
                      <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 font-bold border border-sky-200">
                        Self-Resolved
                      </span>
                    </div>

                    {/* Row 3 */}
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-purple-50 text-purple-600">
                          <Bot className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900">Auto-Dialer Outbound Campaign</div>
                          <div className="text-xs text-slate-500">Sales Campaign #4 • Connected to Agent Vikram R.</div>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-slate-600 font-bold">
                        Pacing 3:1
                      </span>
                    </div>
                  </div>
                )}

                {/* TAB 2: AI Sentiment & QA */}
                {activeTab === "ai" && (
                  <div className="space-y-3 text-xs animate-in fade-in slide-in-from-top-1 duration-200">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                      <div className="flex items-center justify-between font-semibold text-slate-800">
                        <span className="flex items-center gap-1.5">
                          <Activity className="w-3.5 h-3.5 text-[#069bd8]" />
                          <span>Speech Acoustic Waveform &amp; Emotion</span>
                        </span>
                        <span className="text-emerald-600 font-bold font-mono">Positive (+0.88)</span>
                      </div>

                      {/* Live Animated Audio Waveform */}
                      <div className="h-8 flex items-center justify-center gap-1 bg-white p-1 rounded-lg border border-slate-100">
                        {[40, 70, 30, 85, 95, 60, 45, 90, 100, 50, 35, 80, 65, 40, 85, 60, 95, 75, 45, 80].map((h, i) => (
                          <span
                            key={i}
                            style={{ height: `${h}%`, animationDelay: `${i * 0.08}s` }}
                            className="w-1 bg-[#069bd8] rounded-full animate-wave-bar"
                          />
                        ))}
                      </div>

                      <div className="flex justify-between text-xs text-slate-500">
                        <span>Acoustic Stress: Low (0.08)</span>
                        <span>PII Auto-Masked: 100%</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-between text-xs">
                      <span className="font-medium text-emerald-800">
                        Automated QA Audit Score: <strong>98/100</strong>
                      </span>
                      <span className="text-xs font-bold text-emerald-700 font-mono">PASSED ✓</span>
                    </div>
                  </div>
                )}

                {/* TAB 3: Active Agents */}
                {activeTab === "agents" && (
                  <div className="space-y-2 text-xs animate-in fade-in slide-in-from-top-1 duration-200">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                          <span className="font-bold text-slate-800">Priya S.</span>
                        </div>
                        <span className="text-xs text-slate-500">Tier 1 Support</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                          <span className="font-bold text-slate-800">Vikram R.</span>
                        </div>
                        <span className="text-xs text-slate-500">Sales Closer</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                          <span className="font-bold text-slate-800">Ananya D.</span>
                        </div>
                        <span className="text-xs text-slate-500">Wrap-up (0:24)</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                          <span className="font-bold text-slate-800">Arjun K.</span>
                        </div>
                        <span className="text-xs text-slate-500">Available</span>
                      </div>
                    </div>

                    <div className="p-2 rounded-lg bg-sky-50 border border-sky-100 text-xs text-cyan-700 font-semibold flex items-center justify-between">
                      <span>44 Agents In Call • 4 Agents Available • 0 in Overflow</span>
                      <span className="font-mono">Load: 91%</span>
                    </div>
                  </div>
                )}

                {/* Bottom Console Status Bar */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 text-xs flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Native Zoho, Salesforce &amp; Zendesk CTI</span>
                  </span>

                  <button
                    onClick={onOpenDemo}
                    className="text-cyan-700 font-bold hover:text-cyan-800 hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Launch Interactive Demo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          </ChannelConnectors>
        </div>

        </div>
      </div>
    </section>
  );
}
