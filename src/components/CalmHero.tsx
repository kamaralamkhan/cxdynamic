"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  PhoneCall, 
  Shuffle, 
  Headphones, 
  MessageSquare, 
  Bot, 
  Workflow, 
  CheckCircle2, 
  UserCheck,
  Mic,
  Volume2,
  Activity,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  PhoneForwarded,
  Check,
  Zap
} from "lucide-react";
import { 
  SalesforceLogo, 
  ZohoLogo, 
  ZendeskLogo, 
  WhatsAppLogo, 
  FreshdeskLogo 
} from "@/components/IntegrationLogos";

interface CalmHeroProps {
  onOpenDemo: () => void;
}

type HeroTab = "voice" | "copilot" | "whatsapp";

export default function CalmHero({ onOpenDemo }: CalmHeroProps) {
  const [activeTab, setActiveTab] = useState<HeroTab>("voice");
  const [isPaused, setIsPaused] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(222);
  const [isMuted, setIsMuted] = useState(false);
  const [isOnHold, setIsOnHold] = useState(false);

  // Live call timer ticker
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

  // Auto-advance tabs every 4.5 seconds unless hovered/focused
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveTab((prev) => {
        if (prev === "voice") return "copilot";
        if (prev === "copilot") return "whatsapp";
        return "voice";
      });
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section id="home" className="relative overflow-hidden bg-white border-b border-slate-200">
      
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 lg:grid-cols-12 lg:gap-16 lg:py-24">
        
        {/* Left Column (6 cols): Headline + Actions + Proof */}
        <div className="lg:col-span-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-xs font-semibold text-sky-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 motion-safe:animate-pulse motion-reduce:animate-none" aria-hidden="true" />
            <span>Ultrafast implementation · VIP engineering support</span>
          </div>

          <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-slate-900 sm:text-5xl lg:text-[54px]">
            Every customer conversation. <span className="text-sky-700">One intelligent platform.</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
            Calling, IVR, WhatsApp and CRM integrations on one cloud platform, set up by our engineers and backed by people who pick up.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Link
              href="/contact-us#quote"
              onClick={onOpenDemo}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold bg-sky-700 text-white hover:bg-sky-800 active:scale-[0.98] shadow-sm transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-sky-600"
            >
              Book a Demo
            </Link>

            <a
              href="https://cxq360.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 active:scale-[0.98] shadow-2xs transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-sky-600"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
            </a>

            <a
              href="#products"
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors ml-1 focus-visible:outline-2 focus-visible:outline-sky-600"
            >
              Explore products
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-500 font-medium">
            <span>24-hour setup</span>
            <span className="h-3 w-px bg-slate-300" aria-hidden="true" />
            <span>Native Salesforce, Zoho and Zendesk sync</span>
            <span className="h-3 w-px bg-slate-300" aria-hidden="true" />
            <span>99.99% carrier-grade SLA</span>
          </div>

        </div>

        {/* Right Column (6 cols): Modern Interactive Agent Workspace Preview */}
        <div 
          className="lg:col-span-6 w-full max-w-xl mx-auto lg:max-w-none relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          {/* Pastel Wash Backing Frame */}
          <div className="w-full rounded-3xl bg-gradient-to-br from-sky-50/70 via-slate-50 to-slate-100/80 p-4 sm:p-6 border border-slate-200/80 shadow-xl shadow-slate-900/5 relative">
            
            {/* Top Telephony Status Bar */}
            <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-200/80">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 motion-safe:animate-pulse motion-reduce:animate-none" aria-hidden="true" />
                <span className="text-xs font-semibold text-emerald-700 tracking-wide">SIP TRUNK: CONNECTED (14ms)</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <Headphones className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                <span>Agent: Elena Vance · Queue 01</span>
              </div>
            </div>

            {/* Segmented Control Tabs */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
              <div className="inline-flex p-1 bg-slate-200/70 rounded-xl gap-1">
                <button
                  type="button"
                  onClick={() => setActiveTab("voice")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-sky-600 ${
                    activeTab === "voice"
                      ? "bg-white text-sky-800 shadow-2xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Voice Call
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("copilot")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-sky-600 ${
                    activeTab === "copilot"
                      ? "bg-white text-sky-800 shadow-2xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  AI Copilot Assist
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("whatsapp")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-sky-600 ${
                    activeTab === "whatsapp"
                      ? "bg-white text-sky-800 shadow-2xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  WhatsApp Hub
                </button>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                <span>Live System</span>
              </div>
            </div>

            {/* Main Surface Card */}
            <div className="mt-3.5 bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm space-y-4 text-slate-900">
              
              {/* TAB 1: Voice Call (Aircall/Dialpad Live Call Simulator) */}
              {activeTab === "voice" && (
                <div className="space-y-3.5">
                  
                  {/* Caller Info Banner */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center font-bold text-sm">
                        PS
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-semibold text-slate-900">Priya Sharma</p>
                          <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-100 text-amber-800">Enterprise VIP</span>
                        </div>
                        <p className="text-xs text-slate-500">+91 98••• ••210 · Priority Inbound</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold tabular-nums text-emerald-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                        {formatTimer(timerSeconds)}
                      </span>
                      <p className="text-[11px] text-slate-400">Carrier SIP HD</p>
                    </div>
                  </div>

                  {/* CRM Context Card Inside Call */}
                  <div className="rounded-xl bg-slate-50 p-3 border border-slate-200/70 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[11px]">Account</span>
                      <span className="font-semibold text-slate-800 truncate block">Sterling APAC</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Open Tickets</span>
                      <span className="font-semibold text-slate-800 block">0 (Resolved)</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">CSAT History</span>
                      <span className="font-semibold text-emerald-700 block">4.9 / 5.0</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Annual LTV</span>
                      <span className="font-semibold text-slate-800 block">$48,000</span>
                    </div>
                  </div>

                  {/* Audio Waveform Visualizer */}
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
                      <span className="flex items-center gap-1.5 font-semibold text-slate-700 text-[11px]">
                        <Activity className="w-3.5 h-3.5 text-sky-600" aria-hidden="true" />
                        Carrier HD Audio Stream
                      </span>
                      <span className="text-[11px] font-medium text-emerald-700">48kHz Opus · 1.2ms Jitter</span>
                    </div>
                    <div className="flex items-center justify-center gap-1.5 h-6 py-0.5" aria-hidden="true">
                      {[40, 75, 100, 50, 90, 60, 85, 95, 45, 80, 65, 35].map((height, i) => (
                        <span
                          key={i}
                          className="w-1 rounded-full bg-sky-600 motion-safe:animate-pulse"
                          style={{
                            height: `${height}%`,
                            animationDelay: `${(i * 120) % 900}ms`,
                            animationDuration: "900ms",
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Live Real-Time Transcription Box */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1.5 text-xs">
                    <div className="flex items-center justify-between text-slate-500 border-b border-slate-200 pb-1.5">
                      <span className="font-semibold text-sky-800 flex items-center gap-1.5">
                        <Mic className="w-3.5 h-3.5 text-sky-600" aria-hidden="true" />
                        Live Transcription
                      </span>
                      <span className="text-emerald-700 text-[11px] font-medium">Sentiment: +94% Positive</span>
                    </div>
                    <div className="space-y-1 text-xs">
                      <p className="text-slate-600">
                        <strong className="text-slate-900 font-semibold">Caller:</strong> “Hi, we need to adjust our delivery window for shipment #CX-88492 before end of day.”
                      </p>
                      <p className="text-sky-900 bg-sky-50/70 p-1.5 rounded-lg border border-sky-100">
                        <strong className="text-sky-800 font-semibold">AI Copilot:</strong> “Order #CX-88492 is at the regional hub. Address update rule is eligible before 6 PM.”
                      </p>
                    </div>
                  </div>

                  {/* Copilot 1-Click Action Suggestion */}
                  <div className="p-3 rounded-xl bg-sky-50 border border-sky-200/80 flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-sky-900 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-sky-600" aria-hidden="true" />
                        AI Recommended Action
                      </p>
                      <p className="text-xs text-slate-600 mt-0.5 truncate">Reschedule to 2:00 PM tomorrow & auto-sync CRM</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveTab("whatsapp")}
                      className="shrink-0 px-3 py-1.5 rounded-lg bg-sky-700 hover:bg-sky-800 text-white text-xs font-semibold transition-colors cursor-pointer"
                    >
                      1-Click Execute
                    </button>
                  </div>

                  {/* Telephony Controls */}
                  <div className="grid grid-cols-4 gap-2 pt-1 text-xs">
                    <button 
                      type="button" 
                      onClick={() => setIsMuted(!isMuted)}
                      className={`p-2 rounded-lg font-medium transition-colors text-center border ${
                        isMuted 
                          ? "bg-amber-50 text-amber-900 border-amber-300" 
                          : "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200"
                      }`}
                    >
                      {isMuted ? "Unmute" : "Mute"}
                    </button>
                    <button 
                      type="button" 
                      onClick={() => setIsOnHold(!isOnHold)}
                      className={`p-2 rounded-lg font-medium transition-colors text-center border ${
                        isOnHold 
                          ? "bg-amber-50 text-amber-900 border-amber-300" 
                          : "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200"
                      }`}
                    >
                      {isOnHold ? "Resume" : "Hold"}
                    </button>
                    <button 
                      type="button" 
                      className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors text-center border border-slate-200"
                    >
                      Transfer
                    </button>
                    <button 
                      type="button" 
                      className="p-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-700 font-medium transition-colors text-center border border-red-200"
                    >
                      End Call
                    </button>
                  </div>

                </div>
              )}

              {/* TAB 2: AI Copilot Assist (Dialpad Style Agent Intelligence) */}
              {activeTab === "copilot" && (
                <div className="space-y-3.5">
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                      <p className="text-xs text-slate-500">Predicted CSAT</p>
                      <p className="text-xl font-bold text-emerald-700 mt-1">4.9 / 5.0</p>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                      <p className="text-xs text-slate-500">Script Adherence</p>
                      <p className="text-xl font-bold text-sky-700 mt-1">100% Verified</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 space-y-2">
                    <p className="text-xs font-semibold text-slate-800">Compliance & Security Guardrails</p>
                    <div className="space-y-1.5 text-xs">
                      <div className="flex items-center gap-2 text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                        <span>Caller identity authenticated via two-factor OTP</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                        <span>Payment card PII automatically redacted from recording</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                        <span>SOC2 & HIPAA security guardrails enforced</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-sky-50 border border-sky-200/80 flex items-center justify-between text-xs">
                    <span className="text-sky-900 font-medium">CRM Auto-Disposition ready for Salesforce / Zoho</span>
                    <span className="text-emerald-700 font-semibold">Synced</span>
                  </div>

                </div>
              )}

              {/* TAB 3: WhatsApp Hub (Aircall Omnichannel Style) */}
              {activeTab === "whatsapp" && (
                <div className="space-y-3.5">
                  
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                        <MessageSquare className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">CXdynamIQ Support</p>
                        <p className="text-xs text-emerald-700">Official Meta Verified Channel</p>
                      </div>
                    </div>
                    <span className="text-xs text-slate-500 font-medium">Delivered</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 space-y-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-slate-800">
                      <p className="font-semibold text-emerald-800 mb-1">Delivery Rescheduled Confirmed</p>
                      <p>Order #CX-88492 is rescheduled for tomorrow between 2:00 PM and 4:00 PM.</p>
                      <p className="text-slate-500 mt-1">Tracking ID: cxd.link/tr-88492</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-sky-50 border border-sky-200/80 flex items-center justify-between text-xs">
                    <span className="text-sky-900 font-medium">Customer acknowledged confirmation</span>
                    <span className="text-emerald-700 font-semibold">Closed</span>
                  </div>

                </div>
              )}

            </div>

            {/* Satellite Floating Badges */}
            <div className="hidden sm:flex absolute -top-3 -right-2 z-20 items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-md text-xs font-semibold text-slate-800">
              <Zap className="w-3.5 h-3.5 text-sky-600" aria-hidden="true" />
              <span>Sub-120ms CTI Screen-Pop</span>
            </div>

            <div className="hidden sm:flex absolute -bottom-3 -left-2 z-20 items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-md text-xs font-semibold text-slate-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
              <span>WhatsApp Synced · #CX-88492</span>
            </div>

          </div>
        </div>

      </div>

      {/* Integration Logos Bar */}
      <div className="border-t border-slate-200 py-7 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          <span className="text-xs font-semibold text-slate-500">
            Works natively with your existing tools
          </span>
          <div className="flex items-center flex-wrap justify-center gap-8 sm:gap-12 opacity-80 hover:opacity-100 transition-opacity">
            <Link href="/salesforce" className="flex items-center gap-2 text-slate-700 hover:text-slate-950 transition-colors">
              <SalesforceLogo className="h-5 w-auto" aria-hidden="true" />
              <span className="text-sm font-semibold">Salesforce</span>
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
