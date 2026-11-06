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
  Check
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

  // Auto-advance tabs every 4 seconds unless hovered/focused
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
    }, 4200);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section id="home" className="relative overflow-hidden bg-white border-b border-slate-200">
      
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 lg:grid-cols-12 lg:gap-16 lg:py-24">
        
        {/* Left Column (6 cols): Headline + Actions + Proof */}
        <div className="lg:col-span-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold text-sky-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 motion-safe:animate-pulse motion-reduce:animate-none" aria-hidden="true" />
            <span>AI-Powered Omnichannel Contact Center</span>
          </div>

          <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-slate-900 sm:text-5xl lg:text-[54px]">
            Every customer conversation. <span className="text-sky-700">One intelligent platform.</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
            Unify cloud voice, WhatsApp, agentic AI, and native CRM integrations. Resolve customer inquiries in real time with human and AI collaboration.
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
              href="#how-it-works"
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors ml-1 focus-visible:outline-2 focus-visible:outline-sky-600"
            >
              See how it works
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-500 font-medium">
            <span>Go live in hours</span>
            <span className="h-3 w-px bg-slate-300" aria-hidden="true" />
            <span>Native Salesforce, Zoho and Zendesk integrations</span>
            <span className="h-3 w-px bg-slate-300" aria-hidden="true" />
            <span>21-day trial on CXQ360.ai</span>
          </div>

        </div>

        {/* Right Column (6 cols): Dialpad / Aircall Style Interactive Telephony & Copilot Card */}
        <div 
          className="lg:col-span-6 w-full max-w-xl mx-auto lg:max-w-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <div className="rounded-2xl border border-slate-200 bg-slate-900 p-5 shadow-lg text-white">
            
            {/* Header: Segmented Control Tabs */}
            <div className="flex items-center justify-between pb-3.5 border-b border-slate-800">
              <div className="inline-flex p-1 bg-slate-800/80 rounded-xl gap-1">
                <button
                  type="button"
                  onClick={() => setActiveTab("voice")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-sky-400 ${
                    activeTab === "voice"
                      ? "bg-sky-600 text-white shadow-2xs"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Voice Call
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("copilot")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-sky-400 ${
                    activeTab === "copilot"
                      ? "bg-sky-600 text-white shadow-2xs"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  AI Copilot Assist
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("whatsapp")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-sky-400 ${
                    activeTab === "whatsapp"
                      ? "bg-sky-600 text-white shadow-2xs"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  WhatsApp Hub
                </button>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Live System</span>
              </div>
            </div>

            {/* TAB 1: Voice Call (Aircall/Dialpad Live Call Simulator) */}
            {activeTab === "voice" && (
              <div className="mt-4 space-y-4">
                
                {/* Caller Info Banner */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-semibold text-sm">
                      PS
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Priya Sharma</p>
                      <p className="text-xs text-slate-400">Enterprise Tier · +91 98••• ••210</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      01:42
                    </span>
                    <p className="text-[11px] text-slate-400">Inbound SIP</p>
                  </div>
                </div>

                {/* Live Real-Time Transcription Box */}
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800/80 pb-2">
                    <span className="font-semibold text-sky-400 flex items-center gap-1.5">
                      <Mic className="w-3.5 h-3.5" />
                      Live Transcription
                    </span>
                    <span className="text-emerald-400 text-[11px]">Sentiment: +94% Positive</span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <p className="text-slate-300">
                      <strong className="text-slate-100">Caller:</strong> “Hi, we need to adjust our delivery window for shipment #CX-88492 before end of day.”
                    </p>
                    <p className="text-sky-300">
                      <strong className="text-sky-200">AI Copilot:</strong> “Order #CX-88492 is at the regional hub. Address update rule is eligible before 6 PM.”
                    </p>
                  </div>
                </div>

                {/* Copilot 1-Click Action Suggestion */}
                <div className="p-3 rounded-xl bg-sky-950/40 border border-sky-800/60 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-sky-200">Recommended Action</p>
                    <p className="text-xs text-slate-300 mt-0.5">Reschedule to 2:00 PM tomorrow & sync CRM</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveTab("whatsapp")}
                    className="px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold transition-colors cursor-pointer"
                  >
                    1-Click Execute
                  </button>
                </div>

                {/* Telephony Controls */}
                <div className="grid grid-cols-4 gap-2 pt-1">
                  <button type="button" className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 font-medium transition-colors text-center">
                    Mute
                  </button>
                  <button type="button" className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 font-medium transition-colors text-center">
                    Hold
                  </button>
                  <button type="button" className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 font-medium transition-colors text-center">
                    Transfer
                  </button>
                  <button type="button" className="p-2 rounded-lg bg-red-950/70 hover:bg-red-900 border border-red-800/80 text-xs text-red-200 font-medium transition-colors text-center">
                    End Call
                  </button>
                </div>

              </div>
            )}

            {/* TAB 2: AI Copilot Assist (Dialpad Style Agent Intelligence) */}
            {activeTab === "copilot" && (
              <div className="mt-4 space-y-4">
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                    <p className="text-xs text-slate-400">Predicted CSAT</p>
                    <p className="text-xl font-bold text-emerald-400 mt-1">4.9 / 5.0</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                    <p className="text-xs text-slate-400">Script Adherence</p>
                    <p className="text-xl font-bold text-sky-400 mt-1">100% Verified</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <p className="text-xs font-semibold text-slate-200">Compliance Checklist</p>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Caller identity authenticated via two-factor OTP</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Payment card PII automatically redacted from recording</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>SOC2 & HIPAA security guardrails enforced</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/60 flex items-center justify-between text-xs">
                  <span className="text-slate-300">CRM Auto-Disposition ready for Salesforce</span>
                  <span className="text-emerald-400 font-semibold">Synced</span>
                </div>

              </div>
            )}

            {/* TAB 3: WhatsApp Hub (Aircall Omnichannel Style) */}
            {activeTab === "whatsapp" && (
              <div className="mt-4 space-y-4">
                
                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">CXdynamIQ Support</p>
                      <p className="text-xs text-emerald-400">Official Meta Verified Channel</p>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400">Delivered</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/50 text-slate-200">
                    <p className="font-semibold text-emerald-300 mb-1">Delivery Rescheduled Confirmed</p>
                    <p>Order #CX-88492 is rescheduled for tomorrow between 2:00 PM and 4:00 PM.</p>
                    <p className="text-slate-400 mt-1">Tracking ID: cxd.link/tr-88492</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/60 flex items-center justify-between text-xs">
                  <span className="text-slate-300">Customer acknowledged confirmation</span>
                  <span className="text-emerald-400 font-semibold">Closed</span>
                </div>

              </div>
            )}

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
              <SalesforceLogo className="h-5 w-auto" />
              <span className="text-sm font-semibold">Salesforce</span>
            </Link>
            <Link href="/zoho" className="flex items-center gap-2 text-slate-700 hover:text-slate-950 transition-colors">
              <ZohoLogo className="h-5 w-auto" />
              <span className="text-sm font-semibold">Zoho CRM</span>
            </Link>
            <Link href="/zendesk" className="flex items-center gap-2 text-slate-700 hover:text-slate-950 transition-colors">
              <ZendeskLogo className="h-5 w-auto" />
              <span className="text-sm font-semibold">Zendesk</span>
            </Link>
            <Link href="/whatsapp-business" className="flex items-center gap-2 text-slate-700 hover:text-slate-950 transition-colors">
              <WhatsAppLogo className="h-5 w-auto" />
              <span className="text-sm font-semibold">WhatsApp</span>
            </Link>
            <Link href="/freshdesk" className="flex items-center gap-2 text-slate-700 hover:text-slate-950 transition-colors">
              <FreshdeskLogo className="h-5 w-auto" />
              <span className="text-sm font-semibold">Freshdesk</span>
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
