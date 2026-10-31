import Link from "next/link";
import Navbar from "@/components/Navbar";
import CalmFooter from "@/components/CalmFooter";
import { ArrowLeft, Home, PhoneCall } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar />
      <div className="flex-1 flex items-center justify-center py-24 px-4 text-center">
        <div className="calm-card p-10 sm:p-12 bg-white max-w-lg mx-auto space-y-6">
          <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#069bd8] font-mono font-extrabold text-xl flex items-center justify-center mx-auto">
            404
          </div>
          <h1 className="font-display font-extrabold text-2xl text-slate-900">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            The page you are looking for does not exist or may have been relocated. All our core contact center solutions and features are accessible below.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="btn-tactile btn-secondary-cyan px-5 py-2.5 rounded-xl text-xs font-bold inline-flex items-center gap-2"
            >
              <Home className="w-4 h-4" /> Return to Homepage
            </Link>
            <Link
              href="/contact-us"
              className="btn-tactile px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
      <CalmFooter />
    </main>
  );
}
