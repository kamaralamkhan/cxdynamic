"use client";

import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function CallbackSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<"confirmed" | "fallback" | null>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "Inbound Calling",
    brief: "",
    botcheck: "",
  });

  // Auto-scroll to the quote form when navigated to with #quote or #quote-form
  useEffect(() => {
    if (typeof window !== "undefined") {
      const scrollToForm = () => {
        const hash = window.location.hash;
        if (hash === "#quote" || hash === "#quote-form" || hash === "#contact") {
          const el = document.getElementById("quote-form") || document.getElementById("quote") || document.getElementById("contact");
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      };

      const timer1 = setTimeout(scrollToForm, 80);
      const timer2 = setTimeout(scrollToForm, 350);

      window.addEventListener("hashchange", scrollToForm);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        window.removeEventListener("hashchange", scrollToForm);
      };
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.botcheck) return; // Honeypot guard

    setLoading(true);
    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
    if (endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        setSubmissionStatus(response.ok ? "confirmed" : "fallback");
      } catch (err) {
        console.warn("Form submission fallback", err);
        setSubmissionStatus("fallback");
      }
    } else {
      setSubmissionStatus("fallback");
    }
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-white/10 scroll-mt-12">
      <div id="callback-section" className="sr-only" aria-hidden="true" />
      <div id="contact-form" className="sr-only" aria-hidden="true" />
      {/* Slow-drifting low-contrast gradient navy -> slate-900 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 opacity-90 pointer-events-none" />

      {/* Floating call-waveform lines in background */}
      <div className="absolute inset-0 pointer-events-none opacity-10 flex items-center justify-between px-10">
        <svg aria-hidden="true" className="w-full h-48" viewBox="0 0 1200 200" fill="none">
          <path
            d="M0 100 C 150 40, 300 160, 450 100 C 600 40, 750 160, 900 100 C 1050 40, 1200 160, 1350 100"
            stroke="#38bdf8"
            strokeWidth="2"
            strokeDasharray="4 8"
          />
          <path
            d="M0 120 C 180 180, 360 60, 540 120 C 720 180, 900 60, 1080 120"
            stroke="#34d399"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct Outreach & SLA on Dark Section */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-tight">
              Have a Question? <br />
              <span className="text-sky-400">Get a Callback Now.</span>
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed">
              Connect directly with a CXdynamIQ deployment specialist. We evaluate your active seat count, current phone architecture, and configure custom pricing in minutes.
            </p>

            <div className="space-y-3 pt-2">
              <a
                href={`tel:${siteConfig.phones.primaryRaw}`}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-sky-400/50 hover:bg-white/10 transition-colors text-xs font-semibold text-white group"
              >
                <div className="p-2 rounded-lg bg-sky-500/20 text-sky-400 motion-safe:group-hover:scale-105 motion-reduce:group-hover:scale-100 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Immediate Hotline</div>
                  <div className="text-slate-100">{siteConfig.phones.label}</div>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.emails.info}`}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-sky-400/50 hover:bg-white/10 transition-colors text-xs font-semibold text-white group"
              >
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 motion-safe:group-hover:scale-105 motion-reduce:group-hover:scale-100 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Enterprise Inquiries</div>
                  <div className="text-slate-100">{siteConfig.emails.info} / {siteConfig.emails.sales}</div>
                </div>
              </a>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Zero hardware commitment · Free trial available</span>
            </div>
          </div>

          {/* Right Column: White Form Card (Crisp Contrast!) */}
          <div id="quote" className="lg:col-span-7 scroll-mt-28">
            <div id="quote-form" className="p-6 sm:p-9 bg-white text-slate-900 border border-slate-200 shadow-md rounded-2xl scroll-mt-28">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Spam honeypot hidden field */}
                  <input
                    type="text"
                    name="botcheck"
                    value={formData.botcheck}
                    onChange={(e) => setFormData({ ...formData, botcheck: e.target.value })}
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-xs text-slate-900 placeholder:text-slate-500 focus:bg-white focus:border-sky-600 focus:ring-1 focus:ring-sky-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile / Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+63 / +1 / +44 ..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-xs text-slate-900 placeholder:text-slate-500 focus:bg-white focus:border-sky-600 focus:ring-1 focus:ring-sky-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Business Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-xs text-slate-900 placeholder:text-slate-500 focus:bg-white focus:border-sky-600 focus:ring-1 focus:ring-sky-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Solution of Interest</label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-xs text-slate-900 focus:bg-white focus:border-sky-600 focus:ring-1 focus:ring-sky-600 transition-colors"
                      >
                        <option value="Inbound Calling">Inbound Call Center</option>
                        <option value="Outbound Calling">Outbound Calling &amp; Dialer</option>
                        <option value="Blended Contact Center">Blended Contact Center</option>
                        <option value="Auto Attendant & IVR">Auto Attendant &amp; IVR</option>
                        <option value="Omnichannel & AI">Omnichannel &amp; Conversational AI</option>
                        <option value="CTI Integration">CRM CTI Integration (Zoho/Salesforce)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Project Details / Requirements (Optional)</label>
                    <textarea
                      rows={3}
                      value={formData.brief}
                      onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                      placeholder="Number of active agents, existing phone or CRM system, target timeline..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-xs text-slate-900 placeholder:text-slate-500 focus:bg-white focus:border-sky-600 focus:ring-1 focus:ring-sky-600 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 text-xs font-semibold bg-sky-700 hover:bg-sky-800 text-white rounded-xl shadow-sm cursor-pointer flex items-center justify-center gap-2 transition-colors focus-visible:outline-2 focus-visible:outline-sky-600"
                  >
                    <span>{loading ? "Submitting..." : "Book a Demo"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              ) : (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-slate-900">
                    {submissionStatus === "confirmed" ? "Request received" : "Request prepared"}
                  </h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    {submissionStatus === "confirmed"
                      ? <>Thank you, <strong>{formData.name}</strong>. A CXdynamIQ deployment specialist will contact you at <strong>{formData.phone}</strong> shortly to discuss your custom rollout.</>
                      : <>Thank you, <strong>{formData.name}</strong>. The form endpoint is not currently available, so please contact <a className="font-semibold text-sky-700 underline underline-offset-2" href={`mailto:${siteConfig.emails.sales}`}>{siteConfig.emails.sales}</a> or call <a className="font-semibold text-sky-700 underline underline-offset-2" href={`tel:${siteConfig.phones.primaryRaw}`}>{siteConfig.phones.primary}</a> to complete your request.</>}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
