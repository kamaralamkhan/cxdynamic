import { notFound } from "next/navigation";
import { getPageData, getSitemap, pathToSlug } from "@/lib/content";
import Navbar from "@/components/Navbar";
import CalmFooter from "@/components/CalmFooter";
import Link from "next/link";
import { ArrowLeft, BookOpen, Clock, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const sitemap = getSitemap();
  return sitemap
    .filter((entry) => entry.path.startsWith("/category/"))
    .map((entry) => ({
      name: entry.path.replace("/category/", ""),
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>;
}): Promise<Metadata> {
  const { name } = await params;
  const decoded = decodeURIComponent(name);
  return {
    title: `${decoded} Articles | CXDYNAMIQ`,
    description: `Browse articles and industry guides in ${decoded}.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const decoded = decodeURIComponent(name);
  const jsonSlug = pathToSlug(`/category/${decoded}`);
  const page = getPageData(jsonSlug);

  const posts = [
    {
      title: "The Importance of a Call Center for Financial Services",
      slug: "/blog/the-importance-of-a-call-center-for-financial-services",
      excerpt: "Financial institutions handle sensitive transactions. Discover how intelligent cloud contact centers improve compliance.",
    },
    {
      title: "Revolutionizing Customer Engagement with CxDynamiQ's GenAI Solutions",
      slug: "/blog/revolutionizing-customer-engagement-with-cxdynamiq-s-genai-solutions",
      excerpt: "Learn how conversational AI and speech analytics empower agents and accelerate first contact resolution.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar />

      <div className="bg-white border-b border-slate-200 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Link href="/blogs" className="text-xs font-bold text-[#069bd8] hover:underline inline-flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> All Categories
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Category: {decoded}
          </h1>
          <p className="text-sm text-slate-600">
            Insights, strategies, and operational benchmarks for modern customer support.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {posts.map((p, idx) => (
            <div key={idx} className="calm-card p-6 bg-white border border-slate-200 space-y-2">
              <h3 className="font-display font-bold text-xl text-slate-900 hover:text-[#069bd8]">
                <Link href={p.slug}>{p.title}</Link>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">{p.excerpt}</p>
              <div className="pt-2">
                <Link href={p.slug} className="text-xs font-bold text-[#069bd8] inline-flex items-center gap-1">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CalmFooter />
    </main>
  );
}
