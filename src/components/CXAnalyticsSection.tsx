"use client";

import { useState } from "react";
import Link from "next/link";
import { TrendingUp, TrendingDown, ArrowRight } from "lucide-react";

export default function CXAnalyticsSection() {
  // Interactive ROI Calculator State
  const [monthlyVolume, setMonthlyVolume] = useState<number>(45000);
  const [currentCostPerContact, setCurrentCostPerContact] = useState<number>(4.5); // $4.50 average

  // Containment rate assumed at 72%
  const aiResolvedCount = Math.round(monthlyVolume * 0.72);
  const humanResolvedCount = monthlyVolume - aiResolvedCount;
  // Estimated cost per AI resolution: $0.45 vs Human: $4.50
  const legacyMonthlyCost = monthlyVolume * currentCostPerContact;
  const cxdynamiqMonthlyCost = (aiResolvedCount * 0.45) + (humanResolvedCount * currentCostPerContact);
  const monthlySavings = Math.max(0, legacyMonthlyCost - cxdynamiqMonthlyCost);
  const annualSavings = monthlySavings * 12;

  return (
    <section id="analytics" className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">

          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            See the Metrics That{" "}
            <span className="text-sky-700">Actually Move the Bottom Line.</span>
          </h2>

          <p className="text-base text-slate-600 leading-relaxed font-normal">
            No vanity reports. CXdynamIQ surfaces real-time business telemetry: autonomous AI containment, 
            slashed handle times, and continuous First Contact Resolution (FCR).
          </p>
        </div>

        {/* 4 Core SaaS KPI Cards with Visual Graphs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          
          {/* KPI 1: AI Containment */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
              <span>AI Containment Rate</span>
              <span className="flex items-center text-emerald-600 font-bold gap-0.5">
                <TrendingUp className="w-3.5 h-3.5" /> +18.4%
              </span>
            </div>
            <div className="font-semibold text-3xl sm:text-4xl text-slate-900">
              74.8%
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full w-[74.8%]" />
            </div>
            <p className="text-xs text-slate-500">
              Resolved autonomously without human agent involvement.
            </p>
          </div>

          {/* KPI 2: First Contact Resolution */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
              <span>First Contact Resolution</span>
              <span className="flex items-center text-emerald-600 font-bold gap-0.5">
                <TrendingUp className="w-3.5 h-3.5" /> +24.1%
              </span>
            </div>
            <div className="font-semibold text-3xl sm:text-4xl text-sky-700">
              86.2%
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-sky-600 rounded-full w-[86.2%]" />
            </div>
            <p className="text-xs text-slate-500">
              Eliminates repeat caller frustration across channels.
            </p>
          </div>

          {/* KPI 3: Average Handle Time */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
              <span>Average Handle Time (AHT)</span>
              <span className="flex items-center text-emerald-600 font-bold gap-0.5">
                <TrendingDown className="w-3.5 h-3.5" /> -44%
              </span>
            </div>
            <div className="font-semibold text-3xl sm:text-4xl text-slate-900">
              2m 14s
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-sky-500 rounded-full w-[56%]" />
            </div>
            <p className="text-xs text-slate-500">
              Down from 4m 52s legacy average via AI Copilot prep.
            </p>
          </div>

          {/* KPI 4: CSAT Score */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
              <span>Customer CSAT Rating</span>
              <span className="flex items-center text-emerald-600 font-bold gap-0.5">
                <TrendingUp className="w-3.5 h-3.5" /> +32.8%
              </span>
            </div>
            <div className="font-semibold text-3xl sm:text-4xl text-emerald-600">
              4.88<span className="text-base text-slate-400 font-normal">/5.0</span>
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full w-[97%]" />
            </div>
            <p className="text-xs text-slate-500">
              Aggregated across 100% of calls via automated scoring.
            </p>
          </div>

        </div>

        {/* Interactive ROI Calculator & Channel Breakdown */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            
            {/* Left: Interactive Sliders */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-slate-900">
                  Calculate Your Projected Savings with Agentic AI
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Slide your monthly contact volume to see how CXdynamIQ’s 72% autonomous containment directly reduces operating expenditure.
                </p>
              </div>

              {/* Slider 1: Monthly Volume */}
              <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="flex justify-between text-xs font-semibold text-slate-700">
                  <span>Monthly Inbound Interactions</span>
                  <span className="text-sm text-sky-700 font-semibold">
                    {monthlyVolume.toLocaleString()} calls and chats
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="250000"
                  step="5000"
                  value={monthlyVolume}
                  onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                  className="w-full accent-sky-600 cursor-pointer focus-visible:outline-2 focus-visible:outline-sky-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>5,000 / mo</span>
                  <span>100,000 / mo</span>
                  <span>250,000 / mo</span>
                </div>
              </div>

              {/* Channel Distribution Breakdown */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-semibold text-slate-500">
                  Automated Volume Distribution
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="text-slate-500 text-[10px]">Voice (SIP)</div>
                    <div className="font-semibold text-slate-900 mt-0.5">42%</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="text-slate-500 text-[10px]">WhatsApp</div>
                    <div className="font-semibold text-slate-900 mt-0.5">36%</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="text-slate-500 text-[10px]">Web Chat</div>
                    <div className="font-semibold text-slate-900 mt-0.5">14%</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="text-slate-500 text-[10px]">Email / SMS</div>
                    <div className="font-semibold text-slate-900 mt-0.5">8%</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Projected Savings Display */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white space-y-6 shadow-md border border-slate-800">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-sky-400">
                  Projected Annual Operating Savings
                </span>
                <div className="font-semibold text-4xl sm:text-5xl text-white tracking-tight">
                  ${Math.round(annualSavings).toLocaleString()}
                  <span className="text-lg text-slate-400 font-normal"> / year</span>
                </div>
                <p className="text-xs text-slate-300">
                  Based on {aiResolvedCount.toLocaleString()} inquiries handled autonomously each month.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10 text-xs">
                <div className="bg-slate-900/80 p-3 rounded-lg border border-white/5 space-y-1">
                  <div className="text-slate-400">Autonomous Handling</div>
                  <div className="text-lg font-semibold text-emerald-400">
                    {aiResolvedCount.toLocaleString()} <span className="text-[10px] text-slate-400">contacts</span>
                  </div>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-lg border border-white/5 space-y-1">
                  <div className="text-slate-400">Human High-Empathy</div>
                  <div className="text-lg font-semibold text-sky-300">
                    {humanResolvedCount.toLocaleString()} <span className="text-[10px] text-slate-400">contacts</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact-us#quote"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold bg-sky-700 hover:bg-sky-800 text-white shadow-2xs transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-sky-400"
                >
                  <span>Book a Demo to See Full Analytics</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
