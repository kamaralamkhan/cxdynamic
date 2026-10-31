import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, Clock } from "lucide-react";

export default function KnowledgeCentre() {
  // Only the two authentic verified articles from the original blog
  const posts = [
    {
      title: "The Importance of a Call Center for Financial Services",
      slug: "/blog/the-importance-of-a-call-center-for-financial-services",
      excerpt:
        "Financial institutions handle sensitive transactions and high customer stakes. Discover how intelligent cloud contact centers improve compliance, security, and dispute resolution times.",
      category: "Financial Services",
      date: "Jun 20, 2022",
      readTime: "5 min read",
    },
    {
      title: "Revolutionizing Customer Engagement with CxDynamiQ's GenAI Solutions",
      slug: "/blog/revolutionizing-customer-engagement-with-cxdynamiq-s-genai-solutions",
      excerpt:
        "Generative AI and Agentic automation are transforming contact center operations. Learn how conversational AI and speech analytics empower agents and accelerate first contact resolution.",
      category: "GenAI & Innovation",
      date: "Dec 4, 2025",
      readTime: "6 min read",
    },
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
              <BookOpen className="w-3.5 h-3.5 inline mr-1" />
              Knowledge Centre
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Insights &amp; Industry Guides
            </h2>
            <p className="text-sm text-slate-600">
              Real-world case studies and operational blueprints from our contact center team.
            </p>
          </div>
          <Link
            href="/blogs"
            className="text-xs font-bold text-cyan-700 hover:text-cyan-800 inline-flex items-center gap-1.5"
          >
            <span>View all articles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 2 Verified Real Articles Cards (Spans Container, 3-Line Excerpt) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {posts.map((post, idx) => (
            <article
              key={idx}
              className="calm-card p-7 sm:p-8 bg-white border border-slate-200 flex flex-col justify-between group hover:border-slate-300 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                  <Link
                    href={idx === 0 ? "/category/business" : "/category/Customer%20Experience%20management"}
                    className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 hover:text-cyan-700 hover:border-cyan-300 font-semibold border border-slate-200 transition-colors"
                  >
                    {post.category}
                  </Link>
                  <span className="flex items-center gap-1.5 text-xs">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" /> {post.date}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 group-hover:text-[#069bd8] transition-colors leading-snug">
                  <Link href={post.slug}>
                    {post.title}
                  </Link>
                </h3>

                <p className="line-clamp-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                <span className="text-slate-500 font-normal text-xs flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> {post.readTime}
                </span>

                {/* Read Article always visible on touch, hover animation on desktop */}
                <Link
                  href={post.slug}
                  className="text-cyan-700 group-hover:text-cyan-800 group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1 text-xs font-bold"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
