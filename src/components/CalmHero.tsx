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
  Mic, 
  MicOff,
  Pause,
  Play,
  PhoneOff,
  Activity, 
  Sparkles,
  CheckCircle2,
  PhoneForwarded,
  Volume2,
  Send,
  Paperclip,
  FileText,
  Check,
  BarChart3,
  Clock,
  Users,
  ShieldCheck,
  AlertCircle,
  ThumbsUp,
  ChevronRight
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

  // WhatsApp Tab state
  const [whatsappInput, setWhatsappInput] = useState("");
  const [whatsappMessages, setWhatsappMessages] = useState([
    {
      id: 1,
      sender: "elena",
      name: "Elena Rostova",
      text: "Hi Sarah, we're planning to migrate 60 agents from our legacy PBX next week. Can we configure WhatsApp conversational bots to qualify inbound leads before routing to our support queue?",
      time: "09:12 AM"
    },
    {
      id: 2,
      sender: "agent",
      name: "Sarah (CXDYNAMIQ)",
      text: "Hi Elena! Absolutely. CXDYNAMIQ provides turnkey WhatsApp bot flows with sub-120ms HubSpot & Salesforce matching. I've attached our FinTech migration blueprint below.",
      time: "09:13 AM",
      attachment: "CXDYNAMIQ_FinScale_Migration_Guide.pdf (2.4 MB)"
    }
  ]);

  // Dialer Tab state
  const [dialerStatus, setDialerStatus] = useState<"ready" | "calling" | "connected">("connected");
  const [selectedDisposition, setSelectedDisposition] = useState<string | null>(null);

  // Real-time call timer incrementer
  useEffect(() => {
    if (isOnHold) return;
    const timer = setInterval(() => {
      setTimerSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [isOnHold]);

  const formatTimer = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const handleSendWhatsapp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!whatsappInput.trim()) return;
    setWhatsappMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        sender: "agent",
        name: "Sarah (CXDYNAMIQ)",
        text: whatsappInput.trim(),
        time: "Just now"
      }
    ]);
    setWhatsappInput("");
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#f8f9ff] py-14 lg:py-20 border-b border-slate-200" id="home">
      
      {/* 1. Ambient Atmospheric Glows Behind Hero (Stitch Design Tokens) */}
      <div 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[580px] rounded-full bg-gradient-to-b from-[#39b8fd]/15 via-[#cde5ff]/30 to-transparent blur-3xl opacity-75 ambient-glow-pulse" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute top-1/4 -left-36 w-80 h-80 rounded-full bg-[#cde5ff]/25 blur-3xl" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute top-1/3 -right-36 w-80 h-80 rounded-full bg-[#c9e6ff]/30 blur-3xl" 
        aria-hidden="true" 
      />

      {/* 2. Background AI Telephony & Soundwave Processing Vector Layer */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-70 overflow-hidden">
        <svg className="w-full h-full max-w-7xl max-h-[880px] text-sky-900/20" fill="none" viewBox="0 0 1200 700">
          <defs>
            <linearGradient id="voice-gradient-1" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0369a1" stopOpacity="0.1" />
              <stop offset="25%" stopColor="#0ea5e9" stopOpacity="0.65" />
              <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="85%" stopColor="#00724e" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0369a1" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="voice-gradient-2" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0369a1" stopOpacity="0.05" />
              <stop offset="35%" stopColor="#38bdf8" stopOpacity="0.5" />
              <stop offset="70%" stopColor="#0ea5e9" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Flowing audio frequency arcs */}
          <path 
            className="audio-flow-line opacity-45" 
            d="M-100 240 C 200 180, 380 340, 600 250 C 820 160, 1020 310, 1300 230" 
            stroke="url(#voice-gradient-1)" 
            strokeLinecap="round" 
            strokeWidth="1.5" 
          />
          <path 
            className="audio-flow-line opacity-35" 
            d="M-50 290 C 220 230, 440 370, 620 300 C 800 230, 980 360, 1250 280" 
            stroke="url(#voice-gradient-2)" 
            strokeDasharray="4 8" 
            strokeLinecap="round" 
            strokeWidth="1.25" 
          />
          <path 
            d="M-80 340 C 180 300, 360 410, 580 350 C 800 290, 1040 390, 1280 320" 
            opacity="0.25" 
            stroke="#0ea5e9" 
            strokeWidth="0.8" 
          />

          {/* Left Ingress: Carrier SIP Ingress Node */}
          <g className="hidden lg:block opacity-65" transform="translate(140, 210)">
            <circle cx="0" cy="0" r="18" fill="#e0f2fe" fillOpacity="0.6" />
            <circle cx="0" cy="0" r="7" fill="#0369a1" />
            <circle cx="0" cy="0" r="28" stroke="#0ea5e9" strokeDasharray="3 3" strokeWidth="1" opacity="0.6" />
          </g>

          {/* Center Bridge: AI Speech & Whisper Synthesizer Node */}
          <g className="hidden lg:block opacity-60" transform="translate(600, 250)">
            <circle cx="0" cy="0" r="24" fill="#cde5ff" fillOpacity="0.45" />
            <circle cx="0" cy="0" r="9" fill="#0ea5e9" />
            <circle cx="0" cy="0" r="38" stroke="#006591" strokeDasharray="4 4" strokeWidth="1" opacity="0.45" />
          </g>

          {/* Right Egress: Real-time LLM CRM & Copilot Node */}
          <g className="hidden lg:block opacity-65" transform="translate(1060, 270)">
            <circle cx="0" cy="0" r="20" fill="#e0f2fe" fillOpacity="0.6" />
            <circle cx="0" cy="0" r="7" fill="#00724e" />
            <circle cx="0" cy="0" r="32" stroke="#4edea3" strokeDasharray="3 3" strokeWidth="1" opacity="0.5" />
          </g>
        </svg>
      </div>

      {/* 3. Subtle Floating Telemetry Badges (Outer margins with zero overlap) */}
      <div aria-hidden="true" className="hidden xl:block pointer-events-none absolute left-8 top-36 z-10 animate-float opacity-85">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 text-[11px] font-mono text-slate-700 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>SIP Trunk: Nominal 0% Packet Loss</span>
        </div>
      </div>

      <div aria-hidden="true" className="hidden xl:block pointer-events-none absolute right-8 top-40 z-10 animate-float-alt opacity-85" style={{ animationDelay: "1.2s" }}>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 text-[11px] font-mono text-slate-700 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
          <span>Real-Time ASR: 42ms Latency</span>
        </div>
      </div>

      <div aria-hidden="true" className="hidden 2xl:block pointer-events-none absolute left-12 bottom-40 z-10 animate-float-alt opacity-75" style={{ animationDelay: "2.1s" }}>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 text-[11px] font-mono text-slate-700 shadow-xs">
          <Volume2 className="w-3.5 h-3.5 text-emerald-700" />
          <span>Audio Codec: Opus · 48kHz Stereo Lossless</span>
        </div>
      </div>

      <div aria-hidden="true" className="hidden 2xl:block pointer-events-none absolute right-12 bottom-48 z-10 animate-float opacity-75" style={{ animationDelay: "0.8s" }}>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 text-[11px] font-mono text-slate-700 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-sky-700" />
          <span>Live AI Whisper Model: Ready</span>
        </div>
      </div>

      {/* 4. Main Hero Content Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Announcement Pill Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-sm border border-slate-200 shadow-xs hover:border-sky-300 transition-colors">
            <span className="relative flex h-2 w-2">
              <span aria-hidden="true" className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-800">CXDYNAMIQ 3.0 is live</span>
            <span className="text-xs text-slate-300">•</span>
            <Link 
              href="/conversational-ai" 
              className="text-xs font-medium text-slate-700 hover:text-sky-800 flex items-center gap-1 transition-colors"
            >
              <span>Next-Gen Voice &amp; Omnichannel AI</span>
              <ArrowRight className="w-3.5 h-3.5 text-sky-700" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Minimal Font-to-Text Ratio Headline & Subhead */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-headline font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.02em] text-slate-900 leading-[1.16]">
            The cloud contact center platform built for{" "}
            <span className="text-sky-700">effortless customer conversations.</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Connect voice, SMS, WhatsApp, and your CRM in one unified workspace. Deployed in hours, zero PBX maintenance, and 99.999% global voice reliability.
          </p>

          {/* Action CTAs */}
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://cxq360.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-sky-700 text-white font-semibold text-sm hover:bg-sky-800 transition-colors shadow-sm active:scale-[0.98]"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={onOpenDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-white text-slate-900 border border-slate-300 font-semibold text-sm hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4 text-sky-700" aria-hidden="true" />
              <span>Talk to Sales</span>
            </button>
          </div>

          {/* Micro Trust Guarantee */}
          <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2.5 text-xs text-slate-500 font-medium">
            <span>No credit card required</span>
            <span>•</span>
            <span>14-day free trial</span>
            <span>•</span>
            <span>Instant SIP trunk provisioning</span>
          </div>
        </div>

        {/* 5. Hero Dashboard Cockpit with Holographic Global Telemetry Globe Background */}
        <div className="mt-10 relative max-w-5xl mx-auto">
          
          {/* Ambient Holographic Global Telemetry Globe Vector Canvas */}
          <div aria-hidden="true" className="pointer-events-none absolute -inset-x-20 -top-24 -bottom-16 flex items-center justify-center overflow-visible z-0 opacity-85">
            <div className="relative w-[860px] h-[580px] max-w-none flex items-center justify-center">
              <div className="absolute w-[620px] h-[440px] rounded-[100%] bg-gradient-to-r from-sky-200/25 via-blue-200/15 to-emerald-200/20 blur-3xl opacity-70" />
              <div className="absolute w-[500px] h-[340px] rounded-[100%] bg-sky-100/30 blur-2xl" />

              <svg className="w-full h-full text-sky-700/35" fill="none" viewBox="0 0 860 560" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="globeCoreGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#0369a1" stopOpacity="0.12" />
                    <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.04" />
                    <stop offset="100%" stopColor="#f8f9ff" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="globeArcGrad1" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#0369a1" stopOpacity="0.1" />
                    <stop offset="35%" stopColor="#0ea5e9" stopOpacity="0.75" />
                    <stop offset="70%" stopColor="#00724e" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#0369a1" stopOpacity="0.1" />
                  </linearGradient>
                  <linearGradient id="globeArcGrad2" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0%" stopColor="#0284c7" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#4edea3" stopOpacity="0.3" />
                  </linearGradient>
                </defs>

                <ellipse cx="430" cy="280" rx="340" ry="210" fill="url(#globeCoreGlow)" />
                <ellipse cx="430" cy="280" rx="340" ry="210" stroke="#0369a1" strokeDasharray="6 6" strokeOpacity="0.25" strokeWidth="1.2" />
                <ellipse cx="430" cy="280" rx="320" ry="160" stroke="#0ea5e9" strokeOpacity="0.28" strokeWidth="1" />
                <ellipse cx="430" cy="280" rx="280" ry="105" stroke="#00724e" strokeDasharray="4 4" strokeOpacity="0.25" strokeWidth="0.9" />
                <ellipse cx="430" cy="280" rx="220" ry="50" stroke="#0369a1" strokeOpacity="0.2" strokeWidth="0.8" />

                <ellipse cx="430" cy="280" rx="100" ry="210" stroke="#0ea5e9" strokeOpacity="0.28" strokeWidth="1" />
                <ellipse cx="430" cy="280" rx="210" ry="210" stroke="#0369a1" strokeDasharray="5 5" strokeOpacity="0.22" strokeWidth="0.9" />
                <path d="M 430 70 L 430 490" stroke="#0369a1" strokeDasharray="4 4" strokeOpacity="0.2" strokeWidth="1" />
                <path d="M 90 280 L 770 280" stroke="#0ea5e9" strokeOpacity="0.2" strokeWidth="1" />

                <path className="audio-flow-line" d="M 210 220 Q 285 130 365 170" stroke="url(#globeArcGrad1)" strokeLinecap="round" strokeWidth="1.8" />
                <path d="M 365 170 Q 395 175 420 195" stroke="#38bdf8" strokeDasharray="3 3" strokeWidth="1.8" />
                <path className="audio-flow-line" d="M 420 195 Q 510 225 560 310" stroke="url(#globeArcGrad1)" strokeLinecap="round" strokeWidth="2" />
                <path d="M 560 310 Q 590 295 625 290" stroke="#00724e" strokeWidth="2.2" />
                <path className="audio-flow-line" d="M 625 290 Q 648 245 655 205" stroke="url(#globeArcGrad2)" strokeLinecap="round" strokeWidth="1.8" />
                <path className="audio-flow-line" d="M 625 290 Q 665 340 690 385" stroke="url(#globeArcGrad1)" strokeLinecap="round" strokeWidth="1.8" />
                <path d="M 655 205 C 750 170, 780 140, 770 140" stroke="#0ea5e9" strokeDasharray="4 4" strokeOpacity="0.5" strokeWidth="1.2" />
                <path d="M 90 250 C 130 220, 170 220, 210 220" stroke="#0ea5e9" strokeDasharray="4 4" strokeOpacity="0.5" strokeWidth="1.2" />

                <g transform="translate(210, 220)">
                  <circle fill="#0284c7" fillOpacity="0.25" r="9" />
                  <circle fill="#0369a1" r="4" />
                  <circle fill="#ffffff" r="2" />
                  <text fill="#00507d" fontFamily="Inter" fontSize="9" fontWeight="600" opacity="0.85" x="-8" y="-12">SFO (US-West)</text>
                </g>
                <g transform="translate(365, 170)">
                  <circle fill="#0284c7" fillOpacity="0.2" r="7" />
                  <circle fill="#0284c7" r="3.5" />
                  <circle fill="#ffffff" r="1.5" />
                  <text fill="#00507d" fontFamily="Inter" fontSize="8.5" fontWeight="600" opacity="0.8" x="-6" y="-10">Dublin</text>
                </g>
                <g transform="translate(420, 195)">
                  <circle fill="#0369a1" fillOpacity="0.25" r="8" />
                  <circle fill="#0369a1" r="4" />
                  <circle fill="#ffffff" r="1.5" />
                  <text fill="#00507d" fontFamily="Inter" fontSize="8.5" fontWeight="600" opacity="0.85" x="7" y="-7">Frankfurt (GDPR)</text>
                </g>
                <g transform="translate(560, 310)">
                  <circle fill="#00724e" fillOpacity="0.25" r="8" />
                  <circle fill="#00724e" r="4" />
                  <circle fill="#ffffff" r="1.5" />
                  <text fill="#00573a" fontFamily="Inter" fontSize="8.5" fontWeight="600" opacity="0.85" x="-32" y="16">Singapore (APAC)</text>
                </g>
                <g transform="translate(625, 290)">
                  <circle fill="#00724e" fillOpacity="0.2" r="14" className="animate-ping" />
                  <circle fill="#00724e" fillOpacity="0.3" r="7" />
                  <circle fill="#00724e" r="4.5" />
                  <circle fill="#ffffff" r="2" />
                  <text fill="#00573a" fontFamily="Plus Jakarta Sans" fontSize="9.5" fontWeight="700" x="9" y="4">Manila HQ • 11ms</text>
                </g>
                <g transform="translate(655, 205)">
                  <circle fill="#0ea5e9" fillOpacity="0.25" r="8" />
                  <circle fill="#0284c7" r="3.5" />
                  <circle fill="#ffffff" r="1.5" />
                  <text fill="#00507d" fontFamily="Inter" fontSize="8.5" fontWeight="600" opacity="0.85" x="8" y="-4">Tokyo</text>
                </g>
                <g transform="translate(690, 385)">
                  <circle fill="#006591" fillOpacity="0.2" r="7.5" />
                  <circle fill="#006591" r="3.5" />
                  <circle fill="#ffffff" r="1.5" />
                  <text fill="#006591" fontFamily="Inter" fontSize="8.5" fontWeight="600" opacity="0.8" x="8" y="4">Sydney</text>
                </g>

                <circle fill="#38bdf8" r="3">
                  <animateMotion dur="2.4s" path="M 210 220 Q 285 130 365 170" repeatCount="indefinite" />
                </circle>
                <circle fill="#00724e" r="3.5">
                  <animateMotion dur="3s" path="M 420 195 Q 510 225 560 310" repeatCount="indefinite" />
                </circle>
                <circle fill="#4edea3" r="3">
                  <animateMotion dur="1.2s" path="M 560 310 Q 590 295 625 290" repeatCount="indefinite" />
                </circle>
                <circle fill="#0ea5e9" r="3">
                  <animateMotion dur="1.8s" path="M 625 290 Q 648 245 655 205" repeatCount="indefinite" />
                </circle>
                <circle fill="#0284c7" r="3">
                  <animateMotion dur="2.1s" path="M 625 290 Q 665 340 690 385" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
          </div>

          {/* Floating Satellite Card Left: Average Queue Wait */}
          <div className="hidden lg:flex absolute -left-10 top-28 z-30 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200/90 shadow-lg max-w-xs items-center gap-3.5 animate-float-alt">
            <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center text-sky-700 shrink-0">
              <Activity className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Average Queue Wait</div>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-bold font-headline text-slate-900">3.8s</span>
                <span className="text-xs font-semibold text-emerald-800 bg-emerald-100/70 px-1.5 py-0.5 rounded">
                  -42% vs ind.
                </span>
              </div>
              <svg className="w-24 h-4 mt-1 text-emerald-600" fill="none" viewBox="0 0 100 20" aria-hidden="true">
                <path d="M0 16 L20 14 L40 18 L60 9 L80 12 L100 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
              </svg>
            </div>
          </div>

          {/* Floating Satellite Card Right: WhatsApp Synced */}
          <div className="hidden lg:flex absolute -right-8 top-16 z-30 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-200/90 shadow-lg items-center gap-3 animate-float">
            <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">WhatsApp Synced</div>
              <div className="text-[11px] text-slate-500 font-medium">HubSpot CRM contact updated in 94ms</div>
            </div>
          </div>

          {/* Main Cockpit Window Frame */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden relative z-10">
            
            {/* Top Window Titlebar */}
            <div className="bg-slate-100/90 backdrop-blur-md px-5 py-3 flex items-center justify-between border-b border-slate-200/80">
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
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                  {activeTab === "voice" && "SIP Ready • HD Lossless (Opus)"}
                  {activeTab === "whatsapp" && "Meta Business Cloud • Live 4 Chats"}
                  {activeTab === "dialer" && "Power Dialer Active • 1.8x Rate"}
                  {activeTab === "analytics" && "ASR Whisper Engine • 100% QA"}
                </span>
                <span className="text-xs text-slate-400 font-mono hidden sm:inline">ID: 8820-AGENT</span>
              </div>
            </div>

            {/* Interactive Service Tab Switcher (Fully Interactive Dynamic Tab Switcher) */}
            <div className="bg-slate-50 border-b border-slate-200 px-4 pt-2 flex items-center gap-1 sm:gap-2 overflow-x-auto scrollbar-none">
              <button
                type="button"
                onClick={() => setActiveTab("voice")}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-t-lg text-xs font-semibold transition-colors shrink-0 cursor-pointer ${
                  activeTab === "voice"
                    ? "bg-white border-t-2 border-sky-700 text-sky-800 shadow-2xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <PhoneCall className="w-3.5 h-3.5 text-sky-700" aria-hidden="true" />
                <span>AI Voice &amp; Inbound ACD</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("whatsapp")}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-t-lg text-xs font-semibold transition-colors shrink-0 cursor-pointer ${
                  activeTab === "whatsapp"
                    ? "bg-white border-t-2 border-emerald-600 text-emerald-800 shadow-2xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                <span>WhatsApp &amp; Omnichannel</span>
                <span className="px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-semibold">Live 4</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("dialer")}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-t-lg text-xs font-semibold transition-colors shrink-0 cursor-pointer ${
                  activeTab === "dialer"
                    ? "bg-white border-t-2 border-sky-700 text-sky-800 shadow-2xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <Zap className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
                <span>Sales Dialer &amp; CTI Pop</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("analytics")}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-t-lg text-xs font-semibold transition-colors shrink-0 cursor-pointer ${
                  activeTab === "analytics"
                    ? "bg-white border-t-2 border-sky-700 text-sky-800 shadow-2xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <Activity className="w-3.5 h-3.5 text-sky-700" aria-hidden="true" />
                <span>Real-Time Speech Analytics</span>
              </button>
            </div>

            {/* DYNAMIC WORKSPACE CONTENT BASED ON ACTIVETAB */}
            <div className="p-6 lg:p-7 bg-slate-50/40 min-h-[460px]">
              
              {/* TAB 1: AI VOICE & INBOUND ACD */}
              {activeTab === "voice" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left: Live Inbound Call & Controller (7 Columns) */}
                  <div className="lg:col-span-7 bg-white rounded-xl p-5 lg:p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
                    <div>
                      {/* Caller Identity Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-slate-200 ring-2 ring-slate-100 flex items-center justify-center font-headline font-bold text-slate-700 text-sm">
                            MS
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-headline font-semibold text-base text-slate-900">Marcus Sterling</h3>
                              <span className="text-[11px] font-semibold uppercase px-2 py-0.5 rounded bg-sky-100 text-sky-800">
                                Enterprise VP
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 font-mono">+1 (415) ••• ••41 • CloudCorp Global</p>
                          </div>
                        </div>

                        {/* Active Call Timer + Waveform */}
                        <div className="text-right">
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-red-50 text-red-600 font-mono text-sm font-semibold border border-red-100">
                            <span className={`w-2 h-2 rounded-full bg-red-500 ${isOnHold ? "" : "animate-ping"}`} />
                            {isOnHold ? "ON HOLD" : formatTimer(timerSeconds)}
                          </div>

                          <div className="flex items-center justify-end gap-1 mt-1.5 h-4" title="Live audio activity">
                            <span className="w-1 bg-sky-700 rounded-full audio-wave-bar" style={{ animationDuration: "0.9s", animationDelay: "0.1s" }} />
                            <span className="w-1 bg-sky-700 rounded-full audio-wave-bar" style={{ animationDuration: "1.3s", animationDelay: "0.3s" }} />
                            <span className="w-1 bg-sky-700 rounded-full audio-wave-bar" style={{ animationDuration: "0.7s", animationDelay: "0.2s" }} />
                            <span className="w-1 bg-sky-700 rounded-full audio-wave-bar" style={{ animationDuration: "1.1s", animationDelay: "0.4s" }} />
                            <span className="w-1 bg-sky-700 rounded-full audio-wave-bar" style={{ animationDuration: "0.8s", animationDelay: "0.15s" }} />
                            <span className="text-[10px] text-slate-400 ml-1 font-mono">HD Opus</span>
                            <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-1 py-0.2 rounded border border-emerald-100 font-mono ml-1">
                              SIP 100%
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Live Sentiment & Telemetry Meters */}
                      <div className="mt-5 grid grid-cols-3 gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200/60">
                        <div>
                          <div className="text-[11px] text-slate-500 font-medium">Sentiment</div>
                          <div className="text-xs font-semibold text-emerald-700 flex items-center gap-1 mt-0.5">
                            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                            +94% Positive
                          </div>
                        </div>
                        <div>
                          <div className="text-[11px] text-slate-500 font-medium">Intent Detected</div>
                          <div className="text-xs font-semibold text-slate-800 mt-0.5">Tier 3 Renewal</div>
                        </div>
                        <div>
                          <div className="text-[11px] text-slate-500 font-medium">Audio Latency</div>
                          <div className="text-xs font-semibold text-sky-700 mt-0.5">11ms • 0% Loss</div>
                        </div>
                      </div>

                      {/* Real-Time Speech Transcription */}
                      <div className="mt-4 space-y-2">
                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center justify-between">
                          <span>Live Bi-directional Transcript</span>
                          <span className="text-[10px] text-emerald-800 font-mono font-medium flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            Deepgram Whisper ASR • 42ms
                          </span>
                        </div>
                        <div className="text-xs leading-relaxed p-3 rounded-lg bg-slate-50 text-slate-900 border border-slate-200/60">
                          <span className="font-semibold text-sky-800">Marcus (04:02):</span> &quot;We need to scale our agents in Dublin and Tokyo this Friday. Can we dynamically add 45 SIP seats without restarting the queue?&quot;
                        </div>
                        <div className="text-xs leading-relaxed p-3 rounded-lg bg-sky-50/40 text-slate-700 border border-sky-100">
                          <span className="font-semibold text-slate-900">Agent Sarah (04:08):</span> &quot;Absolutely Marcus, seat provisioning is hot-swapped in real-time with zero downtime.&quot;
                        </div>
                      </div>

                      {/* Copilot Recommendation Inline */}
                      <div className="mt-3.5 p-3 rounded-lg bg-sky-50/60 border border-sky-200/80 flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-md bg-sky-700 text-white flex items-center justify-center shrink-0 mt-0.5">
                          <Sparkles className="w-3 h-3" aria-hidden="true" />
                        </div>
                        <div className="text-xs text-slate-700 leading-relaxed">
                          <span className="font-semibold text-slate-900">Copilot Live Suggestion:</span> Confirm multi-region pooled concurrency discount; suggest bundling APAC recording storage.
                        </div>
                      </div>
                    </div>

                    {/* Interactive Telephony Controls */}
                    <div className="mt-5 space-y-2.5">
                      <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 rounded-lg bg-slate-50 border border-slate-200/80 text-xs">
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => alert("Script template loaded: Tier 3 Renewal Agreement")}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white text-sky-800 hover:bg-slate-100 font-medium border border-slate-200 shadow-2xs transition-colors cursor-pointer"
                          >
                            <span>Insert Script</span>
                            <kbd className="text-[10px] px-1 bg-slate-100 rounded border border-slate-200 text-slate-500 font-mono">⌘K</kbd>
                          </button>
                          <button
                            type="button"
                            onClick={() => alert("Notes pushed to Salesforce & HubSpot in 94ms")}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white text-slate-800 hover:text-sky-800 hover:bg-slate-100 font-medium border border-slate-200 shadow-2xs transition-colors cursor-pointer"
                          >
                            <Zap className="w-3.5 h-3.5 text-blue-600" aria-hidden="true" />
                            <span>CRM Push</span>
                          </button>
                        </div>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-medium border border-emerald-100">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          Supervisor Listening (Silent)
                        </span>
                      </div>

                      <div className="pt-2 flex items-center justify-between bg-slate-100/80 px-4 py-3 rounded-xl border border-slate-200">
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setIsMuted(!isMuted)}
                            className={`p-2.5 rounded-lg border transition-colors shadow-2xs cursor-pointer ${
                              isMuted
                                ? "bg-rose-50 text-rose-700 border-rose-300"
                                : "bg-white text-slate-700 hover:text-sky-800 border-slate-200"
                            }`}
                            title={isMuted ? "Unmute Microphone" : "Mute Microphone"}
                          >
                            {isMuted ? <MicOff className="w-4 h-4 text-rose-600" /> : <Mic className="w-4 h-4" />}
                          </button>
                          <button
                            type="button"
                            onClick={() => setIsOnHold(!isOnHold)}
                            className={`p-2.5 rounded-lg border transition-colors shadow-2xs cursor-pointer ${
                              isOnHold
                                ? "bg-amber-50 text-amber-700 border-amber-300"
                                : "bg-white text-slate-700 hover:text-sky-800 border-slate-200"
                            }`}
                            title={isOnHold ? "Resume Call" : "Hold Call"}
                          >
                            {isOnHold ? <Play className="w-4 h-4 text-amber-600" /> : <Pause className="w-4 h-4" />}
                          </button>
                          <button
                            type="button"
                            onClick={() => alert("Initiating warm transfer to Tier 3 Account Director...")}
                            className="p-2.5 rounded-lg bg-white text-slate-700 hover:text-sky-800 transition-colors border border-slate-200 shadow-2xs cursor-pointer"
                            title="Warm Transfer"
                          >
                            <PhoneForwarded className="w-4 h-4" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => alert("Call ended. Recording and transcript synced to CRM.")}
                          className="px-4 py-2 rounded-lg bg-rose-600 text-white text-xs font-semibold hover:bg-rose-700 transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
                        >
                          <PhoneOff className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>End Call</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right: AI Whisper Suggestion & CRM Dossier (5 Columns) */}
                  <div className="lg:col-span-5 space-y-3.5">
                    <div className="bg-gradient-to-br from-sky-50 via-slate-50 to-slate-50 p-4 rounded-xl border border-sky-200/70 shadow-xs">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-md bg-sky-700 text-white flex items-center justify-center">
                          <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                        </div>
                        <span className="text-xs font-semibold font-headline text-slate-900">AI Real-time Whisper Assist</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Offer the <strong className="text-slate-900">Q3 Multi-Region Expansion Discount</strong> (Contract Tier IV). Marcus&apos;s organization renewed their SOC2 compliance last week.
                      </p>
                      <div className="mt-3 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => alert("Quote inserted into call summary: $4,200/mo")}
                          className="text-[11px] font-semibold bg-white px-2.5 py-1 rounded text-sky-800 hover:bg-sky-50 border border-slate-200 shadow-2xs transition-colors cursor-pointer"
                        >
                          Insert Deal Quote ($4,200/mo)
                        </button>
                        <button
                          type="button"
                          className="text-[11px] text-slate-400 hover:text-slate-700 cursor-pointer"
                        >
                          Dismiss
                        </button>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs space-y-2.5">
                      <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                          <Zap className="w-3.5 h-3.5 text-blue-600" aria-hidden="true" />
                          Salesforce &amp; HubSpot Dossier
                        </span>
                        <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                          Live 94ms
                        </span>
                      </div>
                      <div className="space-y-1.5 text-xs">
                        <div className="flex justify-between py-0.5">
                          <span className="text-slate-500">Contract Value</span>
                          <span className="font-semibold text-slate-900">$148,000 / yr</span>
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
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            0 open (SLA 100%)
                          </span>
                        </div>
                        <div className="flex justify-between py-0.5">
                          <span className="text-slate-500">Account Executive</span>
                          <span className="text-slate-900">David Vance (SF HQ)</span>
                        </div>
                        <div className="flex justify-between py-0.5">
                          <span className="text-slate-500">Satisfaction Index (CSAT)</span>
                          <span className="font-semibold text-emerald-700">4.9 / 5.0 ★</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                      <div className="text-xs font-semibold text-slate-900 mb-2 flex items-center justify-between">
                        <span>Recent Omnichannel Touchpoints</span>
                        <span className="text-[11px] text-sky-700 cursor-pointer hover:underline font-medium">View 34 total</span>
                      </div>
                      <div className="space-y-1.5 text-[11px]">
                        <div className="flex items-center gap-2 text-slate-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span className="font-semibold text-slate-800">Inbound WhatsApp: &quot;Scale SIP trunks&quot;</span>
                          <span className="ml-auto text-[10px]">Today, 09:14 AM</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          <span className="font-semibold text-slate-800">Stripe Invoice #884 Paid ($12.3k)</span>
                          <span className="ml-auto text-[10px]">Yesterday</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                          <span className="font-semibold text-slate-800">Zendesk CSAT Rated 5-Stars</span>
                          <span className="ml-auto text-[10px]">May 12</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: WHATSAPP & OMNICHANNEL CHAT */}
              {activeTab === "whatsapp" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left: WhatsApp Messenger Interface (7 Columns) */}
                  <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200/80 shadow-xs flex flex-col justify-between overflow-hidden">
                    {/* WhatsApp Header */}
                    <div className="p-4 bg-emerald-50/70 border-b border-emerald-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-sm shadow-2xs">
                          ER
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-semibold text-sm text-slate-900">Elena Rostova</span>
                            <span className="text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-1.5 py-0.2 rounded flex items-center gap-0.5">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                              Meta Verified
                            </span>
                          </div>
                          <span className="text-[11px] text-slate-500 font-mono">+44 20 ••• ••89 • VP Operations, FinScale Ltd</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs">
                        <span className="px-2.5 py-1 rounded-full bg-white border border-emerald-200 text-emerald-800 font-medium text-[11px] flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          24h Session Active
                        </span>
                      </div>
                    </div>

                    {/* Chat Messages Log */}
                    <div className="p-4 space-y-3.5 max-h-[280px] overflow-y-auto bg-slate-50/30">
                      {whatsappMessages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex flex-col ${msg.sender === "agent" ? "items-end" : "items-start"}`}
                        >
                          <div className="flex items-center gap-1 text-[10px] text-slate-400 mb-1">
                            <span className="font-medium text-slate-600">{msg.name}</span>
                            <span>• {msg.time}</span>
                          </div>
                          <div
                            className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed shadow-2xs ${
                              msg.sender === "agent"
                                ? "bg-emerald-700 text-white rounded-tr-none"
                                : "bg-white border border-slate-200 text-slate-800 rounded-tl-none"
                            }`}
                          >
                            <p>{msg.text}</p>
                            {msg.attachment && (
                              <div className="mt-2 p-2 rounded-lg bg-emerald-800/80 border border-emerald-600 text-[11px] flex items-center gap-2 text-emerald-50">
                                <FileText className="w-4 h-4 text-emerald-200 shrink-0" />
                                <span className="truncate">{msg.attachment}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* AI Smart Suggestion Pill */}
                    <div className="px-4 py-2 bg-sky-50/80 border-t border-sky-100 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-sky-900">
                        <Sparkles className="w-3.5 h-3.5 text-sky-700 shrink-0" />
                        <span className="text-[11px]">
                          <strong>Copilot Suggestion:</strong> Offer bundled 50k monthly WhatsApp message pack with 20% tier discount.
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setWhatsappInput("We also include 50,000 pooled WhatsApp conversations in our Enterprise plan with zero per-message markup.")}
                        className="text-[10px] font-semibold text-sky-700 hover:text-sky-800 bg-white border border-sky-200 px-2 py-0.5 rounded cursor-pointer shrink-0 ml-2"
                      >
                        Insert Text
                      </button>
                    </div>

                    {/* WhatsApp Message Input Bar */}
                    <form onSubmit={handleSendWhatsapp} className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => alert("Pre-approved Meta Template library opened.")}
                        className="p-2 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors"
                        title="Attach Media / Catalog"
                      >
                        <Paperclip className="w-4 h-4" />
                      </button>
                      <input
                        type="text"
                        value={whatsappInput}
                        onChange={(e) => setWhatsappInput(e.target.value)}
                        placeholder="Type WhatsApp reply or insert approved template..."
                        className="flex-1 text-xs px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-emerald-600"
                      />
                      <button
                        type="submit"
                        className="px-3.5 py-2 rounded-lg bg-emerald-700 text-white text-xs font-semibold hover:bg-emerald-800 transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Send</span>
                      </button>
                    </form>
                  </div>

                  {/* Right: Meta Cloud API Telemetry & CRM Dossier (5 Columns) */}
                  <div className="lg:col-span-5 space-y-3.5">
                    <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                          <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                          Meta Cloud API Telemetry
                        </span>
                        <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-mono">
                          Live 99.99%
                        </span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-slate-500">Phone Number Quality</span>
                          <span className="font-semibold text-emerald-700 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> High (Tier 1)
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Webhook Latency</span>
                          <span className="font-mono font-semibold text-slate-900">48ms to HubSpot</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Session Window</span>
                          <span className="font-mono text-emerald-700 font-semibold">22h 45m Remaining</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Monthly Usage</span>
                          <span className="font-semibold text-slate-900">12,480 / 50,000</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs space-y-2.5">
                      <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                        <span className="text-xs font-semibold text-slate-800">HubSpot Contact Record</span>
                        <span className="text-[10px] font-semibold text-sky-800 bg-sky-50 px-1.5 py-0.2 rounded font-mono">Synced</span>
                      </div>
                      <div className="space-y-1.5 text-xs">
                        <div className="flex justify-between">
                          <span className="text-slate-500">Company</span>
                          <span className="font-semibold text-slate-900">FinScale Global Ltd</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Pipeline Stage</span>
                          <span className="font-semibold text-sky-800 bg-sky-50 px-1.5 py-0.2 rounded text-[11px]">
                            Technical Evaluation
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Deal Value</span>
                          <span className="font-bold text-slate-900">$64,000 / yr</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: SALES DIALER & CTI POP */}
              {activeTab === "dialer" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left: Active Lead Card & Power Dialer Interface (7 Columns) */}
                  <div className="lg:col-span-7 bg-white rounded-xl p-5 lg:p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
                    <div>
                      {/* Campaign Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                        <div>
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-sky-800 bg-sky-50 px-2 py-0.5 rounded">
                            Active Campaign
                          </span>
                          <h3 className="font-headline font-semibold text-base text-slate-900 mt-1">
                            Q4 High-Yield Enterprise Outreach
                          </h3>
                        </div>
                        <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                          Dialer: 1.8x Pacing
                        </span>
                      </div>

                      {/* Current Lead Dossier */}
                      <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-[11px] text-slate-500 font-mono">Lead #48 of 120 in Queue</span>
                            <h4 className="font-headline font-bold text-base text-slate-900">Alexander Vance</h4>
                            <p className="text-xs text-slate-600">Chief Technology Officer • DataVanguard Inc</p>
                          </div>
                          <div className="text-right">
                            <span className="text-xs font-mono font-bold text-sky-800 bg-white border border-slate-200 px-2 py-1 rounded">
                              +1 (650) ••• ••38
                            </span>
                            <span className="text-[10px] text-emerald-700 block mt-1">Local Presence DID Match</span>
                          </div>
                        </div>

                        <div className="mt-3 pt-3 border-t border-slate-200/60 grid grid-cols-3 gap-2 text-xs">
                          <div>
                            <span className="text-[10px] text-slate-400 block">Current Telecom</span>
                            <span className="font-semibold text-slate-800">Legacy Cisco PBX</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-slate-400 block">Seat Requirement</span>
                            <span className="font-semibold text-slate-800">140 Agents</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-slate-400 block">Contract Renewal</span>
                            <span className="font-semibold text-rose-600">30 Days (Urgent)</span>
                          </div>
                        </div>
                      </div>

                      {/* Live Pitch Script Helper */}
                      <div className="mt-3.5 p-3 rounded-lg bg-sky-50/60 border border-sky-200 text-xs text-slate-700">
                        <span className="font-semibold text-sky-900 block mb-1">Dynamic Pitch Cue:</span>
                        &quot;Hi Alexander, I noticed DataVanguard is evaluating cloud telephony before your Cisco contract renews this month. We can cut your PBX maintenance by 60% with zero downtime migration...&quot;
                      </div>
                    </div>

                    {/* 1-Click Call Dispositions & Actions */}
                    <div className="mt-5 space-y-3">
                      <div className="text-xs font-semibold text-slate-700">Log Call Disposition &amp; Auto-Advance:</div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        <button
                          type="button"
                          onClick={() => { setSelectedDisposition("demo"); alert("Outcome logged: Demo Booked. Next lead dialed in 3s."); }}
                          className={`p-2.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                            selectedDisposition === "demo"
                              ? "bg-emerald-700 text-white border-emerald-700"
                              : "bg-white text-emerald-800 border-emerald-200 hover:bg-emerald-50"
                          }`}
                        >
                          ✓ Demo Booked
                        </button>
                        <button
                          type="button"
                          onClick={() => { setSelectedDisposition("callback"); alert("Callback scheduled for tomorrow 2:00 PM."); }}
                          className={`p-2.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                            selectedDisposition === "callback"
                              ? "bg-sky-700 text-white border-sky-700"
                              : "bg-white text-sky-800 border-sky-200 hover:bg-sky-50"
                          }`}
                        >
                          Callback Requested
                        </button>
                        <button
                          type="button"
                          onClick={() => { setSelectedDisposition("vm"); alert("HD Voicemail dropped automatically. Moving to next lead."); }}
                          className={`p-2.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                            selectedDisposition === "vm"
                              ? "bg-amber-600 text-white border-amber-600"
                              : "bg-white text-amber-800 border-amber-200 hover:bg-amber-50"
                          }`}
                        >
                          Drop Voicemail
                        </button>
                        <button
                          type="button"
                          onClick={() => { setSelectedDisposition("skip"); alert("Lead skipped. Dialing next..."); }}
                          className="p-2.5 rounded-lg border text-xs font-semibold bg-white text-slate-700 border-slate-200 hover:bg-slate-100 transition-colors cursor-pointer"
                        >
                          Skip / Busy
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right: Dialer Performance Velocity & Queue (5 Columns) */}
                  <div className="lg:col-span-5 space-y-3.5">
                    <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                          Dialer Session Metrics
                        </span>
                        <span className="text-[10px] font-semibold text-sky-800 bg-sky-50 px-2 py-0.5 rounded font-mono">
                          Live Shift
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-center">
                        <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                          <span className="text-[10px] text-slate-400 uppercase font-semibold">Calls Dialed</span>
                          <p className="text-lg font-bold text-slate-900 mt-0.5">64</p>
                        </div>
                        <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-100">
                          <span className="text-[10px] text-emerald-700 uppercase font-semibold">Connect Rate</span>
                          <p className="text-lg font-bold text-emerald-800 mt-0.5">39.2%</p>
                        </div>
                      </div>

                      <div className="space-y-1.5 text-xs text-slate-600 pt-1">
                        <div className="flex justify-between">
                          <span>Average Talk Time</span>
                          <span className="font-semibold text-slate-900 font-mono">3m 42s</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Demos Booked Today</span>
                          <span className="font-semibold text-emerald-700">6 Demos</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Auto-Logged to CRM</span>
                          <span className="font-semibold text-sky-800">100% Synced</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                      <span className="text-xs font-semibold text-slate-900 mb-2 block">Next In Dialing Queue</span>
                      <div className="space-y-2 text-xs">
                        <div className="p-2 rounded-lg bg-slate-50 flex items-center justify-between">
                          <div>
                            <span className="font-semibold text-slate-800 block">Priya Sharma</span>
                            <span className="text-[10px] text-slate-500">VP CX · RetailPulse</span>
                          </div>
                          <span className="text-[10px] text-sky-700 font-mono font-semibold">Queue #49</span>
                        </div>
                        <div className="p-2 rounded-lg bg-slate-50 flex items-center justify-between">
                          <div>
                            <span className="font-semibold text-slate-800 block">Michael Chen</span>
                            <span className="text-[10px] text-slate-500">Dir IT · BioHealth APAC</span>
                          </div>
                          <span className="text-[10px] text-slate-500 font-mono">Queue #50</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: REAL-TIME SPEECH ANALYTICS */}
              {activeTab === "analytics" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left: Live Floor Stream & Conversation Intelligence (7 Columns) */}
                  <div className="lg:col-span-7 bg-white rounded-xl p-5 lg:p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
                    <div>
                      {/* Floor Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <Activity className="w-5 h-5 text-sky-700" />
                          <h3 className="font-headline font-semibold text-base text-slate-900">
                            Live Floor Speech Intelligence
                          </h3>
                        </div>
                        <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                          28 Active Calls Monitored
                        </span>
                      </div>

                      {/* Talk-to-Listen Ratio Visualizer */}
                      <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                        <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-2">
                          <span>Talk-to-Listen Ratio (Optimal Empathy Zone)</span>
                          <span className="text-emerald-700 font-mono">Ideal Balance</span>
                        </div>
                        <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden flex">
                          <div className="bg-sky-700 h-full" style={{ width: "38%" }} title="Customer Speaking 38%" />
                          <div className="bg-emerald-600 h-full" style={{ width: "62%" }} title="Agent Speaking 62%" />
                        </div>
                        <div className="flex justify-between text-[11px] text-slate-500 mt-1.5 font-mono">
                          <span>Caller Talk: 38%</span>
                          <span>Agent Talk: 62%</span>
                        </div>
                      </div>

                      {/* Real-time Keyword Triggers Cloud */}
                      <div className="mt-4 space-y-2">
                        <span className="text-xs font-semibold text-slate-700 block">
                          Real-Time Keyword &amp; Compliance Detection:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200 flex items-center gap-1">
                            <Check className="w-3.5 h-3.5" /> &quot;SLA 99.999%&quot; (Detected 02:14)
                          </span>
                          <span className="px-2.5 py-1 rounded-lg bg-sky-50 text-sky-800 text-xs font-semibold border border-sky-200 flex items-center gap-1">
                            <Check className="w-3.5 h-3.5" /> &quot;SOC2 Type II&quot; (Detected 03:02)
                          </span>
                          <span className="px-2.5 py-1 rounded-lg bg-amber-50 text-amber-800 text-xs font-semibold border border-amber-200 flex items-center gap-1">
                            <Sparkles className="w-3.5 h-3.5" /> &quot;Competitor: Avaya&quot; (Alert: Win Strategy)
                          </span>
                          <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
                            &quot;Multi-Region SIP&quot;
                          </span>
                        </div>
                      </div>

                      {/* Live Supervisor Coaching Flag */}
                      <div className="mt-4 p-3 rounded-lg bg-emerald-50/70 border border-emerald-200 flex items-start gap-2.5 text-xs text-emerald-900">
                        <ThumbsUp className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-emerald-950">AI Supervisor Evaluation:</strong> Agent handled multi-region capacity question with 100% technical accuracy. Deal win probability increased to 85%.
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span>ASR Engine: Deepgram Whisper Nova-2</span>
                      <span className="font-mono text-emerald-700 font-semibold">Accuracy: 99.4%</span>
                    </div>
                  </div>

                  {/* Right: Automated QA Scorecard & CSAT Predictor (5 Columns) */}
                  <div className="lg:col-span-5 space-y-3.5">
                    <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                          Automated QA Scorecard
                        </span>
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-mono">
                          Score: 96 / 100
                        </span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-600">Recording Consent Disclosed</span>
                          <span className="text-emerald-700 font-semibold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-600">Identity &amp; Account Verified</span>
                          <span className="text-emerald-700 font-semibold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Passed
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-600">Product Script Adherence</span>
                          <span className="text-emerald-700 font-semibold font-mono">100%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-600">Sentiment Trajectory</span>
                          <span className="text-emerald-700 font-semibold">Positive (+94%)</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs space-y-2">
                      <span className="text-xs font-semibold text-slate-800 block">Predicted CSAT Outcome</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold font-headline text-emerald-700">4.9 / 5.0</span>
                        <span className="text-xs text-slate-500 font-medium">★ High Promoter</span>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        Predicted customer satisfaction based on speech acoustics, sentiment arc, and first-contact resolution likelihood.
                      </p>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Integration Ribbon Bottom Strip */}
            <div className="bg-slate-50 border-t border-slate-200/80 px-6 py-3 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
              <span className="font-medium text-slate-600">Zero-latency sync with your stack:</span>
              <div className="flex items-center gap-5 sm:gap-7 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                <SalesforceLogo className="h-4 w-auto" />
                <HubSpotLogo className="h-4 w-auto" />
                <ZohoLogo className="h-4 w-auto" />
                <ZendeskLogo className="h-4 w-auto" />
                <WhatsAppLogo className="h-4 w-auto" />
                <FreshdeskLogo className="h-4 w-auto" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
