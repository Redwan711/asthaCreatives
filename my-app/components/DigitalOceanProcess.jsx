"use client";

import React, { useState, useEffect, useRef } from "react";
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
  ChevronRight,
  ChevronLeft,
  LayoutGrid,
  Layers,
  Ship,
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

// Curated aesthetic nautical color accents for each stage
const stageAccents = [
  {
    badge: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    iconBg: "bg-blue-50 text-blue-600 border-blue-200",
    glow: "hover:border-blue-400/50",
    gradient: "from-blue-600 to-cyan-500",
    quoteBorder: "border-blue-500/60",
  },
  {
    badge: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20",
    iconBg: "bg-indigo-50 text-indigo-600 border-indigo-200",
    glow: "hover:border-indigo-400/50",
    gradient: "from-indigo-600 to-violet-500",
    quoteBorder: "border-indigo-500/60",
  },
  {
    badge: "bg-cyan-500/10 text-cyan-700 border-cyan-500/20",
    iconBg: "bg-cyan-50 text-cyan-600 border-cyan-200",
    glow: "hover:border-cyan-400/50",
    gradient: "from-cyan-600 to-blue-600",
    quoteBorder: "border-cyan-500/60",
  },
  {
    badge: "bg-amber-500/10 text-amber-700 border-amber-500/20",
    iconBg: "bg-amber-50 text-amber-600 border-amber-200",
    glow: "hover:border-amber-400/50",
    gradient: "from-amber-600 to-orange-500",
    quoteBorder: "border-amber-500/60",
  },
  {
    badge: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
    iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200",
    glow: "hover:border-emerald-400/50",
    gradient: "from-emerald-600 to-teal-500",
    quoteBorder: "border-emerald-500/60",
  },
  {
    badge: "bg-rose-500/10 text-rose-700 border-rose-500/20",
    iconBg: "bg-rose-50 text-rose-600 border-rose-200",
    glow: "hover:border-rose-400/50",
    gradient: "from-rose-600 to-pink-500",
    quoteBorder: "border-rose-500/60",
  },
];

const DigitalOceanProcess = () => {
  const containerRef = useRef(null);
  const [activeView, setActiveView] = useState("console"); // 'console' (Interactive Bridge) as default
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--glow-x", `${x}px`);
    card.style.setProperty("--glow-y", `${y}px`);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveals
      gsap.fromTo(
        ".process-header-reveal",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );

      // Console card entrance (only if in console view)
      if (activeView === "console") {
        gsap.fromTo(
          ".process-console-card",
          { opacity: 0, y: 20, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
            clearProps: "all",
            scrollTrigger: {
              trigger: ".process-console-card",
              start: "top 85%",
              once: true,
            },
          },
        );
      } else {
        // Grid cards entrance (only if in grid view)
        gsap.fromTo(
          ".process-grid-card",
          { opacity: 0, y: 20, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.06,
            ease: "power3.out",
            clearProps: "all",
            scrollTrigger: {
              trigger: ".process-cards-grid",
              start: "top 85%",
              once: true,
            },
          },
        );
      }

      // CTA Banner
      gsap.fromTo(
        ".process-cta-banner",
        { opacity: 0, scale: 0.98, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: ".process-cta-banner",
            start: "top 90%",
            once: true,
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, [activeView]);

  const currentStep = digitalOceanProcess.steps[activeStepIdx] || digitalOceanProcess.steps[0];
  const CurrentIcon = iconMap[currentStep.icon] || Compass;
  const currentAccent = stageAccents[activeStepIdx % stageAccents.length];

  return (
    <section
      id="how-we-navigate"
      ref={containerRef}
      className="relative bg-white py-20 md:py-28 overflow-hidden"
    >
      {/* Subtle nautical background grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="process-header-reveal inline-flex items-center gap-2 rounded-full border border-brandnd/20 bg-brandnd/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brandnd">
            <Route size={14} className="text-brandnd" />
            Phase 03 · Execution Roadmap
          </span>

          <h2 className="process-header-reveal mt-5 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl md:text-5xl">
            {digitalOceanProcess.title}
          </h2>

          <p className="process-header-reveal mt-3 text-lg font-bold text-brandnd sm:text-xl">
            {digitalOceanProcess.subtitle}
          </p>

          <p className="process-header-reveal mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
            {digitalOceanProcess.intro}
          </p>
        </div>

        {/* Waypoint Track & View Switcher Bar */}
        <div className="process-header-reveal mt-12 flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl border border-gray-200/80 bg-gray-50/70 p-3 backdrop-blur-md">
          {/* Quick Stage Waypoints Track */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="hidden xl:inline-block text-[11px] font-bold uppercase tracking-wider text-gray-400 px-2">
              Waypoints:
            </span>
            {digitalOceanProcess.steps.map((st, i) => (
              <button
                key={st.number}
                type="button"
                onClick={() => {
                  setActiveStepIdx(i);
                  if (activeView !== "console") {
                    setActiveView("console");
                  }
                }}
                className={`inline-flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                  activeView === "console" && activeStepIdx === i
                    ? "bg-brandnd text-white shadow-xs font-bold"
                    : "bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200/60"
                }`}
              >
                <span className="font-mono text-[10px] font-black opacity-80">
                  {st.number}
                </span>
                <span className="hidden sm:inline">{st.stepName.replace("We ", "")}</span>
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 rounded-xl bg-white p-1 border border-gray-200/80 shadow-2xs">
            <button
              type="button"
              onClick={() => setActiveView("grid")}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                activeView === "grid"
                  ? "bg-brandnd text-white shadow-2xs"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <LayoutGrid size={14} />
              <span>Voyage Grid</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveView("console")}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                activeView === "console"
                  ? "bg-brandnd text-white shadow-2xs"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Layers size={14} />
              <span>Interactive Bridge</span>
            </button>
          </div>
        </div>

        {/* VIEW 1: Bento Voyage Grid (3 Columns x 2 Rows) */}
        {activeView === "grid" && (
          <div className="process-cards-grid mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {digitalOceanProcess.steps.map((step, idx) => {
              const IconComponent = iconMap[step.icon] || Compass;
              const accent = stageAccents[idx % stageAccents.length];

              return (
                <div
                  key={step.number}
                  onMouseMove={handleMouseMove}
                  className={`process-grid-card group relative flex flex-col justify-between rounded-3xl border border-gray-200/90 bg-white p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${accent.glow}`}
                  style={{
                    background:
                      "radial-gradient(350px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(77, 97, 214, 0.04), transparent 70%), #ffffff",
                  }}
                >
                  {/* Top Animated Accent Border */}
                  <div
                    className={`pointer-events-none absolute left-6 right-6 top-0 h-1 rounded-t-full bg-gradient-to-r ${accent.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  <div>
                    {/* Card Header: Stage badge & Icon */}
                    <div className="flex items-center justify-between gap-3 border-b border-gray-100 pb-3.5">
                      <div className="flex items-center gap-2">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-black uppercase tracking-wider ${accent.badge}`}
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
                          STAGE {step.number}
                        </span>
                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider line-clamp-1">
                          {step.stepName}
                        </span>
                      </div>

                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-110 ${accent.iconBg}`}
                      >
                        <IconComponent size={18} />
                      </div>
                    </div>

                    {/* Stage Title */}
                    <h3 className="mt-4 text-lg font-black tracking-tight text-gray-900 sm:text-xl group-hover:text-brandnd transition-colors">
                      {step.title}
                    </h3>

                    {/* Hook Quote Box */}
                    <div
                      className={`mt-3 rounded-xl bg-slate-50/90 p-3 border-l-2 ${accent.quoteBorder}`}
                    >
                      <p className="text-xs font-semibold italic text-gray-700 leading-snug">
                        &ldquo;{step.hook}&rdquo;
                      </p>
                    </div>

                    {/* Description */}
                    <p className="mt-3 text-xs leading-relaxed text-gray-600 sm:text-sm">
                      {step.description}
                    </p>

                    {/* Deliverables / Focus Areas as organized pills */}
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                          Focus & Deliverables
                        </span>
                        <span className="text-[10px] font-semibold text-brandnd bg-brandnd/10 px-2 py-0.5 rounded-full">
                          {step.points.length} Deliverables
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {step.points.map((point, pIdx) => (
                          <div
                            key={pIdx}
                            className="flex items-center gap-1.5 text-xs font-medium text-gray-700 truncate"
                            title={point}
                          >
                            <CheckCircle2 size={13} className="shrink-0 text-brandnd" />
                            <span className="truncate">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Conclusion / Takeaway */}
                  <div className="mt-5 rounded-2xl bg-gray-50/90 p-3 border border-gray-100/90 flex items-start gap-2">
                    <Ship size={14} className="shrink-0 text-brandnd mt-0.5" />
                    <p className="text-[11px] font-medium text-gray-600 leading-snug">
                      {step.conclusion}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* VIEW 2: Interactive Mission Bridge Console */}
        {activeView === "console" && (
          <div className="process-console-card mt-8 rounded-3xl border border-gray-200/90 bg-white p-5 sm:p-7 md:p-8 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
              {/* Mobile Stage Selector Strip (horizontal scrolling tabs) */}
              <div className="flex lg:hidden overflow-x-auto pb-2 gap-2 scrollbar-none w-full border-b border-gray-100 mb-2">
                {digitalOceanProcess.steps.map((step, sIdx) => {
                  const IconComp = iconMap[step.icon] || Compass;
                  const isSelected = activeStepIdx === sIdx;
                  return (
                    <button
                      key={step.number}
                      type="button"
                      onClick={() => setActiveStepIdx(sIdx)}
                      className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-2 shrink-0 text-xs font-bold transition-all border cursor-pointer ${
                        isSelected
                          ? "bg-brandnd text-white border-brandnd shadow-xs"
                          : "bg-gray-50 text-gray-700 border-gray-200/80 hover:bg-gray-100"
                      }`}
                    >
                      <IconComp size={13} className={isSelected ? "text-white" : "text-brandnd"} />
                      <span>{step.number}. {step.stepName.replace("We ", "")}</span>
                    </button>
                  );
                })}
              </div>

              {/* Desktop Left stage selector rail */}
              <div className="hidden lg:flex lg:col-span-4 flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1 px-1">
                  Select Navigation Stage:
                </span>
                {digitalOceanProcess.steps.map((step, sIdx) => {
                  const IconComp = iconMap[step.icon] || Compass;
                  const isSelected = activeStepIdx === sIdx;

                  return (
                    <button
                      key={step.number}
                      type="button"
                      onClick={() => setActiveStepIdx(sIdx)}
                      className={`flex items-center justify-between rounded-2xl p-3 text-left transition-all duration-200 border cursor-pointer ${
                        isSelected
                          ? "bg-brandnd/5 border-brandnd shadow-xs text-gray-900"
                          : "bg-gray-50/70 hover:bg-gray-100 border-transparent text-gray-600"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors ${
                            isSelected
                              ? "bg-brandnd text-white"
                              : "bg-white border border-gray-200 text-gray-500"
                          }`}
                        >
                          <IconComp size={16} />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-mono text-xs font-black text-brandnd">
                              {step.number}
                            </span>
                            <span className="text-xs font-bold text-gray-800 line-clamp-1">
                              {step.stepName}
                            </span>
                          </div>
                          <p className="text-[11px] text-gray-500 line-clamp-1">
                            {step.title}
                          </p>
                        </div>
                      </div>
                      <ChevronRight
                        size={15}
                        className={`transition-transform duration-200 ${
                          isSelected ? "text-brandnd translate-x-0.5" : "text-gray-300"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Right Active Stage Console */}
              <div
                key={currentStep.number}
                className="lg:col-span-8 flex flex-col justify-between rounded-2xl border border-gray-100 bg-slate-50/60 p-6 sm:p-8 relative overflow-hidden transition-all duration-300"
              >
                {/* Stage number watermark */}
                <div className="pointer-events-none absolute right-4 -bottom-6 select-none font-black text-9xl text-gray-200/40">
                  {currentStep.number}
                </div>

                <div className="relative z-10">
                  {/* Stage Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200/80 pb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="rounded-full bg-brandnd/10 border border-brandnd/20 px-3 py-1 text-xs font-black text-brandnd uppercase tracking-wider">
                        STAGE {currentStep.number} · {currentStep.stepName}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          setActiveStepIdx((prev) =>
                            prev > 0 ? prev - 1 : digitalOceanProcess.steps.length - 1
                          )
                        }
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
                        title="Previous Stage"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setActiveStepIdx((prev) =>
                            prev < digitalOceanProcess.steps.length - 1 ? prev + 1 : 0
                          )
                        }
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
                        title="Next Stage"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Title & Hook */}
                  <h3 className="mt-5 text-2xl font-black text-gray-900 sm:text-3xl">
                    {currentStep.title}
                  </h3>

                  <div className="mt-3 rounded-xl bg-white p-4 border-l-4 border-brandnd shadow-2xs">
                    <p className="text-sm font-semibold italic text-gray-800">
                      &ldquo;{currentStep.hook}&rdquo;
                    </p>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-gray-600">
                    {currentStep.description}
                  </p>

                  {/* Deliverables Matrix */}
                  <div className="mt-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-3">
                      Focus Areas & Deliverables Matrix:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {currentStep.points.map((point, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 rounded-xl bg-white p-2.5 border border-gray-100 shadow-2xs text-xs font-medium text-gray-800"
                        >
                          <CheckCircle2 size={16} className="text-brandnd shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Conclusion */}
                <div className="relative z-10 mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl bg-white p-4 border border-brandnd/20">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brandnd/10 text-brandnd">
                      <Ship size={16} />
                    </div>
                    <p className="text-xs font-semibold text-gray-800">
                      {currentStep.conclusion}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setActiveStepIdx((prev) =>
                        prev < digitalOceanProcess.steps.length - 1 ? prev + 1 : 0
                      )
                    }
                    className="shrink-0 text-xs font-bold text-brandnd hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>
                      {activeStepIdx < digitalOceanProcess.steps.length - 1
                        ? "Next Stage"
                        : "Restart Voyage"}
                    </span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Callout Box / CTA Banner */}
        <div className="process-cta-banner relative mx-auto mt-16 max-w-4xl overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#080b14] p-8 md:p-12 text-white shadow-2xl">
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
