"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import HeadNtext from "./HeadNtext";
import Image from "next/image";
import { Heart, ChevronLeft, ChevronRight, Quote, Building2 } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Available client logos
import freshPizza from "@/images/companies/fresh-pizza.png";
import ovenFresh from "@/images/companies/oven-fresh.png";
import cellRepair from "@/images/companies/cell-repair.png";
import b2g from "@/images/companies/b2g.png";
import xeniusoft from "@/images/companies/xeniusoft.png";
import hasen from "@/images/companies/hasen.png";
import joyBella from "@/images/companies/joy-bella.png";

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

const AUTOPLAY_MS = 4500;

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

  // Fix #13: Touch/swipe support
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
      className="bg-mpure relative overflow-hidden py-20 md:py-28"
      aria-label="Client Feedback and Testimonials"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-6 text-center text-gray-900">
          <HeadNtext
            heading="Our Clients Feedback"
            text="We partner closely with businesses to help them thrive in the digital world. Here is what leading founders and project directors say about navigating with Astha Creatives."
          />
        </div>

        {/* Slider Section */}
        <div ref={sliderContainer} className="relative mx-auto w-full max-w-6xl">
          <div
            onMouseEnter={pauseAutoplay}
            onMouseLeave={resumeAutoplay}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="w-full overflow-hidden rounded-2xl py-4"
          >
            <div ref={trackRef} className="flex">
              {testimonials.map((test) => (
                <div
                  key={test.id}
                  className="w-full shrink-0 px-3 sm:w-1/2 lg:w-1/3"
                >
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg md:p-7">
                    <div>
                      <div className="mb-4 flex items-center justify-between">
                        <Quote
                          className="h-7 w-7 text-brandnd/30"
                          strokeWidth={1.5}
                        />
                        <span className="inline-flex items-center gap-1 rounded-full bg-brand/5 px-2.5 py-1 text-[11px] font-semibold text-brand">
                          <Heart size={10} className="fill-current text-brand" />
                          Verified Client
                        </span>
                      </div>

                      <p className="line-clamp-6 text-sm leading-relaxed text-gray-600">
                        &ldquo;{test.review}&rdquo;
                      </p>
                    </div>

                    <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-4">
                      {test.image ? (
                        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-gray-200 bg-white p-1">
                          <Image
                            src={test.image}
                            alt={`${test.name} logo`}
                            fill
                            className="object-contain p-1"
                            sizes="48px"
                          />
                        </div>
                      ) : (
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-white font-bold text-sm shadow-inner">
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
          <div className="mt-4 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={prevSlide}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-colors duration-200 hover:border-brand hover:bg-brand hover:text-white"
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
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-colors duration-200 hover:border-brand hover:bg-brand hover:text-white"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* 9 Partner Brands Showcase Grid */}
        <div className="mt-16 border-t border-gray-200/80 pt-12">
          <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
            Trusted by Ambitious Brands Across Industries
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="group flex w-[calc(50%-0.5rem)] sm:w-28 md:w-32 flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-3 text-center shadow-xs transition-all hover:-translate-y-0.5 hover:border-brandnd/50 hover:shadow-md"
              >
                {partner.image ? (
                  <div className="relative h-10 w-full">
                    <Image
                      src={partner.image}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                      sizes="80px"
                    />
                  </div>
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 font-bold text-xs text-gray-700 group-hover:bg-brand group-hover:text-white transition-colors">
                    {partner.initials}
                  </div>
                )}
                <span className="mt-2 text-[11px] font-semibold text-gray-700 group-hover:text-brand transition-colors truncate max-w-full">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
