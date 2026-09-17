"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Compass,
  Sparkles,
  Anchor,
  Radio,
  Activity,
  Target,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Route,
} from "lucide-react";
import Button from "@/components/Button";
import { digitalOceanProcess } from "@/data/digitalOceanData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const iconMap = {
  Compass,
  Sparkles,
  Anchor,
  Radio,
  Activity,
  Target,
};

const DigitalOceanProcess = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveals
      gsap.fromTo(
        ".process-header-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        },
      );

      // Connected timeline line drawing with ScrollTrigger
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".process-timeline-container",
              start: "top 70%",
              end: "bottom 80%",
              scrub: 0.5,
            },
          },
        );
      }

      // Step cards entrance
      const processCards = gsap.utils.toArray(".process-step-card");
      processCards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          },
        );
      });

      // Bottom callout banner
      gsap.fromTo(
        ".process-cta-banner",
        { opacity: 0, scale: 0.96, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".process-cta-banner",
            start: "top 85%",
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="how-we-navigate"
      ref={containerRef}
      className="relative bg-white py-24 md:py-32 overflow-hidden"
    >
      {/* Subtle organic background grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="process-header-reveal inline-flex items-center gap-2 rounded-full border border-brand/10 bg-brand/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            <Route size={13} className="text-brandnd" />
            Phase 03 · Execution Roadmap
          </span>

          <h2 className="process-header-reveal mt-6 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl md:text-5xl">
            {digitalOceanProcess.title}
          </h2>

          <p className="process-header-reveal mt-3 text-lg font-bold text-brandnd sm:text-xl">
            {digitalOceanProcess.subtitle}
          </p>

          <p className="process-header-reveal mt-5 text-sm leading-relaxed text-gray-600 sm:text-base">
            {digitalOceanProcess.intro}
          </p>
        </div>

        {/* The Voyage Timeline */}
        <div className="process-timeline-container relative mx-auto mt-16 max-w-5xl">
          {/* Animated SVG/CSS Line running through the center on desktop */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-0.5 -translate-x-1/2 bg-gray-200">
            <div
              ref={lineRef}
              className="h-full w-full bg-gradient-to-b from-brandnd via-cyan-400 to-brand origin-top"
            />
          </div>

          {/* 6 Steps Timeline Grid */}
          <div className="space-y-10 lg:space-y-16">
            {digitalOceanProcess.steps.map((step, idx) => {
              const IconComponent = iconMap[step.icon] || Compass;
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={step.number}
                  className={`process-step-card group relative flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Step Card Content */}
                  <div className="w-full lg:w-1/2">
                    <div className="rounded-3xl border border-gray-200/80 bg-white p-7 md:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-brandnd/50 hover:shadow-xl">
                      {/* Top Step Header */}
                      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                        <span className="rounded-full bg-brand/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
                          {step.stepName}
                        </span>
                        <span className="font-mono text-xs font-bold text-gray-400">
                          STAGE {step.number}
                        </span>
                      </div>

                      {/* Title & Hook */}
                      <h3 className="mt-4 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl group-hover:text-brandnd transition-colors">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-xs font-semibold italic text-brandnd sm:text-sm">
                        &ldquo;{step.hook}&rdquo;
                      </p>

                      <p className="mt-3 text-xs leading-relaxed text-gray-600 sm:text-sm">
                        {step.description}
                      </p>

                      {/* Points / Deliverables List */}
                      <div className="mt-5 border-t border-gray-100 pt-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                          Focus Areas & Inclusions:
                        </span>
                        <div className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                          {step.points.map((point, pIdx) => (
                            <div
                              key={pIdx}
                              className="flex items-center gap-2 text-xs font-medium text-gray-700"
                            >
                              <CheckCircle2
                                size={14}
                                className="shrink-0 text-brandnd"
                              />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Conclusion */}
                      <div className="mt-5 rounded-xl bg-gray-50 p-3.5 border border-gray-100">
                        <p className="text-xs font-semibold text-gray-700">
                          {step.conclusion}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Center Node Marker on Desktop */}
                  <div className="hidden lg:flex shrink-0 items-center justify-center">
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-brandnd/30 bg-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:border-brandnd group-hover:shadow-brandnd/20">
                      <span className="font-black text-sm text-brandnd">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Empty Spacer on Opposite Side for Balance */}
                  <div className="hidden lg:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Mid-Callout Box / CTA Banner */}
        <div className="process-cta-banner relative mx-auto mt-20 max-w-4xl overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#080b14] p-8 md:p-12 text-white shadow-2xl">
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-indigo-600/25 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            <div className="max-w-xl">
              <span className="inline-block rounded-full bg-cyan-950/60 border border-cyan-400/30 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 backdrop-blur-md">
                {digitalOceanProcess.callout.tagline}
              </span>
              <h3 className="mt-4 text-2xl font-black sm:text-3xl md:text-4xl text-white">
                {digitalOceanProcess.callout.heading}
              </h3>
              <p className="mt-3 text-sm text-gray-300">
                {digitalOceanProcess.callout.subtext}
              </p>
            </div>

            <div className="shrink-0">
              <Link href={digitalOceanProcess.callout.ctaHref}>
                <Button variant="primary" size="lg" className="shadow-2xl shadow-cyan-500/20">
                  <Calendar size={18} />
                  <span>{digitalOceanProcess.callout.ctaLabel}</span>
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalOceanProcess;
