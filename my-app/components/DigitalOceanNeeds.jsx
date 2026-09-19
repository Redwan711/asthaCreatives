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
  Crosshair,
  Sparkles,
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

  const handleCardMouseMove = useCallback((e) => {
    if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--glow-x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--glow-y", `${e.clientY - rect.top}px`);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".ocean-header-reveal",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".ocean-pillar-card",
        { opacity: 0, scale: 0.95, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.07,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: ".ocean-pillars-grid",
            start: "top 85%",
            once: true,
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
      className="relative overflow-hidden bg-[#080b14] py-24 text-white md:py-32"
    >
      {/* Nautical Digital Radar Circles in Background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[750px] w-[750px] rounded-full border border-cyan-500/10 opacity-40 animate-pulse-glow" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full border border-indigo-500/15 opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[260px] w-[260px] rounded-full border border-cyan-400/20 opacity-40" />

      {/* Ambient Lighting Orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-indigo-600/15 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Coordinates HUD Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="ocean-header-reveal inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-md">
            <Crosshair size={13} className="animate-spin text-cyan-400" />
            <span>Digital Ocean Wayfinding System</span>
          </div>

          <h2 className="ocean-header-reveal mt-6 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl lg:text-5xl">
            {digitalOceanNeeds.title}
          </h2>

          <p className="ocean-header-reveal mt-3 text-lg font-medium text-cyan-300 sm:text-xl">
            {digitalOceanNeeds.subtitle}
          </p>

          <p className="ocean-header-reveal mt-5 text-sm leading-relaxed text-gray-300 sm:text-base">
            {digitalOceanNeeds.intro}
          </p>
        </div>

        {/* Pillars Subheading */}
        <div className="ocean-header-reveal mt-16 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
            The 6 Navigational Pillars
          </span>
          <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            {digitalOceanNeeds.heading}
          </h3>
        </div>

        {/* 6 Pillars Grid with Illuminated Glass Cards */}
        <div className="ocean-pillars-grid mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {digitalOceanNeeds.pillars.map((pillar, idx) => {
            const IconComponent = iconMap[pillar.icon] || Compass;
            return (
              <div
                key={pillar.id}
                onMouseMove={handleCardMouseMove}
                className="ocean-pillar-card group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-500/10"
                style={{
                  "--glow-x": "50%",
                  "--glow-y": "50%",
                }}
              >
                {/* Dynamic Radial Glow following cursor */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(350px circle at var(--glow-x) var(--glow-y), rgba(6, 182, 212, 0.2), transparent 70%)`,
                  }}
                />

                {/* Tech Corner Coordinates Accents */}
                <div className="absolute top-2.5 right-2.5 font-mono text-[9px] text-white/20 group-hover:text-cyan-400/60 transition-colors">
                  P.0{idx + 1}
                </div>

                <div className="relative z-10">
                  {/* Icon & Pillar Tag */}
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-950/50 text-cyan-400 shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-gray-950">
                      <IconComponent size={22} />
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-gray-300">
                      {pillar.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h4 className="mt-6 text-xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h4>

                  <p className="mt-2.5 text-xs leading-relaxed text-gray-400 sm:text-sm">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom subtle progress line */}
                <div className="relative z-10 mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-500 group-hover:text-cyan-400/80 transition-colors">
                  <span>NAVIGATIONAL STATUS</span>
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    ONLINE
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Outro Callout with Glass Container */}
        <div className="ocean-header-reveal mx-auto mt-16 max-w-3xl rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-950/40 via-indigo-950/30 to-cyan-950/40 p-6 text-center backdrop-blur-md sm:p-8">
          <p className="text-sm font-medium leading-relaxed text-cyan-100 sm:text-base">
            &ldquo;{digitalOceanNeeds.outro}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
};

export default DigitalOceanNeeds;
