"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Send, RefreshCw, ArrowRight, Activity, Zap, Check } from "lucide-react";

export default function StitchTabsSection() {
  const [activeTab, setActiveTab] = useState<"tab-1" | "tab-2" | "tab-3">("tab-1");

  return (
    <section className="w-full py-20 bg-slate-50 border-y border-slate-200" id="feature-story">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-800 font-headline">
            Built For Everyday Mastery
          </span>
          <h2 className="font-headline font-semibold text-2xl sm:text-3xl lg:text-4xl text-slate-900 mt-2 tracking-tight leading-snug">
            One system. <span className="text-sky-700">Infinite control.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2.5 max-w-2xl font-normal leading-relaxed">
            Explore how effortlessly frontline teams move through daily communication hurdles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Interactive Tabs List */}
          <div className="lg:col-span-5 space-y-3.5">
            
            {/* Tab 1 */}
            <button
              type="button"
              onClick={() => setActiveTab("tab-1")}
              className={`w-full text-left p-5 rounded-2xl border-2 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                activeTab === "tab-1"
                  ? "bg-white shadow-md border-sky-600/40 text-slate-900"
                  : "bg-white/70 hover:bg-white shadow-xs border-transparent text-slate-700"
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                  activeTab === "tab-1" ? "bg-sky-700 text-white" : "bg-sky-50 text-sky-700"
                }`}>
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-headline font-semibold text-base text-slate-900">Handle every call</h3>
                  <p className="text-xs text-slate-500 mt-0.5">High definition audio, instant transfer, and live team presence.</p>
                </div>
              </div>
            </button>

            {/* Tab 2 */}
            <button
              type="button"
              onClick={() => setActiveTab("tab-2")}
              className={`w-full text-left p-5 rounded-2xl border-2 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                activeTab === "tab-2"
                  ? "bg-white shadow-md border-sky-600/40 text-slate-900"
                  : "bg-white/70 hover:bg-white shadow-xs border-transparent text-slate-700"
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                  activeTab === "tab-2" ? "bg-sky-700 text-white" : "bg-sky-50 text-sky-700"
                }`}>
                  <Send className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-headline font-semibold text-base text-slate-900">Reach out faster</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Automate manual dial loops, drop pre-recorded voicemails in one tap.</p>
                </div>
              </div>
            </button>

            {/* Tab 3 */}
            <button
              type="button"
              onClick={() => setActiveTab("tab-3")}
              className={`w-full text-left p-5 rounded-2xl border-2 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                activeTab === "tab-3"
                  ? "bg-white shadow-md border-sky-600/40 text-slate-900"
                  : "bg-white/70 hover:bg-white shadow-xs border-transparent text-slate-700"
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                  activeTab === "tab-3" ? "bg-sky-700 text-white" : "bg-sky-50 text-sky-700"
                }`}>
                  <RefreshCw className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-headline font-semibold text-base text-slate-900">Connect your tools</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Zero copy-pasting. Every interaction is filed into your CRM automatically.</p>
                </div>
              </div>
            </button>

          </div>

          {/* Right Active Showcase Display */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-4 sm:p-8 shadow-md border border-slate-200 min-h-[340px] flex flex-col justify-center relative overflow-hidden">
            
            {/* Panel 1 */}
            {activeTab === "tab-1" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-semibold text-sky-700 uppercase tracking-wide">Frontline Agent View</span>
                    <h3 className="font-headline font-semibold text-xl text-slate-900 mt-0.5">Smart Inbound Queue Processing</h3>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 flex items-center gap-1.5 border border-emerald-200/60">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" /> Active Routing
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  When an inbound customer dials in, CXDYNAMIQ looks up their caller ID in your CRM within 150 milliseconds. The agent answers already knowing who is calling, what plan they are on, and the status of their open tickets.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <span className="text-xs text-slate-500 font-medium">First Call Resolution (FCR)</span>
                    <p className="font-headline font-bold text-2xl text-slate-900">+28%</p>
                    <p className="text-xs text-slate-500">Across 400k benchmarked calls</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <span className="text-xs text-slate-500 font-medium">Avg Handling Time (AHT)</span>
                    <p className="font-headline font-bold text-2xl text-emerald-700">-45s</p>
                    <p className="text-xs text-slate-500">Due to instant CTI context pops</p>
                  </div>
                </div>
              </div>
            )}

            {/* Panel 2 */}
            {activeTab === "tab-2" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-semibold text-sky-700 uppercase tracking-wide">Outbound Campaign Accelerator</span>
                    <h3 className="font-headline font-semibold text-xl text-slate-900 mt-0.5">Predictive Dialing &amp; Cadence Automation</h3>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 flex items-center gap-1.5 border border-emerald-200/60">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" /> Engine Running
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Skip dead tones and busy signals entirely. The dialer paces out outbound attempts based on agent wrap-up rates and only connects calls that have a live human on the other end.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <span className="text-xs text-slate-500 font-medium">Talk Time per Hour</span>
                    <p className="font-headline font-bold text-2xl text-slate-900">46 mins</p>
                    <p className="text-xs text-slate-500">Up from 18 mins on manual dialing</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <span className="text-xs text-slate-500 font-medium">Lead Contact Rate</span>
                    <p className="font-headline font-bold text-2xl text-sky-700">3.4x</p>
                    <p className="text-xs text-slate-500">With dynamic local phone numbers</p>
                  </div>
                </div>
              </div>
            )}

            {/* Panel 3 */}
            {activeTab === "tab-3" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-semibold text-sky-700 uppercase tracking-wide">Two-Way CRM Architecture</span>
                    <h3 className="font-headline font-semibold text-xl text-slate-900 mt-0.5">Native Bidirectional Integration</h3>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 flex items-center gap-1.5 border border-emerald-200/60">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" /> 100% Up to Date
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Every detail is written back instantly: recordings, disposition codes, timestamped call transcripts, and AI sentiment grades are synced without your team having to type a single summary manually.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <span className="text-xs text-slate-500 font-medium">Data Accuracy</span>
                    <p className="font-headline font-bold text-2xl text-slate-900">99.9%</p>
                    <p className="text-xs text-slate-500">Eliminates rep reporting errors</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <span className="text-xs text-slate-500 font-medium">Admin Hours Saved</span>
                    <p className="font-headline font-bold text-2xl text-sky-700">12 hrs/mo</p>
                    <p className="text-xs text-slate-500">Per representative on average</p>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

