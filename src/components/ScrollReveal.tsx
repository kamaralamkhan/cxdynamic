"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./ScrollReveal.module.css";

// Semantic copy and existing card layouts share one motion treatment across routes.
// Custom surfaces can opt in with data-scroll-reveal="true", opt out with "off",
// or mark sibling card collections with data-reveal-group.
const TARGETS = [
  '[data-scroll-reveal="true"]',
  ":is(main, section) h2", ":is(main, section) h3", ":is(main, section) p",
  ":is(main, section) .grid > article",
  ':is(main, section) .grid > [class*="rounded-"]',
  "[data-reveal-group] > *",
].join(",");
const EXCLUDED = [
  '[data-scroll-reveal="off"]',
  "nav", "header", "footer", "form", "dialog", "button",
  '[role="dialog"]', '[role="tabpanel"]', '[role="tablist"]',
  "[aria-live]", '[aria-hidden="true"]', "[hidden]", ".sr-only",
].join(",");

export default function ScrollReveal({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scope = root.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!scope || preference.matches || !("IntersectionObserver" in window)) return;

    const seen = new Set<HTMLElement>();
    const active = new Set<HTMLElement>();
    let frame = 0;

    const finish = (element: HTMLElement) => {
      // Keep the focus safety selector available even after the entrance finishes.
      // Otherwise an existing transition-all could fade a newly focused card in.
      element.dataset.revealState = "visible";
      element.style.removeProperty("--reveal-delay");
      active.delete(element);
      observer.unobserve(element);
    };

    const observer = new IntersectionObserver((entries) => {
      // Stagger only siblings entering together, not every card further down a grid.
      const groups = new Map<Element, number>();
      entries.filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.target.compareDocumentPosition(b.target) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1)
        .forEach(({ target }) => {
          const element = target as HTMLElement;
          if (element.dataset.revealState !== "pending") return;
          observer.unobserve(element);
          if (preference.matches || element.matches(":focus-within")) {
            finish(element);
            return;
          }
          const parent = element.parentElement;
          if (parent?.matches(".grid, [data-reveal-group]")) {
            const index = groups.get(parent) ?? 0;
            element.style.setProperty("--reveal-delay", `${Math.min(index, 4) * 80}ms`);
            groups.set(parent, index + 1);
          }
          element.dataset.revealState = "entering";
        });
    }, { threshold: 0, rootMargin: "0px 0px -24px 0px" });

    const discover = () => {
      frame = 0;
      if (preference.matches) return;
      const candidates = Array.from(scope.querySelectorAll<HTMLElement>(TARGETS))
        .filter((element) => {
          if (element.closest(EXCLUDED) || !element.textContent?.trim()) return false;
          // Preserve the hero and its live product demo, including on short screens.
          if (element.closest("section")?.querySelector("h1")) return false;
          if (element.querySelector("section, h1, h2") && element.dataset.scrollReveal !== "true") return false;
          return true;
        });
      const candidateSet = new Set(candidates);

      // Read all geometry before changing styles. Never nest parent/child reveals.
      const pending = candidates.filter((element) => {
        if (seen.has(element)) return false;
        for (let parent = element.parentElement; parent && parent !== scope; parent = parent.parentElement) {
          if (candidateSet.has(parent) || active.has(parent)) return false;
        }
        seen.add(element);
        const rect = element.getBoundingClientRect();
        if (!rect.width || !rect.height || rect.top < window.innerHeight || element.matches(":focus-within")) return false;
        const style = getComputedStyle(element);
        // Leave existing animation, transform, and conditional visibility owners alone.
        return style.visibility === "visible" && style.opacity === "1"
          && style.transform === "none" && style.animationName === "none"
          && style.position !== "fixed" && style.position !== "sticky";
      });
      pending.forEach((element) => {
        active.add(element);
        element.dataset.revealState = "pending";
        observer.observe(element);
      });
    };

    const onFocus = (event: FocusEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      active.forEach((element) => {
        if (element.contains(target) || target.contains(element)) finish(element);
      });
    };
    const onAnimationEnd = (event: AnimationEvent) => {
      const element = event.target;
      if (element instanceof HTMLElement && element.dataset.revealState === "entering"
        && event.animationName === styles.reveal) finish(element);
    };
    const onPreferenceChange = () => {
      if (preference.matches) active.forEach(finish);
    };
    // Handles streamed routes and filtered card lists, not per-frame scroll events.
    const mutations = new MutationObserver((records) => {
      seen.forEach((element) => {
        if (!element.isConnected) {
          observer.unobserve(element);
          active.delete(element);
          seen.delete(element);
          element.removeAttribute("data-reveal-state");
          element.style.removeProperty("--reveal-delay");
        }
      });
      const hasContent = records.some((record) => Array.from(record.addedNodes).some((node) =>
        node instanceof HTMLElement && (node.matches(TARGETS) || node.querySelector(TARGETS))));
      if (hasContent && !frame) frame = requestAnimationFrame(discover);
    });

    scope.addEventListener("focusin", onFocus);
    scope.addEventListener("animationend", onAnimationEnd);
    preference.addEventListener("change", onPreferenceChange);
    discover();
    mutations.observe(scope, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(frame);
      mutations.disconnect();
      observer.disconnect();
      seen.forEach((element) => {
        element.removeAttribute("data-reveal-state");
        element.style.removeProperty("--reveal-delay");
      });
      scope.removeEventListener("focusin", onFocus);
      scope.removeEventListener("animationend", onAnimationEnd);
      preference.removeEventListener("change", onPreferenceChange);
    };
  }, []);

  return <div ref={root} className={`${styles.scope} flex-1 flex flex-col`}>{children}</div>;
}
