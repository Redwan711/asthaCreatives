"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeadNtext from "./HeadNtext";
import OfferingCard from "./OfferingCard";
import { offeringsData } from "@/data/offeringsData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const categories = [
  "All",
  "Design & Identity",
  "Web & Digital Ports",
  "Content & Strategy",
  "Video & Motion",
  "Growth & Visibility",
];

const OfferingsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const sectionRef = useRef(null);
  const cardsGridRef = useRef(null);
  const isFirstMount = useRef(true);

  const filteredOfferings =
    selectedCategory === "All"
      ? offeringsData
      : offeringsData.filter((item) => item.category === selectedCategory);

  // Initial entrance animation on scroll into view
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".offering-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Fix #8: Animate cards on category filter change
  const handleCategoryChange = useCallback(
    (newCat) => {
      if (newCat === selectedCategory) return;

      const cards = cardsGridRef.current?.querySelectorAll(".offering-card");
      if (!cards || cards.length === 0) {
        setSelectedCategory(newCat);
        return;
      }

      // Animate current cards out
      gsap.to(cards, {
        opacity: 0,
        y: 10,
        duration: 0.2,
        stagger: 0.03,
        ease: "power2.in",
        onComplete: () => {
          setSelectedCategory(newCat);
        },
      });
    },
    [selectedCategory],
  );

  // After state update → animate new cards in
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    // Wait a tick for DOM to update with new filtered items
    requestAnimationFrame(() => {
      const newCards =
        cardsGridRef.current?.querySelectorAll(".offering-card");
      if (!newCards || newCards.length === 0) return;

      gsap.fromTo(
        newCards,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.06,
          ease: "power2.out",
        },
      );
    });
  }, [selectedCategory]);

  return (
    <section
      id="offerings"
      ref={sectionRef}
      className="srv w-full py-20 md:py-28 bg-white"
      aria-label="Our Individual Offerings and Packages"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <HeadNtext
          heading="Our Individual Offerings (Packages)"
          text="From custom brand identity systems to comprehensive social content retainers and enterprise data analytics, explore our modular digital packages designed to scale your business."
        />

        {/* Category Filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => handleCategoryChange(cat)}
              className={`rounded-full px-4 py-2 text-xs md:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-brand text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Offerings Grid */}
        <div
          ref={cardsGridRef}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredOfferings.map((offering) => (
            <OfferingCard key={offering.id} offering={offering} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
