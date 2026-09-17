"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/Button";
import { Calendar } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Gcta = (props) => {
  const sectionRef = useRef(null);

  // Fix #14: Entrance animation for the final CTA
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <aside
      ref={sectionRef}
      aria-label="Call to Action"
      className="bg-brandnd relative py-20 md:py-28 px-4 md:px-0 overflow-hidden"
    >
      {/* Background visual accents */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-black/20 blur-3xl" />

      <section className="container mx-auto flex items-center justify-between gap-6 flex-wrap relative z-10">
        <div className="textSec grid gap-3 max-w-2xl">
          <h2 className="text-2xl font-black text-white sm:text-3xl md:text-4xl">
            {props.heading
              ? props.heading
              : "Ready to transform your business into digital world"}
          </h2>

          <p className="text-[16px] text-white/90 leading-relaxed max-w-xl">
            {props.text
              ? props.text
              : "Navigate with clarity, consistency, and confidence. Schedule a 15-minute alignment call with our strategy team today."}
          </p>
        </div>

        <Link
          href={props.link ? props.link : "/contact?subject=meeting"}
          className="btn"
        >
          <Button variant="dark" size="lg" className="shadow-2xl">
            <Calendar size={18} />
            <span>{props.btnText ? props.btnText : "Book a Meeting"}</span>
          </Button>
        </Link>
      </section>
    </aside>
  );
};

export default Gcta;
