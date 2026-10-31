"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Zap, 
  ShieldCheck, 
  PhoneCall, 
  Users, 
  Bot, 
  Activity, 
  Sparkles,
  PhoneForwarded,
  DollarSign,
  Headphones
} from "lucide-react";

type PrimaryCategory = "sales" | "support" | "collection";

interface ChallengeWorkflow {
  id: string;
  label: string;
  problem: string;
  solution: string;
  impact: string;
  linkText: string;
  linkHref: string;
  flowInput: string;
  flowAgent: string;
  flowProcess: string;
  flowOutcome: string;
  checkmarks: string[];
}

const CHALLENGES_DATA: Record<PrimaryCategory, ChallengeWorkflow[]> = {
  sales: [
    {
      id: "lead-qualification",
      label: "Lead Qualification",
      problem: "60% of sales team time is wasted manually dialing invalid numbers and talking to unqualified leads.",
      solution: "CXDYNAMIQ's Auto Dialer and Conversational AI qualify prospects at scale — instantly and without manual agent intervention. The engine flags hot prospects and bridges live connects directly to sales reps with instant CRM screen pops.",
      impact: "Automate up to 60% of your lead qualification process and cut cost per acquisition.",
      linkText: "Explore Sales Dialers",
      linkHref: "/auto-dialer",
      flowInput: "Inbound & Campaign Leads",
      flowAgent: "CXDYNAMIQ AI Voice Agent",
      flowProcess: "Autonomous Intent & Budget Check",
      flowOutcome: "Warm Live Transfer to Closers",
      checkmarks: [
        "60% more qualified conversations",
        "Time to first contact <60 seconds",
        "Zero manual dialing fatigue",
        "100% automated CRM timeline sync"
      ]
    },
    {
      id: "sales-conversion",
      label: "Sales Conversion",
      problem: "Slow response times cause inbound leads to drop off before speaking with an account executive.",
      solution: "Our click-to-call and speed-to-lead routing connect interested prospects to available sales reps in under 30 seconds. Reps view full CRM histories on screen pop as the call connects.",
      impact: "Accelerate sales pipeline conversion by 40% with instant lead connection.",
      linkText: "Explore Click to Call",
      linkHref: "/click-to-call",
      flowInput: "Web Form / Demo Request",
      flowAgent: "Instant CTI Dispatcher",
      flowProcess: "Skill-Based Rep Matching",
      flowOutcome: "Live Call & Screen Pop in <30s",
      checkmarks: [
        "40% higher pipeline velocity",
        "Sub-second CRM record loading",
        "Automated call recording & notes",
        "Native Zoho & Salesforce integration"
      ]
    },
    {
      id: "outbound-campaigns",
      label: "Outbound Pacing",
      problem: "Agents spend up to 45 minutes of every hour listening to dial tones and answering machines.",
      solution: "Our predictive dialer algorithms calculate agent availability in real time, automatically skipping answering machines and voicemails in under 400ms to deliver only live prospects.",
      impact: "Increase agent active talk time from 15 mins/hour to over 48 mins/hour.",
      linkText: "Explore Predictive Dialer",
      linkHref: "/predictive-dialer",
      flowInput: "High-Volume Contact Lists",
      flowAgent: "Predictive Pacing Engine",
      flowProcess: "Answering Machine Detection",
      flowOutcome: "100% Live Prospect Delivery",
      checkmarks: [
        "300% boost in daily connected calls",
        "Pacing ratio dynamically adjusted",
        "DNC & TCPA compliance filtering",
        "Detailed campaign analytics"
      ]
    }
  ],
  support: [
    {
      id: "high-volume-calls",
      label: "High-Volume Call Handling",
      problem: "Over 60% of customer support teams struggle to handle recurring peak traffic and seasonal surges.",
      solution: "CXDYNAMIQ's Conversational AI and multi-level Smart IVR handle routine, high-volume inquiries (order status, balance, FAQ) autonomously 24/7. Complex escalations route seamlessly to human agents with full context.",
      impact: "Deflect up to 60% of repetitive calls and protect SLA during peak surges.",
      linkText: "Explore Inbound Solutions",
      linkHref: "/inbound-calling",
      flowInput: "Surge Inbound Calls",
      flowAgent: "GenAI Voice & Smart IVR",
      flowProcess: "Instant Self-Service Resolution",
      flowOutcome: "Context-Rich Agent Escalation",
      checkmarks: [
        "Zero hold-time call abandonment",
        "24/7 multi-lingual voice handling",
        "60% lower operational cost per call",
        "Instant caller ticket generation"
      ]
    },
    {
      id: "fcr-aht",
      label: "FCR & AHT Optimization",
      problem: "Agents spend minutes digging through disconnected software to find customer context, dragging down AHT.",
      solution: "Deep CTI integrations automatically pop customer profiles, past tickets, and recent transactions the millisecond the call connects. Real-time AI Whisper suggests resolutions during the call.",
      impact: "Reduce Average Handling Time (AHT) by 35% and boost First Contact Resolution.",
      linkText: "Explore CTI Integrations",
      linkHref: "/cti-integrations",
      flowInput: "Incoming Customer Call",
      flowAgent: "CXDYNAMIQ CTI Gateway",
      flowProcess: "Unified Customer Screen Pop",
      flowOutcome: "1-Click Issue Resolution",
      checkmarks: [
        "35% reduction in handle times",
        "85%+ First Contact Resolution (FCR)",
        "Real-time AI script guidance",
        "Automated post-call wrap-up"
      ]
    },
    {
      id: "after-hours",
      label: "After-Hours Support",
      problem: "Customer requests during night shifts and weekends go unanswered, hurting customer satisfaction and CSAT.",
      solution: "Deploy our autonomous AI Voicebot and WhatsApp Business automation to manage after-hours support with carrier-grade reliability. Customers receive immediate answers or scheduled callbacks.",
      impact: "Provide 24/7 customer coverage with zero additional graveyard shift staffing costs.",
      linkText: "Explore Conversational AI",
      linkHref: "/conversational-ai",
      flowInput: "Off-Hours Voice & Chat",
      flowAgent: "Autonomous AI Voicebot",
      flowProcess: "Intent Extraction & Resolution",
      flowOutcome: "Self-Served or Booked Callback",
      checkmarks: [
        "100% after-hours response rate",
        "Multi-channel SMS/WhatsApp sync",
        "Scheduled callback booking",
        "No overnight staffing overhead"
      ]
    }
  ],
  collection: [
    {
      id: "debt-recovery",
      label: "Predictive Debt Recovery",
      problem: "Debt recovery calls suffer from low pickup rates, high agent burnout, and complex regulatory compliance.",
      solution: "CXDYNAMIQ's automated collection dialers analyze past debtor pickup trends to dial at optimal times. Agents are connected instantly upon answer with debtor balance and repayment options displayed.",
      impact: "Boost recovery rate by 45% while maintaining strict regulatory compliance.",
      linkText: "Explore Collection Management",
      linkHref: "/page/Customer Experience management",
      flowInput: "Delinquent Account Records",
      flowAgent: "Smart Recovery Dialer",
      flowProcess: "Best-Time-To-Call Pacing",
      flowOutcome: "Immediate Live Agent Handover",
      checkmarks: [
        "45% higher debtor contact rates",
        "Integrated payment gateway links",
        "Automated call recording & audit",
        "Granular debt recovery reporting"
      ]
    },
    {
      id: "payment-reminders",
      label: "Automated Payment Reminders",
      problem: "Manual reminder calls to early-stage overdue accounts are expensive and inefficient.",
      solution: "Automate outbound voice broadcasts and interactive WhatsApp payment links for soft collections. Borrowers can confirm payments or request a grace period with zero agent involvement.",
      impact: "Reduce early-bucket delinquency by 50% with automated multi-channel nudges.",
      linkText: "Explore WhatsApp Business",
      linkHref: "/whatsapp-business",
      flowInput: "Due Date Delinquency List",
      flowAgent: "Automated Voice & WhatsApp Bot",
      flowProcess: "Interactive Self-Service Menu",
      flowOutcome: "Instant UPI/Card Payment Sync",
      checkmarks: [
        "50% lower collection cost",
        "Instant payment gateway integration",
        "Automated receipt generation",
        "Zero human agent intervention"
      ]
    }
  ]
};

export default function BusinessChallengesSection() {
  const [activeCategory, setActiveCategory] = useState<PrimaryCategory>("sales");
  const [activeWorkflowIndex, setActiveWorkflowIndex] = useState(0);

  const workflows = CHALLENGES_DATA[activeCategory];
  const activeWorkflow = workflows[activeWorkflowIndex] || workflows[0];

  const handleCategoryChange = (cat: PrimaryCategory) => {
    setActiveCategory(cat);
    setActiveWorkflowIndex(0);
  };

  return (
    <section id="challenges" className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-cyan-800 border border-sky-100 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#069bd8]" />
            <span>SOLVE REAL BUSINESS CHALLENGES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Built for High-Stakes Customer Conversations
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            See how CXDYNAMIQ eliminates operational bottlenecks across high-velocity sales, tier-1 customer support, and financial debt recovery.
          </p>
        </div>

        {/* Primary Category Selector Tabs (Sales, Support, Collection) */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 bg-slate-200/80 rounded-2xl border border-slate-300/80 shadow-2xs gap-1">
            <button
              onClick={() => handleCategoryChange("sales")}
              className={`px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeCategory === "sales"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-300/50"
              }`}
            >
              Sales
            </button>
            <button
              onClick={() => handleCategoryChange("support")}
              className={`px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeCategory === "support"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-300/50"
              }`}
            >
              Support
            </button>
            <button
              onClick={() => handleCategoryChange("collection")}
              className={`px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeCategory === "collection"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-300/50"
              }`}
            >
              Collection
            </button>
          </div>
        </div>

        {/* Secondary Sub-Workflow Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
          {workflows.map((wf, idx) => (
            <button
              key={wf.id}
              onClick={() => setActiveWorkflowIndex(idx)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer shrink-0 border ${
                activeWorkflowIndex === idx
                  ? "bg-white text-[#069bd8] border-cyan-200 shadow-2xs font-bold"
                  : "bg-transparent text-slate-600 border-transparent hover:text-slate-900 hover:bg-slate-200/60"
              }`}
            >
              {wf.label}
            </button>
          ))}
        </div>

        {/* Challenge Matrix Card: Left Problem/Solution/Impact | Right Flow & Metrics */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08),0_0_0_1px_rgba(226,232,240,0.8)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-stretch">
            
            {/* Left Column: Problem, Solution, Impact (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="flex items-center gap-2">
                  <span className="text-base font-extrabold text-slate-900 tracking-tight">
                    {activeWorkflow.label}
                  </span>
                </div>

                {/* 🔴 Problem Card */}
                <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-100 space-y-1.5">
                  <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    Problem
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                    {activeWorkflow.problem}
                  </p>
                </div>

                {/* 🟢 Solution Card */}
                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-1.5">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    CXDYNAMIQ Solution
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                    {activeWorkflow.solution}
                  </p>
                </div>

                {/* ⚡ Impact Card */}
                <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white text-[#069bd8] shadow-2xs shrink-0">
                    <Zap className="w-4 h-4 fill-[#069bd8]" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-cyan-800">
                      Measurable Business Impact
                    </div>
                    <p className="text-xs sm:text-sm text-slate-900 font-bold mt-0.5 leading-snug">
                      {activeWorkflow.impact}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-2">
                <Link
                  href={activeWorkflow.linkHref}
                  className="btn-tactile inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
                >
                  <span>{activeWorkflow.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: Interactive Flow Architecture & Validated Metrics (6 cols) */}
            <div className="lg:col-span-6 bg-gradient-to-br from-slate-50 via-cyan-50/30 to-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between space-y-6">
              
              {/* Flow Architecture Diagram (Like Convin flow cards in Images 3 & 4) */}
              <div className="space-y-4">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200 pb-2 flex items-center justify-between">
                  <span>Architecture &amp; Data Pipeline</span>
                  <span className="text-[10px] text-cyan-700 font-semibold font-mono">Live Routing</span>
                </div>

                {/* Vertical Process Steps */}
                <div className="space-y-2.5">
                  {/* Step 1 */}
                  <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-lg bg-slate-100 text-slate-700 font-bold text-[10px] flex items-center justify-center">
                        01
                      </div>
                      <span className="font-semibold text-slate-800">{activeWorkflow.flowInput}</span>
                    </div>
                    <span className="text-[10px] font-medium text-slate-400">Intake</span>
                  </div>

                  {/* Step 2 */}
                  <div className="p-3 bg-sky-50/80 rounded-xl border border-sky-200/90 shadow-2xs flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-lg bg-[#069bd8] text-white font-bold text-[10px] flex items-center justify-center">
                        02
                      </div>
                      <span className="font-bold text-cyan-950 flex items-center gap-1.5">
                        <Bot className="w-3.5 h-3.5 text-[#069bd8]" />
                        {activeWorkflow.flowAgent}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-cyan-700 bg-white px-2 py-0.5 rounded">Autonomous</span>
                  </div>

                  {/* Step 3 */}
                  <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-lg bg-slate-100 text-slate-700 font-bold text-[10px] flex items-center justify-center">
                        03
                      </div>
                      <span className="font-semibold text-slate-800">{activeWorkflow.flowProcess}</span>
                    </div>
                    <span className="text-[10px] font-medium text-emerald-600 font-semibold">Sub-second</span>
                  </div>

                  {/* Step 4 */}
                  <div className="p-3 bg-emerald-50/80 rounded-xl border border-emerald-200 shadow-2xs flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-lg bg-emerald-600 text-white font-bold text-[10px] flex items-center justify-center">
                        04
                      </div>
                      <span className="font-bold text-emerald-950 flex items-center gap-1.5">
                        <Headphones className="w-3.5 h-3.5 text-emerald-600" />
                        {activeWorkflow.flowOutcome}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-white px-2 py-0.5 rounded">Resolved</span>
                  </div>
                </div>
              </div>

              {/* Checkmark Badges (Convin style) */}
              <div className="pt-4 border-t border-slate-200 space-y-2">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Standard Enterprise Capabilities
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeWorkflow.checkmarks.map((chk, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="text-[11px]">{chk}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
