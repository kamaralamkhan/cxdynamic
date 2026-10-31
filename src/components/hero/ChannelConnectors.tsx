"use client";

import React, { useRef, useState, useEffect } from "react";

const chips = [
  { label: "Voice (SIP/PSTN)", side: "top", x: "16%", dot: "bg-cyan-500", delay: "0s" },
  { label: "Conversational AI", side: "top", x: "64%", dot: "bg-cyan-500", delay: "0.3s" },
  { label: "WhatsApp", side: "bottom", x: "22%", dot: "bg-emerald-500", delay: "0.6s" },
  { label: "CRM (Salesforce / Zoho)", side: "bottom", x: "62%", dot: "bg-indigo-500", delay: "0.9s" },
] as const;

export function ChannelConnectors({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  // Pause animations when hero is off-screen or tab is hidden
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    const handleVisibility = () => {
      if (document.hidden) {
        setIsVisible(false);
      } else if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setIsVisible(rect.bottom > 0 && rect.top < window.innerHeight);
      }
    };

    if (containerRef.current) observer.observe(containerRef.current);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative lg:py-14">
      <div aria-hidden className="pointer-events-none hidden lg:block">
        {chips.map((c) => (
          <div
            key={c.label}
            className="absolute -translate-x-1/2"
            style={{ left: c.x, [c.side]: 0 } as React.CSSProperties}
          >
            <div className={`flex flex-col items-center ${c.side === "bottom" ? "flex-col-reverse" : ""}`}>
              <span className="inline-flex h-8 items-center gap-2 rounded-full border border-slate-200 bg-white px-3 text-xs font-medium text-slate-700 shadow-sm">
                <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
                {c.label}
              </span>

              {/* connector: 24px dashed line + one travelling dot */}
              <span className="relative block h-6 w-px bg-[repeating-linear-gradient(to_bottom,theme(colors.slate.300)_0_3px,transparent_3px_7px)]">
                <span
                  className={`absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan-500 motion-reduce:hidden ${c.side === "top" ? "animate-net-down" : "animate-net-up"
                    }`}
                  style={{
                    animationDelay: c.delay,
                    animationPlayState: isVisible ? "running" : "paused",
                  }}
                />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Subtle, Architectural SVG Telemetry & Network Conduit Layer */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none hidden lg:block overflow-visible z-0 select-none"
      >
        <svg
          className="w-full h-full overflow-visible"
          viewBox="-120 -20 760 640"
          fill="none"
          style={{
            animationPlayState: isVisible ? "running" : "paused",
          }}
        >
          <defs>
            {/* Soft, calm gradients */}
            <linearGradient id="subtleCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#069bd8" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#069bd8" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="subtleEmeraldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="subtleIndigoGrad" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.15" />
            </linearGradient>
            <radialGradient id="calmHubHalo" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#069bd8" stopOpacity="0.08" />
              <stop offset="60%" stopColor="#069bd8" stopOpacity="0.02" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Faint, warm radial backing glow */}
          <ellipse cx="260" cy="300" rx="380" ry="280" fill="url(#calmHubHalo)" />

          {/* Concentric Telemetry Guide Rings — Delicate 1px slate/cyan traces */}
          <ellipse
            cx="260"
            cy="300"
            rx="350"
            ry="270"
            stroke="#cbd5e1"
            strokeWidth="1"
            strokeDasharray="4 8"
            opacity="0.35"
            className="animate-network-pulse"
          />
          <ellipse
            cx="260"
            cy="300"
            rx="280"
            ry="220"
            stroke="#94a3b8"
            strokeWidth="1"
            strokeDasharray="3 6"
            opacity="0.25"
            className="animate-orbit-pulse"
          />
          <ellipse
            cx="260"
            cy="300"
            rx="210"
            ry="170"
            stroke="#069bd8"
            strokeWidth="1"
            strokeDasharray="4 6"
            opacity="0.2"
            className="animate-network-pulse-rev"
          />

          {/* Subtle Left Ingress Bus Guides */}
          <path
            d="M -60 160 H 20 L 96 56"
            stroke="#e2e8f0"
            strokeWidth="1"
            strokeDasharray="3 4"
            opacity="0.6"
          />
          <path
            d="M -60 440 H 20 L 132 544"
            stroke="#e2e8f0"
            strokeWidth="1"
            strokeDasharray="3 4"
            opacity="0.6"
          />

          {/* Left Ingress Subtle Nodes */}
          <g opacity="0.75">
            <line x1="-50" y1="300" x2="30" y2="300" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="-50" cy="300" r="3" fill="#069bd8" opacity="0.6" />
            <circle cx="30" cy="300" r="2.5" fill="#94a3b8" opacity="0.5" />
          </g>

          {/* CHANNEL 1: Voice (Top Left - x:96, y:56) */}
          <g>
            <path
              d="M 96 56 C 96 160, 180 240, 260 300"
              stroke="#cbd5e1"
              strokeWidth="1.2"
              strokeDasharray="3 4"
              opacity="0.5"
            />
            <path
              d="M 96 56 C 96 160, 180 240, 260 300"
              stroke="url(#subtleCyanGrad)"
              strokeWidth="1.5"
              className="animate-network-pulse"
            />
            <circle cx="96" cy="56" r="3" fill="#069bd8" opacity="0.7" />
          </g>

          {/* CHANNEL 2: Conversational AI (Top Right - x:384, y:56) */}
          <g>
            <path
              d="M 384 56 C 384 160, 340 230, 260 300"
              stroke="#cbd5e1"
              strokeWidth="1.2"
              strokeDasharray="3 4"
              opacity="0.5"
            />
            <path
              d="M 384 56 C 384 160, 340 230, 260 300"
              stroke="url(#subtleCyanGrad)"
              strokeWidth="1.5"
              className="animate-network-pulse-fast"
            />
            <circle cx="384" cy="56" r="3" fill="#069bd8" opacity="0.7" />
          </g>

          {/* CHANNEL 3: WhatsApp (Bottom Left - x:132, y:544) */}
          <g>
            <path
              d="M 132 544 C 132 460, 180 370, 260 300"
              stroke="#cbd5e1"
              strokeWidth="1.2"
              strokeDasharray="3 4"
              opacity="0.5"
            />
            <path
              d="M 132 544 C 132 460, 180 370, 260 300"
              stroke="url(#subtleEmeraldGrad)"
              strokeWidth="1.5"
              className="animate-network-pulse"
            />
            <circle cx="132" cy="544" r="3" fill="#10b981" opacity="0.7" />
          </g>

          {/* CHANNEL 4: CRM (Bottom Right - x:372, y:544) */}
          <g>
            <path
              d="M 372 544 C 372 460, 340 380, 260 300"
              stroke="#cbd5e1"
              strokeWidth="1.2"
              strokeDasharray="3 4"
              opacity="0.5"
            />
            <path
              d="M 372 544 C 372 460, 340 380, 260 300"
              stroke="url(#subtleIndigoGrad)"
              strokeWidth="1.5"
              className="animate-network-pulse-fast"
            />
            <circle cx="372" cy="544" r="3" fill="#6366f1" opacity="0.7" />
          </g>

          {/* Quiet, small junction packet accents */}
          <circle cx="160" cy="200" r="2.5" fill="#069bd8" opacity="0.4" />
          <circle cx="360" cy="200" r="2.5" fill="#069bd8" opacity="0.4" />
          <circle cx="160" cy="400" r="2.5" fill="#10b981" opacity="0.4" />
          <circle cx="360" cy="400" r="2.5" fill="#6366f1" opacity="0.4" />
        </svg>
      </div>

      <div className="relative z-10">{children}</div>

    </div>
  );
}

export default ChannelConnectors;
