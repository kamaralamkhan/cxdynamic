"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle, Clock, ShieldCheck, ArrowRight, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/site";

// Clean inline SVGs for social media (zero-dependency, pixel-perfect)
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3m1.39 9.74v-8.37H5.07v8.37z"/>
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.63c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8.6.26 1.07.42 1.44.53.61.2 1.16.17 1.6.11.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/>
    </svg>
  );
}

export default function CalmFooter() {
  const [hideFloatingChat, setHideFloatingChat] = useState(false);

  // Avoid covering form submit buttons on mobile
  useEffect(() => {
    const callbackEl = document.getElementById("callback-section");
    if (!callbackEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (window.innerWidth < 768 && entry.isIntersecting) {
          setHideFloatingChat(true);
        } else {
          setHideFloatingChat(false);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(callbackEl);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Full-width Footer spanning 100% viewport width */}
      <footer className="w-full bg-[#031b26] text-slate-300 border-t border-slate-800/80 rounded-t-[32px] sm:rounded-t-[44px] lg:rounded-t-[52px] pt-14 sm:pt-16 pb-12 relative overflow-hidden">
        
        {/* Subtle cyan ambient glow */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -top-24 -right-24 w-[600px] h-[600px] bg-gradient-to-bl from-cyan-600/15 via-sky-600/10 to-transparent rounded-full blur-3xl -z-0" 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          {/* Top Grid: Brand & Contact Info (Left 4 cols) + 6 Navigation Columns (Right 8 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* ======================================================== */}
            {/* LEFT COLUMN: Brand Identity, Corporate Heritage & Contact */}
            {/* ======================================================== */}
            <div className="lg:col-span-4 space-y-6 text-left">
              
              {/* Authentic Logo with White Invert Filter */}
              <Link href="/" className="inline-block">
                <Image
                  src="/images/logo.png"
                  alt="CXDYNAMIQ Cloud Contact Center"
                  width={190}
                  height={40}
                  className="h-8 sm:h-9 w-auto object-contain brightness-0 invert filter"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </Link>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
                  {siteConfig.tagline}. Delivering carrier-grade voice infrastructure, intelligent IVR, and native CRM integrations.
                </p>

                {/* Corporate Heritage Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-[11px] text-cyan-300 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{siteConfig.established}</span>
                </div>

                {/* Follow Us Social Icons */}
                <div className="space-y-2.5 pt-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block font-mono">
                    Follow Us
                  </span>
                  <div className="flex items-center gap-2.5">
                    <a
                      href={siteConfig.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition-all hover:scale-105 shadow-sm"
                      aria-label="CXDYNAMIQ Facebook"
                    >
                      <FacebookIcon className="w-4 h-4" />
                    </a>

                    <a
                      href={siteConfig.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0A66C2] text-white flex items-center justify-center transition-all hover:scale-105 shadow-sm"
                      aria-label="CXDYNAMIQ LinkedIn"
                    >
                      <LinkedInIcon className="w-4 h-4" />
                    </a>

                    <a
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E4405F] text-white flex items-center justify-center transition-all hover:scale-105 shadow-sm"
                      aria-label="CXDYNAMIQ Instagram"
                    >
                      <InstagramIcon className="w-4 h-4" />
                    </a>

                    <a
                      href={siteConfig.social.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center transition-all hover:scale-105 shadow-sm"
                      aria-label="CXDYNAMIQ WhatsApp"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Verified Canonical Contact Card */}
                <div className="pt-2 p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2.5 text-xs">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                    Global Offices &amp; Hotlines
                  </div>
                  
                  <div className="space-y-1.5">
                    <a href="tel:+639060986036" className="flex items-center gap-2 text-slate-200 hover:text-white transition-colors">
                      <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{siteConfig.phones.primary} <span className="text-[10px] text-cyan-300 font-mono font-medium">(24/7 VIP Support)</span></span>
                    </a>

                    <a href={`mailto:${siteConfig.emails.sales}`} className="flex items-center gap-2 text-slate-200 hover:text-white transition-colors">
                      <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{siteConfig.emails.sales} · {siteConfig.emails.info}</span>
                    </a>

                    <div className="flex items-start gap-2 text-slate-300 pt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{siteConfig.address.street}, {siteConfig.address.city}</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* ======================================================== */}
              {/* RIGHT COLUMNS: 6 Categorized Product & Resource Columns   */}
              {/* ======================================================== */}
              <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-y-10 gap-x-6 sm:gap-x-8 text-left">
                
                {/* 1. Solutions */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Solutions
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li><Link href="/enterprise" className="hover:text-cyan-300 transition-colors">Enterprise Contact Center</Link></li>
                    <li><Link href="/bpo" className="hover:text-cyan-300 transition-colors">BPO Outsourcing Suite</Link></li>
                    <li><Link href="/education" className="hover:text-cyan-300 transition-colors">Education &amp; Admissions</Link></li>
                    <li><Link href="/small-business" className="hover:text-cyan-300 transition-colors">Small Business Telephony</Link></li>
                    <li><Link href="/page/Customer Experience management" className="hover:text-cyan-300 transition-colors">Debt Recovery &amp; Collections</Link></li>
                  </ul>
                </div>

                {/* 2. Product */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Product
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li><Link href="/inbound-calling" className="hover:text-cyan-300 transition-colors">Inbound Calling</Link></li>
                    <li><Link href="/outbound-calling" className="hover:text-cyan-300 transition-colors">Outbound Calling</Link></li>
                    <li><Link href="/blended-call-centre" className="hover:text-cyan-300 transition-colors">Blended Call Centre</Link></li>
                    <li><Link href="/auto-dialer" className="hover:text-cyan-300 transition-colors">Auto Dialer</Link></li>
                    <li><Link href="/power-dialer" className="hover:text-cyan-300 transition-colors">Power Dialer</Link></li>
                    <li><Link href="/predictive-dialer" className="hover:text-cyan-300 transition-colors">Predictive Dialer</Link></li>
                  </ul>
                </div>

                {/* 3. Features */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Features
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li><Link href="/ivr" className="hover:text-cyan-300 transition-colors">Smart Multi-Level IVR</Link></li>
                    <li><Link href="/acd" className="hover:text-cyan-300 transition-colors">Call Routing &amp; ACD</Link></li>
                    <li><Link href="/cti-integrations" className="hover:text-cyan-300 transition-colors">CTI Screen-Pop</Link></li>
                    <li><Link href="/contact-manager" className="hover:text-cyan-300 transition-colors">Contact Manager</Link></li>
                    <li><Link href="/click-to-call" className="hover:text-cyan-300 transition-colors">Click-to-Call Widget</Link></li>
                    <li><Link href="/auto-attendant" className="hover:text-cyan-300 transition-colors">Virtual Auto Attendant</Link></li>
                  </ul>
                </div>

                {/* 4. AI & Digital Channels */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    AI &amp; Channels
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li><Link href="/conversational-ai" className="hover:text-cyan-300 transition-colors">Conversational AI Voicebot</Link></li>
                    <li><Link href="/speech-analytics" className="hover:text-cyan-300 transition-colors">Speech Analytics &amp; QA</Link></li>
                    <li><Link href="/omnichannel-routing" className="hover:text-cyan-300 transition-colors">Omnichannel Routing</Link></li>
                    <li><Link href="/whatsapp-business" className="hover:text-cyan-300 transition-colors">WhatsApp Business Suite</Link></li>
                    <li><Link href="/intercom-integration" className="hover:text-cyan-300 transition-colors">Intercom Integration</Link></li>
                  </ul>
                </div>

                {/* 5. Integrations */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Integrations
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li><Link href="/salesforce" className="hover:text-cyan-300 transition-colors">Salesforce CTI</Link></li>
                    <li><Link href="/zoho" className="hover:text-cyan-300 transition-colors">Zoho PhoneBridge</Link></li>
                    <li><Link href="/zendesk" className="hover:text-cyan-300 transition-colors">Zendesk Softphone</Link></li>
                    <li><Link href="/freshdesk" className="hover:text-cyan-300 transition-colors">Freshdesk Integration</Link></li>
                    <li><Link href="/hubspot" className="hover:text-cyan-300 transition-colors">HubSpot CRM Sync</Link></li>
                    <li><Link href="/crm-integrations" className="hover:text-cyan-300 transition-colors">Custom REST &amp; Webhook API</Link></li>
                  </ul>
                </div>

                {/* 6. Company & Resources */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Company
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li><Link href="/about-us" className="hover:text-cyan-300 transition-colors">About CXDYNAMIQ</Link></li>
                    <li><Link href="/who-we-are" className="hover:text-cyan-300 transition-colors">Who We Are</Link></li>
                    <li><Link href="/blogs" className="hover:text-cyan-300 transition-colors">Our Blog &amp; Guides</Link></li>
                    <li><Link href="/contact-us" className="hover:text-cyan-300 transition-colors">Contact Us</Link></li>
                    <li><Link href="/contact-us" className="hover:text-cyan-300 transition-colors">VIP Engineering Support</Link></li>
                    <li><Link href="/privacy-policy" className="hover:text-cyan-300 transition-colors">Privacy Policy</Link></li>
                  </ul>
                </div>

              </div>

            </div>

            {/* Subtle Divider Line */}
            <div className="border-t border-white/10 pt-8 space-y-4">
              
              {/* Fine Print / Disclaimer (Matching reference screenshot) */}
              <p className="text-[11px] text-slate-300/80 leading-relaxed text-center sm:text-left">
                Images and platform previews are for illustrative purposes. CXDYNAMIQ delivers high-availability carrier telephony, automated failover routing, and native CRM integrations.
              </p>

              {/* Bottom Bar: Copyright & Legal Links */}
              <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
                <div className="text-center sm:text-left">
                  Copyright © {new Date().getFullYear()} CXDYNAMIQ Global Inc. All rights reserved.
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-300">
                  <Link href="/privacy-policy" className="hover:text-white transition-colors">Legal</Link>
                  <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                  <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                  <Link href="/contact-us" className="hover:text-white transition-colors">Security &amp; Compliance</Link>
                  <span className="hover:text-white transition-colors cursor-pointer">Cookie Preferences</span>
                </div>
              </div>

            </div>

          </div>

      </footer>

      {/* Floating Official WhatsApp Action Button */}
      {!hideFloatingChat && (
        <a
          href={siteConfig.social.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba59] hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer border-2 border-white/20"
          aria-label="Chat with CXDYNAMIQ on WhatsApp"
        >
          <WhatsAppIcon className="w-6 h-6" />
        </a>
      )}
    </>
  );
}
