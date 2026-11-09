"use client";


import { GitBranch, FileText, Zap, Sparkles, MessageSquare, BarChart3 } from "lucide-react";

export default function StitchBentoGrid() {
  return (
    <section className="w-full bg-slate-50/60 py-20 lg:py-28 border-b border-slate-200" id="platform-capabilities">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="mt-2.5 font-headline font-semibold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight leading-snug">
            Everything your modern revenue &amp; support teams need to conquer call volume.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl font-normal leading-relaxed">
            Built for scale, speed, and absolute clarity. CXDYNAMIQ eliminates PBX spaghetti and empowers every rep with context.
          </p>
        </div>

        {/* Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Bento Card 1: 2-Columns Wide - Intelligent ACD & Multi-Level IVR */}
          <div className="lg:col-span-2 bg-white p-5 sm:p-8 rounded-2xl shadow-sm border border-slate-200/90 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-700 mb-6">
                <GitBranch className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="flex items-center gap-2">
                <h3 className="font-headline font-semibold text-lg text-slate-900">Intelligent ACD &amp; Multi-Level IVR</h3>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-sky-100 text-sky-800">Visual Flow</span>
              </div>
              <p className="mt-2 text-sm text-slate-600 max-w-xl leading-relaxed">
                Intuitive drag-and-drop call tree routing with natural language intent recognition, skill-based rep matching, and dynamic fallback rules.
              </p>
            </div>

            {/* Interactive Call Tree UI Schema Mockup */}
            <div className="mt-8 bg-slate-50 p-5 rounded-xl border border-slate-200/80">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-4 flex items-center justify-between">
                <span>Live Visual Flow Builder</span>
                <span className="text-emerald-700 font-mono text-[10px]">Active Node: SkillMatch</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center relative">
                <div className="p-3.5 rounded-lg bg-white shadow-2xs border border-slate-200 text-center">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Trigger 01</div>
                  <div className="text-xs font-bold text-slate-900 mt-1">Inbound Voice / SIP</div>
                  <div className="text-[10px] text-slate-500 mt-1 font-mono">Caller ID: +1 415-xxx</div>
                </div>
                <div className="p-3.5 rounded-lg bg-sky-700 text-white shadow-sm text-center">
                  <div className="text-[10px] uppercase font-bold text-sky-200">AI Intent Router</div>
                  <div className="text-xs font-bold mt-1">“Renew Enterprise”</div>
                  <div className="text-[10px] text-white/80 mt-1">Confidence 98.4%</div>
                </div>
                <div className="p-3.5 rounded-lg bg-white shadow-2xs border border-slate-200 text-center">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Target Destination</div>
                  <div className="text-xs font-bold text-slate-900 mt-1">Tier-3 Sales Team</div>
                  <div className="text-[10px] text-emerald-700 mt-1 font-semibold">&lt;4s Queue Time</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Real-Time CTI Screen-Pop */}
          <div className="bg-white p-5 sm:p-8 rounded-2xl shadow-sm border border-slate-200/90 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-700 mb-6">
                <FileText className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-headline font-semibold text-lg text-slate-900">Sub-120ms CTI Screen-Pop</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Match incoming calls against Salesforce, Zendesk, or HubSpot before the rep answers. Zero awkward identity confirmations.
              </p>
            </div>
            <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
                <span className="text-xs font-bold text-slate-900">Instant Dossier Synced</span>
              </div>
              <p className="text-xs text-slate-600">Account: Horizon Financial Ltd</p>
              <div className="text-[10px] text-slate-400 font-mono">Latency: 98ms • Cache hit: 100%</div>
            </div>
          </div>

          {/* Bento Card 3: Automated Sales & Power Dialer */}
          <div className="bg-white p-5 sm:p-8 rounded-2xl shadow-sm border border-slate-200/90 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-700 mb-6">
                <Zap className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-headline font-semibold text-lg text-slate-900">Automated Power Dialer</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Triple outbound rep velocity with predictive dialing, 1-click voicemail drops, and local presence caller IDs.
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-semibold text-slate-800">Rep Velocity Boost</div>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                +210% Calls/Day
              </span>
            </div>
          </div>

          {/* Bento Card 4: AI Whisper & Live Coaching */}
          <div className="bg-white p-5 sm:p-8 rounded-2xl shadow-sm border border-slate-200/90 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-700 mb-6">
                <Sparkles className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-headline font-semibold text-lg text-slate-900">AI Whisper &amp; Sentiment</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                In-call agent copilot offering compliance verification, live objection handling hints, and instant escalation cues.
              </p>
            </div>
            <div className="mt-6 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              <span>Real-time voice acoustics scan active</span>
            </div>
          </div>

          {/* Bento Card 5: Omnichannel CX Hub */}
          <div className="bg-white p-5 sm:p-8 rounded-2xl shadow-sm border border-slate-200/90 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-700 mb-6">
                <MessageSquare className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-headline font-semibold text-lg text-slate-900">Omnichannel CX Hub</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Combine Voice, SMS, WhatsApp Business, and Web Chat in a unified collaborative inbox with shared customer threads.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 font-medium border border-slate-200">Voice</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 font-medium border border-slate-200">WhatsApp</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 font-medium border border-slate-200">SMS</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 font-medium border border-slate-200">Email</span>
            </div>
          </div>

          {/* Bento Card 6: Enterprise Analytics & Lossless Recording */}
          <div className="bg-white p-5 sm:p-8 rounded-2xl shadow-sm border border-slate-200/90 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-700 mb-6">
                <BarChart3 className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-headline font-semibold text-lg text-slate-900">Enterprise Analytics</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Dual-channel lossless audio recordings, automated AI call summaries, and customizable real-time supervisor wallboards.
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
              <span>Auto SOC2 Archival</span>
              <span className="font-semibold text-sky-700 font-mono">100% Lossless Opus</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

