"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  // Prevent mobile address bar show/hide from causing jerky layout re-triggers
  ScrollTrigger.config({
    ignoreMobileResize: true,
  });
}

const ScrollProgress = () => {
  const barRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(barRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.2,
        },
      });
    });

    // Ensure all dynamic layout measurements are accurate on mobile after hydration
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);

    return () => {
      ctx.revert();
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return <div ref={barRef} className="scroll-progress-bar" />;
};

export default ScrollProgress;
