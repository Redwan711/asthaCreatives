"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Coffee,
  Building2,
  Stethoscope,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Layers,
  ExternalLink,
  X,
  Palette,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export const brandDesignProjects = [
  {
    id: "gesha-coffee",
    businessType: "COFFEE SHOP",
    industry: "Specialty Coffee & Roastery",
    client: "Gesha Coffee Roasters",
    pageUrl: "/portfolio/gesha-coffee",
    tagline: "Artisan Coffee Packaging & Identity",
    image: "/images/brand-design/gesha-coffee.jpg",
    accentColor: "from-orange-500/20 via-amber-500/10 to-transparent",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    buttonAccent: "hover:border-orange-500/60 hover:text-orange-400",
    icon: Coffee,
    description:
      "Minimalist organic branding, custom leaf-accented wordmark, and sustainable eco-packaging architecture engineered for premium specialty bean roasters.",
    challenge:
      "Gesha Coffee needed to stand out in an oversaturated artisanal coffee market while maintaining eco-conscious packaging integrity that appeals to modern urban consumers.",
    solution:
      "We crafted a clean, warm visual language featuring custom typography, a signature terracotta and warm cream color palette, and multi-format kraft packaging that translates seamlessly from store shelves to digital storefronts.",
    deliverables: [
      "Custom Brand Mark & Iconography",
      "Kraft Eco-Packaging Architecture",
      "Branded Takeaway Bag & Cup Holder Suite",
      "Typography & Print Production Standards",
      "Storefront Signage & Cafe Mockups",
    ],
    palette: [
      { name: "Terracotta Accent", hex: "#E4572E" },
      { name: "Pure Roast Cream", hex: "#F7F4EF" },
      { name: "Espresso Noir", hex: "#1C1917" },
    ],
    impact: "+140% retail packaging recognition & 45% increase in takeaway repeat orders.",
  },
  {
    id: "ekome-furniture",
    businessType: "REAL ESTATE",
    industry: "Modern Furniture & Interior Architecture",
    client: "Ekome Furniture & Living",
    tagline: "From Our Floor to Your Door",
    image: "/images/brand-design/real-estate.jpg",
    accentColor: "from-emerald-500/20 via-teal-500/10 to-transparent",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    buttonAccent: "hover:border-emerald-500/60 hover:text-emerald-400",
    icon: Building2,
    description:
      "Omnichannel logistics branding, environmental showroom graphics, and delivery fleet vehicle wraps built around the signature 'From Our Floor to Your Door' campaign.",
    challenge:
      "Transforming high-end bespoke furniture delivery into a memorable customer touchpoint that drives neighborhood viral awareness and establishes prestige brand credibility.",
    solution:
      "We designed an imaginative open-container fleet wrap turning transit trucks into traveling living room dioramas, reinforced by sleek corporate typography and cohesive brand collaterals.",
    deliverables: [
      "Signature Fleet Vehicle Graphic Wraps",
      "'From Our Floor to Your Door' Campaign ID",
      "Architectural Showroom Signage",
      "Digital Marketing & Social Ad Templates",
      "Customer Care Packaging & Warranty Folios",
    ],
    palette: [
      { name: "Deep Forest Pine", hex: "#1C3026" },
      { name: "Warm Ochre Sun", hex: "#E9B824" },
      { name: "Sky Cargo Blue", hex: "#2A75D3" },
    ],
    impact: "3.2x surge in residential inbound inquiries driven by moving fleet impressions.",
  },
  {
    id: "alpha-health-farma",
    businessType: "MEDICAL EQUIPMENT",
    industry: "Healthcare & Clinical Diagnostics",
    client: "Alpha Health Farma (AHF)",
    pageUrl: "/portfolio/alpha-health-farma",
    tagline: "Clinical Precision & Tablet Packaging Architecture",
    image: "/images/brand-design/medical-equipment.jpg",
    accentColor: "from-cyan-500/20 via-blue-500/10 to-transparent",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    buttonAccent: "hover:border-cyan-500/60 hover:text-cyan-400",
    icon: Stethoscope,
    description:
      "Clinical pharmaceutical packaging system, diagnostic tablet mockups, and sterile compliance typography developed for next-generation medical device distribution.",
    challenge:
      "Medical product design requires strict regulatory legibility without sacrificing modern digital ergonomics or enterprise professional appeal.",
    solution:
      "We engineered a clean, high-contrast visual system featuring a fortified clinical badge, sterile isometric device presentations, and modular color-coded labeling for rapid medical identification.",
    deliverables: [
      "Clinical Brand Identity & Certified Mark",
      "Sterile Packaging & Medical Kit Boxes",
      "Digital Diagnostic Tablet App UI Mockup",
      "Regulatory Compliance Labeling Hierarchy",
      "Physician Presentation Portfolios",
    ],
    palette: [
      { name: "Clinical Navy", hex: "#0E2442" },
      { name: "Sterile Cyan", hex: "#00E5FF" },
      { name: "Pure Lab White", hex: "#FFFFFF" },
    ],
    impact: "100% first-pass pharmaceutical compliance clearance with 0 regulatory revisions.",
  },
];

const BrandDesignShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="relative w-full py-20 md:py-28 bg-[#080b14] text-white overflow-hidden">
      {/* Background ambient glows */}
      <div className="pointer-events-none absolute -left-48 top-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-48 bottom-10 h-96 w-96 rounded-full bg-brandnd/15 blur-[140px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-brandnd/30 bg-brandnd/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300 backdrop-blur-md mb-4 shadow-sm">
            <Sparkles size={13} className="text-cyan-400 animate-spin-slow" />
            Industry Brand Architecture
          </div>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            Brand Design Across <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-white bg-clip-text text-transparent">Every Industry</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-400 sm:text-base">
            From consumer coffee roasteries to architectural living and precision clinical pharma, our tailored brand systems position ambitious companies at the pinnacle of their markets.
          </p>
        </div>

        {/* 3 Brand Design Cards Grid (Tailored directly to match the design language) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brandDesignProjects.map((project) => {
            const Icon = project.icon;
            return (
              <article
                key={project.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 backdrop-blur-xl transition-all duration-400 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                {/* Top subtle gradient flash on hover */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accentColor} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                <div className="relative z-10 flex flex-col">
                  {/* Card Image Container */}
                  {project.pageUrl ? (
                    <Link
                      href={project.pageUrl}
                      className="block relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-inner group-hover:border-white/20 transition-colors"
                    >
                      <Image
                        src={project.image}
                        alt={`${project.client} - ${project.businessType}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        priority={project.id === "gesha-coffee"}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080b14]/80 via-transparent to-black/10" />
                      <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/70 px-3 py-1 text-[11px] font-bold text-gray-200 backdrop-blur-md shadow-xs">
                        <Icon size={12} className="text-cyan-400" />
                        <span>{project.industry}</span>
                      </div>
                    </Link>
                  ) : (
                    <div
                      onClick={() => setSelectedProject(project)}
                      className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-inner group-hover:border-white/20 transition-colors cursor-pointer"
                    >
                      <Image
                        src={project.image}
                        alt={`${project.client} - ${project.businessType}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080b14]/80 via-transparent to-black/10" />
                      <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/70 px-3 py-1 text-[11px] font-bold text-gray-200 backdrop-blur-md shadow-xs">
                        <Icon size={12} className="text-cyan-400" />
                        <span>{project.industry}</span>
                      </div>
                    </div>
                  )}

                  {/* Content Body */}
                  <div className="mt-5">
                    <span className="block text-[11px] font-extrabold uppercase tracking-widest text-cyan-400/80">
                      Business Type
                    </span>
                    {project.pageUrl ? (
                      <Link href={project.pageUrl}>
                        <h3 className="mt-1 text-xl sm:text-2xl font-black uppercase tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                          {project.businessType}
                        </h3>
                      </Link>
                    ) : (
                      <h3
                        onClick={() => setSelectedProject(project)}
                        className="mt-1 text-xl sm:text-2xl font-black uppercase tracking-tight text-white group-hover:text-cyan-300 transition-colors cursor-pointer"
                      >
                        {project.businessType}
                      </h3>
                    )}
                    <p className="mt-1 text-xs font-semibold text-gray-400">
                      {project.client}
                    </p>

                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-gray-300 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Key Deliverables Chips */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.deliverables.slice(0, 3).map((item, idx) => (
                        <span
                          key={idx}
                          className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium text-gray-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Row: VISIT BRAND DESIGN & Interactive Button */}
                <div className="relative z-10 mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  {project.pageUrl ? (
                    <Link
                      href={project.pageUrl}
                      className="text-xs font-black uppercase italic tracking-wider text-rose-400 hover:text-rose-300 transition-colors"
                    >
                      VISIT BRAND DESIGN
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-black uppercase italic tracking-wider text-rose-400 hover:text-rose-300 transition-colors cursor-pointer text-left"
                    >
                      VISIT BRAND DESIGN
                    </button>
                  )}

                  {project.pageUrl ? (
                    <Link
                      href={project.pageUrl}
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white text-gray-950 px-4 py-2 text-xs font-bold transition-all duration-300 hover:scale-105 hover:bg-orange-500 hover:text-white hover:border-orange-500 cursor-pointer shadow-md active:scale-95"
                      aria-label={`Explore full brand design case study for ${project.client}`}
                    >
                      <span>Click here</span>
                      <ArrowRight size={13} strokeWidth={2.5} />
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white text-gray-950 px-4 py-2 text-xs font-bold transition-all duration-300 hover:scale-105 hover:bg-cyan-400 hover:text-black hover:border-cyan-400 cursor-pointer shadow-md active:scale-95"
                      aria-label={`View brand design case study for ${project.businessType}`}
                    >
                      <span>Click here</span>
                      <ArrowRight size={13} strokeWidth={2.5} />
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Deep-Dive Case Study Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
            onClick={() => setSelectedProject(null)}
          />

          {/* Modal Card */}
          <div className="relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/15 bg-[#0e1322] p-6 sm:p-8 md:p-10 text-white shadow-2xl animate-scaleUp">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-gray-300 transition-colors hover:bg-white/20 hover:text-white cursor-pointer"
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="flex flex-wrap items-center gap-3 pr-10">
              <span className="rounded-full bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-400">
                {selectedProject.businessType}
              </span>
              <span className="text-xs text-gray-400">
                Industry: <strong className="text-white">{selectedProject.industry}</strong>
              </span>
            </div>

            <h3 id="modal-project-title" className="mt-3 text-2xl sm:text-3xl font-black tracking-tight text-white">
              {selectedProject.client}
            </h3>
            <p className="mt-1 text-sm font-semibold text-gray-400 italic">
              &ldquo;{selectedProject.tagline}&rdquo;
            </p>

            {/* Showcase Image Banner */}
            <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/15 bg-black/50 shadow-xl">
              <Image
                src={selectedProject.image}
                alt={selectedProject.client}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover"
              />
            </div>

            {/* Details Grid */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column: Challenge & Solution */}
              <div className="space-y-6">
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-cyan-400">
                    <ShieldCheck size={16} />
                    The Strategic Challenge
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-300">
                    {selectedProject.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-cyan-400">
                    <Sparkles size={16} />
                    Astha Creatives Solution
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-300">
                    {selectedProject.solution}
                  </p>
                </div>

                {/* Color Palette Chips */}
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-cyan-400">
                    <Palette size={16} />
                    Brand Color Palette
                  </h4>
                  <div className="mt-2.5 flex items-center gap-3">
                    {selectedProject.palette.map((color, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div
                          className="h-6 w-6 rounded-full border border-white/20 shadow-sm"
                          style={{ backgroundColor: color.hex }}
                        />
                        <div className="text-[10px] text-gray-400 font-mono">
                          <span className="block font-semibold text-gray-300">{color.name}</span>
                          {color.hex}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Deliverables & Measurable Impact */}
              <div className="space-y-6">
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-cyan-400">
                    <Layers size={16} />
                    Key Deliverables Architecture
                  </h4>
                  <ul className="mt-2.5 space-y-2">
                    {selectedProject.deliverables.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-200"
                      >
                        <CheckCircle2 size={16} className="shrink-0 text-cyan-400 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact Highlight Box */}
                <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-brandnd/10 to-transparent p-5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-300">
                    <TrendingUp size={15} />
                    Measurable Result
                  </div>
                  <p className="mt-2 text-sm font-medium text-white leading-relaxed">
                    {selectedProject.impact}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-gray-400 text-center sm:text-left">
                Want an enterprise brand identity system engineered for your business?
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="rounded-full border border-white/20 px-5 py-2 text-xs font-semibold text-gray-300 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Close
                </button>
                {selectedProject.pageUrl && (
                  <Link
                    href={selectedProject.pageUrl}
                    className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-5 py-2 text-xs font-bold text-orange-400 hover:bg-orange-500 hover:text-white transition-all shadow-md"
                  >
                    <span>Open Case Study Page</span>
                    <ArrowRight size={13} />
                  </Link>
                )}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brandnd to-cyan-400 px-6 py-2 text-xs font-bold text-white shadow-md shadow-cyan-500/20 hover:scale-105 transition-transform"
                >
                  <span>Start a Brand Project</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BrandDesignShowcase;
