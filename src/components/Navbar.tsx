"use client";

import type { ComponentType } from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Activity, ArrowRight, BarChart3, Blend, Bot, Boxes, Braces, BrainCircuit,
  Building2, ChevronDown, CircleDollarSign, CloudCog, Database, GraduationCap,
  Headphones, HeartPulse, Landmark, LifeBuoy, ListTree, Menu, MessageCircle,
  MessagesSquare, MousePointerClick, Network, Phone, PhoneCall, PhoneIncoming,
  PhoneOutgoing, Plane, RadioTower, Route, ShieldCheck, ShoppingBag, Shuffle,
  Sparkles, Store, Truck, UserCheck, UsersRound, Webhook, Workflow, Wrench, X,
} from "lucide-react";
import {
  FreshdeskLogo, HubSpotLogo, IntercomLogo, SalesforceLogo, WhatsAppLogo,
  ZendeskLogo, ZohoLogo,
} from "@/components/IntegrationLogos";

interface NavbarProps { onRequestQuote?: () => void }
type NavIcon = ComponentType<{ className?: string }>;
interface MegaLink { label: string; href: string; icon: NavIcon }
interface MegaGroup { title: string; description?: string; links: MegaLink[] }
interface MenuConfig { title: string; groups: MegaGroup[]; browseHref: string; browseLabel: string }

const PLATFORM_GROUPS: MegaGroup[] = [
  {
    title: "AI-powered CX",
    description: "Automate, assist, analyse, and improve every conversation.",
    links: [
      { label: "AI Voice & Chat Agents", href: "/conversational-ai", icon: Bot },
      { label: "Agentic AI", href: "/conversational-ai", icon: BrainCircuit },
      { label: "AI Self-Service", href: "/conversational-ai", icon: Sparkles },
      { label: "Agent Assist & Copilot", href: "/conversational-ai", icon: Headphones },
      { label: "Conversation Intelligence", href: "/speech-analytics", icon: Activity },
      { label: "AI Quality Assurance", href: "/#ai-qa", icon: ShieldCheck },
      { label: "CX Analytics", href: "/#analytics", icon: BarChart3 },
      { label: "Omnichannel Engagement", href: "/#omnichannel", icon: MessagesSquare },
    ],
  },
  {
    title: "Contact center core",
    description: "Route inbound and outbound work across one cloud platform.",
    links: [
      { label: "Inbound Calling", href: "/inbound-calling", icon: PhoneIncoming },
      { label: "Outbound Calling", href: "/outbound-calling", icon: PhoneOutgoing },
      { label: "Blended Contact Center", href: "/blended-call-centre", icon: Blend },
      { label: "Interactive Voice Response", href: "/ivr", icon: ListTree },
      { label: "ACD & Smart Routing", href: "/acd", icon: Route },
      { label: "Auto Attendant", href: "/auto-attendant", icon: PhoneCall },
      { label: "Omnichannel Routing", href: "/omnichannel-routing", icon: Shuffle },
      { label: "WhatsApp Business", href: "/whatsapp-business", icon: MessageCircle },
    ],
  },
  {
    title: "Sales & agent tools",
    description: "Give teams the right calling mode and customer context.",
    links: [
      { label: "Click to Call", href: "/click-to-call", icon: MousePointerClick },
      { label: "Auto Dialer", href: "/auto-dialer", icon: Phone },
      { label: "Power Dialer", href: "/power-dialer", icon: PhoneOutgoing },
      { label: "Predictive Dialer", href: "/predictive-dialer", icon: Activity },
      { label: "Contact Manager", href: "/contact-manager", icon: UsersRound },
      { label: "CTI Integrations", href: "/cti-integrations", icon: Network },
      { label: "CRM Integrations", href: "/crm-integrations", icon: CloudCog },
    ],
  },
];

const SOLUTION_GROUPS: MegaGroup[] = [
  {
    title: "Enterprise industries",
    links: [
      { label: "Banking & Financial Services", href: "/enterprise", icon: Landmark },
      { label: "Insurance", href: "/enterprise", icon: ShieldCheck },
      { label: "Telecom", href: "/enterprise", icon: RadioTower },
      { label: "Healthcare", href: "/enterprise", icon: HeartPulse },
      { label: "BPO & Contact Centers", href: "/bpo", icon: Building2 },
    ],
  },
  {
    title: "Customer-facing industries",
    links: [
      { label: "E-commerce", href: "/small-business", icon: ShoppingBag },
      { label: "Logistics", href: "/#challenges", icon: Truck },
      { label: "Travel & Hospitality", href: "/#challenges", icon: Plane },
      { label: "Retail", href: "/small-business", icon: Store },
      { label: "Education", href: "/education", icon: GraduationCap },
    ],
  },
  {
    title: "High-value use cases",
    links: [
      { label: "Collections", href: "/page/Customer%20Experience%20management", icon: CircleDollarSign },
      { label: "Sales & Lead Qualification", href: "/#challenges", icon: UserCheck },
      { label: "Customer Support", href: "/#challenges", icon: LifeBuoy },
      { label: "Human + AI Collaboration", href: "/#modes", icon: Workflow },
      { label: "AI QA & Compliance", href: "/#ai-qa", icon: ShieldCheck },
    ],
  },
];

const INTEGRATION_GROUPS: MegaGroup[] = [
  {
    title: "CRM",
    description: "Put live customer context inside every interaction.",
    links: [
      { label: "Salesforce", href: "/salesforce", icon: SalesforceLogo },
      { label: "HubSpot", href: "/hubspot", icon: HubSpotLogo },
      { label: "Zoho CRM", href: "/zoho", icon: ZohoLogo },
      { label: "Microsoft Dynamics", href: "/crm-integrations", icon: CloudCog },
    ],
  },
  {
    title: "Helpdesk & channels",
    description: "Keep tickets, calls, and digital conversations connected.",
    links: [
      { label: "Zendesk", href: "/zendesk", icon: ZendeskLogo },
      { label: "Freshdesk", href: "/freshdesk", icon: FreshdeskLogo },
      { label: "ServiceNow", href: "/cti-integrations", icon: Wrench },
      { label: "Intercom", href: "/intercom-integration", icon: IntercomLogo },
      { label: "WhatsApp Business", href: "/whatsapp-business", icon: WhatsAppLogo },
    ],
  },
  {
    title: "Enterprise ecosystem",
    description: "Connect operational and AI systems without replacing them.",
    links: [
      { label: "ERP & Enterprise Apps", href: "/crm-integrations", icon: Database },
      { label: "REST APIs", href: "/crm-integrations", icon: Braces },
      { label: "Real-time Webhooks", href: "/crm-integrations", icon: Webhook },
      { label: "Custom Applications", href: "/cti-integrations", icon: Boxes },
      { label: "AI / LLM Connectors", href: "/conversational-ai", icon: BrainCircuit },
    ],
  },
];

const MENUS: Record<string, MenuConfig> = {
  platform: {
    title: "One platform for AI, digital, and human-led CX",
    groups: PLATFORM_GROUPS,
    browseHref: "/products",
    browseLabel: "Explore all products and services",
  },
  solutions: {
    title: "CX solutions shaped around your industry and workflow",
    groups: SOLUTION_GROUPS,
    browseHref: "/contact-us#quote",
    browseLabel: "Discuss your use case",
  },
  integrations: {
    title: "Connect the customer technology you already use",
    groups: INTEGRATION_GROUPS,
    browseHref: "/#integrations",
    browseLabel: "View the integration ecosystem",
  },
};

const NAV_ITEMS = [
  { id: "platform", label: "Platform" },
  { id: "solutions", label: "Solutions" },
  { id: "integrations", label: "Integrations" },
] as const;

function idFor(value: string) {
  return value.toLowerCase().replaceAll("&", "and").replaceAll(" ", "-");
}

function DesktopMegaMenu({ menuId, onNavigate, onEnter, onLeave }: {
  menuId: string; onNavigate: () => void; onEnter: () => void; onLeave: () => void;
}) {
  const menu = MENUS[menuId];
  return (
    <div id={`${menuId}-mega-menu`} className="absolute inset-x-0 top-full z-50 pt-2" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-h-[calc(100dvh-7.5rem)] overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-[0_24px_64px_-24px_rgba(15,23,42,0.32)]">
          <div className="flex items-center justify-between gap-6 border-b border-slate-200 px-6 py-4">
            <p className="text-base font-semibold text-slate-950">{menu.title}</p>
            <Link href={menu.browseHref} onClick={onNavigate} className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-lg px-3 text-sm font-semibold text-sky-700 transition-colors hover:bg-sky-50 hover:text-sky-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2">
              {menu.browseLabel}<ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-7 p-6">
            {menu.groups.map((group) => (
              <section key={group.title} aria-labelledby={`${menuId}-${idFor(group.title)}`}>
                <h2 id={`${menuId}-${idFor(group.title)}`} className="text-sm font-bold text-slate-950">{group.title}</h2>
                {group.description ? <p className="mt-1 max-w-sm text-xs leading-relaxed text-slate-500">{group.description}</p> : null}
                <ul className="mt-3 grid gap-1 xl:grid-cols-2">
                  {group.links.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={`${group.title}-${item.label}`}>
                        <Link href={item.href} onClick={onNavigate} className="flex min-h-11 items-center gap-3 rounded-xl px-2.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-sky-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-1">
                          <Icon className="h-5 w-5 shrink-0 text-sky-700" aria-hidden="true" />
                          <span className="min-w-0 leading-snug">{item.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Navbar({ onRequestQuote }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>("platform");
  const [scrollProgress, setScrollProgress] = useState(0);
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [mobileOpen]);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
    setOpenDropdown(name);
  };
  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 220);
  };
  const toggleDropdown = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
    setOpenDropdown((current) => current === name ? null : name);
  };
  const closeAll = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
    setOpenDropdown(null);
    setMobileOpen(false);
  };

  return (
    <header ref={navRef} className="sticky top-0 z-50 w-full overflow-x-clip border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="hidden h-9 items-center border-b border-slate-800 bg-slate-950 px-6 text-xs text-slate-300 md:flex">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          <a href="tel:+639060986036" className="inline-flex items-center gap-2 font-medium transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400">
            <PhoneCall className="h-3.5 w-3.5 text-sky-400" aria-hidden="true" />VIP support: +63 906 098 6036
          </a>
          <div className="flex items-center gap-5 text-slate-400">
            <Link href="/about-us" className="transition-colors hover:text-white">About Us</Link>
            <Link href="/blogs" className="transition-colors hover:text-white">Knowledge Centre</Link>
            <Link href="/contact-us" className="transition-colors hover:text-white">Support</Link>
          </div>
        </div>
      </div>

      <div className="relative mx-auto w-[100dvw] max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-2 lg:gap-5">
          <Link href="/" onClick={closeAll} className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2" aria-label="CXdynamIQ home">
            <Image src="/images/logo.png" alt="CXdynamIQ" width={180} height={36} priority className="h-7 w-auto object-contain sm:h-8" />
          </Link>

          <nav className="hidden h-full items-center gap-5 lg:flex xl:gap-7" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => {
              const active = openDropdown === item.id;
              return (
                <div key={item.id} className="flex h-full items-center" onMouseEnter={() => handleMouseEnter(item.id)} onMouseLeave={handleMouseLeave}>
                  <button type="button" onClick={() => toggleDropdown(item.id)} aria-expanded={active} aria-controls={`${item.id}-mega-menu`} className={`inline-flex min-h-11 items-center gap-1.5 whitespace-nowrap rounded-lg px-1 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${active ? "text-sky-700" : "text-slate-700 hover:text-slate-950"}`}>
                    {item.label}<ChevronDown className={`h-4 w-4 transition-transform duration-200 ${active ? "rotate-180 text-sky-700" : "text-slate-400"}`} aria-hidden="true" />
                  </button>
                  {active ? <DesktopMegaMenu menuId={item.id} onNavigate={closeAll} onEnter={() => handleMouseEnter(item.id)} onLeave={handleMouseLeave} /> : null}
                </div>
              );
            })}
            <Link href="/blogs" className="whitespace-nowrap text-sm font-semibold text-slate-700 transition-colors hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500">Resources</Link>
            <Link href="/about-us" className="whitespace-nowrap text-sm font-semibold text-slate-700 transition-colors hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500">About</Link>
          </nav>

          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <Link href="/contact-us#quote" onClick={onRequestQuote} className="inline-flex min-h-11 items-center rounded-lg px-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500">Book a Demo</Link>
            <a href="https://cxq360.ai/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-sky-700 px-4 text-sm font-semibold text-white transition-colors hover:bg-sky-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2">
              Start Free Trial<ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="flex shrink-0 items-center gap-1.5 lg:hidden">
            <a href="https://cxq360.ai/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-lg bg-sky-700 px-3 text-xs font-semibold text-white transition-colors hover:bg-sky-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2">Free Trial</a>
            <button type="button" onClick={() => setMobileOpen((current) => !current)} aria-expanded={mobileOpen} aria-controls="mobile-navigation" aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"} className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500">
              {mobileOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen ? (
        <div id="mobile-navigation" className="fixed inset-x-0 bottom-0 top-16 z-50 overflow-y-auto border-t border-slate-200 bg-white px-4 pb-10 pt-4 sm:px-6 md:top-[6.25rem] lg:hidden">
          <nav aria-label="Mobile navigation" className="mx-auto max-w-2xl">
            <Link href="/" onClick={closeAll} className="flex min-h-12 items-center border-b border-slate-200 text-base font-bold text-slate-950">Home</Link>
            {NAV_ITEMS.map((item) => {
              const menu = MENUS[item.id];
              const active = mobileAccordion === item.id;
              return (
                <div key={item.id} className="border-b border-slate-200">
                  <button type="button" onClick={() => setMobileAccordion((current) => current === item.id ? null : item.id)} aria-expanded={active} aria-controls={`mobile-${item.id}`} className="flex min-h-14 w-full items-center justify-between text-left text-base font-bold text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky-500">
                    {item.label}<ChevronDown className={`h-5 w-5 transition-transform duration-200 ${active ? "rotate-180 text-sky-700" : "text-slate-400"}`} aria-hidden="true" />
                  </button>
                  {active ? (
                    <div id={`mobile-${item.id}`} className="pb-5">
                      {menu.groups.map((group) => (
                        <section key={group.title} className="pt-3">
                          <h2 className="text-sm font-bold text-slate-950">{group.title}</h2>
                          <ul className="mt-2 grid grid-cols-1 gap-1 sm:grid-cols-2">
                            {group.links.map((link) => {
                              const Icon = link.icon;
                              return <li key={`${group.title}-${link.label}`}><Link href={link.href} onClick={closeAll} className="flex min-h-11 items-center gap-3 rounded-lg px-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-sky-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"><Icon className="h-5 w-5 shrink-0 text-sky-700" aria-hidden="true" />{link.label}</Link></li>;
                            })}
                          </ul>
                        </section>
                      ))}
                      <Link href={menu.browseHref} onClick={closeAll} className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-lg px-2 text-sm font-bold text-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500">{menu.browseLabel}<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
                    </div>
                  ) : null}
                </div>
              );
            })}
            <div className="grid grid-cols-2 gap-2 py-4">
              <Link href="/blogs" onClick={closeAll} className="flex min-h-11 items-center rounded-lg px-2 text-sm font-bold text-slate-800">Resources</Link>
              <Link href="/about-us" onClick={closeAll} className="flex min-h-11 items-center rounded-lg px-2 text-sm font-bold text-slate-800">About Us</Link>
              <Link href="/contact-us" onClick={closeAll} className="flex min-h-11 items-center rounded-lg px-2 text-sm font-bold text-slate-800">Contact</Link>
              <a href="tel:+639060986036" className="flex min-h-11 items-center rounded-lg px-2 text-sm font-bold text-slate-800">Call support</a>
            </div>
            <div className="grid gap-3 border-t border-slate-200 pt-5 sm:grid-cols-2">
              <Link href="/contact-us#quote" onClick={() => { closeAll(); onRequestQuote?.(); }} className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-300 text-sm font-bold text-slate-900 transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500">Book a Demo</Link>
              <a href="https://cxq360.ai/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-sky-700 px-4 text-sm font-bold text-white transition-colors hover:bg-sky-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2">Start Free Trial<ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
            </div>
          </nav>
        </div>
      ) : null}
      {/* Reading / Scroll Progress Bar Indicator */}
      <div className="w-full h-[2.5px] bg-slate-100 overflow-hidden" aria-hidden="true">
        <div 
          className="h-full bg-gradient-to-r from-sky-700 via-sky-600 to-sky-400 transition-[width] duration-75 ease-out" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
}
