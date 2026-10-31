"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function CalmFooter() {
  const [hideFloatingChat, setHideFloatingChat] = useState(false);

  // Avoid covering form submit buttons or footer on mobile
  useEffect(() => {
    const callbackEl = document.getElementById("callback-section");
    if (!callbackEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // If mobile screen and callback form is prominently in view, hide floating chat
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
      <footer className="bg-[#060a14] text-slate-300 text-xs border-t border-white/10 pt-16 pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Footer Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-12 border-b border-white/10">
            
            {/* Col 1: Brand & Verified Canonical Contact Info (spans 2 on lg) */}
            <div className="col-span-2 space-y-4">
              <Link href="/" className="inline-block">
                <Image
                  src="/images/white-logo.png"
                  alt="CXDYNAMIQ Cloud Contact Center"
                  width={190}
                  height={38}
                  className="h-9 w-auto object-contain"
                />
              </Link>

              <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
                CXDYNAMIQ provides an enterprise-ready, cloud-based contact center solution that eliminates bulky PBX hardware and accelerates customer engagement across voice and digital channels.
              </p>

              <div className="space-y-2 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#069bd8]" />
                  <span>{siteConfig.phones.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#069bd8]" />
                  <span>{siteConfig.emails.info} / {siteConfig.emails.sales}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#069bd8]" />
                  <span>{siteConfig.address.full}</span>
                </div>
              </div>
            </div>

            {/* Col 2: Call Center Solutions */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Call Center</h4>
              <ul className="space-y-2 text-slate-300">
                <li><Link href="/inbound-calling" className="hover:text-cyan-300 transition-colors">Inbound Calling</Link></li>
                <li><Link href="/outbound-calling" className="hover:text-cyan-300 transition-colors">Outbound Calling</Link></li>
                <li><Link href="/blended-call-centre" className="hover:text-cyan-300 transition-colors">Blended Call Centre</Link></li>
                <li><Link href="/cti-integrations" className="hover:text-cyan-300 transition-colors">CTI Integrations</Link></li>
                <li><Link href="/auto-attendant" className="hover:text-cyan-300 transition-colors">Auto Attendant</Link></li>
                <li><Link href="/contact-manager" className="hover:text-cyan-300 transition-colors">Contact Manager</Link></li>
              </ul>
            </div>

            {/* Col 3: Sales Dialer & Features */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Sales &amp; Dialers</h4>
              <ul className="space-y-2 text-slate-300">
                <li><Link href="/auto-dialer" className="hover:text-cyan-300 transition-colors">Auto Dialer</Link></li>
                <li><Link href="/click-to-call" className="hover:text-cyan-300 transition-colors">Click to Call</Link></li>
                <li><Link href="/power-dialer" className="hover:text-cyan-300 transition-colors">Power Dialer</Link></li>
                <li><Link href="/predictive-dialer" className="hover:text-cyan-300 transition-colors">Predictive Dialer</Link></li>
                <li><Link href="/ivr" className="hover:text-cyan-300 transition-colors">IVR Solutions</Link></li>
                <li><Link href="/acd" className="hover:text-cyan-300 transition-colors">Automatic Call Distribution</Link></li>
              </ul>
            </div>

            {/* Col 4: CX Hub & Integrations */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">CX Hub &amp; CTI</h4>
              <ul className="space-y-2 text-slate-300">
                <li><Link href="/omnichannel-routing" className="hover:text-cyan-300 transition-colors">Omnichannel Routing</Link></li>
                <li><Link href="/conversational-ai" className="hover:text-cyan-300 transition-colors">Conversational AI</Link></li>
                <li><Link href="/speech-analytics" className="hover:text-cyan-300 transition-colors">Speech Analytics</Link></li>
                <li><Link href="/zoho" className="hover:text-cyan-300 transition-colors">Zoho Phonebridge</Link></li>
                <li><Link href="/zendesk" className="hover:text-cyan-300 transition-colors">Zendesk Integration</Link></li>
                <li><Link href="/salesforce" className="hover:text-cyan-300 transition-colors">Salesforce CTI</Link></li>
                <li><Link href="/freshdesk" className="hover:text-cyan-300 transition-colors">Freshdesk Integration</Link></li>
                <li><Link href="/hubspot" className="hover:text-cyan-300 transition-colors">HubSpot Integration</Link></li>
                <li><Link href="/whatsapp-business" className="hover:text-cyan-300 transition-colors">WhatsApp Business</Link></li>
              </ul>
            </div>

            {/* Col 5: Industries (Dedicated Column) */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Industries</h4>
              <ul className="space-y-2 text-slate-300">
                <li><Link href="/enterprise" className="hover:text-cyan-300 transition-colors">Enterprises</Link></li>
                <li><Link href="/bpo" className="hover:text-cyan-300 transition-colors">BPO Outsourcing</Link></li>
                <li><Link href="/education" className="hover:text-cyan-300 transition-colors">Education Sector</Link></li>
                <li><Link href="/small-business" className="hover:text-cyan-300 transition-colors">Small Business</Link></li>
              </ul>

              {/* Legal Section under Industries on mobile or dedicated */}
              <div className="pt-4 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">Legal</h4>
                <ul className="space-y-2 text-slate-300">
                  <li><Link href="/terms" className="hover:text-cyan-300 transition-colors">Terms &amp; Conditions</Link></li>
                  <li><Link href="/privacy-policy" className="hover:text-cyan-300 transition-colors">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>

            {/* Col 6: Company (Dedicated Column) */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Company</h4>
              <ul className="space-y-2 text-slate-300">
                <li><Link href="/about-us" className="hover:text-cyan-300 transition-colors">About Us</Link></li>
                <li><Link href="/who-we-are" className="hover:text-cyan-300 transition-colors">Who We Are</Link></li>
                <li><Link href="/blogs" className="hover:text-cyan-300 transition-colors">Blogs</Link></li>
                <li><Link href="/page/Customer%20Experience%20management" className="hover:text-cyan-300 transition-colors">Collection Management</Link></li>
                <li><Link href="/category/Customer%20Experience%20management" className="hover:text-cyan-300 transition-colors">CX Management</Link></li>
                <li><Link href="/category/business" className="hover:text-cyan-300 transition-colors">Business Guides</Link></li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              © {new Date().getFullYear()} CXDYNAMIQ. All rights reserved. Cloud Contact Center Solutions.
            </div>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/contact-us" className="hover:text-white transition-colors">VIP Support</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action Button */}
      {!hideFloatingChat && (
        <a
          href={siteConfig.social.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-emerald-500 text-slate-950 shadow-lg hover:bg-emerald-400 hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      )}
    </>
  );
}
