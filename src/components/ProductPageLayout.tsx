import { PageData, getPageCategory } from "@/lib/content";
import Navbar from "@/components/Navbar";
import CalmFooter from "@/components/CalmFooter";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  ShieldCheck, 
  Zap, 
  Users, 
  Clock, 
  Sparkles,
  Building2,
  Cpu,
  Flame,
  Layers
} from "lucide-react";

interface ProductPageLayoutProps {
  page: PageData;
}

export default function ProductPageLayout({ page }: ProductPageLayoutProps) {
  const category = getPageCategory(page.path);

  // Extract structured elements from blocks
  const h1Block = page.blocks.find((b) => b.type === "h1");
  const title = h1Block?.text || page.meta.title.split("|")[0].trim();
  
  const paragraphs = page.blocks.filter((b) => b.type === "p").map((b) => b.text || "");
  const heroSub = paragraphs[0] || page.meta.description.slice(0, 180) + "...";
  
  const listItems = page.blocks.filter((b) => b.type === "li").map((b) => b.text || "");
  const otherHeadings = page.blocks.filter((b) => ["h2", "h3", "h4"].includes(b.type)).map((b) => b.text || "");

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar />

      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200 py-3 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link href="/" className="hover:text-slate-900">Home</Link>
          <span>/</span>
          <span className="capitalize text-slate-400">{category}</span>
          <span>/</span>
          <span className="text-slate-900 font-semibold">{title}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200 pt-12 pb-16 lg:pt-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Hero Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-cyan-700 border border-sky-100 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{category.replace("-", " ").toUpperCase()} SOLUTION</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {heroSub}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link
                  href="/contact-us"
                  className="btn-tactile btn-primary-emerald inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold rounded-xl shadow-xs"
                >
                  <span>Start 21-Day Free Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="#overview"
                  className="btn-tactile inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl border border-slate-200 transition-colors"
                >
                  <span>Explore Features</span>
                </a>
              </div>

              <div className="pt-2 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Deploy in 24 hours</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>VIP 24/7 support included</span>
                </div>
              </div>
            </div>

            {/* Right Mockup / Live Specs Card */}
            <div className="lg:col-span-5">
              <div className="calm-card p-6 bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                    <span className="text-xs font-bold text-slate-800">Module Specifications</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#069bd8] font-bold">Cloud Ready</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">Deployment Time</div>
                    <div className="text-sm font-bold text-slate-900 mt-0.5">Under 1 Business Day</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">Telephony Infrastructure</div>
                    <div className="text-sm font-bold text-slate-900 mt-0.5">Carrier-grade SIP / WebRTC</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">CRM Compatibility</div>
                    <div className="text-sm font-bold text-slate-900 mt-0.5">Salesforce, Zoho, Zendesk, Freshdesk</div>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <Link href="/contact-us" className="text-xs font-bold text-cyan-700 hover:text-cyan-800 hover:underline">
                    Schedule live 1-on-1 walkthrough →
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content & Explainer Blocks */}
      <section id="overview" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Paragraphs Overview */}
          {paragraphs.slice(1, 4).length > 0 && (
            <div className="calm-card p-8 sm:p-10 bg-white border border-slate-200 space-y-6">
              <h2 className="font-display font-bold text-2xl text-slate-900">
                Detailed Overview
              </h2>
              <div className="space-y-4 text-sm text-slate-700 leading-relaxed max-w-4xl">
                {paragraphs.slice(1, 4).map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          )}

          {/* Feature Highlights Grid */}
          {(listItems.length > 0 || otherHeadings.length > 0) && (
            <div className="space-y-6">
              <h3 className="font-display font-extrabold text-2xl text-slate-900">
                Core Capabilities &amp; Architecture
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(listItems.length > 0 ? listItems : otherHeadings.slice(0, 6)).map((item, idx) => (
                  <div key={idx} className="calm-card p-6 bg-white border border-slate-200 space-y-2.5">
                    <div className="w-8 h-8 rounded-lg bg-sky-50 text-cyan-700 flex items-center justify-center font-bold text-xs">
                      {idx + 1}
                    </div>
                    <h4 className="font-display font-bold text-base text-slate-900">
                      {item}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Engineered for high-volume enterprise operations with sub-second latency and zero context loss.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 21-Day Free Trial Banner */}
          <div className="calm-card p-8 sm:p-12 bg-white border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Risk-Free Evaluation</span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900">
                Start your 21-day free trial of {title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Test call pacing, evaluate speech analytics, and connect your CRM with zero commitment.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/contact-us"
                className="btn-tactile btn-primary-emerald inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold rounded-xl shadow-xs"
              >
                <span>Request Trial Setup</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      <CalmFooter />
    </main>
  );
}
