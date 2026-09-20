"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  ArrowUp,
  ArrowUpRight,
  Sparkles,
  Globe2,
  Compass,
  Layers,
  Zap,
  Award,
  MessageCircle,
} from "lucide-react";

const impactStats = [
  { value: "100+", label: "Projects Completed", sub: "Enterprise & Growth Ventures", icon: Layers },
  { value: "1,000+", label: "Design Deliverables", sub: "Logos, Systems & Packaging", icon: Compass },
  { value: "$10,000+", label: "Managed Ad Spend", sub: "Meta & Google ROI Campaigns", icon: Zap },
  { value: "100,000+", label: "Leads Generated", sub: "High-Intent Customer Acquisition", icon: Award },
  { value: "1,000,000+", label: "Audience Reach", sub: "Global Multi-Channel Footprint", icon: Globe2 },
];

const clientPartners = [
  "Xeniusoft",
  "B2G SOFT",
  "Dew drop",
  "Oven Fresh",
  "Fresh Pizza",
  "Cell Repair",
  "Luatt",
  "Wizzu",
  "Bssofthub",
];

const techStack = [
  "Next.js 15",
  "React 19",
  "Tailwind CSS",
  "Figma",
  "Adobe Creative Cloud",
  "Meta Ads API",
  "Google Analytics 4",
  "Vercel Edge",
];

const footerLinks = {
  company: [
    { name: "Home", href: "/" },
    { name: "Portfolio & Showcase", href: "/portfolio" },
    { name: "About Astha Creatives", href: "/about" },
    { name: "Meet Our Team", href: "/#team" },
    { name: "Why Choose Us", href: "/#why-us" },
    { name: "Client Feedback", href: "/#testimonials" },
    { name: "Contact & Consultation", href: "/contact" },
  ],
  services: [
    { name: "Creative Brand Design", href: "/services/creative-design" },
    { name: "Brand Identity Guidelines", href: "/services/brand-guidelines" },
    { name: "Website Development", href: "/services/website-development" },
    { name: "Content Design (Static & Motion)", href: "/services/content-design" },
    { name: "AI Video Creation", href: "/services/ai-video-creation" },
    { name: "Professional Video Editing", href: "/services/video-editing" },
    { name: "Social Media Management", href: "/services/social-media-management" },
    { name: "Business Data Analytics", href: "/services/data-analytics" },
    { name: "Search Engine Optimization (SEO)", href: "/services/seo" },
  ],
  caseStudies: [
    { name: "Gesha Coffee Roasters", href: "/portfolio/gesha-coffee", tag: "Coffee Shop / Packaging" },
    { name: "Alpha Health Farma (AHF)", href: "/portfolio/alpha-health-farma", tag: "Pharma / Tech" },
    { name: "Fresh Pizza Brand Suite", href: "/portfolio", tag: "F&B Visual Identity" },
    { name: "Xeniusoft Identity System", href: "/portfolio", tag: "Enterprise Software" },
    { name: "B2G SOFT Web Portal", href: "/portfolio", tag: "Digital Platform" },
    { name: "Oven Fresh Bakery", href: "/portfolio", tag: "Retail Branding" },
    { name: "View All 50+ Projects →", href: "/portfolio", tag: "Full Archive" },
  ],
};

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/asthacreative",
    icon: (
      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
    ),
  },
  {
    name: "Twitter / X",
    href: "https://x.com",
    icon: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/asthacreatives",
    icon: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
    ),
  },
];

const Footer = () => {

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative w-full bg-[#05070d] text-white overflow-hidden border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-brandnd/10 blur-[160px]" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[160px]" />
      <div className="pointer-events-none absolute left-1/3 bottom-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-[140px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 pb-12 max-w-7xl">
        
        {/* ============================================================ */}
        {/* 1. TOP CALL-TO-ACTION & STRATEGY BANNER                     */}
        {/* ============================================================ */}
        <div className="mb-14 rounded-3xl border border-white/10 bg-gradient-to-r from-white/[0.05] via-cyan-500/[0.03] to-brandnd/[0.05] p-6 sm:p-8 md:p-10 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300 mb-3.5 shadow-xs">
                <Sparkles size={13} className="text-cyan-400 animate-spin-slow" />
                Navigate Your Brand Forward
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white leading-tight">
                Ready to Turn Your Vision into an Unforgettable Market Leader?
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-gray-400 leading-relaxed max-w-xl">
                Every brand has a place in the digital world. From bespoke visual identity and high-converting web engineering to AI-driven video pipelines — we partner with ambitious founders to scale with purpose.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 shrink-0 w-full lg:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brandnd to-cyan-400 px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-cyan-500/25 hover:scale-105 hover:shadow-cyan-500/40 transition-all duration-200"
              >
                <span>Book Consultation</span>
                <ArrowUpRight size={16} />
              </Link>
              
              <Link
                href="/portfolio"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-xs sm:text-sm font-semibold text-gray-200 hover:bg-white/10 hover:text-white transition-colors"
              >
                <span>Explore Work (50+)</span>
              </Link>

              <a
                href="https://wa.me/8801711994608?text=Hello%20Astha%20Creatives%2C%20I%20would%20like%20to%20discuss%20a%20new%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-3.5 text-xs sm:text-sm font-semibold text-emerald-300 hover:bg-emerald-500/20 transition-colors"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <MessageCircle size={15} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 2. PROVEN IMPACT METRICS (FROM SPEC SHEET PAGE 1)             */}
        {/* ============================================================ */}
        <div className="mb-14 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-md">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-widest text-cyan-400/90 font-mono">
              Proven Track Record Across the Digital Ocean
            </span>
            <span className="hidden sm:inline-block text-[11px] text-gray-500 font-mono">
              Verified Agency Output & ROI
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {impactStats.map((stat, i) => {
              const IconComp = stat.icon;
              return (
                <div key={stat.label} className={`flex flex-col ${i > 0 ? "pt-4 md:pt-0 md:pl-5" : ""}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <IconComp size={15} className="text-cyan-400" />
                    <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-gray-200">
                    {stat.label}
                  </span>
                  <span className="text-[11px] text-gray-400 mt-0.5 leading-snug">
                    {stat.sub}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3. CLIENT PARTNERS ROSTER MARQUEE (FROM SPEC SHEET PAGE 6)    */}
        {/* ============================================================ */}
        <div className="mb-16 border-y border-white/10 py-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-widest text-gray-400 shrink-0">
              Trusted By Selected Industry Partners:
            </span>
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              {clientPartners.map((client) => (
                <span
                  key={client}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-gray-300 transition-colors hover:border-cyan-400/40 hover:text-white hover:bg-white/[0.08]"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>



        {/* ============================================================ */}
        {/* 5. MAIN 5-COLUMN NAVIGATION MATRIX                           */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 mb-16">
          
          {/* Column 1: Brand Info & Status (4 cols on lg) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block group">
                <div className="h-[46px] w-auto">
                  <Image
                    src="/astha-creatives-logo-1.png"
                    alt="Astha Creatives Logo"
                    width={180}
                    height={46}
                    className="h-full w-auto object-contain brightness-0 invert"
                  />
                </div>
              </Link>

              <p className="mt-4 max-w-sm text-xs sm:text-sm leading-relaxed text-gray-400">
                A premier creative design and digital technology agency. We don't just put your brand online — we help it find its direction across the vast digital ocean through unified creative, technology, and data strategy.
              </p>

              {/* Status & SLA Indicators */}
              <div className="mt-5 flex flex-col gap-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-[11px] font-bold text-emerald-400 w-fit">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Accepting New Enterprise Projects (Q4/Q1)</span>
                </div>

                <div className="inline-flex items-center gap-2 text-[11px] text-cyan-300/90 font-mono">
                  <Zap size={12} className="text-cyan-400" />
                  <span>Average discovery response time: &lt; 2 hours</span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-8">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-3 font-mono">
                Connect With Our Team
              </span>
              <div className="flex items-center gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-gray-300 transition-all duration-200 hover:border-cyan-400 hover:bg-cyan-400 hover:text-black hover:scale-110 shadow-sm"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-[18px] h-[18px]"
                      fill="currentColor"
                    >
                      {social.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Company (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-widest text-white border-b border-white/10 pb-2.5 font-mono">
              Company
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-gray-400 transition-all duration-200 hover:text-cyan-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Capabilities (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-widest text-white border-b border-white/10 pb-2.5 font-mono">
              Capabilities
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-gray-400 transition-all duration-200 hover:text-cyan-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Case Studies (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-widest text-white border-b border-white/10 pb-2.5 font-mono">
              Case Studies
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.caseStudies.map((study) => (
                <li key={study.name}>
                  <Link
                    href={study.href}
                    className="group block text-xs text-gray-400 hover:text-cyan-300 transition-colors"
                  >
                    <span className="block font-medium group-hover:text-white transition-colors truncate">
                      {study.name}
                    </span>
                    <span className="text-[10px] text-cyan-400/80 font-mono">
                      {study.tag}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Headquarters & Direct Touchpoints (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-widest text-white border-b border-white/10 pb-2.5 font-mono">
              Headquarters
            </h4>
            <ul className="mt-4 flex flex-col gap-3.5 text-xs text-gray-400">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-cyan-400 shrink-0 mt-0.5" />
                <span className="leading-snug text-gray-300">
                  Road 12, Sector 03, Uttara, Dhaka - 1230, Bangladesh
                </span>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-cyan-400 shrink-0" />
                <div className="flex flex-col">
                  <a
                    href="mailto:contact@redmun.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    contact@redmun.com
                  </a>
                  <a
                    href="mailto:info@asthacreatives.com"
                    className="text-gray-400 hover:text-white transition-colors text-[11px] mt-0.5"
                  >
                    info@asthacreatives.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Phone size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a
                    href="tel:+8801711994608"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +880 1711 994608
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5 pt-2 border-t border-white/10">
                <Clock size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[11px] text-gray-300 font-semibold">
                    Sun – Thu: 9:00 AM – 7:00 PM
                  </span>
                  <span className="text-[10px] text-gray-500 font-mono">
                    Timezone: GMT+6 (Global Support)
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 7. MODERN TECH STACK BADGES STRIP                           */}
        {/* ============================================================ */}
        <div className="py-4 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <span className="font-mono text-[10px] uppercase tracking-widest text-gray-400">
            Engineered With Modern Technology:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/5 bg-white/[0.02] px-2.5 py-0.5 text-[11px] font-mono text-gray-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* 8. SUB-FOOTER BOTTOM BAR & LEGAL POLICIES                   */}
        {/* ============================================================ */}
        <div className="mt-4 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-gray-400 sm:flex-row">
          <p className="text-center sm:text-left text-gray-400">
            &copy; {new Date().getFullYear()} Astha Creatives. All rights reserved. Crafted with precision for ambitious market leaders.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
            <Link
              href="/privacy"
              className="hover:text-cyan-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-cyan-300 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap.xml"
              className="hover:text-cyan-300 transition-colors"
            >
              Sitemap
            </Link>
            <Link
              href="/contact"
              className="hover:text-cyan-300 transition-colors"
            >
              Client Support
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-xs text-gray-300 hover:border-cyan-400 hover:text-cyan-300 transition-all cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
