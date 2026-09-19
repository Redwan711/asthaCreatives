"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Stethoscope,
  CheckCircle2,
  Layers,
  Palette,
  Eye,
  Maximize2,
  X,
  Share2,
  TrendingUp,
  Award,
  ShieldCheck,
  FileCheck,
  Activity,
  HeartPulse,
} from "lucide-react";
import Gcta from "@/components/Gcta";

export default function AhfCaseStudyContent() {
  const [activeLightboxImage, setActiveLightboxImage] = useState(null);

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
        {/* Ambient Backlight (Cyan/Indigo) */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[600px] rounded-full bg-cyan-500/15 blur-[180px]" />

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

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-xs font-bold text-cyan-300 uppercase tracking-wider">
              <Stethoscope size={13} className="text-cyan-400" />
              <span>Clinical Pharmaceuticals & Diagnostics Case Study</span>
            </div>
          </div>

          {/* Hero Titles */}
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
              Alpha Health Farma (AHF)
            </h1>
            <p className="mt-5 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Certified Brand Architecture, Pharmaceutical Container Packaging, Clinical Stationery, and Hospital Monitoring Systems.
            </p>
          </div>

          {/* Project Metadata Matrix */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5 max-w-5xl mx-auto rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 backdrop-blur-xl">
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-400">Client</span>
              <span className="mt-1 block text-sm font-bold text-white">Alpha Health Farma</span>
            </div>
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-400">Sector</span>
              <span className="mt-1 block text-sm font-bold text-white">Clinical Pharma & Tech</span>
            </div>
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-400">Services</span>
              <span className="mt-1 block text-sm font-bold text-white">Brand, Packaging & UI</span>
            </div>
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-400">Timeline</span>
              <span className="mt-1 block text-sm font-bold text-white">6 Weeks</span>
            </div>
            <div className="col-span-2 sm:col-span-4 lg:col-span-1">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-400">Year</span>
              <span className="mt-1 block text-sm font-bold text-cyan-400 font-mono">2025 – 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Hero Cover Banner (Medkit Tablet & Device Presentation) */}
      <section className="relative w-full py-12 md:py-16 bg-[#0a0e1a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div
            className="group relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/15 bg-black/60 shadow-2xl cursor-pointer"
            onClick={() =>
              setActiveLightboxImage({
                src: "/images/brand-design/medical-equipment.jpg",
                title: "AHF Medkit — Digital Diagnostic Product & Packaging Suite",
              })
            }
          >
            <Image
              src="/images/brand-design/medical-equipment.jpg"
              alt="Alpha Health Farma Medkit Digital Showcase"
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

      {/* 3. Institutional Mission & Strategic Vision */}
      <section className="relative w-full py-16 md:py-24 bg-[#080b14] border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              01. Enterprise Foundation
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-black text-white">
              Institutional Mission & Certified Healthcare Trust
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
              Medical branding operates under uncompromising stakes. We formulated an enterprise identity statement engineered to instill immediate scientific confidence across hospital boards, physicians, and patients.
            </p>
          </div>

          <div
            className="group relative aspect-[21/9] w-full overflow-hidden rounded-3xl border border-white/15 bg-[#0E2442] shadow-2xl cursor-pointer p-4"
            onClick={() =>
              setActiveLightboxImage({
                src: "/images/brand-design/ahf/brand-mission-statement.png",
                title: "AHF Institutional Mission & Vision Statement",
              })
            }
          >
            <Image
              src="/images/brand-design/ahf/brand-mission-statement.png"
              alt="Alpha Health Farma Mission Statement"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-contain p-4 transition-transform duration-700 group-hover:scale-102"
            />
            <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
              <Maximize2 size={13} />
              <span>Expand Statement</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Certified Brand Mark & Vector Clearspace Standards */}
      <section className="relative w-full py-16 md:py-24 bg-[#0a0e1a] border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              02. Vector Architecture
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-white">
              The Certified Brand Mark & Vector Geometry
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
              Constructed within an authoritative clinical capsule badge, the AHF emblem delivers instant legibility from miniature syringe labels to towering hospital facade banners.
            </p>
          </div>

          {/* Primary Logo Banner */}
          <div
            className="group relative aspect-[21/7] w-full overflow-hidden rounded-3xl border border-white/15 bg-white shadow-2xl cursor-pointer p-6 mb-10"
            onClick={() =>
              setActiveLightboxImage({
                src: "/images/brand-design/ahf/ahf-logo-horizontal.png",
                title: "AHF Official Horizontal Wordmark & Capsule Badge",
              })
            }
          >
            <Image
              src="/images/brand-design/ahf/ahf-logo-horizontal.png"
              alt="AHF Official Wordmark & Capsule Badge"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full border border-gray-300 bg-white/90 text-gray-900 px-3 py-1 text-xs font-bold shadow-md">
              <Maximize2 size={12} />
              <span>Primary Wordmark</span>
            </div>
          </div>

          {/* Color Variations & Clearspace Guides Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="group relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/15 bg-[#0e1322] shadow-xl cursor-pointer p-4"
              onClick={() =>
                setActiveLightboxImage({
                  src: "/images/brand-design/ahf/logo-color-variations.png",
                  title: "Brand Mark Colorways (Cyan, Navy, Monochrome)",
                })
              }
            >
              <Image
                src="/images/brand-design/ahf/logo-color-variations.png"
                alt="Logo Colorways across Navy, Cyan, White"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 rounded-full bg-black/70 px-3 py-1 text-[11px] font-bold text-gray-200 backdrop-blur-md">
                Official Color Variations
              </div>
            </div>

            <div
              className="group relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/15 bg-white shadow-xl cursor-pointer p-4"
              onClick={() =>
                setActiveLightboxImage({
                  src: "/images/brand-design/ahf/logo-clearspace-guide.png",
                  title: "Logo Isolation Zone & Clearspace Standards",
                })
              }
            >
              <Image
                src="/images/brand-design/ahf/logo-clearspace-guide.png"
                alt="Logo Clearspace and Isolation Zone Specs"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 rounded-full bg-white/90 text-gray-900 px-3 py-1 text-[11px] font-bold shadow-md">
                Clearspace & Minimum Sizing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Clinical Chromatics & Palette Governance */}
      <section className="relative w-full py-16 md:py-24 bg-[#080b14] border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative & Swatches */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                03. Clinical Chromatics
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Aseptic Palette & Visual Standards
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-gray-300">
                The color system combines high-contrast Clinical Navy with active diagnostic Cyan and sterile white, creating an authoritative visual hierarchy approved for ISO medical labeling.
              </p>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
                  <div className="h-8 w-full rounded-lg bg-[#0E2442] border border-white/20 mb-2 shadow-sm" />
                  <span className="block text-xs font-bold text-white">Clinical Navy</span>
                  <span className="text-[10px] text-gray-400 font-mono">#0E2442</span>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
                  <div className="h-8 w-full rounded-lg bg-[#00E5FF] border border-white/20 mb-2 shadow-sm" />
                  <span className="block text-xs font-bold text-white">Diagnostic Cyan</span>
                  <span className="text-[10px] text-gray-400 font-mono">#00E5FF</span>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
                  <div className="h-8 w-full rounded-lg bg-[#FFFFFF] border border-white/20 mb-2 shadow-sm" />
                  <span className="block text-xs font-bold text-white">Sterile White</span>
                  <span className="text-[10px] text-gray-400 font-mono">#FFFFFF</span>
                </div>
              </div>
            </div>

            {/* Right Palette Guide Mockup */}
            <div className="lg:col-span-6">
              <div
                className="group relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/15 bg-white shadow-2xl cursor-pointer p-4"
                onClick={() =>
                  setActiveLightboxImage({
                    src: "/images/brand-design/ahf/color-palette-guide.png",
                    title: "Clinical Color Palette & CMYK/Pantone Values",
                  })
                }
              >
                <Image
                  src="/images/brand-design/ahf/color-palette-guide.png"
                  alt="Clinical Color Palette Guide"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full border border-gray-300 bg-white/90 text-gray-900 px-3 py-1 text-xs font-bold shadow-md">
                  <Maximize2 size={12} />
                  <span>Color Governance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Corporate Stationery Suite & Institutional Manual */}
      <section className="relative w-full py-16 md:py-24 bg-[#0a0e1a] border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              04. Institutional Collaterals
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-white">
              Corporate Stationery & Brand Identity Manual
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
              Equipping Alpha Health Farma with comprehensive executive letterheads, physician folders, prescription envelopes, and a bound corporate brand manual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Stationery Suite */}
            <div
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/15 bg-[#0f1424] shadow-2xl cursor-pointer p-4 hover:border-cyan-400/40 transition-all hover:-translate-y-1"
              onClick={() =>
                setActiveLightboxImage({
                  src: "/images/brand-design/ahf/stationery-suite.png",
                  title: "Corporate Stationery Suite (Letterhead, Folder, Envelope)",
                })
              }
            >
              <Image
                src="/images/brand-design/ahf/stationery-suite.png"
                alt="Institutional Stationery Suite"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
                Stationery & Prescription Suite
              </div>
            </div>

            {/* Brand Guidelines Manual Book */}
            <div
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/15 bg-[#0f1424] shadow-2xl cursor-pointer p-4 hover:border-cyan-400/40 transition-all hover:-translate-y-1"
              onClick={() =>
                setActiveLightboxImage({
                  src: "/images/brand-design/ahf/brand-guidelines-manual.png",
                  title: "AHF Corporate Brand Guidelines Manual & Binder",
                })
              }
            >
              <Image
                src="/images/brand-design/ahf/brand-guidelines-manual.png"
                alt="Corporate Brand Guidelines Manual"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
                Bound Corporate Brand Guidelines
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Pharmaceutical Packaging & Medicine Bottles */}
      <section className="relative w-full py-16 md:py-24 bg-[#080b14] border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              05. Pharmaceutical Packaging
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-white">
              Prescription Packaging & Medicine Container Architecture
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
              Sterile pill containers and prescription bottles featuring child-resistant caps, tamper-evident neck bands, and high-visibility dosage typography.
            </p>
          </div>

          <div
            className="group relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/15 bg-[#0f1424] shadow-2xl cursor-pointer p-6"
            onClick={() =>
              setActiveLightboxImage({
                src: "/images/brand-design/ahf/pharmaceutical-bottles.png",
                title: "Prescription Medicine Bottles with AHF Certified Labeling",
              })
            }
          >
            <Image
              src="/images/brand-design/ahf/pharmaceutical-bottles.png"
              alt="Pharmaceutical Medicine Bottles"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Packaging Suite</span>
                <h3 className="text-lg sm:text-xl font-black text-white">Sterile Medicine Bottle Design</h3>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                <Maximize2 size={13} />
                <span>Expand View</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Intelligent Monitoring Systems & ICU Device Architecture */}
      <section className="relative w-full py-16 md:py-24 bg-[#0a0e1a] border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              06. Clinical Technology
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-white">
              Intelligent Monitoring & Medical Hardware Displays
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
              Industrial branding applied to high-concurrency ICU patient monitors, surgical multi-parameter displays, and diagnostic hardware.
            </p>
          </div>

          <div
            className="group relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/15 bg-black shadow-2xl cursor-pointer"
            onClick={() =>
              setActiveLightboxImage({
                src: "/images/brand-design/ahf/medical-monitoring.jpg",
                title: "AHF Intelligent Monitoring & Diagnostic Hardware Displays",
              })
            }
          >
            <Image
              src="/images/brand-design/ahf/medical-monitoring.jpg"
              alt="Medical Monitoring Devices and Hardware"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover group-hover:scale-102 transition-transform duration-500"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Device UI & Hardware</span>
                <h3 className="text-lg sm:text-xl font-black text-white">Intelligent Clinical Monitoring</h3>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                <Maximize2 size={13} />
                <span>Expand View</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Healthcare Staff Apparel & Medical Exhibition Presence */}
      <section className="relative w-full py-16 md:py-24 bg-[#080b14] border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              07. Physical Environments
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-white">
              Clinical Apparel & Trade Show Exhibition Systems
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
              Unifying hospital personnel with precision-tailored scrubs and representing Alpha Health Farma on international medical convention stages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Clinical Scrubs */}
            <div
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/15 bg-black shadow-2xl cursor-pointer hover:border-cyan-400/40 transition-all hover:-translate-y-1"
              onClick={() =>
                setActiveLightboxImage({
                  src: "/images/brand-design/ahf/clinical-scrubs-apparel.jpg",
                  title: "Clinical Scrubs & Medical Uniform Identity",
                })
              }
            >
              <Image
                src="/images/brand-design/ahf/clinical-scrubs-apparel.jpg"
                alt="Hospital Staff Scrubs and Lab Apparel"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 rounded-full bg-black/70 px-3.5 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                Hospital Ward & Surgical Scrubs
              </div>
            </div>

            {/* Exhibition Booth */}
            <div
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/15 bg-black shadow-2xl cursor-pointer hover:border-cyan-400/40 transition-all hover:-translate-y-1"
              onClick={() =>
                setActiveLightboxImage({
                  src: "/images/brand-design/ahf/exhibition-booth-banner.jpg",
                  title: "International Medical Exhibition & Booth Display",
                })
              }
            >
              <Image
                src="/images/brand-design/ahf/exhibition-booth-banner.jpg"
                alt="Medical Exhibition Booth Display"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 rounded-full bg-black/70 px-3.5 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                Exhibition & Conference Display
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Measurable Healthcare Impact */}
      <section className="relative w-full py-16 md:py-20 bg-[#0a0e1a] border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              The Clinical Outcome
            </span>
            <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">
              Certified Enterprise Performance
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-md">
              <span className="block text-4xl font-black text-cyan-400 font-mono">100%</span>
              <span className="mt-2 block text-xs font-bold text-white uppercase tracking-wider">Regulatory Approval</span>
              <p className="mt-1 text-xs text-gray-400">First-pass clearance across national pharmaceutical compliance boards</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-md">
              <span className="block text-4xl font-black text-indigo-400 font-mono">40+</span>
              <span className="mt-2 block text-xs font-bold text-white uppercase tracking-wider">Hospital Networks</span>
              <p className="mt-1 text-xs text-gray-400">Onboarded across regional and international clinical distributors</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-md">
              <span className="block text-4xl font-black text-emerald-400 font-mono">15+</span>
              <span className="mt-2 block text-xs font-bold text-white uppercase tracking-wider">Product Lines</span>
              <p className="mt-1 text-xs text-gray-400">Unified under a single scalable packaging & device hierarchy</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-md">
              <span className="block text-4xl font-black text-rose-400 font-mono">0</span>
              <span className="mt-2 block text-xs font-bold text-white uppercase tracking-wider">Labeling Revisions</span>
              <p className="mt-1 text-xs text-gray-400">Zero non-compliance notices during hospital audits</p>
            </div>
          </div>

          {/* Navigation Between Case Studies */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              href="/portfolio/gesha-coffee"
              className="group rounded-3xl border border-white/15 bg-white/[0.02] p-6 hover:border-orange-500/40 hover:bg-white/[0.05] transition-all flex items-center justify-between"
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-orange-400">← Previous Case Study</span>
                <h4 className="mt-1 text-lg font-bold text-white group-hover:text-orange-300 transition-colors">
                  Gesha Coffee Roasters
                </h4>
                <span className="text-xs text-gray-400">Specialty Coffee & Roastery</span>
              </div>
              <ArrowLeft size={18} className="text-gray-400 group-hover:-translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/portfolio"
              className="group rounded-3xl border border-white/15 bg-white/[0.02] p-6 hover:border-cyan-400/40 hover:bg-white/[0.05] transition-all flex items-center justify-between"
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">Full Catalog →</span>
                <h4 className="mt-1 text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Back to All Case Studies
                </h4>
                <span className="text-xs text-gray-400">View Multidisciplinary Production</span>
              </div>
              <ArrowRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
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
