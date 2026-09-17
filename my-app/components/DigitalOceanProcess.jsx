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

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      // Fix #5: Alternating slide-in from sides for visual variety
      const processCards = gsap.utils.toArray(".process-step-card");
      processCards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          },
        );
      });

      gsap.fromTo(
        ".process-cta-banner",
        { opacity: 0, scale: 0.96 },
        {
          opacity: 1,
          scale: 1,
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
      className="relative bg-mpure py-24 md:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="process-header-reveal inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brandnd shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brandnd" />
            Phase 03 · Execution Framework
          </span>

          <h2 className="process-header-reveal mt-6 text-3xl font-black tracking-tight text-brand sm:text-4xl md:text-5xl">
            {digitalOceanProcess.title}
          </h2>

          <p className="process-header-reveal mt-4 text-lg font-semibold text-brandnd sm:text-xl">
            {digitalOceanProcess.subtitle}
          </p>

          <p className="process-header-reveal mt-6 text-base leading-relaxed text-gray-700 sm:text-lg">
            {digitalOceanProcess.intro}
          </p>
        </div>

        {/* 6 Process Cards Grid */}
        <div className="process-steps-grid mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {digitalOceanProcess.steps.map((step) => {
            const Icon = iconMap[step.icon] || Compass;
            return (
              <div
                key={step.number}
                className="process-step-card group relative flex flex-col justify-between rounded-2xl border border-gray-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brandnd/40 hover:shadow-xl"
              >
                <div>
                  {/* Step number badge & Icon */}
                  <div className="flex items-center justify-between border-b border-gray-100 pb-5">
                    <span className="text-3xl font-black tracking-tight text-brandnd">
                      {step.number}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/5 text-brand transition-colors duration-300 group-hover:bg-brandnd group-hover:text-white">
                      <Icon size={22} />
                    </span>
                  </div>

                  {/* Step identifiers */}
                  <span className="mt-5 block text-xs font-bold uppercase tracking-wider text-brandnd">
                    {step.stepName}
                  </span>
                  <h3 className="mt-1 text-xl font-bold tracking-tight text-brand">
                    {step.title}
                  </h3>

                  {/* Hook */}
                  <p className="mt-3 text-sm font-medium italic text-gray-800">
                    &ldquo;{step.hook}&rdquo;
                  </p>

                  {/* Points list */}
                  <div className="mt-5 space-y-2 border-t border-gray-100 pt-4">
                    {step.points.map((point, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-start gap-2.5 text-xs font-medium text-gray-600 sm:text-sm"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-brandnd"
                        />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Conclusion footer note */}
                <div className="mt-6 rounded-xl bg-gray-50 p-3.5 text-xs font-medium text-gray-700">
                  {step.conclusion}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mid-Page Callout Banner */}
        <div className="process-cta-banner mt-20 overflow-hidden rounded-3xl border border-brand/10 bg-brand text-white shadow-2xl">
          <div className="relative px-6 py-12 text-center sm:px-12 sm:py-16 md:px-16">
            {/* Background lighting */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brandnd/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />

            <span className="relative inline-block text-xs font-bold uppercase tracking-[0.25em] text-brandnd">
              {digitalOceanProcess.callout.tagline}
            </span>

            <h3 className="relative mt-4 text-2xl font-black tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
              {digitalOceanProcess.callout.heading}
            </h3>

            <p className="relative mx-auto mt-4 max-w-xl text-sm font-normal text-white/80 sm:text-base">
              {digitalOceanProcess.callout.subtext}
            </p>

            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href={digitalOceanProcess.callout.ctaHref}>
                <Button variant="primary" size="lg" className="shadow-xl">
                  <Calendar size={18} />
                  <span>{digitalOceanProcess.callout.ctaLabel}</span>
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
