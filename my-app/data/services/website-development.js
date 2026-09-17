import heroImage from "@/images/other/web.jpg";

const websiteDevelopment = {
  slug: "website-development",
  eyebrow: "Website Design & Digital Headquarters",
  heroImage,
  heroTitle: "High-Performance Modern Websites Engineered for Conversions",
  heroDescription:
    "We build custom, lightning-fast digital ports—from modern business portals and portfolio showcases to high-converting landing pages built with Next.js, React, GSAP animations, and world-class SEO.",
  stats: [
    { label: "Lighthouse Performance", value: "95–100 Score" },
    { label: "Core Web Vitals", value: "100% Passed" },
    { label: "Tech Stack", value: "Next.js / GSAP" },
  ],

  strategicContext: {
    heading: "Your Website is Your Brand's Home Port in the Digital Ocean",
    paragraph1:
      "Your website is the single most critical asset in your digital ecosystem. It is where paid advertising traffic lands, organic search visitors evaluate your capabilities, and potential clients decide whether to trust you with their business. Slow loading speeds, broken mobile layouts, and cluttered navigation bleed revenue and destroy ad ROI.",
    paragraph2:
      "At Astha Creatives, we engineer web experiences that merge breathtaking visual aesthetics with engineering rigor. Using modern architectures like Next.js, Server-Side Rendering (SSR), Static Site Generation (SSG), Tailwind CSS, and kinetic GSAP micro-interactions, we ensure your site achieves near-instant load times, flawless responsiveness across all devices, and maximum search engine visibility.",
    keyPoints: [
      "Sub-second page loading speeds powered by Next.js and edge CDN caching",
      "Tailored UI/UX architecture optimized for high user engagement and form conversions",
      "Full technical SEO foundation including automated sitemaps, robots.txt, and OpenGraph meta",
      "Semantic HTML5 structure and WCAG 2.1 AA accessibility compliance",
    ],
  },

  toolsStack: [
    {
      name: "Next.js & React",
      purpose: "Enterprise-grade React framework providing hybrid static & server rendering, fast routing, and SEO mastery.",
      tag: "Core Framework",
    },
    {
      name: "Tailwind CSS & Vanilla CSS",
      purpose: "Utility-first and custom design systems delivering ultra-lean production CSS bundles without layout shift.",
      tag: "Styling & UI",
    },
    {
      name: "GSAP & ScrollTrigger",
      purpose: "High-performance hardware-accelerated animations, scroll reveals, and micro-interactions.",
      tag: "Animation Engine",
    },
    {
      name: "Vercel / AWS CloudFront",
      purpose: "Global edge CDN deployment guaranteeing 99.99% uptime, SSL security, and global sub-100ms latency.",
      tag: "Cloud Infrastructure",
    },
  ],

  methodology: [
    {
      step: "01",
      title: "Information Architecture & Wireframing",
      description:
        "We map out your site's user journeys, sitemap hierarchy, conversion funnels, and wireframes to ensure effortless navigation and strategic content flow.",
      deliverables: ["Interactive Wireframe Prototype", "Sitemap Architecture", "Conversion Funnel Map"],
    },
    {
      step: "02",
      title: "High-Fidelity UI/UX & Interaction Design",
      description:
        "We design high-fidelity desktop and mobile viewports in Figma, incorporating your brand design tokens, kinetic micro-interactions, and visual assets.",
      deliverables: ["Figma Interactive Prototype", "Design System UI Components", "Asset Master Library"],
    },
    {
      step: "03",
      title: "Frontend Engineering & GSAP Choreography",
      description:
        "We write clean, modular React components, integrate GSAP scroll-triggered animations, and wire up contact forms, CRM webhooks, and analytics tracking.",
      deliverables: ["Production Next.js Source Code", "Responsive Layout Engine", "Form & Webhook Integration"],
    },
    {
      step: "04",
      title: "Performance Optimization, SEO & Launch",
      description:
        "We benchmark Core Web Vitals, implement structured JSON-LD schemas, test across iOS/Android/Chrome/Safari, and deploy to your custom domain with SSL.",
      deliverables: ["Lighthouse 95+ Audit Report", "Production Domain Deployment", "CMS & Admin Handoff Video"],
    },
  ],

  qualityStandards: [
    {
      title: "Lighthouse Performance Standard",
      description: "Every website build is audited against Google Lighthouse metrics to guarantee scores above 95 in Performance, Accessibility, and SEO.",
      metric: "95+ Across All Metrics",
    },
    {
      title: "Zero Cumulative Layout Shift (CLS)",
      description: "All media, fonts, and dynamic components are pre-calculated to prevent jarring visual shifts during page rendering.",
      metric: "CLS < 0.05 Benchmark",
    },
    {
      title: "Cross-Browser & Multi-Device Testing",
      description: "Rigorous testing across Safari iOS, Chrome Android, Firefox, Edge, and ultra-wide desktop monitors.",
      metric: "100% Cross-Device Parity",
    },
  ],

  tiers: [
    {
      name: "High-Converting Landing Page",
      badge: "Lead Generator",
      description: "A focused, ultra-fast single-page web experience designed specifically to convert paid advertising or product launch traffic.",
      features: [
        "1 Custom Multi-Section Landing Page",
        "Conversion-Focused Hero & Value Proposition",
        "Product / Service Feature Breakdown",
        "Client Testimonial & Social Proof Section",
        "Lead Capture Form with Email / CRM Routing",
        "Interactive GSAP Scroll Entrance Animations",
        "Complete Technical SEO & OpenGraph Setup",
        "Mobile-First Responsive Layout (iOS/Android)",
        "Turnaround in 5–7 Business Days",
      ],
      ctaLabel: "Get Landing Page Quote",
      ctaHref: "/contact?service=website-design&package=landing-page",
    },
    {
      name: "Full Company Portal & Portfolio",
      badge: "Most Popular",
      highlighted: true,
      description: "A comprehensive multi-page corporate website or digital portfolio built to showcase authority, services, and case studies.",
      features: [
        "Up to 6 Bespoke Pages (Home, About, Services, Portfolio, Blog, Contact)",
        "Dynamic Portfolio Case Study Showcase",
        "Filterable Service & Package Modules",
        "Interactive GSAP Choreography & Micro-Animations",
        "Interactive Contact & Lead Booking Funnels",
        "Full On-Page & Technical SEO Optimization",
        "Dynamic XML Sitemap & Robots.txt Config",
        "Google Analytics 4 & Meta Pixel Integration",
        "30 Days of Post-Launch Warranty & Support",
      ],
      ctaLabel: "Get Portal Quote",
      ctaHref: "/contact?service=website-design&package=corporate-portal",
    },
    {
      name: "Custom Enterprise Web Platform",
      badge: "Bespoke Scale",
      description: "For established enterprises requiring complex headless CMS integrations, dynamic databases, multi-language support, and custom APIs.",
      features: [
        "Unlimited Custom Pages & Content Types",
        "Headless CMS Integration (Sanity / Strapi / WordPress)",
        "Dynamic Database & Custom REST/GraphQL API Hooks",
        "Multi-Language / Localization Architecture",
        "Advanced WebGL / 3D Canvas / Complex GSAP Timelines",
        "Enterprise Security, RBAC & SOC-2 Compliance Ready",
        "High-Concurrency Edge CDN & Cloud Architecture",
        "Full Source Code Git Repository Ownership",
        "Dedicated Senior Solutions Architect & SLA Support",
      ],
      ctaLabel: "Get Enterprise Quote",
      ctaHref: "/contact?service=website-design&package=enterprise-platform",
    },
  ],

  comparison: {
    rows: [
      { feature: "Page Scope", values: ["1 Single Page", "Up to 6 Pages", "Unlimited Custom Pages"] },
      { feature: "Mobile-First Responsive Design", values: [true, true, true] },
      { feature: "GSAP Animation Choreography", values: ["Standard Animations", "Advanced ScrollTrigger", "Complex Kinetic / WebGL"] },
      { feature: "Lead Capture & Form Automation", values: [true, true, true] },
      { feature: "Portfolio & Case Study System", values: [false, true, true] },
      { feature: "Headless CMS Integration", values: [false, "Optional Add-on", true] },
      { feature: "Multi-Language Localization", values: [false, false, true] },
      { feature: "Core Web Vitals 95+ Guarantee", values: [true, true, true] },
      { feature: "Post-Launch Warranty Support", values: ["14 Days", "30 Days", "90 Days Dedicated SLA"] },
      { feature: "Full Source Code Ownership", values: [true, true, true] },
    ],
  },

  faqs: [
    {
      question: "Why do you use Next.js and React instead of standard WordPress?",
      answer:
        "Next.js delivers significant performance, security, and scalability advantages over traditional WordPress. With server-side rendering and static pre-rendering, Next.js sites load in milliseconds, have zero plugin vulnerability security risks, achieve perfect Google Lighthouse scores, and provide effortless custom animation capabilities via GSAP.",
    },
    {
      question: "Can I update the content on the website myself after launch?",
      answer:
        "Yes! For clients who require regular content updates (e.g., publishing blog posts, new case studies, team members), we integrate modern Headless CMS solutions like Sanity, Strapi, or Headless WordPress, giving you an intuitive visual admin dashboard.",
    },
    {
      question: "How long does a full website build take from start to finish?",
      answer:
        "A high-converting landing page takes 5–7 business days, a standard multi-page corporate website takes 2–3 weeks, and an enterprise web platform takes 4–6 weeks, depending on scope and feature complexity.",
    },
    {
      question: "Will our new website be optimized for mobile phones and tablets?",
      answer:
        "100%. We employ a strict mobile-first design and engineering process. Every component is rigorously tested across iPhones, iPads, Android smartphones, laptops, and 4K desktop screens.",
    },
  ],

  closingCta: {
    heading: "Establish Your Brand's Digital Port With Confidence",
    text: "Stop losing valuable leads to slow, outdated websites. Let's engineer a fast, modern digital headquarters.",
    linkText: "Schedule a 15-minute technical roadmap call.",
    linkHref: "/contact?subject=web-development-inquiry",
    buttonLabel: "Request Web Development Quote",
    buttonHref: "/contact?service=website-design",
  },
};

export default websiteDevelopment;
