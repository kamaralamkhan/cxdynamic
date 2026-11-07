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
  Flame,
  Building2,
  ArrowRight,
  Layers,
  Sparkles,
  MessageSquare,
  Compass,
  CheckCircle2,
  ShieldCheck,
  Headphones,
  Bot,
  Zap,
  Globe2,
  GraduationCap,
  Store,
  PhoneForwarded,
  Users,
  BarChart3,
  Activity,
  Mic,
  MessageCircle,
  HelpCircle,
  Radio,
  FileText
} from "lucide-react";

interface NavbarProps {
  onRequestQuote?: () => void;
}

export default function Navbar({ onRequestQuote }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>("products");
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
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

  // Cleanup timeout on unmount
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
    // 250ms buffer allows effortless diagonal mouse movement from button to mega menu
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 250);
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
    <header ref={navRef} className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs transition-shadow">
      {/* Top Utility Bar (36px, bg-slate-900, hidden on <md) */}
      <div className="hidden md:flex h-9 items-center bg-slate-900 text-slate-300 px-6 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>VIP support · </span>
              <a href="tel:+639060986036" className="hover:text-white transition-colors font-medium">
                +63 906 098 6036
              </a>
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <Link href="/about-us" className="hover:text-white transition-colors">About Us</Link>
            <span className="text-slate-700">•</span>
            <Link href="/blogs" className="hover:text-white transition-colors">Blog</Link>
            <span className="text-slate-700">•</span>
            <Link href="/contact-us" className="hover:text-white transition-colors">Support</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar Container (Height 64px, max-w-7xl px-6) */}
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between transition-all duration-200">

          {/* Authentic Brand Logo */}
          <Link href="/" onClick={closeAll} className="flex items-center shrink-0 pr-4">
            <Image
              src="/images/logo.png"
              alt="CXDYNAMIQ Cloud Contact Center"
              width={180}
              height={36}
              priority
              className="h-8 w-auto object-contain transition-all"
            />
          </Link>

          {/* Desktop Navigation with Smooth Transitions */}
          <nav className="hidden xl:flex items-center h-full gap-7 xl:gap-8">

            {/* Level 1: Home */}
            <Link
              href="/"
              className="whitespace-nowrap text-[15px] font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Home
            </Link>

            {/* Level 1: About Us */}
            <Link
              href="/about-us"
              className="whitespace-nowrap text-[15px] font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              About Us
            </Link>

            {/* Level 2: Our Products Mega Menu (Sleek SaaS Layout) */}
            <div
              className="group h-full flex items-center"
              onMouseEnter={() => handleMouseEnter("products")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => toggleDropdown("products")}
                aria-expanded={openDropdown === "products"}
                className={`whitespace-nowrap inline-flex items-center gap-1.5 text-[15px] font-medium transition-colors cursor-pointer ${openDropdown === "products"
                    ? "text-sky-700 font-semibold"
                    : "text-slate-600 hover:text-slate-900"
                  }`}
              >
                <span>Our Products</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${openDropdown === "products" ? "rotate-180 text-sky-700" : "group-hover:rotate-180"
                  }`} />
              </button>

              {/* Mega Menu Dropdown: Ultra-Smooth SaaS Animation with Cubic Bezier */}
              <div
                onMouseEnter={() => handleMouseEnter("products")}
                onMouseLeave={handleMouseLeave}
                className={`absolute top-full left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl pt-3 z-50 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] before:absolute before:-top-4 before:left-0 before:right-0 before:h-6 before:content-[''] ${openDropdown === "products"
                    ? "opacity-100 visible pointer-events-auto translate-y-0 scale-100"
                    : "opacity-0 invisible pointer-events-none -translate-y-1.5 scale-[0.985]"
                  }`}
              >
                <div className="backdrop-blur-xl bg-white/98 rounded-2xl border border-slate-200/90 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.14),0_0_0_1px_rgba(226,232,240,0.8)] overflow-hidden transition-all duration-300">

                  {/* Grid Layout: Left Spotlight Card (4 cols) + Right 4 Product Columns (8 cols) */}
                  <div className="p-6 grid grid-cols-12 gap-5">

                    {/* Left Spotlight: AI Voice & CX Platform */}
                    <div className="col-span-4 bg-gradient-to-br from-cyan-50/70 via-sky-50/40 to-slate-50 p-4 rounded-xl border border-cyan-100/90 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between pb-2 border-b border-cyan-100 mb-3">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-900 flex items-center gap-1.5 font-mono">
                            <Bot className="w-3.5 h-3.5 text-[#069bd8]" />
                            AI Voice &amp; CX Platform
                          </span>
                          <span className="text-[9px] font-bold uppercase tracking-wider text-cyan-700 bg-cyan-100/80 px-2 py-0.5 rounded-md font-mono">
                            GenAI
                          </span>
                        </div>

                        <div className="space-y-1">
                          <Link
                            href="/conversational-ai"
                            onClick={closeAll}
                            className="group/item flex items-start gap-2.5 p-2 rounded-lg hover:bg-white transition-all shadow-2xs"
                          >
                            <Bot className="w-4 h-4 text-[#069bd8] shrink-0 mt-0.5" />
                            <div className="flex-1">
                              <span className="text-[13px] font-bold text-slate-800 group-hover/item:text-[#069bd8] transition-colors flex items-center justify-between">
                                Conversational AI
                                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 text-[#069bd8] transition-all" />
                              </span>
                              <span className="text-[11px] text-slate-600 mt-0.5 block">Autonomous speech &amp; chat voicebots</span>
                            </div>
                          </Link>

                          <Link
                            href="/omnichannel-routing"
                            onClick={closeAll}
                            className="group/item flex items-start gap-2.5 p-2 rounded-lg hover:bg-white transition-all shadow-2xs"
                          >
                            <Shuffle className="w-4 h-4 text-[#069bd8] shrink-0 mt-0.5" />
                            <div className="flex-1">
                              <span className="text-[13px] font-bold text-slate-800 group-hover/item:text-[#069bd8] transition-colors flex items-center justify-between">
                                Omnichannel Routing
                                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 text-[#069bd8] transition-all" />
                              </span>
                              <span className="text-[11px] text-slate-600 mt-0.5 block">Unified voice, SMS &amp; WhatsApp queue</span>
                            </div>
                          </Link>

                          <Link
                            href="/speech-analytics"
                            onClick={closeAll}
                            className="group/item flex items-start gap-2.5 p-2 rounded-lg hover:bg-white transition-all shadow-2xs"
                          >
                            <Activity className="w-4 h-4 text-[#069bd8] shrink-0 mt-0.5" />
                            <div className="flex-1">
                              <span className="text-[13px] font-bold text-slate-800 group-hover/item:text-[#069bd8] transition-colors flex items-center justify-between">
                                Speech Analytics
                                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 text-[#069bd8] transition-all" />
                              </span>
                              <span className="text-[11px] text-slate-600 mt-0.5 block">Real-time sentiment &amp; QA audits</span>
                            </div>
                          </Link>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-cyan-100/80 mt-3">
                        <Link
                          href="/conversational-ai"
                          onClick={closeAll}
                          className="text-xs font-bold text-[#069bd8] hover:text-cyan-700 hover:underline flex items-center gap-1"
                        >
                          Explore AI Platform Suite <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Right Columns: 4 Clean Columns (spans 8 cols) with vertical accent line */}
                    <div className="col-span-8 grid grid-cols-4 gap-4 pl-1">

                      {/* Col 1: Industry Solution */}
                      <div className="space-y-2">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-900 border-l-2 border-[#069bd8] pl-2 flex items-center gap-1">
                          <span>Industry</span>
                        </div>
                        <div className="space-y-1">
                          <Link href="/enterprise" onClick={closeAll} className="group/item flex items-start gap-2 p-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                            <Building2 className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-[#069bd8] shrink-0 mt-0.5 transition-colors" />
                            <div>
                              <span className="text-[13px] font-semibold text-slate-800 group-hover/item:text-[#069bd8] block">Enterprise</span>
                              <span className="text-[10px] text-slate-500 block leading-tight">High-volume ops</span>
                            </div>
                          </Link>
                          <Link href="/bpo" onClick={closeAll} className="group/item flex items-start gap-2 p-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                            <Headphones className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-[#069bd8] shrink-0 mt-0.5 transition-colors" />
                            <div>
                              <span className="text-[13px] font-semibold text-slate-800 group-hover/item:text-[#069bd8] block">BPO Solutions</span>
                              <span className="text-[10px] text-slate-500 block leading-tight">Multi-tenant pacing</span>
                            </div>
                          </Link>
                          <Link href="/education" onClick={closeAll} className="group/item flex items-start gap-2 p-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                            <GraduationCap className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-[#069bd8] shrink-0 mt-0.5 transition-colors" />
                            <div>
                              <span className="text-[13px] font-semibold text-slate-800 group-hover/item:text-[#069bd8] block">Education</span>
                              <span className="text-[10px] text-slate-500 block leading-tight">Admissions outreach</span>
                            </div>
                          </Link>
                          <Link href="/small-business" onClick={closeAll} className="group/item flex items-start gap-2 p-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                            <Store className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-[#069bd8] shrink-0 mt-0.5 transition-colors" />
                            <div>
                              <span className="text-[13px] font-semibold text-slate-800 group-hover/item:text-[#069bd8] block">Small Business</span>
                              <span className="text-[10px] text-slate-500 block leading-tight">Virtual phone setup</span>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Col 2: Call Centre Solution */}
                      <div className="space-y-2">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-900 border-l-2 border-[#069bd8] pl-2 flex items-center gap-1">
                          <span>Call Centre</span>
                        </div>
                        <div className="space-y-1">
                          <Link href="/inbound-calling" onClick={closeAll} className="group/item flex items-start gap-2 p-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                            <PhoneCall className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-[#069bd8] shrink-0 mt-0.5 transition-colors" />
                            <div>
                              <span className="text-[13px] font-semibold text-slate-800 group-hover/item:text-[#069bd8] block">Inbound Calling</span>
                              <span className="text-[10px] text-slate-500 block leading-tight">Intelligent ACD</span>
                            </div>
                          </Link>
                          <Link href="/outbound-calling" onClick={closeAll} className="group/item flex items-start gap-2 p-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                            <PhoneOutgoing className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-[#069bd8] shrink-0 mt-0.5 transition-colors" />
                            <div>
                              <span className="text-[13px] font-semibold text-slate-800 group-hover/item:text-[#069bd8] block">Outbound Calling</span>
                              <span className="text-[10px] text-slate-500 block leading-tight">High connect rates</span>
                            </div>
                          </Link>
                          <Link href="/blended-call-centre" onClick={closeAll} className="group/item flex items-start gap-2 p-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                            <Shuffle className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-[#069bd8] shrink-0 mt-0.5 transition-colors" />
                            <div>
                              <span className="text-[13px] font-semibold text-slate-800 group-hover/item:text-[#069bd8] block">Blended Centre</span>
                              <span className="text-[10px] text-slate-500 block leading-tight">Unified 2-way handling</span>
                            </div>
                          </Link>
                          <Link href="/cti-integrations" onClick={closeAll} className="group/item flex items-start gap-2 p-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                            <Cpu className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-[#069bd8] shrink-0 mt-0.5 transition-colors" />
                            <div>
                              <span className="text-[13px] font-semibold text-slate-800 group-hover/item:text-[#069bd8] block">CTI Integrations</span>
                              <span className="text-[10px] text-slate-500 block leading-tight">CRM screen pops</span>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Col 3: Business Phone System */}
                      <div className="space-y-2">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-900 border-l-2 border-[#069bd8] pl-2 flex items-center gap-1">
                          <span>Phone System</span>
                        </div>
                        <div className="space-y-1">
                          <Link href="/auto-attendant" onClick={closeAll} className="group/item flex items-start gap-2 p-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                            <Bot className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-[#069bd8] shrink-0 mt-0.5 transition-colors" />
                            <div>
                              <span className="text-[13px] font-semibold text-slate-800 group-hover/item:text-[#069bd8] block">Auto Attendant</span>
                              <span className="text-[10px] text-slate-500 block leading-tight">24/7 Smart IVR</span>
                            </div>
                          </Link>
                          <Link href="/contact-manager" onClick={closeAll} className="group/item flex items-start gap-2 p-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                            <Users className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-[#069bd8] shrink-0 mt-0.5 transition-colors" />
                            <div>
                              <span className="text-[13px] font-semibold text-slate-800 group-hover/item:text-[#069bd8] block">Contact Manager</span>
                              <span className="text-[10px] text-slate-500 block leading-tight">Unified caller logs</span>
                            </div>
                          </Link>
                          <Link href="/ivr" onClick={closeAll} className="group/item flex items-start gap-2 p-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                            <Phone className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-[#069bd8] shrink-0 mt-0.5 transition-colors" />
                            <div>
                              <span className="text-[13px] font-semibold text-slate-800 group-hover/item:text-[#069bd8] block">IVR Menus</span>
                              <span className="text-[10px] text-slate-500 block leading-tight">Multi-tier flow builder</span>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Col 4: Sales Dialer Solution */}
                      <div className="space-y-2">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-900 border-l-2 border-[#069bd8] pl-2 flex items-center gap-1">
                          <span>Sales Dialers</span>
                        </div>
                        <div className="space-y-1">
                          <Link href="/click-to-call" onClick={closeAll} className="group/item flex items-start gap-2 p-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                            <PhoneForwarded className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-[#069bd8] shrink-0 mt-0.5 transition-colors" />
                            <div>
                              <span className="text-[13px] font-semibold text-slate-800 group-hover/item:text-[#069bd8] block">Click to Call</span>
                              <span className="text-[10px] text-slate-500 block leading-tight">1-click web dialing</span>
                            </div>
                          </Link>
                          <Link href="/auto-dialer" onClick={closeAll} className="group/item flex items-start gap-2 p-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                            <Zap className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-[#069bd8] shrink-0 mt-0.5 transition-colors" />
                            <div>
                              <span className="text-[13px] font-semibold text-slate-800 group-hover/item:text-[#069bd8] block">Auto Dialer</span>
                              <span className="text-[10px] text-slate-500 block leading-tight">Smart list pacing</span>
                            </div>
                          </Link>
                          <Link href="/crm-integrations" onClick={closeAll} className="group/item flex items-start gap-2 p-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                            <Layers className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-[#069bd8] shrink-0 mt-0.5 transition-colors" />
                            <div>
                              <span className="text-[13px] font-semibold text-slate-800 group-hover/item:text-[#069bd8] block">CRM Integrations</span>
                              <span className="text-[10px] text-slate-500 block leading-tight">Salesforce, Zoho, Hub</span>
                            </div>
                          </Link>
                        </div>
                      </div>

                    </div>

                  </div>

                  {/* Mega Menu Footer Strip (Like Aircall's TRY FOR FREE Banner) */}
                  <div className="bg-slate-50/90 border-t border-slate-100 px-6 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-semibold text-slate-800">READY TO MODERNIZE YOUR CONTACT CENTER?</span>
                      <span className="hidden md:inline text-slate-400">•</span>
                      <span className="hidden md:inline text-slate-600">Go live in 1 day with VIP support · 15+ Products &amp; Solutions</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Link href="/contact-us" onClick={closeAll} className="font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1 group/btn">
                        <span>Book a Demo</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Level 2: Why CXDYNAMIQ Mega Menu (Aircall Integrations Inspired Layout) */}
            <div
              className="group h-full flex items-center"
              onMouseEnter={() => handleMouseEnter("why")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => toggleDropdown("why")}
                aria-expanded={openDropdown === "why"}
                className={`whitespace-nowrap inline-flex items-center gap-1.5 text-[15px] font-medium transition-colors cursor-pointer ${openDropdown === "why"
                    ? "text-sky-700 font-semibold"
                    : "text-slate-600 hover:text-slate-900"
                  }`}
              >
                <span>Why CXDYNAMIQ</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${openDropdown === "why" ? "rotate-180 text-sky-700" : "group-hover:rotate-180"
                  }`} />
              </button>

              {/* Mega Menu Dropdown: Ultra-Smooth SaaS Animation with Cubic Bezier */}
              <div
                onMouseEnter={() => handleMouseEnter("why")}
                onMouseLeave={handleMouseLeave}
                className={`absolute top-full left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl pt-3 z-50 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] before:absolute before:-top-4 before:left-0 before:right-0 before:h-6 before:content-[''] ${openDropdown === "why"
                    ? "opacity-100 visible pointer-events-auto translate-y-0 scale-100"
                    : "opacity-0 invisible pointer-events-none -translate-y-1.5 scale-[0.985]"
                  }`}
              >
                <div className="backdrop-blur-xl bg-white/98 rounded-2xl border border-slate-200/90 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.14),0_0_0_1px_rgba(226,232,240,0.8)] overflow-hidden transition-all duration-300">

                  {/* Grid Layout: Left 3 Columns (8 cols) + Right Spotlight Card (4 cols) */}
                  <div className="p-6 grid grid-cols-12 gap-5">

                    {/* Left Columns: 3 Organized Columns (spans 8 cols) */}
                    <div className="col-span-8 grid grid-cols-3 gap-5 pr-2">

                      {/* Col 1: CTI Integrations */}
                      <div className="space-y-2">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-900 border-l-2 border-[#069bd8] pl-2 flex items-center gap-1">
                          <span>CRM &amp; CTI</span>
                        </div>
                        <div className="space-y-1">
                          <Link href="/zoho" onClick={closeAll} className="group/item flex items-start gap-2 p-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                            <Layers className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-[#069bd8] shrink-0 mt-0.5 transition-colors" />
                            <div>
                              <span className="text-[13px] font-semibold text-slate-800 group-hover/item:text-[#069bd8] block">Zoho CRM</span>
                              <span className="text-[10px] text-slate-500 block leading-tight">PhoneBridge 1-click CTI</span>
                            </div>
                          </Link>
                          <Link href="/zendesk" onClick={closeAll} className="group/item flex items-start gap-2 p-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                            <Headphones className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-[#069bd8] shrink-0 mt-0.5 transition-colors" />
                            <div>
                              <span className="text-[13px] font-semibold text-slate-800 group-hover/item:text-[#069bd8] block">Zendesk</span>
                              <span className="text-[10px] text-slate-500 block leading-tight">Live ticket sync &amp; pop</span>
                            </div>
                          </Link>
                          <Link href="/salesforce" onClick={closeAll} className="group/item flex items-start gap-2 p-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                            <ShieldCheck className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-[#069bd8] shrink-0 mt-0.5 transition-colors" />
                            <div>
                              <span className="text-[13px] font-semibold text-slate-800 group-hover/item:text-[#069bd8] block">Salesforce</span>
                              <span className="text-[10px] text-slate-500 block leading-tight">Omni-channel softphone</span>
                            </div>
                          </Link>
                          <Link href="/freshdesk" onClick={closeAll} className="group/item flex items-start gap-2 p-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                            <HelpCircle className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-[#069bd8] shrink-0 mt-0.5 transition-colors" />
                            <div>
                              <span className="text-[13px] font-semibold text-slate-800 group-hover/item:text-[#069bd8] block">Freshdesk</span>
                              <span className="text-[10px] text-slate-500 block leading-tight">Instant call logging</span>
                            </div>
                          </Link>
                          <Link href="/hubspot" onClick={closeAll} className="group/item flex items-start gap-2 p-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                            <Activity className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-[#069bd8] shrink-0 mt-0.5 transition-colors" />
                            <div>
                              <span className="text-[13px] font-semibold text-slate-800 group-hover/item:text-[#069bd8] block">HubSpot</span>
                              <span className="text-[10px] text-slate-500 block leading-tight">Auto contact timeline</span>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Col 2: Digital Channels */}
                      <div className="space-y-2">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-900 border-l-2 border-[#069bd8] pl-2 flex items-center gap-1">
                          <span>Digital Channels</span>
                        </div>
                        <div className="space-y-1">
                          <Link href="/whatsapp-business" onClick={closeAll} className="group/item flex items-start gap-2 p-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                            <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5 transition-colors" />
                            <div>
                              <span className="text-[13px] font-semibold text-slate-800 group-hover/item:text-[#069bd8] block">WhatsApp Business</span>
                              <span className="text-[10px] text-slate-500 block leading-tight">Official Meta messaging</span>
                            </div>
                          </Link>
                          <Link href="/intercom-integration" onClick={closeAll} className="group/item flex items-start gap-2 p-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                            <MessageSquare className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-[#069bd8] shrink-0 mt-0.5 transition-colors" />
                            <div>
                              <span className="text-[13px] font-semibold text-slate-800 group-hover/item:text-[#069bd8] block">Intercom</span>
                              <span className="text-[10px] text-slate-500 block leading-tight">Live chat &amp; agent routing</span>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Col 3: Core Features */}
                      <div className="space-y-2">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-900 border-l-2 border-[#069bd8] pl-2 flex items-center gap-1">
                          <span>Core Telephony</span>
                        </div>
                        <div className="space-y-1">
                          <Link href="/auto-dialer" onClick={closeAll} className="group/item flex items-start gap-2 p-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                            <Zap className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-[#069bd8] shrink-0 mt-0.5 transition-colors" />
                            <div>
                              <span className="text-[13px] font-semibold text-slate-800 group-hover/item:text-[#069bd8] block">Auto Dialer</span>
                              <span className="text-[10px] text-slate-500 block leading-tight">Paced agent outreach</span>
                            </div>
                          </Link>
                          <Link href="/power-dialer" onClick={closeAll} className="group/item flex items-start gap-2 p-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                            <PhoneForwarded className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-[#069bd8] shrink-0 mt-0.5 transition-colors" />
                            <div>
                              <span className="text-[13px] font-semibold text-slate-800 group-hover/item:text-[#069bd8] block">Power Dialer</span>
                              <span className="text-[10px] text-slate-500 block leading-tight">Sequential campaign list</span>
                            </div>
                          </Link>
                          <Link href="/predictive-dialer" onClick={closeAll} className="group/item flex items-start gap-2 p-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                            <Flame className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-[#069bd8] shrink-0 mt-0.5 transition-colors" />
                            <div>
                              <span className="text-[13px] font-semibold text-slate-800 group-hover/item:text-[#069bd8] block">Predictive Dialer</span>
                              <span className="text-[10px] text-slate-500 block leading-tight">Zero idle algorithm</span>
                            </div>
                          </Link>
                          <Link href="/ivr" onClick={closeAll} className="group/item flex items-start gap-2 p-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                            <PhoneCall className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-[#069bd8] shrink-0 mt-0.5 transition-colors" />
                            <div>
                              <span className="text-[13px] font-semibold text-slate-800 group-hover/item:text-[#069bd8] block">IVR (Voice Menus)</span>
                              <span className="text-[10px] text-slate-500 block leading-tight">Multi-tier self-service</span>
                            </div>
                          </Link>
                          <Link href="/acd" onClick={closeAll} className="group/item flex items-start gap-2 p-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                            <Shuffle className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-[#069bd8] shrink-0 mt-0.5 transition-colors" />
                            <div>
                              <span className="text-[13px] font-semibold text-slate-800 group-hover/item:text-[#069bd8] block">ACD (Distribution)</span>
                              <span className="text-[10px] text-slate-500 block leading-tight">Skill &amp; queue routing</span>
                            </div>
                          </Link>
                        </div>
                      </div>

                    </div>

                    {/* Right Spotlight: Enterprise Reliability & Heritage (spans 4 cols) */}
                    <div className="col-span-4 bg-gradient-to-br from-slate-50 via-cyan-50/30 to-slate-100/60 p-4 rounded-xl border border-slate-200 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between pb-2 border-b border-slate-200 mb-3">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                            <Compass className="w-3.5 h-3.5 text-[#069bd8]" />
                            Enterprise Platform
                          </span>
                          <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                            99.99% SLA
                          </span>
                        </div>

                        <div className="space-y-1">
                          <Link
                            href="/who-we-are"
                            onClick={closeAll}
                            className="group/item flex items-start gap-2.5 p-2 rounded-lg hover:bg-white transition-all shadow-2xs"
                          >
                            <Compass className="w-4 h-4 text-[#069bd8] shrink-0 mt-0.5" />
                            <div className="flex-1">
                              <span className="text-[13px] font-bold text-slate-800 group-hover/item:text-[#069bd8] transition-colors flex items-center justify-between">
                                Who We Are
                                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 text-[#069bd8] transition-all" />
                              </span>
                              <span className="text-[11px] text-slate-600 mt-0.5 block">Telephony heritage &amp; leadership</span>
                            </div>
                          </Link>

                          <Link
                            href="/about-us"
                            onClick={closeAll}
                            className="group/item flex items-start gap-2.5 p-2 rounded-lg hover:bg-white transition-all shadow-2xs"
                          >
                            <Building2 className="w-4 h-4 text-[#069bd8] shrink-0 mt-0.5" />
                            <div className="flex-1">
                              <span className="text-[13px] font-bold text-slate-800 group-hover/item:text-[#069bd8] transition-colors flex items-center justify-between">
                                About Us
                                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 text-[#069bd8] transition-all" />
                              </span>
                              <span className="text-[11px] text-slate-600 mt-0.5 block">Global carrier-grade infrastructure</span>
                            </div>
                          </Link>

                          <Link
                            href="/page/Customer Experience management"
                            onClick={closeAll}
                            className="group/item flex items-start gap-2.5 p-2 rounded-lg hover:bg-white transition-all shadow-2xs"
                          >
                            <ShieldCheck className="w-4 h-4 text-[#069bd8] shrink-0 mt-0.5" />
                            <div className="flex-1">
                              <span className="text-[13px] font-bold text-slate-800 group-hover/item:text-[#069bd8] transition-colors flex items-center justify-between">
                                Collection Management
                                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 text-[#069bd8] transition-all" />
                              </span>
                              <span className="text-[11px] text-slate-600 mt-0.5 block">FinTech &amp; debt recovery dialers</span>
                            </div>
                          </Link>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-200 mt-3">
                        <Link
                          href="/about-us"
                          onClick={closeAll}
                          className="text-xs font-bold text-[#069bd8] hover:text-cyan-700 hover:underline flex items-center gap-1"
                        >
                          Learn About CXDYNAMIQ <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                  </div>

                  {/* Mega Menu Footer Strip */}
                  <div className="bg-slate-50/90 border-t border-slate-100 px-6 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                      <span className="font-semibold text-slate-800">20+ NATIVE CRM &amp; MESSAGING INTEGRATIONS</span>
                      <span className="hidden md:inline text-slate-400">•</span>
                      <span className="hidden md:inline text-slate-600">Native screen-pop &amp; 2-way sync · Zero PBX required</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Link href="/contact-us" onClick={closeAll} className="font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1 group/btn">
                        <span>Book a Demo</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Level 1: Our Blog */}
            <Link
              href="/blogs"
              className="whitespace-nowrap text-[15px] font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Our Blog
            </Link>

            {/* Level 1: Contact Us */}
            <Link
              href="/contact-us"
              className="whitespace-nowrap text-[15px] font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Contact Us
            </Link>

          </nav>

          {/* Right Action: "Book a Demo" + "Start Free Trial" (CXQ360.ai) */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="hidden sm:flex items-center gap-3">
              <Link
                href="/contact-us#quote"
                onClick={onRequestQuote}
                className="whitespace-nowrap text-[15px] font-semibold text-slate-700 hover:text-slate-900 transition-colors px-2 py-1.5 cursor-pointer"
              >
                Book a Demo
              </Link>
              <a
                href="https://cxq360.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile inline-flex items-center justify-center gap-1.5 px-4.5 py-2.5 text-sm font-semibold bg-sky-700 hover:bg-sky-800 text-white rounded-lg shadow-sm transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Start Free Trial</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>

            {/* Mobile Hamburger (visible on mobile) */}
            <div className="flex xl:hidden items-center">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Toggle navigation"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Drawer with Full 3-Level Hierarchy Accordions */}
      <div className={`xl:hidden border-t border-slate-200 bg-white px-4 pt-4 pb-8 space-y-4 max-h-[calc(100vh-4rem)] overflow-y-auto ${mobileOpen ? "block animate-in slide-in-from-top-2" : "hidden"
        }`}>

        <div className="space-y-1 font-semibold text-sm">

          {/* Level 1: Home */}
          <Link href="/" onClick={closeAll} className="block px-3 py-2 text-slate-800 hover:bg-slate-50 rounded-lg">
            Home
          </Link>

          {/* Level 1: About Us */}
          <Link href="/about-us" onClick={closeAll} className="block px-3 py-2 text-slate-800 hover:bg-slate-50 rounded-lg">
            About Us
          </Link>

          {/* Level 2: Our Products Accordion */}
          <div className="border-t border-slate-100 pt-2">
            <button
              type="button"
              onClick={() => toggleMobileAccordion("products")}
              className="flex items-center justify-between w-full px-3 py-2 text-left font-bold text-slate-900 hover:bg-slate-50 rounded-lg"
            >
              <span>Our Products</span>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${mobileAccordion === "products" ? "rotate-180" : ""}`} />
            </button>

            <div className={`pl-3 pr-1 py-2 space-y-3 bg-slate-50/70 rounded-xl my-1 border border-slate-100 ${mobileAccordion === "products" ? "block" : "hidden"}`}>

              {/* Sub 1: Industry Solution */}
              <div className="space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-cyan-700 px-2 pt-1">
                  Industry Solution
                </div>
                <Link href="/enterprise" onClick={closeAll} className="block px-2.5 py-1 text-xs text-slate-700 hover:text-[#069bd8]">
                  Enterprise
                </Link>
                <Link href="/bpo" onClick={closeAll} className="block px-2.5 py-1 text-xs text-slate-700 hover:text-[#069bd8]">
                  BPO Solutions
                </Link>
                <Link href="/education" onClick={closeAll} className="block px-2.5 py-1 text-xs text-slate-700 hover:text-[#069bd8]">
                  Education
                </Link>
                <Link href="/small-business" onClick={closeAll} className="block px-2.5 py-1 text-xs text-slate-700 hover:text-[#069bd8]">
                  Small Business
                </Link>
              </div>

              {/* Sub 2: Call Centre Solution */}
              <div className="space-y-1 border-t border-slate-200/60 pt-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-cyan-700 px-2 pt-1">
                  Call Centre Solution
                </div>
                <Link href="/inbound-calling" onClick={closeAll} className="block px-2.5 py-1 text-xs text-slate-700 hover:text-[#069bd8]">
                  Inbound Calling
                </Link>
                <Link href="/outbound-calling" onClick={closeAll} className="block px-2.5 py-1 text-xs text-slate-700 hover:text-[#069bd8]">
                  Outbound Calling
                </Link>
                <Link href="/blended-call-centre" onClick={closeAll} className="block px-2.5 py-1 text-xs text-slate-700 hover:text-[#069bd8]">
                  Blended Call Centre
                </Link>
                <Link href="/cti-integrations" onClick={closeAll} className="block px-2.5 py-1 text-xs text-slate-700 hover:text-[#069bd8]">
                  CTI Integrations
                </Link>
              </div>

              {/* Sub 3: Business Phone System */}
              <div className="space-y-1 border-t border-slate-200/60 pt-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-cyan-700 px-2 pt-1">
                  Business Phone System
                </div>
                <Link href="/auto-attendant" onClick={closeAll} className="block px-2.5 py-1 text-xs text-slate-700 hover:text-[#069bd8]">
                  Auto Attendant
                </Link>
                <Link href="/contact-manager" onClick={closeAll} className="block px-2.5 py-1 text-xs text-slate-700 hover:text-[#069bd8]">
                  Contact Manager
                </Link>
              </div>

              {/* Sub 4: Sales Dialer Solution */}
              <div className="space-y-1 border-t border-slate-200/60 pt-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-cyan-700 px-2 pt-1">
                  Sales Dialer Solution
                </div>
                <Link href="/click-to-call" onClick={closeAll} className="block px-2.5 py-1 text-xs text-slate-700 hover:text-[#069bd8]">
                  Click to Call
                </Link>
                <Link href="/auto-dialer" onClick={closeAll} className="block px-2.5 py-1 text-xs text-slate-700 hover:text-[#069bd8]">
                  Auto Dialer
                </Link>
                <Link href="/crm-integrations" onClick={closeAll} className="block px-2.5 py-1 text-xs text-slate-700 hover:text-[#069bd8]">
                  CRM Integrations
                </Link>
              </div>

              {/* Sub 5: CX Hub & AI */}
              <div className="space-y-1 border-t border-slate-200/60 pt-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#069bd8] px-2 pt-1">
                  CXDYNAMIQ CX Hub
                </div>
                <Link href="/omnichannel-routing" onClick={closeAll} className="block px-2.5 py-1 text-xs text-slate-700 hover:text-[#069bd8]">
                  Omnichannel Routing
                </Link>
                <Link href="/conversational-ai" onClick={closeAll} className="block px-2.5 py-1 text-xs text-slate-700 hover:text-[#069bd8]">
                  Conversational AI
                </Link>
                <Link href="/speech-analytics" onClick={closeAll} className="block px-2.5 py-1 text-xs text-slate-700 hover:text-[#069bd8]">
                  Speech Analytics
                </Link>
              </div>

            </div>
          </div>

          {/* Level 2: Why CXDYNAMIQ Accordion */}
          <div className="border-t border-slate-100 pt-2">
            <button
              type="button"
              onClick={() => toggleMobileAccordion("why")}
              className="flex items-center justify-between w-full px-3 py-2 text-left font-bold text-slate-900 hover:bg-slate-50 rounded-lg"
            >
              <span>Why CXDYNAMIQ</span>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${mobileAccordion === "why" ? "rotate-180" : ""}`} />
            </button>

            <div className={`pl-3 pr-1 py-2 space-y-3 bg-slate-50/70 rounded-xl my-1 border border-slate-100 ${mobileAccordion === "why" ? "block" : "hidden"}`}>

              {/* Sub 1: CTI Integrations */}
              <div className="space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-cyan-700 px-2 pt-1">
                  CTI Integrations
                </div>
                <Link href="/zoho" onClick={closeAll} className="block px-2.5 py-1 text-xs text-slate-700 hover:text-[#069bd8]">
                  Zoho
                </Link>
                <Link href="/zendesk" onClick={closeAll} className="block px-2.5 py-1 text-xs text-slate-700 hover:text-[#069bd8]">
                  Zendesk
                </Link>
                <Link href="/salesforce" onClick={closeAll} className="block px-2.5 py-1 text-xs text-slate-700 hover:text-[#069bd8]">
                  Salesforce
                </Link>
                <Link href="/freshdesk" onClick={closeAll} className="block px-2.5 py-1 text-xs text-slate-700 hover:text-[#069bd8]">
                  Freshdesk
                </Link>
                <Link href="/hubspot" onClick={closeAll} className="block px-2.5 py-1 text-xs text-slate-700 hover:text-[#069bd8]">
                  HubSpot
                </Link>
              </div>

              {/* Sub 2: Digital Channels */}
              <div className="space-y-1 border-t border-slate-200/60 pt-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-cyan-700 px-2 pt-1">
                  Digital Channels
                </div>
                <Link href="/whatsapp-business" onClick={closeAll} className="block px-2.5 py-1 text-xs text-slate-700 hover:text-[#069bd8]">
                  WhatsApp Business
                </Link>
                <Link href="/intercom-integration" onClick={closeAll} className="block px-2.5 py-1 text-xs text-slate-700 hover:text-[#069bd8]">
                  Intercom Integration
                </Link>
              </div>

              {/* Sub 3: Features */}
              <div className="space-y-1 border-t border-slate-200/60 pt-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-cyan-700 px-2 pt-1">
                  Features
                </div>
                <Link href="/auto-dialer" onClick={closeAll} className="block px-2.5 py-1 text-xs text-slate-700 hover:text-[#069bd8]">
                  Auto Dialer
                </Link>
                <Link href="/power-dialer" onClick={closeAll} className="block px-2.5 py-1 text-xs text-slate-700 hover:text-[#069bd8]">
                  Power Dialer
                </Link>
                <Link href="/predictive-dialer" onClick={closeAll} className="block px-2.5 py-1 text-xs text-slate-700 hover:text-[#069bd8]">
                  Predictive Dialer
                </Link>
                <Link href="/ivr" onClick={closeAll} className="block px-2.5 py-1 text-xs text-slate-700 hover:text-[#069bd8]">
                  IVR
                </Link>
                <Link href="/acd" onClick={closeAll} className="block px-2.5 py-1 text-xs text-slate-700 hover:text-[#069bd8]">
                  ACD
                </Link>
              </div>

              {/* Sub 4: Company */}
              <div className="space-y-1 border-t border-slate-200/60 pt-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-cyan-700 px-2 pt-1">
                  Company
                </div>
                <Link href="/who-we-are" onClick={closeAll} className="block px-2.5 py-1 text-xs text-slate-700 hover:text-[#069bd8]">
                  Who We Are
                </Link>
                <Link href="/about-us" onClick={closeAll} className="block px-2.5 py-1 text-xs text-slate-700 hover:text-[#069bd8]">
                  About Us
                </Link>
                <Link href="/page/Customer Experience management" onClick={closeAll} className="block px-2.5 py-1 text-xs text-slate-700 hover:text-[#069bd8]">
                  Collection Management
                </Link>
              </div>

            </div>
          </div>

          {/* Level 1: Our Blog */}
          <Link href="/blogs" onClick={closeAll} className="block px-3 py-2 text-slate-800 hover:bg-slate-50 rounded-lg">
            Our Blog
          </Link>

          {/* Level 1: Contact Us */}
          <Link href="/contact-us" onClick={closeAll} className="block px-3 py-2 text-slate-800 hover:bg-slate-50 rounded-lg">
            Contact Us
          </Link>

        </div>

        <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <a
              href="tel:+639060986036"
              className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-800 font-semibold hover:bg-slate-100 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-sky-600" />
              <span>Call Us</span>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=639060986036"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-800 font-semibold hover:bg-emerald-100 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="space-y-2">
            <a
              href="https://cxq360.ai/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeAll}
              className="btn-tactile w-full py-3 text-center text-sm font-semibold bg-sky-700 hover:bg-sky-800 text-white rounded-lg shadow-sm transition-colors block"
            >
              Start Free Trial (CXQ360.ai) →
            </a>
            <Link
              href="/contact-us#quote"
              onClick={closeAll}
              className="btn-tactile w-full py-2.5 text-center text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-lg transition-colors block"
            >
              Book a Demo
            </Link>
          </div>
        </div>

      </div>
    </header>
  );
}
