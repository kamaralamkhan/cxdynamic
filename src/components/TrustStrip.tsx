"use client";

import { claims, getDisplayClaim } from "@/content/claims";
import { ShieldCheck, Clock, Zap, Headphones } from "lucide-react";

export default function TrustStrip() {
  const items = [
    {
      icon: Clock,
      label: claims.freeTrial.label,
      val: getDisplayClaim(claims.freeTrial),
      iconStyle: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: Zap,
      label: claims.goLive.label,
      val: getDisplayClaim(claims.goLive),
      iconStyle: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    },
    {
      icon: Headphones,
      label: claims.supportHours.label,
      val: getDisplayClaim(claims.supportHours),
      iconStyle: "text-sky-300 bg-sky-400/10 border-sky-400/20",
    },
    {
      icon: ShieldCheck,
      label: claims.uptimeSla.label,
      val: getDisplayClaim(claims.uptimeSla),
      iconStyle: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
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
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${item.iconStyle}`}>
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-400">
                    {item.label}
                  </div>
                  <div className="text-sm font-semibold text-white mt-0.5">
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
