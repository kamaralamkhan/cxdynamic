"use client";

import Link from "next/link";
import { 
  Headphones, 
  PhoneCall, 
  Zap, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Activity,
  Mic,
  Clock,
  Users
} from "lucide-react";

export default function StitchPillarsSection() {
  return (
    <section className="w-full py-20 lg:py-28 max-w-7xl mx-auto px-6 lg:px-12 space-y-28 bg-white" id="products">
      
      {/* Section Heading Intro */}
      <div className="max-w-2xl">
        <span className="text-xs font-semibold text-sky-800 font-headline uppercase tracking-wider">
          Enterprise Cloud Voice
        </span>
        <h2 className="font-headline font-semibold text-2xl sm:text-3xl lg:text-[34px] text-slate-900 mt-2 tracking-tight leading-snug">
          Engineered for speed, built for <span className="text-sky-700">flawless operations</span>.
        </h2>
        <p className="text-sm sm:text-base text-slate-600 mt-2.5 max-w-2xl font-normal leading-relaxed">
          Replace four disconnected tools with one coherent infrastructure designed for agents, supervisors, and operations teams.
        </p>
      </div>

      {/* Pillar 1: Call Centre Solution */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-700">
            <Headphones className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <span className="text-xs font-semibold text-sky-700 uppercase tracking-wider">Pillar 01</span>
            <h3 className="font-headline font-semibold text-2xl sm:text-3xl text-slate-900 mt-1">
              Call Centre Solution
            </h3>
          </div>
          <p className="text-base text-slate-600 leading-relaxed">
            Transform high-volume communication into effortless resolution. Route every caller to the right agent instantly with smart ACD rules, zero audio jitter, and live whisper coaching.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
              <span>Intelligent skill-based inbound routing with flexible overflow queuing.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
              <span>Live supervisor barge-in, silent listening, and private agent whispering.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
              <span>Instant Computer Telephony Integration (CTI) screen pops in under 300ms.</span>
            </li>
          </ul>
          <div className="pt-2">
            <Link
              href="/inbound-calling"
              className="inline-flex items-center text-sm font-semibold text-sky-700 hover:text-sky-800 group"
            >
              <span>Learn more about Call Centre Solution</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Pillar 1 UI Mockup: Inbound Queue & IVR Dashboard */}
        <div className="lg:col-span-6">
          <div className="rounded-2xl bg-slate-50 p-6 shadow-sm border border-slate-200/90 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-xs font-semibold text-slate-800">Inbound Queue &amp; Routing Controller</span>
              <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" /> 99.99% Availability
              </span>
            </div>
            
            {/* Live Queue Cards */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <span className="text-[11px] text-slate-500 font-medium">Calls in Queue</span>
                <p className="font-headline font-bold text-xl text-slate-900 mt-0.5">7</p>
                <span className="text-[10px] text-emerald-700">Optimal balance</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <span className="text-[11px] text-slate-500 font-medium">Avg Answer Speed</span>
                <p className="font-headline font-bold text-xl text-sky-700 mt-0.5">8s</p>
                <span className="text-[10px] text-slate-500">Carrier SIP direct</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <span className="text-[11px] text-slate-500 font-medium">Agents Active</span>
                <p className="font-headline font-bold text-xl text-slate-900 mt-0.5">24/28</p>
                <span className="text-[10px] text-slate-500">85% occupancy</span>
              </div>
            </div>

            {/* Simulated Live Queue Item */}
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-800">Priority Tier-1 Queue</span>
                <span className="text-sky-700 font-mono text-[11px]">Connecting...</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-800 font-bold text-xs flex items-center justify-center">
                  DL
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-slate-800">David L. · TechCorp Asia</p>
                  <p className="text-slate-500">+1 (415) ••• ••89 · Matched to Account #3821</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pillar 2: Business Phone System (Reversed Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Pillar 2 UI Mockup (Left on Desktop) */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="rounded-2xl bg-slate-50 p-6 shadow-sm border border-slate-200/90 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-xs font-semibold text-slate-800">CXDYNAMIQ Softphone · Desktop &amp; Web</span>
              <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" /> Ready for Calls
              </span>
            </div>

            {/* Team Presence Directory */}
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
                  <span className="font-semibold text-slate-800">Sarah Lin</span>
                  <span className="text-slate-400">· Tier-1 Support</span>
                </div>
                <span className="text-emerald-700 font-medium">Available</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-sky-500" aria-hidden="true" />
                  <span className="font-semibold text-slate-800">David Miller</span>
                  <span className="text-slate-400">· Enterprise Sales</span>
                </div>
                <span className="text-sky-700 font-medium">On Call (04:12)</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400" aria-hidden="true" />
                  <span className="font-semibold text-slate-800">Marcus Sterling</span>
                  <span className="text-slate-400">· Account Manager</span>
                </div>
                <span className="text-amber-700 font-medium">Wrap-up</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-between text-xs">
              <span className="text-sky-900 font-medium">Auto-Attendant &amp; IVR Fallback Active</span>
              <span className="text-sky-700 font-semibold">24/7 Schedule</span>
            </div>
          </div>
        </div>

        {/* Text Column (Right on Desktop) */}
        <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
          <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-700">
            <PhoneCall className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <span className="text-xs font-semibold text-sky-700 uppercase tracking-wider">Pillar 02</span>
            <h3 className="font-headline font-semibold text-2xl sm:text-3xl text-slate-900 mt-1">
              Business Phone System
            </h3>
          </div>
          <p className="text-base text-slate-600 leading-relaxed">
            Carrier-grade corporate telephony built for hybrid teams. Get international numbers, direct inward dialing (DID), smart call forwarding, and desktop softphones without touching a wire.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
              <span>Multi-device WebRTC softphone on Windows, Mac, iOS, and Android.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
              <span>Drag-and-drop visual IVR &amp; auto-attendant menu builder.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
              <span>Dedicated local and toll-free numbers in 100+ countries.</span>
            </li>
          </ul>
          <div className="pt-2">
            <Link
              href="/auto-attendant"
              className="inline-flex items-center text-sm font-semibold text-sky-700 hover:text-sky-800 group"
            >
              <span>Explore Business Phone System</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Pillar 3: Sales Dialer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-700">
            <Zap className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <span className="text-xs font-semibold text-sky-700 uppercase tracking-wider">Pillar 03</span>
            <h3 className="font-headline font-semibold text-2xl sm:text-3xl text-slate-900 mt-1">
              Sales Dialer
            </h3>
          </div>
          <p className="text-base text-slate-600 leading-relaxed">
            Multiply rep conversations, not manual clicks. Power and predictive dialers connect reps strictly when a live prospect answers, completely filtering answering machines and disconnected numbers.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
              <span>Predictive, Power, Preview, and 1-Click Click-to-Call modes.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
              <span>99.2% accurate Answering Machine Detection (AMD).</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
              <span>Automated voicemail drop and custom CRM outreach cadences.</span>
            </li>
          </ul>
          <div className="pt-2">
            <Link
              href="/predictive-dialer"
              className="inline-flex items-center text-sm font-semibold text-sky-700 hover:text-sky-800 group"
            >
              <span>Explore Sales Dialers</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Pillar 3 UI Mockup: Dialer Engine */}
        <div className="lg:col-span-6">
          <div className="rounded-2xl bg-slate-50 p-6 shadow-sm border border-slate-200/90 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-xs font-semibold text-slate-800">Predictive Dialing Pacing Engine</span>
              <span className="text-xs font-semibold text-sky-700 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" aria-hidden="true" /> 3.4x Contact Rate
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <span className="text-slate-500">Live Connect Efficiency</span>
                <p className="font-headline font-bold text-xl text-slate-900 mt-1">46 min/hr</p>
                <span className="text-emerald-700 text-[11px]">vs 18 min manual</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <span className="text-slate-500">AMD Machine Filter</span>
                <p className="font-headline font-bold text-xl text-sky-700 mt-1">99.2%</p>
                <span className="text-slate-500 text-[11px]">Zero false connections</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
                <span className="font-semibold text-slate-800">Lead Campaign: Q4 Enterprise Outreach</span>
              </div>
              <span className="text-slate-500">142 calls queued</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pillar 4: CX Hub & AI Intelligence (Reversed Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Pillar 4 UI Mockup (Left on Desktop) */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="rounded-2xl bg-slate-50 p-6 shadow-sm border border-slate-200/90 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-xs font-semibold text-slate-800">Conversation Intelligence &amp; QA</span>
              <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-sky-600" aria-hidden="true" /> Real-time Copilot
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2 text-xs">
              <div className="flex items-center justify-between text-slate-500 border-b border-slate-100 pb-1.5">
                <span className="font-semibold text-slate-800">Live Agent Whisper &amp; QA</span>
                <span className="text-emerald-700 font-semibold">CSAT: 4.9/5</span>
              </div>
              <p className="text-slate-600">
                <strong className="text-slate-900">Transcript:</strong> “Customer requested expedited delivery for order #CX-88492.”
              </p>
              <p className="text-sky-900 bg-sky-50 p-2 rounded-lg border border-sky-100">
                <strong className="text-sky-800">AI Prompt:</strong> “Customer is eligible for complimentary express air freight under VIP contract tier.”
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                <span className="text-slate-500">Automated QA Coverage</span>
                <p className="font-headline font-bold text-lg text-slate-900">100% of Calls</p>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                <span className="text-slate-500">Compliance Redaction</span>
                <p className="font-headline font-bold text-lg text-emerald-700">PCI-DSS Active</p>
              </div>
            </div>
          </div>
        </div>

        {/* Text Column (Right on Desktop) */}
        <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
          <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-700">
            <Sparkles className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <span className="text-xs font-semibold text-sky-700 uppercase tracking-wider">Pillar 04</span>
            <h3 className="font-headline font-semibold text-2xl sm:text-3xl text-slate-900 mt-1">
              CX Hub &amp; AI Intelligence
            </h3>
          </div>
          <p className="text-base text-slate-600 leading-relaxed">
            Audit 100% of conversations without manual sampling. Automated speech analytics, real-time sentiment scoring, and AI agent copilot assist turn every call into actionable coaching.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
              <span>100% automated call transcription &amp; CSAT scoring across all queues.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
              <span>Real-time in-call agent assist whispering next best actions.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
              <span>Automated PCI &amp; HIPAA redaction of sensitive caller data.</span>
            </li>
          </ul>
          <div className="pt-2">
            <Link
              href="/speech-analytics"
              className="inline-flex items-center text-sm font-semibold text-sky-700 hover:text-sky-800 group"
            >
              <span>Explore CX Hub &amp; AI Intelligence</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}

