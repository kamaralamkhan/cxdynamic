import { notFound } from "next/navigation";
import { getPageData, getSitemap } from "@/lib/content";
import { getSeo } from "@/content/seo";
import { getServiceOverride } from "@/content/overrides/serviceData";
import ServicePage from "@/components/ServicePage";
import Navbar from "@/components/Navbar";
import CalmFooter from "@/components/CalmFooter";
import CallbackSection from "@/components/CallbackSection";
import TrustStrip from "@/components/TrustStrip";
import KnowledgeCentre from "@/components/KnowledgeCentre";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { Phone, Mail, MapPin, ShieldCheck, ChevronRight, Clock } from "lucide-react";

export async function generateStaticParams() {
  const sitemap = getSitemap();
  return sitemap
    .filter((entry) => entry.path !== "/" && !entry.path.slice(1).includes("/"))
    .map((entry) => ({
      slug: entry.path.replace(/^\//, ""),
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const path = "/" + slug;
  const seo = getSeo(path);

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `https://www.cxdynamiq.com/${slug}`,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `https://chocolate-frog-774793.hostingersite.com/${slug}`,
      siteName: "CXDYNAMIQ",
      type: "website",
      images: [
        {
          url: "/cxdynamiq-og.png",
          width: 512,
          height: 512,
          alt: "CXDYNAMIQ",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: seo.title,
      description: seo.description,
      images: ["/cxdynamiq-og.png"],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getPageData(slug);
  if (!page) notFound();

  const seo = getSeo(page.path);
  const override = getServiceOverride(page.path);

  // 1. JSON-LD Breadcrumb
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
        "name": seo.h1,
        "item": `https://www.cxdynamiq.com/${slug}`,
      },
    ],
  };

  // 2. JSON-LD FAQPage for approved FAQs
  const faqJsonLd = override.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": override.faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a,
      },
    })),
  } : null;

  // JSON-LD Service schema
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": seo.h1,
    "description": seo.description,
    "provider": {
      "@type": "Organization",
      "name": "CXDYNAMIQ",
      "url": "https://www.cxdynamiq.com",
    },
  };

  // Dedicated layout for Legal Pages (Privacy Policy, Terms)
  if (slug === "privacy-policy" || slug === "terms") {
    const paragraphs = page.blocks.filter((b) => b.type === "p" && b.text).map((b) => b.text || "");
    const headings = page.blocks.filter((b) => ["h2", "h3", "h4"].includes(b.type) && b.text).map((b) => b.text || "");

    return (
      <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <Navbar />

        <div className="bg-white border-b border-slate-200 py-3 text-xs text-slate-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
            <Link href="/" className="hover:text-slate-900">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-slate-900 font-semibold">{seo.h1}</span>
          </div>
        </div>

        <article className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 flex-1">
          <div className="space-y-3 pb-8 border-b border-slate-200">
            <span className="text-xs font-semibold text-sky-700">Legal &amp; Compliance</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {seo.h1}
            </h1>
            <p className="text-xs text-slate-500">
              Last updated: {new Date().getFullYear()} • CXDYNAMIQ Global Telephony Services
            </p>
          </div>

          <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </article>

        <CalmFooter />
      </main>
    );
  }

  // Dedicated layout for /blogs index
  if (slug === "blogs") {
    return (
      <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <Navbar />
        
        <div className="bg-white border-b border-slate-200 py-3 text-xs text-slate-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
            <Link href="/" className="hover:text-slate-900">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-slate-900 font-semibold">Knowledge Centre</span>
          </div>
        </div>

        <section className="bg-white border-b border-slate-200 pt-12 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <span className="text-xs font-semibold text-sky-700">Official Blog</span>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              Knowledge Centre &amp; Telephony Insights
            </h1>
            <p className="text-base text-slate-600 max-w-2xl">
              Practical guides, architecture strategies, and operational case studies on scaling cloud contact centers.
            </p>
          </div>
        </section>

        <div className="flex-1">
          <KnowledgeCentre />
        </div>

        <CallbackSection />
        <CalmFooter />
      </main>
    );
  }

  // Dedicated layout for /contact-us
  if (slug === "contact-us") {
    const contactJsonLd = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "mainEntity": {
        "@type": "Organization",
        "name": "CXDYNAMIQ",
        "telephone": siteConfig.phones.primaryRaw,
        "email": siteConfig.emails.info,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": siteConfig.address.street,
          "addressLocality": siteConfig.address.city,
          "postalCode": siteConfig.address.postal,
          "addressCountry": "IN",
        },
      },
    };

    return (
      <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
        />
        <Navbar />

        <div className="bg-white border-b border-slate-200 py-3 text-xs text-slate-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
            <Link href="/" className="hover:text-slate-900">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-slate-900 font-semibold">Contact Us</span>
          </div>
        </div>

        <section className="bg-white border-b border-slate-200 pt-12 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <span className="text-xs font-semibold text-sky-700">VIP Support 24/7</span>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              Connect with CXDYNAMIQ VIP Support &amp; Sales
            </h1>
            <p className="text-base text-slate-600 max-w-2xl">
              Get in touch with our deployment team. Whether you need custom pricing, trunk migration, or dedicated onboarding, we respond in under 30 minutes.
            </p>
          </div>
        </section>

        <TrustStrip />

        <div className="flex-1">
          <CallbackSection />
        </div>

        <CalmFooter />
      </main>
    );
  }

  // All Service, Feature, Integration & Industry Pages Render from Single ServicePage Template
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <ServicePage page={page} />
    </>
  );
}
