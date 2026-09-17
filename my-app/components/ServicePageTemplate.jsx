"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Check,
  Minus,
  ChevronDown,
  Sparkles,
  Wrench,
  Layers,
  ShieldCheck,
  HelpCircle,
  ArrowRight,
  ChevronRight,
  Clock,
  Star,
  Award,
  Zap,
} from "lucide-react";
import Button from "@/components/Button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const renderCell = (value) => {
  if (value === true) {
    return <Check className="mx-auto h-5 w-5 text-brand" strokeWidth={2.5} />;
  }
  if (value === false) {
    return <Minus className="mx-auto h-4 w-4 text-gray-300" />;
  }
  return value;
};

const ServicePageTemplate = ({ service }) => {
  const rootRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.fromTo(
        ".service-hero-reveal",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1 },
      );

      // Section scroll reveals
      gsap.utils.toArray(".service-section-reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          },
        );
      });

      // Staggered grid cards
      gsap.utils.toArray(".stagger-card-group").forEach((group) => {
        const cards = group.querySelectorAll(".stagger-card");
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: group, start: "top 85%" },
          },
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, [service]);

  // Generate JSON-LD Schema
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.heroTitle,
    description: service.heroDescription,
    provider: {
      "@type": "Organization",
      name: "Astha Creatives",
      url: "https://www.asthacreatives.com",
    },
    areaServed: "Global",
    serviceType: service.eyebrow,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.eyebrow} Packages`,
      itemListElement: service.tiers?.map((tier, idx) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: tier.name,
          description: tier.description,
        },
        position: idx + 1,
      })),
    },
  };

  const jsonLdFaq = service.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.asthacreatives.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.asthacreatives.com/#offerings",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.eyebrow,
        item: `https://www.asthacreatives.com/services/${service.slug}`,
      },
    ],
  };

  return (
    <div ref={rootRef} className="w-full bg-white font-poppins">
      {/* Inject JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      {jsonLdFaq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* 1. Hero Section */}
      <section className="relative flex min-h-[620px] w-full items-center justify-center overflow-hidden bg-gray-950 py-24 text-white md:py-32">
        {service.heroImage && (
          <Image
            src={service.heroImage}
            alt={service.heroTitle}
            fill
            priority
            className="object-cover opacity-25"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent" />
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-brandnd/20 blur-3xl" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="service-hero-reveal mb-6 flex items-center gap-2 text-xs font-medium text-gray-400"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <Link href="/#offerings" className="hover:text-white transition-colors">
              Services
            </Link>
            <ChevronRight size={12} />
            <span className="text-brandnd">{service.eyebrow}</span>
          </nav>

          {/* Eyebrow badge */}
          <div className="service-hero-reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-brandnd/30 bg-brandnd/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brandnd backdrop-blur-md">
              <Sparkles size={14} />
              {service.eyebrow}
            </span>
          </div>

          {/* H1 Heading */}
          <h1 className="service-hero-reveal mt-4 max-w-4xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {service.heroTitle}
          </h1>

          {/* Subtitle */}
          <p className="service-hero-reveal mt-6 max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl">
            {service.heroDescription}
          </p>

          {/* Dual CTAs */}
          <div className="service-hero-reveal mt-8 flex flex-wrap items-center gap-4">
            <Link href={`/contact?service=${service.slug}`}>
              <Button variant="primary" size="lg">
                Request a Quote
                <ArrowRight size={16} />
              </Button>
            </Link>
            <Link href="#packages">
              <Button variant="outline" size="lg">
                Explore Packages
              </Button>
            </Link>
          </div>

          {/* Trust Stats Badges */}
          {service.stats && service.stats.length > 0 && (
            <div className="service-hero-reveal mt-12 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:grid-cols-3 md:max-w-2xl">
              {service.stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-xl font-black text-brandnd sm:text-2xl">
                    {stat.value}
                  </span>
                  <span className="mt-0.5 text-xs font-medium text-gray-400">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 2. Strategic Context / Problem & Value Thesis */}
      {service.strategicContext && (
        <section className="service-section-reveal relative w-full bg-white py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-widest text-brand">
                  Strategic Foundation
                </span>
                <h2 className="mt-2 text-2xl font-black text-gray-900 sm:text-3xl md:text-4xl">
                  {service.strategicContext.heading}
                </h2>
                <p className="mt-6 text-sm leading-relaxed text-gray-600 sm:text-base">
                  {service.strategicContext.paragraph1}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                  {service.strategicContext.paragraph2}
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-8 shadow-xs">
                  <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                    <Zap className="text-brand" size={18} />
                    What This Delivers For Your Brand:
                  </h3>
                  <ul className="mt-5 space-y-3.5">
                    {service.strategicContext.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700">
                        <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                          <Check size={11} strokeWidth={3} />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. Tools & Technology Stack */}
      {service.toolsStack && service.toolsStack.length > 0 && (
        <section className="service-section-reveal relative w-full bg-gray-50 py-20 md:py-28 border-y border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand">
                <Wrench size={14} />
                Industry-Grade Toolkit
              </span>
              <h2 className="mt-2 text-2xl font-black text-gray-900 sm:text-3xl md:text-4xl">
                Tools & Technologies We Use
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-500 sm:text-base">
                We leverage the world’s leading software, frameworks, and AI workflows to deliver uncompromising precision, scalability, and creative output.
              </p>
            </div>

            <div className="stagger-card-group mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {service.toolsStack.map((tool, idx) => (
                <div
                  key={idx}
                  className="stagger-card group flex flex-col justify-between rounded-2xl border border-gray-200/80 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-brand/5 px-2.5 py-1 text-[11px] font-bold text-brand">
                        {tool.tag}
                      </span>
                      <span className="h-2 w-2 rounded-full bg-brandnd group-hover:animate-ping" />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-brand transition-colors">
                      {tool.name}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-gray-500 sm:text-sm">
                      {tool.purpose}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Step-by-Step Methodology */}
      {service.methodology && service.methodology.length > 0 && (
        <section className="service-section-reveal relative w-full bg-white py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand">
                <Layers size={14} />
                Execution Roadmap
              </span>
              <h2 className="mt-2 text-2xl font-black text-gray-900 sm:text-3xl md:text-4xl">
                Our Step-by-Step Methodology
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-500 sm:text-base">
                From initial discovery to production handoff, our 4-phase structured methodology ensures predictable quality, clear timelines, and zero surprises.
              </p>
            </div>

            <div className="stagger-card-group mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {service.methodology.map((phase) => (
                <div
                  key={phase.step}
                  className="stagger-card relative flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-xs transition-all duration-300 hover:border-brand hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                      <span className="text-2xl font-black text-brand">
                        {phase.step}
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                        Phase
                      </span>
                    </div>
                    <h3 className="mt-4 text-base font-bold text-gray-900">
                      {phase.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-gray-500 sm:text-sm">
                      {phase.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-gray-50 pt-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                      Deliverables:
                    </span>
                    <ul className="mt-2 space-y-1">
                      {phase.deliverables.map((item, i) => (
                        <li key={i} className="flex items-center gap-1.5 text-xs text-gray-600">
                          <span className="h-1 w-1 rounded-full bg-brand" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Quality Assurance & Standards */}
      {service.qualityStandards && service.qualityStandards.length > 0 && (
        <section className="service-section-reveal relative w-full bg-gray-950 py-20 text-white md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brandnd">
                <ShieldCheck size={14} />
                Quality Assurance Framework
              </span>
              <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl md:text-4xl">
                How We Maintain Best Quality
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-400 sm:text-base">
                We enforce rigorous quality checklists across every deliverable before client presentation.
              </p>
            </div>

            <div className="stagger-card-group mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {service.qualityStandards.map((std, idx) => (
                <div
                  key={idx}
                  className="stagger-card flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition-all hover:border-brandnd/50 hover:bg-white/[0.08]"
                >
                  <div>
                    <div className="inline-block rounded-full bg-brandnd/10 px-3 py-1 text-xs font-bold text-brandnd">
                      {std.metric}
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-white">
                      {std.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-gray-400 sm:text-sm">
                      {std.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Pricing Tiers / Packages */}
      {service.tiers && service.tiers.length > 0 && (
        <section id="packages" className="service-section-reveal relative w-full bg-gray-50 py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-brand">
                Transparent Offerings
              </span>
              <h2 className="mt-2 text-2xl font-black text-gray-900 sm:text-3xl md:text-4xl">
                Packages & Pricing Breakdown
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-500 sm:text-base">
                Choose the service tier that matches your current growth trajectory, or request a tailored scope.
              </p>
            </div>

            <div className="stagger-card-group mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {service.tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`stagger-card flex h-full flex-col justify-between rounded-2xl border p-7 sm:p-8 transition-all duration-300 ${
                    tier.highlighted
                      ? "relative border-brand bg-white shadow-xl ring-2 ring-brand/20 -translate-y-1"
                      : "border-gray-200 bg-white shadow-xs hover:border-gray-300 hover:shadow-md"
                  }`}
                >
                  <div>
                    {tier.badge && (
                      <span
                        className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${
                          tier.highlighted
                            ? "bg-brand text-white"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {tier.badge}
                      </span>
                    )}
                    <h3 className="mt-3 text-2xl font-black text-gray-900">
                      {tier.name}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-gray-500 sm:text-sm">
                      {tier.description}
                    </p>

                    <div className="my-6 border-t border-gray-100" />

                    <ul className="space-y-3">
                      {tier.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={2.5} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <Link
                      href={tier.ctaHref}
                      className={`block w-full rounded-xl py-3.5 text-center text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                        tier.highlighted
                          ? "bg-brand text-white hover:bg-brand/90 shadow-md shadow-brand/20"
                          : "bg-gray-900 text-white hover:bg-brand"
                      }`}
                    >
                      {tier.ctaLabel}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. Comparison Table */}
      {service.comparison && service.comparison.rows && (
        <section className="service-section-reveal relative w-full bg-white py-20 md:py-28 border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-black text-gray-900 sm:text-3xl md:text-4xl">
                Side-by-Side Package Comparison
              </h2>
              <p className="mt-3 text-sm text-gray-500">
                Detailed feature matrix across all tiers.
              </p>
            </div>

            <div className="mt-12 overflow-x-auto rounded-2xl border border-gray-200 shadow-xs">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="p-4 text-sm font-bold text-gray-900">
                      Feature / Capability
                    </th>
                    {service.tiers.map((tier) => (
                      <th
                        key={tier.name}
                        className={`p-4 text-center text-sm font-bold ${
                          tier.highlighted ? "text-brand bg-brand/5" : "text-gray-900"
                        }`}
                      >
                        {tier.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {service.comparison.rows.map((row, rIdx) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-gray-100 transition-colors hover:bg-gray-50/50 ${
                        rIdx % 2 === 1 ? "bg-gray-50/30" : ""
                      }`}
                    >
                      <td className="p-4 text-xs font-semibold text-gray-800 sm:text-sm">
                        {row.feature}
                      </td>
                      {row.values.map((val, cIdx) => (
                        <td
                          key={cIdx}
                          className="p-4 text-center text-xs text-gray-600 sm:text-sm"
                        >
                          {renderCell(val)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* 8. Frequently Asked Questions (Accordion UX) */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="service-section-reveal relative w-full bg-gray-50 py-20 md:py-28 border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand">
                <HelpCircle size={14} />
                Got Questions?
              </span>
              <h2 className="mt-2 text-2xl font-black text-gray-900 sm:text-3xl md:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-500 sm:text-base">
                Everything you need to know about our {service.eyebrow} process, timelines, and deliverables.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-3xl space-y-4">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all shadow-xs"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between p-6 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm font-bold text-gray-900 sm:text-base pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-gray-400 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-brand" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="border-t border-gray-100 px-6 pb-6 pt-4 text-xs leading-relaxed text-gray-600 sm:text-sm">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 9. Closing High-Conversion CTA */}
      {service.closingCta && (
        <section className="service-section-reveal relative w-full bg-brand py-20 text-white md:py-28 overflow-hidden">
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-black/20 blur-3xl" />

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
              <div className="max-w-xl">
                <h3 className="text-2xl font-black text-white sm:text-3xl md:text-4xl">
                  {service.closingCta.heading}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
                  {service.closingCta.text}
                </p>
                <Link
                  href={service.closingCta.linkHref}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brandnd hover:underline"
                >
                  {service.closingCta.linkText}
                  <ArrowRight size={13} />
                </Link>
              </div>

              <div className="shrink-0">
                <Link href={service.closingCta.buttonHref}>
                  <Button variant="dark" size="lg" className="shadow-2xl">
                    {service.closingCta.buttonLabel}
                    <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ServicePageTemplate;
