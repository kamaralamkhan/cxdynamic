"use client";

import React, { useState, useEffect } from "react";
import ExplainerShell from "./ExplainerShell";
import { 
  PhoneCall, 
  PhoneOutgoing, 
  Shuffle, 
  Users, 
  Clock, 
  Play, 
  Pause, 
  Search, 
  CheckCircle2, 
  UserCheck, 
  AlertCircle, 
  Bot, 
  MessageSquare, 
  Activity, 
  Building2, 
  GraduationCap, 
  Briefcase, 
  Sliders, 
  Layers,
  ArrowRight
} from "lucide-react";

interface ServiceExplainerProps {
  path: string;
}

export default function ServiceExplainer({ path }: ServiceExplainerProps) {
  const normPath = path === "/" ? "/" : path.replace(/\/$/, "");

  // 1. Inbound Calling
  if (normPath === "/inbound-calling") {
    return <InboundCallingExplainer />;
  }

  // 2. Outbound Calling
  if (normPath === "/outbound-calling") {
    return <OutboundCallingExplainer />;
  }

  // 3. Blended Call Centre
  if (normPath === "/blended-call-centre") {
    return <BlendedCallCentreExplainer />;
  }

  // 4. CTI Integrations
  if (normPath === "/cti-integrations") {
    return <CtiIntegrationsExplainer brand="Universal CRM" />;
  }

  // 5. Auto Attendant
  if (normPath === "/auto-attendant") {
    return <AutoAttendantExplainer />;
  }

  // 6. Contact Manager
  if (normPath === "/contact-manager") {
    return <ContactManagerExplainer />;
  }

  // 7. Click to Call
  if (normPath === "/click-to-call") {
    return <ClickToCallExplainer />;
  }

  // 8. Auto Dialer
  if (normPath === "/auto-dialer") {
    return <AutoDialerExplainer />;
  }

  // 9. Power Dialer
  if (normPath === "/power-dialer") {
    return <PowerDialerExplainer />;
  }

  // 10. Predictive Dialer
  if (normPath === "/predictive-dialer") {
    return <PredictiveDialerExplainer />;
  }

  // 11. IVR
  if (normPath === "/ivr") {
    return <IvrExplainer />;
  }

  // 12. ACD
  if (normPath === "/acd") {
    return <AcdExplainer />;
  }

  // 13. CRM Integrations
  if (normPath === "/crm-integrations") {
    return <CrmIntegrationsExplainer />;
  }

  // 14. Omnichannel Routing
  if (normPath === "/omnichannel-routing") {
    return <OmnichannelRoutingExplainer />;
  }

  // 15. Conversational AI
  if (normPath === "/conversational-ai") {
    return <ConversationalAiExplainer />;
  }

  // 16. Speech Analytics
  if (normPath === "/speech-analytics") {
    return <SpeechAnalyticsExplainer />;
  }

  // 17. Specific CRM Integrations
  if (["/zoho", "/zendesk", "/salesforce", "/freshdesk", "/hubspot"].includes(normPath)) {
    const brandMap: Record<string, string> = {
      "/zoho": "Zoho CRM",
      "/zendesk": "Zendesk Support",
      "/salesforce": "Salesforce Sales Cloud",
      "/freshdesk": "Freshdesk Omnichannel",
      "/hubspot": "HubSpot Service Hub",
    };
    return <CtiIntegrationsExplainer brand={brandMap[normPath] || "CRM"} />;
  }

  // 18. WhatsApp Business
  if (normPath === "/whatsapp-business") {
    return <WhatsAppExplainer />;
  }

  // 19. Intercom
  if (normPath === "/intercom-integration") {
    return <IntercomExplainer />;
  }

  // 20. Enterprise
  if (normPath === "/enterprise") {
    return <EnterpriseExplainer />;
  }

  // 21. BPO
  if (normPath === "/bpo") {
    return <BpoExplainer />;
  }

  // 22. Education
  if (normPath === "/education") {
    return <EducationExplainer />;
  }

  // 23. Small Business
  if (normPath === "/small-business") {
    return <SmallBusinessExplainer />;
  }

  // Default Fallback: Unified Routing Explainer
  return <UnifiedRoutingExplainer title={normPath.replace(/^\//, "").replace(/-/g, " ")} />;
}

// -------------------------------------------------------------
// 1. Inbound Calling
// -------------------------------------------------------------
function InboundCallingExplainer() {
  const [selectedQueue, setSelectedQueue] = useState<"sales" | "support" | "vip">("support");
  const [agentConnected, setAgentConnected] = useState(false);

  return (
    <ExplainerShell
      title="Inbound Skills-Based Routing"
      caption="Simulate an incoming priority call. Select a department queue to match the caller with the best available agent and pop their CRM record."
      takeaway="Inbound callers connect in under 2 seconds with full customer context."
      textAlternative="An incoming customer call arrives on the SIP trunk. The caller selects Tech Support. CXDYNAMIQ routes the call to Agent Priya based on language proficiency and availability, immediately displaying the customer's previous tickets on screen."
    >
      {(resetCount) => {
        return (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-100 text-cyan-800 flex items-center justify-center animate-pulse">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">Incoming Call: +91 98450 12345</div>
                  <div className="text-[11px] text-slate-500">Caller: Rahul S. • Bangalore (Account: Acme Corp)</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-medium">Route to:</span>
                {(["sales", "support", "vip"] as const).map((q) => (
                  <button
                    key={q}
                    onClick={() => {
                      setSelectedQueue(q);
                      setAgentConnected(true);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition-all cursor-pointer ${
                      selectedQueue === q
                        ? "bg-slate-900 text-white shadow-xs"
                        : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Visual routing result */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div className="space-y-2">
                <div className="text-[10px] font-bold uppercase tracking-wider text-cyan-700">
                  Target Destination: {selectedQueue.toUpperCase()} QUEUE
                </div>
                <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-emerald-600" />
                  <span>Agent Matched: {selectedQueue === "vip" ? "Vikram R. (Principal)" : selectedQueue === "sales" ? "Ananya D. (Closer)" : "Priya S. (Tier 2 Support)"}</span>
                </div>
                <p className="text-xs text-slate-500">
                  Skills score: 99.4% • Language: English/Hindi • Idle duration: 42s
                </p>
              </div>

              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-100 text-xs text-emerald-950 space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>CTI Screen-Pop Triggered</span>
                </div>
                <div className="text-[11px] text-emerald-800">
                  Acme Corp • 3 Open Support Tickets • CSAT History 5/5 • Record #SF-8921
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </ExplainerShell>
  );
}

// -------------------------------------------------------------
// 2. Outbound Calling
// -------------------------------------------------------------
function OutboundCallingExplainer() {
  const [running, setRunning] = useState(false);
  const [dialed, setDialed] = useState(14);
  const [connected, setConnected] = useState(6);
  const [voicemails, setVoicemails] = useState(3);

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => {
      setDialed((d) => d + 1);
      if (Math.random() > 0.4) {
        setConnected((c) => c + 1);
      } else {
        setVoicemails((v) => v + 1);
      }
    }, 1200);
    return () => clearInterval(interval);
  }, [running]);

  return (
    <ExplainerShell
      title="Automated Outbound Pacing"
      caption="Click 'Start Campaign' to watch the dialer cycle through leads, automatically filtering answering machines and connecting agents only to live humans."
      takeaway="Agents spend 85% of their shift talking rather than dialing or listening to busy tones."
      textAlternative="The dialer reads a contact batch. Answering machine detection filters out 3 voicemails and connects 6 live respondents directly to available closers."
    >
      {() => (
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-800">Q3 Enterprise Outbound Outreach</span>
              <div className="text-[11px] text-slate-500">Pacing: 3:1 • AMD (Answering Machine Detection): Active</div>
            </div>
            <button
              onClick={() => setRunning(!running)}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer transition-all ${
                running ? "bg-amber-100 text-amber-900 border border-amber-200" : "btn-primary-emerald"
              }`}
            >
              {running ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{running ? "Pause Campaign" : "Start Campaign"}</span>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-[10px] font-bold text-slate-400 uppercase">Leads Dialed</div>
              <div className="text-2xl font-extrabold text-slate-900 tabular-nums">{dialed}</div>
            </div>
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-100 text-center">
              <div className="text-[10px] font-bold text-emerald-700 uppercase">Live Humans Connected</div>
              <div className="text-2xl font-extrabold text-emerald-800 tabular-nums">{connected}</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-[10px] font-bold text-slate-400 uppercase">Voicemails Skipped</div>
              <div className="text-2xl font-extrabold text-slate-600 tabular-nums">{voicemails}</div>
            </div>
          </div>
        </div>
      )}
    </ExplainerShell>
  );
}

// -------------------------------------------------------------
// 3. Blended Call Centre
// -------------------------------------------------------------
function BlendedCallCentreExplainer() {
  const [inboundLoad, setInboundLoad] = useState(70);
  const outboundLoad = 100 - inboundLoad;
  const inboundAgents = Math.round((48 * inboundLoad) / 100);
  const outboundAgents = 48 - inboundAgents;

  return (
    <ExplainerShell
      title="Dynamic Inbound / Outbound Load Balancing"
      caption="Slide to simulate a traffic surge. CXDYNAMIQ automatically transitions agents between outbound campaigns and inbound queues to protect SLA."
      takeaway="Eliminate queue abandoned calls while preserving outbound lead velocity."
      textAlternative="Adjusting inbound load from 50% to 70% automatically shifts 10 agents from outbound dialing to incoming customer support."
    >
      {() => (
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-800">
              <span>Traffic Distribution Slider</span>
              <span className="font-mono text-cyan-700">{inboundLoad}% Inbound / {outboundLoad}% Outbound</span>
            </div>
            <input
              type="range"
              min="20"
              max="80"
              value={inboundLoad}
              onChange={(e) => setInboundLoad(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#069bd8]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-sky-50 border border-sky-100 space-y-1">
              <div className="text-xs font-bold text-cyan-800 flex items-center gap-1.5">
                <PhoneCall className="w-4 h-4 text-[#069bd8]" />
                <span>Inbound Allocation</span>
              </div>
              <div className="text-2xl font-extrabold text-slate-900 tabular-nums">{inboundAgents} Agents</div>
              <div className="text-[11px] text-slate-600">SLA: 99.8% • Avg wait: 0:03s</div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 space-y-1">
              <div className="text-xs font-bold text-emerald-800 flex items-center gap-1.5">
                <PhoneOutgoing className="w-4 h-4 text-emerald-600" />
                <span>Outbound Campaign</span>
              </div>
              <div className="text-2xl font-extrabold text-slate-900 tabular-nums">{outboundAgents} Agents</div>
              <div className="text-[11px] text-slate-600">Dials/min: {outboundAgents * 3} • Active</div>
            </div>
          </div>
        </div>
      )}
    </ExplainerShell>
  );
}

// -------------------------------------------------------------
// 4. CTI Integrations (Reusable across Zoho, Salesforce, Zendesk, etc.)
// -------------------------------------------------------------
function CtiIntegrationsExplainer({ brand }: { brand: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <ExplainerShell
      title={`Native ${brand} CTI Screen-Pop`}
      caption={`Hover over the incoming call pill to watch ${brand} automatically pop the customer contact timeline, open tickets, and deal value.`}
      takeaway="Eliminate 20 seconds of customer verification on every single interaction."
      textAlternative="An incoming call from Rahul Sharma triggers an immediate browser screenpop inside the CRM, displaying his past order history and contact record."
    >
      {() => (
        <div className="space-y-4">
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between cursor-pointer hover:border-[#069bd8] transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <span className="text-xs font-bold text-slate-900">Incoming Call: +91 98450 12345</span>
                <span className="text-[11px] text-slate-500 block">Hover to test {brand} CTI Screen-Pop</span>
              </div>
            </div>
            <span className="text-xs font-bold text-cyan-700 bg-sky-50 px-2.5 py-1 rounded border border-sky-100">
              {hovered ? "Screen-Pop Active ✓" : "Hover Me"}
            </span>
          </div>

          <div className={`p-5 rounded-xl border transition-all duration-300 ${
            hovered ? "bg-white border-slate-300 shadow-md translate-y-0 opacity-100" : "bg-slate-50/50 border-dashed border-slate-200 opacity-60"
          }`}>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs">
              <span className="font-bold text-slate-800">{brand} Customer Profile</span>
              <span className="text-[10px] text-slate-400 font-mono">ID: #CUST-98450</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 text-xs">
              <div>
                <span className="text-[10px] text-slate-400 block uppercase">Client Name</span>
                <span className="font-bold text-slate-900">Rahul Sharma</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block uppercase">Account</span>
                <span className="font-bold text-slate-900">Acme Enterprise</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block uppercase">Open Deal</span>
                <span className="font-bold text-emerald-600">$45,000 / yr</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </ExplainerShell>
  );
}

// -------------------------------------------------------------
// 5. Auto Attendant
// -------------------------------------------------------------
function AutoAttendantExplainer() {
  const [schedule, setSchedule] = useState<"hours" | "after" | "holiday">("hours");

  return (
    <ExplainerShell
      title="Dynamic Schedule-Based IVR Routing"
      caption="Switch between Business Hours, After Hours, and Holiday Schedule to watch the automated call path update instantly."
      takeaway="Ensure zero missed customer calls, 24 hours a day, 365 days a year."
      textAlternative="Toggling from Business Hours to After Hours routes incoming callers directly to the on-call emergency voicemail and mobile forwarding tree."
    >
      {() => (
        <div className="space-y-5">
          <div className="flex items-center gap-2">
            {(["hours", "after", "holiday"] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setSchedule(mode)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  schedule === mode
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {mode === "hours" ? "Business Hours (9am-6pm)" : mode === "after" ? "After Hours" : "Holiday Schedule"}
              </button>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
            <div className="font-bold text-slate-800">
              Active Audio Greeting:
            </div>
            <div className="p-3 rounded-lg bg-white border border-slate-200 italic text-slate-600">
              {schedule === "hours" && '"Welcome to CXDYNAMIQ. Press 1 for Sales, Press 2 for VIP Support."'}
              {schedule === "after" && '"Thank you for calling. Our offices are currently closed. For emergency support, press 0 to forward to our on-call engineer."'}
              {schedule === "holiday" && '"Our teams are celebrating the national holiday. Please leave a voicemail or press 1 to schedule an automated callback tomorrow."'}
            </div>
            <div className="text-[11px] font-semibold text-cyan-700">
              Routing Destination: {schedule === "hours" ? "Live Agent Ring Pool (48 Seats)" : schedule === "after" ? "Mobile Forwarding + Voicemail Transcription" : "Automated Ticket Creation"}
            </div>
          </div>
        </div>
      )}
    </ExplainerShell>
  );
}

// -------------------------------------------------------------
// 6. Contact Manager
// -------------------------------------------------------------
function ContactManagerExplainer() {
  const [query, setQuery] = useState("");
  const contacts = [
    { name: "Rahul Sharma", company: "Acme Corp", phone: "+91 98450 12345", tags: "Enterprise, VIP" },
    { name: "Ananya Patel", company: "Finserve Ltd", phone: "+91 99120 44556", tags: "Renewal, Inbound" },
    { name: "David Chen", company: "Apex Global", phone: "+63 906 1234567", tags: "BPO Closer" },
  ];

  const filtered = contacts.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase()) || c.company.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <ExplainerShell
      title="Unified Contact Directory & History"
      caption="Type a name or company in the search box to find customer records and launch a call with full context."
      takeaway="Centralize millions of customer touchpoints with instant search."
      textAlternative="Searching for Rahul filters the contact database to show Acme Corp with full calling history and tags."
    >
      {() => (
        <div className="space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
            <input
              type="text"
              placeholder="Search contacts by name, company, or phone..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs bg-slate-50 focus:bg-white focus:outline-none focus:border-[#069bd8]"
            />
          </div>

          <div className="space-y-2">
            {filtered.map((c, i) => (
              <div key={i} className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs hover:border-[#069bd8] transition-all">
                <div>
                  <div className="font-bold text-slate-900">{c.name} — <span className="font-normal text-slate-500">{c.company}</span></div>
                  <div className="text-[11px] text-slate-400">{c.phone} • Tags: {c.tags}</div>
                </div>
                <button className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 font-bold cursor-pointer flex items-center gap-1">
                  <PhoneCall className="w-3 h-3 text-emerald-600" />
                  <span>Call</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </ExplainerShell>
  );
}

// -------------------------------------------------------------
// 7. Click to Call
// -------------------------------------------------------------
function ClickToCallExplainer() {
  const [calling, setCalling] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let t: any;
    if (calling) {
      t = setInterval(() => setSeconds((s) => s + 1), 1000);
    } else {
      setSeconds(0);
    }
    return () => clearInterval(t);
  }, [calling]);

  return (
    <ExplainerShell
      title="One-Click CRM Dialing"
      caption="Click the phone number to start an instant WebRTC browser call with automated duration logging."
      takeaway="Eliminate manual misdials and cut outreach cycle time in half."
      textAlternative="Clicking on a phone number connects the call via WebRTC in 0.8 seconds and begins timer logging."
    >
      {() => (
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-slate-800">Lead Record: Sarah Jenkins (VP Sales)</div>
            <div className="text-[11px] text-slate-500">CloudSoft Global • Deal size: $32,000</div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCalling(!calling)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer transition-all ${
                calling ? "bg-red-500 text-white hover:bg-red-600" : "btn-primary-emerald"
              }`}
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{calling ? `Hang Up (${seconds}s)` : "Click to Call +1 415 890 2341"}</span>
            </button>
          </div>
        </div>
      )}
    </ExplainerShell>
  );
}

// -------------------------------------------------------------
// 8. Auto Dialer
// -------------------------------------------------------------
function AutoDialerExplainer() {
  const [queueCount, setQueueCount] = useState(120);
  const [isDialing, setIsDialing] = useState(false);

  useEffect(() => {
    if (!isDialing) return;
    const interval = setInterval(() => {
      setQueueCount((q) => (q > 0 ? q - 1 : 120));
    }, 600);
    return () => clearInterval(interval);
  }, [isDialing]);

  return (
    <ExplainerShell
      title="Automated Queue Outbound Dialer"
      caption="Start the queue to watch the engine cycle through phone lists without agent manual intervention."
      takeaway="Triples daily agent talk-time compared to manual handset dialing."
      textAlternative="Auto dialer initiates calls continuously, reducing queue count from 120 to 110 in seconds."
    >
      {() => (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-800">Lead Campaign: Tech Sector Q3</span>
            <button
              onClick={() => setIsDialing(!isDialing)}
              className={`px-4 py-2 rounded-xl text-xs font-bold cursor-pointer ${
                isDialing ? "bg-amber-100 text-amber-900 border border-amber-200" : "btn-primary-emerald"
              }`}
            >
              {isDialing ? "Pause Queue" : "Start Auto-Dialer"}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-[10px] uppercase font-bold text-slate-400">Remaining Queue</div>
              <div className="text-3xl font-extrabold text-slate-900 tabular-nums">{queueCount}</div>
            </div>
            <div className="p-4 rounded-xl bg-sky-50 border border-sky-100 text-center">
              <div className="text-[10px] uppercase font-bold text-cyan-700">Dialing Ratio</div>
              <div className="text-3xl font-extrabold text-[#069bd8] tabular-nums">2.5 : 1</div>
            </div>
          </div>
        </div>
      )}
    </ExplainerShell>
  );
}

// -------------------------------------------------------------
// 9. Power Dialer
// -------------------------------------------------------------
function PowerDialerExplainer() {
  const [leadNum, setLeadNum] = useState(1);
  const [state, setState] = useState<"dialing" | "talking" | "wrap">("talking");

  const nextLead = () => {
    setState("dialing");
    setTimeout(() => {
      setState("talking");
      setLeadNum((n) => n + 1);
    }, 1000);
  };

  return (
    <ExplainerShell
      title="Sequential 1-to-1 Power Dialer"
      caption="Click 'Wrap Call & Next Lead' to simulate sequential pacing where the next call dials automatically as wrap-up finishes."
      takeaway="Guarantees zero abandoned calls with dedicated 1-to-1 agent coverage."
      textAlternative="Agent finishes wrap up for lead 1, and the power dialer instantly dials lead 2."
    >
      {() => (
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-slate-800">Active Lead #{leadNum}: Marcus Vance</span>
            <span className={`px-2 py-0.5 rounded font-bold uppercase text-[10px] ${
              state === "talking" ? "bg-emerald-100 text-emerald-800" : "bg-sky-100 text-sky-800"
            }`}>
              {state}
            </span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
            <div className="text-xs text-slate-600">
              Wrap-up Timer: <span className="font-mono font-bold text-slate-900">00:18s</span> • Next lead in queue: Elena Gomez
            </div>
            <button
              onClick={nextLead}
              className="btn-primary-emerald px-4 py-2 rounded-xl text-xs font-bold cursor-pointer"
            >
              Wrap Call &amp; Next Lead →
            </button>
          </div>
        </div>
      )}
    </ExplainerShell>
  );
}

// -------------------------------------------------------------
// 10. Predictive Dialer
// -------------------------------------------------------------
function PredictiveDialerExplainer() {
  const [ratio, setRatio] = useState(3);
  const idleTime = Math.max(2, 12 - ratio * 3);
  const dropRisk = Math.min(4.8, (ratio - 1) * 1.4);

  return (
    <ExplainerShell
      title="Predictive Dialing Pacing Algorithm"
      caption="Adjust the dial ratio to evaluate the trade-off between minimizing agent idle time and maintaining compliance with FCC/Ofcom drop-rate limits."
      takeaway="Keeps agent idle time under 4 seconds while maintaining < 3% drop compliance."
      textAlternative="Increasing ratio to 3.5 dials ahead of agent availability, reducing idle time to 3 seconds with 2.8% drop risk."
    >
      {() => (
        <div className="space-y-5">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-800">
              <span>Lines Dialed Per Agent: <span className="font-mono text-cyan-700">{ratio}:1</span></span>
              <span className="text-[11px] text-slate-500">Legal Threshold: &lt; 3.0% Abandon Rate</span>
            </div>
            <input
              type="range"
              min="1"
              max="4"
              step="0.5"
              value={ratio}
              onChange={(e) => setRatio(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#069bd8]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 text-center">
              <div className="text-[10px] uppercase font-bold text-emerald-700">Agent Wait Time</div>
              <div className="text-2xl font-extrabold text-emerald-800 tabular-nums">{idleTime}s</div>
            </div>
            <div className={`p-4 rounded-xl border text-center ${
              dropRisk > 3 ? "bg-amber-50 border-amber-200" : "bg-slate-50 border-slate-200"
            }`}>
              <div className="text-[10px] uppercase font-bold text-slate-500">Estimated Abandon Rate</div>
              <div className={`text-2xl font-extrabold tabular-nums ${dropRisk > 3 ? "text-amber-800" : "text-slate-800"}`}>
                {dropRisk.toFixed(1)}%
              </div>
            </div>
          </div>
        </div>
      )}
    </ExplainerShell>
  );
}

// -------------------------------------------------------------
// 11. IVR
// -------------------------------------------------------------
function IvrExplainer() {
  const [level, setLevel] = useState<"root" | "sales" | "support">("root");

  return (
    <ExplainerShell
      title="Multi-Level Interactive Voice Response (IVR)"
      caption="Click the dialpad numbers 1 or 2 to navigate through multi-tier IVR menus or test automated self-service."
      takeaway="Empower callers to self-serve or route directly to specialists with zero operator bottlenecks."
      textAlternative="Caller presses 1 for Sales, moving to regional routing options; caller presses 2 for Support."
    >
      {() => (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
            <div className="font-bold text-slate-800">
              Audio Prompt:
            </div>
            <div className="p-3 rounded-lg bg-white border border-slate-200 italic text-slate-600">
              {level === "root" && '"Thank you for calling CXDYNAMIQ. Press 1 for Sales, Press 2 for Technical Support."'}
              {level === "sales" && '"Sales Menu: Press 1 for New Cloud Licenses, Press 2 to Speak with an Account Executive."'}
              {level === "support" && '"VIP Support Menu: Press 1 for SIP Trunk Connectivity, Press 2 for Billing."'}
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center">
            <button
              onClick={() => setLevel("sales")}
              className="px-4 py-2 rounded-xl bg-white border border-slate-200 font-bold text-xs text-slate-800 hover:bg-slate-50 cursor-pointer shadow-2xs"
            >
              Keypad [1] Sales
            </button>
            <button
              onClick={() => setLevel("support")}
              className="px-4 py-2 rounded-xl bg-white border border-slate-200 font-bold text-xs text-slate-800 hover:bg-slate-50 cursor-pointer shadow-2xs"
            >
              Keypad [2] Support
            </button>
            <button
              onClick={() => setLevel("root")}
              className="px-3 py-2 rounded-xl bg-slate-100 text-slate-500 font-semibold text-xs hover:bg-slate-200 cursor-pointer"
            >
              Back to Start
            </button>
          </div>
        </div>
      )}
    </ExplainerShell>
  );
}

// -------------------------------------------------------------
// 12. ACD
// -------------------------------------------------------------
function AcdExplainer() {
  const [tier, setTier] = useState<"standard" | "vip">("vip");

  return (
    <ExplainerShell
      title="Automatic Call Distribution (ACD) Engine"
      caption="Toggle caller priority to see the ACD algorithm dynamically bump VIP callers ahead in queue."
      takeaway="Intelligent skills and VIP queue prioritization ensures high-value callers never wait."
      textAlternative="Selecting VIP priority moves the caller to Position 1 in queue, matching them with Senior Architect Priya."
    >
      {() => (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setTier("standard")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold cursor-pointer ${
                tier === "standard" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"
              }`}
            >
              Standard Caller
            </button>
            <button
              onClick={() => setTier("vip")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold cursor-pointer ${
                tier === "vip" ? "bg-[#069bd8] text-white" : "bg-slate-100 text-slate-700"
              }`}
            >
              Tier 1 VIP Account
            </button>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
            <div className="flex items-center justify-between font-bold text-slate-800">
              <span>Queue Status:</span>
              <span className="text-cyan-700">{tier === "vip" ? "Priority #1 (Instant Dispatch)" : "Position #4 (Est: 45s)"}</span>
            </div>
            <div className="text-[11px] text-slate-500">
              Matched Agent: <span className="font-bold text-slate-800">{tier === "vip" ? "Priya S. (Senior Specialist • Available)" : "Next Available Generalist"}</span>
            </div>
          </div>
        </div>
      )}
    </ExplainerShell>
  );
}

// -------------------------------------------------------------
// 13. CRM Integrations
// -------------------------------------------------------------
function CrmIntegrationsExplainer() {
  return <CtiIntegrationsExplainer brand="Multi-CRM (Salesforce / Zoho / Zendesk)" />;
}

// -------------------------------------------------------------
// 14. Omnichannel Routing
// -------------------------------------------------------------
function OmnichannelRoutingExplainer() {
  const [activeChannel, setActiveChannel] = useState<"voice" | "whatsapp" | "email">("whatsapp");

  return (
    <ExplainerShell
      title="Unified Omnichannel Agent Inbox"
      caption="Switch between customer interaction channels to see voice, WhatsApp, and email flow into one unified agent desktop."
      takeaway="Preserve full conversation context across voice, chat, and messaging."
      textAlternative="Agent responds to WhatsApp chat, with customer voice recording and email history displayed in the same window."
    >
      {() => (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            {(["voice", "whatsapp", "email"] as const).map((ch) => (
              <button
                key={ch}
                onClick={() => setActiveChannel(ch)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold capitalize cursor-pointer ${
                  activeChannel === ch ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"
                }`}
              >
                {ch}
              </button>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
            <div className="font-bold text-slate-800">Active Channel Stream: {activeChannel.toUpperCase()}</div>
            <div className="p-3 rounded-lg bg-white border border-slate-200 text-slate-600">
              {activeChannel === "whatsapp" && "Customer on WhatsApp: 'Can you confirm my tracking ID for order #8921?' → Bot verified → Handed to agent."}
              {activeChannel === "voice" && "Incoming SIP Call from +91 98450: 'I need to upgrade our contact center seats.'"}
              {activeChannel === "email" && "Email from support@acme.com: 'Requesting SLA addendum review.'"}
            </div>
          </div>
        </div>
      )}
    </ExplainerShell>
  );
}

// -------------------------------------------------------------
// 15. Conversational AI
// -------------------------------------------------------------
function ConversationalAiExplainer() {
  const [step, setStep] = useState<"bot" | "human">("bot");

  return (
    <ExplainerShell
      title="AI Self-Service & Agent Handover"
      caption="Click 'Need a Human Agent' to simulate smooth conversational handover with full transcript context."
      takeaway="Automate 60% of repetitive Tier 1 queries while preserving seamless human escalation."
      textAlternative="Conversational bot answers billing question, and caller requests agent handover with full transcript transferred."
    >
      {() => (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
            <div className="flex items-center gap-2 text-cyan-700 font-bold">
              <Bot className="w-4 h-4" />
              <span>CXDYNAMIQ GenAI Voice Bot</span>
            </div>
            <p className="text-slate-600 italic">
              &quot;Hello! I see you called about invoice #INV-402. Would you like to pay now via payment link, or speak with an agent?&quot;
            </p>
          </div>

          {step === "human" && (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs space-y-1">
              <div className="font-bold text-emerald-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Handover Complete → Connected to Agent Priya</span>
              </div>
              <p className="text-emerald-800 text-[11px]">
                Full conversational history and intent transferred with zero need for caller to repeat themselves.
              </p>
            </div>
          )}

          <div className="flex items-center justify-end">
            <button
              onClick={() => setStep(step === "bot" ? "human" : "bot")}
              className="btn-primary-emerald px-4 py-2 rounded-xl text-xs font-bold cursor-pointer"
            >
              {step === "bot" ? "Escalate to Human Agent →" : "Reset Simulation"}
            </button>
          </div>
        </div>
      )}
    </ExplainerShell>
  );
}

// -------------------------------------------------------------
// 16. Speech Analytics
// -------------------------------------------------------------
function SpeechAnalyticsExplainer() {
  const [position, setPosition] = useState(60);

  return (
    <ExplainerShell
      title="Automated Audio Transcription & Sentiment Waveform"
      caption="Drag the scrub bar to analyze customer sentiment and flagged compliance keywords across the call timeline."
      takeaway="100% of calls automatically transcribed and scored for QA compliance."
      textAlternative="Scrubbing the waveform at 60s highlights positive sentiment and verified compliance keywords."
    >
      {() => (
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-800">
              <span>Scrub Timeline: {position}s</span>
              <span className="font-mono text-emerald-600">Sentiment: {position > 50 ? "+0.92 Positive" : "-0.15 Neutral"}</span>
            </div>
            <input
              type="range"
              min="10"
              max="120"
              value={position}
              onChange={(e) => setPosition(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
            <div className="font-bold text-slate-800">Transcript at {position}s:</div>
            <div className="p-2.5 rounded bg-white border border-slate-200 text-slate-700">
              {position > 50 
                ? 'Caller: "Thank you so much Priya, that completely solved our routing issue!" [Tags: Resolved, High CSAT]' 
                : 'Caller: "We noticed some latency on the trunk lines earlier today." [Tags: Investigation]'}
            </div>
            <div className="text-[11px] text-cyan-700 font-semibold">
              QA Compliance Score: 98/100 (Pass) • Agent Script Adherence: 100%
            </div>
          </div>
        </div>
      )}
    </ExplainerShell>
  );
}

// -------------------------------------------------------------
// 18. WhatsApp Business
// -------------------------------------------------------------
function WhatsAppExplainer() {
  return (
    <ExplainerShell
      title="WhatsApp Business API Interactive Flow"
      caption="Simulate an inbound customer messaging interaction with automated bot replies and agent takeover."
      takeaway="Engage billions of WhatsApp users with verified enterprise business channels."
      textAlternative="Inbound WhatsApp message triggers bot greeting and order lookup, followed by agent confirmation."
    >
      {() => (
        <div className="space-y-3 max-w-md mx-auto p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100">
          <div className="bg-white p-2.5 rounded-xl rounded-tl-none shadow-2xs text-xs text-slate-800 max-w-[80%]">
            Hello, I need to check my booking status for tomorrow.
          </div>
          <div className="bg-emerald-600 text-white p-2.5 rounded-xl rounded-tr-none shadow-2xs text-xs max-w-[80%] ml-auto">
            Hi Rahul! Your booking #BK-902 is confirmed for 10:00 AM. Would you like to reschedule or speak to support?
          </div>
        </div>
      )}
    </ExplainerShell>
  );
}

// -------------------------------------------------------------
// 19. Intercom
// -------------------------------------------------------------
function IntercomExplainer() {
  return (
    <ExplainerShell
      title="Intercom Chat to Voice Escalation"
      caption="Watch web chat conversations instantly upgrade to high-definition voice calls inside the same ticket."
      takeaway="Convert high-intent web chat visitors into closed deals faster."
      textAlternative="Visitor asks complex technical question on Intercom chat, and agent clicks call to launch voice call."
    >
      {() => (
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-3">
          <div className="flex items-center justify-between font-bold text-slate-800">
            <span>Intercom Live Web Session</span>
            <span className="text-cyan-700">Online • Website Visitor</span>
          </div>
          <div className="p-3 rounded-lg bg-white border border-slate-200 text-slate-600">
            &quot;I am looking at your enterprise pricing and need a custom quotation for 100 agents.&quot;
          </div>
          <div className="flex justify-end">
            <button className="btn-primary-emerald px-4 py-2 rounded-xl text-xs font-bold cursor-pointer flex items-center gap-1.5">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Instant Escalate to Voice Call</span>
            </button>
          </div>
        </div>
      )}
    </ExplainerShell>
  );
}

// -------------------------------------------------------------
// 20. Enterprise
// -------------------------------------------------------------
function EnterpriseExplainer() {
  const [site, setSite] = useState<"india" | "singapore" | "us">("india");

  return (
    <ExplainerShell
      title="Multi-Location Enterprise Call Routing"
      caption="Switch between global branch offices to see centralized queue monitoring and location-aware carrier routing."
      takeaway="Manage global contact center operations through a single pane of glass."
      textAlternative="Switching between Bangalore, Singapore, and US centers displays centralized agent status and local SIP trunks."
    >
      {() => (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            {(["india", "singapore", "us"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setSite(s)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold capitalize cursor-pointer ${
                  site === s ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"
                }`}
              >
                {s === "india" ? "Bangalore Hub" : s === "singapore" ? "Singapore Regional" : "US West (San Jose)"}
              </button>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs grid grid-cols-3 gap-3 text-center">
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <div className="text-[10px] uppercase font-bold text-slate-400">Active Trunks</div>
              <div className="text-xl font-bold text-slate-900">{site === "india" ? "24 E1 SIP" : "12 Carrier"}</div>
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <div className="text-[10px] uppercase font-bold text-slate-400">Active Agents</div>
              <div className="text-xl font-bold text-[#069bd8]">{site === "india" ? "120 Seats" : "45 Seats"}</div>
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <div className="text-[10px] uppercase font-bold text-slate-400">Latency</div>
              <div className="text-xl font-bold text-emerald-600">&lt; 15ms</div>
            </div>
          </div>
        </div>
      )}
    </ExplainerShell>
  );
}

// -------------------------------------------------------------
// 21. BPO
// -------------------------------------------------------------
function BpoExplainer() {
  const [campaign, setCampaign] = useState<"clientA" | "clientB">("clientA");

  return (
    <ExplainerShell
      title="Multi-Tenant BPO Campaign Isolation"
      caption="Toggle between outsourced client accounts to see isolated agent scripts, caller IDs, and automated billing logs."
      takeaway="Run dozens of isolated client campaigns securely on one unified platform."
      textAlternative="Switching campaign changes agent script, dedicated DID, and client-specific reporting metrics."
    >
      {() => (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCampaign("clientA")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold cursor-pointer ${
                campaign === "clientA" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"
              }`}
            >
              Client Alpha (FinTech Support)
            </button>
            <button
              onClick={() => setCampaign("clientB")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold cursor-pointer ${
                campaign === "clientB" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"
              }`}
            >
              Client Beta (Healthcare Sales)
            </button>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
            <div className="font-bold text-slate-800">
              Dedicated Outbound CLI: <span className="text-cyan-700 font-mono">{campaign === "clientA" ? "+91 80 4455 1200" : "+91 80 6677 3400"}</span>
            </div>
            <div className="p-3 rounded-lg bg-white border border-slate-200 text-slate-600">
              Script: {campaign === "clientA" ? '"Thank you for calling FinTech Alpha Support. Have your account ID ready."' : '"Welcome to Healthcare Beta. Discover personalized care plans."'}
            </div>
          </div>
        </div>
      )}
    </ExplainerShell>
  );
}

// -------------------------------------------------------------
// 22. Education
// -------------------------------------------------------------
function EducationExplainer() {
  return (
    <ExplainerShell
      title="Student Admissions & Counseling Workflow"
      caption="Watch prospective student admission inquiries automatically route to assigned counselors with SMS reminders."
      takeaway="Accelerate student enrollment with instant counselor callbacks."
      textAlternative="Prospective applicant submits web form, triggering automatic counselor assignment and SMS reminder."
    >
      {() => (
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-3">
          <div className="font-bold text-slate-800">Inquiry: MBA Admissions 2026 Batch</div>
          <div className="p-3 rounded-lg bg-white border border-slate-200 text-slate-600">
            Applicant: Priya Sen • Preferred language: English • GMAT: 720
          </div>
          <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-800 font-semibold">
            Routed to Counselor: Dr. Arvind M. • Automated SMS reminder sent to candidate ✓
          </div>
        </div>
      )}
    </ExplainerShell>
  );
}

// -------------------------------------------------------------
// 23. Small Business
// -------------------------------------------------------------
function SmallBusinessExplainer() {
  const [step, setStep] = useState(1);

  return (
    <ExplainerShell
      title="Rapid 1-Day Small Business Go-Live"
      caption="Click through the 4 setup steps to see how a small business gets enterprise phone systems in under 24 hours."
      takeaway="Full enterprise telephony setup with zero IT staff needed."
      textAlternative="Step 1 sign up, step 2 choose numbers, step 3 add agents, step 4 receive first call in 24 hours."
    >
      {() => (
        <div className="space-y-4">
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((s) => (
              <button
                key={s}
                onClick={() => setStep(s)}
                className={`p-2.5 rounded-xl text-center text-xs font-bold transition-all cursor-pointer ${
                  step === s ? "bg-[#069bd8] text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Step 0{s}
              </button>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
            <div className="font-bold text-slate-900 text-sm">
              {step === 1 && "1. Instant Cloud Provisioning"}
              {step === 2 && "2. Choose Local or Toll-Free Numbers"}
              {step === 3 && "3. Invite Agents via Email"}
              {step === 4 && "4. Go Live in 24 Hours with VIP Support"}
            </div>
            <p className="text-slate-600">
              {step === 1 && "Account activated in 5 minutes with zero hardware installation required."}
              {step === 2 && "Select phone numbers across 60+ countries or port your existing business numbers."}
              {step === 3 && "Agents log in using Chrome browser or WebRTC softphone with zero downloads."}
              {step === 4 && "Make and receive your first customer call with dedicated VIP engineer guidance."}
            </p>
          </div>
        </div>
      )}
    </ExplainerShell>
  );
}

// -------------------------------------------------------------
// Unified General Explainer Fallback
// -------------------------------------------------------------
function UnifiedRoutingExplainer({ title }: { title: string }) {
  return (
    <ExplainerShell
      title={`Intelligent Operations: ${title}`}
      caption={`Interactive demonstration illustrating ${title} running on CXDYNAMIQ carrier-grade cloud telephony.`}
      takeaway="Sub-second delivery with native enterprise CRM integration."
      textAlternative={`Interactive walkthrough illustrating ${title} architecture and live agent connectivity.`}
    >
      {() => (
        <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#069bd8] flex items-center justify-center mx-auto">
            <Layers className="w-6 h-6" />
          </div>
          <div className="text-sm font-bold text-slate-800 capitalize">{title} Active Engine</div>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Deploy this module into your existing workflow within 1 business day with 24/7 dedicated VIP support.
          </p>
        </div>
      )}
    </ExplainerShell>
  );
}
