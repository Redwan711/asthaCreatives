"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FolderCheck, Palette, DollarSign, Users, Eye, TrendingUp, Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  {
    id: 1,
    value: 1000000,
    prefix: "",
    suffix: "+",
    label: "Audience Reach",
    sublabel: "Targeted digital impressions delivering brand dominance across multi-channel campaigns.",
    icon: Eye,
    featured: true,
    highlightBadge: "High Impact Scale",
  },
  {
    id: 2,
    value: 100000,
    prefix: "",
    suffix: "+",
    label: "Lead Creation",
    sublabel: "High-intent customer actions and conversion pipeline volume.",
    icon: Users,
    featured: false,
    highlightBadge: "Conversion Focus",
  },
  {
    id: 3,
    value: 10000,
    prefix: "$",
    suffix: "+",
    label: "Ads Spend",
    sublabel: "Data-driven performance marketing ROI and budget efficiency.",
    icon: DollarSign,
    featured: false,
    highlightBadge: "Optimized ROAS",
  },
  {
    id: 4,
    value: 1000,
    prefix: "",
    suffix: "+",
    label: "Design Assets",
    sublabel: "Crafted for visual distinction, brand trust, and clarity.",
    icon: Palette,
    featured: false,
    highlightBadge: "Vector Rigor",
  },
  {
    id: 5,
    value: 100,
    prefix: "",
    suffix: "+",
    label: "Projects",
    sublabel: "Delivered with precision on time and within scope.",
    icon: FolderCheck,
    featured: false,
    highlightBadge: "100% Delivery",
  },
];

const HeroStats = ({ className = "" }) => {
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const cards = containerRef.current?.querySelectorAll(".bento-card");
    if (!cards) return;
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".bento-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        },
      );

      const counterElements =
        containerRef.current.querySelectorAll(".counter-value");

      const formatAbbrev = (val, target) => {
        if (target >= 1000000) {
          return `${(val / 1000000).toFixed(val >= target * 0.95 ? 0 : 1)}M+`;
        }
        if (target >= 100000) {
          return `${Math.floor(val / 1000)}K+`;
        }
        if (target >= 1000) {
          return `${(val / 1000).toFixed(val >= target * 0.95 ? 0 : 1)}K+`;
        }
        return `${Math.floor(val)}+`;
      };

      counterElements.forEach((el) => {
        const targetVal = Number.parseInt(el.getAttribute("data-target"), 10);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: targetVal,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = formatAbbrev(obj.val, targetVal);
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      aria-label="Key Performance Indicators"
      className={`relative z-20 w-full bg-[#080b14] py-16 md:py-24 ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle section kicker */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-cyan-400">
              Agency Track Record
            </span>
            <h2 className="mt-1 text-xl font-bold text-white sm:text-2xl">
              Proven Numbers in the Digital Ocean
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-white/50">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Verified Metrics Across Active Clients
          </div>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {/* Card 1: Featured Audience Reach (Spans 2 columns on lg) */}
          <div className="bento-card spotlight-card group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-2xl md:col-span-2 lg:col-span-2">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-500/15 blur-3xl group-hover:bg-cyan-500/25 transition-all" />

            <div className="flex items-center justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-950/40 text-cyan-400 shadow-inner group-hover:scale-110 transition-transform">
                <Eye size={22} />
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-950/50 px-3 py-1 text-[11px] font-bold text-cyan-300 backdrop-blur-md">
                <Sparkles size={11} />
                High Impact Scale
              </span>
            </div>

            <div className="mt-8">
              <div className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                <span className="counter-value text-gradient-ocean" data-target={1000000}>
                  0+
                </span>
              </div>
              <h3 className="mt-2 text-lg font-bold text-white">
                Audience Reach
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-400 sm:text-sm max-w-md">
                Targeted digital impressions delivering brand dominance across multi-channel campaigns.
              </p>
            </div>
          </div>

          {/* Card 2: Lead Creation */}
          <div className="bento-card spotlight-card group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brandnd/60 hover:shadow-2xl md:col-span-1 lg:col-span-1">
            <div className="flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-400/30 bg-indigo-950/40 text-indigo-400 shadow-inner group-hover:scale-110 transition-transform">
                <Users size={20} />
              </span>
              <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
            </div>

            <div className="mt-8">
              <div className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                <span className="counter-value" data-target={100000}>
                  0+
                </span>
              </div>
              <h3 className="mt-1 text-base font-bold text-white">
                Lead Creation
              </h3>
              <p className="mt-1.5 text-xs text-gray-400">
                High-intent customer actions & funnel pipeline volume.
              </p>
            </div>
          </div>

          {/* Card 3: Ads Spend */}
          <div className="bento-card spotlight-card group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-2xl md:col-span-1 lg:col-span-1">
            <div className="flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-950/40 text-emerald-400 shadow-inner group-hover:scale-110 transition-transform">
                <DollarSign size={20} />
              </span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            <div className="mt-8">
              <div className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                $
                <span className="counter-value" data-target={10000}>
                  0+
                </span>
              </div>
              <h3 className="mt-1 text-base font-bold text-white">
                Ads Spend
              </h3>
              <p className="mt-1.5 text-xs text-gray-400">
                Data-driven performance marketing ROI and conversion tracking.
              </p>
            </div>
          </div>

          {/* Card 4: Design Assets */}
          <div className="bento-card spotlight-card group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/60 hover:shadow-2xl md:col-span-1 lg:col-span-2">
            <div className="flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-purple-400/30 bg-purple-950/40 text-purple-400 shadow-inner group-hover:scale-110 transition-transform">
                <Palette size={20} />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple-400">
                Creative Output
              </span>
            </div>

            <div className="mt-8">
              <div className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                <span className="counter-value" data-target={1000}>
                  0+
                </span>
              </div>
              <h3 className="mt-1 text-base font-bold text-white">
                Design Assets
              </h3>
              <p className="mt-1.5 text-xs text-gray-400">
                Crafted for visual distinction, brand trust, and scalable vector clarity.
              </p>
            </div>
          </div>

          {/* Card 5: Projects Delivered */}
          <div className="bento-card spotlight-card group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-2xl md:col-span-1 lg:col-span-2">
            <div className="flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-950/40 text-cyan-400 shadow-inner group-hover:scale-110 transition-transform">
                <FolderCheck size={20} />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">
                Successful Deployments
              </span>
            </div>

            <div className="mt-8">
              <div className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                <span className="counter-value" data-target={100}>
                  0+
                </span>
              </div>
              <h3 className="mt-1 text-base font-bold text-white">
                Projects
              </h3>
              <p className="mt-1.5 text-xs text-gray-400">
                Delivered with precision on time, within scope, and aligned to business goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroStats;
