"use client";

import React, { useState } from "react";
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
  CheckCircle2,
  Globe2,
  Send,
  Lock,
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
    href: "https://facebook.com",
    icon: (
      <path d="M13.5 9H15V6.5h-1.75C11.57 6.5 10.5 7.57 10.5 9.25V11H9v2.5h1.5V18h2.5v-4.5H15l.5-2.5h-2v-1.25c0-.41.34-.75.75-.75z" />
    ),
  },
  {
    name: "Twitter / X",
    href: "https://x.com",
    icon: (
      <path d="M21 6.4a6.8 6.8 0 0 1-1.9.53 3.3 3.3 0 0 0 1.46-1.85 6.6 6.6 0 0 1-2.1.8 3.3 3.3 0 0 0-5.63 3.01A9.36 9.36 0 0 1 5.9 5.6a3.3 3.3 0 0 0 1.02 4.4 3.3 3.3 0 0 1-1.5-.41v.04a3.3 3.3 0 0 0 2.65 3.24 3.3 3.3 0 0 1-1.49.06 3.3 3.3 0 0 0 3.08 2.3A6.63 6.63 0 0 1 3 16.58a9.3 9.3 0 0 0 5.06 1.48c6.07 0 9.4-5.03 9.4-9.4l-.01-.43A6.7 6.7 0 0 0 21 6.4z" />
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <>
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="4.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle
          cx="12"
          cy="12"
          r="3.6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle cx="16.5" cy="7.5" r="0.9" />
      </>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <path d="M6.94 8.5H4.56V19h2.38V8.5zM5.75 4.5a1.38 1.38 0 1 0 0 2.76 1.38 1.38 0 0 0 0-2.76zM19.5 19h-2.38v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V19H10.7V8.5h2.28v1.43h.03c.32-.6 1.1-1.23 2.27-1.23 2.43 0 2.88 1.6 2.88 3.68V19z" />
    ),
  },
];

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) return;
    setIsSubscribed(true);
    setNewsletterEmail("");
  };

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
        {/* 4. NEWSLETTER & AGENCY STRATEGY BRIEFING                    */}
        {/* ============================================================ */}
        <div className="mb-16 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Compass size={18} className="text-cyan-400" />
                Subscribe to The Astha Creatives Growth Brief
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-gray-400 leading-relaxed">
                Bi-weekly executive breakdowns on brand identity strategy, high-conversion landing page design, AI video workflows, and performance ad scaling.
              </p>
            </div>

            <div className="w-full lg:w-auto shrink-0">
              {isSubscribed ? (
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/15 px-5 py-2.5 text-xs font-semibold text-emerald-300">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  <span>You're on the briefing list! Check your inbox soon.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your work email address"
                    required
                    className="w-full sm:w-72 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-hidden focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-1.5 rounded-full bg-cyan-400 px-5 py-2.5 text-xs font-bold text-black hover:bg-cyan-300 hover:scale-105 transition-all shadow-md shadow-cyan-400/20 cursor-pointer"
                  >
                    <span>Subscribe</span>
                    <Send size={13} />
                  </button>
                </form>
              )}
              <div className="mt-2 flex items-center gap-3 text-[11px] text-gray-500">
                <span className="flex items-center gap-1">
                  <Lock size={11} className="text-gray-500" /> Zero spam
                </span>
                <span>•</span>
                <span>Unsubscribe anytime</span>
                <span>•</span>
                <span>Curated by agency directors</span>
              </div>
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
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-gray-300 transition-all duration-200 hover:border-cyan-400 hover:bg-cyan-400 hover:text-black hover:scale-110 shadow-sm"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="15"
                      height="15"
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
                  <a
                    href="tel:+8801308379019"
                    className="text-gray-300 hover:text-white transition-colors mt-0.5"
                  >
                    +880 1308 379019
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
