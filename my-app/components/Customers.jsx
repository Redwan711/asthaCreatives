"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import HeadNtext from "./HeadNtext";
import Image from "next/image";
import { Heart, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Available client logos
import freshPizza from "@/images/companies/fresh-pizza.png";
import ovenFresh from "@/images/companies/oven-fresh.png";
import cellRepair from "@/images/companies/cell-repair.png";
import b2g from "@/images/companies/b2g.png";
import xeniusoft from "@/images/companies/xeniusoft.png";

// Register GSAP hook
gsap.registerPlugin(useGSAP);

// 9 Clients as specified in contnt.pdf
const testimonials = [
  {
    id: 1,
    name: "Dew drop",
    initials: "DD",
    image: null,
    review:
      "Astha Creatives crafted an exceptional digital footprint for our organic brand. Their creative design and content execution established an immediate connection with our target audience, driving real community growth.",
  },
  {
    id: 2,
    name: "Xeniusoft",
    initials: "XS",
    image: xeniusoft,
    review:
      "Working with Astha Creatives on our visual direction and brand identity transformed how our enterprise is perceived in the market. Their attention to detail and design rigor are world-class.",
  },
  {
    id: 3,
    name: "B2G SOFT",
    initials: "B2G",
    image: b2g,
    review:
      "From technical web development to structured performance marketing, Astha Creatives has been an indispensable strategic partner. They consistently deliver results ahead of schedule.",
  },
  {
    id: 4,
    name: "Oven Fresh",
    initials: "OF",
    image: ovenFresh,
    review:
      "Working with Astha Creatives has been a game-changer for our business. Their team of creative professionals helped us develop a strong brand identity and social media strategy that resonates deeply with our customers.",
  },
  {
    id: 5,
    name: "Fresh Pizza",
    initials: "FP",
    image: freshPizza,
    review:
      "Astha Creatives has been an invaluable partner in our digital marketing efforts. Their content creation and targeted ad spend generated a massive surge in online orders and foot traffic.",
  },
  {
    id: 6,
    name: "Cell Repair",
    initials: "CR",
    image: cellRepair,
    review:
      "A dependable, high-integrity creative team. They completely revamped our local search presence and social channels, delivering consistent month-over-month customer inquiries.",
  },
  {
    id: 7,
    name: "Luatt",
    initials: "LU",
    image: null,
    review:
      "The video editing and motion graphics produced by Astha Creatives elevated our lifestyle product line significantly. Their creative hooks resulted in our highest-performing campaigns to date.",
  },
  {
    id: 8,
    name: "Wizzu",
    initials: "WZ",
    image: null,
    review:
      "Astha Creatives brought immense clarity to our digital strategy. They navigated our multi-channel brand launch seamlessly with bespoke design assets and active community management.",
  },
  {
    id: 9,
    name: "Bssofthub",
    initials: "BS",
    image: null,
    review:
      "Their business data analytics and executive dashboards gave us visibility into our marketing funnels that we never had before. Decisive insights and remarkable professionalism.",
  },
];

const partners = [
  { id: 1, name: "Dew drop", initials: "DD", image: null },
  { id: 2, name: "Xeniusoft", initials: "XS", image: xeniusoft },
  { id: 3, name: "B2G SOFT", initials: "B2G", image: b2g },
  { id: 4, name: "Oven Fresh", initials: "OF", image: ovenFresh },
  { id: 5, name: "Fresh Pizza", initials: "FP", image: freshPizza },
  { id: 6, name: "Cell Repair", initials: "CR", image: cellRepair },
  { id: 7, name: "Luatt", initials: "LU", image: null },
  { id: 8, name: "Wizzu", initials: "WZ", image: null },
  { id: 9, name: "Bssofthub", initials: "BS", image: null },
];

const AUTOPLAY_MS = 5000;

const getVisibleCount = () => {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 640) return 2;
  return 1;
};

const Customers = () => {
  const sliderContainer = useRef(null);
  const trackRef = useRef(null);
  const autoplayRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(testimonials.length - 1);

  useEffect(() => {
    const updateVisibleCount = () => {
      const visibleCount = getVisibleCount();
      const newMaxIndex = Math.max(0, testimonials.length - visibleCount);
      setMaxIndex(newMaxIndex);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const startAutoplay = () => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, AUTOPLAY_MS);
  };

  useEffect(() => {
    startAutoplay();
    return () => clearInterval(autoplayRef.current);
  }, [maxIndex]);

  useGSAP(
    () => {
      if (!trackRef.current) return;
      const shiftPercent = -(currentIndex * (100 / testimonials.length));
      gsap.to(trackRef.current, {
        xPercent: shiftPercent,
        duration: 0.6,
        ease: "power2.out",
      });
    },
    { dependencies: [currentIndex], scope: trackRef },
  );

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
    startAutoplay();
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? maxIndex : prev - 1));
    startAutoplay();
  };

  const goToSlide = (i) => {
    setCurrentIndex(Math.min(i, maxIndex));
    startAutoplay();
  };

  const pauseAutoplay = () => clearInterval(autoplayRef.current);
  const resumeAutoplay = () => startAutoplay();

  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.changedTouches[0].screenX;
    pauseAutoplay();
  }, []);

  const handleTouchEnd = useCallback((e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const diff = touchStartX.current - touchEndX.current;
    const SWIPE_THRESHOLD = 50;
    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    resumeAutoplay();
  }, [maxIndex]);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gray-50 py-24 md:py-32"
      aria-label="Client Feedback and Testimonials"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-14 text-center text-gray-900">
          <HeadNtext
            heading="Our Clients Feedback"
            text="We partner closely with businesses to help them thrive in the digital world. Here is what leading founders and project directors say about navigating with Astha Creatives."
          />
        </div>

        {/* 9 Partner Brands Infinite Marquee Ribbon */}
        <div className="mb-16 overflow-hidden rounded-2xl border border-gray-200/80 bg-white py-6 shadow-xs select-none">
          <p className="mb-4 text-center text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
            Trusted by Ambitious Brands Across Industries
          </p>
          <div className="animate-marquee-left flex items-center gap-6 px-4">
            {[...partners, ...partners].map((partner, idx) => (
              <div
                key={idx}
                className="group flex w-36 shrink-0 flex-col items-center justify-center rounded-xl border border-gray-100 bg-gray-50/50 p-3 text-center transition-all hover:border-brandnd/40 hover:bg-white hover:shadow-md"
              >
                {partner.image ? (
                  <div className="relative h-8 w-24">
                    <Image
                      src={partner.image}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                      sizes="96px"
                    />
                  </div>
                ) : (
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-200 text-xs font-bold text-gray-700 group-hover:bg-brand group-hover:text-white transition-colors">
                    {partner.initials}
                  </div>
                )}
                <span className="mt-2 text-[11px] font-bold text-gray-600 group-hover:text-brand transition-colors truncate max-w-full">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Slider Section */}
        <div ref={sliderContainer} className="relative mx-auto w-full max-w-6xl">
          <div
            onMouseEnter={pauseAutoplay}
            onMouseLeave={resumeAutoplay}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="w-full overflow-hidden rounded-3xl py-4"
          >
            <div ref={trackRef} className="flex">
              {testimonials.map((test) => (
                <div
                  key={test.id}
                  className="w-full shrink-0 px-3 sm:w-1/2 lg:w-1/3"
                >
                  <div className="flex h-full flex-col justify-between rounded-3xl border border-gray-200/80 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-brandnd/40 hover:shadow-xl md:p-8">
                    <div>
                      <div className="mb-5 flex items-center justify-between">
                        <Quote
                          className="h-8 w-8 text-brandnd/30"
                          strokeWidth={1.5}
                        />
                        <span className="inline-flex items-center gap-1 rounded-full bg-brand/5 px-2.5 py-1 text-[11px] font-semibold text-brand">
                          <Heart size={10} className="fill-current text-brand" />
                          Verified Partner
                        </span>
                      </div>

                      <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                        &ldquo;{test.review}&rdquo;
                      </p>
                    </div>

                    <div className="mt-8 flex items-center gap-3.5 border-t border-gray-100 pt-5">
                      {test.image ? (
                        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-gray-200 bg-white p-1 shadow-xs">
                          <Image
                            src={test.image}
                            alt={`${test.name} logo`}
                            fill
                            className="object-contain p-1"
                            sizes="48px"
                          />
                        </div>
                      ) : (
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brandnd text-white font-bold text-sm shadow-md">
                          {test.initials}
                        </div>
                      )}
                      <div>
                        <h4 className="text-sm font-bold tracking-wide text-gray-900">
                          {test.name}
                        </h4>
                        <span className="text-xs text-gray-500">
                          Client Partner
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={prevSlide}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-all duration-200 hover:border-brand hover:bg-brand hover:text-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dot Indicators */}
            <div className="flex gap-1.5">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "w-7 bg-brand"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextSlide}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-all duration-200 hover:border-brand hover:bg-brand hover:text-white"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
