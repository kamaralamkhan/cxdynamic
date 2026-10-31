"use client";

import React, { useState, useRef, useEffect } from "react";
import { RotateCcw, Play, CheckCircle2, Sparkles, Eye } from "lucide-react";

interface ExplainerShellProps {
  title: string;
  badge?: string;
  caption: string;
  takeaway: string;
  textAlternative: string;
  onReset?: () => void;
  children: (resetCount: number) => React.ReactNode;
}

export default function ExplainerShell({
  title,
  badge = "Interactive Simulation",
  caption,
  takeaway,
  textAlternative,
  onReset,
  children,
}: ExplainerShellProps) {
  const [resetCount, setResetCount] = useState(0);
  const [showTextAlt, setShowTextAlt] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleReplay = () => {
    setResetCount((c) => c + 1);
    if (onReset) onReset();
  };

  return (
    <div ref={containerRef} className="calm-card bg-white border border-slate-200 overflow-hidden shadow-sm">
      {/* Explainer Header */}
      <div className="p-4 sm:p-5 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3 bg-slate-50/70">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700">{title}</span>
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-50 text-cyan-700 border border-sky-100">
            {badge}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowTextAlt((prev) => !prev)}
            className="text-[11px] font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1 px-2.5 py-1 rounded bg-white border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer"
            title="Toggle accessible text description"
          >
            <Eye className="w-3 h-3 text-cyan-600" />
            <span>{showTextAlt ? "Show Interactive" : "Text Alternative"}</span>
          </button>

          <button
            onClick={handleReplay}
            className="text-[11px] font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-1 px-2.5 py-1 rounded bg-white border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer shadow-2xs"
          >
            <RotateCcw className="w-3 h-3 text-emerald-600" />
            <span>Replay</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Canvas / Text Alternative */}
      <div className="p-5 sm:p-7 min-h-[300px] flex flex-col justify-center bg-gradient-to-b from-white to-slate-50/40">
        {showTextAlt ? (
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-600 leading-relaxed">
            <h4 className="font-bold text-slate-800 text-sm">Step-by-Step Call Process:</h4>
            <p>{textAlternative}</p>
          </div>
        ) : (
          <div className="w-full relative">
            {children(resetCount)}
          </div>
        )}
      </div>

      {/* Caption & Takeaway Footer */}
      <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <p className="text-slate-500 italic max-w-xl">
          {caption}
        </p>
        <div className="shrink-0 flex items-center gap-1.5 font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          <span>{takeaway}</span>
        </div>
      </div>
    </div>
  );
}
