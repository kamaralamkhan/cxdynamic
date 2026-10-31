"use client";

import Link from "next/link";
import { 
  TrendingDown, 
  Award, 
  HeartHandshake, 
  ShieldCheck, 
  BarChart3, 
  ArrowRight
} from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Reduce Your Cost",
      desc: "We ensure significant cost reduction from day one. Our cost-effective cloud solutions deliver a measurable, immediate ROI without hardware expenses.",
      icon: TrendingDown,
      color: "text-emerald-700 bg-emerald-50 border border-emerald-100",
    },
    {
      title: "Industry Experience",
      desc: "Multi-industry exposure is our strength. CXDYNAMIQ offers customized solutions and flexible plans built to suit businesses of all sizes.",
      icon: Award,
      color: "text-cyan-700 bg-cyan-50 border border-cyan-100",
    },
    {
      title: "Your Success Is Our Success",
      desc: "Aligning your company goals with your expectations of better customer solutions. We act as your dedicated growth partner with 24/7 VIP support.",
      icon: HeartHandshake,
      color: "text-purple-700 bg-purple-50 border border-purple-100",
    },
    {
      title: "Service Assurance",
      desc: "High-availability voice infrastructure, redundant carrier routes, and automated failover ensure your customer lines stay connected.",
      icon: ShieldCheck,
      color: "text-blue-700 bg-blue-50 border border-blue-100",
    },
    {
      title: "Reports And Analytics",
      desc: "Comprehensive supervisory dashboards, real-time agent productivity scoring, and automated speech intelligence for full operational clarity.",
      icon: BarChart3,
      color: "text-amber-700 bg-amber-50 border border-amber-100",
    },
  ];

  return (
    <section id="why-cxdynamiq" className="py-20 lg:py-24 bg-white border-b border-slate-200 scroll-mt-12">
        <div id="features" className="sr-only" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
              Built For Measurable Growth
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Choose CXDYNAMIQ?
            </h2>
            <p className="text-base text-slate-600">
              We simplify cloud contact centers with ultrafast rollout and VIP support.
            </p>
          </div>

          {/* 5 Points + 6th Solid Slate-900 Get Started Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {points.map((pt, idx) => {
              const Icon = pt.icon;
              return (
                <div key={idx} className="calm-card p-6 sm:p-7 bg-white border border-slate-200 space-y-3 hover:border-slate-300 transition-all">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${pt.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900">
                    {pt.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              );
            })}

            {/* 6th Card: Solid bg-slate-900 with white text & emerald button */}
            <div className="rounded-2xl p-7 bg-slate-900 text-white border border-slate-800 shadow-md flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                  Ready to Deploy
                </span>
                <h3 className="font-display font-bold text-xl text-white">
                  Ready to optimize contact costs?
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Connect with our team today and receive a customized implementation plan and quote in minutes.
                </p>
              </div>

              <div className="pt-6">
                <Link
                  href="/contact-us"
                  className="btn-tactile w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold bg-white text-slate-900 hover:bg-slate-100 shadow-sm transition-colors cursor-pointer"
                >
                  <span>Book a Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
  );
}
