"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SubHeading from "@/components/SubHeading";
import Button from "@/components/Button";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const headingWords =
  "Creatives. Designs. Marketing. Development. Data. Scale Your Business".split(" ");

const HeroSection = () => {
  const subheadingRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonsRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const words = headingRef.current.querySelectorAll(".word-inner");

    // Main entrance timeline
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.set(words, { yPercent: 110 })
      .fromTo(
        subheadingRef.current,
        { opacity: 0, y: -12 },
        { opacity: 1, y: 0, duration: 0.6 },
      )
      .to(words, { yPercent: 0, duration: 1, stagger: 0.07 }, "-=0.2")
      .fromTo(
        paragraphRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.5",
      )
      // Fix #1: Animate buttons into view as part of the choreography
      .fromTo(
        buttonsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.3",
      )
      // Fix #2: Fade in scroll indicator last
      .fromTo(
        scrollIndicatorRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        "-=0.1",
      );

    // Fix #2: Infinite bounce on scroll indicator
    gsap.to(scrollIndicatorRef.current, {
      y: 8,
      repeat: -1,
      yoyo: true,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 2,
    });

    // Fix #10: Subtle parallax on hero background
    gsap.to(bgRef.current, {
      yPercent: 12,
      ease: "none",
      scrollTrigger: {
        trigger: bgRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="hero-section relative h-[100dvh] min-h-[600px] w-full overflow-hidden">
      {/* Parallax background layer */}
      <div
        ref={bgRef}
        className="absolute inset-0 -top-[5%] h-[115%] w-full bg-[url(/smoke-bg-astha-hero.png)] bg-cover bg-center bg-no-repeat will-change-transform"
      />

      {/* Dark overlay */}
      <div className="absolute left-0 top-0 z-10 size-full bg-black/50">
        <div className="textSec container mx-auto flex h-full flex-col items-start justify-center px-4 text-left sm:px-6 lg:px-8">
          <div ref={subheadingRef} style={{ opacity: 0 }}>
            <SubHeading className="text-white">
              Social Media Management & Web Development Firm
            </SubHeading>
          </div>

          <h1
            ref={headingRef}
            className="mt-4 max-w-3xl text-[2rem] font-bold leading-[1.2] text-white sm:text-[2.75rem] md:text-[3.5rem] lg:text-[4.2rem]"
          >
            {headingWords.map((word, i) => (
              <span
                key={i}
                className="mr-[0.3em] inline-block overflow-hidden pb-1 align-top"
              >
                <span className="word-inner inline-block">{word}</span>
              </span>
            ))}
          </h1>

          <p
            ref={paragraphRef}
            style={{ opacity: 0 }}
            className="mt-4 max-w-3xl text-[1rem] font-normal leading-[1.6] text-white/90 sm:text-[1.15rem] md:text-[1.25rem] lg:text-[1.35rem]"
          >
            Mainly we bring your business into the digital world. From your
            first digital footprint to long-term growth, we connect creative
            design, social media management, website development, and data into
            one purposeful journey.
          </p>

          {/* Fix #1: Buttons wrapper with ref for GSAP */}
          <div ref={buttonsRef} style={{ opacity: 0 }} className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/contact?subject=meeting">
              <Button variant="primary">Book A Meeting</Button>
            </Link>
            <Link href="#offerings">
              <Button variant="outline">Explore Offerings</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Fix #2: Scroll-down indicator */}
      <div
        ref={scrollIndicatorRef}
        style={{ opacity: 0 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
          Scroll
        </span>
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/30 p-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
