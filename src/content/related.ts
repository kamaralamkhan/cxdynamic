export interface RelatedCard {
  title: string;
  path: string;
  desc: string;
  badge?: string;
}

export const RELATED_MAP: Record<string, string[]> = {
  "/inbound-calling": ["/ivr", "/acd", "/cti-integrations", "/speech-analytics", "/auto-attendant"],
  "/outbound-calling": ["/auto-dialer", "/power-dialer", "/predictive-dialer", "/click-to-call", "/crm-integrations"],
  "/blended-call-centre": ["/inbound-calling", "/outbound-calling", "/acd", "/omnichannel-routing"],
  "/cti-integrations": ["/zoho", "/zendesk", "/salesforce", "/freshdesk", "/hubspot"],
  "/auto-attendant": ["/ivr", "/acd", "/contact-manager", "/inbound-calling"],
  "/contact-manager": ["/crm-integrations", "/click-to-call", "/auto-dialer"],
  "/click-to-call": ["/crm-integrations", "/auto-dialer", "/cti-integrations", "/power-dialer"],
  "/auto-dialer": ["/power-dialer", "/predictive-dialer", "/outbound-calling", "/crm-integrations"],
  "/crm-integrations": ["/zoho", "/salesforce", "/hubspot", "/click-to-call", "/cti-integrations"],
  "/omnichannel-routing": ["/whatsapp-business", "/intercom-integration", "/conversational-ai", "/acd", "/speech-analytics"],
  "/conversational-ai": ["/omnichannel-routing", "/whatsapp-business", "/speech-analytics", "/ivr"],
  "/speech-analytics": ["/inbound-calling", "/conversational-ai", "/omnichannel-routing"],
  "/zoho": ["/cti-integrations", "/click-to-call", "/salesforce", "/zendesk"],
  "/zendesk": ["/cti-integrations", "/click-to-call", "/zoho", "/freshdesk"],
  "/salesforce": ["/cti-integrations", "/click-to-call", "/hubspot", "/zoho"],
  "/freshdesk": ["/cti-integrations", "/click-to-call", "/zendesk", "/zoho"],
  "/hubspot": ["/cti-integrations", "/click-to-call", "/salesforce", "/freshdesk"],
  "/whatsapp-business": ["/omnichannel-routing", "/conversational-ai", "/intercom-integration"],
  "/intercom-integration": ["/omnichannel-routing", "/whatsapp-business", "/zendesk"],
  "/power-dialer": ["/auto-dialer", "/outbound-calling", "/click-to-call"],
  "/predictive-dialer": ["/auto-dialer", "/outbound-calling", "/click-to-call"],
  "/ivr": ["/acd", "/auto-attendant", "/inbound-calling", "/conversational-ai"],
  "/acd": ["/ivr", "/inbound-calling", "/blended-call-centre", "/omnichannel-routing"],
  "/enterprise": ["/blended-call-centre", "/cti-integrations", "/speech-analytics", "/omnichannel-routing"],
  "/bpo": ["/outbound-calling", "/blended-call-centre", "/auto-dialer", "/speech-analytics"],
  "/education": ["/outbound-calling", "/ivr", "/crm-integrations", "/whatsapp-business"],
  "/small-business": ["/auto-attendant", "/click-to-call", "/inbound-calling", "/crm-integrations"],
};

export const SERVICE_CARD_INFO: Record<string, { title: string; desc: string; badge: string }> = {
  "/inbound-calling": {
    title: "Inbound Calling",
    desc: "Smart skills-based routing and sub-second queue delivery with zero hardware.",
    badge: "Voice Solution",
  },
  "/outbound-calling": {
    title: "Outbound Calling",
    desc: "High-velocity campaign pacing with answering machine detection and live recording.",
    badge: "Sales Solution",
  },
  "/blended-call-centre": {
    title: "Blended Call Centre",
    desc: "Dynamically shift agents between inbound queues and outbound campaigns in real time.",
    badge: "Unified Solution",
  },
  "/cti-integrations": {
    title: "CTI Integrations",
    desc: "Native browser screen-pop and two-way CRM sync for Salesforce, Zoho and Zendesk.",
    badge: "Integration",
  },
  "/auto-attendant": {
    title: "Auto Attendant",
    desc: "Greet callers and navigate departments by schedule, timezone, or custom holiday hours.",
    badge: "Virtual Receptionist",
  },
  "/contact-manager": {
    title: "Contact Manager",
    desc: "Consolidated lead lists, call history, and tags ready for instant outreach.",
    badge: "Dialer Suite",
  },
  "/click-to-call": {
    title: "Click to Call",
    desc: "Launch phone conversations directly from your browser CRM with automatic activity logging.",
    badge: "Outreach Tool",
  },
  "/auto-dialer": {
    title: "Auto Dialer",
    desc: "Maximize agent talk-time by automating repetitive dialing and filtering busy tones.",
    badge: "Dialer Suite",
  },
  "/crm-integrations": {
    title: "CRM Integrations",
    desc: "Synchronize contacts, call notes, and recordings directly into your customer record.",
    badge: "Ecosystem",
  },
  "/omnichannel-routing": {
    title: "Omnichannel Routing",
    desc: "Unify voice, WhatsApp, email, and live chat into a single continuous agent inbox.",
    badge: "CX Hub",
  },
  "/conversational-ai": {
    title: "Conversational AI",
    desc: "Deploy AI voice and chat agents that resolve common queries and hand over gracefully.",
    badge: "AI Automation",
  },
  "/speech-analytics": {
    title: "Speech Analytics",
    desc: "100% automated call transcription, sentiment tracking, and supervisory QA scores.",
    badge: "Intelligence",
  },
  "/zoho": {
    title: "Zoho Integration",
    desc: "Make and receive calls inside Zoho CRM via PhoneBridge with zero latency.",
    badge: "CRM Integration",
  },
  "/zendesk": {
    title: "Zendesk Integration",
    desc: "Instant ticket creation and screen pop on incoming customer queries.",
    badge: "Helpdesk",
  },
  "/salesforce": {
    title: "Salesforce CTI",
    desc: "Enterprise Open CTI integration with automated activity logging and lead conversion.",
    badge: "Enterprise CRM",
  },
  "/freshdesk": {
    title: "Freshdesk Integration",
    desc: "Attach customer recordings and call duration directly to Freshdesk support tickets.",
    badge: "Helpdesk",
  },
  "/hubspot": {
    title: "HubSpot Integration",
    desc: "Click to call from HubSpot contact records with full timeline history sync.",
    badge: "Sales CRM",
  },
  "/whatsapp-business": {
    title: "WhatsApp Business",
    desc: "Official WhatsApp Business API integration with automated conversational routing.",
    badge: "Digital Channel",
  },
  "/intercom-integration": {
    title: "Intercom Integration",
    desc: "Seamlessly escalate live web chats into crystal-clear voice conversations.",
    badge: "Digital Channel",
  },
  "/power-dialer": {
    title: "Power Dialer",
    desc: "Sequentially dial through lead lists with zero operator fatigue.",
    badge: "Sales Dialer",
  },
  "/predictive-dialer": {
    title: "Predictive Dialer",
    desc: "Algorithmically forecast agent availability to place calls ahead of queue idle time.",
    badge: "Sales Dialer",
  },
  "/ivr": {
    title: "Interactive Voice Response",
    desc: "Multi-tier self-service IVR menus with speech synthesis and DTMF recognition.",
    badge: "Self-Service",
  },
  "/acd": {
    title: "ACD & Smart Routing",
    desc: "Intelligent skills-based automatic call distribution to the most capable agent.",
    badge: "Call Routing",
  },
  "/enterprise": {
    title: "Enterprise Solutions",
    desc: "Multi-location routing, dedicated SIP carrier trunks, and custom enterprise SLAs.",
    badge: "Enterprise",
  },
  "/bpo": {
    title: "BPO Solutions",
    desc: "Multi-tenant tenant isolation, separate client queues, and granular billing logs.",
    badge: "BPO Contact Center",
  },
  "/education": {
    title: "Education Admissions",
    desc: "High-volume inquiry handling, automated counseling reminders, and SMS alerts.",
    badge: "Education",
  },
  "/small-business": {
    title: "Small Business Phone",
    desc: "Professional business telephony with cloud PBX features setup in under 24 hours.",
    badge: "Small Business",
  },
};

export function getRelatedServices(path: string): RelatedCard[] {
  const normPath = path === "/" ? "/" : path.replace(/\/$/, "");
  const paths = RELATED_MAP[normPath] || ["/inbound-calling", "/auto-dialer", "/cti-integrations", "/speech-analytics"];
  
  return paths.map((p) => {
    const info = SERVICE_CARD_INFO[p] || {
      title: p.replace(/^\//, "").replace(/-/g, " ").toUpperCase(),
      desc: "Cloud contact center solution engineered for seamless customer communication.",
      badge: "Feature",
    };
    return {
      title: info.title,
      path: p,
      desc: info.desc,
      badge: info.badge,
    };
  });
}
