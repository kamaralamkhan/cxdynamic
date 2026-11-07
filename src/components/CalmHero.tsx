"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  ExternalLink,
  Headphones,
  MessageCircle,
  MessageSquare,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";

interface CalmHeroProps {
  onOpenDemo: () => void;
}

const journey = [
  { id: "voice", label: "Voice", detail: "A customer reaches the team by phone.", Icon: PhoneCall },
  { id: "whatsapp", label: "WhatsApp", detail: "The same context continues in WhatsApp.", Icon: MessageCircle },
  { id: "chat", label: "Web chat", detail: "Intent is captured without starting over.", Icon: MessageSquare },
  { id: "ai", label: "AI agent", detail: "AI understands the request and proposes the next action.", Icon: Bot },
  { id: "human", label: "Human copilot", detail: "A specialist joins with the full conversation attached.", Icon: Headphones },
  { id: "qa", label: "Quality review", detail: "The outcome is checked against policy and intent.", Icon: ShieldCheck },
  { id: "analytics", label: "Analytics", detail: "The journey becomes an insight the team can use.", Icon: BarChart3 },
] as const;

export default function CalmHero({ onOpenDemo }: CalmHeroProps) {
  const [activeId, setActiveId] = useState<(typeof journey)[number]["id"]>("ai");
  const active = journey.find((item) => item.id === activeId) ?? journey[3];
  const moveJourney = (currentId: (typeof journey)[number]["id"], direction: 1 | -1) => {
    const currentIndex = journey.findIndex((item) => item.id === currentId);
    const nextIndex = (currentIndex + direction + journey.length) % journey.length;
    setActiveId(journey[nextIndex].id);
  };

  return (
    <section id="home" className="relative isolate w-full max-w-full overflow-x-clip border-b border-slate-200 bg-[#f8fbfd]">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70" aria-hidden="true">
        <svg className="h-full w-full" viewBox="0 0 1440 920" fill="none" preserveAspectRatio="none">
          <path d="M-40 260C190 180 200 430 420 360S720 120 920 260s270 30 560-120" stroke="#d8eef7" strokeWidth="2" />
          <path d="M-40 700c200-110 320 120 520 24s240-250 440-164 280 50 560-116" stroke="#dcefe8" strokeWidth="2" />
          <path d="M-40 276c180-65 232 70 390 34" stroke="#069bd8" strokeOpacity=".18" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-4 pb-14 pt-14 sm:px-6 lg:px-10 lg:pb-20 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,.88fr)_minmax(0,1.12fr)] lg:gap-16">
          <div className="min-w-0 max-w-2xl">
            <h1 className="w-full max-w-[calc(100vw-2rem)] break-words [overflow-wrap:anywhere] [text-wrap:wrap] font-display text-[clamp(1.85rem,8vw,5.35rem)] font-extrabold leading-[.98] tracking-[-.055em] text-[#071936] sm:max-w-full sm:text-[clamp(2.7rem,5.2vw,5.35rem)]">
              One AI customer experience layer.
              <span className="mt-2 block text-[#069bd8]">Every channel. Every conversation.</span>
            </h1>
            <p className="mt-7 max-w-full [text-wrap:wrap] text-base leading-7 text-slate-600 sm:max-w-xl sm:text-lg">
              Keep customer context moving across AI agents, people, quality, and analytics—so every interaction can become the next best action.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={onOpenDemo} className="btn-primary btn-tactile inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 text-sm">
                Book a demo <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <a href="https://cxq360.ai/" target="_blank" rel="noopener noreferrer" className="btn-secondary btn-tactile inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 text-sm">
                Explore CXQ360.ai <ExternalLink className="h-4 w-4 text-sky-700" aria-hidden="true" />
              </a>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.12em] text-slate-500">
              <span className="h-2 w-2 rounded-full bg-[#a8d23a]" aria-hidden="true" />
              Illustrative workflow
            </div>
          </div>

          <div className="relative min-w-0 min-h-[430px] lg:min-h-[520px]">
            <div className="absolute left-0 top-1/2 hidden h-px w-full -translate-y-1/2 bg-sky-100 sm:block" aria-hidden="true" />
            <div role="tablist" aria-label="Connected CX journey" className="relative grid gap-3 sm:grid-cols-2 lg:absolute lg:inset-0 lg:grid-cols-4 lg:gap-5">
              {journey.map(({ id, label, Icon }, index) => {
                const selected = activeId === id;
                const position = index < 4
                  ? index === 0
                    ? "lg:left-0 lg:top-[12%]"
                    : index === 1
                      ? "lg:left-[24%] lg:top-[57%]"
                      : index === 2
                        ? "lg:left-[48%] lg:top-[12%]"
                        : "lg:left-[72%] lg:top-[57%]"
                  : index === 4
                    ? "lg:right-[2%] lg:top-[8%]"
                    : index === 5
                      ? "lg:right-[2%] lg:top-[39%]"
                      : "lg:right-[2%] lg:top-[70%]";
                return (
                  <button
                    key={id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls={`journey-panel-${id}`}
                    tabIndex={selected ? 0 : -1}
                    onKeyDown={(event) => {
                      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                        event.preventDefault();
                        moveJourney(id, 1);
                      }
                      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                        event.preventDefault();
                        moveJourney(id, -1);
                      }
                    }}
                    onClick={() => setActiveId(id)}
                    className={`group relative flex min-h-24 items-center gap-3 rounded-2xl border bg-white/95 p-4 text-left shadow-[0_12px_36px_-28px_rgba(8,56,87,.55)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#069bd8] focus-visible:ring-offset-2 sm:min-h-28 lg:absolute lg:w-[190px] ${position} ${selected ? "border-[#069bd8] ring-4 ring-[#069bd8]/10" : "border-slate-200 hover:border-sky-300"}`}
                  >
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border ${selected ? "border-[#a8d23a] bg-[#f3fbdc] text-[#426000]" : "border-slate-200 bg-slate-50 text-sky-700"}`}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-[#071936]">{label}</span>
                      <span className="mt-1 block text-[11px] leading-4 text-slate-500">{selected ? "Current signal" : "Context continues"}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="relative mt-5 rounded-2xl border border-slate-200 bg-[#071936] p-5 text-white shadow-[0_22px_70px_-40px_rgba(7,25,54,.75)] sm:absolute sm:bottom-0 sm:left-0 sm:mt-0 sm:max-w-[420px]">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[.14em] text-cyan-200">{active.label}</p>
                <CheckCircle2 className="h-4 w-4 text-[#a8d23a]" aria-hidden="true" />
              </div>
              <p id={`journey-panel-${active.id}`} role="tabpanel" aria-live="polite" className="mt-3 text-sm leading-6 text-slate-200">{active.detail}</p>
              <Link href="#agentic-ai" className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-200 hover:text-white">
                See the journey <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 overflow-x-auto border-y border-slate-200 py-5 [scrollbar-width:thin]">
          <div className="flex min-w-max items-center gap-8 text-sm font-semibold text-slate-600">
            <span className="text-[#071936]">The connected CX layer</span>
            <span className="h-px w-14 bg-sky-200" aria-hidden="true" />
            <span>Voice</span><span>WhatsApp</span><span>Web chat</span><span>SMS</span><span>Email</span><span>Messenger</span><span>Viber</span>
          </div>
        </div>
      </div>
    </section>
  );
}
