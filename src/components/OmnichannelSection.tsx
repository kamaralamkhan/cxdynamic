"use client";

import { useState } from "react";
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  Smartphone, 
  Globe, 
  Share2, 
  Send, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  History, 
  Zap,
  ShieldCheck,
  Bot,
  UserCheck
} from "lucide-react";

interface ChannelItem {
  id: string;
  name: string;
  badge: string;
  icon: typeof MessageSquare;
  color: string;
  bgColor: string;
  description: string;
  capabilities: string[];
}

const CHANNELS: ChannelItem[] = [
  {
    id: "whatsapp",
    name: "WhatsApp Business",
    badge: "Official Meta API",
    icon: MessageSquare,
    color: "#25D366",
    bgColor: "bg-emerald-500/10 border-emerald-500/30 text-emerald-600",
    description: "Rich messaging with interactive buttons, carousels, payment links, and autonomous AI resolution.",
    capabilities: ["24/7 AI chatbot resolution", "Media & document sharing", "Official Green Badge verified", "Session recovery"],
  },
  {
    id: "voice",
    name: "Voice (Inbound/Outbound)",
    badge: "Carrier-Grade SIP",
    icon: Phone,
    color: "#069bd8",
    bgColor: "bg-sky-500/10 border-sky-500/30 text-sky-600",
    description: "Sub-second WebRTC and SIP telephony with real-time speech-to-text and AI voicebot containment.",
    capabilities: ["Ultra-low latency (<200ms)", "AI conversational voicebots", "Intelligent ACD & IVR routing", "Dual-channel call recording"],
  },
  {
    id: "sms",
    name: "SMS Messaging",
    badge: "Global Two-Way",
    icon: Smartphone,
    color: "#f59e0b",
    bgColor: "bg-amber-500/10 border-amber-500/30 text-amber-600",
    description: "Global two-way SMS for OTP authentication, order tracking alerts, and automated transactional follow-ups.",
    capabilities: ["99.8% open rate delivery", "Two-way text conversations", "Shortcode & alphanumeric ID", "Fallback routing"],
  },
  {
    id: "webchat",
    name: "Live Web Chat",
    badge: "Embeddable Widget",
    icon: Globe,
    color: "#6366f1",
    bgColor: "bg-indigo-500/10 border-indigo-500/30 text-indigo-600",
    description: "Lightweight, customizable chat widget embedded directly on your web and mobile applications.",
    capabilities: ["Instant visitor identification", "Proactive trigger messages", "Co-browsing & screen share", "Zero page speed impact"],
  },
  {
    id: "messenger",
    name: "Facebook Messenger",
    badge: "Social Care",
    icon: Share2,
    color: "#0084ff",
    bgColor: "bg-blue-500/10 border-blue-500/30 text-blue-600",
    description: "Automate social customer inquiries from Facebook Pages and Instagram DMs into a single unified queue.",
    capabilities: ["Comment-to-DM automation", "Social sentiment tracking", "Lead capture forms", "Unified social inbox"],
  },
  {
    id: "viber",
    name: "Viber for Business",
    badge: "Rich Messaging",
    icon: Send,
    color: "#7360f2",
    bgColor: "bg-purple-500/10 border-purple-500/30 text-purple-600",
    description: "Engage customers across Europe and Asia with interactive rich promotional and transactional messages.",
    capabilities: ["Rich cards & action buttons", "Verified business profile", "Two-way conversational care", "High engagement rates"],
  },
  {
    id: "email",
    name: "Smart Email Care",
    badge: "AI-Parsed SLA",
    icon: Mail,
    color: "#ec4899",
    bgColor: "bg-pink-500/10 border-pink-500/30 text-pink-600",
    description: "AI reads, categorizes, and auto-drafts replies to inbound customer emails with strict SLA prioritization.",
    capabilities: ["Automated intent classification", "Generative reply drafts", "Thread stitch across channels", "SLA breach alerts"],
  },
];

interface JourneyStep {
  day: string;
  channel: string;
  channelIcon: typeof MessageSquare;
  channelColor: string;
  sender: string;
  message: string;
  systemAction: string;
  badge: string;
}

const JOURNEY_STEPS: JourneyStep[] = [
  {
    day: "Day 1 · 02:15 PM",
    channel: "WhatsApp",
    channelIcon: MessageSquare,
    channelColor: "#25D366",
    sender: "Customer (David Miller)",
    message: "Hi! My flight was cancelled for tomorrow morning (Booking #CX-8891). Can I reschedule without a fee?",
    systemAction: "AI Agent verifies booking #CX-8891 via Airline PNR API. Confirms eligible fee waiver and offers 2 alternate flights.",
    badge: "Autonomous AI Resolution",
  },
  {
    day: "Day 2 · 09:30 AM",
    channel: "Web Chat (Mobile App)",
    channelIcon: Globe,
    channelColor: "#6366f1",
    sender: "Customer (David Miller)",
    message: "I chose the 4:00 PM flight yesterday on WhatsApp. Can I get a window seat assigned?",
    systemAction: "Zero questions asked. System immediately links to Booking #CX-8891 from yesterday's WhatsApp thread. AI checks seat map and assigns 14A.",
    badge: "Cross-Channel Context Stitched",
  },
  {
    day: "Day 3 · 01:10 PM",
    channel: "Voice Call (Hotline)",
    channelIcon: Phone,
    channelColor: "#0284c7",
    sender: "Customer calls from +1 (415) ••• ••89",
    message: "Hi, I'm heading to the airport now. Just want to confirm baggage drop time for my 4 PM flight.",
    systemAction: "Agent Sarah's screen pops up INSTANTLY with full WhatsApp + Web Chat history. Sarah greets: 'Hi David! For your 4 PM flight with seat 14A, baggage drop closes at 3:15 PM.'",
    badge: "Human Agent Screen-Pop (0s Hold Time)",
  },
];

export default function OmnichannelSection() {
  const [selectedChannel, setSelectedChannel] = useState<string>("whatsapp");
  const [activeJourneyIndex, setActiveJourneyIndex] = useState<number>(0);

  const activeChannelData = CHANNELS.find((c) => c.id === selectedChannel) || CHANNELS[0];

  return (
    <section id="omnichannel" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs text-xs font-semibold text-slate-700">
            <span className="w-2 h-2 rounded-full bg-sky-600 motion-safe:animate-pulse motion-reduce:animate-none" />
            <span>Unified Omnichannel Fabric</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            One Unified Context.{" "}
            <span className="text-sky-700">Every Voice &amp; Digital Channel.</span>
          </h2>

          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Customers switch channels across their journey. CXdynamIQ preserves every conversation thread, 
            ticket status, and sentiment so neither customer nor agent ever has to repeat a single word.
          </p>
        </div>

        {/* 7 Channel Selector Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-12">
          {CHANNELS.map((ch) => {
            const Icon = ch.icon;
            const isSelected = selectedChannel === ch.id;
            return (
              <button
                key={ch.id}
                onClick={() => setSelectedChannel(ch.id)}
                className={`flex flex-col items-center text-center p-3.5 rounded-xl border transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-sky-600 ${
                  isSelected 
                    ? "bg-white border-sky-600 shadow-sm ring-1 ring-sky-600/30" 
                    : "bg-white/80 border-slate-200 hover:bg-white hover:border-slate-300 shadow-2xs"
                }`}
              >
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-2"
                  style={{ backgroundColor: `${ch.color}15`, color: ch.color }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-900 leading-snug line-clamp-1">{ch.name}</span>
                <span className="text-[10px] font-medium text-slate-500 mt-0.5">{ch.badge}</span>
              </button>
            );
          })}
        </div>

        {/* Channel Details Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border" style={{ borderColor: `${activeChannelData.color}40`, backgroundColor: `${activeChannelData.color}10`, color: activeChannelData.color }}>
                <span>{activeChannelData.badge}</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                {activeChannelData.name} Integration
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {activeChannelData.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {activeChannelData.capabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-900 text-white space-y-3 text-xs border border-slate-800 shadow-inner">
              <div className="flex items-center justify-between text-slate-400 border-b border-white/10 pb-2">
                <span className="text-sky-400 font-semibold">API Context Payload</span>
                <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-emerald-400">Active Sync</span>
              </div>
              <pre className="text-slate-300 overflow-x-auto text-[11px] font-mono leading-relaxed">
{`{
  "customer_id": "cust_99428",
  "channel": "${activeChannelData.id}",
  "session_status": "synced",
  "history_thread_id": "th_omni_8812",
  "cross_channel_memory": {
    "caller_phone": "+1 415 ••• ••89",
    "open_intent": "priority_service",
    "sentiment_score": "+0.88",
    "last_touchpoint": "whatsapp"
  }
}`}
              </pre>
            </div>
          </div>
        </div>

        {/* The Key Message: Context Preservation Journey (Interactive 3-Day Simulation) */}
        <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-10 lg:p-12 shadow-xl border border-slate-800">
          <div className="max-w-3xl mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/50 text-cyan-300 text-xs font-semibold">
              <History className="w-3.5 h-3.5 text-cyan-400" />
              <span className="mono-label">PERSISTENT CONVERSATION MEMORY</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-white">
              Watch Context Flow Across 3 Days and 3 Different Channels
            </h3>
            <p className="text-sm sm:text-base text-slate-300">
              When David switches from WhatsApp to Web Chat to an Inbound Phone Call, 
              CXdynamIQ carries his complete identity and intent. Click each interaction step to inspect:
            </p>
          </div>

          {/* Stepper Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {JOURNEY_STEPS.map((step, idx) => {
              const StepIcon = step.channelIcon;
              const isActive = activeJourneyIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveJourneyIndex(idx)}
                  className={`text-left p-4 rounded-xl border transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-sky-400 ${
                    isActive 
                      ? "bg-slate-800/90 border-sky-400 shadow-md ring-1 ring-sky-400/50" 
                      : "bg-slate-900/60 border-white/10 hover:bg-slate-800/50 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-sky-400">
                      {step.day}
                    </span>
                    <span 
                      className="p-1 rounded" 
                      style={{ backgroundColor: `${step.channelColor}25`, color: step.channelColor }}
                    >
                      <StepIcon className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <div className="font-semibold text-sm text-white">{step.channel}</div>
                  <div className="text-xs text-slate-400 mt-1 line-clamp-1">{step.badge}</div>
                </button>
              );
            })}
          </div>

          {/* Interactive Inspection Console for Selected Step */}
          {(() => {
            const current = JOURNEY_STEPS[activeJourneyIndex];
            const CurIcon = current.channelIcon;
            return (
              <div className="bg-slate-950/90 rounded-2xl border border-white/10 p-6 sm:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <span 
                      className="p-2.5 rounded-xl border"
                      style={{ backgroundColor: `${current.channelColor}20`, borderColor: `${current.channelColor}50`, color: current.channelColor }}
                    >
                      <CurIcon className="w-5 h-5" />
                    </span>
                    <div>
                      <div className="font-bold text-base text-white">{current.sender}</div>
                      <div className="text-xs text-slate-400">{current.day} · via {current.channel}</div>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-950 text-sky-300 border border-sky-800/60 text-xs font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                    <span>{current.badge}</span>
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Left: What the customer experienced */}
                  <div className="p-4 rounded-xl bg-slate-900 border border-white/10 space-y-2">
                    <span className="text-xs font-semibold text-slate-400">
                      Customer Inquiry
                    </span>
                    <p className="text-sm text-slate-200 leading-relaxed italic">
                      &quot;{current.message}&quot;
                    </p>
                  </div>

                  {/* Right: How CXdynamIQ resolved with zero repetition */}
                  <div className="p-4 rounded-xl bg-sky-950/40 border border-sky-800/40 space-y-2">
                    <span className="text-xs font-semibold text-sky-300 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-sky-400" />
                      CXdynamIQ Context Engine Resolution
                    </span>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      {current.systemAction}
                    </p>
                  </div>
                </div>

                {/* Micro KPI Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 border-t border-white/10 text-center">
                  <div>
                    <div className="text-xs text-slate-400">Context Memory</div>
                    <div className="text-lg font-bold text-cyan-300 font-mono">100% Retained</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Customer Repetition</div>
                    <div className="text-lg font-bold text-emerald-400 font-mono">0 Questions</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Sync Latency</div>
                    <div className="text-lg font-bold text-white font-mono">&lt; 350ms</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">FCR Improvement</div>
                    <div className="text-lg font-bold text-cyan-300 font-mono">+42.6%</div>
                  </div>
                </div>
              </div>
            );
          })()}

        </div>

      </div>
    </section>
  );
}

