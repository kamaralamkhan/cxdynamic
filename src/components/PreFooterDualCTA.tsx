"use client";

import { ArrowRight, Building2, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

interface PreFooterDualCTAProps {
  onOpenDemo?: () => void;
}

export default function PreFooterDualCTA({ onOpenDemo }: PreFooterDualCTAProps) {
  return (
    <section className="py-16 lg:py-20 bg-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">

          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-slate-900 tracking-tight leading-snug">
            Ready to Modernize Your{" "}
            <span className="text-sky-700">Customer Experience?</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Whether you want to test-drive autonomous AI agents on our instant sandbox or need
            an enterprise telecom whitelisting consultation, we are ready.
          </p>
        </div>

        {/* Dual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          {/* Card 1: Self-Serve SaaS Sandbox (CXQ360.ai) */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-sky-600/30 shadow-md flex flex-col justify-between space-y-6 relative group hover:border-sky-600 transition-colors">
            <div className="absolute -top-3.5 right-6 bg-sky-700 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-2xs">
              Instant Access
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700">
                <Zap className="w-6 h-6" aria-hidden="true" />
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                  Test-Drive CXQ360.ai Sandbox
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Register in 60 seconds, explore interactive voice and WhatsApp simulations, test real-time AI conversation summaries, and view live analytics.
                </p>
              </div>

              <div className="space-y-2.5 pt-2 text-xs text-slate-700">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
                  <span>Guided trial environment on CXQ360.ai</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
                  <span>Pre-configured CRM and WhatsApp simulation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
                  <span>Scale from selected features to a commercial license</span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="https://cxq360.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-sky-700 hover:bg-sky-800 text-white shadow-sm transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-sky-600"
              >
                <span>Launch CXQ360.ai Trial</span>
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
              <p className="text-xs text-center text-slate-500 mt-2">
                Official CXdynamIQ Customer &amp; Demo Platform
              </p>
            </div>
          </div>

          {/* Card 2: Enterprise Whitelisting & Custom Telecom */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6 hover:border-slate-300 transition-colors">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700">
                <Building2 className="w-6 h-6" aria-hidden="true" />
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                  Enterprise Architecture
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  For large contact centers needing carrier-grade SIP trunking, custom dialer algorithms, dedicated BPO whitelisting, and private cloud deployment.
                </p>
              </div>

              <div className="space-y-2.5 pt-2 text-xs text-slate-700">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-sky-700 shrink-0" aria-hidden="true" />
                  <span>Dedicated VIP Solutions Architect from Day 1</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-sky-700 shrink-0" aria-hidden="true" />
                  <span>Custom CRM, ERP and telephony integration</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-sky-700 shrink-0" aria-hidden="true" />
                  <span>Enterprise SLA options aligned to your deployment</span>
                </div>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={onOpenDemo}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 shadow-2xs transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-sky-600"
              >
                <span>Book Architecture Session</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <p className="text-xs text-center text-slate-500 mt-2">
                1-on-1 strategy call with our senior CX architects
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
