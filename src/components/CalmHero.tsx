"use client";

import { useState, useEffect } from "react";
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
  Bot, 
  Zap, 
  CheckCircle2, 
  PhoneForwarded, 
  Volume2, 
  Send, 
  Building 
} from "lucide-react";
import NetworkBackground from "@/components/NetworkBackground";
import { 
  ZendeskLogo, 
  SalesforceLogo, 
  ZohoLogo, 
  FreshdeskLogo, 
  HubSpotLogo, 
  WhatsAppLogo 
} from "@/components/IntegrationLogos";

interface CalmHeroProps {
  onOpenDemo: () => void;
}

const ROTATING_PHRASES = [
  "qualifies leads and resolves issues 24/7.",
  "syncs natively with your CRM & ERP.",
  "empowers agents with real-time AI assist.",
  "deploys in 1 day with zero PBX hardware."
];

export default function CalmHero({ onOpenDemo }: CalmHeroProps) {
  const [activeTab, setActiveTab] = useState<"cti" | "whatsapp" | "dialer" | "analytics">("cti");
  const [isPaused, setIsPaused] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [callTimer, setCallTimer] = useState(165); // 02:45

  // Dynamic rotating text animation (Aircall inspired)
  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % ROTATING_PHRASES.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  // Live ticking call timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCallTimer((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Auto-cycle workspace tabs every 8s if user doesn't hover/interact
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        if (prev === "cti") return "whatsapp";
        if (prev === "whatsapp") return "dialer";
        if (prev === "dialer") return "analytics";
        return "cti";
      });
    }, 7500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <section id="home" className="relative isolate overflow-x-clip pt-8 pb-16 lg:pt-12 lg:pb-20 bg-white border-b border-slate-200">
      {/* Subtle Dot Grid Background */}
      <NetworkBackground />

      {/* Faint, ambient cyan radial glow centered behind workspace */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-gradient-to-tr from-[#069bd8]/8 via-sky-100/10 to-transparent rounded-full blur-3xl -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Balanced Split Hero: Left Copy & Actions | Right Live Interactive Workspace Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column (5 cols on lg): Authoritative Copy & Metrics */}
          <div className="lg:col-span-5 space-y-5 text-left">
            
            {/* Subtle Enterprise Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-semibold text-slate-700 tracking-wide uppercase">
                Enterprise Cloud Telephony
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-[11px] font-mono font-bold text-[#069bd8]">99.99% SLA</span>
            </div>

            {/* Headline with Smooth Rotating Phrase */}
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Customer communications, evolved —
              <span className="block mt-1 text-[#069bd8] min-h-[1.2em] transition-all duration-300">
                {ROTATING_PHRASES[phraseIndex]}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Deploy an enterprise cloud contact center in 1 day. Inbound/outbound calling, intelligent IVR, native CRM screen pops, and real-time speech analytics — without bulky PBX hardware.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <Link
                href="/contact-us"
                className="btn-tactile btn-primary-emerald inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold text-slate-950 rounded-xl shadow-xs cursor-pointer"
              >
                <span>Request a Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={onOpenDemo}
                className="btn-tactile inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 rounded-xl border border-slate-200 shadow-2xs transition-colors cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 text-[#069bd8] fill-[#069bd8]" />
                <span>Watch 60-Sec Demo</span>
              </button>
            </div>

            {/* Quick Impact Numbers */}
            <div className="pt-3 grid grid-cols-3 gap-3 border-t border-slate-100 text-xs">
              <div>
                <div className="font-extrabold text-slate-900 text-base sm:text-lg tabular-nums">1 Day</div>
                <div className="text-[11px] text-slate-500 font-medium">Fast Rollout</div>
              </div>
              <div>
                <div className="font-extrabold text-[#069bd8] text-base sm:text-lg tabular-nums">100%</div>
                <div className="text-[11px] text-slate-500 font-medium">CRM Compatibility</div>
              </div>
              <div>
                <div className="font-extrabold text-emerald-600 text-base sm:text-lg tabular-nums">40%+</div>
                <div className="text-[11px] text-slate-500 font-medium">Cost Optimized</div>
              </div>
            </div>

            {/* Partner CRM & Channel Logos */}
            <div className="pt-1">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                Native CRM &amp; Telephony Connectors
              </div>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs grayscale hover:grayscale-0 transition-all opacity-85">
                <span className="flex items-center gap-1 font-semibold text-slate-700"><SalesforceLogo className="w-3.5 h-3.5" /> Salesforce</span>
                <span className="flex items-center gap-1 font-semibold text-slate-700"><ZohoLogo className="w-3.5 h-3.5" /> Zoho</span>
                <span className="flex items-center gap-1 font-semibold text-slate-700"><ZendeskLogo className="w-3.5 h-3.5" /> Zendesk</span>
                <span className="flex items-center gap-1 font-semibold text-slate-700"><WhatsAppLogo className="w-3.5 h-3.5" /> WhatsApp</span>
                <span className="flex items-center gap-1 font-semibold text-slate-700"><HubSpotLogo className="w-3.5 h-3.5" /> HubSpot</span>
              </div>
            </div>

          </div>

          {/* Right Column (7 cols on lg): Live Interactive Operations Workspace */}
          <div className="lg:col-span-7">
            <div 
              className="rounded-2xl border border-slate-200/90 bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12),0_0_0_1px_rgba(226,232,240,0.8)] overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Workspace Window Header */}
              <div className="bg-slate-50/95 border-b border-slate-200 px-4 py-2.5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  </div>
                  <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5 pl-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    CXDYNAMIQ Cloud Workspace
                    <span className="text-slate-400 font-normal">v4.2</span>
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                  <span className="hidden sm:flex items-center gap-1 bg-white px-2 py-0.5 rounded border border-slate-200 text-[11px]">
                    <Activity className="w-3 h-3 text-[#069bd8]" />
                    Carrier: 14ms
                  </span>
                  <span className="flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[11px] text-emerald-700 font-semibold">
                    99.99% Uptime
                  </span>
                </div>
              </div>

              {/* Channel Selector / Subtabs */}
              <div className="bg-slate-100/70 p-1.5 border-b border-slate-200 flex items-center gap-1 overflow-x-auto text-xs font-semibold">
                <button
                  onClick={() => setActiveTab("cti")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer shrink-0 text-xs ${
                    activeTab === "cti"
                      ? "bg-white text-slate-900 shadow-2xs border border-slate-200"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                  }`}
                >
                  <PhoneCall className={`w-3.5 h-3.5 ${activeTab === "cti" ? "text-[#069bd8]" : "text-slate-500"}`} />
                  <span>Inbound &amp; CTI</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </button>

                <button
                  onClick={() => setActiveTab("whatsapp")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer shrink-0 text-xs ${
                    activeTab === "whatsapp"
                      ? "bg-white text-slate-900 shadow-2xs border border-slate-200"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                  }`}
                >
                  <MessageSquare className={`w-3.5 h-3.5 ${activeTab === "whatsapp" ? "text-emerald-500" : "text-slate-500"}`} />
                  <span>WhatsApp</span>
                </button>

                <button
                  onClick={() => setActiveTab("dialer")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer shrink-0 text-xs ${
                    activeTab === "dialer"
                      ? "bg-white text-slate-900 shadow-2xs border border-slate-200"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                  }`}
                >
                  <Zap className={`w-3.5 h-3.5 ${activeTab === "dialer" ? "text-[#069bd8]" : "text-slate-500"}`} />
                  <span>Auto-Dialer</span>
                </button>

                <button
                  onClick={() => setActiveTab("analytics")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer shrink-0 text-xs ${
                    activeTab === "analytics"
                      ? "bg-white text-slate-900 shadow-2xs border border-slate-200"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                  }`}
                >
                  <Sparkles className={`w-3.5 h-3.5 ${activeTab === "analytics" ? "text-[#069bd8]" : "text-slate-500"}`} />
                  <span>Speech AI</span>
                </button>
              </div>

              {/* Dynamic Workspace Body */}
              <div className="p-4 sm:p-5 bg-slate-50/50">
                
                {/* VIEW 1: Inbound & CTI Screenpop */}
                {activeTab === "cti" && (
                  <div className="space-y-3.5 animate-in fade-in duration-200">
                    {/* Caller Identity Bar */}
                    <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-full bg-sky-50 text-[#069bd8] font-bold text-xs flex items-center justify-center border border-sky-100">
                          PS
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-extrabold text-xs sm:text-sm text-slate-900">Priya Sharma</span>
                            <span className="text-[9px] font-bold uppercase tracking-wider text-cyan-800 bg-sky-100/70 px-1.5 py-0.5 rounded">
                              Enterprise VIP
                            </span>
                          </div>
                          <div className="text-[11px] text-slate-500 flex items-center gap-1.5 mt-0.5">
                            <span>+91 98450 12345</span>
                            <span>•</span>
                            <span className="flex items-center gap-1 text-slate-600">
                              <Building className="w-3 h-3 text-slate-400" /> FinCorp Global
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
                        <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                          Connected ({formatTimer(callTimer)})
                        </span>
                        <span className="text-[11px] text-slate-600 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded flex items-center gap-1 font-medium">
                          <ZohoLogo className="w-3 h-3" />
                          Zoho CTI
                        </span>
                      </div>
                    </div>

                    {/* 3-Panel Working Workspace */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-3 text-xs">
                      
                      {/* Left: CRM History & Tickets (4 cols) */}
                      <div className="md:col-span-4 bg-white p-3 rounded-xl border border-slate-200 space-y-2">
                        <div className="font-bold text-slate-800 text-[10px] uppercase tracking-wider border-b border-slate-100 pb-1 flex items-center justify-between">
                          <span>CRM Tickets</span>
                          <span className="text-[9px] text-emerald-600 font-semibold">Auto-Sync</span>
                        </div>
                        <div className="space-y-1.5">
                          <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                            <div className="font-semibold text-slate-800 text-[11px]">Ticket #8921</div>
                            <div className="text-[10px] text-slate-500">Consignment Dispatch Status</div>
                            <div className="text-[9px] text-cyan-700 font-medium mt-0.5">Priority: High • SLA 4h</div>
                          </div>
                          <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                            <div className="font-semibold text-slate-800 text-[11px]">Ticket #7410</div>
                            <div className="text-[10px] text-slate-500">Subscription Renewal</div>
                            <div className="text-[9px] text-emerald-600 font-medium mt-0.5">CSAT: 5/5 Stars</div>
                          </div>
                        </div>
                      </div>

                      {/* Center: Live Audio Stream & Real-time Transcript (4 cols) */}
                      <div className="md:col-span-4 bg-white p-3 rounded-xl border border-slate-200 flex flex-col justify-between space-y-2">
                        <div>
                          <div className="font-bold text-slate-800 text-[10px] uppercase tracking-wider border-b border-slate-100 pb-1 flex items-center justify-between">
                            <span>Audio Stream</span>
                            <span className="font-mono text-[9px] text-cyan-700 font-semibold">HD Opus 48kHz</span>
                          </div>

                          {/* Live Animated Audio Waveform */}
                          <div className="h-8 my-2 flex items-center justify-center gap-1 bg-slate-50 p-1 rounded-lg border border-slate-100">
                            {[40, 65, 30, 85, 95, 60, 45, 90, 100, 50, 35, 80, 65, 40, 85, 60, 95, 75, 45, 80].map((h, i) => (
                              <span
                                key={i}
                                style={{ height: `${h}%`, animationDelay: `${i * 0.08}s` }}
                                className="w-1 bg-[#069bd8] rounded-full animate-wave-bar"
                              />
                            ))}
                          </div>

                          {/* Live Transcript Snippet */}
                          <div className="space-y-1 text-[11px] text-slate-600">
                            <p><strong className="text-slate-900">Caller:</strong> &ldquo;Checking delivery dispatch for #8921.&rdquo;</p>
                            <p><strong className="text-cyan-800">Agent:</strong> &ldquo;Accessing your tracking records now...&rdquo;</p>
                          </div>
                        </div>

                        {/* Quick Action Buttons */}
                        <div className="flex gap-1.5 pt-1.5 border-t border-slate-100">
                          <button className="flex-1 py-1 rounded bg-slate-100 text-slate-700 text-[11px] font-semibold hover:bg-slate-200">
                            Hold
                          </button>
                          <button className="flex-1 py-1 rounded bg-slate-100 text-slate-700 text-[11px] font-semibold hover:bg-slate-200">
                            Transfer
                          </button>
                          <button className="flex-1 py-1 rounded bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-200">
                            Push CRM
                          </button>
                        </div>
                      </div>

                      {/* Right: AI Copilot Whisper (4 cols) */}
                      <div className="md:col-span-4 bg-gradient-to-br from-cyan-50/70 via-white to-white p-3 rounded-xl border border-cyan-200/80 space-y-2">
                        <div className="flex items-center justify-between pb-1 border-b border-cyan-100">
                          <span className="font-bold text-cyan-900 text-[10px] uppercase tracking-wider flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-[#069bd8]" />
                            AI Copilot
                          </span>
                          <span className="text-[9px] font-bold text-emerald-700 bg-emerald-100/80 px-1 py-0.5 rounded">
                            Active
                          </span>
                        </div>

                        <div className="bg-white p-2 rounded-lg border border-cyan-100 shadow-2xs space-y-1">
                          <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Recommended Resolution</div>
                          <p className="text-[11px] text-slate-700 leading-snug font-medium">
                            Consignment #8921 cleared Mumbai hub. Scheduled delivery by 4 PM.
                          </p>
                          <div className="pt-1">
                            <button className="w-full py-1 rounded bg-[#069bd8] hover:bg-[#0584b8] text-white font-bold text-[10px] transition-colors flex items-center justify-center gap-1">
                              <Send className="w-3 h-3" /> Auto-SMS Tracking
                            </button>
                          </div>
                        </div>

                        <div className="text-[10px] text-slate-500 flex items-center justify-between pt-0.5">
                          <span>Sentiment: <strong>+0.92</strong></span>
                          <span>Audit: <strong>100%</strong></span>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* VIEW 2: WhatsApp & Omnichannel */}
                {activeTab === "whatsapp" && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                          <WhatsAppLogo className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 text-xs">Official WhatsApp Business Enterprise API</div>
                          <div className="text-[11px] text-slate-500">Auto-routed to active queue • Conversational AI Responder</div>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Response &lt; 2s
                      </span>
                    </div>

                    <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-2.5 text-xs">
                      <div className="max-w-xs sm:max-w-sm bg-slate-100 p-2.5 rounded-xl rounded-tl-sm text-slate-800">
                        <p className="font-semibold text-slate-900 text-[11px] mb-0.5">Customer (WhatsApp):</p>
                        &ldquo;Hi CXDYNAMIQ, we need custom pricing for 50 blended inbound/outbound seats with Zoho CTI.&rdquo;
                      </div>

                      <div className="max-w-xs sm:max-w-sm ml-auto bg-sky-50 border border-sky-100 p-2.5 rounded-xl rounded-tr-sm text-slate-800 space-y-1.5">
                        <p className="font-semibold text-cyan-800 text-[11px] flex items-center gap-1">
                          <Bot className="w-3.5 h-3.5 text-[#069bd8]" /> Conversational AI Agent:
                        </p>
                        <p className="text-[11px] leading-relaxed">
                          &ldquo;Hello! Our 50-seat enterprise bundle includes unlimited IVR, Zoho PhoneBridge CTI, and real-time Speech Analytics. Connecting you with our deployment architect.&rdquo;
                        </p>
                        <div className="text-[10px] text-slate-500 border-t border-sky-200/60 pt-1 flex items-center justify-between">
                          <span>Instant Agent Takeover: Ready</span>
                          <span className="text-emerald-600 font-bold">Auto-Logged to CRM ✓</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* VIEW 3: Auto-Dialer & Outbound */}
                {activeTab === "dialer" && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-purple-50 text-purple-600">
                          <Zap className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 text-xs">Predictive &amp; Auto Dialer Engine</div>
                          <div className="text-[11px] text-slate-500">Dynamic 3:1 pacing algorithm • Zero agent idle time</div>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                        Campaign Active
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                      <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                        <div className="text-slate-400 font-bold uppercase text-[9px]">Connect Rate</div>
                        <div className="text-lg font-extrabold text-slate-900 mt-0.5">48.4%</div>
                        <div className="text-emerald-600 text-[9px] font-semibold">+18% vs avg</div>
                      </div>
                      <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                        <div className="text-slate-400 font-bold uppercase text-[9px]">Active Agents</div>
                        <div className="text-lg font-extrabold text-[#069bd8] mt-0.5">48 / 50</div>
                        <div className="text-slate-500 text-[9px]">2 in wrap-up</div>
                      </div>
                      <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                        <div className="text-slate-400 font-bold uppercase text-[9px]">Answering Machine</div>
                        <div className="text-lg font-extrabold text-slate-900 mt-0.5">99.4%</div>
                        <div className="text-slate-500 text-[9px]">Skipped &lt;400ms</div>
                      </div>
                      <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                        <div className="text-slate-400 font-bold uppercase text-[9px]">Calls / Hour</div>
                        <div className="text-lg font-extrabold text-slate-900 mt-0.5">1,240</div>
                        <div className="text-emerald-600 text-[9px] font-semibold">High Velocity</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* VIEW 4: AI Speech Analytics & QA */}
                {activeTab === "analytics" && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-sky-50 text-[#069bd8]">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 text-xs">Real-Time Speech &amp; Acoustic Analytics</div>
                          <div className="text-[11px] text-slate-500">Live sentiment scoring • 100% automated QA evaluation</div>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        QA: 98/100 PASSED
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                      <div className="p-2.5 bg-white rounded-xl border border-slate-200 space-y-1">
                        <div className="font-bold text-slate-700 text-xs">Customer Emotion</div>
                        <div className="text-xl font-extrabold text-emerald-600 font-mono">+0.92</div>
                        <div className="text-[10px] text-slate-500">Dominant: Satisfied</div>
                      </div>

                      <div className="p-2.5 bg-white rounded-xl border border-slate-200 space-y-1">
                        <div className="font-bold text-slate-700 text-xs">Compliance Checklist</div>
                        <div className="space-y-0.5 text-[10px] text-slate-600">
                          <div className="flex items-center gap-1 text-emerald-600 font-semibold">
                            <CheckCircle2 className="w-3 h-3" /> Greeting Stated
                          </div>
                          <div className="flex items-center gap-1 text-emerald-600 font-semibold">
                            <CheckCircle2 className="w-3 h-3" /> PII Auto-Masked
                          </div>
                        </div>
                      </div>

                      <div className="p-2.5 bg-white rounded-xl border border-slate-200 space-y-1">
                        <div className="font-bold text-slate-700 text-xs">Silence Ratio</div>
                        <div className="text-xl font-extrabold text-[#069bd8] font-mono">3.1%</div>
                        <div className="text-[10px] text-slate-500">Optimal (&lt; 10%)</div>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Workspace Footer Bar */}
              <div className="bg-white border-t border-slate-200 px-4 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="font-semibold text-slate-700">Enterprise Carrier Infrastructure:</span>
                  <span className="text-slate-500 hidden sm:inline">Encrypted • Zero PBX Hardware • High-Availability SIP</span>
                </div>

                <button
                  onClick={onOpenDemo}
                  className="text-[#069bd8] font-bold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Interactive 30-Sec Demo</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
