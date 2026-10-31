"use client";

import { useEffect, useState, useRef } from "react";

export default function NetworkBackground() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable cursor spotlight on desktop with hover and fine pointer
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
      aria-hidden="true"
    >
      {/* Faint dot-grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

      {/* Cursor spotlight on desktop */}
      <div
        className="hidden lg:block absolute w-[400px] h-[400px] rounded-full transition-transform duration-75 ease-out opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(6, 155, 216, 0.25) 0%, transparent 70%)",
          transform: `translate(${mousePos.x - 200}px, ${mousePos.y - 200}px)`,
        }}
      />
    </div>
  );
}
