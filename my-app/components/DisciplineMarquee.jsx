"use client";

import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

const disciplines = [
  { label: "CREATIVE DESIGN", href: "/services/creative-design" },
  { label: "AI VIDEO CREATION", href: "/services/ai-video-creation" },
  { label: "NEXT.JS WEB ARCHITECTURE", href: "/services/website-development" },
  { label: "BUSINESS DATA ANALYTICS", href: "/services/data-analytics" },
  { label: "CONTENT DESIGN & REELS", href: "/services/content-design" },
  { label: "SEARCH ENGINE OPTIMIZATION", href: "/services/seo" },
  { label: "BRAND GUIDELINE SYSTEMS", href: "/services/brand-guidelines" },
  { label: "VIDEO EDITING & MOTION", href: "/services/video-editing" },
  { label: "SOCIAL MEDIA MANAGEMENT", href: "/services/social-media-management" },
];

const DisciplineMarquee = () => {
  return (
    <div
      aria-label="Core Agency Disciplines Ticker"
      className="relative z-20 w-full overflow-hidden border-y border-white/10 bg-[#05070f] py-4 select-none"
    >
      {/* Soft gradient masks on sides for seamless infinite fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#05070f] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#05070f] to-transparent" />

      <div className="animate-marquee-left flex items-center">
        {/* Double the list for infinite looping */}
        {[...disciplines, ...disciplines].map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className="group inline-flex items-center gap-4 px-6 text-xs font-bold uppercase tracking-[0.25em] text-white/60 transition-colors duration-300 hover:text-white"
          >
            <span className="group-hover:text-cyan-400 group-hover:scale-105 transition-all">
              {item.label}
            </span>
            <span className="text-brandnd/80 text-[10px]">✦</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DisciplineMarquee;
