"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Sparkles,
  Layers,
  PackageCheck,
  SlidersHorizontal,
  Check,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import OfferingCard from "./OfferingCard";
import Button from "./Button";
import { offeringsData } from "@/data/offeringsData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Complete category roster matching all 11 offerings
const categories = [
  "All",
  "Design & Identity",
  "Web & Digital Ports",
  "Social & Presence",
  "Content & Strategy",
  "Video & Motion",
  "Growth & Visibility",
];

const OfferingsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [typeFilter, setTypeFilter] = useState("all"); // 'all' | 'packages' | 'bespoke'
  const sectionRef = useRef(null);
  const cardsGridRef = useRef(null);
  const isFirstMount = useRef(true);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    return categories.reduce((acc, cat) => {
      if (cat === "All") {
        acc[cat] = offeringsData.length;
      } else {
        acc[cat] = offeringsData.filter((item) => item.category === cat).length;
      }
      return acc;
    }, {});
  }, []);

  // Filter offerings based on category and type filter
  const filteredOfferings = useMemo(() => {
    return offeringsData.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesType =
        typeFilter === "all" ||
        (typeFilter === "packages" && item.hasPackages) ||
        (typeFilter === "bespoke" && !item.hasPackages);

      return matchesCategory && matchesType;
    });
  }, [selectedCategory, typeFilter]);

  // Initial entrance animation on scroll into view
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".offering-card",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.07,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animate cards out and in on filter changes
  const handleCategoryChange = useCallback(
    (newCat) => {
      if (newCat === selectedCategory) return;

      const cards = cardsGridRef.current?.querySelectorAll(".offering-card");
      if (!cards || cards.length === 0) {
        setSelectedCategory(newCat);
        return;
      }

      gsap.to(cards, {
        opacity: 0,
        y: 12,
        duration: 0.2,
        stagger: 0.02,
        ease: "power2.in",
        onComplete: () => {
          setSelectedCategory(newCat);
        },
      });
    },
    [selectedCategory],
  );

  const handleTypeChange = useCallback(
    (newType) => {
      if (newType === typeFilter) return;

      const cards = cardsGridRef.current?.querySelectorAll(".offering-card");
      if (!cards || cards.length === 0) {
        setTypeFilter(newType);
        return;
      }

      gsap.to(cards, {
        opacity: 0,
        y: 12,
        duration: 0.2,
        stagger: 0.02,
        ease: "power2.in",
        onComplete: () => {
          setTypeFilter(newType);
        },
      });
    },
    [typeFilter],
  );

  // After state update -> animate new cards in
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    requestAnimationFrame(() => {
      const newCards = cardsGridRef.current?.querySelectorAll(".offering-card");
      if (!newCards || newCards.length === 0) return;

      gsap.fromTo(
        newCards,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.04,
          ease: "power2.out",
        },
      );
    });
  }, [selectedCategory, typeFilter]);

  return (
    <section
      ref={sectionRef}
      id="offerings"
      className="relative bg-white py-24 md:py-32 overflow-hidden"
      aria-label="Our Individual Offerings and Packages"
    >
      {/* Decorative ambient background elements */}
      <div className="pointer-events-none absolute -left-20 top-20 h-96 w-96 rounded-full bg-cyan-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brandnd/30 bg-brandnd/5 px-3.5 py-1 text-xs font-bold text-brandnd shadow-2xs">
            <Sparkles size={13} className="animate-spin-slow text-brandnd" />
            <span>Curated Service Architecture</span>
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Our Individual Offerings <span className="text-brandnd">(Packages)</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            Every business has distinct navigational needs in the digital ocean.
            Choose standalone tactical execution, select structured monthly packages,
            or combine disciplines for an integrated enterprise growth suite.
          </p>
        </div>

        {/* Filter & Category Controls */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 lg:flex-row lg:items-center">
          {/* Category Pill Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const count = categoryCounts[cat] || 0;
              const isSelected = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleCategoryChange(cat)}
                  className={`group inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-gray-950 text-white shadow-md shadow-gray-900/10 scale-105"
                      : "bg-gray-100/80 text-gray-600 hover:bg-gray-200/80 hover:text-gray-900"
                  }`}
                  aria-pressed={isSelected}
                >
                  <span>{cat}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.2 text-[10px] font-bold ${
                      isSelected
                        ? "bg-cyan-400 text-gray-950"
                        : "bg-gray-200 text-gray-600 group-hover:bg-gray-300"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Type Filter Selector (All, Tiered Packages, Custom Scope) */}
          <div className="flex items-center gap-1.5 rounded-2xl bg-gray-100/80 p-1 border border-gray-200/60 text-xs font-semibold">
            <button
              type="button"
              onClick={() => handleTypeChange("all")}
              className={`rounded-xl px-3 py-1.5 transition-all cursor-pointer ${
                typeFilter === "all"
                  ? "bg-white text-gray-950 shadow-xs"
                  : "text-gray-600 hover:text-gray-950"
              }`}
            >
              All Types ({offeringsData.length})
            </button>
            <button
              type="button"
              onClick={() => handleTypeChange("packages")}
              className={`inline-flex items-center gap-1 rounded-xl px-3 py-1.5 transition-all cursor-pointer ${
                typeFilter === "packages"
                  ? "bg-white text-brandnd shadow-xs font-bold"
                  : "text-gray-600 hover:text-gray-950"
              }`}
            >
              <PackageCheck size={13} />
              Tiered Packages (4)
            </button>
            <button
              type="button"
              onClick={() => handleTypeChange("bespoke")}
              className={`inline-flex items-center gap-1 rounded-xl px-3 py-1.5 transition-all cursor-pointer ${
                typeFilter === "bespoke"
                  ? "bg-white text-gray-950 shadow-xs font-bold"
                  : "text-gray-600 hover:text-gray-950"
              }`}
            >
              <Layers size={13} />
              Custom Scope (7)
            </button>
          </div>
        </div>

        {/* Live Status Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-b border-gray-200/70 pb-4 text-xs font-medium text-gray-500">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>
              Displaying <strong className="text-gray-900">{filteredOfferings.length}</strong> of{" "}
              <strong className="text-gray-900">{offeringsData.length}</strong> service capabilities
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[11px] text-gray-500">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-brandnd" />
              Tiered Packages (Switchable options)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-gray-400" />
              Custom Scope (Tailored deliverables)
            </span>
          </div>
        </div>

        {/* Grid Container (Uniform 1-Column Cards, Never Breaks After 8) */}
        <div
          ref={cardsGridRef}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredOfferings.map((offering) => (
            <OfferingCard key={offering.id} offering={offering} />
          ))}

          {/* 12th Card: Custom Multi-Service Retainer - completes the 4x3 grid when viewing All */}
          {selectedCategory === "All" && typeFilter === "all" && (
            <article className="offering-card spotlight-card group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border-2 border-dashed border-brandnd/30 bg-gradient-to-br from-brandnd/[0.04] via-cyan-500/[0.03] to-brand/[0.02] p-6 md:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-brandnd hover:shadow-xl col-span-1">
              <div>
                <div className="flex items-center justify-between border-b border-brandnd/10 pb-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brandnd/10 border border-brandnd/20 text-brandnd shadow-2xs">
                      <Sparkles size={18} />
                    </div>
                    <span className="font-mono text-xs font-black tracking-wider text-brandnd">
                      #12
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-brandnd/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brandnd">
                      Tailored Scope
                    </span>
                  </div>

                  <span className="rounded-full bg-brandnd/10 px-2.5 py-0.5 text-xs font-semibold text-brandnd">
                    Enterprise
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-bold tracking-tight text-gray-900 md:text-xl group-hover:text-brandnd transition-colors">
                  Custom Multi-Service Retainer
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-600 sm:text-sm">
                  Need a custom combination of design, video, web engineering, and growth operations? We construct dedicated monthly retainer partnerships.
                </p>

                <div className="mt-4 rounded-2xl bg-white/80 p-3.5 border border-brandnd/15 shadow-2xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                      Retainer Inclusions:
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-brandnd">
                      <ShieldCheck size={11} /> Dedicated Squad
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-gray-700">
                    <li className="flex items-center gap-2">
                      <Check size={13} className="text-brandnd shrink-0" />
                      <span>Dedicated Creative & Tech Squad</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={13} className="text-brandnd shrink-0" />
                      <span>Priority Turnaround & Fast Sprints</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={13} className="text-brandnd shrink-0" />
                      <span>Flexible Hours Rollover Across Work</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={13} className="text-brandnd shrink-0" />
                      <span>Direct Leadership & Slack Sync</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-brandnd/15 flex items-center justify-between gap-3">
                <Link href="/contact?subject=custom-enterprise-retainer" className="flex-1">
                  <Button variant="primary" size="sm" className="w-full justify-center text-xs">
                    Discuss Custom Scope
                    <ArrowRight size={13} />
                  </Button>
                </Link>
              </div>
            </article>
          )}
        </div>

        {/* Empty State fallback if user applies contradictory filter */}
        {filteredOfferings.length === 0 && (
          <div className="mt-12 flex flex-col items-center justify-center rounded-3xl border border-dashed border-gray-300 p-12 text-center">
            <SlidersHorizontal className="text-gray-400" size={32} />
            <h3 className="mt-3 text-base font-bold text-gray-900">
              No offerings match the selected criteria
            </h3>
            <p className="mt-1 text-xs text-gray-500">
              Try resetting your category or type filter to view all capabilities.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("All");
                setTypeFilter("all");
              }}
              className="mt-4 rounded-full bg-brand px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-brandnd transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default OfferingsSection;

