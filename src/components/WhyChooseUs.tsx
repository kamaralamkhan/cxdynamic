"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { 
  TrendingDown, 
  Award, 
  HeartHandshake, 
  ShieldCheck, 
  BarChart3, 
  ArrowRight,
  MousePointer,
  Calendar,
  Rocket,
  Flame,
  CheckCircle2
} from "lucide-react";
import { useHydrated } from "@/lib/useHydrated";

export default function WhyChooseUs() {
  const isHydrated = useHydrated();
  const [howItWorksInView, setHowItWorksInView] = useState(false);
  const howRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHowItWorksInView(true);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    if (howRef.current) observer.observe(howRef.current);
    return () => observer.disconnect();
  }, []);

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

  const steps = [
    { 
      num: "01", 
      step: "Choose A Product", 
      desc: "Select from our 15+ specialized contact center and telephony tools tailored to your exact inbound or outbound workflow.", 
      icon: MousePointer 
    },
    { 
      num: "02", 
      step: "Request A Meeting", 
      desc: "Speak directly with our solutions team to define agent seat counts, CRM mappings, and carrier trunking requirements.", 
      icon: Calendar 
    },
    { 
      num: "03", 
      step: "Receive Implementation Plan", 
      desc: "Get an architectural blueprint, IVR routing configuration, and custom pricing tailored to your scale.", 
      icon: Rocket 
    },
    { 
      num: "04", 
      step: "Let's Make It Happen", 
      desc: "Go live within 24 hours with dedicated VIP engineer onboarding and live test calls.", 
      icon: Flame 
    },
  ];

  // If not hydrated yet (SSR or static capture), always render visible
  const isRevealed = !isHydrated || howItWorksInView;

  return (
    <>
      <noscript>
        <style dangerouslySetInnerHTML={{ __html: `[data-reveal]{opacity:1!important;transform:none!important}` }} />
      </noscript>

      {/* 1. Why Choose Us (Clean White Background) */}
      <section id="why-cxdynamiq" className="py-24 bg-white border-b border-slate-200 scroll-mt-12">
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
                  className="btn-tactile btn-primary-emerald w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-slate-950 shadow-xs cursor-pointer"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. How It Works (bg-cyan-50 with sticky storytelling on lg+) */}
      <section ref={howRef} className="py-24 bg-cyan-50/70 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Heading Sticky on lg+ while 4 steps pass */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-4 self-start">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider">
                Simple 4-Step Rollout
              </span>
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                How CXDYNAMIQ Works
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md">
                From initial product selection to live production in under 24 hours. Our VIP engineering team handles telecom trunking and CRM authorizations alongside your team.
              </p>

              <div className="pt-2 hidden lg:block">
                <Link
                  href="/contact-us"
                  className="btn-tactile btn-primary-emerald inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-slate-950 shadow-xs cursor-pointer"
                >
                  <span>Start Your 1-Day Rollout</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: 4 Sequential Steps */}
            <div className="lg:col-span-7 flex flex-col gap-5 relative z-10">
              {steps.map((st, i) => {
                const Icon = st.icon;
                return (
                  <div
                    key={i}
                    data-reveal="true"
                    style={{
                      transitionDelay: `${i * 60}ms`,
                    }}
                    className={`calm-card p-6 sm:p-7 bg-white border border-slate-200 text-left space-y-3 transition-all duration-300 ${
                      isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm font-extrabold text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded border border-cyan-100">
                        Step {st.num}
                      </span>
                      <div className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 border border-slate-100">
                        <Icon className="w-4 h-4 text-cyan-700" />
                      </div>
                    </div>
                    <h4 className="font-display font-bold text-lg text-slate-900">{st.step}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{st.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
