"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeadNtext from "./HeadNtext";
import Image from "next/image";
import texture from "@/images/bg/texture.jpg";
import Link from "next/link";
import {
  Palette,
  BookOpen,
  Globe,
  Share2,
  Layers,
  Bot,
  Film,
  Video,
  BarChart3,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const portfolioProjects = [
  {
    id: 1,
    num: "01",
    service: "Creative Design",
    title: "Bespoke Brand Identity & Collaterals",
    client: "Fresh Pizza Co.",
    link: "/services/creative-design",
    icon: Palette,
    accent: "from-amber-400/20 via-orange-500/10 to-transparent",
    iconColor: "text-amber-400",
    borderHover: "hover:border-amber-400/40",
    description:
      "Full branding collateral suite, packaging assets, brand iconography, and conversion-focused print and digital marketing creatives.",
    tags: ["Brand Identity", "Packaging Suite", "Vector Design"],
    impact: "Complete Multi-Branch Brand Identity",
  },
  {
    id: 2,
    num: "02",
    service: "Brand Guidelines",
    title: "Corporate Visual Identity Manual",
    client: "Xeniusoft Tech",
    link: "/services/brand-guidelines",
    icon: BookOpen,
    accent: "from-blue-400/20 via-indigo-500/10 to-transparent",
    iconColor: "text-blue-400",
    borderHover: "hover:border-blue-400/40",
    description:
      "A complete enterprise brand system detailing typography standards, color governance, digital asset rules, and unified visual hierarchy.",
    tags: ["Design System", "Color Governance", "Typography Standards"],
    impact: "Unified Brand Assets Across 4 Subsidiaries",
  },
  {
    id: 3,
    num: "03",
    service: "Website Design",
    title: "Modern Company Portal & Portfolio",
    client: "B2G SOFT",
    link: "/services/website-development",
    icon: Globe,
    accent: "from-cyan-400/20 via-teal-500/10 to-transparent",
    iconColor: "text-cyan-400",
    borderHover: "hover:border-cyan-400/40",
    description:
      "Ultra-fast, responsive web portal built with Next.js, Headless CMS integration, dynamic animations, and Core Web Vitals excellence.",
    tags: ["Next.js & React", "Headless CMS", "100/100 Core Vitals"],
    impact: "Sub-Second Load & 2.4x Lead Inquiries",
  },
  {
    id: 4,
    num: "04",
    service: "Social Media Account Creation",
    title: "Omnichannel Brand Channel Launch",
    client: "Dew Drop Organics",
    link: "/services/social-media-management",
    icon: Share2,
    accent: "from-emerald-400/20 via-green-500/10 to-transparent",
    iconColor: "text-emerald-400",
    borderHover: "hover:border-emerald-400/40",
    description:
      "Cohesive profile architecture, verified vanity setups, branded covers, and optimized bio conversion funnels engineered for organic discovery.",
    tags: ["Channel Architecture", "Vanity URLs", "Bio Optimization"],
    impact: "Turnkey Launch Across 5 Core Channels",
  },
  {
    id: 5,
    num: "05",
    service: "Content Design",
    title: "High-Engagement Visuals & Reels Series",
    client: "Oven Fresh Bakery",
    link: "/services/content-design",
    icon: Layers,
    accent: "from-purple-400/20 via-pink-500/10 to-transparent",
    iconColor: "text-purple-400",
    borderHover: "hover:border-purple-400/40",
    description:
      "Monthly high-velocity visual package delivering 25 tailored static creatives, 4 animated reels, and viral caption storytelling.",
    tags: ["25 Creatives/mo", "4 Motion Reels", "Caption Storytelling"],
    impact: "+320% Organic Social Engagement",
  },
  {
    id: 6,
    num: "06",
    service: "AI Video Creation",
    title: "Cinematic Generative Product Teasers",
    client: "Cell Repair Global",
    link: "/services/ai-video-creation",
    icon: Bot,
    accent: "from-fuchsia-400/20 via-violet-500/10 to-transparent",
    iconColor: "text-fuchsia-400",
    borderHover: "hover:border-fuchsia-400/40",
    description:
      "Futuristic generative visuals, custom AI actor modeling, and synthetic voiceover campaigns delivering captivating product engagement.",
    tags: ["Generative AI Models", "Synthetic Voice", "4K Video"],
    impact: "3x Higher Retention vs Traditional Ads",
  },
  {
    id: 7,
    num: "07",
    service: "Motion Graphics Design",
    title: "Kinetic Logo Idents & Explainer Motion",
    client: "Wizzu Digital",
    link: "/services/video-editing",
    icon: Film,
    accent: "from-rose-400/20 via-red-500/10 to-transparent",
    iconColor: "text-rose-400",
    borderHover: "hover:border-rose-400/40",
    description:
      "Dynamic 2D/3D kinetic motion graphics built to captivate audiences across high-impact ad campaigns, social feeds, and corporate keynotes.",
    tags: ["2D/3D Kinetic Motion", "Logo Idents", "Custom Sound FX"],
    impact: "Broadcast-Grade 60fps Motion Suite",
  },
  {
    id: 8,
    num: "08",
    service: "Video Editing",
    title: "Commercial Post-Production & Color Grade",
    client: "Luatt Apparel",
    link: "/services/video-editing",
    icon: Video,
    accent: "from-sky-400/20 via-blue-500/10 to-transparent",
    iconColor: "text-sky-400",
    borderHover: "hover:border-sky-400/40",
    description:
      "Precision pacing, multi-track audio mastering, dynamic caption overlays, and cinematic color grading engineered for high-retention social videos.",
    tags: ["Color Grading", "Audio Mastering", "Vertical Shorts"],
    impact: "85%+ Average Watch-Through Rate",
  },
  {
    id: 9,
    num: "09",
    service: "Business Data Analytics",
    title: "Executive BI Dashboard & Growth Reports",
    client: "Bssofthub",
    link: "/services/data-analytics",
    icon: BarChart3,
    accent: "from-teal-400/20 via-cyan-500/10 to-transparent",
    iconColor: "text-teal-400",
    borderHover: "hover:border-teal-400/40",
    description:
      "Interactive real-time reporting dashboards harmonizing multi-channel ad spend, conversion attribution, web traffic metrics, and customer LTV.",
    tags: ["Interactive BI", "Attribution Models", "LTV Tracking"],
    impact: "Real-Time Decision Intelligence",
  },
];

const Portfolio = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".portfolio-item-card",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.06,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="portfolio"
      ref={containerRef}
      className="relative bg-[#080b14] py-24 md:py-32 overflow-hidden text-white"
      aria-label="Our Portfolio Showcase"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[500px] w-[500px] rounded-full bg-indigo-600/15 blur-[140px]" />

      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
        <HeadNtext
          heading="Our Portfolio"
          text="We believe great work is the foundation of an enduring partnership. Explore 9 curated showcase projects spanning our 9 individual services, each crafted with meticulous attentiveness, creative vision, and performance rigor."
          styleText="text-white"
        />

        {/* 9 Projects Editorial Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="portfolio-item-card group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] via-slate-900/40 to-white/[0.02] p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                {/* Subtle Ambient Glow on Hover */}
                <div
                  className={`pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br ${item.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />

                {/* Content Container */}
                <div className="relative z-10 flex flex-1 flex-col justify-between">
                  {/* Top Bar: Icon + Service Badge + Project Number */}
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 ${item.iconColor} transition-all duration-300 group-hover:scale-110 group-hover:border-white/20 shadow-inner`}
                        >
                          <IconComponent size={20} />
                        </div>
                        <div>
                          <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-950/60 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cyan-300 backdrop-blur-md">
                            {item.service}
                          </span>
                          <div className="mt-1 flex items-center gap-1.5 text-xs text-gray-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>Client:</span>
                            <span className="font-semibold text-white/90">
                              {item.client}
                            </span>
                          </div>
                        </div>
                      </div>
                      <span className="font-mono text-2xl font-black text-white/15 transition-colors duration-300 group-hover:text-cyan-400/40 select-none">
                        {item.num}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="mt-5 text-lg font-bold text-white transition-colors duration-200 group-hover:text-cyan-300 sm:text-xl leading-snug">
                      {item.title}
                    </h3>

                    {/* Narrative Description */}
                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-gray-400">
                      {item.description}
                    </p>

                    {/* Scope / Deliverable Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-gray-300 transition-colors group-hover:border-white/20 group-hover:bg-white/[0.06]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Impact Highlight Pill */}
                    <div className="mt-4 flex items-center gap-2 rounded-xl border-l-2 border-cyan-400 bg-cyan-950/20 px-3 py-2 text-xs text-gray-300">
                      <Sparkles size={13} className="shrink-0 text-cyan-400" />
                      <span className="truncate">
                        <strong className="font-semibold text-white">Impact:</strong>{" "}
                        {item.impact}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Action Row */}
                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                    <Link
                      href={item.link}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 transition-colors hover:text-white"
                    >
                      <span>View Service</span>
                      <ArrowRight
                        size={13}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </Link>

                    <Link
                      href="/contact?subject=portfolio-inquiry"
                      className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-semibold text-gray-300 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                    >
                      <span>Discuss Scope</span>
                      <ArrowUpRight size={12} className="text-gray-400" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Texture Overlay */}
      <Image
        className="pointer-events-none absolute left-0 top-0 h-full w-full object-cover opacity-5 z-10 mix-blend-overlay"
        src={texture}
        alt="Portfolio texture background"
        fill
      />
    </section>
  );
};

export default Portfolio;
