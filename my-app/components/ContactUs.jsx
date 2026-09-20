"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { MapPin, Mail, Phone, Send, ArrowRight, Share2 } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// 1. Import the server action using your root alias
import { sendContactEmail } from "@/app/contact/actions";

export default function ContactUs() {
  const containerRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".hero-text",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" },
      );
      tl.fromTo(
        ".contact-element",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" },
        "-=0.4",
      );
    },
    { scope: containerRef },
  );

  // 2. The new submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Extract all data from inputs with a 'name' attribute
    const formData = new FormData(e.currentTarget);

    // Send it to the server action
    const result = await sendContactEmail(formData);

    if (result.success) {
      setSubmitStatus("success");
      e.target.reset();
    } else {
      setSubmitStatus("error");
      console.error(result.error);
    }

    setIsSubmitting(false);
  };

  return (
    <div
      ref={containerRef}
      data-theme="dark"
      className="bg-gray-950 min-h-screen text-white selection:bg-brand selection:text-white pb-24"
    >
      {/* --- HERO SECTION KEEPS EXACTLY AS IS --- */}
      <div className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/smoke-bg-astha-hero.png"
            alt="Dark smoke background"
            fill
            className="object-cover opacity-40 mix-blend-screen"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 via-gray-950/80 to-gray-950" />
        </div>

        <div className="relative z-10 text-center max-w-3xl px-4 mt-16">
          <h1 className="hero-text text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Contact Us
          </h1>
          <h3 className="hero-text text-xl md:text-2xl font-medium text-gray-300 mb-4">
            Contact for Premium Business Services
          </h3>
          <p className="hero-text text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            We believe smart work begins with listening. Before diving into
            execution, we take the time to understand your vision, goals, and
            expectations.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-20 -mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-7 contact-element">
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl">
              <h2 className="text-3xl font-semibold mb-8">
                Request Free Consultation
              </h2>

              {/* 3. Form is attached to handleSubmit */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 pl-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="userName" // Added name attribute
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 pl-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="userEmail" // Added name attribute
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                      placeholder="name@gmail.com"
                    />
                  </div>
                </div>

                {/* Honeypot field */}
                <div className="absolute left-[-9999px]" aria-hidden="true">
                  <input
                    type="text"
                    name="company_website_url" // Bots love this, autofill usually ignores it
                    tabIndex="-1"
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 pl-1">
                      Organization Name
                    </label>
                    <input
                      type="text"
                      name="userOrganization"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                      placeholder="Your Company / Organization"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 pl-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="userPhone" // Added name attribute
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                      placeholder="+880 1XXX XXXXXX"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400 pl-1">
                    Your Message
                  </label>
                  <textarea
                    name="userMessage" // Added name attribute
                    required
                    rows="5"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex items-center justify-center gap-2 w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && (
                      <Send
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    )}
                  </button>

                  {/* 4. Status Messages */}
                  {submitStatus === "success" && (
                    <span className="text-green-400 text-sm">
                      Message sent!
                    </span>
                  )}
                  {submitStatus === "error" && (
                    <span className="text-red-400 text-sm">
                      Failed to send message.
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* --- CONTACT INFO KEEPS EXACTLY AS IS --- */}
          <div className="lg:col-span-5 flex flex-col gap-6 contact-element">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col gap-8 h-full">
              <h3 className="text-2xl font-semibold mb-2">Get In Touch</h3>
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Reach Us</p>
                  <p className="text-gray-200">
                    Road 12, Sector 03, Uttara, Dhaka
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email Us</p>
                  <a
                    href="mailto:contact@redmun.com"
                    className="text-gray-200 hover:text-blue-400 transition-colors"
                  >
                    contact@redmun.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Call Us</p>
                  <div className="flex flex-col gap-1">
                    <a
                      href="tel:+8801711994608"
                      className="text-gray-200 hover:text-blue-400 transition-colors"
                    >
                      +880 1711 994608
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <Share2 size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Follow Us</p>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <a
                      href="https://www.facebook.com/asthacreative"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-200 hover:text-white hover:bg-blue-600/30 transition-all bg-white/5 px-3 py-1.5 rounded-full border border-white/10"
                    >
                      <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                        <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                      </svg>
                      Facebook
                    </a>
                    <a
                      href="https://www.instagram.com/asthacreatives"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-200 hover:text-white hover:bg-pink-600/30 transition-all bg-white/5 px-3 py-1.5 rounded-full border border-white/10"
                    >
                      <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 relative overflow-hidden group cursor-pointer">
              <div className="relative z-10 flex flex-col justify-between h-full min-h-[160px]">
                <div>
                  <p className="text-blue-200 text-sm font-medium uppercase tracking-wider mb-2">
                    Make a Call
                  </p>
                  <h4 className="text-3xl font-bold text-white">
                    +880 1711 994608
                  </h4>
                </div>
                <div className="flex items-center gap-2 text-white font-medium mt-6 group-hover:gap-4 transition-all">
                  Call us right now <ArrowRight size={20} />
                </div>
              </div>
              <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
