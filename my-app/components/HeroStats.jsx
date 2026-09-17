"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FolderCheck, Palette, DollarSign, Users, Eye } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  {
    id: 1,
    value: 100,
    prefix: "",
    suffix: "+",
    label: "Projects",
    sublabel: "Delivered with precision",
    icon: FolderCheck,
  },
  {
    id: 2,
    value: 1000,
    prefix: "",
    suffix: "+",
    label: "Design Assets",
    sublabel: "Crafted for high impact",
    icon: Palette,
  },
  {
    id: 3,
    value: 10000,
    prefix: "$",
    suffix: "+",
    label: "Ads Spend",
    sublabel: "Data-driven marketing ROI",
    icon: DollarSign,
  },
  {
    id: 4,
    value: 100000,
    prefix: "",
    suffix: "+",
    label: "Lead Creation",
    sublabel: "High-intent customer actions",
    icon: Users,
  },
  {
    id: 5,
    value: 1000000,
    prefix: "",
    suffix: "+",
    label: "Audience Reach",
    sublabel: "Targeted digital impressions",
    icon: Eye,
  },
];

const HeroStats = ({ className = "" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".stat-item",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
        },
      );

      const counterElements =
        containerRef.current.querySelectorAll(".counter-value");

      // Fix #11: Abbreviation formatter for large numbers
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
      aria-label="Key Performance Indicators"
      className={`relative z-20 w-full bg-brand border-y border-white/10 py-12 md:py-16 ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className={`stat-item group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-brandnd/60 hover:bg-white/[0.08] hover:shadow-xl ${
                  idx === 4 ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brandnd/20 text-brandnd transition-transform duration-300 group-hover:scale-110">
                    <Icon size={20} />
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-brandnd/60 group-hover:bg-brandnd animate-pulse" />
                </div>

                <div className="mt-5">
                  <div className="text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-3xl">
                    {stat.prefix}
                    <span className="counter-value" data-target={stat.value}>
                      0+
                    </span>
                  </div>
                  <h3 className="mt-1 text-sm font-bold text-white/95">
                    {stat.label}
                  </h3>
                  <p className="mt-0.5 text-xs text-white/50">
                    {stat.sublabel}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroStats;
