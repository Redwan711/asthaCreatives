"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Layers,
  Palette,
  Globe,
  Film,
  BarChart3,
  CheckCircle2,
  TrendingUp,
  Filter,
} from "lucide-react";
import BrandDesignShowcase from "@/components/BrandDesignShowcase";
import Gcta from "@/components/Gcta";

const allPortfolioItems = [
  {
    id: 1,
    category: "brand",
    categoryLabel: "Brand Identity",
    title: "Bespoke Brand Identity & Collaterals",
    client: "Fresh Pizza Co.",
    link: "/services/creative-design",
    description:
      "Full branding collateral suite, packaging assets, brand iconography, and conversion-focused print and digital marketing creatives.",
    tags: ["Brand Identity", "Packaging Suite", "Vector Design"],
    impact: "Complete Multi-Branch Brand Identity",
    accent: "from-amber-400/20 via-orange-500/10 to-transparent",
    badgeColor: "bg-amber-400/10 text-amber-400 border-amber-400/20",
  },
  {
    id: 2,
    category: "brand",
    categoryLabel: "Brand Guidelines",
    title: "Corporate Visual Identity Manual",
    client: "Xeniusoft Tech",
    link: "/services/brand-guidelines",
    description:
      "A complete enterprise brand system detailing typography standards, color governance, digital asset rules, and unified visual hierarchy.",
    tags: ["Design System", "Color Governance", "Typography Standards"],
    impact: "Unified Brand Assets Across 4 Subsidiaries",
    accent: "from-blue-400/20 via-indigo-500/10 to-transparent",
    badgeColor: "bg-blue-400/10 text-blue-400 border-blue-400/20",
  },
  {
    id: 3,
    category: "web",
    categoryLabel: "Website Development",
    title: "Modern Company Portal & Portfolio",
    client: "B2G SOFT",
    link: "/services/website-development",
    description:
      "Ultra-fast, responsive web portal built with Next.js, Headless CMS integration, dynamic animations, and Core Web Vitals excellence.",
    tags: ["Next.js & React", "Headless CMS", "100/100 Core Vitals"],
    impact: "Sub-Second Load & 2.4x Lead Inquiries",
    accent: "from-cyan-400/20 via-teal-500/10 to-transparent",
    badgeColor: "bg-cyan-400/10 text-cyan-400 border-cyan-400/20",
  },
  {
    id: 4,
    category: "motion",
    categoryLabel: "Social & Content",
    title: "Omnichannel Brand Channel Launch",
    client: "Dew Drop Organics",
    link: "/services/social-media-management",
    description:
      "Cohesive profile architecture, verified vanity setups, branded covers, and optimized bio conversion funnels engineered for organic discovery.",
    tags: ["Channel Architecture", "Vanity URLs", "Bio Optimization"],
    impact: "Turnkey Launch Across 5 Core Channels",
    accent: "from-emerald-400/20 via-green-500/10 to-transparent",
    badgeColor: "bg-emerald-400/10 text-emerald-400 border-emerald-400/20",
  },
  {
    id: 5,
    category: "motion",
    categoryLabel: "Content Design",
    title: "High-Engagement Visuals & Reels Series",
    client: "Oven Fresh Bakery",
    link: "/services/content-design",
    description:
      "Monthly high-velocity visual package delivering 25 tailored static creatives, 4 animated reels, and viral caption storytelling.",
    tags: ["25 Creatives/mo", "4 Motion Reels", "Caption Storytelling"],
    impact: "+320% Organic Social Engagement",
    accent: "from-purple-400/20 via-pink-500/10 to-transparent",
    badgeColor: "bg-purple-400/10 text-purple-400 border-purple-400/20",
  },
  {
    id: 6,
    category: "motion",
    categoryLabel: "AI Video Creation",
    title: "Cinematic Generative Product Teasers",
    client: "Cell Repair Global",
    link: "/services/ai-video-creation",
    description:
      "Futuristic generative visuals, custom AI actor modeling, and synthetic voiceover campaigns delivering captivating product engagement.",
    tags: ["Generative AI Models", "Synthetic Voice", "4K Video"],
    impact: "3x Higher Retention vs Traditional Ads",
    accent: "from-fuchsia-400/20 via-violet-500/10 to-transparent",
    badgeColor: "bg-fuchsia-400/10 text-fuchsia-400 border-fuchsia-400/20",
  },
  {
    id: 7,
    category: "motion",
    categoryLabel: "Motion Graphics",
    title: "Kinetic Logo Idents & Explainer Motion",
    client: "Wizzu Digital",
    link: "/services/video-editing",
    description:
      "Dynamic 2D/3D kinetic motion graphics built to captivate audiences across high-impact ad campaigns, social feeds, and corporate keynotes.",
    tags: ["2D/3D Kinetic Motion", "Logo Idents", "Custom Sound FX"],
    impact: "Broadcast-Grade 60fps Motion Suite",
    accent: "from-rose-400/20 via-red-500/10 to-transparent",
    badgeColor: "bg-rose-400/10 text-rose-400 border-rose-400/20",
  },
  {
    id: 8,
    category: "motion",
    categoryLabel: "Video Editing",
    title: "Commercial Post-Production & Color Grade",
    client: "Luatt Apparel",
    link: "/services/video-editing",
    description:
      "Precision pacing, multi-track audio mastering, dynamic caption overlays, and cinematic color grading engineered for high-retention social videos.",
    tags: ["Color Grading", "Audio Mastering", "Vertical Shorts"],
    impact: "85%+ Average Watch-Through Rate",
    accent: "from-sky-400/20 via-blue-500/10 to-transparent",
    badgeColor: "bg-sky-400/10 text-sky-400 border-sky-400/20",
  },
  {
    id: 9,
    category: "analytics",
    categoryLabel: "Data Analytics",
    title: "Executive BI Dashboard & Growth Reports",
    client: "Bssofthub",
    link: "/services/data-analytics",
    description:
      "Interactive real-time reporting dashboards harmonizing multi-channel ad spend, conversion attribution, web traffic metrics, and customer LTV.",
    tags: ["Interactive BI", "Attribution Models", "LTV Tracking"],
    impact: "Real-Time Decision Intelligence",
    accent: "from-teal-400/20 via-cyan-500/10 to-transparent",
    badgeColor: "bg-teal-400/10 text-teal-400 border-teal-400/20",
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "brand", label: "Brand Identity & Architecture" },
  { id: "web", label: "Web & Digital Platforms" },
  { id: "motion", label: "Motion, Video & Content" },
  { id: "analytics", label: "Business Intelligence" },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".portfolio-hero-reveal",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "all",
        },
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const filteredProjects =
    activeCategory === "all"
      ? allPortfolioItems
      : allPortfolioItems.filter((item) => item.category === activeCategory);

  return (
    <main className="relative flex flex-col w-full overflow-hidden bg-[#080b14] text-white">
      {/* 1. Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-white/10"
      >
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute left-1/2 -top-24 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[160px]" />
        <div className="pointer-events-none absolute right-0 top-1/2 h-[400px] w-[400px] rounded-full bg-brandnd/20 blur-[150px]" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Breadcrumb */}
          <div className="portfolio-hero-reveal flex items-center justify-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-6">
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-cyan-400 font-bold">Portfolio</span>
          </div>

          <div className="mx-auto max-w-4xl text-center">
            <div className="portfolio-hero-reveal inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300 backdrop-blur-md mb-6 shadow-sm">
              <Sparkles size={13} className="text-cyan-400 animate-spin-slow" />
              Curated Work & Case Library
            </div>

            <h1 className="portfolio-hero-reveal text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
              Crafted for Distinction.{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-white bg-clip-text text-transparent">
                Engineered for Growth.
              </span>
            </h1>

            <p className="portfolio-hero-reveal mt-6 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Explore how Astha Creatives transforms ambitious ventures through bespoke brand architecture, digital flagships, high-retention video production, and business intelligence.
            </p>

            {/* Quick Metrics Bar */}
            <div className="portfolio-hero-reveal mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-3xl mx-auto">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md text-center">
                <span className="block text-2xl sm:text-3xl font-black text-cyan-400 font-mono">50+</span>
                <span className="mt-1 block text-xs text-gray-400 font-semibold">Brand Identities</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md text-center">
                <span className="block text-2xl sm:text-3xl font-black text-indigo-400 font-mono">98%</span>
                <span className="mt-1 block text-xs text-gray-400 font-semibold">Client Retention</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md text-center">
                <span className="block text-2xl sm:text-3xl font-black text-emerald-400 font-mono">15+</span>
                <span className="mt-1 block text-xs text-gray-400 font-semibold">Industries Served</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md text-center">
                <span className="block text-2xl sm:text-3xl font-black text-rose-400 font-mono">100%</span>
                <span className="mt-1 block text-xs text-gray-400 font-semibold">IP Ownership</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Brand Design Deployments Section (The requested Coffee Shop, Real Estate, Medical Equipment showcase) */}
      <BrandDesignShowcase />

      {/* 3. Comprehensive Multi-Category Project Catalog */}
      <section className="relative w-full py-20 md:py-28 bg-[#090d18] border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-cyan-400">
              <Layers size={14} />
              Full Production Library
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl text-white">
              Explore Our Multidisciplinary Portfolio
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-400 sm:text-base">
              Filter by service discipline to inspect our live platforms, corporate manuals, video campaigns, and BI dashboards.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-brandnd to-cyan-400 text-white shadow-md shadow-cyan-500/20 scale-105"
                    : "border border-white/10 bg-white/[0.04] text-gray-400 hover:border-white/20 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/5"
              >
                {/* Glow accent */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                <div className="relative z-10 flex flex-col">
                  <div className="flex items-center justify-between">
                    <span
                      className={`rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${project.badgeColor}`}
                    >
                      {project.categoryLabel}
                    </span>
                    <span className="text-xs font-semibold text-gray-400">
                      {project.client}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-gray-400">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[11px] font-medium text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                    <TrendingUp size={13} />
                    <span>{project.impact}</span>
                  </div>

                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>View Service</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Global Call To Action */}
      <div data-theme="dark">
        <Gcta />
      </div>
    </main>
  );
}
