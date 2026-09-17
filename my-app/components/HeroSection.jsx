"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SubHeading from "@/components/SubHeading";
import Button from "@/components/Button";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

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
  const magneticBtnRef = useRef(null);

  useEffect(() => {
    const words = headingRef.current.querySelectorAll(".word-inner");

    // Main entrance timeline
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.set(words, { yPercent: 110 })
      .fromTo(
        subheadingRef.current,
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.7 },
      )
      .to(words, { yPercent: 0, duration: 1.1, stagger: 0.06 }, "-=0.3")
      .fromTo(
        paragraphRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.5",
      )
      .fromTo(
        buttonsRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.3",
      )
      .fromTo(
        scrollIndicatorRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        "-=0.1",
      );

    // Infinite gentle bounce on scroll indicator
    gsap.to(scrollIndicatorRef.current, {
      y: 8,
      repeat: -1,
      yoyo: true,
      duration: 1.4,
      ease: "power1.inOut",
      delay: 2,
    });

    // Parallax on hero background
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

  // Magnetic button physics
  const handleMouseMove = (e) => {
    if (!magneticBtnRef.current) return;
    const rect = magneticBtnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(magneticBtnRef.current, {
      x: x * 0.25,
      y: y * 0.25,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!magneticBtnRef.current) return;
    gsap.to(magneticBtnRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1.2, 0.4)",
    });
  };

  return (
    <section className="hero-section relative h-[100dvh] min-h-[620px] w-full overflow-hidden bg-[#080b14]">
      {/* Ambient floating luminous gradient orbs */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-cyan-500/15 blur-[120px] animate-pulse-glow" />
      <div className="pointer-events-none absolute right-10 top-1/3 h-[450px] w-[450px] rounded-full bg-indigo-600/20 blur-[140px] animate-float" />
      <div className="pointer-events-none absolute bottom-10 left-1/3 h-80 w-80 rounded-full bg-teal-500/10 blur-[100px]" />

      {/* Parallax background layer */}
      <div
        ref={bgRef}
        className="absolute inset-0 -top-[5%] h-[115%] w-full bg-[url(/smoke-bg-astha-hero.png)] bg-cover bg-center bg-no-repeat opacity-40 will-change-transform mix-blend-screen"
      />

      {/* Overlay with subtle vignette */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#080b14]/60 via-[#080b14]/40 to-[#080b14]" />

      {/* Main Content */}
      <div className="relative z-20 container mx-auto flex h-full flex-col items-start justify-center px-4 text-left sm:px-6 lg:px-8">
        <div className="textSec max-w-4xl">
          {/* Eyebrow & Status Pill */}
          <div
            ref={subheadingRef}
            style={{ opacity: 0 }}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1 text-xs font-semibold text-cyan-300 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Social Media Management & Web Development Firm
            </span>
          </div>

          {/* Masked H1 Display Headline */}
          <h1
            ref={headingRef}
            className="mt-5 text-[2.15rem] font-black leading-[1.12] tracking-tight text-white sm:text-[3rem] md:text-[3.8rem] lg:text-[4.6rem]"
          >
            {headingWords.map((word, i) => (
              <span
                key={i}
                className="mr-[0.28em] inline-block overflow-hidden pb-1 align-top"
              >
                <span className={`word-inner inline-block ${i >= 5 ? "text-gradient-ocean" : ""}`}>
                  {word}
                </span>
              </span>
            ))}
          </h1>

          {/* Subtitle / Intro Narrative */}
          <p
            ref={paragraphRef}
            style={{ opacity: 0 }}
            className="mt-6 max-w-2xl text-[1rem] font-normal leading-relaxed text-gray-300 sm:text-[1.15rem] md:text-[1.25rem]"
          >
            Mainly we bring your business into the digital world. From your
            first digital footprint to long-term growth, we connect creative
            design, social media management, website development, and data into
            one purposeful journey.
          </p>

          {/* Dual Action CTAs with Magnetic Effect */}
          <div
            ref={buttonsRef}
            style={{ opacity: 0 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <div
              ref={magneticBtnRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="inline-block transition-transform duration-100"
            >
              <Link href="/contact?subject=meeting">
                <Button variant="primary" size="lg" className="shadow-xl shadow-brandnd/30">
                  <span>Book A Meeting</span>
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>

            <Link href="#offerings">
              <Button variant="outline" size="lg" className="border-white/20 bg-white/5 hover:bg-white/10 hover:border-cyan-400/60 backdrop-blur-md">
                Explore Offerings
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Scroll-down indicator */}
      <div
        ref={scrollIndicatorRef}
        style={{ opacity: 0 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
          Scroll Down
        </span>
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/25 p-1 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
