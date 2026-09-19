"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Coffee,
  CheckCircle2,
  Layers,
  Palette,
  Eye,
  Maximize2,
  X,
  Share2,
  TrendingUp,
  Award,
  Leaf,
  Feather,
  ChevronRight,
} from "lucide-react";
import Gcta from "@/components/Gcta";

export default function GeshaCaseStudyContent() {
  const [activeLightboxImage, setActiveLightboxImage] = useState(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveLightboxImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="relative flex flex-col w-full overflow-hidden bg-[#080b14] text-white">
      {/* 1. Header / Breadcrumb & Top Bar */}
      <section className="relative pt-32 pb-12 md:pt-36 md:pb-16 border-b border-white/10 overflow-hidden">
        {/* Ambient Backlight */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[600px] rounded-full bg-orange-500/15 blur-[180px]" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Breadcrumb Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-cyan-300 transition-colors uppercase tracking-wider"
            >
              <ArrowLeft size={14} />
              <span>Back to Portfolio</span>
            </Link>

            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-xs font-bold text-orange-400 uppercase tracking-wider">
              <Coffee size={13} className="text-orange-400" />
              <span>Specialty Coffee & Roastery Case Study</span>
            </div>
          </div>

          {/* Hero Titles */}
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
              Gesha Coffee Roasters
            </h1>
            <p className="mt-5 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Visual Identity, Organic Botany Typography, and Sustainable Eco-Packaging Architecture for Modern Specialty Cafe Culture.
            </p>
          </div>

          {/* Project Metadata Matrix */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5 max-w-5xl mx-auto rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 backdrop-blur-xl">
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-400">Client</span>
              <span className="mt-1 block text-sm font-bold text-white">Gesha Coffee</span>
            </div>
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-400">Industry</span>
              <span className="mt-1 block text-sm font-bold text-white">Specialty Roastery</span>
            </div>
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-400">Services</span>
              <span className="mt-1 block text-sm font-bold text-white">Brand & Packaging</span>
            </div>
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-400">Duration</span>
              <span className="mt-1 block text-sm font-bold text-white">4 Weeks</span>
            </div>
            <div className="col-span-2 sm:col-span-4 lg:col-span-1">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-400">Year</span>
              <span className="mt-1 block text-sm font-bold text-orange-400 font-mono">2025 – 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Hero Cover Banner (Brand Identity Presentation) */}
      <section className="relative w-full py-12 md:py-16 bg-[#0a0e1a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div
            className="group relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/15 bg-black/60 shadow-2xl cursor-pointer"
            onClick={() =>
              setActiveLightboxImage({
                src: "/images/brand-design/gesha-materials/brand-identity-cover.jpg",
                title: "Gesha Coffee — Brand Identity Overview",
              })
            }
          >
            <Image
              src="/images/brand-design/gesha-materials/brand-identity-cover.jpg"
              alt="Gesha Coffee Brand Identity Overview"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-102"
            />
            <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md opacity-80 group-hover:opacity-100 transition-opacity">
              <Maximize2 size={13} />
              <span>Click to Expand</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Urban Cafe Storefront Architectural Mockup */}
      <section className="relative w-full py-16 md:py-24 bg-[#080b14] border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
              01. Atmospheric Presence
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-black text-white">
              Urban Cafe Storefront & Architecture
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
              Translating artisanal coffee roasting into an iconic brick-and-mortar cafe presence with high-contrast signage, architectural canopy lettering, and welcoming street appeal.
            </p>
          </div>

          <div
            className="group relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/15 bg-black shadow-2xl cursor-pointer"
            onClick={() =>
              setActiveLightboxImage({
                src: "/images/brand-design/gesha-materials/cafe-storefront.jpg",
                title: "Cafe Storefront Architectural Mockup",
              })
            }
          >
            <Image
              src="/images/brand-design/gesha-materials/cafe-storefront.jpg"
              alt="Gesha Cafe Storefront Architectural Mockup"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover transition-transform duration-700 group-hover:scale-102"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-400">Exterior Identity</span>
                <h3 className="text-lg sm:text-xl font-black text-white">Bespoke Storefront & Facade Awning</h3>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                <Maximize2 size={13} />
                <span>Expand View</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Strategic Narrative & Dual Cup Mockup */}
      <section className="relative w-full py-16 md:py-24 bg-[#0a0e1a] border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
                02. The Creative Strategy
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Balancing Artisan Precision with Modern Takeaway Rituals
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-gray-300">
                Gesha beans are revered worldwide for delicate floral aromas and exceptional cup clarity. The visual identity had to honor this heritage while surviving the fast-paced daily hustle of urban cafe commuters.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-orange-400 shrink-0 mt-1" />
                  <p className="text-xs sm:text-sm text-gray-300">
                    <strong className="text-white">Botanical Connection:</strong> Integrated organic coffee leaf and bean negative-space motifs right into the custom wordmark.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-orange-400 shrink-0 mt-1" />
                  <p className="text-xs sm:text-sm text-gray-300">
                    <strong className="text-white">Eco-Conscious Materials:</strong> Uncoated kraft packaging, water-based food-safe inks, and 100% recyclable cup stock.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-orange-400 shrink-0 mt-1" />
                  <p className="text-xs sm:text-sm text-gray-300">
                    <strong className="text-white">Scalable Architecture:</strong> Designed for coffee bags, takeout cups, bakery sleeves, storefronts, and digital mobile apps.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Mockup (Cup and Mug) */}
            <div className="lg:col-span-6">
              <div
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/15 bg-[#121829] shadow-2xl cursor-pointer p-4"
                onClick={() =>
                  setActiveLightboxImage({
                    src: "/images/brand-design/gesha-materials/cup-and-mug.png",
                    title: "Gesha Coffee — Takeout Cup & Dine-In Mug",
                  })
                }
              >
                <Image
                  src="/images/brand-design/gesha-materials/cup-and-mug.png"
                  alt="Takeout Paper Cup and Ceramic Mug Mockup"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/70 px-3 py-1 text-[11px] font-semibold text-gray-200 backdrop-blur-md">
                  <Maximize2 size={12} />
                  <span>Dine-In & Takeaway Pair</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Typography Rationale & The Anatomy of the Mark */}
      <section className="relative w-full py-16 md:py-24 bg-[#080b14] border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
              03. Wordmark Botany
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-white">
              The Anatomy of the Gesha Wordmark
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
              Every curve of the custom typography carries intent. We embedded subtle botanical cues directly into the letterforms to anchor the identity in coffee agriculture.
            </p>
          </div>

          {/* Typography Rationale Graphic */}
          <div
            className="group relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/15 bg-white shadow-2xl cursor-pointer mb-12"
            onClick={() =>
              setActiveLightboxImage({
                src: "/images/brand-design/gesha-materials/typography-rationale.jpg",
                title: "Anatomy of the Logo — Leaf & Bean Flourish",
              })
            }
          >
            <Image
              src="/images/brand-design/gesha-materials/typography-rationale.jpg"
              alt="Anatomy of the Logo — Leaf and Bean Typography Rationale"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-contain p-4 transition-transform duration-700 group-hover:scale-102"
            />
            <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-gray-300 bg-white/90 text-gray-900 px-3.5 py-1.5 text-xs font-bold shadow-md">
              <Maximize2 size={13} />
              <span>View Rationale Breakdown</span>
            </div>
          </div>

          {/* 3-Column Logo Construction Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="group relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-[#0e1322] p-4 cursor-pointer hover:border-orange-500/40 transition-colors"
              onClick={() =>
                setActiveLightboxImage({
                  src: "/images/brand-design/gesha-materials/logo-grid.jpg",
                  title: "Logo Grid & Construction Alignment",
                })
              }
            >
              <Image
                src="/images/brand-design/gesha-materials/logo-grid.jpg"
                alt="Full Logo Construction Grid"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 text-[11px] font-bold text-gray-400">
                01. Full Wordmark Grid Geometry
              </div>
            </div>

            <div
              className="group relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-[#0e1322] p-4 cursor-pointer hover:border-orange-500/40 transition-colors"
              onClick={() =>
                setActiveLightboxImage({
                  src: "/images/brand-design/gesha-materials/logo-grid-g.jpg",
                  title: "Letter 'g' Leaf Contour Grid",
                })
              }
            >
              <Image
                src="/images/brand-design/gesha-materials/logo-grid-g.jpg"
                alt="Letter 'g' Construction Grid"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 text-[11px] font-bold text-gray-400">
                02. Letter &lsquo;g&rsquo; Leaf Contour Geometry
              </div>
            </div>

            <div
              className="group relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-[#0e1322] p-4 cursor-pointer hover:border-orange-500/40 transition-colors"
              onClick={() =>
                setActiveLightboxImage({
                  src: "/images/brand-design/gesha-materials/logo-grid-e.jpg",
                  title: "Letter 'e' Bean Counter Grid",
                })
              }
            >
              <Image
                src="/images/brand-design/gesha-materials/logo-grid-e.jpg"
                alt="Letter 'e' Construction Grid"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 text-[11px] font-bold text-gray-400">
                03. Letter &lsquo;e&rsquo; Roasted Bean Counter
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Brand Color Palette & Typography Guidelines */}
      <section className="relative w-full py-16 md:py-24 bg-[#0a0e1a] border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Color Palette Card */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
                04. Color Standards
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-black text-white">
                Chromatic Governance
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-gray-400 leading-relaxed">
                Earth-tone pigments grounded in dark roast espresso and warm terracotta sunrise hues.
              </p>

              <div
                className="group relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/15 bg-black shadow-xl cursor-pointer"
                onClick={() =>
                  setActiveLightboxImage({
                    src: "/images/brand-design/gesha-materials/color-palette.jpg",
                    title: "Gesha Coffee Color Palette Standards",
                  })
                }
              >
                <Image
                  src="/images/brand-design/gesha-materials/color-palette.jpg"
                  alt="Color Palette Standards"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>

              {/* Hex Values Box */}
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <div className="h-6 w-full rounded-md bg-[#1C1917] border border-white/20 mb-2" />
                  <span className="block text-[11px] font-bold text-white">Espresso Noir</span>
                  <span className="text-[10px] text-gray-400 font-mono">#1C1917</span>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <div className="h-6 w-full rounded-md bg-[#E4572E] border border-white/20 mb-2" />
                  <span className="block text-[11px] font-bold text-white">Terracotta Sun</span>
                  <span className="text-[10px] text-gray-400 font-mono">#E4572E</span>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <div className="h-6 w-full rounded-md bg-[#F7F4EF] border border-white/20 mb-2" />
                  <span className="block text-[11px] font-bold text-white">Roast Cream</span>
                  <span className="text-[10px] text-gray-400 font-mono">#F7F4EF</span>
                </div>
              </div>
            </div>

            {/* Typography Hierarchy Card */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
                05. Typography Rules
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-black text-white">
                Typographic Hierarchy
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-gray-400 leading-relaxed">
                Clean geometric sans-serif (Poppins family) balanced with custom architectural headlines for rapid legibility across print and digital media.
              </p>

              <div
                className="group relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/15 bg-black shadow-xl cursor-pointer"
                onClick={() =>
                  setActiveLightboxImage({
                    src: "/images/brand-design/gesha-materials/typography-guide.jpg",
                    title: "Typography System & Hierarchy",
                  })
                }
              >
                <Image
                  src="/images/brand-design/gesha-materials/typography-guide.jpg"
                  alt="Typography Hierarchy Guide"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>

              {/* Hierarchy Mockup Box */}
              <div
                className="group relative mt-4 aspect-[16/5] w-full overflow-hidden rounded-xl border border-white/10 bg-black/40 cursor-pointer"
                onClick={() =>
                  setActiveLightboxImage({
                    src: "/images/brand-design/gesha-materials/heading-hierarchy.jpg",
                    title: "Headline Hierarchy Scale",
                  })
                }
              >
                <Image
                  src="/images/brand-design/gesha-materials/heading-hierarchy.jpg"
                  alt="Headline Hierarchy Scale"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-contain p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Pattern Architecture (Light & Dark Repeats) */}
      <section className="relative w-full py-16 md:py-24 bg-[#080b14] border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
              06. Pattern Engine
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-white">
              Modular Repeat Pattern Architecture
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
              Derived from the circular geometry of coffee roasters and leaf silhouettes, these modular repeat patterns add brand distinction across tissue wraps, cup bands, and collateral linings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="group relative aspect-[2/1] w-full overflow-hidden rounded-2xl border border-white/15 bg-black shadow-xl cursor-pointer"
              onClick={() =>
                setActiveLightboxImage({
                  src: "/images/brand-design/gesha-materials/pattern-dark.jpg",
                  title: "Dark Circular Repeat Pattern",
                })
              }
            >
              <Image
                src="/images/brand-design/gesha-materials/pattern-dark.jpg"
                alt="Dark Circular Repeat Pattern"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 rounded-full bg-black/70 px-3 py-1 text-[11px] font-bold text-gray-200 backdrop-blur-md">
                Dark Motif Repeat
              </div>
            </div>

            <div
              className="group relative aspect-[2/1] w-full overflow-hidden rounded-2xl border border-white/15 bg-white shadow-xl cursor-pointer"
              onClick={() =>
                setActiveLightboxImage({
                  src: "/images/brand-design/gesha-materials/pattern-light.jpg",
                  title: "Light Precision Grid Pattern",
                })
              }
            >
              <Image
                src="/images/brand-design/gesha-materials/pattern-light.jpg"
                alt="Light Precision Grid Pattern"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 rounded-full bg-white/90 text-gray-900 px-3 py-1 text-[11px] font-bold shadow-md">
                Light Technical Grid
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Packaging Blueprints & Technical Cup Specifications */}
      <section className="relative w-full py-16 md:py-24 bg-[#0a0e1a] border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
              07. Packaging Engineering
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-white">
              Technical Blueprints & Cup Die-Cut Standards
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
              Industrial print standards engineered for 8oz, 12oz, and 16oz double-wall insulated paper cups, complete with bleed margins and registration marks.
            </p>
          </div>

          {/* Blueprint Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/15 bg-black/60 shadow-xl cursor-pointer p-4"
              onClick={() =>
                setActiveLightboxImage({
                  src: "/images/brand-design/gesha-materials/cup-blueprint.png",
                  title: "Takeaway Cup Die-Cut Wrap Graphic",
                })
              }
            >
              <Image
                src="/images/brand-design/gesha-materials/cup-blueprint.png"
                alt="Takeaway Cup Die-Cut Blueprint"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-4 group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 rounded-full bg-black/70 px-3 py-1 text-[11px] font-bold text-gray-200 backdrop-blur-md">
                Die-Cut Wrap Layout Blueprint
              </div>
            </div>

            <div
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/15 bg-white shadow-xl cursor-pointer p-4"
              onClick={() =>
                setActiveLightboxImage({
                  src: "/images/brand-design/gesha-materials/cup-technical-specs.png",
                  title: "Dimensional Cup Specifications & Calipers",
                })
              }
            >
              <Image
                src="/images/brand-design/gesha-materials/cup-technical-specs.png"
                alt="Dimensional Technical Cup Specifications"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-4 group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 rounded-full bg-white/90 text-gray-900 px-3 py-1 text-[11px] font-bold shadow-md">
                Industrial Calibration Specs
              </div>
            </div>
          </div>

          {/* Rendered Cups (Hero Orange Cup & Falling Cups) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="group relative aspect-square w-full overflow-hidden rounded-2xl border border-white/15 bg-[#141a2b] shadow-xl cursor-pointer p-6"
              onClick={() =>
                setActiveLightboxImage({
                  src: "/images/brand-design/gesha-materials/gesha-hero-cup.png",
                  title: "Gesha Coffee Signature Terracotta Takeaway Cup",
                })
              }
            >
              <Image
                src="/images/brand-design/gesha-materials/gesha-hero-cup.png"
                alt="Gesha Signature Terracotta Cup"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 text-xs font-bold text-white">
                Signature 12oz & 16oz Terracotta Cup
              </div>
            </div>

            <div
              className="group relative aspect-square w-full overflow-hidden rounded-2xl border border-white/15 bg-black shadow-xl cursor-pointer"
              onClick={() =>
                setActiveLightboxImage({
                  src: "/images/brand-design/gesha-materials/cups-falling.jpg",
                  title: "Dynamic Tumbling Cups Composition",
                })
              }
            >
              <Image
                src="/images/brand-design/gesha-materials/cups-falling.jpg"
                alt="Dynamic Cups In Motion Mockup"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
                Packaging in Motion
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Takeaway Suite: Carrier, Pastry Pouch, and Boutique Bag */}
      <section className="relative w-full py-16 md:py-24 bg-[#080b14] border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
              08. Retail & Collaterals
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-white">
              The Takeaway Experience Suite
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
              Extending the brand touchpoint beyond the beverage with die-cut cup carriers, greaseproof pastry pouches, and high-tensile shopping bags.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1. Cup Carrier */}
            <div
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-[#0f1424] p-5 shadow-xl cursor-pointer hover:border-orange-500/40 transition-all hover:-translate-y-1"
              onClick={() =>
                setActiveLightboxImage({
                  src: "/images/brand-design/gesha-materials/cup-holder.png",
                  title: "Dual Takeaway Cup Carrier Holder",
                })
              }
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-black/40">
                <Image
                  src="/images/brand-design/gesha-materials/cup-holder.png"
                  alt="Dual Takeaway Coffee Cup Holder"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400">Packaging</span>
                <h4 className="mt-1 text-base font-bold text-white">Die-Cut Dual Cup Carrier</h4>
                <p className="mt-1.5 text-xs text-gray-400 leading-relaxed">
                  Heavy-ply kraft paperboard carrier engineered for secure two-cup transport without spills.
                </p>
              </div>
            </div>

            {/* 2. Pastry Pouch */}
            <div
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-[#0f1424] p-5 shadow-xl cursor-pointer hover:border-orange-500/40 transition-all hover:-translate-y-1"
              onClick={() =>
                setActiveLightboxImage({
                  src: "/images/brand-design/gesha-materials/pastry-bag.png",
                  title: "Branded Bakery & Pastry Pouch",
                })
              }
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-black/40">
                <Image
                  src="/images/brand-design/gesha-materials/pastry-bag.png"
                  alt="Bakery & Croissant Branded Pouch"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400">Bakery Collateral</span>
                <h4 className="mt-1 text-base font-bold text-white">Greaseproof Pastry Pouch</h4>
                <p className="mt-1.5 text-xs text-gray-400 leading-relaxed">
                  Food-grade translucent glassine wrapper branded with minimal monochrome wordmark.
                </p>
              </div>
            </div>

            {/* 3. Shopping Bag */}
            <div
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-[#0f1424] p-5 shadow-xl cursor-pointer hover:border-orange-500/40 transition-all hover:-translate-y-1"
              onClick={() =>
                setActiveLightboxImage({
                  src: "/images/brand-design/gesha-materials/shopping-bag.png",
                  title: "Boutique Retail Shopping Bag",
                })
              }
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-black/40">
                <Image
                  src="/images/brand-design/gesha-materials/shopping-bag.png"
                  alt="Boutique Paper Shopping Bag Mockup"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400">Merchandise</span>
                <h4 className="mt-1 text-base font-bold text-white">Boutique Retail Shopping Bag</h4>
                <p className="mt-1.5 text-xs text-gray-400 leading-relaxed">
                  Reinforced handle paper shopping bag designed for whole-bean retail coffee bag purchases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Measurable Business Results */}
      <section className="relative w-full py-16 md:py-20 bg-[#0a0e1a] border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
              The Real-World Impact
            </span>
            <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">
              Proven Commercial Results
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-md">
              <span className="block text-4xl font-black text-orange-400 font-mono">+140%</span>
              <span className="mt-2 block text-xs font-bold text-white uppercase tracking-wider">Packaging Recall</span>
              <p className="mt-1 text-xs text-gray-400">Surge in branded takeaway recognition across regional reviews</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-md">
              <span className="block text-4xl font-black text-cyan-400 font-mono">3.2x</span>
              <span className="mt-2 block text-xs font-bold text-white uppercase tracking-wider">Social Mentions</span>
              <p className="mt-1 text-xs text-gray-400">Unboxing and cup photos shared organically across Instagram</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-md">
              <span className="block text-4xl font-black text-emerald-400 font-mono">+45%</span>
              <span className="mt-2 block text-xs font-bold text-white uppercase tracking-wider">Repeat Orders</span>
              <p className="mt-1 text-xs text-gray-400">Increase in return commuter traffic post-storefront launch</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-md">
              <span className="block text-4xl font-black text-indigo-400 font-mono">100%</span>
              <span className="mt-2 block text-xs font-bold text-white uppercase tracking-wider">Eco-Certified</span>
              <p className="mt-1 text-xs text-gray-400">Fully biodegradable and plastic-free compliant packaging</p>
            </div>
          </div>

          {/* Next Case Study Navigation Card */}
          <div className="mt-16 rounded-3xl border border-white/15 bg-gradient-to-r from-cyan-500/10 via-brandnd/10 to-transparent p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Explore More Case Studies
              </span>
              <h3 className="mt-1 text-xl sm:text-2xl font-black text-white">
                Next: Alpha Health Farma (Medical Equipment)
              </h3>
              <p className="mt-1 text-xs text-gray-400">
                Clinical brand architecture, certified pharmaceutical packaging, and medical device systems.
              </p>
            </div>

            <Link
              href="/portfolio/alpha-health-farma"
              className="inline-flex items-center gap-2 rounded-full bg-white text-gray-950 px-6 py-3 text-xs font-bold shadow-lg hover:bg-cyan-400 hover:text-black transition-all hover:scale-105 shrink-0"
            >
              <span>View AHF Case Study</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 11. Interactive Lightbox Modal */}
      {activeLightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn"
          onClick={() => setActiveLightboxImage(null)}
        >
          <button
            type="button"
            onClick={() => setActiveLightboxImage(null)}
            className="absolute right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 cursor-pointer"
            aria-label="Close image lightbox"
          >
            <X size={22} />
          </button>

          <div
            className="relative max-w-6xl max-h-[88vh] w-full h-[80vh] overflow-hidden rounded-2xl border border-white/15"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeLightboxImage.src}
              alt={activeLightboxImage.title || "Expanded image view"}
              fill
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-contain"
            />
            {activeLightboxImage.title && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-black/80 px-5 py-2 text-xs font-semibold text-gray-200 backdrop-blur-md">
                {activeLightboxImage.title}
              </div>
            )}
          </div>
        </div>
      )}

      {/* 12. Global Call to Action */}
      <div data-theme="dark">
        <Gcta />
      </div>
    </main>
  );
}
