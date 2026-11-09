"use client";

import Link from "next/link";
import { XCircle, CheckCircle2, PhoneOff, Cloud, ArrowRight } from "lucide-react";

export default function ModernVsLegacySection() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200" id="comparison">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mt-3 font-headline font-semibold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight leading-snug">
            Modern Cloud Voice vs. <span className="text-sky-700">Yesterday&apos;s PBX</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            See why fast-moving revenue and support teams replace slow hardware telecommunications with CXDYNAMIQ.
          </p>
        </div>

        {/* Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Legacy PBX Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7 sm:p-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 pb-6 border-b border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-slate-200/80 flex items-center justify-center text-slate-500">
                  <PhoneOff className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-headline font-semibold text-xl text-slate-900">Legacy PBX & Old Telecom</h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Avaya, Cisco, Generic On-Premises Systems</p>
                </div>
              </div>

              <div className="space-y-5 pt-6">
                <div className="flex items-start gap-3.5">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Months of hardware deployment</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Requires physical rack servers, desk phones, on-prem cabling, and specialized telecom engineers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Isolated data silos & zero CRM sync</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Agents juggle disconnected windows with no live customer context, call history, or deal visibility.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Rigid IVR changes take weeks</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Updating a call tree or after-hours menu requires paid contractor tickets and complex dial plans.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Unpredictable maintenance costs</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Surprise carrier line charges, proprietary handset replacements, and hefty annual software licenses.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200 mt-8 text-center text-xs text-slate-500">
              High operational drag · High capital expense
            </div>
          </div>

          {/* CXDYNAMIQ Cloud Platform Card */}
          <div className="bg-white border-2 border-sky-600/40 rounded-2xl p-7 sm:p-9 shadow-lg shadow-sky-900/5 flex flex-col justify-between relative">
            
            <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-sky-700 text-white text-xs font-semibold shadow-xs">
              Recommended Cloud Stack
            </div>

            <div>
              <div className="flex items-center gap-3.5 pb-6 border-b border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-700">
                  <Cloud className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-headline font-semibold text-xl text-slate-900">CXDYNAMIQ Cloud Platform</h3>
                  <p className="text-xs text-sky-700 font-medium mt-0.5">Carrier-Grade AI Telephony SaaS</p>
                </div>
              </div>

              <div className="space-y-5 pt-6">
                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Live in 24 hours with zero hardware</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      100% cloud setup. Agents connect securely from anywhere via browser, softphone, or WebRTC.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Sub-120ms native CRM screen-pop</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Instant caller record pops into Salesforce, Zoho, Zendesk, or HubSpot the moment the phone rings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Visual cloud IVR & Agentic AI</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Drag-and-drop routing, conversational AI bots, and intelligent queues update in minutes with zero code.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Transparent per-seat cloud SaaS</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Predictable monthly pricing, free automatic upgrades, 99.99% uptime SLA, and 24/7 VIP support.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200 mt-8 flex items-center justify-between">
              <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
                Zero Downtime Number Porting
              </span>
              <Link
                href="/contact-us#quote"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-800 transition-colors"
              >
                <span>Compare plans</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
