"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeadNtext from "./HeadNtext";
import Image from "next/image";
import Redwan from "@/images/teams/redwan.jpeg";
import Murtaza from "@/images/teams/murtaza.jpeg";
import Arif from "@/images/teams/arif.jpeg";
import Shahidul from "@/images/teams/shahidul.jpeg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const teamMembers = [
  { id: 1, name: "Redwanul Haque", role: "Creative Head", image: Redwan },
  {
    id: 2,
    name: "Murtaza Kamal Pasha",
    role: "Project Manager",
    image: Murtaza,
  },
  { id: 3, name: "Arif Hossain", role: "Project Lead", image: Arif },
  { id: 4, name: "Shahidul Shakil", role: "Lead Developer", image: Shahidul },
];

const Team = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".team-card",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.08,
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
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -9;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 9;

    gsap.to(card, {
      rotateX,
      rotateY,
      transformPerspective: 900,
      duration: 0.3,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = (e) => {
    if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) return;
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      y: 0,
      clearProps: "transform",
      duration: 0.5,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  return (
    <section ref={sectionRef} className="w-full py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <HeadNtext
          heading="Meet Our Team"
          text="As a team, we move forward with deep trust in our vision, believing that with focus, dedication, and heart, meaningful success is always within reach."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="team-card group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-gray-200/80 bg-white shadow-xs transition-[border-color,box-shadow] duration-300 will-change-transform hover:border-brandnd/40 hover:shadow-2xl"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />

                {/* Team Tag */}
                <div className="absolute top-3.5 left-3.5 rounded-full bg-black/40 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-md">
                  {member.role}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-brand transition-colors">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-semibold text-brandnd uppercase tracking-wider">
                  Astha Core
                </p>
                <span className="mt-3 block h-0.5 w-8 rounded-full bg-brandnd transition-all duration-300 group-hover:w-16" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
