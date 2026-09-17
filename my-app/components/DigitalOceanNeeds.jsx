"use client";

import React, { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Compass,
  Anchor,
  Globe2,
  Radio,
  Navigation,
  TrendingUp,
  ArrowDown,
} from "lucide-react";
import { digitalOceanNeeds } from "@/data/digitalOceanData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const iconMap = {
  Compass,
  Anchor,
  Globe: Globe2,
  Radio,
  Navigation,
  TrendingUp,
};

const DigitalOceanNeeds = () => {
  const sectionRef = useRef(null);

  // Fix #12: Mouse-tracking glow handler
  const handleCardMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--glow-x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--glow-y", `${e.clientY - rect.top}px`);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".ocean-header-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );

      // Fix #5: Staggered scale-up from center for visual variety
      gsap.fromTo(
        ".ocean-pillar-card",
        { opacity: 0, scale: 0.85, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".ocean-pillars-grid",
            start: "top 80%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="digital-ocean"
      ref={sectionRef}
      className="relative overflow-hidden bg-brand py-24 text-white md:py-32"
    >
      {/* Background ambient lighting effects */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-brandnd/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="ocean-header-reveal inline-flex items-center gap-2 rounded-full border border-brandnd/40 bg-brandnd/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brandnd">
            <span className="h-1.5 w-1.5 rounded-full bg-brandnd animate-pulse" />
            Phase 02 · Strategic Guidance
          </span>

          <h2 className="ocean-header-reveal mt-6 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl lg:text-5xl">
            {digitalOceanNeeds.title}
          </h2>

          <p className="ocean-header-reveal mt-4 text-lg font-medium text-brandnd sm:text-xl">
            {digitalOceanNeeds.subtitle}
          </p>

          <p className="ocean-header-reveal mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
            {digitalOceanNeeds.intro}
          </p>

          <div className="ocean-header-reveal mt-10 inline-block">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-white/20" />
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
                {digitalOceanNeeds.heading}
              </h3>
              <span className="h-px w-12 bg-white/20" />
            </div>
          </div>
        </div>

        {/* 6 Pillars Grid */}
        <div className="ocean-pillars-grid mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {digitalOceanNeeds.pillars.map((pillar) => {
            const Icon = iconMap[pillar.icon] || Compass;
            return (
              <div
                key={pillar.id}
                onMouseMove={handleCardMouseMove}
                className={`ocean-pillar-card group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.07] hover:shadow-2xl ${pillar.border}`}
              >
                {/* Fix #12: Mouse-tracking radial glow */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle 200px at var(--glow-x, 50%) var(--glow-y, 50%), rgba(77,97,214,0.18), transparent 60%)",
                  }}
                />
                {/* Subtle top gradient bar */}
                <div
                  className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${pillar.accent} opacity-40 transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center rounded-lg border border-brandnd/30 bg-brandnd/10 px-3 py-1 text-xs font-semibold tracking-wide text-brandnd">
                      {pillar.tag}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-white/80 transition-all duration-300 group-hover:scale-110 group-hover:bg-brandnd group-hover:text-white">
                      <Icon size={22} />
                    </span>
                  </div>

                  <h4 className="mt-5 text-xl font-bold tracking-tight text-white group-hover:text-brandnd transition-colors duration-200">
                    {pillar.title}
                  </h4>

                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 pt-4 border-t border-white/5 text-[11px] font-medium text-white/40 uppercase tracking-wider">
                  <span className="h-1.5 w-1.5 rounded-full bg-brandnd/80" />
                  Foundational Component
                </div>
              </div>
            );
          })}
        </div>

        {/* Outro Callout */}
        <div className="ocean-header-reveal mt-16 mx-auto max-w-3xl rounded-2xl border border-brandnd/30 bg-gradient-to-r from-brandnd/15 via-white/[0.02] to-brandnd/15 p-8 text-center backdrop-blur-md">
          <p className="text-base font-medium leading-relaxed text-white/90 sm:text-lg">
            &ldquo;{digitalOceanNeeds.outro}&rdquo;
          </p>
          <a
            href="#how-we-navigate"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brandnd hover:text-white transition-colors"
          >
            Discover our navigation process
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DigitalOceanNeeds;
