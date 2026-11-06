"use client";

import { ArrowRight, Building2, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

interface PreFooterDualCTAProps {
  onOpenDemo?: () => void;
}

export default function PreFooterDualCTA({ onOpenDemo }: PreFooterDualCTAProps) {
  return (
    <section className="py-14 lg:py-16 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Radial soft lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-cyan-500/10 via-emerald-500/10 to-transparent rounded-full blur-3xl -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-semibold">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span className="mono-label">LAUNCH YOUR TRANSFORMATION</span>
          </div>

          <h2 className="heading-fluid-section font-display font-extrabold text-white tracking-tight">
            Ready to Modernize Your{" "}
            <span className="text-cyan-400">Customer Experience?</span>
          </h2>

          <p className="text-base text-slate-300 leading-relaxed font-normal">
            Whether you want to test-drive autonomous AI agents on our instant sandbox or need
            an enterprise telecom whitelisting consultation, we’re ready.
          </p>
        </div>

        {/* Dual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">

          {/* Card 1: Self-Serve SaaS Sandbox (CXQ360.ai) */}
          <div className="bg-slate-900/90 rounded-2xl p-6 sm:p-7 border border-cyan-500/30 shadow-xl flex flex-col justify-between space-y-5 relative group hover:border-cyan-400/60 transition-all">
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-sky-700 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
              Instant Access
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-950 border border-cyan-800/50 flex items-center justify-center text-cyan-400">
                <Zap className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-2xl font-bold font-display text-white">
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
                  <span>Pre-configured CRM &amp; WhatsApp simulation</span>
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
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold bg-sky-700 hover:bg-sky-800 text-white shadow-lg transition-all whitespace-nowrap"
              >
                <span>Launch CXQ360.ai Trial</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>
              <p className="text-[11px] text-center text-slate-400 mt-2">
                Official CXdynamIQ Customer &amp; Demo Platform
              </p>
            </div>
          </div>

          {/* Card 2: Enterprise Whitelisting & Custom Telecom */}
          <div className="bg-slate-900/60 rounded-2xl p-6 sm:p-7 border border-white/10 shadow-xl flex flex-col justify-between space-y-5 hover:border-white/20 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-white/10 flex items-center justify-center text-white">
                <Building2 className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-2xl font-bold font-display text-white">
                  Enterprise Architecture &amp; Telecom
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  For large contact centers needing carrier-grade SIP trunking, custom dialer algorithms, dedicated BPO whitelisting, and private cloud deployment.
                </p>
              </div>

              <div className="space-y-2 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Dedicated VIP Solutions Architect from Day 1</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Custom CRM, ERP &amp; telephony integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Enterprise SLA options aligned to your deployment</span>
                </div>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={onOpenDemo}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold bg-white text-slate-900 hover:bg-slate-100 shadow-md transition-all cursor-pointer"
              >
                <span>Book Enterprise Architecture Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-center text-slate-400 mt-2">
                1-on-1 strategy call with our senior CX architects
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
