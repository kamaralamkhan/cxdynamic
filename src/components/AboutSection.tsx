import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white border-y border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Card */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 relative overflow-hidden shadow-sm">

              <div className="space-y-4">
                <h3 className="font-display font-bold text-2xl text-slate-900 leading-tight">
                  Virtual call center ensuring ultimate customer experience
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  CXDYNAMIQ offers an enterprise-ready, cloud-based contact center solution that eliminates costly telephony hardware while giving your team high-availability reliability and intelligence.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-2 gap-4">
                <div>
                  <div className="font-display font-extrabold text-2xl text-slate-900 tabular-nums">15+</div>
                  <div className="text-xs text-slate-500 font-medium">Products &amp; solutions</div>
                </div>
                <div>
                  <div className="font-display font-extrabold text-2xl text-sky-600 tabular-nums">24/7</div>
                  <div className="text-xs text-slate-500 font-medium">VIP engineer support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Value Points */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700">
              About CXDYNAMIQ
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Build strong connections with your customers across the globe
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              At CXDYNAMIQ, we enable you to build a long-lasting, trustworthy relationship with your consumers. Our virtual call center ensures an ultimate customer experience through flexible, CX-rich software that is easy to use and cost-effective.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>Call center solutions (inbound, outbound, blended)</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>Business phone systems &amp; virtual auto attendant</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>Sales dialer solutions (auto, click-to-call, power)</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>Omnichannel CX hub &amp; speech intelligence</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/who-we-are"
                className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-800 transition-colors"
              >
                <span>Read more about our company</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
