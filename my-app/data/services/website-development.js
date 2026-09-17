import heroImage from "@/images/other/web.jpg";

const websiteDevelopment = {
  slug: "website-development",
  eyebrow: "Website Design, Portfolios & Headless Web Engineering",
  heroImage,
  heroTitle: "High-Performance Websites, Digital Portfolios & Headless Web Applications",
  heroDescription:
    "We build custom, lightning-fast digital ports, spanning bespoke corporate websites, digital portfolio showcases, and visual WordPress/Elementor platforms to enterprise Headless WordPress and Next.js web architectures engineered for conversions, security, and search dominance.",
  hasPackages: false,
  stats: [
    { label: "Lighthouse Performance", value: "95–100 Score" },
    { label: "Core Web Vitals", value: "100% Passed" },
    { label: "Global Edge Latency", value: "< 50ms TTFB" },
    { label: "Technology Spectrum", value: "Next.js / WP / Headless" },
  ],

  strategicContext: {
    heading: "Your Website is Your Brand's Home Port in the Digital Ocean",
    paragraph1:
      "Your website is the central anchor of your digital ecosystem. It is where paid advertising traffic converts, organic search visitors evaluate your capabilities, and prospective clients decide whether to trust you. Whether you need a rapid, beautifully designed WordPress/Elementor website, a bespoke interactive digital portfolio, or an enterprise-grade Headless WordPress web application built with Next.js, we tailor the engineering stack to your exact commercial goals and operational scale.",
    paragraph2:
      "At Astha Creatives, our web engineering practice bridges visual elegance with architectural precision. We offer complete flexibility: from intuitive, visual CMS platforms that non-technical teams can edit with drag-and-drop ease, to decoupled Headless WordPress and Next.js architectures that achieve near-instant sub-50ms load times, zero-vulnerability security, and perfect Google Core Web Vitals scores.",
    keyPoints: [
      "Custom business websites, corporate profiles, and interactive digital portfolio showcases",
      "Modern WordPress & Elementor builds for cost-effective, visual drag-and-drop editing",
      "Bleeding-edge Headless WordPress + Next.js architectures for sub-second speed, bank-grade security, and infinite scalability",
      "Full technical SEO foundation including automated sitemaps, structured JSON-LD schemas, and Core Web Vitals optimization",
    ],
  },

  // 3-Way Architectural Comparison Matrix
  architectureComparison: {
    badge: "Stack Selection Guide",
    heading: "Choosing the Right Web Architecture for Your Brand",
    subheading:
      "We build across the entire modern web spectrum. Compare traditional WordPress, Elementor, and Headless WordPress + Next.js to determine the perfect match for your stage of growth.",
    takeaway:
      "For rapid visual prototyping and smaller budgets, WordPress + Elementor offers intuitive drag-and-drop ease. For brands prioritizing extreme speed, Google search dominance, and enterprise security, Headless WordPress + Next.js is the ultimate high-ROI standard.",
    cards: [
      {
        badge: "Traditional Monolith",
        title: "Classic WordPress",
        description:
          "Standard WordPress using PHP themes and MySQL database queries on every page request.",
        highlighted: false,
        metrics: [
          { label: "Time to First Byte (TTFB)", value: "800ms – 2.5s" },
          { label: "Lighthouse Score", value: "50 – 75 / 100" },
          { label: "Best Suited For", value: "Standard Blogs & Simple Sites" },
          { label: "Content Editing", value: "Native Gutenberg Editor" },
          { label: "Maintenance", value: "Requires Regular Updates" },
        ],
        featuresTitle: "Core Characteristics:",
        features: [
          { type: "positive", text: "Familiar admin dashboard with tens of thousands of available plugins" },
          { type: "negative", text: "Database queries on every page load can slow down concurrent traffic" },
          { type: "warning", text: "Requires active caching plugins to maintain acceptable load speeds" },
        ],
        ctaText: "Discuss Classic WordPress",
        ctaHref: "/contact?subject=classic-wordpress-inquiry",
      },
      {
        badge: "Visual Page Builder",
        title: "WordPress + Elementor",
        description:
          "Visual drag-and-drop design using Elementor Pro for rapid design iterations and non-technical team management.",
        highlighted: false,
        metrics: [
          { label: "Time to First Byte (TTFB)", value: "1.0s – 3.0s" },
          { label: "Lighthouse Score", value: "40 – 70 / 100" },
          { label: "Best Suited For", value: "Rapid MVPs & Visual Control" },
          { label: "Content Editing", value: "Visual Drag-and-Drop" },
          { label: "Customizability", value: "High Visual Flexibility" },
        ],
        featuresTitle: "Core Characteristics:",
        features: [
          { type: "positive", text: "Effortless visual drag-and-drop editing without writing a single line of code" },
          { type: "positive", text: "Fast initial turnaround times for landing pages and promotional sites" },
          { type: "warning", text: "Heavier DOM code generation that requires careful performance optimization" },
        ],
        ctaText: "Discuss Elementor Build",
        ctaHref: "/contact?subject=elementor-website-inquiry",
      },
      {
        badge: "Enterprise Standard",
        title: "Headless WordPress + Next.js",
        description:
          "The Golden Stack: WordPress functions strictly as a backend CMS, while Next.js serves a decoupled React frontend from global edge CDNs.",
        highlighted: true,
        metrics: [
          { label: "Time to First Byte (TTFB)", value: "< 50ms Edge Global" },
          { label: "Lighthouse Score", value: "98 – 100 / 100" },
          { label: "Best Suited For", value: "High-Growth Brands & Enterprises" },
          { label: "Content Editing", value: "Familiar WordPress Admin" },
          { label: "Security & Scale", value: "Bank-Grade Decoupled Edge" },
        ],
        featuresTitle: "The Astha Creatives Advantage:",
        features: [
          { type: "positive", text: "Sub-second instant page loads pre-rendered at CDN edge locations worldwide" },
          { type: "positive", text: "Incremental Static Regeneration (ISR) updates content live in 300ms on publish" },
          { type: "positive", text: "WordPress backend hidden behind private firewall with zero public attack surface" },
          { type: "positive", text: "100% green Core Web Vitals giving you an unfair Google search ranking edge" },
        ],
        ctaText: "Build Headless Next.js",
        ctaHref: "/contact?service=website-design&stack=headless-wordpress",
      },
    ],
  },

  // "How Far Can You Go With Headless WordPress + Next.js?" Deep-Dive Pillars
  deepDivePillars: {
    badge: "The Limitless Combo",
    heading: "How Far Can You Go With Headless WordPress + Next.js?",
    subheading:
      "When your business outgrows standard monolithic builders, decoupling WordPress and Next.js unlocks enterprise-grade speed, security, and omnichannel capabilities.",
    pillars: [
      {
        tag: "Real-Time Publishing",
        title: "Incremental Static Regeneration (ISR)",
        description:
          "Publish in WordPress, live worldwide in 300 milliseconds. Next.js App Router utilizes on-demand revalidation webhooks. When an editor hits 'Update' in WordPress Gutenberg, only that exact page is regenerated in the background at edge CDNs without rebuilding the rest of the site.",
        keyTakeaways: [
          "Zero build queue bottlenecks on multi-thousand page sites",
          "Editors see instant draft previews with one-click preview tokens",
          "Eliminates traditional static site 30-minute deployment delays",
        ],
        stat: { label: "Revalidation Velocity", value: "< 350ms Edge Sync" },
      },
      {
        tag: "Data Precision",
        title: "WPGraphQL & Type-Safe Schema Fetching",
        description:
          "Instead of sluggish REST APIs that dump massive unneeded JSON objects, we implement WPGraphQL. Next.js requests only the exact fields, images, SEO tags, and custom fields needed for each component, reducing API network payload size by up to 90%.",
        keyTakeaways: [
          "Single network roundtrip fetches all page data and relational posts",
          "TypeScript interfaces generated directly from GraphQL schema",
          "Eliminates 90% of WordPress database query load",
        ],
        stat: { label: "Payload Reduction", value: "Up to 90% Less Data" },
      },
      {
        tag: "Enterprise Security",
        title: "Bank-Grade Decoupled Architecture",
        description:
          "By decoupling your site, the public visitor never touches your WordPress server or MySQL database. The WordPress admin is placed on a private subdomain or intranet with IP whitelisting, two-factor authentication, and Cloudflare WAF protection.",
        keyTakeaways: [
          "Public site consists of static React assets with zero executable PHP",
          "Automated SQL injection and brute force WP-login attacks are rendered obsolete",
          "Zero-day plugin vulnerabilities cannot compromise the public website",
        ],
        stat: { label: "Public Attack Surface", value: "Zero Executable PHP" },
      },
      {
        tag: "High-Volume Commerce",
        title: "Headless WooCommerce with Sub-100ms Cart Velocity",
        description:
          "Scale an e-commerce brand without the infamous WooCommerce checkout sluggishness. Manage products, coupons, and orders in WooCommerce while delivering a lightning-fast React shopping cart and Stripe/PayPal checkout that eliminates cart abandonment.",
        keyTakeaways: [
          "Instant client-side cart updates with zero page reloads",
          "Fast faceted product filtering with React state management",
          "Proven 25%–35% lift in mobile checkout completion rates",
        ],
        stat: { label: "Checkout Speed", value: "3x Faster Funnel" },
      },
      {
        tag: "Seamless Modernization",
        title: "Elementor to Next.js Modernization",
        description:
          "Outgrowing Elementor? We extract your content, assets, and design layouts from Elementor into custom, modular React components styled with Tailwind CSS, cutting total page weight from 6MB down to under 250KB while preserving all your search rankings.",
        keyTakeaways: [
          "Complete preservation of all existing SEO URLs and 301 redirects",
          "Replacement of fragile Elementor widgets with rock-solid React components",
          "Immediate elevation to 95+ Google Lighthouse Core Web Vitals",
        ],
        stat: { label: "Page Weight Reduction", value: "95% Lighter DOM" },
      },
      {
        tag: "Omnichannel Scale",
        title: "One Central CMS, Infinite Digital Touchpoints",
        description:
          "Your Headless WordPress instance becomes a universal content hub. The exact same content database simultaneously powers your Next.js web portal, native iOS/Android mobile apps, digital kiosk displays, and email syndication pipelines.",
        keyTakeaways: [
          "Write once, publish everywhere across web, mobile, and digital apps",
          "Independent frontend development without touching backend code",
          "Effortless global localization and multi-currency support",
        ],
        stat: { label: "Publishing Efficiency", value: "1 CMS, N Channels" },
      },
    ],
  },

  // Industry Deployments & Use Cases
  industryUseCases: {
    badge: "Versatile Deployments",
    heading: "Tailored Web Solutions for Every Business Model",
    subheading:
      "From bespoke portfolio showcases and visual Elementor builds to enterprise Headless architectures, explore how we build across diverse commercial needs.",
    cases: [
      {
        industry: "Corporate & Professional Services",
        title: "High-Authority Company Profiles & Portfolios",
        solution:
          "Bespoke digital headquarters showcasing client case studies, executive team bios, and trust credentials with smooth GSAP animations.",
        impact: "+65% Average Session Duration & Elevated Market Prestige",
      },
      {
        industry: "B2B SaaS & Tech Startups",
        title: "High-Converting Next.js Marketing Engine",
        solution:
          "Pixel-perfect landing pages with custom interactive ROI calculators and GSAP animations, paired with a headless blog for daily marketing releases.",
        impact: "+140% Organic Dwell Time & +45% Demo Signups",
      },
      {
        industry: "Growing Brands & Local Leaders",
        title: "Visual WordPress & Elementor Platforms",
        solution:
          "Clean, optimized WordPress websites built with Elementor Pro, providing complete in-house visual control and simple drag-and-drop page editing.",
        impact: "Turnkey Launch in Under 2 Weeks with Full Client Autonomy",
      },
      {
        industry: "E-Commerce & High-Traffic Portals",
        title: "Headless WooCommerce & Editorial Hubs",
        solution:
          "Decoupled Next.js storefronts with instant sub-100ms faceted filtering, zero checkout lag, and resilience under viral traffic spikes.",
        impact: "Zero Downtime Under 500k Visitors & +32% Mobile Conversions",
      },
    ],
  },

  toolsStack: [
    {
      name: "Next.js 15+ & React 19",
      purpose: "Enterprise React framework delivering Server Components (RSC), fast routing, and sub-50ms edge rendering.",
      tag: "Modern Frontend",
    },
    {
      name: "WordPress & Elementor Pro",
      purpose: "The world's leading CMS and visual builder, empowering clients with intuitive visual drag-and-drop content editing.",
      tag: "Visual CMS",
    },
    {
      name: "Headless WordPress & WPGraphQL",
      purpose: "Decoupled content repository providing Gutenberg authoring, structured ACF schemas, and fast GraphQL APIs.",
      tag: "Headless Engine",
    },
    {
      name: "Tailwind CSS & Vanilla CSS",
      purpose: "Utility-first modern styling engine producing zero-runtime, ultra-minified CSS bundles with zero layout shift.",
      tag: "Design System",
    },
    {
      name: "GSAP & ScrollTrigger",
      purpose: "60fps hardware-accelerated kinetic animations, interactive timeline choreography, and magnetic cursor physics.",
      tag: "Animation Engine",
    },
    {
      name: "Vercel Edge & Cloudflare Enterprise",
      purpose: "Global edge CDN mesh with automated SSL, DDoS mitigation, web application firewalls, and sub-100ms latency.",
      tag: "Cloud Infrastructure",
    },
    {
      name: "Advanced Custom Fields (ACF Pro)",
      purpose: "Bespoke flexible content layouts allowing editors to compose custom modular landing pages without touching code.",
      tag: "Data Modeling",
    },
    {
      name: "WooCommerce & Stripe",
      purpose: "Full-cycle e-commerce store architecture, inventory management, customer portals, and secure PCI-compliant checkout.",
      tag: "Commerce Engine",
    },
  ],

  methodology: [
    {
      step: "01",
      title: "Strategic Discovery & Architecture Selection",
      description:
        "We evaluate your business objectives, content management preferences, and scaling requirements to select the ideal stack: custom Next.js, WordPress/Elementor, or Headless WordPress.",
      deliverables: ["Technical Architecture Blueprint", "Sitemap & Information Hierarchy", "CMS Workflow Plan"],
    },
    {
      step: "02",
      title: "Figma UI/UX & Interactive Prototyping",
      description:
        "We design responsive desktop, tablet, and mobile viewports with design tokens, kinetic micro-interactions, and conversion-focused customer journey funnels.",
      deliverables: ["Figma Component Library", "Interactive Desktop & Mobile Prototypes", "Design Token Specs"],
    },
    {
      step: "03",
      title: "Full-Stack Development & CMS Integration",
      description:
        "We write clean, modular code, whether developing custom Next.js React components, configuring Headless WPGraphQL schemas, or building customized Elementor layouts.",
      deliverables: ["Production Web Application", "CMS & Database Integration", "Interactive Animation Suite"],
    },
    {
      step: "04",
      title: "Core Web Vitals Optimization & Launch",
      description:
        "We benchmark Core Web Vitals, implement comprehensive 301 SEO redirects to preserve all rankings, configure DNS with global SSL, and provide personalized team training.",
      deliverables: ["Lighthouse 95+ Audit Certification", "301 SEO Redirect Verification", "Client Handoff Video Training"],
    },
  ],

  qualityStandards: [
    {
      title: "Lighthouse Performance Standard",
      description: "Every website build is audited against Google Lighthouse metrics to guarantee scores between 95 and 100 in Performance, Accessibility, and SEO.",
      metric: "95–100 Across All Benchmarks",
    },
    {
      title: "Core Web Vitals 100% Pass Rate",
      description: "We engineer zero Cumulative Layout Shift (CLS < 0.02), sub-second Largest Contentful Paint (LCP < 1.2s), and instant Interaction to Next Paint (INP < 50ms).",
      metric: "100% Passed on Mobile & Desktop",
    },
    {
      title: "Zero-Downtime SEO Migration",
      description: "Complete preservation of your existing search rankings through automated 301 redirect mapping, XML sitemaps, structured JSON-LD schemas, and canonical tags.",
      metric: "100% URL & Ranking Preservation",
    },
  ],

  faqs: [
    {
      question: "What types of websites do you develop at Astha Creatives?",
      answer:
        "We develop a complete spectrum of web solutions: custom business websites, corporate profile sites, digital portfolio showcases, high-converting product landing pages, visual WordPress/Elementor websites, and enterprise Headless WordPress web applications built with Next.js.",
    },
    {
      question: "When should we choose WordPress/Elementor vs. Next.js or Headless WordPress?",
      answer:
        "If you want a fast, cost-effective website where non-technical staff can visually drag-and-drop text and images freely, WordPress with Elementor is a fantastic solution that we customize to be lean and clean. If your brand requires sub-second load speeds, complex custom animations, high security, or needs to rank at the very top of Google search results, we recommend custom Next.js or Headless WordPress.",
    },
    {
      question: "What is Headless WordPress and how far can we go with the Next.js combo?",
      answer:
        "Headless WordPress is a decoupled architecture where WordPress acts strictly as your backend content editor, while Next.js powers the high-speed frontend. With this combo, you can scale to millions of monthly visitors with sub-50ms TTFB, revalidate updated pages in 300ms via Incremental Static Regeneration (ISR), power headless WooCommerce stores with instant checkout, and isolate your WordPress admin behind a private firewall for bank-grade security.",
    },
    {
      question: "Can our marketing team update the website content themselves?",
      answer:
        "Yes, 100%! Across all our web builds (whether built in WordPress, Elementor, or Headless WordPress), we ensure your content team has an intuitive visual admin dashboard. You can create blog posts, upload media, update case studies, and change copy without writing any code.",
    },
    {
      question: "Can you migrate our existing Elementor website to Next.js or Headless WordPress without losing SEO?",
      answer:
        "Yes, absolutely. We specialize in zero-downtime migrations from Elementor, Divi, and legacy WordPress themes. We extract your content and media, rebuild the design with lightweight React components, and implement strict 1-to-1 301 redirects so your domain authority, backlinks, and search rankings are 100% preserved and accelerated.",
    },
    {
      question: "Do you build e-commerce and WooCommerce stores?",
      answer:
        "Yes. We build both traditional WooCommerce stores with customized checkout funnels and modern Headless WooCommerce architectures powered by Next.js and Stripe, delivering instant client-side cart updates that eliminate checkout lag and boost sales conversions.",
    },
    {
      question: "How long does a website build take from start to finish?",
      answer:
        "A focused conversion landing page typically takes 5–7 business days. A complete corporate website or portfolio built in WordPress/Elementor takes 1–2 weeks. An enterprise custom Next.js or Headless WordPress build takes 2–3 weeks depending on the depth of custom features.",
    },
  ],

  closingCta: {
    heading: "Ready to Build Your Brand's Ultimate Digital Port?",
    text: "Whether you need a custom business website, an Elementor build, or an enterprise Headless Next.js architecture, let's engineer a digital headquarters that drives real growth.",
    linkText: "Schedule a 15-minute technical roadmap call.",
    linkHref: "/contact?subject=web-development-roadmap",
    buttonLabel: "Request Web Development Quote",
    buttonHref: "/contact?service=website-design",
  },
};

export default websiteDevelopment;
