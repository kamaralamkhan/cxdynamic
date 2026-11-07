"use client";

import { Star, ShieldCheck } from "lucide-react";

export default function StitchTestimonialSection() {
  return (
    <section className="w-full py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/90 relative">
          
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" aria-hidden="true" />
              ))}
              <span className="text-xs font-semibold text-slate-500 ml-2">Verified Enterprise Deployment</span>
            </div>
            <div className="sm:text-right">
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                Measured Outcome: +34% Queue Throughput
              </span>
            </div>
          </div>

          <blockquote className="font-headline font-semibold text-xl sm:text-2xl text-slate-900 leading-relaxed">
            “We migrated 180 support agents from our legacy telephony platform to CXDYNAMIQ over a single weekend. Our first-response time dropped by 34%, and our supervisors finally have real-time visibility into queue backlogs without relying on third-party plugins.”
          </blockquote>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full bg-sky-100 text-sky-800 font-bold flex items-center justify-center text-sm shadow-2xs ring-2 ring-sky-600/20">
                SJ
              </div>
              <div>
                <h4 className="font-headline font-semibold text-base text-slate-900">Sarah Jenkins</h4>
                <p className="text-xs text-slate-500 font-medium">Head of Customer Operations · Apex Global Logistics</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-sky-600" aria-hidden="true" />
              <span>Production Voice &amp; WhatsApp Integration</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
