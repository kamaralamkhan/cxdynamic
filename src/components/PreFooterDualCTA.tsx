"use client";

import { ArrowRight, Building2, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

interface PreFooterDualCTAProps {
  onOpenDemo?: () => void;
}

export default function PreFooterDualCTA({ onOpenDemo }: PreFooterDualCTAProps) {
  return (
    <section className="py-14 lg:py-18 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/80 border border-sky-800/60 text-sky-300 text-xs font-semibold">
            <Zap className="w-3.5 h-3.5 text-sky-400" />
            <span>Launch Your Transformation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Ready to Modernize Your{" "}
            <span className="text-sky-400">Customer Experience?</span>
          </h2>

          <p className="text-base text-slate-300 leading-relaxed font-normal">
            Whether you want to test-drive autonomous AI agents on our instant sandbox or need
            an enterprise telecom whitelisting consultation, we are ready.
          </p>
        </div>

        {/* Dual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">

          {/* Card 1: Self-Serve SaaS Sandbox (CXQ360.ai) */}
          <div className="bg-slate-900/90 rounded-2xl p-6 sm:p-7 border border-sky-500/30 shadow-md flex flex-col justify-between space-y-5 relative group hover:border-sky-400/60 transition-colors">
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-sky-700 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
              Instant Access
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-950 border border-sky-800/50 flex items-center justify-center text-sky-400">
                <Zap className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Test-Drive CXQ360.ai Sandbox
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  Register in 60 seconds, explore interactive voice and WhatsApp simulations, test real-time AI conversation summaries, and view live analytics.
                </p>
              </div>

              <div className="space-y-2 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Guided trial environment on CXQ360.ai</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Pre-configured CRM and WhatsApp simulation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Scale from selected features to a commercial license</span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="https://cxq360.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold bg-sky-700 hover:bg-sky-800 text-white shadow-sm transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-sky-400"
              >
                <span>Launch CXQ360.ai Trial</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>
              <p className="text-xs text-center text-slate-400 mt-2">
                Official CXdynamIQ Customer &amp; Demo Platform
              </p>
            </div>
          </div>

          {/* Card 2: Enterprise Whitelisting & Custom Telecom */}
          <div className="bg-slate-900/60 rounded-2xl p-6 sm:p-7 border border-white/10 shadow-md flex flex-col justify-between space-y-5 hover:border-white/20 transition-colors">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-white/10 flex items-center justify-center text-white">
                <Building2 className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Enterprise Architecture
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  For large contact centers needing carrier-grade SIP trunking, custom dialer algorithms, dedicated BPO whitelisting, and private cloud deployment.
                </p>
              </div>

              <div className="space-y-2 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Dedicated VIP Solutions Architect from Day 1</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Custom CRM, ERP and telephony integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Enterprise SLA options aligned to your deployment</span>
                </div>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={onOpenDemo}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold bg-white text-slate-900 hover:bg-slate-100 shadow-sm transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-sky-400"
              >
                <span>Book Architecture Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-center text-slate-400 mt-2">
                1-on-1 strategy call with our senior CX architects
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
