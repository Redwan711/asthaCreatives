"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Palette,
  Compass,
  Globe,
  Share2,
  Layers,
  Wand2,
  Film,
  Video,
  TrendingUp,
  Megaphone,
  BarChart3,
  Check,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  PackageCheck,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import Button from "@/components/Button";

// Dynamic Lucide icon mapping based on offering id
const getOfferingIcon = (id) => {
  switch (id) {
    case "creative-design":
      return <Palette className="text-pink-500" size={20} />;
    case "brand-guideline":
      return <Compass className="text-indigo-500" size={20} />;
    case "website-design":
      return <Globe className="text-cyan-500" size={20} />;
    case "social-account-creation":
      return <Share2 className="text-emerald-500" size={20} />;
    case "content-design":
      return <Layers className="text-violet-500" size={20} />;
    case "ai-video-creation":
      return <Wand2 className="text-amber-500" size={20} />;
    case "motion-graphics":
      return <Film className="text-orange-500" size={20} />;
    case "video-editing":
      return <Video className="text-blue-500" size={20} />;
    case "seo":
      return <TrendingUp className="text-teal-500" size={20} />;
    case "social-media-management":
      return <Megaphone className="text-rose-500" size={20} />;
    case "business-data-analytics":
      return <BarChart3 className="text-cyan-500" size={20} />;
    default:
      return <Sparkles className="text-brandnd" size={20} />;
  }
};

const OfferingCard = ({ offering }) => {
  const [showFullDetails, setShowFullDetails] = useState(false);
  const [activePkg, setActivePkg] = useState(0);

  // Mouse spotlight tracking handler
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  // Case A: Multi-Package Offerings (Content Design, SEO, Social Media Management, Business Data Analytics)
  // Structured as clean 1-column card with interactive package tier switcher so it aligns seamlessly in the grid
  if (offering.hasPackages && offering.packages) {
    const currentPkg = offering.packages[activePkg] || offering.packages[0];

    return (
      <article
        onMouseMove={handleMouseMove}
        className="offering-card spotlight-card group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-gray-200/90 bg-white p-6 md:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-brandnd/60 hover:shadow-xl col-span-1"
      >
        {/* Top subtle highlight ribbon */}
        <div className="pointer-events-none absolute left-6 right-6 top-0 h-1 rounded-t-full bg-gradient-to-r from-brandnd via-cyan-400 to-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div>
          {/* Header row: Number, Icon, Package Tag, & Category */}
          <div className="flex items-center justify-between border-b border-gray-100 pb-3.5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 border border-gray-100 shadow-2xs group-hover:scale-105 transition-transform">
                {getOfferingIcon(offering.id)}
              </div>
              <span className="font-mono text-xs font-black tracking-wider text-brandnd">
                #{offering.number}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-brandnd/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brandnd">
                <PackageCheck size={12} />
                Tiered Packages
              </span>
            </div>

            <span className="rounded-full bg-gray-100/80 px-2.5 py-0.5 text-xs font-semibold text-gray-700">
              {offering.category}
            </span>
          </div>

          {/* Title & Short Summary */}
          <h3 className="mt-4 text-lg font-bold tracking-tight text-gray-900 md:text-xl group-hover:text-brandnd transition-colors">
            {offering.title}
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-gray-600 sm:text-sm">
            {offering.summary}
          </p>

          {/* Scope Details Collapsible Drawer Toggle */}
          {offering.details && (
            <div className="mt-2.5">
              <button
                type="button"
                onClick={() => setShowFullDetails(!showFullDetails)}
                className="inline-flex items-center gap-1 text-[11px] font-bold text-gray-500 hover:text-brandnd transition-colors cursor-pointer"
              >
                <span className="underline underline-offset-4 decoration-gray-300 hover:decoration-brandnd">
                  {showFullDetails ? "Hide Scope Details" : "View Scope & Methodology"}
                </span>
                {showFullDetails ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
              </button>

              {showFullDetails && (
                <div className="mt-2 rounded-2xl bg-blue-50/40 p-3.5 text-xs leading-relaxed text-gray-700 border border-blue-100/60 animate-fadeIn">
                  <p className="font-semibold text-brandnd mb-1 text-[10px] uppercase tracking-wider">
                    Technical Scope & Execution:
                  </p>
                  {offering.details}
                </div>
              )}
            </div>
          )}

          {/* Package Tier Switcher (Interactive Tabs) */}
          <div className="mt-4 flex items-center p-1 bg-gray-100/90 rounded-2xl border border-gray-200/60">
            {offering.packages.map((pkg, idx) => (
              <button
                key={pkg.name}
                type="button"
                onClick={() => setActivePkg(idx)}
                className={`flex-1 py-1.5 px-2 text-xs font-bold rounded-xl transition-all cursor-pointer text-center ${
                  activePkg === idx
                    ? "bg-white text-gray-950 shadow-xs border border-gray-200/50"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                <span className="block truncate">{pkg.name}</span>
                <span
                  className={`block text-[9px] font-semibold truncate ${
                    activePkg === idx ? "text-brandnd" : "text-gray-400"
                  }`}
                >
                  {pkg.badge}
                </span>
              </button>
            ))}
          </div>

          {/* Active Package Card Box */}
          <div className="mt-3 flex flex-col justify-between rounded-2xl border border-gray-200/80 bg-gray-50/70 p-4 transition-all">
            <div>
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-xs font-bold text-gray-900">
                  {currentPkg.name}
                </h4>
                <span className="rounded-full bg-brandnd/10 border border-brandnd/20 px-2 py-0.5 text-[10px] font-bold text-brandnd whitespace-nowrap">
                  {currentPkg.badge}
                </span>
              </div>

              <ul className="mt-2.5 space-y-1.5 border-t border-gray-200/60 pt-2.5">
                {currentPkg.specs.map((spec, sIdx) => (
                  <li
                    key={sIdx}
                    className="flex items-start gap-2 text-xs font-medium text-gray-700"
                  >
                    <Check size={13} className="mt-0.5 shrink-0 text-emerald-500" />
                    <span className="leading-snug">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Action CTA Buttons at the Bottom */}
        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
          <Link
            href={offering.learnMoreHref ? `${offering.learnMoreHref}#packages` : currentPkg.ctaHref}
            className="flex-1"
          >
            <Button variant="primary" size="sm" className="w-full justify-center text-xs">
              Check Packages
            </Button>
          </Link>

          {offering.learnMoreHref && (
            <Link
              href={offering.learnMoreHref}
              className="inline-flex items-center gap-1 text-xs font-bold text-gray-600 transition-colors hover:text-brandnd px-2 py-1.5 shrink-0"
            >
              Learn More
              <ArrowRight size={13} />
            </Link>
          )}
        </div>
      </article>
    );
  }

  // Case B: Standard Single-Offering Bento Card (1 Column, Compact Height with 2x2 Deliverables Chips)
  return (
    <article
      onMouseMove={handleMouseMove}
      className="offering-card spotlight-card group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-gray-200/90 bg-white p-6 md:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-brandnd/60 hover:shadow-xl col-span-1"
    >
      {/* Top subtle highlight ribbon */}
      <div className="pointer-events-none absolute left-6 right-6 top-0 h-1 rounded-t-full bg-gradient-to-r from-cyan-400 via-brandnd to-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div>
        {/* Top meta: Number, Icon, Scope Tag, & Category */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-3.5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 border border-gray-100 shadow-2xs group-hover:scale-105 transition-transform">
              {getOfferingIcon(offering.id)}
            </div>
            <span className="font-mono text-xs font-black tracking-wider text-brandnd">
              #{offering.number}
            </span>
          </div>

          <span className="rounded-full bg-gray-100/80 px-2.5 py-0.5 text-xs font-semibold text-gray-700">
            {offering.category}
          </span>
        </div>

        {/* Title & Summary */}
        <h3 className="mt-4 text-lg font-bold tracking-tight text-gray-900 md:text-xl group-hover:text-brandnd transition-colors">
          {offering.title}
        </h3>

        <p className="mt-2 text-xs leading-relaxed text-gray-600 sm:text-sm">
          {offering.summary}
        </p>

        {/* Expandable details button */}
        {offering.details && (
          <div className="mt-2.5">
            <button
              type="button"
              onClick={() => setShowFullDetails(!showFullDetails)}
              className="inline-flex items-center gap-1 text-[11px] font-bold text-gray-500 hover:text-brandnd transition-colors cursor-pointer"
            >
              <span className="underline underline-offset-4 decoration-gray-300 hover:decoration-brandnd">
                {showFullDetails ? "Hide Scope Details" : "View Scope & Deep Details"}
              </span>
              {showFullDetails ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
            </button>

            {showFullDetails && (
              <div className="mt-2 rounded-2xl bg-blue-50/40 p-3.5 text-xs leading-relaxed text-gray-700 border border-blue-100/60 animate-fadeIn">
                <p className="font-semibold text-brandnd mb-1 text-[10px] uppercase tracking-wider">
                  Operational Scope:
                </p>
                {offering.details}
              </div>
            )}
          </div>
        )}

        {/* Compact Deliverables Grid (2-Column Chips - Cuts vertical height by 50% without trimming) */}
        {offering.deliverables && (
          <div className="mt-4 rounded-2xl bg-gray-50/80 p-3 border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                Core Deliverables:
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-brandnd">
                <ShieldCheck size={11} /> 4 Included
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {offering.deliverables.map((item, dIdx) => (
                <div
                  key={dIdx}
                  className="flex items-start gap-1.5 rounded-lg bg-white/80 p-1.5 border border-gray-100/80 text-[11px] font-medium text-gray-700 shadow-2xs"
                >
                  <Check size={12} className="mt-0.5 shrink-0 text-emerald-500" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Action CTA Buttons */}
      <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
        <Link
          href={
            offering.hasPackages
              ? offering.learnMoreHref
                ? `${offering.learnMoreHref}#packages`
                : offering.quoteHref
              : offering.quoteHref
          }
          className="flex-1"
        >
          <Button variant="primary" size="sm" className="w-full justify-center text-xs">
            {offering.hasPackages ? "Check Packages" : "Get A Quote"}
          </Button>
        </Link>

        {offering.learnMoreHref && (
          <Link
            href={offering.learnMoreHref}
            className="inline-flex items-center gap-1 text-xs font-bold text-gray-600 transition-colors hover:text-brandnd px-2 py-1.5 shrink-0"
          >
            Learn More
            <ArrowRight size={13} />
          </Link>
        )}
      </div>
    </article>
  );
};

export default OfferingCard;

