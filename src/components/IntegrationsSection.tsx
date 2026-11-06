"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Braces,
  Boxes,
  BrainCircuit,
  Check,
  CloudCog,
  Database,
  ExternalLink,
  Link2,
  Network,
  Webhook,
  Wrench,
} from "lucide-react";
import {
  FreshdeskLogo,
  HubSpotLogo,
  IntercomLogo,
  SalesforceLogo,
  WhatsAppLogo,
  ZendeskLogo,
  ZohoLogo,
} from "@/components/IntegrationLogos";

type IntegrationCategory = "all" | "crm" | "service" | "platform";

interface IntegrationItem {
  name: string;
  description: string;
  category: Exclude<IntegrationCategory, "all">;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
  logo?: React.ComponentType<{ className?: string }>;
}

const INTEGRATIONS: IntegrationItem[] = [
  { name: "Salesforce", description: "CTI, screen-pop, click-to-dial, and activity sync.", category: "crm", icon: CloudCog, href: "/salesforce", logo: SalesforceLogo },
  { name: "HubSpot", description: "Keep calls, contacts, and deal timelines in sync.", category: "crm", icon: CloudCog, href: "/hubspot", logo: HubSpotLogo },
  { name: "Zoho CRM", description: "PhoneBridge calling with real-time record context.", category: "crm", icon: CloudCog, href: "/zoho", logo: ZohoLogo },
  { name: "Microsoft Dynamics", description: "Connect customer context to enterprise workflows.", category: "crm", icon: CloudCog },
  { name: "Zendesk", description: "Create tickets and attach call context automatically.", category: "service", icon: Wrench, href: "/zendesk", logo: ZendeskLogo },
  { name: "Freshdesk", description: "Recognize callers and sync agent state with tickets.", category: "service", icon: Wrench, href: "/freshdesk", logo: FreshdeskLogo },
  { name: "ServiceNow", description: "Bring conversations into enterprise service operations.", category: "service", icon: Wrench },
  { name: "Intercom", description: "Bridge in-app conversations and voice handoffs.", category: "service", icon: Wrench, href: "/intercom-integration", logo: IntercomLogo },
  { name: "WhatsApp Business", description: "Route verified messaging into the same customer thread.", category: "service", icon: Link2, href: "/whatsapp-business", logo: WhatsAppLogo },
  { name: "ERP & enterprise apps", description: "Connect operational systems without a rip-and-replace.", category: "platform", icon: Database },
  { name: "REST APIs", description: "Use documented APIs for secure two-way data exchange.", category: "platform", icon: Braces, href: "/crm-integrations" },
  { name: "Real-time webhooks", description: "Trigger fulfillment, routing, and notification workflows.", category: "platform", icon: Webhook, href: "/crm-integrations" },
  { name: "Enterprise applications", description: "Map custom fields and internal systems to CX workflows.", category: "platform", icon: Boxes },
  { name: "AI / LLM connectors", description: "Extend RAG and model orchestration with governed context.", category: "platform", icon: BrainCircuit },
];

const FILTERS: { id: IntegrationCategory; label: string }[] = [
  { id: "all", label: "All connectors" },
  { id: "crm", label: "CRM" },
  { id: "service", label: "Helpdesk & channels" },
  { id: "platform", label: "APIs & platform" },
];

export default function IntegrationsSection() {
  const [filter, setFilter] = useState<IntegrationCategory>("all");
  const visible = useMemo(
    () => filter === "all" ? INTEGRATIONS : INTEGRATIONS.filter((item) => item.category === filter),
    [filter],
  );

  return (
    <section id="integrations" className="relative overflow-hidden border-b border-slate-200 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div className="max-w-xl">
            <span className="mono-label text-cyan-700">ENTERPRISE ECOSYSTEM</span>
            <h2 className="heading-fluid-section mt-3 font-display font-semibold tracking-tight text-slate-950">
              Integrate with the systems your teams already trust.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              CXdynamIQ connects CRM, service, operational, and AI systems into one customer context layer—so modernization does not require a rip-and-replace.
            </p>
            <div className="mt-7 flex flex-wrap gap-2" role="tablist" aria-label="Integration categories">
              {FILTERS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={filter === item.id}
                  onClick={() => setFilter(item.id)}
                  className={`min-h-11 rounded-lg border px-3.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 ${filter === item.id ? "border-sky-700 bg-sky-700 text-white" : "border-slate-200 bg-white text-slate-700 hover:border-sky-300 hover:text-sky-800"}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-950 p-5 text-white shadow-sm sm:p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2.5">
                <Network className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                <span className="text-sm font-semibold">Unified context layer</span>
              </div>
              <span className="mono-label text-cyan-300">LIVE SYNC</span>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {["Customer context", "Conversation history", "Workflow actions"].map((label) => (
                <div key={label} className="rounded-xl border border-white/10 bg-white/[0.06] p-3">
                  <Check className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                  <p className="mt-2 text-xs font-medium text-slate-200">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

            <div id="integration-results" className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" role="tabpanel" aria-live="polite" aria-label="Available integrations">
          {visible.map((item) => {
            const Icon = item.logo ?? item.icon;
            const card = (
              <div className="group flex h-full min-h-[156px] flex-col rounded-2xl border border-slate-200 bg-slate-50/70 p-5 transition-all hover:-translate-y-0.5 hover:border-sky-300 hover:bg-white hover:shadow-[0_6px_16px_-4px_rgba(15,23,42,0.08)]">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-sky-700">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  {item.href ? <ExternalLink className="h-4 w-4 text-slate-400 transition-colors group-hover:text-sky-700" aria-hidden="true" /> : null}
                </div>
                <h3 className="mt-5 text-sm font-bold text-slate-950">{item.name}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{item.description}</p>
              </div>
            );
            return item.href ? <Link key={item.name} href={item.href} aria-label={`Explore ${item.name} integration`}>{card}</Link> : <div key={item.name}>{card}</div>;
          })}
        </div>
      </div>
    </section>
  );
}
