"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  PhoneCall, 
  Headphones, 
  MessageSquare, 
  Zap, 
  ArrowRight, 
  Calendar,
  CheckCircle2, 
  Mic, 
  Sparkles, 
  Activity, 
  ShieldCheck, 
  PhoneForwarded, 
  Users, 
  Check, 
  PhoneOff,
  Cloud,
  FileText,
  BarChart3,
  Bot
} from "lucide-react";
import { 
  SalesforceLogo, 
  ZohoLogo, 
  ZendeskLogo, 
  WhatsAppLogo, 
  FreshdeskLogo,
  HubSpotLogo 
} from "@/components/IntegrationLogos";

interface CalmHeroProps {
  onOpenDemo: () => void;
}

export default function CalmHero({ onOpenDemo }: CalmHeroProps) {
  const [timerSeconds, setTimerSeconds] = useState(252); // starts at 04:12
  const [isMuted, setIsMuted] = useState(false);
  const [isOnHold, setIsOnHold] = useState(false);
  const [activeTab, setActiveTab] = useState<"voice" | "whatsapp" | "dialer" | "analytics">("voice");

  // Real-time call timer incrementer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimerSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <section className="relative w-full overflow-hidden bg-slate-50/50 pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-slate-200" id="home">
      
      {/* Ambient Atmospheric Glows Behind Hero */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[580px] rounded-full bg-gradient-to-b from-sky-100/40 via-sky-50/20 to-transparent blur-3xl opacity-80" aria-hidden="true" />
      <div className="pointer-events-none absolute top-1/4 -left-36 w-80 h-80 rounded-full bg-sky-100/30 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute top-1/3 -right-36 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl" aria-hidden="true" />

      {/* Floating Ambient Telephony Nodes (Left and Right) */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs hover:border-sky-300 transition-colors">
            <span className="w-2 h-2 rounded-full bg-emerald-500 motion-safe:animate-pulse" aria-hidden="true" />
            <span className="text-xs font-bold text-slate-800">CXDYNAMIQ 3.0 IS LIVE</span>
            <span className="text-slate-300">|</span>
            <Link href="/conversational-ai" className="text-xs font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1 transition-colors">
              <span>Next-Gen Voice &amp; Omnichannel AI</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Main Catchphrase Headline & Subcopy (Centered & Focused) */}
        <div className="max-w-4xl mx-auto text-center relative">
          
          {/* Subtle Left Floating Node */}
          <div className="hidden xl:flex absolute -left-20 top-8 items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 border border-slate-200/80 shadow-2xs text-[11px] font-medium text-slate-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
            <span>SIP Trunk: Nominal 0% Packet Loss</span>
          </div>

          {/* Subtle Right Floating Node */}
          <div className="hidden xl:flex absolute -right-20 top-8 items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 border border-slate-200/80 shadow-2xs text-[11px] font-medium text-slate-600">
            <span className="w-2 h-2 rounded-full bg-sky-600" aria-hidden="true" />
            <span>Real-Time ASR: 62ms latency</span>
          </div>

          <h1 className="font-headline font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 leading-[1.12]">
            The cloud contact center platform built for{" "}
            <span className="text-sky-700 bg-gradient-to-r from-sky-700 via-sky-600 to-sky-500 bg-clip-text text-transparent">
              effortless customer conversations.
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Connect voice, SMS, WhatsApp, and your CRM in one unified workspace. Deployed in hours, zero PBX maintenance, and 99.999% global voice reliability.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="https://cxq360.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-sky-700 text-white font-semibold text-sm hover:bg-sky-800 transition-colors shadow-sm active:scale-[0.98]"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={onOpenDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-slate-900 border border-slate-300 font-semibold text-sm hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4 text-sky-700" aria-hidden="true" />
              <span>Talk to Sales</span>
            </button>
          </div>

          {/* Micro Trust Guarantee */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-slate-500 font-medium">
            <span>No credit card required</span>
            <span>•</span>
            <span>14-day free trial</span>
            <span>•</span>
            <span>Instant SIP trunk provisioning</span>
          </div>

        </div>

        {/* Hero Dashboard Visual Cockpit: macOS App Window */}
        <div className="mt-12 relative max-w-5xl mx-auto">
          
          {/* Floating Satellite Card Left: Average Queue Wait */}
          <div className="hidden sm:flex absolute -top-6 -left-4 sm:-left-8 z-30 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-200/90 items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center text-sky-700">
              <Activity className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Average Queue Wait</span>
              <div className="flex items-center gap-1.5">
                <span className="font-headline font-bold text-lg text-slate-900">3.8s</span>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-100">
                  -42% vs ind.
                </span>
              </div>
            </div>
          </div>

          {/* Floating Satellite Card Right: WhatsApp Synced */}
          <div className="hidden sm:flex absolute -top-6 -right-4 sm:-right-8 z-30 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-200/90 items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700">
              <Check className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">WhatsApp Synced</span>
              <span className="text-xs font-semibold text-slate-800">HubSpot &amp; Salesforce updated in 94ms</span>
            </div>
          </div>

          {/* Main Workspace Window Container */}
          <div className="relative z-10 rounded-2xl bg-white shadow-2xl border border-slate-200/90 overflow-hidden text-slate-900">
            
            {/* Window Titlebar */}
            <div className="bg-slate-100/90 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-400/90 inline-block" aria-hidden="true" />
                <span className="w-3 h-3 rounded-full bg-amber-400/90 inline-block" aria-hidden="true" />
                <span className="w-3 h-3 rounded-full bg-emerald-400/90 inline-block" aria-hidden="true" />
                <span className="ml-3 text-xs font-semibold text-slate-700 font-headline tracking-wide flex items-center gap-1.5">
                  <Headphones className="w-3.5 h-3.5 text-sky-700" aria-hidden="true" />
                  CXDYNAMIQ Unified Softphone • Agent Workspace v3.0
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                  SIP Ready • HD Lossless (Opus)
                </span>
                <span className="text-xs text-slate-400 font-mono hidden sm:inline">ID: 8820-AGENT</span>
              </div>
            </div>

            {/* Interactive Service Tab Switcher */}
            <div className="bg-slate-50 border-b border-slate-200 px-4 pt-2 flex items-center gap-1 sm:gap-2 overflow-x-auto">
              <button
                type="button"
                onClick={() => setActiveTab("voice")}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-t-lg text-xs font-semibold transition-colors shrink-0 ${
                  activeTab === "voice"
                    ? "bg-white border-t-2 border-sky-700 text-sky-800 shadow-2xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <PhoneCall className="w-3.5 h-3.5 text-sky-700" aria-hidden="true" />
                <span>AI Voice &amp; Inbound ACD</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("whatsapp")}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-t-lg text-xs font-semibold transition-colors shrink-0 ${
                  activeTab === "whatsapp"
                    ? "bg-white border-t-2 border-sky-700 text-sky-800 shadow-2xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                <span>WhatsApp &amp; Omnichannel</span>
                <span className="px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-semibold">Live 4</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("dialer")}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-t-lg text-xs font-semibold transition-colors shrink-0 ${
                  activeTab === "dialer"
                    ? "bg-white border-t-2 border-sky-700 text-sky-800 shadow-2xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Zap className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
                <span>Sales Dialer &amp; CTI Pop</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("analytics")}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-t-lg text-xs font-semibold transition-colors shrink-0 ${
                  activeTab === "analytics"
                    ? "bg-white border-t-2 border-sky-700 text-sky-800 shadow-2xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
                <span>Real-Time Analytics</span>
              </button>
            </div>

            {/* Window Content Body (2 Columns) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 p-5 sm:p-6 bg-slate-50/40">
              
              {/* Left Column (7 cols): Active Caller & Bi-Directional Transcript */}
              <div className="lg:col-span-7 bg-white p-5 rounded-xl border border-slate-200/90 shadow-2xs flex flex-col justify-between space-y-4">
                
                <div>
                  {/* Top Caller Row */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-800 font-bold flex items-center justify-center text-sm shadow-2xs">
                        MS
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-headline font-bold text-base text-slate-900">Marcus Sterling</h3>
                          <span className="text-[11px] font-semibold uppercase px-2 py-0.5 rounded bg-sky-100 text-sky-800">
                            Enterprise VP
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 font-mono">+1 (415) 890-4421 • CloudCorp Global</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-rose-50 text-rose-700 font-mono text-sm font-semibold border border-rose-200">
                        <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" aria-hidden="true" />
                        {formatTimer(timerSeconds)}
                      </div>
                      <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-slate-500 font-mono">
                        <span>Live HD Opus</span>
                        <span className="text-emerald-700 font-semibold bg-emerald-50 px-1 py-0.2 rounded border border-emerald-100">SIP 100%</span>
                      </div>
                    </div>
                  </div>

                  {/* Audio Waveform & Telemetry Meters */}
                  <div className="mt-3.5 grid grid-cols-3 gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs">
                    <div>
                      <span className="text-[11px] text-slate-500 block">Sentiment</span>
                      <span className="font-bold text-emerald-700 flex items-center gap-1 mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
                        +94% Positive
                      </span>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-500 block">Intent Detected</span>
                      <span className="font-bold text-sky-700 block mt-0.5">Tier 3 Renewal</span>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-500 block">Audio Latency</span>
                      <span className="font-bold text-slate-800 block mt-0.5 font-mono">11ms • 0% Loss</span>
                    </div>
                  </div>

                  {/* Live Bi-Directional Transcript Box */}
                  <div className="mt-3.5 p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80 space-y-2 text-xs">
                    <div className="flex items-center justify-between pb-1.5 border-b border-slate-200 text-slate-500">
                      <span className="font-semibold text-slate-700 flex items-center gap-1.5 text-[11px]">
                        <Mic className="w-3.5 h-3.5 text-sky-600" aria-hidden="true" />
                        LIVE BI-DIRECTIONAL TRANSCRIPT
                      </span>
                      <span className="font-mono text-[10px] text-sky-700">DEEPGRAM WHISPER ASR • 42ms</span>
                    </div>

                    <div className="space-y-1.5 text-xs">
                      <p className="text-slate-600">
                        <strong className="text-slate-900 font-semibold">Marcus (04:02):</strong> “We need to scale our agents in Dublin and Tokyo this Friday. Can we dynamically add 45 SIP seats without restarting the queue?”
                      </p>
                      <p className="text-slate-700">
                        <strong className="text-sky-800 font-semibold">Agent Sarah (04:08):</strong> “Absolutely Marcus, seat provisioning is hot-swapped in real-time with zero downtime.”
                      </p>
                    </div>

                    {/* Copilot Live Suggestion */}
                    <div className="p-2.5 rounded-lg bg-sky-50 border border-sky-200 text-sky-900 flex items-start gap-2 mt-2">
                      <Sparkles className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" aria-hidden="true" />
                      <div className="text-xs">
                        <strong>Copilot Live Suggestion:</strong> Confirm multi-region pooled concurrency discount; suggest bundling APAC recording storage.
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons Row */}
                  <div className="mt-3 flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
                    <div className="flex items-center gap-2">
                      <button type="button" className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium border border-slate-200 transition-colors">
                        Insert Script TX
                      </button>
                      <button type="button" className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium border border-slate-200 transition-colors">
                        CRM Push
                      </button>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                      Supervisor Listening (Silent)
                    </span>
                  </div>

                </div>

                {/* Bottom Telephony Controls */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setIsMuted(!isMuted)}
                      className={`p-2 rounded-lg font-medium border transition-colors ${
                        isMuted ? "bg-amber-50 text-amber-900 border-amber-300" : "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200"
                      }`}
                    >
                      {isMuted ? "Unmute" : "Mute"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsOnHold(!isOnHold)}
                      className={`p-2 rounded-lg font-medium border transition-colors ${
                        isOnHold ? "bg-amber-50 text-amber-900 border-amber-300" : "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200"
                      }`}
                    >
                      {isOnHold ? "Resume" : "Hold"}
                    </button>
                    <button type="button" className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium border border-slate-200 transition-colors">
                      Transfer
                    </button>
                    <button type="button" className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium border border-slate-200 transition-colors">
                      Add Call
                    </button>
                  </div>

                  <button
                    type="button"
                    className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-semibold transition-colors flex items-center gap-1.5 shadow-2xs"
                  >
                    <PhoneOff className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>End Call</span>
                  </button>
                </div>

              </div>

              {/* Right Column (5 cols): AI Whisper & CRM Dossier */}
              <div className="lg:col-span-5 space-y-4">
                
                {/* AI Real-Time Whisper Card */}
                <div className="bg-sky-50 p-4 rounded-xl border border-sky-200/80 shadow-2xs space-y-2.5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-sky-600 text-white flex items-center justify-center">
                      <Sparkles className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-bold text-slate-900">AI Real-time Whisper Assist</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Offer the <strong>Q3 Multi-Region Expansion Discount</strong> (Contract Tier IV). Marcus&apos;s organization renewed their SOC2 compliance last week.
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <button
                      type="button"
                      className="text-[11px] font-semibold bg-white px-2.5 py-1.5 rounded-lg text-sky-800 hover:bg-sky-50 border border-sky-200 shadow-2xs transition-colors"
                    >
                      Insert Deal Quote ($4,200/mo)
                    </button>
                    <button
                      type="button"
                      className="text-[11px] text-slate-500 hover:text-slate-800 transition-colors"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>

                {/* Instant CRM Screen-Pop (Salesforce & HubSpot Dossier) */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-2.5">
                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                    <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <Cloud className="w-4 h-4 text-sky-600" aria-hidden="true" />
                      Salesforce &amp; HubSpot Dossier
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                      Live 94ms
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between py-0.5">
                      <span className="text-slate-500">Contract Value</span>
                      <span className="font-bold text-slate-900">$148,000 / yr</span>
                    </div>
                    <div className="flex justify-between py-0.5">
                      <span className="text-slate-500">Deal Stage</span>
                      <span className="font-semibold text-sky-800 bg-sky-50 px-1.5 py-0.2 rounded text-[11px]">
                        Negotiation · 85% Win
                      </span>
                    </div>
                    <div className="flex justify-between py-0.5">
                      <span className="text-slate-500">Open SLA Tickets</span>
                      <span className="font-semibold text-emerald-700 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                        0 open (SLA 100%)
                      </span>
                    </div>
                    <div className="flex justify-between py-0.5">
                      <span className="text-slate-500">Account Executive</span>
                      <span className="text-slate-800">David Vance (SF HQ)</span>
                    </div>
                    <div className="flex justify-between py-0.5">
                      <span className="text-slate-500">Satisfaction Index (CSAT)</span>
                      <span className="font-bold text-emerald-700">4.9 / 5.0 ★</span>
                    </div>
                  </div>
                </div>

                {/* Omnichannel Quick Timeline */}
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs space-y-2">
                  <div className="flex items-center justify-between pb-1 border-b border-slate-100 text-xs">
                    <span className="font-semibold text-slate-700">Recent Omnichannel Touchpoints</span>
                    <span className="text-[11px] text-sky-700 font-semibold cursor-pointer">View 34 total</span>
                  </div>
                  <div className="space-y-1.5 text-[11px]">
                    <div className="flex items-center justify-between text-slate-700">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                        Inbound WhatsApp: “Scale SIP trunks”
                      </span>
                      <span className="text-slate-400">Today, 09:14 AM</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-700">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500" aria-hidden="true" />
                        Stripe Invoice #884 Paid ($12.3k)
                      </span>
                      <span className="text-slate-400">Yesterday</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-700">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" aria-hidden="true" />
                        Zendesk CSAT Rated 5-Stars
                      </span>
                      <span className="text-slate-400">May 12</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Integration Logos Strip */}
      <div className="mt-16 pt-8 border-t border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Works natively with your existing stack
          </span>
          <div className="flex items-center flex-wrap justify-center gap-8 sm:gap-10 opacity-80 hover:opacity-100 transition-opacity">
            <Link href="/salesforce" className="flex items-center gap-2 text-slate-700 hover:text-slate-950 transition-colors">
              <SalesforceLogo className="h-5 w-auto" aria-hidden="true" />
              <span className="text-sm font-semibold">Salesforce</span>
            </Link>
            <Link href="/hubspot" className="flex items-center gap-2 text-slate-700 hover:text-slate-950 transition-colors">
              <HubSpotLogo className="h-5 w-auto" aria-hidden="true" />
              <span className="text-sm font-semibold">HubSpot</span>
            </Link>
            <Link href="/zoho" className="flex items-center gap-2 text-slate-700 hover:text-slate-950 transition-colors">
              <ZohoLogo className="h-5 w-auto" aria-hidden="true" />
              <span className="text-sm font-semibold">Zoho CRM</span>
            </Link>
            <Link href="/zendesk" className="flex items-center gap-2 text-slate-700 hover:text-slate-950 transition-colors">
              <ZendeskLogo className="h-5 w-auto" aria-hidden="true" />
              <span className="text-sm font-semibold">Zendesk</span>
            </Link>
            <Link href="/whatsapp-business" className="flex items-center gap-2 text-slate-700 hover:text-slate-950 transition-colors">
              <WhatsAppLogo className="h-5 w-auto" aria-hidden="true" />
              <span className="text-sm font-semibold">WhatsApp</span>
            </Link>
            <Link href="/freshdesk" className="flex items-center gap-2 text-slate-700 hover:text-slate-950 transition-colors">
              <FreshdeskLogo className="h-5 w-auto" aria-hidden="true" />
              <span className="text-sm font-semibold">Freshdesk</span>
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
