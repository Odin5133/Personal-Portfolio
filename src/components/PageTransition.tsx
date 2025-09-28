// components/PageTransitionGsap.tsx
"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const PageTransitionGsap = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const contentRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement[]>([]);

  // Add refs to the bars array
  const addToRefs = (el: HTMLDivElement) => {
    if (el && !barsRef.current.includes(el)) {
      barsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Reset refs on each path change to ensure they are fresh
    barsRef.current = [];
  }, [pathname]);

  useEffect(() => {
    // This effect runs when the component mounts (i.e., new page loads)
    const tl = gsap.timeline();

    // 1. Bars slide in
    tl.to(barsRef.current, {
      x: "0%",
      stagger: 0.08, // Staggered animation for each bar
      ease: "power3.inOut",
      duration: 0.6,
    });

    // 2. Content appears underneath (almost instantly, but hidden by bars)
    tl.fromTo(
      contentRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
      "-=0.3" // Overlap with previous animation for a smoother feel
    );

    // 3. Bars slide out to reveal the content
    tl.to(
      barsRef.current,
      {
        x: "-100%",
        stagger: {
          each: 0.08,
          from: "start", // Stagger from the first bar to the last
        },
        ease: "power3.inOut",
        duration: 0.6,
      },
      ">-0.2" // Start this animation slightly after the content starts appearing
    );
  }, [pathname]); // Rerun the animation every time the path changes

  return (
    <div className="relative">
      {/* The Actual Page Content */}
      <div ref={contentRef}>{children}</div>

      {/* Overlay Bars for Transition */}
      <div className="fixed inset-0 z-50 flex pointer-events-none">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            ref={addToRefs}
            className="flex-1 bg-gray-800" // A simple dark color for the bars
            style={{ transform: "translateX(100%)" }} // Start off-screen
          />
        ))}
      </div>
    </div>
  );
};

export default PageTransitionGsap;
