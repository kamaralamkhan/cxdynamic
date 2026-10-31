export interface SeoEntry {
  title: string;
  description: string;
  h1: string;
  group?: string;
}

export const SEO_REGISTRY: Record<string, SeoEntry> = {
  "/": {
    title: "Cloud Contact Center Software | CXDYNAMIQ",
    description: "Deploy a cloud contact center in a day. Inbound and outbound calling, IVR, CRM integrations, WhatsApp and speech analytics with VIP support.",
    h1: "Ultrafast Implementation with VIP Support",
    group: "Home",
  },
  "/about-us": {
    title: "About CXDYNAMIQ | Cloud Contact Center Solutions",
    description: "Meet the team behind CXDYNAMIQ: call center solutions, business phone systems, sales dialers and CTI integrations for businesses of every size.",
    h1: "About CXDYNAMIQ",
    group: "Company",
  },
  "/who-we-are": {
    title: "Who We Are | CXDYNAMIQ",
    description: "Learn who CXDYNAMIQ is and how our team helps businesses build lasting, trustworthy relationships with their customers.",
    h1: "Who We Are",
    group: "Company",
  },
  "/enterprise": {
    title: "Enterprise Contact Center Software | CXDYNAMIQ",
    description: "Scalable cloud contact center for enterprises: multi-team routing, CRM integrations, call recording and analytics with dedicated VIP support.",
    h1: "Contact Center Software for Enterprise Teams",
    group: "Industry Solutions",
  },
  "/bpo": {
    title: "BPO Call Center Software | CXDYNAMIQ",
    description: "Run multiple client campaigns on one cloud platform with dialers, ACD routing, live monitoring, call recording and reporting built for BPOs.",
    h1: "Call Center Software for BPOs",
    group: "Industry Solutions",
  },
  "/education": {
    title: "Contact Center Software for Education | CXDYNAMIQ",
    description: "Handle admissions enquiries, follow-ups and student support with auto dialers, IVR and CRM integrations for schools, colleges and institutes.",
    h1: "Contact Center Solutions for Education",
    group: "Industry Solutions",
  },
  "/small-business": {
    title: "Small Business Phone & Call Center | CXDYNAMIQ",
    description: "A professional cloud phone system and call center for growing teams. Go live in a day with IVR, call recording and CRM integrations.",
    h1: "Call Center Software for Small Business",
    group: "Industry Solutions",
  },
  "/inbound-calling": {
    title: "Inbound Call Center Software | IVR, ACD | CXDYNAMIQ",
    description: "Inbound call center solution with modern IVR, ACD, skill routing, warm transfer, screen pop and call recording.",
    h1: "Inbound Call Center Software That Connects Customers to Agents, Anytime, Anywhere",
    group: "Call Centre Solutions",
  },
  "/outbound-calling": {
    title: "Outbound Call Center Software | CXDYNAMIQ",
    description: "Run outbound campaigns with auto, power and predictive dialing, answering machine detection, CRM click-to-call and call recording.",
    h1: "Outbound Call Center Software",
    group: "Call Centre Solutions",
  },
  "/blended-call-centre": {
    title: "Blended Call Center Software | CXDYNAMIQ",
    description: "Let agents handle inbound and outbound calls on one platform, with smart routing that balances queues and campaigns.",
    h1: "Blended Call Center Solution",
    group: "Call Centre Solutions",
  },
  "/cti-integrations": {
    title: "CTI Integrations for CRM & Helpdesk | CXDYNAMIQ",
    description: "Connect your phone system to Zoho, Zendesk, Salesforce, Freshdesk and HubSpot for screen pop, click-to-call and automatic call logging.",
    h1: "CTI Integrations for Your CRM and Helpdesk",
    group: "Call Centre Solutions",
  },
  "/auto-attendant": {
    title: "Auto Attendant Phone System | CXDYNAMIQ",
    description: "Greet callers, route them by menu, time or department and never miss a call with a virtual auto attendant.",
    h1: "Virtual Auto Attendant",
    group: "Business Phone System",
  },
  "/contact-manager": {
    title: "Contact Manager for Calling Teams | CXDYNAMIQ",
    description: "Keep contacts, lead lists and call history in one place so every agent calls with full context.",
    h1: "Contact Manager",
    group: "Business Phone System",
  },
  "/click-to-call": {
    title: "Click to Call Software | CXDYNAMIQ",
    description: "Call any number from your CRM or website with one click. Faster outreach with automatic logging and recording.",
    h1: "Click to Call",
    group: "Sales Dialer Solutions",
  },
  "/auto-dialer": {
    title: "Auto Dialer Software | CXDYNAMIQ",
    description: "Automate outbound campaigns with auto, power and predictive dialing, answering machine detection and CRM integration.",
    h1: "Auto Dialer Software",
    group: "Sales Dialer Solutions",
  },
  "/crm-integrations": {
    title: "CRM Integrations for Sales Dialers | CXDYNAMIQ",
    description: "Dial from your CRM, see customer data on every call and log activity automatically with CXDYNAMIQ CRM integrations.",
    h1: "CRM Integrations for Sales Teams",
    group: "Sales Dialer Solutions",
  },
  "/omnichannel-routing": {
    title: "Omnichannel Routing Software | CXDYNAMIQ",
    description: "Route voice, WhatsApp, chat and email interactions to the right agent with context preserved across channels.",
    h1: "Omnichannel Routing",
    group: "CX Hub",
  },
  "/conversational-ai": {
    title: "Conversational AI for Customer Service | CXDYNAMIQ",
    description: "Automate routine customer queries on voice and chat with conversational AI, and hand over to agents when it matters.",
    h1: "Conversational AI for Customer Service",
    group: "CX Hub",
  },
  "/speech-analytics": {
    title: "Speech Analytics Software | CXDYNAMIQ",
    description: "Analyze recorded calls for sentiment, keywords and quality to coach agents and spot issues early.",
    h1: "Speech Analytics",
    group: "CX Hub",
  },
  "/zoho": {
    title: "Zoho CRM Call Center Integration | CXDYNAMIQ",
    description: "Make and receive calls inside Zoho with screen pop, click-to-call and automatic call logging.",
    h1: "Zoho Integration",
    group: "CTI Integrations",
  },
  "/zendesk": {
    title: "Zendesk Call Center Integration | CXDYNAMIQ",
    description: "Connect CXDYNAMIQ to Zendesk to open tickets on incoming calls, click to call and log every conversation.",
    h1: "Zendesk Integration",
    group: "CTI Integrations",
  },
  "/salesforce": {
    title: "Salesforce CTI Integration | CXDYNAMIQ",
    description: "Call from Salesforce, see customer records on every call and sync recordings and activity automatically.",
    h1: "Salesforce Integration",
    group: "CTI Integrations",
  },
  "/freshdesk": {
    title: "Freshdesk Call Center Integration | CXDYNAMIQ",
    description: "Bring calling into Freshdesk with screen pop, ticket creation and call recordings attached to tickets.",
    h1: "Freshdesk Integration",
    group: "CTI Integrations",
  },
  "/hubspot": {
    title: "HubSpot Calling Integration | CXDYNAMIQ",
    description: "Connect CXDYNAMIQ to HubSpot to call contacts, log calls and keep your sales data current.",
    h1: "HubSpot Integration",
    group: "CTI Integrations",
  },
  "/whatsapp-business": {
    title: "WhatsApp Business Solution for Support | CXDYNAMIQ",
    description: "Serve customers on WhatsApp with automated flows and agent handover, alongside your voice channels.",
    h1: "WhatsApp Business Solution",
    group: "Digital Channels",
  },
  "/intercom-integration": {
    title: "Intercom Integration | CXDYNAMIQ",
    description: "Connect Intercom conversations with voice calling so agents can escalate chats to calls and log everything.",
    h1: "Intercom Integration",
    group: "Digital Channels",
  },
  "/power-dialer": {
    title: "Power Dialer Software | CXDYNAMIQ",
    description: "Dial one lead at a time with automatic next-call dialing to keep agents focused and talk time high.",
    h1: "Power Dialer",
    group: "Dialer Features",
  },
  "/predictive-dialer": {
    title: "Predictive Dialer Software | CXDYNAMIQ",
    description: "Increase agent talk time with predictive dialing that places calls ahead of agent availability.",
    h1: "Predictive Dialer",
    group: "Dialer Features",
  },
  "/ivr": {
    title: "IVR Software (Interactive Voice Response) | CXDYNAMIQ",
    description: "Build multi-level IVR menus with text-to-speech so callers self-serve or reach the right team faster.",
    h1: "Interactive Voice Response (IVR)",
    group: "Telephony Features",
  },
  "/acd": {
    title: "ACD & Smart Call Routing | CXDYNAMIQ",
    description: "Distribute calls automatically by skill, priority and availability so customers reach the right agent first time.",
    h1: "ACD and Smart Routing",
    group: "Telephony Features",
  },
  "/blogs": {
    title: "Contact Center Blog & Resources | CXDYNAMIQ",
    description: "Expert tips and strategies on contact centers, telephony and customer experience from the CXDYNAMIQ team.",
    h1: "Knowledge Centre",
    group: "Resources",
  },
  "/contact-us": {
    title: "Contact Us & Request a Quote | CXDYNAMIQ",
    description: "Talk to a CXDYNAMIQ specialist, request a quote or book a callback.",
    h1: "Contact Us",
    group: "Company",
  },
  "/privacy-policy": {
    title: "Privacy Policy | CXDYNAMIQ",
    description: "How CXDYNAMIQ collects, uses and protects your personal information.",
    h1: "Privacy Policy",
    group: "Legal",
  },
  "/terms": {
    title: "Terms & Conditions | CXDYNAMIQ",
    description: "The terms that apply to using CXDYNAMIQ's website and services.",
    h1: "Terms & Conditions",
    group: "Legal",
  },
  "/page/Customer Experience management": {
    title: "Collection Management Software | CXDYNAMIQ",
    description: "Accelerate debt recovery and customer satisfaction with compliant automated dialing and omnichannel payment reminders.",
    h1: "Collection Management Solution",
    group: "Solutions",
  },
  "/category/business": {
    title: "Business Articles & Guides | CXDYNAMIQ",
    description: "Explore actionable guides and insights on customer experience management and call center technology for modern businesses.",
    h1: "Business Articles",
    group: "Resources",
  },
  "/category/Customer Experience management": {
    title: "Customer Experience Management Articles | CXDYNAMIQ",
    description: "Insights and strategies for enterprise CX, contact center operations, and digital engagement transformation.",
    h1: "Customer Experience Management",
    group: "Resources",
  },
};

export function getSeo(path: string): SeoEntry {
  // Normalize path without trailing slash
  const normPath = path === "/" ? "/" : path.replace(/\/$/, "");
  if (SEO_REGISTRY[normPath]) {
    return SEO_REGISTRY[normPath];
  }
  // Try decoded path
  try {
    const decoded = decodeURIComponent(normPath);
    if (SEO_REGISTRY[decoded]) return SEO_REGISTRY[decoded];
  } catch {}

  // Fallback
  return {
    title: "Cloud Contact Center Platform | CXDYNAMIQ",
    description: "Stress-free contact center solutions. Deploy in a day with omnichannel routing, CTI integrations, and conversational AI.",
    h1: "Cloud Contact Center Solutions",
    group: "Solutions",
  };
}
