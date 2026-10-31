import { notFound } from "next/navigation";
import { getPageData, getSitemap } from "@/lib/content";
import Navbar from "@/components/Navbar";
import CalmFooter from "@/components/CalmFooter";
import CallbackSection from "@/components/CallbackSection";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight, BookOpen, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const sitemap = getSitemap();
  return sitemap
    .filter((entry) => entry.path.startsWith("/blog/"))
    .map((entry) => ({
      slug: entry.path.replace("/blog/", ""),
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const jsonSlug = `blog__${slug}`;
  const page = getPageData(jsonSlug);
  if (!page) return {};

  const cleanTitle = page.meta.title.split("|")[0].trim().slice(0, 50) + " | CXDYNAMIQ";
  const desc = page.meta.description.slice(0, 155).trim();

  return {
    title: cleanTitle,
    description: desc,
    alternates: {
      canonical: `https://www.cxdynamiq.com/blog/${slug}`,
    },
    openGraph: {
      title: cleanTitle,
      description: desc,
      url: `https://www.cxdynamiq.com/blog/${slug}`,
      siteName: "CXDYNAMIQ",
      type: "article",
    },
    twitter: {
      card: "summary",
      title: cleanTitle,
      description: desc,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const jsonSlug = `blog__${slug}`;
  const page = getPageData(jsonSlug);
  if (!page) notFound();

  const title = page.meta.title.split("|")[0].trim();
  const paragraphs = page.blocks.filter((b) => b.type === "p").map((b) => b.text || "");

  // In-body contextual links per Section F
  const isFinancial = slug.includes("financial");
  const relatedModules = isFinancial ? [
    { title: "Inbound Calling Solutions", path: "/inbound-calling", desc: "Skills-based queue routing for high-stakes financial operations." },
    { title: "Outbound Calling Campaigns", path: "/outbound-calling", desc: "Automated, compliant follow-up and verification outreach." },
    { title: "Speech Analytics & Quality Auditing", path: "/speech-analytics", desc: "100% automated regulatory compliance and QA monitoring." },
  ] : [
    { title: "Conversational AI for Service", path: "/conversational-ai", desc: "Deploy GenAI voice and chat agents that resolve common queries." },
    { title: "Speech Analytics & Sentiment", path: "/speech-analytics", desc: "Real-time acoustic analysis and automated QA scoring." },
    { title: "Omnichannel Routing", path: "/omnichannel-routing", desc: "Converge WhatsApp, voice, and live chat into one agent desktop." },
  ];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": page.meta.description.slice(0, 160),
    "author": {
      "@type": "Organization",
      "name": "CXDYNAMIQ",
      "url": "https://www.cxdynamiq.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": "CXDYNAMIQ",
      "logo": "https://www.cxdynamiq.com/images/favicon.png",
    },
    "mainEntityOfPage": `https://www.cxdynamiq.com/blog/${slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.cxdynamiq.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blogs",
        "item": "https://www.cxdynamiq.com/blogs",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": `https://www.cxdynamiq.com/blog/${slug}`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-slate-200 py-3 text-xs text-slate-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blogs" className="hover:text-slate-900 transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold truncate max-w-xs">{title}</span>
        </div>
      </nav>

      <article className="py-16 bg-white border-b border-slate-200 flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="space-y-4">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 hover:text-cyan-800"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to all articles
            </Link>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {title}
            </h1>

            <div className="flex items-center gap-6 text-xs text-slate-500 pt-2 border-b border-slate-100 pb-6">
              <span className="flex items-center gap-1.5 font-semibold text-slate-700">
                <BookOpen className="w-4 h-4 text-[#069bd8]" /> CXDYNAMIQ Editorial Team
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> 5 min read
              </span>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-slate max-w-none text-slate-700 space-y-6 text-base leading-relaxed">
            {paragraphs.map((p, idx) => (
              <p key={idx} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* Contextual In-Body Service Recommendations per Section F */}
          <div className="pt-8 border-t border-slate-200 space-y-4">
            <h3 className="font-display font-bold text-lg text-slate-900">
              Related Telephony Solutions Mentioned in This Guide:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedModules.map((m, idx) => (
                <Link
                  key={idx}
                  href={m.path}
                  className="calm-card p-4 bg-slate-50 border border-slate-200 hover:border-[#069bd8] space-y-1.5 transition-all group"
                >
                  <div className="text-xs font-bold text-slate-900 group-hover:text-[#069bd8] transition-colors">
                    {m.title} →
                  </div>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    {m.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Call to action card */}
          <div className="calm-card p-8 bg-slate-900 text-white border border-slate-800 mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">Start Your Deployment</span>
              <h3 className="font-display font-bold text-xl text-white">
                Ready to elevate your contact center?
              </h3>
              <p className="text-xs text-slate-300">
                Deploy CXDYNAMIQ within 24 hours with dedicated VIP support.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/contact-us"
                className="btn-tactile btn-primary-emerald inline-flex items-center gap-2 px-6 py-3 text-xs font-bold rounded-xl shadow-xs"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </article>

      <CallbackSection />
      <CalmFooter />
    </main>
  );
}
