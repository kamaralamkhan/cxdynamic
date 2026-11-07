"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { 
  ZendeskLogo, 
  SalesforceLogo, 
  ZohoLogo, 
  FreshdeskLogo, 
  HubSpotLogo, 
  IntercomLogo, 
  WhatsAppLogo 
} from "@/components/IntegrationLogos";

export default function ProofAndMarquee() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const statsRef = useRef<HTMLDivElement>(null);

  const statTargets = [72, 38, 100, 44];

  // Count-up on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate numbers
          const duration = 1200;
          const steps = 30;
          const stepTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            setCounts([
              Math.round(statTargets[0] * progress),
              Math.round((statTargets[1] * progress) / 10),
              Math.round(statTargets[2] * progress),
              Math.round(statTargets[3] * progress),
            ]);

            if (currentStep >= steps) clearInterval(timer);
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const brandList = [
    { name: "Zendesk", path: "/zendesk", logo: ZendeskLogo, hoverColor: "group-hover:text-slate-950" },
    { name: "Salesforce", path: "/salesforce", logo: SalesforceLogo, hoverColor: "group-hover:text-sky-600" },
    { name: "Zoho CRM", path: "/zoho", logo: ZohoLogo, hoverColor: "group-hover:text-red-600" },
    { name: "Freshdesk", path: "/freshdesk", logo: FreshdeskLogo, hoverColor: "group-hover:text-emerald-600" },
    { name: "HubSpot", path: "/hubspot", logo: HubSpotLogo, hoverColor: "group-hover:text-orange-600" },
    { name: "Intercom", path: "/intercom-integration", logo: IntercomLogo, hoverColor: "group-hover:text-blue-600" },
    { name: "WhatsApp Business", path: "/whatsapp-business", logo: WhatsAppLogo, hoverColor: "group-hover:text-emerald-600" },
  ];

  return (
    <>
      {/* 1. Light Contrast Stats Strip */}
      <section
        ref={statsRef}
        className="bg-slate-50 text-slate-900 py-10 relative overflow-hidden border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
            
            <div className="pt-4 lg:pt-0 lg:px-4">
              <div className="font-headline font-bold text-3xl sm:text-4xl text-sky-700 tracking-tight tabular-nums">
                {hasAnimated ? counts[0] : 72}%
              </div>
              <div className="text-sm text-slate-600 font-medium mt-1">
                Average AI containment rate
              </div>
            </div>

            <div className="pt-4 lg:pt-0 lg:px-4">
              <div className="font-headline font-bold text-3xl sm:text-4xl text-emerald-700 tracking-tight tabular-nums">
                3.8x
              </div>
              <div className="text-sm text-slate-600 font-medium mt-1">
                Faster First Contact Resolution (FCR)
              </div>
            </div>

            <div className="pt-4 lg:pt-0 lg:px-4">
              <div className="font-headline font-bold text-3xl sm:text-4xl text-sky-700 tracking-tight tabular-nums">
                {hasAnimated ? counts[2] : 100}%
              </div>
              <div className="text-sm text-slate-600 font-medium mt-1">
                Automated conversation QA coverage
              </div>
            </div>

            <div className="pt-4 lg:pt-0 lg:px-4">
              <div className="font-headline font-bold text-3xl sm:text-4xl text-emerald-700 tracking-tight tabular-nums">
                -{hasAnimated ? counts[3] : 44}%
              </div>
              <div className="text-sm text-slate-600 font-medium mt-1">
                Lower cost per contact
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. White Integrations Marquee with Narrow 48px Edge Fade Masks */}
      <section className="bg-white border-b border-slate-200 py-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-6">
            <span className="text-xs font-semibold text-sky-700">
              Native Enterprise Ecosystem
            </span>
            <p className="text-xs text-slate-500 mt-0.5">
              Works directly with your existing CRM and ticketing tools with zero code
            </p>
          </div>

          {/* Marquee with Left/Right 48px Gradient Fade Masks */}
          <div className="relative overflow-hidden w-full py-1">
            {/* Left Edge Mask (48px) */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" aria-hidden="true" />
            {/* Right Edge Mask (48px) */}
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" aria-hidden="true" />

            <div className="motion-safe:animate-marquee motion-reduce:animate-none flex items-center gap-6">
              {[...brandList, ...brandList, ...brandList, ...brandList].map((item, idx) => {
                const Logo = item.logo;
                return (
                  <Link
                    key={idx}
                    href={item.path}
                    className="min-w-[160px] px-4 py-3 flex items-center gap-2.5 shrink-0 bg-white border border-slate-200 rounded-xl hover:border-sky-500 transition-colors group shadow-2xs"
                  >
                    <div className={`w-5 h-5 text-slate-400 ${item.hoverColor} transition-colors shrink-0`}>
                      <Logo className="w-full h-full" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-800 group-hover:text-slate-950 transition-colors block">
                        {item.name}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
