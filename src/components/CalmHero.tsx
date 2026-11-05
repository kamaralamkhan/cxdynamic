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
  UserCheck 
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

type TabType = "voice" | "whatsapp" | "ai";

interface FlowStep {
  title: string;
  desc: string;
  icon: typeof PhoneCall;
}

const FLOW_DATA: Record<TabType, { label: string; steps: FlowStep[] }> = {
  voice: {
    label: "Voice",
    steps: [
      {
        title: "Customer calls · Priya S. (+91 98••• ••210)",
        desc: "The call reaches your cloud number, no hardware on site.",
        icon: PhoneCall,
      },
      {
        title: "Routed to the right agent",
        desc: "IVR and ACD match the caller to the right skill and language.",
        icon: Shuffle,
      },
      {
        title: "Agent sees full context",
        desc: "CRM screen-pop shows caller profile before they answer.",
        icon: Headphones,
      },
    ],
  },
  whatsapp: {
    label: "WhatsApp",
    steps: [
      {
        title: "Customer sends a WhatsApp message",
        desc: "Incoming message is queued with verified customer history.",
        icon: MessageSquare,
      },
      {
        title: "AI assistant or agent responds",
        desc: "Automated quick replies or instant routing to a live agent.",
        icon: Workflow,
      },
      {
        title: "Ticket synced to CRM",
        desc: "Conversation logged in Salesforce or Zoho automatically.",
        icon: CheckCircle2,
      },
    ],
  },
  ai: {
    label: "AI assistant",
    steps: [
      {
        title: "Customer asks an inquiry",
        desc: "Virtual agent parses intent and questions in real time.",
        icon: Bot,
      },
      {
        title: "Autonomous self-service",
        desc: "Answers common questions and verifies account status via API.",
        icon: CheckCircle2,
      },
      {
        title: "Smart agent escalation",
        desc: "Transfers to a human specialist with full context if needed.",
        icon: UserCheck,
      },
    ],
  },
};

export default function CalmHero({ onOpenDemo }: CalmHeroProps) {
  const [activeTab, setActiveTab] = useState<TabType>("voice");
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance the 3 steps every 3s (pauses when hovered/focused; static for reduced motion)
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused, activeTab]);

  const currentFlow = FLOW_DATA[activeTab];

  return (
    <section id="home" className="relative bg-white overflow-hidden">
      {/* Soft sky-50 radial glow top-right */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-0 right-0 w-[500px] h-[400px] bg-gradient-to-bl from-sky-50 via-sky-50/40 to-transparent rounded-full blur-3xl -z-10" 
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24">
        
        {/* Left Column (6 cols): 7 Elements Above The Fold */}
        <div className="lg:col-span-6">
          
          {/* 1. Eyebrow */}
          <p className="inline-flex items-center gap-2 text-sm font-medium text-slate-600">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>AI-powered cloud contact center</span>
          </p>

          {/* 2. H1 Headline (max 2 lines at 1280px, weight 600, single color slate-900 with sky-700 accent) */}
          <h1 className="mt-5 text-balance text-[40px] font-semibold leading-[1.08] tracking-[-0.025em] text-slate-900 sm:text-5xl lg:text-[52px] xl:text-[56px]">
            Resolve customer inquiries <span className="text-sky-700">in real time.</span>
          </h1>

          {/* 3. Sub-headline (<= 22 words, 18px, slate-600, max 34rem) */}
          <p className="mt-5 max-w-[34rem] text-lg leading-7 text-slate-600 font-normal">
            One cloud platform for voice, WhatsApp and digital channels, with AI that helps your agents resolve more, faster.
          </p>

          {/* 4 & 5. Action Buttons (Primary Trial on CXQ360.ai + Secondary Book a Demo + Anchor) */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href="https://cxq360.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold bg-sky-700 text-white hover:bg-sky-800 shadow-sm transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>Experience CXdynamIQ Free</span>
              <span aria-hidden="true">→</span>
            </a>

            <Link
              href="/contact-us#quote"
              className="btn-tactile inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 shadow-2xs transition-colors cursor-pointer whitespace-nowrap"
            >
              Book a Demo
            </Link>

            <a
              href="#agentic-ai"
              className="text-xs sm:text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors ml-1"
            >
              See how it works ↓
            </a>
          </div>

          {/* 6. Proof Line (One single line, text-sm text-slate-500) */}
          <p className="mt-6 text-sm text-slate-500">
            Go live in a day · Native CRM integrations · 21-day trial on CXQ360.ai
          </p>

        </div>

        {/* Right Column (6 cols): 7. CallFlowCard Visual (Clean, 3 Rows, 2px sky-600 left bar) */}
        <div 
          className="lg:col-span-6 w-full max-w-lg mx-auto lg:max-w-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
            
            {/* Header: Segmented Control Tabs (Voice | WhatsApp | AI assistant) + Sample Data Label */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="inline-flex p-1 bg-slate-100 rounded-lg text-xs font-semibold gap-1">
                {(["voice", "whatsapp", "ai"] as TabType[]).map((tabKey) => {
                  const isCurrent = activeTab === tabKey;
                  return (
                    <button
                      key={tabKey}
                      onClick={() => {
                        setActiveTab(tabKey);
                        setActiveStep(0);
                      }}
                      className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer text-xs font-medium ${
                        isCurrent
                          ? "bg-white text-slate-900 shadow-2xs font-semibold"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {FLOW_DATA[tabKey].label}
                    </button>
                  );
                })}
              </div>

              <span className="text-xs text-slate-500">
                Sample data
              </span>
            </div>

            {/* 3 Rows: 36px Icon Circle + Title + One Line (<= 70 characters) */}
            <div className="space-y-2">
              {currentFlow.steps.map((step, idx) => {
                const Icon = step.icon;
                const isCurrent = activeStep === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className={`w-full text-left p-3.5 rounded-xl transition-colors cursor-pointer flex items-center gap-3.5 ${
                      isCurrent
                        ? "bg-slate-50 border-l-2 border-sky-600"
                        : "bg-white hover:bg-slate-50/70 border-l-2 border-transparent"
                    }`}
                  >
                    <div className="w-9 h-9 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-slate-700" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h4 className="text-[15px] font-semibold text-slate-900 truncate">
                        {step.title}
                      </h4>
                      <p className="text-sm text-slate-600 truncate mt-0.5">
                        {step.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>
        </div>

      </div>

      {/* LogoStrip: Separate row below "Works with" + 5 greyscale logos (24px high) */}
      <div className="border-t border-slate-100 py-8 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
            Works with
          </span>
          <div className="flex items-center flex-wrap justify-center gap-8 sm:gap-12 grayscale opacity-75 hover:opacity-100 hover:grayscale-0 transition-all">
            <Link href="/salesforce" className="flex items-center gap-2">
              <SalesforceLogo className="h-6 w-auto" />
              <span className="text-sm font-semibold text-slate-700">Salesforce</span>
            </Link>
            <Link href="/zoho" className="flex items-center gap-2">
              <ZohoLogo className="h-6 w-auto" />
              <span className="text-sm font-semibold text-slate-700">Zoho CRM</span>
            </Link>
            <Link href="/zendesk" className="flex items-center gap-2">
              <ZendeskLogo className="h-6 w-auto" />
              <span className="text-sm font-semibold text-slate-700">Zendesk</span>
            </Link>
            <Link href="/whatsapp-business" className="flex items-center gap-2">
              <WhatsAppLogo className="h-6 w-auto" />
              <span className="text-sm font-semibold text-slate-700">WhatsApp</span>
            </Link>
            <Link href="/freshdesk" className="flex items-center gap-2">
              <FreshdeskLogo className="h-6 w-auto" />
              <span className="text-sm font-semibold text-slate-700">Freshdesk</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
