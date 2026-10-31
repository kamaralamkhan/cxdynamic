export interface ServiceOverride {
  whatIs: string;
  whoItsFor: string[];
  benefits: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export const SERVICE_OVERRIDES: Record<string, ServiceOverride> = {
  "/inbound-calling": {
    whatIs: "Inbound calling software allows businesses to receive, route, and manage incoming phone calls from customers over the internet. Instead of maintaining physical PBX telephone hardware, calls are delivered seamlessly to agents' computers or mobile devices with automatic customer records on screen.",
    whoItsFor: [
      "Customer support teams managing high volumes of incoming tickets",
      "Sales desks handling inbound inquiries and inbound marketing leads",
      "Financial, healthcare, and e-commerce enterprises requiring secure, reliable calling",
    ],
    benefits: [
      { title: "Sub-Second Queue Delivery", desc: "Connect customers to the right specialist instantly with intelligent skills-based routing." },
      { title: "Zero Hardware Costs", desc: "Eliminate expensive on-premise PBX servers with a 100% cloud-hosted infrastructure." },
      { title: "Real-Time Quality Coaching", desc: "Supervisors can whisper, barge-in, or monitor live agent interactions to protect brand standards." },
      { title: "Automatic CRM Sync", desc: "Every call recording, duration, and agent note is logged directly into your CRM contact timeline." },
    ],
    faqs: [
      { q: "How quickly can we deploy CXDYNAMIQ Inbound Calling?", a: "Deployment is completed within 1 business day. Our VIP support team handles carrier porting, agent provisioning, and CRM integration setup." },
      { q: "Can we use our existing telephone numbers?", a: "Yes. You can port your existing local, toll-free, or international numbers directly into CXDYNAMIQ without any downtime." },
      { q: "Does it support remote and hybrid agents?", a: "Yes. Agents can log in from any location using Google Chrome or WebRTC softphones with enterprise-grade audio quality." },
      { q: "Is call recording included?", a: "Yes. Unlimited compliant call recording with dual-channel audio and automatic PII redaction is included." },
    ],
  },
  "/outbound-calling": {
    whatIs: "Outbound calling software automates sales outreach and proactive customer communications. It dials phone numbers from lead lists automatically, detects answering machines, and connects agents only when a live human answers.",
    whoItsFor: [
      "Inside sales and telemarketing teams requiring high daily talk time",
      "Collections departments reaching past-due accounts with compliant pacing",
      "Recruitment and survey agencies conducting large-scale phone outreach",
    ],
    benefits: [
      { title: "Tripled Agent Talk Time", desc: "Filter out answering machines, busy signals, and disconnected numbers automatically." },
      { title: "Local Presence Caller ID", desc: "Increase pickup rates by displaying local area codes matching the prospect's location." },
      { title: "Real-Time Campaign Dashboards", desc: "Track connection rates, talk time, and agent conversion metrics live." },
      { title: "Pre-Recorded Voicemail Drops", desc: "Leave customized voice messages with one click while moving directly to the next lead." },
    ],
    faqs: [
      { q: "What dialing modes are supported?", a: "CXDYNAMIQ provides Auto Dialing, Power Dialing, and Predictive Dialing modes to match your campaign compliance requirements." },
      { q: "How does Answering Machine Detection (AMD) work?", a: "Our AI-powered AMD algorithm analyzes the initial audio greeting in under 500ms to distinguish human voices from automated voicemails." },
      { q: "Can we dial directly from our CRM?", a: "Yes. With native one-click dialing and list synchronization for Salesforce, Zoho, Zendesk, and HubSpot." },
      { q: "Is it compliant with DND and TCPA regulations?", a: "Yes. CXDYNAMIQ features automated Do-Not-Call (DND) list scrubbing and configurable dialing time windows." },
    ],
  },
  "/blended-call-centre": {
    whatIs: "A blended call center combines inbound customer support and outbound sales outreach on a single platform. Intelligent routing automatically shifts agents between answering queues and making campaign calls based on live queue traffic.",
    whoItsFor: [
      "Growth teams where agents handle both customer service tickets and outbound follow-ups",
      "Support centers experiencing seasonal or peak-hour inbound traffic fluctuations",
      "BPO service providers managing multi-functional client campaigns",
    ],
    benefits: [
      { title: "Eliminate Agent Downtime", desc: "When inbound volume drops, agents automatically receive outbound leads to dial." },
      { title: "Protect Queue SLAs", desc: "During sudden inbound spikes, outbound agents are dynamically reassigned to incoming queues." },
      { title: "Unified Reporting", desc: "Review complete inbound and outbound metrics on a consolidated supervisor dashboard." },
      { title: "Consistent Customer Experience", desc: "Customers enjoy identical professional routing regardless of call direction." },
    ],
    faqs: [
      { q: "How does automatic load balancing work?", a: "You configure threshold rules (e.g. if queue wait exceeds 20 seconds, reassign 5 outbound agents to inbound). The platform handles transitions automatically." },
      { q: "Do agents need separate logins for inbound and outbound?", a: "No. Agents use one unified dashboard to receive inbound calls and dial outbound campaigns." },
      { q: "Can we customize call scripts per queue?", a: "Yes. When an inbound or outbound call connects, the corresponding script and CRM profile display automatically." },
      { q: "What CRM tools integrate with Blended Call Centre?", a: "Native integrations include Zoho, Salesforce, Zendesk, Freshdesk, HubSpot, and custom REST API endpoints." },
    ],
  },
  "/cti-integrations": {
    whatIs: "Computer Telephony Integration (CTI) bridges your phone system with your CRM or helpdesk software. It displays caller records instantly on your computer screen before you answer and automatically logs calls, notes, and recordings back to the contact timeline.",
    whoItsFor: [
      "Sales teams looking to eliminate manual note-taking and call logging",
      "Support agents who need immediate access to customer history and open tickets",
      "Contact centers managing high call volumes across multiple business software tools",
    ],
    benefits: [
      { title: "Instant Screen-Pop", desc: "View the customer's full account history, recent orders, and open tickets before saying hello." },
      { title: "One-Click Calling", desc: "Dial any phone number inside your CRM or browser with a single mouse click." },
      { title: "Automated Call Logging", desc: "Every call timestamp, duration, recording URL, and disposition syncs automatically." },
      { title: "Zero Developer Overhead", desc: "Pre-built native integrations deploy in minutes without writing custom code." },
    ],
    faqs: [
      { q: "Which CRMs are natively supported?", a: "CXDYNAMIQ natively connects with Salesforce, Zoho CRM, Zendesk, Freshdesk, HubSpot, and Intercom." },
      { q: "Can we connect our proprietary internal database?", a: "Yes. Our open Webhooks and REST APIs enable two-way sync with any internal SQL database or custom CRM." },
      { q: "Does the integration require browser extensions?", a: "No. Our WebRTC phone widget embeds directly into your web browser or CRM interface." },
      { q: "Are call recordings stored inside the CRM?", a: "Recordings are securely stored on cloud storage with direct clickable playback links embedded in your CRM records." },
    ],
  },
  "/auto-attendant": {
    whatIs: "An auto attendant (or virtual receptionist) is an automated telephony greeting system that answers incoming calls and directs callers to the right department, employee, or recorded information using voice menus or keypad selections.",
    whoItsFor: [
      "Companies wanting to project a professional corporate image without hiring full-time receptionists",
      "Multi-department organizations needing reliable 24/7 call steering",
      "Businesses operating across multiple time zones or locations",
    ],
    benefits: [
      { title: "24/7 Professional Reception", desc: "Greet every caller with customized studio-quality audio greetings day or night." },
      { title: "Time-Based Routing Trees", desc: "Automatically route calls to voicemail, on-call mobiles, or secondary queues outside business hours." },
      { title: "Dial-by-Name Directory", desc: "Callers can search for and connect directly to individual team members." },
      { title: "Zero Missed Opportunities", desc: "Never lose a high-value customer inquiry due to busy lines or unanswered desks." },
    ],
    faqs: [
      { q: "Can we upload our own custom audio recordings?", a: "Yes. You can upload MP3/WAV files, record greetings over the phone, or use our high-fidelity text-to-speech engine." },
      { q: "How many menu levels can we configure?", a: "CXDYNAMIQ supports unlimited multi-level menu branching (e.g. Press 1 for English > Press 2 for Billing > Press 3 for Enterprise)." },
      { q: "Can the auto attendant forward calls to mobile phones?", a: "Yes. If agents are away from their computers, calls can forward to personal or business mobile numbers seamlessly." },
      { q: "Can we set holiday schedules in advance?", a: "Yes. Pre-schedule custom holiday greetings and specific after-hours routing paths on the calendar." },
    ],
  },
  "/auto-dialer": {
    whatIs: "Auto dialer software automates the process of dialing outbound phone numbers from a uploaded contact list. It removes manual dialing, eliminates busy signals, and immediately bridges answered calls to available sales or support representatives.",
    whoItsFor: [
      "Lead generation and outbound sales development teams",
      "Loan recovery, debt collection, and financial follow-up teams",
      "Event promotion, customer survey, and polling operations",
    ],
    benefits: [
      { title: "300% Talk Time Boost", desc: "Increase productive talk minutes from 15 minutes per hour to over 45 minutes per hour." },
      { title: "Smart Answering Machine Filter", desc: "Distinguish between live human pickups and automated voicemail machines in under 500 milliseconds." },
      { title: "Live Supervisor Monitoring", desc: "Listen in, whisper coaching tips, or join active calls to support newer agents." },
      { title: "Campaign List Recycling", desc: "Automatically reschedule unattended or busy leads for optimal callback windows." },
    ],
    faqs: [
      { q: "How does the auto dialer import leads?", a: "You can import leads via CSV/Excel upload or sync them directly from your CRM via real-time API." },
      { q: "Can we set dialing hours to prevent late-night calls?", a: "Yes. Automated time-zone protection ensures calls are only placed within authorized local business hours." },
      { q: "Does it support local caller IDs?", a: "Yes. Local Presence CLI can dynamically display a phone number matching the area code of the called party." },
      { q: "What happens when a lead asks to be unsubscribed?", a: "Agents can click one button to immediately add the number to the global Do-Not-Call (DND) suppression list." },
    ],
  },
};

export function getServiceOverride(path: string): ServiceOverride {
  const normPath = path === "/" ? "/" : path.replace(/\/$/, "");
  if (SERVICE_OVERRIDES[normPath]) {
    return SERVICE_OVERRIDES[normPath];
  }

  // Generative default fallback
  const name = normPath.replace(/^\//, "").replace(/-/g, " ");
  const capitalized = name.replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    whatIs: `${capitalized} from CXDYNAMIQ delivers an enterprise-grade cloud communication platform designed to streamline customer interactions, reduce hardware expenses, and increase operational productivity from day one.`,
    whoItsFor: [
      `High-volume customer contact centers requiring reliable 99.9% uptime`,
      `Growing sales and support organizations seeking seamless CRM integration`,
      `Enterprises requiring dedicated 24/7 VIP support and rapid 1-day deployment`,
    ],
    benefits: [
      { title: "Rapid 1-Day Deployment", desc: "Go live in under 24 hours with dedicated VIP engineering guidance and turnkey onboarding." },
      { title: "Sub-Second Cloud Telephony", desc: "Carrier-grade SIP trunks and WebRTC softphones ensure crystal-clear voice clarity." },
      { title: "Zero Hardware Maintenance", desc: "Eliminate PBX maintenance contracts, phone lines, and on-premise infrastructure." },
      { title: "Native CRM Intelligence", desc: "Seamless screen-pop, click-to-call, and automated record sync for your team." },
    ],
    faqs: [
      { q: `How quickly can we get started with ${capitalized}?`, a: "Our deployment team can provision your cloud instance, numbers, and agent accounts within 1 business day." },
      { q: "Do we need any specialized hardware?", a: "No. All you need is an internet connection and a web browser. Agents can use headsets with Chrome on PC or Mac." },
      { q: "Can we integrate this with our current CRM?", a: "Yes. CXDYNAMIQ offers native out-of-the-box integrations for Zoho, Salesforce, Zendesk, Freshdesk, and HubSpot." },
      { q: "What level of support is included?", a: "All plans include 24/7 dedicated VIP engineering support via phone, email, and WhatsApp." },
    ],
  };
}
