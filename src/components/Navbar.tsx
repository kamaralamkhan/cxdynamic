"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  Menu,
  X,
  PhoneCall,
  PhoneOutgoing,
  Shuffle,
  Cpu,
  Phone,
  Building2,
  ArrowRight,
  Layers,
  Sparkles,
  MessageSquare,
  Headphones,
  Bot,
  Zap,
  Globe2,
  GraduationCap,
  Store,
  BarChart3,
  Activity,
  Mic,
  MessageCircle,
  ShieldCheck,
  Workflow
} from "lucide-react";
import {
  SalesforceLogo,
  ZohoLogo,
  ZendeskLogo,
  FreshdeskLogo,
  HubSpotLogo,
  WhatsAppLogo
} from "@/components/IntegrationLogos";

interface NavbarProps {
  onRequestQuote?: () => void;
}

export default function Navbar({ onRequestQuote }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>("platform");
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Cleanup timeout
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 220);
  };

  const toggleDropdown = (name: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const toggleMobileAccordion = (name: string) => {
    setMobileAccordion(mobileAccordion === name ? null : name);
  };

  const closeAll = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpenDropdown(null);
    setMobileOpen(false);
  };

  return (
    <header ref={navRef} className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs">
      {/* Utility Top Bar (36px, bg-slate-900, hidden on <md) */}
      <div className="hidden md:flex h-9 items-center bg-slate-900 text-slate-300 px-6 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>VIP support: </span>
              <a href="tel:+639060986036" className="hover:text-white transition-colors font-medium">
                +63 906 098 6036
              </a>
            </span>
          </div>
          <div className="flex items-center gap-5 text-xs text-slate-400">
            <Link href="/about-us" className="hover:text-white transition-colors">About Us</Link>
            <span className="text-slate-700" aria-hidden="true">|</span>
            <Link href="/blogs" className="hover:text-white transition-colors">Blog</Link>
            <span className="text-slate-700" aria-hidden="true">|</span>
            <Link href="/contact-us" className="hover:text-white transition-colors">Support</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar Bar (Height 64px, max-w-7xl px-6) */}
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">

          {/* Authentic Brand Logo */}
          <Link href="/" onClick={closeAll} className="flex items-center shrink-0 pr-6">
            <Image
              src="/images/logo.png"
              alt="CXDYNAMIQ Cloud Contact Center"
              width={180}
              height={36}
              priority
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center h-full gap-7 xl:gap-8" aria-label="Main Navigation">

            {/* Platform Dropdown */}
            <div
              className="group h-full flex items-center"
              onMouseEnter={() => handleMouseEnter("platform")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => toggleDropdown("platform")}
                aria-expanded={openDropdown === "platform"}
                className={`whitespace-nowrap inline-flex items-center gap-1.5 text-[15px] font-medium transition-colors cursor-pointer ${
                  openDropdown === "platform"
                    ? "text-sky-700 font-semibold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>Platform</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                  openDropdown === "platform" ? "rotate-180 text-sky-700" : "group-hover:rotate-180"
                }`} />
              </button>

              {openDropdown === "platform" && (
                <div 
                  className="absolute top-full left-0 right-0 pt-2 z-50 motion-safe:animate-in fade-in-50 duration-150 motion-reduce:animate-none"
                  onMouseEnter={() => handleMouseEnter("platform")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 grid grid-cols-3 gap-6">
                      
                      <div className="space-y-4">
                        <span className="text-xs font-semibold text-slate-500 block">AI Engagement</span>
                        <Link href="/conversational-ai" onClick={closeAll} className="group/item block p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                          <div className="flex items-center gap-3">
                            <Bot className="w-5 h-5 text-sky-600 shrink-0" />
                            <div>
                              <p className="text-sm font-semibold text-slate-900 group-hover/item:text-sky-700 transition-colors">AI Voice & Chat Agents</p>
                              <p className="text-xs text-slate-500 mt-0.5">Autonomous natural conversation on voice and messaging</p>
                            </div>
                          </div>
                        </Link>

                        <Link href="/omnichannel-routing" onClick={closeAll} className="group/item block p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                          <div className="flex items-center gap-3">
                            <Shuffle className="w-5 h-5 text-sky-600 shrink-0" />
                            <div>
                              <p className="text-sm font-semibold text-slate-900 group-hover/item:text-sky-700 transition-colors">Omnichannel Routing</p>
                              <p className="text-xs text-slate-500 mt-0.5">Persistent context across Voice, WhatsApp, SMS, and Web</p>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <div className="space-y-4">
                        <span className="text-xs font-semibold text-slate-500 block">Contact Center Core</span>
                        <Link href="/inbound-calling" onClick={closeAll} className="group/item block p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                          <div className="flex items-center gap-3">
                            <PhoneCall className="w-5 h-5 text-sky-600 shrink-0" />
                            <div>
                              <p className="text-sm font-semibold text-slate-900 group-hover/item:text-sky-700 transition-colors">Inbound Calling & IVR</p>
                              <p className="text-xs text-slate-500 mt-0.5">Multi-level IVR, skill-based ACD, and cloud SIP trunking</p>
                            </div>
                          </div>
                        </Link>

                        <Link href="/auto-dialer" onClick={closeAll} className="group/item block p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                          <div className="flex items-center gap-3">
                            <PhoneOutgoing className="w-5 h-5 text-sky-600 shrink-0" />
                            <div>
                              <p className="text-sm font-semibold text-slate-900 group-hover/item:text-sky-700 transition-colors">Outbound Sales Dialers</p>
                              <p className="text-xs text-slate-500 mt-0.5">Predictive, progressive, and power campaign dialing</p>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <div className="space-y-4">
                        <span className="text-xs font-semibold text-slate-500 block">Intelligence & Quality</span>
                        <Link href="/speech-analytics" onClick={closeAll} className="group/item block p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                          <div className="flex items-center gap-3">
                            <Activity className="w-5 h-5 text-sky-600 shrink-0" />
                            <div>
                              <p className="text-sm font-semibold text-slate-900 group-hover/item:text-sky-700 transition-colors">Conversation Intelligence</p>
                              <p className="text-xs text-slate-500 mt-0.5">100% automated QA, transcription, and compliance scoring</p>
                            </div>
                          </div>
                        </Link>

                        <Link href="/contact-manager" onClick={closeAll} className="group/item block p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                          <div className="flex items-center gap-3">
                            <BarChart3 className="w-5 h-5 text-sky-600 shrink-0" />
                            <div>
                              <p className="text-sm font-semibold text-slate-900 group-hover/item:text-sky-700 transition-colors">Real-Time CX Analytics</p>
                              <p className="text-xs text-slate-500 mt-0.5">Live queue metrics, SLA alerts, and supervisor dashboards</p>
                            </div>
                          </div>
                        </Link>
                      </div>

                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div
              className="group h-full flex items-center"
              onMouseEnter={() => handleMouseEnter("solutions")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => toggleDropdown("solutions")}
                aria-expanded={openDropdown === "solutions"}
                className={`whitespace-nowrap inline-flex items-center gap-1.5 text-[15px] font-medium transition-colors cursor-pointer ${
                  openDropdown === "solutions"
                    ? "text-sky-700 font-semibold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                  openDropdown === "solutions" ? "rotate-180 text-sky-700" : "group-hover:rotate-180"
                }`} />
              </button>

              {openDropdown === "solutions" && (
                <div 
                  className="absolute top-full left-0 right-0 pt-2 z-50 motion-safe:animate-in fade-in-50 duration-150 motion-reduce:animate-none"
                  onMouseEnter={() => handleMouseEnter("solutions")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 grid grid-cols-3 gap-6">
                      
                      <div className="space-y-3">
                        <span className="text-xs font-semibold text-slate-500 block">By Industry</span>
                        <Link href="/bpo" onClick={closeAll} className="block p-2 rounded-lg hover:bg-slate-50 transition-colors">
                          <p className="text-sm font-semibold text-slate-900 hover:text-sky-700">BPO & Contact Centers</p>
                          <p className="text-xs text-slate-500">Multi-tenant, high-concurrency telephony with granular billing</p>
                        </Link>
                        <Link href="/enterprise" onClick={closeAll} className="block p-2 rounded-lg hover:bg-slate-50 transition-colors">
                          <p className="text-sm font-semibold text-slate-900 hover:text-sky-700">Banking & Financial Services</p>
                          <p className="text-xs text-slate-500">Secure PCI-DSS & SOC2 compliant transactions and verification</p>
                        </Link>
                      </div>

                      <div className="space-y-3">
                        <span className="text-xs font-semibold text-slate-500 block">Growth Markets</span>
                        <Link href="/education" onClick={closeAll} className="block p-2 rounded-lg hover:bg-slate-50 transition-colors">
                          <p className="text-sm font-semibold text-slate-900 hover:text-sky-700">Education & Admissions</p>
                          <p className="text-xs text-slate-500">Multi-channel student inquiries, reminders, and enrollment</p>
                        </Link>
                        <Link href="/small-business" onClick={closeAll} className="block p-2 rounded-lg hover:bg-slate-50 transition-colors">
                          <p className="text-sm font-semibold text-slate-900 hover:text-sky-700">E-commerce & Retail</p>
                          <p className="text-xs text-slate-500">Automated order updates, delivery tracking via WhatsApp</p>
                        </Link>
                      </div>

                      <div className="p-4 bg-slate-50 rounded-xl flex flex-col justify-between">
                        <div>
                          <p className="text-sm font-semibold text-slate-900">Custom Enterprise Solutions</p>
                          <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                            Need custom SIP interconnection, hybrid on-prem bridges, or dedicated private AI models?
                          </p>
                        </div>
                        <Link
                          href="/contact-us#quote"
                          onClick={closeAll}
                          className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-800"
                        >
                          <span>Speak with an engineer</span>
                          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </Link>
                      </div>

                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Integrations Dropdown */}
            <div
              className="group h-full flex items-center"
              onMouseEnter={() => handleMouseEnter("integrations")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => toggleDropdown("integrations")}
                aria-expanded={openDropdown === "integrations"}
                className={`whitespace-nowrap inline-flex items-center gap-1.5 text-[15px] font-medium transition-colors cursor-pointer ${
                  openDropdown === "integrations"
                    ? "text-sky-700 font-semibold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>Integrations</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                  openDropdown === "integrations" ? "rotate-180 text-sky-700" : "group-hover:rotate-180"
                }`} />
              </button>

              {openDropdown === "integrations" && (
                <div 
                  className="absolute top-full left-0 right-0 pt-2 z-50 motion-safe:animate-in fade-in-50 duration-150 motion-reduce:animate-none"
                  onMouseEnter={() => handleMouseEnter("integrations")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 grid grid-cols-4 gap-5">
                      
                      <Link href="/salesforce" onClick={closeAll} className="group/int flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                        <SalesforceLogo className="w-7 h-7 shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-slate-900 group-hover/int:text-sky-700">Salesforce</p>
                          <p className="text-xs text-slate-500">Native CTI screen-pop</p>
                        </div>
                      </Link>

                      <Link href="/zoho" onClick={closeAll} className="group/int flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                        <ZohoLogo className="w-7 h-7 shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-slate-900 group-hover/int:text-sky-700">Zoho CRM</p>
                          <p className="text-xs text-slate-500">PhoneBridge sync</p>
                        </div>
                      </Link>

                      <Link href="/zendesk" onClick={closeAll} className="group/int flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                        <ZendeskLogo className="w-7 h-7 shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-slate-900 group-hover/int:text-sky-700">Zendesk</p>
                          <p className="text-xs text-slate-500">Embedded softphone</p>
                        </div>
                      </Link>

                      <Link href="/whatsapp-business" onClick={closeAll} className="group/int flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                        <WhatsAppLogo className="w-7 h-7 shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-slate-900 group-hover/int:text-sky-700">WhatsApp</p>
                          <p className="text-xs text-slate-500">Official Cloud API</p>
                        </div>
                      </Link>

                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <Link
              href="/about-us"
              className="whitespace-nowrap text-[15px] font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              About
            </Link>

            <Link
              href="/blogs"
              className="whitespace-nowrap text-[15px] font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Blog
            </Link>

            <Link
              href="/contact-us"
              className="whitespace-nowrap text-[15px] font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Contact
            </Link>

          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact-us#quote"
              onClick={onRequestQuote}
              className="whitespace-nowrap text-sm font-semibold text-slate-700 hover:text-slate-900 px-3 py-2 transition-colors cursor-pointer"
            >
              Book a Demo
            </Link>

            <a
              href="https://cxq360.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-sky-700 text-white hover:bg-sky-800 shadow-2xs transition-colors cursor-pointer"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="https://cxq360.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold px-3 py-1.5 rounded-md bg-sky-700 text-white"
            >
              Free Trial
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-6 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
          <div className="space-y-2">
            <Link
              href="/"
              onClick={closeAll}
              className="block py-2 text-base font-semibold text-slate-900"
            >
              Home
            </Link>

            {/* Mobile Platform Accordion */}
            <div>
              <button
                type="button"
                onClick={() => toggleMobileAccordion("platform")}
                className="w-full flex items-center justify-between py-2 text-base font-semibold text-slate-900"
              >
                <span>Platform</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileAccordion === "platform" ? "rotate-180" : ""}`} />
              </button>
              {mobileAccordion === "platform" && (
                <div className="pl-4 space-y-2 pt-1 pb-2">
                  <Link href="/conversational-ai" onClick={closeAll} className="block text-sm text-slate-600 py-1">AI Voice & Chat Agents</Link>
                  <Link href="/omnichannel-routing" onClick={closeAll} className="block text-sm text-slate-600 py-1">Omnichannel Routing</Link>
                  <Link href="/inbound-calling" onClick={closeAll} className="block text-sm text-slate-600 py-1">Inbound Calling & IVR</Link>
                  <Link href="/auto-dialer" onClick={closeAll} className="block text-sm text-slate-600 py-1">Outbound Sales Dialers</Link>
                  <Link href="/speech-analytics" onClick={closeAll} className="block text-sm text-slate-600 py-1">Conversation Intelligence</Link>
                  <Link href="/contact-manager" onClick={closeAll} className="block text-sm text-slate-600 py-1">Real-Time CX Analytics</Link>
                </div>
              )}
            </div>

            {/* Mobile Solutions Accordion */}
            <div>
              <button
                type="button"
                onClick={() => toggleMobileAccordion("solutions")}
                className="w-full flex items-center justify-between py-2 text-base font-semibold text-slate-900"
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileAccordion === "solutions" ? "rotate-180" : ""}`} />
              </button>
              {mobileAccordion === "solutions" && (
                <div className="pl-4 space-y-2 pt-1 pb-2">
                  <Link href="/bpo" onClick={closeAll} className="block text-sm text-slate-600 py-1">BPO & Contact Centers</Link>
                  <Link href="/enterprise" onClick={closeAll} className="block text-sm text-slate-600 py-1">Banking & Financial Services</Link>
                  <Link href="/education" onClick={closeAll} className="block text-sm text-slate-600 py-1">Education & Admissions</Link>
                  <Link href="/small-business" onClick={closeAll} className="block text-sm text-slate-600 py-1">E-commerce & Retail</Link>
                </div>
              )}
            </div>

            {/* Mobile Integrations */}
            <div>
              <button
                type="button"
                onClick={() => toggleMobileAccordion("integrations")}
                className="w-full flex items-center justify-between py-2 text-base font-semibold text-slate-900"
              >
                <span>Integrations</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileAccordion === "integrations" ? "rotate-180" : ""}`} />
              </button>
              {mobileAccordion === "integrations" && (
                <div className="pl-4 space-y-2 pt-1 pb-2">
                  <Link href="/salesforce" onClick={closeAll} className="block text-sm text-slate-600 py-1">Salesforce CTI</Link>
                  <Link href="/zoho" onClick={closeAll} className="block text-sm text-slate-600 py-1">Zoho PhoneBridge</Link>
                  <Link href="/zendesk" onClick={closeAll} className="block text-sm text-slate-600 py-1">Zendesk Softphone</Link>
                  <Link href="/whatsapp-business" onClick={closeAll} className="block text-sm text-slate-600 py-1">WhatsApp Cloud API</Link>
                </div>
              )}
            </div>

            <Link href="/about-us" onClick={closeAll} className="block py-2 text-base font-semibold text-slate-900">About Us</Link>
            <Link href="/blogs" onClick={closeAll} className="block py-2 text-base font-semibold text-slate-900">Blog</Link>
            <Link href="/contact-us" onClick={closeAll} className="block py-2 text-base font-semibold text-slate-900">Contact Us</Link>
          </div>

          <div className="pt-4 border-t border-slate-200 space-y-3">
            <Link
              href="/contact-us#quote"
              onClick={closeAll}
              className="block w-full text-center py-2.5 rounded-lg border border-slate-300 text-sm font-semibold text-slate-800"
            >
              Book a Demo
            </Link>
            <a
              href="https://cxq360.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-2.5 rounded-lg bg-sky-700 text-white text-sm font-semibold"
            >
              Start Free Trial (CXQ360.ai)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
