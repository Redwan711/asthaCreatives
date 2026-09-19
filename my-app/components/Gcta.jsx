"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/Button";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Gcta = (props) => {
  const sectionRef = useRef(null);
  const magneticBtnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e) => {
    if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) return;
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
    <aside
      ref={sectionRef}
      aria-label="Call to Action"
      className="relative overflow-hidden bg-gradient-to-b from-[#080b14] via-[#0d142b] to-[#080b14] py-24 md:py-32 px-4 md:px-0 text-white border-t border-white/10"
    >
      {/* Aurora Ambient Glow Orbs */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-indigo-600/20 blur-[150px] animate-pulse-glow" />
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-cyan-500/15 blur-[120px]" />

      <div className="container relative z-10 mx-auto flex flex-col items-center justify-between gap-8 md:flex-row text-center md:text-left sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/40 px-3.5 py-1 text-xs font-semibold text-cyan-300 backdrop-blur-md mb-4">
            <Sparkles size={12} className="text-cyan-400" />
            <span>Begin Your Digital Journey</span>
          </div>

          <h2 className="text-3xl font-black text-white sm:text-4xl md:text-5xl leading-tight">
            {props.heading
              ? props.heading
              : "Ready to transform your business into digital world"}
          </h2>

          <p className="mt-4 text-base text-gray-300 leading-relaxed max-w-xl">
            {props.text
              ? props.text
              : "Navigate with clarity, consistency, and confidence. Schedule a 15-minute alignment call with our strategy team today."}
          </p>
        </div>

        <div
          ref={magneticBtnRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="shrink-0 transition-transform duration-100"
        >
          <Link href={props.link ? props.link : "/contact?subject=meeting"}>
            <Button variant="primary" size="lg" className="shadow-2xl shadow-cyan-500/20 px-8 py-4">
              <Calendar size={18} />
              <span>{props.btnText ? props.btnText : "Book a Meeting"}</span>
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Gcta;
