"use client";

import { claims, getDisplayClaim } from "@/content/claims";
import { ShieldCheck, Clock, Zap, Headphones, CheckCircle2 } from "lucide-react";

export default function TrustStrip() {
  const items = [
    {
      icon: Clock,
      label: claims.freeTrial.label,
      val: getDisplayClaim(claims.freeTrial),
      color: "text-emerald-600 bg-emerald-50 border-emerald-100",
    },
    {
      icon: Zap,
      label: claims.goLive.label,
      val: getDisplayClaim(claims.goLive),
      color: "text-cyan-700 bg-cyan-50 border-cyan-100",
    },
    {
      icon: Headphones,
      label: claims.supportHours.label,
      val: getDisplayClaim(claims.supportHours),
      color: "text-blue-700 bg-blue-50 border-blue-100",
    },
    {
      icon: ShieldCheck,
      label: claims.uptimeSla.label,
      val: getDisplayClaim(claims.uptimeSla),
      color: "text-purple-700 bg-purple-50 border-purple-100",
    },
  ];

  return (
    <section className="bg-slate-900 text-white py-8 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3.5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${item.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    {item.label}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white mt-0.5">
                    {item.val}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
