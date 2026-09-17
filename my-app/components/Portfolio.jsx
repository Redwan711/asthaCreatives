"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeadNtext from "./HeadNtext";
import Image from "next/image";
import texture from "@/images/bg/texture.jpg";
import designImg from "@/images/other/design.jpg";
import marketingImg from "@/images/other/brand-creation.jpg";
import webImg from "@/images/other/web.jpg";
import dataImg from "@/images/other/data.jpg";
import smHeroImg from "@/images/other/social-media-management-hero.jpg";
import whyImg from "@/images/other/why-choose-us.jpg";
import Link from "next/link";
import { ExternalLink, Sparkles, FolderKanban } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const portfolioProjects = [
  {
    id: 1,
    service: "Creative Design",
    title: "Bespoke Brand Identity & Collaterals",
    client: "Fresh Pizza Co.",
    src: designImg,
    alt: "Creative Design Showcase",
    link: "/services/creative-design",
    description:
      "Full branding collateral suite, packaging assets, and conversion-focused print and digital creatives.",
  },
  {
    id: 2,
    service: "Brand Guidelines",
    title: "Corporate Visual Identity Manual",
    client: "Xeniusoft Tech",
    src: marketingImg,
    alt: "Brand Guideline Development Showcase",
    link: "/services/creative-design",
    description:
      "A complete brand system detailing typography standards, color governance, and unified visual hierarchy.",
  },
  {
    id: 3,
    service: "Website Design",
    title: "Modern Company Portal & Portfolio",
    client: "B2G SOFT",
    src: webImg,
    alt: "Website Design Showcase",
    link: "/services/website-development",
    description:
      "Ultra-fast, responsive web portal built with modern web frameworks, dynamic animations, and SEO excellence.",
  },
  {
    id: 4,
    service: "Social Media Account Creation",
    title: "Omnichannel Brand Channel Launch",
    client: "Dew Drop Organics",
    src: smHeroImg,
    alt: "Social Media Account Creation Showcase",
    link: "/services/social-media-management",
    description:
      "Cohesive profile architecture, vanity setups, branded covers, and optimized bio conversion funnels.",
  },
  {
    id: 5,
    service: "Content Design",
    title: "High-Engagement Visuals & Reels Series",
    client: "Oven Fresh Bakery",
    src: designImg,
    alt: "Content Design Showcase",
    link: "/services/social-media-management",
    description:
      "Monthly package delivering 25 static creatives, 4 motion reels, and viral caption storytelling.",
  },
  {
    id: 6,
    service: "AI Video Creation",
    title: "Cinematic Generative Product Teasers",
    client: "Cell Repair Global",
    src: smHeroImg,
    alt: "AI Video Creation Showcase",
    link: "/services/ai-video-creation",
    description:
      "Futuristic generative visuals and synthetic voiceover campaigns delivering 3x engagement benchmarks.",
  },
  {
    id: 7,
    service: "Motion Graphics Design",
    title: "Kinetic Logo Idents & Explainer Motion",
    client: "Wizzu Digital",
    src: whyImg,
    alt: "Motion Graphics Design Showcase",
    link: "/services/video-editing",
    description:
      "Dynamic 2D/3D motion graphics built to captivate audiences across social feeds and corporate keynotes.",
  },
  {
    id: 8,
    service: "Video Editing",
    title: "Commercial Post-Production & Color Grade",
    client: "Luatt Apparel",
    src: whyImg,
    alt: "Video Editing Showcase",
    link: "/services/video-editing",
    description:
      "Pacing, audio mastering, dynamic caption overlays, and color grading for high-retention social videos.",
  },
  {
    id: 9,
    service: "Business Data Analytics",
    title: "Executive BI Dashboard & Growth Reports",
    client: "Bssofthub",
    src: dataImg,
    alt: "Business Data Analytics Showcase",
    link: "/services/data-analytics",
    description:
      "Interactive real-time reporting dashboards integrating ad-spend, traffic metrics, and customer lifetime value.",
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const containerRef = useRef(null);

  const filteredItems =
    filter === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.service === filter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fix #5: Clip-path reveal animation for visual variety
      gsap.fromTo(
        ".portfolio-item-card",
        { clipPath: "inset(100% 0 0 0)", opacity: 0 },
        {
          clipPath: "inset(0% 0 0 0)",
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, [filter]);

  return (
    <section
      id="portfolio"
      ref={containerRef}
      className="bg-gray-950 relative py-20 md:py-28"
      aria-label="Our Portfolio Showcase"
    >
      <div className="container relative mx-auto px-4 z-20 sm:px-6 lg:px-8">
        <HeadNtext
          heading="Our Portfolio"
          text="We believe great work is the foundation of an enduring partnership. Explore 9 curated showcase projects spanning our 9 individual services—each crafted with meticulous attentiveness, creative vision, and performance rigor."
          styleText="text-white"
        />

        {/* 9 Projects Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="portfolio-item-card group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brandnd/40 hover:bg-white/[0.08] hover:shadow-xl"
            >
              {/* Media Thumbnail */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 transition-opacity group-hover:opacity-60" />

                {/* Service Tag */}
                <span className="absolute top-3 left-3 rounded-full bg-brand/80 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                  {item.service}
                </span>

                {/* Client badge */}
                <span className="absolute bottom-3 left-3 text-xs font-semibold text-white/90">
                  Client: {item.client}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-brandnd transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-400 sm:text-sm">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brandnd hover:text-white transition-colors"
                  >
                    View Related Service
                    <ExternalLink size={13} />
                  </Link>

                  <Link
                    href="/contact?subject=portfolio-inquiry"
                    className="text-xs font-semibold text-gray-500 hover:text-white"
                  >
                    Discuss Project
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-0 top-0 z-10 size-full bg-black/5 pointer-events-none" />
      <Image
        className="pointer-events-none absolute left-0 top-0 h-full w-full object-cover opacity-10 z-15 mix-blend-overlay"
        src={texture}
        alt="Portfolio texture background"
        fill
      />
    </section>
  );
};

export default Portfolio;
