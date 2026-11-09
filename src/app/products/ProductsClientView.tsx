"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CalmFooter from "@/components/CalmFooter";
import InteractiveDemoModal from "@/components/InteractiveDemoModal";
import { PhoneCall, PhoneForwarded, Shuffle, Share2, Flame, Zap, Bot, Headphones, MessageSquare, Activity, Layers, CheckCircle2, ArrowRight, Search, Building2, GraduationCap, Store, CreditCard, Check, ChevronRight } from "lucide-react";
import { SalesforceLogo, ZohoLogo, ZendeskLogo, FreshdeskLogo, HubSpotLogo } from "@/components/IntegrationLogos";

interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  category: "call-center" | "dialers" | "phone-system" | "ai-digital" | "industry" | "integrations";
  href: string;
  icon: any;
  badge?: string;
  highlights: string[];
  description: string;
}

const PRODUCTS_DATA: ProductItem[] = [
  // 1. Call Center Solutions
  {
    id: "inbound-calling",
    name: "Inbound Calling",
    tagline: "Intelligent Call Distribution & Zero-Hold Queues",
    category: "call-center",
    href: "/inbound-calling",
    icon: PhoneCall,
    badge: "Most Popular",
    highlights: ["Sub-second SIP routing", "Skills-based queue priority", "Live supervisor whisper"],
    description: "Connect incoming customer calls to the right agent instantly. Includes dynamic IVR, queue callback, and real-time SLA metrics.",
  },
  {
    id: "outbound-calling",
    name: "Outbound Calling",
    tagline: "High-Volume Carrier Infrastructure for Outreach",
    category: "call-center",
    href: "/outbound-calling",
    icon: PhoneForwarded,
    highlights: ["Global CLI management", "Carrier failover mesh", "Compliance & DNC scrub"],
    description: "Run mission-critical outbound operations with high answer rates, local caller IDs, and automated dialer throttling.",
  },
  {
    id: "blended-call-centre",
    name: "Blended Call Centre",
    tagline: "Unified Inbound & Outbound Handling in One Desktop",
    category: "call-center",
    href: "/blended-call-centre",
    icon: Shuffle,
    badge: "High Productivity",
    highlights: ["Zero idle agent time", "Automatic pace switching", "Single unified dashboard"],
    description: "Maximize agent utilization by automatically assigning outbound calls during low inbound volume and switching back on demand.",
  },
  {
    id: "cti-integrations",
    name: "CTI Integrations",
    tagline: "Instant CRM Screen-Pops & In-Browser Softphone",
    category: "call-center",
    href: "/cti-integrations",
    icon: Share2,
    highlights: ["Salesforce, Zoho & Zendesk", "WebRTC browser softphone", "One-click call transfer"],
    description: "Turn your CRM into an active phone system. Identify callers before pickup, log interaction timelines, and dial in one click.",
  },

  // 2. Sales Dialers
  {
    id: "click-to-call",
    name: "Click to Call",
    tagline: "1-Click Web & CRM Dialing Extension",
    category: "dialers",
    href: "/click-to-call",
    icon: Zap,
    highlights: ["Browser extension dialing", "Zero manual misdials", "Instant call disposition"],
    description: "Launch voice calls directly from CRM lead lists, email signatures, or web pages with zero copy-pasting.",
  },
  {
    id: "auto-dialer",
    name: "Auto Dialer",
    tagline: "Systematic Paced Outbound Campaign Automation",
    category: "dialers",
    href: "/auto-dialer",
    icon: Flame,
    highlights: ["Lead list prioritization", "Automated retry cadences", "Real-time agent bridging"],
    description: "Streamline sales outreach by sequentially dialing prospect lists and connecting answered calls to agents without pause.",
  },
  {
    id: "power-dialer",
    name: "Power Dialer",
    tagline: "Next-Call Trigger with CRM Note Review",
    category: "dialers",
    href: "/power-dialer",
    icon: Zap,
    badge: "Sales Favorite",
    highlights: ["Rep-controlled pacing", "Instant preview notes", "Automated voicemail drop"],
    description: "Give account executives the ideal balance of speed and preparation with structured cadence dialing and quick wrap-up notes.",
  },
  {
    id: "predictive-dialer",
    name: "Predictive Dialer",
    tagline: "Algorithmic 3:1 Pacing with AMD Detection",
    category: "dialers",
    href: "/predictive-dialer",
    icon: Activity,
    badge: "300% Talk Time",
    highlights: ["Statistical pacing engine", "Answering Machine Detection", "<400ms connection delay"],
    description: "Eliminate idle time for large telesales teams. The system dials ahead statistically and delivers answered human voices.",
  },
  {
    id: "crm-integrations",
    name: "CRM Integrations Suite",
    tagline: "Universal Data Sync for Sales & Service Workflows",
    category: "dialers",
    href: "/crm-integrations",
    icon: Share2,
    highlights: ["Bi-directional data sync", "Custom field mapping", "Real-time ticket logging"],
    description: "Keep every customer record up to date automatically across Salesforce, Zoho, Zendesk, HubSpot, and custom databases.",
  },

  // 3. Business Phone System
  {
    id: "ivr",
    name: "Smart Multi-Level IVR",
    tagline: "Visual Drag-and-Drop Call Flow Architect",
    category: "phone-system",
    href: "/ivr",
    icon: Shuffle,
    highlights: ["Visual drag-and-drop builder", "Multilingual voice prompts", "Time-of-day condition branches"],
    description: "Guide callers efficiently with multi-level IVR menus, department routing, queue announcements, and self-service options.",
  },
  {
    id: "acd",
    name: "Automated Call Distribution (ACD)",
    tagline: "Skill-Based Intelligent Queue Management",
    category: "phone-system",
    href: "/acd",
    icon: Layers,
    highlights: ["Skills & proficiency routing", "Round-robin distribution", "VIP priority lane bypass"],
    description: "Ensure high-value customers reach the most qualified specialists first with rule-based routing algorithms.",
  },
  {
    id: "auto-attendant",
    name: "Auto Attendant",
    tagline: "24/7 Digital Receptionist & Dial-by-Name Directory",
    category: "phone-system",
    href: "/auto-attendant",
    icon: Headphones,
    highlights: ["Dial-by-name directory", "After-hours call greeting", "Direct extension transfers"],
    description: "Project an enterprise image around the clock with professional automated reception, company directories, and smart scheduling.",
  },
  {
    id: "contact-manager",
    name: "Contact Manager",
    tagline: "Unified Contact Directory & Complete History",
    category: "phone-system",
    href: "/contact-manager",
    icon: Building2,
    highlights: ["Searchable global directory", "Interaction audit trail", "Caller VIP tagging"],
    description: "Access caller history, previous recordings, agent notes, and communication channels in one unified customer card.",
  },

  // 4. AI & Digital Channels
  {
    id: "conversational-ai",
    name: "Conversational AI Voicebot",
    tagline: "Autonomous Human-Sounding Speech Agents",
    category: "ai-digital",
    href: "/conversational-ai",
    badge: "GenAI Powered",
    icon: Bot,
    highlights: ["Natural speech understanding", "24/7 autonomous resolution", "Zero-latency warm handover"],
    description: "Deploy generative AI voicebots that resolve common customer queries, collect payments, verify OTPs, and escalate warmly.",
  },
  {
    id: "whatsapp-business",
    name: "WhatsApp Business Suite",
    tagline: "Official Meta Cloud API & Omnichannel Chat",
    category: "ai-digital",
    href: "/whatsapp-business",
    badge: "Official Meta API",
    icon: MessageSquare,
    highlights: ["Official WhatsApp Business API", "Interactive bot button flows", "Proactive transaction alerts"],
    description: "Engage customers on their favorite messaging app with automated order tracking, appointment alerts, and live agent chat.",
  },
  {
    id: "omnichannel-routing",
    name: "Omnichannel Routing",
    tagline: "Single Queue for Voice, SMS & WhatsApp",
    category: "ai-digital",
    href: "/omnichannel-routing",
    icon: Zap,
    highlights: ["Unified agent inbox", "Cross-channel conversation thread", "Universal queue prioritization"],
    description: "Consolidate voice calls, WhatsApp messages, and SMS inquiries into a single unified workspace with complete customer context.",
  },
  {
    id: "speech-analytics",
    name: "Speech Analytics & QA",
    tagline: "100% Automated Interaction Audits & Sentiment",
    category: "ai-digital",
    href: "/speech-analytics",
    badge: "Continuous QA",
    icon: Activity,
    highlights: ["100% audio transcription", "Live sentiment tracking", "Automated compliance audits"],
    description: "Replace manual call sampling with automated AI analysis. Identify churn risks, audit script adherence, and coach agents faster.",
  },
  {
    id: "intercom-integration",
    name: "Intercom Digital Integration",
    tagline: "Converge In-App Chat with Carrier Voice",
    category: "ai-digital",
    href: "/intercom-integration",
    icon: MessageSquare,
    highlights: ["In-app messenger sync", "Click-to-call inside Intercom", "Shared ticket timelines"],
    description: "Bridge your Intercom digital helpdesk with enterprise carrier voice for complete omnichannel customer support.",
  },

  // 5. Industry Solutions
  {
    id: "enterprise",
    name: "Enterprise Contact Center",
    tagline: "High-Volume Carrier Mesh for 100+ Seats",
    category: "industry",
    href: "/enterprise",
    icon: Building2,
    badge: "Enterprise",
    highlights: ["Dedicated account manager", "99.99% carrier redundancy", "Custom REST API webhooks"],
    description: "Carrier-grade cloud voice architecture engineered for high-concurrency enterprise deployments with stringent security.",
  },
  {
    id: "bpo",
    name: "BPO & Outsourcing Solutions",
    tagline: "Multi-Tenant Telephony for Client Campaigns",
    category: "industry",
    href: "/bpo",
    icon: Layers,
    badge: "Multi-Tenant",
    highlights: ["Client-specific campaign pacing", "Granular tenant billing", "Real-time wallboard analytics"],
    description: "Built for contact center service providers to manage hundreds of distinct clients and campaigns on a single secure cloud.",
  },
  {
    id: "education",
    name: "Education & Admissions",
    tagline: "Student Enrollment & Lead Qualification Dialing",
    category: "industry",
    href: "/education",
    icon: GraduationCap,
    highlights: ["Automated applicant callbacks", "WhatsApp application updates", "Admissions CRM screen-pops"],
    description: "Accelerate student enrollment cycles with high-velocity lead outreach, multi-channel reminders, and personalized consultations.",
  },
  {
    id: "small-business",
    name: "Small Business Telephony",
    tagline: "Enterprise Features at Cost-Effective Scale",
    category: "industry",
    href: "/small-business",
    icon: Store,
    highlights: ["No hardware or PBX cost", "1-day rapid onboarding", "Flexible per-seat licensing"],
    description: "Equip growing teams with professional phone menus, mobile softphones, and CRM sync without large capital expenses.",
  },
  {
    id: "collection-management",
    name: "Debt Recovery & Collections",
    tagline: "Compliant Automated Voice & Payment Broadcasts",
    category: "industry",
    href: "/page/Customer Experience management",
    icon: CreditCard,
    highlights: ["FDCPA compliance pacing", "Interactive voice payment prompts", "WhatsApp receipt dispatch"],
    description: "Increase collection recovery rates with intelligent predictive dialing, automated payment links, and full audit logs.",
  },

  // 6. Native Integrations
  {
    id: "salesforce",
    name: "Salesforce CTI Integration",
    tagline: "Embedded OpenCTI Softphone & Call Logging",
    category: "integrations",
    href: "/salesforce",
    icon: SalesforceLogo,
    badge: "Salesforce AppExchange",
    highlights: ["Automated contact record pop", "Click-to-dial from leads", "Activity timeline sync"],
    description: "Embed CXDYNAMIQ carrier telephony directly into Salesforce Lightning for seamless agent workflows.",
  },
  {
    id: "zoho",
    name: "Zoho PhoneBridge Integration",
    tagline: "Native 1-Click Dialing & Screen-Pops in Zoho CRM",
    category: "integrations",
    href: "/zoho",
    icon: ZohoLogo,
    badge: "Official PhoneBridge",
    highlights: ["Zero-install browser popups", "Real-time call analytics", "Deal timeline updates"],
    description: "Sync all inbound and outbound call records directly into Zoho CRM and Zoho Desk with native PhoneBridge architecture.",
  },
  {
    id: "zendesk",
    name: "Zendesk Softphone CTI",
    tagline: "Instant Ticket Creation & Voice Integration",
    category: "integrations",
    href: "/zendesk",
    icon: ZendeskLogo,
    badge: "Zendesk Marketplace",
    highlights: ["Auto-generate tickets on call", "Voicemail to ticket sync", "Embedded call player"],
    description: "Equip Zendesk support teams with an integrated softphone that automatically attaches call recordings and notes to tickets.",
  },
  {
    id: "freshdesk",
    name: "Freshdesk CTI Integration",
    tagline: "Automated Ticket Logging & Caller Recognition",
    category: "integrations",
    href: "/freshdesk",
    icon: FreshdeskLogo,
    highlights: ["Freshworks Marketplace app", "Caller recognition popup", "Agent state synchronization"],
    description: "Connect customer calls with Freshdesk ticket queues to eliminate manual wrap-up work and improve CSAT.",
  },
  {
    id: "hubspot",
    name: "HubSpot CRM Telephony",
    tagline: "Bi-Directional Call Logging & Lead Timeline Sync",
    category: "integrations",
    href: "/hubspot",
    icon: HubSpotLogo,
    highlights: ["HubSpot App Marketplace", "Call recording playback", "Deal pipeline trigger sync"],
    description: "Empower inbound sales reps with instant HubSpot contact context and automatic activity logging for every conversation.",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Products (25+)" },
  { id: "call-center", label: "Call Center" },
  { id: "dialers", label: "Sales Dialers" },
  { id: "phone-system", label: "Phone System & IVR" },
  { id: "ai-digital", label: "AI & Digital CX" },
  { id: "industry", label: "Industry Solutions" },
  { id: "integrations", label: "CRM Integrations" },
];

export default function ProductsClientView() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [demoOpen, setDemoOpen] = useState<boolean>(false);

  const filteredProducts = PRODUCTS_DATA.filter((p) => {
    const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
    const matchesQuery = 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative bg-white border-b border-slate-200 pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden">
        {/* Subtle decorative background gradient */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -top-24 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-sky-100/50 via-cyan-50/30 to-transparent rounded-full blur-3xl -z-10" 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">Products Suite</span>
          </nav>

          <div className="max-w-3xl space-y-4">

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Enterprise Communication Platform,{" "}
              <span className="text-sky-600">Engineered to Scale.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore our full suite of carrier-grade call center solutions, high-velocity sales dialers, smart IVR, conversational AI, and 20+ native CRM integrations — live in hours with 24/7 VIP support.
            </p>

            {/* Quick Stats Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-slate-600">
              <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>1-Day Deployment</span>
              </div>
              <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>99.99% Carrier Mesh Uptime</span>
              </div>
              <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero PBX Hardware Required</span>
              </div>
              <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>24/7 VIP Engineering Support</span>
              </div>
            </div>
          </div>

          {/* Interactive Search & Category Filter Toolbar */}
          <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            
            {/* Search Input */}
            <div className="relative max-w-md w-full">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search solutions by keyword, feature, or CRM..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Live Call Flow Demo Modal Trigger */}
            <button
              onClick={() => setDemoOpen(true)}
              className="btn-tactile inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-sky-50 text-sky-800 border border-sky-200 hover:bg-sky-100 transition-colors cursor-pointer shrink-0"
            >
              <Activity className="w-4 h-4 text-sky-600" />
              <span>Launch 30-Sec Live Flow Demo</span>
            </button>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-slate-900 text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Products Grid Showcase Section */}
      <section className="py-14 bg-slate-50 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Result Count and Active Filters */}
          <div className="flex items-center justify-between mb-8">
            <div className="text-xs font-semibold text-slate-500">
              Showing <span className="text-slate-900 font-bold">{filteredProducts.length}</span> of {PRODUCTS_DATA.length} products
            </div>
            {selectedCategory !== "all" && (
              <button
                onClick={() => setSelectedCategory("all")}
                className="text-xs text-sky-600 hover:text-sky-800 font-semibold underline-offset-4 hover:underline"
              >
                Reset to All Products
              </button>
            )}
          </div>

          {/* Cards Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
              <Layers className="w-10 h-10 text-slate-300 mx-auto" />
              <h3 className="text-lg font-bold text-slate-900">No matching products found</h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                No solutions matched &ldquo;{searchQuery}&rdquo;. Try another search term or reset category filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="px-4 py-2 text-xs font-semibold bg-sky-700 text-white rounded-lg hover:bg-sky-800 transition-colors"
              >
                View All Products
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => {
                const Icon = product.icon;
                return (
                  <div
                    key={product.id}
                    className="calm-card p-6 bg-white border border-slate-200 hover:border-sky-300 rounded-2xl shadow-xs hover:shadow-md flex flex-col justify-between transition-all group"
                  >
                    <div className="space-y-4">
                      {/* Card Header: Icon + Badge */}
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center border border-sky-100 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        {product.badge && (
                          <span className="text-[10px] font-bold uppercase tracking-wider text-sky-800 bg-sky-50 border border-sky-100 px-2 py-0.5 rounded-full">
                            {product.badge}
                          </span>
                        )}
                      </div>

                      {/* Title & Tagline */}
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-tight">
                          <Link href={product.href} className="focus:outline-none">
                            {product.name}
                          </Link>
                        </h3>
                        <p className="text-xs font-semibold text-cyan-700 mt-1">
                          {product.tagline}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Feature Bullet Chips */}
                      <div className="pt-2 border-t border-slate-100 space-y-1.5">
                        {product.highlights.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA Link */}
                    <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href={product.href}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 group-hover:text-sky-800 group-hover:translate-x-0.5 transition-all"
                      >
                        <span>Explore Full Solution</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <Link
                        href="/contact-us"
                        className="text-[11px] font-semibold text-slate-500 hover:text-slate-900 transition-colors"
                      >
                        Book Demo →
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>
      </section>

      {/* Comparison Feature Architecture Matrix Strip */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              One Cloud Engine. Unlimited Modularity.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Combine any products or dialer modules into a single unified workspace with no extra integration charges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-xs">
                01
              </div>
              <h4 className="text-base font-bold text-slate-900">Carrier Telephony Core</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect your existing SIP trunk or use CXDYNAMIQ carrier routes with sub-15ms latency, TLS/SRTP voice encryption, and redundant failover data centers.
              </p>
              <ul className="text-xs text-slate-600 space-y-1 pt-2">
                <li className="flex items-center gap-1.5">✓ Global DID / Local numbers</li>
                <li className="flex items-center gap-1.5">✓ 99.99% carrier SLA uptime</li>
                <li className="flex items-center gap-1.5">✓ WebRTC &amp; IP phone support</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-xs">
                02
              </div>
              <h4 className="text-base font-bold text-slate-900">Campaign Pacing Engine</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Switch seamlessly between Manual Click-to-Call, Auto, Power, and Predictive modes depending on campaign velocity and agent experience level.
              </p>
              <ul className="text-xs text-slate-600 space-y-1 pt-2">
                <li className="flex items-center gap-1.5">✓ Answering Machine Detection (AMD)</li>
                <li className="flex items-center gap-1.5">✓ Dynamic 3:1 pacing algorithm</li>
                <li className="flex items-center gap-1.5">✓ Automated retry &amp; disposition</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-xs">
                03
              </div>
              <h4 className="text-base font-bold text-slate-900">AI &amp; Data Intelligence</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Empower your workforce with 100% speech transcription, live sentiment analysis, AI call wrap-up summaries, and 2-way WhatsApp automation.
              </p>
              <ul className="text-xs text-slate-600 space-y-1 pt-2">
                <li className="flex items-center gap-1.5">✓ Autonomous GenAI Voicebots</li>
                <li className="flex items-center gap-1.5">✓ Official WhatsApp Business API</li>
                <li className="flex items-center gap-1.5">✓ Zero-click post-call notes sync</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white max-w-2xl mx-auto">
            Get your custom platform configuration in 1 business day.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Our telephony architects design your IVR trees, configure CRM screen-pops, and provide dedicated onboarding support from day one.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            <Link
              href="/contact-us"
              className="btn-tactile w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-sky-600 text-white hover:bg-sky-500 shadow-md transition-colors"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => setDemoOpen(true)}
              className="btn-tactile w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-colors cursor-pointer"
            >
              <Activity className="w-4 h-4 text-cyan-400" />
              <span>Simulate 30-Sec Call Flow</span>
            </button>
          </div>

          <div className="pt-2 text-xs text-slate-400">
            Free 21-day trial • No hardware needed • Carrier SIP trunk compatibility
          </div>
        </div>
      </section>

      <CalmFooter />

      {/* Interactive 30-Sec Demo Modal */}
      <InteractiveDemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
}
