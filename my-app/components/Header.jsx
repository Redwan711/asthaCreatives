"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

const servicesLinks = [
  { name: "Creative Design", href: "/services/creative-design" },
  {
    name: "Social Media Management",
    href: "/services/social-media-management",
  },
  { name: "AI Video Creation", href: "/services/ai-video-creation" },
  { name: "Video Editing", href: "/services/video-editing" },
  { name: "Website Development", href: "/services/website-development" },
  { name: "Data Analytics", href: "/services/data-analytics" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(true);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const headerRef = useRef(null);
  const dropdownRef = useRef(null);
  const chevronRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileChevronRef = useRef(null);
  const closeTimer = useRef(null);

  // Header entrance animation on mount
  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
    );
  }, []);

  // Track scroll position & active section theme
  useEffect(() => {
    const handleScrollAndTheme = () => {
      setIsScrolled(window.scrollY > 24);

      // Trigger line in viewport coordinates (distance where floating navbar sits)
      const triggerY = 65;
      const themedElements = document.querySelectorAll("[data-theme]");

      let activeTheme = null;

      for (const el of themedElements) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerY && rect.bottom >= triggerY) {
          activeTheme = el.getAttribute("data-theme");
          break;
        }
      }

      // Default to dark at top of page or dark sections; switch to light over light sections
      setIsDarkSection(activeTheme ? activeTheme === "dark" : true);
    };

    handleScrollAndTheme();
    window.addEventListener("scroll", handleScrollAndTheme, { passive: true });
    window.addEventListener("resize", handleScrollAndTheme, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScrollAndTheme);
      window.removeEventListener("resize", handleScrollAndTheme);
    };
  }, []);

  // Desktop services dropdown animation
  useEffect(() => {
    if (!dropdownRef.current) return;
    if (isServicesOpen) {
      gsap.to(dropdownRef.current, {
        opacity: 1,
        y: 0,
        pointerEvents: "auto",
        duration: 0.25,
        ease: "power2.out",
      });
      gsap.to(chevronRef.current, { rotate: 180, duration: 0.2 });
    } else {
      gsap.to(dropdownRef.current, {
        opacity: 0,
        y: 8,
        pointerEvents: "none",
        duration: 0.2,
        ease: "power2.in",
      });
      gsap.to(chevronRef.current, { rotate: 0, duration: 0.2 });
    }
  }, [isServicesOpen]);

  // Mobile menu open/close animation
  useEffect(() => {
    if (!mobileMenuRef.current) return;
    if (isMobileOpen) {
      gsap.to(mobileMenuRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.35,
        ease: "power3.out",
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.25,
        ease: "power3.in",
      });
    }
  }, [isMobileOpen]);

  // Mobile services accordion animation
  useEffect(() => {
    if (!mobileChevronRef.current) return;
    gsap.to(mobileChevronRef.current, {
      rotate: isMobileServicesOpen ? 180 : 0,
      duration: 0.2,
    });
  }, [isMobileServicesOpen]);

  const openServices = () => {
    clearTimeout(closeTimer.current);
    setIsServicesOpen(true);
  };

  const closeServicesDelayed = () => {
    closeTimer.current = setTimeout(() => setIsServicesOpen(false), 150);
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
    setIsMobileServicesOpen(false);
  };

  const linkClasses = isDarkSection
    ? "text-white/90 hover:text-cyan-300 transition-colors"
    : "text-gray-800 hover:text-brandnd transition-colors";

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 z-50 w-full px-4 pt-4 md:pt-6"
    >
      <div
        className={`container headerSection mx-auto flex items-center justify-between rounded-3xl px-5 py-2.5 transition-all duration-300 md:rounded-full ${
          isDarkSection
            ? "border border-white/20 bg-[#080b14]/80 text-white shadow-2xl shadow-black/50 backdrop-blur-xl"
            : "border border-gray-200/90 bg-white/85 text-gray-900 shadow-lg shadow-gray-900/5 backdrop-blur-xl"
        }`}
      >
        {/* Brand Logo with automatic dark/light inversion */}
        <Link href="/" className="relative z-10 flex items-center gap-2" onClick={closeMobileMenu}>
          <div className="logo h-[46px] w-auto">
            <Image
              src="/astha-creatives-logo-1.png"
              className={`size-full object-contain transition-all duration-300 ${
                isDarkSection
                  ? "brightness-0 invert drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                  : "brightness-100"
              }`}
              alt="Astha Creatives Logo"
              width={70}
              height={70}
              priority
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="menus mr-1 hidden md:block">
          <nav className="navBar">
            <ul className="flex list-none items-center gap-8 text-[16px] font-semibold">
              <li>
                <Link href="/" className={linkClasses}>
                  Home
                </Link>
              </li>

              <li
                className="relative"
                onMouseEnter={openServices}
                onMouseLeave={closeServicesDelayed}
              >
                <button
                  type="button"
                  className={`flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${linkClasses}`}
                  onClick={() => setIsServicesOpen((prev) => !prev)}
                  aria-expanded={isServicesOpen}
                >
                  Services
                  <svg
                    ref={chevronRef}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={isDarkSection ? "stroke-gray-300" : "stroke-gray-600"}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div
                  ref={dropdownRef}
                  className={`absolute left-1/2 top-full mt-3 w-64 -translate-x-1/2 translate-y-2 rounded-2xl border py-2 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-300 ${
                    isDarkSection
                      ? "border-white/15 bg-[#0c101d]/95 text-gray-200"
                      : "border-gray-200/90 bg-white/95 text-gray-900 shadow-xl"
                  }`}
                  style={{ pointerEvents: "none" }}
                >
                  {servicesLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`mx-2 block rounded-xl px-4 py-2.5 text-[14px] font-medium transition-colors ${
                        isDarkSection
                          ? "text-gray-300 hover:bg-white/10 hover:text-cyan-300"
                          : "text-gray-700 hover:bg-gray-100 hover:text-brandnd"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </li>

              <li>
                <Link href="/about" className={linkClasses}>
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className={`inline-flex items-center rounded-full px-5 py-2 text-sm font-bold transition-all duration-200 hover:scale-105 ${
                    isDarkSection
                      ? "bg-gradient-to-r from-brandnd to-cyan-400 text-white shadow-md shadow-cyan-500/25 hover:shadow-cyan-500/45"
                      : "bg-brandnd text-white hover:bg-brand shadow-sm"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className={`relative z-10 flex h-9 w-9 items-center justify-center md:hidden transition-colors cursor-pointer ${
            isDarkSection ? "text-white" : "text-gray-900"
          }`}
          onClick={() => setIsMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isMobileOpen}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {isMobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        ref={mobileMenuRef}
        className={`mt-2 h-0 w-full overflow-hidden rounded-3xl opacity-0 shadow-2xl backdrop-blur-2xl md:hidden transition-colors duration-300 ${
          isDarkSection
            ? "bg-[#0c101d]/95 border border-white/15 text-white"
            : "bg-white/95 border border-gray-200 text-gray-900"
        }`}
      >
        <ul className="flex flex-col gap-1 p-4 text-[17px] font-medium">
          <li>
            <Link
              href="/"
              className={`block py-2 transition-colors ${
                isDarkSection ? "text-gray-200 hover:text-cyan-300" : "text-gray-800 hover:text-brandnd"
              }`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>

          <li>
            <button
              type="button"
              className={`flex w-full items-center justify-between py-2 transition-colors cursor-pointer ${
                isDarkSection ? "text-gray-200 hover:text-cyan-300" : "text-gray-800 hover:text-brandnd"
              }`}
              onClick={() => setIsMobileServicesOpen((prev) => !prev)}
              aria-expanded={isMobileServicesOpen}
            >
              Services
              <svg
                ref={mobileChevronRef}
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={isDarkSection ? "stroke-gray-300" : "stroke-gray-600"}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {isMobileServicesOpen && (
              <ul className="flex flex-col gap-1 py-1 pl-4">
                {servicesLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block py-2 text-[15px] font-normal transition-colors ${
                        isDarkSection ? "text-gray-400 hover:text-cyan-300" : "text-gray-600 hover:text-brandnd"
                      }`}
                      onClick={closeMobileMenu}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link
              href="/about"
              className={`block py-2 transition-colors ${
                isDarkSection ? "text-gray-200 hover:text-cyan-300" : "text-gray-800 hover:text-brandnd"
              }`}
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className={`block py-2 transition-colors ${
                isDarkSection ? "text-cyan-400 font-bold" : "text-brandnd font-bold"
              }`}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
